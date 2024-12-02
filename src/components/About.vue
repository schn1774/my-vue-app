<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
</script>

<template>
  <primaryTemplate>
    <body>
    <header>
    <h1>WHO WE ARE</h1>
    </header>

    <img src="../assets/author-headshot.png" height="626" width="431"/>
    <p>Meet Lee Funke, a passionate home cook and advocate for accessible, delicious meals. After navigating the challenges of cooking in a tiny dorm kitchen with a tight budget, Lee set out to create recipes that would inspire students everywhere to ditch takeout and embrace the joy of homemade food.
    With an emphasis on simplicity, Lee Funke’s cookbook is packed with easy-to-follow recipes that require minimal ingredients, equipment, and time—perfect for busy college students. From quick breakfasts to hearty dinners and budget-friendly snacks, these recipes prove that you don’t need a gourmet kitchen to make great food.
    When Lee Funke isn’t cooking up a storm, they enjoy exploring new coffee shops, binge-watching cooking shows, or playing intramural sports.
    Follow Lee Funke for more tips, tricks, and meal ideas on [social media handles or website].
    </p>
    </body>
  </primaryTemplate>

</template>

<style scoped>

body {
  margin: 1rem;
}
img {

  width: 100%;
  max-height: 490px;
  object-fit: cover;
  border-radius: 30px;
}
@media screen and (width > 500px) {
  img {
    float: left;
    margin-right: 1rem;
    object-fit: none;
  }
}
</style>