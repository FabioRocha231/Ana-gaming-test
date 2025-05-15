import { NextResponse } from 'next/server';
export type EventsResponseData = Array<{
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  home_team: string;
  away_team: string;
}>;

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
