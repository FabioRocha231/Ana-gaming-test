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

// const responseMock = {
//   id: 'a512a48a58c4329048174217b2cc7ce0',
//   sport_key: 'americanfootball_nfl',
//   sport_title: 'NFL',
//   commence_time: '2023-01-01T18:00:00Z',
//   home_team: 'Atlanta Falcons',
//   away_team: 'Arizona Cardinals',
//   bookmakers: [
//     {
//       key: 'draftkings',
//       title: 'DraftKings',
//       markets: [
//         {
//           key: 'player_pass_tds',
//           last_update: '2023-01-01T05:31:29Z',
//           outcomes: [
//             {
//               name: 'Over',
//               description: 'David Blough',
//               price: -205,
//               point: 0.5,
//             },
//             {
//               name: 'Under',
//               description: 'David Blough',
//               price: 150,
//               point: 0.5,
//             },
//             {
//               name: 'Over',
//               description: 'Desmond Ridder',
//               price: -270,
//               point: 0.5,
//             },
//             {
//               name: 'Under',
//               description: 'Desmond Ridder',
//               price: 195,
//               point: 0.5,
//             },
//           ],
//         },
//       ],
//     },
//     {
//       key: 'fanduel',
//       title: 'FanDuel',
//       markets: [
//         {
//           key: 'player_pass_tds',
//           last_update: '2023-01-01T05:35:06Z',
//           outcomes: [
//             {
//               name: 'Over',
//               description: 'David Blough',
//               price: -215,
//               point: 0.5,
//             },
//             {
//               name: 'Under',
//               description: 'David Blough',
//               price: 164,
//               point: 0.5,
//             },
//             {
//               name: 'Over',
//               description: 'Desmond Ridder',
//               price: 196,
//               point: 1.5,
//             },
//             {
//               name: 'Under',
//               description: 'Desmond Ridder',
//               price: -260,
//               point: 1.5,
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

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
