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
      caffine: NO_SELECTED,
      past: NO_SELECTED,
      smoke: NO_SELECTED,
      tobacoo: NO_SELECTED,
      alcohal: NO_SELECTED,
      pastAlcohal: NO_SELECTED,
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
      pastAlcohal,
      alcohal,
      tobacoo,
      smoke,
      past,
      caffine,
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
        <Text style={styles.bodyText}>{IMLocalized(`Temperance`)}</Text>

        {/* ******************** BODY TEXT End ******************** */}

        <KeyboardAvoidingView behavior={"padding"}>
          <ScrollView contentContainerStyle={styles.body}>
            {/* ******************** MEDICAL HISTORY Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Do you ingest caffeine in any form?`)}
              </Text>
              {this._renderYesNoSelection(
                caffine,
                () => {
                  //YES PRESS
                  this.setState({ caffine: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ caffine: false });
                }
              )}
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`If so, for how many years?`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter years`)}
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
                {IMLocalized(`Have you ingested caffeine in the past?`)}
              </Text>
              {this._renderYesNoSelection(
                past,
                () => {
                  //YES PRESS
                  this.setState({ past: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ past: false });
                }
              )}
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`For how many years?`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter years`)}
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
                {IMLocalized(`If so, when did you stop?`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter years`)}
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
                {IMLocalized(`Do you smoke or chew tobacco ?`)}
              </Text>
              {this._renderYesNoSelection(
                smoke,
                () => {
                  //YES PRESS
                  this.setState({ smoke: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ smoke: false });
                }
              )}
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Indicate which:`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter years`)}
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
                {IMLocalized(`If so, for how many years?`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter years`)}
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
                {IMLocalized(`Have you used tobacco in the past?`)}
              </Text>
              {this._renderYesNoSelection(
                tobacoo,
                () => {
                  //YES PRESS
                  this.setState({ tobacoo: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ tobacoo: false });
                }
              )}
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`If so, for how many years?`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter years`)}
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
                {IMLocalized(`If so, when did you stop?`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please, enter years`)}
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
                {IMLocalized(`Do you drink alcohol?`)}
              </Text>
              {this._renderYesNoSelection(
                alcohal,
                () => {
                  //YES PRESS
                  this.setState({ alcohal: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ alcohal: false });
                }
              )}
            </View>
            {/* ******************** NEXT BUTTON Start ******************** */}

            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("If so, what kind?")}
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
                {IMLocalized("For how many years?")}
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
                {IMLocalized(`Have you drank alcohol in the past?`)}
              </Text>
              {this._renderYesNoSelection(
                pastAlcohal,
                () => {
                  //YES PRESS
                  this.setState({ pastAlcohal: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ pastAlcohal: false });
                }
              )}
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("For how many years?")}
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
