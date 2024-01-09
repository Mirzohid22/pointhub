"use client";
import { AppShell, Burger, Group, UnstyledButton, Image } from "@mantine/core";
import NextImage from "next/image";
import ThemSwitcher from "../common/themeSwitcher/themeSwitcher";
//assets
import pointHubLogo from "../../public/pointhub.svg";
import pointHubLogoDark from "../../public/pointhub-dark.svg";
import githubLogo from "../../public/brand-github.svg";
import githubLogoDark from "../../public/brand-github-dark.svg";
import classes from "./header.module.css";

interface HeaderProps {
  opened: boolean;
  toggle: React.MouseEventHandler<HTMLButtonElement>;
}
export function Header({ opened, toggle }: HeaderProps) {
  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Group justify="space-between" style={{ flex: 1 }}>
          <Image
            darkHidden
            component={NextImage}
            src={pointHubLogo}
            alt="PointHub Logo"
            height={40}
            width={40}
            radius="sm"
          />
          <Image
            lightHidden
            component={NextImage}
            src={pointHubLogoDark}
            alt="PointHub Logo"
            height={40}
            width={40}
            radius="sm"
          />
          <Group ml="xl" gap={0} visibleFrom="sm">
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
              <Image
                darkHidden
                component={NextImage}
                src={githubLogo}
                alt="GitHub Logo"
                height={24}
                width={24}
                radius="sm"
              />
              <Image
                lightHidden
                component={NextImage}
                src={githubLogoDark}
                alt="GitHub Logo"
                height={24}
                width={24}
                radius="sm"
              />
            </UnstyledButton>
            <ThemSwitcher />
          </Group>
          <Group hiddenFrom="sm">
            <ThemSwitcher />
          </Group>
        </Group>
      </Group>
    </AppShell.Header>
  );
}
