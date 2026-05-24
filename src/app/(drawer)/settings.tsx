import { useNavigation } from "expo-router";
import { DrawerActions } from "expo-router/build/react-navigation";
import { Button, Text, View } from "react-native";

export default function Settings() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Settings</Text>
      <Button
        title="Open Drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
}
