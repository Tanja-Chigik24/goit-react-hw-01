import clsx from "clsx";
import css from "./TransactionHistory.module.css";
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      {transactions.map((transaction) => (
        <tbody key={transaction.id} className={css.tbody}>
          <TransactionHistoryItem transaction={transaction} />
        </tbody>
      ))}
    </table>
  );
}
