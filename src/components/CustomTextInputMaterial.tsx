import React, { Component } from 'react';
import { StyleSheet, View, TextInputProps } from 'react-native';
import { TextField, FilledTextField, OutlinedTextField, } from 'rn-material-ui-textfield';
import colors from '../constants/colors';
//END OF IMPORT's


interface componentInterface {

}//end of INTERFACE 

interface all extends componentInterface, TextInputProps {

}


export default class CustomTextInputMaterial extends Component<all, any> {
    fieldRef = React.createRef();

    public static defaultProps = {

    };//end of DEFAULT PROPS DECLARATION

    render() {
        let { ...otherProps } = this.props;
        return (
            <>
                <TextField
                    // formatText={this.formatText}
                    // onSubmitEditing={this.onSubmit}
                    ref={this.fieldRef}
                    containerStyle={styles.textInput}
                    labelTextStyle={styles.labelTextStyle}
                    titleTextStyle={styles.titleTextStyle}
                    // title="HELLO"//BELOW
                    baseColor="#ABABAB"
                    tintColor={colors.primary}
                    fontSize={14}
                    {...otherProps}
                />
            </>
        )
    } // end of Function Render

} //end of class CustomTextInputMaterial


const styles = StyleSheet.create({
    containerStyle: {
    },
    textInput: {
        marginHorizontal: 16,
    },
    labelTextStyle: {
        color: "pink",
    },
    titleTextStyle: {
        color: "red"
    },
}); //end of StyleSheet STYLES
