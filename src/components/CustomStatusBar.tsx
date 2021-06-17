import React, { Component } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import colors from '../constants/colors';
import KeyboardSpacer from './KeyboardSpacer';
//END OF IMPORT's


interface componentInterface {
    useKeyboardAvoidingView?: boolean;
}//end of INTERFACE 


export default class CustomStatusBar extends Component<componentInterface, any> {

    constructor(props: componentInterface) {
        super(props);
        this.state = {
        };
    }//end of CONSTRUCTOR

    public static defaultProps = {
        useKeyboardAvoidingView: true,
    };//end of DEFAULT PROPS DECLARATION

    render() {
        let { useKeyboardAvoidingView } = this.props;
        return (
            <>
                <StatusBar
                    translucent={false}
                    barStyle="light-content"
                    backgroundColor={colors.statusbar} />
                <SafeAreaView style={{ backgroundColor: colors.statusbar }} />
                {useKeyboardAvoidingView &&
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? "padding" : "padding"}>

                    </KeyboardAvoidingView>
                }
                {useKeyboardAvoidingView &&
                    <KeyboardSpacer />
                }
            </>
        )
    } // end of Function Render

} //end of class CustomStatusBar


const styles = StyleSheet.create({

}); //end of StyleSheet STYLES
