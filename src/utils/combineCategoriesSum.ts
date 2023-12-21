import { TTransaction } from "../services/getAllTransactions/types";

export type TCategoriesStatistics = {
  category_id: number;
  sum: number;
  type_transaction: string;
};

export function combineCategoriesSum(
  transactions: TTransaction[],
  type: "+" | "-"
): TCategoriesStatistics[] {
  // Фильтрация по дате (за последние 30 дней)
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const filteredTransactions = transactions.filter((transaction) => {
    const [day, month, year] = transaction.date.split(".").map(Number);
    const transactionDate = new Date(year, month - 1, day);
    return (
      transactionDate >= thirtyDaysAgo && transaction.type_transaction === type
    );
  });

  // Группировка по category_id и расчет суммы
  const categorySums: { [key: number]: number } = {};
  filteredTransactions.forEach((transaction) => {
    categorySums[transaction.category_id] =
      (categorySums[transaction.category_id] || 0) + transaction.sum;
  });

  // Создание массива TCategoriesStatistics
  let statistics: TCategoriesStatistics[] = Object.entries(categorySums).map(
    ([categoryId, sum]) => ({
      category_id: parseInt(categoryId),
      sum: sum,
      type_transaction: type,
    })
  );

  // Сортировка по убыванию суммы
  statistics.sort((a, b) => b.sum - a.sum);

  // Объединение элементов, если их больше 5
  if (statistics.length > 5) {
    const others = statistics.slice(4);
    const othersSum = others.reduce((acc, cur) => acc + cur.sum, 0);

    statistics = statistics.slice(0, 4);
    statistics.push({ category_id: 0, sum: othersSum, type_transaction: type });
  }

  return statistics;
}
