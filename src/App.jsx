import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // 🔍 Fetch Recipes
  const fetchRecipes = async () => {
    if (!search) return;
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await res.json();
    setRecipes(data.meals || []);
  };

  // ➕ Add to Favorites
  const addToFavorites = (recipe) => {
    if (!favorites.some((fav) => fav.idMeal === recipe.idMeal)) {
      setFavorites([...favorites, recipe]);
    }
  };

  // ❌ Remove from Favorites
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((fav) => fav.idMeal !== id));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* 🔍 Search Section */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <button
          onClick={fetchRecipes}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* 🍲 Recipes Section */}
      <h2 className="text-2xl font-bold mb-4">🍲 Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="border rounded-lg shadow p-4 flex flex-col items-center"
          >
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="rounded-md w-full h-40 object-cover mb-2"
            />
            <h3 className="font-semibold">{recipe.strMeal}</h3>
            <button
              onClick={() => addToFavorites(recipe)}
              className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              Add to Favorites ⭐
            </button>
          </div>
        ))}
      </div>

      {/* ❤️ Favorites Section */}
      {favorites.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">❤️ Your Favorites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favorites.map((fav) => (
              <div
                key={fav.idMeal}
                className="border rounded-lg shadow p-4 flex flex-col items-center"
              >
                <img
                  src={fav.strMealThumb}
                  alt={fav.strMeal}
                  className="rounded-md w-full h-40 object-cover mb-2"
                />
                <h3 className="font-semibold">{fav.strMeal}</h3>
                <button
                  onClick={() => removeFromFavorites(fav.idMeal)}
                  className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove ❌
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
