import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacityProps, StyleProp, ViewStyle, TextStyle, Image, TouchableOpacity, ImageStyle, ImageSourcePropType, Platform } from 'react-native';
import colors from '../constants/colors';
import Text from "./CustomText";
//END OF IMPORT's

interface componentInterface {
    backgroundColor?: string;
    buttonStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>;
    imageStyle?: StyleProp<ImageStyle>;

    imageSource?: ImageSourcePropType;

    title?: any;

    titleColor?: string;

    imageSeperator?: boolean;
}//end of INTERFACE 

interface allInterface extends componentInterface, TouchableOpacityProps {
}

export default class CustomButton extends Component<allInterface, any> {

    public static defaultProps = {
        backgroundColor: colors.primary,
        titleColor: "#fff",
        title: 'Hello',

        imageSeperator: false,

        imageSource: null,
    };//end of DEFAULT PROPS DECLARATION

    render() {
        const { backgroundColor, buttonStyle, textStyle, title, titleColor, imageSeperator, imageStyle, imageSource } = this.props;
        const { ...otherProps } = this.props;
        return (
            <TouchableOpacity style={[styles.container, {
                backgroundColor,
                justifyContent: imageSource === null ? "center" : "flex-start",
            }, buttonStyle]}
                activeOpacity={0.5}
                {...otherProps}>
                {imageSource !== null &&
                    <Image
                        //@ts-ignore
                        source={imageSource}
                        style={[styles.image, {}, imageStyle]}
                    />
                }
                {imageSeperator && <View style={styles.separatorLine} />}
                <Text style={[styles.text, {
                    color: titleColor
                }, textStyle]}>{title}</Text>
            </TouchableOpacity>
        )
    } // end of Function Render

} //end of class CustomButton


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 0,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    image: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    separatorLine: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
    text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: Platform.OS === "ios" ? "500" : "700",
        textAlign: 'center',
        paddingHorizontal: 5,
    },
}); //end of StyleSheet STYLES
