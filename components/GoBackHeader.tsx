import { Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"
import Icon from "@expo/vector-icons/AntDesign"

type Props = { label: string }

export function GoBackHeader({ label }: Props) {
    return (
        <TouchableOpacity onPress={router.back} className="flex-row items-center gap-2 mb-2">
            <Icon name="arrowleft" size={24} />
            <Text className='text-xl'>
                {label}
            </Text>
        </TouchableOpacity>
    );
}
