import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import AppHeader from '../../appComponents/AppHeader';
import CustomButton from '../../components/CustomButton';
import CustomStatusBar from '../../components/CustomStatusBar';
import Text from '../../components/CustomText';
import CustomTextInputMaterial from '../../components/CustomTextInputMaterial';
import colors from '../../constants/colors';
import { IMLocalized } from '../../locales/IMLocalization';
import { styles } from './styles';
//end of IMPORT's

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: '',
            inputNameError: false,

            inputCountry: '',
            inputCountryError: false,

            inputPhoneNumber: '',
            inputPhoneNumberError: false,

            inputGender: '',
            inputGenderError: '',

            inputBloodGroup: '',
            inputBloodGroupError: false,

            inputBMI: '',
            inputBMIError: false,

            inputPatientCondition: '',
            inputPatientConditionError: false,

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

    formatText = (text) => {
        return text.replace(/[^+\d]/g, '')
    }

    render = () => {
        const { inputName, inputNameError, inputCountry, inputCountryError,
            inputPhoneNumber, inputPhoneNumberError, inputGender, inputGenderError,
            inputBloodGroup, inputBloodGroupError, inputBMI, inputBMIError,
            inputPatientCondition, inputPatientConditionError } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />

                <AppHeader
                    menu={false}
                    leftClose
                    leftClosePress={this.backPress}
                    title={IMLocalized(`Client Report`)}
                />

                <ScrollView>
                    {/* ******************** INPUT NAME Start ******************** */}
                    <CustomTextInputMaterial
                        label={IMLocalized(`Name`)}
                        value={inputName}
                        onChangeText={(text) => { this.setState({ inputName: text, inputNameError: false }) }}
                        error={inputNameError ? IMLocalized(`Please, enter name.`) : null}
                    />

                    {/* ******************** INPUT NAME End ******************** */}

                    {/* ******************** COUNTRY Start ******************** */}
                    <CustomTextInputMaterial
                        label={IMLocalized(`Country`)}
                        value={inputCountry}
                        onChangeText={(text) => { this.setState({ inputCountry: text, inputCountryError: false }) }}
                        error={inputCountryError ? IMLocalized(`Please, enter country.`) : null}
                    />

                    {/* ******************** COUNTRY End ******************** */}

                    {/* ******************** PHONE NUMBER Start ******************** */}
                    <CustomTextInputMaterial
                        label={IMLocalized(`Phone Number`)}
                        formatText={this.formatText}
                        value={inputPhoneNumber}
                        onChangeText={(text) => { this.setState({ inputPhoneNumber: text, inputPhoneNumberError: false }) }}
                        error={inputPhoneNumberError ? IMLocalized(`Please, enter phone number.`) : null}
                    />

                    {/* ******************** PHONE NUMBER End ******************** */}

                    {/* ******************** Gender Start ******************** */}
                    <CustomTextInputMaterial
                        label={IMLocalized(`Gender`)}
                        value={inputGender}
                        onChangeText={(text) => { this.setState({ inputGender: text, inputGenderError: false }) }}
                        error={inputGenderError ? IMLocalized(`Please, enter gender.`) : null}
                    />

                    {/* ******************** Gender End ******************** */}

                    {/* ******************** BLOOD GROUP Start ******************** */}
                    <CustomTextInputMaterial
                        label={IMLocalized(`Blood Group`)}
                        value={inputBloodGroup}
                        onChangeText={(text) => { this.setState({ inputBloodGroup: text, inputBloodGroupError: false }) }}
                        error={inputBloodGroupError ? IMLocalized(`Please, enter blood group.`) : null}
                    />

                    {/* ******************** BLOOD GROUP End ******************** */}

                    {/* ******************** BMI Start ******************** */}
                    <CustomTextInputMaterial
                        label={IMLocalized(`BMI`)}
                        formatText={this.formatText}
                        value={inputBMI}
                        onChangeText={(text) => { this.setState({ inputBMI: text, inputBMIError: false }) }}
                        error={inputBMIError ? IMLocalized(`Please, enter BMI.`) : null}
                    />

                    {/* ******************** BMI End ******************** */}

                    {/* ******************** PATIENT CONDITION Start ******************** */}
                    <CustomTextInputMaterial
                        label={IMLocalized(`Patient Condition`)}
                        value={inputPatientCondition}
                        onChangeText={(text) => { this.setState({ inputPatientCondition: text, inputPatientConditionError: false }) }}
                        error={inputPatientConditionError ? IMLocalized(`Please, enter patient condition.`) : null}
                    />

                    {/* ******************** PATIENT CONDITION End ******************** */}

                    {/* ******************** APPROVE AND DISMISS BUTTONS Start ******************** */}
                    <View style={styles.approveDismissButtonContainer}>
                        <CustomButton
                            onPress={this.dismissPress}
                            titleColor={colors.primary}
                            buttonStyle={styles.dismissButton}
                            title={IMLocalized(`Dismiss`)} />

                        <CustomButton
                            onPress={this.approvePress}
                            buttonStyle={styles.approveButton}
                            title={IMLocalized(`Approve`)} />
                    </View>

                    {/* ******************** APPROVE AND DISMISS BUTTONS End ******************** */}

                    {/* ******************** SEND CONSULTATION FORM BUTTON Start ******************** */}
                    <CustomButton
                        onPress={this.sendConsultationFormPress}
                        buttonStyle={styles.sendConsultationFormButton}
                        title={IMLocalized(`Send Consultation Form`)} />

                    {/* ******************** SEND CONSULTATION FORM BUTTON End ******************** */}

                </ScrollView>

            </View>

        );
    }//end of RENDER

    sendConsultationFormPress = () => {
        this.backPress();
    }//end of sendConsultationFormPress

    approvePress = () => {
        this.backPress();
    }//end of approvePress

    dismissPress = () => {
        this.backPress();
    }//end of dismissPress

}//end of CLASSS index