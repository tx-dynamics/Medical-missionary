import React, { Component } from 'react';
import { TouchableOpacity, View, } from 'react-native';
import { styles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import FastImage from 'react-native-fast-image';
import LocalAssets from '../../constants/LocalAssets';
import { IMLocalized } from '../../locales/IMLocalization';
import CustomIcon from '../../components/CustomIcon';
import CustomTextInput from '../../components/CustomTextInput';
import colors from '../../constants/colors';
import K from '../../constants/K';
import AppHeader from '../../appComponents/AppHeader';
import AppImageSelector from '../../appComponents/AppImageSelector';
import CustomDropdown from '../../components/CustomDropdown';
import genericFunctions from '../../helper/genericFunctions';
import CustomButton from '../../components/CustomButton';
//end of IMPORT's

const staticCategoryData = [{
    value: IMLocalized(`Ophthalmologists`),
    key: genericFunctions.guidGenerator()
}, {
    value: IMLocalized(`Pediatricians`),
    key: genericFunctions.guidGenerator()
}, {
    value: IMLocalized(`Surgeons`),
    key: genericFunctions.guidGenerator()
}]

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: '',
            inputNameError: false,

            inputUserName: '',
            inputUserNameError: false,

            inputEmail: '',
            inputEmailError: false,

            imageSelector: false,

            category: '',
            categoryData: staticCategoryData,
            selectedCategory: null,
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
        const { inputName, inputNameError, inputUserName, inputUserNameError, inputEmail, inputEmailError,
            imageSelector } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />

                <AppImageSelector
                    visible={imageSelector}
                    hide={this._hideImageSelector}
                    getImages={this.getImagesFromSelector}
                />

                {/* ******************** HEADER Start ******************** */}
                <AppHeader
                    menu={false}
                    leftClose
                    leftClosePress={this.backPress}
                    title={IMLocalized(`Edit Profile`)}
                />
                {/* ******************** HEADER End ******************** */}

                {/* ******************** PROFILE PICTURE Start ******************** */}
                <TouchableOpacity style={styles.profilePictureContainer}
                    onPress={this._showImageSelector}>
                    <FastImage
                        source={LocalAssets.PROFILE_PICTURES.profile3}
                        style={styles.profilePicture}
                        resizeMode={FastImage.resizeMode.contain} />
                    <View style={styles.profilePictureOverlay} />
                    <CustomIcon
                        name="camera"
                        iconType="Feather"
                        style={styles.profilePictureOverlayIcon} />
                    <Text style={styles.profilePictureOverlayText}>{IMLocalized(`Add new Photo`)}</Text>
                </TouchableOpacity>

                {/* ******************** PROFILE PICTURE End ******************** */}

                {/* ******************** NAME TEXT INPUT Start ******************** */}
                <CustomTextInput
                    inputStyle={styles.textInput}
                    placeholder={IMLocalized(`Name`)}
                    placeholderTextColor={colors.textInputPlaceholder}
                    value={inputName}
                    onChangeText={(text) => { this.setState({ inputName: text, inputNameError: false }) }}
                    error={inputNameError}
                    errorText={IMLocalized(`Please, enter name.`)} />

                {/* ******************** NAME TEXT INPUT End ******************** */}

                {/* ******************** USERNAME TEXT INPUT Start ******************** */}
                <CustomTextInput
                    inputStyle={styles.textInput}
                    placeholder={IMLocalized(`Username`)}
                    placeholderTextColor={colors.textInputPlaceholder}
                    value={inputUserName}
                    onChangeText={(text) => { this.setState({ inputUserName: text, inputUserNameError: false }) }}
                    error={inputUserNameError}
                    errorText={IMLocalized(`Please, enter username.`)} />

                {/* ******************** USERNAME TEXT INPUT End ******************** */}

                {/* ******************** EMAIL TEXT INPUT Start ******************** */}
                <CustomTextInput
                    inputStyle={styles.textInput}
                    keyboardType="email-address"
                    placeholder={IMLocalized(`Email`)}
                    placeholderTextColor={colors.textInputPlaceholder}
                    value={inputEmail}
                    onChangeText={(text) => { this.setState({ inputEmail: text, inputEmailError: false }) }}
                    error={inputEmailError}
                    errorText={IMLocalized(`Please, enter email.`)} />

                {/* ******************** EMAIL TEXT INPUT End ******************** */}

                {/* ******************** CATEGORY Start ******************** */}
                <CustomDropdown
                    placeholder={IMLocalized(`Category`)}
                    value={this.state.category}
                    inputStyle={styles.textInput}
                    dropDownData={this.state.categoryData}
                    onValueChange={this.categoryChange} />

                {/* ******************** CATEGORY End ******************** */}

                {/* ******************** SAVE BUTTON Start ******************** */}
                <View style={styles.saveButtonContainer}>
                    <CustomButton
                        onPress={this.backPress}
                        buttonStyle={styles.saveButton}
                        title={IMLocalized(`Save`)} />
                </View>

                {/* ******************** SAVE BUTTON End ******************** */}
            </View>
        );
    }//end of RENDER

    categoryChange = (item) => {
        this.setState({
            selectedCategory: item,
            category: item.value,
        })
    }//end of categoryChange

}//end of CLASSS index