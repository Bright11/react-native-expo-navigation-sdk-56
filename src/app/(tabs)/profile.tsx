import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View>
      <Text>profile</Text>
      <Button title="Go to Home" onPress={() => router.push("/")} />

      <Button title="Go to Services" onPress={() => router.push("/services")} />

      <Button title="Go to Settings" onPress={() => router.push("/settings")} />
    </View>
  );
}
