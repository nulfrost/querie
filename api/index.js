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
  },
  logo: {}
}));
function Navbar({ user }) {
  var _a, _b, _c, _d;
  const { classes, theme, cx } = useStyles();
  const [opened, toggleOpened] = (0, import_hooks.useBooleanToggle)(false);
  const [userMenuOpened, setUserMenuOpened] = (0, import_react3.useState)(false);
  const submit = (0, import_react2.useSubmit)();
  const { colorScheme, toggleColorScheme } = (0, import_core.useMantineColorScheme)();
  return /* @__PURE__ */ React.createElement(import_core.Box, {
    component: "header",
    className: classes.header
  }, /* @__PURE__ */ React.createElement(import_core.Container, {
    className: classes.mainSection,
    size: "xl"
  }, /* @__PURE__ */ React.createElement(import_core.Group, {
    position: "apart"
  }, /* @__PURE__ */ React.createElement(import_core.Text, {
    component: import_react2.Link,
    to: "/category",
    weight: 700,
    size: "xl",
    variant: "gradient",
    gradient: { from: "indigo", to: "cyan", deg: 45 }
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
  }, "Account settings"), /* @__PURE__ */ React.createElement(import_core.Menu.Item, {
    onClick: () => toggleColorScheme(),
    icon: colorScheme === "light" ? /* @__PURE__ */ React.createElement(import_tabler_icons_react.Sun, {
      size: 14
    }) : /* @__PURE__ */ React.createElement(import_tabler_icons_react.Moon, {
      size: 14
    })
  }, "Current theme: ", colorScheme, " "), /* @__PURE__ */ React.createElement(import_core.Divider, null), /* @__PURE__ */ React.createElement(import_core.Menu.Item, {
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
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
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
    size: "sm",
    target: "_blank"
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
var useStyles3 = (0, import_core3.createStyles)((theme) => {
  console.log(theme.colorScheme);
  return {
    body: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]
    }
  };
});
var loader = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);
  return { user };
};
function App() {
  const user = (0, import_react4.useLoaderData)();
  const { classes } = useStyles3();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react4.Meta, null), /* @__PURE__ */ React.createElement(import_react4.Links, null)), /* @__PURE__ */ React.createElement(MantineTheme, null, /* @__PURE__ */ React.createElement(import_modals.ModalsProvider, null, /* @__PURE__ */ React.createElement(import_notifications.NotificationsProvider, {
    limit: 2,
    autoClose: 3e3,
    position: "top-center"
  }, /* @__PURE__ */ React.createElement(import_core3.Box, {
    component: "body",
    className: classes.body
  }, /* @__PURE__ */ React.createElement(Navbar, {
    user
  }), /* @__PURE__ */ React.createElement(import_core3.Container, {
    size: "xl",
    role: "main",
    mt: "xl"
  }, /* @__PURE__ */ React.createElement(import_react4.Outlet, null)), /* @__PURE__ */ React.createElement(Footer, {
    links: [
      {
        link: "https://github.com/nulfrost/querie",
        label: "Github"
      }
    ]
  }))))), /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react4.Scripts, null), /* @__PURE__ */ React.createElement(import_react4.LiveReload, null));
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
var import_core6 = require("@mantine/core");
var import_react8 = require("@remix-run/react");

// app/db/db.server.ts
var import_client = require("@prisma/client");
var prisma = global.prisma || new import_client.PrismaClient();
if (true)
  global.prisma = prisma;
async function getCategories() {
  return prisma.category.findMany();
}

