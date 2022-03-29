import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import {
  GoogleStrategy,
  SocialsProvider,
  GitHubStrategy,
  DiscordStrategy,
} from "remix-auth-socials";

export let authenticator = new Authenticator(sessionStorage, {
  sessionKey: "__session",
});

authenticator.use(
  new GoogleStrategy(
    {
      clientID: "YOUR_CLIENT_ID",
      clientSecret: "YOUR_CLIENT_SECRET",
      callbackURL: `http://localhost:3000/auth/${SocialsProvider.GOOGLE}/callback`,
    },
    async ({ profile }) => {
      // here you would find or create a user in your database
      return profile;
    }
  )
);
