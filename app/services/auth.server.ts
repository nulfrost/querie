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

const ENVIRONMENT_URL =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.RAILWAY_STATIC_URL}`
    : process.env.REMIX_APP_URL;

authenticator.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${ENVIRONMENT_URL}/auth/${SocialsProvider.GOOGLE}/callback`,
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
      callbackURL: `${ENVIRONMENT_URL}/auth/${SocialsProvider.DISCORD}/callback`,
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
      callbackURL: `${ENVIRONMENT_URL}/auth/${SocialsProvider.GITHUB}/callback`,
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
