import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useState } from "react";
import { router } from "expo-router";

export default function SignupScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
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
        if (password !== confirmPassword) {
            Alert.alert("As senhas não coincidem");
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
        <View className="flex-1 justify-center items-center bg-gray-100 p-4">
            <Text className="font-libre-baskerville-bold text-2xl mb-8">Crie sua conta</Text>

            <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Input
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Input
                placeholder="Confirmar Senha"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            <Button label="Criar conta" loading={loading} onPress={handleSignup} />

            <View className="mt-3">
                <TouchableOpacity onPress={() => router.replace("/sign-in")}>
                    <Text>
                        Já possui uma conta?
                        <Text className="font-semibold text-dark-primary"> Entrar</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
