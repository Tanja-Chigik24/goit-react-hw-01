import css from "./Profile.module.css";

export default function Profile({
  userData: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.user}>
      <div className={css.userAvatar}>
        <img src={avatar} alt="User avatar" className={css.userImg} />
        <p className={css.userName}>{username}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.userInfo}>
        <li className={css.followers}>
          <span className={css.spanName}>Followers</span>
          <span className={css.spanInfo}>{followers}</span>
        </li>
        <li className={css.views}>
          <span className={css.spanName}>Views</span>
          <span className={css.spanInfo}>{views}</span>
        </li>
        <li className={css.likes}>
          <span className={css.spanName}>Likes</span>
          <span className={css.spanInfo}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
