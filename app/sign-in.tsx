import { View, Text, Alert } from "react-native";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Link } from "expo-router";
import { useState } from "react";

export default function SigninScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState<boolean>(false);

    const validateForm = (): boolean => {
        if (!email.includes("@")) {
            Alert.alert("Email inválido");
            return false;
        }
        if (password.length < 6) {
            Alert.alert("Mínimo 6 caracteres");
            return false;
        }

        return true
    };

    const handleSignup = async (): Promise<void> => {
        if (validateForm()) {
            setLoading(true)

            try {
            } catch (err) {
                console.log('err: ', err);
            } finally {
                setLoading(false)
            }
        }
    };

    return (
        <View className="flex-1 justify-center items-center bg-gray-100 p-6">
            <Text className="font-libre-baskerville-bold text-4xl mb-8">EasyDict</Text>

            <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                className="w-full p-3 border border-dark-background rounded mb-2"
            />
            <Input
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                className="w-full p-3 border border-dark-background rounded mb-2"
            />

            <Button label="Entrar" loading={loading} onPress={handleSignup} />

            <View className="mt-3">
                <Link href="/sign-up">
                    <Text>
                        Não possui uma conta? 
                        <Text className="font-semibold text-dark-primary">
                            {' '}Cadastre-se
                        </Text>
                    </Text>
                </Link>
            </View>
        </View>
    );
}
