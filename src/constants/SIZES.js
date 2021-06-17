import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const sizes = {
    height: {
        '0': RFValue(0, SCREEN_HEIGHT),
        "01": RFValue(1, SCREEN_HEIGHT),
        "02": RFValue(2, SCREEN_HEIGHT),
        "03": RFValue(3, SCREEN_HEIGHT),
        "04": RFValue(4, SCREEN_HEIGHT),
        "05": RFValue(5, SCREEN_HEIGHT),
        "06": RFValue(6, SCREEN_HEIGHT),
        "07": RFValue(7, SCREEN_HEIGHT),
        "08": RFValue(8, SCREEN_HEIGHT),
        "09": RFValue(9, SCREEN_HEIGHT),
        "10": RFValue(10, SCREEN_HEIGHT),
        "11": RFValue(11, SCREEN_HEIGHT),
        "12": RFValue(12, SCREEN_HEIGHT),
        "13": RFValue(13, SCREEN_HEIGHT),
        "14": RFValue(14, SCREEN_HEIGHT),
        "15": RFValue(15, SCREEN_HEIGHT),
        "16": RFValue(16, SCREEN_HEIGHT),
        "17": RFValue(17, SCREEN_HEIGHT),
        "18": RFValue(18, SCREEN_HEIGHT),
        "19": RFValue(19, SCREEN_HEIGHT),
        "20": RFValue(20, SCREEN_HEIGHT),
        "21": RFValue(21, SCREEN_HEIGHT),
        "22": RFValue(22, SCREEN_HEIGHT),
        "23": RFValue(23, SCREEN_HEIGHT),
        "24": RFValue(24, SCREEN_HEIGHT),
        "25": RFValue(25, SCREEN_HEIGHT),
        "26": RFValue(26, SCREEN_HEIGHT),
        "27": RFValue(27, SCREEN_HEIGHT),
        "28": RFValue(28, SCREEN_HEIGHT),
        "29": RFValue(29, SCREEN_HEIGHT),
        "30": RFValue(30, SCREEN_HEIGHT),
        "31": RFValue(31, SCREEN_HEIGHT),
        "32": RFValue(32, SCREEN_HEIGHT),
        "33": RFValue(33, SCREEN_HEIGHT),
        "34": RFValue(34, SCREEN_HEIGHT),
        "35": RFValue(35, SCREEN_HEIGHT),
        "36": RFValue(36, SCREEN_HEIGHT),
        "37": RFValue(37, SCREEN_HEIGHT),
        "38": RFValue(38, SCREEN_HEIGHT),
        "39": RFValue(39, SCREEN_HEIGHT),
        "40": RFValue(40, SCREEN_HEIGHT),
        "41": RFValue(41, SCREEN_HEIGHT),
        "42": RFValue(42, SCREEN_HEIGHT),
        "43": RFValue(43, SCREEN_HEIGHT),
        "44": RFValue(44, SCREEN_HEIGHT),
        "45": RFValue(45, SCREEN_HEIGHT),
        "46": RFValue(46, SCREEN_HEIGHT),
        "47": RFValue(47, SCREEN_HEIGHT),
        "48": RFValue(48, SCREEN_HEIGHT),
        "49": RFValue(49, SCREEN_HEIGHT),
        "50": RFValue(50, SCREEN_HEIGHT),
        "51": RFValue(51, SCREEN_HEIGHT),
        "52": RFValue(52, SCREEN_HEIGHT),
        "53": RFValue(53, SCREEN_HEIGHT),
        "54": RFValue(54, SCREEN_HEIGHT),
        "55": RFValue(55, SCREEN_HEIGHT),
        "56": RFValue(56, SCREEN_HEIGHT),
        "57": RFValue(57, SCREEN_HEIGHT),
        "58": RFValue(58, SCREEN_HEIGHT),
        "59": RFValue(59, SCREEN_HEIGHT),
        "60": RFValue(60, SCREEN_HEIGHT),
        "61": RFValue(61, SCREEN_HEIGHT),
        "62": RFValue(62, SCREEN_HEIGHT),
        "63": RFValue(63, SCREEN_HEIGHT),
        "64": RFValue(64, SCREEN_HEIGHT),
        "65": RFValue(65, SCREEN_HEIGHT),
        "66": RFValue(66, SCREEN_HEIGHT),
        "67": RFValue(67, SCREEN_HEIGHT),
        "68": RFValue(68, SCREEN_HEIGHT),
        "69": RFValue(69, SCREEN_HEIGHT),
        "70": RFValue(70, SCREEN_HEIGHT),
        "71": RFValue(71, SCREEN_HEIGHT),
        "72": RFValue(72, SCREEN_HEIGHT),
        "73": RFValue(73, SCREEN_HEIGHT),
        "74": RFValue(74, SCREEN_HEIGHT),
        "75": RFValue(75, SCREEN_HEIGHT),
        "76": RFValue(76, SCREEN_HEIGHT),
        "77": RFValue(77, SCREEN_HEIGHT),
        "78": RFValue(78, SCREEN_HEIGHT),
        "79": RFValue(79, SCREEN_HEIGHT),
        "80": RFValue(80, SCREEN_HEIGHT),
        "81": RFValue(81, SCREEN_HEIGHT),
        "82": RFValue(82, SCREEN_HEIGHT),
        "83": RFValue(83, SCREEN_HEIGHT),
        "84": RFValue(84, SCREEN_HEIGHT),
        "85": RFValue(85, SCREEN_HEIGHT),
        "86": RFValue(86, SCREEN_HEIGHT),
        "87": RFValue(87, SCREEN_HEIGHT),
        "88": RFValue(88, SCREEN_HEIGHT),
        "89": RFValue(89, SCREEN_HEIGHT),
        "90": RFValue(90, SCREEN_HEIGHT),
        "91": RFValue(91, SCREEN_HEIGHT),
        "92": RFValue(92, SCREEN_HEIGHT),
        "93": RFValue(93, SCREEN_HEIGHT),
        "94": RFValue(94, SCREEN_HEIGHT),
        "95": RFValue(95, SCREEN_HEIGHT),
        "96": RFValue(96, SCREEN_HEIGHT),
        "97": RFValue(97, SCREEN_HEIGHT),
        "98": RFValue(98, SCREEN_HEIGHT),
        "99": RFValue(99, SCREEN_HEIGHT),
        "100": RFValue(100, SCREEN_HEIGHT),
    },
    width: {
        "01": RFValue(1, SCREEN_WIDTH),
        "02": RFValue(2, SCREEN_WIDTH),
        "03": RFValue(3, SCREEN_WIDTH),
        "04": RFValue(4, SCREEN_WIDTH),
        "05": RFValue(5, SCREEN_WIDTH),
        "06": RFValue(6, SCREEN_WIDTH),
        "07": RFValue(7, SCREEN_WIDTH),
        "08": RFValue(8, SCREEN_WIDTH),
        "09": RFValue(9, SCREEN_WIDTH),
        "10": RFValue(10, SCREEN_WIDTH),
        "11": RFValue(11, SCREEN_WIDTH),
        "12": RFValue(12, SCREEN_WIDTH),
        "13": RFValue(13, SCREEN_WIDTH),
        "14": RFValue(14, SCREEN_WIDTH),
        "15": RFValue(15, SCREEN_WIDTH),
        "16": RFValue(16, SCREEN_WIDTH),
        "17": RFValue(17, SCREEN_WIDTH),
        "18": RFValue(18, SCREEN_WIDTH),
        "19": RFValue(19, SCREEN_WIDTH),
        "20": RFValue(20, SCREEN_WIDTH),
        "21": RFValue(21, SCREEN_WIDTH),
        "22": RFValue(22, SCREEN_WIDTH),
        "23": RFValue(23, SCREEN_WIDTH),
        "24": RFValue(24, SCREEN_WIDTH),
        "25": RFValue(25, SCREEN_WIDTH),
        "26": RFValue(26, SCREEN_WIDTH),
        "27": RFValue(27, SCREEN_WIDTH),
        "28": RFValue(28, SCREEN_WIDTH),
        "29": RFValue(29, SCREEN_WIDTH),
        "30": RFValue(30, SCREEN_WIDTH),
        "31": RFValue(31, SCREEN_WIDTH),
        "32": RFValue(32, SCREEN_WIDTH),
        "33": RFValue(33, SCREEN_WIDTH),
        "34": RFValue(34, SCREEN_WIDTH),
        "35": RFValue(35, SCREEN_WIDTH),
        "36": RFValue(36, SCREEN_WIDTH),
        "37": RFValue(37, SCREEN_WIDTH),
        "38": RFValue(38, SCREEN_WIDTH),
        "39": RFValue(39, SCREEN_WIDTH),
        "40": RFValue(40, SCREEN_WIDTH),
        "41": RFValue(41, SCREEN_WIDTH),
        "42": RFValue(42, SCREEN_WIDTH),
        "43": RFValue(43, SCREEN_WIDTH),
        "44": RFValue(44, SCREEN_WIDTH),
        "45": RFValue(45, SCREEN_WIDTH),
        "46": RFValue(46, SCREEN_WIDTH),
        "47": RFValue(47, SCREEN_WIDTH),
        "48": RFValue(48, SCREEN_WIDTH),
        "49": RFValue(49, SCREEN_WIDTH),
        "50": RFValue(50, SCREEN_WIDTH),
        "51": RFValue(51, SCREEN_WIDTH),
        "52": RFValue(52, SCREEN_WIDTH),
        "53": RFValue(53, SCREEN_WIDTH),
        "54": RFValue(54, SCREEN_WIDTH),
        "55": RFValue(55, SCREEN_WIDTH),
        "56": RFValue(56, SCREEN_WIDTH),
        "57": RFValue(57, SCREEN_WIDTH),
        "58": RFValue(58, SCREEN_WIDTH),
        "59": RFValue(59, SCREEN_WIDTH),
        "60": RFValue(60, SCREEN_WIDTH),
        "61": RFValue(61, SCREEN_WIDTH),
        "62": RFValue(62, SCREEN_WIDTH),
        "63": RFValue(63, SCREEN_WIDTH),
        "64": RFValue(64, SCREEN_WIDTH),
        "65": RFValue(65, SCREEN_WIDTH),
        "66": RFValue(66, SCREEN_WIDTH),
        "67": RFValue(67, SCREEN_WIDTH),
        "68": RFValue(68, SCREEN_WIDTH),
        "69": RFValue(69, SCREEN_WIDTH),
        "70": RFValue(70, SCREEN_WIDTH),
        "71": RFValue(71, SCREEN_WIDTH),
        "72": RFValue(72, SCREEN_WIDTH),
        "73": RFValue(73, SCREEN_WIDTH),
        "74": RFValue(74, SCREEN_WIDTH),
        "75": RFValue(75, SCREEN_WIDTH),
        "76": RFValue(76, SCREEN_WIDTH),
        "77": RFValue(77, SCREEN_WIDTH),
        "78": RFValue(78, SCREEN_WIDTH),
        "79": RFValue(79, SCREEN_WIDTH),
        "80": RFValue(80, SCREEN_WIDTH),
        "81": RFValue(81, SCREEN_WIDTH),
        "82": RFValue(82, SCREEN_WIDTH),
        "83": RFValue(83, SCREEN_WIDTH),
        "84": RFValue(84, SCREEN_WIDTH),
        "85": RFValue(85, SCREEN_WIDTH),
        "86": RFValue(86, SCREEN_WIDTH),
        "87": RFValue(87, SCREEN_WIDTH),
        "88": RFValue(88, SCREEN_WIDTH),
        "89": RFValue(89, SCREEN_WIDTH),
        "90": RFValue(90, SCREEN_WIDTH),
        "91": RFValue(91, SCREEN_WIDTH),
        "92": RFValue(92, SCREEN_WIDTH),
        "93": RFValue(93, SCREEN_WIDTH),
        "94": RFValue(94, SCREEN_WIDTH),
        "95": RFValue(95, SCREEN_WIDTH),
        "96": RFValue(96, SCREEN_WIDTH),
        "97": RFValue(97, SCREEN_WIDTH),
        "98": RFValue(98, SCREEN_WIDTH),
        "99": RFValue(99, SCREEN_WIDTH),
        "100": RFValue(100, SCREEN_WIDTH),
    }
}



export default {
    height: sizes.height,
    width: sizes.width,
    fontSize: sizes.height,
}
export const SIZE_HEIGHT = sizes.height;
export const SIZE_WIDTH = sizes.height;
export const FONT_SIZE = sizes.height;

