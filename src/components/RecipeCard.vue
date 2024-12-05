<script setup>
import {useRoute, useRouter} from 'vue-router'
import mealType from "../MOCK_DATA.js";
import {onMounted} from "vue";

const router = useRouter()
const route = useRoute()

defineProps({
  recipeName: {
    type: Object,
    required: true
  },
  prepTime: {
    type: Object,
    required: true
  },
  cookTime: {
    type: Object,
    required: true
  },
  servings: {
    type: Object,
    required: true
  },
  recipeImg: {
    type: Object,
    required: true
  }
})

const goToDetail = (id) => {
  router.push({
    name: 'RecipeDetail',
    params: {
      id: id
    },
  })
}

const paramId = route.params.id;
const recipe = mealType.data.filter(mealType => mealType.id === paramId)[0]

onMounted(() => {
  if (!recipe) {
    router.push({
      name: 'Home'
    })
  }
})

</script>

<template>

  <div class="wrapper" @click="goToDetail (mealType.id)">
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
      margin: 1rem;
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

  /*.item::before first-child {
    border-right: none;
  } probs need to delete*/

}
</style>