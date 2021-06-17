import { Dimensions, StyleSheet, } from 'react-native';
import colors from '../../constants/colors';
import { hexToRgbA } from '../../helper/genericFunctions';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: hexToRgbA(colors.primary, 30),
        width: width,
        height
    },
    body: {
        flex: 1,
        zIndex: 1,
    },
    heading: {
        fontWeight: "bold",
        fontSize: 32,
        color: colors.white,
        // textAlign: "center",
        textShadowColor: '#585858',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 5,
        marginLeft: 8,
    },
    blueHeading: {
        fontWeight: "bold",
        fontSize: 32,
        color: colors.primary,
        // textAlign: "center",
    },
    buttonContainer: {
        zIndex: 1,
        position: 'absolute',
        bottom: "10%",
        right: 0,
        left: 0,
    },
    button: {
        width: "80%",
        alignSelf: "center",
        marginBottom: 16,
        height: 50,
    },
});//end of styles