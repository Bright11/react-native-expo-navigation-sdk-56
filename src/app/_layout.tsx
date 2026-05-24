import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import { useColorScheme } from "react-native";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
// import { createNativeStackNavigator } from "expo-router/build/react-navigation/native-stack";
import { Stack } from "expo-router";

export default function MainStackLayout() {
  const colorScheme = useColorScheme();
  // const Stack = createNativeStackNavigator();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      {/* <AppTabs /> */}
      <Stack>
        {/* <Stack.Screen name="stack" component={StackLayout} /> */}
        <Stack.Screen name="explore" />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            // title:"Services"
          }}
        />
        <Stack.Screen
          name="(drawer)"
          options={{
            // headerShown: false,
            title: "Drawer",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
