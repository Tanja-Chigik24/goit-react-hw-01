import Profile from "../Profile/Profile";
import data from "/src/userData.json";
import initialFriends from "/src/friends.json";
import FriendList from "../FriendList/FriendList";
import inTransactions from "/src/transactions.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import css from "./App.module.css";

export default function App() {
  return (
    <>
      <Profile userData={data} />

      <FriendList friends={initialFriends} />

      <TransactionHistory transactions={inTransactions} />
    </>
  );
}
