import clsx from "clsx";
import css from "./TransactionHistoryItem.module.css";

export default function TransactionHistoryItem({
  transaction: { type, amount, currency },
}) {
  return (
    <>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </>
  );
}
