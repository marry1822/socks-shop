import firebase from "@/plugins/firebase";
export const firebaseLogin = async (email, password) => {
  try {
    const data = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const firebaseLogout = async () => {
  try {
    const data = await firebase.auth().signOut();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const firebaseSignup = async (email, password) => {
  try {
    const data = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const sendEmailVerification = async () => {
  try {
    const user = await firebase.auth().currentUser;
    user.sendEmailVerification();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const firebaseResetPassword = async email => {
  try {
    const data = await firebase.auth().sendPasswordResetEmail(email);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUserIdToken = async () => {
  try {
    const token = await firebase.auth().currentUser.getIdToken();
    return token;
  } catch (error) {
    return Promise.reject(error);
  }
};
