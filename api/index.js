var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
var import_ssr = require("@mantine/ssr");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response(`<!DOCTYPE html>${(0, import_ssr.injectStylesIntoStaticMarkup)(markup)}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/dane/Desktop/github/react/querie/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_core2 = require("@mantine/core");
var import_react4 = require("@remix-run/react");
var import_react5 = require("react");

// app/components/Layout/Navbar.tsx
var import_react2 = require("react");
var import_core = require("@mantine/core");
var import_hooks = require("@mantine/hooks");
var import_tabler_icons_react = require("tabler-icons-react");
var import_react3 = require("@remix-run/react");
var useStyles = (0, import_core.createStyles)((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    borderBottom: `1px solid ${theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[2]}`
  },
  mainSection: {
    paddingBottom: theme.spacing.sm
  },
  userMenu: {
    [theme.fn.smallerThan("xs")]: {
      display: "none"
    }
  },
  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",
    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white
    }
  },
  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none"
    }
  },
  userActive: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white
  },
  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none"
    }
  }
}));
function Navbar({ user }) {
  var _a, _b, _c, _d;
  const { classes, theme, cx } = useStyles();
  const [opened, toggleOpened] = (0, import_hooks.useBooleanToggle)(false);
  const [userMenuOpened, setUserMenuOpened] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.header
  }, /* @__PURE__ */ React.createElement(import_core.Container, {
    className: classes.mainSection
  }, /* @__PURE__ */ React.createElement(import_core.Group, {
    position: "apart"
  }, /* @__PURE__ */ React.createElement(import_core.Title, {
    order: 3
  }, "querie"), /* @__PURE__ */ React.createElement(import_core.Burger, {
    opened,
    onClick: () => toggleOpened(),
    className: classes.burger,
    size: "sm"
  }), !(user == null ? void 0 : user.user) && /* @__PURE__ */ React.createElement(import_core.Group, {
    spacing: 5,
    className: classes.links
  }, /* @__PURE__ */ React.createElement(import_core.Button, {
    component: import_react3.Link,
    to: "/login"
  }, "Login")), (user == null ? void 0 : user.user) && /* @__PURE__ */ React.createElement(import_core.Menu, {
    size: 260,
    placement: "end",
    transition: "pop-top-right",
    className: classes.userMenu,
    onClose: () => setUserMenuOpened(false),
    onOpen: () => setUserMenuOpened(true),
    control: /* @__PURE__ */ React.createElement(import_core.UnstyledButton, {
      className: cx(classes.user, {
        [classes.userActive]: userMenuOpened
      })
    }, /* @__PURE__ */ React.createElement(import_core.Group, {
      spacing: 7
    }, /* @__PURE__ */ React.createElement(import_core.Avatar, {
      src: (_b = (_a = user == null ? void 0 : user.user) == null ? void 0 : _a.photos[0]) == null ? void 0 : _b.value,
      alt: (_c = user == null ? void 0 : user.user) == null ? void 0 : _c.displayName,
      radius: "xl",
      size: 24
    }), /* @__PURE__ */ React.createElement(import_core.Text, {
      weight: 500,
      size: "sm",
      sx: { lineHeight: 1 },
      mr: 3
    }, (_d = user == null ? void 0 : user.user) == null ? void 0 : _d.displayName), /* @__PURE__ */ React.createElement(import_tabler_icons_react.ChevronDown, {
      size: 12
    })))
  }, /* @__PURE__ */ React.createElement(import_core.Menu.Item, {
    icon: /* @__PURE__ */ React.createElement(import_tabler_icons_react.Heart, {
      size: 14,
      color: theme.colors.red[6]
    })
  }, "Liked posts"), /* @__PURE__ */ React.createElement(import_core.Menu.Item, {
    icon: /* @__PURE__ */ React.createElement(import_tabler_icons_react.Message, {
      size: 14,
      color: theme.colors.blue[6]
    })
  }, "Your comments"), /* @__PURE__ */ React.createElement(import_core.Menu.Label, null, "Settings"), /* @__PURE__ */ React.createElement(import_core.Menu.Item, {
    icon: /* @__PURE__ */ React.createElement(import_tabler_icons_react.Settings, {
      size: 14
    })
  }, "Account settings"), /* @__PURE__ */ React.createElement(import_core.Divider, null), /* @__PURE__ */ React.createElement(import_core.Menu.Item, {
    icon: /* @__PURE__ */ React.createElement(import_tabler_icons_react.Logout, {
      size: 14
    })
  }, "Logout")))));
}

// app/services/auth.server.ts
var import_remix_auth = require("remix-auth");

// app/services/session.server.ts
var import_node = require("@remix-run/node");
var sessionStorage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [process.env.COOKIE_SECRET],
    secure: false
  }
});
var { getSession, commitSession, destroySession } = sessionStorage;

// app/services/auth.server.ts
var import_remix_auth_socials = require("remix-auth-socials");
var authenticator = new import_remix_auth.Authenticator(sessionStorage, {
  sessionKey: "__session"
});
authenticator.use(new import_remix_auth_socials.GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `http://localhost:3000/auth/${import_remix_auth_socials.SocialsProvider.GOOGLE}/callback`
}, async ({ profile }) => {
  return profile;
}));
authenticator.use(new import_remix_auth_socials.DiscordStrategy({
  clientID: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  callbackURL: `http://localhost:3000/auth/${import_remix_auth_socials.SocialsProvider.DISCORD}/callback`
}, async ({ profile }) => {
  return profile;
}));
authenticator.use(new import_remix_auth_socials.GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: `http://localhost:3000/auth/${import_remix_auth_socials.SocialsProvider.GITHUB}/callback`
}, async ({ profile }) => {
  return profile;
}));

