import React, { Component } from 'react';
import { KeyboardAvoidingView, ScrollView, View, } from 'react-native';
import { styles } from './styles';
import Text from '../../../components/CustomText';
import CustomStatusBar from '../../../components/CustomStatusBar';
import AppHeader from '../../../appComponents/AppHeader';
import { IMLocalized } from '../../../locales/IMLocalization';
import KeyboardSpacer from '../../../components/KeyboardSpacer';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
//end of IMPORT's

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputHistroy: '',
            inputHistroyError: false,

            inputLastConsult: '',
            inputLastConsultError: false,

            inputWhatReason: '',
            inputWhatReasonError: false,

            inputCurrentlyTreated: '',
            inputCurrentlyTreatedError: false,

            inputSpecificCondition: '',
            inputSpecificConditionError: false,

            inputListAllMedicine: '',
            inputListAllMedicineError: false,


            inputListMineral: '',
            inputListMineralError: false,


        };//end of INITIALIZING STATE's
    }//end of CONSTRUCTOR

    componentDidMount = async () => {

    }//end of COMPONENT_DID_MOUNT

    componentWillUnmount = async () => {
    }//end of COMPONENT_WILL_UNMOUNT

    backPress = () => {
        this.props.navigation.pop() && this.props.navigation.goBack();
    }//end of BACK PRESS

    render = () => {
        const { inputHistroy, inputHistroyError, inputLastConsult, inputLastConsultError, inputWhatReason, inputWhatReasonError, inputCurrentlyTreated, inputCurrentlyTreatedError,
            inputSpecificCondition, inputSpecificConditionError, inputListAllMedicine, inputListAllMedicineError,
            inputListMineral, inputListMineralError, } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar useKeyboardAvoidingView={false} />
                <AppHeader
                    title={IMLocalized(`Health Report`)}
                    rightClose
                    rightClosePress={this.props.backPress} />

                {/* ******************** BODY TEXT Start ******************** */}
                <Text style={styles.bodyText}>{IMLocalized(`MEDICAL HISTORY`)}</Text>

                {/* ******************** BODY TEXT End ******************** */}

                <KeyboardAvoidingView behavior={"padding"}>
                    <ScrollView contentContainerStyle={styles.body}>

                        {/* ******************** MEDICAL HISTORY Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`Give medical history - names and dates of past ailments, operations (anything you feel significant, including past complaints).`)}</Text>
                            <CustomTextInput
                                inputStyle={styles.textInput}
                                errorText={IMLocalized(`Please, enter medical history`)}
                                error={inputHistroyError}
                                value={inputHistroy}
                                onChangeText={(text) => { this.setState({ inputHistroy: text, inputHistroyError: false }) }}
                            />
                        </View>

                        {/* ******************** MEDICAL HISTORY End ******************** */}

                        {/* ******************** last consultation Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`When did you last consult a physician?`)}</Text>
                            <CustomTextInput
                                inputStyle={styles.textInput}
                                errorText={IMLocalized(`Please, enter last consultation`)}
                                error={inputLastConsultError}
                                value={inputLastConsult}
                                onChangeText={(text) => { this.setState({ inputLastConsult: text, inputLastConsultError: false }) }}
                            />
                        </View>

                        {/* ******************** last consultation End ******************** */}

                        {/* ******************** for what reason Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`For what reason?:`)}</Text>
                            <CustomTextInput
                                inputStyle={styles.textInput}
                                errorText={IMLocalized(`Please, enter for what reason`)}
                                error={inputWhatReasonError}
                                value={inputWhatReason}
                                onChangeText={(text) => { this.setState({ inputWhatReason: text, inputWhatReasonError: false }) }}
                            />
                        </View>

                        {/* ******************** for what reason End ******************** */}

                        {/* ******************** currently treated for Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`What are you currently being treated for?`)}</Text>
                            <CustomTextInput
                                inputStyle={styles.textInput}
                                errorText={IMLocalized(`Please, currently treated for`)}
                                error={inputCurrentlyTreatedError}
                                value={inputCurrentlyTreated}
                                onChangeText={(text) => { this.setState({ inputCurrentlyTreated: text, inputCurrentlyTreatedError: false }) }}
                            />
                        </View>

                        {/* ******************** currently treated for End ******************** */}

                        {/* ******************** specifc condition Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`What specific conditions would you like this consultation to address?`)}</Text>
                            <CustomTextInput
                                inputStyle={styles.textInput}
                                errorText={IMLocalized(`Please, enter specifc condition`)}
                                error={inputSpecificConditionError}
                                value={inputSpecificCondition}
                                onChangeText={(text) => { this.setState({ inputSpecificCondition: text, inputSpecificConditionError: false }) }}
                            />
                        </View>

                        {/* ******************** specifc condition End ******************** */}

                        {/* ******************** list of medicine Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`List all medicine, pills, or drugs you are taking now:`)}</Text>
                            <CustomTextInput
                                inputStyle={styles.textInput}
                                errorText={IMLocalized(`Please, enter list of medicine`)}
                                error={inputListAllMedicineError}
                                value={inputListAllMedicine}
                                onChangeText={(text) => { this.setState({ inputListAllMedicine: text, inputListAllMedicineError: false }) }}
                            />
                        </View>

                        {/* ******************** list of medicine End ******************** */}


                        {/* ******************** list of mineral Start ******************** */}
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textInputLabel}>{IMLocalized(`List mineral and/or vitamin supplements you are taking/how many and how often:`)}</Text>
                            <CustomTextInput
                                inputStyle={styles.textInput}
                                errorText={IMLocalized(`Please, enter list of mineral`)}
                                error={inputListMineralError}
                                value={inputListMineral}
                                onChangeText={(text) => { this.setState({ inputListMineral: text, inputListMineralError: false }) }}
                            />
                        </View>

                        {/* ******************** list of mineral End ******************** */}

                        {/* ******************** NEXT BUTTON Start ******************** */}
                        <View style={styles.nextButtonContainer}>
                            <CustomButton
                                buttonStyle={styles.nextButton}
                                title={IMLocalized(`Next >`)}
                                onPress={this.props.nextPress} />
                        </View>

                        {/* ******************** NEXT BUTTON End ******************** */}
                    </ScrollView>
                </KeyboardAvoidingView>
                <KeyboardSpacer />

            </View>
        );
    }//end of RENDER

}//end of CLASSS index