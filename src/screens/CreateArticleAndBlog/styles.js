import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    field: {
        color: "#464646",
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 16,
    },
    textInput: {
        color: colors.black,
        textAlign: "left",
        textAlignVertical: "top",
        paddingHorizontal: 16,
        paddingVertical: 12,
        // borderColor: '#000',
        // borderWidth: 2,
    },
    textInputError: {
        backgroundColor: colors.textinputError,
        color: colors.white,
        textAlign: "left",
        textAlignVertical: "top",
        paddingHorizontal: 3,
        paddingVertical: 12,
    },
    accessory: {
        width: width,
        height: 48,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 8
    },
    imageContainer: {
        marginVertical: 8,
    },
    image: {
        width: "100%",
        height: 250,
    },
    imageOverlay: {
        width: "100%",
        height: 250,
        position: "absolute",
        backgroundColor: `rgba(0,0,0,0.75)`,
        zIndex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imageCameraIcon: {
        fontSize: 36,
        color: colors.white,
    },
    imageText: {
        fontSize: 18,
        color: colors.white,
    },
    saveButtonContainer: {
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
    },
    saveButton: {
        width: 80,
        borderRadius: 80,
        marginBottom: 8,
        height: 30,
    },
});//end of styles