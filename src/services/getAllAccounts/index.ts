import { Dispatch, SetStateAction } from "react";
import { db } from "../../db/connectDB";
import { TAccounts } from "./types";

export default function getAllAccounts(
  setData: Dispatch<SetStateAction<TAccounts>>
): void {
  db.transaction((tx) => {
    tx.executeSql(`SELECT * FROM accounts`, [], (_, { rows: { _array } }) => {
      setData(_array);
    });
  });
}
