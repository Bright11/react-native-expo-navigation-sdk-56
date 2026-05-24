import { useNavigation } from "expo-router";
import { DrawerActions } from "expo-router/build/react-navigation";
import { Button, Text, View } from "react-native";

export default function notification() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>notification</Text>
      <Button
        title="Open Drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
}
