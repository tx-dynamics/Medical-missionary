import React, { Component } from 'react';
import { StyleSheet, Text, StyleProp, TextStyle } from 'react-native';
import colors from '../constants/colors';
//END OF IMPORT's


interface componentInterface {
    style?: StyleProp<TextStyle>;
}//end of INTERFACE 


export default class CustomText extends Component<componentInterface, any> {

    constructor(props: componentInterface) {
        super(props);
        this.state = {
        };
    }//end of CONSTRUCTOR

    public static defaultProps = {
    };//end of DEFAULT PROPS DECLARATION

    render() {
        let { style } = this.props;
        return (
            <Text style={[styles.text, style]}>{this.props.children}</Text>
        )
    } // end of Function Render

} //end of class CustomText


const styles = StyleSheet.create({
    text: {
        color: colors.text212121,
        fontSize: 14,
    }
}); //end of StyleSheet STYLES
