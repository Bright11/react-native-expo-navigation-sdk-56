import { Drawer } from "expo-router/drawer";
// npx expo install react-native-reanimated react-native-worklets react-native-gesture-handler

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          title: "User settings",
        }}
      />
      <Drawer.Screen
        name="notification"
        options={{
          drawerLabel: "Notification",
          title: "Notification",
        }}
      />
    </Drawer>
  );
}
