<script setup>
import RecipeCard from "./RecipeCard.vue";

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

  <body>

    <section>
      <h2>{{ mealType }} Recipes</h2>
      <router-link :to="{ name:'RecipeCategory', params: { mealType } }">See More >></router-link>
    </section>
    <div class="home-page-slider">
      <recipe-card
          v-for="(recipe, index) in recipes"
          :key="index"
          :cook-time="recipe.cook_time"
          :prep-time="recipe.prep_time"
          :servings="recipe.servings"
          :recipe-name="recipe.recipe_name"
          :recipe-img="recipe.recipeImg"
      />
    </div>

  </body>
</template>

<style scoped>
/* Mobile first */
body {
  background-color: #ffefcc;
  padding: 1rem;
}
section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: grey;
    text-decoration: none;
  }
  a:hover {
    color: #994848;

  }
}
div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: space-around;
  /*align-items: space-around;*/
  padding: 0;
}

</style>