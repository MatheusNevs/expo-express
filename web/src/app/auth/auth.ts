import { cookies } from "next/headers";
import { lucia } from "../../../../express-trpc-prisma/src/auth/auth"


export async function getServerAuthSession() {
    const data = cookies().get("github_oauth_state")?.value;
    if (data) {
        const res = await lucia.validateSession(data);
        return res;
    }
    return {
        user: null,
        session: null,
    };
}