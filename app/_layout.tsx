import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import auth from '@react-native-firebase/auth';
import { getCurrentUser } from '@/services/firebaseAuthService';
export { ErrorBoundary } from 'expo-router';
import "../global.css"

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		'LibreBaskerville-Regular': require('../assets/fonts/LibreBaskerville-Regular.ttf'),
		'LibreBaskerville-Bold': require('../assets/fonts/LibreBaskerville-Bold.ttf'),
		...FontAwesome.font
	});

	const [initializing, setInitializing] = useState(true);
  
	function onAuthStateChanged() {
		if (initializing) setInitializing(false);
	}
  
	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber;
	}, []);

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
	const user = getCurrentUser()

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
