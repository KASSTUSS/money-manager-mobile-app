import { db } from "../../db/connectDB";
import { TCreateAccount } from "./types";

export default function createNewAccount(data: TCreateAccount, callback: () => void): void {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO accounts (account_name, color_scheme, balance) VALUES (?, ?, ?);",
      [data.account_name, data.color_scheme, data.balance],
      (_, { insertId }) => {
        callback();
      }
    );
  });
}
