import React, { Component } from "react";
import { FlatList, Modal, SafeAreaView, StatusBar, StyleProp, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle, TextInput, Platform } from 'react-native';
import CustomIcon from "./CustomIcon";
import Text from "./CustomText";
import { emptyValidate } from "../helper/genericFunctions";
import globalColors from "../constants/colors";
import { IMLocalized } from "../locales/IMLocalization";
import { SIZE_HEIGHT, SIZE_WIDTH, FONT_SIZE } from "../constants/SIZES";

const colors = {
    statusbar: globalColors.statusbar,
    background: globalColors.background,
    header: globalColors.header,
    white: globalColors.white,
    black: globalColors.black,
    primary: globalColors.primary,
    transparent: globalColors.transparent,
    heading: globalColors.heading,
    divider: globalColors.divider,
    headerBottomColor: globalColors.headerBottomColor
}

interface CustomHeaderInterface {
    style?: StyleProp<ViewStyle>;
    statusBarStyle?: "dark-content" | "light-content" | "default";
    statusBarBackgroundColor?: string;
    headerBackgroundColor?: string;
    containerStyle?: StyleProp<ViewStyle>;

    leftIconType?: 'Ionicons' | 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'Fontisto' | 'MaterialCommunityIcons' | 'MaterialIcons' | "SimpleLineIcons";
    leftIconStyle?: StyleProp<ViewStyle>;
    leftIconName?: any;
    leftIconSize?: number;
    leftIconColor?: any;

    rightIconType?: 'Ionicons' | 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'Fontisto' | 'MaterialCommunityIcons' | 'MaterialIcons' | "SimpleLineIcons";
    rightIconStyle?: StyleProp<ViewStyle>;
    rightIconName?: any;
    rightIconSize?: number;
    rightIconColor?: any;

    leftIconContainerStyle?: StyleProp<ViewStyle>;
    rightIconContainerStyle?: StyleProp<ViewStyle>;
    titleContainerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    title?: any;
    navigation?: any;
    leftIconVisible?: boolean;
    rightIconVisible?: boolean;

    leftIconPress(): any;
    rightIconPress(): any;

    rightMultiple?: boolean;

    rightMultipleIcons?: [
        {
            id: number;
            name: any;
            type: 'Ionicons' | 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'Fontisto' | 'MaterialCommunityIcons' | 'MaterialIcons' | "SimpleLineIcons";
            size: number;
            style: StyleProp<ViewStyle>;
            color: any;
            onPress(): any;
        }
    ],
    optionVisible?: boolean;
    optionIconType?: 'Ionicons' | 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'Fontisto' | 'MaterialCommunityIcons' | 'MaterialIcons' | "SimpleLineIcons";
    optionIconStyle?: StyleProp<ViewStyle>;
    optionIconName?: any;
    optionIconSize?: number;
    optionIconColor?: any;
    optionsData?: [
        {
            id: number,
            text: any,
            onPress(): any;
        }
    ];

    searchVisible?: boolean;
    searchIconType?: 'Ionicons' | 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'Fontisto' | 'MaterialCommunityIcons' | 'MaterialIcons' | "SimpleLineIcons";
    searchIconStyle?: StyleProp<ViewStyle>;
    searchIconName?: any;
    searchIconSize?: number;
    searchIconColor?: any;

    onChangeText(text: any): any;
    searchRightIconVisible?: boolean;

    bottomLine?: boolean;

    rightTextVisible?: boolean;
    rightText?: any;
    rightTextStyle?: StyleProp<TextStyle>;
    rightTextPress(): any,

}

const hori = SIZE_WIDTH["01"];

export default class CustomHeader extends Component<CustomHeaderInterface, any> {

    public static defaultProps = {
        style: {},
        statusBarStyle: "light-content",
        statusBarBackgroundColor: colors.statusbar,
        headerBackgroundColor: colors.header,
        containerStyle: {},

        leftIconType: 'Ionicons',
        leftIconName: 'md-arrow-back',
        leftIconColor: colors.white,
        leftIconSize: SIZE_HEIGHT["30"],//30,
        leftIconStyle: {},

        rightIconType: 'Ionicons',
        rightIconName: 'md-search',
        rightIconColor: colors.white,
        rightIconSize: SIZE_HEIGHT["30"],//30,
        rightIconStyle: {},

        leftIconContainerStyle: {},
        rightIconContainerStyle: {},
        titleContainerStyle: {},
        title: IMLocalized(`App`),// "Default Title",
        navigation: null,
        leftIconVisible: true,
        rightIconVisible: false,

        rightIconPress() { },
        leftIconPress() { },

        rightMultiple: false,
        optionVisible: false,
        optionIconType: 'SimpleLineIcons',
        optionIconStyle: {},
        optionIconName: 'options-vertical',
        optionIconSize: SIZE_HEIGHT["25"],//25,
        optionIconColor: colors.primary,

        searchVisible: false,
        searchIconType: 'Ionicons',
        searchIconStyle: {},
        searchIconName: 'md-search',
        searchIconSize: SIZE_HEIGHT["30"],//30,
        searchIconColor: colors.white,

        onChangeText(text: any) { },
        searchRightIconVisible: false,

        bottomLine: false,

        rightTextVisible: false,
        rightText: "",

        rightTextPress() { },

    };

