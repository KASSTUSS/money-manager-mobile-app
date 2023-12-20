export type TTransaction = {
  id: number;
  account_id: number;
  account_name: string;
  balance: number;
  category_id: number;
  color_scheme: number;
  date: string;
  sum: number;
  type_transaction: string;
};

export type TTransactions = TTransaction[];