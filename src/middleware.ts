import { NextRequest } from "next/server";

export const  middleware = (req: NextRequest) => {
    console.log("Je déclenche le middleware à chaque requête");
};