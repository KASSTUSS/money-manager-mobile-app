import { Dispatch, SetStateAction } from "react";
import { db } from "../../db/connectDB";
import { TTransactions } from "./types";

export default function getAllTransactions(
  setData: Dispatch<SetStateAction<TTransactions>>
): void {
  db.transaction((tx) => {
    tx.executeSql(
      `SELECT transactions.*, accounts.account_name, accounts.color_scheme, accounts.balance
        FROM transactions
        JOIN accounts ON transactions.account_id = accounts.id;`,
      [],
      (_, { rows: { _array } }) => {
        setData(_array);
      }
    );
  });
}
