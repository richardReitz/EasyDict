import auth, { type FirebaseAuthTypes } from '@react-native-firebase/auth';

export const userSignUp = async (email: string, password: string): Promise<FirebaseAuthTypes.User> => {
    try {
        const response = await auth().createUserWithEmailAndPassword(email, password);
        return response.user;
    } catch (error) {
        throw error;
    }
};

export const userSignIn = async (email: string, password: string): Promise<FirebaseAuthTypes.User> => {
    try {
        const response = await auth().signInWithEmailAndPassword(email, password);
        return response.user;
    } catch (error) {
        throw error;
    }
};

export const userLogout = async () => {
    try {
        await auth().signOut();
    } catch (error) {
        throw error;
    }
};

export const getCurrentUser = (): FirebaseAuthTypes.User | null => {
    return auth().currentUser;
};
