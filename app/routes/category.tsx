import { Outlet, useLoaderData, NavLink } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { createStyles, Box, List } from "@mantine/core";
import { getCategories } from "~/db/db.server";

const useStyles = createStyles((theme) => ({
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

export const loader: LoaderFunction = async () => {
  const categories = await getCategories();
  return { categories };
};

export default function Category() {
  const { classes, cx } = useStyles();

  const data = useLoaderData();

  return (
    <>
      <Box component="nav">
        <List listStyleType="none" className={classes.links}>
          {data?.categories?.map(({ id, name }) => (
            <List.Item>
              <NavLink
                to={`/category/${name.toLowerCase()}`}
                key={id}
                className={({ isActive }) =>
                  cx(classes.link, { [classes.activeLink]: isActive })
                }
              >
                {name}
              </NavLink>
            </List.Item>
          ))}
        </List>
      </Box>
      <Outlet />
    </>
  );
}
