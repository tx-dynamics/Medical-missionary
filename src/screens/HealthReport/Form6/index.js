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
        <Text style={styles.bodyText}>{IMLocalized(`Sunshine`)}</Text>

        {/* ******************** BODY TEXT End ******************** */}

        <KeyboardAvoidingView behavior={"padding"}>
          <ScrollView contentContainerStyle={styles.body}>
            {/* ******************** MEDICAL HISTORY Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(
                  `How much time daily do you spend out of doors in the sunlight?`
                )}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(
                  `Please, enter your time daily do you spend out of doors`
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
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Do you often get sunburned?`)}
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
                {IMLocalized(`Do you visit tanning beds?`)}
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
                {IMLocalized(`Are you afraid of getting skin cancer?`)}
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

            {/* ******************** MEDICAL HISTORY End ******************** */}
            <Text style={styles.bodyText}>{IMLocalized(`Daily Exercise`)}</Text>
            {/* ******************** last consultation Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`What time do you go to bed?`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter   time do you go to bed`)}
                error={inputLastConsultError}
                value={inputLastConsult}
                onChangeText={(text) => {
                  this.setState({
                    inputLastConsult: text,
                    inputLastConsultError: false,
                  });
                }}
              />
            </View>

            {/* ******************** last consultation End ******************** */}

            {/* ******************** for what reason Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`What time do you awaken?`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                // errorText={IMLocalized(`Please, enter for what reason`)}
                error={inputWhatReasonError}
                value={inputWhatReason}
                onChangeText={(text) => {
                  this.setState({
                    inputWhatReason: text,
                    inputWhatReasonError: false,
                  });
                }}
              />
            </View>

            {/* ******************** for what reason End ******************** */}

            {/* ******************** currently treated for Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`What time is your last meal before retiring?`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter your children you have`)}
                error={inputCurrentlyTreatedError}
                value={inputCurrentlyTreated}
                onChangeText={(text) => {
                  this.setState({
                    inputCurrentlyTreated: text,
                    inputCurrentlyTreatedError: false,
                  });
                }}
              />
            </View>

            {/* ******************** currently treated for End ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("Do you snack just before bedtime?")}
              </Text>
              {this._renderYesNoSelection(
                capabilities,
                () => {
                  //YES PRESS
                  this.setState({ capabilities: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ capabilities: false });
                }
              )}
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("Do you wake up during the night and snack?")}
              </Text>
              {this._renderYesNoSelection(
                helping,
                () => {
                  //YES PRESS
                  this.setState({ helping: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ helping: false });
                }
              )}
            </View>

            {/* ******************** specifc condition Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`If so, what do you eat?`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter what do you eat`)}
                error={inputSpecificConditionError}
                value={inputSpecificCondition}
                onChangeText={(text) => {
                  this.setState({
                    inputSpecificCondition: text,
                    inputSpecificConditionError: false,
                  });
                }}
              />
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Do you have trouble sleeping?`)}
              </Text>
              {this._renderYesNoSelection(
                enjoyWork,
                () => {
                  //YES PRESS
                  this.setState({ enjoyWork: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ enjoyWork: false });
                }
              )}
            </View>

            {/* ******************** specifc condition End ******************** */}

            {/* ******************** list of medicine Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Explain?`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, Explain`)}
                error={inputListAllMedicineError}
                value={inputListAllMedicine}
                onChangeText={(text) => {
                  this.setState({
                    inputListAllMedicine: text,
                    inputListAllMedicineError: false,
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
