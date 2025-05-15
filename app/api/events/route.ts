import { NextResponse } from 'next/server';
export type EventsResponseData = Array<{
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  home_team: string;
  away_team: string;
}>;
const events = [
  {
    id: 'a512a48a58c4329048174217b2cc7ce0',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2023-01-01T18:00:00Z',
    home_team: 'Atlanta Falcons',
    away_team: 'Arizona Cardinals',
  },
  {
    id: '0ba747b1414a31b05ef37f0bf3d7fbe9',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2023-01-01T18:00:00Z',
    home_team: 'Tampa Bay Buccaneers',
    away_team: 'Carolina Panthers',
  },
  {
    id: 'd7120d8231032db343cb86b20cfaaf48',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2023-01-01T18:00:00Z',
    home_team: 'Detroit Lions',
    away_team: 'Chicago Bears',
  },
  {
    id: 'c7e2faa6faf714fbe08621a727604cd8',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2023-01-01T18:00:00Z',
    home_team: 'Washington Commanders',
    away_team: 'Cleveland Browns',
  },
  {
    id: '2ed3fd0d267bbae31360e9f19d5adbab',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2023-01-01T18:00:00Z',
    home_team: 'Kansas City Chiefs',
    away_team: 'Denver Broncos',
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sport = searchParams.get('sport');
  const response = await fetch(
    process.env.ODDS_API_URL! +
      `/v4/sports/${sport}/events?apiKey=${process.env.ODDS_API_KEY!}`
  )
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log(err);
    });
  return NextResponse.json(response);
}
