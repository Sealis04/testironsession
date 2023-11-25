export const sessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD!,
    // ttl: 10,
    cookieName: "Random Cookie Name",
    cookieOptions: {
      //secure:true when used in deployment
      maxAge: undefined,
      secure: false,
    },
}