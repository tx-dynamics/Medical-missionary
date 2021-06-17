import React, { Component } from 'react';
import { KeyboardAvoidingView, ScrollView, TouchableOpacity, View, } from 'react-native';
import { styles, submitReportStyles } from './styles';
import Text from '../../../components/CustomText';
import CustomStatusBar from '../../../components/CustomStatusBar';
import AppHeader from '../../../appComponents/AppHeader';
import { IMLocalized } from '../../../locales/IMLocalization';
import KeyboardSpacer from '../../../components/KeyboardSpacer';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import CustomModal from '../../../components/CustomModal';
import CustomIcon from '../../../components/CustomIcon';
//end of IMPORT's

const NO_SELECTED = -1;
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indigestion: NO_SELECTED,

            gas: NO_SELECTED,

            bloating: NO_SELECTED,

            inputHowOften: '',
            inputHowOftenError: false,

            inputFoodCause: '',
            inputFoodCauseError: false,

            bowel: NO_SELECTED,

            inputColor: '',
            inputColorError: false,

            diarrhea: NO_SELECTED,

            constipation: NO_SELECTED,

            inputUrineUsually: '',
            inputUrineUsuallyError: false,

            eyeGlasses: NO_SELECTED,

            contactLenses: NO_SELECTED,

            years: '',
            yearsError: false,

            submitReport: false,
        };//end of INITIALIZING STATE's
    }//end of CONSTRUCTOR

    _showSubmitReport = () => { this.setState({ submitReport: true }) };
    _hideSubmitReport = () => { this.setState({ submitReport: false }) };

    componentDidMount = async () => {

    }//end of COMPONENT_DID_MOUNT

    componentWillUnmount = async () => {
    }//end of COMPONENT_WILL_UNMOUNT

    backPress = () => {
        this.props.navigation.pop() && this.props.navigation.goBack();
    }//end of BACK PRESS

    _renderYesNoSelection = (value, onYesPress, onNoPress) => {
        return (
            <View style={styles.yesNoPrimaryContainer}>
                <TouchableOpacity
                    style={value === true ? styles.yesNoContainerSelected : styles.yesNoContainer}
                    onPress={onYesPress}>
                    <Text
                        style={value === true ? styles.yesTextSelected : styles.yesText}>
                        {IMLocalized(`Yes`)}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={value === false ? styles.yesNoContainerSelected : styles.yesNoContainer}
                    onPress={onNoPress}>
                    <Text
                        style={value === false ? styles.noTextSelected : styles.noText}>
                        {IMLocalized(`No`)}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }//end of _renderYesNoSelection

    render = () => {
        const { indigestion, gas, bloating, inputHowOften, inputHowOftenError,
            inputFoodCause, inputFoodCauseError, bowel, inputColor, inputColorError, diarrhea,
            constipation, inputUrineUsually, inputUrineUsuallyError,
            eyeGlasses, contactLenses, years, yearsError, submitReport } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar useKeyboardAvoidingView={false} />
                <AppHeader
                    title={IMLocalized(`Health Report`)}
                    rightClose
                    rightClosePress={this.props.backPress} />

                {/* ******************** BODY TEXT Start ******************** */}
                <Text style={styles.bodyText}>{IMLocalized(`Providing the following information will allow a better understanding of your condition, and enable us to help you more. Explain fully where necessary.`)}</Text>

                {/* ******************** BODY TEXT End ******************** */}
                <KeyboardAvoidingView behavior={"padding"}>
                    <ScrollView contentContainerStyle={styles.body}>

                        {/* ******************** Do you have indigestion? Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`Do you have indigestion?`)}</Text>
                            {this._renderYesNoSelection(indigestion, () => {
                                //YES PRESS
                                this.setState({ indigestion: true })
                            }, () => {
                                //NO PRESS
                                this.setState({ indigestion: false })
                            })}


                        </View>

                        {/* ******************** Do you have indigestion? End ******************** */}

                        {/* ******************** Do you have Gas? Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`Do you have Gas?`)}</Text>
                            {this._renderYesNoSelection(gas, () => {
                                //YES PRESS
                                this.setState({ gas: true })
                            }, () => {
                                //NO PRESS
                                this.setState({ gas: false })
                            })}
                        </View>

                        {/* ******************** Do you have Gas? End ******************** */}

                        {/* ******************** Do you have Bloating? Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`Do you have Bloating?`)}</Text>
                            {this._renderYesNoSelection(bloating, () => {
                                //YES PRESS
                                this.setState({ bloating: true })
                            }, () => {
                                //NO PRESS
                                this.setState({ bloating: false })
                            })}

                        </View>

                        {/* ******************** Do you have Bloating? End ******************** */}

                        {/* ******************** How Often? Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`How Often?`)}</Text>
                            <CustomTextInput
                                inputStyle={styles.textInput}
                                errorText={IMLocalized(`Please, enter how often`)}
                                error={inputHowOftenError}
                                value={inputHowOften}
                                onChangeText={(text) => { this.setState({ inputHowOften: text, inputHowOftenError: false }) }}
                            />
                        </View>

                        {/* ******************** How Often? End ******************** */}

                        {/* ******************** tend to cause indigestion Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`What foods tend to cause indigestion, bloating or gas?`)}</Text>
                            <CustomTextInput
                                inputStyle={styles.textInput}
                                errorText={IMLocalized(`Please, enter food tend to cause`)}
                                error={inputFoodCauseError}
                                value={inputFoodCause}
                                onChangeText={(text) => { this.setState({ inputFoodCause: text, inputFoodCauseError: false }) }}
                            />
                        </View>

                        {/* ******************** tend to cause indigestion End ******************** */}

                        {/* ******************** bowel evacuations Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`How often do you have bowel evacuations?`)}</Text>
                            {this._renderYesNoSelection(bowel, () => {
                                //YES PRESS
                                this.setState({ bowel: true })
                            }, () => {
                                //NO PRESS
                                this.setState({ bowel: false })
                            })}

                        </View>

                        {/* ******************** bowel evacuations End ******************** */}

                        {/* ******************** Color & texture: Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`Color & texture:`)}</Text>
                            <CustomTextInput
                                inputStyle={styles.textInput}
                                errorText={IMLocalized(`Please, enter color & texture:`)}
                                error={inputColorError}
                                value={inputColor}
                                onChangeText={(text) => { this.setState({ inputColor: text, inputColorError: false }) }}
                            />
                        </View>

                        {/* ******************** Color & texture: End ******************** */}

                        {/* ******************** Diarrhea Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`Do you have Diarrhea?`)}</Text>
                            {this._renderYesNoSelection(diarrhea, () => {
                                //YES PRESS
                                this.setState({ diarrhea: true })
                            }, () => {
                                //NO PRESS
                                this.setState({ diarrhea: false })
                            })}

                        </View>

                        {/* ******************** Diarrhea End ******************** */}

                        {/* ******************** Constipation Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`Do you have Constipation?`)}</Text>
                            {this._renderYesNoSelection(constipation, () => {
                                //YES PRESS
                                this.setState({ constipation: true })
                            }, () => {
                                //NO PRESS
                                this.setState({ constipation: false })
                            })}

                        </View>

                        {/* ******************** Constipation End ******************** */}

                        {/* ******************** urine usually Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`What color is your urine usually?`)}</Text>
                            <CustomTextInput
                                inputStyle={styles.textInput}
                                errorText={IMLocalized(`Please, enter your urine color usually`)}
                                error={inputUrineUsuallyError}
                                value={inputUrineUsually}
                                onChangeText={(text) => { this.setState({ inputUrineUsually: text, inputUrineUsuallyError: false }) }}
                            />
                        </View>

                        {/* ******************** urine usually End ******************** */}

                        {/* ******************** eyeglasses Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`Do you wear eyeglasses?`)}</Text>
                            {this._renderYesNoSelection(eyeGlasses, () => {
                                //YES PRESS
                                this.setState({ eyeGlasses: true })
                            }, () => {
                                //NO PRESS
                                this.setState({ eyeGlasses: false })
                            })}

                        </View>

                        {/* ******************** eyeglasses End ******************** */}

                        {/* ******************** Contact lenses Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`Contact lenses?`)}</Text>
                            {this._renderYesNoSelection(contactLenses, () => {
                                //YES PRESS
                                this.setState({ contactLenses: true })
                            }, () => {
                                //NO PRESS
                                this.setState({ contactLenses: false })
                            })}

                        </View>

                        {/* ******************** Contact lenses End ******************** */}

                        {/* ******************** YEARS Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`How many years?`)}</Text>
                            <CustomTextInput
                                inputStyle={styles.textInput}
                                errorText={IMLocalized(`Please, enter years`)}
                                error={yearsError}
                                value={years}
                                onChangeText={(text) => { this.setState({ years: text, yearsError: false }) }}
                            />
                        </View>

                        {/* ******************** YEARS End ******************** */}

                        {/* ******************** SUBMIT BUTTON Start ******************** */}
                        <View style={styles.submitButtonContainer}>
                            <CustomButton
                                buttonStyle={styles.submitButton}
                                title={IMLocalized(`Submit`)}
                                onPress={this._showSubmitReport} />
                        </View>

                        {/* ******************** SUBMIT BUTTON End ******************** */}
                    </ScrollView>
                </KeyboardAvoidingView>
                <KeyboardSpacer />

                {/* ******************** MODAL Start ******************** */}
                <CustomModal
                    visible={submitReport}
                    dismiss={this._hideSubmitReport}>

                    {/* ******************** CLOSE ICON Start ******************** */}
                    <TouchableOpacity
                        style={submitReportStyles.closeIconContainer}
                        onPress={this._hideSubmitReport}>
                        <CustomIcon
                            size={25}
                            name={"close"} />
                    </TouchableOpacity>

                    {/* ******************** CLOSE ICON End ******************** */}
                    <Text style={submitReportStyles.text}>{IMLocalized(`Your health Report has been submitted`)}</Text>

                    <CustomButton
                        title={IMLocalized(`OK`)}
                        buttonStyle={submitReportStyles.button}
                        onPress={() => {
                            this._hideSubmitReport();
                            this.props.submitReport();
                        }} />
                </CustomModal>

                {/* ******************** MODAL End ******************** */}
            </View>
        );
    }//end of RENDER

}//end of CLASSS index