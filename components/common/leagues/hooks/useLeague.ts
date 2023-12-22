import React, { useState } from 'react';

interface useLeagueProps {
    leagueKey: number;
    setLeagueKey: React.Dispatch<React.SetStateAction<number>>;
    leagueName: string;
    setLeagueName: React.Dispatch<React.SetStateAction<string>>;
}

const useLeague = (): useLeagueProps => {
    const [leagueKey, setLeagueKey] = useState<number>(152);
    const [leagueName, setLeagueName] = useState<string>("Priemier League");

    return {
        leagueKey,
        setLeagueKey,
        leagueName,
        setLeagueName
    };
};

export default useLeague;
