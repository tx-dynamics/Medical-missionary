import React, { Component } from 'react';
import { FlatList, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import CustomIcon from '../components/CustomIcon';
import CustomStatusBar from '../components/CustomStatusBar';
import Text from '../components/CustomText';
import colors from '../constants/colors';
import LocalAssets, { randomProfilePictues } from '../constants/LocalAssets';
import genericFunctions from '../helper/genericFunctions';
import { IMLocalized } from '../locales/IMLocalization';
import GV from '../utils/GV';
import ROUTES from './ROUTES';
//END OF IMPORT's

const staticUserData = {
    id: genericFunctions.guidGenerator(),
    name: genericFunctions.randomNameGenerator(),
    image: randomProfilePictues(),
}

const KEYS = {
    inbox: "inbox",
    setting: "setting",
    notifications: "notifications",
    consultation: "consultation",
    blog: "blog",
    article: "article",
    orders: "orders",
    logout: "logout"
}
const staticData = [{
    id: genericFunctions.guidGenerator(),
    name: IMLocalized(`Inbox`),
    tintColor: colors.white,
    icon: LocalAssets.DRAWER.inbox,
    key: KEYS.inbox,
}, {
    id: genericFunctions.guidGenerator(),
    name: IMLocalized(`Setting`),
    tintColor: colors.white,
    icon: LocalAssets.DRAWER.setings,
    key: KEYS.setting,
}, {
    id: genericFunctions.guidGenerator(),
    name: IMLocalized(`Notifications`),
    tintColor: colors.white,
    icon: LocalAssets.DRAWER.notification,
    key: KEYS.notifications,
}, {
    id: genericFunctions.guidGenerator(),
    name: IMLocalized(`Consultation Forms`),
    tintColor: colors.white,
    icon: LocalAssets.DRAWER.consultation,
    key: KEYS.consultation,
}, {
    id: genericFunctions.guidGenerator(),
    name: IMLocalized(`Blog`),
    tintColor: colors.white,
    icon: LocalAssets.DRAWER.blog,
    key: KEYS.blog,
}, {
    id: genericFunctions.guidGenerator(),
    name: IMLocalized(`Article`),
    tintColor: colors.white,
    icon: LocalAssets.DRAWER.article,
    key: KEYS.article,
}, {
    id: genericFunctions.guidGenerator(),
    name: IMLocalized(`Orders`),
    tintColor: colors.white,
    icon: LocalAssets.DRAWER.orders,
    key: KEYS.orders,
}]

interface componentInterface {
}//end of INTERFACE 

interface IState {
    userData: any;
    data: any;
}
interface all extends componentInterface, IState { }

export default class CustomDrawer extends Component<all, any> {

    public static defaultProps = {
    };//end of DEFAULT PROPS DECLARATION

    state = {
        userData: staticUserData,
        data: staticData,
    };

    closeDrawer = () => {
        //@ts-ignore
        this.props.navigation.closeDrawer();
    }//end of closeDrawer

    render = () => {
        const { } = this.props;
        const { userData, data } = this.state;
        return (
            <View style={{ ...styles.containerStyle }}>
                <CustomStatusBar />
                {/* ******************** USER PROFILE Start ******************** */}
                <View style={styles.userProfilePrimaryContainer}>
                    <TouchableOpacity style={{ zIndex: 1 }}
                        onPress={this.closeDrawer}>
                        <CustomIcon name="close"
                            color={colors.white}
                            size={25}
                            style={styles.userProfileCloseIcon} />
                    </TouchableOpacity>
                    <View style={styles.profileImageContainer}>
                        <FastImage
                            source={userData.image}
                            resizeMode={FastImage.resizeMode.cover}
                            style={styles.profileImage} />
                    </View>
                </View>

                {/* ******************** USER PROFILE End ******************** */}

                {/* ******************** USER NAME TEXt Start ******************** */}
                <Text style={styles.userNameText}>{userData.name}</Text>

                {/* ******************** USER NAME TEXt End ******************** */}


                {/* ******************** DRAWER's Item Start ******************** */}
                <FlatList
                    data={data}
                    renderItem={this._renderItem} />

                {/* ******************** DRAWER's Item End ******************** */}

                <TouchableOpacity style={itemStyles.lastIndexPrimaryContainer}
                    onPress={() => { this.onItemPress(KEYS.logout) }}>
                    <FastImage
                        tintColor={"#383838"}
                        source={LocalAssets.DRAWER.logout}
                        resizeMode={FastImage.resizeMode.stretch}
                        style={itemStyles.icon} />
                    <Text style={itemStyles.text}>{IMLocalized(`Log Out`)}</Text>

                </TouchableOpacity>

            </View>
        )
    } // end of Function Render

    onItemPress = (key: any) => {
        //@ts-ignore 
        const navigation = this.props.navigation;
        if (key === KEYS.inbox) {
            navigation.navigate(ROUTES.Chat);
        } else if (key === KEYS.setting) {
            navigation.navigate(ROUTES.Settings);
        } else if (key === KEYS.notifications) {
            navigation.navigate(ROUTES.Notification);
        } else if (key === KEYS.consultation) {
            navigation.navigate(ROUTES.ConsultationForm);
        } else if (key === KEYS.blog) {
            navigation.navigate(ROUTES.ArticleAndBlogStack, { params: { isArticle: false }, screen: ROUTES.ArticleAndBlogStack });
        } else if (key === KEYS.article) {
            navigation.navigate(ROUTES.ArticleAndBlogStack, { params: { isArticle: true }, screen: ROUTES.ArticleAndBlogStack });
        } else if (key === KEYS.orders) {
            navigation.navigate(ROUTES.Orders);
        } else if (key === KEYS.logout) {
            navigation.popToTop();
        }
    }//end of onItemPress

    _renderItem = ({ item, index }: any) => {
        if (item.key === KEYS.orders && GV.isDoctor === false) {
            return <View />
        }
        return (
            <TouchableOpacity style={itemStyles.primaryContainer}
                onPress={() => { this.onItemPress(item.key) }}>
                <FastImage
                    tintColor={item.tintColor}
                    source={item.icon}
                    resizeMode={FastImage.resizeMode.stretch}
                    style={itemStyles.icon} />
                <Text style={itemStyles.text}>{item.name}</Text>

            </TouchableOpacity>
        )
    }//end of _renderItem

} //end of class CustomDrawer

export const itemStyles = StyleSheet.create({
    primaryContainer: {

        flexDirection: "row",
        alignItems: "center",
        marginLeft: "20%",
        marginTop: 8,
        marginBottom: 12,
    },
    lastIndexPrimaryContainer: {
        // flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "20%",
        marginTop: 8,
        marginBottom: 12,
        // alignSelf: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: colors.white,
    },
    text: {
        marginLeft: 8,
        fontSize: 16,
        color: colors.white,
        fontWeight: Platform.OS === "ios" ? "500" : "700",
    },
});//end of  itemStyles

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    userProfilePrimaryContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    userProfileCloseIcon: {
        marginLeft: 8,
    },
    profileImageContainer: {
        flex: 1,
        alignItems: "center",
        marginLeft: -30,
    },
    profileImage: {
        height: 60,
        width: 60,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.white,
        borderRadius: 60,
    },
    userNameText: {
        fontSize: 16,
        color: colors.white,
        textAlign: "center",
        marginTop: 8,
        marginBottom: 16,
    },

}); //end of StyleSheet STYLES
