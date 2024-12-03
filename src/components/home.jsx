import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Recipe from "./recipe";
import '../styles/home.css';

const Home = ({ recipes }) => {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    cheap: false,
    veryHealthy: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: false,
    gaps: false,
  });

  const apiKey = "85874eedcd694c1fbf2bd9297e48b0b2";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=50`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setRecipeData(data.recipes);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRecipeData();
  }, [apiKey]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const filteredRecipes = recipeData.filter((recipe) => {
    const titleMatches = recipe.title
      ? recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      : false;

    const filterMatches = Object.keys(filters).every((key) => {
      if (filters[key]) {
        return recipe[key] === true;
      }
      return true;
    });

    return titleMatches && filterMatches;
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="home-container">
      <div className="filters">
        <h3>Filter Recipes</h3>

        <div className="search-option">
          <input
            type="text"
            placeholder="Search Recipes..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className="dietary-filters">
          <label>
            <input
              type="checkbox"
              name="vegetarian"
              checked={filters.vegetarian}
              onChange={handleFilterChange}
            />
            Vegetarian
          </label>
          <label>
            <input
              type="checkbox"
              name="vegan"
              checked={filters.vegan}
              onChange={handleFilterChange}
            />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="glutenFree"
              checked={filters.glutenFree}
              onChange={handleFilterChange}
            />
            Gluten-Free
          </label>
          <label>
            <input
              type="checkbox"
              name="dairyFree"
              checked={filters.dairyFree}
              onChange={handleFilterChange}
            />
            Dairy-Free
          </label>
          <label>
            <input
              type="checkbox"
              name="cheap"
              checked={filters.cheap}
              onChange={handleFilterChange}
            />
            Cheap
          </label>
          <label>
            <input
              type="checkbox"
              name="veryHealthy"
              checked={filters.veryHealthy}
              onChange={handleFilterChange}
            />
            Very Healthy
          </label>
          <label>
            <input
              type="checkbox"
              name="veryPopular"
              checked={filters.veryPopular}
              onChange={handleFilterChange}
            />
            Very Popular
          </label>
          <label>
            <input
              type="checkbox"
              name="sustainable"
              checked={filters.sustainable}
              onChange={handleFilterChange}
            />
            Sustainable
          </label>
          <label>
            <input
              type="checkbox"
              name="lowFodmap"
              checked={filters.lowFodmap}
              onChange={handleFilterChange}
            />
            Low FODMAP
          </label>
          <label>
            <input
              type="checkbox"
              name="weightWatcherSmartPoints"
              checked={filters.weightWatcherSmartPoints}
              onChange={handleFilterChange}
            />
            Weight Watchers SmartPoints
          </label>
          <label>
            <input
              type="checkbox"
              name="gaps"
              checked={filters.gaps}
              onChange={handleFilterChange}
            />
            GAPS Diet
          </label>
        </div>
      </div>

      <div className="recipe-list">
        <h1>Recipe List</h1>
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="recipe-card"
              onClick={() => navigate(`/detail`, { state: { recipeId: recipe.id } })}
            >
              <Recipe recipe={recipe} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
