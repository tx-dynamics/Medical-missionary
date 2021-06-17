import React, { Component } from 'react';
import { FlatList, KeyboardAvoidingView, ScrollView, TouchableOpacity, View } from 'react-native';
import AppHeader from '../../appComponents/AppHeader';
import CustomStatusBar from '../../components/CustomStatusBar';
import { IMLocalized } from '../../locales/IMLocalization';
import { styles, reviewItemStyles } from './styles';
import CustomButton from '../../components/CustomButton';
import FastImage from 'react-native-fast-image';
import LocalAssets, { randomProfilePictues } from '../../constants/LocalAssets';
import genericFunctions from '../../helper/genericFunctions';
import Text from "../../components/CustomText";
import CustomIcon from '../../components/CustomIcon';
import { Rating } from '../../appComponents/react-native-ratings';
import KeyboardSpacer from '../../components/KeyboardSpacer';
//end of IMPORT's
const staticData = [{
    id: genericFunctions.guidGenerator(),
    username: genericFunctions.randomNameGenerator(),
    count: genericFunctions.getRandomInt(1, 5),
    review: 'Review the book in front of you, not the book you wish the author had written. You can and should point out shortcomings or failures, but don’t criticize the book for not being something it was never intended to be.',
    userImage: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    username: genericFunctions.randomNameGenerator(),
    count: genericFunctions.getRandomInt(1, 5),
    review: 'With any luck, the author of the book worked hard to find the right words to express her ideas. You should attempt to do the same. Precise language allows you to control the tone of your review.',
    userImage: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    username: genericFunctions.randomNameGenerator(),
    count: genericFunctions.getRandomInt(1, 5),
    review: 'Never hesitate to challenge an assumption, approach, or argument. Be sure, however, to cite specific examples to back up your assertions carefully.',
    userImage: randomProfilePictues(),
}]

const stb = {
    id: genericFunctions.guidGenerator(),
    authorName: genericFunctions.randomNameGenerator(),
    authorImage: randomProfilePictues(),
    title: genericFunctions.randomBookNameGenerator(),
    description: genericFunctions.randomDescriptionGenerator(),
    image: LocalAssets.BOOKS[`book3`],
    numberOfSold: genericFunctions.getRandomInt(1, 100),
    isAvailable: true,
    price: genericFunctions.getRandomInt(100, 10000)

}
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,

            reviewData: staticData,
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
        this.props.navigation.pop() && this.props.navigation.goBack();
    }//end of BACK PRESS

    incrementQuantity = () => {
        const { quantity } = this.state;
        this.setState({ quantity: quantity + 1 });
    }//end of incrementQuantity

    decrementQuantity = () => {
        const { quantity } = this.state;
        if (quantity > 0) {
            this.setState({ quantity: quantity - 1 });
        }
    }//end of decrementQuantity

    render = () => {
        let isBuying = false;
        let staticBookData = stb;
        if (this.props.route.params !== undefined) {
            const navigationParams = this.props.route.params;
            isBuying = navigationParams.isBuying;
            staticBookData = navigationParams.bookData;
        }

        const { quantity, metaData, reviewData } = this.state;

        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar useKeyboardAvoidingView={false} />
                <AppHeader
                    menu={false}
                    leftClose
                    leftClosePress={this.backPress}
                    title={IMLocalized(`Sales List`)} />
                <KeyboardAvoidingView>


                    <ScrollView>
                        {/* ******************** BOOK COVER Start ******************** */}
                        <FastImage
                            source={staticBookData.image}
                            style={styles.bookCoverImage}
                            resizeMode={FastImage.resizeMode.stretch} />

                        {/* ******************** BOOK COVER End ******************** */}

                        {/* ******************** PRICE & QUANTITY Start ******************** */}
                        <View style={styles.priceQuantityContainer}>
                            {/* ******************** PRICE Start ******************** */}
                            <View style={styles.textValueContainer}>
                                <Text style={styles.priceText}>{IMLocalized(`Price:`)}</Text>
                                <Text style={styles.priceValue}>${staticBookData.price}</Text>
                            </View>

                            {/* ******************** PRICE End ******************** */}

                            {/* ******************** QUANTITY Start ******************** */}
                            {isBuying &&
                                <View style={styles.quantityContainer}>
                                    <Text style={styles.quantityText}>{IMLocalized(`Quantity:`)}</Text>

                                    {/* ******************** PLUS Start ******************** */}
                                    <TouchableOpacity
                                        onPress={this.incrementQuantity}
                                        style={styles.plusMinusContainer}>
                                        <CustomIcon
                                            style={styles.plusMinusIcon}
                                            iconType="MaterialCommunityIcons"
                                            name="plus" />
                                    </TouchableOpacity>

                                    {/* ******************** PLUS End ******************** */}
                                    <Text style={styles.quantityValue}>{quantity}</Text>

                                    {/* ******************** MINUS Start ******************** */}
                                    <TouchableOpacity
                                        onPress={this.decrementQuantity}
                                        style={styles.plusMinusContainer}>
                                        <CustomIcon
                                            style={styles.plusMinusIcon}
                                            iconType="MaterialCommunityIcons"
                                            name="minus" />
                                    </TouchableOpacity>

                                    {/* ******************** MINUS End ******************** */}
                                </View>
                            }
                            {/* ******************** QUANTITY End ******************** */}
                        </View>
                        {/* ******************** PRICE & QUANTITY End ******************** */}

                        {/* ******************** TITLE Start ******************** */}
                        <View style={styles.textValueContainer}>
                            <Text style={styles.titleText}>{IMLocalized(`Title:`)}</Text>
                            <Text style={styles.titleValue}>{staticBookData.title}</Text>
                        </View>

                        {/* ******************** TITLE End ******************** */}

                        {/* ******************** DESCRIPTION Start ******************** */}
                        <View style={styles.textValueContainer}>
                            <Text style={styles.descriptionText}>{IMLocalized(`Description:`)}</Text>
                            <Text style={styles.descriptionValue}>{staticBookData.description}</Text>
                        </View>

                        {/* ******************** DESCRIPTION End ******************** */}

                    </ScrollView>
                </KeyboardAvoidingView>
                <KeyboardSpacer />

                {/* ******************** ADD BUTTON Start ******************** */}
                <View style={styles.addButtonContainer}>
                    <CustomButton
                        onPress={this.backPress}
                        buttonStyle={styles.addButton}
                        title={isBuying ? IMLocalized(`Buy`) : IMLocalized(`Add`)} />
                </View>

                {/* ******************** ADD BUTTON End ******************** */}
            </View >
        );
    }//end of RENDER

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

}//end of CLASSS index