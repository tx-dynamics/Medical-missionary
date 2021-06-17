import React, { Component } from 'react';
import { KeyboardAvoidingView, ScrollView, TouchableOpacity, View, } from 'react-native';
import { styles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppHeader from '../../appComponents/AppHeader';
import { IMLocalized } from '../../locales/IMLocalization';
import CustomTextInputMaterial from '../../components/CustomTextInputMaterial';
import KeyboardSpacer from '../../components/KeyboardSpacer';
import FastImage from 'react-native-fast-image';
import LocalAssets from '../../constants/LocalAssets';
import CustomButton from '../../components/CustomButton';
//end of IMPORT's

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFirstName: '',
            inputFirstNameError: false,

            inputLastName: '',
            inputLastNameError: false,

            inputPhoneNumber: '',
            inputPhoneNumberError: false,

            inputCountry: '',
            inputCountryError: false,

            inputState: '',
            inputStateError: false,

            inputCity: '',
            inputCityError: false,

            inputAddressLine1: '',
            inputAddressLine1Error: false,

            inputAddressLine2: '',
            inputAddressLine2Error: false,

            inputZipcode: '',
            inputZipcodeError: false,

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
        const { inputFirstName, inputFirstNameError, inputLastName, inputLastNameError, inputPhoneNumber, inputPhoneNumberError,
            inputCountry, inputCountryError, inputState, inputStateError, inputCity, inputCityError,
            inputAddressLine1, inputAddressLine1Error, inputAddressLine2, inputAddressLine2Error,
            inputZipcode, inputZipcodeError } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar useKeyboardAvoidingView={false} />
                <AppHeader
                    title={IMLocalized(`Address`)}
                    menu={false}
                    leftClose
                    leftClosePress={this.backPress} />

                <ScrollView>
                    <KeyboardAvoidingView behavior={"padding"}>
                        {/* ******************** FIRST NAME Start ******************** */}
                        <CustomTextInputMaterial
                            label={IMLocalized(`*First Name`)}
                            value={inputFirstName}
                            onChangeText={(text) => { this.setState({ inputFirstName: text, inputFirstNameError: false }) }}
                            error={inputFirstNameError ? IMLocalized(`Please, enter first name.`) : null}
                        />

                        {/* ******************** FIRST NAME End ******************** */}

                        {/* ******************** LAST NAME Start ******************** */}
                        <CustomTextInputMaterial
                            label={IMLocalized(`*Last Name`)}
                            value={inputLastName}
                            onChangeText={(text) => { this.setState({ inputLastName: text, inputLastNameError: false }) }}
                            error={inputLastNameError ? IMLocalized(`Please, enter last name.`) : null}
                        />

                        {/* ******************** LAST NAME End ******************** */}

                        {/* ******************** PHONE NUMBER Start ******************** */}
                        <CustomTextInputMaterial
                            label={IMLocalized(`*Phone Number`)}
                            value={inputPhoneNumber}
                            onChangeText={(text) => { this.setState({ inputPhoneNumber: text, inputPhoneNumberError: false }) }}
                            error={inputPhoneNumberError ? IMLocalized(`Please, enter phone number.`) : null}
                            prefix={"+44"}
                            keyboardType={"number-pad"}
                        />

                        {/* ******************** PHONE NUMBER End ******************** */}

                        {/* ******************** COUNTRY Start ******************** */}
                        <CustomTextInputMaterial
                            label={IMLocalized(`*Country`)}
                            value={inputCountry}
                            onChangeText={(text) => { this.setState({ inputCountry: text, inputCountryError: false }) }}
                            error={inputCountryError ? IMLocalized(`Please, enter country.`) : null}
                        />

                        {/* ******************** COUNTRY End ******************** */}

                        {/* ******************** STATE/REGION Start ******************** */}
                        <CustomTextInputMaterial
                            label={IMLocalized(`*State/Region`)}
                            value={inputState}
                            onChangeText={(text) => { this.setState({ inputState: text, inputStateError: false }) }}
                            error={inputStateError ? IMLocalized(`Please, enter state/region.`) : null}
                        />

                        {/* ******************** STATE/REGION End ******************** */}

                        {/* ******************** CITY Start ******************** */}
                        <CustomTextInputMaterial
                            label={IMLocalized(`*City`)}
                            value={inputCity}
                            onChangeText={(text) => { this.setState({ inputCity: text, inputCityError: false }) }}
                            error={inputCityError ? IMLocalized(`Please, enter city.`) : null}
                        />

                        {/* ******************** CITY End ******************** */}

                        {/* ******************** ADDRESS 1 Start ******************** */}
                        <CustomTextInputMaterial
                            label={IMLocalized(`*Address Line 1`)}
                            value={inputAddressLine1}
                            onChangeText={(text) => { this.setState({ inputAddressLine1: text, inputAddressLine1Error: false }) }}
                            error={inputAddressLine1Error ? IMLocalized(`Please, enter address line 1.`) : null}
                        />

                        {/* ******************** ADDRESS 1 End ******************** */}

                        {/* ******************** ADDRESS 2 Start ******************** */}
                        <CustomTextInputMaterial
                            label={IMLocalized(`*Address Line 2`)}
                            value={inputAddressLine2}
                            onChangeText={(text) => { this.setState({ inputAddressLine2: text, inputAddressLine2Error: false }) }}
                            error={inputAddressLine2Error ? IMLocalized(`Please, enter address line 2.`) : null}
                        />

                        {/* ******************** ADDRESS 2 End ******************** */}

                        {/* ******************** ZIP CODE Start ******************** */}
                        <CustomTextInputMaterial
                            label={IMLocalized(`*ZIP/Post code`)}
                            value={inputZipcode}
                            onChangeText={(text) => { this.setState({ inputZipcode: text, inputZipcodeError: false }) }}
                            error={inputZipcodeError ? IMLocalized(`Please, enter ZIP/Post code.`) : null}
                        />

                        {/* ******************** ZIP CODE End ******************** */}

                        {/* ******************** PAYMENT METHOD Start ******************** */}
                        <Text style={styles.paymentMethodTitle}>{IMLocalized(`Payment Method`)}</Text>
                        <TouchableOpacity style={styles.paymentMethodContainer}>
                            <FastImage
                                source={LocalAssets.ICON.creditCard}
                                style={styles.creditCardIcon}
                                resizeMode={FastImage.resizeMode.cover} />
                            <Text style={styles.creditCardText}>{IMLocalized(`Credit Card`)}</Text>
                        </TouchableOpacity>

                        {/* ******************** PAYMENT METHOD End ******************** */}

                        {/* ******************** BUY BUTTON Start ******************** */}
                        <View style={styles.buyButtonContainer}>
                            <CustomButton
                                title={IMLocalized(`Buy`)}
                                buttonStyle={styles.buyButton}
                                onPress={this.buyButtonPress} />
                        </View>

                        {/* ******************** BUY BUTTON End ******************** */}
                    </KeyboardAvoidingView>
                    <KeyboardSpacer />
                </ScrollView>

            </View>
        );
    }//end of RENDER

    buyButtonPress = async () => {

    }//end of buyButtonPress

}//end of CLASSS index