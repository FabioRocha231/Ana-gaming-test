import { EventOddsType, Outcome } from '@/app/api/event-odds/route';
import { OddsCardHeader } from './Header';

type OddsCardProps = {
  eventOdds: EventOddsType;
};
function formatOdds(price: number) {
  return price > 0 ? `+${price}` : price.toString();
}

function groupByPlayer(outcomes: Outcome[]) {
  const players: Record<string, Outcome[]> = {};

  outcomes.forEach(outcome => {
    if (!players[outcome.description]) {
      players[outcome.description] = [];
    }
    players[outcome.description].push(outcome);
  });

  return Object.entries(players).map(([name, outcomes]) => ({
    name,
    outcomes,
  }));
}

export const OddsCard = ({ eventOdds }: OddsCardProps) => {
  return eventOdds.bookmakers?.map(bookmaker => (
    <div
      key={bookmaker.key}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700"
    >
      <OddsCardHeader bookmaker={bookmaker} />

      <div className="p-6">
        {groupByPlayer(bookmaker.markets[0].outcomes).map((player, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {player.outcomes.map((outcome, i) => (
                <div
                  key={i}
                  className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer border border-gray-600"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold">{outcome.name}</span>
                      {outcome.point ? (
                        <span className="text-gray-300 ml-2">
                          {outcome.point}
                        </span>
                      ) : null}
                    </div>
                    <div
                      className={`text-lg font-bold ${outcome.price > 0 ? 'text-green-400' : 'text-red-400'}`}
                    >
                      {formatOdds(outcome.price)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ));
};
