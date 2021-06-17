import React, { Component } from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import AppHeader from '../../appComponents/AppHeader';
import CustomButton from '../../components/CustomButton';
import CustomStatusBar from '../../components/CustomStatusBar';
import Text from '../../components/CustomText';
import { randomBooks, randomProfilePictues, randomThumnail } from '../../constants/LocalAssets';
import FakeData from '../../helper/FakeData';
import genericFunctions from '../../helper/genericFunctions';
import { IMLocalized } from '../../locales/IMLocalization';
import ROUTES from '../../routes/ROUTES';
import GV from '../../utils/GV';
import { saleStyles, styles, videoItemStyles, saleItemStyles } from './styles';
//end of IMPORT's

const STATIC_VIDEO_DATA = [{
    id: FakeData.guid(),
    thumbnail: randomThumnail(),
    videoUrl: ``,
}, {
    id: FakeData.guid(),
    thumbnail: randomThumnail(),
    videoUrl: ``,
}, {
    id: FakeData.guid(),
    thumbnail: randomThumnail(),
    videoUrl: ``,
}, {
    id: FakeData.guid(),
    thumbnail: randomThumnail(),
    videoUrl: ``,
}, {
    id: FakeData.guid(),
    thumbnail: randomThumnail(),
    videoUrl: ``,
}, {
    id: FakeData.guid(),
    thumbnail: randomThumnail(),
    videoUrl: ``,
}];

const STATIC_SALE_DATA = [{
    id: FakeData.guid(),
    title: FakeData.bookName(),
    description: FakeData.description(),
    price: FakeData.getInt(10, 1000),
    quantity: FakeData.getInt(0, 100),
    image: randomBooks(),
}, {
    id: FakeData.guid(),
    title: FakeData.bookName(),
    description: FakeData.description(),
    price: FakeData.getInt(10, 1000),
    quantity: FakeData.getInt(0, 100),
    image: randomBooks(),
}, {
    id: FakeData.guid(),
    title: FakeData.bookName(),
    description: FakeData.description(),
    price: FakeData.getInt(10, 1000),
    quantity: FakeData.getInt(0, 100),
    image: randomBooks(),
}]

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                id: FakeData.guid(),
                name: FakeData.name(),
                image: randomProfilePictues(),
                type: 'Ophthalmologists',
            },

            videoData: STATIC_VIDEO_DATA,
            saleData: STATIC_SALE_DATA,
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
        this.props.navigation.pop() && this.props.navigation.goBack();
    }//end of BACK PRESS

    render = () => {
        const { userData, videoData, saleData } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />

                {/* ******************** HEADER Start ******************** */}
                <AppHeader
                    title={IMLocalized(`Doctor Profile`)}
                    rightClose
                    rightClosePress={this.backPress}
                />
                {/* ******************** HEADER End ******************** */}
                <ScrollView>


                    {/* ******************** PROFILE PICTURE Start ******************** */}
                    <View style={styles.profilePictureContainer}>
                        <FastImage
                            source={userData.image}
                            style={styles.profilePicture}
                            resizeMode={FastImage.resizeMode.contain} />
                    </View>

                    {/* ******************** PROFILE PICTURE End ******************** */}

                    {/* ******************** USER NAME Start ******************** */}
                    <View style={styles.userNameContainer}>
                        <Text style={styles.userName}>{userData.name}</Text>
                        <Text style={styles.userType}>{userData.type}</Text>
                    </View>

                    {/* ******************** USER NAME End ******************** */}

                    {/* ******************** SEPERATOR Start ******************** */}
                    <View style={styles.seperator} />

                    {/* ******************** SEPERATOR End ******************** */}

                    {/* ******************** TESTIMONIAL VIDEO's Start ******************** */}
                    <View style={styles.testimonialVideoPrimaryContainer}>
                        <Text style={styles.testimonialVideoHeading}>
                            {IMLocalized(`Testimonial videos`)}
                        </Text>

                        <FlatList
                            horizontal
                            contentContainerStyle={styles.testimonialVideoDataContentContainer}
                            data={videoData}
                            renderItem={this._renderVideoItem} />
                    </View>


                    {/* ******************** TESTIMONIAL VIDEO's End ******************** */}

                    {/* ******************** SEPERATOR Start ******************** */}
                    <View style={styles.seperator} />

                    {/* ******************** SEPERATOR End ******************** */}

                    {/* ******************** SALES ITEM Start ******************** */}
                    <View style={saleStyles.primaryContainer}>
                        <Text style={saleStyles.heading}>
                            {IMLocalized(`Sale Items`)}
                        </Text>

                        <FlatList
                            scrollEnabled={false}
                            numColumns={2}
                            contentContainerStyle={saleStyles.contentContainer}
                            data={saleData}
                            renderItem={this._renderSaleItems} />
                    </View>

                    {/* ******************** SALES ITEM End ******************** */}

                </ScrollView>

                {/* ******************** SUBMIT REPORT BUTTON Start ******************** */}
                <View style={styles.submitReportButtonContainer}>
                    <CustomButton
                        title={IMLocalized(`Submit Report`)}
                        buttonStyle={styles.submitReportButton}
                        onPress={this.submitReportPress} />
                </View>

                {/* ******************** SUBMIT REPORT BUTTON End ******************** */}
            </View>
        );
    }//end of RENDER

    submitReportPress = () => {
        this.props.navigation.navigate(ROUTES.HealthReport);
    }//end of submitReportPress

    onSaleItemPress = (item, index) => {
        this.props.navigation.navigate(ROUTES.DoctorSaleItemDetail, {
            saleItem: item,
            saleIndex: index,
        })
    }//end of onSaleItemPress

    _renderSaleItems = ({ item, index }) => {
        return (
            <TouchableOpacity style={saleItemStyles.primaryContainer}
                onPress={() => { this.onSaleItemPress(item, index) }}>
                <FastImage
                    source={item.image}
                    resizeMode={FastImage.resizeMode.cover}
                    style={saleItemStyles.image} />
            </TouchableOpacity>
        )
    }//end of _renderSaleItems

    _renderVideoItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={videoItemStyles.primaryContainer}>
                <FastImage
                    source={item.thumbnail}
                    resizeMode={FastImage.resizeMode.cover}
                    style={videoItemStyles.thumbnail} />

            </TouchableOpacity>
        )
    }//end of _renderVideoItem

}//end of CLASSS index