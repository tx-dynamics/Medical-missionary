import React, { Component } from 'react';
import { Dimensions, Keyboard, Modal, Platform, StyleProp, StyleSheet, TextInput, TextStyle, TouchableOpacity, View } from 'react-native';
import colors from '../constants/colors';
import genericFunctions, { emptyValidate } from '../helper/genericFunctions';
import CustomIcon from './CustomIcon';
import Text from './CustomText';
import { textinputColor } from './CustomTextInput';
// import Constants from 'expo-constants';
//END OF IMPORT's
interface ddd {
    value?: any;
    key?: any
}

interface componentInterface {
    width?: any;
    error?: boolean;
    bottomText?: any;
    errorText?: any;
    inputStyle?: StyleProp<TextStyle>;
    dropDownData: [ddd];
    value?: any;
    placeholder?: any;
    extraTop?: number;
    onValueChange(item: any): any;
}//end of INTERFACE 

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

interface IState {
    tiHeight: any;
    tiWidth: any;
    isOpen: boolean;
}

interface all extends componentInterface, IState { }

export default class CustomDropdown extends Component<any, all> {

    public static defaultProps = {
        width: "75%",
        error: false,
        bottomText: '',
        errorText: '',
        dropDownData: [],
        placeholder: '',
        value: '',
        onValueChange(item: any) { },

        extraTop: 0,
    };//end of DEFAULT PROPS DECLARATION

    //@ts-ignore
    state = {
        tiHeight: 10,
        tiWidth: 10,

        isOpen: false,

    }

    openDropDown = () => { Keyboard.dismiss(); this.setState({ isOpen: true }) }
    closeDropDown = () => { Keyboard.dismiss(); this.setState({ isOpen: false }) }

    onLayout = (event: any) => {
        const { extraTop } = this.props;
        const layout = event.nativeEvent.layout;
        const ge = parseInt(layout.y.toString());
        this.setState({
            tiHeight: Platform.OS === "ios" ? ge + 5 + extraTop : ge + 10 + extraTop,
            // tiHeight: Platform.OS === "ios" ? ge + 70 : ge + 70,
            tiWidth: layout.x,
        })
    };//end of onLayout

