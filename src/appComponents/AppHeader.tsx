import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LocalAssets from '../constants/LocalAssets';
import Text from "../components/CustomText";
import K from '../constants/K';
import CustomIcon from '../components/CustomIcon';
import colors from '../constants/colors';
import { IMLocalized } from '../locales/IMLocalization';
import { emptyValidate } from '../helper/genericFunctions';
import { DrawerActions } from '@react-navigation/native';
import GV from '../utils/GV';

//END OF IMPORT's


interface componentInterface {
    rightClose?: boolean;
    rightClosePress(): any,

    menu?: boolean;
    menuPress(): any;

    leftClose?: boolean;
    leftClosePress(): any;

    title?: string;

    titleRightPress(): any;
    titleRight?: boolean;

    titleRightCustomVisible?: boolean;
    titleRightCustom(): any;
}//end of INTERFACE 


export default class AppHeader extends Component<componentInterface, any> {

    public static defaultProps = {
        rightClose: false,
        rightClosePress() { },

        menu: true,
        menuPress() { },

        leftClose: false,
        leftClosePress() { },
        title: '',

        titleRightPress() { },
        titleRight: false,

        titleRightCustomVisible: false,
        titleRightCustom() { },
    };//end of DEFAULT PROPS DECLARATION

    render() {
        let { rightClose, rightClosePress, menu, menuPress, leftClose, leftClosePress, title,
            titleRight, titleRightPress, titleRightCustom, titleRightCustomVisible } = this.props;
        return (
            <>
                <View style={styles.headerContainer}>
                    {menu &&
                        <TouchableOpacity onPress={() => {
                            if (GV.drawerProps !== null) {
                                //@ts-ignore
                                if ("openDrawer" in GV.drawerProps.navigation) {
                                    //@ts-ignore
                                    GV.drawerProps.navigation.openDrawer();
                                }
                            }
                            menuPress();
                        }}>
                            <FastImage
                                style={styles.menuIcon}
                                source={LocalAssets.ICON.menu}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </TouchableOpacity>
                    }

                    {leftClose &&
                        <TouchableOpacity style={styles.leftCloseIconContainer}
                            onPress={leftClosePress}>
                            <CustomIcon
                                name="close"
                                //@ts-ignore
                                style={styles.leftCloseIcon} />
                        </TouchableOpacity>
                    }

                    <View style={styles.healthInformationContainer}>
                        <Text style={styles.healthHeading}>
                            {K.AppHeading_1}
                            <Text style={styles.healthBlueHeading}>
                                {K.AppHeading_2}
                            </Text>
                        </Text>
                    </View>

                    {rightClose &&
                        <TouchableOpacity style={styles.rightCloseIconContainer}
                            onPress={rightClosePress}>
                            <CustomIcon name="close"
                                //@ts-ignore
                                style={styles.rightCloseIcon} />
                        </TouchableOpacity>
                    }
                </View>

                {(emptyValidate(title) || titleRight) &&
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                        {emptyValidate(title) &&
                            <View style={styles.headingContainer}>
                                <Text style={styles.heading}>
                                    {title}
                                </Text>
                            </View>
                        }

                        {titleRight &&
                            <TouchableOpacity
                                onPress={titleRightPress}
                                style={styles.titleRightContainer}>
                                <CustomIcon
                                    name="edit"
                                    iconType="Feather"
                                    style={styles.titleRightIcon} />

                            </TouchableOpacity>
                        }

                        {titleRightCustomVisible &&
                            <View style={styles.titleRightContainer}>
                                {titleRightCustom()}
                            </View>
                        }

                    </View>
                }
            </>
        )
    } // end of Function Render

} //end of class AppHeader


const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        marginHorizontal: 16,
        marginTop: 20,
    },
    menuIcon: {
        width: 20,
        height: 20,
    },
    healthInformationContainer: {
        flexDirection: 'row',
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: "center",
        flex: 1,
    },
    healthHeading: {
        fontWeight: "500",
        fontSize: 20,
        color: colors.black,
        textAlign: "center",
    },
    healthBlueHeading: {
        fontWeight: "500",
        fontSize: 20,
        color: colors.primary,
        textAlign: "center",
    },
    rightCloseIconContainer: {
        position: "absolute",
        right: -10,

    },
    rightCloseIcon: {
        fontSize: 25,
        color: "#595959",
    },
    leftCloseIconContainer: {
    },
    leftCloseIcon: {
        fontSize: 25,
        color: "#595959",
    },
    headingContainer: {
        borderBottomWidth: StyleSheet.hairlineWidth * 4,
        borderBottomColor: colors.screenHeading,
        alignSelf: "center",
    },
    heading: {
        fontWeight: "500",
        fontSize: 18,
        color: colors.screenHeading,
        textAlign: "center",
        marginTop: 16,
        paddingBottom: 0,
    },

    titleRightContainer: {
        position: "absolute",
        right: 15,
    },
    titleRightIcon: {
        fontSize: 18,
        color: "#595959",
        marginTop: 16,
        paddingBottom: 0,
    }

}); //end of StyleSheet STYLES