// app/components/ui/Categories.tsx
var import_core4 = require("@mantine/core");
var import_react6 = require("@remix-run/react");
var useStyles4 = (0, import_core4.createStyles)((theme) => ({
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
function Categories({ categories }) {
  const { classes, cx } = useStyles4();
  return /* @__PURE__ */ React.createElement(import_core4.List, {
    listStyleType: "none",
    className: classes.links
  }, categories == null ? void 0 : categories.map(({ id, name }) => /* @__PURE__ */ React.createElement(import_core4.List.Item, null, /* @__PURE__ */ React.createElement(import_react6.NavLink, {
    to: `/category/${name.toLowerCase()}`,
    key: id,
    className: ({ isActive }) => cx(classes.link, { [classes.activeLink]: isActive })
  }, name))));
}

// app/components/ui/SocialButton.tsx
var import_core5 = require("@mantine/core");
var import_react7 = require("@remix-run/react");
function SocialButton({ provider, label, color }) {
  return /* @__PURE__ */ React.createElement(import_react7.Form, {
    action: `/auth/${provider}`,
    method: "post",
    style: { width: "30%" }
  }, /* @__PURE__ */ React.createElement(import_core5.Button, {
    color,
    type: "submit",
    fullWidth: true
  }, label));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category.tsx
var loader4 = async () => {
  const categories = await getCategories();
  return { categories };
};
function Category() {
  const data = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core6.Box, {
    component: "nav"
  }, /* @__PURE__ */ React.createElement(Categories, {
    categories: data.categories
  })), /* @__PURE__ */ React.createElement(import_react8.Outlet, null));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/$category.tsx
var category_exports2 = {};
__export(category_exports2, {
  default: () => Category2,
  loader: () => loader5
});
var import_core8 = require("@mantine/core");
var import_react9 = require("@remix-run/react");
var import_tabler_icons_react2 = require("tabler-icons-react");

// app/hooks/useActionModals.tsx
var import_notifications2 = require("@mantine/notifications");
var import_modals2 = require("@mantine/modals");
var import_core7 = require("@mantine/core");
function useActionModals() {
  const modals = (0, import_modals2.useModals)();
  const reportModal = () => {
    modals.openConfirmModal({
      title: "Report post",
      centered: true,
      children: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core7.RadioGroup, {
        orientation: "vertical",
        label: "Please select a reason for reporting this post.",
        required: true,
        mb: "xl",
        size: "sm",
        defaultValue: "harmful"
      }, /* @__PURE__ */ React.createElement(import_core7.Radio, {
        value: "harmful",
        label: "Harmful content"
      }), /* @__PURE__ */ React.createElement(import_core7.Radio, {
        value: "hate",
        label: "Hate speech"
      }), /* @__PURE__ */ React.createElement(import_core7.Radio, {
        value: "spam",
        label: "Spam"
      }), /* @__PURE__ */ React.createElement(import_core7.Radio, {
        value: "incorrect",
        label: "Posted in the wrong section"
      }))),
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
  return { reportModal };
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/$category.tsx
var useStyles5 = (0, import_core8.createStyles)((theme) => ({
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
  },
  divider: {
    border: `1px solid ${theme.colors.gray[1]}`
  }
}));
var loader5 = async ({ params }) => {
  const category = params.category;
  return { category };
};
function Category2() {
  const data = (0, import_react9.useLoaderData)();
  const { classes } = useStyles5();
  const { reportModal } = useActionModals();
  return /* @__PURE__ */ React.createElement(import_core8.SimpleGrid, {
    className: classes.categories,
    cols: 1,
    breakpoints: [
      { minWidth: "xs", cols: 2 },
      { minWidth: "lg", cols: 3 }
    ]
  }, Array.from({ length: 20 }, (_, index) => /* @__PURE__ */ React.createElement(import_core8.Card, {
    component: "article",
    key: index,
    className: classes.card
  }, /* @__PURE__ */ React.createElement(import_core8.Group, null, /* @__PURE__ */ React.createElement(import_core8.Box, null, /* @__PURE__ */ React.createElement(import_core8.Text, {
    to: `/category/${data.category}`,
    size: "xs",
    component: import_react9.Link,
    className: classes.category,
    variant: "link"
  }, data.category), " ", "\u223C", " ", /* @__PURE__ */ React.createElement(import_core8.Text, {
    size: "xs",
    component: "span",
    color: "dimmed"
  }, "posted by nulfrost")), /* @__PURE__ */ React.createElement(import_core8.Text, {
    component: "time",
    size: "xs",
    ml: "auto",
    color: "dimmed"
  }, "4 hours ago")), /* @__PURE__ */ React.createElement(import_core8.Title, {
    order: 4,
    mt: "sm"
  }, data.category), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(import_core8.Text, {
    color: "dimmed",
    lineClamp: 2
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores magnam eveniet perferendis nulla nam, cupiditate cum iure saepe provident molestias molestiae possimus quam harum consectetur non eligendi facilis omnis.")), /* @__PURE__ */ React.createElement(import_core8.Box, {
    component: "footer",
    mt: "sm"
  }, /* @__PURE__ */ React.createElement(import_core8.Group, {
    align: "baseline",
    position: "apart"
  }, /* @__PURE__ */ React.createElement(import_core8.Text, {
    variant: "link",
    size: "sm"
  }, "78 comments"), /* @__PURE__ */ React.createElement(import_core8.Group, {
    spacing: "xs",
    align: "baseline"
  }, /* @__PURE__ */ React.createElement(import_core8.ActionIcon, {
    color: "red"
  }, /* @__PURE__ */ React.createElement(import_tabler_icons_react2.Heart, {
    size: 16
  })), /* @__PURE__ */ React.createElement(import_core8.ActionIcon, {
    onClick: reportModal
  }, /* @__PURE__ */ React.createElement(import_tabler_icons_react2.Flag2, {
    size: 16
  }))))))));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/index.tsx
var category_exports3 = {};
__export(category_exports3, {
  default: () => Index
});
var import_core9 = require("@mantine/core");
function Index() {
  return /* @__PURE__ */ React.createElement(import_core9.Box, {
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
var import_core10 = require("@mantine/core");
var import_remix_auth_socials2 = require("remix-auth-socials");
var loader7 = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/"
  });
};
function Login() {
  return /* @__PURE__ */ React.createElement(import_core10.Container, {
    mt: "xl"
  }, /* @__PURE__ */ React.createElement(import_core10.Stack, {
    align: "center"
  }, /* @__PURE__ */ React.createElement(import_core10.Title, {
    order: 1
  }, "Log in"), /* @__PURE__ */ React.createElement(import_core10.Text, {
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
var assets_manifest_default = { "version": "f66a176a", "entry": { "module": "/build/entry.client-QIHPMZ5N.js", "imports": ["/build/_shared/chunk-IVIODLIQ.js", "/build/_shared/chunk-Z22WD563.js", "/build/_shared/chunk-6FRLRXYH.js", "/build/_shared/chunk-6ZRNQMCP.js", "/build/_shared/chunk-MCRSUEN6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-L7QB6WJB.js", "imports": ["/build/_shared/chunk-BI6NLH3R.js", "/build/_shared/chunk-IX2GAY56.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider": { "id": "routes/auth/$provider", "parentId": "root", "path": "auth/:provider", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider-S7462UFO.js", "imports": ["/build/_shared/chunk-2TDVQTFF.js", "/build/_shared/chunk-VTKKHMVP.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider.callback": { "id": "routes/auth/$provider.callback", "parentId": "root", "path": "auth/:provider/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider.callback-6REK3CC2.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category": { "id": "routes/category", "parentId": "root", "path": "category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category-CTTWOBOK.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/$category": { "id": "routes/category/$category", "parentId": "routes/category", "path": ":category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category/$category-3ODHLEFD.js", "imports": ["/build/_shared/chunk-BI6NLH3R.js", "/build/_shared/chunk-IX2GAY56.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/index": { "id": "routes/category/index", "parentId": "routes/category", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/category/index-6SHX5MBK.js", "imports": ["/build/_shared/chunk-IX2GAY56.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-KAUFQAUP.js", "imports": ["/build/_shared/chunk-2TDVQTFF.js", "/build/_shared/chunk-VTKKHMVP.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-3A2CZAV7.js", "imports": ["/build/_shared/chunk-VTKKHMVP.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-HF3HMUMT.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-F66A176A.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiIsICIuLi9ub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi9kZXYvY29tcGlsZXIvc2hpbXMvcmVhY3QudHMiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyLnRzeCIsICIuLi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9hdXRoLyRwcm92aWRlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkudHN4IiwgIi4uL2FwcC9kYi9kYi5zZXJ2ZXIudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvdWkvQ2F0ZWdvcmllcy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvdWkvU29jaWFsQnV0dG9uLnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnkudHN4IiwgIi4uL2FwcC9ob29rcy91c2VBY3Rpb25Nb2RhbHMudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5L2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgImltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgaW5qZWN0U3R5bGVzSW50b1N0YXRpY01hcmt1cCB9IGZyb20gXCJAbWFudGluZS9zc3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgYDwhRE9DVFlQRSBodG1sPiR7aW5qZWN0U3R5bGVzSW50b1N0YXRpY01hcmt1cChtYXJrdXApfWAsXG4gICAge1xuICAgICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgfVxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEJveCxcbiAgQ29sb3JTY2hlbWUsXG4gIENvbG9yU2NoZW1lUHJvdmlkZXIsXG4gIENvbnRhaW5lcixcbiAgY3JlYXRlU3R5bGVzLFxuICBNYW50aW5lUHJvdmlkZXIsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbHNQcm92aWRlciB9IGZyb20gXCJAbWFudGluZS9tb2RhbHNcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNQcm92aWRlciB9IGZyb20gXCJAbWFudGluZS9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgdHlwZSB7XG4gIExpbmtzRnVuY3Rpb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG59IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTGF5b3V0L05hdmJhclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwifi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3RlclwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiAoe1xuICBjaGFyc2V0OiBcInV0Zi04XCIsXG4gIHRpdGxlOiBcInF1ZXJpZSB8IGFzayB5b3VyIHdpbGRlc3QgcXVlc3Rpb25zXCIsXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgaHJlZjogc3R5bGVzLFxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICB9LFxuICBdO1xufTtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4ge1xuICBjb25zb2xlLmxvZyh0aGVtZS5jb2xvclNjaGVtZSk7XG4gIHJldHVybiB7XG4gICAgYm9keToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCJcbiAgICAgICAgICA/IHRoZW1lLmNvbG9ycy5kYXJrWzZdXG4gICAgICAgICAgOiB0aGVtZS5jb2xvcnMuZ3JheVsyXSxcbiAgICB9LFxuICB9O1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0KTtcbiAgcmV0dXJuIHsgdXNlciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB1c2VyID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8TWFudGluZVRoZW1lPlxuICAgICAgICA8TW9kYWxzUHJvdmlkZXI+XG4gICAgICAgICAgPE5vdGlmaWNhdGlvbnNQcm92aWRlclxuICAgICAgICAgICAgbGltaXQ9ezJ9XG4gICAgICAgICAgICBhdXRvQ2xvc2U9ezMwMDB9XG4gICAgICAgICAgICBwb3NpdGlvbj1cInRvcC1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PVwiYm9keVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fT5cbiAgICAgICAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgICAgICA8Q29udGFpbmVyIHNpemU9XCJ4bFwiIHJvbGU9XCJtYWluXCIgbXQ9XCJ4bFwiPlxuICAgICAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgIDxGb290ZXJcbiAgICAgICAgICAgICAgICBsaW5rcz17W1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9udWxmcm9zdC9xdWVyaWVcIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiR2l0aHViXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L05vdGlmaWNhdGlvbnNQcm92aWRlcj5cbiAgICAgICAgPC9Nb2RhbHNQcm92aWRlcj5cbiAgICAgIDwvTWFudGluZVRoZW1lPlxuICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICA8U2NyaXB0cyAvPlxuICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1hbnRpbmVUaGVtZSh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IFtjb2xvclNjaGVtZSwgc2V0Q29sb3JTY2hlbWVdID0gdXNlU3RhdGU8Q29sb3JTY2hlbWU+KFwibGlnaHRcIik7XG4gIGNvbnN0IHRvZ2dsZUNvbG9yU2NoZW1lID0gKHZhbHVlPzogQ29sb3JTY2hlbWUpID0+XG4gICAgc2V0Q29sb3JTY2hlbWUodmFsdWUgfHwgKGNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sb3JTY2hlbWVQcm92aWRlclxuICAgICAgY29sb3JTY2hlbWU9e2NvbG9yU2NoZW1lfVxuICAgICAgdG9nZ2xlQ29sb3JTY2hlbWU9e3RvZ2dsZUNvbG9yU2NoZW1lfVxuICAgID5cbiAgICAgIDxNYW50aW5lUHJvdmlkZXJcbiAgICAgICAgdGhlbWU9e3sgY29sb3JTY2hlbWUgfX1cbiAgICAgICAgd2l0aE5vcm1hbGl6ZUNTU1xuICAgICAgICB3aXRoR2xvYmFsU3R5bGVzXG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTWFudGluZVByb3ZpZGVyPlxuICAgIDwvQ29sb3JTY2hlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQnVyZ2VyLFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgY3JlYXRlU3R5bGVzLFxuICBEaXZpZGVyLFxuICBHcm91cCxcbiAgTWVudSxcbiAgVGV4dCxcbiAgVGl0bGUsXG4gIFVuc3R5bGVkQnV0dG9uLFxuICB1c2VNYW50aW5lQ29sb3JTY2hlbWUsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyB1c2VCb29sZWFuVG9nZ2xlIH0gZnJvbSBcIkBtYW50aW5lL2hvb2tzXCI7XG5pbXBvcnQgeyBMaW5rLCBMaW5rcywgdXNlU3VibWl0IH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBDaGFydEJhcixcbiAgQ2hldnJvbkRvd24sXG4gIEhlYXJ0LFxuICBMb2dvdXQsXG4gIE1lc3NhZ2UsXG4gIE1vb24sXG4gIFNldHRpbmdzLFxuICBTdW4sXG59IGZyb20gXCJ0YWJsZXItaWNvbnMtcmVhY3RcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgaGVhZGVyOiB7XG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCJcbiAgICAgICAgPyB0aGVtZS5jb2xvcnMuZGFya1s2XVxuICAgICAgICA6IHRoZW1lLmNvbG9ycy5ncmF5WzBdLFxuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke1xuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gXCJ0cmFuc3BhcmVudFwiIDogdGhlbWUuY29sb3JzLmdyYXlbMl1cbiAgICB9YCxcbiAgfSxcblxuICBtYWluU2VjdGlvbjoge1xuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG5cbiAgdXNlck1lbnU6IHtcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJ4c1wiKV06IHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0sXG4gIH0sXG5cbiAgdXNlcjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1swXSA6IHRoZW1lLmJsYWNrLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9cHggJHt0aGVtZS5zcGFjaW5nLnNtfXB4YCxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGl1cy5zbSxcbiAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQtY29sb3IgMTAwbXMgZWFzZVwiLFxuXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbOF0gOiB0aGVtZS53aGl0ZSxcbiAgICB9LFxuICB9LFxuXG4gIGJ1cmdlcjoge1xuICAgIFt0aGVtZS5mbi5sYXJnZXJUaGFuKFwieHNcIildOiB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9LFxuICB9LFxuXG4gIHVzZXJBY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1s4XSA6IHRoZW1lLndoaXRlLFxuICB9LFxuICBsaW5rczoge1xuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInhzXCIpXToge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgfSxcbiAgfSxcbiAgbG9nbzoge30sXG59KSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVzZXI6IGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5hdmJhcih7IHVzZXIgfTogUHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc2VzLCB0aGVtZSwgY3ggfSA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbb3BlbmVkLCB0b2dnbGVPcGVuZWRdID0gdXNlQm9vbGVhblRvZ2dsZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyTWVudU9wZW5lZCwgc2V0VXNlck1lbnVPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcblxuICBjb25zdCB7IGNvbG9yU2NoZW1lLCB0b2dnbGVDb2xvclNjaGVtZSB9ID0gdXNlTWFudGluZUNvbG9yU2NoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cImhlYWRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMubWFpblNlY3Rpb259IHNpemU9XCJ4bFwiPlxuICAgICAgICA8R3JvdXAgcG9zaXRpb249XCJhcGFydFwiPlxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICB0bz1cIi9jYXRlZ29yeVwiXG4gICAgICAgICAgICB3ZWlnaHQ9ezcwMH1cbiAgICAgICAgICAgIHNpemU9XCJ4bFwiXG4gICAgICAgICAgICB2YXJpYW50PVwiZ3JhZGllbnRcIlxuICAgICAgICAgICAgZ3JhZGllbnQ9e3sgZnJvbTogXCJpbmRpZ29cIiwgdG86IFwiY3lhblwiLCBkZWc6IDQ1IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgcXVlcmllXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxCdXJnZXJcbiAgICAgICAgICAgIG9wZW5lZD17b3BlbmVkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlT3BlbmVkKCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnVyZ2VyfVxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHshdXNlcj8udXNlciAmJiAoXG4gICAgICAgICAgICA8R3JvdXAgc3BhY2luZz17NX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e0xpbmt9IHRvPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3VzZXI/LnVzZXIgJiYgKFxuICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgc2l6ZT17MjYwfVxuICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJlbmRcIlxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPVwicG9wLXRvcC1yaWdodFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VyTWVudX1cbiAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0VXNlck1lbnVPcGVuZWQoZmFsc2UpfVxuICAgICAgICAgICAgICBvbk9wZW49eygpID0+IHNldFVzZXJNZW51T3BlbmVkKHRydWUpfVxuICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICA8VW5zdHlsZWRCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goY2xhc3Nlcy51c2VyLCB7XG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLnVzZXJBY3RpdmVdOiB1c2VyTWVudU9wZW5lZCxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxHcm91cCBzcGFjaW5nPXs3fT5cbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXNlcj8udXNlcj8ucGhvdG9zWzBdPy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3VzZXI/LnVzZXI/LmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIHJhZGl1cz1cInhsXCJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyNH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgd2VpZ2h0PXs1MDB9IHNpemU9XCJzbVwiIHN4PXt7IGxpbmVIZWlnaHQ6IDEgfX0gbXI9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgIHt1c2VyPy51c2VyPy5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8Q2hldnJvbkRvd24gc2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICAgICAgIDwvVW5zdHlsZWRCdXR0b24+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgIGljb249ezxDaGFydEJhciBzaXplPXsxNH0gY29sb3I9e3RoZW1lLmNvbG9ycy5pbmRpZ29bNl19IC8+fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTGVhZGVyYm9hcmRcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0gaWNvbj17PEhlYXJ0IHNpemU9ezE0fSBjb2xvcj17dGhlbWUuY29sb3JzLnJlZFs2XX0gLz59PlxuICAgICAgICAgICAgICAgIExpa2VkIHBvc3RzXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgaWNvbj17PE1lc3NhZ2Ugc2l6ZT17MTR9IGNvbG9yPXt0aGVtZS5jb2xvcnMuYmx1ZVs2XX0gLz59XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBZb3VyIGNvbW1lbnRzXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5MYWJlbD5TZXR0aW5nczwvTWVudS5MYWJlbD5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBpY29uPXs8U2V0dGluZ3Mgc2l6ZT17MTR9IC8+fT5cbiAgICAgICAgICAgICAgICBBY2NvdW50IHNldHRpbmdzXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQ29sb3JTY2hlbWUoKX1cbiAgICAgICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lID09PSBcImxpZ2h0XCIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxTdW4gc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8TW9vbiBzaXplPXsxNH0gLz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDdXJyZW50IHRoZW1lOiB7Y29sb3JTY2hlbWV9e1wiIFwifVxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgIGljb249ezxMb2dvdXQgc2l6ZT17MTR9IC8+fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICBzdWJtaXQobnVsbCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiL2xvZ291dFwiLFxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Hcm91cD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgQ29udGFpbmVyLCBHcm91cCwgQW5jaG9yLCBUaXRsZSB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGZvb3Rlcjoge1xuICAgIG1hcmdpblRvcDogMTIwLFxuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke1xuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbNV0gOiB0aGVtZS5jb2xvcnMuZ3JheVsyXVxuICAgIH1gLFxuICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIlxuICAgICAgICA/IHRoZW1lLmNvbG9ycy5kYXJrWzZdXG4gICAgICAgIDogdGhlbWUuY29sb3JzLmdyYXlbMF0sXG4gIH0sXG5cbiAgaW5uZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nLnhsLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcueGwsXG5cbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJ4c1wiKV06IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgfSxcbiAgfSxcblxuICBsaW5rczoge1xuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInhzXCIpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLm1kLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmludGVyZmFjZSBGb290ZXJQcm9wcyB7XG4gIGxpbmtzOiB7IGxpbms6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoeyBsaW5rcyB9OiBGb290ZXJQcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBpdGVtcyA9IGxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgIDxBbmNob3I8XCJhXCI+XG4gICAgICBjb2xvcj1cImRpbW1lZFwiXG4gICAgICBrZXk9e2xpbmsubGFiZWx9XG4gICAgICBocmVmPXtsaW5rLmxpbmt9XG4gICAgICBzaXplPVwic21cIlxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICA+XG4gICAgICB7bGluay5sYWJlbH1cbiAgICA8L0FuY2hvcj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJ9IHNpemU9XCJ4bFwiPlxuICAgICAgICA8VGl0bGUgb3JkZXI9ezN9PnF1ZXJpZTwvVGl0bGU+XG4gICAgICAgIDxHcm91cCBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PntpdGVtc308L0dyb3VwPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gXCJyZW1peC1hdXRoXCI7XG5pbXBvcnQgeyBzZXNzaW9uU3RvcmFnZSB9IGZyb20gXCJ+L3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQge1xuICBHb29nbGVTdHJhdGVneSxcbiAgU29jaWFsc1Byb3ZpZGVyLFxuICBHaXRIdWJTdHJhdGVneSxcbiAgRGlzY29yZFN0cmF0ZWd5LFxufSBmcm9tIFwicmVtaXgtYXV0aC1zb2NpYWxzXCI7XG5cbmV4cG9ydCBsZXQgYXV0aGVudGljYXRvciA9IG5ldyBBdXRoZW50aWNhdG9yKHNlc3Npb25TdG9yYWdlLCB7XG4gIHNlc3Npb25LZXk6IFwiX19zZXNzaW9uXCIsXG59KTtcblxuYXV0aGVudGljYXRvci51c2UoXG4gIG5ldyBHb29nbGVTdHJhdGVneShcbiAgICB7XG4gICAgICBjbGllbnRJRDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgICBjYWxsYmFja1VSTDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoLyR7U29jaWFsc1Byb3ZpZGVyLkdPT0dMRX0vY2FsbGJhY2tgLFxuICAgIH0sXG4gICAgYXN5bmMgKHsgcHJvZmlsZSB9KSA9PiB7XG4gICAgICByZXR1cm4gcHJvZmlsZTtcbiAgICB9XG4gIClcbik7XG5cbmF1dGhlbnRpY2F0b3IudXNlKFxuICBuZXcgRGlzY29yZFN0cmF0ZWd5KFxuICAgIHtcbiAgICAgIGNsaWVudElEOiBwcm9jZXNzLmVudi5ESVNDT1JEX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuRElTQ09SRF9DTElFTlRfU0VDUkVULFxuICAgICAgY2FsbGJhY2tVUkw6IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC8ke1NvY2lhbHNQcm92aWRlci5ESVNDT1JEfS9jYWxsYmFja2AsXG4gICAgfSxcbiAgICBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcbiAgICAgIHJldHVybiBwcm9maWxlO1xuICAgIH1cbiAgKVxuKTtcblxuYXV0aGVudGljYXRvci51c2UoXG4gIG5ldyBHaXRIdWJTdHJhdGVneShcbiAgICB7XG4gICAgICBjbGllbnRJRDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXG4gICAgICBjYWxsYmFja1VSTDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoLyR7U29jaWFsc1Byb3ZpZGVyLkdJVEhVQn0vY2FsbGJhY2tgLFxuICAgIH0sXG4gICAgYXN5bmMgKHsgcHJvZmlsZSB9KSA9PiB7XG4gICAgICByZXR1cm4gcHJvZmlsZTtcbiAgICB9XG4gIClcbik7XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5cbmV4cG9ydCBsZXQgc2Vzc2lvblN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6IFwiX19zZXNzaW9uXCIsXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjcmV0czogW3Byb2Nlc3MuZW52LkNPT0tJRV9TRUNSRVRdLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBsZXQgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uLCBkZXN0cm95U2Vzc2lvbiB9ID0gc2Vzc2lvblN0b3JhZ2U7XG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSBcIn4vc2VydmljZXMvYXV0aC5zZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgcmV0dXJuIGF1dGhlbnRpY2F0b3IuYXV0aGVudGljYXRlKHBhcmFtcy5wcm92aWRlciwgcmVxdWVzdCwge1xuICAgIHN1Y2Nlc3NSZWRpcmVjdDogXCIvXCIsXG4gICAgZmFpbHVyZVJlZGlyZWN0OiBcIi9sb2dpblwiLFxuICB9KTtcbn07XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiByZWRpcmVjdChcIi9sb2dpblwiKTtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgcmV0dXJuIGF1dGhlbnRpY2F0b3IuYXV0aGVudGljYXRlKHBhcmFtcy5wcm92aWRlciwgcmVxdWVzdCk7XG59O1xuIiwgImltcG9ydCB7IEJveCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IE91dGxldCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSBcIn4vZGIvZGIuc2VydmVyXCI7XG5pbXBvcnQgeyBDYXRlZ29yaWVzIH0gZnJvbSBcIn4vY29tcG9uZW50cy91aVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGdldENhdGVnb3JpZXMoKTtcbiAgcmV0dXJuIHsgY2F0ZWdvcmllcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCBjb21wb25lbnQ9XCJuYXZcIj5cbiAgICAgICAgPENhdGVnb3JpZXMgY2F0ZWdvcmllcz17ZGF0YS5jYXRlZ29yaWVzfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmludGVyZmFjZSBDdXN0b21Ob2RlSnNHbG9iYWwgZXh0ZW5kcyBOb2RlSlMuR2xvYmFsIHtcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG59XG5cbmRlY2xhcmUgY29uc3QgZ2xvYmFsOiBDdXN0b21Ob2RlSnNHbG9iYWw7XG5cbmNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoKSB7XG4gIHJldHVybiBwcmlzbWEuY2F0ZWdvcnkuZmluZE1hbnkoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExhdGVzdFF1ZXN0aW9uc0ZvckNhdGVnb3J5KGNhdGVnb3J5Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmlzbWEucXVlc3Rpb24uZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICBjYXRlZ29yeToge1xuICAgICAgICBuYW1lOiBjYXRlZ29yeSA/PyBcIlwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuLy8gRXNzZW50aWFsbHkgSSB3YW50IHRvIHN1bSB0aGUgYW1vdW50IG9mIGxpa2VzIGFcbi8vIHBlcnNvbiBoYXMgb24gYm90aCBxdWVzdGlvbnMgdGhleSd2ZSBhc2tlZCBhbmRcbi8vIGNvbW1lbnRzXG4vLyByYXcgcXVlcnk/XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGVhZGVyYm9hcmQoKSB7fVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVlc3Rpb25BbmRDb21tZW50cyhpZDogc3RyaW5nKSB7XG4gIHJldHVybiBwcmlzbWEucXVlc3Rpb24uZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgY29tbWVudHM6IHtcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIGxpa2VzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBjYXRlZ29yeSxcbiAgdXNlcklkLFxufToge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIHByaXNtYS5xdWVzdGlvbi5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBhdXRob3I6IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIGlkOiB1c2VySWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIG5hbWU6IGNhdGVnb3J5LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQoe1xuICBjb250ZW50LFxuICB1c2VySWQsXG4gIHF1ZXN0aW9uSWQsXG59OiB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgdXNlcklkOiBzdHJpbmc7XG4gIHF1ZXN0aW9uSWQ6IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIHByaXNtYS5jb21tZW50LmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgY29udGVudCxcbiAgICAgIGF1dGhvcjoge1xuICAgICAgICBjb25uZWN0OiB7XG4gICAgICAgICAgaWQ6IHVzZXJJZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBxdWVzdGlvbjoge1xuICAgICAgICBjb25uZWN0OiB7XG4gICAgICAgICAgaWQ6IHF1ZXN0aW9uSWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG4vLyBpcyB0aGlzIGV2ZW4gcmlnaHQ/XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUXVlc3Rpb25MaWtlKHtcbiAgcXVlc3Rpb25JZCxcbiAgdXNlcklkLFxufToge1xuICBxdWVzdGlvbklkOiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xufSkge1xuICByZXR1cm4gcHJpc21hLnF1ZXN0aW9uLnVwZGF0ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBxdWVzdGlvbklkLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgbGlrZXM6IHtcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIExpc3QgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBsaW5rczoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGdhcDogXCIxcmVtIDAuNXJlbVwiLFxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgfSxcbiAgbGluazoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnhzLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVs2XSxcbiAgICBwYWRkaW5nOiBcIjhweCAxMnB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpdXMuc20sXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVszXSxcbiAgfSxcbiAgYWN0aXZlTGluazoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZVs3XSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlWzFdLFxuICB9LFxufSkpO1xuXG50eXBlIENhdGVnb3J5UHJvcHMgPSB7XG4gIGNhdGVnb3JpZXM6IENhdGVnb3J5W107XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQ2F0ZWdvcmllcyh7IGNhdGVnb3JpZXMgfTogQ2F0ZWdvcnlQcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMsIGN4IH0gPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0IGxpc3RTdHlsZVR5cGU9XCJub25lXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfT5cbiAgICAgIHtjYXRlZ29yaWVzPy5tYXAoKHsgaWQsIG5hbWUgfSkgPT4gKFxuICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICB0bz17YC9jYXRlZ29yeS8ke25hbWUudG9Mb3dlckNhc2UoKX1gfVxuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT5cbiAgICAgICAgICAgICAgY3goY2xhc3Nlcy5saW5rLCB7IFtjbGFzc2VzLmFjdGl2ZUxpbmtdOiBpc0FjdGl2ZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICApKX1cbiAgICA8L0xpc3Q+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgU29jaWFsc1Byb3ZpZGVyIH0gZnJvbSBcInJlbWl4LWF1dGgtc29jaWFsc1wiO1xuXG5leHBvcnQgdHlwZSBTb2NpYWxCdXR0b25Qcm9wcyA9IHtcbiAgcHJvdmlkZXI6IFNvY2lhbHNQcm92aWRlcjtcbiAgbGFiZWw6IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gU29jaWFsQnV0dG9uKHsgcHJvdmlkZXIsIGxhYmVsLCBjb2xvciB9KSB7XG4gIHJldHVybiAoXG4gICAgPEZvcm0gYWN0aW9uPXtgL2F1dGgvJHtwcm92aWRlcn1gfSBtZXRob2Q9XCJwb3N0XCIgc3R5bGU9e3sgd2lkdGg6IFwiMzAlXCIgfX0+XG4gICAgICA8QnV0dG9uIGNvbG9yPXtjb2xvcn0gdHlwZT1cInN1Ym1pdFwiIGZ1bGxXaWR0aD5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEFjdGlvbkljb24sXG4gIEJveCxcbiAgQ2FyZCxcbiAgY3JlYXRlU3R5bGVzLFxuICBHcm91cCxcbiAgU2ltcGxlR3JpZCxcbiAgVGV4dCxcbiAgVGl0bGUsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IExpbmssIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgRmxhZzIsIEhlYXJ0IH0gZnJvbSBcInRhYmxlci1pY29ucy1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlQWN0aW9uTW9kYWxzIH0gZnJvbSBcIn4vaG9va3MvdXNlQWN0aW9uTW9kYWxzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGNhdGVnb3JpZXM6IHtcbiAgICBtYXJnaW46IFwiMCAtOHB4XCIsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnhsLFxuICB9LFxuICBjYXRlZ29yeToge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZVs1XSxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBib3JkZXI6IGAycHggc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JheVszXX1gLFxuICB9LFxuICBkaXZpZGVyOiB7XG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmdyYXlbMV19YCxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBjYXRlZ29yeSA9IHBhcmFtcy5jYXRlZ29yeTtcbiAgcmV0dXJuIHsgY2F0ZWdvcnkgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5KCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IHJlcG9ydE1vZGFsIH0gPSB1c2VBY3Rpb25Nb2RhbHMoKTtcblxuICByZXR1cm4gKFxuICAgIDxTaW1wbGVHcmlkXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2F0ZWdvcmllc31cbiAgICAgIGNvbHM9ezF9XG4gICAgICBicmVha3BvaW50cz17W1xuICAgICAgICB7IG1pbldpZHRoOiBcInhzXCIsIGNvbHM6IDIgfSxcbiAgICAgICAgeyBtaW5XaWR0aDogXCJsZ1wiLCBjb2xzOiAzIH0sXG4gICAgICBdfVxuICAgID5cbiAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiAyMCB9LCAoXywgaW5kZXgpID0+IChcbiAgICAgICAgPENhcmQgY29tcG9uZW50PVwiYXJ0aWNsZVwiIGtleT17aW5kZXh9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgICAgICA8R3JvdXA+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIHRvPXtgL2NhdGVnb3J5LyR7ZGF0YS5jYXRlZ29yeX1gfVxuICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwibGlua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGF0YS5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgPC9UZXh0PntcIiBcIn1cbiAgICAgICAgICAgICAgJnNpbTt7XCIgXCJ9XG4gICAgICAgICAgICAgIDxUZXh0IHNpemU9XCJ4c1wiIGNvbXBvbmVudD1cInNwYW5cIiBjb2xvcj1cImRpbW1lZFwiPlxuICAgICAgICAgICAgICAgIHBvc3RlZCBieSBudWxmcm9zdFxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxUZXh0IGNvbXBvbmVudD1cInRpbWVcIiBzaXplPVwieHNcIiBtbD1cImF1dG9cIiBjb2xvcj1cImRpbW1lZFwiPlxuICAgICAgICAgICAgICA0IGhvdXJzIGFnb1xuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgPFRpdGxlIG9yZGVyPXs0fSBtdD1cInNtXCI+XG4gICAgICAgICAgICB7ZGF0YS5jYXRlZ29yeX1cbiAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJkaW1tZWRcIiBsaW5lQ2xhbXA9ezJ9PlxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXN0XG4gICAgICAgICAgICAgIGFzcGVyaW9yZXMgbWFnbmFtIGV2ZW5pZXQgcGVyZmVyZW5kaXMgbnVsbGEgbmFtLCBjdXBpZGl0YXRlIGN1bVxuICAgICAgICAgICAgICBpdXJlIHNhZXBlIHByb3ZpZGVudCBtb2xlc3RpYXMgbW9sZXN0aWFlIHBvc3NpbXVzIHF1YW0gaGFydW1cbiAgICAgICAgICAgICAgY29uc2VjdGV0dXIgbm9uIGVsaWdlbmRpIGZhY2lsaXMgb21uaXMuXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxCb3ggY29tcG9uZW50PVwiZm9vdGVyXCIgbXQ9XCJzbVwiPlxuICAgICAgICAgICAgPEdyb3VwIGFsaWduPVwiYmFzZWxpbmVcIiBwb3NpdGlvbj1cImFwYXJ0XCI+XG4gICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJsaW5rXCIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICAgICAgNzggY29tbWVudHNcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8R3JvdXAgc3BhY2luZz1cInhzXCIgYWxpZ249XCJiYXNlbGluZVwiPlxuICAgICAgICAgICAgICAgIDxBY3Rpb25JY29uIGNvbG9yPVwicmVkXCI+XG4gICAgICAgICAgICAgICAgICA8SGVhcnQgc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgICAgICAgPC9BY3Rpb25JY29uPlxuICAgICAgICAgICAgICAgIDxBY3Rpb25JY29uIG9uQ2xpY2s9e3JlcG9ydE1vZGFsfT5cbiAgICAgICAgICAgICAgICAgIDxGbGFnMiBzaXplPXsxNn0gLz5cbiAgICAgICAgICAgICAgICA8L0FjdGlvbkljb24+XG4gICAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICApKX1cbiAgICA8L1NpbXBsZUdyaWQ+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gXCJAbWFudGluZS9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgeyB1c2VNb2RhbHMgfSBmcm9tIFwiQG1hbnRpbmUvbW9kYWxzXCI7XG5pbXBvcnQgeyBSYWRpb0dyb3VwLCBSYWRpbyB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBY3Rpb25Nb2RhbHMoKSB7XG4gIGNvbnN0IG1vZGFscyA9IHVzZU1vZGFscygpO1xuICBjb25zdCByZXBvcnRNb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbHMub3BlbkNvbmZpcm1Nb2RhbCh7XG4gICAgICB0aXRsZTogXCJSZXBvcnQgcG9zdFwiLFxuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICBjaGlsZHJlbjogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIHNlbGVjdCBhIHJlYXNvbiBmb3IgcmVwb3J0aW5nIHRoaXMgcG9zdC5cIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG1iPVwieGxcIlxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cImhhcm1mdWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cImhhcm1mdWxcIiBsYWJlbD1cIkhhcm1mdWwgY29udGVudFwiIC8+XG4gICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJoYXRlXCIgbGFiZWw9XCJIYXRlIHNwZWVjaFwiIC8+XG4gICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJzcGFtXCIgbGFiZWw9XCJTcGFtXCIgLz5cbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cImluY29ycmVjdFwiIGxhYmVsPVwiUG9zdGVkIGluIHRoZSB3cm9uZyBzZWN0aW9uXCIgLz5cbiAgICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICAgIDwvPlxuICAgICAgKSxcbiAgICAgIGxhYmVsczogeyBjb25maXJtOiBcIlJlcG9ydCBwb3N0XCIsIGNhbmNlbDogXCJDYW5jZWxcIiB9LFxuICAgICAgb25DYW5jZWw6ICgpID0+IGNvbnNvbGUubG9nKFwiQ2FuY2VsXCIpLFxuICAgICAgb25Db25maXJtOiAoKSA9PiB7XG4gICAgICAgIHNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICAgIHRpdGxlOiBcIlBvc3QgcmVwb3J0ZWRcIixcbiAgICAgICAgICBtZXNzYWdlOiBcIlRoYW5rIHlvdSBmb3IgcmVwb3J0aW5nIHRoaXMgcG9zdCBhbmQga2VlcGluZyBxdWVyaWUgc2FmZS5cIixcbiAgICAgICAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyByZXBvcnRNb2RhbCB9O1xufVxuIiwgImltcG9ydCB7IEJveCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggbXQ9XCJ4bFwiPlxuICAgICAgPGRpdj50aGlzIGlzIHNvbWV0aGluZzwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBhd2FpdCBhdXRoZW50aWNhdG9yLmxvZ291dChyZXF1ZXN0LCB7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufTtcbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2NhdGVnb3J5XCIpO1xufTtcbiIsICJpbXBvcnQgeyBDb250YWluZXIsIFN0YWNrLCBUZXh0LCBUaXRsZSB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IFNvY2lhbHNQcm92aWRlciB9IGZyb20gXCJyZW1peC1hdXRoLXNvY2lhbHNcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU29jaWFsQnV0dG9uIH0gZnJvbSBcIn4vY29tcG9uZW50cy91aVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIHN1Y2Nlc3NSZWRpcmVjdDogXCIvXCIsXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBtdD1cInhsXCI+XG4gICAgICA8U3RhY2sgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPFRpdGxlIG9yZGVyPXsxfT5Mb2cgaW48L1RpdGxlPlxuICAgICAgICA8VGV4dCBjb2xvcj1cImRpbW1lZFwiIHNpemU9XCJzbVwiPlxuICAgICAgICAgIENvbnRpbnVlIHdpdGggb25lIG9mIHRoZXNlIHByb3ZpZGVyc1xuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxTb2NpYWxCdXR0b25cbiAgICAgICAgICBjb2xvcj1cImluZGlnb1wiXG4gICAgICAgICAgcHJvdmlkZXI9e1NvY2lhbHNQcm92aWRlci5ESVNDT1JEfVxuICAgICAgICAgIGxhYmVsPVwiTG9naW4gd2l0aCBEaXNjb3JkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFNvY2lhbEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICBwcm92aWRlcj17U29jaWFsc1Byb3ZpZGVyLkdPT0dMRX1cbiAgICAgICAgICBsYWJlbD1cIkxvZ2luIHdpdGggR29vZ2xlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFNvY2lhbEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgcHJvdmlkZXI9e1NvY2lhbHNQcm92aWRlci5HSVRIVUJ9XG4gICAgICAgICAgbGFiZWw9XCJMb2dpbiB3aXRoIEdpdGh1YlwiXG4gICAgICAgIC8+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2Y2NmExNzZhJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1RSUhQTVo1Ti5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSVZJT0RMSVEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1aMjJXRDU2My5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZGUkxSWFlILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNlpSTlFNQ1AuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NQ1JTVUVONi5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtTDdRQjZXSkIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUJJNk5MSDNSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSVgyR0FZNTYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC8kcHJvdmlkZXInOnsnaWQnOidyb3V0ZXMvYXV0aC8kcHJvdmlkZXInLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC86cHJvdmlkZXInLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC8kcHJvdmlkZXItUzc0NjJVRk8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTJURFZRVEZGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVlRLS0hNVlAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDY2QVlGNC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrJzp7J2lkJzoncm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvOnByb3ZpZGVyL2NhbGxiYWNrJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLTZSRUszQ0MyLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDY2QVlGNC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jYXRlZ29yeSc6eydpZCc6J3JvdXRlcy9jYXRlZ29yeScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjYXRlZ29yeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jYXRlZ29yeS1DVFRXT0JPSy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5Jzp7J2lkJzoncm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeScsJ3BhcmVudElkJzoncm91dGVzL2NhdGVnb3J5JywncGF0aCc6JzpjYXRlZ29yeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnktM09ESExFRkQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUJJNk5MSDNSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSVgyR0FZNTYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2F0ZWdvcnkvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY2F0ZWdvcnkvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9jYXRlZ29yeScsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jYXRlZ29yeS9pbmRleC02U0hYNU1CSy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSVgyR0FZNTYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUtBVUZRQVVQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0yVERWUVRGRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZUS0tITVZQLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ2luJzp7J2lkJzoncm91dGVzL2xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ2luLTNBMkNaQVY3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1WVEtLSE1WUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ291dCc6eydpZCc6J3JvdXRlcy9sb2dvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9nb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ291dC1IRjNITVVNVC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1g2NkFZRjQuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUY2NkExNzZBLmpzJ307IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9hdXRoLyRwcm92aWRlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2tcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvOnByb3ZpZGVyL2NhbGxiYWNrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoLyRwcm92aWRlclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC8kcHJvdmlkZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC86cHJvdmlkZXJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2NhdGVnb3J5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jYXRlZ29yeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjYXRlZ29yeVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnlcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9jYXRlZ29yeVwiLFxuICAgICAgcGF0aDogXCI6Y2F0ZWdvcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2NhdGVnb3J5L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jYXRlZ29yeS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2NhdGVnb3J5XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9nb3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9nb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9naW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9naW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH1cbiAgfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQ0EsWUFBdUI7OztBQ0R2QjtBQUFBO0FBQUE7QUFBQTtBQUNBLG1CQUE0QjtBQUM1QixvQkFBK0I7QUFDL0IsaUJBQTZDO0FBRTlCLHVCQUNiLFNBQ0Esb0JBQ0EsaUJBQ0EsY0FDQTtBQUNBLFFBQU0sU0FBUyxrQ0FDYixvQ0FBQywwQkFBRDtBQUFBLElBQWEsU0FBUztBQUFBLElBQWMsS0FBSyxRQUFRO0FBQUE7QUFFbkQsa0JBQWdCLElBQUksZ0JBQWdCO0FBRXBDLFNBQU8sSUFBSSxTQUNULGtCQUFrQiw2Q0FBNkIsV0FDL0M7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQTtBQUFBOzs7QUNwQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFPTztBQUNQLG9CQUErQjtBQUMvQiwyQkFBc0M7QUFNdEMsb0JBUU87QUFDUCxvQkFBeUI7OztBQ3hCekIsa0JBY087QUFDUCxtQkFBaUM7QUFDakMsb0JBQXVDO0FBQ3ZDLG9CQUF5QjtBQUN6QixnQ0FTTztBQUVQLElBQU0sWUFBWSw4QkFBYSxDQUFDLFVBQVc7QUFBQSxFQUN6QyxRQUFRO0FBQUEsSUFDTixZQUFZLE1BQU0sUUFBUTtBQUFBLElBQzFCLGlCQUNFLE1B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b0JBQW1CLFdBQVEsT0FBTTs7O0FDWXJyRyxJQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3hCLElBQU0sU0FBUztBQUFBLEVBQ3BCLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosa0NBQWtDO0FBQUEsSUFDOUIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWix5QkFBeUI7QUFBQSxJQUNyQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLG1CQUFtQjtBQUFBLElBQ2YsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWiw2QkFBNkI7QUFBQSxJQUN6QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHlCQUF5QjtBQUFBLElBQ3JCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosaUJBQWlCO0FBQUEsSUFDYixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixnQkFBZ0I7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
