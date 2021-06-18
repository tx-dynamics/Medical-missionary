import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import { styles, submitReportStyles } from "./styles";
import Text from "../../../components/CustomText";
import CustomStatusBar from "../../../components/CustomStatusBar";
import AppHeader from "../../../appComponents/AppHeader";
import { IMLocalized } from "../../../locales/IMLocalization";
import KeyboardSpacer from "../../../components/KeyboardSpacer";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import CustomModal from "../../../components/CustomModal";
import CustomIcon from "../../../components/CustomIcon";
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
      overeat: NO_SELECTED,
      meals: NO_SELECTED,
      eatBetween: NO_SELECTED,
      DrinkMeal: NO_SELECTED,
      dentures: NO_SELECTED,
      eatFast: NO_SELECTED,
      mealTime: NO_SELECTED,
      special_diet: NO_SELECTED,
      animal_products: NO_SELECTED,
      dairy_products: NO_SELECTED,
      sweets_regularly: NO_SELECTED,
      submitReport: false,
    }; //end of INITIALIZING STATE's
  } //end of CONSTRUCTOR
  _showSubmitReport = () => {
    this.setState({ submitReport: true });
  };
  _hideSubmitReport = () => {
    this.setState({ submitReport: false });
  };

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
      eatFast,
      dentures,
      DrinkMeal,
      eatBetween,
      meals,
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
      overeat,
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

            {/* ******************** MEDICAL HISTORY End ******************** */}

            {/* ******************** list of mineral End ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Do you overeat?`)}
              </Text>
              {this._renderYesNoSelection(
                overeat,
                () => {
                  //YES PRESS
                  this.setState({ overeat: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ overeat: false });
                }
              )}
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Do you feel stuffed after your meals?`)}
              </Text>
              {this._renderYesNoSelection(
                meals,
                () => {
                  //YES PRESS
                  this.setState({ meals: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ meals: false });
                }
              )}
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Do you eat between meals?`)}
              </Text>
              {this._renderYesNoSelection(
                eatBetween,
                () => {
                  //YES PRESS
                  this.setState({ eatBetween: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ eatBetween: false });
                }
              )}
            </View>
            {/* ******************** NEXT BUTTON Start ******************** */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("Explain:")}
              </Text>
              <CustomTextInput
                inputStyle={styles.textInput}
                errorText={IMLocalized(`Please,Explain `)}
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
                {IMLocalized(`Do you drink with your meals?`)}
              </Text>
              {this._renderYesNoSelection(
                DrinkMeal,
                () => {
                  //YES PRESS
                  this.setState({ DrinkMeal: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ DrinkMeal: false });
                }
              )}
            </View>

            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("If so, what liquids?")}
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
                {IMLocalized(`Do you wear removable dentures or plates?`)}
              </Text>
              {this._renderYesNoSelection(
                dentures,
                () => {
                  //YES PRESS
                  this.setState({ dentures: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ dentures: false });
                }
              )}
            </View>

            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Do you eat fast?`)}
              </Text>
              {this._renderYesNoSelection(
                eatFast,
                () => {
                  //YES PRESS
                  this.setState({ eatFast: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ eatFast: false });
                }
              )}
            </View>

            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("How long does it take you to eat?")}
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
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(
                  "Do you have a peaceful environment at meal times?"
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

            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Do you have set meal times?`)}
              </Text>
              {this._renderYesNoSelection(
                this.state.mealTime,
                () => {
                  //YES PRESS
                  this.setState({ mealTime: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ mealTime: false });
                }
              )}
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Are you following any special diet?`)}
              </Text>
              {this._renderYesNoSelection(
                this.state.special_diet,
                () => {
                  //YES PRESS
                  this.setState({ special_diet: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ special_diet: false });
                }
              )}
            </View>

            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("Explain what type:")}
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
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Do you eat animal products?`)}
              </Text>
              {this._renderYesNoSelection(
                this.state.animal_products,
                () => {
                  //YES PRESS
                  this.setState({ animal_products: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ animal_products: false });
                }
              )}
            </View>

            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("If so, what kind?")}
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

            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("How Often?")}
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

            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Do you eat dairy products?`)}
              </Text>
              {this._renderYesNoSelection(
                this.state.dairy_products,
                () => {
                  //YES PRESS
                  this.setState({ dairy_products: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ dairy_products: false });
                }
              )}
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(`Do you eat sweets regularly?`)}
              </Text>
              {this._renderYesNoSelection(
                this.state.sweets_regularly,
                () => {
                  //YES PRESS
                  this.setState({ sweets_regularly: true });
                },
                () => {
                  //NO PRESS
                  this.setState({ sweets_regularly: false });
                }
              )}
            </View>
            {/* inputs */}
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("Explain how often and what Type:")}
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
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("What time do you eat breakfast?")}
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
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("What foods do you usually eat?")}
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
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(
                  "How often do you eat a tossed green leafy salad?"
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
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized(
                  "How often do you eat steamed or cooked vegetables?"
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
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("How often do you eat fruits?")}
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
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("How often do you eat soup or stew?")}
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
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("What time do you eat lunch (dinner)?")}
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
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("What foods do you eat?")}
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
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>
                {IMLocalized("What foods do you eat?")}
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
                onPress={this._showSubmitReport}
              />
            </View>

            {/* ******************** NEXT BUTTON End ******************** */}
          </ScrollView>
        </KeyboardAvoidingView>
        <KeyboardSpacer />
        <CustomModal
          visible={this.state.submitReport}
          dismiss={this._hideSubmitReport}
        >
          {/* ******************** CLOSE ICON Start ******************** */}
          <TouchableOpacity
            style={submitReportStyles.closeIconContainer}
            onPress={this._hideSubmitReport}
          >
            <CustomIcon size={25} name={"close"} />
          </TouchableOpacity>

          {/* ******************** CLOSE ICON End ******************** */}
          <Text style={submitReportStyles.text}>
            {IMLocalized(`Your health Report has been submitted`)}
          </Text>

          <CustomButton
            title={IMLocalized(`OK`)}
            buttonStyle={submitReportStyles.button}
            onPress={() => {
              this._hideSubmitReport();
              this.props.submitReport();
            }}
          />
        </CustomModal>
      </View>
    );
  }; //end of RENDER
} //end of CLASSS index
