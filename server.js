// import express from "express";

// const app = express();
// // const recipeScraper = require("@brandonrjguth/recipe-scraper");
// const cors = require("cors");
// app.use(cors());

// const recipes = [
//     {
//       name: "Homemade Pasta",
//       image: "https://images.101cookbooks.com/HOMEMADE-PASTA-RECIPE-h.jpg?w=1200&auto=compress&auto=format",
//       ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan", "Garlic"],
//       instructions: [
//         "Boil the spaghetti.",
//         "Fry the pancetta with garlic.",
//         "Mix eggs with cheese and add to pasta.",
//       ],
//       time: {
//         prep: "10 min",
//         cook: "15 min",
//         total: "25 min",
//       },
//       servings: "2",
//     },
//     {
//       name: "Shredded Egg Salad",
//       image: "https://images.101cookbooks.com/SHREDDED-EGG-SALAD-RECIPE-22-h.jpg?w=420&auto=compress&auto=format",
//       ingredients: ["Chicken", "Fettuccine", "Cream", "Parmesan", "Butter"],
//       instructions: [
//         "Cook the fettuccine.",
//         "Fry the chicken.",
//         "Make the alfredo sauce with cream and butter.",
//       ],
//       time: {
//         prep: "5 min",
//         cook: "20 min",
//         total: "25 min",
//       },
//       servings: "4",
//     },
//     // Add more recipes as needed
//   ];

//   // API route to fetch a recipe by URL (for demonstration)
//   app.get("/api/recipe", (req, res) => {

//     console.log("Received request for /api/recipe");

//     const { url } = req.query;
  
//     // For simplicity, we'll return the first recipe if a URL is provided
//     if (url) {
//       const recipe = recipes.find((r) => r.name.toLowerCase().includes(url.toLowerCase()));
//       if (recipe) {
//         res.json(recipe);
//       } else {
//         res.status(404).json({ message: "Recipe not found" });
//       }
//     } else {
//       res.json(recipes); // Return all recipes by default
//     }
//   });

// // app.get("/api/recipe", async (req, res) => {
// //   const url = req.query.url;
// //   if (!url) {
// //     return res.status(400).json({ error: "Recipe URL is required" });
// //   }

// //   try {
// //     const recipe = await recipeScraper(url);
// //     res.json(recipe);
// //   } catch (error) {
// //     res.status(500).json({ error: "Failed to fetch recipe data" });
// //   }
// // });
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`The server is up and running on port ${PORT}`);
// });
