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
        <Text style={styles.bodyText}>{IMLocalized(`MEDICAL HISTORY`)}</Text>

        {/* ******************** BODY TEXT End ******************** */}

        <KeyboardAvoidingView behavior={"padding"}>
          <ScrollView contentContainerStyle={styles.body}>
            {/* ******************** MEDICAL HISTORY Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Occupations:`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter your occupation`)}
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

            {/* ******************** last consultation Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`What hours do you work?`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter  hours of work`)}
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
                {IMLocalized(`Health of spouse (if applicable):`)}
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
                {IMLocalized(`How many children do you have?`)}
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

            {/* ******************** specifc condition Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>{IMLocalized(`Ages:`)}</Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter your age`)}
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

            {/* ******************** specifc condition End ******************** */}

            {/* ******************** list of medicine Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Health of children:`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter Health of children:`)}
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

            {/* ******************** list of medicine End ******************** */}

            {/* ******************** list of mineral Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("Recreational activities enjoyed:")}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, Recreational activities `)}
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
                {IMLocalized("Hours per week viewing TV:")}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(
                  `Please,Enter Hours per week viewing TV `
                )}
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

            {/* ******************** list of mineral End ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Do you often feel guilty about past mistakes?`)}
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
                {IMLocalized(`Do you worry about the future?`)}
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
                {IMLocalized(`Do you have stress/Depression?`)}
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
            {/* //categories */}
            <View style={[styles.textInputContainer, {}]}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(
                  `Check the following categories which cause stress?`
                )}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <CheckBox
                // title={IMLocalized(`Financial`)}
                checked={financial}
                onPress={() => this.setState({ financial: !financial })}
                checkedColor={"green"}
                // textStyle={{ alignSelf: "center" }}
              />
              <Text
                style={[
                  styles.textInputLabel,
                  { textAlign: "center", alignSelf: "center" },
                ]}
              >
                {IMLocalized(`Financial`)}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <CheckBox
                // title={IMLocalized(`Financial`)}
                checked={job}
                onPress={() => this.setState({ job: !job })}
                checkedColor={"green"}
                // textStyle={{ alignSelf: "center" }}
              />
              <Text
                style={[
                  styles.textInputLabel,
                  { textAlign: "center", alignSelf: "center" },
                ]}
              >
                {IMLocalized(`Job related`)}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <CheckBox
                // title={IMLocalized(`Financial`)}
                checked={people}
                onPress={() => this.setState({ people: !people })}
                checkedColor={"green"}
                // textStyle={{ alignSelf: "center" }}
              />
              <Text
                style={[
                  styles.textInputLabel,
                  { textAlign: "center", alignSelf: "center" },
                ]}
              >
                {IMLocalized(`Getting along with people`)}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <CheckBox
                // title={IMLocalized(`Financial`)}
                checked={family}
                onPress={() => this.setState({ family: !family })}
                checkedColor={"green"}
                // textStyle={{ alignSelf: "center" }}
              />
              <Text
                style={[
                  styles.textInputLabel,
                  { textAlign: "center", alignSelf: "center" },
                ]}
              >
                {IMLocalized(`Family`)}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <CheckBox
                // title={IMLocalized(`Financial`)}
                checked={nothappy}
                onPress={() => this.setState({ nothappy: !nothappy })}
                checkedColor={"green"}
                // textStyle={{ alignSelf: "center" }}
              />
              <Text
                style={[
                  styles.textInputLabel,
                  { textAlign: "center", alignSelf: "center" },
                ]}
              >
                {IMLocalized(`Not happy with myself`)}
              </Text>
            </View>
            {/* ******************** NEXT BUTTON Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(
                  "On a scale of 1 to 10 rate your stress level (1= very little stress and 10=an extreme amt. of stress):"
                )}
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
                {IMLocalized(`Do you enjoy the work that you do?`)}
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

            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("If not, explain:")}
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
                {IMLocalized(
                  `Are you developing your mental and spiritual capabilities by daily study, meditation and prayer?`
                )}
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
                {IMLocalized(
                  `Are you involved in some type of activity in which you are helping others?`
                )}
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

            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(
                  "The following space is provided for those who would like to elaborate more on the causes of their stress, depression and other negative emotions."
                )}
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
