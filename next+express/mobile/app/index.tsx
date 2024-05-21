import { api } from "@/utils/api";
import { Text, View } from "react-native";

export default function Index() {
  const ans = api.helloWorld.useQuery();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{ans.data}</Text>
    </View>
  );
}
