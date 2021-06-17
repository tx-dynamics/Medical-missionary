import React, { Component } from 'react';
import { Alert, DeviceEventEmitter, KeyboardAvoidingView, ScrollView, TouchableOpacity, View, Keyboard } from 'react-native';
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
import CustomDropdown from '../../components/CustomDropdown';
import genericFunctions from '../../helper/genericFunctions';
import GV from '../../utils/GV';
import KeyboardSpacer from '../../components/KeyboardSpacer';
//end of IMPORT's

const staticCategoryData = [{
    value: IMLocalized(`Medical Missionary`),
    key: genericFunctions.guidGenerator()
}, {
    value: IMLocalized(`Medical Missionary Physician`),
    key: genericFunctions.guidGenerator()
}]
export default class index extends Component {
    constructor(props) {
        super(props);
        this.isDoctor = GV.isDoctor;
        this.state = {
            inputUserName: '',
            inputUserNameError: false,

            inputEmail: '',
            inputEmailError: false,

            inputPassword: '',
            inputPasswordError: false,
            inputPasswordEyeVisible: false,

            inputConfirmPassword: '',
            inputConfirmPasswordError: false,
            inputConfirmPasswordEyeVisible: false,

            category: '',
            categoryData: staticCategoryData,
            selectedCategory: null,

            bottomButtonVisible: true,
        };//end of INITIALIZING STATE's
    }//end of CONSTRUCTOR

    _toggleEyeInputPassword = () => { this.setState({ inputPasswordEyeVisible: !this.state.inputPasswordEyeVisible }) };

    _toggleEyeInputConfirmPassword = () => { this.setState({ inputConfirmPasswordEyeVisible: !this.state.inputConfirmPasswordEyeVisible }) };

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

    signupPress = () => {
        this.props.navigation.navigate(ROUTES.Dashboard);
    }//end of signupPress

    render = () => {
        const navigation = this.props.navigation;

        const { inputUserName, inputUserNameError, inputEmail, inputEmailError, inputPassword,
            inputPasswordError, inputConfirmPassword, inputConfirmPasswordError,
            inputPasswordEyeVisible, inputConfirmPasswordEyeVisible, } = this.state;


        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar useKeyboardAvoidingView={false} />
                <AppHeader menu={false} />

                <KeyboardAvoidingView>
                    <ScrollView>


                        <Text style={styles.signupHeading}>{IMLocalized(`Signup`)}</Text>
                        <View style={styles.signupHeadingBottomSeperator} />


                        {/* ******************** USER NAME Start ******************** */}
                        <CustomTextInput
                            inputStyle={styles.textInput}
                            placeholder={IMLocalized(`Username`)}
                            placeholderTextColor={colors.textInputPlaceholder}
                            value={inputUserName}
                            onChangeText={(text) => { this.setState({ inputUserName: text, inputUserNameError: false }) }}
                            error={inputUserNameError}
                            errorText={IMLocalized(`Please, enter username.`)} />

                        {/* ******************** USER NAME End ******************** */}

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

                        {/* ******************** CONFIRM PASSWORD Start ******************** */}
                        <View style={styles.passwordContainer}>
                            <CustomTextInput
                                inputStyle={styles.textInput}
                                placeholder={IMLocalized(`Confirm Password`)}
                                placeholderTextColor={colors.textInputPlaceholder}
                                value={inputConfirmPassword}
                                onChangeText={(text) => { this.setState({ inputConfirmPassword: text, inputConfirmPasswordError: false }) }}
                                error={inputConfirmPasswordError}
                                errorText={IMLocalized(`Please, enter same password.`)}
                                secureTextEntry={!inputConfirmPasswordEyeVisible} />
                            <View style={styles.eyeIconPrimaryContainer}>
                                <TouchableOpacity
                                    style={styles.eyeIconContainer}
                                    onPress={this._toggleEyeInputConfirmPassword}>
                                    <CustomIcon
                                        name={inputConfirmPasswordEyeVisible ? "eye-off" : "eye"}
                                        style={styles.eyeIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* ******************** CONFIRM PASSWORD End ******************** */}

                        {/* ******************** CATEGORY Start ******************** */}
                        {this.isDoctor &&
                            <CustomDropdown
                                placeholder={IMLocalized(`Category`)}
                                value={this.state.category}
                                inputStyle={styles.textInput}
                                dropDownData={this.state.categoryData}
                                onValueChange={this.categoryChange}
                                extraTop={65} />
                        }

                        {/* ******************** CATEGORY End ******************** */}

                        {/* ******************** SIGN UP BUTTON Start ******************** */}
                        <CustomButton
                            title={IMLocalized(`Signup`)}
                            buttonStyle={styles.signupButton}
                            onPress={this.signupPress}
                        />

                        {/* ******************** SIGN UP BUTTON End ******************** */}

                    </ScrollView>
                </KeyboardAvoidingView>
                <KeyboardSpacer />

                {/* ******************** DO YOU HAVE ACCOUNT Start ******************** */}
                {this.state.bottomButtonVisible &&
                    <View style={styles.signinContainer}>
                        <Text style={styles.doYouHaveAccountText}>{IMLocalized(`Do you have account`)}</Text>

                        <CustomButton
                            onPress={() => { navigation.navigate(ROUTES.Signin) }}
                            title={IMLocalized(`Signin`)}
                            buttonStyle={styles.signinButton}
                        />

                    </View>
                }

                {/* ******************** DO YOU HAVE ACCOUNT End ******************** */}
            </View>

        );
    }//end of RENDER

    categoryChange = (item) => {
        this.setState({
            selectedCategory: item,
            category: item.value,
        })
    }//end of categoryChange

}//end of CLASSS index