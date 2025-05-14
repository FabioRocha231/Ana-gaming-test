'use client';
import { IoIosInformationCircle } from 'react-icons/io';
import { EventsResponseData } from '@/app/api/events/route';
import useSelectedSport from '@/stores/useSelectedSport';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const Events = () => {
  const router = useRouter();
  const { selectedSport } = useSelectedSport();
  const [events, setEvents] = useState<EventsResponseData>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchEvents = async () => {
    setIsLoading(true);
    const response = await fetch(`/api/events?sport=${selectedSport}`)
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
    <div className="flex flex-col items-center justify-start h-screen w-4xl mt-5 overflow-y-auto">
      <ul className="list bg-base-100 w-full rounded-box shadow-md">
        <li className="p-4 pb-2 text-base opacity-60 tracking-wide text-center">
          {events[0].sport_title}
        </li>
        {events.map(event => {
          return (
            <div key={event.id}>
              <li className="list-row">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-center">
                    {
                      new Date(event.commence_time)
                        .toLocaleString('pt-BR')
                        .split(',')[0]
                    }
                  </p>
                  <p className="text-center">
                    {
                      new Date(event.commence_time)
                        .toLocaleString('pt-BR')
                        .split(',')[1]
                    }
                  </p>
                </div>
                <div>
                  <div className="text-xs uppercase">
                    {event.home_team ? event.home_team : 'TBD'}{' '}
                  </div>
                  <div className="text-xs uppercase">x</div>
                  <div className="text-xs uppercase">
                    {event.away_team ? event.away_team : 'TBD'}
                  </div>
                </div>
                <button
                  className="btn btn-square btn-ghost"
                  onClick={() =>
                    router.push(
                      `/auth/odds-info?event-id=${event.id}&selected-sport=${selectedSport}`
                    )
                  }
                >
                  <IoIosInformationCircle size={20} />
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
