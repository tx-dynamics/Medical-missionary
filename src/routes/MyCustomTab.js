import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import Text from "../components/CustomText";
import colors from '../constants/colors';
import LocalAssets from "../constants/LocalAssets";
import GV from '../utils/GV';
import ROUTES from './ROUTES';

export const MyCustomTab = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let imageSource = null;
        if (label === ROUTES.Dashboard) {
          imageSource = LocalAssets.BOTTOMTAB[isFocused ? "clientSelected" : "client"];
        } else if (label === ROUTES.SalesList || label === ROUTES.Map) {
          if (label === ROUTES.SalesList && GV.isDoctor) {
            imageSource = LocalAssets.BOTTOMTAB[isFocused ? "storeSelected" : "store"];
          } else if (label === ROUTES.Map && !GV.isDoctor) {
            imageSource = LocalAssets.BOTTOMTAB[isFocused ? "searchSelected" : "search"];
          }

        } else if (label === ROUTES.Chat) {
          imageSource = LocalAssets.BOTTOMTAB[isFocused ? "chatSelected" : "chat"];
        } else if (label === ROUTES.Notification) {
          imageSource = LocalAssets.BOTTOMTAB[isFocused ? "notificationSelected" : "notification"];
        } else if (label === ROUTES.UserProfile) {
          imageSource = LocalAssets.BOTTOMTAB[isFocused ? "profileSelected" : "profile"];
        }

        return imageSource === null ? (<View key={index} />) : (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
          >
            <FastImage
              source={imageSource}
              style={styles.image}
              resizeMode={FastImage.resizeMode.cover}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}//end of customTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 8,
    paddingVertical: 12,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowColor: '#000000',
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 20,
    width: 20,
  },
})