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
  const submit = (0, import_react3.useSubmit)();
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.header
  }, /* @__PURE__ */ React.createElement(import_core.Container, {
    className: classes.mainSection,
    size: "xl"
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
    icon: /* @__PURE__ */ React.createElement(import_tabler_icons_react.ChartBar, {
      size: 14,
      color: theme.colors.indigo[6]
    })
  }, "Leaderboard"), /* @__PURE__ */ React.createElement(import_core.Menu.Item, {
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
    }),
    onClick: () => submit(null, {
      method: "post",
      action: "/logout",
      replace: true
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
  }), /* @__PURE__ */ React.createElement(import_core2.Container, {
    size: "xl",
    mt: "xl"
  }, /* @__PURE__ */ React.createElement(import_react4.Outlet, null))), /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react4.Scripts, null), /* @__PURE__ */ React.createElement(import_react4.LiveReload, null)));
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

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/$category.tsx
var category_exports = {};
__export(category_exports, {
  default: () => Category,
  loader: () => loader3
});
var import_react6 = require("@remix-run/react");
var loader3 = async ({ params }) => {
  const category = params.category;
  return { category };
};
function Category() {
  const data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, data.category));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/auth/$provider.tsx
var provider_exports = {};
__export(provider_exports, {
  action: () => action,
  loader: () => loader4
});
var import_node2 = require("@remix-run/node");
var loader4 = () => (0, import_node2.redirect)("/login");
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
  loader: () => loader5
});
var import_core3 = require("@mantine/core");
var import_react7 = require("@remix-run/react");
var import_react_router_dom = require("react-router-dom");

// app/db/db.server.ts
var import_client = require("@prisma/client");
var prisma = global.prisma || new import_client.PrismaClient();
if (true)
  global.prisma = prisma;
