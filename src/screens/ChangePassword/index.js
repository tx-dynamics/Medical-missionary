import React, { Component } from 'react';
import { View, } from 'react-native';
import { styles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppHeader from '../../appComponents/AppHeader';
import { IMLocalized } from '../../locales/IMLocalization';
import CustomTextInput from '../../components/CustomTextInput';
import colors from '../../constants/colors';
import ToggleSwitch from '../../appComponents/toggle-switch-react-native/ToggleSwitch'
import CustomButton from '../../components/CustomButton';
//end of IMPORT's

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputOldPassword: '',
            inputOldPasswordError: false,

            inputNewPassword: '',
            inputNewPasswordError: false,

            inputConfirmPassword: '',
            inputConfirmPasswordError: false,

            isShowPassword: false,
        };//end of INITIALIZING STATE's
    }//end of CONSTRUCTOR

    toggleShowPassword = () => { this.setState(prevState => ({ isShowPassword: !prevState.isShowPassword })) };

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
        const { inputOldPassword, inputOldPasswordError, inputNewPassword, inputNewPasswordError, inputConfirmPassword, inputConfirmPasswordError, isShowPassword } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />
                <AppHeader
                    menu={false}
                    leftClose
                    leftClosePress={this.backPress}
                    title={IMLocalized(`Change Password`)} />

                <View style={styles.topSeperator} />

                {/* ******************** OLD PASSWORD Start ******************** */}
                <CustomTextInput
                    secureTextEntry={!isShowPassword}
                    inputStyle={styles.textInput}
                    placeholder={IMLocalized(`Old Password`)}
                    placeholderTextColor={colors.textInputPlaceholder}
                    value={inputOldPassword}
                    onChangeText={(text) => { this.setState({ inputOldPassword: text, inputOldPasswordError: false }) }}
                    error={inputOldPasswordError}
                    errorText={IMLocalized(`Please, enter old password.`)} />


                {/* ******************** OLD PASSWORD End ******************** */}

                {/* ******************** NEW PASSWORD Start ******************** */}
                <CustomTextInput
                    secureTextEntry={!isShowPassword}
                    inputStyle={styles.textInput}
                    placeholder={IMLocalized(`New Password`)}
                    placeholderTextColor={colors.textInputPlaceholder}
                    value={inputNewPassword}
                    onChangeText={(text) => { this.setState({ inputNewPassword: text, inputNewPasswordError: false }) }}
                    error={inputNewPasswordError}
                    errorText={IMLocalized(`Please, enter new password.`)} />

                {/* ******************** NEW PASSWORD End ******************** */}

                {/* ******************** CONFIRM PASSWORD Start ******************** */}
                <CustomTextInput
                    secureTextEntry={!isShowPassword}
                    inputStyle={styles.textInput}
                    placeholder={IMLocalized(`Confirm Password`)}
                    placeholderTextColor={colors.textInputPlaceholder}
                    value={inputConfirmPassword}
                    onChangeText={(text) => { this.setState({ inputConfirmPassword: text, inputConfirmPasswordError: false }) }}
                    error={inputConfirmPasswordError}
                    errorText={IMLocalized(`Please, enter same password.`)} />

                {/* ******************** CONFIRM PASSWORD End ******************** */}

                {/* ******************** TOOGLE SHOW & HIDE Start ******************** */}
                <View style={styles.togglePrimaryContainer}>
                    <View style={styles.toggleContainer}>
                        <ToggleSwitch
                            isOn={isShowPassword}
                            onColor={colors.primary}
                            offColor="#D1D1D1"
                            size={"small"}
                            onToggle={this.toggleShowPassword}
                            label={isShowPassword ? IMLocalized(`Hide`) : IMLocalized(`Show`)}
                            labelStyle={styles.toggleLabelStyle}
                        />
                    </View>
                </View>

                {/* ******************** TOOGLE SHOW & HIDE End ******************** */}
                <CustomButton
                    buttonStyle={styles.saveButton}
                    title={IMLocalized(`Save`)} />
            </View>
        );
    }//end of RENDER

}//end of CLASSS index