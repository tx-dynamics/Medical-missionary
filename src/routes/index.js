import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from 'react';
import ROUTES from './ROUTES';
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MyCustomTab } from './MyCustomTab';
import CustomDrawer from './CustomDrawer';
// screens Import
import Dashboard from "../screens/Dashboard";
import Signup from "../screens/Signup";
import Signin from "../screens/Signin";
import ForgotPassword from "../screens/ForgotPassword";
import EntryPoint from "../screens/EntryPoint";
import Profile from "../screens/Profile";
import SalesList from "../screens/SalesList";
import SalesListDetail from "../screens/SalesListDetail";
import Sample from "../screens/Sample";
import Chat from "../screens/Chat";
import Inbox from "../screens/Inbox";
import Notification from "../screens/Notification";
import ClientReport from "../screens/ClientReport";
import UserProfile from "../screens/UserProfile";
import EditProfile from "../screens/EditProfile";
import Settings from "../screens/Settings";
import ChangePassword from "../screens/ChangePassword";
import ConsultationForm from "../screens/ConsultationForm";
import ViewConsultationForm from "../screens/ViewConsultationForm";
import ArticleAndBlog from "../screens/ArticleAndBlog";
import CreateArticleAndBlog from "../screens/CreateArticleAndBlog";
import Map from "../screens/Map";
import Search from "../screens/Search";
import AddSaleItem from "../screens/AddSaleItem";
import Orders from "../screens/Orders";
import OrderActive from "../screens/OrderActive";
import OrderActiveDetail from "../screens/OrderActiveDetail";
import OrderCompleted from "../screens/OrderCompleted";
import OrderRequest from "../screens/OrderRequest";
import DoctorProfile from "../screens/DoctorProfile";
import DoctorSaleItemDetail from "../screens/DoctorSaleItemDetail";
import Address from "../screens/Address";
import HealthReport from "../screens/HealthReport";
// screens Import End

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const initialRouteName = __DEV__ ? ROUTES.EntryPoint : ROUTES.EntryPoint;

export default class index extends Component {
    constructor(props) {
        super(props);
    }//end of constructor

    render = () => {
        return (
            <NavigationContainer independent={true}>
                <Stack.Navigator initialRouteName={initialRouteName} headerMode={'none'}>
                    <Stack.Screen name={ROUTES.EntryPoint} component={EntryPoint} />
                    <Stack.Screen name={ROUTES.Signup} component={Signup} />

                    <Stack.Screen name={ROUTES.Signin} component={Signin} />
                    <Stack.Screen name={ROUTES.ForgotPassword} component={ForgotPassword} />
                    <Stack.Screen name={ROUTES.Dashboard} component={this.renderDrawerScreen} />

                </Stack.Navigator>
            </NavigationContainer>
        )
    }//end oF RENDER 

