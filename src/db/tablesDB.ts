import { db } from "./connectDB";

export function createTablesIfNotExists() {
  db.transaction((tx) => {
    tx.executeSql(
      `
        CREATE TABLE IF NOT EXISTS accounts (
            id INTEGER PRIMARY KEY NOT NULL,
            account_name TEXT,
            color_scheme INTEGER,
            balance REAL
        );
      `
    );

    tx.executeSql(
      `
          CREATE TABLE IF NOT EXISTS transactions (
              id INTEGER PRIMARY KEY NOT NULL,
              account_id INTEGER REFERENCES accounts(id) ON DELETE CASCADE,
              category_id INTEGER,
              type_transaction TEXT ,
              sum REAL ,
              date TEXT
          );
        `
    );
  });
}

export function deleteFromTables() {
  db.transaction((tx) => {
    tx.executeSql(
      `
        DELETE FROM accounts;
      `
    );

    tx.executeSql(
      `
        DELETE FROM transactions;
      `
    );
  });
}
