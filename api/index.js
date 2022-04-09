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
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { classes, cx } = useStyles();
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
  }), !((_a = user == null ? void 0 : user.user) == null ? void 0 : _a.profile) && /* @__PURE__ */ React.createElement(import_core.Group, {
    spacing: 20,
    className: classes.links
  }, /* @__PURE__ */ React.createElement(import_core.Anchor, {
    component: import_react2.Link,
    to: "/leaderboard"
  }, "Leaderboard"), /* @__PURE__ */ React.createElement(import_core.Button, {
    component: import_react2.Link,
    to: "/login"
  }, "Login")), ((_b = user == null ? void 0 : user.user) == null ? void 0 : _b.profile) && /* @__PURE__ */ React.createElement(import_core.Group, null, /* @__PURE__ */ React.createElement(import_core.Button, {
    component: import_react2.Link,
    to: "/question/new"
  }, "Ask a question"), /* @__PURE__ */ React.createElement(import_core.Menu, {
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
      src: (_d = (_c = user == null ? void 0 : user.user) == null ? void 0 : _c.profile) == null ? void 0 : _d.image_url,
      alt: (_f = (_e = user == null ? void 0 : user.user) == null ? void 0 : _e.profile) == null ? void 0 : _f.username,
      radius: "xl",
      size: 24
    }), /* @__PURE__ */ React.createElement(import_core.Text, {
      weight: 500,
      size: "sm",
      sx: { lineHeight: 1 },
      mr: 3
    }, (_h = (_g = user == null ? void 0 : user.user) == null ? void 0 : _g.profile) == null ? void 0 : _h.username), /* @__PURE__ */ React.createElement(import_tabler_icons_react.ChevronDown, {
      size: 12
    })))
  }, /* @__PURE__ */ React.createElement(import_core.Menu.Item, {
    component: import_react2.Link,
    to: "/leaderboard",
    icon: /* @__PURE__ */ React.createElement(import_tabler_icons_react.ChartBar, {
      size: 14
    })
  }, "Leaderboard"), /* @__PURE__ */ React.createElement(import_core.Menu.Label, null, "Settings"), /* @__PURE__ */ React.createElement(import_core.Menu.Item, {
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
  }, "Logout"))))));
}

// app/styles/globals.css
var globals_default = "/build/_assets/globals-6ERIYNWR.css";

// app/components/Layout/Footer.tsx
var import_core2 = require("@mantine/core");
var useStyles2 = (0, import_core2.createStyles)((theme) => ({
  footer: {
    marginTop: "auto",
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

// app/db/db.server.ts
var import_client = require("@prisma/client");
var prisma = global.prisma || new import_client.PrismaClient();
if (true)
  global.prisma = prisma;
async function getCategories() {
  return prisma.category.findMany();
}
async function findOrCreateUser(profile) {
  var _a;
  try {
    const user = await prisma.user.upsert({
      where: {
        email: (_a = profile == null ? void 0 : profile.emails[0]) == null ? void 0 : _a.value
      },
      update: {
        username: profile == null ? void 0 : profile.displayName,
        connection: profile == null ? void 0 : profile.provider,
        image_url: profile == null ? void 0 : profile.photos[0].value
      },
      create: {
        email: profile == null ? void 0 : profile.emails[0].value,
        username: profile == null ? void 0 : profile.displayName,
        connection: profile == null ? void 0 : profile.provider,
        image_url: profile == null ? void 0 : profile.photos[0].value
      }
    });
    return {
      profile: user
    };
  } catch (error) {
    console.error(error);
    throw new Response("Server Error", { status: 500 });
  }
}

// app/services/auth.server.ts
var authenticator = new import_remix_auth.Authenticator(sessionStorage, {
  sessionKey: "__session"
});
authenticator.use(new import_remix_auth_socials.GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `http://localhost:3000/auth/${import_remix_auth_socials.SocialsProvider.GOOGLE}/callback`
}, async ({ profile }) => {
  const user = await findOrCreateUser(profile);
  return user;
}));
authenticator.use(new import_remix_auth_socials.DiscordStrategy({
  clientID: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  callbackURL: `http://localhost:3000/auth/${import_remix_auth_socials.SocialsProvider.DISCORD}/callback`
}, async ({ profile }) => {
  const user = await findOrCreateUser(profile);
  return user;
}));
authenticator.use(new import_remix_auth_socials.GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: `http://localhost:3000/auth/${import_remix_auth_socials.SocialsProvider.GITHUB}/callback`
}, async ({ profile }) => {
  const user = await findOrCreateUser(profile);
  return user;
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
  return {
    body: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2],
      display: "flex",
      flexDirection: "column"
    },
    container: {
      width: "100%"
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
    mt: "xl",
    pb: "xl",
    className: classes.container
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

// route:/Users/dane/Desktop/github/react/querie/app/routes/question/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action2,
  default: () => New,
  loader: () => loader4
});
var import_core4 = require("@mantine/core");
var import_node3 = require("@remix-run/node");
var import_react6 = require("@remix-run/react");
var action2 = async ({ request }) => {
  const body = await request.formData();
  const title = body.get("title");
  const description = body.get("description");
  const category = body.get("category");
  const user = await authenticator.isAuthenticated(request);
  console.log(user);
  return {};
};
var loader4 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);
  if (!user) {
    return (0, import_node3.redirect)("/category");
  }
  const categories = await getCategories();
  const categoryNames = categories.map((category) => category.name);
  return { categoryNames };
};
function New() {
  const { categoryNames } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(import_core4.Box, {
    mt: "lg",
    sx: (theme) => ({
      maxWidth: theme.breakpoints.xs,
      margin: "0 auto"
    })
  }, /* @__PURE__ */ React.createElement(import_core4.Title, {
    order: 1,
    align: "left",
    mb: "lg"
  }, "Ask a question"), /* @__PURE__ */ React.createElement(import_core4.Box, {
    component: import_react6.Form,
    method: "post",
    action: ".",
    sx: {
      display: "flex",
      flexDirection: "column"
    }
  }, /* @__PURE__ */ React.createElement(import_core4.TextInput, {
    label: "Title",
    name: "title",
    required: true,
    maxLength: 30,
    mb: "sm"
  }), /* @__PURE__ */ React.createElement(import_core4.Textarea, {
    label: "Description",
    required: true,
    autosize: true,
    minRows: 10,
    placeholder: "What's on your mind?",
    maxLength: 5e3,
    mb: "sm"
  }), /* @__PURE__ */ React.createElement(import_core4.NativeSelect, {
    data: categoryNames,
    label: "Category",
    placeholder: "Choose a category",
    required: true,
    mb: "sm"
  }), /* @__PURE__ */ React.createElement(import_core4.Button, {
    sx: { alignSelf: "flex-end" },
    type: "submit"
  }, "Post question")));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/leaderboard.tsx
var leaderboard_exports = {};
__export(leaderboard_exports, {
  default: () => Leaderboard
});
var import_core5 = require("@mantine/core");
var import_core6 = require("@mantine/core");
var useStyles4 = (0, import_core6.createStyles)((theme) => ({
  rowSelected: {
    backgroundColor: theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2) : theme.colors.gray[2]
  }
}));
function Leaderboard() {
  const data = [
    {
      id: "1",
      avatar: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      name: "Robert Wolfkisser",
      job: "Engineer"
    },
    {
      id: "2",
      avatar: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      name: "Jill Jailbreaker",
      job: "Engineer"
    },
    {
      id: "3",
      avatar: "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      name: "Henry Silkeater",
      job: "Designer"
    },
    {
      id: "4",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      name: "Bill Horsefighter",
      job: "Designer"
    },
    {
      id: "5",
      avatar: "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      name: "Jeremy Footviewer",
      job: "Manager"
    }
  ];
  const { classes, cx } = useStyles4();
  const rows = data.map((item) => {
    return /* @__PURE__ */ React.createElement("tr", {
      key: item.id
    }, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(import_core6.Group, {
      spacing: "sm"
    }, /* @__PURE__ */ React.createElement(import_core6.Avatar, {
      size: 26,
      src: item.avatar,
      radius: 26
    }), /* @__PURE__ */ React.createElement(import_core6.Text, {
      size: "sm",
      weight: 500
    }, item.name))), /* @__PURE__ */ React.createElement("td", null, item.job));
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core5.Title, {
    order: 1
  }, "Leaderboard"), /* @__PURE__ */ React.createElement(import_core6.ScrollArea, null, /* @__PURE__ */ React.createElement(import_core6.Table, {
    sx: { minWidth: 800 },
    verticalSpacing: "sm",
    className: classes.rowSelected
  }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "User"), /* @__PURE__ */ React.createElement("th", null, "Points"))), /* @__PURE__ */ React.createElement("tbody", null, rows))));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category.tsx
