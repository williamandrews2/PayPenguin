import { createContext, useContext } from "react";

export const BillContext = createContext(undefined);

// custom hook
export function useBillContext() {
  const bills = useContext(BillContext);

  if (bills === undefined) {
    throw new Error("useBillContext must be used with a BillContext!");
  }

  return bills;
}
