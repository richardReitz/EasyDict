import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import auth from '@react-native-firebase/auth';
export { ErrorBoundary } from 'expo-router';
import { type User, useUserStore } from '@/store/useUserStore';

import "../global.css"

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const { setUser } = useUserStore((state) => state)

	const [initializing, setInitializing] = useState(true);
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		'LibreBaskerville-Regular': require('../assets/fonts/LibreBaskerville-Regular.ttf'),
		'LibreBaskerville-Bold': require('../assets/fonts/LibreBaskerville-Bold.ttf'),
		...FontAwesome.font
	});

	useEffect(() => {
		setInitializing(true);
	
		const subscriber = auth().onAuthStateChanged((user: User) => {
			setUser(user);
			setInitializing(false);
		});
	
		return () => subscriber();
	  }, [setUser, setInitializing]);

	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded || initializing) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const { user } = useUserStore((state) => state);

	return (
		<ThemeProvider value={DefaultTheme}>
			<Stack initialRouteName={!user ? 'sign-in' : '(tabs)'} screenOptions={{ headerShown: false }}>
				<Stack.Screen name="sign-up" />
				<Stack.Screen name="sign-in" />
				<Stack.Screen name="modal" options={{ presentation: 'modal' }} />
			</Stack>
		</ThemeProvider>
	);
}