    constructor(props: CustomHeaderInterface) {
        super(props);
        this.state = {
            optionModalVisible: false,
            optionTop: 80,
            optionDataHeight: 20,
            searchInsideIconRight: SIZE_WIDTH["32"],
            searchInsideIconRightTop: 17,
            serachInputRender: false,
            input: '',
            placeHolder: 'Search'
        };
    }

    serachInputRenderTRUE = () => {
        this.setState({
            serachInputRender: true
        })
    }

    serachInputRenderFALSE = () => {
        this.props.onChangeText("");
        this.setState({
            serachInputRender: false
        })
    }

    //@ts-ignore
    onLayout = (event) => {

        let { height } = event.nativeEvent.layout;
        this.setState({
            optionTop: height
        })
    }
    //@ts-ignore
    onLayoutOptionData = async (event) => {
        //@ts-ignore
        let len = this.props.optionsData.length;
        let size = event.nativeEvent.layout.height;
        await this.setState({
            optionDataHeight: size * len
        })
    }

    render() {
        if (this.state.serachInputRender) {
            return this.serachInputRender()
        }

        let { statusBarStyle, statusBarBackgroundColor, headerBackgroundColor, containerStyle, style, leftIconColor, leftIconName, leftIconSize, leftIconStyle, leftIconType,
            leftIconContainerStyle, rightIconContainerStyle, titleContainerStyle, titleStyle, title, rightIconColor, rightIconName, rightIconSize, rightIconStyle, rightIconType,
            leftIconPress, rightIconPress, leftIconVisible, rightIconVisible, rightMultiple,
            optionVisible, searchVisible, bottomLine, rightTextVisible, rightText, rightTextStyle, rightTextPress } = this.props;

        if (title.length > 20) {
            title = `${title.substring(0, 20)}...`
        }

        if (statusBarBackgroundColor === "#fff" || statusBarBackgroundColor === "#ffffff" || statusBarBackgroundColor === "white") {
            statusBarStyle = "light-content";
        }

        return (
            <View style={[containerStyle, {
                ...styles.container,
                borderBottomWidth: bottomLine ? 1.5 : 0,
                borderBottomColor: colors.headerBottomColor
            },

            ]} onLayout={this.onLayout}>
                <SafeAreaView style={{ ...styles.safeAreaView, backgroundColor: headerBackgroundColor }} />

                <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarBackgroundColor} />
                <View style={[style, { ...styles.headerContainer, backgroundColor: headerBackgroundColor }]}>

                    {leftIconVisible ?
                        <TouchableOpacity style={[leftIconContainerStyle, { ...styles.leftIconContainer }]} onPress={() => {
                            leftIconPress()
                        }}>
                            <CustomIcon name={leftIconName} color={leftIconColor} size={leftIconSize} style={leftIconStyle} iconType={leftIconType} />
                        </TouchableOpacity>
                        : <CustomIcon name={leftIconName} color={"transparent"} size={leftIconSize} style={leftIconStyle} iconType={leftIconType} />}

                    <View style={[{ ...styles.titleContainer, justifyContent: "center", marginLeft: leftIconVisible ? -hori : 0 }, titleContainerStyle,]}>
                        <Text style={[{ ...styles.titleStyle }, titleStyle,]}>{title}</Text>
                    </View>


                    {rightIconVisible && !rightMultiple ?
                        <TouchableOpacity style={[rightIconContainerStyle, {
                            ...styles.rightIconContainerStyle,
                            marginRight: optionVisible ? 0 : hori,
                        }]} onPress={() => {
                            rightIconPress()
                        }}>
                            <CustomIcon name={rightIconName} color={rightIconColor} size={rightIconSize} style={rightIconStyle} iconType={rightIconType} />
                        </TouchableOpacity>
                        :
                        rightMultiple ? this.rightMultipleRender() :
                            <CustomIcon name={rightIconName} color={"transparent"} size={rightIconSize} style={rightIconStyle} iconType={rightIconType} />
                    }
                    {searchVisible && this.searchRender()}
                    {optionVisible &&
                        this.optionRender()
                    }
                    {rightTextVisible &&
                        <TouchableOpacity style={[rightIconContainerStyle, {
                            ...styles.rightIconContainerStyleText,
                            marginRight: optionVisible ? 0 : hori,
                        }]} onPress={() => { rightTextPress() }} >
                            <Text style={[{ ...styles.rightTextStyle }, rightTextStyle,]}>{rightText}</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        );
    }//end of RENDER

