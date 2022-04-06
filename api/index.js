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
  }, "Ask"), /* @__PURE__ */ React.createElement(import_core.Menu, {
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
    pb: "xl"
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

// app/components/ui/Categories/Categories.tsx
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
    method: "post"
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
  const { category } = (0, import_react8.useParams)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core6.Box, {
    component: "nav"
  }, /* @__PURE__ */ React.createElement(import_core6.Title, {
    order: 1,
    mb: "lg"
  }, category), /* @__PURE__ */ React.createElement(Categories, {
    categories: data.categories
  })), /* @__PURE__ */ React.createElement(import_react8.Outlet, null));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/$category.tsx
var category_exports2 = {};
__export(category_exports2, {
  default: () => Category2,
  loader: () => loader5
});
var import_core9 = require("@mantine/core");
var import_react10 = require("@remix-run/react");

// app/components/ui/Categories/CategoryCard.tsx
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

// app/components/ui/Categories/CategoryCard.tsx
var useStyles5 = (0, import_core8.createStyles)((theme) => ({
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
  const { classes } = useStyles5();
  return /* @__PURE__ */ React.createElement(import_core8.Card, {
    component: "article",
    className: classes.card
  }, /* @__PURE__ */ React.createElement(import_core8.Group, null, /* @__PURE__ */ React.createElement(import_core8.Box, null, /* @__PURE__ */ React.createElement(import_core8.Text, {
    to: `/category/${category}`,
    size: "xs",
    component: import_react9.Link,
    className: classes.category,
    variant: "link"
  }, category), " ", "\u223C", " ", /* @__PURE__ */ React.createElement(import_core8.Text, {
    size: "xs",
    component: "span",
    color: "dimmed"
  }, "posted by dane")), /* @__PURE__ */ React.createElement(import_core8.Menu, {
    ml: "auto"
  }, /* @__PURE__ */ React.createElement(import_core8.Menu.Label, null, "Post options"), /* @__PURE__ */ React.createElement(import_core8.Menu.Item, {
    icon: /* @__PURE__ */ React.createElement(import_tabler_icons_react2.Copy, {
      size: 14
    })
  }, "Copy link to post"), /* @__PURE__ */ React.createElement(import_core8.Menu.Item, {
    onClick: reportModal,
    icon: /* @__PURE__ */ React.createElement(import_tabler_icons_react2.Flag2, {
      size: 14
    })
  }, "Report"))), /* @__PURE__ */ React.createElement(import_core8.Title, {
    order: 2,
    my: "sm",
    sx: (theme) => ({
      fontSize: theme.fontSizes.lg
    })
  }, category), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(import_core8.Text, {
    color: "dimmed",
    lineClamp: 2,
    size: "sm"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores magnam eveniet perferendis nulla nam, cupiditate cum iure saepe provident molestias molestiae possimus quam harum consectetur non eligendi facilis omnis.")), /* @__PURE__ */ React.createElement(import_core8.Box, {
    component: "footer",
    mt: "lg"
  }, /* @__PURE__ */ React.createElement(import_core8.Group, {
    align: "baseline",
    position: "apart"
  }, /* @__PURE__ */ React.createElement(import_core8.Text, {
    variant: "link",
    size: "sm"
  }, "78 comments"), /* @__PURE__ */ React.createElement(import_core8.Group, {
    spacing: "xs",
    align: "baseline"
  }, /* @__PURE__ */ React.createElement(import_core8.Text, {
    component: "time",
    size: "xs",
    color: "dimmed"
  }, "4 hours ago")))));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/$category.tsx
var useStyles6 = (0, import_core9.createStyles)((theme) => ({
  categories: {
    margin: "0 -8px",
    marginTop: theme.spacing.xl
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
  const data = (0, import_react10.useLoaderData)();
  const { classes } = useStyles6();
  return /* @__PURE__ */ React.createElement(import_core9.SimpleGrid, {
    className: classes.categories,
    cols: 1,
    breakpoints: [
      { minWidth: "xs", cols: 2 },
      { minWidth: "lg", cols: 3 }
    ]
  }, Array.from({ length: 20 }, (_, index) => /* @__PURE__ */ React.createElement(CategoryCard, {
    category: data.category
  })));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/index.tsx
var category_exports3 = {};
__export(category_exports3, {
  default: () => Index
});
var import_core10 = require("@mantine/core");
function Index() {
  return /* @__PURE__ */ React.createElement(import_core10.Box, {
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
var import_core11 = require("@mantine/core");
var import_remix_auth_socials2 = require("remix-auth-socials");
var loader7 = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/"
  });
};
function Login() {
  return /* @__PURE__ */ React.createElement(import_core11.Container, {
    mt: "xl",
    size: "lg"
  }, /* @__PURE__ */ React.createElement(import_core11.Stack, {
    align: "stretch"
  }, /* @__PURE__ */ React.createElement(import_core11.Title, {
    order: 1,
    align: "center"
  }, "Log in"), /* @__PURE__ */ React.createElement(import_core11.Text, {
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
var assets_manifest_default = { "version": "477e1a8f", "entry": { "module": "/build/entry.client-PUDXDUX3.js", "imports": ["/build/_shared/chunk-PVRR4DGQ.js", "/build/_shared/chunk-3WXMYVAG.js", "/build/_shared/chunk-6FRLRXYH.js", "/build/_shared/chunk-6ZRNQMCP.js", "/build/_shared/chunk-MCRSUEN6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-WZ2D7DQM.js", "imports": ["/build/_shared/chunk-X2NHMSAD.js", "/build/_shared/chunk-Y2A3PJBP.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider": { "id": "routes/auth/$provider", "parentId": "root", "path": "auth/:provider", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider-3IM5E64Q.js", "imports": ["/build/_shared/chunk-ACPDH23A.js", "/build/_shared/chunk-K5K66MOD.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider.callback": { "id": "routes/auth/$provider.callback", "parentId": "root", "path": "auth/:provider/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider.callback-6REK3CC2.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category": { "id": "routes/category", "parentId": "root", "path": "category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category-FJIT42FN.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/$category": { "id": "routes/category/$category", "parentId": "routes/category", "path": ":category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category/$category-CR3DAN77.js", "imports": ["/build/_shared/chunk-X2NHMSAD.js", "/build/_shared/chunk-Y2A3PJBP.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/index": { "id": "routes/category/index", "parentId": "routes/category", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/category/index-XTBZHZWR.js", "imports": ["/build/_shared/chunk-Y2A3PJBP.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-LPKHAQWI.js", "imports": ["/build/_shared/chunk-ACPDH23A.js", "/build/_shared/chunk-K5K66MOD.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-YUZXTZ2P.js", "imports": ["/build/_shared/chunk-K5K66MOD.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-HF3HMUMT.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-477E1A8F.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiIsICIuLi9ub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi9kZXYvY29tcGlsZXIvc2hpbXMvcmVhY3QudHMiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyLnRzeCIsICIuLi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9hdXRoLyRwcm92aWRlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkudHN4IiwgIi4uL2FwcC9kYi9kYi5zZXJ2ZXIudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvdWkvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy91aS9Tb2NpYWxCdXR0b24udHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvdWkvQ2F0ZWdvcmllcy9DYXRlZ29yeUNhcmQudHN4IiwgIi4uL2FwcC9ob29rcy91c2VBY3Rpb25Nb2RhbHMudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5L2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgImltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgaW5qZWN0U3R5bGVzSW50b1N0YXRpY01hcmt1cCB9IGZyb20gXCJAbWFudGluZS9zc3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgYDwhRE9DVFlQRSBodG1sPiR7aW5qZWN0U3R5bGVzSW50b1N0YXRpY01hcmt1cChtYXJrdXApfWAsXG4gICAge1xuICAgICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgfVxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEJveCxcbiAgQ29sb3JTY2hlbWUsXG4gIENvbG9yU2NoZW1lUHJvdmlkZXIsXG4gIENvbnRhaW5lcixcbiAgY3JlYXRlU3R5bGVzLFxuICBNYW50aW5lUHJvdmlkZXIsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbHNQcm92aWRlciB9IGZyb20gXCJAbWFudGluZS9tb2RhbHNcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNQcm92aWRlciB9IGZyb20gXCJAbWFudGluZS9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgdHlwZSB7XG4gIExpbmtzRnVuY3Rpb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG59IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTGF5b3V0L05hdmJhclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwifi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3RlclwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiAoe1xuICBjaGFyc2V0OiBcInV0Zi04XCIsXG4gIHRpdGxlOiBcInF1ZXJpZSB8IGFzayB5b3VyIHdpbGRlc3QgcXVlc3Rpb25zXCIsXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgaHJlZjogc3R5bGVzLFxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICB9LFxuICBdO1xufTtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGJvZHk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiXG4gICAgICAgICAgPyB0aGVtZS5jb2xvcnMuZGFya1s2XVxuICAgICAgICAgIDogdGhlbWUuY29sb3JzLmdyYXlbMl0sXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgfSxcbiAgfTtcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCk7XG4gIHJldHVybiB7IHVzZXIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgdXNlciA9IHVzZUxvYWRlckRhdGEoKTtcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPE1hbnRpbmVUaGVtZT5cbiAgICAgICAgPE1vZGFsc1Byb3ZpZGVyPlxuICAgICAgICAgIDxOb3RpZmljYXRpb25zUHJvdmlkZXJcbiAgICAgICAgICAgIGxpbWl0PXsyfVxuICAgICAgICAgICAgYXV0b0Nsb3NlPXszMDAwfVxuICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AtY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IGNvbXBvbmVudD1cImJvZHlcIiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0+XG4gICAgICAgICAgICAgIDxOYXZiYXIgdXNlcj17dXNlcn0gLz5cbiAgICAgICAgICAgICAgPENvbnRhaW5lciBzaXplPVwieGxcIiByb2xlPVwibWFpblwiIG10PVwieGxcIiBwYj1cInhsXCI+XG4gICAgICAgICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEZvb3RlclxuICAgICAgICAgICAgICAgIGxpbmtzPXtbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL251bGZyb3N0L3F1ZXJpZVwiLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJHaXRodWJcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvTm90aWZpY2F0aW9uc1Byb3ZpZGVyPlxuICAgICAgICA8L01vZGFsc1Byb3ZpZGVyPlxuICAgICAgPC9NYW50aW5lVGhlbWU+XG4gICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgIDxTY3JpcHRzIC8+XG4gICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTWFudGluZVRoZW1lKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgW2NvbG9yU2NoZW1lLCBzZXRDb2xvclNjaGVtZV0gPSB1c2VTdGF0ZTxDb2xvclNjaGVtZT4oXCJsaWdodFwiKTtcbiAgY29uc3QgdG9nZ2xlQ29sb3JTY2hlbWUgPSAodmFsdWU/OiBDb2xvclNjaGVtZSkgPT5cbiAgICBzZXRDb2xvclNjaGVtZSh2YWx1ZSB8fCAoY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCIpKTtcblxuICByZXR1cm4gKFxuICAgIDxDb2xvclNjaGVtZVByb3ZpZGVyXG4gICAgICBjb2xvclNjaGVtZT17Y29sb3JTY2hlbWV9XG4gICAgICB0b2dnbGVDb2xvclNjaGVtZT17dG9nZ2xlQ29sb3JTY2hlbWV9XG4gICAgPlxuICAgICAgPE1hbnRpbmVQcm92aWRlclxuICAgICAgICB0aGVtZT17eyBjb2xvclNjaGVtZSB9fVxuICAgICAgICB3aXRoTm9ybWFsaXplQ1NTXG4gICAgICAgIHdpdGhHbG9iYWxTdHlsZXNcbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9NYW50aW5lUHJvdmlkZXI+XG4gICAgPC9Db2xvclNjaGVtZVByb3ZpZGVyPlxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEF2YXRhcixcbiAgQm94LFxuICBCdXJnZXIsXG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBjcmVhdGVTdHlsZXMsXG4gIERpdmlkZXIsXG4gIEdyb3VwLFxuICBNZW51LFxuICBUZXh0LFxuICBVbnN0eWxlZEJ1dHRvbixcbiAgdXNlTWFudGluZUNvbG9yU2NoZW1lLFxufSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgdXNlQm9vbGVhblRvZ2dsZSB9IGZyb20gXCJAbWFudGluZS9ob29rc1wiO1xuaW1wb3J0IHsgTGluaywgdXNlU3VibWl0IH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBDaGFydEJhcixcbiAgQ2hldnJvbkRvd24sXG4gIEhlYXJ0LFxuICBMb2dvdXQsXG4gIE1lc3NhZ2UsXG4gIE1vb24sXG4gIFNldHRpbmdzLFxuICBTdW4sXG59IGZyb20gXCJ0YWJsZXItaWNvbnMtcmVhY3RcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgaGVhZGVyOiB7XG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCJcbiAgICAgICAgPyB0aGVtZS5jb2xvcnMuZGFya1s2XVxuICAgICAgICA6IHRoZW1lLmNvbG9ycy5ncmF5WzBdLFxuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke1xuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gXCJ0cmFuc3BhcmVudFwiIDogdGhlbWUuY29sb3JzLmdyYXlbMl1cbiAgICB9YCxcbiAgfSxcblxuICBtYWluU2VjdGlvbjoge1xuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG5cbiAgdXNlck1lbnU6IHtcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJ4c1wiKV06IHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0sXG4gIH0sXG5cbiAgdXNlcjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1swXSA6IHRoZW1lLmJsYWNrLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9cHggJHt0aGVtZS5zcGFjaW5nLnNtfXB4YCxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGl1cy5zbSxcbiAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQtY29sb3IgMTAwbXMgZWFzZVwiLFxuXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbOF0gOiB0aGVtZS53aGl0ZSxcbiAgICB9LFxuICB9LFxuXG4gIGJ1cmdlcjoge1xuICAgIFt0aGVtZS5mbi5sYXJnZXJUaGFuKFwieHNcIildOiB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9LFxuICB9LFxuXG4gIHVzZXJBY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1s4XSA6IHRoZW1lLndoaXRlLFxuICB9LFxuICBsaW5rczoge1xuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInhzXCIpXToge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgfSxcbiAgfSxcbiAgbG9nbzoge30sXG59KSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVzZXI6IGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5hdmJhcih7IHVzZXIgfTogUHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc2VzLCB0aGVtZSwgY3ggfSA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbb3BlbmVkLCB0b2dnbGVPcGVuZWRdID0gdXNlQm9vbGVhblRvZ2dsZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyTWVudU9wZW5lZCwgc2V0VXNlck1lbnVPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcblxuICBjb25zdCB7IGNvbG9yU2NoZW1lLCB0b2dnbGVDb2xvclNjaGVtZSB9ID0gdXNlTWFudGluZUNvbG9yU2NoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cImhlYWRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMubWFpblNlY3Rpb259IHNpemU9XCJ4bFwiPlxuICAgICAgICA8R3JvdXAgcG9zaXRpb249XCJhcGFydFwiPlxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICB0bz1cIi9jYXRlZ29yeVwiXG4gICAgICAgICAgICB3ZWlnaHQ9ezcwMH1cbiAgICAgICAgICAgIHNpemU9XCJ4bFwiXG4gICAgICAgICAgICB2YXJpYW50PVwiZ3JhZGllbnRcIlxuICAgICAgICAgICAgZ3JhZGllbnQ9e3sgZnJvbTogXCJpbmRpZ29cIiwgdG86IFwiY3lhblwiLCBkZWc6IDQ1IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgcXVlcmllXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxCdXJnZXJcbiAgICAgICAgICAgIG9wZW5lZD17b3BlbmVkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlT3BlbmVkKCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnVyZ2VyfVxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHshdXNlcj8udXNlciAmJiAoXG4gICAgICAgICAgICA8R3JvdXAgc3BhY2luZz17NX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e0xpbmt9IHRvPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3VzZXI/LnVzZXIgJiYgKFxuICAgICAgICAgICAgPEdyb3VwPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gdG89XCIvcXVlc3Rpb24vbmV3XCI+XG4gICAgICAgICAgICAgICAgQXNrXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgIHNpemU9ezI2MH1cbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJlbmRcIlxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249XCJwb3AtdG9wLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudXNlck1lbnV9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0VXNlck1lbnVPcGVuZWQoZmFsc2UpfVxuICAgICAgICAgICAgICAgIG9uT3Blbj17KCkgPT4gc2V0VXNlck1lbnVPcGVuZWQodHJ1ZSl9XG4gICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICA8VW5zdHlsZWRCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChjbGFzc2VzLnVzZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy51c2VyQWN0aXZlXTogdXNlck1lbnVPcGVuZWQsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8R3JvdXAgc3BhY2luZz17N30+XG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyPy51c2VyPy5waG90b3NbMF0/LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt1c2VyPy51c2VyPy5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1cz1cInhsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezI0fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodD17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGxpbmVIZWlnaHQ6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1yPXszfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyPy51c2VyPy5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duIHNpemU9ezEyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICAgICAgICAgPC9VbnN0eWxlZEJ1dHRvbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICBpY29uPXs8Q2hhcnRCYXIgc2l6ZT17MTR9IGNvbG9yPXt0aGVtZS5jb2xvcnMuaW5kaWdvWzZdfSAvPn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMZWFkZXJib2FyZFxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICAgIGljb249ezxIZWFydCBzaXplPXsxNH0gY29sb3I9e3RoZW1lLmNvbG9ycy5yZWRbNl19IC8+fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExpa2VkIHBvc3RzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgaWNvbj17PE1lc3NhZ2Ugc2l6ZT17MTR9IGNvbG9yPXt0aGVtZS5jb2xvcnMuYmx1ZVs2XX0gLz59XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgWW91ciBjb21tZW50c1xuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51LkxhYmVsPlNldHRpbmdzPC9NZW51LkxhYmVsPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gaWNvbj17PFNldHRpbmdzIHNpemU9ezE0fSAvPn0+XG4gICAgICAgICAgICAgICAgICBBY2NvdW50IHNldHRpbmdzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQ29sb3JTY2hlbWUoKX1cbiAgICAgICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZSA9PT0gXCJsaWdodFwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxTdW4gc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPE1vb24gc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDdXJyZW50IHRoZW1lOiB7Y29sb3JTY2hlbWV9e1wiIFwifVxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgaWNvbj17PExvZ291dCBzaXplPXsxNH0gLz59XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICBzdWJtaXQobnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIi9sb2dvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvR3JvdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIENvbnRhaW5lciwgR3JvdXAsIEFuY2hvciwgVGl0bGUgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBmb290ZXI6IHtcbiAgICBtYXJnaW5Ub3A6IFwiYXV0b1wiLFxuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke1xuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbNV0gOiB0aGVtZS5jb2xvcnMuZ3JheVsyXVxuICAgIH1gLFxuICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIlxuICAgICAgICA/IHRoZW1lLmNvbG9ycy5kYXJrWzZdXG4gICAgICAgIDogdGhlbWUuY29sb3JzLmdyYXlbMF0sXG4gIH0sXG5cbiAgaW5uZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nLnhsLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcueGwsXG5cbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJ4c1wiKV06IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgfSxcbiAgfSxcblxuICBsaW5rczoge1xuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInhzXCIpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLm1kLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmludGVyZmFjZSBGb290ZXJQcm9wcyB7XG4gIGxpbmtzOiB7IGxpbms6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoeyBsaW5rcyB9OiBGb290ZXJQcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBpdGVtcyA9IGxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgIDxBbmNob3I8XCJhXCI+XG4gICAgICBjb2xvcj1cImRpbW1lZFwiXG4gICAgICBrZXk9e2xpbmsubGFiZWx9XG4gICAgICBocmVmPXtsaW5rLmxpbmt9XG4gICAgICBzaXplPVwic21cIlxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICA+XG4gICAgICB7bGluay5sYWJlbH1cbiAgICA8L0FuY2hvcj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJ9IHNpemU9XCJ4bFwiPlxuICAgICAgICA8VGl0bGUgb3JkZXI9ezN9PnF1ZXJpZTwvVGl0bGU+XG4gICAgICAgIDxHcm91cCBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PntpdGVtc308L0dyb3VwPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gXCJyZW1peC1hdXRoXCI7XG5pbXBvcnQgeyBzZXNzaW9uU3RvcmFnZSB9IGZyb20gXCJ+L3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQge1xuICBHb29nbGVTdHJhdGVneSxcbiAgU29jaWFsc1Byb3ZpZGVyLFxuICBHaXRIdWJTdHJhdGVneSxcbiAgRGlzY29yZFN0cmF0ZWd5LFxufSBmcm9tIFwicmVtaXgtYXV0aC1zb2NpYWxzXCI7XG5cbmV4cG9ydCBsZXQgYXV0aGVudGljYXRvciA9IG5ldyBBdXRoZW50aWNhdG9yKHNlc3Npb25TdG9yYWdlLCB7XG4gIHNlc3Npb25LZXk6IFwiX19zZXNzaW9uXCIsXG59KTtcblxuYXV0aGVudGljYXRvci51c2UoXG4gIG5ldyBHb29nbGVTdHJhdGVneShcbiAgICB7XG4gICAgICBjbGllbnRJRDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgICBjYWxsYmFja1VSTDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoLyR7U29jaWFsc1Byb3ZpZGVyLkdPT0dMRX0vY2FsbGJhY2tgLFxuICAgIH0sXG4gICAgYXN5bmMgKHsgcHJvZmlsZSB9KSA9PiB7XG4gICAgICByZXR1cm4gcHJvZmlsZTtcbiAgICB9XG4gIClcbik7XG5cbmF1dGhlbnRpY2F0b3IudXNlKFxuICBuZXcgRGlzY29yZFN0cmF0ZWd5KFxuICAgIHtcbiAgICAgIGNsaWVudElEOiBwcm9jZXNzLmVudi5ESVNDT1JEX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuRElTQ09SRF9DTElFTlRfU0VDUkVULFxuICAgICAgY2FsbGJhY2tVUkw6IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC8ke1NvY2lhbHNQcm92aWRlci5ESVNDT1JEfS9jYWxsYmFja2AsXG4gICAgfSxcbiAgICBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcbiAgICAgIHJldHVybiBwcm9maWxlO1xuICAgIH1cbiAgKVxuKTtcblxuYXV0aGVudGljYXRvci51c2UoXG4gIG5ldyBHaXRIdWJTdHJhdGVneShcbiAgICB7XG4gICAgICBjbGllbnRJRDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXG4gICAgICBjYWxsYmFja1VSTDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoLyR7U29jaWFsc1Byb3ZpZGVyLkdJVEhVQn0vY2FsbGJhY2tgLFxuICAgIH0sXG4gICAgYXN5bmMgKHsgcHJvZmlsZSB9KSA9PiB7XG4gICAgICByZXR1cm4gcHJvZmlsZTtcbiAgICB9XG4gIClcbik7XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5cbmV4cG9ydCBsZXQgc2Vzc2lvblN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6IFwiX19zZXNzaW9uXCIsXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjcmV0czogW3Byb2Nlc3MuZW52LkNPT0tJRV9TRUNSRVRdLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBsZXQgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uLCBkZXN0cm95U2Vzc2lvbiB9ID0gc2Vzc2lvblN0b3JhZ2U7XG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSBcIn4vc2VydmljZXMvYXV0aC5zZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgcmV0dXJuIGF1dGhlbnRpY2F0b3IuYXV0aGVudGljYXRlKHBhcmFtcy5wcm92aWRlciwgcmVxdWVzdCwge1xuICAgIHN1Y2Nlc3NSZWRpcmVjdDogXCIvXCIsXG4gICAgZmFpbHVyZVJlZGlyZWN0OiBcIi9sb2dpblwiLFxuICB9KTtcbn07XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiByZWRpcmVjdChcIi9sb2dpblwiKTtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgcmV0dXJuIGF1dGhlbnRpY2F0b3IuYXV0aGVudGljYXRlKHBhcmFtcy5wcm92aWRlciwgcmVxdWVzdCk7XG59O1xuIiwgImltcG9ydCB7IEJveCwgVGl0bGUgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBPdXRsZXQsIHVzZUxvYWRlckRhdGEsIHVzZVBhcmFtcyB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSBcIn4vZGIvZGIuc2VydmVyXCI7XG5pbXBvcnQgeyBDYXRlZ29yaWVzIH0gZnJvbSBcIn4vY29tcG9uZW50cy91aVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGdldENhdGVnb3JpZXMoKTtcbiAgcmV0dXJuIHsgY2F0ZWdvcmllcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IHVzZVBhcmFtcygpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwibmF2XCI+XG4gICAgICAgIDxUaXRsZSBvcmRlcj17MX0gbWI9XCJsZ1wiPlxuICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgPENhdGVnb3JpZXMgY2F0ZWdvcmllcz17ZGF0YS5jYXRlZ29yaWVzfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmludGVyZmFjZSBDdXN0b21Ob2RlSnNHbG9iYWwgZXh0ZW5kcyBOb2RlSlMuR2xvYmFsIHtcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG59XG5cbmRlY2xhcmUgY29uc3QgZ2xvYmFsOiBDdXN0b21Ob2RlSnNHbG9iYWw7XG5cbmNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoKSB7XG4gIHJldHVybiBwcmlzbWEuY2F0ZWdvcnkuZmluZE1hbnkoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExhdGVzdFF1ZXN0aW9uc0ZvckNhdGVnb3J5KGNhdGVnb3J5Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmlzbWEucXVlc3Rpb24uZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICBjYXRlZ29yeToge1xuICAgICAgICBuYW1lOiBjYXRlZ29yeSA/PyBcIlwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuLy8gRXNzZW50aWFsbHkgSSB3YW50IHRvIHN1bSB0aGUgYW1vdW50IG9mIGxpa2VzIGFcbi8vIHBlcnNvbiBoYXMgb24gYm90aCBxdWVzdGlvbnMgdGhleSd2ZSBhc2tlZCBhbmRcbi8vIGNvbW1lbnRzXG4vLyByYXcgcXVlcnk/XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGVhZGVyYm9hcmQoKSB7fVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVlc3Rpb25BbmRDb21tZW50cyhpZDogc3RyaW5nKSB7XG4gIHJldHVybiBwcmlzbWEucXVlc3Rpb24uZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgY29tbWVudHM6IHtcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIGxpa2VzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBjYXRlZ29yeSxcbiAgdXNlcklkLFxufToge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIHByaXNtYS5xdWVzdGlvbi5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBhdXRob3I6IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIGlkOiB1c2VySWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIG5hbWU6IGNhdGVnb3J5LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQoe1xuICBjb250ZW50LFxuICB1c2VySWQsXG4gIHF1ZXN0aW9uSWQsXG59OiB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgdXNlcklkOiBzdHJpbmc7XG4gIHF1ZXN0aW9uSWQ6IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIHByaXNtYS5jb21tZW50LmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgY29udGVudCxcbiAgICAgIGF1dGhvcjoge1xuICAgICAgICBjb25uZWN0OiB7XG4gICAgICAgICAgaWQ6IHVzZXJJZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBxdWVzdGlvbjoge1xuICAgICAgICBjb25uZWN0OiB7XG4gICAgICAgICAgaWQ6IHF1ZXN0aW9uSWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG4vLyBpcyB0aGlzIGV2ZW4gcmlnaHQ/XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUXVlc3Rpb25MaWtlKHtcbiAgcXVlc3Rpb25JZCxcbiAgdXNlcklkLFxufToge1xuICBxdWVzdGlvbklkOiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xufSkge1xuICByZXR1cm4gcHJpc21hLnF1ZXN0aW9uLnVwZGF0ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBxdWVzdGlvbklkLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgbGlrZXM6IHtcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIExpc3QgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBsaW5rczoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGdhcDogXCIxcmVtIDAuNXJlbVwiLFxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgfSxcbiAgbGluazoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnhzLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVs2XSxcbiAgICBwYWRkaW5nOiBcIjhweCAxMnB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpdXMuc20sXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVszXSxcbiAgfSxcbiAgYWN0aXZlTGluazoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZVs3XSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlWzFdLFxuICB9LFxufSkpO1xuXG50eXBlIENhdGVnb3J5UHJvcHMgPSB7XG4gIGNhdGVnb3JpZXM6IENhdGVnb3J5W107XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQ2F0ZWdvcmllcyh7IGNhdGVnb3JpZXMgfTogQ2F0ZWdvcnlQcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMsIGN4IH0gPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0IGxpc3RTdHlsZVR5cGU9XCJub25lXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfT5cbiAgICAgIHtjYXRlZ29yaWVzPy5tYXAoKHsgaWQsIG5hbWUgfSkgPT4gKFxuICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICB0bz17YC9jYXRlZ29yeS8ke25hbWUudG9Mb3dlckNhc2UoKX1gfVxuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT5cbiAgICAgICAgICAgICAgY3goY2xhc3Nlcy5saW5rLCB7IFtjbGFzc2VzLmFjdGl2ZUxpbmtdOiBpc0FjdGl2ZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICApKX1cbiAgICA8L0xpc3Q+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgU29jaWFsc1Byb3ZpZGVyIH0gZnJvbSBcInJlbWl4LWF1dGgtc29jaWFsc1wiO1xuXG5leHBvcnQgdHlwZSBTb2NpYWxCdXR0b25Qcm9wcyA9IHtcbiAgcHJvdmlkZXI6IFNvY2lhbHNQcm92aWRlcjtcbiAgbGFiZWw6IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gU29jaWFsQnV0dG9uKHsgcHJvdmlkZXIsIGxhYmVsLCBjb2xvciB9KSB7XG4gIHJldHVybiAoXG4gICAgPEZvcm0gYWN0aW9uPXtgL2F1dGgvJHtwcm92aWRlcn1gfSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICA8QnV0dG9uIGNvbG9yPXtjb2xvcn0gdHlwZT1cInN1Ym1pdFwiIGZ1bGxXaWR0aD5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgU2ltcGxlR3JpZCwgVGl0bGUgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IENhdGVnb3J5Q2FyZCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvdWkvQ2F0ZWdvcmllc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBjYXRlZ29yaWVzOiB7XG4gICAgbWFyZ2luOiBcIjAgLThweFwiLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy54bCxcbiAgfSxcblxuICBkaXZpZGVyOiB7XG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmdyYXlbMV19YCxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBjYXRlZ29yeSA9IHBhcmFtcy5jYXRlZ29yeTtcbiAgcmV0dXJuIHsgY2F0ZWdvcnkgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5KCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPFNpbXBsZUdyaWRcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yaWVzfVxuICAgICAgY29scz17MX1cbiAgICAgIGJyZWFrcG9pbnRzPXtbXG4gICAgICAgIHsgbWluV2lkdGg6IFwieHNcIiwgY29sczogMiB9LFxuICAgICAgICB7IG1pbldpZHRoOiBcImxnXCIsIGNvbHM6IDMgfSxcbiAgICAgIF19XG4gICAgPlxuICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDIwIH0sIChfLCBpbmRleCkgPT4gKFxuICAgICAgICA8Q2F0ZWdvcnlDYXJkIGNhdGVnb3J5PXtkYXRhLmNhdGVnb3J5fSAvPlxuICAgICAgKSl9XG4gICAgPC9TaW1wbGVHcmlkPlxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEFjdGlvbkljb24sXG4gIEJveCxcbiAgQ2FyZCxcbiAgY3JlYXRlU3R5bGVzLFxuICBHcm91cCxcbiAgVGV4dCxcbiAgVGl0bGUsXG4gIE1lbnUsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IEZsYWcyLCBIZWFydCwgQ29weSB9IGZyb20gXCJ0YWJsZXItaWNvbnMtcmVhY3RcIjtcbmltcG9ydCB7IHVzZUFjdGlvbk1vZGFscyB9IGZyb20gXCJ+L2hvb2tzL3VzZUFjdGlvbk1vZGFsc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBjYXRlZ29yeToge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZVs1XSxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBib3JkZXI6IGAycHggc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JheVszXX1gLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2F0ZWdvcnlDYXJkKHsgY2F0ZWdvcnkgfSkge1xuICBjb25zdCB7IHJlcG9ydE1vZGFsIH0gPSB1c2VBY3Rpb25Nb2RhbHMoKTtcblxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY29tcG9uZW50PVwiYXJ0aWNsZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgIDxHcm91cD5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgdG89e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeX1gfVxuICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yeX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJsaW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgICAgPC9UZXh0PntcIiBcIn1cbiAgICAgICAgICAmc2ltO3tcIiBcIn1cbiAgICAgICAgICA8VGV4dCBzaXplPVwieHNcIiBjb21wb25lbnQ9XCJzcGFuXCIgY29sb3I9XCJkaW1tZWRcIj5cbiAgICAgICAgICAgIHBvc3RlZCBieSBkYW5lXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgey8qIDxBY3Rpb25JY29uIGNvbG9yPVwicmVkXCIgbWw9XCJhdXRvXCI+XG4gICAgICAgICAgPEhlYXJ0IHNpemU9ezE2fSAvPlxuICAgICAgICA8L0FjdGlvbkljb24+ICovfVxuICAgICAgICA8TWVudSBtbD1cImF1dG9cIj5cbiAgICAgICAgICA8TWVudS5MYWJlbD5Qb3N0IG9wdGlvbnM8L01lbnUuTGFiZWw+XG4gICAgICAgICAgPE1lbnUuSXRlbSBpY29uPXs8Q29weSBzaXplPXsxNH0gLz59PkNvcHkgbGluayB0byBwb3N0PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXtyZXBvcnRNb2RhbH0gaWNvbj17PEZsYWcyIHNpemU9ezE0fSAvPn0+XG4gICAgICAgICAgICBSZXBvcnRcbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPC9NZW51PlxuICAgICAgPC9Hcm91cD5cbiAgICAgIDxUaXRsZVxuICAgICAgICBvcmRlcj17Mn1cbiAgICAgICAgbXk9XCJzbVwiXG4gICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5sZyxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHtjYXRlZ29yeX1cbiAgICAgIDwvVGl0bGU+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPFRleHQgY29sb3I9XCJkaW1tZWRcIiBsaW5lQ2xhbXA9ezJ9IHNpemU9XCJzbVwiPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFc3RcbiAgICAgICAgICBhc3BlcmlvcmVzIG1hZ25hbSBldmVuaWV0IHBlcmZlcmVuZGlzIG51bGxhIG5hbSwgY3VwaWRpdGF0ZSBjdW0gaXVyZVxuICAgICAgICAgIHNhZXBlIHByb3ZpZGVudCBtb2xlc3RpYXMgbW9sZXN0aWFlIHBvc3NpbXVzIHF1YW0gaGFydW0gY29uc2VjdGV0dXJcbiAgICAgICAgICBub24gZWxpZ2VuZGkgZmFjaWxpcyBvbW5pcy5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPEJveCBjb21wb25lbnQ9XCJmb290ZXJcIiBtdD1cImxnXCI+XG4gICAgICAgIDxHcm91cCBhbGlnbj1cImJhc2VsaW5lXCIgcG9zaXRpb249XCJhcGFydFwiPlxuICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJsaW5rXCIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICA3OCBjb21tZW50c1xuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8R3JvdXAgc3BhY2luZz1cInhzXCIgYWxpZ249XCJiYXNlbGluZVwiPlxuICAgICAgICAgICAgPFRleHQgY29tcG9uZW50PVwidGltZVwiIHNpemU9XCJ4c1wiIGNvbG9yPVwiZGltbWVkXCI+XG4gICAgICAgICAgICAgIDQgaG91cnMgYWdvXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgPC9Hcm91cD5cbiAgICAgIDwvQm94PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSBcIkBtYW50aW5lL25vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB7IHVzZU1vZGFscyB9IGZyb20gXCJAbWFudGluZS9tb2RhbHNcIjtcbmltcG9ydCB7IFJhZGlvR3JvdXAsIFJhZGlvIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGlvbk1vZGFscygpIHtcbiAgY29uc3QgbW9kYWxzID0gdXNlTW9kYWxzKCk7XG4gIGNvbnN0IHJlcG9ydE1vZGFsID0gKCkgPT4ge1xuICAgIG1vZGFscy5vcGVuQ29uZmlybU1vZGFsKHtcbiAgICAgIHRpdGxlOiBcIlJlcG9ydCBwb3N0XCIsXG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIGNoaWxkcmVuOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJQbGVhc2Ugc2VsZWN0IGEgcmVhc29uIGZvciByZXBvcnRpbmcgdGhpcyBwb3N0LlwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbWI9XCJ4bFwiXG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiaGFybWZ1bFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiaGFybWZ1bFwiIGxhYmVsPVwiSGFybWZ1bCBjb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cImhhdGVcIiBsYWJlbD1cIkhhdGUgc3BlZWNoXCIgLz5cbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cInNwYW1cIiBsYWJlbD1cIlNwYW1cIiAvPlxuICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiaW5jb3JyZWN0XCIgbGFiZWw9XCJQb3N0ZWQgaW4gdGhlIHdyb25nIHNlY3Rpb25cIiAvPlxuICAgICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgICAgPC8+XG4gICAgICApLFxuICAgICAgbGFiZWxzOiB7IGNvbmZpcm06IFwiUmVwb3J0IHBvc3RcIiwgY2FuY2VsOiBcIkNhbmNlbFwiIH0sXG4gICAgICBvbkNhbmNlbDogKCkgPT4gY29uc29sZS5sb2coXCJDYW5jZWxcIiksXG4gICAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgdGl0bGU6IFwiUG9zdCByZXBvcnRlZFwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiVGhhbmsgeW91IGZvciByZXBvcnRpbmcgdGhpcyBwb3N0IGFuZCBrZWVwaW5nIHF1ZXJpZSBzYWZlLlwiLFxuICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IHJlcG9ydE1vZGFsIH07XG59XG4iLCAiaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBtdD1cInhsXCI+XG4gICAgICA8ZGl2PnRoaXMgaXMgc29tZXRoaW5nPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSBcIn4vc2VydmljZXMvYXV0aC5zZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGF3YWl0IGF1dGhlbnRpY2F0b3IubG9nb3V0KHJlcXVlc3QsIHsgcmVkaXJlY3RUbzogXCIvXCIgfSk7XG59O1xuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gcmVkaXJlY3QoXCIvY2F0ZWdvcnlcIik7XG59O1xuIiwgImltcG9ydCB7IENvbnRhaW5lciwgU3RhY2ssIFRleHQsIFRpdGxlIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgU29jaWFsc1Byb3ZpZGVyIH0gZnJvbSBcInJlbWl4LWF1dGgtc29jaWFsc1wiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTb2NpYWxCdXR0b24gfSBmcm9tIFwifi9jb21wb25lbnRzL3VpXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgc3VjY2Vzc1JlZGlyZWN0OiBcIi9cIixcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG10PVwieGxcIiBzaXplPVwibGdcIj5cbiAgICAgIDxTdGFjayBhbGlnbj1cInN0cmV0Y2hcIj5cbiAgICAgICAgPFRpdGxlIG9yZGVyPXsxfSBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIExvZyBpblxuICAgICAgICA8L1RpdGxlPlxuICAgICAgICA8VGV4dCBjb2xvcj1cImRpbW1lZFwiIHNpemU9XCJzbVwiPlxuICAgICAgICAgIENvbnRpbnVlIHdpdGggb25lIG9mIHRoZXNlIHByb3ZpZGVyc1xuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxTb2NpYWxCdXR0b25cbiAgICAgICAgICBjb2xvcj1cImluZGlnb1wiXG4gICAgICAgICAgcHJvdmlkZXI9e1NvY2lhbHNQcm92aWRlci5ESVNDT1JEfVxuICAgICAgICAgIGxhYmVsPVwiTG9naW4gd2l0aCBEaXNjb3JkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFNvY2lhbEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICBwcm92aWRlcj17U29jaWFsc1Byb3ZpZGVyLkdPT0dMRX1cbiAgICAgICAgICBsYWJlbD1cIkxvZ2luIHdpdGggR29vZ2xlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFNvY2lhbEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgcHJvdmlkZXI9e1NvY2lhbHNQcm92aWRlci5HSVRIVUJ9XG4gICAgICAgICAgbGFiZWw9XCJMb2dpbiB3aXRoIEdpdGh1YlwiXG4gICAgICAgIC8+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzQ3N2UxYThmJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1QVURYRFVYMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUFZSUjRER1EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zV1hNWVZBRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZGUkxSWFlILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNlpSTlFNQ1AuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NQ1JTVUVONi5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtV1oyRDdEUU0uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVgyTkhNU0FELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWTJBM1BKQlAuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC8kcHJvdmlkZXInOnsnaWQnOidyb3V0ZXMvYXV0aC8kcHJvdmlkZXInLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC86cHJvdmlkZXInLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC8kcHJvdmlkZXItM0lNNUU2NFEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUFDUERIMjNBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSzVLNjZNT0QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDY2QVlGNC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrJzp7J2lkJzoncm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvOnByb3ZpZGVyL2NhbGxiYWNrJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLTZSRUszQ0MyLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDY2QVlGNC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jYXRlZ29yeSc6eydpZCc6J3JvdXRlcy9jYXRlZ29yeScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjYXRlZ29yeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jYXRlZ29yeS1GSklUNDJGTi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5Jzp7J2lkJzoncm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeScsJ3BhcmVudElkJzoncm91dGVzL2NhdGVnb3J5JywncGF0aCc6JzpjYXRlZ29yeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnktQ1IzREFONzcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVgyTkhNU0FELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWTJBM1BKQlAuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2F0ZWdvcnkvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY2F0ZWdvcnkvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9jYXRlZ29yeScsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jYXRlZ29yeS9pbmRleC1YVEJaSFpXUi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWTJBM1BKQlAuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUxQS0hBUVdJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1BQ1BESDIzQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUs1SzY2TU9ELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ2luJzp7J2lkJzoncm91dGVzL2xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ2luLVlVWlhUWjJQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LNUs2Nk1PRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ291dCc6eydpZCc6J3JvdXRlcy9sb2dvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9nb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ291dC1IRjNITVVNVC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1g2NkFZRjQuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTQ3N0UxQThGLmpzJ307IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9hdXRoLyRwcm92aWRlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2tcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvOnByb3ZpZGVyL2NhbGxiYWNrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoLyRwcm92aWRlclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC8kcHJvdmlkZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC86cHJvdmlkZXJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2NhdGVnb3J5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jYXRlZ29yeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjYXRlZ29yeVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnlcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9jYXRlZ29yeVwiLFxuICAgICAgcGF0aDogXCI6Y2F0ZWdvcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2NhdGVnb3J5L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jYXRlZ29yeS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2NhdGVnb3J5XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9nb3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9nb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9naW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9naW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH1cbiAgfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQ0EsWUFBdUI7OztBQ0R2QjtBQUFBO0FBQUE7QUFBQTtBQUNBLG1CQUE0QjtBQUM1QixvQkFBK0I7QUFDL0IsaUJBQTZDO0FBRTlCLHVCQUNiLFNBQ0Esb0JBQ0EsaUJBQ0EsY0FDQTtBQUNBLFFBQU0sU0FBUyxrQ0FDYixvQ0FBQywwQkFBRDtBQUFBLElBQWEsU0FBUztBQUFBLElBQWMsS0FBSyxRQUFRO0FBQUE7QUFFbkQsa0JBQWdCLElBQUksZ0JBQWdCO0FBRXBDLFNBQU8sSUFBSSxTQUNULGtCQUFrQiw2Q0FBNkIsV0FDL0M7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLFNB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
