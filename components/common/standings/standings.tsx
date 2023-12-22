import React from "react";
import { Center, Text } from "@mantine/core";

interface StandingsProps {
  leagueName: string;
  leagueKey: number;
}

const Standings: React.FC<StandingsProps> = ({ leagueName, leagueKey }) => {
  return (
    <>
      <Center h={100}>
        <Text size="xl">{leagueName}</Text>
      </Center>
      <Center h={100}>
        <Text size="xl">{leagueKey}</Text>
      </Center>
    </>
  );
};

export default Standings;