    search = () => {
        this.serachInputRenderFALSE();
        this.props.onChangeText(this.state.input);
    }

    clearInput = () => {
        this.props.onChangeText("");
        this.setState({
            input: ''
        })
    }

    onFocus = () => {
        this.clearInput()
    }

    onChangeText = (text: any) => {
        this.setState({
            input: text
        })
        this.props.onChangeText(text);
    }

    onLayoutSearch = (e: any) => {
        let { height } = e.nativeEvent.layout;
        height = height + SIZE_WIDTH["32"];
        this.setState({
            searchInsideIconRight: height
        })

    }

    onLayoutSearchInput = (e: any) => {
        let { height } = e.nativeEvent.layout;
        height = height / 2;
        this.setState({
            searchInsideIconRightTop: height
        })
    }

    serachInputRender = () => {
        let { statusBarStyle, statusBarBackgroundColor, headerBackgroundColor, containerStyle, style, searchIconName, searchIconType, searchIconColor, searchIconSize, searchIconStyle,
            leftIconContainerStyle, rightIconContainerStyle, searchRightIconVisible } = this.props;
        return (
            <View style={[containerStyle, { ...styles.container }]} onLayout={this.onLayout}>
                <SafeAreaView style={{ ...styles.safeAreaView, backgroundColor: headerBackgroundColor }} />

                <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarBackgroundColor} />
                <View style={[style, { ...styles.headerContainer, alignItems: "center", justifyContent: "center", backgroundColor: headerBackgroundColor }]}>
                    <TouchableOpacity style={[leftIconContainerStyle, { ...styles.leftIconContainer }]} onPress={this.serachInputRenderFALSE}>
                        <CustomIcon name={"md-close"} color={colors.white} size={30} style={{}} iconType={"Ionicons"} />
                    </TouchableOpacity>

                    <TextInput
                        style={sIRStyle.textInput}
                        onLayout={this.onLayoutSearchInput}
                        onChangeText={text => { this.onChangeText(text) }}
                        onFocus={this.onFocus}
                        autoFocus
                        value={this.state.input}
                        placeholder={this.state.placeHolder}
                    />

                    {emptyValidate(this.state.input) &&
                        <TouchableOpacity style={{
                            ...sIRStyle.searchIconContainer,
                            top: this.state.searchInsideIconRightTop,
                            right: this.state.searchInsideIconRight
                        }} onPress={() => { this.clearInput() }}>
                            <CustomIcon name={"md-close"} color={"#787a7e"} size={20} style={{}} iconType={"Ionicons"} />
                        </TouchableOpacity>
                    }

                    {searchRightIconVisible &&
                        <TouchableOpacity style={[rightIconContainerStyle, { ...styles.rightIconContainerStyle }]} onPress={this.search} onLayout={this.onLayoutSearch}>
                            <CustomIcon name={searchIconName} color={searchIconColor} size={searchIconSize} style={searchIconStyle} iconType={searchIconType} />
                        </TouchableOpacity>
                    }
                </View>
            </View>
        )
    }

    searchRender = () => {
        let { rightIconContainerStyle, searchIconName, searchIconType, searchIconColor, searchIconSize, searchIconStyle } = this.props;
        return (
            <TouchableOpacity style={[rightIconContainerStyle, { ...styles.rightIconContainerStyle, }]} onPress={this.serachInputRenderTRUE}>
                <CustomIcon name={searchIconName} color={searchIconColor} size={searchIconSize} style={searchIconStyle} iconType={searchIconType} />
            </TouchableOpacity>
        )
    }

    closeModal = () => {
        this.setState({
            optionModalVisible: false
        })
    }

    openModal = () => {
        this.setState({
            optionModalVisible: true
        })
    }

    optionRender = () => {
        let { rightIconContainerStyle, optionIconColor, optionIconName, optionIconSize, optionIconStyle, optionIconType,
            optionsData } = this.props

        var modalBackgroundStyle = {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        };

        if (optionsData === undefined) {
            throw "Required Options Data Array";
        }

        return (
            <View>
                <TouchableOpacity style={[rightIconContainerStyle, { ...styles.rightIconContainerStyle, }]} onPress={this.openModal}>
                    <CustomIcon name={optionIconName} color={optionIconColor} size={optionIconSize} style={optionIconStyle} iconType={optionIconType} />
                </TouchableOpacity>

                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.optionModalVisible}
                    onRequestClose={this.closeModal}>
                    <TouchableOpacity onPress={this.closeModal} style={[oRStyle.container, modalBackgroundStyle, {
                        marginTop: this.state.optionTop
                    }]}>

                        <View style={[oRStyle.innerContainerTransparentStyle, {
                            height: this.state.optionDataHeight
                        }]}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={optionsData}
                                horizontal={false}
                                style={oRStyle.flatList}
                                contentContainerStyle={oRStyle.flatList}
                                ItemSeparatorComponent={() => <View style={oRStyle.seperator} />}
                                renderItem={(data) => {
                                    let { item, index } = data;

                                    return (

                                        <TouchableOpacity onPress={() => item.onPress()}
                                            style={oRStyle.textContainer}
                                            onLayout={(e) => {
                                                if (index === 0) {
                                                    this.onLayoutOptionData(e)
                                                }
                                            }}>
                                            <Text>{item.text}</Text>
                                        </TouchableOpacity>
                                    )
                                }} />
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }

    rightMultipleRender = () => {
        let { rightIconContainerStyle, rightMultiple, rightMultipleIcons, optionVisible } = this.props;
        if (!rightMultiple) {
            return <View />
        }
        //@ts-ignore
        if (rightMultipleIcons.length > 6) {
            throw "Max Length is 6";
        }
        return (
            <View style={[rightIconContainerStyle, , {
                ...rMRStyle.container,
                marginRight: optionVisible ? 0 : hori,
            }]}>
                <FlatList
                    data={rightMultipleIcons}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ paddingRight: 6 }} />}
                    renderItem={(data) => {
                        let { item } = data;
                        return (
                            <TouchableOpacity onPress={() => item.onPress()}>
                                <CustomIcon name={item.name} color={item.color} size={item.size} style={item.style} iconType={item.type} />
                            </TouchableOpacity>
                        )
                    }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
    safeAreaView: {
    },
    headerContainer: {
        flexDirection: 'row',
        paddingTop: SIZE_HEIGHT["08"],
        paddingBottom: SIZE_HEIGHT["08"]
    },
    leftIconContainer: {
        // flex: 1,
        zIndex: 1,
        marginLeft: hori,
    },
    titleContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
    titleStyle: {
        fontSize: FONT_SIZE["20"],
        color: colors.white,
        flexShrink: 1,
        // paddingHorizontal: 20,
    },
    rightTextStyle: {
        fontSize: FONT_SIZE["16"],
        color: colors.primary,
        flexShrink: 1,
    },
    rightIconContainerStyle: {
        // flex: 1,
        alignItems: 'flex-end',
        marginRight: hori,
        // justifyContent: 'flex-end'
    },
    rightIconContainerStyleText: {
        // flex: 1,
        alignItems: 'flex-end',
        marginRight: hori,
        justifyContent: 'center'
    }

});

const rMRStyle = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        marginRight: hori,
        justifyContent: 'flex-end'
    }
})

const oRStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        backgroundColor: '#ecf0f1',
    },
    innerContainerTransparentStyle: {
        backgroundColor: '#fff',
        borderBottomLeftRadius: 6,
    },
    flatList: {
    },
    seperator: {
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5E5",
    },
    textContainer: {
        paddingHorizontal: SIZE_HEIGHT["16"],
        paddingVertical: SIZE_HEIGHT["08"],
    }
})

const sIRStyle = StyleSheet.create({
    textInput: {
        flex: 1, marginHorizontal: SIZE_WIDTH["20"], color: "#787a7e", paddingRight: SIZE_WIDTH["35"],
        backgroundColor: "#f0f2f5", borderRadius: 20, paddingLeft: SIZE_WIDTH["20"], paddingVertical: SIZE_WIDTH["16"],
    },
    searchIconContainer: {
        position: 'absolute',

        top: 17
    }
})

