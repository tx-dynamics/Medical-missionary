import React, { Component } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, ScrollView, TouchableOpacity, View, } from 'react-native';
import { styles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import { IMLocalized } from '../../locales/IMLocalization';
import CustomTextInput from '../../components/CustomTextInput';
import DismissKeyboard from '../../components/DismissKeyboard';
import colors from '../../constants/colors';
import CustomIcon from '../../components/CustomIcon';
import CustomButton from '../../components/CustomButton';
import ROUTES from '../../routes/ROUTES';
import AppHeader from '../../appComponents/AppHeader';
import KeyboardSpacer from '../../components/KeyboardSpacer';
//end of IMPORT's

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputEmail: '',
            inputEmailError: false,

            inputPassword: '',
            inputPasswordError: false,
            inputPasswordEyeVisible: false,

            bottomButtonVisible: true
        };//end of INITIALIZING STATE's
    }//end of CONSTRUCTOR

    _toggleEyeInputPassword = () => { this.setState({ inputPasswordEyeVisible: !this.state.inputPasswordEyeVisible }) };

    componentDidMount = async () => {
        this.load();

        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }//end of COMPONENT_DID_MOUNT

    componentWillUnmount = async () => {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }//end of COMPONENT_WILL_UNMOUNT

    _keyboardDidShow = (e) => {
        this.setState({ bottomButtonVisible: false })
    }//end of _keyboardDidShow

    _keyboardDidHide = (e) => {
        this.setState({ bottomButtonVisible: true })
    }//end of _keyboardDidHide

    load = () => {

    }//end of LOAD FUNCTION

    backPress = () => {
        this.props.navigation.pop() && this.props.navigation.goBack();
    }//end of BACK PRESS

    signinPress = () => {
        this.props.navigation.navigate(ROUTES.Dashboard);
    }//end of signinPress

    render = () => {
        const { inputEmail, inputEmailError, inputPassword, inputPasswordError, inputPasswordEyeVisible } = this.state;
        const navigation = this.props.navigation;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar useKeyboardAvoidingView={false} />
                <AppHeader menu={false} />
                <KeyboardAvoidingView>
                    <ScrollView>


                        <Text style={styles.signinHeading}>{IMLocalized(`Signin`)}</Text>
                        <View style={styles.signinHeadingBottomSeperator} />




                        {/* ******************** EMAIL Start ******************** */}
                        <CustomTextInput
                            inputStyle={styles.textInput}
                            keyboardType="email-address"
                            placeholder={IMLocalized(`Email`)}
                            placeholderTextColor={colors.textInputPlaceholder}
                            value={inputEmail}
                            onChangeText={(text) => { this.setState({ inputEmail: text, inputEmailError: false }) }}
                            error={inputEmailError}
                            errorText={IMLocalized(`Please, enter email.`)} />

                        {/* ******************** EMAIL End ******************** */}

                        {/* ******************** PASSWORD Start ******************** */}
                        <View style={styles.passwordContainer}>
                            <CustomTextInput
                                inputStyle={styles.textInput}
                                placeholder={IMLocalized(`Password`)}
                                placeholderTextColor={colors.textInputPlaceholder}
                                value={inputPassword}
                                onChangeText={(text) => { this.setState({ inputPassword: text, inputPasswordError: false }) }}
                                error={inputPasswordError}
                                errorText={IMLocalized(`Please, enter password.`)}
                                secureTextEntry={!inputPasswordEyeVisible} />

                            <View style={styles.eyeIconPrimaryContainer}>
                                <TouchableOpacity
                                    style={styles.eyeIconContainer}
                                    onPress={this._toggleEyeInputPassword}>
                                    <CustomIcon
                                        name={inputPasswordEyeVisible ? "eye-off" : "eye"}
                                        style={styles.eyeIcon}
                                    />
                                </TouchableOpacity>
                            </View>


                        </View>

                        {/* ******************** PASSWORD End ******************** */}

                        {/* ******************** FORGET PASSWORD Start ******************** */}
                        <TouchableOpacity style={styles.forgotPasswordContainer}
                            onPress={() => { navigation.navigate(ROUTES.ForgotPassword) }}>
                            <Text style={styles.forgotPasswordText}>{IMLocalized(`Forgot Password?`)}</Text>
                        </TouchableOpacity>

                        {/* ******************** FORGET PASSWORD End ******************** */}

                        {/* ******************** SIGN IN BUTTON Start ******************** */}
                        <CustomButton
                            onPress={this.signinPress}
                            title={IMLocalized(`Login`)}
                            buttonStyle={styles.signinButton}
                        />

                        {/* ******************** SIGN IN BUTTON End ******************** */}
                    </ScrollView>
                </KeyboardAvoidingView>
                <KeyboardSpacer />

                {/* ******************** DO'NT HAVE ACCOUNT Start ******************** */}
                {this.state.bottomButtonVisible &&
                    <View style={styles.signupContainer}>
                        <Text style={styles.dontHaveAccountText}>{IMLocalized(`Don't have any account`)}</Text>

                        <CustomButton
                            onPress={() => { this.backPress() }}
                            title={IMLocalized(`Signup`)}
                            buttonStyle={styles.signupButton}
                        />

                    </View>
                }

                {/* ******************** DO'NT HAVE ACCOUNT End ******************** */}
            </View>

        );
    }//end of RENDER

}//end of CLASSS index