import { View, Text, Alert } from "react-native";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Link, router } from "expo-router";
import { useState } from "react";
import { signIn } from "@/services/firebaseAuthService";

export default function SigninScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleSignup = async (): Promise<void> => {
        setLoading(true)

        try {
            await signIn(email, password)
            router.replace("/(tabs)")
        } catch (err) {
            Alert.alert("Oops", "Email ou senha incorreto.")
            console.log('err: ', err);
        } finally {
            setLoading(false)
        }
    };

    return (
        <View className="flex-1 justify-center items-center bg-gray-100 p-6">
            <Text className="font-libre-baskerville-bold text-4xl mb-8">EasyDict</Text>

            <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                className="w-full p-3 border border-bac rounded mb-2"
            />
            <Input
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                className="w-full p-3 border border-bac rounded mb-2"
            />

            <Button label="Entrar" loading={loading} onPress={handleSignup} />

            <View className="mt-3">
                <Link href="/sign-up">
                    <Text>
                        Não possui uma conta? 
                        <Text className="font-semibold text-primary">
                            {' '}Cadastre-se
                        </Text>
                    </Text>
                </Link>
            </View>
        </View>
    );
}
