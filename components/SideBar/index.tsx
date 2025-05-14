'use client';

import { SportsResponseData } from '@/app/api/sports/route';
import useSelectedSport from '@/stores/useSelectedSport';

type sideBarProps = {
  sports: SportsResponseData;
};

export const SideBar = ({ sports }: sideBarProps) => {
  const { setSelectedSport } = useSelectedSport();
  return (
    <div className="flex flex-col max-h-screen overflow-y-scroll">
      <h1 className="text-xl mt-12">Esportes</h1>
      {Object.entries(sports.sports).map(([groupName, games]) => {
        return (
          <div key={groupName}>
            <h1 className="text-xs">{groupName}</h1>
            <ul>
              {games.map(game => {
                return (
                  <li key={game.key}>
                    <p
                      className="text-base cursor-pointer hover:text-blue-500"
                      onClick={() => setSelectedSport(game.key)}
                    >
                      {game.title}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
