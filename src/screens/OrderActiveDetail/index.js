import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View, } from 'react-native';
import { deliveryStyles, styles, sendRequestStyles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppHeader from '../../appComponents/AppHeader';
import { IMLocalized } from '../../locales/IMLocalization';
import FastImage from 'react-native-fast-image';
import FakeData from '../../helper/FakeData';
import genericFunctions from '../../helper/genericFunctions';
import { randomBooks, randomProfilePictues } from '../../constants/LocalAssets';
import CustomIcon from '../../components/CustomIcon';
import CustomButton from '../../components/CustomButton';
import CustomModal from '../../components/CustomModal';
//end of IMPORT's

const stb = {
    id: FakeData.guid(),
    authorName: FakeData.name(),
    authorImage: randomProfilePictues(),
    title: FakeData.bookName(),
    description: FakeData.description(),
    image: randomBooks(),
    numberOfSold: FakeData.getInt(0, 100),
    isAvailable: true,
    price: FakeData.getInt(110, 10000),
    quantity: FakeData.getInt(0, 120),
}

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: '01',
            hours: '12',
            mins: '44',

            sendFeedbackRequest: false,
        };//end of INITIALIZING STATE's
    }//end of CONSTRUCTOR

    _showSendFeedbackRequest = () => { this.setState({ sendFeedbackRequest: true }) };
    _hideSendFeedbackRequest = () => { this.setState({ sendFeedbackRequest: false }) };

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
        let staticBookData = stb;
        if (this.props.route.params !== undefined) {
            const navigationParams = this.props.route.params;
            staticBookData = navigationParams.bookData;
        }

        const { days, hours, mins, sendFeedbackRequest } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />
                <AppHeader
                    title={IMLocalized(`Active Orders`)}
                    rightClose
                    rightClosePress={this.backPress} />

                <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
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
                            <Text style={styles.quantityValue}>{staticBookData.quantity}</Text>

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

                    {/* ******************** DELIVERY TIME LEFT HEADING Start ******************** */}
                    <Text style={deliveryStyles.heading}>{IMLocalized(`Delivery time left`)}</Text>

                    {/* ******************** DELIVERY TIME LEFT HEADING End ******************** */}
                    <View style={deliveryStyles.primaryContainer}>

                        {/* ******************** DAYS Start ******************** */}
                        <View style={deliveryStyles.container}>
                            <Text style={deliveryStyles.title}>{IMLocalized(`Days`)}</Text>
                            <View style={deliveryStyles.timeContainer}>
                                <Text style={deliveryStyles.value}>{String(days).charAt(0)}</Text>
                                <Text style={deliveryStyles.colon}>:</Text>
                                <Text style={deliveryStyles.value}>{String(days).charAt(1)}</Text>
                            </View>
                        </View>

                        {/* ******************** DAYS End ******************** */}

                        {/* ******************** HOURS Start ******************** */}
                        <View style={deliveryStyles.container}>
                            <Text style={deliveryStyles.title}>{IMLocalized(`Hours`)}</Text>
                            <View style={deliveryStyles.timeContainer}>
                                <Text style={deliveryStyles.value}>{String(hours).charAt(0)}</Text>
                                <Text style={deliveryStyles.colon}>:</Text>
                                <Text style={deliveryStyles.value}>{String(hours).charAt(1)}</Text>
                            </View>
                        </View>

                        {/* ******************** HOURS End ******************** */}

                        {/* ******************** MINUTES Start ******************** */}
                        <View style={deliveryStyles.container}>
                            <Text style={deliveryStyles.title}>{IMLocalized(`Minutes`)}</Text>
                            <View style={deliveryStyles.timeContainer}>
                                <Text style={deliveryStyles.value}>{String(mins).charAt(0)}</Text>
                                <Text style={deliveryStyles.colon}>:</Text>
                                <Text style={deliveryStyles.value}>{String(mins).charAt(1)}</Text>
                            </View>
                        </View>

                        {/* ******************** MINUTES End ******************** */}
                    </View>
                </ScrollView>

                {/* ******************** ORDER DELIVERED BUTTON Start ******************** */}
                <View style={styles.orderButtonContainer}>
                    <CustomButton
                        onPress={this._showSendFeedbackRequest}
                        buttonStyle={styles.orderButton}
                        title={IMLocalized(`Order Delivered`)} />
                </View>

                {/* ******************** ORDER DELIVERED BUTTON End ******************** */}

                {/* ******************** MODAL Start ******************** */}
                <CustomModal
                    visible={sendFeedbackRequest}
                    dismiss={this._hideSendFeedbackRequest}>

                    {/* ******************** CLOSE ICON Start ******************** */}
                    <TouchableOpacity
                        style={sendRequestStyles.closeIconContainer}
                        onPress={this._hideSendFeedbackRequest}>
                        <CustomIcon
                            size={25}
                            name={"close"} />
                    </TouchableOpacity>

                    {/* ******************** CLOSE ICON End ******************** */}
                    <Text style={sendRequestStyles.text}>{IMLocalized(`Send Feedback Request`)}</Text>

                    <CustomButton
                        title={IMLocalized(`Send`)}
                        buttonStyle={sendRequestStyles.button}
                        onPress={this._hideSendFeedbackRequest} />
                </CustomModal>

                {/* ******************** MODAL End ******************** */}
            </View>
        );
    }//end of RENDER

}//end of CLASSS index