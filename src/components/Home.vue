<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import HomePageBlock from "./HomePageBlock.vue";
import recipesFile from "../MOCK_DATA.js";
const recipes = recipesFile.data

// Filter recipes by mealType
const dinnerRecipes = recipes.filter(recipe => recipe.mealType === 'Dinner');
const breakfastRecipes = recipes.filter(recipe => recipe.mealType === 'Breakfast');
const dessertRecipes = recipes.filter(recipe => recipe.mealType === 'Dessert');

</script>

<template>

  <primary-template>
    <!-- Dinner Block -->
    <home-page-block :mealType="'Dinner'" :recipes="dinnerRecipes" />

    <!-- Breakfast Block -->
    <home-page-block :mealType="'Breakfast'" :recipes="breakfastRecipes" />

    <!-- Dessert Block -->
    <home-page-block :mealType="'Dessert'" :recipes="dessertRecipes" />

  </primary-template>

</template>

<style scoped>


</style>