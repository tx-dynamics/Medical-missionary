import React, { Component } from 'react';
import { FlatList, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Rating } from 'react-native-ratings';
import AppHeader from '../../appComponents/AppHeader';
import AppImageSelector from '../../appComponents/AppImageSelector';
import CustomButton from '../../components/CustomButton';
import CustomIcon from '../../components/CustomIcon';
import CustomStatusBar from '../../components/CustomStatusBar';
import Text from '../../components/CustomText';
import LocalAssets, { randomProfilePictues } from '../../constants/LocalAssets';
import FakeData from '../../helper/FakeData';
import { IMLocalized } from '../../locales/IMLocalization';
import { reviewItemStyles, styles } from './styles';
//end of IMPORT's

const staticData = [{
    id: FakeData.guid(),
    username: FakeData.username(),
    count: FakeData.getInt(1, 5),
    review: 'Review the book in front of you, not the book you wish the author had written. You can and should point out shortcomings or failures, but don’t criticize the book for not being something it was never intended to be.',
    userImage: randomProfilePictues(),
    date: new Date(),
    price: FakeData.getInt(100, 1000),
}, {
    id: FakeData.guid(),
    username: FakeData.username(),
    count: FakeData.getInt(1, 5),
    review: 'With any luck, the author of the book worked hard to find the right words to express her ideas. You should attempt to do the same. Precise language allows you to control the tone of your review.',
    userImage: randomProfilePictues(),
    date: new Date(),
    price: FakeData.getInt(100, 1000),
}, {
    id: FakeData.guid(),
    username: FakeData.username(),
    count: FakeData.getInt(1, 5),
    review: 'Never hesitate to challenge an assumption, approach, or argument. Be sure, however, to cite specific examples to back up your assertions carefully.',
    userImage: randomProfilePictues(),
    date: new Date(),
    price: FakeData.getInt(100, 1000),
}]

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSelector: false,
            reviewData: staticData,
            metaData: false,

            bookData: {
                price: '',
                title: '',
                description: '',
                image: LocalAssets.THUMBNAIL.thumbnail6
            }
        };//end of INITIALIZING STATE's
    }//end of CONSTRUCTOR

    _showImageSelector = () => { this.setState({ imageSelector: true }) };
    _hideImageSelector = () => { this.setState({ imageSelector: false }) };

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

    getImagesFromSelector = (images) => {
    }//end of getImagesFromSelector

    render = () => {
        let { imageSelector, reviewData, metaData, bookData } = this.state;
        let isBuying = false;
        if (this.props.route.params !== undefined) {
            const navigationParams = this.props.route.params;
            isBuying = navigationParams.isBuying;
            bookData = navigationParams.bookData;
        }

        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar useKeyboardAvoidingView={false} />
                <AppHeader
                    title={isBuying ? IMLocalized(`Update`) : IMLocalized(`Add Item`)}
                    menu={false}
                    leftClose
                    leftClosePress={this.backPress} />

                <AppImageSelector
                    visible={imageSelector}
                    hide={this._hideImageSelector}
                    getImages={this.getImagesFromSelector}
                />
                <KeyboardAvoidingView>
                    <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>

                        {/* ******************** IMAGE  Start ******************** */}
                        <View style={styles.imageContainer}>
                            <FastImage
                                source={bookData.image}
                                resizeMode={FastImage.resizeMode.cover}
                                style={styles.image}
                            />
                            <TouchableOpacity style={styles.imageOverlay}
                                onPress={this._showImageSelector}>
                                <CustomIcon
                                    iconType={"Feather"}
                                    name={"camera"}
                                    style={styles.imageCameraIcon}
                                />
                                <Text style={styles.imageText}>{IMLocalized(`Add New Photo`)}</Text>
                            </TouchableOpacity>
                        </View>

                        {/* ******************** IMAGE  End ******************** */}

                        {/* ******************** PRICE Start ******************** */}
                        <View style={{ ...styles.inputContainer, marginBottom: 12, }}>
                            <Text style={styles.inputText}>{IMLocalized(`Enter Price:`)}</Text>
                            <TextInput
                                value={bookData.price}
                                maxLength={6}
                                style={styles.input} />
                        </View>

                        {/* ******************** PRICE End ******************** */}

                        {/* ******************** TITLE Start ******************** */}
                        <View style={{ ...styles.inputContainer, marginBottom: 0, }}>
                            <Text style={styles.inputText}>{IMLocalized(`Enter Title:`)}</Text>
                            <TextInput
                                value={bookData.title}
                                style={styles.input} />
                        </View>

                        {/* ******************** TITLE End ******************** */}

                        {/* ******************** DESCRIPTION Start ******************** */}
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.inputText}>{IMLocalized(`Description:`)}</Text>
                            <TextInput
                                value={bookData.description}
                                multiline
                                style={styles.descriptionInput} />
                        </View>

                        {/* ******************** DESCRIPTION End ******************** */}

                        {/* ******************** ADD BUTTON Start ******************** */}
                        {!(isBuying) &&
                            <CustomButton
                                title={IMLocalized(`Add`)}
                                buttonStyle={styles.button} />
                        }

                        {/* ******************** ADD BUTTON End ******************** */}

                        {/* ******************** UPDATE BUTTOn Start ******************** */}
                        {(isBuying) &&
                            <View style={styles.buttonContainer}>
                                <View style={styles.buttonSeparator} />
                                <CustomButton
                                    title={IMLocalized(`Update`)}
                                    buttonStyle={styles.button} />
                                <View style={styles.buttonSeparator} />
                            </View>
                        }

                        {/* ******************** UPDATE BUTTOn End ******************** */}

                        {/* ******************** REVIEW Start ******************** */}
                        {(isBuying && reviewData.length > 0) &&
                            <>
                                <View style={styles.reviewTextContainer}>
                                    <Text style={styles.reviewText}>{IMLocalized(`Reviews`)}</Text>
                                </View>
                                <FlatList
                                    scrollEnabled={false}
                                    data={reviewData}
                                    extraData={metaData}
                                    renderItem={this._renderReviewItem} />
                            </>
                        }

                        {/* ******************** REVIEW End ******************** */}
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }//end of RENDER

    _renderReviewItem = ({ item, index }) => {
        return (
            <View style={reviewItemStyles.primaryContainer}>

                {/* ******************** USER NAME IMAGE DATE Start ******************** */}
                <View style={reviewItemStyles.nameImageDateContainer}>
                    <FastImage source={item.userImage}
                        resizeMode={FastImage.resizeMode.cover}
                        style={reviewItemStyles.userImage} />

                    <Text style={reviewItemStyles.username}>{item.username}</Text>

                    <Text style={reviewItemStyles.date}>{item.date.toLocaleDateString()}</Text>
                </View>

                {/* ******************** USER NAME IMAGE DATE End ******************** */}

                {/* ******************** RATING Start ******************** */}
                <View style={reviewItemStyles.ratingContainer}>
                    <Rating
                        type='star'
                        ratingCount={5}
                        imageSize={12}
                        startingValue={item.count}
                        readonly
                        style={reviewItemStyles.rating}
                    />
                </View>

                {/* ******************** RATING End ******************** */}
                <Text style={reviewItemStyles.review}>{item.review}</Text>

            </View>
        )
    }//end of _renderReviewItem

}//end of CLASSS index