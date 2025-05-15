import { create } from 'zustand';

interface SelectedSportState {
  selectedSport: string;
  setSelectedSport: (sport: string) => void;
}

export const useSelectedSport = create<SelectedSportState>(set => ({
  selectedSport: 'soccer_brazil_campeonato',
  setSelectedSport: (sport: string) => set({ selectedSport: sport }),
}));

export default useSelectedSport;
