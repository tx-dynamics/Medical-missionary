import React, { Component } from 'react';
import { View } from 'react-native';
import AppHeader from '../../appComponents/AppHeader';
import CustomStatusBar from '../../components/CustomStatusBar';
import Text from '../../components/CustomText';
import { IMLocalized } from '../../locales/IMLocalization';
import { styles } from './styles';
//end of IMPORT's

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };//end of INITIALIZING STATE's
    }//end of CONSTRUCTOR

    componentDidMount = async () => {
        this.load();

    }//end of COMPONENT_DID_MOUNT

    componentWillUnmount = async () => {
    }//end of COMPONENT_WILL_UNMOUNT

    load = () => {

    }//end of LOAD FUNCTION

    backPress = () => {
        this.props.navigation.pop() && this.props.navigation.goBack();
    }//end of BACK PRESS

    render = () => {
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />
                <AppHeader menu={false} />
                <Text style={styles.signupHeading}>{IMLocalized(`${this.props.route.name}`)}</Text>
                <View style={styles.signupHeadingBottomSeperator} />

            </View>

        );
    }//end of RENDER

}//end of CLASSS index