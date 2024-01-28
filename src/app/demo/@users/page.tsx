import { wait } from "@/lib/wait";

export default async function Users() {
    await wait(3000);
    return <div>Users</div>;
}