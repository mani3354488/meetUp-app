import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNav() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>SocialMeetUp</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All MeetUps</Link>
          </li>
          <li>
            <Link to="/newMeetup">Add NewMeetUp</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
