// import { KyselyAdapter } from "@/db/adapter";
import { NextAuthOptions } from "next-auth";
// import GitHubProvider from "next-auth/providers/github"
// import { db, sql } from "@vercel/postgres";
// import { PlanetScaledialect, queryBuilder } from "@/db/planetscale";


// export const adapter = KyselyAdapter(queryBuilder, {
    
// })



import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
};