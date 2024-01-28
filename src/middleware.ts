import { NextRequest } from "next/server";

export const  middleware = (req: NextRequest) => {
    console.log("Je déclenche le middleware à chaque requête");
    const cookie = req.cookies;
    if(req.nextUrl.pathname === "/api/test") {
        console.log('cookie', cookie);
        console.log("Je me déclenche que  sur la route /api/test");
    }
};