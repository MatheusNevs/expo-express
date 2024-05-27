import { Stack } from "expo-router";
import { TRPCProvider } from "@/utils/api";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "@/tamagui.config";
import { AuthProvider } from "@/utils/auth";

export default function RootLayout() {
  return (
    <TRPCProvider>
      <AuthProvider>
        <TamaguiProvider config={tamaguiConfig}>
          <Stack>
            <Stack.Screen name="index" />
          </Stack>
        </TamaguiProvider>
      </AuthProvider>
    </TRPCProvider>
  );
}
