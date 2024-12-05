<script setup>
import RecipeCard from "./RecipeCard.vue";
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import mealType from "../MOCK_DATA.js";
import data from "../MOCK_DATA.js";
import {useRoute, useRouter} from 'vue-router';
import {onMounted} from "vue";

// const route = useRoute();
// const router = useRouter();
// const paramId = route.params.id;
// const recipe = mealType.data.filter(mealType => mealType.id === paramId)[0]
//
// onMounted(() => {
//   if (!recipe) {
//     router.push({
//       name: 'Home'
//     })
//   }
// })

</script>

<template>
<primary-template>
  <h2>{{ mealType }}</h2>
<recipe-card
    v-for="(recipe,index) in data.data"
    :key="index"
    :cook-time="recipe.cook_time"
    :prep-time="recipe.prep_time"
    :servings="recipe.servings"
    :recipe-name="recipe.recipe_name"
    :recipe-img="recipe.recipeImg"
/>
</primary-template>
</template>

<style scoped>

</style>