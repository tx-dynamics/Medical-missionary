import React, { Component } from 'react';
import { TouchableOpacity, View, FlatList } from 'react-native';
import { styles, videoItemStyles, reviewItemStyles, saleItemStyles, saleStyles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import FastImage from 'react-native-fast-image';
import LocalAssets, { randomThumnail, randomProfilePictues, randomBooks } from '../../constants/LocalAssets';
import { IMLocalized } from '../../locales/IMLocalization';
import CustomIcon from '../../components/CustomIcon';
import CustomTextInput from '../../components/CustomTextInput';
import colors from '../../constants/colors';
import K from '../../constants/K';
import AppHeader from '../../appComponents/AppHeader';
import genericFunctions from '../../helper/genericFunctions';
import CustomButton from '../../components/CustomButton';
import { Rating } from 'react-native-ratings';
import ROUTES from '../../routes/ROUTES';
import GV from '../../utils/GV';
import FakeData from '../../helper/FakeData';
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
}]

const STATIC_REVIEW_DATA = [{
    id: FakeData.guid(),
    username: FakeData.username(),
    count: FakeData.getInt(1, 5),
    review: FakeData.review(),
    userImage: randomProfilePictues(),
}, {
    id: FakeData.guid(),
    username: FakeData.username(),
    count: FakeData.getInt(1, 5),
    review: FakeData.review(),
    userImage: randomProfilePictues(),
}, {
    id: FakeData.guid(),
    username: FakeData.username(),
    count: FakeData.getInt(1, 5),
    review: FakeData.review(),
    userImage: randomProfilePictues(),
}]

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
                name: genericFunctions.randomNameGenerator(),
                image: randomProfilePictues(),
            },

            videoData: STATIC_VIDEO_DATA,
            reviewData: STATIC_REVIEW_DATA,
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
        const { userData, videoData, reviewData, saleData } = this.state;
        const isDoctor = GV.isDoctor;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />

                {/* ******************** HEADER Start ******************** */}
                <AppHeader
                    title={IMLocalized(`Profile`)}
                    titleRight
                    titleRightPress={() => { this.props.navigation.navigate(ROUTES.EditProfile) }}
                />
                {/* ******************** HEADER End ******************** */}

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
                </View>

                {/* ******************** USER NAME End ******************** */}

                {/* ******************** SEPERATOR Start ******************** */}
                <View style={styles.seperator} />

                {/* ******************** SEPERATOR End ******************** */}

                {/* ******************** TESTIMONIAL VIDEO's Start ******************** */}
                {isDoctor ?
                    <View style={styles.testimonialVideoPrimaryContainer}>
                        <Text style={styles.testimonialVideoHeading}>
                            {IMLocalized(`Testimonial videos`)}
                        </Text>

                        <FlatList
                            horizontal
                            contentContainerStyle={styles.testimonialVideoDataContentContainer}
                            data={videoData}
                            renderItem={this._renderVideoItem} />


                        <CustomButton
                            title={IMLocalized(`Upload`)}
                            buttonStyle={styles.testimonialVideoButton} />

                    </View>
                    :
                    <View style={styles.buyItemPrimaryContainer}>
                        <Text style={styles.buyItemHeading}>{IMLocalized(`Buy Items`)}</Text>
                        <FlatList
                            numColumns={2}
                            contentContainerStyle={saleStyles.contentContainer}
                            data={saleData}
                            renderItem={this._renderSaleItems} />

                    </View>
                }

                {/* ******************** TESTIMONIAL VIDEO's End ******************** */}

                {/* ******************** SEPERATOR Start ******************** */}
                {isDoctor &&
                    <View style={styles.seperator} />
                }

                {/* ******************** SEPERATOR End ******************** */}

                {/* ******************** REVIEW Start ******************** */}
                {isDoctor &&
                    <>
                        <View style={styles.reviewTextContainer}>
                            <Text style={styles.reviewText}>{IMLocalized(`Reviews`)}</Text>
                        </View>
                        <FlatList
                            data={reviewData}
                            renderItem={this._renderReviewItem} />
                    </>
                }

                {/* ******************** REVIEW End ******************** */}

            </View>
        );
    }//end of RENDER

    _renderSaleItems = ({ item, index }) => {
        return (
            <View style={saleItemStyles.primaryContainer}>
                <FastImage
                    source={item.image}
                    resizeMode={FastImage.resizeMode.cover}
                    style={saleItemStyles.image} />
            </View>
        )
    }//end of _renderSaleItems

    _renderReviewItem = ({ item, index }) => {
        return (
            <View style={reviewItemStyles.primaryContainer}>

                {/* ******************** USER NAME & RATING Start ******************** */}
                <View style={reviewItemStyles.usernameRatingContainer}>
                    <Text style={reviewItemStyles.username}>{item.username}</Text>
                    <Rating
                        type='star'
                        ratingCount={5}
                        imageSize={20}
                        startingValue={item.count}
                        readonly
                        style={reviewItemStyles.rating}
                    />
                </View>

                {/* ******************** USER NAME & RATING End ******************** */}
                <Text style={reviewItemStyles.review}>{item.review}</Text>

            </View>
        )
    }//end of _renderReviewItem

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