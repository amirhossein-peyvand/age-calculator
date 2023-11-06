import { create } from "zustand";

interface Date {
  day?: number | string;
  month?: number | string;
  year?: number | string;
}

interface DateQueryStore {
  dateQuery: Date;
  setDay: (day: string) => void;
  setMonth: (month: string) => void;
  setYear: (year: string) => void;
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
