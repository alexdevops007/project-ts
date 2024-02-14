export type RestaurantStatus = 'Want to Try' | 'Recommended' | 'Do Not Recommend' | 'Must Try'

export interface Dish {
  name: string
  description: string
  price: number
}

export interface Restaurant {
  name: string
  address: string
  status: RestaurantStatus
  dishes: Dish[]
}
