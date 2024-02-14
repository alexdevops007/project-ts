<template>
  <main>
    <!-- Create a form that allows users to add a restaurant to a list -->
    <form @submit.prevent="addRestaurant">
      <label for="restaurant-name">Restaurant Name</label>
      <input id="restaurant-name" v-model="newRestaurantName" type="text" />
      <button type="submit">Add Restaurant</button>
    </form>
    <ul>
      <li v-for="restaurant in restaurantList" :key="restaurant">
        {{ restaurant }}
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const restaurantList = ref<string[]>([])
const newRestaurantName = ref<string>('')

function addRestaurant() {
  if (newRestaurantName.value.trim() !== '') {
    restaurantList.value.push(newRestaurantName.value.trim())
    newRestaurantName.value = ''
  }
}
</script>