    renderDrawerScreen = () => {
        return (
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawer {...props} setIsLoggedIn={this.setIsLoggedIn} />} >
                <Drawer.Screen name={ROUTES.Dashboard} component={this.renderBottomTabScreen} />
                <Drawer.Screen name={ROUTES.Settings} component={this.settingStack} />
                <Drawer.Screen name={ROUTES.Orders} component={this.orderStack} />

                {/* <Drawer.Screen name={ROUTES.Chat} component={() => this.renderBottomTabScreen(ROUTES.Chat)} /> */}
                {/* <Drawer.Screen name={ROUTES.Notification} component={this.notificationStack} /> */}
            </Drawer.Navigator>
        )
    }//end of renderDrawerScreen
    orderStack = () => {
        return (
            <Stack.Navigator headerMode={'none'}>
                <Stack.Screen name={ROUTES.Orders} component={Orders} />
                <Stack.Screen name={ROUTES.OrderActive} component={OrderActive} />
                <Stack.Screen name={ROUTES.OrderActiveDetail} component={OrderActiveDetail} />
                <Stack.Screen name={ROUTES.OrderCompleted} component={OrderCompleted} />
                <Stack.Screen name={ROUTES.OrderRequest} component={OrderRequest} />
                <Stack.Screen name={ROUTES.AddSaleItem} component={AddSaleItem} />
            </Stack.Navigator>
        )
    }//end of orderStack

    mapStack = () => {
        return (
            <Stack.Navigator headerMode={'none'}>
                <Stack.Screen name={ROUTES.Map} component={Map} />
                <Stack.Screen name={ROUTES.Search} component={Search} />
            </Stack.Navigator>
        )
    }

    consultationFormStack = () => {
        return (
            <Stack.Navigator headerMode={'none'}>
                <Stack.Screen name={ROUTES.ConsultationForm} component={ConsultationForm} />
                <Stack.Screen name={ROUTES.ViewConsultationForm} component={ViewConsultationForm} />
            </Stack.Navigator>
        )
    }//end of ConsultationForm

    settingStack = () => {
        return (
            <Stack.Navigator headerMode={'none'}>
                <Stack.Screen name={ROUTES.Settings} component={Settings} />
                <Stack.Screen name={ROUTES.ChangePassword} component={ChangePassword} />
            </Stack.Navigator>
        )
    }

    renderBottomTabScreen = (bottomTabInitialRouteName = ROUTES.Dashboard) => {
        return (
            <Tab.Navigator
                lazy
                sceneContainerStyle={{
                    borderBottomWidth: StyleSheet.hairlineWidth * 2,
                    borderBottomColor: "#e7e7e7",
                }}
                tabBar={props => <MyCustomTab {...props} />}
                initialRouteName={bottomTabInitialRouteName}>

                <Tab.Screen name={ROUTES.Dashboard} component={this.clientStack} />
                <Tab.Screen name={ROUTES.Map} component={this.mapStack} />
                <Tab.Screen name={ROUTES.SalesList} component={this.salesStack} />
                <Tab.Screen name={ROUTES.Chat} component={this.chatStack} />
                <Tab.Screen name={ROUTES.Notification} component={this.notificationStack} />
                <Tab.Screen name={ROUTES.UserProfile} component={this.userProfileStack} />
                <Tab.Screen name={ROUTES.ConsultationForm} component={this.consultationFormStack} />
                <Tab.Screen name={ROUTES.ArticleAndBlogStack} component={this.articleAndBlogStack} />
            </Tab.Navigator>

        )
    }//end of renderBottomTabScreen

    articleAndBlogStack = () => {
        return (
            <Stack.Navigator headerMode={'none'}>
                <Stack.Screen name={ROUTES.ArticleAndBlogStack} component={ArticleAndBlog} />
                <Stack.Screen name={ROUTES.CreateArticleAndBlog} component={CreateArticleAndBlog} />
            </Stack.Navigator>
        )
    }//end of ArticleAndBlog

    userProfileStack = () => {
        return (
            <Stack.Navigator headerMode={'none'}>
                <Stack.Screen name={ROUTES.UserProfile} component={UserProfile} />
                <Stack.Screen name={ROUTES.EditProfile} component={EditProfile} />
            </Stack.Navigator>
        )
    }

    notificationStack = () => {
        return (
            <Stack.Navigator headerMode={'none'}>
                <Stack.Screen name={ROUTES.Notification} component={Notification} />
                <Stack.Screen name={ROUTES.ClientReport} component={ClientReport} />
            </Stack.Navigator>
        )
    }//end of notificationStack

    chatStack = () => {
        return (
            <Stack.Navigator headerMode={'none'}>
                <Stack.Screen name={ROUTES.Chat} component={Chat} />
                <Stack.Screen name={ROUTES.Inbox} component={Inbox} />
            </Stack.Navigator>
        )
    }//end of chatStack

    clientStack = () => {
        return (
            <Stack.Navigator headerMode={'none'}>
                <Stack.Screen name={ROUTES.Dashboard} component={Dashboard} />
                <Stack.Screen name={ROUTES.Profile} component={Profile} />
                <Stack.Screen name={ROUTES.DoctorProfile} component={DoctorProfile} />
                <Stack.Screen name={ROUTES.DoctorSaleItemDetail} component={DoctorSaleItemDetail} />
                <Stack.Screen name={ROUTES.Address} component={Address} />
                <Stack.Screen name={ROUTES.HealthReport} component={HealthReport} />
            </Stack.Navigator>
        )
    }//end of clientStack

    salesStack = () => {
        return (
            <Stack.Navigator headerMode={'none'}>
                <Stack.Screen name={ROUTES.SalesList} component={SalesList} />
                <Stack.Screen name={ROUTES.AddSaleItem} component={AddSaleItem} />
                <Stack.Screen name={ROUTES.SalesListDetail} component={SalesListDetail} />
            </Stack.Navigator>
        )
    }//end of salesStack


}//end of Class
