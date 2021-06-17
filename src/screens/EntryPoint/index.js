import React, { Component } from 'react';
import { Dimensions, StatusBar, View, ImageBackground, Platform } from 'react-native';
import Svg, { Circle, ClipPath, Image } from "react-native-svg";
import CustomButton from '../../components/CustomButton';
import Text from '../../components/CustomText';
import colors from '../../constants/colors';
import K from '../../constants/K';
import LocalAssets from '../../constants/LocalAssets';
import appFunctions from '../../helper/appFunctions';
import { IMLocalized } from '../../locales/IMLocalization';
import ROUTES from '../../routes/ROUTES';
import { styles } from './styles';
//end of IMPORT's

const { width, height } = Dimensions.get('screen');

export default class index extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };//end of INITIALIZING STATE's
    }//end of CONSTRUCTOR

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

    render = () => {
        const navigation = this.props.navigation;
        return (
            <ImageBackground
                source={LocalAssets.JPG.mainPageBackground}
                defaultSource={LocalAssets.JPG.mainPageBackground}
                height={height}
                width={width}
                style={{ ...styles.primaryContainer, paddingTop: 50, }}
                blurRadius={0.8}>
                {Platform.OS === "ios" ?
                    <StatusBar barStyle={"dark-content"} />
                    :
                    <StatusBar translucent backgroundColor='transparent' barStyle={"dark-content"} />
                }

                <View style={styles.body}>

                    <Text style={styles.heading}>
                        {IMLocalized(`The `)}{K.AppHeading_1}
                        <Text style={styles.blueHeading}>
                            {K.AppHeading_2}
                        </Text>
                    </Text>

                    {/* ******************** BUTTON's Start ******************** */}
                    <View style={styles.buttonContainer}>
                        <CustomButton
                            buttonStyle={styles.button}
                            onPress={this.doctorPress}
                            title={IMLocalized(`Sign Up as a Medical Missionary`)} />

                        <CustomButton
                            backgroundColor={colors.white}
                            titleColor={colors.primary}
                            buttonStyle={styles.button}
                            onPress={this.clientPress}
                            title={IMLocalized(`Sign Up as a Client`)} />
                    </View>

                    {/* ******************** BUTTON's End ******************** */}
                </View>
                <View style={[styles.overlay]} />


            </ImageBackground>
        );
    }//end of RENDER

    doctorPress = () => {
        appFunctions.setUserType(true);
        this.props.navigation.navigate(ROUTES.Signup)
    }//end of doctorPress

    clientPress = () => {
        appFunctions.setUserType(false);
        this.props.navigation.navigate(ROUTES.Signup)
    }//end of clientPress

}//end of CLASSS index