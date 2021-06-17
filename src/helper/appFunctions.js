import GV from "../utils/GV"

export default {

    setUserType(isDoctor = true) {
        GV.isDoctor = isDoctor;
    },//end of setUserType

    isDoctor() {
        if (GV.isDoctor !== null) {
            if (GV.isDoctor) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    },//end of setUserType

}//end of EXPORT DEFAULT