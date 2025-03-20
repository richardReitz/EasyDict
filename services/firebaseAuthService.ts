import auth, { type FirebaseAuthTypes } from '@react-native-firebase/auth';

export const signUp = async (email: string, password: string): Promise<FirebaseAuthTypes.User> => {
    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};

export const signIn = async (email: string, password: string): Promise<FirebaseAuthTypes.User> => {
    try {
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        await auth().signOut();
    } catch (error) {
        throw error;
    }
};

export const getCurrentUser = (): FirebaseAuthTypes.User | null => {
    return auth().currentUser;
};
