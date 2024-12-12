<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import RecipeCard from "./RecipeCard.vue";
import HomePageBlock from "./HomePageBlock.vue";
// import recipesFile from "../MOCK_DATA.js";
// const recipes = recipesFile.data



defineProps({
  mealType: {
    type: String,
    required: true
  },
  recipes: {
    type: Array,
    required: true,
  }
});

</script>

<template>
<primary-template>
  <h2>{{ mealType }} Recipes</h2>
<!--  <div>-->
<!--    <recipe-card-->
<!--        v-for="(recipe, index) in recipes"-->
<!--        :key="index"-->
<!--        :cook-time="recipe.cook_time"-->
<!--        :prep-time="recipe.prep_time"-->
<!--        :servings="recipe.servings"-->
<!--        :recipe-name="recipe.recipe_name"-->
<!--        :recipe-img="recipe.recipeImg"-->
<!--    />-->
<!--  </div>-->

</primary-template>
</template>


