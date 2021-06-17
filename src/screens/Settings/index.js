import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View, } from 'react-native';
import { styles, settingItemStyles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppHeader from '../../appComponents/AppHeader';
import { IMLocalized } from '../../locales/IMLocalization';
import genericFunctions from '../../helper/genericFunctions';
import LocalAssets from '../../constants/LocalAssets';
import FastImage from 'react-native-fast-image';
import ROUTES from '../../routes/ROUTES';
//end of IMPORT's

const STATIC_SETTING_DATA = [{
    id: genericFunctions.guidGenerator(),
    title: IMLocalized(`Security`),
    image: LocalAssets.ICON.security,
    name: IMLocalized(`Password`),
}, {
    id: genericFunctions.guidGenerator(),
    title: IMLocalized(`Help`),
    image: LocalAssets.ICON.help,
    name: IMLocalized(`Help Center`),
}, {
    id: genericFunctions.guidGenerator(),
    title: IMLocalized(`About`),
    image: LocalAssets.ICON.about,
    name: IMLocalized(`Terms of Use`),
}];

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            settingData: STATIC_SETTING_DATA
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
        this.props.navigation.goBack();
    }//end of BACK PRESS

    render = () => {
        const { settingData } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />
                <AppHeader
                    menu={false}
                    leftClose
                    leftClosePress={this.backPress}
                    title={IMLocalized(`Setting`)}
                />

                {/* ******************** DATA Start ******************** */}
                <FlatList
                    data={settingData}
                    renderItem={this._renderSettingItem} />

                {/* ******************** DATA End ******************** */}
            </View>
        );
    }//end of RENDER

    settingItemPress = (item, index) => {
        const navigation = this.props.navigation;
        if (index === 0) {
            navigation.navigate(ROUTES.ChangePassword);
        }
    }//end of settingItemPress

    _renderSettingItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={settingItemStyles.primaryContainer}
                onPress={() => this.settingItemPress(item, index)}>

                {/* ******************** ICON & TITLE Start ******************** */}
                <View style={settingItemStyles.iconTitleContainer}>
                    <FastImage
                        source={item.image}
                        resizeMode={FastImage.resizeMode.contain}
                        style={settingItemStyles.image} />

                    <Text style={settingItemStyles.title}>{item.title}</Text>
                </View>

                {/* ******************** ICON & TITLE End ******************** */}

                {/* ******************** NAME Start ******************** */}
                <Text style={settingItemStyles.name}>{item.name}</Text>

                {/* ******************** NAME End ******************** */}
                <View style={settingItemStyles.seperator} />
            </TouchableOpacity>
        )
    }//end of _renderSettingItem

}//end of CLASSS index