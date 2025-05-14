'use client';

import { SportsResponseData } from '@/app/api/sports/route';
import useSelectedSport from '@/stores/useSelectedSport';

type sideBarProps = {
  sports: SportsResponseData;
};

export const SideBar = ({ sports }: sideBarProps) => {
  const { setSelectedSport } = useSelectedSport();
  return (
    <div className="flex flex-col mt-5  overflow-y-auto">
      <h1 className="text-xl mb-2 text-center">Esportes</h1>
      <ul className="menu bg-base-200 rounded-box w-56">
        {Object.entries(sports.sports).map(([groupName, games]) => {
          return (
            <li key={groupName}>
              <details>
                <summary>{groupName}</summary>
                <ul>
                  {games.map(game => {
                    return (
                      <li key={game.key}>
                        <p
                          className="cursor-pointer"
                          onClick={() => setSelectedSport(game.key)}
                        >
                          {game.title}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </details>
            </li>

            // <div key={groupName}>
            //   <h1 className="text-xs">{groupName}</h1>
            //   <ul>
            //     {games.map(game => {
            //       return (
            //         <li key={game.key}>
            //           <p
            //             className="text-base cursor-pointer hover:text-blue-500"
            //             onClick={() => setSelectedSport(game.key)}
            //           >
            //             {game.title}
            //           </p>
            //         </li>
            //       );
            //     })}
            //   </ul>
            // </div>
          );
        })}
      </ul>
    </div>
  );
};
