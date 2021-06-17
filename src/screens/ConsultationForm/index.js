import React, { Component } from 'react';
import { Platform, View, FlatList } from 'react-native';
import { styles, itemStyles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppHeader from '../../appComponents/AppHeader';
import { IMLocalized } from '../../locales/IMLocalization';
import genericFunctions from '../../helper/genericFunctions';
import { randomProfilePictues } from '../../constants/LocalAssets';
import FastImage from 'react-native-fast-image';
import CustomButton from '../../components/CustomButton';
import ROUTES from '../../routes/ROUTES';
//end of IMPORT's
const staticData = [{
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomNameGenerator()}${genericFunctions.getRandomInt(1, 1000)}`,
    email: 'aliaskhan@email.com',
    image: randomProfilePictues(),
}]

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: staticData,
            metaData: false,
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
        const { data, metaData } = this.state;

        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />
                <AppHeader
                    title={IMLocalized(`Consultation Form`)}
                    rightClose
                    rightClosePress={this.backPress} />

                <FlatList
                    contentInset={{ right: 0, top: 0, left: 0, bottom: 20 }}
                    style={{ flex: 1 }}
                    contentContainerStyle={{
                        ...styles.contentContainerStyle,
                        paddingBottom: Platform.OS === "ios" ? 0 : 20
                    }}
                    ItemSeparatorComponent={() => { return (<View style={styles.flatListSeperator} />) }}
                    data={data}
                    extraData={metaData}
                    renderItem={this._renderItem} />

            </View>
        );
    }//end of RENDER

    _renderItem = ({ item, index }) => {
        return (
            <View style={itemStyles.container}>
                {/* ******************** PROFILE PICTURE Start ******************** */}
                <FastImage
                    style={itemStyles.profilePicture}
                    source={item.image}
                    resizeMode={FastImage.resizeMode.contain}
                />

                {/* ******************** PROFILE PICTURE End ******************** */}

                {/* ******************** NAME & USERNAME Start ******************** */}
                <View style={itemStyles.nameUsernameContainer}>
                    <Text style={itemStyles.name}>{item.name}</Text>
                </View>

                {/* ******************** NAME & USERNAME End ******************** */}

                {/* ******************** VIEW BUTTON Start ******************** */}
                <View style={itemStyles.viewButtonContainer}>
                    <CustomButton
                        onPress={this.viewButtonPress}
                        title={IMLocalized(`View`)}
                        buttonStyle={itemStyles.viewButton}
                        textStyle={itemStyles.viewButtonText}
                    />
                </View>

                {/* ******************** VIEW BUTTON End ******************** */}

            </View>
        )
    }//end of _renderItem

    viewButtonPress = () => {
        this.props.navigation.navigate(ROUTES.ViewConsultationForm);
    }//end of viewButtonPress


}//end of CLASSS index