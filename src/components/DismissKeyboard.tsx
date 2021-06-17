import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
//END OF IMPORT's

export default class extends Component<any> {
    render = () => {
        let { children } = this.props;
        return (

            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}>
                {children}
            </TouchableWithoutFeedback>

        )
    } // end of Function Render

} //end of class 
