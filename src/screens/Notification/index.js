import React, { Component } from 'react';
import { SectionList, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import AppHeader from '../../appComponents/AppHeader';
import CustomStatusBar from '../../components/CustomStatusBar';
import Text from '../../components/CustomText';
import LocalAssets, { randomProfilePictues } from '../../constants/LocalAssets';
import genericFunctions from '../../helper/genericFunctions';
import { IMLocalized } from '../../locales/IMLocalization';
import ROUTES from '../../routes/ROUTES';
import { styles, notificationItemStyles } from './styles';
//end of IMPORT's

const staticData = [{
    id: genericFunctions.guidGenerator(),
    date: 'Today',
    data: [{
        id: genericFunctions.guidGenerator(),
        image: randomProfilePictues(),
        name: genericFunctions.randomNameGenerator(),
        body: genericFunctions.randomDescriptionGenerator(),
    }, {
        id: genericFunctions.guidGenerator(),
        image: randomProfilePictues(),
        name: genericFunctions.randomNameGenerator(),
        body: genericFunctions.randomDescriptionGenerator(),
    }, {
        id: genericFunctions.guidGenerator(),
        image: randomProfilePictues(),
        name: genericFunctions.randomNameGenerator(),
        body: genericFunctions.randomDescriptionGenerator(),
    }]
}];

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notificationData: staticData,
            metaData: false,
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
        const { notificationData, metaData } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />
                <AppHeader title={IMLocalized(`Notifications`)} />

                <SectionList
                    sections={notificationData}
                    keyExtractor={(item, index) => item + index}
                    renderItem={this._renderNotificationItem}
                    style={styles.notificationSectionList}
                    renderSectionHeader={({ section: { date } }) => (
                        <View style={styles.sectionDateTimeHeaderContainer}>
                            <Text style={styles.sectionDateTimeHeader}>{date}</Text>
                        </View>
                    )}
                />

            </View>

        );
    }//end of RENDER

    notificationPress = (item, index) => {
        this.props.navigation.navigate(ROUTES.ClientReport);
    }//end of notificationPress

    _renderNotificationItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={notificationItemStyles.primaryContainer}
                onPress={() => { this.notificationPress(item, index) }}>
                <View style={notificationItemStyles.container}>
                    <FastImage
                        source={item.image}
                        style={notificationItemStyles.image}
                        resizeMode={FastImage.resizeMode.cover} />

                    <View style={notificationItemStyles.nameUsernameContainer}>
                        <Text style={notificationItemStyles.name}>{item.name}</Text>
                        <Text style={notificationItemStyles.body}>{item.body}</Text>
                    </View>
                </View>
                <View style={notificationItemStyles.seperator} />
            </TouchableOpacity>
        )
    }//end of _renderNotificationItem

}//end of CLASSS index