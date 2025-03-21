import { Container, Title } from "@/components/Themed";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons"
import { userLogout } from "@/services/firebaseAuthService";
import { router } from "expo-router";
import { useUserStore } from "@/store/useUserStore";

export default function SettingsScreen() {
    const { user, setUser } = useUserStore((state) => state);
    
    const handleLogout = async () => {
        try {
            await userLogout();
            setUser(null);
            router.replace('/sign-in')
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Container>
            <Title>Configurações</Title>
            <View className="flex-row items-center justify-between">
                <Text className="text-base font-light">Usuário: {user?.email}</Text>
                <TouchableOpacity onPress={handleLogout} className="flex-row items-center gap-2">
                    <Text className=" text-red-500">Sair</Text>
                    <Icon name="logout" color="red" />
                </TouchableOpacity>
            </View>
        </Container>
    );
}