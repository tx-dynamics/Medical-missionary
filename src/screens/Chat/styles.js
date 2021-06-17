import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    profileFlatlist: {
        marginTop: 16,
    },

});//end of styles

export const profileItemStyles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
        marginHorizontal: 20,
        marginVertical: 8,

    },
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 40,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.primary,
    },
    nameUsernameContainer: {
        marginLeft: 6,
    },
    name: {
        color: "#5E5E5E",
        fontSize: 15,
        fontWeight: "500",
    },
    username: {
        color: "#A3A3A3",
        fontSize: 10,
    },
    countNumberContainer: {
        backgroundColor: colors.primary,
        width: 30,
        height: 30,
        borderRadius: 30,
        justifyContent: "center",
        position: "absolute",
        right: 10,
    },
    countNumber: {
        fontSize: 12,
        color: colors.white,
        textAlign: "center",
    },
    seperator: {
        height: StyleSheet.hairlineWidth * 1.5,
        backgroundColor: "#AEAEAE",
        marginTop: 5,
        marginHorizontal: 8,
        borderRadius: 5,
    },
});//end of profileItemStyles