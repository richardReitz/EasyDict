import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import { useRouter } from 'expo-router';
import Icon from "@expo/vector-icons/MaterialIcons"
import type { WordData } from "@/types/types";

type Props = { data: Partial<WordData>; fromApi: boolean } & TouchableOpacityProps

export const WordListItem: React.FC<Props> = ({ data, fromApi }) => {
    const router = useRouter();

    const onPress = () =>  router.push({
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
    const phoneticText = data?.phonetic ?? data?.phonetics?.find(({ text }) => !!text)?.text

    return (
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={onPress}
                className="flex-row items-center justify-between border-[0.5px] border-dark-background dark:border-light-background rounded-md mt-2 p-4"
            >
                <View className="">
                    <Text className="text-light-text dark:border-dark-text text-2xl font-libre-baskerville-bold">
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
