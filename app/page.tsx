"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppShell, Center } from "@mantine/core";
import { Navbar } from "../components/navbar/navbar";
import { Header } from "../components/header/header";
import { useDisclosure } from "@mantine/hooks";
import Leagues from "@/components/common/leagues/leagues";
import Standings from "@/components/common/standings/standings";
import useLeague from "@/components/common/leagues/hooks/useLeague";
export default function Home() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 60 * 1000,
          },
        },
      }),
  )
  const [opened, { toggle }] = useDisclosure();
  const { leagueName, setLeagueName, leagueKey, setLeagueKey } = useLeague();

  return (
    <QueryClientProvider client={queryClient}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !opened },
        }}
        padding={{ xs: "xs", sm: "sm" }}
      >
        <Header opened={opened} toggle={toggle} />
        <Navbar />
        <AppShell.Main
          style={{
            paddingTop: 60,
          }}
        >
          <Center h={100}>
            <Leagues
              setLeagueName={setLeagueName}
              setLeagueKey={setLeagueKey}
            />
          </Center>
          <Standings leagueName={leagueName} leagueKey={leagueKey} />
        </AppShell.Main>
      </AppShell>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}
