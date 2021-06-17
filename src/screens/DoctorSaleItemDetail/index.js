import React, { Component } from 'react';
import { FlatList, ScrollView, View, } from 'react-native';
import { styles, reviewItemStyles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppHeader from '../../appComponents/AppHeader';
import { IMLocalized } from '../../locales/IMLocalization';
import OrderCard from '../Orders/OrderCard';
import FastImage from 'react-native-fast-image';
import CustomIcon from '../../components/CustomIcon';
import FakeData from '../../helper/FakeData';
import { Rating } from 'react-native-ratings';
import { randomProfilePictues } from '../../constants/LocalAssets';
import CustomButton from '../../components/CustomButton';
import ROUTES from '../../routes/ROUTES';
//end of IMPORT's

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

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewData: STATIC_REVIEW_DATA
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
        const { reviewData } = this.state;
        let data = null;
        if (this.props.route.params !== undefined) {
            const navigationParams = this.props.route.params;
            data = navigationParams.saleItem;
        }

        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />
                <AppHeader
                    title={IMLocalized(`Sale Item`)}
                    menu={false}
                    leftClose
                    leftClosePress={this.backPress} />

                <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                    {/* ******************** BOOK COVER Start ******************** */}
                    {data !== null &&
                        <FastImage
                            source={data.image}
                            style={styles.bookCoverImage}
                            resizeMode={FastImage.resizeMode.stretch} />
                    }

                    {/* ******************** BOOK COVER End ******************** */}

                    {/* ******************** PRICE & QUANTITY Start ******************** */}
                    <View style={styles.priceQuantityContainer}>
                        {/* ******************** PRICE Start ******************** */}
                        {data !== null &&
                            <View style={styles.textValueContainer}>
                                <Text style={styles.priceText}>{IMLocalized(`Price:`)}</Text>
                                <Text style={styles.priceValue}>${data.price}</Text>
                            </View>
                        }

                        {/* ******************** PRICE End ******************** */}

                        {/* ******************** QUANTITY Start ******************** */}
                        {data !== null &&
                            <View style={styles.quantityContainer}>
                                <Text style={styles.quantityText}>{IMLocalized(`Quantity:`)}</Text>

                                {/* ******************** PLUS Start ******************** */}
                                <View style={styles.plusMinusContainer}>
                                    <CustomIcon
                                        size={14}
                                        style={styles.plusMinusIcon}
                                        iconType="MaterialIcons"
                                        name="arrow-back-ios" />
                                </View>

                                {/* ******************** PLUS End ******************** */}
                                <Text style={styles.quantityValue}>{data.quantity}</Text>

                                {/* ******************** MINUS Start ******************** */}
                                <View style={styles.plusMinusContainer}>
                                    <CustomIcon
                                        size={14}
                                        style={styles.plusMinusIcon}
                                        iconType="MaterialIcons"
                                        name="arrow-forward-ios" />
                                </View>

                                {/* ******************** MINUS End ******************** */}
                            </View>
                        }

                        {/* ******************** QUANTITY End ******************** */}
                    </View>
                    {/* ******************** PRICE & QUANTITY End ******************** */}

                    {/* ******************** TITLE Start ******************** */}
                    {data !== null &&
                        <View style={styles.textValueContainer}>
                            <Text style={styles.titleText}>{IMLocalized(`Title:`)}</Text>
                            <Text style={styles.titleValue}>{data.title}</Text>
                        </View>
                    }

                    {/* ******************** TITLE End ******************** */}

                    {/* ******************** DESCRIPTION Start ******************** */}
                    {data !== null &&
                        <View style={styles.textValueContainer}>
                            <Text style={styles.descriptionText}>{IMLocalized(`Description:`)}</Text>
                            <Text style={styles.descriptionValue}>{data.description}</Text>
                        </View>
                    }

                    {/* ******************** DESCRIPTION End ******************** */}

                    {/* ******************** REVIEW Start ******************** */}
                    <View style={styles.reviewTextContainer}>
                        <Text style={styles.reviewText}>{IMLocalized(`Reviews`)}</Text>
                    </View>
                    {reviewData.map((item, index) => {
                        return this._renderReviewItem(item, index)
                    })}

                    {/* ******************** REVIEW End ******************** */}

                </ScrollView>

                {/* ******************** BUY BUTTON Start ******************** */}
                <View style={styles.buyButtonContainer}>
                    <CustomButton
                        title={IMLocalized(`Buy`)}
                        buttonStyle={styles.buyButton}
                        onPress={this.buyButtonPress} />
                </View>

                {/* ******************** BUY BUTTON End ******************** */}
            </View>
        );
    }//end of RENDER

    buyButtonPress = () => {
        this.props.navigation.navigate(ROUTES.Address);
    }//end of buyButtonPress

    _renderReviewItem = (item, index) => {
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

}//end of CLASSS index