    render = () => {
        let { width, error, errorText, bottomText, inputStyle, dropDownData, value, placeholder, onValueChange } = this.props;
        const { tiHeight, tiWidth, isOpen } = this.state;
        const modalBackgroundStyle = { backgroundColor: 'rgba(0, 0, 0, 0.5)' };

        return (
            <>
                <View
                    onLayout={this.onLayout}
                    style={[inputStyle, { flexDirection: "row", alignItems: "center", zIndex: 1 }]}>
                    <TextInput
                        value={value}
                        placeholder={placeholder}
                        autoCorrect={false}
                        onFocus={this.openDropDown}
                        // selectionColor={textinputColor.BLUE}
                        placeholderTextColor={error ? textinputColor.ERROR : textinputColor.TEXT}
                        onChangeText={() => { }}
                        style={[styles.textInput,
                        {
                            width: width,
                            // color: textinputColor.TEXT,
                            borderColor: error ? textinputColor.ERROR : textinputColor.LIGHT_GRAY,
                        }, inputStyle]}
                    />
                    {!isOpen &&
                        <TouchableOpacity style={{ ...styles.tiIconContainer, }}
                            onPress={this.openDropDown}>
                            <CustomIcon
                                style={{ marginTop: -10 }}
                                name={"chevron-down"}
                                color={"#848383"} />
                        </TouchableOpacity>
                    }
                </View>
                {isOpen &&
                    <Modal
                        animationType='fade'
                        transparent={true}
                        visible={isOpen}
                        onRequestClose={this.closeDropDown}>
                        <TouchableOpacity
                            style={[styles.mcontainer, modalBackgroundStyle, {}]}
                            activeOpacity={1}
                            onPress={this.closeDropDown}>
                            <View style={[styles.minnerContainerTransparentStyle, {
                                position: "absolute",
                                top: tiHeight,
                                right: tiWidth,
                            }]}>

                                <TouchableOpacity style={{ marginRight: 10, alignSelf: "flex-end", }}
                                    onPress={this.closeDropDown}>
                                    <CustomIcon
                                        name={"chevron-up"}
                                        color={colors.white} />
                                </TouchableOpacity>
                                <View style={{
                                    zIndex: 1,
                                    elevation: 4,
                                    ...styles.dropDownContainer,
                                }}>
                                    {dropDownData.map((item: any, index: any) => {
                                        return (
                                            <TouchableOpacity onPress={() => {
                                                this.closeDropDown();
                                                onValueChange({
                                                    value: item.value,
                                                    key: item.key,
                                                    index: index
                                                })
                                            }}>
                                                <Text style={styles.dropDownText}>{item.value}</Text>
                                                <View style={styles.seperator} />
                                            </TouchableOpacity>
                                        )
                                    })}

                                </View>

                            </View>
                        </TouchableOpacity>
                    </Modal>
                    // <TouchableOpacity style={{
                    //     ...styles.dropDownPrimaryContainer,
                    //     elevation: 4,
                    // }}
                    //     activeOpacity={1}
                    //     onPress={this.closeDropDown}>
                    //     <View style={{
                    //         zIndex: 10,
                    //         marginTop: tiHeight,
                    //         marginRight: tiWidth,
                    //         alignSelf: "flex-end",
                    //         elevation: 4,
                    //     }}>
                    //         <TouchableOpacity style={{ marginRight: 10, alignSelf: "flex-end", }}
                    //             onPress={this.closeDropDown}>
                    //             <CustomIcon
                    //                 name={"chevron-up"}
                    //                 color={colors.white} />
                    //         </TouchableOpacity>
                    //         <View style={{
                    //             zIndex: 1,
                    //             elevation: 4,
                    //             ...styles.dropDownContainer,
                    //         }}>
                    //             {dropDownData.map((item: any, index: any) => {
                    //                 return (
                    //                     <TouchableOpacity onPress={() => {
                    //                         this.closeDropDown();
                    //                         onValueChange({
                    //                             value: item.value,
                    //                             key: item.key,
                    //                             index: index
                    //                         })
                    //                     }}>
                    //                         <Text style={styles.dropDownText}>{item.value}</Text>
                    //                         <View style={styles.seperator} />
                    //                     </TouchableOpacity>
                    //                 )
                    //             })}

                    //         </View>
                    //     </View>

                    // </TouchableOpacity>
                }


                {emptyValidate(bottomText) || emptyValidate(errorText) &&
                    <Text style={[inputStyle, {
                        color: error ? textinputColor.ERROR : textinputColor.TEXT,
                        textAlign: "left",
                    }]} >{error ? errorText : bottomText}</Text>}
            </>
        )
    } // end of Function Render

} //end of class CustomDropdown


const styles = StyleSheet.create({
    mcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: Constants.currentHeight,
        backgroundColor: '#ecf0f1',

    },
    minnerContainerTransparentStyle: {
        backgroundColor: 'transparent',
        // width: "60%",
        borderRadius: 5
    },
    textInput: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 0.2,
        borderRadius: 20,
        fontSize: 12,
        backgroundColor: textinputColor.LIGHT_GRAY
    },
    seperator: {
        height: 0.5,
        backgroundColor: "#626262",
        marginTop: 8,
        marginBottom: 8,
        // marginHorizontal: 8,
        borderRadius: 5,
        minWidth: 140,
    },
    tiIconContainer: {
        position: "absolute",
        right: 10,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    },
    dropDownPrimaryContainer: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: "absolute",
        top: 0,
        zIndex: 1,
    },
    dropDownContainer: {
        backgroundColor: colors.white,
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 5,
    },
    dropDownText: {
        color: "#363636",
        fontSize: 12,
    },
}); //end of StyleSheet STYLES
