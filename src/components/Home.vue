<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import HomePageBlock from "./HomePageBlock.vue";
import recipesFile from "../MOCK_DATA.js";
const recipes = recipesFile.data

// Filter recipes by mealType
const dinnerRecipes = recipes.filter(recipe => recipe.mealType.toLowerCase() === 'Dinner'.toLowerCase());
const breakfastRecipes = recipes.filter(recipe => recipe.mealType.toLowerCase() === 'breakfast');
const dessertRecipes = recipes.filter(recipe => recipe.mealType.toLowerCase() === 'Dessert'.toLowerCase());

function randomize(array) {
  let i = array.length;
  while (i > 0) {
    const ri = Math.floor(Math.random() * i);
    i--;
    [array[i], array[ri]] = [array[ri], array[i]];
  }
  return array;
}

function getHighlightedRecipe(array) {
  return randomize(array).slice(0, 3)
}

</script>

<template>

  <primary-template>
    <!-- Dinner Block -->
    <home-page-block :mealType="'Dinner'" :recipes="getHighlightedRecipe(dinnerRecipes)" />

    <!-- Breakfast Block -->
    <div class="alt">
    <home-page-block :mealType="'Breakfast'" :recipes="getHighlightedRecipe(breakfastRecipes)" />
    </div>

    <!-- Dessert Block -->
    <home-page-block :mealType="'Dessert'" :recipes="getHighlightedRecipe(dessertRecipes)" />

  </primary-template>

</template>

<style scoped>
  template {
    background-color: #ffefcc;
  }
  .alt {
    background-color: #fff5e6;
  }

</style>