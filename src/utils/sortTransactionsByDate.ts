import { TTransactions } from "../services/getAllTransactions/types";

export function parseDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split(".").map(Number);
  return new Date(year, month - 1, day);
}

export function sortTransactionsByDate(records: TTransactions): TTransactions {
  if (records.length === 0) {
    return [];
  }

  const sortedRecords: TTransactions = records.sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  );

  return sortedRecords;
}