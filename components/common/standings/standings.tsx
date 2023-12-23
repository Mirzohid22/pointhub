import React, { useEffect } from "react";
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

interface StandingsProps {
  leagueName: string;
  leagueKey: number;
}

const API = process.env.NEXT_PUBLIC_API_URL as string;
const KEY = process.env.NEXT_PUBLIC_API_KEY as string;

const Standings: React.FC<StandingsProps> = ({ leagueName, leagueKey }) => {
  const [rows, setRow] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const fetchStandings = async () => {
      setLoading(true);
      const params = new URLSearchParams();
      params.append("met", "Standings");
      params.append("leagueId", leagueKey.toString());
      params.append("APIkey", KEY.toString());
      const response = await fetch(`${API}?${params.toString()}`, {
        method: "GET",
      });
      const { success, result } = await response.json();
      if (success) {
        setRow(result.total);
      }
      setLoading(false);
    };
    fetchStandings();
  }, [leagueKey]);

  if (loading)
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
          {rows.length &&
            rows.map((club: Standing) => {
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
