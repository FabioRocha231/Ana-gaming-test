import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  logger: {
    error(code, metadata) {
      console.error('Erro no NextAuth:', code, metadata);
    },
    warn(code) {
      console.warn('Aviso no NextAuth:', code);
    },
    debug(code, metadata) {
      console.debug('Debug NextAuth:', code, metadata);
    },
  },
});

export { handler as GET, handler as POST };
