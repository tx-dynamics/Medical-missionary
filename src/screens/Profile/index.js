import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Text from "../../components/CustomText";
import CustomStatusBar from "../../components/CustomStatusBar";
import FastImage from "react-native-fast-image";
import LocalAssets from "../../constants/LocalAssets";
import { IMLocalized } from "../../locales/IMLocalization";
import CustomIcon from "../../components/CustomIcon";
import CustomTextInput from "../../components/CustomTextInput";
import colors from "../../constants/colors";
import K from "../../constants/K";
import AppHeader from "../../appComponents/AppHeader";
import GV from "../../utils/GV";
import CustomButton from "../../components/CustomButton";
import ROUTES from "../../routes/ROUTES";
//end of IMPORT's

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      inputNameError: false,

      inputUserName: "",
      inputUserNameError: false,

      inputEmail: "",
      inputEmailError: false,
    }; //end of INITIALIZING STATE's
  } //end of CONSTRUCTOR

  componentDidMount = async () => {
    this.load();
  }; //end of COMPONENT_DID_MOUNT

  componentWillUnmount = async () => {}; //end of COMPONENT_WILL_UNMOUNT

  load = () => {}; //end of LOAD FUNCTION

  backPress = () => {
    this.props.navigation.pop() && this.props.navigation.goBack();
  }; //end of BACK PRESS

  render = () => {
    const {
      inputName,
      inputNameError,
      inputUserName,
      inputUserNameError,
      inputEmail,
      inputEmailError,
    } = this.state;
    return (
      <View style={styles.primaryContainer}>
        <CustomStatusBar />

        {/* ******************** HEADER Start ******************** */}
        <AppHeader
          rightClose
          rightClosePress={this.backPress}
          title={
            GV.isDoctor ? IMLocalized(`Client Profile`) : IMLocalized(`Profile`)
          }
        />
        {/* ******************** HEADER End ******************** */}

        {/* ******************** PROFILE PICTURE Start ******************** */}
        <View style={styles.profilePictureContainer}>
          <FastImage
            source={LocalAssets.PROFILE_PICTURES.profile3}
            style={styles.profilePicture}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>

        {/* ******************** PROFILE PICTURE End ******************** */}

        {/* ******************** NAME TEXT INPUT Start ******************** */}
        <CustomTextInput
          inputStyle={styles.textInput}
          placeholder={IMLocalized(`Name`)}
          placeholderTextColor={colors.textInputPlaceholder}
          value={inputName}
          onChangeText={(text) => {
            this.setState({ inputName: text, inputNameError: false });
          }}
          error={inputNameError}
          errorText={IMLocalized(`Please, enter name.`)}
        />

        {/* ******************** NAME TEXT INPUT End ******************** */}

        {/* ******************** USERNAME TEXT INPUT Start ******************** */}
        <CustomTextInput
          inputStyle={styles.textInput}
          placeholder={IMLocalized(`Username`)}
          placeholderTextColor={colors.textInputPlaceholder}
          value={inputUserName}
          onChangeText={(text) => {
            this.setState({ inputUserName: text, inputUserNameError: false });
          }}
          error={inputUserNameError}
          errorText={IMLocalized(`Please, enter username.`)}
        />

        {/* ******************** USERNAME TEXT INPUT End ******************** */}

        {/* ******************** EMAIL TEXT INPUT Start ******************** */}
        <CustomTextInput
          inputStyle={styles.textInput}
          keyboardType="email-address"
          placeholder={IMLocalized(`Email`)}
          placeholderTextColor={colors.textInputPlaceholder}
          value={inputEmail}
          onChangeText={(text) => {
            this.setState({ inputEmail: text, inputEmailError: false });
          }}
          error={inputEmailError}
          errorText={IMLocalized(`Please, enter email.`)}
        />

        {/* ******************** EMAIL TEXT INPUT End ******************** */}

        {GV.isDoctor && (
          <>
            <CustomButton
              buttonStyle={styles.button}
              title={IMLocalized(`Consultation Form`)}
              onPress={() => {
                this.props.navigation.navigate(ROUTES.ConsultationForm);
              }}
            />

            <CustomButton
              buttonStyle={styles.button}
              title={IMLocalized(`Report`)}
              //   onPress={() => {
              //     this.props.navigation.navigate(ROUTES.ClientReport);
              //   }}
            />
          </>
        )}
      </View>
    );
  }; //end of RENDER
} //end of CLASSS index
