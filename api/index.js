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
var import_modals = require("@mantine/modals");
var import_notifications = require("@mantine/notifications");
var import_react4 = require("@remix-run/react");
var import_react5 = require("react");

// app/components/Layout/Navbar.tsx
var import_core = require("@mantine/core");
var import_hooks = require("@mantine/hooks");
var import_react2 = require("@remix-run/react");
var import_react3 = require("react");
var import_tabler_icons_react = require("tabler-icons-react");
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
  const [userMenuOpened, setUserMenuOpened] = (0, import_react3.useState)(false);
  const submit = (0, import_react2.useSubmit)();
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
    component: import_react2.Link,
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

// app/styles/globals.css
var globals_default = "/build/_assets/globals-6ERIYNWR.css";

// app/components/Layout/Footer.tsx
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
  const items = links2.map((link) => /* @__PURE__ */ React.createElement(import_core2.Anchor, {
    color: "dimmed",
    key: link.label,
    href: link.link,
    onClick: (event) => event.preventDefault(),
    size: "sm"
  }, link.label));
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.footer
  }, /* @__PURE__ */ React.createElement(import_core2.Container, {
    className: classes.inner,
    size: "xl"
  }, /* @__PURE__ */ React.createElement(import_core2.Title, {
    order: 3
  }, "querie"), /* @__PURE__ */ React.createElement(import_core2.Group, {
    className: classes.links
  }, items)));
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
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react4.Meta, null), /* @__PURE__ */ React.createElement(import_react4.Links, null)), /* @__PURE__ */ React.createElement(import_core3.Box, {
    component: "body",
    sx: (theme) => ({
      backgroundColor: theme.colors.gray[2]
    })
  }, /* @__PURE__ */ React.createElement(MantineTheme, null, /* @__PURE__ */ React.createElement(import_modals.ModalsProvider, null, /* @__PURE__ */ React.createElement(import_notifications.NotificationsProvider, {
    limit: 2,
    autoClose: 3e3,
    position: "top-center"
  }, /* @__PURE__ */ React.createElement(Navbar, {
    user
  }), /* @__PURE__ */ React.createElement(import_core3.Container, {
    size: "xl",
    role: "main",
    mt: "xl"
  }, /* @__PURE__ */ React.createElement(import_react4.Outlet, null)), /* @__PURE__ */ React.createElement(Footer, {
    links: [{ link: "#", label: "Github" }]
  })))), /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react4.Scripts, null), /* @__PURE__ */ React.createElement(import_react4.LiveReload, null)));
}
function MantineTheme({ children }) {
  const [colorScheme, setColorScheme] = (0, import_react5.useState)("light");
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
var import_core4 = require("@mantine/core");
var import_react6 = require("@remix-run/react");

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
  const data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core4.Box, {
    component: "nav"
  }, /* @__PURE__ */ React.createElement(import_core4.List, {
    listStyleType: "none",
    className: classes.links
  }, (_a = data == null ? void 0 : data.categories) == null ? void 0 : _a.map(({ id, name }) => /* @__PURE__ */ React.createElement(import_core4.List.Item, null, /* @__PURE__ */ React.createElement(import_react6.NavLink, {
    to: `/category/${name.toLowerCase()}`,
    key: id,
    className: ({ isActive }) => cx(classes.link, { [classes.activeLink]: isActive })
  }, name))))), /* @__PURE__ */ React.createElement(import_react6.Outlet, null));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/$category.tsx
