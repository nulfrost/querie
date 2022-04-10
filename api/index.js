var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) =>
  __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (
    (module2 && typeof module2 === "object") ||
    typeof module2 === "function"
  ) {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, {
          get: () => module2[key],
          enumerable:
            !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable,
        });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(
    __markAsModule(
      __defProp(
        module2 != null ? __create(__getProtoOf(module2)) : {},
        "default",
        !isNodeMode && module2 && module2.__esModule
          ? { get: () => module2.default, enumerable: true }
          : { value: module2, enumerable: true }
      )
    ),
    module2
  );
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return (
      (cache && cache.get(module2)) ||
      ((temp = __reExport(__markAsModule({}), module2, 1)),
      cache && cache.set(module2, temp),
      temp)
    );
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes,
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest,
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
var import_ssr = require("@mantine/ssr");
function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  const markup = (0, import_server.renderToString)(
    /* @__PURE__ */ React.createElement(import_react.RemixServer, {
      context: remixContext,
      url: request.url,
    })
  );
  responseHeaders.set("Content-Type", "text/html");
  return new Response(
    `<!DOCTYPE html>${(0, import_ssr.injectStylesIntoStaticMarkup)(markup)}`,
    {
      status: responseStatusCode,
      headers: responseHeaders,
    }
  );
}

// route:/Users/dane/Desktop/github/react/querie/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta,
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
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[2]
    }`,
  },
  mainSection: {
    paddingBottom: theme.spacing.sm,
  },
  userMenu: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    },
  },
  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },
  userActive: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },
  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  logo: {},
}));
function Navbar({ user }) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { classes, cx } = useStyles();
  const [opened, toggleOpened] = (0, import_hooks.useBooleanToggle)(false);
  const [userMenuOpened, setUserMenuOpened] = (0, import_react3.useState)(
    false
  );
  const submit = (0, import_react2.useSubmit)();
  const { colorScheme, toggleColorScheme } = (0,
  import_core.useMantineColorScheme)();
  return /* @__PURE__ */ React.createElement(
    import_core.Box,
    {
      component: "header",
      className: classes.header,
    },
    /* @__PURE__ */ React.createElement(
      import_core.Container,
      {
        className: classes.mainSection,
        size: "xl",
      },
      /* @__PURE__ */ React.createElement(
        import_core.Group,
        {
          position: "apart",
        },
        /* @__PURE__ */ React.createElement(
          import_core.Text,
          {
            component: import_react2.Link,
            to: "/category",
            weight: 700,
            size: "xl",
            variant: "gradient",
            gradient: { from: "indigo", to: "cyan", deg: 45 },
          },
          "querie"
        ),
        /* @__PURE__ */ React.createElement(import_core.Burger, {
          opened,
          onClick: () => toggleOpened(),
          className: classes.burger,
          size: "sm",
        }),
        !((_a = user == null ? void 0 : user.user) == null
          ? void 0
          : _a.profile) &&
          /* @__PURE__ */ React.createElement(
            import_core.Group,
            {
              spacing: 20,
              className: classes.links,
            },
            /* @__PURE__ */ React.createElement(
              import_core.Anchor,
              {
                component: import_react2.Link,
                to: "/leaderboard",
              },
              "Leaderboard"
            ),
            /* @__PURE__ */ React.createElement(
              import_core.Button,
              {
                component: import_react2.Link,
                to: "/login",
              },
              "Login"
            )
          ),
        ((_b = user == null ? void 0 : user.user) == null
          ? void 0
          : _b.profile) &&
          /* @__PURE__ */ React.createElement(
            import_core.Group,
            null,
            /* @__PURE__ */ React.createElement(
              import_core.Button,
              {
                component: import_react2.Link,
                to: "/question/new",
              },
              "Ask a question"
            ),
            /* @__PURE__ */ React.createElement(
              import_core.Menu,
              {
                size: 260,
                placement: "end",
                transition: "pop-top-right",
                className: classes.userMenu,
                onClose: () => setUserMenuOpened(false),
                onOpen: () => setUserMenuOpened(true),
                control: /* @__PURE__ */ React.createElement(
                  import_core.UnstyledButton,
                  {
                    className: cx(classes.user, {
                      [classes.userActive]: userMenuOpened,
                    }),
                  },
                  /* @__PURE__ */ React.createElement(
                    import_core.Group,
                    {
                      spacing: 7,
                    },
                    /* @__PURE__ */ React.createElement(import_core.Avatar, {
                      src:
                        (_d =
                          (_c = user == null ? void 0 : user.user) == null
                            ? void 0
                            : _c.profile) == null
                          ? void 0
                          : _d.image_url,
                      alt:
                        (_f =
                          (_e = user == null ? void 0 : user.user) == null
                            ? void 0
                            : _e.profile) == null
                          ? void 0
                          : _f.username,
                      radius: "xl",
                      size: 24,
                    }),
                    /* @__PURE__ */ React.createElement(
                      import_core.Text,
                      {
                        weight: 500,
                        size: "sm",
                        sx: { lineHeight: 1 },
                        mr: 3,
                      },
                      (_h =
                        (_g = user == null ? void 0 : user.user) == null
                          ? void 0
                          : _g.profile) == null
                        ? void 0
                        : _h.username
                    ),
                    /* @__PURE__ */ React.createElement(
                      import_tabler_icons_react.ChevronDown,
                      {
                        size: 12,
                      }
                    )
                  )
                ),
              },
              /* @__PURE__ */ React.createElement(
                import_core.Menu.Item,
                {
                  component: import_react2.Link,
                  to: "/leaderboard",
                  icon: /* @__PURE__ */ React.createElement(
                    import_tabler_icons_react.ChartBar,
                    {
                      size: 14,
                    }
                  ),
                },
                "Leaderboard"
              ),
              /* @__PURE__ */ React.createElement(
                import_core.Menu.Label,
                null,
                "Settings"
              ),
              /* @__PURE__ */ React.createElement(
                import_core.Menu.Item,
                {
                  icon: /* @__PURE__ */ React.createElement(
                    import_tabler_icons_react.Settings,
                    {
                      size: 14,
                    }
                  ),
                },
                "Account settings"
              ),
              /* @__PURE__ */ React.createElement(
                import_core.Menu.Item,
                {
                  onClick: () => toggleColorScheme(),
                  icon:
                    colorScheme === "light"
                      ? /* @__PURE__ */ React.createElement(
                          import_tabler_icons_react.Sun,
                          {
                            size: 14,
                          }
                        )
                      : /* @__PURE__ */ React.createElement(
                          import_tabler_icons_react.Moon,
                          {
                            size: 14,
                          }
                        ),
                },
                "Current theme: ",
                colorScheme,
                " "
              ),
              /* @__PURE__ */ React.createElement(import_core.Divider, null),
              /* @__PURE__ */ React.createElement(
                import_core.Menu.Item,
                {
                  icon: /* @__PURE__ */ React.createElement(
                    import_tabler_icons_react.Logout,
                    {
                      size: 14,
                    }
                  ),
                  onClick: () =>
                    submit(null, {
                      method: "post",
                      action: "/logout",
                      replace: true,
                    }),
                },
                "Logout"
              )
            )
          )
      )
    )
  );
}

// app/styles/globals.css
var globals_default = "/build/_assets/globals-6ERIYNWR.css";

// app/components/Layout/Footer.tsx
var import_core2 = require("@mantine/core");
var useStyles2 = (0, import_core2.createStyles)((theme) => ({
  footer: {
    marginTop: "auto",
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },
  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));
function Footer({ links: links2 }) {
  const { classes } = useStyles2();
  const items = links2.map((link) =>
    /* @__PURE__ */ React.createElement(
      import_core2.Anchor,
      {
        color: "dimmed",
        key: link.label,
        href: link.link,
        size: "sm",
        target: "_blank",
      },
      link.label
    )
  );
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: classes.footer,
    },
    /* @__PURE__ */ React.createElement(
      import_core2.Container,
      {
        className: classes.inner,
        size: "xl",
      },
      /* @__PURE__ */ React.createElement(
        import_core2.Title,
        {
          order: 3,
        },
        "querie"
      ),
      /* @__PURE__ */ React.createElement(
        import_core2.Group,
        {
          className: classes.links,
        },
        items
      )
    )
  );
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
    secure: false,
  },
});
var { getSession, commitSession, destroySession } = sessionStorage;

// app/services/auth.server.ts
var import_remix_auth_socials = require("remix-auth-socials");

// app/db/db.server.ts
var import_client = require("@prisma/client");
var prisma = global.prisma || new import_client.PrismaClient();
if (true) global.prisma = prisma;
async function getCategories() {
  return prisma.category.findMany();
}
async function findOrCreateUser(profile) {
  var _a;
  try {
    const user = await prisma.user.upsert({
      where: {
        email:
          (_a = profile == null ? void 0 : profile.emails[0]) == null
            ? void 0
            : _a.value,
      },
      update: {
        username: profile == null ? void 0 : profile.displayName,
        connection: profile == null ? void 0 : profile.provider,
        image_url: profile == null ? void 0 : profile.photos[0].value,
      },
      create: {
        email: profile == null ? void 0 : profile.emails[0].value,
        username: profile == null ? void 0 : profile.displayName,
        connection: profile == null ? void 0 : profile.provider,
        image_url: profile == null ? void 0 : profile.photos[0].value,
      },
    });
    return {
      profile: user,
    };
  } catch (error) {
    console.error(error);
    throw new Response("Server Error", { status: 500 });
  }
}

// app/services/auth.server.ts
var authenticator = new import_remix_auth.Authenticator(sessionStorage, {
  sessionKey: "__session",
});
authenticator.use(
  new import_remix_auth_socials.GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `http://localhost:3000/auth/${import_remix_auth_socials.SocialsProvider.GOOGLE}/callback`,
    },
    async ({ profile }) => {
      const user = await findOrCreateUser(profile);
      return user;
    }
  )
);
authenticator.use(
  new import_remix_auth_socials.DiscordStrategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: `http://localhost:3000/auth/${import_remix_auth_socials.SocialsProvider.DISCORD}/callback`,
    },
    async ({ profile }) => {
      const user = await findOrCreateUser(profile);
      return user;
    }
  )
);
authenticator.use(
  new import_remix_auth_socials.GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `http://localhost:3000/auth/${import_remix_auth_socials.SocialsProvider.GITHUB}/callback`,
    },
    async ({ profile }) => {
      const user = await findOrCreateUser(profile);
      return user;
    }
  )
);

