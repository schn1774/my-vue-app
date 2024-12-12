<script setup>
import {onMounted} from "vue";
import recipes from "../MOCK_DATA.js";
import helpers from "../utils/helpers.js";
import {useRoute, useRouter} from "vue-router";
import RecipeCard from "./RecipeCard.vue";
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";

const router = useRouter();
const route = useRoute();
const paramRecipeName = route.params.recipeName

const recipe = recipes.data.filter(recipe => helpers.strToLowerDashed(recipe.recipe_name) === paramRecipeName)[0]

console.log('recipe: ', recipe)

onMounted(() => {
  if (!recipe) {
    router.push({
      name: 'Home'
    })
  }
});

</script>

<template>
  <primary-template v-if="recipe">
    <header>
      <h2>{{ recipe.recipe_name }}</h2>
      <div class="topinfo">
        <div>
          <p>Author: Lee Funke</p>
        </div>
        <div>
          <p>Last Updated: 8/20/2024</p>
        </div>
      </div>
    </header>

    <recipe-card
        :recipe-img="'/assets/' + recipe.recipeImg"
        :recipe-name="recipe.recipe_name"
        :servings="recipe.servings"
        :prep-time="recipe.prep_time"
        :cook-time="recipe.cook_time"
    />

    <h3>Instructions</h3>
    <ol>
      <li v-for="(step, index) in recipe.instructions" :key="index">
        {{ step }}
      </li>
    </ol>

    <h3>Tips & Notes</h3>
    <ol>
      <li v-for="(tip, index) in recipe.tipsNotes" :key="index">
        {{ tip }}
      </li>
    </ol>

    <div>
      <h2>Ingredients</h2>
      <ul>
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
          {{ ingredient }}
        </li>
      </ul>
    </div>
  </primary-template>
</template>

<style scoped>
.topinfo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>