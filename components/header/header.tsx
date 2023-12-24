"use client";
import { AppShell, Burger, Group, UnstyledButton, Image } from "@mantine/core";
import NextImage from "next/image";
import Link from "next/link";
import pointHubLogo from "../../public/pointhub.svg";
import githubLogo from "../../public/brand-github.svg";
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
            component={NextImage}
            src={pointHubLogo}
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
                component={NextImage}
                src={githubLogo}
                alt="GitHub Logo"
                height={24}
                width={24}
                radius="sm"
              />
            </UnstyledButton>
          </Group>
        </Group>
      </Group>
    </AppShell.Header>
  );
}
