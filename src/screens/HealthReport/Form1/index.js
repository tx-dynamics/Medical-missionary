import React, { Component } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { styles } from "./styles";
import Text from "../../../components/CustomText";
import CustomStatusBar from "../../../components/CustomStatusBar";
import AppHeader from "../../../appComponents/AppHeader";
import { IMLocalized } from "../../../locales/IMLocalization";
import KeyboardSpacer from "../../../components/KeyboardSpacer";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
//end of IMPORT's

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      inputNameError: false,

      inputDOB: "",
      inputDOBError: false,

      inputPhone: "",
      inputPhoneError: false,

      inputAge: "",
      inputAgeError: false,

      inputSex: "",
      inputSexError: false,

      inputHeight: "",
      inputHeightError: false,

      inputWeight: "",
      inputWeightError: false,

      inputWeightOneYearAgo: "",
      inputWeightOneYearAgoError: false,

      inputNationality: "",
      inputNationalityError: false,

      inputReligiousPreference: "",
      inputReligiousPreferenceError: false,

      inputMaritialStatus: "",
      inputMaritialStatusError: false,

      inputEmailAddress: "",
      inputEmailAddressError: false,
    }; //end of INITIALIZING STATE's
  } //end of CONSTRUCTOR

  componentDidMount = async () => {}; //end of COMPONENT_DID_MOUNT

  componentWillUnmount = async () => {}; //end of COMPONENT_WILL_UNMOUNT

  backPress = () => {
    this.props.navigation.pop() && this.props.navigation.goBack();
  }; //end of BACK PRESS

  render = () => {
    const {
      inputName,
      inputNameError,
      inputDOB,
      inputDOBError,
      inputPhone,
      inputPhoneError,
      inputAge,
      inputAgeError,
      inputSex,
      inputSexError,
      inputHeight,
      inputHeightError,
      inputWeight,
      inputWeightError,
      inputWeightOneYearAgo,
      inputWeightOneYearAgoError,
      inputNationality,
      inputNationalityError,
      inputReligiousPreference,
      inputReligiousPreferenceError,
      inputMaritialStatus,
      inputMaritialStatusError,
      inputEmailAddress,
      inputEmailAddressError,
    } = this.state;
    return (
      <View style={styles.primaryContainer}>
        <CustomStatusBar useKeyboardAvoidingView={false} />
        <AppHeader
          title={IMLocalized(`Health Report`)}
          rightClose
          rightClosePress={this.props.backPress}
        />

        {/* ******************** BODY TEXT Start ******************** */}
        <Text style={styles.bodyText}>
          {IMLocalized(
            `Providing the following information will allow a better understanding of your condition, and enable us to help you more. Explain fully where necessary.`
          )}
        </Text>

        {/* ******************** BODY TEXT End ******************** */}
        <KeyboardAvoidingView behavior={"padding"}>
          <ScrollView contentContainerStyle={styles.body}>
            {/* ******************** NAME Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>{IMLocalized(`Name:`)}</Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter name`)}
                error={inputNameError}
                value={inputName}
                onChangeText={(text) => {
                  this.setState({ inputName: text, inputNameError: false });
                }}
              />
            </View>

            {/* ******************** NAME End ******************** */}

            {/* ******************** DOB Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>{IMLocalized(`DOB:`)}</Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter DOB`)}
                error={inputDOBError}
                value={inputDOB}
                onChangeText={(text) => {
                  this.setState({ inputDOB: text, inputDOBError: false });
                }}
              />
            </View>

            {/* ******************** DOB End ******************** */}

            {/* ******************** PHONE Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>{IMLocalized(`Phone:`)}</Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter phone`)}
                error={inputPhoneError}
                value={inputPhone}
                onChangeText={(text) => {
                  this.setState({ inputPhone: text, inputPhoneError: false });
                }}
              />
            </View>

            {/* ******************** PHONE End ******************** */}

            {/* ******************** AGE Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>{IMLocalized(`Age:`)}</Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter age`)}
                error={inputAgeError}
                value={inputAge}
                onChangeText={(text) => {
                  this.setState({ inputAge: text, inputAgeError: false });
                }}
              />
            </View>

            {/* ******************** AGE End ******************** */}

            {/* ******************** SEX Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>{IMLocalized(`Sex:`)}</Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter sex`)}
                error={inputSexError}
                value={inputSex}
                onChangeText={(text) => {
                  this.setState({ inputSex: text, inputSexError: false });
                }}
              />
            </View>

            {/* ******************** SEX End ******************** */}

            {/* ******************** HEIGHT Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Height:`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter height`)}
                error={inputHeightError}
                value={inputHeight}
                onChangeText={(text) => {
                  this.setState({ inputHeight: text, inputHeightError: false });
                }}
              />
            </View>

            {/* ******************** HEIGHT End ******************** */}

            {/* ******************** WEIGHT Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Weight:`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter weight`)}
                error={inputWeightError}
                value={inputWeight}
                onChangeText={(text) => {
                  this.setState({ inputWeight: text, inputWeightError: false });
                }}
              />
            </View>

            {/* ******************** WEIGHT End ******************** */}

            {/* ******************** WEIGHT ONE YEAR AGO Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Weight one year ago:`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter weight one year ago`)}
                error={inputWeightOneYearAgoError}
                value={inputWeightOneYearAgo}
                onChangeText={(text) => {
                  this.setState({
                    inputWeightOneYearAgo: text,
                    inputWeightOneYearAgoError: false,
                  });
                }}
              />
            </View>

            {/* ******************** WEIGHT ONE YEAR AGO End ******************** */}

            {/* ******************** NATIONALITY Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Nationality:`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter nationality`)}
                error={inputNationalityError}
                value={inputNationality}
                onChangeText={(text) => {
                  this.setState({
                    inputNationality: text,
                    inputNationalityError: false,
                  });
                }}
              />
            </View>

            {/* ******************** NATIONALITY End ******************** */}

            {/* ******************** RELIGIOUS PREFERENCES Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Religious Preference:`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter religious preference`)}
                error={inputReligiousPreferenceError}
                value={inputReligiousPreference}
                onChangeText={(text) => {
                  this.setState({
                    inputReligiousPreference: text,
                    inputReligiousPreferenceError: false,
                  });
                }}
              />
            </View>

            {/* ******************** RELIGIOUS PREFERENCES End ******************** */}

            {/* ******************** MARiTIAL STATUS Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Maritial Status:`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter maritial status`)}
                error={inputMaritialStatusError}
                value={inputMaritialStatus}
                onChangeText={(text) => {
                  this.setState({
                    inputMaritialStatus: text,
                    inputMaritialStatusError: false,
                  });
                }}
              />
            </View>

            {/* ******************** MARiTIAL STATUS End ******************** */}

            {/* ******************** EMAL ADDRESS Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Email Address:`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter email address`)}
                error={inputEmailAddressError}
                value={inputEmailAddress}
                onChangeText={(text) => {
                  this.setState({
                    inputEmailAddress: text,
                    inputEmailAddressError: false,
                  });
                }}
              />
            </View>

            {/* ******************** EMAL ADDRESS End ******************** */}

            {/* ******************** NEXT BUTTON Start ******************** */}
            <View style={styles.nextButtonContainer}>
              <CustomButton
                buttonStyle={styles.nextButton}
                title={IMLocalized(`Next >`)}
                onPress={this.props.nextPress}
              />
            </View>

            {/* ******************** NEXT BUTTON End ******************** */}
          </ScrollView>
        </KeyboardAvoidingView>
        <KeyboardSpacer />
      </View>
    );
  }; //end of RENDER
} //end of CLASSS index
