import { EventOddsType } from '@/app/api/event-odds/route';
import { OddsCard } from '@/components/OddsCard';
import { OddsInfoHeader } from '@/components/OddsInfoHeader';
import { formatDate } from '@/lib/utils';
import { redirect } from 'next/navigation';
import React from 'react';
type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
export default async function OddsPage({ searchParams }: Props) {
  const params = await searchParams;
  const eventId = params['event-id'];
  const selectedSport = params['selected-sport'];

  if (!eventId || !selectedSport) redirect('/auth/home');

  const eventOdds: EventOddsType = await fetch(
    `${process.env.VERCEL_URL}/api/event-odds?event-id=${eventId}&sport=${selectedSport}`
  )
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log(err);
    });

  if (!eventOdds) {
    return <div>Nada a exibir</div>;
  }
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        <OddsInfoHeader eventOdds={eventOdds} />
        <main>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <OddsCard eventOdds={eventOdds} />
          </div>
        </main>
      </div>
    </div>
  );
}
function formatOdds(price: number) {
  return price > 0 ? `+${price}` : price.toString();
}
