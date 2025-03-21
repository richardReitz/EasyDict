import React from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"
import Icon from "@expo/vector-icons/MaterialIcons"
import { useFavoriteWords } from "@/hooks/useFavoriteWords";

type Props = { word?: string }

export const ModalHeader: React.FC<Props> = ({ word }) => {
    const { favoriteWords, addWord, removeWord } = useFavoriteWords()

    const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

    const handleAddFavorite =  async () => {
        try {
            await addWord(word!)
        } catch (error) {
            console.log('error: ', error);
            setIsFavorite(prev => !prev)
        }
    }

    const handleRemoveFavorite =  async () => {
        try {
            await removeWord(word!)
        } catch (error) {
            console.log('error: ', error);
            setIsFavorite(prev => !prev)
        }
    }

    const handleSetFavorite = (): void => {
        setIsFavorite(prev => !prev)

        if (isFavorite) {
            handleRemoveFavorite()
        } else {
            handleAddFavorite()
        }
    }

    React.useEffect(() => {
        if (favoriteWords.some((item) => item.word === word)) setIsFavorite(true)
    }, [favoriteWords, word])

    return (
        <View className="flex-row items-center justify-between">
            <TouchableOpacity onPress={router.back} className="flex-row items-center gap-2 mb-2">
                <Icon name="arrow-back" size={22} />
                <Text className='text-xl'>
                    Voltar
                </Text>

            </TouchableOpacity>
            {!!word &&
                <TouchableOpacity
                    onPress={handleSetFavorite}
                    hitSlop={{ top: 12, left: 12, bottom: 12, right: 12 }}
                >
                    <Icon name={isFavorite ? 'star' : 'star-outline'} size={26} />
                </TouchableOpacity>
            }
        </View>
    );
}
