export interface Dish {
  name: string
  description: string
  price: number
}

export interface IRestaurant {
  name: string
  address: string
  status: RestaurantStatus
  dishes: Dish[]
}

type RestaurantStatus = 'Want to Try' | 'Recommended' | 'Do Not Recommend' | 'Must Try'
