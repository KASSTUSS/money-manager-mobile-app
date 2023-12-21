import { TTransactions } from "../services/getAllTransactions/types";
import { formatDateToDDMMYYYY } from "./formatDate";
import { parseDate } from "./sortTransactionsByDate";

export type TBalance = {
  date: string;
  balance: number;
};

export type TBalances = TBalance[];


function calculateBalances(
  transactions: TTransactions,
  lastBalance: number
): TBalances {


  const lastDate = transactions.length > 0 ? transactions[0].date : null;

  const groupedTransactions = transactions.reduce((acc, transaction) => {
    acc[transaction.date] = acc[transaction.date] || [];
    acc[transaction.date].push(transaction);

    return acc;
  }, {} as Record<string, TTransactions>);

  // Вычисляем общий денежный поток и баланс для каждой даты
  const balances: TBalances = [];
  Object.keys(groupedTransactions).forEach((date) => {
    const transactionsForDate: TTransactions = groupedTransactions[date];
    const dailyFlow = transactionsForDate.reduce((sum, transaction) => {
      return transaction.type_transaction === "+"
        ? sum + transaction.sum
        : sum - transaction.sum;
    }, 0);

    

    if (date != lastDate) {
        lastBalance += dailyFlow;
    }

    balances.push({ date, balance: lastBalance });
  });

  return balances;
}


export function fillMissingDates(records: TTransactions): TBalances {
  const result: TBalances = [];

  if (records.length === 0) {
    return result;
  }

  const sortedRecords = calculateBalances(records.sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  ), records[0].balance);



  let currentDate = parseDate(sortedRecords[0].date);
  const endDate = new Date();
  endDate.setDate(endDate.getDate() - 30);

  let lastBalance = sortedRecords[0].balance;

  // Заполняем пропущенные даты
  while (currentDate >= endDate) {
    const formattedDate = formatDateToDDMMYYYY(currentDate);
    const currentRecord = sortedRecords.find(
      (record) => record.date === formattedDate
    );

    if (currentRecord) {
      lastBalance = currentRecord.balance;
    }

    result.unshift({ date: formattedDate, balance: lastBalance });

    // Переходим к следующему дню
    currentDate.setDate(currentDate.getDate() - 1);
  }

  return result;
}
