import { wait } from "@/lib/wait";

export default async function Users() {
    await wait(3000);
    throw new Error("Fail");
    return <div>Users</div>;
}