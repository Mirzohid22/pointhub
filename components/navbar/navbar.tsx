"use client";
import { AppShell, UnstyledButton } from "@mantine/core";
import ThemeSwitcher from "../common/themeSwitcher/themeSwitcher";
import classes from "./navbar.module.css";

export function Navbar() {
  return (
    <AppShell.Navbar py="md" px={4}>
      <UnstyledButton
        component="a"
        href="https://t.me/mirzohid22me"
        target="_blank"
        className={classes.control}
      >
        Contact
      </UnstyledButton>
      <UnstyledButton
        component="a"
        href="https://github.com/Mirzohid22/pointhub"
        target="_blank"
        className={classes.control}
      >
        Github Repo
      </UnstyledButton>
    </AppShell.Navbar>
  );
}
