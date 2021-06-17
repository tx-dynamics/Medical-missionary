import React, { Component } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import AppHeader from '../../appComponents/AppHeader';
import CustomStatusBar from '../../components/CustomStatusBar';
import Text from '../../components/CustomText';
import LocalAssets, { randomProfilePictues } from '../../constants/LocalAssets';
import genericFunctions from '../../helper/genericFunctions';
import { IMLocalized } from '../../locales/IMLocalization';
import ROUTES from '../../routes/ROUTES';
import { styles, profileItemStyles } from './styles';
//end of IMPORT's

const staticData = [{
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomUsernameGenerator()}`,
    count: `${genericFunctions.getRandomInt(1, 999)}`,
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomUsernameGenerator()}`,
    count: `${genericFunctions.getRandomInt(1, 99)}`,
    image: randomProfilePictues(),
}, {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    username: `${genericFunctions.randomUsernameGenerator()}`,
    count: `${genericFunctions.getRandomInt(1, 99)}`,
    image: randomProfilePictues(),
}]

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: staticData,
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
        const { profileData, metaData } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />
                <AppHeader title={IMLocalized(`Chats`)} />

                <FlatList
                    data={profileData}
                    extraData={metaData}
                    renderItem={this._renderProfileItem}
                    style={styles.profileFlatlist} />
            </View>

        );
    }//end of RENDER

    chatPress = (item, index) => {
        this.props.navigation.navigate(ROUTES.Inbox);
    }//end of chatPress

    _renderProfileItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={profileItemStyles.primaryContainer}
                onPress={() => { this.chatPress(item, index) }}>
                <View style={profileItemStyles.container}>
                    <FastImage
                        source={item.image}
                        style={profileItemStyles.image}
                        resizeMode={FastImage.resizeMode.cover} />

                    <View style={profileItemStyles.nameUsernameContainer}>
                        <Text style={profileItemStyles.name}>{item.name}</Text>
                        <Text style={profileItemStyles.username}>@{item.username}</Text>
                    </View>

                    {item.count > 0 &&
                        <View style={profileItemStyles.countNumberContainer}>
                            <Text style={profileItemStyles.countNumber}>
                                {item.count > 99 ? `99+` : item.count}
                            </Text>
                        </View>
                    }
                </View>
                <View style={profileItemStyles.seperator} />
            </TouchableOpacity>
        )
    }//end of _renderProfileItem

}//end of CLASSS index