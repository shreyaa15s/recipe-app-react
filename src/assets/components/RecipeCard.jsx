function RecipeCard({ recipe }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={recipe.image}
        alt={recipe.label}
        className="rounded-md mb-4"
      />
      <h2 className="text-lg font-bold">{recipe.label}</h2>
      <p className="text-sm text-gray-600">Calories: {Math.round(recipe.calories)}</p>
    </div>
  );
}

export default RecipeCard;
