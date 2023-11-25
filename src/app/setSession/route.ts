import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { sessionOptions } from "~/lib/lib";

export async function POST () {
    const session = await getIronSession<{user:string}>(cookies(),sessionOptions);
    session.user = "I am a user from router.ts";
    await session.save();
    console.log('asd');
    return NextResponse.json('Hello');
}

export async function GET () {
    const session = await getIronSession<{user:string}>(cookies(),sessionOptions);
    session.user = "I am a user from router.ts";
    await session.save();
    console.log('asd');
    return NextResponse.json('Hello');
}