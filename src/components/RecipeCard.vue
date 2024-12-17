<script setup>
import {useRouter} from 'vue-router'
import helpers from "../utils/helpers.js";

const router = useRouter()


defineProps({
  recipeName: {
    type: String,
    required: true
  },
  prepTime: {
    type: String,
    required: true
  },
  cookTime: {
    type: String,
    required: true
  },
  servings: {
    type: String,
    required: true
  },
  recipeImg: {
    type: [String, Object],
    required: true
  }
})


const goToDetail = (recipeName) => {
  router.push({
    name: 'RecipeDetail',
    params: {
      recipeName: helpers.strToLowerDashed(recipeName)
    },
  })
}
</script>

<template class="recipe-card">

  <div class="wrapper" @click="goToDetail(recipeName)">
    <img :src="'../../src/assets/' + recipeImg" alt="img"/>
    <h3>{{ recipeName }}</h3>

    <div id="info" class="info">
      <div class="item"><h3>Prep time:</h3>
        <p>{{ prepTime }}</p></div>
      <div class="item"><h3>Cook time:</h3>
        <p>{{ cookTime }}</p></div>
      <div class="item"><h3>Servings:</h3>
        <p>{{ servings }}</p></div>
    </div>

  </div>
</template>

<style scoped>

#info {
  display: none;
}

div {
  text-align: center;

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 350px;
    max-width: 500px;
    border: 2px solid #382005;
    margin: .5rem;
    background-color: #ffdfac;

    .item {
      border-right: 2px solid #382005;
      width: 33%;
      min-width: 100px;
      padding: 0;

    }

    .item:last-child {
      border-right: none;
    }

    .info {
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      padding: 0;
      margin: .75rem;
    }

    img {
      width: 100%;
      max-height: 230px;
      object-fit: cover;
      border-bottom: 2px solid #382005;
    }
  }
}

@media screen and (width > 500px) {
  #info {
    display: flex;
  }

  div.info {
    flex-direction: row;
  }

  div.item {
    flex-direction: column;
    padding: .5rem;

  }
}
</style>