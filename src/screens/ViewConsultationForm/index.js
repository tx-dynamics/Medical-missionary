import React, { Component } from 'react';
import { FlatList, View, } from 'react-native';
import { styles, itemStyles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppHeader from '../../appComponents/AppHeader';
import { IMLocalized } from '../../locales/IMLocalization';
import genericFunctions from '../../helper/genericFunctions';
import CustomButton from '../../components/CustomButton';
//end of IMPORT's

const STATIC_DATA = [{
    id: genericFunctions.guidGenerator(),
    title: IMLocalized(`Describe Health Issue`),
    description: IMLocalized(`It is one of the leading causes of death, comprising more than a quarter of all deaths annually. It is estimated that someone has a heart attack in the U.S. every 43 seconds.`)
}, {
    id: genericFunctions.guidGenerator(),
    title: IMLocalized(`Ailments`),
    description: IMLocalized(`a physical disorder or illness, especially of a minor or chronic nature.`)
},]
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: STATIC_DATA
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
        const { data } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />
                <AppHeader
                    title={IMLocalized(`Consultation Form`)}
                    rightClose
                    rightClosePress={this.backPress} />

                <FlatList
                    style={styles.flatList}
                    data={data}
                    renderItem={this._renderItem}
                    ListFooterComponent={() => {
                        return (
                            <CustomButton
                                title={IMLocalized(`Download as PDF`)}
                                buttonStyle={styles.downloadPDFButton} />
                        )
                    }} />


            </View>
        );
    }//end of RENDER

    _renderItem = ({ item, index }) => {
        return (
            <View style={itemStyles.primaryContainer}>
                <Text style={itemStyles.title}>{item.title}</Text>
                <Text style={itemStyles.description}>{item.description}</Text>
                <View style={itemStyles.seperator} />
            </View>)
    }//end of _renderItem

}//end of CLASSS index