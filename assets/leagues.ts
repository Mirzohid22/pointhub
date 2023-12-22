interface League {
    league_key: number,
    league_name: string,
    country_key: number,
    country_name: string,
    league_logo: string,
    country_logo: string,
};
const leagues: League[] = [
    {
        league_key: 152,
        league_name: "Premier League",
        country_key: 44,
        country_name: "England",
        league_logo: "https://apiv2.allsportsapi.com/logo/logo_leagues/152_premier-league.png",
        country_logo: "https://apiv2.allsportsapi.com/logo/logo_country/44_england.png"
    },
    {
        league_key: 302,
        league_name: "La Liga",
        country_key: 6,
        country_name: "Spain",
        league_logo: "https://apiv2.allsportsapi.com/logo/logo_leagues/302_la-liga.png",
        country_logo: "https://apiv2.allsportsapi.com/logo/logo_country/6_spain.png"
    },
    {
        league_key: 175,
        league_name: "Bundesliga",
        country_key: 4,
        country_name: "Germany",
        league_logo: "https://apiv2.allsportsapi.com/logo/logo_leagues/175_bundesliga.png",
        country_logo: "https://apiv2.allsportsapi.com/logo/logo_country/4_germany.png"
    }
];
export default leagues;
