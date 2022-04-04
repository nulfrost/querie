import { createStyles, List } from "@mantine/core";
import { Category } from "@prisma/client";
import { NavLink } from "@remix-run/react";

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

type CategoryProps = {
  categories: Category[];
};

export function Categories({ categories }: CategoryProps) {
  const { classes, cx } = useStyles();

  return (
    <List listStyleType="none" className={classes.links}>
      {categories?.map(({ id, name }) => (
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
  );
}
