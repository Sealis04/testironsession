import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { sessionOptions } from "~/lib/lib";

export async function GET(){
    const session = await getIronSession<{user:string}>(cookies(), sessionOptions);
    const user = session.user == undefined ? "its undefined" : session.user
    return NextResponse.json((user));
}

