import React, { Component } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import constants from "expo-constants";
//END OF IMPORT's

interface componentInterface {
    visible?: boolean;
    dismiss?: () => void;
}//end of INTERFACE 

export default class CustomModal extends Component<componentInterface, any> {

    constructor(props: componentInterface) {
        super(props);
        this.state = {
        };
    }//end of CONSTRUCTOR

    public static defaultProps = {
        visible: false,
        dismiss() { },
    };//end of DEFAULT PROPS DECLARATION

    render() {
        const { visible, dismiss } = this.props;
        const modalBackgroundStyle = { backgroundColor: 'rgba(0, 0, 0, 0.5)' };
        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={visible}
                onRequestClose={dismiss}>
                <View style={[styles.container, modalBackgroundStyle, {}]}>
                    <View style={[styles.innerContainerTransparentStyle, {}]}>
                        {this.props.children}
                    </View>
                </View>
            </Modal>
        )
    } // end of Function Render

} //end of class CustomModal


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: constants.statusBarHeight,
        backgroundColor: '#ecf0f1',

    },
    innerContainerTransparentStyle: {
        backgroundColor: '#fff',
        width: "60%",
        borderRadius: 5
    },
}); //end of StyleSheet STYLES
