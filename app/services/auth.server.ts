import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import {
  GoogleStrategy,
  SocialsProvider,
  GitHubStrategy,
  DiscordStrategy,
} from "remix-auth-socials";
import { findOrCreateUser } from "~/db/db.server";

export let authenticator = new Authenticator(sessionStorage, {
  sessionKey: "__session",
});

authenticator.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `http://localhost:3000/auth/${SocialsProvider.GOOGLE}/callback`,
    },
    async ({ profile }) => {
      try {
        const user = await findOrCreateUser(profile);

        return { profile: user };
      } catch (e) {
        console.error(e);
      }
    }
  )
);

authenticator.use(
  new DiscordStrategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: `http://localhost:3000/auth/${SocialsProvider.DISCORD}/callback`,
    },
    async ({ profile }) => {
      try {
        const user = await findOrCreateUser(profile);

        return { profile: user };
      } catch (e) {
        console.error(e);
      }
    }
  )
);

authenticator.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `http://localhost:3000/auth/${SocialsProvider.GITHUB}/callback`,
    },
    async ({ profile }) => {
      try {
        const user = await findOrCreateUser(profile);

        return { profile: user };
      } catch (e) {
        console.error(e);
      }
    }
  )
);
