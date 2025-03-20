import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import { useRouter } from 'expo-router';
import Icon from "@expo/vector-icons/MaterialIcons"
import { useHistoryWord } from "@/hooks/useHistoryWord";
import type { WordData } from "@/types/types";

type Props = { data: Partial<WordData>; fromApi?: boolean } & TouchableOpacityProps

export const WordListItem: React.FC<Props> = ({ data, fromApi = false}) => {
    const router = useRouter();
    const { addWord } = useHistoryWord()

    const onPress = () =>  {
        if (data?.word) addWord(data.word)
        router.push({
            pathname: "/modal",
            params: {
                ...fromApi && {
                    data: JSON.stringify(data),
                },
                ...!fromApi && {
                    word: data.word 
                }
            }
        });
    }
    const phoneticText = data?.phonetic ?? data?.phonetics?.find(({ text }) => !!text)?.text

    return (
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={onPress}
                className="flex-row items-center justify-between border-[0.5px] border-text rounded-md mt-2 p-4"
            >
                <View className="">
                    <Text className="text-text text-2xl font-libre-baskerville-bold">
                        {data.word}
                    </Text>
                    {!!phoneticText &&
                        <Text className="text-blue-500">
                            {phoneticText}
                        </Text>
                    }
                </View>

                <Icon size={28} name="chevron-right" color="#1e1e1e" />
            </TouchableOpacity>
    )
}
