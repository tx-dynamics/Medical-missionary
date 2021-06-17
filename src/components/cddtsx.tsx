import React, { Component } from 'react';
import { Dimensions, StyleProp, StyleSheet, TextInput, TextStyle, TouchableOpacity, View } from 'react-native';
import genericFunctions, { emptyValidate } from '../helper/genericFunctions';
import Text from './CustomText';
import { textinputColor } from './CustomTextInput';
//END OF IMPORT's


interface componentInterface {
    width?: any;
    error?: boolean;
    bottomText?: any;
    errorText?: any;
    inputStyle?: StyleProp<TextStyle>;
}//end of INTERFACE 

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

export default class cddtsx extends Component<componentInterface, any> {

    public static defaultProps = {
        width: "75%",
        error: false,
        bottomText: '',
        errorText: ''
    };//end of DEFAULT PROPS DECLARATION

    state = {
        tiHeight: 10,
    }

    onLayout = (event: any) => {
        const layout = event.nativeEvent.layout;
        // console.log('height:', layout.height);
        // console.log('width:', layout.width);
        // console.log('x:', layout.x);
        // console.log('y:', layout.y);
        this.setState({
            ti: layout.y
        })
    };//end of onLayout

    render = () => {
        let { width, error, errorText, bottomText, inputStyle } = this.props;
        const { tiHeight } = this.state;
        console.log(`HWIGHT IS==> ${tiHeight}`);

        return (
            //@ts-ignore
            <>
                {/* @ts-ignore */}

                <TextInput
                    onLayout={this.onLayout}
                    autoCorrect={false}
                    selectionColor={textinputColor.BLUE}
                    placeholderTextColor={error ? textinputColor.ERROR : textinputColor.TEXT}
                    onChangeText={() => { }}
                    style={[styles.textInput,
                    {
                        width: width,
                        borderColor: error ? textinputColor.ERROR : textinputColor.LIGHT_GRAY,
                    }, inputStyle]}

                />
                <View style={{
                    height: SCREEN_HEIGHT,
                    width: SCREEN_WIDTH,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    position: "absolute",
                    top: 0,
                }} >
                    <View style={{
                        marginTop: tiHeight,
                    }}>
                        <Text>etst</Text>
                    </View>
                </View>


                {emptyValidate(bottomText) || emptyValidate(errorText) &&
                    <Text style={[inputStyle, {
                        color: error ? textinputColor.ERROR : textinputColor.TEXT,
                        textAlign: "left",
                    }]} >{error ? errorText : bottomText}</Text>}
            </>
        )
    } // end of Function Render

} //end of class cddtsx


const styles = StyleSheet.create({
    textInput: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 20,
        fontSize: 12,
        backgroundColor: textinputColor.LIGHT_GRAY
    }
}); //end of StyleSheet STYLES
