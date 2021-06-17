import React, { Component } from 'react';
import { FlatList, TextInput, TouchableOpacity, View, } from 'react-native';
import { styles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppHeader from '../../appComponents/AppHeader';
import OrderCard from '../Orders/OrderCard';
import genericFunctions from '../../helper/genericFunctions';
import FakeData from '../../helper/FakeData';
import { randomBooks } from '../../constants/LocalAssets';
import { IMLocalized } from '../../locales/IMLocalization';
import ROUTES from '../../routes/ROUTES';
import CustomModal from '../../components/CustomModal';
import CustomIcon from '../../components/CustomIcon';
import CustomButton from '../../components/CustomButton';
//end of IMPORT's

const STATIC_DATA = [{
    id: FakeData.guid(),
    name: FakeData.bookName(),
    price: FakeData.getInt(10, 1000),
    quantity: FakeData.getInt(0, 100),
    image: randomBooks(),
    title: FakeData.title(),
    description: FakeData.description(),
}, {
    id: FakeData.guid(),
    name: FakeData.bookName(),
    price: FakeData.getInt(10, 1000),
    quantity: FakeData.getInt(0, 100),
    image: randomBooks(),
    title: FakeData.title(),
    description: FakeData.description(),
}, {
    id: FakeData.guid(),
    name: FakeData.bookName(),
    price: FakeData.getInt(10, 1000),
    quantity: FakeData.getInt(0, 100),
    image: randomBooks(),
    title: FakeData.title(),
    description: FakeData.description(),
}, {
    id: FakeData.guid(),
    name: FakeData.bookName(),
    price: FakeData.getInt(10, 1000),
    quantity: FakeData.getInt(0, 100),
    image: randomBooks(),
    title: FakeData.title(),
    description: FakeData.description(),
}]
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: STATIC_DATA,

            requestModalVisible: false,
            startOrderVisible: false,

            inputDays: '2'
        };//end of INITIALIZING STATE's
    }//end of CONSTRUCTOR

    _showRequestModal = () => { this.setState({ requestModalVisible: true }) };
    _hideRequestModal = () => { this.setState({ requestModalVisible: false }) };

    _showStartOrder = () => { this.setState({ startOrderVisible: true }) };
    _hideStartOrder = () => { this.setState({ startOrderVisible: false }) };

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
        const { data, requestModalVisible, startOrderVisible, inputDays } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />

                <AppHeader
                    title={IMLocalized(`Orders Request`)}
                    rightClose
                    rightClosePress={this.backPress} />

                <FlatList
                    data={data}
                    contentContainerStyle={styles.flatList}
                    renderItem={({ item, index }) => {
                        return (
                            <OrderCard
                                topSeparator={index === 0}
                                onPress={() => { this.orderItemPress(item, index) }}
                                bookName={item.name}
                                image={item.image}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        )
                    }} />


                {/* ******************** MODAL's Start ******************** */}
                <CustomModal
                    visible={requestModalVisible}
                    dismiss={this._hideRequestModal}>
                    {/* ******************** CLOSE ICON Start ******************** */}
                    <TouchableOpacity
                        style={styles.closeIconContainer}
                        onPress={() => {
                            if (startOrderVisible) {
                                this._hideStartOrder();
                            } else {
                                this._hideRequestModal();
                            }
                        }}>
                        <CustomIcon
                            size={25}
                            name={"close"} />
                    </TouchableOpacity>

                    {/* ******************** CLOSE ICON End ******************** */}
                    {startOrderVisible ?
                        <>
                            <Text style={styles.deliveryTimeTitle}>{IMLocalized(`Delivery time`)}</Text>
                            <TextInput
                                placeholder={IMLocalized(`No of days`)}
                                value={inputDays}
                                onChangeText={(text) => { this.setState({ inputDays: `${text}` }) }}
                                keyboardType={"number-pad"}
                                maxLength={2}
                                style={styles.deliveryTimeInput} />

                            <CustomButton
                                title={IMLocalized(`Submit`)}
                                buttonStyle={styles.deliveryTimeButton}
                                onPress={() => { this._hideStartOrder(); this._hideRequestModal(); }} />
                        </>
                        :
                        <>
                            <TouchableOpacity onPress={this._showStartOrder}>
                                <Text style={styles.startOrderText}>{IMLocalized(`Start Order`)}</Text>
                            </TouchableOpacity>
                            <View style={styles.separator} />
                            <TouchableOpacity onPress={this._hideRequestModal}>
                                <Text style={styles.cancelOrderText}>{IMLocalized(`Cancel Order`)}</Text>
                            </TouchableOpacity>
                        </>
                    }
                </CustomModal>

                {/* ******************** MODAL's End ******************** */}
            </View>
        );
    }//end of RENDER

    orderItemPress = (item, index) => {
        this._showRequestModal();
    }//end of orderItemPress

}//end of CLASSS index