var category_exports = {};
__export(category_exports, {
  default: () => Category,
  loader: () => loader5
});
var import_core9 = require("@mantine/core");
var import_react9 = require("@remix-run/react");

// app/components/ui/Categories/Categories.tsx
var import_core7 = require("@mantine/core");
var import_react7 = require("@remix-run/react");
var useStyles5 = (0, import_core7.createStyles)((theme) => ({
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
  const { classes, cx } = useStyles5();
  return /* @__PURE__ */ React.createElement(import_core7.List, {
    listStyleType: "none",
    className: classes.links
  }, categories == null ? void 0 : categories.map(({ id, name }) => /* @__PURE__ */ React.createElement(import_core7.List.Item, null, /* @__PURE__ */ React.createElement(import_react7.NavLink, {
    to: `/category/${name.toLowerCase()}`,
    key: id,
    className: ({ isActive }) => cx(classes.link, { [classes.activeLink]: isActive })
  }, name))));
}

// app/components/ui/SocialButton.tsx
var import_core8 = require("@mantine/core");
var import_react8 = require("@remix-run/react");
function SocialButton({ provider, label, color }) {
  return /* @__PURE__ */ React.createElement(import_react8.Form, {
    action: `/auth/${provider}`,
    method: "post"
  }, /* @__PURE__ */ React.createElement(import_core8.Button, {
    color,
    type: "submit",
    fullWidth: true
  }, label));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category.tsx
var loader5 = async () => {
  const categories = await getCategories();
  return { categories };
};
function Category() {
  const data = (0, import_react9.useLoaderData)();
  const { category } = (0, import_react9.useParams)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core9.Box, {
    component: "nav"
  }, /* @__PURE__ */ React.createElement(import_core9.Title, {
    order: 1,
    mb: "lg"
  }, category ? category : "Latest questions"), /* @__PURE__ */ React.createElement(Categories, {
    categories: data.categories
  })), /* @__PURE__ */ React.createElement(import_react9.Outlet, null));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/$category.tsx
var category_exports2 = {};
__export(category_exports2, {
  default: () => Category2,
  loader: () => loader6
});
var import_core12 = require("@mantine/core");
var import_react11 = require("@remix-run/react");

// app/components/ui/Categories/CategoryCard.tsx
var import_core11 = require("@mantine/core");
var import_react10 = require("@remix-run/react");
var import_tabler_icons_react2 = require("tabler-icons-react");

// app/hooks/useActionModals.tsx
var import_notifications2 = require("@mantine/notifications");
var import_modals2 = require("@mantine/modals");
var import_core10 = require("@mantine/core");
function useActionModals() {
  const modals = (0, import_modals2.useModals)();
  const reportModal = () => {
    modals.openConfirmModal({
      title: "Report post",
      centered: true,
      children: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core10.RadioGroup, {
        orientation: "vertical",
        label: "Please select a reason for reporting this post.",
        required: true,
        mb: "xl",
        size: "sm",
        defaultValue: "harmful"
      }, /* @__PURE__ */ React.createElement(import_core10.Radio, {
        value: "harmful",
        label: "Harmful content"
      }), /* @__PURE__ */ React.createElement(import_core10.Radio, {
        value: "hate",
        label: "Hate speech"
      }), /* @__PURE__ */ React.createElement(import_core10.Radio, {
        value: "spam",
        label: "Spam"
      }), /* @__PURE__ */ React.createElement(import_core10.Radio, {
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

// app/components/ui/Categories/CategoryCard.tsx
var useStyles6 = (0, import_core11.createStyles)((theme) => ({
  category: {
    color: theme.colors.blue[5],
    fontWeight: 700
  },
  card: {
    border: `2px solid ${theme.colors.gray[3]}`
  }
}));
function CategoryCard({ category }) {
  const { reportModal } = useActionModals();
  const { classes } = useStyles6();
  return /* @__PURE__ */ React.createElement(import_core11.Card, {
    component: "article",
    className: classes.card
  }, /* @__PURE__ */ React.createElement(import_core11.Group, null, /* @__PURE__ */ React.createElement(import_core11.Box, null, /* @__PURE__ */ React.createElement(import_core11.Text, {
    to: `/category/${category}`,
    size: "xs",
    component: import_react10.Link,
    className: classes.category,
    variant: "link"
  }, category), " ", "\u223C", " ", /* @__PURE__ */ React.createElement(import_core11.Text, {
    size: "xs",
    component: "span",
    color: "dimmed"
  }, "posted by dane")), /* @__PURE__ */ React.createElement(import_core11.Menu, {
    ml: "auto"
  }, /* @__PURE__ */ React.createElement(import_core11.Menu.Label, null, "Post options"), /* @__PURE__ */ React.createElement(import_core11.Menu.Item, {
    icon: /* @__PURE__ */ React.createElement(import_tabler_icons_react2.Copy, {
      size: 14
    })
  }, "Copy link to post"), /* @__PURE__ */ React.createElement(import_core11.Menu.Item, {
    onClick: reportModal,
    icon: /* @__PURE__ */ React.createElement(import_tabler_icons_react2.Flag2, {
      size: 14
    })
  }, "Report"))), /* @__PURE__ */ React.createElement(import_core11.Title, {
    order: 2,
    my: "sm",
    sx: (theme) => ({
      fontSize: theme.fontSizes.lg
    })
  }, category), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(import_core11.Text, {
    color: "dimmed",
    lineClamp: 2,
    size: "sm"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores magnam eveniet perferendis nulla nam, cupiditate cum iure saepe provident molestias molestiae possimus quam harum consectetur non eligendi facilis omnis.")), /* @__PURE__ */ React.createElement(import_core11.Box, {
    component: "footer",
    mt: "lg"
  }, /* @__PURE__ */ React.createElement(import_core11.Group, {
    align: "baseline",
    position: "apart"
  }, /* @__PURE__ */ React.createElement(import_core11.Text, {
    variant: "link",
    size: "sm"
  }, "78 comments"), /* @__PURE__ */ React.createElement(import_core11.Group, {
    spacing: "xs",
    align: "baseline"
  }, /* @__PURE__ */ React.createElement(import_core11.Text, {
    component: "time",
    size: "xs",
    color: "dimmed"
  }, "4 hours ago")))));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/$category.tsx
var useStyles7 = (0, import_core12.createStyles)((theme) => ({
  categories: {
    margin: `${theme.spacing.xl}px -8px`
  },
  divider: {
    border: `1px solid ${theme.colors.gray[1]}`
  }
}));
var loader6 = async ({ params }) => {
  const category = params.category;
  return { category };
};
function Category2() {
  const data = (0, import_react11.useLoaderData)();
  const { classes } = useStyles7();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core12.SimpleGrid, {
    className: classes.categories,
    cols: 1,
    breakpoints: [
      { minWidth: "xs", cols: 2 },
      { minWidth: "lg", cols: 3 }
    ]
  }, Array.from({ length: 20 }, (_, index) => /* @__PURE__ */ React.createElement(CategoryCard, {
    category: data.category,
    key: index
  }))), /* @__PURE__ */ React.createElement(import_core12.Pagination, {
    total: 10,
    position: "center"
  }));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/index.tsx
var category_exports3 = {};
__export(category_exports3, {
  default: () => Index
});
var import_core13 = require("@mantine/core");
function Index() {
  return /* @__PURE__ */ React.createElement(import_core13.Box, {
    mt: "xl"
  }, /* @__PURE__ */ React.createElement("div", null, "this is something"));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action3
});
var action3 = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/category" });
};

// route:/Users/dane/Desktop/github/react/querie/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader7
});
var import_node4 = require("@remix-run/node");
var loader7 = () => {
  return (0, import_node4.redirect)("/category");
};

// route:/Users/dane/Desktop/github/react/querie/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login,
  loader: () => loader8
});
var import_core14 = require("@mantine/core");
var import_remix_auth_socials2 = require("remix-auth-socials");
var loader8 = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/"
  });
};
function Login() {
  return /* @__PURE__ */ React.createElement(import_core14.Container, {
    mt: "xl",
    size: "lg",
    sx: {
      maxWidth: "300px"
    }
  }, /* @__PURE__ */ React.createElement(import_core14.Stack, {
    align: "stretch"
  }, /* @__PURE__ */ React.createElement(import_core14.Title, {
    order: 1,
    align: "center"
  }, "Log in"), /* @__PURE__ */ React.createElement(import_core14.Text, {
    color: "dimmed",
    size: "sm",
    align: "center"
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
var assets_manifest_default = { "version": "0c5c1ac5", "entry": { "module": "/build/entry.client-AIUHNYII.js", "imports": ["/build/_shared/chunk-PVRR4DGQ.js", "/build/_shared/chunk-3WXMYVAG.js", "/build/_shared/chunk-EI6KMQWI.js", "/build/_shared/chunk-6ZRNQMCP.js", "/build/_shared/chunk-MCRSUEN6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-ZXMAVYP5.js", "imports": ["/build/_shared/chunk-LNYWJRNR.js", "/build/_shared/chunk-ZMXAHPVC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider": { "id": "routes/auth/$provider", "parentId": "root", "path": "auth/:provider", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider-MOPSUT3H.js", "imports": ["/build/_shared/chunk-ACPDH23A.js", "/build/_shared/chunk-K5K66MOD.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider.callback": { "id": "routes/auth/$provider.callback", "parentId": "root", "path": "auth/:provider/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider.callback-6REK3CC2.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category": { "id": "routes/category", "parentId": "root", "path": "category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category-6CPXIVAR.js", "imports": ["/build/_shared/chunk-GSF3UXPE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/$category": { "id": "routes/category/$category", "parentId": "routes/category", "path": ":category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category/$category-OYEZQNGI.js", "imports": ["/build/_shared/chunk-LNYWJRNR.js", "/build/_shared/chunk-ZMXAHPVC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/index": { "id": "routes/category/index", "parentId": "routes/category", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/category/index-XMKUXVYX.js", "imports": ["/build/_shared/chunk-ZMXAHPVC.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-LPKHAQWI.js", "imports": ["/build/_shared/chunk-ACPDH23A.js", "/build/_shared/chunk-K5K66MOD.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/leaderboard": { "id": "routes/leaderboard", "parentId": "root", "path": "leaderboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/leaderboard-H2XFUTUO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-NENTBWX7.js", "imports": ["/build/_shared/chunk-K5K66MOD.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-SWPWOBVX.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/question/new": { "id": "routes/question/new", "parentId": "root", "path": "question/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/question/new-D2WTJL4Y.js", "imports": ["/build/_shared/chunk-ACPDH23A.js", "/build/_shared/chunk-K5K66MOD.js", "/build/_shared/chunk-3X66AYF4.js", "/build/_shared/chunk-GSF3UXPE.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-0C5C1AC5.js" };

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
  "routes/question/new": {
    id: "routes/question/new",
    parentId: "root",
    path: "question/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/leaderboard": {
    id: "routes/leaderboard",
    parentId: "root",
    path: "leaderboard",
    index: void 0,
    caseSensitive: void 0,
    module: leaderboard_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiIsICIuLi9ub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi9kZXYvY29tcGlsZXIvc2hpbXMvcmVhY3QudHMiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyLnRzeCIsICIuLi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyLnRzIiwgIi4uL2FwcC9kYi9kYi5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2sudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9xdWVzdGlvbi9uZXcudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xlYWRlcmJvYXJkLnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9jYXRlZ29yeS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvdWkvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy91aS9Tb2NpYWxCdXR0b24udHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvdWkvQ2F0ZWdvcmllcy9DYXRlZ29yeUNhcmQudHN4IiwgIi4uL2FwcC9ob29rcy91c2VBY3Rpb25Nb2RhbHMudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5L2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgImltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgaW5qZWN0U3R5bGVzSW50b1N0YXRpY01hcmt1cCB9IGZyb20gXCJAbWFudGluZS9zc3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgYDwhRE9DVFlQRSBodG1sPiR7aW5qZWN0U3R5bGVzSW50b1N0YXRpY01hcmt1cChtYXJrdXApfWAsXG4gICAge1xuICAgICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgfVxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEJveCxcbiAgQ29sb3JTY2hlbWUsXG4gIENvbG9yU2NoZW1lUHJvdmlkZXIsXG4gIENvbnRhaW5lcixcbiAgY3JlYXRlU3R5bGVzLFxuICBNYW50aW5lUHJvdmlkZXIsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbHNQcm92aWRlciB9IGZyb20gXCJAbWFudGluZS9tb2RhbHNcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNQcm92aWRlciB9IGZyb20gXCJAbWFudGluZS9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgdHlwZSB7XG4gIExpbmtzRnVuY3Rpb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG59IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTGF5b3V0L05hdmJhclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwifi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3RlclwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiAoe1xuICBjaGFyc2V0OiBcInV0Zi04XCIsXG4gIHRpdGxlOiBcInF1ZXJpZSB8IGFzayB5b3VyIHdpbGRlc3QgcXVlc3Rpb25zXCIsXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgaHJlZjogc3R5bGVzLFxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICB9LFxuICBdO1xufTtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGJvZHk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiXG4gICAgICAgICAgPyB0aGVtZS5jb2xvcnMuZGFya1s2XVxuICAgICAgICAgIDogdGhlbWUuY29sb3JzLmdyYXlbMl0sXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB9LFxuICB9O1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0KTtcbiAgcmV0dXJuIHsgdXNlciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB1c2VyID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8TWFudGluZVRoZW1lPlxuICAgICAgICA8TW9kYWxzUHJvdmlkZXI+XG4gICAgICAgICAgPE5vdGlmaWNhdGlvbnNQcm92aWRlclxuICAgICAgICAgICAgbGltaXQ9ezJ9XG4gICAgICAgICAgICBhdXRvQ2xvc2U9ezMwMDB9XG4gICAgICAgICAgICBwb3NpdGlvbj1cInRvcC1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PVwiYm9keVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fT5cbiAgICAgICAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInhsXCJcbiAgICAgICAgICAgICAgICByb2xlPVwibWFpblwiXG4gICAgICAgICAgICAgICAgbXQ9XCJ4bFwiXG4gICAgICAgICAgICAgICAgcGI9XCJ4bFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgIDxGb290ZXJcbiAgICAgICAgICAgICAgICBsaW5rcz17W1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9udWxmcm9zdC9xdWVyaWVcIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiR2l0aHViXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L05vdGlmaWNhdGlvbnNQcm92aWRlcj5cbiAgICAgICAgPC9Nb2RhbHNQcm92aWRlcj5cbiAgICAgIDwvTWFudGluZVRoZW1lPlxuICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICA8U2NyaXB0cyAvPlxuICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1hbnRpbmVUaGVtZSh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IFtjb2xvclNjaGVtZSwgc2V0Q29sb3JTY2hlbWVdID0gdXNlU3RhdGU8Q29sb3JTY2hlbWU+KFwibGlnaHRcIik7XG4gIGNvbnN0IHRvZ2dsZUNvbG9yU2NoZW1lID0gKHZhbHVlPzogQ29sb3JTY2hlbWUpID0+XG4gICAgc2V0Q29sb3JTY2hlbWUodmFsdWUgfHwgKGNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sb3JTY2hlbWVQcm92aWRlclxuICAgICAgY29sb3JTY2hlbWU9e2NvbG9yU2NoZW1lfVxuICAgICAgdG9nZ2xlQ29sb3JTY2hlbWU9e3RvZ2dsZUNvbG9yU2NoZW1lfVxuICAgID5cbiAgICAgIDxNYW50aW5lUHJvdmlkZXJcbiAgICAgICAgdGhlbWU9e3sgY29sb3JTY2hlbWUgfX1cbiAgICAgICAgd2l0aE5vcm1hbGl6ZUNTU1xuICAgICAgICB3aXRoR2xvYmFsU3R5bGVzXG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTWFudGluZVByb3ZpZGVyPlxuICAgIDwvQ29sb3JTY2hlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBBbmNob3IsXG4gIEF2YXRhcixcbiAgQm94LFxuICBCdXJnZXIsXG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBjcmVhdGVTdHlsZXMsXG4gIERpdmlkZXIsXG4gIEdyb3VwLFxuICBNZW51LFxuICBUZXh0LFxuICBVbnN0eWxlZEJ1dHRvbixcbiAgdXNlTWFudGluZUNvbG9yU2NoZW1lLFxufSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgdXNlQm9vbGVhblRvZ2dsZSB9IGZyb20gXCJAbWFudGluZS9ob29rc1wiO1xuaW1wb3J0IHsgTGluaywgdXNlU3VibWl0IH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBDaGFydEJhcixcbiAgQ2hldnJvbkRvd24sXG4gIEhlYXJ0LFxuICBMb2dvdXQsXG4gIE1lc3NhZ2UsXG4gIE1vb24sXG4gIFNldHRpbmdzLFxuICBTdW4sXG59IGZyb20gXCJ0YWJsZXItaWNvbnMtcmVhY3RcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgaGVhZGVyOiB7XG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCJcbiAgICAgICAgPyB0aGVtZS5jb2xvcnMuZGFya1s2XVxuICAgICAgICA6IHRoZW1lLmNvbG9ycy5ncmF5WzBdLFxuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke1xuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gXCJ0cmFuc3BhcmVudFwiIDogdGhlbWUuY29sb3JzLmdyYXlbMl1cbiAgICB9YCxcbiAgfSxcblxuICBtYWluU2VjdGlvbjoge1xuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG5cbiAgdXNlck1lbnU6IHtcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJ4c1wiKV06IHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0sXG4gIH0sXG5cbiAgdXNlcjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1swXSA6IHRoZW1lLmJsYWNrLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9cHggJHt0aGVtZS5zcGFjaW5nLnNtfXB4YCxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGl1cy5zbSxcbiAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQtY29sb3IgMTAwbXMgZWFzZVwiLFxuXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbOF0gOiB0aGVtZS53aGl0ZSxcbiAgICB9LFxuICB9LFxuXG4gIGJ1cmdlcjoge1xuICAgIFt0aGVtZS5mbi5sYXJnZXJUaGFuKFwieHNcIildOiB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9LFxuICB9LFxuXG4gIHVzZXJBY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1s4XSA6IHRoZW1lLndoaXRlLFxuICB9LFxuICBsaW5rczoge1xuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInhzXCIpXToge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgfSxcbiAgfSxcbiAgbG9nbzoge30sXG59KSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVzZXI6IGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5hdmJhcih7IHVzZXIgfTogUHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc2VzLCBjeCB9ID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvcGVuZWQsIHRvZ2dsZU9wZW5lZF0gPSB1c2VCb29sZWFuVG9nZ2xlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXJNZW51T3BlbmVkLCBzZXRVc2VyTWVudU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xuXG4gIGNvbnN0IHsgY29sb3JTY2hlbWUsIHRvZ2dsZUNvbG9yU2NoZW1lIH0gPSB1c2VNYW50aW5lQ29sb3JTY2hlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY29tcG9uZW50PVwiaGVhZGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluU2VjdGlvbn0gc2l6ZT1cInhsXCI+XG4gICAgICAgIDxHcm91cCBwb3NpdGlvbj1cImFwYXJ0XCI+XG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgIHRvPVwiL2NhdGVnb3J5XCJcbiAgICAgICAgICAgIHdlaWdodD17NzAwfVxuICAgICAgICAgICAgc2l6ZT1cInhsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJncmFkaWVudFwiXG4gICAgICAgICAgICBncmFkaWVudD17eyBmcm9tOiBcImluZGlnb1wiLCB0bzogXCJjeWFuXCIsIGRlZzogNDUgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBxdWVyaWVcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEJ1cmdlclxuICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVPcGVuZWQoKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXJnZXJ9XG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgeyF1c2VyPy51c2VyPy5wcm9maWxlICYmIChcbiAgICAgICAgICAgIDxHcm91cCBzcGFjaW5nPXsyMH0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfT5cbiAgICAgICAgICAgICAgPEFuY2hvciBjb21wb25lbnQ9e0xpbmt9IHRvPVwiL2xlYWRlcmJvYXJkXCI+XG4gICAgICAgICAgICAgICAgTGVhZGVyYm9hcmRcbiAgICAgICAgICAgICAgPC9BbmNob3I+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PXtMaW5rfSB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt1c2VyPy51c2VyPy5wcm9maWxlICYmIChcbiAgICAgICAgICAgIDxHcm91cD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e0xpbmt9IHRvPVwiL3F1ZXN0aW9uL25ld1wiPlxuICAgICAgICAgICAgICAgIEFzayBhIHF1ZXN0aW9uXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgIHNpemU9ezI2MH1cbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJlbmRcIlxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249XCJwb3AtdG9wLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudXNlck1lbnV9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0VXNlck1lbnVPcGVuZWQoZmFsc2UpfVxuICAgICAgICAgICAgICAgIG9uT3Blbj17KCkgPT4gc2V0VXNlck1lbnVPcGVuZWQodHJ1ZSl9XG4gICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICA8VW5zdHlsZWRCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChjbGFzc2VzLnVzZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy51c2VyQWN0aXZlXTogdXNlck1lbnVPcGVuZWQsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8R3JvdXAgc3BhY2luZz17N30+XG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyPy51c2VyPy5wcm9maWxlPy5pbWFnZV91cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3VzZXI/LnVzZXI/LnByb2ZpbGU/LnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzPVwieGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjR9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0PXs1MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbGluZUhlaWdodDogMSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbXI9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXI/LnVzZXI/LnByb2ZpbGU/LnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2hldnJvbkRvd24gc2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8L1Vuc3R5bGVkQnV0dG9uPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgICAgICAgIHRvPVwiL2xlYWRlcmJvYXJkXCJcbiAgICAgICAgICAgICAgICAgIGljb249ezxDaGFydEJhciBzaXplPXsxNH0gLz59XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTGVhZGVyYm9hcmRcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICB7LyogPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgaWNvbj17PEhlYXJ0IHNpemU9ezE0fSBjb2xvcj17dGhlbWUuY29sb3JzLnJlZFs2XX0gLz59XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTGlrZWQgcG9zdHNcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICBpY29uPXs8TWVzc2FnZSBzaXplPXsxNH0gY29sb3I9e3RoZW1lLmNvbG9ycy5ibHVlWzZdfSAvPn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBZb3VyIGNvbW1lbnRzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+ICovfVxuICAgICAgICAgICAgICAgIDxNZW51LkxhYmVsPlNldHRpbmdzPC9NZW51LkxhYmVsPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gaWNvbj17PFNldHRpbmdzIHNpemU9ezE0fSAvPn0+XG4gICAgICAgICAgICAgICAgICBBY2NvdW50IHNldHRpbmdzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQ29sb3JTY2hlbWUoKX1cbiAgICAgICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZSA9PT0gXCJsaWdodFwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxTdW4gc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPE1vb24gc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDdXJyZW50IHRoZW1lOiB7Y29sb3JTY2hlbWV9e1wiIFwifVxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgaWNvbj17PExvZ291dCBzaXplPXsxNH0gLz59XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICBzdWJtaXQobnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIi9sb2dvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvR3JvdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIENvbnRhaW5lciwgR3JvdXAsIEFuY2hvciwgVGl0bGUgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBmb290ZXI6IHtcbiAgICBtYXJnaW5Ub3A6IFwiYXV0b1wiLFxuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke1xuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbNV0gOiB0aGVtZS5jb2xvcnMuZ3JheVsyXVxuICAgIH1gLFxuICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIlxuICAgICAgICA/IHRoZW1lLmNvbG9ycy5kYXJrWzZdXG4gICAgICAgIDogdGhlbWUuY29sb3JzLmdyYXlbMF0sXG4gIH0sXG5cbiAgaW5uZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nLnhsLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcueGwsXG5cbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJ4c1wiKV06IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgfSxcbiAgfSxcblxuICBsaW5rczoge1xuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInhzXCIpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLm1kLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmludGVyZmFjZSBGb290ZXJQcm9wcyB7XG4gIGxpbmtzOiB7IGxpbms6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoeyBsaW5rcyB9OiBGb290ZXJQcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBpdGVtcyA9IGxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgIDxBbmNob3I8XCJhXCI+XG4gICAgICBjb2xvcj1cImRpbW1lZFwiXG4gICAgICBrZXk9e2xpbmsubGFiZWx9XG4gICAgICBocmVmPXtsaW5rLmxpbmt9XG4gICAgICBzaXplPVwic21cIlxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICA+XG4gICAgICB7bGluay5sYWJlbH1cbiAgICA8L0FuY2hvcj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJ9IHNpemU9XCJ4bFwiPlxuICAgICAgICA8VGl0bGUgb3JkZXI9ezN9PnF1ZXJpZTwvVGl0bGU+XG4gICAgICAgIDxHcm91cCBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PntpdGVtc308L0dyb3VwPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gXCJyZW1peC1hdXRoXCI7XG5pbXBvcnQgeyBzZXNzaW9uU3RvcmFnZSB9IGZyb20gXCJ+L3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQge1xuICBHb29nbGVTdHJhdGVneSxcbiAgU29jaWFsc1Byb3ZpZGVyLFxuICBHaXRIdWJTdHJhdGVneSxcbiAgRGlzY29yZFN0cmF0ZWd5LFxufSBmcm9tIFwicmVtaXgtYXV0aC1zb2NpYWxzXCI7XG5pbXBvcnQgeyBmaW5kT3JDcmVhdGVVc2VyIH0gZnJvbSBcIn4vZGIvZGIuc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgYXV0aGVudGljYXRvciA9IG5ldyBBdXRoZW50aWNhdG9yKHNlc3Npb25TdG9yYWdlLCB7XG4gIHNlc3Npb25LZXk6IFwiX19zZXNzaW9uXCIsXG59KTtcblxuYXV0aGVudGljYXRvci51c2UoXG4gIG5ldyBHb29nbGVTdHJhdGVneShcbiAgICB7XG4gICAgICBjbGllbnRJRDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgICBjYWxsYmFja1VSTDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoLyR7U29jaWFsc1Byb3ZpZGVyLkdPT0dMRX0vY2FsbGJhY2tgLFxuICAgIH0sXG4gICAgYXN5bmMgKHsgcHJvZmlsZSB9KSA9PiB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgZmluZE9yQ3JlYXRlVXNlcihwcm9maWxlKTtcblxuICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuICApXG4pO1xuXG5hdXRoZW50aWNhdG9yLnVzZShcbiAgbmV3IERpc2NvcmRTdHJhdGVneShcbiAgICB7XG4gICAgICBjbGllbnRJRDogcHJvY2Vzcy5lbnYuRElTQ09SRF9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGNhbGxiYWNrVVJMOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvJHtTb2NpYWxzUHJvdmlkZXIuRElTQ09SRH0vY2FsbGJhY2tgLFxuICAgIH0sXG4gICAgYXN5bmMgKHsgcHJvZmlsZSB9KSA9PiB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgZmluZE9yQ3JlYXRlVXNlcihwcm9maWxlKTtcblxuICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuICApXG4pO1xuXG5hdXRoZW50aWNhdG9yLnVzZShcbiAgbmV3IEdpdEh1YlN0cmF0ZWd5KFxuICAgIHtcbiAgICAgIGNsaWVudElEOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGNhbGxiYWNrVVJMOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvJHtTb2NpYWxzUHJvdmlkZXIuR0lUSFVCfS9jYWxsYmFja2AsXG4gICAgfSxcbiAgICBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBmaW5kT3JDcmVhdGVVc2VyKHByb2ZpbGUpO1xuXG4gICAgICByZXR1cm4gdXNlcjtcbiAgICB9XG4gIClcbik7XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5cbmV4cG9ydCBsZXQgc2Vzc2lvblN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6IFwiX19zZXNzaW9uXCIsXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjcmV0czogW3Byb2Nlc3MuZW52LkNPT0tJRV9TRUNSRVRdLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBsZXQgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uLCBkZXN0cm95U2Vzc2lvbiB9ID0gc2Vzc2lvblN0b3JhZ2U7XG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQge1xuICBEaXNjb3JkUHJvZmlsZSxcbiAgR2l0SHViUHJvZmlsZSxcbiAgR29vZ2xlUHJvZmlsZSxcbn0gZnJvbSBcInJlbWl4LWF1dGgtc29jaWFsc1wiO1xuXG5pbnRlcmZhY2UgQ3VzdG9tTm9kZUpzR2xvYmFsIGV4dGVuZHMgTm9kZUpTLkdsb2JhbCB7XG4gIHByaXNtYTogUHJpc21hQ2xpZW50O1xufVxuXG5kZWNsYXJlIGNvbnN0IGdsb2JhbDogQ3VzdG9tTm9kZUpzR2xvYmFsO1xuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWwucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzKCkge1xuICByZXR1cm4gcHJpc21hLmNhdGVnb3J5LmZpbmRNYW55KCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMYXRlc3RRdWVzdGlvbnNGb3JDYXRlZ29yeShjYXRlZ29yeT86IHN0cmluZykge1xuICByZXR1cm4gcHJpc21hLnF1ZXN0aW9uLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgbmFtZTogY2F0ZWdvcnkgPz8gXCJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbi8vIEVzc2VudGlhbGx5IEkgd2FudCB0byBzdW0gdGhlIGFtb3VudCBvZiBsaWtlcyBhXG4vLyBwZXJzb24gaGFzIG9uIGJvdGggcXVlc3Rpb25zIHRoZXkndmUgYXNrZWQgYW5kXG4vLyBjb21tZW50c1xuLy8gcmF3IHF1ZXJ5P1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYWRlcmJvYXJkKCkge31cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFF1ZXN0aW9uQW5kQ29tbWVudHMoaWQ6IHN0cmluZykge1xuICByZXR1cm4gcHJpc21hLnF1ZXN0aW9uLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZCxcbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICBsaWtlczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVRdWVzdGlvbih7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgY2F0ZWdvcnksXG4gIHVzZXJJZCxcbn06IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgdXNlcklkOiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiBwcmlzbWEucXVlc3Rpb24uY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICBpZDogdXNlcklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICBuYW1lOiBjYXRlZ29yeSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb21tZW50KHtcbiAgY29udGVudCxcbiAgdXNlcklkLFxuICBxdWVzdGlvbklkLFxufToge1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xuICBxdWVzdGlvbklkOiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiBwcmlzbWEuY29tbWVudC5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICBhdXRob3I6IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIGlkOiB1c2VySWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcXVlc3Rpb246IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIGlkOiBxdWVzdGlvbklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuLy8gaXMgdGhpcyBldmVuIHJpZ2h0P1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uTGlrZSh7XG4gIHF1ZXN0aW9uSWQsXG4gIHVzZXJJZCxcbn06IHtcbiAgcXVlc3Rpb25JZDogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIHByaXNtYS5xdWVzdGlvbi51cGRhdGUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogcXVlc3Rpb25JZCxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxpa2VzOiB7XG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5kT3JDcmVhdGVVc2VyKFxuICBwcm9maWxlOiBHb29nbGVQcm9maWxlIHwgRGlzY29yZFByb2ZpbGUgfCBHaXRIdWJQcm9maWxlXG4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIudXBzZXJ0KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGVtYWlsOiBwcm9maWxlPy5lbWFpbHNbMF0/LnZhbHVlLFxuICAgICAgfSxcbiAgICAgIHVwZGF0ZToge1xuICAgICAgICB1c2VybmFtZTogcHJvZmlsZT8uZGlzcGxheU5hbWUsXG4gICAgICAgIGNvbm5lY3Rpb246IHByb2ZpbGU/LnByb3ZpZGVyLFxuICAgICAgICBpbWFnZV91cmw6IHByb2ZpbGU/LnBob3Rvc1swXS52YWx1ZSxcbiAgICAgIH0sXG4gICAgICBjcmVhdGU6IHtcbiAgICAgICAgZW1haWw6IHByb2ZpbGU/LmVtYWlsc1swXS52YWx1ZSxcbiAgICAgICAgdXNlcm5hbWU6IHByb2ZpbGU/LmRpc3BsYXlOYW1lLFxuICAgICAgICBjb25uZWN0aW9uOiBwcm9maWxlPy5wcm92aWRlcixcbiAgICAgICAgaW1hZ2VfdXJsOiBwcm9maWxlPy5waG90b3NbMF0udmFsdWUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9maWxlOiB1c2VyLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiU2VydmVyIEVycm9yXCIsIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUocGFyYW1zLnByb3ZpZGVyLCByZXF1ZXN0LCB7XG4gICAgc3VjY2Vzc1JlZGlyZWN0OiBcIi9cIixcbiAgICBmYWlsdXJlUmVkaXJlY3Q6IFwiL2xvZ2luXCIsXG4gIH0pO1xufTtcbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUocGFyYW1zLnByb3ZpZGVyLCByZXF1ZXN0KTtcbn07XG4iLCAiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIE5hdGl2ZVNlbGVjdCxcbiAgVGV4dGFyZWEsXG4gIFRleHRJbnB1dCxcbiAgVGl0bGUsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QsIEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgRm9ybSwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVRdWVzdGlvbiwgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gXCJ+L2RiL2RiLnNlcnZlclwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IHRpdGxlID0gYm9keS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gYm9keS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IGNhdGVnb3J5ID0gYm9keS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmc7XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QpO1xuXG4gIC8vYXdhaXQgY3JlYXRlUXVlc3Rpb24oe3RpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIHVzZXJJZDogdXNlcj8ucHJvZmlsZT8uaWR9KVxuXG4gIGNvbnNvbGUubG9nKHVzZXIpO1xuXG4gIHJldHVybiB7fTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0KTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvY2F0ZWdvcnlcIik7XG4gIH1cblxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZ2V0Q2F0ZWdvcmllcygpO1xuXG4gIGNvbnN0IGNhdGVnb3J5TmFtZXMgPSBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm5hbWUpO1xuXG4gIHJldHVybiB7IGNhdGVnb3J5TmFtZXMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ldygpIHtcbiAgY29uc3QgeyBjYXRlZ29yeU5hbWVzIH0gPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBtdD1cImxnXCJcbiAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgIG1heFdpZHRoOiB0aGVtZS5icmVha3BvaW50cy54cyxcbiAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgICAgfSl9XG4gICAgPlxuICAgICAgPFRpdGxlIG9yZGVyPXsxfSBhbGlnbj1cImxlZnRcIiBtYj1cImxnXCI+XG4gICAgICAgIEFzayBhIHF1ZXN0aW9uXG4gICAgICA8L1RpdGxlPlxuICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9e0Zvcm19XG4gICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICBhY3Rpb249XCIuXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VGV4dElucHV0IGxhYmVsPVwiVGl0bGVcIiBuYW1lPVwidGl0bGVcIiByZXF1aXJlZCBtYXhMZW5ndGg9ezMwfSBtYj1cInNtXCIgLz5cbiAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBhdXRvc2l6ZVxuICAgICAgICAgIG1pblJvd3M9ezEwfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCdzIG9uIHlvdXIgbWluZD9cIlxuICAgICAgICAgIG1heExlbmd0aD17NTAwMH1cbiAgICAgICAgICBtYj1cInNtXCJcbiAgICAgICAgLz5cbiAgICAgICAgPE5hdGl2ZVNlbGVjdFxuICAgICAgICAgIGRhdGE9e2NhdGVnb3J5TmFtZXN9XG4gICAgICAgICAgbGFiZWw9XCJDYXRlZ29yeVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSBjYXRlZ29yeVwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBtYj1cInNtXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiBzeD17eyBhbGlnblNlbGY6IFwiZmxleC1lbmRcIiB9fSB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgUG9zdCBxdWVzdGlvblxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IFRpdGxlIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZVN0eWxlcyxcbiAgVGFibGUsXG4gIENoZWNrYm94LFxuICBTY3JvbGxBcmVhLFxuICBHcm91cCxcbiAgQXZhdGFyLFxuICBUZXh0LFxufSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb3dTZWxlY3RlZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIlxuICAgICAgICA/IHRoZW1lLmZuLnJnYmEodGhlbWUuY29sb3JzW3RoZW1lLnByaW1hcnlDb2xvcl1bN10sIDAuMilcbiAgICAgICAgOiB0aGVtZS5jb2xvcnMuZ3JheVsyXSxcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIFRhYmxlU2VsZWN0aW9uUHJvcHMge1xuICBkYXRhOiB7XG4gICAgYXZhdGFyOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgam9iOiBzdHJpbmc7XG4gICAgaWQ6IHN0cmluZztcbiAgfVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWFkZXJib2FyZCgpIHtcbiAgY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICBpZDogXCIxXCIsXG4gICAgICBhdmF0YXI6XG4gICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MjQyOTgzNTc1OTctZmQ5MmRmYmVjMDFkP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yNTAmcT04MFwiLFxuICAgICAgbmFtZTogXCJSb2JlcnQgV29sZmtpc3NlclwiLFxuICAgICAgam9iOiBcIkVuZ2luZWVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCIyXCIsXG4gICAgICBhdmF0YXI6XG4gICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODYyOTcxMzU1MzctOTRiYzliYTA2MGFhP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yNTAmcT04MFwiLFxuICAgICAgbmFtZTogXCJKaWxsIEphaWxicmVha2VyXCIsXG4gICAgICBqb2I6IFwiRW5naW5lZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIjNcIixcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzMjkyMjI2Nzc1Ni05YjcxMjQyYjE1OTI/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI1MCZxPTgwXCIsXG4gICAgICBuYW1lOiBcIkhlbnJ5IFNpbGtlYXRlclwiLFxuICAgICAgam9iOiBcIkRlc2lnbmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCI0XCIsXG4gICAgICBhdmF0YXI6XG4gICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDcwMDMyMTExNjktMGExZGQ3MjI4ZjJkP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yNTAmcT04MFwiLFxuICAgICAgbmFtZTogXCJCaWxsIEhvcnNlZmlnaHRlclwiLFxuICAgICAgam9iOiBcIkRlc2lnbmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCI1XCIsXG4gICAgICBhdmF0YXI6XG4gICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MzA4NDE1MzkyOTMtYmQyMDYzNGM1ZDcyP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yNTAmcT04MFwiLFxuICAgICAgbmFtZTogXCJKZXJlbXkgRm9vdHZpZXdlclwiLFxuICAgICAgam9iOiBcIk1hbmFnZXJcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IHsgY2xhc3NlcywgY3ggfSA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IHJvd3MgPSBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dHIga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxHcm91cCBzcGFjaW5nPVwic21cIj5cbiAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17MjZ9IHNyYz17aXRlbS5hdmF0YXJ9IHJhZGl1cz17MjZ9IC8+XG4gICAgICAgICAgICA8VGV4dCBzaXplPVwic21cIiB3ZWlnaHQ9ezUwMH0+XG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgPC90ZD5cblxuICAgICAgICA8dGQ+e2l0ZW0uam9ifTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGl0bGUgb3JkZXI9ezF9PkxlYWRlcmJvYXJkPC9UaXRsZT5cbiAgICAgIDxTY3JvbGxBcmVhPlxuICAgICAgICA8VGFibGVcbiAgICAgICAgICBzeD17eyBtaW5XaWR0aDogODAwIH19XG4gICAgICAgICAgdmVydGljYWxTcGFjaW5nPVwic21cIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb3dTZWxlY3RlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPlVzZXI8L3RoPlxuICAgICAgICAgICAgICA8dGg+UG9pbnRzPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+e3Jvd3N9PC90Ym9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvU2Nyb2xsQXJlYT5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBCb3gsIFRpdGxlIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgT3V0bGV0LCB1c2VMb2FkZXJEYXRhLCB1c2VQYXJhbXMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gXCJ+L2RiL2RiLnNlcnZlclwiO1xuaW1wb3J0IHsgQ2F0ZWdvcmllcyB9IGZyb20gXCJ+L2NvbXBvbmVudHMvdWlcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBnZXRDYXRlZ29yaWVzKCk7XG4gIHJldHVybiB7IGNhdGVnb3JpZXMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5KCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCB7IGNhdGVnb3J5IH0gPSB1c2VQYXJhbXMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IGNvbXBvbmVudD1cIm5hdlwiPlxuICAgICAgICA8VGl0bGUgb3JkZXI9ezF9IG1iPVwibGdcIj5cbiAgICAgICAgICB7Y2F0ZWdvcnkgPyBjYXRlZ29yeSA6IFwiTGF0ZXN0IHF1ZXN0aW9uc1wifVxuICAgICAgICA8L1RpdGxlPlxuICAgICAgICA8Q2F0ZWdvcmllcyBjYXRlZ29yaWVzPXtkYXRhLmNhdGVnb3JpZXN9IC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIExpc3QgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBsaW5rczoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGdhcDogXCIxcmVtIDAuNXJlbVwiLFxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgfSxcbiAgbGluazoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnhzLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVs2XSxcbiAgICBwYWRkaW5nOiBcIjhweCAxMnB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpdXMuc20sXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVszXSxcbiAgfSxcbiAgYWN0aXZlTGluazoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZVs3XSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlWzFdLFxuICB9LFxufSkpO1xuXG50eXBlIENhdGVnb3J5UHJvcHMgPSB7XG4gIGNhdGVnb3JpZXM6IENhdGVnb3J5W107XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQ2F0ZWdvcmllcyh7IGNhdGVnb3JpZXMgfTogQ2F0ZWdvcnlQcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMsIGN4IH0gPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0IGxpc3RTdHlsZVR5cGU9XCJub25lXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfT5cbiAgICAgIHtjYXRlZ29yaWVzPy5tYXAoKHsgaWQsIG5hbWUgfSkgPT4gKFxuICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICB0bz17YC9jYXRlZ29yeS8ke25hbWUudG9Mb3dlckNhc2UoKX1gfVxuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT5cbiAgICAgICAgICAgICAgY3goY2xhc3Nlcy5saW5rLCB7IFtjbGFzc2VzLmFjdGl2ZUxpbmtdOiBpc0FjdGl2ZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICApKX1cbiAgICA8L0xpc3Q+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgU29jaWFsc1Byb3ZpZGVyIH0gZnJvbSBcInJlbWl4LWF1dGgtc29jaWFsc1wiO1xuXG5leHBvcnQgdHlwZSBTb2NpYWxCdXR0b25Qcm9wcyA9IHtcbiAgcHJvdmlkZXI6IFNvY2lhbHNQcm92aWRlcjtcbiAgbGFiZWw6IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gU29jaWFsQnV0dG9uKHsgcHJvdmlkZXIsIGxhYmVsLCBjb2xvciB9KSB7XG4gIHJldHVybiAoXG4gICAgPEZvcm0gYWN0aW9uPXtgL2F1dGgvJHtwcm92aWRlcn1gfSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICA8QnV0dG9uIGNvbG9yPXtjb2xvcn0gdHlwZT1cInN1Ym1pdFwiIGZ1bGxXaWR0aD5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgUGFnaW5hdGlvbiwgU2ltcGxlR3JpZCwgVGl0bGUgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IENhdGVnb3J5Q2FyZCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvdWkvQ2F0ZWdvcmllc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBjYXRlZ29yaWVzOiB7XG4gICAgbWFyZ2luOiBgJHt0aGVtZS5zcGFjaW5nLnhsfXB4IC04cHhgLFxuICB9LFxuXG4gIGRpdmlkZXI6IHtcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JheVsxXX1gLFxuICB9LFxufSkpO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gcGFyYW1zLmNhdGVnb3J5O1xuICByZXR1cm4geyBjYXRlZ29yeSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNpbXBsZUdyaWRcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhdGVnb3JpZXN9XG4gICAgICAgIGNvbHM9ezF9XG4gICAgICAgIGJyZWFrcG9pbnRzPXtbXG4gICAgICAgICAgeyBtaW5XaWR0aDogXCJ4c1wiLCBjb2xzOiAyIH0sXG4gICAgICAgICAgeyBtaW5XaWR0aDogXCJsZ1wiLCBjb2xzOiAzIH0sXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiAyMCB9LCAoXywgaW5kZXgpID0+IChcbiAgICAgICAgICA8Q2F0ZWdvcnlDYXJkIGNhdGVnb3J5PXtkYXRhLmNhdGVnb3J5fSBrZXk9e2luZGV4fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICAgIDxQYWdpbmF0aW9uIHRvdGFsPXsxMH0gcG9zaXRpb249XCJjZW50ZXJcIiAvPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEFjdGlvbkljb24sXG4gIEJveCxcbiAgQ2FyZCxcbiAgY3JlYXRlU3R5bGVzLFxuICBHcm91cCxcbiAgVGV4dCxcbiAgVGl0bGUsXG4gIE1lbnUsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IEZsYWcyLCBIZWFydCwgQ29weSB9IGZyb20gXCJ0YWJsZXItaWNvbnMtcmVhY3RcIjtcbmltcG9ydCB7IHVzZUFjdGlvbk1vZGFscyB9IGZyb20gXCJ+L2hvb2tzL3VzZUFjdGlvbk1vZGFsc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBjYXRlZ29yeToge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZVs1XSxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBib3JkZXI6IGAycHggc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JheVszXX1gLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2F0ZWdvcnlDYXJkKHsgY2F0ZWdvcnkgfSkge1xuICBjb25zdCB7IHJlcG9ydE1vZGFsIH0gPSB1c2VBY3Rpb25Nb2RhbHMoKTtcblxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY29tcG9uZW50PVwiYXJ0aWNsZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgIDxHcm91cD5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgdG89e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeX1gfVxuICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yeX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJsaW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgICAgPC9UZXh0PntcIiBcIn1cbiAgICAgICAgICAmc2ltO3tcIiBcIn1cbiAgICAgICAgICA8VGV4dCBzaXplPVwieHNcIiBjb21wb25lbnQ9XCJzcGFuXCIgY29sb3I9XCJkaW1tZWRcIj5cbiAgICAgICAgICAgIHBvc3RlZCBieSBkYW5lXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgey8qIDxBY3Rpb25JY29uIGNvbG9yPVwicmVkXCIgbWw9XCJhdXRvXCI+XG4gICAgICAgICAgPEhlYXJ0IHNpemU9ezE2fSAvPlxuICAgICAgICA8L0FjdGlvbkljb24+ICovfVxuICAgICAgICA8TWVudSBtbD1cImF1dG9cIj5cbiAgICAgICAgICA8TWVudS5MYWJlbD5Qb3N0IG9wdGlvbnM8L01lbnUuTGFiZWw+XG4gICAgICAgICAgPE1lbnUuSXRlbSBpY29uPXs8Q29weSBzaXplPXsxNH0gLz59PkNvcHkgbGluayB0byBwb3N0PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXtyZXBvcnRNb2RhbH0gaWNvbj17PEZsYWcyIHNpemU9ezE0fSAvPn0+XG4gICAgICAgICAgICBSZXBvcnRcbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPC9NZW51PlxuICAgICAgPC9Hcm91cD5cbiAgICAgIDxUaXRsZVxuICAgICAgICBvcmRlcj17Mn1cbiAgICAgICAgbXk9XCJzbVwiXG4gICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5sZyxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHtjYXRlZ29yeX1cbiAgICAgIDwvVGl0bGU+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPFRleHQgY29sb3I9XCJkaW1tZWRcIiBsaW5lQ2xhbXA9ezJ9IHNpemU9XCJzbVwiPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFc3RcbiAgICAgICAgICBhc3BlcmlvcmVzIG1hZ25hbSBldmVuaWV0IHBlcmZlcmVuZGlzIG51bGxhIG5hbSwgY3VwaWRpdGF0ZSBjdW0gaXVyZVxuICAgICAgICAgIHNhZXBlIHByb3ZpZGVudCBtb2xlc3RpYXMgbW9sZXN0aWFlIHBvc3NpbXVzIHF1YW0gaGFydW0gY29uc2VjdGV0dXJcbiAgICAgICAgICBub24gZWxpZ2VuZGkgZmFjaWxpcyBvbW5pcy5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPEJveCBjb21wb25lbnQ9XCJmb290ZXJcIiBtdD1cImxnXCI+XG4gICAgICAgIDxHcm91cCBhbGlnbj1cImJhc2VsaW5lXCIgcG9zaXRpb249XCJhcGFydFwiPlxuICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJsaW5rXCIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICA3OCBjb21tZW50c1xuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8R3JvdXAgc3BhY2luZz1cInhzXCIgYWxpZ249XCJiYXNlbGluZVwiPlxuICAgICAgICAgICAgPFRleHQgY29tcG9uZW50PVwidGltZVwiIHNpemU9XCJ4c1wiIGNvbG9yPVwiZGltbWVkXCI+XG4gICAgICAgICAgICAgIDQgaG91cnMgYWdvXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgPC9Hcm91cD5cbiAgICAgIDwvQm94PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSBcIkBtYW50aW5lL25vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB7IHVzZU1vZGFscyB9IGZyb20gXCJAbWFudGluZS9tb2RhbHNcIjtcbmltcG9ydCB7IFJhZGlvR3JvdXAsIFJhZGlvIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGlvbk1vZGFscygpIHtcbiAgY29uc3QgbW9kYWxzID0gdXNlTW9kYWxzKCk7XG4gIGNvbnN0IHJlcG9ydE1vZGFsID0gKCkgPT4ge1xuICAgIG1vZGFscy5vcGVuQ29uZmlybU1vZGFsKHtcbiAgICAgIHRpdGxlOiBcIlJlcG9ydCBwb3N0XCIsXG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIGNoaWxkcmVuOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJQbGVhc2Ugc2VsZWN0IGEgcmVhc29uIGZvciByZXBvcnRpbmcgdGhpcyBwb3N0LlwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbWI9XCJ4bFwiXG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiaGFybWZ1bFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiaGFybWZ1bFwiIGxhYmVsPVwiSGFybWZ1bCBjb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cImhhdGVcIiBsYWJlbD1cIkhhdGUgc3BlZWNoXCIgLz5cbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cInNwYW1cIiBsYWJlbD1cIlNwYW1cIiAvPlxuICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiaW5jb3JyZWN0XCIgbGFiZWw9XCJQb3N0ZWQgaW4gdGhlIHdyb25nIHNlY3Rpb25cIiAvPlxuICAgICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgICAgPC8+XG4gICAgICApLFxuICAgICAgbGFiZWxzOiB7IGNvbmZpcm06IFwiUmVwb3J0IHBvc3RcIiwgY2FuY2VsOiBcIkNhbmNlbFwiIH0sXG4gICAgICBvbkNhbmNlbDogKCkgPT4gY29uc29sZS5sb2coXCJDYW5jZWxcIiksXG4gICAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgdGl0bGU6IFwiUG9zdCByZXBvcnRlZFwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiVGhhbmsgeW91IGZvciByZXBvcnRpbmcgdGhpcyBwb3N0IGFuZCBrZWVwaW5nIHF1ZXJpZSBzYWZlLlwiLFxuICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IHJlcG9ydE1vZGFsIH07XG59XG4iLCAiaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBtdD1cInhsXCI+XG4gICAgICA8ZGl2PnRoaXMgaXMgc29tZXRoaW5nPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSBcIn4vc2VydmljZXMvYXV0aC5zZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGF3YWl0IGF1dGhlbnRpY2F0b3IubG9nb3V0KHJlcXVlc3QsIHsgcmVkaXJlY3RUbzogXCIvY2F0ZWdvcnlcIiB9KTtcbn07XG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdChcIi9jYXRlZ29yeVwiKTtcbn07XG4iLCAiaW1wb3J0IHsgQ29udGFpbmVyLCBTdGFjaywgVGV4dCwgVGl0bGUgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBTb2NpYWxzUHJvdmlkZXIgfSBmcm9tIFwicmVtaXgtYXV0aC1zb2NpYWxzXCI7XG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSBcIn4vc2VydmljZXMvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNvY2lhbEJ1dHRvbiB9IGZyb20gXCJ+L2NvbXBvbmVudHMvdWlcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBzdWNjZXNzUmVkaXJlY3Q6IFwiL1wiLFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJcbiAgICAgIG10PVwieGxcIlxuICAgICAgc2l6ZT1cImxnXCJcbiAgICAgIHN4PXt7XG4gICAgICAgIG1heFdpZHRoOiBcIjMwMHB4XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxTdGFjayBhbGlnbj1cInN0cmV0Y2hcIj5cbiAgICAgICAgPFRpdGxlIG9yZGVyPXsxfSBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIExvZyBpblxuICAgICAgICA8L1RpdGxlPlxuICAgICAgICA8VGV4dCBjb2xvcj1cImRpbW1lZFwiIHNpemU9XCJzbVwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgQ29udGludWUgd2l0aCBvbmUgb2YgdGhlc2UgcHJvdmlkZXJzXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFNvY2lhbEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwiaW5kaWdvXCJcbiAgICAgICAgICBwcm92aWRlcj17U29jaWFsc1Byb3ZpZGVyLkRJU0NPUkR9XG4gICAgICAgICAgbGFiZWw9XCJMb2dpbiB3aXRoIERpc2NvcmRcIlxuICAgICAgICAvPlxuICAgICAgICA8U29jaWFsQnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgIHByb3ZpZGVyPXtTb2NpYWxzUHJvdmlkZXIuR09PR0xFfVxuICAgICAgICAgIGxhYmVsPVwiTG9naW4gd2l0aCBHb29nbGVcIlxuICAgICAgICAvPlxuICAgICAgICA8U29jaWFsQnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICBwcm92aWRlcj17U29jaWFsc1Byb3ZpZGVyLkdJVEhVQn1cbiAgICAgICAgICBsYWJlbD1cIkxvZ2luIHdpdGggR2l0aHViXCJcbiAgICAgICAgLz5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonMGM1YzFhYzUnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUFJVUhOWUlJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1QVlJSNERHUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNXWE1ZVkFHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRUk2S01RV0kuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02WlJOUU1DUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU1DUlNVRU42LmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1aWE1BVllQNS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTE5ZV0pSTlIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1aTVhBSFBWQy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoLyRwcm92aWRlcic6eydpZCc6J3JvdXRlcy9hdXRoLyRwcm92aWRlcicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoLzpwcm92aWRlcicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoLyRwcm92aWRlci1NT1BTVVQzSC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQUNQREgyM0EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LNUs2Nk1PRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2snOnsnaWQnOidyb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2snLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC86cHJvdmlkZXIvY2FsbGJhY2snLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2stNlJFSzNDQzIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NhdGVnb3J5Jzp7J2lkJzoncm91dGVzL2NhdGVnb3J5JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NhdGVnb3J5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NhdGVnb3J5LTZDUFhJVkFSLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HU0YzVVhQRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnknOnsnaWQnOidyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5JywncGFyZW50SWQnOidyb3V0ZXMvY2F0ZWdvcnknLCdwYXRoJzonOmNhdGVnb3J5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS1PWUVaUU5HSS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTE5ZV0pSTlIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1aTVhBSFBWQy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jYXRlZ29yeS9pbmRleCc6eydpZCc6J3JvdXRlcy9jYXRlZ29yeS9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2NhdGVnb3J5JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NhdGVnb3J5L2luZGV4LVhNS1VYVllYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aTVhBSFBWQy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtTFBLSEFRV0kuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUFDUERIMjNBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSzVLNjZNT0QuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhZGVyYm9hcmQnOnsnaWQnOidyb3V0ZXMvbGVhZGVyYm9hcmQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbGVhZGVyYm9hcmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbGVhZGVyYm9hcmQtSDJYRlVUVU8uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbic6eydpZCc6J3JvdXRlcy9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dpbi1ORU5UQldYNy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSzVLNjZNT0QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDY2QVlGNC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dvdXQnOnsnaWQnOidyb3V0ZXMvbG9nb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dvdXQtU1dQV09CVlguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3F1ZXN0aW9uL25ldyc6eydpZCc6J3JvdXRlcy9xdWVzdGlvbi9uZXcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncXVlc3Rpb24vbmV3JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3F1ZXN0aW9uL25ldy1EMldUSkw0WS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQUNQREgyM0EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LNUs2Nk1PRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstR1NGM1VYUEUuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtMEM1QzFBQzUuanMnfTsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2sudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9xdWVzdGlvbi9uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xlYWRlcmJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9jYXRlZ29yeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9jYXRlZ29yeS9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2tcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvOnByb3ZpZGVyL2NhbGxiYWNrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoLyRwcm92aWRlclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC8kcHJvdmlkZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC86cHJvdmlkZXJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3F1ZXN0aW9uL25ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcXVlc3Rpb24vbmV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInF1ZXN0aW9uL25ld1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvbGVhZGVyYm9hcmRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xlYWRlcmJvYXJkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxlYWRlcmJvYXJkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9jYXRlZ29yeVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2F0ZWdvcnlcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY2F0ZWdvcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvY2F0ZWdvcnlcIixcbiAgICAgIHBhdGg6IFwiOmNhdGVnb3J5XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9jYXRlZ29yeS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2F0ZWdvcnkvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9jYXRlZ29yeVwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxl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
