import type Standing from "@/types/standing";
const API = process.env.NEXT_PUBLIC_API_URL as string;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string;

interface StandingsResponse {
    success: boolean;
    standings: Standing[];
}

async function getStandings(leagueKey: number): Promise<StandingsResponse> {
    const params = new URLSearchParams();
    params.append('met', 'Standings');
    params.append('leagueId', leagueKey.toString());
    params.append('APIkey', API_KEY.toString());
    const response = await fetch(`${API}?${params.toString()}`, {
        method: 'GET',
    });
    const { success = false, result } = await response.json();
    if (success) return { success, standings: result.total };

    return { success, standings: [] };
}

export default getStandings;