// route:/Users/dane/Desktop/github/react/querie/app/root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "querie | ask your wildest questions",
  viewport: "width=device-width,initial-scale=1",
});
var links = () => {
  return [
    {
      href: globals_default,
      rel: "stylesheet",
    },
  ];
};
var useStyles3 = (0, import_core3.createStyles)((theme) => {
  return {
    body: {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[2],
      display: "flex",
      flexDirection: "column",
    },
    container: {
      width: "100%",
    },
  };
});
var loader = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);
  return { user };
};
function App() {
  const user = (0, import_react4.useLoaderData)();
  const { classes } = useStyles3();
  return /* @__PURE__ */ React.createElement(
    "html",
    {
      lang: "en",
    },
    /* @__PURE__ */ React.createElement(
      "head",
      null,
      /* @__PURE__ */ React.createElement(import_react4.Meta, null),
      /* @__PURE__ */ React.createElement(import_react4.Links, null)
    ),
    /* @__PURE__ */ React.createElement(
      MantineTheme,
      null,
      /* @__PURE__ */ React.createElement(
        import_modals.ModalsProvider,
        null,
        /* @__PURE__ */ React.createElement(
          import_notifications.NotificationsProvider,
          {
            limit: 2,
            autoClose: 3e3,
            position: "top-center",
          },
          /* @__PURE__ */ React.createElement(
            import_core3.Box,
            {
              component: "body",
              className: classes.body,
            },
            /* @__PURE__ */ React.createElement(Navbar, {
              user,
            }),
            /* @__PURE__ */ React.createElement(
              import_core3.Container,
              {
                size: "xl",
                role: "main",
                mt: "xl",
                pb: "xl",
                className: classes.container,
              },
              /* @__PURE__ */ React.createElement(import_react4.Outlet, null)
            ),
            /* @__PURE__ */ React.createElement(Footer, {
              links: [
                {
                  link: "https://github.com/nulfrost/querie",
                  label: "Github",
                },
              ],
            })
          )
        )
      )
    ),
    /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null),
    /* @__PURE__ */ React.createElement(import_react4.Scripts, null),
    /* @__PURE__ */ React.createElement(import_react4.LiveReload, null)
  );
}
function MantineTheme({ children }) {
  const [colorScheme, setColorScheme] = (0, import_react5.useState)("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return /* @__PURE__ */ React.createElement(
    import_core3.ColorSchemeProvider,
    {
      colorScheme,
      toggleColorScheme,
    },
    /* @__PURE__ */ React.createElement(
      import_core3.MantineProvider,
      {
        theme: { colorScheme },
        withNormalizeCSS: true,
        withGlobalStyles: true,
      },
      children
    )
  );
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/auth/$provider.callback.tsx
var provider_callback_exports = {};
__export(provider_callback_exports, {
  loader: () => loader2,
});
var loader2 = ({ request, params }) => {
  return authenticator.authenticate(params.provider, request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
};

// route:/Users/dane/Desktop/github/react/querie/app/routes/auth/$provider.tsx
var provider_exports = {};
__export(provider_exports, {
  action: () => action,
  loader: () => loader3,
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
  loader: () => loader4,
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
  return /* @__PURE__ */ React.createElement(
    import_core4.Box,
    {
      mt: "lg",
      sx: (theme) => ({
        maxWidth: theme.breakpoints.xs,
        margin: "0 auto",
      }),
    },
    /* @__PURE__ */ React.createElement(
      import_core4.Title,
      {
        order: 1,
        align: "left",
        mb: "lg",
      },
      "Ask a question"
    ),
    /* @__PURE__ */ React.createElement(
      import_core4.Box,
      {
        component: import_react6.Form,
        method: "post",
        action: ".",
        sx: {
          display: "flex",
          flexDirection: "column",
        },
      },
      /* @__PURE__ */ React.createElement(import_core4.TextInput, {
        label: "Title",
        name: "title",
        required: true,
        maxLength: 30,
        mb: "sm",
      }),
      /* @__PURE__ */ React.createElement(import_core4.Textarea, {
        label: "Description",
        required: true,
        autosize: true,
        minRows: 10,
        placeholder: "What's on your mind?",
        maxLength: 5e3,
        mb: "sm",
      }),
      /* @__PURE__ */ React.createElement(import_core4.NativeSelect, {
        data: categoryNames,
        label: "Category",
        placeholder: "Choose a category",
        required: true,
        mb: "sm",
      }),
      /* @__PURE__ */ React.createElement(
        import_core4.Button,
        {
          sx: { alignSelf: "flex-end" },
          type: "submit",
        },
        "Post question"
      )
    )
  );
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/leaderboard.tsx
var leaderboard_exports = {};
__export(leaderboard_exports, {
  default: () => Leaderboard,
});
var import_core5 = require("@mantine/core");
var import_core6 = require("@mantine/core");
var useStyles4 = (0, import_core6.createStyles)((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors.gray[2],
  },
}));
function Leaderboard() {
  const data = [
    {
      id: "1",
      avatar:
        "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      name: "Robert Wolfkisser",
      job: "Engineer",
    },
    {
      id: "2",
      avatar:
        "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      name: "Jill Jailbreaker",
      job: "Engineer",
    },
    {
      id: "3",
      avatar:
        "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      name: "Henry Silkeater",
      job: "Designer",
    },
    {
      id: "4",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      name: "Bill Horsefighter",
      job: "Designer",
    },
    {
      id: "5",
      avatar:
        "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      name: "Jeremy Footviewer",
      job: "Manager",
    },
  ];
  const { classes, cx } = useStyles4();
  const rows = data.map((item) => {
    return /* @__PURE__ */ React.createElement(
      "tr",
      {
        key: item.id,
      },
      /* @__PURE__ */ React.createElement(
        "td",
        null,
        /* @__PURE__ */ React.createElement(
          import_core6.Group,
          {
            spacing: "sm",
          },
          /* @__PURE__ */ React.createElement(import_core6.Avatar, {
            size: 26,
            src: item.avatar,
            radius: 26,
          }),
          /* @__PURE__ */ React.createElement(
            import_core6.Text,
            {
              size: "sm",
              weight: 500,
            },
            item.name
          )
        )
      ),
      /* @__PURE__ */ React.createElement("td", null, item.job)
    );
  });
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      import_core5.Title,
      {
        order: 1,
      },
      "Leaderboard"
    ),
    /* @__PURE__ */ React.createElement(
      import_core6.ScrollArea,
      null,
      /* @__PURE__ */ React.createElement(
        import_core6.Table,
        {
          sx: { minWidth: 800 },
          verticalSpacing: "sm",
          className: classes.rowSelected,
        },
        /* @__PURE__ */ React.createElement(
          "thead",
          null,
          /* @__PURE__ */ React.createElement(
            "tr",
            null,
            /* @__PURE__ */ React.createElement("th", null, "User"),
            /* @__PURE__ */ React.createElement("th", null, "Points")
          )
        ),
        /* @__PURE__ */ React.createElement("tbody", null, rows)
      )
    )
  );
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category.tsx
var category_exports = {};
__export(category_exports, {
  default: () => Category,
  loader: () => loader5,
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
    flexWrap: "wrap",
  },
  link: {
    textDecoration: "none",
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    color: theme.colors.gray[6],
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.gray[3],
  },
  activeLink: {
    color: theme.colors.blue[7],
    backgroundColor: theme.colors.blue[1],
  },
}));
function Categories({ categories }) {
  const { classes, cx } = useStyles5();
  return /* @__PURE__ */ React.createElement(
    import_core7.List,
    {
      listStyleType: "none",
      className: classes.links,
    },
    categories == null
      ? void 0
      : categories.map(({ id, name }) =>
          /* @__PURE__ */ React.createElement(
            import_core7.List.Item,
            null,
            /* @__PURE__ */ React.createElement(
              import_react7.NavLink,
              {
                to: `/category/${name.toLowerCase()}`,
                key: id,
                className: ({ isActive }) =>
                  cx(classes.link, { [classes.activeLink]: isActive }),
              },
              name
            )
          )
        )
  );
}

// app/components/ui/SocialButton.tsx
var import_core8 = require("@mantine/core");
var import_react8 = require("@remix-run/react");
function SocialButton({ provider, label, color }) {
  return /* @__PURE__ */ React.createElement(
    import_react8.Form,
    {
      action: `/auth/${provider}`,
      method: "post",
    },
    /* @__PURE__ */ React.createElement(
      import_core8.Button,
      {
        color,
        type: "submit",
        fullWidth: true,
      },
      label
    )
  );
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category.tsx
var loader5 = async () => {
  const categories = await getCategories();
  return { categories };
};
function Category() {
  const data = (0, import_react9.useLoaderData)();
  const { category } = (0, import_react9.useParams)();
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      import_core9.Box,
      {
        component: "nav",
      },
      /* @__PURE__ */ React.createElement(
        import_core9.Title,
        {
          order: 1,
          mb: "lg",
        },
        category ? category : "Latest questions"
      ),
      /* @__PURE__ */ React.createElement(Categories, {
        categories: data.categories,
      })
    ),
    /* @__PURE__ */ React.createElement(import_react9.Outlet, null)
  );
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/$category.tsx
var category_exports2 = {};
__export(category_exports2, {
  default: () => Category2,
  loader: () => loader6,
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
      children: /* @__PURE__ */ React.createElement(
        React.Fragment,
        null,
        /* @__PURE__ */ React.createElement(
          import_core10.RadioGroup,
          {
            orientation: "vertical",
            label: "Please select a reason for reporting this post.",
            required: true,
            mb: "xl",
            size: "sm",
            defaultValue: "harmful",
          },
          /* @__PURE__ */ React.createElement(import_core10.Radio, {
            value: "harmful",
            label: "Harmful content",
          }),
          /* @__PURE__ */ React.createElement(import_core10.Radio, {
            value: "hate",
            label: "Hate speech",
          }),
          /* @__PURE__ */ React.createElement(import_core10.Radio, {
            value: "spam",
            label: "Spam",
          }),
          /* @__PURE__ */ React.createElement(import_core10.Radio, {
            value: "incorrect",
            label: "Posted in the wrong section",
          })
        )
      ),
      labels: { confirm: "Report post", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => {
        (0, import_notifications2.showNotification)({
          title: "Post reported",
          message: "Thank you for reporting this post and keeping querie safe.",
          color: "blue",
        });
      },
    });
  };
  return { reportModal };
}

