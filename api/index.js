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
var import_core3 = require("@mantine/core");
var import_react5 = require("@remix-run/react");
var import_react6 = require("react");

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
  return /* @__PURE__ */ React.createElement(import_core.Box, {
    component: "header",
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

// app/components/Layout/Footer.tsx
var import_react4 = __toESM(require("react"));
var import_core2 = require("@mantine/core");
var useStyles2 = (0, import_core2.createStyles)((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    backgroundColor: theme.colors.gray[0]
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column"
    }
  },
  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md
    }
  }
}));
function Footer({ links: links2 }) {
  const { classes } = useStyles2();
  const items = links2.map((link) => /* @__PURE__ */ import_react4.default.createElement(import_core2.Anchor, {
    color: "dimmed",
    key: link.label,
    href: link.link,
    onClick: (event) => event.preventDefault(),
    size: "sm"
  }, link.label));
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: classes.footer
  }, /* @__PURE__ */ import_react4.default.createElement(import_core2.Container, {
    className: classes.inner,
    size: "xl"
  }, /* @__PURE__ */ import_react4.default.createElement(import_core2.Title, {
    order: 4
  }, "querie"), /* @__PURE__ */ import_react4.default.createElement(import_core2.Group, {
    className: classes.links
  }, items)));
}

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
  const user = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react5.Meta, null), /* @__PURE__ */ React.createElement(import_react5.Links, null)), /* @__PURE__ */ React.createElement(import_core3.Box, {
    component: "body",
    sx: (theme) => ({
      backgroundColor: theme.colors.gray[2]
    })
  }, /* @__PURE__ */ React.createElement(MantineTheme, null, /* @__PURE__ */ React.createElement(Navbar, {
    user
  }), /* @__PURE__ */ React.createElement(import_core3.Container, {
    size: "xl",
    role: "main",
    mt: "xl"
  }, /* @__PURE__ */ React.createElement(import_react5.Outlet, null)), /* @__PURE__ */ React.createElement(Footer, {
    links: [{ link: "#", label: "Github" }]
  })), /* @__PURE__ */ React.createElement(import_react5.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react5.Scripts, null), /* @__PURE__ */ React.createElement(import_react5.LiveReload, null)));
}
function MantineTheme({ children }) {
  const [colorScheme, setColorScheme] = (0, import_react6.useState)("light");
  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return /* @__PURE__ */ React.createElement(import_core3.ColorSchemeProvider, {
    colorScheme,
    toggleColorScheme
  }, /* @__PURE__ */ React.createElement(import_core3.MantineProvider, {
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

// route:/Users/dane/Desktop/github/react/querie/app/routes/category.tsx
var category_exports = {};
__export(category_exports, {
  default: () => Category,
  loader: () => loader4
});
var import_react7 = require("@remix-run/react");
var import_core4 = require("@mantine/core");

// app/db/db.server.ts
var import_client = require("@prisma/client");
var prisma = global.prisma || new import_client.PrismaClient();
if (true)
  global.prisma = prisma;
async function getCategories() {
  return prisma.category.findMany();
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category.tsx
var useStyles3 = (0, import_core4.createStyles)((theme) => ({
  links: {
    display: "flex",
    gap: "1rem 0.5rem",
    flexWrap: "wrap"
  },
  link: {
    textDecoration: "none",
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    color: theme.colors.gray[6],
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.gray[3]
  },
  activeLink: {
    color: theme.colors.blue[7],
    backgroundColor: theme.colors.blue[1]
  }
}));
var loader4 = async () => {
  const categories = await getCategories();
  return { categories };
};
function Category() {
  var _a;
  const { classes, cx } = useStyles3();
  const data = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core4.Box, {
    component: "nav"
  }, /* @__PURE__ */ React.createElement(import_core4.List, {
    listStyleType: "none",
    className: classes.links
  }, (_a = data == null ? void 0 : data.categories) == null ? void 0 : _a.map(({ id, name }) => /* @__PURE__ */ React.createElement(import_core4.List.Item, null, /* @__PURE__ */ React.createElement(import_react7.NavLink, {
    to: `/category/${name.toLowerCase()}`,
    key: id,
    className: ({ isActive }) => cx(classes.link, { [classes.activeLink]: isActive })
  }, name))))), /* @__PURE__ */ React.createElement(import_react7.Outlet, null));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/$category.tsx
var category_exports2 = {};
__export(category_exports2, {
  default: () => Category2,
  loader: () => loader5
});
var import_core5 = require("@mantine/core");
var import_react8 = require("@remix-run/react");
var import_react9 = require("react");
var import_tabler_icons_react2 = require("tabler-icons-react");
var useStyles4 = (0, import_core5.createStyles)((theme) => ({
  categories: {
    margin: "0 -8px",
    marginTop: theme.spacing.xl
  },
  category: {
    color: theme.colors.blue[5],
    fontWeight: 700
  }
}));
var loader5 = async ({ params }) => {
  const category = params.category;
  return { category };
};
function Category2() {
  const data = (0, import_react8.useLoaderData)();
  const [opened, setOpened] = (0, import_react9.useState)(false);
  const { classes } = useStyles4();
  return /* @__PURE__ */ React.createElement(import_core5.SimpleGrid, {
    className: classes.categories,
    cols: 1,
    breakpoints: [
      { minWidth: "xs", cols: 2 },
      { minWidth: "lg", cols: 3 }
    ]
  }, Array.from({ length: 20 }, (_, index) => /* @__PURE__ */ React.createElement(import_core5.Card, {
    component: "article",
    key: index
  }, /* @__PURE__ */ React.createElement(import_core5.Group, null, /* @__PURE__ */ React.createElement(import_core5.Box, null, /* @__PURE__ */ React.createElement(import_core5.Text, {
    to: `/category/${data.category}`,
    size: "xs",
    component: import_react8.Link,
    className: classes.category,
    variant: "link"
  }, data.category), " ", "\u223C", " ", /* @__PURE__ */ React.createElement(import_core5.Text, {
    size: "xs",
    component: "span",
    color: "dimmed"
  }, "posted by nulfrost")), /* @__PURE__ */ React.createElement(import_core5.Text, {
    component: "time",
    size: "xs",
    ml: "auto",
    color: "dimmed"
  }, "4 hours ago")), /* @__PURE__ */ React.createElement(import_core5.Title, {
    order: 4,
    mt: "sm"
  }, data.category), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(import_core5.Text, {
    color: "dimmed",
    lineClamp: 2
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores magnam eveniet perferendis nulla nam, cupiditate cum iure saepe provident molestias molestiae possimus quam harum consectetur non eligendi facilis omnis.")), /* @__PURE__ */ React.createElement(import_core5.Box, {
    component: "footer",
    mt: "sm"
  }, /* @__PURE__ */ React.createElement(import_core5.Group, {
    align: "baseline",
    position: "apart"
  }, /* @__PURE__ */ React.createElement(import_core5.Text, {
    variant: "link",
    size: "sm"
  }, "78 comments"), /* @__PURE__ */ React.createElement(import_core5.Group, {
    spacing: "xs",
    align: "baseline"
  }, /* @__PURE__ */ React.createElement(import_core5.ActionIcon, {
    color: "red"
  }, /* @__PURE__ */ React.createElement(import_tabler_icons_react2.Heart, {
    size: 16
  })), /* @__PURE__ */ React.createElement(import_core5.ActionIcon, {
    onClick: () => setOpened(true)
  }, /* @__PURE__ */ React.createElement(import_tabler_icons_react2.Flag2, {
    size: 16
  }))))))), /* @__PURE__ */ React.createElement(import_core5.Modal, {
    opened,
    centered: true,
    overlayOpacity: 0.5,
    onClose: () => setOpened(false),
    title: "Report post",
    padding: "xl"
  }, /* @__PURE__ */ React.createElement(import_core5.RadioGroup, {
    orientation: "vertical",
    label: "Please select a reason for reporting this post.",
    required: true,
    mb: "lg"
  }, /* @__PURE__ */ React.createElement(import_core5.Radio, {
    value: "harmful",
    label: "Harmful content"
  }), /* @__PURE__ */ React.createElement(import_core5.Radio, {
    value: "hate",
    label: "Hate speech"
  }), /* @__PURE__ */ React.createElement(import_core5.Radio, {
    value: "spam",
    label: "Spam"
  }), /* @__PURE__ */ React.createElement(import_core5.Radio, {
    value: "incorrect",
    label: "Posted in the wrong section"
  })), /* @__PURE__ */ React.createElement(import_core5.Button, null, "Report post")));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/index.tsx
var category_exports3 = {};
__export(category_exports3, {
  default: () => Index
});
var import_core6 = require("@mantine/core");
function Index() {
  return /* @__PURE__ */ React.createElement(import_core6.Box, {
    mt: "xl"
  }, /* @__PURE__ */ React.createElement("div", null, "this is something"));
}

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
  loader: () => loader6
});
var import_node3 = require("@remix-run/node");
var loader6 = () => {
  return (0, import_node3.redirect)("/category");
};

// route:/Users/dane/Desktop/github/react/querie/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login,
  loader: () => loader7
});
var import_react10 = require("@remix-run/react");
var import_remix_auth_socials2 = require("remix-auth-socials");
var import_core7 = require("@mantine/core");
var loader7 = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/"
  });
};
var SocialButton = ({
  provider,
  label,
  icon,
  color
}) => /* @__PURE__ */ React.createElement(import_react10.Form, {
  action: `/auth/${provider}`,
  method: "post",
  style: { width: "30%" }
}, /* @__PURE__ */ React.createElement(import_core7.Button, {
  leftIcon: icon,
  color,
  type: "submit",
  fullWidth: true
}, label));
function Login() {
  return /* @__PURE__ */ React.createElement(import_core7.Container, {
    mt: "xl"
  }, /* @__PURE__ */ React.createElement(import_core7.Stack, {
    align: "center"
  }, /* @__PURE__ */ React.createElement(import_core7.Title, {
    order: 1
  }, "Log in"), /* @__PURE__ */ React.createElement(import_core7.Text, {
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
var assets_manifest_default = { "version": "ca16eed1", "entry": { "module": "/build/entry.client-AW25HHQE.js", "imports": ["/build/_shared/chunk-TL3GCGFK.js", "/build/_shared/chunk-Z22WD563.js", "/build/_shared/chunk-6FRLRXYH.js", "/build/_shared/chunk-6ZRNQMCP.js", "/build/_shared/chunk-MCRSUEN6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-FIWG6FDR.js", "imports": ["/build/_shared/chunk-QPPFC6PU.js", "/build/_shared/chunk-EWRLEVKO.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider": { "id": "routes/auth/$provider", "parentId": "root", "path": "auth/:provider", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider-S7462UFO.js", "imports": ["/build/_shared/chunk-2TDVQTFF.js", "/build/_shared/chunk-VTKKHMVP.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider.callback": { "id": "routes/auth/$provider.callback", "parentId": "root", "path": "auth/:provider/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider.callback-6REK3CC2.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category": { "id": "routes/category", "parentId": "root", "path": "category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category-VACOZS6W.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/$category": { "id": "routes/category/$category", "parentId": "routes/category", "path": ":category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category/$category-57Y2OPPX.js", "imports": ["/build/_shared/chunk-QPPFC6PU.js", "/build/_shared/chunk-EWRLEVKO.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/index": { "id": "routes/category/index", "parentId": "routes/category", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/category/index-GWVR64RL.js", "imports": ["/build/_shared/chunk-EWRLEVKO.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-KAUFQAUP.js", "imports": ["/build/_shared/chunk-2TDVQTFF.js", "/build/_shared/chunk-VTKKHMVP.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-NHILPE5O.js", "imports": ["/build/_shared/chunk-VTKKHMVP.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-HF3HMUMT.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-CA16EED1.js" };

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
  "routes/category": {
    id: "routes/category",
    parentId: "root",
    path: "category",
    index: void 0,
    caseSensitive: void 0,
    module: category_exports
  },
  "routes/category/$category": {
    id: "routes/category/$category",
    parentId: "routes/category",
    path: ":category",
    index: void 0,
    caseSensitive: void 0,
    module: category_exports2
  },
  "routes/category/index": {
    id: "routes/category/index",
    parentId: "routes/category",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: category_exports3
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiIsICIuLi9ub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi9kZXYvY29tcGlsZXIvc2hpbXMvcmVhY3QudHMiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLnRzeCIsICIuLi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyLnRzIiwgIi4uL2FwcC9jb21wb25lbnRzL0xheW91dC9Gb290ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9hdXRoLyRwcm92aWRlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkudHN4IiwgIi4uL2FwcC9kYi9kYi5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9jYXRlZ29yeS9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvbG9naW4udHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICJpbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IGluamVjdFN0eWxlc0ludG9TdGF0aWNNYXJrdXAgfSBmcm9tIFwiQG1hbnRpbmUvc3NyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgIGA8IURPQ1RZUEUgaHRtbD4ke2luamVjdFN0eWxlc0ludG9TdGF0aWNNYXJrdXAobWFya3VwKX1gLFxuICAgIHtcbiAgICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgIH1cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBCb3gsXG4gIENvbG9yU2NoZW1lLFxuICBDb2xvclNjaGVtZVByb3ZpZGVyLFxuICBDb250YWluZXIsXG4gIE1hbnRpbmVQcm92aWRlcixcbn0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHR5cGUge1xuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxuICBMaW5rc0Z1bmN0aW9uLFxufSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIn4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyXCI7XG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSBcIi4vc2VydmljZXMvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIn4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXJcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XG4gIGNoYXJzZXQ6IFwidXRmLThcIixcbiAgdGl0bGU6IFwicXVlcmllIHwgYXNrIHlvdXIgd2lsZGVzdCBxdWVzdGlvbnNcIixcbiAgdmlld3BvcnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBocmVmOiBzdHlsZXMsXG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgIH0sXG4gIF07XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCk7XG4gIHJldHVybiB7IHVzZXIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgdXNlciA9IHVzZUxvYWRlckRhdGEoKTtcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9XCJib2R5XCJcbiAgICAgICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5WzJdLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPE1hbnRpbmVUaGVtZT5cbiAgICAgICAgICA8TmF2YmFyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgPENvbnRhaW5lciBzaXplPVwieGxcIiByb2xlPVwibWFpblwiIG10PVwieGxcIj5cbiAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Rm9vdGVyIGxpbmtzPXtbeyBsaW5rOiBcIiNcIiwgbGFiZWw6IFwiR2l0aHViXCIgfV19IC8+XG4gICAgICAgIDwvTWFudGluZVRoZW1lPlxuXG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5mdW5jdGlvbiBNYW50aW5lVGhlbWUoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCBbY29sb3JTY2hlbWUsIHNldENvbG9yU2NoZW1lXSA9IHVzZVN0YXRlPENvbG9yU2NoZW1lPihcImxpZ2h0XCIpO1xuICBjb25zdCB0b2dnbGVDb2xvclNjaGVtZSA9ICh2YWx1ZT86IENvbG9yU2NoZW1lKSA9PlxuICAgIHNldENvbG9yU2NoZW1lKHZhbHVlIHx8IChjb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyBcImxpZ2h0XCIgOiBcImRhcmtcIikpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbG9yU2NoZW1lUHJvdmlkZXJcbiAgICAgIGNvbG9yU2NoZW1lPXtjb2xvclNjaGVtZX1cbiAgICAgIHRvZ2dsZUNvbG9yU2NoZW1lPXt0b2dnbGVDb2xvclNjaGVtZX1cbiAgICA+XG4gICAgICA8TWFudGluZVByb3ZpZGVyXG4gICAgICAgIHRoZW1lPXt7IGNvbG9yU2NoZW1lIH19XG4gICAgICAgIHdpdGhOb3JtYWxpemVDU1NcbiAgICAgICAgd2l0aEdsb2JhbFN0eWxlc1xuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L01hbnRpbmVQcm92aWRlcj5cbiAgICA8L0NvbG9yU2NoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZVN0eWxlcyxcbiAgQ29udGFpbmVyLFxuICBBdmF0YXIsXG4gIFVuc3R5bGVkQnV0dG9uLFxuICBHcm91cCxcbiAgVGV4dCxcbiAgTWVudSxcbiAgRGl2aWRlcixcbiAgQnVyZ2VyLFxuICBUaXRsZSxcbiAgQnV0dG9uLFxuICBCb3gsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyB1c2VCb29sZWFuVG9nZ2xlIH0gZnJvbSBcIkBtYW50aW5lL2hvb2tzXCI7XG5pbXBvcnQge1xuICBMb2dvdXQsXG4gIEhlYXJ0LFxuICBNZXNzYWdlLFxuICBTZXR0aW5ncyxcbiAgQ2hldnJvbkRvd24sXG4gIENoYXJ0QmFyLFxufSBmcm9tIFwidGFibGVyLWljb25zLXJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VTdWJtaXQgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBoZWFkZXI6IHtcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nLnNtLFxuICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIlxuICAgICAgICA/IHRoZW1lLmNvbG9ycy5kYXJrWzZdXG4gICAgICAgIDogdGhlbWUuY29sb3JzLmdyYXlbMF0sXG4gICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyBcInRyYW5zcGFyZW50XCIgOiB0aGVtZS5jb2xvcnMuZ3JheVsyXVxuICAgIH1gLFxuICB9LFxuXG4gIG1haW5TZWN0aW9uOiB7XG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZy5zbSxcbiAgfSxcblxuICB1c2VyTWVudToge1xuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInhzXCIpXToge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgfSxcbiAgfSxcblxuICB1c2VyOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IHRoZW1lLmNvbG9ycy5kYXJrWzBdIDogdGhlbWUuYmxhY2ssXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy54c31weCAke3RoZW1lLnNwYWNpbmcuc219cHhgLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUucmFkaXVzLnNtLFxuICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZC1jb2xvciAxMDBtcyBlYXNlXCIsXG5cbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1s4XSA6IHRoZW1lLndoaXRlLFxuICAgIH0sXG4gIH0sXG5cbiAgYnVyZ2VyOiB7XG4gICAgW3RoZW1lLmZuLmxhcmdlclRoYW4oXCJ4c1wiKV06IHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0sXG4gIH0sXG5cbiAgdXNlckFjdGl2ZToge1xuICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IHRoZW1lLmNvbG9ycy5kYXJrWzhdIDogdGhlbWUud2hpdGUsXG4gIH0sXG4gIGxpbmtzOiB7XG4gICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKFwieHNcIildOiB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9LFxuICB9LFxufSkpO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB1c2VyOiBhbnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOYXZiYXIoeyB1c2VyIH06IFByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgdGhlbWUsIGN4IH0gPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW29wZW5lZCwgdG9nZ2xlT3BlbmVkXSA9IHVzZUJvb2xlYW5Ub2dnbGUoZmFsc2UpO1xuICBjb25zdCBbdXNlck1lbnVPcGVuZWQsIHNldFVzZXJNZW51T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cImhlYWRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMubWFpblNlY3Rpb259IHNpemU9XCJ4bFwiPlxuICAgICAgICA8R3JvdXAgcG9zaXRpb249XCJhcGFydFwiPlxuICAgICAgICAgIDxUaXRsZSBvcmRlcj17M30+cXVlcmllPC9UaXRsZT5cbiAgICAgICAgICA8QnVyZ2VyXG4gICAgICAgICAgICBvcGVuZWQ9e29wZW5lZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU9wZW5lZCgpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1cmdlcn1cbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7IXVzZXI/LnVzZXIgJiYgKFxuICAgICAgICAgICAgPEdyb3VwIHNwYWNpbmc9ezV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rc30+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PXtMaW5rfSB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt1c2VyPy51c2VyICYmIChcbiAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgIHNpemU9ezI2MH1cbiAgICAgICAgICAgICAgcGxhY2VtZW50PVwiZW5kXCJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj1cInBvcC10b3AtcmlnaHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudXNlck1lbnV9XG4gICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFVzZXJNZW51T3BlbmVkKGZhbHNlKX1cbiAgICAgICAgICAgICAgb25PcGVuPXsoKSA9PiBzZXRVc2VyTWVudU9wZW5lZCh0cnVlKX1cbiAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgPFVuc3R5bGVkQnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KGNsYXNzZXMudXNlciwge1xuICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy51c2VyQWN0aXZlXTogdXNlck1lbnVPcGVuZWQsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8R3JvdXAgc3BhY2luZz17N30+XG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3VzZXI/LnVzZXI/LnBob3Rvc1swXT8udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXt1c2VyPy51c2VyPy5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICByYWRpdXM9XCJ4bFwiXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHdlaWdodD17NTAwfSBzaXplPVwic21cIiBzeD17eyBsaW5lSGVpZ2h0OiAxIH19IG1yPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICB7dXNlcj8udXNlcj8uZGlzcGxheU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duIHNpemU9ezEyfSAvPlxuICAgICAgICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgICAgICAgICA8L1Vuc3R5bGVkQnV0dG9uPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICBpY29uPXs8Q2hhcnRCYXIgc2l6ZT17MTR9IGNvbG9yPXt0aGVtZS5jb2xvcnMuaW5kaWdvWzZdfSAvPn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExlYWRlcmJvYXJkXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGljb249ezxIZWFydCBzaXplPXsxNH0gY29sb3I9e3RoZW1lLmNvbG9ycy5yZWRbNl19IC8+fT5cbiAgICAgICAgICAgICAgICBMaWtlZCBwb3N0c1xuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgIGljb249ezxNZXNzYWdlIHNpemU9ezE0fSBjb2xvcj17dGhlbWUuY29sb3JzLmJsdWVbNl19IC8+fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgWW91ciBjb21tZW50c1xuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuTGFiZWw+U2V0dGluZ3M8L01lbnUuTGFiZWw+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0gaWNvbj17PFNldHRpbmdzIHNpemU9ezE0fSAvPn0+XG4gICAgICAgICAgICAgICAgQWNjb3VudCBzZXR0aW5nc1xuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgIGljb249ezxMb2dvdXQgc2l6ZT17MTR9IC8+fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICBzdWJtaXQobnVsbCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiL2xvZ291dFwiLFxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Hcm91cD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IEF1dGhlbnRpY2F0b3IgfSBmcm9tIFwicmVtaXgtYXV0aFwiO1xuaW1wb3J0IHsgc2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHtcbiAgR29vZ2xlU3RyYXRlZ3ksXG4gIFNvY2lhbHNQcm92aWRlcixcbiAgR2l0SHViU3RyYXRlZ3ksXG4gIERpc2NvcmRTdHJhdGVneSxcbn0gZnJvbSBcInJlbWl4LWF1dGgtc29jaWFsc1wiO1xuXG5leHBvcnQgbGV0IGF1dGhlbnRpY2F0b3IgPSBuZXcgQXV0aGVudGljYXRvcihzZXNzaW9uU3RvcmFnZSwge1xuICBzZXNzaW9uS2V5OiBcIl9fc2Vzc2lvblwiLFxufSk7XG5cbmF1dGhlbnRpY2F0b3IudXNlKFxuICBuZXcgR29vZ2xlU3RyYXRlZ3koXG4gICAge1xuICAgICAgY2xpZW50SUQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgICAgY2FsbGJhY2tVUkw6IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC8ke1NvY2lhbHNQcm92aWRlci5HT09HTEV9L2NhbGxiYWNrYCxcbiAgICB9LFxuICAgIGFzeW5jICh7IHByb2ZpbGUgfSkgPT4ge1xuICAgICAgcmV0dXJuIHByb2ZpbGU7XG4gICAgfVxuICApXG4pO1xuXG5hdXRoZW50aWNhdG9yLnVzZShcbiAgbmV3IERpc2NvcmRTdHJhdGVneShcbiAgICB7XG4gICAgICBjbGllbnRJRDogcHJvY2Vzcy5lbnYuRElTQ09SRF9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGNhbGxiYWNrVVJMOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvJHtTb2NpYWxzUHJvdmlkZXIuRElTQ09SRH0vY2FsbGJhY2tgLFxuICAgIH0sXG4gICAgYXN5bmMgKHsgcHJvZmlsZSB9KSA9PiB7XG4gICAgICByZXR1cm4gcHJvZmlsZTtcbiAgICB9XG4gIClcbik7XG5cbmF1dGhlbnRpY2F0b3IudXNlKFxuICBuZXcgR2l0SHViU3RyYXRlZ3koXG4gICAge1xuICAgICAgY2xpZW50SUQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVULFxuICAgICAgY2FsbGJhY2tVUkw6IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC8ke1NvY2lhbHNQcm92aWRlci5HSVRIVUJ9L2NhbGxiYWNrYCxcbiAgICB9LFxuICAgIGFzeW5jICh7IHByb2ZpbGUgfSkgPT4ge1xuICAgICAgcmV0dXJuIHByb2ZpbGU7XG4gICAgfVxuICApXG4pO1xuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuXG5leHBvcnQgbGV0IHNlc3Npb25TdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiBcIl9fc2Vzc2lvblwiLFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNlY3JldHM6IFtwcm9jZXNzLmVudi5DT09LSUVfU0VDUkVUXSxcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgfSxcbn0pO1xuXG5leHBvcnQgbGV0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfSA9IHNlc3Npb25TdG9yYWdlO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgQ29udGFpbmVyLCBHcm91cCwgQW5jaG9yLCBUaXRsZSB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGZvb3Rlcjoge1xuICAgIG1hcmdpblRvcDogMTIwLFxuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke1xuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbNV0gOiB0aGVtZS5jb2xvcnMuZ3JheVsyXVxuICAgIH1gLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbMF0sXG4gIH0sXG5cbiAgaW5uZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nLnhsLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcueGwsXG5cbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJ4c1wiKV06IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgfSxcbiAgfSxcblxuICBsaW5rczoge1xuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInhzXCIpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLm1kLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmludGVyZmFjZSBGb290ZXJTaW1wbGVQcm9wcyB7XG4gIGxpbmtzOiB7IGxpbms6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoeyBsaW5rcyB9OiBGb290ZXJTaW1wbGVQcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBpdGVtcyA9IGxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgIDxBbmNob3I8XCJhXCI+XG4gICAgICBjb2xvcj1cImRpbW1lZFwiXG4gICAgICBrZXk9e2xpbmsubGFiZWx9XG4gICAgICBocmVmPXtsaW5rLmxpbmt9XG4gICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCl9XG4gICAgICBzaXplPVwic21cIlxuICAgID5cbiAgICAgIHtsaW5rLmxhYmVsfVxuICAgIDwvQW5jaG9yPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lcn0gc2l6ZT1cInhsXCI+XG4gICAgICAgIDxUaXRsZSBvcmRlcj17NH0+cXVlcmllPC9UaXRsZT5cbiAgICAgICAgPEdyb3VwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rc30+e2l0ZW1zfTwvR3JvdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUocGFyYW1zLnByb3ZpZGVyLCByZXF1ZXN0LCB7XG4gICAgc3VjY2Vzc1JlZGlyZWN0OiBcIi9cIixcbiAgICBmYWlsdXJlUmVkaXJlY3Q6IFwiL2xvZ2luXCIsXG4gIH0pO1xufTtcbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUocGFyYW1zLnByb3ZpZGVyLCByZXF1ZXN0KTtcbn07XG4iLCAiaW1wb3J0IHsgT3V0bGV0LCB1c2VMb2FkZXJEYXRhLCBOYXZMaW5rIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBCb3gsIExpc3QgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gXCJ+L2RiL2RiLnNlcnZlclwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBsaW5rczoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGdhcDogXCIxcmVtIDAuNXJlbVwiLFxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgfSxcbiAgbGluazoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnhzLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVs2XSxcbiAgICBwYWRkaW5nOiBcIjhweCAxMnB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpdXMuc20sXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVszXSxcbiAgfSxcbiAgYWN0aXZlTGluazoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZVs3XSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlWzFdLFxuICB9LFxufSkpO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGdldENhdGVnb3JpZXMoKTtcbiAgcmV0dXJuIHsgY2F0ZWdvcmllcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkoKSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgY3ggfSA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCBjb21wb25lbnQ9XCJuYXZcIj5cbiAgICAgICAgPExpc3QgbGlzdFN0eWxlVHlwZT1cIm5vbmVcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PlxuICAgICAgICAgIHtkYXRhPy5jYXRlZ29yaWVzPy5tYXAoKHsgaWQsIG5hbWUgfSkgPT4gKFxuICAgICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz17YC9jYXRlZ29yeS8ke25hbWUudG9Mb3dlckNhc2UoKX1gfVxuICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxuICAgICAgICAgICAgICAgICAgY3goY2xhc3Nlcy5saW5rLCB7IFtjbGFzc2VzLmFjdGl2ZUxpbmtdOiBpc0FjdGl2ZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9MaXN0PlxuICAgICAgPC9Cb3g+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmludGVyZmFjZSBDdXN0b21Ob2RlSnNHbG9iYWwgZXh0ZW5kcyBOb2RlSlMuR2xvYmFsIHtcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG59XG5cbmRlY2xhcmUgY29uc3QgZ2xvYmFsOiBDdXN0b21Ob2RlSnNHbG9iYWw7XG5cbmNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoKSB7XG4gIHJldHVybiBwcmlzbWEuY2F0ZWdvcnkuZmluZE1hbnkoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExhdGVzdFF1ZXN0aW9uc0ZvckNhdGVnb3J5KGNhdGVnb3J5Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmlzbWEucXVlc3Rpb24uZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICBjYXRlZ29yeToge1xuICAgICAgICBuYW1lOiBjYXRlZ29yeSA/PyBcIlwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuLy8gRXNzZW50aWFsbHkgSSB3YW50IHRvIHN1bSB0aGUgYW1vdW50IG9mIGxpa2VzIGFcbi8vIHBlcnNvbiBoYXMgb24gYm90aCBxdWVzdGlvbnMgdGhleSd2ZSBhc2tlZCBhbmRcbi8vIGNvbW1lbnRzXG4vLyByYXcgcXVlcnk/XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGVhZGVyYm9hcmQoKSB7fVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVlc3Rpb25BbmRDb21tZW50cyhpZDogc3RyaW5nKSB7XG4gIHJldHVybiBwcmlzbWEucXVlc3Rpb24uZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgY29tbWVudHM6IHtcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIGxpa2VzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBjYXRlZ29yeSxcbiAgdXNlcklkLFxufToge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIHByaXNtYS5xdWVzdGlvbi5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBhdXRob3I6IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIGlkOiB1c2VySWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIG5hbWU6IGNhdGVnb3J5LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQoe1xuICBjb250ZW50LFxuICB1c2VySWQsXG4gIHF1ZXN0aW9uSWQsXG59OiB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgdXNlcklkOiBzdHJpbmc7XG4gIHF1ZXN0aW9uSWQ6IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIHByaXNtYS5jb21tZW50LmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgY29udGVudCxcbiAgICAgIGF1dGhvcjoge1xuICAgICAgICBjb25uZWN0OiB7XG4gICAgICAgICAgaWQ6IHVzZXJJZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBxdWVzdGlvbjoge1xuICAgICAgICBjb25uZWN0OiB7XG4gICAgICAgICAgaWQ6IHF1ZXN0aW9uSWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG4vLyBpcyB0aGlzIGV2ZW4gcmlnaHQ/XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUXVlc3Rpb25MaWtlKHtcbiAgcXVlc3Rpb25JZCxcbiAgdXNlcklkLFxufToge1xuICBxdWVzdGlvbklkOiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xufSkge1xuICByZXR1cm4gcHJpc21hLnF1ZXN0aW9uLnVwZGF0ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBxdWVzdGlvbklkLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgbGlrZXM6IHtcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBjcmVhdGVTdHlsZXMsXG4gIFRleHQsXG4gIFRpdGxlLFxuICBDYXJkLFxuICBTaW1wbGVHcmlkLFxuICBHcm91cCxcbiAgQm94LFxuICBBY3Rpb25JY29uLFxuICBEaXZpZGVyLFxuICBTcGFjZSxcbiAgTW9kYWwsXG4gIFJhZGlvR3JvdXAsXG4gIFJhZGlvLFxuICBCdXR0b24sXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IExpbmssIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZsYWcyLCBIZWFydCB9IGZyb20gXCJ0YWJsZXItaWNvbnMtcmVhY3RcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgY2F0ZWdvcmllczoge1xuICAgIG1hcmdpbjogXCIwIC04cHhcIixcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcueGwsXG4gIH0sXG4gIGNhdGVnb3J5OiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlWzVdLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBjYXRlZ29yeSA9IHBhcmFtcy5jYXRlZ29yeTtcbiAgcmV0dXJuIHsgY2F0ZWdvcnkgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5KCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCBbb3BlbmVkLCBzZXRPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPFNpbXBsZUdyaWRcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yaWVzfVxuICAgICAgY29scz17MX1cbiAgICAgIGJyZWFrcG9pbnRzPXtbXG4gICAgICAgIHsgbWluV2lkdGg6IFwieHNcIiwgY29sczogMiB9LFxuICAgICAgICB7IG1pbldpZHRoOiBcImxnXCIsIGNvbHM6IDMgfSxcbiAgICAgIF19XG4gICAgPlxuICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDIwIH0sIChfLCBpbmRleCkgPT4gKFxuICAgICAgICA8Q2FyZCBjb21wb25lbnQ9XCJhcnRpY2xlXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgPEdyb3VwPlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICB0bz17YC9jYXRlZ29yeS8ke2RhdGEuY2F0ZWdvcnl9YH1cbiAgICAgICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2RhdGEuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgIDwvVGV4dD57XCIgXCJ9XG4gICAgICAgICAgICAgICZzaW07e1wiIFwifVxuICAgICAgICAgICAgICA8VGV4dCBzaXplPVwieHNcIiBjb21wb25lbnQ9XCJzcGFuXCIgY29sb3I9XCJkaW1tZWRcIj5cbiAgICAgICAgICAgICAgICBwb3N0ZWQgYnkgbnVsZnJvc3RcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8VGV4dCBjb21wb25lbnQ9XCJ0aW1lXCIgc2l6ZT1cInhzXCIgbWw9XCJhdXRvXCIgY29sb3I9XCJkaW1tZWRcIj5cbiAgICAgICAgICAgICAgNCBob3VycyBhZ29cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgIDxUaXRsZSBvcmRlcj17NH0gbXQ9XCJzbVwiPlxuICAgICAgICAgICAge2RhdGEuY2F0ZWdvcnl9XG4gICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZGltbWVkXCIgbGluZUNsYW1wPXsyfT5cbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVzdFxuICAgICAgICAgICAgICBhc3BlcmlvcmVzIG1hZ25hbSBldmVuaWV0IHBlcmZlcmVuZGlzIG51bGxhIG5hbSwgY3VwaWRpdGF0ZSBjdW1cbiAgICAgICAgICAgICAgaXVyZSBzYWVwZSBwcm92aWRlbnQgbW9sZXN0aWFzIG1vbGVzdGlhZSBwb3NzaW11cyBxdWFtIGhhcnVtXG4gICAgICAgICAgICAgIGNvbnNlY3RldHVyIG5vbiBlbGlnZW5kaSBmYWNpbGlzIG9tbmlzLlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8Qm94IGNvbXBvbmVudD1cImZvb3RlclwiIG10PVwic21cIj5cbiAgICAgICAgICAgIDxHcm91cCBhbGlnbj1cImJhc2VsaW5lXCIgcG9zaXRpb249XCJhcGFydFwiPlxuICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwibGlua1wiIHNpemU9XCJzbVwiPlxuICAgICAgICAgICAgICAgIDc4IGNvbW1lbnRzXG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPEdyb3VwIHNwYWNpbmc9XCJ4c1wiIGFsaWduPVwiYmFzZWxpbmVcIj5cbiAgICAgICAgICAgICAgICA8QWN0aW9uSWNvbiBjb2xvcj1cInJlZFwiPlxuICAgICAgICAgICAgICAgICAgPEhlYXJ0IHNpemU9ezE2fSAvPlxuICAgICAgICAgICAgICAgIDwvQWN0aW9uSWNvbj5cbiAgICAgICAgICAgICAgICA8QWN0aW9uSWNvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuZWQodHJ1ZSl9PlxuICAgICAgICAgICAgICAgICAgPEZsYWcyIHNpemU9ezE2fSAvPlxuICAgICAgICAgICAgICAgIDwvQWN0aW9uSWNvbj5cbiAgICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICkpfVxuICAgICAgPE1vZGFsXG4gICAgICAgIG9wZW5lZD17b3BlbmVkfVxuICAgICAgICBjZW50ZXJlZFxuICAgICAgICBvdmVybGF5T3BhY2l0eT17MC41fVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuZWQoZmFsc2UpfVxuICAgICAgICB0aXRsZT1cIlJlcG9ydCBwb3N0XCJcbiAgICAgICAgcGFkZGluZz1cInhsXCJcbiAgICAgID5cbiAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcbiAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBzZWxlY3QgYSByZWFzb24gZm9yIHJlcG9ydGluZyB0aGlzIHBvc3QuXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIG1iPVwibGdcIlxuICAgICAgICA+XG4gICAgICAgICAgPFJhZGlvIHZhbHVlPVwiaGFybWZ1bFwiIGxhYmVsPVwiSGFybWZ1bCBjb250ZW50XCIgLz5cbiAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJoYXRlXCIgbGFiZWw9XCJIYXRlIHNwZWVjaFwiIC8+XG4gICAgICAgICAgPFJhZGlvIHZhbHVlPVwic3BhbVwiIGxhYmVsPVwiU3BhbVwiIC8+XG4gICAgICAgICAgPFJhZGlvIHZhbHVlPVwiaW5jb3JyZWN0XCIgbGFiZWw9XCJQb3N0ZWQgaW4gdGhlIHdyb25nIHNlY3Rpb25cIiAvPlxuICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICAgIDxCdXR0b24+UmVwb3J0IHBvc3Q8L0J1dHRvbj5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9TaW1wbGVHcmlkPlxuICApO1xufVxuIiwgImltcG9ydCB7IEJveCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggbXQ9XCJ4bFwiPlxuICAgICAgPGRpdj50aGlzIGlzIHNvbWV0aGluZzwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBhd2FpdCBhdXRoZW50aWNhdG9yLmxvZ291dChyZXF1ZXN0LCB7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufTtcbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2NhdGVnb3J5XCIpO1xufTtcbiIsICJpbXBvcnQgeyBGb3JtIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IFNvY2lhbHNQcm92aWRlciB9IGZyb20gXCJyZW1peC1hdXRoLXNvY2lhbHNcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgQnV0dG9uLCBUaXRsZSwgU3RhY2ssIFRleHQgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSBcIn4vc2VydmljZXMvYXV0aC5zZXJ2ZXJcIjtcblxuaW50ZXJmYWNlIFNvY2lhbEJ1dHRvblByb3BzIHtcbiAgcHJvdmlkZXI6IFNvY2lhbHNQcm92aWRlcjtcbiAgbGFiZWw6IHN0cmluZztcbiAgaWNvbj86IGFueTtcbiAgY29sb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgc3VjY2Vzc1JlZGlyZWN0OiBcIi9cIixcbiAgfSk7XG59O1xuXG5jb25zdCBTb2NpYWxCdXR0b246IFJlYWN0LkZDPFNvY2lhbEJ1dHRvblByb3BzPiA9ICh7XG4gIHByb3ZpZGVyLFxuICBsYWJlbCxcbiAgaWNvbixcbiAgY29sb3IsXG59KSA9PiAoXG4gIDxGb3JtIGFjdGlvbj17YC9hdXRoLyR7cHJvdmlkZXJ9YH0gbWV0aG9kPVwicG9zdFwiIHN0eWxlPXt7IHdpZHRoOiBcIjMwJVwiIH19PlxuICAgIDxCdXR0b24gbGVmdEljb249e2ljb259IGNvbG9yPXtjb2xvcn0gdHlwZT1cInN1Ym1pdFwiIGZ1bGxXaWR0aD5cbiAgICAgIHtsYWJlbH1cbiAgICA8L0J1dHRvbj5cbiAgPC9Gb3JtPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBtdD1cInhsXCI+XG4gICAgICA8U3RhY2sgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPFRpdGxlIG9yZGVyPXsxfT5Mb2cgaW48L1RpdGxlPlxuICAgICAgICA8VGV4dCBjb2xvcj1cImRpbW1lZFwiIHNpemU9XCJzbVwiPlxuICAgICAgICAgIENvbnRpbnVlIHdpdGggb25lIG9mIHRoZXNlIHByb3ZpZGVyc1xuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxTb2NpYWxCdXR0b25cbiAgICAgICAgICBjb2xvcj1cImluZGlnb1wiXG4gICAgICAgICAgcHJvdmlkZXI9e1NvY2lhbHNQcm92aWRlci5ESVNDT1JEfVxuICAgICAgICAgIGxhYmVsPVwiTG9naW4gd2l0aCBEaXNjb3JkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFNvY2lhbEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICBwcm92aWRlcj17U29jaWFsc1Byb3ZpZGVyLkdPT0dMRX1cbiAgICAgICAgICBsYWJlbD1cIkxvZ2luIHdpdGggR29vZ2xlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFNvY2lhbEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgcHJvdmlkZXI9e1NvY2lhbHNQcm92aWRlci5HSVRIVUJ9XG4gICAgICAgICAgbGFiZWw9XCJMb2dpbiB3aXRoIEdpdGh1YlwiXG4gICAgICAgIC8+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2NhMTZlZWQxJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1BVzI1SEhRRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVEwzR0NHRksuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1aMjJXRDU2My5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZGUkxSWFlILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNlpSTlFNQ1AuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NQ1JTVUVONi5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtRklXRzZGRFIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFQUEZDNlBVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRVdSTEVWS08uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC8kcHJvdmlkZXInOnsnaWQnOidyb3V0ZXMvYXV0aC8kcHJvdmlkZXInLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC86cHJvdmlkZXInLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC8kcHJvdmlkZXItUzc0NjJVRk8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTJURFZRVEZGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVlRLS0hNVlAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDY2QVlGNC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrJzp7J2lkJzoncm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvOnByb3ZpZGVyL2NhbGxiYWNrJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLTZSRUszQ0MyLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDY2QVlGNC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jYXRlZ29yeSc6eydpZCc6J3JvdXRlcy9jYXRlZ29yeScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjYXRlZ29yeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jYXRlZ29yeS1WQUNPWlM2Vy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5Jzp7J2lkJzoncm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeScsJ3BhcmVudElkJzoncm91dGVzL2NhdGVnb3J5JywncGF0aCc6JzpjYXRlZ29yeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnktNTdZMk9QUFguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFQUEZDNlBVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRVdSTEVWS08uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2F0ZWdvcnkvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY2F0ZWdvcnkvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9jYXRlZ29yeScsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jYXRlZ29yeS9pbmRleC1HV1ZSNjRSTC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVdSTEVWS08uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUtBVUZRQVVQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0yVERWUVRGRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZUS0tITVZQLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ2luJzp7J2lkJzoncm91dGVzL2xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ2luLU5ISUxQRTVPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1WVEtLSE1WUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ291dCc6eydpZCc6J3JvdXRlcy9sb2dvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9nb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ291dC1IRjNITVVNVC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1g2NkFZRjQuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUNBMTZFRUQxLmpzJ307IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9hdXRoLyRwcm92aWRlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2tcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvOnByb3ZpZGVyL2NhbGxiYWNrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoLyRwcm92aWRlclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC8kcHJvdmlkZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC86cHJvdmlkZXJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2NhdGVnb3J5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jYXRlZ29yeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjYXRlZ29yeVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnlcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9jYXRlZ29yeVwiLFxuICAgICAgcGF0aDogXCI6Y2F0ZWdvcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2NhdGVnb3J5L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jYXRlZ29yeS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2NhdGVnb3J5XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9nb3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9nb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9naW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9naW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH1cbiAgfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQ0EsWUFBdUI7OztBQ0R2QjtBQUFBO0FBQUE7QUFBQTtBQUNBLG1CQUE0QjtBQUM1QixvQkFBK0I7QUFDL0IsaUJBQTZDO0FBRTlCLHVCQUNiLFNBQ0Esb0JBQ0EsaUJBQ0EsY0FDQTtBQUNBLFFBQU0sU0FBUyxrQ0FDYixvQ0FBQywwQkFBRDtBQUFBLElBQWEsU0FBUztBQUFBLElBQWMsS0FBSyxRQUFRO0FBQUE7QUFFbkQsa0JBQWdCLElBQUksZ0JBQWdCO0FBRXBDLFNBQU8sSUFBSSxTQUNULGtCQUFrQiw2Q0FBNkIsV0FDL0M7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQTtBQUFBOzs7QUNwQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFNTztBQUNQLG9CQVFPO0FBTVAsb0JBQXlCOzs7QUNyQnpCLG9CQUF5QjtBQUN6QixrQkFhTztBQUNQLG1CQUFpQztBQUNqQyxnQ0FPTztBQUNQLG9CQUFnQztBQUVoQyxJQUFNLFlBQVksOEJBQWEsQ0FBQyxVQUFXO0FBQUEsRUFDekMsUUFBUTtBQUFBLElBQ04sWUFBWSxNQUFNLFFBQVE7QUFBQSxJQUMxQixpQkFDRSxNQUFNLGdCQUFnQixTQUNsQixNQUFNLE9BQU8sS0FBSyxLQUNsQixNQUFNLE9BQU8sS0FBSztBQUFBLElBQ3hCLGNBQWMsYUFDWixNQUFNLGdCQUFnQixTQUFTLGdCQUFnQixNQUFNLE9BQU8sS0FBSztBQUFBO0FBQUEsRUFJckUs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
