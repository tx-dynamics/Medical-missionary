import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { hexToRgbA } from '../../helper/genericFunctions';

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },


    contentContainerStyle: {
        marginTop: 16,
    },
    flatListSeperator: {
        marginVertical: 4,
    },
});//end of styles

export const itemStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        width: "80%",
        backgroundColor: colors.dashboardCardBG,
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    profilePicture: {
        width: 30,
        height: 30,
    },
    nameUsernameContainer: {
        marginLeft: 12,
    },
    name: {
        fontSize: 14,
        color: hexToRgbA(colors.black, 70),
    },
    username: {
        fontSize: 10,
        color: hexToRgbA(colors.black, 40),
    },
    viewButtonContainer: {
        position: "absolute",
        right: 10,
    },
    viewButton: {
        width: 50,
        alignSelf: "center",
        borderRadius: 12,
        height: 20,
    },
    viewButtonText: {
        fontSize: 12,
    },
});