// app/components/ui/Categories/CategoryCard.tsx
var useStyles6 = (0, import_core11.createStyles)((theme) => ({
  category: {
    color: theme.colors.blue[5],
    fontWeight: 700,
  },
  card: {
    border: `2px solid ${theme.colors.gray[3]}`,
  },
}));
function CategoryCard({ category }) {
  const { reportModal } = useActionModals();
  const { classes } = useStyles6();
  return /* @__PURE__ */ React.createElement(
    import_core11.Card,
    {
      component: "article",
      className: classes.card,
    },
    /* @__PURE__ */ React.createElement(
      import_core11.Group,
      null,
      /* @__PURE__ */ React.createElement(
        import_core11.Box,
        null,
        /* @__PURE__ */ React.createElement(
          import_core11.Text,
          {
            to: `/category/${category}`,
            size: "xs",
            component: import_react10.Link,
            className: classes.category,
            variant: "link",
          },
          category
        ),
        " ",
        "\u223C",
        " ",
        /* @__PURE__ */ React.createElement(
          import_core11.Text,
          {
            size: "xs",
            component: "span",
            color: "dimmed",
          },
          "posted by dane"
        )
      ),
      /* @__PURE__ */ React.createElement(
        import_core11.Menu,
        {
          ml: "auto",
        },
        /* @__PURE__ */ React.createElement(
          import_core11.Menu.Label,
          null,
          "Post options"
        ),
        /* @__PURE__ */ React.createElement(
          import_core11.Menu.Item,
          {
            icon: /* @__PURE__ */ React.createElement(
              import_tabler_icons_react2.Copy,
              {
                size: 14,
              }
            ),
          },
          "Copy link to post"
        ),
        /* @__PURE__ */ React.createElement(
          import_core11.Menu.Item,
          {
            onClick: reportModal,
            icon: /* @__PURE__ */ React.createElement(
              import_tabler_icons_react2.Flag2,
              {
                size: 14,
              }
            ),
          },
          "Report"
        )
      )
    ),
    /* @__PURE__ */ React.createElement(
      import_core11.Title,
      {
        order: 2,
        my: "sm",
        sx: (theme) => ({
          fontSize: theme.fontSizes.lg,
        }),
      },
      category
    ),
    /* @__PURE__ */ React.createElement(
      "section",
      null,
      /* @__PURE__ */ React.createElement(
        import_core11.Text,
        {
          color: "dimmed",
          lineClamp: 2,
          size: "sm",
        },
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores magnam eveniet perferendis nulla nam, cupiditate cum iure saepe provident molestias molestiae possimus quam harum consectetur non eligendi facilis omnis."
      )
    ),
    /* @__PURE__ */ React.createElement(
      import_core11.Box,
      {
        component: "footer",
        mt: "lg",
      },
      /* @__PURE__ */ React.createElement(
        import_core11.Group,
        {
          align: "baseline",
          position: "apart",
        },
        /* @__PURE__ */ React.createElement(
          import_core11.Text,
          {
            variant: "link",
            size: "sm",
          },
          "78 comments"
        ),
        /* @__PURE__ */ React.createElement(
          import_core11.Group,
          {
            spacing: "xs",
            align: "baseline",
          },
          /* @__PURE__ */ React.createElement(
            import_core11.Text,
            {
              component: "time",
              size: "xs",
              color: "dimmed",
            },
            "4 hours ago"
          )
        )
      )
    )
  );
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/$category.tsx
var useStyles7 = (0, import_core12.createStyles)((theme) => ({
  categories: {
    margin: `${theme.spacing.xl}px -8px`,
  },
  divider: {
    border: `1px solid ${theme.colors.gray[1]}`,
  },
}));
var loader6 = async ({ params }) => {
  const category = params.category;
  return { category };
};
function Category2() {
  const data = (0, import_react11.useLoaderData)();
  const { classes } = useStyles7();
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      import_core12.SimpleGrid,
      {
        className: classes.categories,
        cols: 1,
        breakpoints: [
          { minWidth: "xs", cols: 2 },
          { minWidth: "lg", cols: 3 },
        ],
      },
      Array.from({ length: 20 }, (_, index) =>
        /* @__PURE__ */ React.createElement(CategoryCard, {
          category: data.category,
          key: index,
        })
      )
    ),
    /* @__PURE__ */ React.createElement(import_core12.Pagination, {
      total: 10,
      position: "center",
    })
  );
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/category/index.tsx
var category_exports3 = {};
__export(category_exports3, {
  default: () => Index,
});
var import_core13 = require("@mantine/core");
function Index() {
  return /* @__PURE__ */ React.createElement(
    import_core13.Box,
    {
      mt: "xl",
    },
    /* @__PURE__ */ React.createElement("div", null, "this is something")
  );
}

// route:/Users/dane/Desktop/github/react/querie/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action3,
});
var action3 = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/category" });
};

// route:/Users/dane/Desktop/github/react/querie/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader7,
});
var import_node4 = require("@remix-run/node");
var loader7 = () => {
  return (0, import_node4.redirect)("/category");
};

