
import { api } from "@/utils/api";
import { getUserSession, signIn } from "@/utils/auth";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "tamagui";


export default async function Index() {
  const userSession = getUserSession();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={signIn}> SignIn </Button> 
      <Text> {userSession?.data?.user?.username || "Nao tem sessão"} </Text> 
    </View>
  );
}
