import React, { Component } from "react";
import { View } from "react-native";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import Form6 from "./Form6";
import Form7 from "./Form7";
import Form8 from "./Form8";
import Form9 from "./Form9";
//end of IMPORT's

const DEFAULT_FORM = 1;
const FORMS_TYPES = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: DEFAULT_FORM,
    }; //end of INITIALIZING STATE's
  } //end of CONSTRUCTOR

  componentDidMount = async () => {}; //end of COMPONENT_DID_MOUNT

  componentWillUnmount = async () => {}; //end of COMPONENT_WILL_UNMOUNT

  backPressFromForm1 = () => {
    this.props.navigation.pop() && this.props.navigation.goBack();
  }; //end of backPressFromForm1

  backPressFromForm2 = () => {
    this.setState({
      formVisible: 1,
    });
  }; //end of backPressFromForm2

  backPressFromForm3 = () => {
    this.setState({
      formVisible: 2,
    });
  }; //end of backPressFromForm3
  backPressFromForm4 = () => {
    this.setState({
      formVisible: 3,
    });
  };
  backPressFromForm5 = () => {
    this.setState({
      formVisible: 4,
    });
  };
  backPressFromForm6 = () => {
    this.setState({
      formVisible: 5,
    });
  };
  backPressFromForm7 = () => {
    this.setState({
      formVisible: 6,
    });
  };
  backPressFromForm8 = () => {
    this.setState({
      formVisible: 7,
    });
  };
  backPressFromForm9 = () => {
    this.setState({
      formVisible: 8,
    });
  };

  render = () => {
    const { formVisible } = this.state;
    if (formVisible === 9) {
      return (
        <Form9
          props={this.props}
          nextPress={this.submitReport}
          backPress={this.backPressFromForm9}
        />
      );
    } else if (formVisible === 8) {
      return (
        <Form8
          props={this.props}
          nextPress={this.nextPressFromForm8}
          backPress={this.backPressFromForm8}
        />
      );
    } else if (formVisible === 7) {
      return (
        <Form7
          props={this.props}
          nextPress={this.nextPressFromForm7}
          backPress={this.backPressFromForm7}
        />
      );
    } else if (formVisible === 6) {
      return (
        <Form6
          props={this.props}
          nextPress={this.nextPressFromForm6}
          backPress={this.backPressFromForm6}
        />
      );
    } else if (formVisible === 5) {
      return (
        <Form5
          props={this.props}
          nextPress={this.nextPressFromForm5}
          backPress={this.backPressFromForm5}
        />
      );
    } else if (formVisible === 4) {
      return (
        <Form4
          props={this.props}
          nextPress={this.nextPressFromForm4}
          backPress={this.backPressFromForm4}
        />
      );
    } else if (formVisible === 2) {
      return (
        <Form2
          props={this.props}
          nextPress={this.nextPressFromForm2}
          backPress={this.backPressFromForm2}
        />
      );
    } else if (formVisible === 3) {
      return (
        <Form3
          props={this.props}
          nextPress={this.nextPressFromForm3}
          backPress={this.backPressFromForm3}
        />
      );
    } else {
      return (
        <Form1
          props={this.props}
          nextPress={this.nextPressFromForm1}
          backPress={this.backPressFromForm1}
        />
      );
    }
  }; //end of RENDER

  nextPressFromForm1 = () => {
    this.setState({
      formVisible: 2,
    });
  }; //end of nextPressFromForm1

  nextPressFromForm2 = () => {
    this.setState({
      formVisible: 3,
    });
  }; //end of nextPressFromForm2
  nextPressFromForm3 = () => {
    this.setState({
      formVisible: 4,
    });
  };
  nextPressFromForm4 = () => {
    this.setState({
      formVisible: 5,
    });
  };
  nextPressFromForm5 = () => {
    this.setState({
      formVisible: 6,
    });
  };
  nextPressFromForm6 = () => {
    this.setState({
      formVisible: 7,
    });
  };
  nextPressFromForm7 = () => {
    this.setState({
      formVisible: 8,
    });
  };
  nextPressFromForm8 = () => {
    this.setState({
      formVisible: 9,
    });
  };

  submitReport = () => {}; //end of submitReport
} //end of CLASSS index