// app/styles/globals.css
var globals_default = "/build/_assets/globals-6ERIYNWR.css";

// route:/Users/dane/Desktop/github/react/querie/app/root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "querie | ask your wildest questions",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => {
  return [
    {
      href: globals_default,
      rel: "stylesheet"
    }
  ];
};
var loader = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);
  return { user };
};
function App() {
  const user = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react4.Meta, null), /* @__PURE__ */ React.createElement(import_react4.Links, null)), /* @__PURE__ */ React.createElement(import_core2.Box, {
    component: "body",
    sx: (theme) => ({
      backgroundColor: theme.colors.gray[2]
    })
  }, /* @__PURE__ */ React.createElement(MantineTheme, null, /* @__PURE__ */ React.createElement(Navbar, {
    user
  }), /* @__PURE__ */ React.createElement(import_react4.Outlet, null)), /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react4.Scripts, null), /* @__PURE__ */ React.createElement(import_react4.LiveReload, null)));
}
function MantineTheme({ children }) {
  const [colorScheme, setColorScheme] = (0, import_react5.useState)("light");
  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return /* @__PURE__ */ React.createElement(import_core2.ColorSchemeProvider, {
    colorScheme,
    toggleColorScheme
  }, /* @__PURE__ */ React.createElement(import_core2.MantineProvider, {
    theme: { colorScheme },
    withNormalizeCSS: true,
    withGlobalStyles: true
  }, children));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/auth/$provider.callback.tsx
var provider_callback_exports = {};
__export(provider_callback_exports, {
  loader: () => loader2
});
var loader2 = ({ request, params }) => {
  return authenticator.authenticate(params.provider, request, {
    successRedirect: "/",
    failureRedirect: "/login"
  });
};

// route:/Users/dane/Desktop/github/react/querie/app/routes/auth/$provider.tsx
var provider_exports = {};
__export(provider_exports, {
  action: () => action,
  loader: () => loader3
});
var import_node2 = require("@remix-run/node");
var loader3 = () => (0, import_node2.redirect)("/login");
var action = ({ request, params }) => {
  return authenticator.authenticate(params.provider, request);
};

// route:/Users/dane/Desktop/github/react/querie/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action2
});
var action2 = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/" });
};

