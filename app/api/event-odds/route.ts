import { NextResponse } from 'next/server';

export type Outcome = {
  name: string;
  description: string;
  price: number;
  point: number;
};

type Market = {
  key: string;
  last_update: string; // ISO 8601 date string
  outcomes: Outcome[];
};

export type Bookmaker = {
  key: string;
  title: string;
  markets: Market[];
};

export type EventOddsType = {
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string; // ISO 8601 date string
  home_team: string;
  away_team: string;
  bookmakers: Bookmaker[];
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const eventId = searchParams.get('event-id');
  const sport = searchParams.get('sport');

  const response = await fetch(
    process.env.ODDS_API_URL! +
      `/v4/sports/${sport}/events/${eventId}/odds?apiKey=${process.env.ODDS_API_KEY!}&regions=us&markets=h2h&oddsFormat=american`
  )
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log(err);
    });

  return NextResponse.json(response);
}
