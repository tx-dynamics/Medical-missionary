import 'react-native-gesture-handler';
import * as React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Routes from './src/routes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Orientation from 'react-native-orientation-locker';

AntDesign.loadFont();
Entypo.loadFont();
EvilIcons.loadFont();
Feather.loadFont();
FontAwesome.loadFont();
Fontisto.loadFont();
Ionicons.loadFont();
MaterialCommunityIcons.loadFont();
MaterialIcons.loadFont();
Foundation.loadFont();
SimpleLineIcons.loadFont();

LogBox.ignoreAllLogs();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.orientationLock();
  }//end of constructor

  orientationLock = () => {
    Orientation.lockToPortrait();
  }//end of orientationLock

  componentDidMount = async () => {
    this.orientationLock();
  }//end of componentDidMount

  render = () => {
    return (
      <SafeAreaProvider>
        <NavigationContainer>

          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }//end of RENDER
}//end of CLASS

