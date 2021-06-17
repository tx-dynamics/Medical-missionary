import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { styles, bookItemStyles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppHeader from '../../appComponents/AppHeader';
import { IMLocalized } from '../../locales/IMLocalization';
import genericFunctions from '../../helper/genericFunctions';
import LocalAssets, { randomProfilePictues } from '../../constants/LocalAssets';
import FastImage from 'react-native-fast-image';
import CustomIcon from '../../components/CustomIcon';
import CustomButton from '../../components/CustomButton';
import ROUTES from '../../routes/ROUTES';
import GV from '../../utils/GV';
//end of IMPORT's
const staticData = [{
    id: genericFunctions.guidGenerator(),
    authorName: genericFunctions.randomNameGenerator(),
    authorImage: randomProfilePictues(),
    title: genericFunctions.randomBookNameGenerator(),
    description: genericFunctions.randomDescriptionGenerator(),
    image: LocalAssets.BOOKS[`book1`],
    numberOfSold: genericFunctions.getRandomInt(1, 100),
    isAvailable: true,
    price: genericFunctions.getRandomInt(100, 10000)
}, {
    id: genericFunctions.guidGenerator(),
    authorName: genericFunctions.randomNameGenerator(),
    authorImage: randomProfilePictues(),
    title: genericFunctions.randomBookNameGenerator(),
    description: genericFunctions.randomDescriptionGenerator(),
    image: LocalAssets.BOOKS[`book2`],
    numberOfSold: genericFunctions.getRandomInt(1, 100),
    isAvailable: true,
    price: genericFunctions.getRandomInt(100, 10000)
}, {
    id: genericFunctions.guidGenerator(),
    authorName: genericFunctions.randomNameGenerator(),
    authorImage: randomProfilePictues(),
    title: genericFunctions.randomBookNameGenerator(),
    description: genericFunctions.randomDescriptionGenerator(),
    image: LocalAssets.BOOKS[`book3`],
    numberOfSold: genericFunctions.getRandomInt(1, 100),
    isAvailable: true,
    price: genericFunctions.getRandomInt(100, 10000)
}, {
    id: genericFunctions.guidGenerator(),
    authorName: genericFunctions.randomNameGenerator(),
    authorImage: randomProfilePictues(),
    title: genericFunctions.randomBookNameGenerator(),
    description: genericFunctions.randomDescriptionGenerator(),
    image: LocalAssets.BOOKS[`book7`],
    numberOfSold: genericFunctions.getRandomInt(1, 100),
    isAvailable: true,
    price: genericFunctions.getRandomInt(100, 10000)
}, {
    id: genericFunctions.guidGenerator(),
    authorName: genericFunctions.randomNameGenerator(),
    authorImage: randomProfilePictues(),
    title: genericFunctions.randomBookNameGenerator(),
    description: genericFunctions.randomDescriptionGenerator(),
    image: LocalAssets.BOOKS[`book8`],
    numberOfSold: genericFunctions.getRandomInt(1, 100),
    isAvailable: true,
    price: genericFunctions.getRandomInt(100, 10000)
}, {
    id: genericFunctions.guidGenerator(),
    authorName: genericFunctions.randomNameGenerator(),
    authorImage: randomProfilePictues(),
    title: genericFunctions.randomBookNameGenerator(),
    description: genericFunctions.randomDescriptionGenerator(),
    image: LocalAssets.BOOKS[`book9`],
    numberOfSold: genericFunctions.getRandomInt(1, 100),
    isAvailable: true,
    price: genericFunctions.getRandomInt(100, 10000)
}, {
    id: genericFunctions.guidGenerator(),
    authorName: genericFunctions.randomNameGenerator(),
    authorImage: randomProfilePictues(),
    title: genericFunctions.randomBookNameGenerator(),
    description: genericFunctions.randomDescriptionGenerator(),
    image: LocalAssets.BOOKS[`book4`],
    numberOfSold: genericFunctions.getRandomInt(1, 100),
    isAvailable: true,
    price: genericFunctions.getRandomInt(100, 10000)
}, {
    id: genericFunctions.guidGenerator(),
    authorName: genericFunctions.randomNameGenerator(),
    authorImage: randomProfilePictues(),
    title: genericFunctions.randomBookNameGenerator(),
    description: genericFunctions.randomDescriptionGenerator(),
    image: LocalAssets.BOOKS[`book5`],
    numberOfSold: genericFunctions.getRandomInt(1, 100),
    isAvailable: true,
    price: genericFunctions.getRandomInt(100, 10000)
}, {
    id: genericFunctions.guidGenerator(),
    authorName: genericFunctions.randomNameGenerator(),
    authorImage: randomProfilePictues(),
    title: genericFunctions.randomBookNameGenerator(),
    description: genericFunctions.randomDescriptionGenerator(),
    image: LocalAssets.BOOKS[`book6`],
    numberOfSold: genericFunctions.getRandomInt(1, 100),
    isAvailable: true,
    price: genericFunctions.getRandomInt(100, 10000)
}]
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookData: staticData,
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

    deleteBook = async (index) => {
        const { bookData, metaData } = this.state;
        bookData.splice(index, 1);
        this.setState({
            bookData,
            metaData: !metaData,
        })
    }//end of deleteBook

    render = () => {
        const { bookData, metaData } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />
                <AppHeader
                    title={IMLocalized(`Sales List`)} />


                {/* ******************** BOOK's LIST Start ******************** */}
                <FlatList
                    data={bookData}
                    numColumns={2}
                    style={styles.bookFlatList}
                    extraData={metaData}
                    contentContainerStyle={styles.bookFlatListContentContainer}
                    ItemSeparatorComponent={() => { return (<View style={styles.flatListSeperator} />) }}
                    renderItem={this._renderBookItem} />

                {/* ******************** BOOK's LIST End ******************** */}

                {/* ******************** ADD TO SALES Start ******************** */}
                <View style={styles.addToSaleButtonContainer}>
                    <CustomButton buttonStyle={styles.addToSaleButton}
                        onPress={this.addToSalesPress}
                        title={IMLocalized(`Add to Sales`)} />
                </View>

                {/* ******************** ADD TO SALES End ******************** */}

            </View>
        );
    }//end of RENDER

    addToSalesPress = () => {
        if (GV.isDoctor) {
            this.props.navigation.navigate(ROUTES.AddSaleItem)
        } else {
            this.props.navigation.navigate(ROUTES.SalesListDetail)
        }

    }//end of addToSalesPress


    itemPress = (item, index) => {
        if (GV.isDoctor) {
            this.props.navigation.navigate(ROUTES.AddSaleItem, {
                isBuying: true,
                bookData: item,
                bookDataIndex: index,
            })
        } else {
            this.props.navigation.navigate(ROUTES.SalesListDetail, {
                isBuying: true,
                bookData: item,
                bookDataIndex: index,
            })
        }



    }//end of itemPress
    _renderBookItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => this.itemPress(item, index)}
                style={
                    { ...bookItemStyles.primaryContainer },
                    index % 2 == 0 ? { marginRight: 10 } : { marginLeft: 10 }
                }>
                <FastImage
                    source={item.image}
                    style={bookItemStyles.bookImage}
                    resizeMode={FastImage.resizeMode.stretch} />

                {/* ******************** SOLD NUMBER Start ******************** */}
                <View style={bookItemStyles.numberOfSoldContainer}>
                    <Text style={bookItemStyles.numberOfSold}>{IMLocalized(`${item.numberOfSold} Soldout`)}</Text>
                </View>

                {/* ******************** SOLD NUMBER End ******************** */}

                {/* ******************** PROFILE PICTURE Start ******************** */}
                <View style={bookItemStyles.profilePictureContainer}>
                    <FastImage
                        source={item.authorImage}
                        style={bookItemStyles.profilePicture}
                        resizeMode={FastImage.resizeMode.contain} />
                </View>

                {/* ******************** PROFILE PICTURE End ******************** */}

                {/* ******************** DELETE BUTTON Start ******************** */}
                <TouchableOpacity
                    onPress={() => { this.deleteBook(index) }}
                    style={bookItemStyles.deleteButtonContainer}>
                    <CustomIcon
                        iconType="MaterialCommunityIcons"
                        name="delete"
                        style={bookItemStyles.deleteButtonIcon} />
                </TouchableOpacity>

                {/* ******************** DELETE BUTTON End ******************** */}
            </TouchableOpacity>
        )
    }//end of _renderBookItem

}//end of CLASSS index