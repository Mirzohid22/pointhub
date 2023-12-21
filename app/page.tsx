"use client";
import {
  AppShell,
  Center,
  Blockquote,
} from "@mantine/core";
import { Navbar } from "../components/navbar/navbar";
import { Header } from "../components/header/header";
import { useDisclosure } from "@mantine/hooks";

export default function Home() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding={{ xs: "xs", sm: "md" }}
    >
      <Header opened={opened} toggle={toggle}  />
      <Navbar />
      <AppShell.Main>
        <Center h={100}>
          <Blockquote cite="chatGPT" color="blue">
            PointHub - where every point matters and every goal counts!
          </Blockquote>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
}
