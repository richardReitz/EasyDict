import Colors from "@/constants/Colors";
import { useColorScheme } from "react-native"
import { Searchbar, type SearchbarProps } from "react-native-paper"

export function SearchInput({ ...props }: SearchbarProps) {
    const theme = useColorScheme();
    const colors = theme === "dark" ? Colors.dark : Colors.light;

    return (
        <Searchbar
            {...props}
            placeholder="Pesquise aqui"
            placeholderTextColor={colors.textSecondary}
            style={{
                borderRadius: 8,
                backgroundColor: colors.textLight,
            }}
        />
    )
}