async function getCategories() {
  return prisma.category.findMany();
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/index.tsx
var useStyles2 = (0, import_core3.createStyles)((theme) => ({
  link: {
    display: "block"
  }
}));
var loader5 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);
  const categories = await getCategories();
  return { user, categories };
};
function Index() {
  var _a, _b;
  const data = (0, import_react7.useLoaderData)();
  const { classes } = useStyles2();
  console.log(data);
  return /* @__PURE__ */ React.createElement(import_core3.Grid, null, /* @__PURE__ */ React.createElement(import_core3.Grid.Col, {
    span: 3
  }, /* @__PURE__ */ React.createElement(import_core3.Paper, {
    p: "lg",
    shadow: "xs"
  }, (_a = data == null ? void 0 : data.categories) == null ? void 0 : _a.map(({ id, name }) => /* @__PURE__ */ React.createElement(import_core3.Text, {
    component: import_react_router_dom.Link,
    to: `/category/${name.toLowerCase()}`,
    key: id,
    variant: "link",
    className: classes.link
  }, name)))), /* @__PURE__ */ React.createElement(import_core3.Grid.Col, {
    span: 9
  }, /* @__PURE__ */ React.createElement(import_core3.Box, null, /* @__PURE__ */ React.createElement("h2", null, "Hey, ", ((_b = data == null ? void 0 : data.user) == null ? void 0 : _b.displayName) ?? "Anon"))));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login,
  loader: () => loader6
});
var import_react8 = require("@remix-run/react");
var import_remix_auth_socials2 = require("remix-auth-socials");
var import_core4 = require("@mantine/core");
var loader6 = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/"
  });
};
var SocialButton = ({
  provider,
  label,
  icon,
  color
}) => /* @__PURE__ */ React.createElement(import_react8.Form, {
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
var assets_manifest_default = { "version": "a750d201", "entry": { "module": "/build/entry.client-JOMGOKB2.js", "imports": ["/build/_shared/chunk-EI6KMQWI.js", "/build/_shared/chunk-QZOXBTWL.js", "/build/_shared/chunk-5C2MR7Q3.js", "/build/_shared/chunk-MCRSUEN6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-YSAQLQLL.js", "imports": ["/build/_shared/chunk-K7Y7MYFV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider": { "id": "routes/auth/$provider", "parentId": "root", "path": "auth/:provider", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider-WBJZ2JDQ.js", "imports": ["/build/_shared/chunk-3HZBUE7D.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider.callback": { "id": "routes/auth/$provider.callback", "parentId": "root", "path": "auth/:provider/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider.callback-6REK3CC2.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/$category": { "id": "routes/category/$category", "parentId": "root", "path": "category/:category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category/$category-5DIW74Y5.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-YJN2MHOP.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-XIVML2OE.js", "imports": ["/build/_shared/chunk-3HZBUE7D.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-HF3HMUMT.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-A750D201.js" };

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
  "routes/category/$category": {
    id: "routes/category/$category",
    parentId: "root",
    path: "category/:category",
    index: void 0,
    caseSensitive: void 0,
    module: category_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiIsICIuLi9ub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi9kZXYvY29tcGlsZXIvc2hpbXMvcmVhY3QudHMiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLnRzeCIsICIuLi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnkudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvZGIvZGIuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xvZ2luLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBpbmplY3RTdHlsZXNJbnRvU3RhdGljTWFya3VwIH0gZnJvbSBcIkBtYW50aW5lL3NzclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcbiAgICBgPCFET0NUWVBFIGh0bWw+JHtpbmplY3RTdHlsZXNJbnRvU3RhdGljTWFya3VwKG1hcmt1cCl9YCxcbiAgICB7XG4gICAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICB9XG4gICk7XG59XG4iLCAiaW1wb3J0IHtcbiAgQm94LFxuICBDb2xvclNjaGVtZSxcbiAgQ29sb3JTY2hlbWVQcm92aWRlcixcbiAgQ29udGFpbmVyLFxuICBNYW50aW5lUHJvdmlkZXIsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbn0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB0eXBlIHtcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE1ldGFGdW5jdGlvbixcbiAgTGlua3NGdW5jdGlvbixcbn0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTGF5b3V0L05hdmJhclwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJ+L3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxuICB0aXRsZTogXCJxdWVyaWUgfCBhc2sgeW91ciB3aWxkZXN0IHF1ZXN0aW9uc1wiLFxuICB2aWV3cG9ydDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGhyZWY6IHN0eWxlcyxcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgfSxcbiAgXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0KTtcbiAgcmV0dXJuIHsgdXNlciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB1c2VyID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cImJvZHlcIlxuICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbMl0sXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8TWFudGluZVRoZW1lPlxuICAgICAgICAgIDxOYXZiYXIgdXNlcj17dXNlcn0gLz5cbiAgICAgICAgICA8Q29udGFpbmVyIHNpemU9XCJ4bFwiIG10PVwieGxcIj5cbiAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9NYW50aW5lVGhlbWU+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5mdW5jdGlvbiBNYW50aW5lVGhlbWUoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCBbY29sb3JTY2hlbWUsIHNldENvbG9yU2NoZW1lXSA9IHVzZVN0YXRlPENvbG9yU2NoZW1lPihcImxpZ2h0XCIpO1xuICBjb25zdCB0b2dnbGVDb2xvclNjaGVtZSA9ICh2YWx1ZT86IENvbG9yU2NoZW1lKSA9PlxuICAgIHNldENvbG9yU2NoZW1lKHZhbHVlIHx8IChjb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyBcImxpZ2h0XCIgOiBcImRhcmtcIikpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbG9yU2NoZW1lUHJvdmlkZXJcbiAgICAgIGNvbG9yU2NoZW1lPXtjb2xvclNjaGVtZX1cbiAgICAgIHRvZ2dsZUNvbG9yU2NoZW1lPXt0b2dnbGVDb2xvclNjaGVtZX1cbiAgICA+XG4gICAgICA8TWFudGluZVByb3ZpZGVyXG4gICAgICAgIHRoZW1lPXt7IGNvbG9yU2NoZW1lIH19XG4gICAgICAgIHdpdGhOb3JtYWxpemVDU1NcbiAgICAgICAgd2l0aEdsb2JhbFN0eWxlc1xuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L01hbnRpbmVQcm92aWRlcj5cbiAgICA8L0NvbG9yU2NoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZVN0eWxlcyxcbiAgQ29udGFpbmVyLFxuICBBdmF0YXIsXG4gIFVuc3R5bGVkQnV0dG9uLFxuICBHcm91cCxcbiAgVGV4dCxcbiAgTWVudSxcbiAgRGl2aWRlcixcbiAgQnVyZ2VyLFxuICBUaXRsZSxcbiAgQnV0dG9uLFxufSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgdXNlQm9vbGVhblRvZ2dsZSB9IGZyb20gXCJAbWFudGluZS9ob29rc1wiO1xuaW1wb3J0IHtcbiAgTG9nb3V0LFxuICBIZWFydCxcbiAgTWVzc2FnZSxcbiAgU2V0dGluZ3MsXG4gIENoZXZyb25Eb3duLFxuICBDaGFydEJhcixcbn0gZnJvbSBcInRhYmxlci1pY29ucy1yZWFjdFwiO1xuaW1wb3J0IHsgTGluaywgdXNlU3VibWl0IH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgaGVhZGVyOiB7XG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCJcbiAgICAgICAgPyB0aGVtZS5jb2xvcnMuZGFya1s2XVxuICAgICAgICA6IHRoZW1lLmNvbG9ycy5ncmF5WzBdLFxuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke1xuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gXCJ0cmFuc3BhcmVudFwiIDogdGhlbWUuY29sb3JzLmdyYXlbMl1cbiAgICB9YCxcbiAgfSxcblxuICBtYWluU2VjdGlvbjoge1xuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG5cbiAgdXNlck1lbnU6IHtcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJ4c1wiKV06IHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0sXG4gIH0sXG5cbiAgdXNlcjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1swXSA6IHRoZW1lLmJsYWNrLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9cHggJHt0aGVtZS5zcGFjaW5nLnNtfXB4YCxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGl1cy5zbSxcbiAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQtY29sb3IgMTAwbXMgZWFzZVwiLFxuXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbOF0gOiB0aGVtZS53aGl0ZSxcbiAgICB9LFxuICB9LFxuXG4gIGJ1cmdlcjoge1xuICAgIFt0aGVtZS5mbi5sYXJnZXJUaGFuKFwieHNcIildOiB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9LFxuICB9LFxuXG4gIHVzZXJBY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1s4XSA6IHRoZW1lLndoaXRlLFxuICB9LFxuICBsaW5rczoge1xuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInhzXCIpXToge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXNlcjogYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTmF2YmFyKHsgdXNlciB9OiBQcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMsIHRoZW1lLCBjeCB9ID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvcGVuZWQsIHRvZ2dsZU9wZW5lZF0gPSB1c2VCb29sZWFuVG9nZ2xlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXJNZW51T3BlbmVkLCBzZXRVc2VyTWVudU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5TZWN0aW9ufSBzaXplPVwieGxcIj5cbiAgICAgICAgPEdyb3VwIHBvc2l0aW9uPVwiYXBhcnRcIj5cbiAgICAgICAgICA8VGl0bGUgb3JkZXI9ezN9PnF1ZXJpZTwvVGl0bGU+XG4gICAgICAgICAgPEJ1cmdlclxuICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVPcGVuZWQoKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXJnZXJ9XG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgeyF1c2VyPy51c2VyICYmIChcbiAgICAgICAgICAgIDxHcm91cCBzcGFjaW5nPXs1fSBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PlxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gdG89XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dXNlcj8udXNlciAmJiAoXG4gICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICBzaXplPXsyNjB9XG4gICAgICAgICAgICAgIHBsYWNlbWVudD1cImVuZFwiXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249XCJwb3AtdG9wLXJpZ2h0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJNZW51fVxuICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRVc2VyTWVudU9wZW5lZChmYWxzZSl9XG4gICAgICAgICAgICAgIG9uT3Blbj17KCkgPT4gc2V0VXNlck1lbnVPcGVuZWQodHJ1ZSl9XG4gICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgIDxVbnN0eWxlZEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChjbGFzc2VzLnVzZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXMudXNlckFjdGl2ZV06IHVzZXJNZW51T3BlbmVkLFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEdyb3VwIHNwYWNpbmc9ezd9PlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyPy51c2VyPy5waG90b3NbMF0/LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17dXNlcj8udXNlcj8uZGlzcGxheU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgcmFkaXVzPVwieGxcIlxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezI0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCB3ZWlnaHQ9ezUwMH0gc2l6ZT1cInNtXCIgc3g9e3sgbGluZUhlaWdodDogMSB9fSBtcj17M30+XG4gICAgICAgICAgICAgICAgICAgICAge3VzZXI/LnVzZXI/LmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uRG93biBzaXplPXsxMn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9VbnN0eWxlZEJ1dHRvbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgaWNvbj17PENoYXJ0QmFyIHNpemU9ezE0fSBjb2xvcj17dGhlbWUuY29sb3JzLmluZGlnb1s2XX0gLz59XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMZWFkZXJib2FyZFxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBpY29uPXs8SGVhcnQgc2l6ZT17MTR9IGNvbG9yPXt0aGVtZS5jb2xvcnMucmVkWzZdfSAvPn0+XG4gICAgICAgICAgICAgICAgTGlrZWQgcG9zdHNcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICBpY29uPXs8TWVzc2FnZSBzaXplPXsxNH0gY29sb3I9e3RoZW1lLmNvbG9ycy5ibHVlWzZdfSAvPn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFlvdXIgY29tbWVudHNcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51LkxhYmVsPlNldHRpbmdzPC9NZW51LkxhYmVsPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGljb249ezxTZXR0aW5ncyBzaXplPXsxNH0gLz59PlxuICAgICAgICAgICAgICAgIEFjY291bnQgc2V0dGluZ3NcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICBpY29uPXs8TG9nb3V0IHNpemU9ezE0fSAvPn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgc3VibWl0KG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIi9sb2dvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvR3JvdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBBdXRoZW50aWNhdG9yIH0gZnJvbSBcInJlbWl4LWF1dGhcIjtcbmltcG9ydCB7IHNlc3Npb25TdG9yYWdlIH0gZnJvbSBcIn4vc2VydmljZXMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7XG4gIEdvb2dsZVN0cmF0ZWd5LFxuICBTb2NpYWxzUHJvdmlkZXIsXG4gIEdpdEh1YlN0cmF0ZWd5LFxuICBEaXNjb3JkU3RyYXRlZ3ksXG59IGZyb20gXCJyZW1peC1hdXRoLXNvY2lhbHNcIjtcblxuZXhwb3J0IGxldCBhdXRoZW50aWNhdG9yID0gbmV3IEF1dGhlbnRpY2F0b3Ioc2Vzc2lvblN0b3JhZ2UsIHtcbiAgc2Vzc2lvbktleTogXCJfX3Nlc3Npb25cIixcbn0pO1xuXG5hdXRoZW50aWNhdG9yLnVzZShcbiAgbmV3IEdvb2dsZVN0cmF0ZWd5KFxuICAgIHtcbiAgICAgIGNsaWVudElEOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGNhbGxiYWNrVVJMOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvJHtTb2NpYWxzUHJvdmlkZXIuR09PR0xFfS9jYWxsYmFja2AsXG4gICAgfSxcbiAgICBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcbiAgICAgIHJldHVybiBwcm9maWxlO1xuICAgIH1cbiAgKVxuKTtcblxuYXV0aGVudGljYXRvci51c2UoXG4gIG5ldyBEaXNjb3JkU3RyYXRlZ3koXG4gICAge1xuICAgICAgY2xpZW50SUQ6IHByb2Nlc3MuZW52LkRJU0NPUkRfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5ESVNDT1JEX0NMSUVOVF9TRUNSRVQsXG4gICAgICBjYWxsYmFja1VSTDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoLyR7U29jaWFsc1Byb3ZpZGVyLkRJU0NPUkR9L2NhbGxiYWNrYCxcbiAgICB9LFxuICAgIGFzeW5jICh7IHByb2ZpbGUgfSkgPT4ge1xuICAgICAgcmV0dXJuIHByb2ZpbGU7XG4gICAgfVxuICApXG4pO1xuXG5hdXRoZW50aWNhdG9yLnVzZShcbiAgbmV3IEdpdEh1YlN0cmF0ZWd5KFxuICAgIHtcbiAgICAgIGNsaWVudElEOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGNhbGxiYWNrVVJMOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvJHtTb2NpYWxzUHJvdmlkZXIuR0lUSFVCfS9jYWxsYmFja2AsXG4gICAgfSxcbiAgICBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcbiAgICAgIHJldHVybiBwcm9maWxlO1xuICAgIH1cbiAgKVxuKTtcbiIsICJpbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcblxuZXhwb3J0IGxldCBzZXNzaW9uU3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogXCJfX3Nlc3Npb25cIixcbiAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBzZWNyZXRzOiBbcHJvY2Vzcy5lbnYuQ09PS0lFX1NFQ1JFVF0sXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGxldCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24sIGRlc3Ryb3lTZXNzaW9uIH0gPSBzZXNzaW9uU3RvcmFnZTtcbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUocGFyYW1zLnByb3ZpZGVyLCByZXF1ZXN0LCB7XG4gICAgc3VjY2Vzc1JlZGlyZWN0OiBcIi9cIixcbiAgICBmYWlsdXJlUmVkaXJlY3Q6IFwiL2xvZ2luXCIsXG4gIH0pO1xufTtcbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gcGFyYW1zLmNhdGVnb3J5O1xuICByZXR1cm4geyBjYXRlZ29yeSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPntkYXRhLmNhdGVnb3J5fTwvaDI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiByZWRpcmVjdChcIi9sb2dpblwiKTtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgcmV0dXJuIGF1dGhlbnRpY2F0b3IuYXV0aGVudGljYXRlKHBhcmFtcy5wcm92aWRlciwgcmVxdWVzdCk7XG59O1xuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBhd2FpdCBhdXRoZW50aWNhdG9yLmxvZ291dChyZXF1ZXN0LCB7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufTtcbiIsICJpbXBvcnQgeyBCb3gsIFBhcGVyLCBUZXh0LCBHcmlkLCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gXCJ+L2RiL2RiLnNlcnZlclwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGxpbms6IHtcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0KTtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGdldENhdGVnb3JpZXMoKTtcbiAgcmV0dXJuIHsgdXNlciwgY2F0ZWdvcmllcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZD5cbiAgICAgIDxHcmlkLkNvbCBzcGFuPXszfT5cbiAgICAgICAgPFBhcGVyIHA9XCJsZ1wiIHNoYWRvdz1cInhzXCI+XG4gICAgICAgICAge2RhdGE/LmNhdGVnb3JpZXM/Lm1hcCgoeyBpZCwgbmFtZSB9KSA9PiAoXG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICAgIHRvPXtgL2NhdGVnb3J5LyR7bmFtZS50b0xvd2VyQ2FzZSgpfWB9XG4gICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJsaW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1BhcGVyPlxuICAgICAgPC9HcmlkLkNvbD5cbiAgICAgIDxHcmlkLkNvbCBzcGFuPXs5fT5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8aDI+SGV5LCB7ZGF0YT8udXNlcj8uZGlzcGxheU5hbWUgPz8gXCJBbm9uXCJ9PC9oMj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0dyaWQuQ29sPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuaW50ZXJmYWNlIEN1c3RvbU5vZGVKc0dsb2JhbCBleHRlbmRzIE5vZGVKUy5HbG9iYWwge1xuICBwcmlzbWE6IFByaXNtYUNsaWVudDtcbn1cblxuZGVjbGFyZSBjb25zdCBnbG9iYWw6IEN1c3RvbU5vZGVKc0dsb2JhbDtcblxuY29uc3QgcHJpc21hID0gZ2xvYmFsLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBnbG9iYWwucHJpc21hID0gcHJpc21hO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllcygpIHtcbiAgcmV0dXJuIHByaXNtYS5jYXRlZ29yeS5maW5kTWFueSgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGF0ZXN0UXVlc3Rpb25zRm9yQ2F0ZWdvcnkoY2F0ZWdvcnk/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByaXNtYS5xdWVzdGlvbi5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgIG5hbWU6IGNhdGVnb3J5ID8/IFwiXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG4vLyBFc3NlbnRpYWxseSBJIHdhbnQgdG8gc3VtIHRoZSBhbW91bnQgb2YgbGlrZXMgYVxuLy8gcGVyc29uIGhhcyBvbiBib3RoIHF1ZXN0aW9ucyB0aGV5J3ZlIGFza2VkIGFuZFxuLy8gY29tbWVudHNcbi8vIHJhdyBxdWVyeT9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMZWFkZXJib2FyZCgpIHt9XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRRdWVzdGlvbkFuZENvbW1lbnRzKGlkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByaXNtYS5xdWVzdGlvbi5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQsXG4gICAgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBjb21tZW50czoge1xuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgbGlrZXM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUXVlc3Rpb24oe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGNhdGVnb3J5LFxuICB1c2VySWQsXG59OiB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xufSkge1xuICByZXR1cm4gcHJpc21hLnF1ZXN0aW9uLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGF1dGhvcjoge1xuICAgICAgICBjb25uZWN0OiB7XG4gICAgICAgICAgaWQ6IHVzZXJJZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjYXRlZ29yeToge1xuICAgICAgICBjb25uZWN0OiB7XG4gICAgICAgICAgbmFtZTogY2F0ZWdvcnksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29tbWVudCh7XG4gIGNvbnRlbnQsXG4gIHVzZXJJZCxcbiAgcXVlc3Rpb25JZCxcbn06IHtcbiAgY29udGVudDogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcbiAgcXVlc3Rpb25JZDogc3RyaW5nO1xufSkge1xuICByZXR1cm4gcHJpc21hLmNvbW1lbnQuY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICBjb250ZW50LFxuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICBpZDogdXNlcklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHF1ZXN0aW9uOiB7XG4gICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICBpZDogcXVlc3Rpb25JZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbi8vIGlzIHRoaXMgZXZlbiByaWdodD9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVRdWVzdGlvbkxpa2Uoe1xuICBxdWVzdGlvbklkLFxuICB1c2VySWQsXG59OiB7XG4gIHF1ZXN0aW9uSWQ6IHN0cmluZztcbiAgdXNlcklkOiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiBwcmlzbWEucXVlc3Rpb24udXBkYXRlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQ6IHF1ZXN0aW9uSWQsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsaWtlczoge1xuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IEZvcm0gfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgU29jaWFsc1Byb3ZpZGVyIH0gZnJvbSBcInJlbWl4LWF1dGgtc29jaWFsc1wiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCdXR0b24sIFRpdGxlLCBTdGFjaywgVGV4dCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5pbnRlcmZhY2UgU29jaWFsQnV0dG9uUHJvcHMge1xuICBwcm92aWRlcjogU29jaWFsc1Byb3ZpZGVyO1xuICBsYWJlbDogc3RyaW5nO1xuICBpY29uPzogYW55O1xuICBjb2xvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBzdWNjZXNzUmVkaXJlY3Q6IFwiL1wiLFxuICB9KTtcbn07XG5cbmNvbnN0IFNvY2lhbEJ1dHRvbjogUmVhY3QuRkM8U29jaWFsQnV0dG9uUHJvcHM+ID0gKHtcbiAgcHJvdmlkZXIsXG4gIGxhYmVsLFxuICBpY29uLFxuICBjb2xvcixcbn0pID0+IChcbiAgPEZvcm0gYWN0aW9uPXtgL2F1dGgvJHtwcm92aWRlcn1gfSBtZXRob2Q9XCJwb3N0XCIgc3R5bGU9e3sgd2lkdGg6IFwiMzAlXCIgfX0+XG4gICAgPEJ1dHRvbiBsZWZ0SWNvbj17aWNvbn0gY29sb3I9e2NvbG9yfSB0eXBlPVwic3VibWl0XCIgZnVsbFdpZHRoPlxuICAgICAge2xhYmVsfVxuICAgIDwvQnV0dG9uPlxuICA8L0Zvcm0+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG10PVwieGxcIj5cbiAgICAgIDxTdGFjayBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8VGl0bGUgb3JkZXI9ezF9PkxvZyBpbjwvVGl0bGU+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwiZGltbWVkXCIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgQ29udGludWUgd2l0aCBvbmUgb2YgdGhlc2UgcHJvdmlkZXJzXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFNvY2lhbEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwiaW5kaWdvXCJcbiAgICAgICAgICBwcm92aWRlcj17U29jaWFsc1Byb3ZpZGVyLkRJU0NPUkR9XG4gICAgICAgICAgbGFiZWw9XCJMb2dpbiB3aXRoIERpc2NvcmRcIlxuICAgICAgICAvPlxuICAgICAgICA8U29jaWFsQnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgIHByb3ZpZGVyPXtTb2NpYWxzUHJvdmlkZXIuR09PR0xFfVxuICAgICAgICAgIGxhYmVsPVwiTG9naW4gd2l0aCBHb29nbGVcIlxuICAgICAgICAvPlxuICAgICAgICA8U29jaWFsQnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICBwcm92aWRlcj17U29jaWFsc1Byb3ZpZGVyLkdJVEhVQn1cbiAgICAgICAgICBsYWJlbD1cIkxvZ2luIHdpdGggR2l0aHViXCJcbiAgICAgICAgLz5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonYTc1MGQyMDEnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUpPTUdPS0IyLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FSTZLTVFXSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFaT1hCVFdMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUMyTVI3UTMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NQ1JTVUVONi5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtWVNBUUxRTEwuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUs3WTdNWUZWLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvJHByb3ZpZGVyJzp7J2lkJzoncm91dGVzL2F1dGgvJHByb3ZpZGVyJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvOnByb3ZpZGVyJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvJHByb3ZpZGVyLVdCSloySkRRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zSFpCVUU3RC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2snOnsnaWQnOidyb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2snLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC86cHJvdmlkZXIvY2FsbGJhY2snLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2stNlJFSzNDQzIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeSc6eydpZCc6J3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnknLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2F0ZWdvcnkvOmNhdGVnb3J5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS01RElXNzRZNS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtWUpOMk1IT1AuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ2luJzp7J2lkJzoncm91dGVzL2xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ2luLVhJVk1MMk9FLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zSFpCVUU3RC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ291dCc6eydpZCc6J3JvdXRlcy9sb2dvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9nb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ291dC1IRjNITVVNVC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1g2NkFZRjQuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUE3NTBEMjAxLmpzJ307IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dpbi50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoLyRwcm92aWRlci5jYWxsYmFja1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoLzpwcm92aWRlci9jYWxsYmFja1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnlcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY2F0ZWdvcnkvOmNhdGVnb3J5XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoLyRwcm92aWRlclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC8kcHJvdmlkZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC86cHJvdmlkZXJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9XG4gIH07Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0NBLFlBQXVCOzs7QUNEdkI7QUFBQTtBQUFBO0FBQUE7QUFDQSxtQkFBNEI7QUFDNUIsb0JBQStCO0FBQy9CLGlCQUE2QztBQUU5Qix1QkFDYixTQUNBLG9CQUNBLGlCQUNBLGNBQ0E7QUFDQSxRQUFNLFNBQVMsa0NBQ2Isb0NBQUMsMEJBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBRW5ELGtCQUFnQixJQUFJLGdCQUFnQjtBQUVwQyxTQUFPLElBQUksU0FDVCxrQkFBa0IsNkNBQTZCLFdBQy9DO0FBQUEsSUFDRSxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FDcEJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTU87QUFDUCxvQkFRTztBQU1QLG9CQUF5Qjs7O0FDckJ6QixvQkFBeUI7QUFDekIsa0JBWU87QUFDUCxtQkFBaUM7QUFDakMsZ0NBT087QUFDUCxvQkFBZ0M7QUFFaEMsSUFBTSxZQUFZLDhCQUFhLENBQUMsVUFBVztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLFlBQVksTUFBTSxRQUFRO0FBQUEsSUFDMUIsaUJBQ0UsTUFBTSxnQkFBZ0IsU0FDbEIsTUFBTSxPQUFP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
