import * as Browser from "expo-web-browser";
import * as Linking from "expo-linking";
import * as SecureStore from "expo-secure-store";
import { api } from "./api";
import { getBaseUrl } from "./api";

export async function signIn() {
    const result = await Browser.openAuthSessionAsync(
       `${getBaseUrl()}/auth/login/github`,
        "exp://192.168.100.10:8081"
    );
    if (result.type !== "success") return;
    const url = Linking.parse(result.url);
    const sessionToken = url.queryParams?.session_token?.toString() ?? null;
    if (!sessionToken)
        return;
    await SecureStore.setItemAsync("session_token", sessionToken);
    return;
};

export function getUserSession() {
    // const sessionToken = await SecureStore.getItemAsync("session_token");
    // if (!sessionToken)
    //     return;
    const userSession = api.getUserSession.useQuery({sessionId: "2mpgvpdlerxgul3ckvm4o5rxcuc5fetdu75havcw"});
    return userSession;
}