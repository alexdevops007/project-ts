<template>
  <main>
    <!-- Create a form that allows users to add a restaurant to a list -->
    <form @submit.prevent="addRestaurant">
      <label for="restaurant-name">Restaurant Name</label>
      <input id="restaurant-name" v-model="newRestaurant.name" type="text" />
      <br />
      <label for="restaurant-address">Restaurant Address</label>
      <input id="restaurant-address" v-model="newRestaurant.address" type="text" />
      <br />
      <label for="restaurant-status">Restaurant Status</label>
      <select id="restaurant-status" v-model="newRestaurant.status">
        <option v-for="status in statusOptions" :key="status">{{ status }}</option>
      </select>
      <br />
      <label for="restaurant-dishes">Dishes</label>
      <input id="restaurant-dishes" v-model="newRestaurant.dishes" type="text" />
      <br />
      <button type="submit">Add Restaurant</button>
    </form>
    <ul>
      <li v-for="restaurant in restaurantList" :key="restaurant.name">
        {{ restaurant.name }} - Status: {{ restaurant.status }} - Dishes: {{ displayDishes(restaurant.dishes) }}
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Restaurant } from '../types';

const restaurantList = ref<Restaurant[]>([]);
const newRestaurant = ref<Restaurant>({ name: '', address: '', status: 'Must Try', dishes: '' });

const statusOptions = ['Want to Try', 'Recommended', 'Do Not Recommend', 'Must Try'];

function addRestaurant() {
  if (newRestaurant.value.name.trim() !== '') {
    const newRestaurantItem: Restaurant = {
      name: newRestaurant.value.name.trim(),
      address: newRestaurant.value.address.trim(),
      status: newRestaurant.value.status,
      dishes: newRestaurant.value.dishes
        .split(',')
        .map((dish: string) => ({ name: dish.trim(), description: '', price: 0 })),
    };
    restaurantList.value.push(newRestaurantItem);
    newRestaurant.value = { name: '', address: '', status: 'Must Try', dishes: '' };
  }
}

function displayDishes(dishes: { name: string; description: string; price: number }[]): string {
  return dishes.map((dish) => dish.name).join(', ');
}
</script>
