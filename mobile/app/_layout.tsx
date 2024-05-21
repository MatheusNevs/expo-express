import { Stack } from "expo-router";
import { TRPCProvider } from "@/utils/api";


export default function RootLayout() {
  return (
    <TRPCProvider>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </TRPCProvider>
  );
}
