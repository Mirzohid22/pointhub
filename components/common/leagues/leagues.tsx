"use client";
import React from "react";
import { Center, SegmentedControl, Image } from "@mantine/core";
import NextImage from "next/image";
import leagues from "@/assets/leagues";

interface LeagueProps {
  setLeagueName: React.Dispatch<React.SetStateAction<string>>;
  setLeagueKey: React.Dispatch<React.SetStateAction<number>>;
}
const Leagues: React.FC<LeagueProps> = ({ setLeagueName, setLeagueKey }) => {
  const data = leagues.map((league) => {
    return {
      value: league.league_name,
      label: (
        <Center style={{ gap: 5 }} key={league.league_key}>
          <Image
            key={league.country_key}
            component={NextImage}
            src={league.country_logo}
            width={32}
            height={16}
            alt={league.country_name}
          />
          <span>
            {league.league_name.length > 12
              ? league.league_name.slice(0, 9) + "..."
              : league.league_name}
          </span>
        </Center>
      ),
      // disabled: league.country_name !== "England",
    };
  });
  return (
    <SegmentedControl
      data={data}
      size="md"
      radius="xl"
      onChange={(value) => {
        setLeagueName(value);
        const key: number = leagues.find(
          (league) => league.league_name === value
        )?.league_key || 152;
        setLeagueKey(key);
      }}
    />
  );
};

export default Leagues;
