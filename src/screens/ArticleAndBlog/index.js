import React, { Component } from 'react';
import { FlatList, View, } from 'react-native';
import { styles, itemStyles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppHeader from '../../appComponents/AppHeader';
import { IMLocalized } from '../../locales/IMLocalization';
import FastImage from 'react-native-fast-image';
import genericFunctions from '../../helper/genericFunctions';
import { randomProfilePictues, randomThumnail } from '../../constants/LocalAssets';
import CustomButton from '../../components/CustomButton';
import ROUTES from '../../routes/ROUTES';
import GV from '../../utils/GV';
//end of IMPORT's

const STATIC_DATA = [{
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    userImage: randomProfilePictues(),
    dated: new Date(),
    type: IMLocalized(`Ophthalmologists`),
    title: genericFunctions.generateRandomTitle(),
    description: genericFunctions.randomDescriptionGenerator(),
    image: randomThumnail(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    userImage: randomProfilePictues(),
    dated: new Date(),
    type: IMLocalized(`Dermatologists`),
    title: genericFunctions.generateRandomTitle(),
    description: genericFunctions.randomDescriptionGenerator(),
    image: randomThumnail(),
}]

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: STATIC_DATA,
            metadata: false,

        };//end of INITIALIZING STATE's
    }//end of CONSTRUCTOR

    componentDidMount = async () => {
        this.load();

    }//end of COMPONENT_DID_MOUNT

    componentWillUnmount = async () => {
    }//end of COMPONENT_WILL_UNMOUNT

    load = () => {

    }//end of LOAD FUNCTION

    backPress = () => {
        this.props.navigation.goBack();
    }//end of BACK PRESS

    render = () => {
        const { data, metadata } = this.state;
        const isArticle = this.props.route.params.isArticle;

        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />
                <AppHeader
                    title={isArticle ? IMLocalized(`Articles`) : IMLocalized(`Blogs`)}
                    rightClose
                    rightClosePress={this.backPress}
                    titleRightCustomVisible={GV.isDoctor}
                    titleRightCustom={() => {
                        return (
                            <View style={styles.titleRightCotainer}>
                                <CustomButton
                                    onPress={() => this.props.navigation.navigate(ROUTES.CreateArticleAndBlog, { isArticle })}
                                    title={IMLocalized(`Create New`)}
                                    buttonStyle={styles.titleRightButton}
                                    textStyle={styles.titleRightButtonText} />
                            </View>
                        )
                    }} />

                <FlatList
                    data={data}
                    extraData={metadata}
                    renderItem={this._renderItem} />
            </View>
        );
    }//end of RENDER

    _renderItem = ({ item, index }) => {
        const isArticle = this.props.route.params.isArticle;

        return (
            <View style={itemStyles.primaryContainer}>

                {/* ******************** USER NAME IMAGE DATE Start ******************** */}
                <View style={itemStyles.userProfilePrimaryContainer}>
                    <FastImage
                        source={item.userImage}
                        style={itemStyles.profileImage}
                        resizeMode={FastImage.resizeMode.cover} />
                    <View style={itemStyles.userNameTypeContainer}>
                        <Text style={itemStyles.name}>{item.name}</Text>
                        <Text style={itemStyles.type}>{item.type}</Text>
                    </View>

                    <View style={itemStyles.dateContainer}>
                        <Text style={itemStyles.date}>{item.dated.toLocaleDateString()}</Text>
                    </View>
                </View>

                {/* ******************** USER NAME IMAGE DATE End ******************** */}

                {/* ******************** TITLE Start ******************** */}
                <Text style={itemStyles.title}>{item.title}</Text>

                {/* ******************** TITLE End ******************** */}

                {/* ******************** IMAGE Start ******************** */}
                <FastImage
                    source={item.image}
                    resizeMode={FastImage.resizeMode.cover}
                    style={itemStyles.image} />

                {/* ******************** IMAGE End ******************** */}

                {/* ******************** DESCRIPTION Start ******************** */}
                <Text style={itemStyles.description}>{item.description}</Text>

                {/* ******************** DESCRIPTION End ******************** */}
                <View style={itemStyles.seperator} />

            </View>
        )
    }//end of _renderItem

}//end of CLASSS index