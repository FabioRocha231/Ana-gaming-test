import _ from 'lodash';
import { NextResponse } from 'next/server';

export type SportsResponseData = {
  sports: {
    [key: string]: Array<{
      key: string;
      group: string;
      title: string;
      description: string;
      active: boolean;
      has_outrights: boolean;
    }>;
  };
};

export async function GET() {
  const response = await fetch(
    process.env.ODDS_API_URL! +
      `/v4/sports/?apiKey=${process.env.ODDS_API_KEY!}`
  )
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log(err);
    });
  const grouped = _.groupBy(response, 'group');
  return NextResponse.json({ sports: grouped });
}
