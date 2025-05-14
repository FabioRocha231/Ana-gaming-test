'use client';

import { EventsResponseData } from '@/app/api/events/route';
import useSelectedSport from '@/stores/useSelectedSport';
import { useEffect, useState } from 'react';

export const Events = () => {
  const { selectedSport } = useSelectedSport();
  const [events, setEvents] = useState<EventsResponseData>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchEvents = async () => {
    setIsLoading(true);
    const response = await fetch(
      `http://localhost:3000/api/events?sport=${selectedSport}`
    )
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.log(err);
      });
    setEvents(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, [selectedSport]);

  console.log(events);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-start h-screen w-4xl">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!events.length) {
    return <h1>No events found</h1>;
  }

  return (
    <div className="flex flex-col items-center justify-start h-screen w-4xl border border-amber-400 overflow-y-scroll">
      <h1>{events[0].sport_title}</h1>
      {events.map(event => {
        return (
          <div
            key={event.id}
            className="flex flex-row border justify-between w-3xs border-amber-50 my-2 cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center mr-10">
              <p>
                {
                  new Date(event.commence_time)
                    .toLocaleString('pt-BR')
                    .split(',')[0]
                }
              </p>

              <p>
                {
                  new Date(event.commence_time)
                    .toLocaleString('pt-BR')
                    .split(',')[1]
                }
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>{event.home_team ? event.home_team : 'TBD'} </p>
              <p className="text-center">vs</p>
              <p>{event.away_team ? event.away_team : 'TBD'}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
