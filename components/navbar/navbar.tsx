"use client";
import { AppShell, UnstyledButton } from "@mantine/core";
import classes from "./navbar.module.css";

export function Navbar() {
  return (
    <AppShell.Navbar py="md" px={4}>
      <UnstyledButton className={classes.control}>Contact</UnstyledButton>
      <UnstyledButton className={classes.control}>
        Github Repo
      </UnstyledButton>
    </AppShell.Navbar>
  );
}
