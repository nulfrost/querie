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
async function getLatestQuestionsForCategory(category, page = 0) {
  if (!category) {
    return prisma.question.findMany({
      take: 22,
      skip: 22 * page,
      orderBy: {
        createdAt: "desc"
      },
      include: {
        category: {
          select: {
            name: true
          }
        },
        author: {
          select: {
            username: true
          }
        }
      }
    });
  }
  return prisma.question.findMany({
    take: 22,
    skip: 22 * page,
    where: {
      category: {
        name: category
      }
    },
    orderBy: {
      createdAt: "desc"
    },
    include: {
      category: {
        select: {
          name: true
        }
      },
      author: {
        select: {
          username: true
        }
      }
    }
  });
}
async function createQuestion({
  title,
  description,
  category,
  userId
}) {
  return prisma.question.create({
    data: {
      title,
      description,
      author: {
        connect: {
          id: userId
        }
      },
      category: {
        connect: {
          name: category
        }
      }
    }
  });
}
async function findOrCreateUser(profile) {
  var _a, _b;
  return prisma.user.upsert({
    where: {
      email: (_a = profile == null ? void 0 : profile.emails[0]) == null ? void 0 : _a.value
    },
    update: {
      username: profile == null ? void 0 : profile.displayName,
      connection: profile == null ? void 0 : profile.provider,
      image_url: profile == null ? void 0 : profile.photos[0].value,
      email: (_b = profile == null ? void 0 : profile.emails[0]) == null ? void 0 : _b.value
    },
    create: {
      email: profile == null ? void 0 : profile.emails[0].value,
      username: profile == null ? void 0 : profile.displayName,
      connection: profile == null ? void 0 : profile.provider,
      image_url: profile == null ? void 0 : profile.photos[0].value
    }
  });
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
  try {
    const user = await findOrCreateUser(profile);
    return { profile: user };
  } catch (e) {
    console.error(e);
  }
}));
authenticator.use(new import_remix_auth_socials.DiscordStrategy({
  clientID: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  callbackURL: `http://localhost:3000/auth/${import_remix_auth_socials.SocialsProvider.DISCORD}/callback`
}, async ({ profile }) => {
  try {
    const user = await findOrCreateUser(profile);
    return { profile: user };
  } catch (e) {
    console.error(e);
  }
}));
authenticator.use(new import_remix_auth_socials.GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: `http://localhost:3000/auth/${import_remix_auth_socials.SocialsProvider.GITHUB}/callback`
}, async ({ profile }) => {
  try {
    const user = await findOrCreateUser(profile);
    return { profile: user };
  } catch (e) {
    console.error(e);
  }
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
var loader2 = async ({ request, params }) => {
  return await authenticator.authenticate(params.provider, request, {
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
var action = async ({ request, params }) => {
  return await authenticator.authenticate(params.provider, request);
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
var import_react7 = require("react");
var action2 = async ({ request }) => {
  var _a;
  const body = await request.formData();
  const title = body.get("title");
  const description = body.get("description");
  const category = body.get("category");
  const user = await authenticator.isAuthenticated(request);
  await createQuestion({
    title,
    description,
    category,
    userId: (_a = user == null ? void 0 : user.profile) == null ? void 0 : _a.id
  });
  return (0, import_node3.redirect)(`/category/${category.toLowerCase()}`);
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
  const transition = (0, import_react6.useTransition)();
  const titleRef = (0, import_react7.useRef)(null);
  (0, import_react7.useEffect)(() => {
    var _a;
    (_a = titleRef == null ? void 0 : titleRef.current) == null ? void 0 : _a.focus();
  }, []);
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
    id: "title",
    required: true,
    ref: titleRef,
    maxLength: 50,
    mb: "sm",
    pattern: "^[a-zA-Z0-9'!+.-=#$%^*()_-,\\s]*$",
    onInput: (event) => {
      if (event.currentTarget.validity.patternMismatch || event.currentTarget.validity.valueMissing) {
        event.currentTarget.setCustomValidity("Please enter a valid title");
        event.currentTarget.reportValidity();
      } else {
        event.currentTarget.setCustomValidity("");
      }
    }
  }), /* @__PURE__ */ React.createElement(import_core4.Textarea, {
    label: "Description",
    name: "description",
    required: true,
    autosize: true,
    minRows: 10,
    placeholder: "What's on your mind?",
    maxLength: 5e3,
    mb: "sm"
  }), /* @__PURE__ */ React.createElement(import_core4.NativeSelect, {
    data: categoryNames,
    label: "Category",
    name: "category",
    placeholder: "Choose a category",
    required: true,
    mb: "sm"
  }), /* @__PURE__ */ React.createElement(import_core4.Button, {
    sx: { alignSelf: "flex-end" },
    type: "submit",
    loading: transition.state === "submitting",
    disabled: transition.state === "submitting"
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
var import_react10 = require("@remix-run/react");

// app/components/ui/Categories/Categories.tsx
var import_core7 = require("@mantine/core");
var import_react8 = require("@remix-run/react");
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
  }, categories == null ? void 0 : categories.map(({ id, name }) => /* @__PURE__ */ React.createElement(import_core7.List.Item, null, /* @__PURE__ */ React.createElement(import_react8.NavLink, {
    to: `/category/${name.toLowerCase()}`,
    key: id,
    className: ({ isActive }) => cx(classes.link, { [classes.activeLink]: isActive })
  }, name))));
}

// app/components/ui/SocialButton.tsx
var import_core8 = require("@mantine/core");
var import_react9 = require("@remix-run/react");
function SocialButton({ provider, label, color }) {
  return /* @__PURE__ */ React.createElement(import_react9.Form, {
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
  const data = (0, import_react10.useLoaderData)();
  const { category } = (0, import_react10.useParams)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core9.Box, {
    component: "nav"
  }, /* @__PURE__ */ React.createElement(import_core9.Title, {
    order: 1,
    mb: "lg"
  }, category ? category : "Latest questions"), /* @__PURE__ */ React.createElement(Categories, {
    categories: data.categories
  })), /* @__PURE__ */ React.createElement(import_react10.Outlet, null));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/$category.tsx
var category_exports2 = {};
__export(category_exports2, {
  default: () => Category2,
  loader: () => loader6
});
var import_core12 = require("@mantine/core");
var import_node4 = require("@remix-run/node");
var import_react12 = require("@remix-run/react");

// app/components/ui/Categories/QuestionCard.tsx
var import_core11 = require("@mantine/core");
var import_react11 = require("@remix-run/react");
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

// app/components/ui/Categories/QuestionCard.tsx
var import_dayjs = __toESM(require("dayjs"));
var import_relativeTime = __toESM(require("dayjs/plugin/relativeTime"));
import_dayjs.default.extend(import_relativeTime.default);
var useStyles6 = (0, import_core11.createStyles)((theme) => ({
  category: {
    color: theme.colors.blue[5],
    fontWeight: 700
  },
  card: {
    border: `2px solid ${theme.colors.gray[3]}`,
    display: "flex",
    flexDirection: "column"
  }
}));
function QuestionCard({
  createdAt,
  description,
  title,
  author,
  category
}) {
  const { reportModal } = useActionModals();
  const { classes } = useStyles6();
  return /* @__PURE__ */ React.createElement(import_core11.Card, {
    component: "article",
    className: classes.card
  }, /* @__PURE__ */ React.createElement(import_core11.Group, null, /* @__PURE__ */ React.createElement(import_core11.Box, null, /* @__PURE__ */ React.createElement(import_core11.Text, {
    to: `/category/${category.name.toLowerCase()}`,
    size: "xs",
    component: import_react11.Link,
    className: classes.category,
    variant: "link"
  }, category.name), " ", "\u223C", " ", /* @__PURE__ */ React.createElement(import_core11.Text, {
    size: "xs",
    component: "span",
    color: "dimmed"
  }, "posted by ", author.username, " \u2022 ", (0, import_dayjs.default)(createdAt).fromNow())), /* @__PURE__ */ React.createElement(import_core11.Menu, {
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
  }, title), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(import_core11.Text, {
    color: "dimmed",
    lineClamp: 2,
    size: "sm",
    mb: "lg"
  }, description)), /* @__PURE__ */ React.createElement(import_core11.Box, {
    component: "footer",
    mt: "auto"
  }, /* @__PURE__ */ React.createElement(import_core11.Group, {
    align: "center",
    position: "apart"
  }, /* @__PURE__ */ React.createElement(import_core11.Text, {
    variant: "link",
    size: "sm"
  }, "78 comments"), /* @__PURE__ */ React.createElement(import_core11.Group, {
    spacing: "xs"
  }, /* @__PURE__ */ React.createElement(import_core11.ActionIcon, {
    color: "red",
    ml: "auto"
  }, /* @__PURE__ */ React.createElement(import_tabler_icons_react2.Heart, {
    size: 16
  }))))));
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
  const questions = await getLatestQuestionsForCategory(params.category[0].toUpperCase() + params.category.slice(1));
  return (0, import_node4.json)(questions);
};
function Category2() {
  const questions = (0, import_react12.useLoaderData)();
  const { classes } = useStyles7();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core12.SimpleGrid, {
    className: classes.categories,
    cols: 1,
    breakpoints: [
      { minWidth: "xs", cols: 2 },
      { minWidth: "lg", cols: 3 }
    ]
  }, questions.map(({ id, title, description, createdAt, category, author }) => /* @__PURE__ */ React.createElement(QuestionCard, {
    key: id,
    title,
    description,
    createdAt,
    category,
    author
  }))), questions.length > 22 && /* @__PURE__ */ React.createElement(import_core12.Pagination, {
    total: 10,
    position: "center"
  }));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/index.tsx
var category_exports3 = {};
__export(category_exports3, {
  default: () => Index,
  loader: () => loader7
});
var import_core13 = require("@mantine/core");
var import_node5 = require("@remix-run/node");
var import_react13 = require("@remix-run/react");
var useStyles8 = (0, import_core13.createStyles)((theme) => ({
  categories: {
    margin: `${theme.spacing.xl}px -8px`
  },
  divider: {
    border: `1px solid ${theme.colors.gray[1]}`
  }
}));
var loader7 = async () => {
  const questions = await getLatestQuestionsForCategory();
  return (0, import_node5.json)(questions);
};
function Index() {
  const { classes } = useStyles8();
  const questions = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core13.SimpleGrid, {
    className: classes.categories,
    cols: 1,
    breakpoints: [
      { minWidth: "xs", cols: 2 },
      { minWidth: "lg", cols: 3 }
    ]
  }, questions.map(({ id, title, description, createdAt, category, author }) => /* @__PURE__ */ React.createElement(QuestionCard, {
    key: id,
    title,
    description,
    createdAt,
    category,
    author
  }))), questions.length > 22 && /* @__PURE__ */ React.createElement(import_core13.Pagination, {
    total: 10,
    position: "center"
  }));
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
  loader: () => loader8
});
var import_node6 = require("@remix-run/node");
var loader8 = () => {
  return (0, import_node6.redirect)("/category");
};

