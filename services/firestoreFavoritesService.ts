import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const db = firestore().collection('favorites');

export const addFavoriteWord = async (word: string): Promise<void> => {
    const userId = auth().currentUser?.uid;

    if (!userId) {
        throw new Error('Usuário não autenticado');
    }

    try {
        const favoritesCollection = db.doc(userId);
        const userFavoriteDoc = await favoritesCollection.get();

        if (userFavoriteDoc.exists) {
            await favoritesCollection.update({
                words: firestore.FieldValue.arrayUnion(word),
            });
        } else {
            await favoritesCollection.set({
                words: [word],
            });
        }
    } catch (error) {
        throw error;
    }
};

export const removeFavoriteWord = async (word: string): Promise<void> => {
    const userId = auth().currentUser?.uid;

    if (!userId) {
        throw new Error('Usuário não autenticado');
    }

    try {
        const userFavoriteRef = db.doc(userId);

        const userFavoriteDoc = await userFavoriteRef.get();
        if (userFavoriteDoc.exists) {
            await userFavoriteRef.update({
                words: firestore.FieldValue.arrayRemove(word),
            });
        }
    } catch (error) {
        throw error;
    }
};

export const getFavoriteWords = async (): Promise<string[]> => {
    const userId = auth().currentUser?.uid;

    if (!userId) {
        throw new Error('Usuário não autenticado');
    }

    try {
        const userCollection = db.doc(userId);
        const userFavoriteDoc = await userCollection.get();

        if (userFavoriteDoc.exists) {
            return userFavoriteDoc.data()?.words || [];
        } else {
            return [];
        }
    } catch (error) {
        throw error;
    }
};