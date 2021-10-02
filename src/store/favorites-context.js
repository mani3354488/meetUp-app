import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (itemId) => {},
  itemIsFavorite: (itemId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setuserFavorites] = useState([]);

  function addFavHandler(favoriteItem) {
    setuserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteItem);
    });
  }

  function removeFavHandler(itemId) {
    setuserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((item) => item.id !== itemId);
    });
  }

  function itemsIsFavHandler(itemId) {
    return userFavorites.some((item) => item.id === itemId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavHandler,
    removeFavorite: removeFavHandler,
    itemIsFavorite: itemsIsFavHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
