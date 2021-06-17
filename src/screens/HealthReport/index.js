import React, { Component } from 'react';
import { View } from 'react-native';
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
//end of IMPORT's

const DEFAULT_FORM = 1;
const FORMS_TYPES = 1 | 2 | 3;

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisible: DEFAULT_FORM
        };//end of INITIALIZING STATE's
    }//end of CONSTRUCTOR

    componentDidMount = async () => {
    }//end of COMPONENT_DID_MOUNT

    componentWillUnmount = async () => {
    }//end of COMPONENT_WILL_UNMOUNT

    backPressFromForm1 = () => {
        this.props.navigation.pop() && this.props.navigation.goBack();
    }//end of backPressFromForm1

    backPressFromForm2 = () => {
        this.setState({
            formVisible: 1,
        })
    }//end of backPressFromForm2

    backPressFromForm3 = () => {
        this.setState({
            formVisible: 2,
        })
    }//end of backPressFromForm3


    render = () => {
        const { formVisible } = this.state;
        if (formVisible === 2) {
            return (
                <Form2
                    props={this.props}
                    nextPress={this.nextPressFromForm2}
                    backPress={this.backPressFromForm2} />
            );
        } else if (formVisible === 3) {
            return (
                <Form3
                    props={this.props}
                    submitReport={this.submitReport}
                    backPress={this.backPressFromForm3} />
            );
        } else {
            return (
                <Form1
                    props={this.props}
                    nextPress={this.nextPressFromForm1}
                    backPress={this.backPressFromForm1} />
            );
        }

    }//end of RENDER

    nextPressFromForm1 = () => {
        this.setState({
            formVisible: 2,
        })
    }//end of nextPressFromForm1

    nextPressFromForm2 = () => {
        this.setState({
            formVisible: 3,
        })
    }//end of nextPressFromForm2

    submitReport = () => {

    }//end of submitReport


}//end of CLASSS index