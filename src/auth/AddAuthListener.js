import firebase from "firebase";

export const AddAuthListener = (callback) => {
    const onChange = (user) => {
        if(user){
            callback({})
        }else {
            callback(null)
        }
    }
    return firebase.auth().onAuthStateChanged(onChange)
}