// route:/Users/dane/Desktop/github/react/querie/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader4
});
var import_core3 = require("@mantine/core");
var import_react6 = require("@remix-run/react");
var loader4 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);
  return { user };
};
function Index() {
  var _a;
  const user = (0, import_react6.useLoaderData)();
  console.log(user);
  return /* @__PURE__ */ React.createElement(import_core3.Container, {
    mt: "xl"
  }, /* @__PURE__ */ React.createElement(import_core3.Grid, null, /* @__PURE__ */ React.createElement(import_core3.Grid.Col, {
    span: 3
  }, /* @__PURE__ */ React.createElement(import_core3.Paper, {
    p: "lg",
    shadow: "xs"
  }, /* @__PURE__ */ React.createElement(import_core3.Text, {
    variant: "link"
  }, "Cars"), /* @__PURE__ */ React.createElement(import_core3.Text, {
    variant: "link"
  }, "Electronics"), /* @__PURE__ */ React.createElement(import_core3.Text, {
    variant: "link"
  }, "Business"))), /* @__PURE__ */ React.createElement(import_core3.Grid.Col, {
    span: 6
  }, /* @__PURE__ */ React.createElement(import_core3.Box, null, /* @__PURE__ */ React.createElement("h2", null, "Hey, ", (_a = user == null ? void 0 : user.user) == null ? void 0 : _a.displayName), /* @__PURE__ */ React.createElement(import_react6.Form, {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", null, "Log out")))), /* @__PURE__ */ React.createElement(import_core3.Grid.Col, {
    span: 3
  }, /* @__PURE__ */ React.createElement(import_core3.Paper, {
    p: "lg"
  }, /* @__PURE__ */ React.createElement(import_core3.Title, {
    order: 4
  }, "Leaderboard")))));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login,
  loader: () => loader5
});
var import_react7 = require("@remix-run/react");
var import_remix_auth_socials2 = require("remix-auth-socials");
var import_core4 = require("@mantine/core");
var loader5 = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/"
  });
};
var SocialButton = ({
  provider,
  label,
  icon,
  color
}) => /* @__PURE__ */ React.createElement(import_react7.Form, {
  action: `/auth/${provider}`,
  method: "post",
  style: { width: "30%" }
}, /* @__PURE__ */ React.createElement(import_core4.Button, {
  leftIcon: icon,
  color,
  type: "submit",
  fullWidth: true
}, label));
function Login() {
  return /* @__PURE__ */ React.createElement(import_core4.Container, {
    mt: "xl"
  }, /* @__PURE__ */ React.createElement(import_core4.Stack, {
    align: "center"
  }, /* @__PURE__ */ React.createElement(import_core4.Title, {
    order: 1
  }, "Log in"), /* @__PURE__ */ React.createElement(import_core4.Text, {
    color: "dimmed",
    size: "sm"
  }, "Continue with one of these providers"), /* @__PURE__ */ React.createElement(SocialButton, {
    color: "indigo",
    provider: import_remix_auth_socials2.SocialsProvider.DISCORD,
    label: "Login with Discord"
  }), /* @__PURE__ */ React.createElement(SocialButton, {
    color: "red",
    provider: import_remix_auth_socials2.SocialsProvider.GOOGLE,
    label: "Login with Google"
  }), /* @__PURE__ */ React.createElement(SocialButton, {
    color: "dark",
    provider: import_remix_auth_socials2.SocialsProvider.GITHUB,
    label: "Login with Github"
  })));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "516eda0d", "entry": { "module": "/build/entry.client-MFTGNMQQ.js", "imports": ["/build/_shared/chunk-54IU7D55.js", "/build/_shared/chunk-5C2MR7Q3.js", "/build/_shared/chunk-MCRSUEN6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-UX2VZBCE.js", "imports": ["/build/_shared/chunk-RWWQJCFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider": { "id": "routes/auth/$provider", "parentId": "root", "path": "auth/:provider", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider-WBJZ2JDQ.js", "imports": ["/build/_shared/chunk-3HZBUE7D.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider.callback": { "id": "routes/auth/$provider.callback", "parentId": "root", "path": "auth/:provider/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider.callback-6REK3CC2.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-KBSBCH5P.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-JJSO7RVL.js", "imports": ["/build/_shared/chunk-3HZBUE7D.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-HF3HMUMT.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-516EDA0D.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/auth/$provider.callback": {
    id: "routes/auth/$provider.callback",
    parentId: "root",
    path: "auth/:provider/callback",
    index: void 0,
    caseSensitive: void 0,
    module: provider_callback_exports
  },
  "routes/auth/$provider": {
    id: "routes/auth/$provider",
    parentId: "root",
    path: "auth/:provider",
    index: void 0,
    caseSensitive: void 0,
    module: provider_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiIsICIuLi9ub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi9kZXYvY29tcGlsZXIvc2hpbXMvcmVhY3QudHMiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLnRzeCIsICIuLi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9hdXRoLyRwcm92aWRlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvbG9naW4udHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICJpbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IGluamVjdFN0eWxlc0ludG9TdGF0aWNNYXJrdXAgfSBmcm9tIFwiQG1hbnRpbmUvc3NyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgIGA8IURPQ1RZUEUgaHRtbD4ke2luamVjdFN0eWxlc0ludG9TdGF0aWNNYXJrdXAobWFya3VwKX1gLFxuICAgIHtcbiAgICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgIH1cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBCb3gsXG4gIENvbG9yU2NoZW1lLFxuICBDb2xvclNjaGVtZVByb3ZpZGVyLFxuICBNYW50aW5lUHJvdmlkZXIsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbn0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB0eXBlIHtcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE1ldGFGdW5jdGlvbixcbiAgTGlua3NGdW5jdGlvbixcbn0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTGF5b3V0L05hdmJhclwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJ+L3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxuICB0aXRsZTogXCJxdWVyaWUgfCBhc2sgeW91ciB3aWxkZXN0IHF1ZXN0aW9uc1wiLFxuICB2aWV3cG9ydDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGhyZWY6IHN0eWxlcyxcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgfSxcbiAgXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0KTtcbiAgcmV0dXJuIHsgdXNlciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB1c2VyID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cImJvZHlcIlxuICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbMl0sXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8TWFudGluZVRoZW1lPlxuICAgICAgICAgIDxOYXZiYXIgdXNlcj17dXNlcn0gLz5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvTWFudGluZVRoZW1lPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTWFudGluZVRoZW1lKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgW2NvbG9yU2NoZW1lLCBzZXRDb2xvclNjaGVtZV0gPSB1c2VTdGF0ZTxDb2xvclNjaGVtZT4oXCJsaWdodFwiKTtcbiAgY29uc3QgdG9nZ2xlQ29sb3JTY2hlbWUgPSAodmFsdWU/OiBDb2xvclNjaGVtZSkgPT5cbiAgICBzZXRDb2xvclNjaGVtZSh2YWx1ZSB8fCAoY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCIpKTtcblxuICByZXR1cm4gKFxuICAgIDxDb2xvclNjaGVtZVByb3ZpZGVyXG4gICAgICBjb2xvclNjaGVtZT17Y29sb3JTY2hlbWV9XG4gICAgICB0b2dnbGVDb2xvclNjaGVtZT17dG9nZ2xlQ29sb3JTY2hlbWV9XG4gICAgPlxuICAgICAgPE1hbnRpbmVQcm92aWRlclxuICAgICAgICB0aGVtZT17eyBjb2xvclNjaGVtZSB9fVxuICAgICAgICB3aXRoTm9ybWFsaXplQ1NTXG4gICAgICAgIHdpdGhHbG9iYWxTdHlsZXNcbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9NYW50aW5lUHJvdmlkZXI+XG4gICAgPC9Db2xvclNjaGVtZVByb3ZpZGVyPlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBjcmVhdGVTdHlsZXMsXG4gIENvbnRhaW5lcixcbiAgQXZhdGFyLFxuICBVbnN0eWxlZEJ1dHRvbixcbiAgR3JvdXAsXG4gIFRleHQsXG4gIE1lbnUsXG4gIERpdmlkZXIsXG4gIEJ1cmdlcixcbiAgVGl0bGUsXG4gIEJ1dHRvbixcbn0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IHVzZUJvb2xlYW5Ub2dnbGUgfSBmcm9tIFwiQG1hbnRpbmUvaG9va3NcIjtcbmltcG9ydCB7XG4gIExvZ291dCxcbiAgSGVhcnQsXG4gIE1lc3NhZ2UsXG4gIFNldHRpbmdzLFxuICBDaGV2cm9uRG93bixcbn0gZnJvbSBcInRhYmxlci1pY29ucy1yZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGhlYWRlcjoge1xuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcuc20sXG4gICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiXG4gICAgICAgID8gdGhlbWUuY29sb3JzLmRhcmtbNl1cbiAgICAgICAgOiB0aGVtZS5jb2xvcnMuZ3JheVswXSxcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IFwidHJhbnNwYXJlbnRcIiA6IHRoZW1lLmNvbG9ycy5ncmF5WzJdXG4gICAgfWAsXG4gIH0sXG5cbiAgbWFpblNlY3Rpb246IHtcbiAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nLnNtLFxuICB9LFxuXG4gIHVzZXJNZW51OiB7XG4gICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKFwieHNcIildOiB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9LFxuICB9LFxuXG4gIHVzZXI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbMF0gOiB0aGVtZS5ibGFjayxcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnhzfXB4ICR7dGhlbWUuc3BhY2luZy5zbX1weGAsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpdXMuc20sXG4gICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGVhc2VcIixcblxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IHRoZW1lLmNvbG9ycy5kYXJrWzhdIDogdGhlbWUud2hpdGUsXG4gICAgfSxcbiAgfSxcblxuICBidXJnZXI6IHtcbiAgICBbdGhlbWUuZm4ubGFyZ2VyVGhhbihcInhzXCIpXToge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgfSxcbiAgfSxcblxuICB1c2VyQWN0aXZlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbOF0gOiB0aGVtZS53aGl0ZSxcbiAgfSxcbiAgbGlua3M6IHtcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJ4c1wiKV06IHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVzZXI6IGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5hdmJhcih7IHVzZXIgfTogUHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc2VzLCB0aGVtZSwgY3ggfSA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbb3BlbmVkLCB0b2dnbGVPcGVuZWRdID0gdXNlQm9vbGVhblRvZ2dsZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyTWVudU9wZW5lZCwgc2V0VXNlck1lbnVPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5TZWN0aW9ufT5cbiAgICAgICAgPEdyb3VwIHBvc2l0aW9uPVwiYXBhcnRcIj5cbiAgICAgICAgICA8VGl0bGUgb3JkZXI9ezN9PnF1ZXJpZTwvVGl0bGU+XG4gICAgICAgICAgPEJ1cmdlclxuICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVPcGVuZWQoKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXJnZXJ9XG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgeyF1c2VyPy51c2VyICYmIChcbiAgICAgICAgICAgIDxHcm91cCBzcGFjaW5nPXs1fSBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PlxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gdG89XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dXNlcj8udXNlciAmJiAoXG4gICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICBzaXplPXsyNjB9XG4gICAgICAgICAgICAgIHBsYWNlbWVudD1cImVuZFwiXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249XCJwb3AtdG9wLXJpZ2h0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJNZW51fVxuICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRVc2VyTWVudU9wZW5lZChmYWxzZSl9XG4gICAgICAgICAgICAgIG9uT3Blbj17KCkgPT4gc2V0VXNlck1lbnVPcGVuZWQodHJ1ZSl9XG4gICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgIDxVbnN0eWxlZEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChjbGFzc2VzLnVzZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXMudXNlckFjdGl2ZV06IHVzZXJNZW51T3BlbmVkLFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEdyb3VwIHNwYWNpbmc9ezd9PlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyPy51c2VyPy5waG90b3NbMF0/LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17dXNlcj8udXNlcj8uZGlzcGxheU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgcmFkaXVzPVwieGxcIlxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezI0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCB3ZWlnaHQ9ezUwMH0gc2l6ZT1cInNtXCIgc3g9e3sgbGluZUhlaWdodDogMSB9fSBtcj17M30+XG4gICAgICAgICAgICAgICAgICAgICAge3VzZXI/LnVzZXI/LmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uRG93biBzaXplPXsxMn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9VbnN0eWxlZEJ1dHRvbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGljb249ezxIZWFydCBzaXplPXsxNH0gY29sb3I9e3RoZW1lLmNvbG9ycy5yZWRbNl19IC8+fT5cbiAgICAgICAgICAgICAgICBMaWtlZCBwb3N0c1xuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgIGljb249ezxNZXNzYWdlIHNpemU9ezE0fSBjb2xvcj17dGhlbWUuY29sb3JzLmJsdWVbNl19IC8+fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgWW91ciBjb21tZW50c1xuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuTGFiZWw+U2V0dGluZ3M8L01lbnUuTGFiZWw+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0gaWNvbj17PFNldHRpbmdzIHNpemU9ezE0fSAvPn0+XG4gICAgICAgICAgICAgICAgQWNjb3VudCBzZXR0aW5nc1xuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBpY29uPXs8TG9nb3V0IHNpemU9ezE0fSAvPn0+TG9nb3V0PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Hcm91cD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IEF1dGhlbnRpY2F0b3IgfSBmcm9tIFwicmVtaXgtYXV0aFwiO1xuaW1wb3J0IHsgc2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHtcbiAgR29vZ2xlU3RyYXRlZ3ksXG4gIFNvY2lhbHNQcm92aWRlcixcbiAgR2l0SHViU3RyYXRlZ3ksXG4gIERpc2NvcmRTdHJhdGVneSxcbn0gZnJvbSBcInJlbWl4LWF1dGgtc29jaWFsc1wiO1xuXG5leHBvcnQgbGV0IGF1dGhlbnRpY2F0b3IgPSBuZXcgQXV0aGVudGljYXRvcihzZXNzaW9uU3RvcmFnZSwge1xuICBzZXNzaW9uS2V5OiBcIl9fc2Vzc2lvblwiLFxufSk7XG5cbmF1dGhlbnRpY2F0b3IudXNlKFxuICBuZXcgR29vZ2xlU3RyYXRlZ3koXG4gICAge1xuICAgICAgY2xpZW50SUQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgICAgY2FsbGJhY2tVUkw6IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC8ke1NvY2lhbHNQcm92aWRlci5HT09HTEV9L2NhbGxiYWNrYCxcbiAgICB9LFxuICAgIGFzeW5jICh7IHByb2ZpbGUgfSkgPT4ge1xuICAgICAgcmV0dXJuIHByb2ZpbGU7XG4gICAgfVxuICApXG4pO1xuXG5hdXRoZW50aWNhdG9yLnVzZShcbiAgbmV3IERpc2NvcmRTdHJhdGVneShcbiAgICB7XG4gICAgICBjbGllbnRJRDogcHJvY2Vzcy5lbnYuRElTQ09SRF9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGNhbGxiYWNrVVJMOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvJHtTb2NpYWxzUHJvdmlkZXIuRElTQ09SRH0vY2FsbGJhY2tgLFxuICAgIH0sXG4gICAgYXN5bmMgKHsgcHJvZmlsZSB9KSA9PiB7XG4gICAgICByZXR1cm4gcHJvZmlsZTtcbiAgICB9XG4gIClcbik7XG5cbmF1dGhlbnRpY2F0b3IudXNlKFxuICBuZXcgR2l0SHViU3RyYXRlZ3koXG4gICAge1xuICAgICAgY2xpZW50SUQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVULFxuICAgICAgY2FsbGJhY2tVUkw6IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC8ke1NvY2lhbHNQcm92aWRlci5HSVRIVUJ9L2NhbGxiYWNrYCxcbiAgICB9LFxuICAgIGFzeW5jICh7IHByb2ZpbGUgfSkgPT4ge1xuICAgICAgcmV0dXJuIHByb2ZpbGU7XG4gICAgfVxuICApXG4pO1xuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuXG5leHBvcnQgbGV0IHNlc3Npb25TdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiBcIl9fc2Vzc2lvblwiLFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNlY3JldHM6IFtwcm9jZXNzLmVudi5DT09LSUVfU0VDUkVUXSxcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgfSxcbn0pO1xuXG5leHBvcnQgbGV0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfSA9IHNlc3Npb25TdG9yYWdlO1xuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIHJldHVybiBhdXRoZW50aWNhdG9yLmF1dGhlbnRpY2F0ZShwYXJhbXMucHJvdmlkZXIsIHJlcXVlc3QsIHtcbiAgICBzdWNjZXNzUmVkaXJlY3Q6IFwiL1wiLFxuICAgIGZhaWx1cmVSZWRpcmVjdDogXCIvbG9naW5cIixcbiAgfSk7XG59O1xuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSBcIn4vc2VydmljZXMvYXV0aC5zZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4gcmVkaXJlY3QoXCIvbG9naW5cIik7XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9ICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIHJldHVybiBhdXRoZW50aWNhdG9yLmF1dGhlbnRpY2F0ZShwYXJhbXMucHJvdmlkZXIsIHJlcXVlc3QpO1xufTtcbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgYXdhaXQgYXV0aGVudGljYXRvci5sb2dvdXQocmVxdWVzdCwgeyByZWRpcmVjdFRvOiBcIi9cIiB9KTtcbn07XG4iLCAiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFBhcGVyLCBUZXh0LCBUaXRsZSwgR3JpZCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IEZvcm0sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0KTtcbiAgcmV0dXJuIHsgdXNlciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHVzZXIgPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgY29uc29sZS5sb2codXNlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG10PVwieGxcIj5cbiAgICAgIDxHcmlkPlxuICAgICAgICA8R3JpZC5Db2wgc3Bhbj17M30+XG4gICAgICAgICAgPFBhcGVyIHA9XCJsZ1wiIHNoYWRvdz1cInhzXCI+XG4gICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwibGlua1wiPkNhcnM8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwibGlua1wiPkVsZWN0cm9uaWNzPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cImxpbmtcIj5CdXNpbmVzczwvVGV4dD5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L0dyaWQuQ29sPlxuICAgICAgICA8R3JpZC5Db2wgc3Bhbj17Nn0+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxoMj5IZXksIHt1c2VyPy51c2VyPy5kaXNwbGF5TmFtZX08L2gyPlxuICAgICAgICAgICAgPEZvcm0gYWN0aW9uPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5Mb2cgb3V0PC9idXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvR3JpZC5Db2w+XG4gICAgICAgIDxHcmlkLkNvbCBzcGFuPXszfT5cbiAgICAgICAgICA8UGFwZXIgcD1cImxnXCI+XG4gICAgICAgICAgICA8VGl0bGUgb3JkZXI9ezR9PkxlYWRlcmJvYXJkPC9UaXRsZT5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L0dyaWQuQ29sPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIiwgImltcG9ydCB7IEZvcm0gfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgU29jaWFsc1Byb3ZpZGVyIH0gZnJvbSBcInJlbWl4LWF1dGgtc29jaWFsc1wiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCdXR0b24sIFRpdGxlLCBTdGFjaywgVGV4dCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5pbnRlcmZhY2UgU29jaWFsQnV0dG9uUHJvcHMge1xuICBwcm92aWRlcjogU29jaWFsc1Byb3ZpZGVyO1xuICBsYWJlbDogc3RyaW5nO1xuICBpY29uPzogYW55O1xuICBjb2xvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBzdWNjZXNzUmVkaXJlY3Q6IFwiL1wiLFxuICB9KTtcbn07XG5cbmNvbnN0IFNvY2lhbEJ1dHRvbjogUmVhY3QuRkM8U29jaWFsQnV0dG9uUHJvcHM+ID0gKHtcbiAgcHJvdmlkZXIsXG4gIGxhYmVsLFxuICBpY29uLFxuICBjb2xvcixcbn0pID0+IChcbiAgPEZvcm0gYWN0aW9uPXtgL2F1dGgvJHtwcm92aWRlcn1gfSBtZXRob2Q9XCJwb3N0XCIgc3R5bGU9e3sgd2lkdGg6IFwiMzAlXCIgfX0+XG4gICAgPEJ1dHRvbiBsZWZ0SWNvbj17aWNvbn0gY29sb3I9e2NvbG9yfSB0eXBlPVwic3VibWl0XCIgZnVsbFdpZHRoPlxuICAgICAge2xhYmVsfVxuICAgIDwvQnV0dG9uPlxuICA8L0Zvcm0+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG10PVwieGxcIj5cbiAgICAgIDxTdGFjayBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8VGl0bGUgb3JkZXI9ezF9PkxvZyBpbjwvVGl0bGU+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwiZGltbWVkXCIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgQ29udGludWUgd2l0aCBvbmUgb2YgdGhlc2UgcHJvdmlkZXJzXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFNvY2lhbEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwiaW5kaWdvXCJcbiAgICAgICAgICBwcm92aWRlcj17U29jaWFsc1Byb3ZpZGVyLkRJU0NPUkR9XG4gICAgICAgICAgbGFiZWw9XCJMb2dpbiB3aXRoIERpc2NvcmRcIlxuICAgICAgICAvPlxuICAgICAgICA8U29jaWFsQnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgIHByb3ZpZGVyPXtTb2NpYWxzUHJvdmlkZXIuR09PR0xFfVxuICAgICAgICAgIGxhYmVsPVwiTG9naW4gd2l0aCBHb29nbGVcIlxuICAgICAgICAvPlxuICAgICAgICA8U29jaWFsQnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICBwcm92aWRlcj17U29jaWFsc1Byb3ZpZGVyLkdJVEhVQn1cbiAgICAgICAgICBsYWJlbD1cIkxvZ2luIHdpdGggR2l0aHViXCJcbiAgICAgICAgLz5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonNTE2ZWRhMGQnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LU1GVEdOTVFRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01NElVN0Q1NS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVDMk1SN1EzLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTUNSU1VFTjYuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVVYMlZaQkNFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SV1dRSkNGQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoLyRwcm92aWRlcic6eydpZCc6J3JvdXRlcy9hdXRoLyRwcm92aWRlcicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoLzpwcm92aWRlcicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoLyRwcm92aWRlci1XQkpaMkpEUS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM0haQlVFN0QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDY2QVlGNC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrJzp7J2lkJzoncm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvOnByb3ZpZGVyL2NhbGxiYWNrJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLTZSRUszQ0MyLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDY2QVlGNC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1LQlNCQ0g1UC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1g2NkFZRjQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4nOnsnaWQnOidyb3V0ZXMvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9naW4tSkpTTzdSVkwuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNIWkJVRTdELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1g2NkFZRjQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9nb3V0Jzp7J2lkJzoncm91dGVzL2xvZ291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9nb3V0LUhGM0hNVU1ULmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDY2QVlGNC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtNTE2RURBMEQuanMnfTsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2sudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dpbi50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoLyRwcm92aWRlci5jYWxsYmFja1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoLzpwcm92aWRlci9jYWxsYmFja1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kcHJvdmlkZXJcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvJHByb3ZpZGVyXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvOnByb3ZpZGVyXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9sb2dvdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfVxuICB9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNDQSxZQUF1Qjs7O0FDRHZCO0FBQUE7QUFBQTtBQUFBO0FBQ0EsbUJBQTRCO0FBQzVCLG9CQUErQjtBQUMvQixpQkFBNkM7QUFFOUIsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsUUFBTSxTQUFTLGtDQUNiLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUVuRCxrQkFBZ0IsSUFBSSxn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
