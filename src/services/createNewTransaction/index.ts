import { db } from "../../db/connectDB";
import { TCreateTransaction } from "./types";

export default function createNewTransaction(data: TCreateTransaction, callback: () => void): void {

  const { account_id, category_id, type_transaction, date, sum } = data;

  db.transaction((tx) => {
    tx.executeSql(
      `
      INSERT INTO transactions 
        (account_id, category_id, type_transaction, sum, date) 
        VALUES (?, ?, ?, ?, ?);`,
      [account_id, category_id, type_transaction, sum, date],
      (_, { insertId }) => {
        tx.executeSql(
          `
          SELECT * 
            FROM accounts 
            WHERE id=${account_id}`,
          [],
          (_, { rows: { _array } }) => {
            const k = type_transaction == "+" ? 1 : -1;
            const newBalance = _array[0].balance + k * sum;

            tx.executeSql(
              `UPDATE accounts
                      SET balance = ${newBalance}
                      WHERE id = ${account_id};
                  `,
              [],
              (_, result) => {
                callback();
              },
            );
          }
        );
      }
    );
  });
}


// const insertData = () => {
//   db.transaction((tx) => {
//     tx.executeSql(
//       "INSERT INTO transactions (account_id, category_id, type_transaction, sum, date) VALUES (?, ?, ?, ?, ?);",
//       [account_id, category_id, type_transaction, sum, date],
//       (_, { insertId }) => {
        

//         tx.executeSql(
//           "COMMIT;",
//           null,
//           (_, result) => {},
//           (_, error) => {
//             console.error(error);
//           }
//         );
//       },
//       (_, error) => {
//         console.error(error);
//       }
//     );
//   });
//   navigation.navigate(ROUTES.TRANSACTIONS);
// };

// insertData(readyData);