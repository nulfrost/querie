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
  }, "Login")), (user == null ? void 0 : user.user) && /* @__PURE__ */ React.createElement(import_core.Group, null, /* @__PURE__ */ React.createElement(import_core.Button, {
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
    component: import_react2.Link,
    to: "/leaderboard",
    icon: /* @__PURE__ */ React.createElement(import_tabler_icons_react.ChartBar, {
      size: 14,
      color: theme.colors.indigo[6]
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
  default: () => New,
  loader: () => loader4
});
var import_core4 = require("@mantine/core");
var import_node3 = require("@remix-run/node");
var import_react6 = require("@remix-run/react");

// app/db/db.server.ts
var import_client = require("@prisma/client");
var prisma = global.prisma || new import_client.PrismaClient();
if (true)
  global.prisma = prisma;
async function getCategories() {
  return prisma.category.findMany();
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/question/new.tsx
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
    sx: { alignSelf: "flex-end" }
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
    total: 10
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
  action: () => action2
});
var action2 = async ({ request }) => {
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
var assets_manifest_default = { "version": "377da954", "entry": { "module": "/build/entry.client-3MS7AZOV.js", "imports": ["/build/_shared/chunk-IERRTAAB.js", "/build/_shared/chunk-3WXMYVAG.js", "/build/_shared/chunk-6FRLRXYH.js", "/build/_shared/chunk-6ZRNQMCP.js", "/build/_shared/chunk-MCRSUEN6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-5HQQ5OBF.js", "imports": ["/build/_shared/chunk-DIDBE3HX.js", "/build/_shared/chunk-QG4L5I26.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider": { "id": "routes/auth/$provider", "parentId": "root", "path": "auth/:provider", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider-MOPSUT3H.js", "imports": ["/build/_shared/chunk-ACPDH23A.js", "/build/_shared/chunk-K5K66MOD.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider.callback": { "id": "routes/auth/$provider.callback", "parentId": "root", "path": "auth/:provider/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider.callback-6REK3CC2.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category": { "id": "routes/category", "parentId": "root", "path": "category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category-Z2Z35CDY.js", "imports": ["/build/_shared/chunk-GSF3UXPE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/$category": { "id": "routes/category/$category", "parentId": "routes/category", "path": ":category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category/$category-V2OUYNSF.js", "imports": ["/build/_shared/chunk-DIDBE3HX.js", "/build/_shared/chunk-QG4L5I26.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/index": { "id": "routes/category/index", "parentId": "routes/category", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/category/index-ESEBTXTF.js", "imports": ["/build/_shared/chunk-QG4L5I26.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-LPKHAQWI.js", "imports": ["/build/_shared/chunk-ACPDH23A.js", "/build/_shared/chunk-K5K66MOD.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/leaderboard": { "id": "routes/leaderboard", "parentId": "root", "path": "leaderboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/leaderboard-BPR2V7HV.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-VADJZOMF.js", "imports": ["/build/_shared/chunk-K5K66MOD.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-SWPWOBVX.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/question/new": { "id": "routes/question/new", "parentId": "root", "path": "question/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/question/new-N5JZILIF.js", "imports": ["/build/_shared/chunk-ACPDH23A.js", "/build/_shared/chunk-K5K66MOD.js", "/build/_shared/chunk-3X66AYF4.js", "/build/_shared/chunk-GSF3UXPE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-377DA954.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiIsICIuLi9ub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi9kZXYvY29tcGlsZXIvc2hpbXMvcmVhY3QudHMiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyLnRzeCIsICIuLi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9hdXRoLyRwcm92aWRlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvcXVlc3Rpb24vbmV3LnRzeCIsICIuLi9hcHAvZGIvZGIuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xlYWRlcmJvYXJkLnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9jYXRlZ29yeS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvdWkvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy91aS9Tb2NpYWxCdXR0b24udHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvdWkvQ2F0ZWdvcmllcy9DYXRlZ29yeUNhcmQudHN4IiwgIi4uL2FwcC9ob29rcy91c2VBY3Rpb25Nb2RhbHMudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5L2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgImltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgaW5qZWN0U3R5bGVzSW50b1N0YXRpY01hcmt1cCB9IGZyb20gXCJAbWFudGluZS9zc3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgYDwhRE9DVFlQRSBodG1sPiR7aW5qZWN0U3R5bGVzSW50b1N0YXRpY01hcmt1cChtYXJrdXApfWAsXG4gICAge1xuICAgICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgfVxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEJveCxcbiAgQ29sb3JTY2hlbWUsXG4gIENvbG9yU2NoZW1lUHJvdmlkZXIsXG4gIENvbnRhaW5lcixcbiAgY3JlYXRlU3R5bGVzLFxuICBNYW50aW5lUHJvdmlkZXIsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbHNQcm92aWRlciB9IGZyb20gXCJAbWFudGluZS9tb2RhbHNcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNQcm92aWRlciB9IGZyb20gXCJAbWFudGluZS9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgdHlwZSB7XG4gIExpbmtzRnVuY3Rpb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG59IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTGF5b3V0L05hdmJhclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwifi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3RlclwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiAoe1xuICBjaGFyc2V0OiBcInV0Zi04XCIsXG4gIHRpdGxlOiBcInF1ZXJpZSB8IGFzayB5b3VyIHdpbGRlc3QgcXVlc3Rpb25zXCIsXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgaHJlZjogc3R5bGVzLFxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICB9LFxuICBdO1xufTtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGJvZHk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiXG4gICAgICAgICAgPyB0aGVtZS5jb2xvcnMuZGFya1s2XVxuICAgICAgICAgIDogdGhlbWUuY29sb3JzLmdyYXlbMl0sXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB9LFxuICB9O1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0KTtcbiAgcmV0dXJuIHsgdXNlciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB1c2VyID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8TWFudGluZVRoZW1lPlxuICAgICAgICA8TW9kYWxzUHJvdmlkZXI+XG4gICAgICAgICAgPE5vdGlmaWNhdGlvbnNQcm92aWRlclxuICAgICAgICAgICAgbGltaXQ9ezJ9XG4gICAgICAgICAgICBhdXRvQ2xvc2U9ezMwMDB9XG4gICAgICAgICAgICBwb3NpdGlvbj1cInRvcC1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PVwiYm9keVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fT5cbiAgICAgICAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInhsXCJcbiAgICAgICAgICAgICAgICByb2xlPVwibWFpblwiXG4gICAgICAgICAgICAgICAgbXQ9XCJ4bFwiXG4gICAgICAgICAgICAgICAgcGI9XCJ4bFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgIDxGb290ZXJcbiAgICAgICAgICAgICAgICBsaW5rcz17W1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9udWxmcm9zdC9xdWVyaWVcIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiR2l0aHViXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L05vdGlmaWNhdGlvbnNQcm92aWRlcj5cbiAgICAgICAgPC9Nb2RhbHNQcm92aWRlcj5cbiAgICAgIDwvTWFudGluZVRoZW1lPlxuICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICA8U2NyaXB0cyAvPlxuICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1hbnRpbmVUaGVtZSh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IFtjb2xvclNjaGVtZSwgc2V0Q29sb3JTY2hlbWVdID0gdXNlU3RhdGU8Q29sb3JTY2hlbWU+KFwibGlnaHRcIik7XG4gIGNvbnN0IHRvZ2dsZUNvbG9yU2NoZW1lID0gKHZhbHVlPzogQ29sb3JTY2hlbWUpID0+XG4gICAgc2V0Q29sb3JTY2hlbWUodmFsdWUgfHwgKGNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sb3JTY2hlbWVQcm92aWRlclxuICAgICAgY29sb3JTY2hlbWU9e2NvbG9yU2NoZW1lfVxuICAgICAgdG9nZ2xlQ29sb3JTY2hlbWU9e3RvZ2dsZUNvbG9yU2NoZW1lfVxuICAgID5cbiAgICAgIDxNYW50aW5lUHJvdmlkZXJcbiAgICAgICAgdGhlbWU9e3sgY29sb3JTY2hlbWUgfX1cbiAgICAgICAgd2l0aE5vcm1hbGl6ZUNTU1xuICAgICAgICB3aXRoR2xvYmFsU3R5bGVzXG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTWFudGluZVByb3ZpZGVyPlxuICAgIDwvQ29sb3JTY2hlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQnVyZ2VyLFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgY3JlYXRlU3R5bGVzLFxuICBEaXZpZGVyLFxuICBHcm91cCxcbiAgTWVudSxcbiAgVGV4dCxcbiAgVW5zdHlsZWRCdXR0b24sXG4gIHVzZU1hbnRpbmVDb2xvclNjaGVtZSxcbn0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IHVzZUJvb2xlYW5Ub2dnbGUgfSBmcm9tIFwiQG1hbnRpbmUvaG9va3NcIjtcbmltcG9ydCB7IExpbmssIHVzZVN1Ym1pdCB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQ2hhcnRCYXIsXG4gIENoZXZyb25Eb3duLFxuICBIZWFydCxcbiAgTG9nb3V0LFxuICBNZXNzYWdlLFxuICBNb29uLFxuICBTZXR0aW5ncyxcbiAgU3VuLFxufSBmcm9tIFwidGFibGVyLWljb25zLXJlYWN0XCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGhlYWRlcjoge1xuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcuc20sXG4gICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiXG4gICAgICAgID8gdGhlbWUuY29sb3JzLmRhcmtbNl1cbiAgICAgICAgOiB0aGVtZS5jb2xvcnMuZ3JheVswXSxcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IFwidHJhbnNwYXJlbnRcIiA6IHRoZW1lLmNvbG9ycy5ncmF5WzJdXG4gICAgfWAsXG4gIH0sXG5cbiAgbWFpblNlY3Rpb246IHtcbiAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nLnNtLFxuICB9LFxuXG4gIHVzZXJNZW51OiB7XG4gICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKFwieHNcIildOiB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9LFxuICB9LFxuXG4gIHVzZXI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbMF0gOiB0aGVtZS5ibGFjayxcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnhzfXB4ICR7dGhlbWUuc3BhY2luZy5zbX1weGAsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpdXMuc20sXG4gICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGVhc2VcIixcblxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IHRoZW1lLmNvbG9ycy5kYXJrWzhdIDogdGhlbWUud2hpdGUsXG4gICAgfSxcbiAgfSxcblxuICBidXJnZXI6IHtcbiAgICBbdGhlbWUuZm4ubGFyZ2VyVGhhbihcInhzXCIpXToge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgfSxcbiAgfSxcblxuICB1c2VyQWN0aXZlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbOF0gOiB0aGVtZS53aGl0ZSxcbiAgfSxcbiAgbGlua3M6IHtcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJ4c1wiKV06IHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0sXG4gIH0sXG4gIGxvZ286IHt9LFxufSkpO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB1c2VyOiBhbnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOYXZiYXIoeyB1c2VyIH06IFByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgdGhlbWUsIGN4IH0gPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW29wZW5lZCwgdG9nZ2xlT3BlbmVkXSA9IHVzZUJvb2xlYW5Ub2dnbGUoZmFsc2UpO1xuICBjb25zdCBbdXNlck1lbnVPcGVuZWQsIHNldFVzZXJNZW51T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XG5cbiAgY29uc3QgeyBjb2xvclNjaGVtZSwgdG9nZ2xlQ29sb3JTY2hlbWUgfSA9IHVzZU1hbnRpbmVDb2xvclNjaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjb21wb25lbnQ9XCJoZWFkZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5TZWN0aW9ufSBzaXplPVwieGxcIj5cbiAgICAgICAgPEdyb3VwIHBvc2l0aW9uPVwiYXBhcnRcIj5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgICAgdG89XCIvY2F0ZWdvcnlcIlxuICAgICAgICAgICAgd2VpZ2h0PXs3MDB9XG4gICAgICAgICAgICBzaXplPVwieGxcIlxuICAgICAgICAgICAgdmFyaWFudD1cImdyYWRpZW50XCJcbiAgICAgICAgICAgIGdyYWRpZW50PXt7IGZyb206IFwiaW5kaWdvXCIsIHRvOiBcImN5YW5cIiwgZGVnOiA0NSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHF1ZXJpZVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8QnVyZ2VyXG4gICAgICAgICAgICBvcGVuZWQ9e29wZW5lZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU9wZW5lZCgpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1cmdlcn1cbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7IXVzZXI/LnVzZXIgJiYgKFxuICAgICAgICAgICAgPEdyb3VwIHNwYWNpbmc9ezV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rc30+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PXtMaW5rfSB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt1c2VyPy51c2VyICYmIChcbiAgICAgICAgICAgIDxHcm91cD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e0xpbmt9IHRvPVwiL3F1ZXN0aW9uL25ld1wiPlxuICAgICAgICAgICAgICAgIEFzayBhIHF1ZXN0aW9uXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgIHNpemU9ezI2MH1cbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJlbmRcIlxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249XCJwb3AtdG9wLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudXNlck1lbnV9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0VXNlck1lbnVPcGVuZWQoZmFsc2UpfVxuICAgICAgICAgICAgICAgIG9uT3Blbj17KCkgPT4gc2V0VXNlck1lbnVPcGVuZWQodHJ1ZSl9XG4gICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICA8VW5zdHlsZWRCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChjbGFzc2VzLnVzZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy51c2VyQWN0aXZlXTogdXNlck1lbnVPcGVuZWQsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8R3JvdXAgc3BhY2luZz17N30+XG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyPy51c2VyPy5waG90b3NbMF0/LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt1c2VyPy51c2VyPy5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1cz1cInhsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezI0fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodD17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGxpbmVIZWlnaHQ6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1yPXszfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyPy51c2VyPy5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duIHNpemU9ezEyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICAgICAgICAgPC9VbnN0eWxlZEJ1dHRvbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICAgICAgICB0bz1cIi9sZWFkZXJib2FyZFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXs8Q2hhcnRCYXIgc2l6ZT17MTR9IGNvbG9yPXt0aGVtZS5jb2xvcnMuaW5kaWdvWzZdfSAvPn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMZWFkZXJib2FyZFxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIHsvKiA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICBpY29uPXs8SGVhcnQgc2l6ZT17MTR9IGNvbG9yPXt0aGVtZS5jb2xvcnMucmVkWzZdfSAvPn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMaWtlZCBwb3N0c1xuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICAgIGljb249ezxNZXNzYWdlIHNpemU9ezE0fSBjb2xvcj17dGhlbWUuY29sb3JzLmJsdWVbNl19IC8+fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFlvdXIgY29tbWVudHNcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT4gKi99XG4gICAgICAgICAgICAgICAgPE1lbnUuTGFiZWw+U2V0dGluZ3M8L01lbnUuTGFiZWw+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBpY29uPXs8U2V0dGluZ3Mgc2l6ZT17MTR9IC8+fT5cbiAgICAgICAgICAgICAgICAgIEFjY291bnQgc2V0dGluZ3NcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVDb2xvclNjaGVtZSgpfVxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lID09PSBcImxpZ2h0XCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPFN1biBzaXplPXsxNH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8TW9vbiBzaXplPXsxNH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEN1cnJlbnQgdGhlbWU6IHtjb2xvclNjaGVtZX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICBpY29uPXs8TG9nb3V0IHNpemU9ezE0fSAvPn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdChudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiL2xvZ291dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Hcm91cD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgQ29udGFpbmVyLCBHcm91cCwgQW5jaG9yLCBUaXRsZSB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGZvb3Rlcjoge1xuICAgIG1hcmdpblRvcDogXCJhdXRvXCIsXG4gICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1s1XSA6IHRoZW1lLmNvbG9ycy5ncmF5WzJdXG4gICAgfWAsXG4gICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiXG4gICAgICAgID8gdGhlbWUuY29sb3JzLmRhcmtbNl1cbiAgICAgICAgOiB0aGVtZS5jb2xvcnMuZ3JheVswXSxcbiAgfSxcblxuICBpbm5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcueGwsXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZy54bCxcblxuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInhzXCIpXToge1xuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICB9LFxuICB9LFxuXG4gIGxpbmtzOiB7XG4gICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKFwieHNcIildOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIEZvb3RlclByb3BzIHtcbiAgbGlua3M6IHsgbGluazogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZvb3Rlcih7IGxpbmtzIH06IEZvb3RlclByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGl0ZW1zID0gbGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgPEFuY2hvcjxcImFcIj5cbiAgICAgIGNvbG9yPVwiZGltbWVkXCJcbiAgICAgIGtleT17bGluay5sYWJlbH1cbiAgICAgIGhyZWY9e2xpbmsubGlua31cbiAgICAgIHNpemU9XCJzbVwiXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgID5cbiAgICAgIHtsaW5rLmxhYmVsfVxuICAgIDwvQW5jaG9yPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lcn0gc2l6ZT1cInhsXCI+XG4gICAgICAgIDxUaXRsZSBvcmRlcj17M30+cXVlcmllPC9UaXRsZT5cbiAgICAgICAgPEdyb3VwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rc30+e2l0ZW1zfTwvR3JvdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBBdXRoZW50aWNhdG9yIH0gZnJvbSBcInJlbWl4LWF1dGhcIjtcbmltcG9ydCB7IHNlc3Npb25TdG9yYWdlIH0gZnJvbSBcIn4vc2VydmljZXMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7XG4gIEdvb2dsZVN0cmF0ZWd5LFxuICBTb2NpYWxzUHJvdmlkZXIsXG4gIEdpdEh1YlN0cmF0ZWd5LFxuICBEaXNjb3JkU3RyYXRlZ3ksXG59IGZyb20gXCJyZW1peC1hdXRoLXNvY2lhbHNcIjtcblxuZXhwb3J0IGxldCBhdXRoZW50aWNhdG9yID0gbmV3IEF1dGhlbnRpY2F0b3Ioc2Vzc2lvblN0b3JhZ2UsIHtcbiAgc2Vzc2lvbktleTogXCJfX3Nlc3Npb25cIixcbn0pO1xuXG5hdXRoZW50aWNhdG9yLnVzZShcbiAgbmV3IEdvb2dsZVN0cmF0ZWd5KFxuICAgIHtcbiAgICAgIGNsaWVudElEOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGNhbGxiYWNrVVJMOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvJHtTb2NpYWxzUHJvdmlkZXIuR09PR0xFfS9jYWxsYmFja2AsXG4gICAgfSxcbiAgICBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcbiAgICAgIHJldHVybiBwcm9maWxlO1xuICAgIH1cbiAgKVxuKTtcblxuYXV0aGVudGljYXRvci51c2UoXG4gIG5ldyBEaXNjb3JkU3RyYXRlZ3koXG4gICAge1xuICAgICAgY2xpZW50SUQ6IHByb2Nlc3MuZW52LkRJU0NPUkRfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5ESVNDT1JEX0NMSUVOVF9TRUNSRVQsXG4gICAgICBjYWxsYmFja1VSTDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoLyR7U29jaWFsc1Byb3ZpZGVyLkRJU0NPUkR9L2NhbGxiYWNrYCxcbiAgICB9LFxuICAgIGFzeW5jICh7IHByb2ZpbGUgfSkgPT4ge1xuICAgICAgcmV0dXJuIHByb2ZpbGU7XG4gICAgfVxuICApXG4pO1xuXG5hdXRoZW50aWNhdG9yLnVzZShcbiAgbmV3IEdpdEh1YlN0cmF0ZWd5KFxuICAgIHtcbiAgICAgIGNsaWVudElEOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGNhbGxiYWNrVVJMOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvJHtTb2NpYWxzUHJvdmlkZXIuR0lUSFVCfS9jYWxsYmFja2AsXG4gICAgfSxcbiAgICBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcbiAgICAgIHJldHVybiBwcm9maWxlO1xuICAgIH1cbiAgKVxuKTtcbiIsICJpbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcblxuZXhwb3J0IGxldCBzZXNzaW9uU3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogXCJfX3Nlc3Npb25cIixcbiAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBzZWNyZXRzOiBbcHJvY2Vzcy5lbnYuQ09PS0lFX1NFQ1JFVF0sXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGxldCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24sIGRlc3Ryb3lTZXNzaW9uIH0gPSBzZXNzaW9uU3RvcmFnZTtcbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUocGFyYW1zLnByb3ZpZGVyLCByZXF1ZXN0LCB7XG4gICAgc3VjY2Vzc1JlZGlyZWN0OiBcIi9cIixcbiAgICBmYWlsdXJlUmVkaXJlY3Q6IFwiL2xvZ2luXCIsXG4gIH0pO1xufTtcbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUocGFyYW1zLnByb3ZpZGVyLCByZXF1ZXN0KTtcbn07XG4iLCAiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIE5hdGl2ZVNlbGVjdCxcbiAgVGV4dGFyZWEsXG4gIFRleHRJbnB1dCxcbiAgVGl0bGUsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBGb3JtLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IGdldENhdGVnb3JpZXMgfSBmcm9tIFwifi9kYi9kYi5zZXJ2ZXJcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL2NhdGVnb3J5XCIpO1xuICB9XG5cbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGdldENhdGVnb3JpZXMoKTtcblxuICBjb25zdCBjYXRlZ29yeU5hbWVzID0gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5uYW1lKTtcblxuICByZXR1cm4geyBjYXRlZ29yeU5hbWVzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXcoKSB7XG4gIGNvbnN0IHsgY2F0ZWdvcnlOYW1lcyB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgbXQ9XCJsZ1wiXG4gICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICBtYXhXaWR0aDogdGhlbWUuYnJlYWtwb2ludHMueHMsXG4gICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDxUaXRsZSBvcmRlcj17MX0gYWxpZ249XCJsZWZ0XCIgbWI9XCJsZ1wiPlxuICAgICAgICBBc2sgYSBxdWVzdGlvblxuICAgICAgPC9UaXRsZT5cbiAgICAgIDxCb3hcbiAgICAgICAgY29tcG9uZW50PXtGb3JtfVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxUZXh0SW5wdXQgbGFiZWw9XCJUaXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHJlcXVpcmVkIG1heExlbmd0aD17MzB9IG1iPVwic21cIiAvPlxuICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIGF1dG9zaXplXG4gICAgICAgICAgbWluUm93cz17MTB9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0J3Mgb24geW91ciBtaW5kP1wiXG4gICAgICAgICAgbWF4TGVuZ3RoPXs1MDAwfVxuICAgICAgICAgIG1iPVwic21cIlxuICAgICAgICAvPlxuICAgICAgICA8TmF0aXZlU2VsZWN0XG4gICAgICAgICAgZGF0YT17Y2F0ZWdvcnlOYW1lc31cbiAgICAgICAgICBsYWJlbD1cIkNhdGVnb3J5XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBhIGNhdGVnb3J5XCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIG1iPVwic21cIlxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIHN4PXt7IGFsaWduU2VsZjogXCJmbGV4LWVuZFwiIH19PlBvc3QgcXVlc3Rpb248L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5pbnRlcmZhY2UgQ3VzdG9tTm9kZUpzR2xvYmFsIGV4dGVuZHMgTm9kZUpTLkdsb2JhbCB7XG4gIHByaXNtYTogUHJpc21hQ2xpZW50O1xufVxuXG5kZWNsYXJlIGNvbnN0IGdsb2JhbDogQ3VzdG9tTm9kZUpzR2xvYmFsO1xuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWwucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzKCkge1xuICByZXR1cm4gcHJpc21hLmNhdGVnb3J5LmZpbmRNYW55KCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMYXRlc3RRdWVzdGlvbnNGb3JDYXRlZ29yeShjYXRlZ29yeT86IHN0cmluZykge1xuICByZXR1cm4gcHJpc21hLnF1ZXN0aW9uLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgbmFtZTogY2F0ZWdvcnkgPz8gXCJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbi8vIEVzc2VudGlhbGx5IEkgd2FudCB0byBzdW0gdGhlIGFtb3VudCBvZiBsaWtlcyBhXG4vLyBwZXJzb24gaGFzIG9uIGJvdGggcXVlc3Rpb25zIHRoZXkndmUgYXNrZWQgYW5kXG4vLyBjb21tZW50c1xuLy8gcmF3IHF1ZXJ5P1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYWRlcmJvYXJkKCkge31cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFF1ZXN0aW9uQW5kQ29tbWVudHMoaWQ6IHN0cmluZykge1xuICByZXR1cm4gcHJpc21hLnF1ZXN0aW9uLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZCxcbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICBsaWtlczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVRdWVzdGlvbih7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgY2F0ZWdvcnksXG4gIHVzZXJJZCxcbn06IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgdXNlcklkOiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiBwcmlzbWEucXVlc3Rpb24uY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICBpZDogdXNlcklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICBuYW1lOiBjYXRlZ29yeSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb21tZW50KHtcbiAgY29udGVudCxcbiAgdXNlcklkLFxuICBxdWVzdGlvbklkLFxufToge1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xuICBxdWVzdGlvbklkOiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiBwcmlzbWEuY29tbWVudC5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICBhdXRob3I6IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIGlkOiB1c2VySWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcXVlc3Rpb246IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIGlkOiBxdWVzdGlvbklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuLy8gaXMgdGhpcyBldmVuIHJpZ2h0P1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uTGlrZSh7XG4gIHF1ZXN0aW9uSWQsXG4gIHVzZXJJZCxcbn06IHtcbiAgcXVlc3Rpb25JZDogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIHByaXNtYS5xdWVzdGlvbi51cGRhdGUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogcXVlc3Rpb25JZCxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxpa2VzOiB7XG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlU3R5bGVzLFxuICBUYWJsZSxcbiAgQ2hlY2tib3gsXG4gIFNjcm9sbEFyZWEsXG4gIEdyb3VwLFxuICBBdmF0YXIsXG4gIFRleHQsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvd1NlbGVjdGVkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiXG4gICAgICAgID8gdGhlbWUuZm4ucmdiYSh0aGVtZS5jb2xvcnNbdGhlbWUucHJpbWFyeUNvbG9yXVs3XSwgMC4yKVxuICAgICAgICA6IHRoZW1lLmNvbG9ycy5ncmF5WzJdLFxuICB9LFxufSkpO1xuXG5pbnRlcmZhY2UgVGFibGVTZWxlY3Rpb25Qcm9wcyB7XG4gIGRhdGE6IHtcbiAgICBhdmF0YXI6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBqb2I6IHN0cmluZztcbiAgICBpZDogc3RyaW5nO1xuICB9W107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlYWRlcmJvYXJkKCkge1xuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIGlkOiBcIjFcIixcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYyNDI5ODM1NzU5Ny1mZDkyZGZiZWMwMWQ/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI1MCZxPTgwXCIsXG4gICAgICBuYW1lOiBcIlJvYmVydCBXb2xma2lzc2VyXCIsXG4gICAgICBqb2I6IFwiRW5naW5lZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIjJcIixcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4NjI5NzEzNTUzNy05NGJjOWJhMDYwYWE/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI1MCZxPTgwXCIsXG4gICAgICBuYW1lOiBcIkppbGwgSmFpbGJyZWFrZXJcIixcbiAgICAgIGpvYjogXCJFbmdpbmVlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiM1wiLFxuICAgICAgYXZhdGFyOlxuICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjMyOTIyMjY3NzU2LTliNzEyNDJiMTU5Mj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjUwJnE9ODBcIixcbiAgICAgIG5hbWU6IFwiSGVucnkgU2lsa2VhdGVyXCIsXG4gICAgICBqb2I6IFwiRGVzaWduZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIjRcIixcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNzAwMzIxMTE2OS0wYTFkZDcyMjhmMmQ/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI1MCZxPTgwXCIsXG4gICAgICBuYW1lOiBcIkJpbGwgSG9yc2VmaWdodGVyXCIsXG4gICAgICBqb2I6IFwiRGVzaWduZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIjVcIixcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzMDg0MTUzOTI5My1iZDIwNjM0YzVkNzI/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI1MCZxPTgwXCIsXG4gICAgICBuYW1lOiBcIkplcmVteSBGb290dmlld2VyXCIsXG4gICAgICBqb2I6IFwiTWFuYWdlclwiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgeyBjbGFzc2VzLCBjeCB9ID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3Qgcm93cyA9IGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPEdyb3VwIHNwYWNpbmc9XCJzbVwiPlxuICAgICAgICAgICAgPEF2YXRhciBzaXplPXsyNn0gc3JjPXtpdGVtLmF2YXRhcn0gcmFkaXVzPXsyNn0gLz5cbiAgICAgICAgICAgIDxUZXh0IHNpemU9XCJzbVwiIHdlaWdodD17NTAwfT5cbiAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICA8L3RkPlxuXG4gICAgICAgIDx0ZD57aXRlbS5qb2J9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUaXRsZSBvcmRlcj17MX0+TGVhZGVyYm9hcmQ8L1RpdGxlPlxuICAgICAgPFNjcm9sbEFyZWE+XG4gICAgICAgIDxUYWJsZVxuICAgICAgICAgIHN4PXt7IG1pbldpZHRoOiA4MDAgfX1cbiAgICAgICAgICB2ZXJ0aWNhbFNwYWNpbmc9XCJzbVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJvd1NlbGVjdGVkfVxuICAgICAgICA+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+VXNlcjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Qb2ludHM8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT57cm93c308L3Rib2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9TY3JvbGxBcmVhPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IEJveCwgVGl0bGUgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBPdXRsZXQsIHVzZUxvYWRlckRhdGEsIHVzZVBhcmFtcyB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSBcIn4vZGIvZGIuc2VydmVyXCI7XG5pbXBvcnQgeyBDYXRlZ29yaWVzIH0gZnJvbSBcIn4vY29tcG9uZW50cy91aVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGdldENhdGVnb3JpZXMoKTtcbiAgcmV0dXJuIHsgY2F0ZWdvcmllcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IHVzZVBhcmFtcygpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwibmF2XCI+XG4gICAgICAgIDxUaXRsZSBvcmRlcj17MX0gbWI9XCJsZ1wiPlxuICAgICAgICAgIHtjYXRlZ29yeSA/IGNhdGVnb3J5IDogXCJMYXRlc3QgcXVlc3Rpb25zXCJ9XG4gICAgICAgIDwvVGl0bGU+XG4gICAgICAgIDxDYXRlZ29yaWVzIGNhdGVnb3JpZXM9e2RhdGEuY2F0ZWdvcmllc30gLz5cbiAgICAgIDwvQm94PlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgTGlzdCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGxpbmtzOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZ2FwOiBcIjFyZW0gMC41cmVtXCIsXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICB9LFxuICBsaW5rOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMueHMsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5WzZdLFxuICAgIHBhZGRpbmc6IFwiOHB4IDEycHhcIixcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGl1cy5zbSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5WzNdLFxuICB9LFxuICBhY3RpdmVMaW5rOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlWzddLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmJsdWVbMV0sXG4gIH0sXG59KSk7XG5cbnR5cGUgQ2F0ZWdvcnlQcm9wcyA9IHtcbiAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRlZ29yaWVzKHsgY2F0ZWdvcmllcyB9OiBDYXRlZ29yeVByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgY3ggfSA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPExpc3QgbGlzdFN0eWxlVHlwZT1cIm5vbmVcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PlxuICAgICAge2NhdGVnb3JpZXM/Lm1hcCgoeyBpZCwgbmFtZSB9KSA9PiAoXG4gICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIHRvPXtgL2NhdGVnb3J5LyR7bmFtZS50b0xvd2VyQ2FzZSgpfWB9XG4gICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxuICAgICAgICAgICAgICBjeChjbGFzc2VzLmxpbmssIHsgW2NsYXNzZXMuYWN0aXZlTGlua106IGlzQWN0aXZlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICkpfVxuICAgIDwvTGlzdD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyBTb2NpYWxzUHJvdmlkZXIgfSBmcm9tIFwicmVtaXgtYXV0aC1zb2NpYWxzXCI7XG5cbmV4cG9ydCB0eXBlIFNvY2lhbEJ1dHRvblByb3BzID0ge1xuICBwcm92aWRlcjogU29jaWFsc1Byb3ZpZGVyO1xuICBsYWJlbDogc3RyaW5nO1xuICBjb2xvcj86IHN0cmluZztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBTb2NpYWxCdXR0b24oeyBwcm92aWRlciwgbGFiZWwsIGNvbG9yIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBhY3Rpb249e2AvYXV0aC8ke3Byb3ZpZGVyfWB9IG1ldGhvZD1cInBvc3RcIj5cbiAgICAgIDxCdXR0b24gY29sb3I9e2NvbG9yfSB0eXBlPVwic3VibWl0XCIgZnVsbFdpZHRoPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBQYWdpbmF0aW9uLCBTaW1wbGVHcmlkLCBUaXRsZSB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlDYXJkIH0gZnJvbSBcIn4vY29tcG9uZW50cy91aS9DYXRlZ29yaWVzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGNhdGVnb3JpZXM6IHtcbiAgICBtYXJnaW46IGAke3RoZW1lLnNwYWNpbmcueGx9cHggLThweGAsXG4gIH0sXG5cbiAgZGl2aWRlcjoge1xuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ncmF5WzFdfWAsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgY2F0ZWdvcnkgPSBwYXJhbXMuY2F0ZWdvcnk7XG4gIHJldHVybiB7IGNhdGVnb3J5IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeSgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2ltcGxlR3JpZFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2F0ZWdvcmllc31cbiAgICAgICAgY29scz17MX1cbiAgICAgICAgYnJlYWtwb2ludHM9e1tcbiAgICAgICAgICB7IG1pbldpZHRoOiBcInhzXCIsIGNvbHM6IDIgfSxcbiAgICAgICAgICB7IG1pbldpZHRoOiBcImxnXCIsIGNvbHM6IDMgfSxcbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDIwIH0sIChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDYXRlZ29yeUNhcmQgY2F0ZWdvcnk9e2RhdGEuY2F0ZWdvcnl9IGtleT17aW5kZXh9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9TaW1wbGVHcmlkPlxuICAgICAgPFBhZ2luYXRpb24gdG90YWw9ezEwfSAvPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEFjdGlvbkljb24sXG4gIEJveCxcbiAgQ2FyZCxcbiAgY3JlYXRlU3R5bGVzLFxuICBHcm91cCxcbiAgVGV4dCxcbiAgVGl0bGUsXG4gIE1lbnUsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IEZsYWcyLCBIZWFydCwgQ29weSB9IGZyb20gXCJ0YWJsZXItaWNvbnMtcmVhY3RcIjtcbmltcG9ydCB7IHVzZUFjdGlvbk1vZGFscyB9IGZyb20gXCJ+L2hvb2tzL3VzZUFjdGlvbk1vZGFsc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBjYXRlZ29yeToge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZVs1XSxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBib3JkZXI6IGAycHggc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JheVszXX1gLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2F0ZWdvcnlDYXJkKHsgY2F0ZWdvcnkgfSkge1xuICBjb25zdCB7IHJlcG9ydE1vZGFsIH0gPSB1c2VBY3Rpb25Nb2RhbHMoKTtcblxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY29tcG9uZW50PVwiYXJ0aWNsZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgIDxHcm91cD5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgdG89e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeX1gfVxuICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yeX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJsaW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgICAgPC9UZXh0PntcIiBcIn1cbiAgICAgICAgICAmc2ltO3tcIiBcIn1cbiAgICAgICAgICA8VGV4dCBzaXplPVwieHNcIiBjb21wb25lbnQ9XCJzcGFuXCIgY29sb3I9XCJkaW1tZWRcIj5cbiAgICAgICAgICAgIHBvc3RlZCBieSBkYW5lXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgey8qIDxBY3Rpb25JY29uIGNvbG9yPVwicmVkXCIgbWw9XCJhdXRvXCI+XG4gICAgICAgICAgPEhlYXJ0IHNpemU9ezE2fSAvPlxuICAgICAgICA8L0FjdGlvbkljb24+ICovfVxuICAgICAgICA8TWVudSBtbD1cImF1dG9cIj5cbiAgICAgICAgICA8TWVudS5MYWJlbD5Qb3N0IG9wdGlvbnM8L01lbnUuTGFiZWw+XG4gICAgICAgICAgPE1lbnUuSXRlbSBpY29uPXs8Q29weSBzaXplPXsxNH0gLz59PkNvcHkgbGluayB0byBwb3N0PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXtyZXBvcnRNb2RhbH0gaWNvbj17PEZsYWcyIHNpemU9ezE0fSAvPn0+XG4gICAgICAgICAgICBSZXBvcnRcbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPC9NZW51PlxuICAgICAgPC9Hcm91cD5cbiAgICAgIDxUaXRsZVxuICAgICAgICBvcmRlcj17Mn1cbiAgICAgICAgbXk9XCJzbVwiXG4gICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5sZyxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHtjYXRlZ29yeX1cbiAgICAgIDwvVGl0bGU+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPFRleHQgY29sb3I9XCJkaW1tZWRcIiBsaW5lQ2xhbXA9ezJ9IHNpemU9XCJzbVwiPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFc3RcbiAgICAgICAgICBhc3BlcmlvcmVzIG1hZ25hbSBldmVuaWV0IHBlcmZlcmVuZGlzIG51bGxhIG5hbSwgY3VwaWRpdGF0ZSBjdW0gaXVyZVxuICAgICAgICAgIHNhZXBlIHByb3ZpZGVudCBtb2xlc3RpYXMgbW9sZXN0aWFlIHBvc3NpbXVzIHF1YW0gaGFydW0gY29uc2VjdGV0dXJcbiAgICAgICAgICBub24gZWxpZ2VuZGkgZmFjaWxpcyBvbW5pcy5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPEJveCBjb21wb25lbnQ9XCJmb290ZXJcIiBtdD1cImxnXCI+XG4gICAgICAgIDxHcm91cCBhbGlnbj1cImJhc2VsaW5lXCIgcG9zaXRpb249XCJhcGFydFwiPlxuICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJsaW5rXCIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICA3OCBjb21tZW50c1xuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8R3JvdXAgc3BhY2luZz1cInhzXCIgYWxpZ249XCJiYXNlbGluZVwiPlxuICAgICAgICAgICAgPFRleHQgY29tcG9uZW50PVwidGltZVwiIHNpemU9XCJ4c1wiIGNvbG9yPVwiZGltbWVkXCI+XG4gICAgICAgICAgICAgIDQgaG91cnMgYWdvXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgPC9Hcm91cD5cbiAgICAgIDwvQm94PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSBcIkBtYW50aW5lL25vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB7IHVzZU1vZGFscyB9IGZyb20gXCJAbWFudGluZS9tb2RhbHNcIjtcbmltcG9ydCB7IFJhZGlvR3JvdXAsIFJhZGlvIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGlvbk1vZGFscygpIHtcbiAgY29uc3QgbW9kYWxzID0gdXNlTW9kYWxzKCk7XG4gIGNvbnN0IHJlcG9ydE1vZGFsID0gKCkgPT4ge1xuICAgIG1vZGFscy5vcGVuQ29uZmlybU1vZGFsKHtcbiAgICAgIHRpdGxlOiBcIlJlcG9ydCBwb3N0XCIsXG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIGNoaWxkcmVuOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJQbGVhc2Ugc2VsZWN0IGEgcmVhc29uIGZvciByZXBvcnRpbmcgdGhpcyBwb3N0LlwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbWI9XCJ4bFwiXG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiaGFybWZ1bFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiaGFybWZ1bFwiIGxhYmVsPVwiSGFybWZ1bCBjb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cImhhdGVcIiBsYWJlbD1cIkhhdGUgc3BlZWNoXCIgLz5cbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cInNwYW1cIiBsYWJlbD1cIlNwYW1cIiAvPlxuICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiaW5jb3JyZWN0XCIgbGFiZWw9XCJQb3N0ZWQgaW4gdGhlIHdyb25nIHNlY3Rpb25cIiAvPlxuICAgICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgICAgPC8+XG4gICAgICApLFxuICAgICAgbGFiZWxzOiB7IGNvbmZpcm06IFwiUmVwb3J0IHBvc3RcIiwgY2FuY2VsOiBcIkNhbmNlbFwiIH0sXG4gICAgICBvbkNhbmNlbDogKCkgPT4gY29uc29sZS5sb2coXCJDYW5jZWxcIiksXG4gICAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgdGl0bGU6IFwiUG9zdCByZXBvcnRlZFwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiVGhhbmsgeW91IGZvciByZXBvcnRpbmcgdGhpcyBwb3N0IGFuZCBrZWVwaW5nIHF1ZXJpZSBzYWZlLlwiLFxuICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IHJlcG9ydE1vZGFsIH07XG59XG4iLCAiaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBtdD1cInhsXCI+XG4gICAgICA8ZGl2PnRoaXMgaXMgc29tZXRoaW5nPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSBcIn4vc2VydmljZXMvYXV0aC5zZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGF3YWl0IGF1dGhlbnRpY2F0b3IubG9nb3V0KHJlcXVlc3QsIHsgcmVkaXJlY3RUbzogXCIvY2F0ZWdvcnlcIiB9KTtcbn07XG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdChcIi9jYXRlZ29yeVwiKTtcbn07XG4iLCAiaW1wb3J0IHsgQ29udGFpbmVyLCBTdGFjaywgVGV4dCwgVGl0bGUgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBTb2NpYWxzUHJvdmlkZXIgfSBmcm9tIFwicmVtaXgtYXV0aC1zb2NpYWxzXCI7XG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSBcIn4vc2VydmljZXMvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNvY2lhbEJ1dHRvbiB9IGZyb20gXCJ+L2NvbXBvbmVudHMvdWlcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBzdWNjZXNzUmVkaXJlY3Q6IFwiL1wiLFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJcbiAgICAgIG10PVwieGxcIlxuICAgICAgc2l6ZT1cImxnXCJcbiAgICAgIHN4PXt7XG4gICAgICAgIG1heFdpZHRoOiBcIjMwMHB4XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxTdGFjayBhbGlnbj1cInN0cmV0Y2hcIj5cbiAgICAgICAgPFRpdGxlIG9yZGVyPXsxfSBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIExvZyBpblxuICAgICAgICA8L1RpdGxlPlxuICAgICAgICA8VGV4dCBjb2xvcj1cImRpbW1lZFwiIHNpemU9XCJzbVwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgQ29udGludWUgd2l0aCBvbmUgb2YgdGhlc2UgcHJvdmlkZXJzXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFNvY2lhbEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwiaW5kaWdvXCJcbiAgICAgICAgICBwcm92aWRlcj17U29jaWFsc1Byb3ZpZGVyLkRJU0NPUkR9XG4gICAgICAgICAgbGFiZWw9XCJMb2dpbiB3aXRoIERpc2NvcmRcIlxuICAgICAgICAvPlxuICAgICAgICA8U29jaWFsQnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgIHByb3ZpZGVyPXtTb2NpYWxzUHJvdmlkZXIuR09PR0xFfVxuICAgICAgICAgIGxhYmVsPVwiTG9naW4gd2l0aCBHb29nbGVcIlxuICAgICAgICAvPlxuICAgICAgICA8U29jaWFsQnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICBwcm92aWRlcj17U29jaWFsc1Byb3ZpZGVyLkdJVEhVQn1cbiAgICAgICAgICBsYWJlbD1cIkxvZ2luIHdpdGggR2l0aHViXCJcbiAgICAgICAgLz5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonMzc3ZGE5NTQnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LTNNUzdBWk9WLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1JRVJSVEFBQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNXWE1ZVkFHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkZSTFJYWUguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02WlJOUU1DUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU1DUlNVRU42LmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC01SFFRNU9CRi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRElEQkUzSFguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RRzRMNUkyNi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoLyRwcm92aWRlcic6eydpZCc6J3JvdXRlcy9hdXRoLyRwcm92aWRlcicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoLzpwcm92aWRlcicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoLyRwcm92aWRlci1NT1BTVVQzSC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQUNQREgyM0EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LNUs2Nk1PRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2snOnsnaWQnOidyb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2snLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC86cHJvdmlkZXIvY2FsbGJhY2snLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2stNlJFSzNDQzIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NhdGVnb3J5Jzp7J2lkJzoncm91dGVzL2NhdGVnb3J5JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NhdGVnb3J5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NhdGVnb3J5LVoyWjM1Q0RZLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HU0YzVVhQRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnknOnsnaWQnOidyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5JywncGFyZW50SWQnOidyb3V0ZXMvY2F0ZWdvcnknLCdwYXRoJzonOmNhdGVnb3J5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS1WMk9VWU5TRi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRElEQkUzSFguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RRzRMNUkyNi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jYXRlZ29yeS9pbmRleCc6eydpZCc6J3JvdXRlcy9jYXRlZ29yeS9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2NhdGVnb3J5JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NhdGVnb3J5L2luZGV4LUVTRUJUWFRGLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RRzRMNUkyNi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtTFBLSEFRV0kuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUFDUERIMjNBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSzVLNjZNT0QuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhZGVyYm9hcmQnOnsnaWQnOidyb3V0ZXMvbGVhZGVyYm9hcmQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbGVhZGVyYm9hcmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbGVhZGVyYm9hcmQtQlBSMlY3SFYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbic6eydpZCc6J3JvdXRlcy9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dpbi1WQURKWk9NRi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSzVLNjZNT0QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDY2QVlGNC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dvdXQnOnsnaWQnOidyb3V0ZXMvbG9nb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dvdXQtU1dQV09CVlguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3F1ZXN0aW9uL25ldyc6eydpZCc6J3JvdXRlcy9xdWVzdGlvbi9uZXcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncXVlc3Rpb24vbmV3JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3F1ZXN0aW9uL25ldy1ONUpaSUxJRi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQUNQREgyM0EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LNUs2Nk1PRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstR1NGM1VYUEUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTM3N0RBOTU0LmpzJ307IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9hdXRoLyRwcm92aWRlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvcXVlc3Rpb24vbmV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sZWFkZXJib2FyZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dpbi50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoLyRwcm92aWRlci5jYWxsYmFja1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoLzpwcm92aWRlci9jYWxsYmFja1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kcHJvdmlkZXJcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvJHByb3ZpZGVyXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvOnByb3ZpZGVyXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9xdWVzdGlvbi9uZXdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3F1ZXN0aW9uL25ld1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJxdWVzdGlvbi9uZXdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2xlYWRlcmJvYXJkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sZWFkZXJib2FyZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsZWFkZXJib2FyZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2F0ZWdvcnlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NhdGVnb3J5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNhdGVnb3J5XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2NhdGVnb3J5XCIsXG4gICAgICBwYXRoOiBcIjpjYXRlZ29yeVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2F0ZWdvcnkvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NhdGVnb3J5L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvY2F0ZWdvcnlcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9sb2dvdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH1cbiAg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
