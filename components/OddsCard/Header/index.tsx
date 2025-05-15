import { Bookmaker } from '@/app/api/event-odds/route';
import { formatDate } from '@/lib/utils';
type OddsCardHeaderProps = {
  bookmaker: Bookmaker;
};

export const OddsCardHeader = ({ bookmaker }: OddsCardHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 px-6">
      <h3 className="text-xl font-bold">{bookmaker.title}</h3>
      <p className="text-sm text-emerald-100">
        Última atualização: {formatDate(bookmaker.markets[0].last_update, true)}
      </p>
    </div>
  );
};
