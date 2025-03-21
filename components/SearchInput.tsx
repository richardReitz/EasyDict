import Colors from "@/constants/Colors";
import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native"
import Icon from "@expo/vector-icons/Feather"

type Props = { onClearIconPress: VoidFunction } & TextInputProps

export const SearchInput: React.FC<Props> = ({ onClearIconPress, ...props }) => {
    return (
        <View className="flex-row items-center bg-text-light rounded-md gap-3 px-4">
            <Icon name="search" size={18} />
            <TextInput
                {...props}
                placeholder="Pesquise aqui"
                className="font-semibold py-4"
                placeholderTextColor={Colors.theme.textSecondary}
            />
            <TouchableOpacity
                onPress={onClearIconPress}
                hitSlop={{ top: 8, left: 8, bottom: 8, right: 8 }}
                className="absolute right-4"
            >
                <Icon name="x" size={18} />
            </TouchableOpacity>
        </View>
    )
}
