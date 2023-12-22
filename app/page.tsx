"use client";
import { AppShell, Center } from "@mantine/core";
import { Navbar } from "../components/navbar/navbar";
import { Header } from "../components/header/header";
import { useDisclosure } from "@mantine/hooks";
import Leagues from "@/components/common/leagues/leagues";
import Standings from "@/components/common/standings/standings";
import useLeague from "@/components/common/leagues/hooks/useLeague";

export default function Home() {
  const [opened, { toggle }] = useDisclosure();
  const { leagueName, setLeagueName, leagueKey, setLeagueKey } = useLeague();

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
      <Header opened={opened} toggle={toggle} />
      <Navbar />
      <AppShell.Main>
        <Center h={100}>
          <Leagues setLeagueName={setLeagueName} setLeagueKey={setLeagueKey} />
        </Center>
        <Standings leagueName={leagueName} leagueKey={leagueKey} />
      </AppShell.Main>
    </AppShell>
  );
}
