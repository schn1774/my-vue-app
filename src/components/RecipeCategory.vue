<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import RecipeCard from "./RecipeCard.vue";
import recipesFile from "../MOCK_DATA.js";
import {useRoute, useRouter} from "vue-router";
const recipes = recipesFile.data

const route = useRoute();
const mealTypeParam = route.params.mealType.toLowerCase();

let filteredRecipes = recipes.filter(recipe => recipe.mealType.toLowerCase() === mealTypeParam)

</script>

<template>
<primary-template>
  <body>

    <h2>{{ mealTypeParam }} Recipes</h2>

    <div>
      <recipe-card
          v-for="(recipe, index) in filteredRecipes"
          :key="index"
          :cook-time="recipe.cook_time"
          :prep-time="recipe.prep_time"
          :servings="recipe.servings"
          :recipe-name="recipe.recipe_name"
          :recipe-img="recipe.recipeImg"
      />
    </div>

  </body>
</primary-template>
</template>


<style scoped>
body {
  padding: 1rem;
}
h2 {
  text-transform: capitalize;
}
div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: space-around;
}
</style>