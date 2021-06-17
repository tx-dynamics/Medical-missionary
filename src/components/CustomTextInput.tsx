import * as React from "react";
import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputFocusEventData, TextInputProps, View, TextStyle, StyleProp, } from "react-native";
import CustomText from "./CustomText";
import { emptyValidate } from "../helper/genericFunctions";

interface State {
    isFocused?: boolean;
    inputStyle?: StyleProp<TextStyle>;
}

interface customStates {
    bottomText?: any;
    errorText?: any;
    error?: boolean;
    width?: any;
}

interface allInterface extends State, customStates, TextInputProps {

}

// const BLUE = "#428AF8";
const BLUE = '#adadad';// "#616161";
const LIGHT_GRAY = "#F3F3F3";
const ERROR = "#BB0000";
const TEXT = "#737373"
export const textinputColor = {
    BLUE: BLUE,
    LIGHT_GRAY: LIGHT_GRAY,
    ERROR: ERROR,
    TEXT: TEXT
}

// export default class CustomTextInput extends React.Component<TextInputProps, State> {
export default class CustomTextInput extends React.Component<allInterface, any> {
    state = {
        isFocused: false,
        error: false
    };

    public static defaultProps = {
        width: "75%"
    }
    handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        this.setState({ isFocused: true });
        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    };

    handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        this.setState({ isFocused: false });
        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    };

    render() {
        const { isFocused } = this.state;
        const { onFocus, onBlur, error, errorText, bottomText, width, inputStyle, ...otherProps } = this.props;
        if (this.props.style) {
            console.error("Cannot use Style in custom textinput");
            return;
        }
        return (
            <>
                <TextInput
                    autoCorrect={false}
                    selectionColor={BLUE}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    placeholderTextColor={error ? ERROR : TEXT}
                    style={[styles.textInput,
                    {
                        width: width,
                        borderColor: error ? ERROR : isFocused ? BLUE : LIGHT_GRAY,
                    }
                        , inputStyle]}
                    {...otherProps}
                />
                {error &&
                    <CustomText style={[inputStyle, {
                        color: error ? ERROR : TEXT,
                        textAlign: "left",
                    }]} >{error ? errorText : bottomText}</CustomText>}
            </>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 20,
        fontSize: 12,
        backgroundColor: LIGHT_GRAY
    }
});