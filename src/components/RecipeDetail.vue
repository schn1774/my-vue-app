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
    <body>

      <header>
        <h2>{{ recipe.recipe_name }}</h2>
      </header>
      <div class="middle-stuff">
      <aside class="left">
        <div class="topinfo">
          <div>
            <p>Author: Lee Funke</p>
          </div>
          <div>
            <p>Last Updated: 8/20/2024</p>
          </div>
        </div>

        <recipe-card
            :recipe-img="recipe.recipeImg"
            :recipe-name="recipe.recipe_name"
            :servings="recipe.servings"
            :prep-time="recipe.prep_time"
            :cook-time="recipe.cook_time"
        />
        <div>
          <h2>Ingredients</h2>
          <ul>
            <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
              {{ ingredient }}
            </li>
          </ul>
        </div>
        <h2>Instructions</h2>
        <ol>
          <li class="instructions" v-for="(step, index) in recipe.instructions" :key="index">
            {{ step }}
          </li>
        </ol>
        <div class="tipblock, tipblock2">
          <h3>Tips & Notes</h3>
          <ol>
            <li v-for="(tip, index) in recipe.tipsNotes" :key="index">
              {{ tip }}
            </li>
          </ol>
        </div>
      </aside>


      <section class="right">
        <div class="box">
          <div>
            <h3>Nutrition</h3>

              <p>Calories: {{ recipe.calories }}, Carbohydrates: {{ recipe.carbohydrates }}, Protein: {{recipe.protein}}, Fat: {{recipe.fat}}, Fiber: {{recipe.fiber}}, Sugar: {{recipe.sugar}}</p>
          </div>

          <div>
            <h3>Ingredients</h3>
            <ul>
              <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
                {{ ingredient }}
              </li>
            </ul>
          </div>
        </div>
        <div class="box2">
          <div class="tipblock">
            <h3>Tips & Notes</h3>
            <ol>
              <li v-for="(tip, index) in recipe.tipsNotes" :key="index">
                {{ tip }}
              </li>
            </ol>
          </div>
        </div>

      </section>
      </div>

      <div class="nutrition-block">
        <h3>Nutrition</h3>
          <p>Calories: {{ recipe.calories }}, Carbohydrates: {{ recipe.carbohydrates }}, Protein: {{recipe.protein}}, Fat: {{recipe.fat}}, Fiber: {{recipe.fiber}}, Sugar: {{recipe.sugar}}</p>
          <p>Nutrition information is automatically calculated, so should only be used as an approximation.</p>
      </div>
    </body>
  </primary-template>
</template>

<style scoped>
section.right {
display: none;
}

body {
  margin: 1rem;

}
.topinfo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 500px;
}
p {
  font-size: clamp(1rem, 1.5vw, 1rem);
}
li.instructions {
  padding-bottom: 1.5rem;
}
div.tipblock {
  background-color: #c3d59c;
  padding: 1rem;
  h3 {
    font-style: italic;
  }

}
/* Override in tablet & up */
@media screen and (width > 500px) {

}

/* Override in desktop and up */
@media screen and (width > 1550px) {

body {
  display: flex;
  flex-direction: column;
}
body {
  display: flex;
  .middle-stuff {
    flex-direction: row;
  }
  section.right {
    display: block;
    float: right;
    width: 25%;
    min-width: 354px;
    padding: 1rem;

    height: fit-content;

  }
  aside {
    float: left;
    width: fit-content;
    max-width: 70%;

  }
  div.tipblock2 {display: none}
  div.nutrition-block {display: none}

}
div.box2 {
  background-color: #B4D4CA;
}
div.box {
  background-color: #ffdfac;
  padding:1rem;
  margin-bottom: 0;
}


}
</style>