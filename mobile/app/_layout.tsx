import { Stack } from "expo-router";
import { TRPCProvider } from "@/utils/api";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "@/tamagui.config";

export default function RootLayout() {
  return (
    <TRPCProvider>
      <TamaguiProvider config={tamaguiConfig}>
        <Stack>
          <Stack.Screen name="index" />
        </Stack>
      </TamaguiProvider>
    </TRPCProvider>
  );
}
