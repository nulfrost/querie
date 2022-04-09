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
  try {
    const user = await prisma.user.upsert({
      where: {
        email: profile == null ? void 0 : profile.emails[0].value
      },
      update: {
        email: profile == null ? void 0 : profile.emails[0].value,
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
    console.log(error);
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
var assets_manifest_default = { "version": "3ec2bc37", "entry": { "module": "/build/entry.client-PUDXDUX3.js", "imports": ["/build/_shared/chunk-PVRR4DGQ.js", "/build/_shared/chunk-3WXMYVAG.js", "/build/_shared/chunk-6FRLRXYH.js", "/build/_shared/chunk-6ZRNQMCP.js", "/build/_shared/chunk-MCRSUEN6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-VZKL4EOT.js", "imports": ["/build/_shared/chunk-DIDBE3HX.js", "/build/_shared/chunk-QG4L5I26.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider": { "id": "routes/auth/$provider", "parentId": "root", "path": "auth/:provider", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider-MOPSUT3H.js", "imports": ["/build/_shared/chunk-ACPDH23A.js", "/build/_shared/chunk-K5K66MOD.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider.callback": { "id": "routes/auth/$provider.callback", "parentId": "root", "path": "auth/:provider/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider.callback-6REK3CC2.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category": { "id": "routes/category", "parentId": "root", "path": "category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category-YPTJE5L4.js", "imports": ["/build/_shared/chunk-GSF3UXPE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/$category": { "id": "routes/category/$category", "parentId": "routes/category", "path": ":category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category/$category-VQ4PUBZS.js", "imports": ["/build/_shared/chunk-DIDBE3HX.js", "/build/_shared/chunk-QG4L5I26.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/index": { "id": "routes/category/index", "parentId": "routes/category", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/category/index-ESEBTXTF.js", "imports": ["/build/_shared/chunk-QG4L5I26.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-LPKHAQWI.js", "imports": ["/build/_shared/chunk-ACPDH23A.js", "/build/_shared/chunk-K5K66MOD.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/leaderboard": { "id": "routes/leaderboard", "parentId": "root", "path": "leaderboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/leaderboard-BPR2V7HV.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-TANQCWS3.js", "imports": ["/build/_shared/chunk-K5K66MOD.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-SWPWOBVX.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/question/new": { "id": "routes/question/new", "parentId": "root", "path": "question/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/question/new-3WSF6NNK.js", "imports": ["/build/_shared/chunk-ACPDH23A.js", "/build/_shared/chunk-K5K66MOD.js", "/build/_shared/chunk-3X66AYF4.js", "/build/_shared/chunk-GSF3UXPE.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-3EC2BC37.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiIsICIuLi9ub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi9kZXYvY29tcGlsZXIvc2hpbXMvcmVhY3QudHMiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyLnRzeCIsICIuLi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyLnRzIiwgIi4uL2FwcC9kYi9kYi5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2sudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9xdWVzdGlvbi9uZXcudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xlYWRlcmJvYXJkLnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9jYXRlZ29yeS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvdWkvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy91aS9Tb2NpYWxCdXR0b24udHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvdWkvQ2F0ZWdvcmllcy9DYXRlZ29yeUNhcmQudHN4IiwgIi4uL2FwcC9ob29rcy91c2VBY3Rpb25Nb2RhbHMudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5L2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgImltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgaW5qZWN0U3R5bGVzSW50b1N0YXRpY01hcmt1cCB9IGZyb20gXCJAbWFudGluZS9zc3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgYDwhRE9DVFlQRSBodG1sPiR7aW5qZWN0U3R5bGVzSW50b1N0YXRpY01hcmt1cChtYXJrdXApfWAsXG4gICAge1xuICAgICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgfVxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEJveCxcbiAgQ29sb3JTY2hlbWUsXG4gIENvbG9yU2NoZW1lUHJvdmlkZXIsXG4gIENvbnRhaW5lcixcbiAgY3JlYXRlU3R5bGVzLFxuICBNYW50aW5lUHJvdmlkZXIsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbHNQcm92aWRlciB9IGZyb20gXCJAbWFudGluZS9tb2RhbHNcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNQcm92aWRlciB9IGZyb20gXCJAbWFudGluZS9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgdHlwZSB7XG4gIExpbmtzRnVuY3Rpb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG59IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTGF5b3V0L05hdmJhclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwifi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3RlclwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiAoe1xuICBjaGFyc2V0OiBcInV0Zi04XCIsXG4gIHRpdGxlOiBcInF1ZXJpZSB8IGFzayB5b3VyIHdpbGRlc3QgcXVlc3Rpb25zXCIsXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgaHJlZjogc3R5bGVzLFxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICB9LFxuICBdO1xufTtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGJvZHk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiXG4gICAgICAgICAgPyB0aGVtZS5jb2xvcnMuZGFya1s2XVxuICAgICAgICAgIDogdGhlbWUuY29sb3JzLmdyYXlbMl0sXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB9LFxuICB9O1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0KTtcbiAgcmV0dXJuIHsgdXNlciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB1c2VyID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8TWFudGluZVRoZW1lPlxuICAgICAgICA8TW9kYWxzUHJvdmlkZXI+XG4gICAgICAgICAgPE5vdGlmaWNhdGlvbnNQcm92aWRlclxuICAgICAgICAgICAgbGltaXQ9ezJ9XG4gICAgICAgICAgICBhdXRvQ2xvc2U9ezMwMDB9XG4gICAgICAgICAgICBwb3NpdGlvbj1cInRvcC1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PVwiYm9keVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fT5cbiAgICAgICAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInhsXCJcbiAgICAgICAgICAgICAgICByb2xlPVwibWFpblwiXG4gICAgICAgICAgICAgICAgbXQ9XCJ4bFwiXG4gICAgICAgICAgICAgICAgcGI9XCJ4bFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgIDxGb290ZXJcbiAgICAgICAgICAgICAgICBsaW5rcz17W1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9udWxmcm9zdC9xdWVyaWVcIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiR2l0aHViXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L05vdGlmaWNhdGlvbnNQcm92aWRlcj5cbiAgICAgICAgPC9Nb2RhbHNQcm92aWRlcj5cbiAgICAgIDwvTWFudGluZVRoZW1lPlxuICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICA8U2NyaXB0cyAvPlxuICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1hbnRpbmVUaGVtZSh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IFtjb2xvclNjaGVtZSwgc2V0Q29sb3JTY2hlbWVdID0gdXNlU3RhdGU8Q29sb3JTY2hlbWU+KFwibGlnaHRcIik7XG4gIGNvbnN0IHRvZ2dsZUNvbG9yU2NoZW1lID0gKHZhbHVlPzogQ29sb3JTY2hlbWUpID0+XG4gICAgc2V0Q29sb3JTY2hlbWUodmFsdWUgfHwgKGNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sb3JTY2hlbWVQcm92aWRlclxuICAgICAgY29sb3JTY2hlbWU9e2NvbG9yU2NoZW1lfVxuICAgICAgdG9nZ2xlQ29sb3JTY2hlbWU9e3RvZ2dsZUNvbG9yU2NoZW1lfVxuICAgID5cbiAgICAgIDxNYW50aW5lUHJvdmlkZXJcbiAgICAgICAgdGhlbWU9e3sgY29sb3JTY2hlbWUgfX1cbiAgICAgICAgd2l0aE5vcm1hbGl6ZUNTU1xuICAgICAgICB3aXRoR2xvYmFsU3R5bGVzXG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTWFudGluZVByb3ZpZGVyPlxuICAgIDwvQ29sb3JTY2hlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBBbmNob3IsXG4gIEF2YXRhcixcbiAgQm94LFxuICBCdXJnZXIsXG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBjcmVhdGVTdHlsZXMsXG4gIERpdmlkZXIsXG4gIEdyb3VwLFxuICBNZW51LFxuICBUZXh0LFxuICBVbnN0eWxlZEJ1dHRvbixcbiAgdXNlTWFudGluZUNvbG9yU2NoZW1lLFxufSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgdXNlQm9vbGVhblRvZ2dsZSB9IGZyb20gXCJAbWFudGluZS9ob29rc1wiO1xuaW1wb3J0IHsgTGluaywgdXNlU3VibWl0IH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBDaGFydEJhcixcbiAgQ2hldnJvbkRvd24sXG4gIEhlYXJ0LFxuICBMb2dvdXQsXG4gIE1lc3NhZ2UsXG4gIE1vb24sXG4gIFNldHRpbmdzLFxuICBTdW4sXG59IGZyb20gXCJ0YWJsZXItaWNvbnMtcmVhY3RcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgaGVhZGVyOiB7XG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCJcbiAgICAgICAgPyB0aGVtZS5jb2xvcnMuZGFya1s2XVxuICAgICAgICA6IHRoZW1lLmNvbG9ycy5ncmF5WzBdLFxuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke1xuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gXCJ0cmFuc3BhcmVudFwiIDogdGhlbWUuY29sb3JzLmdyYXlbMl1cbiAgICB9YCxcbiAgfSxcblxuICBtYWluU2VjdGlvbjoge1xuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG5cbiAgdXNlck1lbnU6IHtcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJ4c1wiKV06IHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0sXG4gIH0sXG5cbiAgdXNlcjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1swXSA6IHRoZW1lLmJsYWNrLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9cHggJHt0aGVtZS5zcGFjaW5nLnNtfXB4YCxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGl1cy5zbSxcbiAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQtY29sb3IgMTAwbXMgZWFzZVwiLFxuXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbOF0gOiB0aGVtZS53aGl0ZSxcbiAgICB9LFxuICB9LFxuXG4gIGJ1cmdlcjoge1xuICAgIFt0aGVtZS5mbi5sYXJnZXJUaGFuKFwieHNcIildOiB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9LFxuICB9LFxuXG4gIHVzZXJBY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1s4XSA6IHRoZW1lLndoaXRlLFxuICB9LFxuICBsaW5rczoge1xuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInhzXCIpXToge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgfSxcbiAgfSxcbiAgbG9nbzoge30sXG59KSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVzZXI6IGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5hdmJhcih7IHVzZXIgfTogUHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc2VzLCBjeCB9ID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvcGVuZWQsIHRvZ2dsZU9wZW5lZF0gPSB1c2VCb29sZWFuVG9nZ2xlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXJNZW51T3BlbmVkLCBzZXRVc2VyTWVudU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xuXG4gIGNvbnN0IHsgY29sb3JTY2hlbWUsIHRvZ2dsZUNvbG9yU2NoZW1lIH0gPSB1c2VNYW50aW5lQ29sb3JTY2hlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY29tcG9uZW50PVwiaGVhZGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluU2VjdGlvbn0gc2l6ZT1cInhsXCI+XG4gICAgICAgIDxHcm91cCBwb3NpdGlvbj1cImFwYXJ0XCI+XG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgIHRvPVwiL2NhdGVnb3J5XCJcbiAgICAgICAgICAgIHdlaWdodD17NzAwfVxuICAgICAgICAgICAgc2l6ZT1cInhsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJncmFkaWVudFwiXG4gICAgICAgICAgICBncmFkaWVudD17eyBmcm9tOiBcImluZGlnb1wiLCB0bzogXCJjeWFuXCIsIGRlZzogNDUgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBxdWVyaWVcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEJ1cmdlclxuICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVPcGVuZWQoKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXJnZXJ9XG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgeyF1c2VyPy51c2VyPy5wcm9maWxlICYmIChcbiAgICAgICAgICAgIDxHcm91cCBzcGFjaW5nPXsyMH0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfT5cbiAgICAgICAgICAgICAgPEFuY2hvciBjb21wb25lbnQ9e0xpbmt9IHRvPVwiL2xlYWRlcmJvYXJkXCI+XG4gICAgICAgICAgICAgICAgTGVhZGVyYm9hcmRcbiAgICAgICAgICAgICAgPC9BbmNob3I+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PXtMaW5rfSB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt1c2VyPy51c2VyPy5wcm9maWxlICYmIChcbiAgICAgICAgICAgIDxHcm91cD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e0xpbmt9IHRvPVwiL3F1ZXN0aW9uL25ld1wiPlxuICAgICAgICAgICAgICAgIEFzayBhIHF1ZXN0aW9uXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgIHNpemU9ezI2MH1cbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJlbmRcIlxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249XCJwb3AtdG9wLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudXNlck1lbnV9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0VXNlck1lbnVPcGVuZWQoZmFsc2UpfVxuICAgICAgICAgICAgICAgIG9uT3Blbj17KCkgPT4gc2V0VXNlck1lbnVPcGVuZWQodHJ1ZSl9XG4gICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICA8VW5zdHlsZWRCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChjbGFzc2VzLnVzZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy51c2VyQWN0aXZlXTogdXNlck1lbnVPcGVuZWQsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8R3JvdXAgc3BhY2luZz17N30+XG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyPy51c2VyPy5wcm9maWxlPy5pbWFnZV91cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3VzZXI/LnVzZXI/LnByb2ZpbGU/LnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzPVwieGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjR9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0PXs1MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbGluZUhlaWdodDogMSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbXI9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXI/LnVzZXI/LnByb2ZpbGU/LnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2hldnJvbkRvd24gc2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8L1Vuc3R5bGVkQnV0dG9uPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgICAgICAgIHRvPVwiL2xlYWRlcmJvYXJkXCJcbiAgICAgICAgICAgICAgICAgIGljb249ezxDaGFydEJhciBzaXplPXsxNH0gLz59XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTGVhZGVyYm9hcmRcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICB7LyogPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgaWNvbj17PEhlYXJ0IHNpemU9ezE0fSBjb2xvcj17dGhlbWUuY29sb3JzLnJlZFs2XX0gLz59XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTGlrZWQgcG9zdHNcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICBpY29uPXs8TWVzc2FnZSBzaXplPXsxNH0gY29sb3I9e3RoZW1lLmNvbG9ycy5ibHVlWzZdfSAvPn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBZb3VyIGNvbW1lbnRzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+ICovfVxuICAgICAgICAgICAgICAgIDxNZW51LkxhYmVsPlNldHRpbmdzPC9NZW51LkxhYmVsPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gaWNvbj17PFNldHRpbmdzIHNpemU9ezE0fSAvPn0+XG4gICAgICAgICAgICAgICAgICBBY2NvdW50IHNldHRpbmdzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQ29sb3JTY2hlbWUoKX1cbiAgICAgICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZSA9PT0gXCJsaWdodFwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxTdW4gc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPE1vb24gc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDdXJyZW50IHRoZW1lOiB7Y29sb3JTY2hlbWV9e1wiIFwifVxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgaWNvbj17PExvZ291dCBzaXplPXsxNH0gLz59XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICBzdWJtaXQobnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIi9sb2dvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvR3JvdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIENvbnRhaW5lciwgR3JvdXAsIEFuY2hvciwgVGl0bGUgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBmb290ZXI6IHtcbiAgICBtYXJnaW5Ub3A6IFwiYXV0b1wiLFxuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke1xuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbNV0gOiB0aGVtZS5jb2xvcnMuZ3JheVsyXVxuICAgIH1gLFxuICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIlxuICAgICAgICA/IHRoZW1lLmNvbG9ycy5kYXJrWzZdXG4gICAgICAgIDogdGhlbWUuY29sb3JzLmdyYXlbMF0sXG4gIH0sXG5cbiAgaW5uZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nLnhsLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcueGwsXG5cbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJ4c1wiKV06IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgfSxcbiAgfSxcblxuICBsaW5rczoge1xuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInhzXCIpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLm1kLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmludGVyZmFjZSBGb290ZXJQcm9wcyB7XG4gIGxpbmtzOiB7IGxpbms6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoeyBsaW5rcyB9OiBGb290ZXJQcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBpdGVtcyA9IGxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgIDxBbmNob3I8XCJhXCI+XG4gICAgICBjb2xvcj1cImRpbW1lZFwiXG4gICAgICBrZXk9e2xpbmsubGFiZWx9XG4gICAgICBocmVmPXtsaW5rLmxpbmt9XG4gICAgICBzaXplPVwic21cIlxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICA+XG4gICAgICB7bGluay5sYWJlbH1cbiAgICA8L0FuY2hvcj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJ9IHNpemU9XCJ4bFwiPlxuICAgICAgICA8VGl0bGUgb3JkZXI9ezN9PnF1ZXJpZTwvVGl0bGU+XG4gICAgICAgIDxHcm91cCBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PntpdGVtc308L0dyb3VwPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gXCJyZW1peC1hdXRoXCI7XG5pbXBvcnQgeyBzZXNzaW9uU3RvcmFnZSB9IGZyb20gXCJ+L3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQge1xuICBHb29nbGVTdHJhdGVneSxcbiAgU29jaWFsc1Byb3ZpZGVyLFxuICBHaXRIdWJTdHJhdGVneSxcbiAgRGlzY29yZFN0cmF0ZWd5LFxufSBmcm9tIFwicmVtaXgtYXV0aC1zb2NpYWxzXCI7XG5pbXBvcnQgeyBmaW5kT3JDcmVhdGVVc2VyIH0gZnJvbSBcIn4vZGIvZGIuc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgYXV0aGVudGljYXRvciA9IG5ldyBBdXRoZW50aWNhdG9yKHNlc3Npb25TdG9yYWdlLCB7XG4gIHNlc3Npb25LZXk6IFwiX19zZXNzaW9uXCIsXG59KTtcblxuYXV0aGVudGljYXRvci51c2UoXG4gIG5ldyBHb29nbGVTdHJhdGVneShcbiAgICB7XG4gICAgICBjbGllbnRJRDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgICBjYWxsYmFja1VSTDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoLyR7U29jaWFsc1Byb3ZpZGVyLkdPT0dMRX0vY2FsbGJhY2tgLFxuICAgIH0sXG4gICAgYXN5bmMgKHsgcHJvZmlsZSB9KSA9PiB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgZmluZE9yQ3JlYXRlVXNlcihwcm9maWxlKTtcblxuICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuICApXG4pO1xuXG5hdXRoZW50aWNhdG9yLnVzZShcbiAgbmV3IERpc2NvcmRTdHJhdGVneShcbiAgICB7XG4gICAgICBjbGllbnRJRDogcHJvY2Vzcy5lbnYuRElTQ09SRF9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGNhbGxiYWNrVVJMOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvJHtTb2NpYWxzUHJvdmlkZXIuRElTQ09SRH0vY2FsbGJhY2tgLFxuICAgIH0sXG4gICAgYXN5bmMgKHsgcHJvZmlsZSB9KSA9PiB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgZmluZE9yQ3JlYXRlVXNlcihwcm9maWxlKTtcblxuICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuICApXG4pO1xuXG5hdXRoZW50aWNhdG9yLnVzZShcbiAgbmV3IEdpdEh1YlN0cmF0ZWd5KFxuICAgIHtcbiAgICAgIGNsaWVudElEOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGNhbGxiYWNrVVJMOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvJHtTb2NpYWxzUHJvdmlkZXIuR0lUSFVCfS9jYWxsYmFja2AsXG4gICAgfSxcbiAgICBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBmaW5kT3JDcmVhdGVVc2VyKHByb2ZpbGUpO1xuXG4gICAgICByZXR1cm4gdXNlcjtcbiAgICB9XG4gIClcbik7XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5cbmV4cG9ydCBsZXQgc2Vzc2lvblN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6IFwiX19zZXNzaW9uXCIsXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjcmV0czogW3Byb2Nlc3MuZW52LkNPT0tJRV9TRUNSRVRdLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBsZXQgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uLCBkZXN0cm95U2Vzc2lvbiB9ID0gc2Vzc2lvblN0b3JhZ2U7XG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQge1xuICBEaXNjb3JkUHJvZmlsZSxcbiAgR2l0SHViUHJvZmlsZSxcbiAgR29vZ2xlUHJvZmlsZSxcbn0gZnJvbSBcInJlbWl4LWF1dGgtc29jaWFsc1wiO1xuXG5pbnRlcmZhY2UgQ3VzdG9tTm9kZUpzR2xvYmFsIGV4dGVuZHMgTm9kZUpTLkdsb2JhbCB7XG4gIHByaXNtYTogUHJpc21hQ2xpZW50O1xufVxuXG5kZWNsYXJlIGNvbnN0IGdsb2JhbDogQ3VzdG9tTm9kZUpzR2xvYmFsO1xuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWwucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzKCkge1xuICByZXR1cm4gcHJpc21hLmNhdGVnb3J5LmZpbmRNYW55KCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMYXRlc3RRdWVzdGlvbnNGb3JDYXRlZ29yeShjYXRlZ29yeT86IHN0cmluZykge1xuICByZXR1cm4gcHJpc21hLnF1ZXN0aW9uLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgbmFtZTogY2F0ZWdvcnkgPz8gXCJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbi8vIEVzc2VudGlhbGx5IEkgd2FudCB0byBzdW0gdGhlIGFtb3VudCBvZiBsaWtlcyBhXG4vLyBwZXJzb24gaGFzIG9uIGJvdGggcXVlc3Rpb25zIHRoZXkndmUgYXNrZWQgYW5kXG4vLyBjb21tZW50c1xuLy8gcmF3IHF1ZXJ5P1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYWRlcmJvYXJkKCkge31cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFF1ZXN0aW9uQW5kQ29tbWVudHMoaWQ6IHN0cmluZykge1xuICByZXR1cm4gcHJpc21hLnF1ZXN0aW9uLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZCxcbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICBsaWtlczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVRdWVzdGlvbih7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgY2F0ZWdvcnksXG4gIHVzZXJJZCxcbn06IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgdXNlcklkOiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiBwcmlzbWEucXVlc3Rpb24uY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICBpZDogdXNlcklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICBuYW1lOiBjYXRlZ29yeSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb21tZW50KHtcbiAgY29udGVudCxcbiAgdXNlcklkLFxuICBxdWVzdGlvbklkLFxufToge1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xuICBxdWVzdGlvbklkOiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiBwcmlzbWEuY29tbWVudC5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICBhdXRob3I6IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIGlkOiB1c2VySWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcXVlc3Rpb246IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIGlkOiBxdWVzdGlvbklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuLy8gaXMgdGhpcyBldmVuIHJpZ2h0P1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uTGlrZSh7XG4gIHF1ZXN0aW9uSWQsXG4gIHVzZXJJZCxcbn06IHtcbiAgcXVlc3Rpb25JZDogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIHByaXNtYS5xdWVzdGlvbi51cGRhdGUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogcXVlc3Rpb25JZCxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxpa2VzOiB7XG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5kT3JDcmVhdGVVc2VyKFxuICBwcm9maWxlOiBHb29nbGVQcm9maWxlIHwgRGlzY29yZFByb2ZpbGUgfCBHaXRIdWJQcm9maWxlXG4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIudXBzZXJ0KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGVtYWlsOiBwcm9maWxlPy5lbWFpbHNbMF0udmFsdWUsXG4gICAgICB9LFxuICAgICAgdXBkYXRlOiB7XG4gICAgICAgIGVtYWlsOiBwcm9maWxlPy5lbWFpbHNbMF0udmFsdWUsXG4gICAgICAgIHVzZXJuYW1lOiBwcm9maWxlPy5kaXNwbGF5TmFtZSxcbiAgICAgICAgY29ubmVjdGlvbjogcHJvZmlsZT8ucHJvdmlkZXIsXG4gICAgICAgIGltYWdlX3VybDogcHJvZmlsZT8ucGhvdG9zWzBdLnZhbHVlLFxuICAgICAgfSxcbiAgICAgIGNyZWF0ZToge1xuICAgICAgICBlbWFpbDogcHJvZmlsZT8uZW1haWxzWzBdLnZhbHVlLFxuICAgICAgICB1c2VybmFtZTogcHJvZmlsZT8uZGlzcGxheU5hbWUsXG4gICAgICAgIGNvbm5lY3Rpb246IHByb2ZpbGU/LnByb3ZpZGVyLFxuICAgICAgICBpbWFnZV91cmw6IHByb2ZpbGU/LnBob3Rvc1swXS52YWx1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2ZpbGU6IHVzZXIsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiU2VydmVyIEVycm9yXCIsIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUocGFyYW1zLnByb3ZpZGVyLCByZXF1ZXN0LCB7XG4gICAgc3VjY2Vzc1JlZGlyZWN0OiBcIi9cIixcbiAgICBmYWlsdXJlUmVkaXJlY3Q6IFwiL2xvZ2luXCIsXG4gIH0pO1xufTtcbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUocGFyYW1zLnByb3ZpZGVyLCByZXF1ZXN0KTtcbn07XG4iLCAiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIE5hdGl2ZVNlbGVjdCxcbiAgVGV4dGFyZWEsXG4gIFRleHRJbnB1dCxcbiAgVGl0bGUsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QsIEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgRm9ybSwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVRdWVzdGlvbiwgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gXCJ+L2RiL2RiLnNlcnZlclwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IHRpdGxlID0gYm9keS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gYm9keS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IGNhdGVnb3J5ID0gYm9keS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmc7XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QpO1xuXG4gIC8vIGF3YWl0IGNyZWF0ZVF1ZXN0aW9uKHt0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCB1c2VySWQ6IHVzZXI/LmlkfSlcblxuICBjb25zb2xlLmxvZyh1c2VyKTtcblxuICByZXR1cm4ge307XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL2NhdGVnb3J5XCIpO1xuICB9XG5cbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGdldENhdGVnb3JpZXMoKTtcblxuICBjb25zdCBjYXRlZ29yeU5hbWVzID0gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5uYW1lKTtcblxuICByZXR1cm4geyBjYXRlZ29yeU5hbWVzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXcoKSB7XG4gIGNvbnN0IHsgY2F0ZWdvcnlOYW1lcyB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgbXQ9XCJsZ1wiXG4gICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICBtYXhXaWR0aDogdGhlbWUuYnJlYWtwb2ludHMueHMsXG4gICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDxUaXRsZSBvcmRlcj17MX0gYWxpZ249XCJsZWZ0XCIgbWI9XCJsZ1wiPlxuICAgICAgICBBc2sgYSBxdWVzdGlvblxuICAgICAgPC9UaXRsZT5cbiAgICAgIDxCb3hcbiAgICAgICAgY29tcG9uZW50PXtGb3JtfVxuICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgYWN0aW9uPVwiLlwiXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFRleHRJbnB1dCBsYWJlbD1cIlRpdGxlXCIgbmFtZT1cInRpdGxlXCIgcmVxdWlyZWQgbWF4TGVuZ3RoPXszMH0gbWI9XCJzbVwiIC8+XG4gICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgYXV0b3NpemVcbiAgICAgICAgICBtaW5Sb3dzPXsxMH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQncyBvbiB5b3VyIG1pbmQ/XCJcbiAgICAgICAgICBtYXhMZW5ndGg9ezUwMDB9XG4gICAgICAgICAgbWI9XCJzbVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxOYXRpdmVTZWxlY3RcbiAgICAgICAgICBkYXRhPXtjYXRlZ29yeU5hbWVzfVxuICAgICAgICAgIGxhYmVsPVwiQ2F0ZWdvcnlcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgY2F0ZWdvcnlcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgbWI9XCJzbVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gc3g9e3sgYWxpZ25TZWxmOiBcImZsZXgtZW5kXCIgfX0gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIFBvc3QgcXVlc3Rpb25cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBUaXRsZSB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQge1xuICBjcmVhdGVTdHlsZXMsXG4gIFRhYmxlLFxuICBDaGVja2JveCxcbiAgU2Nyb2xsQXJlYSxcbiAgR3JvdXAsXG4gIEF2YXRhcixcbiAgVGV4dCxcbn0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm93U2VsZWN0ZWQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCJcbiAgICAgICAgPyB0aGVtZS5mbi5yZ2JhKHRoZW1lLmNvbG9yc1t0aGVtZS5wcmltYXJ5Q29sb3JdWzddLCAwLjIpXG4gICAgICAgIDogdGhlbWUuY29sb3JzLmdyYXlbMl0sXG4gIH0sXG59KSk7XG5cbmludGVyZmFjZSBUYWJsZVNlbGVjdGlvblByb3BzIHtcbiAgZGF0YToge1xuICAgIGF2YXRhcjogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIGpvYjogc3RyaW5nO1xuICAgIGlkOiBzdHJpbmc7XG4gIH1bXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVhZGVyYm9hcmQoKSB7XG4gIGNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgaWQ6IFwiMVwiLFxuICAgICAgYXZhdGFyOlxuICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjI0Mjk4MzU3NTk3LWZkOTJkZmJlYzAxZD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjUwJnE9ODBcIixcbiAgICAgIG5hbWU6IFwiUm9iZXJ0IFdvbGZraXNzZXJcIixcbiAgICAgIGpvYjogXCJFbmdpbmVlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiMlwiLFxuICAgICAgYXZhdGFyOlxuICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTg2Mjk3MTM1NTM3LTk0YmM5YmEwNjBhYT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjUwJnE9ODBcIixcbiAgICAgIG5hbWU6IFwiSmlsbCBKYWlsYnJlYWtlclwiLFxuICAgICAgam9iOiBcIkVuZ2luZWVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCIzXCIsXG4gICAgICBhdmF0YXI6XG4gICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MzI5MjIyNjc3NTYtOWI3MTI0MmIxNTkyP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yNTAmcT04MFwiLFxuICAgICAgbmFtZTogXCJIZW5yeSBTaWxrZWF0ZXJcIixcbiAgICAgIGpvYjogXCJEZXNpZ25lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiNFwiLFxuICAgICAgYXZhdGFyOlxuICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA3MDAzMjExMTY5LTBhMWRkNzIyOGYyZD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjUwJnE9ODBcIixcbiAgICAgIG5hbWU6IFwiQmlsbCBIb3JzZWZpZ2h0ZXJcIixcbiAgICAgIGpvYjogXCJEZXNpZ25lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiNVwiLFxuICAgICAgYXZhdGFyOlxuICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjMwODQxNTM5MjkzLWJkMjA2MzRjNWQ3Mj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjUwJnE9ODBcIixcbiAgICAgIG5hbWU6IFwiSmVyZW15IEZvb3R2aWV3ZXJcIixcbiAgICAgIGpvYjogXCJNYW5hZ2VyXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCB7IGNsYXNzZXMsIGN4IH0gPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCByb3dzID0gZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRyIGtleT17aXRlbS5pZH0+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8R3JvdXAgc3BhY2luZz1cInNtXCI+XG4gICAgICAgICAgICA8QXZhdGFyIHNpemU9ezI2fSBzcmM9e2l0ZW0uYXZhdGFyfSByYWRpdXM9ezI2fSAvPlxuICAgICAgICAgICAgPFRleHQgc2l6ZT1cInNtXCIgd2VpZ2h0PXs1MDB9PlxuICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgIDwvdGQ+XG5cbiAgICAgICAgPHRkPntpdGVtLmpvYn08L3RkPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRpdGxlIG9yZGVyPXsxfT5MZWFkZXJib2FyZDwvVGl0bGU+XG4gICAgICA8U2Nyb2xsQXJlYT5cbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAgc3g9e3sgbWluV2lkdGg6IDgwMCB9fVxuICAgICAgICAgIHZlcnRpY2FsU3BhY2luZz1cInNtXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm93U2VsZWN0ZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5Vc2VyPC90aD5cbiAgICAgICAgICAgICAgPHRoPlBvaW50czwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5Pntyb3dzfTwvdGJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L1Njcm9sbEFyZWE+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQm94LCBUaXRsZSB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IE91dGxldCwgdXNlTG9hZGVyRGF0YSwgdXNlUGFyYW1zIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IGdldENhdGVnb3JpZXMgfSBmcm9tIFwifi9kYi9kYi5zZXJ2ZXJcIjtcbmltcG9ydCB7IENhdGVnb3JpZXMgfSBmcm9tIFwifi9jb21wb25lbnRzL3VpXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZ2V0Q2F0ZWdvcmllcygpO1xuICByZXR1cm4geyBjYXRlZ29yaWVzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeSgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcbiAgY29uc3QgeyBjYXRlZ29yeSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCBjb21wb25lbnQ9XCJuYXZcIj5cbiAgICAgICAgPFRpdGxlIG9yZGVyPXsxfSBtYj1cImxnXCI+XG4gICAgICAgICAge2NhdGVnb3J5ID8gY2F0ZWdvcnkgOiBcIkxhdGVzdCBxdWVzdGlvbnNcIn1cbiAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgPENhdGVnb3JpZXMgY2F0ZWdvcmllcz17ZGF0YS5jYXRlZ29yaWVzfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBMaXN0IH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgbGlua3M6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBnYXA6IFwiMXJlbSAwLjVyZW1cIixcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gIH0sXG4gIGxpbms6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy54cyxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbNl0sXG4gICAgcGFkZGluZzogXCI4cHggMTJweFwiLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUucmFkaXVzLnNtLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbM10sXG4gIH0sXG4gIGFjdGl2ZUxpbms6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsdWVbN10sXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZVsxXSxcbiAgfSxcbn0pKTtcblxudHlwZSBDYXRlZ29yeVByb3BzID0ge1xuICBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIENhdGVnb3JpZXMoeyBjYXRlZ29yaWVzIH06IENhdGVnb3J5UHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc2VzLCBjeCB9ID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdCBsaXN0U3R5bGVUeXBlPVwibm9uZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rc30+XG4gICAgICB7Y2F0ZWdvcmllcz8ubWFwKCh7IGlkLCBuYW1lIH0pID0+IChcbiAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgdG89e2AvY2F0ZWdvcnkvJHtuYW1lLnRvTG93ZXJDYXNlKCl9YH1cbiAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+XG4gICAgICAgICAgICAgIGN4KGNsYXNzZXMubGluaywgeyBbY2xhc3Nlcy5hY3RpdmVMaW5rXTogaXNBY3RpdmUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgKSl9XG4gICAgPC9MaXN0PlxuICApO1xufVxuIiwgImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IFNvY2lhbHNQcm92aWRlciB9IGZyb20gXCJyZW1peC1hdXRoLXNvY2lhbHNcIjtcblxuZXhwb3J0IHR5cGUgU29jaWFsQnV0dG9uUHJvcHMgPSB7XG4gIHByb3ZpZGVyOiBTb2NpYWxzUHJvdmlkZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNvbG9yPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNvY2lhbEJ1dHRvbih7IHByb3ZpZGVyLCBsYWJlbCwgY29sb3IgfSkge1xuICByZXR1cm4gKFxuICAgIDxGb3JtIGFjdGlvbj17YC9hdXRoLyR7cHJvdmlkZXJ9YH0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgPEJ1dHRvbiBjb2xvcj17Y29sb3J9IHR5cGU9XCJzdWJtaXRcIiBmdWxsV2lkdGg+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvRm9ybT5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIFBhZ2luYXRpb24sIFNpbXBsZUdyaWQsIFRpdGxlIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyBDYXRlZ29yeUNhcmQgfSBmcm9tIFwifi9jb21wb25lbnRzL3VpL0NhdGVnb3JpZXNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgY2F0ZWdvcmllczoge1xuICAgIG1hcmdpbjogYCR7dGhlbWUuc3BhY2luZy54bH1weCAtOHB4YCxcbiAgfSxcblxuICBkaXZpZGVyOiB7XG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmdyYXlbMV19YCxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBjYXRlZ29yeSA9IHBhcmFtcy5jYXRlZ29yeTtcbiAgcmV0dXJuIHsgY2F0ZWdvcnkgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5KCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTaW1wbGVHcmlkXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yaWVzfVxuICAgICAgICBjb2xzPXsxfVxuICAgICAgICBicmVha3BvaW50cz17W1xuICAgICAgICAgIHsgbWluV2lkdGg6IFwieHNcIiwgY29sczogMiB9LFxuICAgICAgICAgIHsgbWluV2lkdGg6IFwibGdcIiwgY29sczogMyB9LFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogMjAgfSwgKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPENhdGVnb3J5Q2FyZCBjYXRlZ29yeT17ZGF0YS5jYXRlZ29yeX0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgICA8UGFnaW5hdGlvbiB0b3RhbD17MTB9IHBvc2l0aW9uPVwiY2VudGVyXCIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBBY3Rpb25JY29uLFxuICBCb3gsXG4gIENhcmQsXG4gIGNyZWF0ZVN0eWxlcyxcbiAgR3JvdXAsXG4gIFRleHQsXG4gIFRpdGxlLFxuICBNZW51LFxufSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyBGbGFnMiwgSGVhcnQsIENvcHkgfSBmcm9tIFwidGFibGVyLWljb25zLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBY3Rpb25Nb2RhbHMgfSBmcm9tIFwifi9ob29rcy91c2VBY3Rpb25Nb2RhbHNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgY2F0ZWdvcnk6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsdWVbNV0sXG4gICAgZm9udFdlaWdodDogNzAwLFxuICB9LFxuICBjYXJkOiB7XG4gICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmdyYXlbM119YCxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGZ1bmN0aW9uIENhdGVnb3J5Q2FyZCh7IGNhdGVnb3J5IH0pIHtcbiAgY29uc3QgeyByZXBvcnRNb2RhbCB9ID0gdXNlQWN0aW9uTW9kYWxzKCk7XG5cbiAgY29uc3QgeyBjbGFzc2VzIH0gPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNvbXBvbmVudD1cImFydGljbGVcIiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICA8R3JvdXA+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIHRvPXtgL2NhdGVnb3J5LyR7Y2F0ZWdvcnl9YH1cbiAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2F0ZWdvcnl9XG4gICAgICAgICAgICB2YXJpYW50PVwibGlua1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NhdGVnb3J5fVxuICAgICAgICAgIDwvVGV4dD57XCIgXCJ9XG4gICAgICAgICAgJnNpbTt7XCIgXCJ9XG4gICAgICAgICAgPFRleHQgc2l6ZT1cInhzXCIgY29tcG9uZW50PVwic3BhblwiIGNvbG9yPVwiZGltbWVkXCI+XG4gICAgICAgICAgICBwb3N0ZWQgYnkgZGFuZVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHsvKiA8QWN0aW9uSWNvbiBjb2xvcj1cInJlZFwiIG1sPVwiYXV0b1wiPlxuICAgICAgICAgIDxIZWFydCBzaXplPXsxNn0gLz5cbiAgICAgICAgPC9BY3Rpb25JY29uPiAqL31cbiAgICAgICAgPE1lbnUgbWw9XCJhdXRvXCI+XG4gICAgICAgICAgPE1lbnUuTGFiZWw+UG9zdCBvcHRpb25zPC9NZW51LkxhYmVsPlxuICAgICAgICAgIDxNZW51Lkl0ZW0gaWNvbj17PENvcHkgc2l6ZT17MTR9IC8+fT5Db3B5IGxpbmsgdG8gcG9zdDwvTWVudS5JdGVtPlxuICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17cmVwb3J0TW9kYWx9IGljb249ezxGbGFnMiBzaXplPXsxNH0gLz59PlxuICAgICAgICAgICAgUmVwb3J0XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDwvTWVudT5cbiAgICAgIDwvR3JvdXA+XG4gICAgICA8VGl0bGVcbiAgICAgICAgb3JkZXI9ezJ9XG4gICAgICAgIG15PVwic21cIlxuICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMubGcsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICA8L1RpdGxlPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwiZGltbWVkXCIgbGluZUNsYW1wPXsyfSBzaXplPVwic21cIj5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXN0XG4gICAgICAgICAgYXNwZXJpb3JlcyBtYWduYW0gZXZlbmlldCBwZXJmZXJlbmRpcyBudWxsYSBuYW0sIGN1cGlkaXRhdGUgY3VtIGl1cmVcbiAgICAgICAgICBzYWVwZSBwcm92aWRlbnQgbW9sZXN0aWFzIG1vbGVzdGlhZSBwb3NzaW11cyBxdWFtIGhhcnVtIGNvbnNlY3RldHVyXG4gICAgICAgICAgbm9uIGVsaWdlbmRpIGZhY2lsaXMgb21uaXMuXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwiZm9vdGVyXCIgbXQ9XCJsZ1wiPlxuICAgICAgICA8R3JvdXAgYWxpZ249XCJiYXNlbGluZVwiIHBvc2l0aW9uPVwiYXBhcnRcIj5cbiAgICAgICAgICA8VGV4dCB2YXJpYW50PVwibGlua1wiIHNpemU9XCJzbVwiPlxuICAgICAgICAgICAgNzggY29tbWVudHNcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEdyb3VwIHNwYWNpbmc9XCJ4c1wiIGFsaWduPVwiYmFzZWxpbmVcIj5cbiAgICAgICAgICAgIDxUZXh0IGNvbXBvbmVudD1cInRpbWVcIiBzaXplPVwieHNcIiBjb2xvcj1cImRpbW1lZFwiPlxuICAgICAgICAgICAgICA0IGhvdXJzIGFnb1xuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgIDwvR3JvdXA+XG4gICAgICA8L0JveD5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gXCJAbWFudGluZS9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgeyB1c2VNb2RhbHMgfSBmcm9tIFwiQG1hbnRpbmUvbW9kYWxzXCI7XG5pbXBvcnQgeyBSYWRpb0dyb3VwLCBSYWRpbyB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBY3Rpb25Nb2RhbHMoKSB7XG4gIGNvbnN0IG1vZGFscyA9IHVzZU1vZGFscygpO1xuICBjb25zdCByZXBvcnRNb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbHMub3BlbkNvbmZpcm1Nb2RhbCh7XG4gICAgICB0aXRsZTogXCJSZXBvcnQgcG9zdFwiLFxuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICBjaGlsZHJlbjogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIHNlbGVjdCBhIHJlYXNvbiBmb3IgcmVwb3J0aW5nIHRoaXMgcG9zdC5cIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG1iPVwieGxcIlxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cImhhcm1mdWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cImhhcm1mdWxcIiBsYWJlbD1cIkhhcm1mdWwgY29udGVudFwiIC8+XG4gICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJoYXRlXCIgbGFiZWw9XCJIYXRlIHNwZWVjaFwiIC8+XG4gICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJzcGFtXCIgbGFiZWw9XCJTcGFtXCIgLz5cbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cImluY29ycmVjdFwiIGxhYmVsPVwiUG9zdGVkIGluIHRoZSB3cm9uZyBzZWN0aW9uXCIgLz5cbiAgICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICAgIDwvPlxuICAgICAgKSxcbiAgICAgIGxhYmVsczogeyBjb25maXJtOiBcIlJlcG9ydCBwb3N0XCIsIGNhbmNlbDogXCJDYW5jZWxcIiB9LFxuICAgICAgb25DYW5jZWw6ICgpID0+IGNvbnNvbGUubG9nKFwiQ2FuY2VsXCIpLFxuICAgICAgb25Db25maXJtOiAoKSA9PiB7XG4gICAgICAgIHNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICAgIHRpdGxlOiBcIlBvc3QgcmVwb3J0ZWRcIixcbiAgICAgICAgICBtZXNzYWdlOiBcIlRoYW5rIHlvdSBmb3IgcmVwb3J0aW5nIHRoaXMgcG9zdCBhbmQga2VlcGluZyBxdWVyaWUgc2FmZS5cIixcbiAgICAgICAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyByZXBvcnRNb2RhbCB9O1xufVxuIiwgImltcG9ydCB7IEJveCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggbXQ9XCJ4bFwiPlxuICAgICAgPGRpdj50aGlzIGlzIHNvbWV0aGluZzwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBhd2FpdCBhdXRoZW50aWNhdG9yLmxvZ291dChyZXF1ZXN0LCB7IHJlZGlyZWN0VG86IFwiL2NhdGVnb3J5XCIgfSk7XG59O1xuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gcmVkaXJlY3QoXCIvY2F0ZWdvcnlcIik7XG59O1xuIiwgImltcG9ydCB7IENvbnRhaW5lciwgU3RhY2ssIFRleHQsIFRpdGxlIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgU29jaWFsc1Byb3ZpZGVyIH0gZnJvbSBcInJlbWl4LWF1dGgtc29jaWFsc1wiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTb2NpYWxCdXR0b24gfSBmcm9tIFwifi9jb21wb25lbnRzL3VpXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgc3VjY2Vzc1JlZGlyZWN0OiBcIi9cIixcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyXG4gICAgICBtdD1cInhsXCJcbiAgICAgIHNpemU9XCJsZ1wiXG4gICAgICBzeD17e1xuICAgICAgICBtYXhXaWR0aDogXCIzMDBweFwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8U3RhY2sgYWxpZ249XCJzdHJldGNoXCI+XG4gICAgICAgIDxUaXRsZSBvcmRlcj17MX0gYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICBMb2cgaW5cbiAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgPFRleHQgY29sb3I9XCJkaW1tZWRcIiBzaXplPVwic21cIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIENvbnRpbnVlIHdpdGggb25lIG9mIHRoZXNlIHByb3ZpZGVyc1xuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxTb2NpYWxCdXR0b25cbiAgICAgICAgICBjb2xvcj1cImluZGlnb1wiXG4gICAgICAgICAgcHJvdmlkZXI9e1NvY2lhbHNQcm92aWRlci5ESVNDT1JEfVxuICAgICAgICAgIGxhYmVsPVwiTG9naW4gd2l0aCBEaXNjb3JkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFNvY2lhbEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICBwcm92aWRlcj17U29jaWFsc1Byb3ZpZGVyLkdPT0dMRX1cbiAgICAgICAgICBsYWJlbD1cIkxvZ2luIHdpdGggR29vZ2xlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFNvY2lhbEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgcHJvdmlkZXI9e1NvY2lhbHNQcm92aWRlci5HSVRIVUJ9XG4gICAgICAgICAgbGFiZWw9XCJMb2dpbiB3aXRoIEdpdGh1YlwiXG4gICAgICAgIC8+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzNlYzJiYzM3JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1QVURYRFVYMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUFZSUjRER1EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zV1hNWVZBRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZGUkxSWFlILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNlpSTlFNQ1AuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NQ1JTVUVONi5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtVlpLTDRFT1QuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLURJREJFM0hYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUc0TDVJMjYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC8kcHJvdmlkZXInOnsnaWQnOidyb3V0ZXMvYXV0aC8kcHJvdmlkZXInLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC86cHJvdmlkZXInLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC8kcHJvdmlkZXItTU9QU1VUM0guanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUFDUERIMjNBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSzVLNjZNT0QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDY2QVlGNC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrJzp7J2lkJzoncm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvOnByb3ZpZGVyL2NhbGxiYWNrJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLTZSRUszQ0MyLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDY2QVlGNC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jYXRlZ29yeSc6eydpZCc6J3JvdXRlcy9jYXRlZ29yeScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjYXRlZ29yeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jYXRlZ29yeS1ZUFRKRTVMNC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstR1NGM1VYUEUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5Jzp7J2lkJzoncm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeScsJ3BhcmVudElkJzoncm91dGVzL2NhdGVnb3J5JywncGF0aCc6JzpjYXRlZ29yeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnktVlE0UFVCWlMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLURJREJFM0hYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUc0TDVJMjYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2F0ZWdvcnkvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY2F0ZWdvcnkvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9jYXRlZ29yeScsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jYXRlZ29yeS9pbmRleC1FU0VCVFhURi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUUc0TDVJMjYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUxQS0hBUVdJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1BQ1BESDIzQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUs1SzY2TU9ELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xlYWRlcmJvYXJkJzp7J2lkJzoncm91dGVzL2xlYWRlcmJvYXJkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xlYWRlcmJvYXJkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYWRlcmJvYXJkLUJQUjJWN0hWLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4nOnsnaWQnOidyb3V0ZXMvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9naW4tVEFOUUNXUzMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUs1SzY2TU9ELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1g2NkFZRjQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9nb3V0Jzp7J2lkJzoncm91dGVzL2xvZ291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9nb3V0LVNXUFdPQlZYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDY2QVlGNC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9xdWVzdGlvbi9uZXcnOnsnaWQnOidyb3V0ZXMvcXVlc3Rpb24vbmV3JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3F1ZXN0aW9uL25ldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9xdWVzdGlvbi9uZXctM1dTRjZOTksuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUFDUERIMjNBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSzVLNjZNT0QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDY2QVlGNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdTRjNVWFBFLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTNFQzJCQzM3LmpzJ307IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9hdXRoLyRwcm92aWRlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvcXVlc3Rpb24vbmV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sZWFkZXJib2FyZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dpbi50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoLyRwcm92aWRlci5jYWxsYmFja1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoLzpwcm92aWRlci9jYWxsYmFja1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kcHJvdmlkZXJcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvJHByb3ZpZGVyXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvOnByb3ZpZGVyXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9xdWVzdGlvbi9uZXdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3F1ZXN0aW9uL25ld1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJxdWVzdGlvbi9uZXdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2xlYWRlcmJvYXJkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sZWFkZXJib2FyZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsZWFkZXJib2FyZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2F0ZWdvcnlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NhdGVnb3J5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNhdGVnb3J5XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2NhdGVnb3J5XCIsXG4gICAgICBwYXRoOiBcIjpjYXRlZ29yeVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2F0ZWdvcnkvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NhdGVnb3J5L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvY2F0ZWdvcnlcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9sb2dvdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxu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
