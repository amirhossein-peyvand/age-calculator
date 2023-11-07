import { create } from "zustand";

interface Date {
  day?: number;
  month?: number;
  year?: number;
}

interface DateQueryStore {
  dateQuery: Date;
  setDay: (day: number) => void;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
}

const useStore = create<DateQueryStore>((set) => ({
  dateQuery: {},
  setDay: (day) => set((store) => ({ dateQuery: { ...store.dateQuery, day } })),
  setMonth: (month) =>
    set((store) => ({ dateQuery: { ...store.dateQuery, month } })),
  setYear: (year) =>
    set((store) => ({ dateQuery: { ...store.dateQuery, year } })),
}));

export default useStore;
