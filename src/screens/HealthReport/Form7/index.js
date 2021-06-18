import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  TouchableOpacity,
  CheckBox,
  TextInput,
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
      soda: "",
      coffe: "",
      tea: "",
      fruitJuice: "",
      punch: "",
      milk: "",
      other: "",
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
      soda,
      coffe,
      tea,
      fruitJuice,
      punch,
      milk,
      other,
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
        <Text style={styles.bodyText}>{IMLocalized(`Lots of Water`)}</Text>

        {/* ******************** BODY TEXT End ******************** */}

        <KeyboardAvoidingView behavior={"padding"}>
          <ScrollView contentContainerStyle={styles.body}>
            {/* ******************** MEDICAL HISTORY Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`How much water do you drink daily?`)}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(
                  `Please, enter how much water do you drink`
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
            {/* ******************** NEXT BUTTON Start ******************** */}

            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("What type? (spring, filtered, distilled, tap):")}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please,Enter Type `)}
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
            <Text style={[styles.textInputLabel, { marginTop: 3 }]}>
              {IMLocalized(
                "Check below the beverages you drink and indicate how much of each:"
              )}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <Text style={[styles.textInputLabel, { fontWeight: "bold" }]}>
                BEVERAGE
              </Text>
              <Text style={[styles.textInputLabel, { fontWeight: "bold" }]}>
                NAME BRAND
              </Text>
            </View>
            {/* CheckBox */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "40%",
                }}
              >
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
                  {IMLocalized(`Soda`)}
                </Text>
              </View>
              <TextInput
                value={soda}
                style={styles.inputs}
                onChangeText={(text) => this.setState({ soda: text.trim() })}
                value={soda}
                // placeholderTextColor={"gray"}
                // underlineColorAndroid="transparent"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "40%",
                }}
              >
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
                  {IMLocalized(`Coffee`)}
                </Text>
              </View>
              <TextInput
                value={coffe}
                style={styles.inputs}
                onChangeText={(text) => this.setState({ coffe: text.trim() })}
                value={coffe}
                // placeholderTextColor={"gray"}
                // underlineColorAndroid="transparent"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "40%",
                }}
              >
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
                  {IMLocalized(`Tea`)}
                </Text>
              </View>
              <TextInput
                value={tea}
                style={styles.inputs}
                onChangeText={(text) => this.setState({ tea: text.trim() })}
                // placeholderTextColor={"gray"}
                // underlineColorAndroid="transparent"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "40%",
                }}
              >
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
                  {IMLocalized(`Fruit Juice`)}
                </Text>
              </View>
              <TextInput
                value={fruitJuice}
                style={styles.inputs}
                onChangeText={(text) =>
                  this.setState({ fruitJuice: text.trim() })
                }
                // placeholderTextColor={"gray"}
                // underlineColorAndroid="transparent"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "40%",
                }}
              >
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
                  {IMLocalized(`Punch`)}
                </Text>
              </View>
              <TextInput
                value={punch}
                style={styles.inputs}
                onChangeText={(text) => this.setState({ punch: text.trim() })}
                // placeholderTextColor={"gray"}
                // underlineColorAndroid="transparent"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "40%",
                }}
              >
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
                  {IMLocalized(`Milk`)}
                </Text>
              </View>
              <TextInput
                value={milk}
                style={styles.inputs}
                onChangeText={(text) => this.setState({ milk: text.trim() })}
                // placeholderTextColor={"gray"}
                // underlineColorAndroid="transparent"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "40%",
                }}
              >
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
                  {IMLocalized(`Other`)}
                </Text>
              </View>
              <TextInput
                value={other}
                style={styles.inputs}
                onChangeText={(text) => this.setState({ other: text.trim() })}
                // placeholderTextColor={"gray"}
                // underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("What is the usual color of your urine?")}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please,Enter Color`)}
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
                  "Explain your understanding of the principles of hygiene:"
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
