import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    composerPrimaryContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    sendInputStyle: {

        color: '#222B45',
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E4E9F2',
        paddingTop: 8.5,
        // paddingBottom: 30,
        marginLeft: 9,
        marginRight: 9,
        paddingLeft: 40,
        paddingRight: 45,
    },

    sendProfilePicture: {
        position: "absolute",
        left: 16,
        zIndex: 1,
        // marginLeft: 8,
        height: 24,
        width: 24,
    },
    sendIconContainer: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 4,
        position: "absolute",
        right: 0,
    },
    sendIcon: {
        height: 24,
        width: 24,
    },
});//end of styles