// route:/Users/dane/Desktop/github/react/querie/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login,
  loader: () => loader9
});
var import_core14 = require("@mantine/core");
var import_remix_auth_socials2 = require("remix-auth-socials");
var loader9 = async ({ request }) => {
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
var assets_manifest_default = { "version": "b0a5b310", "entry": { "module": "/build/entry.client-46ZM4CJF.js", "imports": ["/build/_shared/chunk-XMAPAHPP.js", "/build/_shared/chunk-EE5I7FND.js", "/build/_shared/chunk-PWHP4PGH.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-55HG2YQV.js", "imports": ["/build/_shared/chunk-QPOTCLO6.js", "/build/_shared/chunk-DOKC7QFU.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider": { "id": "routes/auth/$provider", "parentId": "root", "path": "auth/:provider", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider-BIBOWH7N.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider.callback": { "id": "routes/auth/$provider.callback", "parentId": "root", "path": "auth/:provider/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider.callback-5S4SGR5P.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category": { "id": "routes/category", "parentId": "root", "path": "category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category-XIDR4YV2.js", "imports": ["/build/_shared/chunk-7FM6Z6JK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/$category": { "id": "routes/category/$category", "parentId": "routes/category", "path": ":category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category/$category-Q4XRY3BC.js", "imports": ["/build/_shared/chunk-P7OUN2XF.js", "/build/_shared/chunk-QPOTCLO6.js", "/build/_shared/chunk-DOKC7QFU.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/index": { "id": "routes/category/index", "parentId": "routes/category", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/category/index-BBVCNSRS.js", "imports": ["/build/_shared/chunk-P7OUN2XF.js", "/build/_shared/chunk-QPOTCLO6.js", "/build/_shared/chunk-DOKC7QFU.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-DEM7L523.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/leaderboard": { "id": "routes/leaderboard", "parentId": "root", "path": "leaderboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/leaderboard-DF2BHQBG.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-6V3WR7QF.js", "imports": ["/build/_shared/chunk-DZ6QUBUY.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-C5SNCLE7.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/question/new": { "id": "routes/question/new", "parentId": "root", "path": "question/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/question/new-NZGDD7FG.js", "imports": ["/build/_shared/chunk-DZ6QUBUY.js", "/build/_shared/chunk-7FM6Z6JK.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-B0A5B310.js" };

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
//# sourceMappingURL=index.js.map
