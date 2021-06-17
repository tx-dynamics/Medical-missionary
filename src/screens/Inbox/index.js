import React, { Component } from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import AppHeader from '../../appComponents/AppHeader';
import CustomStatusBar from '../../components/CustomStatusBar';
import Text from '../../components/CustomText';
import { IMLocalized } from '../../locales/IMLocalization';
import { styles } from './styles';
import { GiftedChat, Send, Composer } from 'react-native-gifted-chat'
import FastImage from 'react-native-fast-image';
import LocalAssets from '../../constants/LocalAssets';
//end of IMPORT's

const USER_ID = 1;
const staticData = [
    {
        _id: USER_ID,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
];
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageData: staticData,
            metaData: false,

            uesrID: USER_ID,
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

    onSend = (messages = []) => {
        this.setState((previousState) => {
            const sentMessages = [{ ...messages[0], sent: true, received: false }]
            return {
                messageData: GiftedChat.append(
                    previousState.messageData,
                    sentMessages,
                    Platform.OS !== 'web',
                ),
            }
        })
    }//end of onSend    

    render = () => {
        const { messageData, metaData, uesrID } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar useKeyboardAvoidingView={false} />
                <AppHeader
                    menu={false}
                    leftClose
                    leftClosePress={this.backPress}
                    title={IMLocalized(`Inbox`)} />

                <GiftedChat
                    messages={messageData}
                    onSend={messages => { this.onSend(messages) }}
                    user={{
                        _id: uesrID,
                    }}
                    // bottomOffset={0}
                    renderUsernameOnMessage
                    scrollToBottom
                    infiniteScroll
                    // bottomOffset={30}
                    renderComposer={(props) => {
                        return (
                            <View style={styles.composerPrimaryContainer}>
                                <FastImage
                                    source={LocalAssets.PROFILE_PICTURES.profile1}
                                    style={styles.sendProfilePicture}
                                    resizeMode={FastImage.resizeMode.contain} />
                                <Composer
                                    {...props}
                                    textInputStyle={styles.sendInputStyle}
                                    placeholder={IMLocalized(`Write a message...`)}
                                    placeholderTextColor={"#8895AA"}
                                />

                                <Send
                                    {...props}
                                    disabled={!props.text}
                                    containerStyle={styles.sendIconContainer}>
                                    <FastImage
                                        source={LocalAssets.ICON.send}
                                        style={styles.sendIcon}
                                        resizeMode={FastImage.resizeMode.contain} />
                                </Send>

                            </View>
                        )
                    }}
                // renderSend={(props) => {
                //     return (
                //         <Send
                //         {...props}
                //         disabled={!props.text}
                //         containerStyle={styles.sendIconContainer}>
                //         <FastImage
                //             source={LocalAssets.ICON.send}
                //             style={styles.sendIcon}
                //             resizeMode={FastImage.resizeMode.contain} />
                //     </Send>     
                //     )
                // }}

                />

            </View>

        );
    }//end of RENDER

}//end of CLASSS index