var category_exports2 = {};
__export(category_exports2, {
  default: () => Category2,
  loader: () => loader5
});
var import_core5 = require("@mantine/core");
var import_modals2 = require("@mantine/modals");
var import_notifications2 = require("@mantine/notifications");
var import_react7 = require("@remix-run/react");
var import_tabler_icons_react2 = require("tabler-icons-react");
var useStyles4 = (0, import_core5.createStyles)((theme) => ({
  categories: {
    margin: "0 -8px",
    marginTop: theme.spacing.xl
  },
  category: {
    color: theme.colors.blue[5],
    fontWeight: 700
  },
  card: {
    border: `2px solid ${theme.colors.gray[3]}`
  }
}));
var loader5 = async ({ params }) => {
  const category = params.category;
  return { category };
};
function Category2() {
  const data = (0, import_react7.useLoaderData)();
  const modals = (0, import_modals2.useModals)();
  const { classes } = useStyles4();
  const openReportModal = () => {
    modals.openConfirmModal({
      title: "Report post",
      centered: true,
      children: /* @__PURE__ */ React.createElement(import_core5.RadioGroup, {
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
      })),
      labels: { confirm: "Report post", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => {
        (0, import_notifications2.showNotification)({
          title: "Post reported",
          message: "Thank you for reporting this post and keeping querie safe.",
          color: "blue"
        });
      }
    });
  };
  return /* @__PURE__ */ React.createElement(import_core5.SimpleGrid, {
    className: classes.categories,
    cols: 1,
    breakpoints: [
      { minWidth: "xs", cols: 2 },
      { minWidth: "lg", cols: 3 }
    ]
  }, Array.from({ length: 20 }, (_, index) => /* @__PURE__ */ React.createElement(import_core5.Card, {
    component: "article",
    key: index,
    className: classes.card
  }, /* @__PURE__ */ React.createElement(import_core5.Group, null, /* @__PURE__ */ React.createElement(import_core5.Box, null, /* @__PURE__ */ React.createElement(import_core5.Text, {
    to: `/category/${data.category}`,
    size: "xs",
    component: import_react7.Link,
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
    onClick: openReportModal
  }, /* @__PURE__ */ React.createElement(import_tabler_icons_react2.Flag2, {
    size: 16
  }))))))));
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
var import_core7 = require("@mantine/core");
var import_react8 = require("@remix-run/react");
var import_remix_auth_socials2 = require("remix-auth-socials");
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
}) => /* @__PURE__ */ React.createElement(import_react8.Form, {
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
var assets_manifest_default = { "version": "f7b9d715", "entry": { "module": "/build/entry.client-QIHPMZ5N.js", "imports": ["/build/_shared/chunk-IVIODLIQ.js", "/build/_shared/chunk-Z22WD563.js", "/build/_shared/chunk-6FRLRXYH.js", "/build/_shared/chunk-6ZRNQMCP.js", "/build/_shared/chunk-MCRSUEN6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-JJYC3SGS.js", "imports": ["/build/_shared/chunk-E62OTXCV.js", "/build/_shared/chunk-DUBHVSCY.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider": { "id": "routes/auth/$provider", "parentId": "root", "path": "auth/:provider", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider-S7462UFO.js", "imports": ["/build/_shared/chunk-2TDVQTFF.js", "/build/_shared/chunk-VTKKHMVP.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider.callback": { "id": "routes/auth/$provider.callback", "parentId": "root", "path": "auth/:provider/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider.callback-6REK3CC2.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category": { "id": "routes/category", "parentId": "root", "path": "category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category-FABBRGPB.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/$category": { "id": "routes/category/$category", "parentId": "routes/category", "path": ":category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category/$category-CQKHZJBE.js", "imports": ["/build/_shared/chunk-E62OTXCV.js", "/build/_shared/chunk-DUBHVSCY.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/index": { "id": "routes/category/index", "parentId": "routes/category", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/category/index-OIT2YSVK.js", "imports": ["/build/_shared/chunk-DUBHVSCY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-KAUFQAUP.js", "imports": ["/build/_shared/chunk-2TDVQTFF.js", "/build/_shared/chunk-VTKKHMVP.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-QGK4HSGQ.js", "imports": ["/build/_shared/chunk-VTKKHMVP.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-HF3HMUMT.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-F7B9D715.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiIsICIuLi9ub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi9kZXYvY29tcGlsZXIvc2hpbXMvcmVhY3QudHMiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyLnRzeCIsICIuLi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9hdXRoLyRwcm92aWRlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkudHN4IiwgIi4uL2FwcC9kYi9kYi5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9jYXRlZ29yeS9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvbG9naW4udHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICJpbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IGluamVjdFN0eWxlc0ludG9TdGF0aWNNYXJrdXAgfSBmcm9tIFwiQG1hbnRpbmUvc3NyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgIGA8IURPQ1RZUEUgaHRtbD4ke2luamVjdFN0eWxlc0ludG9TdGF0aWNNYXJrdXAobWFya3VwKX1gLFxuICAgIHtcbiAgICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgIH1cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBCb3gsXG4gIENvbG9yU2NoZW1lLFxuICBDb2xvclNjaGVtZVByb3ZpZGVyLFxuICBDb250YWluZXIsXG4gIE1hbnRpbmVQcm92aWRlcixcbn0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsc1Byb3ZpZGVyIH0gZnJvbSBcIkBtYW50aW5lL21vZGFsc1wiO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1Byb3ZpZGVyIH0gZnJvbSBcIkBtYW50aW5lL25vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB0eXBlIHtcbiAgTGlua3NGdW5jdGlvbixcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE1ldGFGdW5jdGlvbixcbn0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUxvYWRlckRhdGEsXG59IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIn4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJ+L3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyXCI7XG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSBcIi4vc2VydmljZXMvYXV0aC5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XG4gIGNoYXJzZXQ6IFwidXRmLThcIixcbiAgdGl0bGU6IFwicXVlcmllIHwgYXNrIHlvdXIgd2lsZGVzdCBxdWVzdGlvbnNcIixcbiAgdmlld3BvcnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBocmVmOiBzdHlsZXMsXG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgIH0sXG4gIF07XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCk7XG4gIHJldHVybiB7IHVzZXIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgdXNlciA9IHVzZUxvYWRlckRhdGEoKTtcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9XCJib2R5XCJcbiAgICAgICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5WzJdLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPE1hbnRpbmVUaGVtZT5cbiAgICAgICAgICA8TW9kYWxzUHJvdmlkZXI+XG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uc1Byb3ZpZGVyXG4gICAgICAgICAgICAgIGxpbWl0PXsyfVxuICAgICAgICAgICAgICBhdXRvQ2xvc2U9ezMwMDB9XG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwidG9wLWNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxOYXZiYXIgdXNlcj17dXNlcn0gLz5cbiAgICAgICAgICAgICAgPENvbnRhaW5lciBzaXplPVwieGxcIiByb2xlPVwibWFpblwiIG10PVwieGxcIj5cbiAgICAgICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8Rm9vdGVyIGxpbmtzPXtbeyBsaW5rOiBcIiNcIiwgbGFiZWw6IFwiR2l0aHViXCIgfV19IC8+XG4gICAgICAgICAgICA8L05vdGlmaWNhdGlvbnNQcm92aWRlcj5cbiAgICAgICAgICA8L01vZGFsc1Byb3ZpZGVyPlxuICAgICAgICA8L01hbnRpbmVUaGVtZT5cblxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTWFudGluZVRoZW1lKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgW2NvbG9yU2NoZW1lLCBzZXRDb2xvclNjaGVtZV0gPSB1c2VTdGF0ZTxDb2xvclNjaGVtZT4oXCJsaWdodFwiKTtcbiAgY29uc3QgdG9nZ2xlQ29sb3JTY2hlbWUgPSAodmFsdWU/OiBDb2xvclNjaGVtZSkgPT5cbiAgICBzZXRDb2xvclNjaGVtZSh2YWx1ZSB8fCAoY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCIpKTtcblxuICByZXR1cm4gKFxuICAgIDxDb2xvclNjaGVtZVByb3ZpZGVyXG4gICAgICBjb2xvclNjaGVtZT17Y29sb3JTY2hlbWV9XG4gICAgICB0b2dnbGVDb2xvclNjaGVtZT17dG9nZ2xlQ29sb3JTY2hlbWV9XG4gICAgPlxuICAgICAgPE1hbnRpbmVQcm92aWRlclxuICAgICAgICB0aGVtZT17eyBjb2xvclNjaGVtZSB9fVxuICAgICAgICB3aXRoTm9ybWFsaXplQ1NTXG4gICAgICAgIHdpdGhHbG9iYWxTdHlsZXNcbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9NYW50aW5lUHJvdmlkZXI+XG4gICAgPC9Db2xvclNjaGVtZVByb3ZpZGVyPlxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEF2YXRhcixcbiAgQm94LFxuICBCdXJnZXIsXG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBjcmVhdGVTdHlsZXMsXG4gIERpdmlkZXIsXG4gIEdyb3VwLFxuICBNZW51LFxuICBUZXh0LFxuICBUaXRsZSxcbiAgVW5zdHlsZWRCdXR0b24sXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyB1c2VCb29sZWFuVG9nZ2xlIH0gZnJvbSBcIkBtYW50aW5lL2hvb2tzXCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VTdWJtaXQgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIENoYXJ0QmFyLFxuICBDaGV2cm9uRG93bixcbiAgSGVhcnQsXG4gIExvZ291dCxcbiAgTWVzc2FnZSxcbiAgU2V0dGluZ3MsXG59IGZyb20gXCJ0YWJsZXItaWNvbnMtcmVhY3RcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgaGVhZGVyOiB7XG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCJcbiAgICAgICAgPyB0aGVtZS5jb2xvcnMuZGFya1s2XVxuICAgICAgICA6IHRoZW1lLmNvbG9ycy5ncmF5WzBdLFxuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke1xuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gXCJ0cmFuc3BhcmVudFwiIDogdGhlbWUuY29sb3JzLmdyYXlbMl1cbiAgICB9YCxcbiAgfSxcblxuICBtYWluU2VjdGlvbjoge1xuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG5cbiAgdXNlck1lbnU6IHtcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJ4c1wiKV06IHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0sXG4gIH0sXG5cbiAgdXNlcjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1swXSA6IHRoZW1lLmJsYWNrLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9cHggJHt0aGVtZS5zcGFjaW5nLnNtfXB4YCxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGl1cy5zbSxcbiAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQtY29sb3IgMTAwbXMgZWFzZVwiLFxuXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbOF0gOiB0aGVtZS53aGl0ZSxcbiAgICB9LFxuICB9LFxuXG4gIGJ1cmdlcjoge1xuICAgIFt0aGVtZS5mbi5sYXJnZXJUaGFuKFwieHNcIildOiB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9LFxuICB9LFxuXG4gIHVzZXJBY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1s4XSA6IHRoZW1lLndoaXRlLFxuICB9LFxuICBsaW5rczoge1xuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInhzXCIpXToge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXNlcjogYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTmF2YmFyKHsgdXNlciB9OiBQcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMsIHRoZW1lLCBjeCB9ID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvcGVuZWQsIHRvZ2dsZU9wZW5lZF0gPSB1c2VCb29sZWFuVG9nZ2xlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXJNZW51T3BlbmVkLCBzZXRVc2VyTWVudU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjb21wb25lbnQ9XCJoZWFkZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5TZWN0aW9ufSBzaXplPVwieGxcIj5cbiAgICAgICAgPEdyb3VwIHBvc2l0aW9uPVwiYXBhcnRcIj5cbiAgICAgICAgICA8VGl0bGUgb3JkZXI9ezN9PnF1ZXJpZTwvVGl0bGU+XG4gICAgICAgICAgPEJ1cmdlclxuICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVPcGVuZWQoKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXJnZXJ9XG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgeyF1c2VyPy51c2VyICYmIChcbiAgICAgICAgICAgIDxHcm91cCBzcGFjaW5nPXs1fSBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PlxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gdG89XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dXNlcj8udXNlciAmJiAoXG4gICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICBzaXplPXsyNjB9XG4gICAgICAgICAgICAgIHBsYWNlbWVudD1cImVuZFwiXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249XCJwb3AtdG9wLXJpZ2h0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJNZW51fVxuICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRVc2VyTWVudU9wZW5lZChmYWxzZSl9XG4gICAgICAgICAgICAgIG9uT3Blbj17KCkgPT4gc2V0VXNlck1lbnVPcGVuZWQodHJ1ZSl9XG4gICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgIDxVbnN0eWxlZEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChjbGFzc2VzLnVzZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXMudXNlckFjdGl2ZV06IHVzZXJNZW51T3BlbmVkLFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEdyb3VwIHNwYWNpbmc9ezd9PlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyPy51c2VyPy5waG90b3NbMF0/LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17dXNlcj8udXNlcj8uZGlzcGxheU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgcmFkaXVzPVwieGxcIlxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezI0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCB3ZWlnaHQ9ezUwMH0gc2l6ZT1cInNtXCIgc3g9e3sgbGluZUhlaWdodDogMSB9fSBtcj17M30+XG4gICAgICAgICAgICAgICAgICAgICAge3VzZXI/LnVzZXI/LmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uRG93biBzaXplPXsxMn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9VbnN0eWxlZEJ1dHRvbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgaWNvbj17PENoYXJ0QmFyIHNpemU9ezE0fSBjb2xvcj17dGhlbWUuY29sb3JzLmluZGlnb1s2XX0gLz59XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMZWFkZXJib2FyZFxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBpY29uPXs8SGVhcnQgc2l6ZT17MTR9IGNvbG9yPXt0aGVtZS5jb2xvcnMucmVkWzZdfSAvPn0+XG4gICAgICAgICAgICAgICAgTGlrZWQgcG9zdHNcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICBpY29uPXs8TWVzc2FnZSBzaXplPXsxNH0gY29sb3I9e3RoZW1lLmNvbG9ycy5ibHVlWzZdfSAvPn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFlvdXIgY29tbWVudHNcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51LkxhYmVsPlNldHRpbmdzPC9NZW51LkxhYmVsPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGljb249ezxTZXR0aW5ncyBzaXplPXsxNH0gLz59PlxuICAgICAgICAgICAgICAgIEFjY291bnQgc2V0dGluZ3NcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICBpY29uPXs8TG9nb3V0IHNpemU9ezE0fSAvPn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgc3VibWl0KG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIi9sb2dvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvR3JvdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIENvbnRhaW5lciwgR3JvdXAsIEFuY2hvciwgVGl0bGUgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBmb290ZXI6IHtcbiAgICBtYXJnaW5Ub3A6IDEyMCxcbiAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHtcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IHRoZW1lLmNvbG9ycy5kYXJrWzVdIDogdGhlbWUuY29sb3JzLmdyYXlbMl1cbiAgICB9YCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5WzBdLFxuICB9LFxuXG4gIGlubmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZy54bCxcbiAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nLnhsLFxuXG4gICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKFwieHNcIildOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIH0sXG4gIH0sXG5cbiAgbGlua3M6IHtcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJ4c1wiKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5tZCxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5pbnRlcmZhY2UgRm9vdGVyU2ltcGxlUHJvcHMge1xuICBsaW5rczogeyBsaW5rOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKHsgbGlua3MgfTogRm9vdGVyU2ltcGxlUHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgaXRlbXMgPSBsaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICA8QW5jaG9yPFwiYVwiPlxuICAgICAgY29sb3I9XCJkaW1tZWRcIlxuICAgICAga2V5PXtsaW5rLmxhYmVsfVxuICAgICAgaHJlZj17bGluay5saW5rfVxuICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgc2l6ZT1cInNtXCJcbiAgICA+XG4gICAgICB7bGluay5sYWJlbH1cbiAgICA8L0FuY2hvcj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJ9IHNpemU9XCJ4bFwiPlxuICAgICAgICA8VGl0bGUgb3JkZXI9ezN9PnF1ZXJpZTwvVGl0bGU+XG4gICAgICAgIDxHcm91cCBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PntpdGVtc308L0dyb3VwPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gXCJyZW1peC1hdXRoXCI7XG5pbXBvcnQgeyBzZXNzaW9uU3RvcmFnZSB9IGZyb20gXCJ+L3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQge1xuICBHb29nbGVTdHJhdGVneSxcbiAgU29jaWFsc1Byb3ZpZGVyLFxuICBHaXRIdWJTdHJhdGVneSxcbiAgRGlzY29yZFN0cmF0ZWd5LFxufSBmcm9tIFwicmVtaXgtYXV0aC1zb2NpYWxzXCI7XG5cbmV4cG9ydCBsZXQgYXV0aGVudGljYXRvciA9IG5ldyBBdXRoZW50aWNhdG9yKHNlc3Npb25TdG9yYWdlLCB7XG4gIHNlc3Npb25LZXk6IFwiX19zZXNzaW9uXCIsXG59KTtcblxuYXV0aGVudGljYXRvci51c2UoXG4gIG5ldyBHb29nbGVTdHJhdGVneShcbiAgICB7XG4gICAgICBjbGllbnRJRDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgICBjYWxsYmFja1VSTDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoLyR7U29jaWFsc1Byb3ZpZGVyLkdPT0dMRX0vY2FsbGJhY2tgLFxuICAgIH0sXG4gICAgYXN5bmMgKHsgcHJvZmlsZSB9KSA9PiB7XG4gICAgICByZXR1cm4gcHJvZmlsZTtcbiAgICB9XG4gIClcbik7XG5cbmF1dGhlbnRpY2F0b3IudXNlKFxuICBuZXcgRGlzY29yZFN0cmF0ZWd5KFxuICAgIHtcbiAgICAgIGNsaWVudElEOiBwcm9jZXNzLmVudi5ESVNDT1JEX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuRElTQ09SRF9DTElFTlRfU0VDUkVULFxuICAgICAgY2FsbGJhY2tVUkw6IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC8ke1NvY2lhbHNQcm92aWRlci5ESVNDT1JEfS9jYWxsYmFja2AsXG4gICAgfSxcbiAgICBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcbiAgICAgIHJldHVybiBwcm9maWxlO1xuICAgIH1cbiAgKVxuKTtcblxuYXV0aGVudGljYXRvci51c2UoXG4gIG5ldyBHaXRIdWJTdHJhdGVneShcbiAgICB7XG4gICAgICBjbGllbnRJRDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXG4gICAgICBjYWxsYmFja1VSTDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoLyR7U29jaWFsc1Byb3ZpZGVyLkdJVEhVQn0vY2FsbGJhY2tgLFxuICAgIH0sXG4gICAgYXN5bmMgKHsgcHJvZmlsZSB9KSA9PiB7XG4gICAgICByZXR1cm4gcHJvZmlsZTtcbiAgICB9XG4gIClcbik7XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5cbmV4cG9ydCBsZXQgc2Vzc2lvblN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6IFwiX19zZXNzaW9uXCIsXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjcmV0czogW3Byb2Nlc3MuZW52LkNPT0tJRV9TRUNSRVRdLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBsZXQgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uLCBkZXN0cm95U2Vzc2lvbiB9ID0gc2Vzc2lvblN0b3JhZ2U7XG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSBcIn4vc2VydmljZXMvYXV0aC5zZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgcmV0dXJuIGF1dGhlbnRpY2F0b3IuYXV0aGVudGljYXRlKHBhcmFtcy5wcm92aWRlciwgcmVxdWVzdCwge1xuICAgIHN1Y2Nlc3NSZWRpcmVjdDogXCIvXCIsXG4gICAgZmFpbHVyZVJlZGlyZWN0OiBcIi9sb2dpblwiLFxuICB9KTtcbn07XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiByZWRpcmVjdChcIi9sb2dpblwiKTtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgcmV0dXJuIGF1dGhlbnRpY2F0b3IuYXV0aGVudGljYXRlKHBhcmFtcy5wcm92aWRlciwgcmVxdWVzdCk7XG59O1xuIiwgImltcG9ydCB7IEJveCwgY3JlYXRlU3R5bGVzLCBMaXN0IH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgTmF2TGluaywgT3V0bGV0LCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IGdldENhdGVnb3JpZXMgfSBmcm9tIFwifi9kYi9kYi5zZXJ2ZXJcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgbGlua3M6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBnYXA6IFwiMXJlbSAwLjVyZW1cIixcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gIH0sXG4gIGxpbms6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy54cyxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbNl0sXG4gICAgcGFkZGluZzogXCI4cHggMTJweFwiLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUucmFkaXVzLnNtLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbM10sXG4gIH0sXG4gIGFjdGl2ZUxpbms6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsdWVbN10sXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZVsxXSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBnZXRDYXRlZ29yaWVzKCk7XG4gIHJldHVybiB7IGNhdGVnb3JpZXMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5KCkge1xuICBjb25zdCB7IGNsYXNzZXMsIGN4IH0gPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwibmF2XCI+XG4gICAgICAgIDxMaXN0IGxpc3RTdHlsZVR5cGU9XCJub25lXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfT5cbiAgICAgICAgICB7ZGF0YT8uY2F0ZWdvcmllcz8ubWFwKCh7IGlkLCBuYW1lIH0pID0+IChcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89e2AvY2F0ZWdvcnkvJHtuYW1lLnRvTG93ZXJDYXNlKCl9YH1cbiAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT5cbiAgICAgICAgICAgICAgICAgIGN4KGNsYXNzZXMubGluaywgeyBbY2xhc3Nlcy5hY3RpdmVMaW5rXTogaXNBY3RpdmUgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvTGlzdD5cbiAgICAgIDwvQm94PlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5pbnRlcmZhY2UgQ3VzdG9tTm9kZUpzR2xvYmFsIGV4dGVuZHMgTm9kZUpTLkdsb2JhbCB7XG4gIHByaXNtYTogUHJpc21hQ2xpZW50O1xufVxuXG5kZWNsYXJlIGNvbnN0IGdsb2JhbDogQ3VzdG9tTm9kZUpzR2xvYmFsO1xuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWwucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzKCkge1xuICByZXR1cm4gcHJpc21hLmNhdGVnb3J5LmZpbmRNYW55KCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMYXRlc3RRdWVzdGlvbnNGb3JDYXRlZ29yeShjYXRlZ29yeT86IHN0cmluZykge1xuICByZXR1cm4gcHJpc21hLnF1ZXN0aW9uLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgbmFtZTogY2F0ZWdvcnkgPz8gXCJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbi8vIEVzc2VudGlhbGx5IEkgd2FudCB0byBzdW0gdGhlIGFtb3VudCBvZiBsaWtlcyBhXG4vLyBwZXJzb24gaGFzIG9uIGJvdGggcXVlc3Rpb25zIHRoZXkndmUgYXNrZWQgYW5kXG4vLyBjb21tZW50c1xuLy8gcmF3IHF1ZXJ5P1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYWRlcmJvYXJkKCkge31cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFF1ZXN0aW9uQW5kQ29tbWVudHMoaWQ6IHN0cmluZykge1xuICByZXR1cm4gcHJpc21hLnF1ZXN0aW9uLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZCxcbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICBsaWtlczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVRdWVzdGlvbih7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgY2F0ZWdvcnksXG4gIHVzZXJJZCxcbn06IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgdXNlcklkOiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiBwcmlzbWEucXVlc3Rpb24uY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICBpZDogdXNlcklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICBuYW1lOiBjYXRlZ29yeSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb21tZW50KHtcbiAgY29udGVudCxcbiAgdXNlcklkLFxuICBxdWVzdGlvbklkLFxufToge1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xuICBxdWVzdGlvbklkOiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiBwcmlzbWEuY29tbWVudC5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICBhdXRob3I6IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIGlkOiB1c2VySWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcXVlc3Rpb246IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIGlkOiBxdWVzdGlvbklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuLy8gaXMgdGhpcyBldmVuIHJpZ2h0P1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uTGlrZSh7XG4gIHF1ZXN0aW9uSWQsXG4gIHVzZXJJZCxcbn06IHtcbiAgcXVlc3Rpb25JZDogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIHByaXNtYS5xdWVzdGlvbi51cGRhdGUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogcXVlc3Rpb25JZCxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxpa2VzOiB7XG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgQWN0aW9uSWNvbixcbiAgQm94LFxuICBDYXJkLFxuICBjcmVhdGVTdHlsZXMsXG4gIEdyb3VwLFxuICBSYWRpbyxcbiAgUmFkaW9Hcm91cCxcbiAgU2ltcGxlR3JpZCxcbiAgVGV4dCxcbiAgVGl0bGUsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyB1c2VNb2RhbHMgfSBmcm9tIFwiQG1hbnRpbmUvbW9kYWxzXCI7XG5pbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSBcIkBtYW50aW5lL25vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyBGbGFnMiwgSGVhcnQgfSBmcm9tIFwidGFibGVyLWljb25zLXJlYWN0XCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGNhdGVnb3JpZXM6IHtcbiAgICBtYXJnaW46IFwiMCAtOHB4XCIsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnhsLFxuICB9LFxuICBjYXRlZ29yeToge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZVs1XSxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBib3JkZXI6IGAycHggc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JheVszXX1gLFxuICB9LFxufSkpO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gcGFyYW1zLmNhdGVnb3J5O1xuICByZXR1cm4geyBjYXRlZ29yeSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIGNvbnN0IG1vZGFscyA9IHVzZU1vZGFscygpO1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IG9wZW5SZXBvcnRNb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbHMub3BlbkNvbmZpcm1Nb2RhbCh7XG4gICAgICB0aXRsZTogXCJSZXBvcnQgcG9zdFwiLFxuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICBjaGlsZHJlbjogKFxuICAgICAgICA8UmFkaW9Hcm91cFxuICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxuICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIHNlbGVjdCBhIHJlYXNvbiBmb3IgcmVwb3J0aW5nIHRoaXMgcG9zdC5cIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgbWI9XCJsZ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJoYXJtZnVsXCIgbGFiZWw9XCJIYXJtZnVsIGNvbnRlbnRcIiAvPlxuICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cImhhdGVcIiBsYWJlbD1cIkhhdGUgc3BlZWNoXCIgLz5cbiAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJzcGFtXCIgbGFiZWw9XCJTcGFtXCIgLz5cbiAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJpbmNvcnJlY3RcIiBsYWJlbD1cIlBvc3RlZCBpbiB0aGUgd3Jvbmcgc2VjdGlvblwiIC8+XG4gICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgICksXG4gICAgICBsYWJlbHM6IHsgY29uZmlybTogXCJSZXBvcnQgcG9zdFwiLCBjYW5jZWw6IFwiQ2FuY2VsXCIgfSxcbiAgICAgIG9uQ2FuY2VsOiAoKSA9PiBjb25zb2xlLmxvZyhcIkNhbmNlbFwiKSxcbiAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICB0aXRsZTogXCJQb3N0IHJlcG9ydGVkXCIsXG4gICAgICAgICAgbWVzc2FnZTogXCJUaGFuayB5b3UgZm9yIHJlcG9ydGluZyB0aGlzIHBvc3QgYW5kIGtlZXBpbmcgcXVlcmllIHNhZmUuXCIsXG4gICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U2ltcGxlR3JpZFxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhdGVnb3JpZXN9XG4gICAgICBjb2xzPXsxfVxuICAgICAgYnJlYWtwb2ludHM9e1tcbiAgICAgICAgeyBtaW5XaWR0aDogXCJ4c1wiLCBjb2xzOiAyIH0sXG4gICAgICAgIHsgbWluV2lkdGg6IFwibGdcIiwgY29sczogMyB9LFxuICAgICAgXX1cbiAgICA+XG4gICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogMjAgfSwgKF8sIGluZGV4KSA9PiAoXG4gICAgICAgIDxDYXJkIGNvbXBvbmVudD1cImFydGljbGVcIiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICAgICAgPEdyb3VwPlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICB0bz17YC9jYXRlZ29yeS8ke2RhdGEuY2F0ZWdvcnl9YH1cbiAgICAgICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2RhdGEuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgIDwvVGV4dD57XCIgXCJ9XG4gICAgICAgICAgICAgICZzaW07e1wiIFwifVxuICAgICAgICAgICAgICA8VGV4dCBzaXplPVwieHNcIiBjb21wb25lbnQ9XCJzcGFuXCIgY29sb3I9XCJkaW1tZWRcIj5cbiAgICAgICAgICAgICAgICBwb3N0ZWQgYnkgbnVsZnJvc3RcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8VGV4dCBjb21wb25lbnQ9XCJ0aW1lXCIgc2l6ZT1cInhzXCIgbWw9XCJhdXRvXCIgY29sb3I9XCJkaW1tZWRcIj5cbiAgICAgICAgICAgICAgNCBob3VycyBhZ29cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgIDxUaXRsZSBvcmRlcj17NH0gbXQ9XCJzbVwiPlxuICAgICAgICAgICAge2RhdGEuY2F0ZWdvcnl9XG4gICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZGltbWVkXCIgbGluZUNsYW1wPXsyfT5cbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVzdFxuICAgICAgICAgICAgICBhc3BlcmlvcmVzIG1hZ25hbSBldmVuaWV0IHBlcmZlcmVuZGlzIG51bGxhIG5hbSwgY3VwaWRpdGF0ZSBjdW1cbiAgICAgICAgICAgICAgaXVyZSBzYWVwZSBwcm92aWRlbnQgbW9sZXN0aWFzIG1vbGVzdGlhZSBwb3NzaW11cyBxdWFtIGhhcnVtXG4gICAgICAgICAgICAgIGNvbnNlY3RldHVyIG5vbiBlbGlnZW5kaSBmYWNpbGlzIG9tbmlzLlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8Qm94IGNvbXBvbmVudD1cImZvb3RlclwiIG10PVwic21cIj5cbiAgICAgICAgICAgIDxHcm91cCBhbGlnbj1cImJhc2VsaW5lXCIgcG9zaXRpb249XCJhcGFydFwiPlxuICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwibGlua1wiIHNpemU9XCJzbVwiPlxuICAgICAgICAgICAgICAgIDc4IGNvbW1lbnRzXG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPEdyb3VwIHNwYWNpbmc9XCJ4c1wiIGFsaWduPVwiYmFzZWxpbmVcIj5cbiAgICAgICAgICAgICAgICA8QWN0aW9uSWNvbiBjb2xvcj1cInJlZFwiPlxuICAgICAgICAgICAgICAgICAgPEhlYXJ0IHNpemU9ezE2fSAvPlxuICAgICAgICAgICAgICAgIDwvQWN0aW9uSWNvbj5cbiAgICAgICAgICAgICAgICA8QWN0aW9uSWNvbiBvbkNsaWNrPXtvcGVuUmVwb3J0TW9kYWx9PlxuICAgICAgICAgICAgICAgICAgPEZsYWcyIHNpemU9ezE2fSAvPlxuICAgICAgICAgICAgICAgIDwvQWN0aW9uSWNvbj5cbiAgICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICkpfVxuICAgIDwvU2ltcGxlR3JpZD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IG10PVwieGxcIj5cbiAgICAgIDxkaXY+dGhpcyBpcyBzb21ldGhpbmc8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgYXdhaXQgYXV0aGVudGljYXRvci5sb2dvdXQocmVxdWVzdCwgeyByZWRpcmVjdFRvOiBcIi9cIiB9KTtcbn07XG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdChcIi9jYXRlZ29yeVwiKTtcbn07XG4iLCAiaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIFN0YWNrLCBUZXh0LCBUaXRsZSB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgU29jaWFsc1Byb3ZpZGVyIH0gZnJvbSBcInJlbWl4LWF1dGgtc29jaWFsc1wiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmludGVyZmFjZSBTb2NpYWxCdXR0b25Qcm9wcyB7XG4gIHByb3ZpZGVyOiBTb2NpYWxzUHJvdmlkZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGljb24/OiBhbnk7XG4gIGNvbG9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIHN1Y2Nlc3NSZWRpcmVjdDogXCIvXCIsXG4gIH0pO1xufTtcblxuY29uc3QgU29jaWFsQnV0dG9uOiBSZWFjdC5GQzxTb2NpYWxCdXR0b25Qcm9wcz4gPSAoe1xuICBwcm92aWRlcixcbiAgbGFiZWwsXG4gIGljb24sXG4gIGNvbG9yLFxufSkgPT4gKFxuICA8Rm9ybSBhY3Rpb249e2AvYXV0aC8ke3Byb3ZpZGVyfWB9IG1ldGhvZD1cInBvc3RcIiBzdHlsZT17eyB3aWR0aDogXCIzMCVcIiB9fT5cbiAgICA8QnV0dG9uIGxlZnRJY29uPXtpY29ufSBjb2xvcj17Y29sb3J9IHR5cGU9XCJzdWJtaXRcIiBmdWxsV2lkdGg+XG4gICAgICB7bGFiZWx9XG4gICAgPC9CdXR0b24+XG4gIDwvRm9ybT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbXQ9XCJ4bFwiPlxuICAgICAgPFN0YWNrIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxUaXRsZSBvcmRlcj17MX0+TG9nIGluPC9UaXRsZT5cbiAgICAgICAgPFRleHQgY29sb3I9XCJkaW1tZWRcIiBzaXplPVwic21cIj5cbiAgICAgICAgICBDb250aW51ZSB3aXRoIG9uZSBvZiB0aGVzZSBwcm92aWRlcnNcbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8U29jaWFsQnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJpbmRpZ29cIlxuICAgICAgICAgIHByb3ZpZGVyPXtTb2NpYWxzUHJvdmlkZXIuRElTQ09SRH1cbiAgICAgICAgICBsYWJlbD1cIkxvZ2luIHdpdGggRGlzY29yZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTb2NpYWxCdXR0b25cbiAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgcHJvdmlkZXI9e1NvY2lhbHNQcm92aWRlci5HT09HTEV9XG4gICAgICAgICAgbGFiZWw9XCJMb2dpbiB3aXRoIEdvb2dsZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTb2NpYWxCdXR0b25cbiAgICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgICAgIHByb3ZpZGVyPXtTb2NpYWxzUHJvdmlkZXIuR0lUSFVCfVxuICAgICAgICAgIGxhYmVsPVwiTG9naW4gd2l0aCBHaXRodWJcIlxuICAgICAgICAvPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidmN2I5ZDcxNScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtUUlIUE1aNU4uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUlWSU9ETElRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWjIyV0Q1NjMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02RlJMUlhZSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZaUk5RTUNQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTUNSU1VFTjYuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LUpKWUMzU0dTLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FNjJPVFhDVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURVQkhWU0NZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvJHByb3ZpZGVyJzp7J2lkJzoncm91dGVzL2F1dGgvJHByb3ZpZGVyJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvOnByb3ZpZGVyJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvJHByb3ZpZGVyLVM3NDYyVUZPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0yVERWUVRGRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZUS0tITVZQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1g2NkFZRjQuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoLyRwcm92aWRlci5jYWxsYmFjayc6eydpZCc6J3JvdXRlcy9hdXRoLyRwcm92aWRlci5jYWxsYmFjaycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoLzpwcm92aWRlci9jYWxsYmFjaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoLyRwcm92aWRlci5jYWxsYmFjay02UkVLM0NDMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1g2NkFZRjQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2F0ZWdvcnknOnsnaWQnOidyb3V0ZXMvY2F0ZWdvcnknLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2F0ZWdvcnknLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2F0ZWdvcnktRkFCQlJHUEIuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeSc6eydpZCc6J3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnknLCdwYXJlbnRJZCc6J3JvdXRlcy9jYXRlZ29yeScsJ3BhdGgnOic6Y2F0ZWdvcnknLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5LUNRS0haSkJFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FNjJPVFhDVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURVQkhWU0NZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NhdGVnb3J5L2luZGV4Jzp7J2lkJzoncm91dGVzL2NhdGVnb3J5L2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvY2F0ZWdvcnknLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2F0ZWdvcnkvaW5kZXgtT0lUMllTVksuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLURVQkhWU0NZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1LQVVGUUFVUC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMlREVlFURkYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WVEtLSE1WUC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbic6eydpZCc6J3JvdXRlcy9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dpbi1RR0s0SFNHUS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVlRLS0hNVlAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDY2QVlGNC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dvdXQnOnsnaWQnOidyb3V0ZXMvbG9nb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dvdXQtSEYzSE1VTVQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1GN0I5RDcxNS5qcyd9OyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9hdXRoLyRwcm92aWRlci5jYWxsYmFjay50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvYXV0aC8kcHJvdmlkZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5L2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dpbi50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoLyRwcm92aWRlci5jYWxsYmFja1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoLzpwcm92aWRlci9jYWxsYmFja1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kcHJvdmlkZXJcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvJHByb3ZpZGVyXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvOnByb3ZpZGVyXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9jYXRlZ29yeVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2F0ZWdvcnlcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY2F0ZWdvcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvY2F0ZWdvcnlcIixcbiAgICAgIHBhdGg6IFwiOmNhdGVnb3J5XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9jYXRlZ29yeS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2F0ZWdvcnkvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9jYXRlZ29yeVwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9XG4gIH07Il0sCiAgIm1hcHBp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