// route:/Users/dane/Desktop/github/react/querie/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login,
  loader: () => loader8,
});
var import_core14 = require("@mantine/core");
var import_remix_auth_socials2 = require("remix-auth-socials");
var loader8 = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
};
function Login() {
  return /* @__PURE__ */ React.createElement(
    import_core14.Container,
    {
      mt: "xl",
      size: "lg",
      sx: {
        maxWidth: "300px",
      },
    },
    /* @__PURE__ */ React.createElement(
      import_core14.Stack,
      {
        align: "stretch",
      },
      /* @__PURE__ */ React.createElement(
        import_core14.Title,
        {
          order: 1,
          align: "center",
        },
        "Log in"
      ),
      /* @__PURE__ */ React.createElement(
        import_core14.Text,
        {
          color: "dimmed",
          size: "sm",
          align: "center",
        },
        "Continue with one of these providers"
      ),
      /* @__PURE__ */ React.createElement(SocialButton, {
        color: "indigo",
        provider: import_remix_auth_socials2.SocialsProvider.DISCORD,
        label: "Login with Discord",
      }),
      /* @__PURE__ */ React.createElement(SocialButton, {
        color: "red",
        provider: import_remix_auth_socials2.SocialsProvider.GOOGLE,
        label: "Login with Google",
      }),
      /* @__PURE__ */ React.createElement(SocialButton, {
        color: "dark",
        provider: import_remix_auth_socials2.SocialsProvider.GITHUB,
        label: "Login with Github",
      })
    )
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = {
  version: "8d4ed64f",
  entry: {
    module: "/build/entry.client-PUDXDUX3.js",
    imports: [
      "/build/_shared/chunk-PVRR4DGQ.js",
      "/build/_shared/chunk-3WXMYVAG.js",
      "/build/_shared/chunk-6FRLRXYH.js",
      "/build/_shared/chunk-6ZRNQMCP.js",
      "/build/_shared/chunk-MCRSUEN6.js",
    ],
  },
  routes: {
    root: {
      id: "root",
      parentId: void 0,
      path: "",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/root-YDAHLOM4.js",
      imports: [
        "/build/_shared/chunk-DIDBE3HX.js",
        "/build/_shared/chunk-QG4L5I26.js",
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/auth/$provider": {
      id: "routes/auth/$provider",
      parentId: "root",
      path: "auth/:provider",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/auth/$provider-MOPSUT3H.js",
      imports: [
        "/build/_shared/chunk-ACPDH23A.js",
        "/build/_shared/chunk-K5K66MOD.js",
        "/build/_shared/chunk-3X66AYF4.js",
      ],
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/auth/$provider.callback": {
      id: "routes/auth/$provider.callback",
      parentId: "root",
      path: "auth/:provider/callback",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/auth/$provider.callback-6REK3CC2.js",
      imports: ["/build/_shared/chunk-3X66AYF4.js"],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/category": {
      id: "routes/category",
      parentId: "root",
      path: "category",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/category-YPTJE5L4.js",
      imports: ["/build/_shared/chunk-GSF3UXPE.js"],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/category/$category": {
      id: "routes/category/$category",
      parentId: "routes/category",
      path: ":category",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/category/$category-VQ4PUBZS.js",
      imports: [
        "/build/_shared/chunk-DIDBE3HX.js",
        "/build/_shared/chunk-QG4L5I26.js",
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/category/index": {
      id: "routes/category/index",
      parentId: "routes/category",
      path: void 0,
      index: true,
      caseSensitive: void 0,
      module: "/build/routes/category/index-ESEBTXTF.js",
      imports: ["/build/_shared/chunk-QG4L5I26.js"],
      hasAction: false,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/index": {
      id: "routes/index",
      parentId: "root",
      path: void 0,
      index: true,
      caseSensitive: void 0,
      module: "/build/routes/index-LPKHAQWI.js",
      imports: [
        "/build/_shared/chunk-ACPDH23A.js",
        "/build/_shared/chunk-K5K66MOD.js",
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/leaderboard": {
      id: "routes/leaderboard",
      parentId: "root",
      path: "leaderboard",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/leaderboard-BPR2V7HV.js",
      imports: void 0,
      hasAction: false,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/login": {
      id: "routes/login",
      parentId: "root",
      path: "login",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/login-TANQCWS3.js",
      imports: [
        "/build/_shared/chunk-K5K66MOD.js",
        "/build/_shared/chunk-3X66AYF4.js",
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/logout": {
      id: "routes/logout",
      parentId: "root",
      path: "logout",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/logout-SWPWOBVX.js",
      imports: ["/build/_shared/chunk-3X66AYF4.js"],
      hasAction: true,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/question/new": {
      id: "routes/question/new",
      parentId: "root",
      path: "question/new",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/question/new-5XI7CY5A.js",
      imports: [
        "/build/_shared/chunk-ACPDH23A.js",
        "/build/_shared/chunk-K5K66MOD.js",
        "/build/_shared/chunk-3X66AYF4.js",
        "/build/_shared/chunk-GSF3UXPE.js",
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
  },
  url: "/build/manifest-8D4ED64F.js",
};

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports,
  },
  "routes/auth/$provider.callback": {
    id: "routes/auth/$provider.callback",
    parentId: "root",
    path: "auth/:provider/callback",
    index: void 0,
    caseSensitive: void 0,
    module: provider_callback_exports,
  },
  "routes/auth/$provider": {
    id: "routes/auth/$provider",
    parentId: "root",
    path: "auth/:provider",
    index: void 0,
    caseSensitive: void 0,
    module: provider_exports,
  },
  "routes/question/new": {
    id: "routes/question/new",
    parentId: "root",
    path: "question/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports,
  },
  "routes/leaderboard": {
    id: "routes/leaderboard",
    parentId: "root",
    path: "leaderboard",
    index: void 0,
    caseSensitive: void 0,
    module: leaderboard_exports,
  },
  "routes/category": {
    id: "routes/category",
    parentId: "root",
    path: "category",
    index: void 0,
    caseSensitive: void 0,
    module: category_exports,
  },
  "routes/category/$category": {
    id: "routes/category/$category",
    parentId: "routes/category",
    path: ":category",
    index: void 0,
    caseSensitive: void 0,
    module: category_exports2,
  },
  "routes/category/index": {
    id: "routes/category/index",
    parentId: "routes/category",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: category_exports3,
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports,
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports,
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports,
  },
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    assets,
    entry,
    routes,
  });
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiIsICIuLi9ub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi9kZXYvY29tcGlsZXIvc2hpbXMvcmVhY3QudHMiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyLnRzeCIsICIuLi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrLnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9hdXRoLyRwcm92aWRlci50c3giLCAicm91dGU6L1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvcXVlc3Rpb24vbmV3LnRzeCIsICIuLi9hcHAvZGIvZGIuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xlYWRlcmJvYXJkLnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9jYXRlZ29yeS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvdWkvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy91aS9Tb2NpYWxCdXR0b24udHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvdWkvQ2F0ZWdvcmllcy9DYXRlZ29yeUNhcmQudHN4IiwgIi4uL2FwcC9ob29rcy91c2VBY3Rpb25Nb2RhbHMudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2NhdGVnb3J5L2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9sb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgImltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgaW5qZWN0U3R5bGVzSW50b1N0YXRpY01hcmt1cCB9IGZyb20gXCJAbWFudGluZS9zc3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgYDwhRE9DVFlQRSBodG1sPiR7aW5qZWN0U3R5bGVzSW50b1N0YXRpY01hcmt1cChtYXJrdXApfWAsXG4gICAge1xuICAgICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgfVxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEJveCxcbiAgQ29sb3JTY2hlbWUsXG4gIENvbG9yU2NoZW1lUHJvdmlkZXIsXG4gIENvbnRhaW5lcixcbiAgY3JlYXRlU3R5bGVzLFxuICBNYW50aW5lUHJvdmlkZXIsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbHNQcm92aWRlciB9IGZyb20gXCJAbWFudGluZS9tb2RhbHNcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNQcm92aWRlciB9IGZyb20gXCJAbWFudGluZS9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgdHlwZSB7XG4gIExpbmtzRnVuY3Rpb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG59IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTGF5b3V0L05hdmJhclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwifi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3RlclwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiAoe1xuICBjaGFyc2V0OiBcInV0Zi04XCIsXG4gIHRpdGxlOiBcInF1ZXJpZSB8IGFzayB5b3VyIHdpbGRlc3QgcXVlc3Rpb25zXCIsXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgaHJlZjogc3R5bGVzLFxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICB9LFxuICBdO1xufTtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGJvZHk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiXG4gICAgICAgICAgPyB0aGVtZS5jb2xvcnMuZGFya1s2XVxuICAgICAgICAgIDogdGhlbWUuY29sb3JzLmdyYXlbMl0sXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB9LFxuICB9O1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0KTtcbiAgcmV0dXJuIHsgdXNlciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB1c2VyID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8TWFudGluZVRoZW1lPlxuICAgICAgICA8TW9kYWxzUHJvdmlkZXI+XG4gICAgICAgICAgPE5vdGlmaWNhdGlvbnNQcm92aWRlclxuICAgICAgICAgICAgbGltaXQ9ezJ9XG4gICAgICAgICAgICBhdXRvQ2xvc2U9ezMwMDB9XG4gICAgICAgICAgICBwb3NpdGlvbj1cInRvcC1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PVwiYm9keVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fT5cbiAgICAgICAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInhsXCJcbiAgICAgICAgICAgICAgICByb2xlPVwibWFpblwiXG4gICAgICAgICAgICAgICAgbXQ9XCJ4bFwiXG4gICAgICAgICAgICAgICAgcGI9XCJ4bFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgIDxGb290ZXJcbiAgICAgICAgICAgICAgICBsaW5rcz17W1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9udWxmcm9zdC9xdWVyaWVcIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiR2l0aHViXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L05vdGlmaWNhdGlvbnNQcm92aWRlcj5cbiAgICAgICAgPC9Nb2RhbHNQcm92aWRlcj5cbiAgICAgIDwvTWFudGluZVRoZW1lPlxuICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICA8U2NyaXB0cyAvPlxuICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1hbnRpbmVUaGVtZSh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IFtjb2xvclNjaGVtZSwgc2V0Q29sb3JTY2hlbWVdID0gdXNlU3RhdGU8Q29sb3JTY2hlbWU+KFwibGlnaHRcIik7XG4gIGNvbnN0IHRvZ2dsZUNvbG9yU2NoZW1lID0gKHZhbHVlPzogQ29sb3JTY2hlbWUpID0+XG4gICAgc2V0Q29sb3JTY2hlbWUodmFsdWUgfHwgKGNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sb3JTY2hlbWVQcm92aWRlclxuICAgICAgY29sb3JTY2hlbWU9e2NvbG9yU2NoZW1lfVxuICAgICAgdG9nZ2xlQ29sb3JTY2hlbWU9e3RvZ2dsZUNvbG9yU2NoZW1lfVxuICAgID5cbiAgICAgIDxNYW50aW5lUHJvdmlkZXJcbiAgICAgICAgdGhlbWU9e3sgY29sb3JTY2hlbWUgfX1cbiAgICAgICAgd2l0aE5vcm1hbGl6ZUNTU1xuICAgICAgICB3aXRoR2xvYmFsU3R5bGVzXG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTWFudGluZVByb3ZpZGVyPlxuICAgIDwvQ29sb3JTY2hlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBBbmNob3IsXG4gIEF2YXRhcixcbiAgQm94LFxuICBCdXJnZXIsXG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBjcmVhdGVTdHlsZXMsXG4gIERpdmlkZXIsXG4gIEdyb3VwLFxuICBNZW51LFxuICBUZXh0LFxuICBVbnN0eWxlZEJ1dHRvbixcbiAgdXNlTWFudGluZUNvbG9yU2NoZW1lLFxufSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgdXNlQm9vbGVhblRvZ2dsZSB9IGZyb20gXCJAbWFudGluZS9ob29rc1wiO1xuaW1wb3J0IHsgTGluaywgdXNlU3VibWl0IH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBDaGFydEJhcixcbiAgQ2hldnJvbkRvd24sXG4gIEhlYXJ0LFxuICBMb2dvdXQsXG4gIE1lc3NhZ2UsXG4gIE1vb24sXG4gIFNldHRpbmdzLFxuICBTdW4sXG59IGZyb20gXCJ0YWJsZXItaWNvbnMtcmVhY3RcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgaGVhZGVyOiB7XG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCJcbiAgICAgICAgPyB0aGVtZS5jb2xvcnMuZGFya1s2XVxuICAgICAgICA6IHRoZW1lLmNvbG9ycy5ncmF5WzBdLFxuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke1xuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gXCJ0cmFuc3BhcmVudFwiIDogdGhlbWUuY29sb3JzLmdyYXlbMl1cbiAgICB9YCxcbiAgfSxcblxuICBtYWluU2VjdGlvbjoge1xuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcuc20sXG4gIH0sXG5cbiAgdXNlck1lbnU6IHtcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJ4c1wiKV06IHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0sXG4gIH0sXG5cbiAgdXNlcjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1swXSA6IHRoZW1lLmJsYWNrLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9cHggJHt0aGVtZS5zcGFjaW5nLnNtfXB4YCxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGl1cy5zbSxcbiAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQtY29sb3IgMTAwbXMgZWFzZVwiLFxuXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiID8gdGhlbWUuY29sb3JzLmRhcmtbOF0gOiB0aGVtZS53aGl0ZSxcbiAgICB9LFxuICB9LFxuXG4gIGJ1cmdlcjoge1xuICAgIFt0aGVtZS5mbi5sYXJnZXJUaGFuKFwieHNcIildOiB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9LFxuICB9LFxuXG4gIHVzZXJBY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1s4XSA6IHRoZW1lLndoaXRlLFxuICB9LFxuICBsaW5rczoge1xuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInhzXCIpXToge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgfSxcbiAgfSxcbiAgbG9nbzoge30sXG59KSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVzZXI6IGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5hdmJhcih7IHVzZXIgfTogUHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc2VzLCB0aGVtZSwgY3ggfSA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbb3BlbmVkLCB0b2dnbGVPcGVuZWRdID0gdXNlQm9vbGVhblRvZ2dsZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyTWVudU9wZW5lZCwgc2V0VXNlck1lbnVPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcblxuICBjb25zdCB7IGNvbG9yU2NoZW1lLCB0b2dnbGVDb2xvclNjaGVtZSB9ID0gdXNlTWFudGluZUNvbG9yU2NoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cImhlYWRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMubWFpblNlY3Rpb259IHNpemU9XCJ4bFwiPlxuICAgICAgICA8R3JvdXAgcG9zaXRpb249XCJhcGFydFwiPlxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICB0bz1cIi9jYXRlZ29yeVwiXG4gICAgICAgICAgICB3ZWlnaHQ9ezcwMH1cbiAgICAgICAgICAgIHNpemU9XCJ4bFwiXG4gICAgICAgICAgICB2YXJpYW50PVwiZ3JhZGllbnRcIlxuICAgICAgICAgICAgZ3JhZGllbnQ9e3sgZnJvbTogXCJpbmRpZ29cIiwgdG86IFwiY3lhblwiLCBkZWc6IDQ1IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgcXVlcmllXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxCdXJnZXJcbiAgICAgICAgICAgIG9wZW5lZD17b3BlbmVkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlT3BlbmVkKCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnVyZ2VyfVxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHshdXNlcj8udXNlciAmJiAoXG4gICAgICAgICAgICA8R3JvdXAgc3BhY2luZz17MjB9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rc30+XG4gICAgICAgICAgICAgIDxBbmNob3IgY29tcG9uZW50PXtMaW5rfSB0bz1cIi9sZWFkZXJib2FyZFwiPlxuICAgICAgICAgICAgICAgIExlYWRlcmJvYXJkXG4gICAgICAgICAgICAgIDwvQW5jaG9yPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gdG89XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dXNlcj8udXNlciAmJiAoXG4gICAgICAgICAgICA8R3JvdXA+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PXtMaW5rfSB0bz1cIi9xdWVzdGlvbi9uZXdcIj5cbiAgICAgICAgICAgICAgICBBc2sgYSBxdWVzdGlvblxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgICBzaXplPXsyNjB9XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiZW5kXCJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPVwicG9wLXRvcC1yaWdodFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJNZW51fVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFVzZXJNZW51T3BlbmVkKGZhbHNlKX1cbiAgICAgICAgICAgICAgICBvbk9wZW49eygpID0+IHNldFVzZXJNZW51T3BlbmVkKHRydWUpfVxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgPFVuc3R5bGVkQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goY2xhc3Nlcy51c2VyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXMudXNlckFjdGl2ZV06IHVzZXJNZW51T3BlbmVkLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEdyb3VwIHNwYWNpbmc9ezd9PlxuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXNlcj8udXNlcj8ucGhvdG9zWzBdPy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17dXNlcj8udXNlcj8uZGlzcGxheU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM9XCJ4bFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyNH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBsaW5lSGVpZ2h0OiAxIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBtcj17M31cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlcj8udXNlcj8uZGlzcGxheU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uRG93biBzaXplPXsxMn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDwvVW5zdHlsZWRCdXR0b24+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgICAgICAgICAgdG89XCIvbGVhZGVyYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17PENoYXJ0QmFyIHNpemU9ezE0fSAvPn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMZWFkZXJib2FyZFxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIHsvKiA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICBpY29uPXs8SGVhcnQgc2l6ZT17MTR9IGNvbG9yPXt0aGVtZS5jb2xvcnMucmVkWzZdfSAvPn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMaWtlZCBwb3N0c1xuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICAgIGljb249ezxNZXNzYWdlIHNpemU9ezE0fSBjb2xvcj17dGhlbWUuY29sb3JzLmJsdWVbNl19IC8+fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFlvdXIgY29tbWVudHNcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT4gKi99XG4gICAgICAgICAgICAgICAgPE1lbnUuTGFiZWw+U2V0dGluZ3M8L01lbnUuTGFiZWw+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBpY29uPXs8U2V0dGluZ3Mgc2l6ZT17MTR9IC8+fT5cbiAgICAgICAgICAgICAgICAgIEFjY291bnQgc2V0dGluZ3NcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVDb2xvclNjaGVtZSgpfVxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lID09PSBcImxpZ2h0XCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPFN1biBzaXplPXsxNH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8TW9vbiBzaXplPXsxNH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEN1cnJlbnQgdGhlbWU6IHtjb2xvclNjaGVtZX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICBpY29uPXs8TG9nb3V0IHNpemU9ezE0fSAvPn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdChudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiL2xvZ291dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Hcm91cD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgQ29udGFpbmVyLCBHcm91cCwgQW5jaG9yLCBUaXRsZSB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGZvb3Rlcjoge1xuICAgIG1hcmdpblRvcDogXCJhdXRvXCIsXG4gICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1s1XSA6IHRoZW1lLmNvbG9ycy5ncmF5WzJdXG4gICAgfWAsXG4gICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiXG4gICAgICAgID8gdGhlbWUuY29sb3JzLmRhcmtbNl1cbiAgICAgICAgOiB0aGVtZS5jb2xvcnMuZ3JheVswXSxcbiAgfSxcblxuICBpbm5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcueGwsXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZy54bCxcblxuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInhzXCIpXToge1xuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICB9LFxuICB9LFxuXG4gIGxpbmtzOiB7XG4gICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKFwieHNcIildOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIEZvb3RlclByb3BzIHtcbiAgbGlua3M6IHsgbGluazogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZvb3Rlcih7IGxpbmtzIH06IEZvb3RlclByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGl0ZW1zID0gbGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgPEFuY2hvcjxcImFcIj5cbiAgICAgIGNvbG9yPVwiZGltbWVkXCJcbiAgICAgIGtleT17bGluay5sYWJlbH1cbiAgICAgIGhyZWY9e2xpbmsubGlua31cbiAgICAgIHNpemU9XCJzbVwiXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgID5cbiAgICAgIHtsaW5rLmxhYmVsfVxuICAgIDwvQW5jaG9yPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lcn0gc2l6ZT1cInhsXCI+XG4gICAgICAgIDxUaXRsZSBvcmRlcj17M30+cXVlcmllPC9UaXRsZT5cbiAgICAgICAgPEdyb3VwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rc30+e2l0ZW1zfTwvR3JvdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBBdXRoZW50aWNhdG9yIH0gZnJvbSBcInJlbWl4LWF1dGhcIjtcbmltcG9ydCB7IHNlc3Npb25TdG9yYWdlIH0gZnJvbSBcIn4vc2VydmljZXMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7XG4gIEdvb2dsZVN0cmF0ZWd5LFxuICBTb2NpYWxzUHJvdmlkZXIsXG4gIEdpdEh1YlN0cmF0ZWd5LFxuICBEaXNjb3JkU3RyYXRlZ3ksXG59IGZyb20gXCJyZW1peC1hdXRoLXNvY2lhbHNcIjtcblxuZXhwb3J0IGxldCBhdXRoZW50aWNhdG9yID0gbmV3IEF1dGhlbnRpY2F0b3Ioc2Vzc2lvblN0b3JhZ2UsIHtcbiAgc2Vzc2lvbktleTogXCJfX3Nlc3Npb25cIixcbn0pO1xuXG5hdXRoZW50aWNhdG9yLnVzZShcbiAgbmV3IEdvb2dsZVN0cmF0ZWd5KFxuICAgIHtcbiAgICAgIGNsaWVudElEOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGNhbGxiYWNrVVJMOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvJHtTb2NpYWxzUHJvdmlkZXIuR09PR0xFfS9jYWxsYmFja2AsXG4gICAgfSxcbiAgICBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcbiAgICAgIHJldHVybiBwcm9maWxlO1xuICAgIH1cbiAgKVxuKTtcblxuYXV0aGVudGljYXRvci51c2UoXG4gIG5ldyBEaXNjb3JkU3RyYXRlZ3koXG4gICAge1xuICAgICAgY2xpZW50SUQ6IHByb2Nlc3MuZW52LkRJU0NPUkRfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5ESVNDT1JEX0NMSUVOVF9TRUNSRVQsXG4gICAgICBjYWxsYmFja1VSTDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoLyR7U29jaWFsc1Byb3ZpZGVyLkRJU0NPUkR9L2NhbGxiYWNrYCxcbiAgICB9LFxuICAgIGFzeW5jICh7IHByb2ZpbGUgfSkgPT4ge1xuICAgICAgcmV0dXJuIHByb2ZpbGU7XG4gICAgfVxuICApXG4pO1xuXG5hdXRoZW50aWNhdG9yLnVzZShcbiAgbmV3IEdpdEh1YlN0cmF0ZWd5KFxuICAgIHtcbiAgICAgIGNsaWVudElEOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGNhbGxiYWNrVVJMOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvJHtTb2NpYWxzUHJvdmlkZXIuR0lUSFVCfS9jYWxsYmFja2AsXG4gICAgfSxcbiAgICBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcbiAgICAgIHJldHVybiBwcm9maWxlO1xuICAgIH1cbiAgKVxuKTtcbiIsICJpbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcblxuZXhwb3J0IGxldCBzZXNzaW9uU3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogXCJfX3Nlc3Npb25cIixcbiAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBzZWNyZXRzOiBbcHJvY2Vzcy5lbnYuQ09PS0lFX1NFQ1JFVF0sXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGxldCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24sIGRlc3Ryb3lTZXNzaW9uIH0gPSBzZXNzaW9uU3RvcmFnZTtcbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUocGFyYW1zLnByb3ZpZGVyLCByZXF1ZXN0LCB7XG4gICAgc3VjY2Vzc1JlZGlyZWN0OiBcIi9cIixcbiAgICBmYWlsdXJlUmVkaXJlY3Q6IFwiL2xvZ2luXCIsXG4gIH0pO1xufTtcbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGguc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUocGFyYW1zLnByb3ZpZGVyLCByZXF1ZXN0KTtcbn07XG4iLCAiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIE5hdGl2ZVNlbGVjdCxcbiAgVGV4dGFyZWEsXG4gIFRleHRJbnB1dCxcbiAgVGl0bGUsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBGb3JtLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IGdldENhdGVnb3JpZXMgfSBmcm9tIFwifi9kYi9kYi5zZXJ2ZXJcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL2NhdGVnb3J5XCIpO1xuICB9XG5cbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGdldENhdGVnb3JpZXMoKTtcblxuICBjb25zdCBjYXRlZ29yeU5hbWVzID0gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5uYW1lKTtcblxuICByZXR1cm4geyBjYXRlZ29yeU5hbWVzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXcoKSB7XG4gIGNvbnN0IHsgY2F0ZWdvcnlOYW1lcyB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgbXQ9XCJsZ1wiXG4gICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICBtYXhXaWR0aDogdGhlbWUuYnJlYWtwb2ludHMueHMsXG4gICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDxUaXRsZSBvcmRlcj17MX0gYWxpZ249XCJsZWZ0XCIgbWI9XCJsZ1wiPlxuICAgICAgICBBc2sgYSBxdWVzdGlvblxuICAgICAgPC9UaXRsZT5cbiAgICAgIDxCb3hcbiAgICAgICAgY29tcG9uZW50PXtGb3JtfVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxUZXh0SW5wdXQgbGFiZWw9XCJUaXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHJlcXVpcmVkIG1heExlbmd0aD17MzB9IG1iPVwic21cIiAvPlxuICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIGF1dG9zaXplXG4gICAgICAgICAgbWluUm93cz17MTB9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0J3Mgb24geW91ciBtaW5kP1wiXG4gICAgICAgICAgbWF4TGVuZ3RoPXs1MDAwfVxuICAgICAgICAgIG1iPVwic21cIlxuICAgICAgICAvPlxuICAgICAgICA8TmF0aXZlU2VsZWN0XG4gICAgICAgICAgZGF0YT17Y2F0ZWdvcnlOYW1lc31cbiAgICAgICAgICBsYWJlbD1cIkNhdGVnb3J5XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBhIGNhdGVnb3J5XCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIG1iPVwic21cIlxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIHN4PXt7IGFsaWduU2VsZjogXCJmbGV4LWVuZFwiIH19PlBvc3QgcXVlc3Rpb248L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5pbnRlcmZhY2UgQ3VzdG9tTm9kZUpzR2xvYmFsIGV4dGVuZHMgTm9kZUpTLkdsb2JhbCB7XG4gIHByaXNtYTogUHJpc21hQ2xpZW50O1xufVxuXG5kZWNsYXJlIGNvbnN0IGdsb2JhbDogQ3VzdG9tTm9kZUpzR2xvYmFsO1xuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWwucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzKCkge1xuICByZXR1cm4gcHJpc21hLmNhdGVnb3J5LmZpbmRNYW55KCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMYXRlc3RRdWVzdGlvbnNGb3JDYXRlZ29yeShjYXRlZ29yeT86IHN0cmluZykge1xuICByZXR1cm4gcHJpc21hLnF1ZXN0aW9uLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgbmFtZTogY2F0ZWdvcnkgPz8gXCJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbi8vIEVzc2VudGlhbGx5IEkgd2FudCB0byBzdW0gdGhlIGFtb3VudCBvZiBsaWtlcyBhXG4vLyBwZXJzb24gaGFzIG9uIGJvdGggcXVlc3Rpb25zIHRoZXkndmUgYXNrZWQgYW5kXG4vLyBjb21tZW50c1xuLy8gcmF3IHF1ZXJ5P1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYWRlcmJvYXJkKCkge31cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFF1ZXN0aW9uQW5kQ29tbWVudHMoaWQ6IHN0cmluZykge1xuICByZXR1cm4gcHJpc21hLnF1ZXN0aW9uLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZCxcbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICBsaWtlczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVRdWVzdGlvbih7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgY2F0ZWdvcnksXG4gIHVzZXJJZCxcbn06IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgdXNlcklkOiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiBwcmlzbWEucXVlc3Rpb24uY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICBpZDogdXNlcklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICBuYW1lOiBjYXRlZ29yeSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb21tZW50KHtcbiAgY29udGVudCxcbiAgdXNlcklkLFxuICBxdWVzdGlvbklkLFxufToge1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xuICBxdWVzdGlvbklkOiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiBwcmlzbWEuY29tbWVudC5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICBhdXRob3I6IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIGlkOiB1c2VySWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcXVlc3Rpb246IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIGlkOiBxdWVzdGlvbklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuLy8gaXMgdGhpcyBldmVuIHJpZ2h0P1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uTGlrZSh7XG4gIHF1ZXN0aW9uSWQsXG4gIHVzZXJJZCxcbn06IHtcbiAgcXVlc3Rpb25JZDogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIHByaXNtYS5xdWVzdGlvbi51cGRhdGUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogcXVlc3Rpb25JZCxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxpa2VzOiB7XG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlU3R5bGVzLFxuICBUYWJsZSxcbiAgQ2hlY2tib3gsXG4gIFNjcm9sbEFyZWEsXG4gIEdyb3VwLFxuICBBdmF0YXIsXG4gIFRleHQsXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvd1NlbGVjdGVkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiXG4gICAgICAgID8gdGhlbWUuZm4ucmdiYSh0aGVtZS5jb2xvcnNbdGhlbWUucHJpbWFyeUNvbG9yXVs3XSwgMC4yKVxuICAgICAgICA6IHRoZW1lLmNvbG9ycy5ncmF5WzJdLFxuICB9LFxufSkpO1xuXG5pbnRlcmZhY2UgVGFibGVTZWxlY3Rpb25Qcm9wcyB7XG4gIGRhdGE6IHtcbiAgICBhdmF0YXI6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBqb2I6IHN0cmluZztcbiAgICBpZDogc3RyaW5nO1xuICB9W107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlYWRlcmJvYXJkKCkge1xuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIGlkOiBcIjFcIixcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYyNDI5ODM1NzU5Ny1mZDkyZGZiZWMwMWQ/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI1MCZxPTgwXCIsXG4gICAgICBuYW1lOiBcIlJvYmVydCBXb2xma2lzc2VyXCIsXG4gICAgICBqb2I6IFwiRW5naW5lZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIjJcIixcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4NjI5NzEzNTUzNy05NGJjOWJhMDYwYWE/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI1MCZxPTgwXCIsXG4gICAgICBuYW1lOiBcIkppbGwgSmFpbGJyZWFrZXJcIixcbiAgICAgIGpvYjogXCJFbmdpbmVlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiM1wiLFxuICAgICAgYXZhdGFyOlxuICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjMyOTIyMjY3NzU2LTliNzEyNDJiMTU5Mj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjUwJnE9ODBcIixcbiAgICAgIG5hbWU6IFwiSGVucnkgU2lsa2VhdGVyXCIsXG4gICAgICBqb2I6IFwiRGVzaWduZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIjRcIixcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNzAwMzIxMTE2OS0wYTFkZDcyMjhmMmQ/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI1MCZxPTgwXCIsXG4gICAgICBuYW1lOiBcIkJpbGwgSG9yc2VmaWdodGVyXCIsXG4gICAgICBqb2I6IFwiRGVzaWduZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIjVcIixcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzMDg0MTUzOTI5My1iZDIwNjM0YzVkNzI/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI1MCZxPTgwXCIsXG4gICAgICBuYW1lOiBcIkplcmVteSBGb290dmlld2VyXCIsXG4gICAgICBqb2I6IFwiTWFuYWdlclwiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgeyBjbGFzc2VzLCBjeCB9ID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3Qgcm93cyA9IGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPEdyb3VwIHNwYWNpbmc9XCJzbVwiPlxuICAgICAgICAgICAgPEF2YXRhciBzaXplPXsyNn0gc3JjPXtpdGVtLmF2YXRhcn0gcmFkaXVzPXsyNn0gLz5cbiAgICAgICAgICAgIDxUZXh0IHNpemU9XCJzbVwiIHdlaWdodD17NTAwfT5cbiAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICA8L3RkPlxuXG4gICAgICAgIDx0ZD57aXRlbS5qb2J9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUaXRsZSBvcmRlcj17MX0+TGVhZGVyYm9hcmQ8L1RpdGxlPlxuICAgICAgPFNjcm9sbEFyZWE+XG4gICAgICAgIDxUYWJsZVxuICAgICAgICAgIHN4PXt7IG1pbldpZHRoOiA4MDAgfX1cbiAgICAgICAgICB2ZXJ0aWNhbFNwYWNpbmc9XCJzbVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJvd1NlbGVjdGVkfVxuICAgICAgICA+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+VXNlcjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Qb2ludHM8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT57cm93c308L3Rib2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9TY3JvbGxBcmVhPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IEJveCwgVGl0bGUgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBPdXRsZXQsIHVzZUxvYWRlckRhdGEsIHVzZVBhcmFtcyB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSBcIn4vZGIvZGIuc2VydmVyXCI7XG5pbXBvcnQgeyBDYXRlZ29yaWVzIH0gZnJvbSBcIn4vY29tcG9uZW50cy91aVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGdldENhdGVnb3JpZXMoKTtcbiAgcmV0dXJuIHsgY2F0ZWdvcmllcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IHVzZVBhcmFtcygpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwibmF2XCI+XG4gICAgICAgIDxUaXRsZSBvcmRlcj17MX0gbWI9XCJsZ1wiPlxuICAgICAgICAgIHtjYXRlZ29yeSA/IGNhdGVnb3J5IDogXCJMYXRlc3QgcXVlc3Rpb25zXCJ9XG4gICAgICAgIDwvVGl0bGU+XG4gICAgICAgIDxDYXRlZ29yaWVzIGNhdGVnb3JpZXM9e2RhdGEuY2F0ZWdvcmllc30gLz5cbiAgICAgIDwvQm94PlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgTGlzdCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGxpbmtzOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZ2FwOiBcIjFyZW0gMC41cmVtXCIsXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICB9LFxuICBsaW5rOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMueHMsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5WzZdLFxuICAgIHBhZGRpbmc6IFwiOHB4IDEycHhcIixcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGl1cy5zbSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5WzNdLFxuICB9LFxuICBhY3RpdmVMaW5rOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlWzddLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmJsdWVbMV0sXG4gIH0sXG59KSk7XG5cbnR5cGUgQ2F0ZWdvcnlQcm9wcyA9IHtcbiAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRlZ29yaWVzKHsgY2F0ZWdvcmllcyB9OiBDYXRlZ29yeVByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgY3ggfSA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPExpc3QgbGlzdFN0eWxlVHlwZT1cIm5vbmVcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PlxuICAgICAge2NhdGVnb3JpZXM/Lm1hcCgoeyBpZCwgbmFtZSB9KSA9PiAoXG4gICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIHRvPXtgL2NhdGVnb3J5LyR7bmFtZS50b0xvd2VyQ2FzZSgpfWB9XG4gICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxuICAgICAgICAgICAgICBjeChjbGFzc2VzLmxpbmssIHsgW2NsYXNzZXMuYWN0aXZlTGlua106IGlzQWN0aXZlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICkpfVxuICAgIDwvTGlzdD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyBTb2NpYWxzUHJvdmlkZXIgfSBmcm9tIFwicmVtaXgtYXV0aC1zb2NpYWxzXCI7XG5cbmV4cG9ydCB0eXBlIFNvY2lhbEJ1dHRvblByb3BzID0ge1xuICBwcm92aWRlcjogU29jaWFsc1Byb3ZpZGVyO1xuICBsYWJlbDogc3RyaW5nO1xuICBjb2xvcj86IHN0cmluZztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBTb2NpYWxCdXR0b24oeyBwcm92aWRlciwgbGFiZWwsIGNvbG9yIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBhY3Rpb249e2AvYXV0aC8ke3Byb3ZpZGVyfWB9IG1ldGhvZD1cInBvc3RcIj5cbiAgICAgIDxCdXR0b24gY29sb3I9e2NvbG9yfSB0eXBlPVwic3VibWl0XCIgZnVsbFdpZHRoPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBQYWdpbmF0aW9uLCBTaW1wbGVHcmlkLCBUaXRsZSB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlDYXJkIH0gZnJvbSBcIn4vY29tcG9uZW50cy91aS9DYXRlZ29yaWVzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGNhdGVnb3JpZXM6IHtcbiAgICBtYXJnaW46IGAke3RoZW1lLnNwYWNpbmcueGx9cHggLThweGAsXG4gIH0sXG5cbiAgZGl2aWRlcjoge1xuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ncmF5WzFdfWAsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgY2F0ZWdvcnkgPSBwYXJhbXMuY2F0ZWdvcnk7XG4gIHJldHVybiB7IGNhdGVnb3J5IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeSgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2ltcGxlR3JpZFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2F0ZWdvcmllc31cbiAgICAgICAgY29scz17MX1cbiAgICAgICAgYnJlYWtwb2ludHM9e1tcbiAgICAgICAgICB7IG1pbldpZHRoOiBcInhzXCIsIGNvbHM6IDIgfSxcbiAgICAgICAgICB7IG1pbldpZHRoOiBcImxnXCIsIGNvbHM6IDMgfSxcbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDIwIH0sIChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDYXRlZ29yeUNhcmQgY2F0ZWdvcnk9e2RhdGEuY2F0ZWdvcnl9IGtleT17aW5kZXh9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9TaW1wbGVHcmlkPlxuICAgICAgPFBhZ2luYXRpb24gdG90YWw9ezEwfSBwb3NpdGlvbj1cImNlbnRlclwiIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHtcbiAgQWN0aW9uSWNvbixcbiAgQm94LFxuICBDYXJkLFxuICBjcmVhdGVTdHlsZXMsXG4gIEdyb3VwLFxuICBUZXh0LFxuICBUaXRsZSxcbiAgTWVudSxcbn0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgRmxhZzIsIEhlYXJ0LCBDb3B5IH0gZnJvbSBcInRhYmxlci1pY29ucy1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlQWN0aW9uTW9kYWxzIH0gZnJvbSBcIn4vaG9va3MvdXNlQWN0aW9uTW9kYWxzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGNhdGVnb3J5OiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlWzVdLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGJvcmRlcjogYDJweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ncmF5WzNdfWAsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRlZ29yeUNhcmQoeyBjYXRlZ29yeSB9KSB7XG4gIGNvbnN0IHsgcmVwb3J0TW9kYWwgfSA9IHVzZUFjdGlvbk1vZGFscygpO1xuXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjb21wb25lbnQ9XCJhcnRpY2xlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAgPEdyb3VwPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICB0bz17YC9jYXRlZ29yeS8ke2NhdGVnb3J5fWB9XG4gICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhdGVnb3J5fVxuICAgICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICA8L1RleHQ+e1wiIFwifVxuICAgICAgICAgICZzaW07e1wiIFwifVxuICAgICAgICAgIDxUZXh0IHNpemU9XCJ4c1wiIGNvbXBvbmVudD1cInNwYW5cIiBjb2xvcj1cImRpbW1lZFwiPlxuICAgICAgICAgICAgcG9zdGVkIGJ5IGRhbmVcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7LyogPEFjdGlvbkljb24gY29sb3I9XCJyZWRcIiBtbD1cImF1dG9cIj5cbiAgICAgICAgICA8SGVhcnQgc2l6ZT17MTZ9IC8+XG4gICAgICAgIDwvQWN0aW9uSWNvbj4gKi99XG4gICAgICAgIDxNZW51IG1sPVwiYXV0b1wiPlxuICAgICAgICAgIDxNZW51LkxhYmVsPlBvc3Qgb3B0aW9uczwvTWVudS5MYWJlbD5cbiAgICAgICAgICA8TWVudS5JdGVtIGljb249ezxDb3B5IHNpemU9ezE0fSAvPn0+Q29weSBsaW5rIHRvIHBvc3Q8L01lbnUuSXRlbT5cbiAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e3JlcG9ydE1vZGFsfSBpY29uPXs8RmxhZzIgc2l6ZT17MTR9IC8+fT5cbiAgICAgICAgICAgIFJlcG9ydFxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8L01lbnU+XG4gICAgICA8L0dyb3VwPlxuICAgICAgPFRpdGxlXG4gICAgICAgIG9yZGVyPXsyfVxuICAgICAgICBteT1cInNtXCJcbiAgICAgICAgc3g9eyh0aGVtZSkgPT4gKHtcbiAgICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLmxnLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAge2NhdGVnb3J5fVxuICAgICAgPC9UaXRsZT5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8VGV4dCBjb2xvcj1cImRpbW1lZFwiIGxpbmVDbGFtcD17Mn0gc2l6ZT1cInNtXCI+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVzdFxuICAgICAgICAgIGFzcGVyaW9yZXMgbWFnbmFtIGV2ZW5pZXQgcGVyZmVyZW5kaXMgbnVsbGEgbmFtLCBjdXBpZGl0YXRlIGN1bSBpdXJlXG4gICAgICAgICAgc2FlcGUgcHJvdmlkZW50IG1vbGVzdGlhcyBtb2xlc3RpYWUgcG9zc2ltdXMgcXVhbSBoYXJ1bSBjb25zZWN0ZXR1clxuICAgICAgICAgIG5vbiBlbGlnZW5kaSBmYWNpbGlzIG9tbmlzLlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8Qm94IGNvbXBvbmVudD1cImZvb3RlclwiIG10PVwibGdcIj5cbiAgICAgICAgPEdyb3VwIGFsaWduPVwiYmFzZWxpbmVcIiBwb3NpdGlvbj1cImFwYXJ0XCI+XG4gICAgICAgICAgPFRleHQgdmFyaWFudD1cImxpbmtcIiBzaXplPVwic21cIj5cbiAgICAgICAgICAgIDc4IGNvbW1lbnRzXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxHcm91cCBzcGFjaW5nPVwieHNcIiBhbGlnbj1cImJhc2VsaW5lXCI+XG4gICAgICAgICAgICA8VGV4dCBjb21wb25lbnQ9XCJ0aW1lXCIgc2l6ZT1cInhzXCIgY29sb3I9XCJkaW1tZWRcIj5cbiAgICAgICAgICAgICAgNCBob3VycyBhZ29cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICA8L0dyb3VwPlxuICAgICAgPC9Cb3g+XG4gICAgPC9DYXJkPlxuICApO1xufVxuIiwgImltcG9ydCB7IHNob3dOb3RpZmljYXRpb24gfSBmcm9tIFwiQG1hbnRpbmUvbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgdXNlTW9kYWxzIH0gZnJvbSBcIkBtYW50aW5lL21vZGFsc1wiO1xuaW1wb3J0IHsgUmFkaW9Hcm91cCwgUmFkaW8gfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWN0aW9uTW9kYWxzKCkge1xuICBjb25zdCBtb2RhbHMgPSB1c2VNb2RhbHMoKTtcbiAgY29uc3QgcmVwb3J0TW9kYWwgPSAoKSA9PiB7XG4gICAgbW9kYWxzLm9wZW5Db25maXJtTW9kYWwoe1xuICAgICAgdGl0bGU6IFwiUmVwb3J0IHBvc3RcIixcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgY2hpbGRyZW46IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8UmFkaW9Hcm91cFxuICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBzZWxlY3QgYSByZWFzb24gZm9yIHJlcG9ydGluZyB0aGlzIHBvc3QuXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBtYj1cInhsXCJcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJoYXJtZnVsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJoYXJtZnVsXCIgbGFiZWw9XCJIYXJtZnVsIGNvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiaGF0ZVwiIGxhYmVsPVwiSGF0ZSBzcGVlY2hcIiAvPlxuICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwic3BhbVwiIGxhYmVsPVwiU3BhbVwiIC8+XG4gICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJpbmNvcnJlY3RcIiBsYWJlbD1cIlBvc3RlZCBpbiB0aGUgd3Jvbmcgc2VjdGlvblwiIC8+XG4gICAgICAgICAgPC9SYWRpb0dyb3VwPlxuICAgICAgICA8Lz5cbiAgICAgICksXG4gICAgICBsYWJlbHM6IHsgY29uZmlybTogXCJSZXBvcnQgcG9zdFwiLCBjYW5jZWw6IFwiQ2FuY2VsXCIgfSxcbiAgICAgIG9uQ2FuY2VsOiAoKSA9PiBjb25zb2xlLmxvZyhcIkNhbmNlbFwiKSxcbiAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICB0aXRsZTogXCJQb3N0IHJlcG9ydGVkXCIsXG4gICAgICAgICAgbWVzc2FnZTogXCJUaGFuayB5b3UgZm9yIHJlcG9ydGluZyB0aGlzIHBvc3QgYW5kIGtlZXBpbmcgcXVlcmllIHNhZmUuXCIsXG4gICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVwb3J0TW9kYWwgfTtcbn1cbiIsICJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IG10PVwieGxcIj5cbiAgICAgIDxkaXY+dGhpcyBpcyBzb21ldGhpbmc8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgYXdhaXQgYXV0aGVudGljYXRvci5sb2dvdXQocmVxdWVzdCwgeyByZWRpcmVjdFRvOiBcIi9jYXRlZ29yeVwiIH0pO1xufTtcbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2NhdGVnb3J5XCIpO1xufTtcbiIsICJpbXBvcnQgeyBDb250YWluZXIsIFN0YWNrLCBUZXh0LCBUaXRsZSB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IFNvY2lhbHNQcm92aWRlciB9IGZyb20gXCJyZW1peC1hdXRoLXNvY2lhbHNcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU29jaWFsQnV0dG9uIH0gZnJvbSBcIn4vY29tcG9uZW50cy91aVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIHN1Y2Nlc3NSZWRpcmVjdDogXCIvXCIsXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lclxuICAgICAgbXQ9XCJ4bFwiXG4gICAgICBzaXplPVwibGdcIlxuICAgICAgc3g9e3tcbiAgICAgICAgbWF4V2lkdGg6IFwiMzAwcHhcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFN0YWNrIGFsaWduPVwic3RyZXRjaFwiPlxuICAgICAgICA8VGl0bGUgb3JkZXI9ezF9IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgTG9nIGluXG4gICAgICAgIDwvVGl0bGU+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwiZGltbWVkXCIgc2l6ZT1cInNtXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICBDb250aW51ZSB3aXRoIG9uZSBvZiB0aGVzZSBwcm92aWRlcnNcbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8U29jaWFsQnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJpbmRpZ29cIlxuICAgICAgICAgIHByb3ZpZGVyPXtTb2NpYWxzUHJvdmlkZXIuRElTQ09SRH1cbiAgICAgICAgICBsYWJlbD1cIkxvZ2luIHdpdGggRGlzY29yZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTb2NpYWxCdXR0b25cbiAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgcHJvdmlkZXI9e1NvY2lhbHNQcm92aWRlci5HT09HTEV9XG4gICAgICAgICAgbGFiZWw9XCJMb2dpbiB3aXRoIEdvb2dsZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTb2NpYWxCdXR0b25cbiAgICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgICAgIHByb3ZpZGVyPXtTb2NpYWxzUHJvdmlkZXIuR0lUSFVCfVxuICAgICAgICAgIGxhYmVsPVwiTG9naW4gd2l0aCBHaXRodWJcIlxuICAgICAgICAvPlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic4ZDRlZDY0ZicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtUFVEWERVWDMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVBWUlI0REdRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1dYTVlWQUcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02RlJMUlhZSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZaUk5RTUNQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTUNSU1VFTjYuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVlEQUhMT000LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ESURCRTNIWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFHNEw1STI2LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvJHByb3ZpZGVyJzp7J2lkJzoncm91dGVzL2F1dGgvJHByb3ZpZGVyJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvOnByb3ZpZGVyJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvJHByb3ZpZGVyLU1PUFNVVDNILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1BQ1BESDIzQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUs1SzY2TU9ELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1g2NkFZRjQuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoLyRwcm92aWRlci5jYWxsYmFjayc6eydpZCc6J3JvdXRlcy9hdXRoLyRwcm92aWRlci5jYWxsYmFjaycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoLzpwcm92aWRlci9jYWxsYmFjaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoLyRwcm92aWRlci5jYWxsYmFjay02UkVLM0NDMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1g2NkFZRjQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2F0ZWdvcnknOnsnaWQnOidyb3V0ZXMvY2F0ZWdvcnknLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2F0ZWdvcnknLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2F0ZWdvcnktWVBUSkU1TDQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdTRjNVWFBFLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeSc6eydpZCc6J3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnknLCdwYXJlbnRJZCc6J3JvdXRlcy9jYXRlZ29yeScsJ3BhdGgnOic6Y2F0ZWdvcnknLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5LVZRNFBVQlpTLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ESURCRTNIWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFHNEw1STI2LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NhdGVnb3J5L2luZGV4Jzp7J2lkJzoncm91dGVzL2NhdGVnb3J5L2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvY2F0ZWdvcnknLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2F0ZWdvcnkvaW5kZXgtRVNFQlRYVEYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFHNEw1STI2LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1MUEtIQVFXSS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQUNQREgyM0EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LNUs2Nk1PRC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWFkZXJib2FyZCc6eydpZCc6J3JvdXRlcy9sZWFkZXJib2FyZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsZWFkZXJib2FyZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFkZXJib2FyZC1CUFIyVjdIVi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ2luJzp7J2lkJzoncm91dGVzL2xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ2luLVRBTlFDV1MzLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LNUs2Nk1PRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNjZBWUY0LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ291dCc6eydpZCc6J3JvdXRlcy9sb2dvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9nb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ291dC1TV1BXT0JWWC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1g2NkFZRjQuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcXVlc3Rpb24vbmV3Jzp7J2lkJzoncm91dGVzL3F1ZXN0aW9uL25ldycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidxdWVzdGlvbi9uZXcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcXVlc3Rpb24vbmV3LTVYSTdDWTVBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1BQ1BESDIzQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUs1SzY2TU9ELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1g2NkFZRjQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HU0YzVVhQRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtOEQ0RUQ2NEYuanMnfTsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2sudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2F1dGgvJHByb3ZpZGVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9xdWVzdGlvbi9uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xlYWRlcmJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9jYXRlZ29yeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9jYXRlZ29yeS9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL1VzZXJzL2RhbmUvRGVza3RvcC9naXRodWIvcmVhY3QvcXVlcmllL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvVXNlcnMvZGFuZS9EZXNrdG9wL2dpdGh1Yi9yZWFjdC9xdWVyaWUvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9Vc2Vycy9kYW5lL0Rlc2t0b3AvZ2l0aHViL3JlYWN0L3F1ZXJpZS9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kcHJvdmlkZXIuY2FsbGJhY2tcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvJHByb3ZpZGVyLmNhbGxiYWNrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvOnByb3ZpZGVyL2NhbGxiYWNrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoLyRwcm92aWRlclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC8kcHJvdmlkZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC86cHJvdmlkZXJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3F1ZXN0aW9uL25ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcXVlc3Rpb24vbmV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInF1ZXN0aW9uL25ld1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvbGVhZGVyYm9hcmRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xlYWRlcmJvYXJkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxlYWRlcmJvYXJkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9jYXRlZ29yeVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2F0ZWdvcnlcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY2F0ZWdvcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvY2F0ZWdvcnlcIixcbiAgICAgIHBhdGg6IFwiOmNhdGVnb3J5XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9jYXRlZ29yeS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2F0ZWdvcnkvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9jYXRlZ29yeVwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfVxuICB9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNDQSxZQUF1Qjs7O0FDRHZCO0FBQUE7QUFBQTtBQUFBO0FBQ0EsbUJBQTRCO0FBQzVCLG9CQUErQjtBQUMvQixpQkFBNkM7QUFFOUIsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsUUFBTSxTQUFTLGtDQUNiLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUVuRCxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQ1Qsa0JBQWtCLDZDQUE2QixXQUMvQztBQUFBLElBQ0UsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBO0FBQUE7OztBQ3BCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU9PO0FBQ1Asb0JBQStCO0FBQy9CLDJCQUFzQztBQU10QyxvQkFRTztBQUNQLG9CQUF5Qjs7O0FDeEJ6QixrQkFjTztBQUNQLG1CQUFpQztBQUNqQyxvQkFBZ0M7QUFDaEMsb0JBQXlCO0FBQ3pCLGdDQVNPO0FBRVAsSUFBTSxZQUFZLDhCQUFhLENBQUMsVUFBVztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLFlBQVksTUFBTSxRQUFRO0FBQUEsSUFDMUIsaUJBQ0UsTUFBTSxnQkFBZ0IsU0FDbEIsTUFBTSxPQUFPLEtBQUssS0FDbEIsTUFBTSxPQUFPLEtBQUs7QUFBQSxJQUN4QixjQUFjLGFBQ1osTUFBTSxnQkFBZ0IsU0FBUyxnQkFBZ0IsTUFBTSxPQUFPLEtBQUs7QUFBQTtBQUFBLEVBSXJFLGFBQWE7QUFBQSxJQUNYLGVBQWUsTUFBTSxRQUFRO0FBQUE7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
