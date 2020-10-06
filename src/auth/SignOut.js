import firebase from "firebase/app";

export const SignOut = async () => {
    try {
        await firebase.auth().signOut()
    } catch (e) {
        throw  new Error('Error signing out')
    }
}
