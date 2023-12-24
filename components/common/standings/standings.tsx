import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Container,
  Table,
  Avatar,
  Text,
  Group,
  Loader,
  Center,
} from "@mantine/core";
import type Standing from "@/types/standing";
import getStandings from "./service/getStandings";

interface StandingsProps {
  leagueName: string;
  leagueKey: number;
}

const Standings: React.FC<StandingsProps> = ({ leagueName, leagueKey }) => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["standings", leagueKey],
    queryFn: () => getStandings(leagueKey),
    staleTime: 2000,
  });

  if (isError)
    return (
      <Center w="100%" h="100%">
        <Text>Something went wrong</Text>
      </Center>
    );

  if (isLoading)
    return (
      <Center w="100%" h="100%">
        <Loader color="blue" />
      </Center>
    );
  return (
    <Container size={"md"}>
      <Table
        stickyHeader
        stickyHeaderOffset={60}
        striped
        highlightOnHover
        withTableBorder
      >
        <Table.Caption>{leagueName}</Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Pos</Table.Th>
            <Table.Th>Team</Table.Th>
            <Table.Th>P</Table.Th>
            <Table.Th>W</Table.Th>
            <Table.Th>D</Table.Th>
            <Table.Th>L</Table.Th>
            <Table.Th visibleFrom="sm">GF</Table.Th>
            <Table.Th visibleFrom="sm">GA</Table.Th>
            <Table.Th>GD</Table.Th>
            <Table.Th>Pts</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.standings.length &&
            data.standings.map((club: Standing) => {
              return (
                <Table.Tr key={club.team_key}>
                  <Table.Td>{club.standing_place}</Table.Td>
                  <Table.Td>
                    <Group align="center" justify="start">
                      <Avatar src={club.team_logo} alt={club.league_season} />
                      <Text visibleFrom="sm">{club.standing_team}</Text>
                    </Group>
                  </Table.Td>
                  <Table.Td>{club.standing_P}</Table.Td>
                  <Table.Td>{club.standing_W}</Table.Td>
                  <Table.Td>{club.standing_D}</Table.Td>
                  <Table.Td>{club.standing_L}</Table.Td>
                  <Table.Td visibleFrom="sm">{club.standing_F}</Table.Td>
                  <Table.Td visibleFrom="sm">{club.standing_A}</Table.Td>
                  <Table.Td>{club.standing_GD}</Table.Td>
                  <Table.Td>{club.standing_PTS}</Table.Td>
                </Table.Tr>
              );
            })}
        </Table.Tbody>
      </Table>
    </Container>
  );
};

export default Standings;
