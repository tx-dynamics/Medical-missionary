import React, { Component } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, TouchableOpacity, View, } from 'react-native';
import { styles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import { IMLocalized } from '../../locales/IMLocalization';
import CustomTextInput from '../../components/CustomTextInput';
import DismissKeyboard from '../../components/DismissKeyboard';
import colors from '../../constants/colors';
import CustomIcon from '../../components/CustomIcon';
import CustomButton from '../../components/CustomButton';
import AppHeader from '../../appComponents/AppHeader';
import KeyboardSpacer from '../../components/KeyboardSpacer';
//end of IMPORT's 

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputEmail: '',
            inputEmailError: false,

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
        const navigation = this.props.navigation;
        const { inputEmail, inputEmailError, } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar useKeyboardAvoidingView={false} />
                <AppHeader menu={false} leftClose leftClosePress={this.backPress} />

                <KeyboardAvoidingView>
                    <ScrollView>


                        <Text style={styles.forgotPasswordHeading}>{IMLocalized(`Forgot Password`)}</Text>
                        <View style={styles.forgotPasswordHeadingBottomSeperator} />




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

                        {/* ******************** SUBMIT BUTTON Start ******************** */}
                        <CustomButton
                            title={IMLocalized(`Submit`)}
                            buttonStyle={styles.submitButton}
                        />

                        {/* ******************** SUBMIT BUTTON End ******************** */}
                    </ScrollView>
                </KeyboardAvoidingView>
                <KeyboardSpacer />

            </View>

        );
    }//end of RENDER

}//end of CLASSS index