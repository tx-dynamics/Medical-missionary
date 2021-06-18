import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import { styles } from "./styles";
import Text from "../../../components/CustomText";
import CustomStatusBar from "../../../components/CustomStatusBar";
import AppHeader from "../../../appComponents/AppHeader";
import { IMLocalized } from "../../../locales/IMLocalization";
import KeyboardSpacer from "../../../components/KeyboardSpacer";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";

//end of IMPORT's
const NO_SELECTED = -1;
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputHistroy: "",
      inputHistroyError: false,

      inputLastConsult: "",
      inputLastConsultError: false,

      inputWhatReason: "",
      inputWhatReasonError: false,

      inputCurrentlyTreated: "",
      inputCurrentlyTreatedError: false,

      inputSpecificCondition: "",
      inputSpecificConditionError: false,

      inputListAllMedicine: "",
      inputListAllMedicineError: false,

      inputListMineral: "",
      inputListMineralError: false,
      mistakes: NO_SELECTED,
      future: NO_SELECTED,
      stress: NO_SELECTED,
      enjoyWork: NO_SELECTED,
      capabilities: NO_SELECTED,
      helping: NO_SELECTED,
      financial: false,
      job: false,
      people: false,
      family: false,
      nothappy: false,
    }; //end of INITIALIZING STATE's
  } //end of CONSTRUCTOR

  componentDidMount = async () => {}; //end of COMPONENT_DID_MOUNT

  componentWillUnmount = async () => {}; //end of COMPONENT_WILL_UNMOUNT

  backPress = () => {
    this.props.navigation.pop() && this.props.navigation.goBack();
  }; //end of BACK PRESS
  _renderYesNoSelection = (value, onYesPress, onNoPress) => {
    return (
      <View style={styles.yesNoPrimaryContainer}>
        <TouchableOpacity
          style={
            value === true
              ? styles.yesNoContainerSelected
              : styles.yesNoContainer
          }
          onPress={onYesPress}
        >
          <Text
            style={value === true ? styles.yesTextSelected : styles.yesText}
          >
            {IMLocalized(`Yes`)}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            value === false
              ? styles.yesNoContainerSelected
              : styles.yesNoContainer
          }
          onPress={onNoPress}
        >
          <Text style={value === false ? styles.noTextSelected : styles.noText}>
            {IMLocalized(`No`)}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render = () => {
    const {
      nothappy,
      family,
      people,
      job,
      financial,
      helping,
      capabilities,
      enjoyWork,
      stress,
      future,
      inputHistroy,
      inputHistroyError,
      inputLastConsult,
      inputLastConsultError,
      inputWhatReason,
      inputWhatReasonError,
      inputCurrentlyTreated,
      inputCurrentlyTreatedError,
      inputSpecificCondition,
      inputSpecificConditionError,
      inputListAllMedicine,
      inputListAllMedicineError,
      inputListMineral,
      inputListMineralError,
      mistakes,
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
        <Text style={styles.bodyText}>{IMLocalized(`Open Air`)}</Text>

        {/* ******************** BODY TEXT End ******************** */}

        <KeyboardAvoidingView behavior={"padding"}>
          <ScrollView contentContainerStyle={styles.body}>
            {/* ******************** MEDICAL HISTORY Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(
                  `How many hours daily do you spend out of doors?:`
                )}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(
                  `Please, enter hours daily do you spend`
                )}
                error={inputHistroyError}
                value={inputHistroy}
                onChangeText={(text) => {
                  this.setState({
                    inputHistroy: text,
                    inputHistroyError: false,
                  });
                }}
              />
            </View>

            {/* ******************** MEDICAL HISTORY End ******************** */}

            {/* ******************** list of mineral End ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Do you sleep with your windows closed?`)}
              </Text>
              {this._renderYesNoSelection(
                mistakes,
                () => {
                  //YES PRESS
                  this.setState({ mistakes: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ mistakes: false });
                }
              )}
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(
                  `Are you able to breathe fresh air while you are working?`
                )}
              </Text>
              {this._renderYesNoSelection(
                future,
                () => {
                  //YES PRESS
                  this.setState({ future: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ future: false });
                }
              )}
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(
                  `Is the building where you work a none-smoking facility:`
                )}
              </Text>
              {this._renderYesNoSelection(
                stress,
                () => {
                  //YES PRESS
                  this.setState({ stress: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ stress: false });
                }
              )}
            </View>
            {/* ******************** NEXT BUTTON Start ******************** */}
            <Text style={styles.bodyText}>
              {IMLocalized(`Daily Exerciser`)}
            </Text>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("How often do you exercise?")}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please,Rate your stress level `)}
                error={inputListMineralError}
                value={inputListMineral}
                onChangeText={(text) => {
                  this.setState({
                    inputListMineral: text,
                    inputListMineralError: false,
                  });
                }}
              />
            </View>

            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("Describe the exercise:")}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please,Explain`)}
                error={inputListMineralError}
                value={inputListMineral}
                onChangeText={(text) => {
                  this.setState({
                    inputListMineral: text,
                    inputListMineralError: false,
                  });
                }}
              />
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("How do you feel after you exercise?")}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please,Elaborate`)}
                error={inputListMineralError}
                value={inputListMineral}
                onChangeText={(text) => {
                  this.setState({
                    inputListMineral: text,
                    inputListMineralError: false,
                  });
                }}
              />
            </View>

            {/* Next */}
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
