import firebase from "firebase/app";

export const GetCurrentUser = () => {
    const user = firebase.auth().currentUser
    if (!user) {
        return null
    }
    return {}
}
