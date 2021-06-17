
import ImagePickerCrop from 'react-native-image-crop-picker';
import genericFunctions from './genericFunctions';

export default {
    camera(includeBase64 = false, mediaType = "photo", cropping = false) {
        return new Promise((resolve) => {
            ImagePickerCrop.openCamera({
                mediaType: mediaType,
                cropping: cropping,
                includeBase64: includeBase64,
                compressImageMaxHeight: 500,
                compressImageMaxWidth: 500,
                compressImageQuality: 0.9,
                forceJpg: true,

            }).then(async images => {
                let newImages = [];
                newImages.push(images);
                newImages.map(e => {
                    e.id = genericFunctions.guidGenerator();
                    return
                })
                resolve(newImages);
            }).catch(err => {
                if ("message" in err && err.message.includes("User cancelled image selection")) {
                    resolve(undefined);
                }
                else {
                    console.warn("ERROR from CATCH IMAGE PICKER", err.message);
                    alert("message" in err ? err.message : "Error from Image Picker! ");
                    resolve(undefined);
                }
            });
        })//end of PROMISE
    },

    gallery(multiple = false, includeBase64 = false, mediaType = "photo", cropping = false) {
        return new Promise((resolve) => {
            ImagePickerCrop.openPicker({
                multiple: multiple,
                mediaType: mediaType,
                cropping: cropping,
                includeBase64: includeBase64,
                compressImageMaxHeight: 500,
                compressImageMaxWidth: 500,
                compressImageQuality: 0.9,
                forceJpg: true,

            }).then(async image => {
                let images = null;
                if (!Array.isArray(image)) {
                    images = [];
                    images.push(image);
                } else {
                    images = image;
                }
                images.map(e => {
                    e.id = genericFunctions.guidGenerator();
                    return
                })


                resolve(images);
            }).catch(err => {
                console.log(err.message);
                if ("message" in err && err.message.includes("User cancelled image selection")) {
                    resolve(undefined);
                }
                else {
                    console.warn("ERROR from CATCH IMAGE PICKER", err.message);
                    alert("message" in err ? err.message : "Error from Image Picker! ");
                    resolve(undefined);
                }

            });
        })//end of PROMISE
    },


}//end of EXPORT DEFAULT

