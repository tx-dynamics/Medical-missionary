import React, { Component } from 'react';
import { Button, InputAccessoryView, Keyboard, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity, View, } from 'react-native';
import { styles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppHeader from '../../appComponents/AppHeader';
import { IMLocalized } from '../../locales/IMLocalization';
import genericFunctions from '../../helper/genericFunctions';
import FastImage from 'react-native-fast-image';
import LocalAssets from '../../constants/LocalAssets';
import CustomIcon from '../../components/CustomIcon';
import AppImageSelector from '../../appComponents/AppImageSelector';
import CustomButton from '../../components/CustomButton';
//end of IMPORT's

const inputAccessoryViewID = genericFunctions.guidGenerator();
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTitle: '',
            inputTitleError: false,

            inputDescription: '',
            inputDescriptionError: false,

            imageSelector: false,
        };//end of INITIALIZING STATE's
    }//end of CONSTRUCTOR

    _showImageSelector = () => { this.setState({ imageSelector: true }) };
    _hideImageSelector = () => { this.setState({ imageSelector: false }) };

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

    getImagesFromSelector = (images) => {
    }//end of getImagesFromSelector

    render = () => {
        const isArticle = this.props.route.params.isArticle;
        const { inputTitle, inputTitleError, inputDescription, inputDescriptionError, imageSelector } = this.state;
        const NUMBER_OF_LINES_TITLE = 4;
        const NUMBER_OF_LINES_DESCRIPTION = 8;

        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar useKeyboardAvoidingView={false} />
                <AppHeader
                    title={isArticle ? IMLocalized(`Article`) : IMLocalized(`Blog`)}
                    rightClose
                    rightClosePress={this.backPress} />

                <AppImageSelector
                    visible={imageSelector}
                    hide={this._hideImageSelector}
                    getImages={this.getImagesFromSelector}
                />

                <KeyboardAvoidingView behavior={"padding"}>
                    <ScrollView contentContainerStyle={{ marginTop: 16 }}>
                        <Text style={styles.field}>{IMLocalized(`Title`)}</Text>

                        {/* ******************** TITLE Start ******************** */}
                        <TextInput
                            placeholder={IMLocalized(`Title goes here!`)}
                            value={inputTitle}
                            onChangeText={(text) => { this.setState({ inputTitle: text, inputTitleError: false }) }}
                            autoFocus={false}
                            autoCorrect={false}
                            spellCheck={false}
                            multiline
                            numberOfLines={NUMBER_OF_LINES_TITLE}
                            maxLength={NUMBER_OF_LINES_TITLE * 40}
                            numberOfLines={Platform.OS === 'ios' ? null : NUMBER_OF_LINES_TITLE}
                            minHeight={(Platform.OS === 'ios' && NUMBER_OF_LINES_TITLE) ? (20 * NUMBER_OF_LINES_TITLE) : null}
                            style={[inputTitleError ? styles.textInputError : styles.textInput, {
                                maxHeight: Platform.OS === 'ios' && NUMBER_OF_LINES_TITLE ? (20 * NUMBER_OF_LINES_TITLE) : null
                            }]}
                            inputAccessoryViewID={inputAccessoryViewID} />

                        {/* ******************** TITLE End ******************** */}

                        {/* ******************** IMAGE  Start ******************** */}
                        {!isArticle &&
                            <View style={styles.imageContainer}>
                                <FastImage
                                    source={LocalAssets.THUMBNAIL.thumbnail4}
                                    style={styles.image}
                                />
                                <TouchableOpacity style={styles.imageOverlay}
                                    onPress={this._showImageSelector}>
                                    <CustomIcon
                                        iconType={"Feather"}
                                        name={"camera"}
                                        style={styles.imageCameraIcon}
                                    />
                                    <Text style={styles.imageText}>{IMLocalized(`Add Photo`)}</Text>
                                </TouchableOpacity>
                            </View>
                        }

                        {/* ******************** IMAGE  End ******************** */}

                        <Text style={styles.field}>{IMLocalized(`Description`)}</Text>

                        {/* ******************** DESCRIPTION Start ******************** */}
                        <TextInput
                            placeholder={IMLocalized(`Description goes here!`)}
                            value={inputDescription}
                            onChangeText={(text) => { this.setState({ inputDescription: text, inputDescriptionError: false }) }}
                            autoFocus={false}
                            autoCorrect={false}
                            spellCheck={false}
                            multiline
                            returnKeyLabel="enter"
                            returnKeyType="next"
                            numberOfLines={NUMBER_OF_LINES_DESCRIPTION}
                            maxLength={NUMBER_OF_LINES_DESCRIPTION * 40}
                            numberOfLines={Platform.OS === 'ios' ? null : NUMBER_OF_LINES_DESCRIPTION}
                            minHeight={(Platform.OS === 'ios' && NUMBER_OF_LINES_DESCRIPTION) ? (20 * NUMBER_OF_LINES_DESCRIPTION) : null}
                            style={[inputDescriptionError ? styles.textInputError : styles.textInput, {
                                maxHeight: Platform.OS === 'ios' && NUMBER_OF_LINES_DESCRIPTION ? (20 * NUMBER_OF_LINES_DESCRIPTION) : null
                            }]}
                            inputAccessoryViewID={inputAccessoryViewID} />


                        {/* ******************** DESCRIPTION End ******************** */}

                        {/* ******************** KEYBOARD ABOVE DONE BUTTON Start ******************** */}
                        {Platform.OS === "ios" &&
                            <InputAccessoryView
                                nativeID={inputAccessoryViewID}>
                                <View style={styles.accessory}>
                                    <Button
                                        onPress={() => { Keyboard.dismiss() }}
                                        title="Done"
                                    />
                                </View>
                            </InputAccessoryView>
                        }

                        {/* ******************** KEYBOARD ABOVE DONE BUTTON` End ******************** */}

                    </ScrollView>
                </KeyboardAvoidingView>
                {/* ******************** SAVE BUTTON Start ******************** */}
                <View style={styles.saveButtonContainer}>
                    <CustomButton
                        title={IMLocalized(`Save`)}
                        onPress={this.backPress}
                        buttonStyle={styles.saveButton} />
                </View>

                {/* ******************** SAVE BUTTON End ******************** */}
            </View>
        );
    }//end of RENDER

}//end of CLASSS index