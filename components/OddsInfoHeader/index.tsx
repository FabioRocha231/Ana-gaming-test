import { EventOddsType } from '@/app/api/event-odds/route';
import { formatDate } from '@/lib/utils';

type OddsInfoHeaderProps = {
  eventOdds: EventOddsType;
};

export const OddsInfoHeader = ({ eventOdds }: OddsInfoHeaderProps) => {
  return (
    <header className="mb-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-emerald-400">
          Odds de Apostas Esportivas
        </h1>
        <p className="text-gray-400">
          {eventOdds.sport_title} • {formatDate(eventOdds.commence_time)}
        </p>
      </div>

      <div className="mt-8 bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-lg text-gray-400">Time Visitante</div>
            <div className="text-2xl font-bold">{eventOdds.away_team}</div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold">
              {eventOdds.away_team.slice(0, 3)}
            </div>
            <div className="text-2xl font-bold">@</div>
            <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center text-2xl font-bold">
              {eventOdds.home_team.slice(0, 3)}
            </div>
          </div>

          <div className="text-center md:text-right mt-4 md:mt-0">
            <div className="text-lg text-gray-400">Time da Casa</div>
            <div className="text-2xl font-bold">{eventOdds.home_team}</div>
          </div>
        </div>
      </div>
    </header>
  );
};
