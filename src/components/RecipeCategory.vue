<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import RecipeCard from "./RecipeCard.vue";
import HomePageBlock from "./HomePageBlock.vue";
import recipesFile from "../MOCK_DATA.js";
import {useRoute} from "vue-router";
const recipes = recipesFile.data

const route = useRoute();
const mealTypeParam = route.params.mealType;

let filteredRecipes = recipes.filter(recipe => recipe.mealType.toLowerCase() === mealTypeParam)
</script>

<template>
<primary-template>
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

</primary-template>
</template>


