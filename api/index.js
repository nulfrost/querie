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

// route:/Users/dane/Desktop/github/react/querie/app/routes/question/new.tsx
var new_exports = {};
__export(new_exports, {
  default: () => New,
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

// route:/Users/dane/Desktop/github/react/querie/app/routes/question/new.tsx
var loader4 = async () => {
  const categories = await getCategories();
  return { categories };
};
function New() {
  const { categories } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(import_core4.Box, {
    mt: "lg",
    sx: (theme) => ({
      maxWidth: theme.breakpoints.xs
    })
  }, /* @__PURE__ */ React.createElement(import_core4.Title, {
    order: 1,
    align: "left"
  }, "Ask a question"), /* @__PURE__ */ React.createElement(import_core4.Box, {
    component: import_react6.Form
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
    data: categories.map((category) => category.name),
    label: "Category",
    placeholder: "Choose a category",
    required: true,
    mb: "sm"
  }), /* @__PURE__ */ React.createElement(import_core4.Button, null, "Post question")));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category.tsx
var category_exports = {};
__export(category_exports, {
  default: () => Category,
  loader: () => loader5
});
var import_core7 = require("@mantine/core");
var import_react9 = require("@remix-run/react");

// app/components/ui/Categories/Categories.tsx
var import_core5 = require("@mantine/core");
var import_react7 = require("@remix-run/react");
var useStyles4 = (0, import_core5.createStyles)((theme) => ({
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
  return /* @__PURE__ */ React.createElement(import_core5.List, {
    listStyleType: "none",
    className: classes.links
  }, categories == null ? void 0 : categories.map(({ id, name }) => /* @__PURE__ */ React.createElement(import_core5.List.Item, null, /* @__PURE__ */ React.createElement(import_react7.NavLink, {
    to: `/category/${name.toLowerCase()}`,
    key: id,
    className: ({ isActive }) => cx(classes.link, { [classes.activeLink]: isActive })
  }, name))));
}

// app/components/ui/SocialButton.tsx
var import_core6 = require("@mantine/core");
var import_react8 = require("@remix-run/react");
function SocialButton({ provider, label, color }) {
  return /* @__PURE__ */ React.createElement(import_react8.Form, {
    action: `/auth/${provider}`,
    method: "post"
  }, /* @__PURE__ */ React.createElement(import_core6.Button, {
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core7.Box, {
    component: "nav"
  }, /* @__PURE__ */ React.createElement(import_core7.Title, {
    order: 1,
    mb: "lg"
  }, category), /* @__PURE__ */ React.createElement(Categories, {
    categories: data.categories
  })), /* @__PURE__ */ React.createElement(import_react9.Outlet, null));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/$category.tsx
var category_exports2 = {};
__export(category_exports2, {
  default: () => Category2,
  loader: () => loader6
});
var import_core10 = require("@mantine/core");
var import_react11 = require("@remix-run/react");

// app/components/ui/Categories/CategoryCard.tsx
var import_core9 = require("@mantine/core");
var import_react10 = require("@remix-run/react");
var import_tabler_icons_react2 = require("tabler-icons-react");

// app/hooks/useActionModals.tsx
var import_notifications2 = require("@mantine/notifications");
var import_modals2 = require("@mantine/modals");
var import_core8 = require("@mantine/core");
function useActionModals() {
  const modals = (0, import_modals2.useModals)();
  const reportModal = () => {
    modals.openConfirmModal({
      title: "Report post",
      centered: true,
      children: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core8.RadioGroup, {
        orientation: "vertical",
        label: "Please select a reason for reporting this post.",
        required: true,
        mb: "xl",
        size: "sm",
        defaultValue: "harmful"
      }, /* @__PURE__ */ React.createElement(import_core8.Radio, {
        value: "harmful",
        label: "Harmful content"
      }), /* @__PURE__ */ React.createElement(import_core8.Radio, {
        value: "hate",
        label: "Hate speech"
      }), /* @__PURE__ */ React.createElement(import_core8.Radio, {
        value: "spam",
        label: "Spam"
      }), /* @__PURE__ */ React.createElement(import_core8.Radio, {
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
var useStyles5 = (0, import_core9.createStyles)((theme) => ({
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
  return /* @__PURE__ */ React.createElement(import_core9.Card, {
    component: "article",
    className: classes.card
  }, /* @__PURE__ */ React.createElement(import_core9.Group, null, /* @__PURE__ */ React.createElement(import_core9.Box, null, /* @__PURE__ */ React.createElement(import_core9.Text, {
    to: `/category/${category}`,
    size: "xs",
    component: import_react10.Link,
    className: classes.category,
    variant: "link"
  }, category), " ", "\u223C", " ", /* @__PURE__ */ React.createElement(import_core9.Text, {
    size: "xs",
    component: "span",
    color: "dimmed"
  }, "posted by dane")), /* @__PURE__ */ React.createElement(import_core9.Menu, {
    ml: "auto"
  }, /* @__PURE__ */ React.createElement(import_core9.Menu.Label, null, "Post options"), /* @__PURE__ */ React.createElement(import_core9.Menu.Item, {
    icon: /* @__PURE__ */ React.createElement(import_tabler_icons_react2.Copy, {
      size: 14
    })
  }, "Copy link to post"), /* @__PURE__ */ React.createElement(import_core9.Menu.Item, {
    onClick: reportModal,
    icon: /* @__PURE__ */ React.createElement(import_tabler_icons_react2.Flag2, {
      size: 14
    })
  }, "Report"))), /* @__PURE__ */ React.createElement(import_core9.Title, {
    order: 2,
    my: "sm",
    sx: (theme) => ({
      fontSize: theme.fontSizes.lg
    })
  }, category), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(import_core9.Text, {
    color: "dimmed",
    lineClamp: 2,
    size: "sm"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores magnam eveniet perferendis nulla nam, cupiditate cum iure saepe provident molestias molestiae possimus quam harum consectetur non eligendi facilis omnis.")), /* @__PURE__ */ React.createElement(import_core9.Box, {
    component: "footer",
    mt: "lg"
  }, /* @__PURE__ */ React.createElement(import_core9.Group, {
    align: "baseline",
    position: "apart"
  }, /* @__PURE__ */ React.createElement(import_core9.Text, {
    variant: "link",
    size: "sm"
  }, "78 comments"), /* @__PURE__ */ React.createElement(import_core9.Group, {
    spacing: "xs",
    align: "baseline"
  }, /* @__PURE__ */ React.createElement(import_core9.Text, {
    component: "time",
    size: "xs",
    color: "dimmed"
  }, "4 hours ago")))));
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/$category.tsx
var useStyles6 = (0, import_core10.createStyles)((theme) => ({
  categories: {
    margin: "0 -8px",
    marginTop: theme.spacing.xl
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
  const { classes } = useStyles6();
  return /* @__PURE__ */ React.createElement(import_core10.SimpleGrid, {
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
var import_core11 = require("@mantine/core");
function Index() {
  return /* @__PURE__ */ React.createElement(import_core11.Box, {
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
  loader: () => loader7
});
var import_node3 = require("@remix-run/node");
var loader7 = () => {
  return (0, import_node3.redirect)("/category");
};

// route:/Users/dane/Desktop/github/react/querie/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login,
  loader: () => loader8
});
var import_core12 = require("@mantine/core");
var import_remix_auth_socials2 = require("remix-auth-socials");
var loader8 = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/"
  });
};
function Login() {
  return /* @__PURE__ */ React.createElement(import_core12.Container, {
    mt: "xl",
    size: "lg"
  }, /* @__PURE__ */ React.createElement(import_core12.Stack, {
    align: "stretch"
  }, /* @__PURE__ */ React.createElement(import_core12.Title, {
    order: 1,
    align: "center"
  }, "Log in"), /* @__PURE__ */ React.createElement(import_core12.Text, {
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
var assets_manifest_default = { "version": "8b5c49d2", "entry": { "module": "/build/entry.client-BI4OUINX.js", "imports": ["/build/_shared/chunk-QZHOQWHQ.js", "/build/_shared/chunk-3WXMYVAG.js", "/build/_shared/chunk-6FRLRXYH.js", "/build/_shared/chunk-6ZRNQMCP.js", "/build/_shared/chunk-MCRSUEN6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-BE7PQ4YS.js", "imports": ["/build/_shared/chunk-4FCF4U3B.js", "/build/_shared/chunk-F3NRWNLH.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider": { "id": "routes/auth/$provider", "parentId": "root", "path": "auth/:provider", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider-MOPSUT3H.js", "imports": ["/build/_shared/chunk-ACPDH23A.js", "/build/_shared/chunk-K5K66MOD.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$provider.callback": { "id": "routes/auth/$provider.callback", "parentId": "root", "path": "auth/:provider/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/$provider.callback-6REK3CC2.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category": { "id": "routes/category", "parentId": "root", "path": "category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category-SQ6BGYY7.js", "imports": ["/build/_shared/chunk-GSF3UXPE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/$category": { "id": "routes/category/$category", "parentId": "routes/category", "path": ":category", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category/$category-TFN6AQH2.js", "imports": ["/build/_shared/chunk-4FCF4U3B.js", "/build/_shared/chunk-F3NRWNLH.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/index": { "id": "routes/category/index", "parentId": "routes/category", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/category/index-VY5H5ENY.js", "imports": ["/build/_shared/chunk-F3NRWNLH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-LPKHAQWI.js", "imports": ["/build/_shared/chunk-ACPDH23A.js", "/build/_shared/chunk-K5K66MOD.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-2R4R6VLE.js", "imports": ["/build/_shared/chunk-K5K66MOD.js", "/build/_shared/chunk-3X66AYF4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-HF3HMUMT.js", "imports": ["/build/_shared/chunk-3X66AYF4.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/question/new": { "id": "routes/question/new", "parentId": "root", "path": "question/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/question/new-ZU6L4N4N.js", "imports": ["/build/_shared/chunk-GSF3UXPE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-8B5C49D2.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiIsICIuLi9ub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi9kZXYvY29tcGlsZXIvc2hpbXMvcmVhY3QudHMiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyLnRzeCIsICIuLi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9hdXRoLyRwcm92aWRlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvcXVlc3Rpb24vbmV3LnRzeCIsICIuLi9hcHAvZGIvZGIuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy91aS9DYXRlZ29yaWVzL0NhdGVnb3JpZXMudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3VpL1NvY2lhbEJ1dHRvbi50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy91aS9DYXRlZ29yaWVzL0NhdGVnb3J5Q2FyZC50c3giLCAiLi4vYXBwL2hvb2tzL3VzZUFjdGlvbk1vZGFscy50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xvZ291dC50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xvZ2luLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBpbmplY3RTdHlsZXNJbnRvU3RhdGljTWFya3VwIH0gZnJvbSBcIkBtYW50aW5lL3NzclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcbiAgICBgPCFET0NUWVBFIGh0bWw+JHtpbmplY3RTdHlsZXNJbnRvU3RhdGljTWFya3VwKG1hcmt1cCl9YCxcbiAgICB7XG4gICAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICB9XG4gICk7XG59XG4iLCAiaW1wb3J0IHtcbiAgQm94LFxuICBDb2xvclNjaGVtZSxcbiAgQ29sb3JTY2hlbWVQcm92aWRlcixcbiAgQ29udGFpbmVyLFxuICBjcmVhdGVTdHlsZXMsXG4gIE1hbnRpbmVQcm92aWRlcixcbn0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsc1Byb3ZpZGVyIH0gZnJvbSBcIkBtYW50aW5lL21vZGFsc1wiO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1Byb3ZpZGVyIH0gZnJvbSBcIkBtYW50aW5lL25vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB0eXBlIHtcbiAgTGlua3NGdW5jdGlvbixcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE1ldGFGdW5jdGlvbixcbn0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUxvYWRlckRhdGEsXG59IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIn4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJ+L3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyXCI7XG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSBcIi4vc2VydmljZXMvYXV0aC5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XG4gIGNoYXJzZXQ6IFwidXRmLThcIixcbiAgdGl0bGU6IFwicXVlcmllIHwgYXNrIHlvdXIgd2lsZGVzdCBxdWVzdGlvbnNcIixcbiAgdmlld3BvcnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBocmVmOiBzdHlsZXMsXG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgIH0sXG4gIF07XG59O1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYm9keToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCJcbiAgICAgICAgICA/IHRoZW1lLmNvbG9ycy5kYXJrWzZdXG4gICAgICAgICAgOiB0aGVtZS5jb2xvcnMuZ3JheVsyXSxcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICB9LFxuICB9O1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0KTtcbiAgcmV0dXJuIHsgdXNlciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB1c2VyID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8TWFudGluZVRoZW1lPlxuICAgICAgICA8TW9kYWxzUHJvdmlkZXI+XG4gICAgICAgICAgPE5vdGlmaWNhdGlvbnNQcm92aWRlclxuICAgICAgICAgICAgbGltaXQ9ezJ9XG4gICAgICAgICAgICBhdXRvQ2xvc2U9ezMwMDB9XG4gICAgICAgICAgICBwb3NpdGlvbj1cInRvcC1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PVwiYm9keVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fT5cbiAgICAgICAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgICAgICA8Q29udGFpbmVyIHNpemU9XCJ4bFwiIHJvbGU9XCJtYWluXCIgbXQ9XCJ4bFwiIHBiPVwieGxcIj5cbiAgICAgICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgICAgICAgbGlua3M9e1tcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vbnVsZnJvc3QvcXVlcmllXCIsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkdpdGh1YlwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Ob3RpZmljYXRpb25zUHJvdmlkZXI+XG4gICAgICAgIDwvTW9kYWxzUHJvdmlkZXI+XG4gICAgICA8L01hbnRpbmVUaGVtZT5cbiAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgPFNjcmlwdHMgLz5cbiAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5mdW5jdGlvbiBNYW50aW5lVGhlbWUoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCBbY29sb3JTY2hlbWUsIHNldENvbG9yU2NoZW1lXSA9IHVzZVN0YXRlPENvbG9yU2NoZW1lPihcImxpZ2h0XCIpO1xuICBjb25zdCB0b2dnbGVDb2xvclNjaGVtZSA9ICh2YWx1ZT86IENvbG9yU2NoZW1lKSA9PlxuICAgIHNldENvbG9yU2NoZW1lKHZhbHVlIHx8IChjb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyBcImxpZ2h0XCIgOiBcImRhcmtcIikpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbG9yU2NoZW1lUHJvdmlkZXJcbiAgICAgIGNvbG9yU2NoZW1lPXtjb2xvclNjaGVtZX1cbiAgICAgIHRvZ2dsZUNvbG9yU2NoZW1lPXt0b2dnbGVDb2xvclNjaGVtZX1cbiAgICA+XG4gICAgICA8TWFudGluZVByb3ZpZGVyXG4gICAgICAgIHRoZW1lPXt7IGNvbG9yU2NoZW1lIH19XG4gICAgICAgIHdpdGhOb3JtYWxpemVDU1NcbiAgICAgICAgd2l0aEdsb2JhbFN0eWxlc1xuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L01hbnRpbmVQcm92aWRlcj5cbiAgICA8L0NvbG9yU2NoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iLCAiaW1wb3J0IHtcbiAgQXZhdGFyLFxuICBCb3gsXG4gIEJ1cmdlcixcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIGNyZWF0ZVN0eWxlcyxcbiAgRGl2aWRlcixcbiAgR3JvdXAsXG4gIE1lbnUsXG4gIFRleHQsXG4gIFVuc3R5bGVkQnV0dG9uLFxuICB1c2VNYW50aW5lQ29sb3JTY2hlbWUsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyB1c2VCb29sZWFuVG9nZ2xlIH0gZnJvbSBcIkBtYW50aW5lL2hvb2tzXCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VTdWJtaXQgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIENoYXJ0QmFyLFxuICBDaGV2cm9uRG93bixcbiAgSGVhcnQsXG4gIExvZ291dCxcbiAgTWVzc2FnZSxcbiAgTW9vbixcbiAgU2V0dGluZ3MsXG4gIFN1bixcbn0gZnJvbSBcInRhYmxlci1pY29ucy1yZWFjdFwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBoZWFkZXI6IHtcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nLnNtLFxuICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIlxuICAgICAgICA/IHRoZW1lLmNvbG9ycy5kYXJrWzZdXG4gICAgICAgIDogdGhlbWUuY29sb3JzLmdyYXlbMF0sXG4gICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyBcInRyYW5zcGFyZW50XCIgOiB0aGVtZS5jb2xvcnMuZ3JheVsyXVxuICAgIH1gLFxuICB9LFxuXG4gIG1haW5TZWN0aW9uOiB7XG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZy5zbSxcbiAgfSxcblxuICB1c2VyTWVudToge1xuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInhzXCIpXToge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgfSxcbiAgfSxcblxuICB1c2VyOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IHRoZW1lLmNvbG9ycy5kYXJrWzBdIDogdGhlbWUuYmxhY2ssXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy54c31weCAke3RoZW1lLnNwYWNpbmcuc219cHhgLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUucmFkaXVzLnNtLFxuICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZC1jb2xvciAxMDBtcyBlYXNlXCIsXG5cbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1s4XSA6IHRoZW1lLndoaXRlLFxuICAgIH0sXG4gIH0sXG5cbiAgYnVyZ2VyOiB7XG4gICAgW3RoZW1lLmZuLmxhcmdlclRoYW4oXCJ4c1wiKV06IHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0sXG4gIH0sXG5cbiAgdXNlckFjdGl2ZToge1xuICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IHRoZW1lLmNvbG9ycy5kYXJrWzhdIDogdGhlbWUud2hpdGUsXG4gIH0sXG4gIGxpbmtzOiB7XG4gICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKFwieHNcIildOiB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9LFxuICB9LFxuICBsb2dvOiB7fSxcbn0pKTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXNlcjogYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTmF2YmFyKHsgdXNlciB9OiBQcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMsIHRoZW1lLCBjeCB9ID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvcGVuZWQsIHRvZ2dsZU9wZW5lZF0gPSB1c2VCb29sZWFuVG9nZ2xlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXJNZW51T3BlbmVkLCBzZXRVc2VyTWVudU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xuXG4gIGNvbnN0IHsgY29sb3JTY2hlbWUsIHRvZ2dsZUNvbG9yU2NoZW1lIH0gPSB1c2VNYW50aW5lQ29sb3JTY2hlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY29tcG9uZW50PVwiaGVhZGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluU2VjdGlvbn0gc2l6ZT1cInhsXCI+XG4gICAgICAgIDxHcm91cCBwb3NpdGlvbj1cImFwYXJ0XCI+XG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgIHRvPVwiL2NhdGVnb3J5XCJcbiAgICAgICAgICAgIHdlaWdodD17NzAwfVxuICAgICAgICAgICAgc2l6ZT1cInhsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJncmFkaWVudFwiXG4gICAgICAgICAgICBncmFkaWVudD17eyBmcm9tOiBcImluZGlnb1wiLCB0bzogXCJjeWFuXCIsIGRlZzogNDUgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBxdWVyaWVcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEJ1cmdlclxuICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVPcGVuZWQoKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXJnZXJ9XG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgeyF1c2VyPy51c2VyICYmIChcbiAgICAgICAgICAgIDxHcm91cCBzcGFjaW5nPXs1fSBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PlxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gdG89XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dXNlcj8udXNlciAmJiAoXG4gICAgICAgICAgICA8R3JvdXA+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PXtMaW5rfSB0bz1cIi9xdWVzdGlvbi9uZXdcIj5cbiAgICAgICAgICAgICAgICBBc2tcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgc2l6ZT17MjYwfVxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImVuZFwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj1cInBvcC10b3AtcmlnaHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VyTWVudX1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRVc2VyTWVudU9wZW5lZChmYWxzZSl9XG4gICAgICAgICAgICAgICAgb25PcGVuPXsoKSA9PiBzZXRVc2VyTWVudU9wZW5lZCh0cnVlKX1cbiAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgIDxVbnN0eWxlZEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KGNsYXNzZXMudXNlciwge1xuICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLnVzZXJBY3RpdmVdOiB1c2VyTWVudU9wZW5lZCxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxHcm91cCBzcGFjaW5nPXs3fT5cbiAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3VzZXI/LnVzZXI/LnBob3Rvc1swXT8udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3VzZXI/LnVzZXI/LmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzPVwieGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjR9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0PXs1MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbGluZUhlaWdodDogMSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbXI9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXI/LnVzZXI/LmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2hldnJvbkRvd24gc2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8L1Vuc3R5bGVkQnV0dG9uPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICAgIGljb249ezxDaGFydEJhciBzaXplPXsxNH0gY29sb3I9e3RoZW1lLmNvbG9ycy5pbmRpZ29bNl19IC8+fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExlYWRlcmJvYXJkXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgaWNvbj17PEhlYXJ0IHNpemU9ezE0fSBjb2xvcj17dGhlbWUuY29sb3JzLnJlZFs2XX0gLz59XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTGlrZWQgcG9zdHNcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICBpY29uPXs8TWVzc2FnZSBzaXplPXsxNH0gY29sb3I9e3RoZW1lLmNvbG9ycy5ibHVlWzZdfSAvPn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBZb3VyIGNvbW1lbnRzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuTGFiZWw+U2V0dGluZ3M8L01lbnUuTGFiZWw+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBpY29uPXs8U2V0dGluZ3Mgc2l6ZT17MTR9IC8+fT5cbiAgICAgICAgICAgICAgICAgIEFjY291bnQgc2V0dGluZ3NcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVDb2xvclNjaGVtZSgpfVxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lID09PSBcImxpZ2h0XCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPFN1biBzaXplPXsxNH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8TW9vbiBzaXplPXsxNH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEN1cnJlbnQgdGhlbWU6IHtjb2xvclNjaGVtZX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICBpY29uPXs8TG9nb3V0IHNpemU9ezE0fSAvPn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdChudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiL2xvZ291dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Hcm91cD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgQ29udGFpbmVyLCBHcm91cCwgQW5jaG9yLCBUaXRsZSB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGZvb3Rlcjoge1xuICAgIG1hcmdpblRvcDogXCJhdXRvXCIsXG4gICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1s1XSA6IHRoZW1lLmNvbG9ycy5ncmF5WzJdXG4gICAgfWAsXG4gICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiXG4gICAgICAgID8gdGhlbWUuY29sb3JzLmRhcmtbNl1cbiAgICAgICAgOiB0aGVtZS5jb2xvcnMuZ3JheVswXSxcbiAgfSxcblxuICBpbm5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcueGwsXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZy54bCxcblxuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInhzXCIpXToge1xuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICB9LFxuICB9LFxuXG4gIGxpbmtzOiB7XG4gICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKFwieHNcIildOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIEZvb3RlclByb3BzIHtcbiAgbGlua3M6IHsgbGluazogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZvb3Rlcih7IGxpbmtzIH06IEZvb3RlclByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGl0ZW1zID0gbGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgPEFuY2hvcjxcImFcIj5cbiAgICAgIGNvbG9yPVwiZGltbWVkXCJcbiAgICAgIGtleT17bGluay5sYWJlbH1cbiAgICAgIGhyZWY9e2xpbmsubGlua31cbiAgICAgIHNpemU9XCJzbVwiXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgID5cbiAgICAgIHtsaW5rLmxhYmVsfVxuICAgIDwvQW5jaG9yPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lcn0gc2l6ZT1cInhsXCI+XG4gICAgICAgIDxUaXRsZSBvcmRlcj17M30+cXVlcmllPC9UaXRsZT5cbiAgICAgICAgPEdyb3VwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rc30+e2l0ZW1zfTwvR3JvdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBBdXRoZW50aWNhdG9yIH0gZnJvbSBcInJlbWl4LWF1dGhcIjtcbmltcG9ydCB7IHNlc3Npb25TdG9yYWdlIH0gZnJvbSBcIn4vc2VydmljZXMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7XG4gIEdvb2dsZVN0cmF0ZWd5LFxuICBTb2NpYWxzUHJvdmlkZXIsXG4gIEdpdEh1YlN0cmF0ZWd5LFxuICBEaXNjb3JkU3RyYXRlZ3ksXG59IGZyb20gXCJyZW1peC1hdXRoLXNvY2lhbHNcIjtcblxuZXhwb3J0IGxldCBhdXRoZW50aWNhdG9yID0gbmV3IEF1dGhlbnRpY2F0b3Ioc2Vzc2lvblN0b3JhZ2UsIHtcbiAgc2Vzc2lvbktleTogXCJfX3Nlc3Npb25cIixcbn0pO1xuXG5hdXRoZW50aWNhdG9yLnVzZShcbiAgbmV3IEdvb2dsZVN0cmF0ZWd5KFxuICAgIHtcbiAgICAgIGNsaWVudElEOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGNhbGxiYWNrVVJMOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvJHtTb2NpYWxzUHJvdmlkZXIuR09PR0xFfS9jYWxsYmFja2AsXG4gICAgfSxcbiAgICBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcbiAgICAgIHJldHVybiBwcm9maWxlO1xuICAgIH1cbiAgKVxuKTtcblxuYXV0aGVudGljYXRvci51c2UoXG4gIG5ldyBEaXNjb3JkU3RyYXRlZ3koXG4gICAge1xuICAgICAgY2xpZW50SUQ6IHByb2Nlc3MuZW52LkRJU0NPUkRfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5ESVNDT1JEX0NMSUVOVF9TRUNSRVQsXG4gICAgICBjYWxsYmFja1VSTDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoLyR7U29jaWFsc1Byb3ZpZGVyLkRJU0NPUkR9L2NhbGxiYWNrYCxcbiAgICB9LFxuICAgIGFzeW5jICh7IHByb2ZpbGUgfSkgPT4ge1xuICAgICAgcmV0dXJuIHByb2ZpbGU7XG4gICAgfVxuICApXG4pO1xuXG5hdXRoZW50aWNhdG9yLnVzZShcbiAgbmV3IEdpdEh1YlN0cmF0ZWd5KFxuICAgIHtcbiAgICAgIGNsaWVudElEOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGNhbGxiYWNrVVJMOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvJHtTb2NpYWxzUHJvdmlkZXIuR0lUSFVCfS9jYWxsYmFja2AsXG4gICAgfSxcbiAgICBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcbiAgICAgIHJldHVybiBwcm9maWxlO1xuICAgIH1cbiAgKVxuKTtcbiIsICJpbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcblxuZXhwb3J0IGxldCBzZXNzaW9uU3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogXCJfX3Nlc3Npb25cIixcbiAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBzZWNyZXRzOiBbcHJvY2Vzcy5lbnYuQ09PS0lFX1NFQ1JFVF0sXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGxldCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24sIGRlc3Ryb3lTZXNzaW9uIH0gPSBzZXNzaW9uU3RvcmFnZTtcbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUocGFyYW1zLnByb3ZpZGVyLCByZXF1ZXN0LCB7XG4gICAgc3VjY2Vzc1JlZGlyZWN0OiBcIi9cIixcbiAgICBmYWlsdXJlUmVkaXJlY3Q6IFwiL2xvZ2luXCIsXG4gIH0pO1xufTtcbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUocGFyYW1zLnByb3ZpZGVyLCByZXF1ZXN0KTtcbn07XG4iLCAiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIE5hdGl2ZVNlbGVjdCxcbiAgVGV4dGFyZWEsXG4gIFRleHRJbnB1dCxcbiAgVGl0bGUsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IEZvcm0sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gXCJ+L2RiL2RiLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGdldENhdGVnb3JpZXMoKTtcblxuICByZXR1cm4geyBjYXRlZ29yaWVzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXcoKSB7XG4gIGNvbnN0IHsgY2F0ZWdvcmllcyB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgbXQ9XCJsZ1wiXG4gICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICBtYXhXaWR0aDogdGhlbWUuYnJlYWtwb2ludHMueHMsXG4gICAgICB9KX1cbiAgICA+XG4gICAgICA8VGl0bGUgb3JkZXI9ezF9IGFsaWduPVwibGVmdFwiPlxuICAgICAgICBBc2sgYSBxdWVzdGlvblxuICAgICAgPC9UaXRsZT5cbiAgICAgIDxCb3ggY29tcG9uZW50PXtGb3JtfT5cbiAgICAgICAgPFRleHRJbnB1dCBsYWJlbD1cIlRpdGxlXCIgbmFtZT1cInRpdGxlXCIgcmVxdWlyZWQgbWF4TGVuZ3RoPXszMH0gbWI9XCJzbVwiIC8+XG4gICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgYXV0b3NpemVcbiAgICAgICAgICBtaW5Sb3dzPXsxMH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQncyBvbiB5b3VyIG1pbmQ/XCJcbiAgICAgICAgICBtYXhMZW5ndGg9ezUwMDB9XG4gICAgICAgICAgbWI9XCJzbVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxOYXRpdmVTZWxlY3RcbiAgICAgICAgICBkYXRhPXtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm5hbWUpfVxuICAgICAgICAgIGxhYmVsPVwiQ2F0ZWdvcnlcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgY2F0ZWdvcnlcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgbWI9XCJzbVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24+UG9zdCBxdWVzdGlvbjwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmludGVyZmFjZSBDdXN0b21Ob2RlSnNHbG9iYWwgZXh0ZW5kcyBOb2RlSlMuR2xvYmFsIHtcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG59XG5cbmRlY2xhcmUgY29uc3QgZ2xvYmFsOiBDdXN0b21Ob2RlSnNHbG9iYWw7XG5cbmNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoKSB7XG4gIHJldHVybiBwcmlzbWEuY2F0ZWdvcnkuZmluZE1hbnkoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExhdGVzdFF1ZXN0aW9uc0ZvckNhdGVnb3J5KGNhdGVnb3J5Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmlzbWEucXVlc3Rpb24uZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICBjYXRlZ29yeToge1xuICAgICAgICBuYW1lOiBjYXRlZ29yeSA/PyBcIlwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuLy8gRXNzZW50aWFsbHkgSSB3YW50IHRvIHN1bSB0aGUgYW1vdW50IG9mIGxpa2VzIGFcbi8vIHBlcnNvbiBoYXMgb24gYm90aCBxdWVzdGlvbnMgdGhleSd2ZSBhc2tlZCBhbmRcbi8vIGNvbW1lbnRzXG4vLyByYXcgcXVlcnk/XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGVhZGVyYm9hcmQoKSB7fVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVlc3Rpb25BbmRDb21tZW50cyhpZDogc3RyaW5nKSB7XG4gIHJldHVybiBwcmlzbWEucXVlc3Rpb24uZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgY29tbWVudHM6IHtcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIGxpa2VzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBjYXRlZ29yeSxcbiAgdXNlcklkLFxufToge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIHByaXNtYS5xdWVzdGlvbi5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBhdXRob3I6IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIGlkOiB1c2VySWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIG5hbWU6IGNhdGVnb3J5LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQoe1xuICBjb250ZW50LFxuICB1c2VySWQsXG4gIHF1ZXN0aW9uSWQsXG59OiB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgdXNlcklkOiBzdHJpbmc7XG4gIHF1ZXN0aW9uSWQ6IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIHByaXNtYS5jb21tZW50LmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgY29udGVudCxcbiAgICAgIGF1dGhvcjoge1xuICAgICAgICBjb25uZWN0OiB7XG4gICAgICAgICAgaWQ6IHVzZXJJZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBxdWVzdGlvbjoge1xuICAgICAgICBjb25uZWN0OiB7XG4gICAgICAgICAgaWQ6IHF1ZXN0aW9uSWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG4vLyBpcyB0aGlzIGV2ZW4gcmlnaHQ/XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUXVlc3Rpb25MaWtlKHtcbiAgcXVlc3Rpb25JZCxcbiAgdXNlcklkLFxufToge1xuICBxdWVzdGlvbklkOiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xufSkge1xuICByZXR1cm4gcHJpc21hLnF1ZXN0aW9uLnVwZGF0ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBxdWVzdGlvbklkLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgbGlrZXM6IHtcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBCb3gsIFRpdGxlIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgT3V0bGV0LCB1c2VMb2FkZXJEYXRhLCB1c2VQYXJhbXMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gXCJ+L2RiL2RiLnNlcnZlclwiO1xuaW1wb3J0IHsgQ2F0ZWdvcmllcyB9IGZyb20gXCJ+L2NvbXBvbmVudHMvdWlcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBnZXRDYXRlZ29yaWVzKCk7XG4gIHJldHVybiB7IGNhdGVnb3JpZXMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5KCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCB7IGNhdGVnb3J5IH0gPSB1c2VQYXJhbXMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IGNvbXBvbmVudD1cIm5hdlwiPlxuICAgICAgICA8VGl0bGUgb3JkZXI9ezF9IG1iPVwibGdcIj5cbiAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgIDwvVGl0bGU+XG4gICAgICAgIDxDYXRlZ29yaWVzIGNhdGVnb3JpZXM9e2RhdGEuY2F0ZWdvcmllc30gLz5cbiAgICAgIDwvQm94PlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgTGlzdCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGxpbmtzOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZ2FwOiBcIjFyZW0gMC41cmVtXCIsXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICB9LFxuICBsaW5rOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMueHMsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5WzZdLFxuICAgIHBhZGRpbmc6IFwiOHB4IDEycHhcIixcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGl1cy5zbSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5WzNdLFxuICB9LFxuICBhY3RpdmVMaW5rOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlWzddLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmJsdWVbMV0sXG4gIH0sXG59KSk7XG5cbnR5cGUgQ2F0ZWdvcnlQcm9wcyA9IHtcbiAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRlZ29yaWVzKHsgY2F0ZWdvcmllcyB9OiBDYXRlZ29yeVByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgY3ggfSA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPExpc3QgbGlzdFN0eWxlVHlwZT1cIm5vbmVcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PlxuICAgICAge2NhdGVnb3JpZXM/Lm1hcCgoeyBpZCwgbmFtZSB9KSA9PiAoXG4gICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIHRvPXtgL2NhdGVnb3J5LyR7bmFtZS50b0xvd2VyQ2FzZSgpfWB9XG4gICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxuICAgICAgICAgICAgICBjeChjbGFzc2VzLmxpbmssIHsgW2NsYXNzZXMuYWN0aXZlTGlua106IGlzQWN0aXZlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICkpfVxuICAgIDwvTGlzdD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyBTb2NpYWxzUHJvdmlkZXIgfSBmcm9tIFwicmVtaXgtYXV0aC1zb2NpYWxzXCI7XG5cbmV4cG9ydCB0eXBlIFNvY2lhbEJ1dHRvblByb3BzID0ge1xuICBwcm92aWRlcjogU29jaWFsc1Byb3ZpZGVyO1xuICBsYWJlbDogc3RyaW5nO1xuICBjb2xvcj86IHN0cmluZztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBTb2NpYWxCdXR0b24oeyBwcm92aWRlciwgbGFiZWwsIGNvbG9yIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBhY3Rpb249e2AvYXV0aC8ke3Byb3ZpZGVyfWB9IG1ldGhvZD1cInBvc3RcIj5cbiAgICAgIDxCdXR0b24gY29sb3I9e2NvbG9yfSB0eXBlPVwic3VibWl0XCIgZnVsbFdpZHRoPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBTaW1wbGVHcmlkLCBUaXRsZSB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlDYXJkIH0gZnJvbSBcIn4vY29tcG9uZW50cy91aS9DYXRlZ29yaWVzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGNhdGVnb3JpZXM6IHtcbiAgICBtYXJnaW46IFwiMCAtOHB4XCIsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnhsLFxuICB9LFxuXG4gIGRpdmlkZXI6IHtcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JheVsxXX1gLFxuICB9LFxufSkpO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gcGFyYW1zLmNhdGVnb3J5O1xuICByZXR1cm4geyBjYXRlZ29yeSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2ltcGxlR3JpZFxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhdGVnb3JpZXN9XG4gICAgICBjb2xzPXsxfVxuICAgICAgYnJlYWtwb2ludHM9e1tcbiAgICAgICAgeyBtaW5XaWR0aDogXCJ4c1wiLCBjb2xzOiAyIH0sXG4gICAgICAgIHsgbWluV2lkdGg6IFwibGdcIiwgY29sczogMyB9LFxuICAgICAgXX1cbiAgICA+XG4gICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogMjAgfSwgKF8sIGluZGV4KSA9PiAoXG4gICAgICAgIDxDYXRlZ29yeUNhcmQgY2F0ZWdvcnk9e2RhdGEuY2F0ZWdvcnl9IC8+XG4gICAgICApKX1cbiAgICA8L1NpbXBsZUdyaWQ+XG4gICk7XG59XG4iLCAiaW1wb3J0IHtcbiAgQWN0aW9uSWNvbixcbiAgQm94LFxuICBDYXJkLFxuICBjcmVhdGVTdHlsZXMsXG4gIEdyb3VwLFxuICBUZXh0LFxuICBUaXRsZSxcbiAgTWVudSxcbn0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgRmxhZzIsIEhlYXJ0LCBDb3B5IH0gZnJvbSBcInRhYmxlci1pY29ucy1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlQWN0aW9uTW9kYWxzIH0gZnJvbSBcIn4vaG9va3MvdXNlQWN0aW9uTW9kYWxzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGNhdGVnb3J5OiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlWzVdLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGJvcmRlcjogYDJweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ncmF5WzNdfWAsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRlZ29yeUNhcmQoeyBjYXRlZ29yeSB9KSB7XG4gIGNvbnN0IHsgcmVwb3J0TW9kYWwgfSA9IHVzZUFjdGlvbk1vZGFscygpO1xuXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjb21wb25lbnQ9XCJhcnRpY2xlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAgPEdyb3VwPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICB0bz17YC9jYXRlZ29yeS8ke2NhdGVnb3J5fWB9XG4gICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhdGVnb3J5fVxuICAgICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICA8L1RleHQ+e1wiIFwifVxuICAgICAgICAgICZzaW07e1wiIFwifVxuICAgICAgICAgIDxUZXh0IHNpemU9XCJ4c1wiIGNvbXBvbmVudD1cInNwYW5cIiBjb2xvcj1cImRpbW1lZFwiPlxuICAgICAgICAgICAgcG9zdGVkIGJ5IGRhbmVcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7LyogPEFjdGlvbkljb24gY29sb3I9XCJyZWRcIiBtbD1cImF1dG9cIj5cbiAgICAgICAgICA8SGVhcnQgc2l6ZT17MTZ9IC8+XG4gICAgICAgIDwvQWN0aW9uSWNvbj4gKi99XG4gICAgICAgIDxNZW51IG1sPVwiYXV0b1wiPlxuICAgICAgICAgIDxNZW51LkxhYmVsPlBvc3Qgb3B0aW9uczwvTWVudS5MYWJlbD5cbiAgICAgICAgICA8TWVudS5JdGVtIGljb249ezxDb3B5IHNpemU9ezE0fSAvPn0+Q29weSBsaW5rIHRvIHBvc3Q8L01lbnUuSXRlbT5cbiAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e3JlcG9ydE1vZGFsfSBpY29uPXs8RmxhZzIgc2l6ZT17MTR9IC8+fT5cbiAgICAgICAgICAgIFJlcG9ydFxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8L01lbnU+XG4gICAgICA8L0dyb3VwPlxuICAgICAgPFRpdGxlXG4gICAgICAgIG9yZGVyPXsyfVxuICAgICAgICBteT1cInNtXCJcbiAgICAgICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLmxnLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAge2NhdGVnb3J5fVxuICAgICAgPC9UaXRsZT5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8VGV4dCBjb2xvcj1cImRpbW1lZFwiIGxpbmVDbGFtcD17Mn0gc2l6ZT1cInNtXCI+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVzdFxuICAgICAgICAgIGFzcGVyaW9yZXMgbWFnbmFtIGV2ZW5pZXQgcGVyZmVyZW5kaXMgbnVsbGEgbmFtLCBjdXBpZGl0YXRlIGN1bSBpdXJlXG4gICAgICAgICAgc2FlcGUgcHJvdmlkZW50IG1vbGVzdGlhcyBtb2xlc3RpYWUgcG9zc2ltdXMgcXVhbSBoYXJ1bSBjb25zZWN0ZXR1clxuICAgICAgICAgIG5vbiBlbGlnZW5kaSBmYWNpbGlzIG9tbmlzLlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8Qm94IGNvbXBvbmVudD1cImZvb3RlclwiIG10PVwibGdcIj5cbiAgICAgICAgPEdyb3VwIGFsaWduPVwiYmFzZWxpbmVcIiBwb3NpdGlvbj1cImFwYXJ0XCI+XG4gICAgICAgICAgPFRleHQgdmFyaWFudD1cImxpbmtcIiBzaXplPVwic21cIj5cbiAgICAgICAgICAgIDc4IGNvbW1lbnRzXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxHcm91cCBzcGFjaW5nPVwieHNcIiBhbGlnbj1cImJhc2VsaW5lXCI+XG4gICAgICAgICAgICA8VGV4dCBjb21wb25lbnQ9XCJ0aW1lXCIgc2l6ZT1cInhzXCIgY29sb3I9XCJkaW1tZWRcIj5cbiAgICAgICAgICAgICAgNCBob3VycyBhZ29cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICA8L0dyb3VwPlxuICAgICAgPC9Cb3g+XG4gICAgPC9DYXJkPlxuICApO1xufVxuIiwgImltcG9ydCB7IHNob3dOb3RpZmljYXRpb24gfSBmcm9tIFwiQG1hbnRpbmUvbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgdXNlTW9kYWxzIH0gZnJvbSBcIkBtYW50aW5lL21vZGFsc1wiO1xuaW1wb3J0IHsgUmFkaW9Hcm91cCwgUmFkaW8gfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWN0aW9uTW9kYWxzKCkge1xuICBjb25zdCBtb2RhbHMgPSB1c2VNb2RhbHMoKTtcbiAgY29uc3QgcmVwb3J0TW9kYWwgPSAoKSA9PiB7XG4gICAgbW9kYWxzLm9wZW5Db25maXJtTW9kYWwoe1xuICAgICAgdGl0bGU6IFwiUmVwb3J0IHBvc3RcIixcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgY2hpbGRyZW46IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8UmFkaW9Hcm91cFxuICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBzZWxlY3QgYSByZWFzb24gZm9yIHJlcG9ydGluZyB0aGlzIHBvc3QuXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBtYj1cInhsXCJcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJoYXJtZnVsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJoYXJtZnVsXCIgbGFiZWw9XCJIYXJtZnVsIGNvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiaGF0ZVwiIGxhYmVsPVwiSGF0ZSBzcGVlY2hcIiAvPlxuICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwic3BhbVwiIGxhYmVsPVwiU3BhbVwiIC8+XG4gICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJpbmNvcnJlY3RcIiBsYWJlbD1cIlBvc3RlZCBpbiB0aGUgd3Jvbmcgc2VjdGlvblwiIC8+XG4gICAgICAgICAgPC9SYWRpb0dyb3VwPlxuICAgICAgICA8Lz5cbiAgICAgICksXG4gICAgICBsYWJlbHM6IHsgY29uZmlybTogXCJSZXBvcnQgcG9zdFwiLCBjYW5jZWw6IFwiQ2FuY2VsXCIgfSxcbiAgICAgIG9uQ2FuY2VsOiAoKSA9PiBjb25zb2xlLmxvZyhcIkNhbmNlbFwiKSxcbiAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICB0aXRsZTogXCJQb3N0IHJlcG9ydGVkXCIsXG4gICAgICAgICAgbWVzc2FnZTogXCJUaGFuayB5b3UgZm9yIHJlcG9ydGluZyB0aGlzIHBvc3QgYW5kIGtlZXBpbmcgcXVlcmllIHNhZmUuXCIsXG4gICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVwb3J0TW9kYWwgfTtcbn1cbiIsICJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IG10PVwieGxcIj5cbiAgICAgIDxkaXY+dGhpcyBpcyBzb21ldGhpbmc8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgYXdhaXQgYXV0aGVudGljYXRvci5sb2dvdXQocmVxdWVzdCwgeyByZWRpcmVjdFRvOiBcIi9cIiB9KTtcbn07XG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdChcIi9jYXRlZ29yeVwiKTtcbn07XG4iLCAiaW1wb3J0IHsgQ29udGFpbmVyLCBTdGFjaywgVGV4dCwgVGl0bGUgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBTb2NpYWxzUHJvdmlkZXIgfSBmcm9tIFwicmVtaXgtYXV0aC1zb2NpYWxzXCI7XG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSBcIn4vc2VydmljZXMvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNvY2lhbEJ1dHRvbiB9IGZyb20gXCJ+L2NvbXBvbmVudHMvdWlcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBzdWNjZXNzUmVkaXJlY3Q6IFwiL1wiLFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbXQ9XCJ4bFwiIHNpemU9XCJsZ1wiPlxuICAgICAgPFN0YWNrIGFsaWduPVwic3RyZXRjaFwiPlxuICAgICAgICA8VGl0bGUgb3JkZXI9ezF9IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgTG9nIGluXG4gICAgICAgIDwvVGl0bGU+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwiZGltbWVkXCIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgQ29udGludWUgd2l0aCBvbmUgb2YgdGhlc2UgcHJvdmlkZXJzXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFNvY2lhbEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwiaW5kaWdvXCJcbiAgICAgICAgICBwcm92aWRlcj17U29jaWFsc1Byb3ZpZGVyLkRJU0NPUkR9XG4gICAgICAgICAgbGFiZWw9XCJMb2dpbiB3aXRoIERpc2NvcmRcIlxuICAgICAgICAvPlxuICAgICAgICA8U29jaWFsQnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgIHByb3ZpZGVyPXtTb2NpYWxzUHJvdmlkZXIuR09PR0xFfVxuICAgICAgICAgIGxhYmVsPVwiTG9naW4gd2l0aCBHb29nbGVcIlxuICAgICAgICAvPlxuICAgICAgICA8U29jaWFsQnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICBwcm92aWRlcj17U29jaWFsc1Byb3ZpZGVyLkdJVEhVQn1cbiAgICAgICAgICBsYWJlbD1cIkxvZ2luIHdpdGggR2l0aHViXCJcbiAgICAgICAgLz5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonOGI1YzQ5ZDInLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUJJNE9VSU5YLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RWkhPUVdIUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNXWE1ZVkFHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkZSTFJYWUguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02WlJOUU1DUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU1DUlNVRU42LmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1CRTdQUTRZUy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNEZDRjRVM0IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GM05SV05MSC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoLyRwcm92aWRlcic6eydpZCc6J3JvdXRlcy9hdXRoLyRwcm92aWRlcicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoLzpwcm92aWRlcicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoLyRwcm92aWRlci1NT1BTVVQzSC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQUNQREgyM0EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LNUs2Nk1PRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2snOnsnaWQnOidyb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2snLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC86cHJvdmlkZXIvY2FsbGJhY2snLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2stNlJFSzNDQzIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NhdGVnb3J5Jzp7J2lkJzoncm91dGVzL2NhdGVnb3J5JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NhdGVnb3J5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NhdGVnb3J5LVNRNkJHWVk3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HU0YzVVhQRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnknOnsnaWQnOidyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5JywncGFyZW50SWQnOidyb3V0ZXMvY2F0ZWdvcnknLCdwYXRoJzonOmNhdGVnb3J5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS1URk42QVFIMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNEZDRjRVM0IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GM05SV05MSC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jYXRlZ29yeS9pbmRleCc6eydpZCc6J3JvdXRlcy9jYXRlZ29yeS9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2NhdGVnb3J5JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NhdGVnb3J5L2luZGV4LVZZNUg1RU5ZLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1GM05SV05MSC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtTFBLSEFRV0kuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUFDUERIMjNBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSzVLNjZNT0QuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4nOnsnaWQnOidyb3V0ZXMvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9naW4tMlI0UjZWTEUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUs1SzY2TU9ELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1g2NkFZRjQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9nb3V0Jzp7J2lkJzoncm91dGVzL2xvZ291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9nb3V0LUhGM0hNVU1ULmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDY2QVlGNC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9xdWVzdGlvbi9uZXcnOnsnaWQnOidyb3V0ZXMvcXVlc3Rpb24vbmV3JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3F1ZXN0aW9uL25ldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9xdWVzdGlvbi9uZXctWlU2TDRONE4uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdTRjNVWFBFLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC04QjVDNDlEMi5qcyd9OyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9hdXRoLyRwcm92aWRlci5jYWxsYmFjay50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvYXV0aC8kcHJvdmlkZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL3F1ZXN0aW9uL25ldy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2tcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvOnByb3ZpZGVyL2NhbGxiYWNrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoLyRwcm92aWRlclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC8kcHJvdmlkZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC86cHJvdmlkZXJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3F1ZXN0aW9uL25ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcXVlc3Rpb24vbmV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInF1ZXN0aW9uL25ld1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvY2F0ZWdvcnlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NhdGVnb3J5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNhdGVnb3J5XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2NhdGVnb3J5XCIsXG4gICAgICBwYXRoOiBcIjpjYXRlZ29yeVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2F0ZWdvcnkvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NhdGVnb3J5L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvY2F0ZWdvcnlcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9sb2dvdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfVxuICB9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNDQSxZQUF1Qjs7O0FDRHZC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
