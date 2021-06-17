import React, { Component } from 'react';
import { StyleSheet, View, Modal, StatusBar, Platform, TouchableOpacity } from 'react-native';
import CustomIcon from '../components/CustomIcon';
import Text from "../components/CustomText";
import colors from '../constants/colors';
import cameraFunctions from '../helper/cameraFunctions';
import { IMLocalized } from '../locales/IMLocalization';
//END OF IMPORT's


interface componentInterface {
    visible?: boolean;

    hide(): any;

    getImages(imagesArr: any): any;

    multipleAllow?: boolean;
}//end of INTERFACE 

export default class AppImageSelector extends Component<componentInterface, any> {

    public static defaultProps = {
        visible: false,
        hide() { },
        getImages(imagesArr: any) { },

        multipleAllow: false,
    };//end of DEFAULT PROPS DECLARATION


    camera = async () => {
        const { getImages, hide } = this.props;

        const res = await cameraFunctions.camera(true);
        if (res) {
            getImages(res);
            hide();
        }
    }//end of camera

    gallery = async () => {
        const { multipleAllow, getImages, hide } = this.props;
        const res = await cameraFunctions.gallery(multipleAllow, true);
        if (res) {
            getImages(res);
            hide();
        }
    }//end of gallery

    render = () => {
        let { visible, hide } = this.props;
        const modalBackgroundStyle = { backgroundColor: 'rgba(0, 0, 0, 0.5)' };
        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={visible}
                onRequestClose={hide}>
                <View style={[styles.container, modalBackgroundStyle, {}]}>
                    <View style={[styles.innerContainerTransparentStyle, {}]}>
                        <TouchableOpacity style={styles.closeIconContainer}
                            onPress={hide}>
                            <CustomIcon name={"close"}
                                size={20}
                                color={'#595959'}
                                style={styles.closeIcon} />
                        </TouchableOpacity>
                        <View style={styles.bodyContainer}>
                            <TouchableOpacity onPress={this.camera}>
                                <Text style={styles.openCameraText}>{IMLocalized(`Open Camera`)}</Text>
                            </TouchableOpacity>

                            <View style={styles.seperator} />

                            <TouchableOpacity onPress={this.gallery}>
                                <Text style={styles.openGalleryText}>{IMLocalized(`From Gallery`)}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    } // end of Function Render

} //end of class AppImageSelector


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#ecf0f1',

    },
    innerContainerTransparentStyle: {
        backgroundColor: '#fff',
        width: "60%",
        borderRadius: 5
    },
    bodyContainer: {
        marginLeft: 16,
    },
    closeIconContainer: {
        alignSelf: "flex-end",
        marginTop: 8,
        marginRight: 8,
    },
    closeIcon: {

    },
    openCameraText: {
        color: colors.black,
        fontSize: 15,
        fontWeight: Platform.OS === "android" ? "700" : "500",
    },
    seperator: {
        height: StyleSheet.hairlineWidth * 1.5,
        backgroundColor: colors.black,
        marginTop: 16,
        marginBottom: 16,
        width: "85%",
        // marginHorizontal: 8,
        borderRadius: 5,

    },
    openGalleryText: {
        color: colors.black,
        fontSize: 15,
        marginBottom: 30,
        fontWeight: Platform.OS === "android" ? "700" : "500",
    },
}); //end of StyleSheet STYLES
