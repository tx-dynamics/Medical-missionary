import React, { Component } from 'react';
import { FlatList, TextInput, View, } from 'react-native';
import { styles, itemStyles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppHeader from '../../appComponents/AppHeader';
import CustomIcon from '../../components/CustomIcon';
import colors from '../../constants/colors';
import { IMLocalized } from '../../locales/IMLocalization';
import FakeData from '../../helper/FakeData';
import { randomProfilePictues } from '../../constants/LocalAssets';
import FastImage from 'react-native-fast-image';
import CustomButton from '../../components/CustomButton';
//end of IMPORT's

const STATIC_DATA = [{
    id: FakeData.guid(),
    name: FakeData.name(),
    type: IMLocalized(`Ophthalmologists`),
    image: randomProfilePictues(),
}, {
    id: FakeData.guid(),
    name: FakeData.name(),
    type: IMLocalized(`Gastroenterologists`),
    image: randomProfilePictues(),
}, {
    id: FakeData.guid(),
    name: FakeData.name(),
    type: IMLocalized(`Dermatologists`),
    image: randomProfilePictues(),
}]

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputSearch: '',
            inputSearchError: false,

            data: STATIC_DATA,
            filteredData: [],
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
        const { inputSearch, inputSearchError, data, filteredData } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar useKeyboardAvoidingView={false} />
                <AppHeader
                    menu={false}
                    leftClose
                    leftClosePress={this.backPress} />

                {/* ******************** SEARCH INPUT Start ******************** */}
                <View style={styles.searchInputContainer}>
                    <CustomIcon
                        name={"search"}
                        color={colors.white}
                        size={20}
                        style={styles.searchIcon} />

                    <TextInput
                        placeholder={IMLocalized(`Search...`)}
                        value={inputSearch}

                        onChangeText={(text) => { this.setState({ inputSearch: text, inputSearchError: false }) }}
                        style={styles.searchInput} />
                </View>

                {/* ******************** SEARCH INPUT End ******************** */}

                {/* ******************** TITLE Start ******************** */}
                <Text style={styles.title}>{IMLocalized(`Recent Search`)}</Text>

                {/* ******************** TITLE End ******************** */}
                <FlatList
                    data={data}
                    renderItem={this._renderItem} />
            </View>
        );
    }//end of RENDER

    _renderItem = ({ item, index }) => {
        return (
            <View style={itemStyles.primaryContainer}>
                {/* ******************** PROFILE PICTURE Start ******************** */}
                <FastImage
                    style={itemStyles.profilePicture}
                    source={item.image}
                    resizeMode={FastImage.resizeMode.contain}
                />

                {/* ******************** PROFILE PICTURE End ******************** */}

                {/* ******************** NAME & USERNAME Start ******************** */}
                <View style={itemStyles.nameUsernameContainer}>
                    <Text style={itemStyles.name}>{item.name}</Text>
                    <Text style={itemStyles.username}>{item.type}</Text>
                </View>

                {/* ******************** NAME & USERNAME End ******************** */}

                {/* ******************** VIEW BUTTON Start ******************** */}
                <View style={itemStyles.viewButtonContainer}>
                    <CustomButton
                        onPress={() => this.viewButtonPress(item, index)}
                        title={IMLocalized(`View`)}
                        buttonStyle={itemStyles.viewButton}
                        textStyle={itemStyles.viewButtonText}
                    />
                </View>

                {/* ******************** VIEW BUTTON End ******************** */}

            </View>
        )
    }//end of _renderItem

    viewButtonPress = () => {

    }//end of viewButtonPress

}//end of CLASSS index