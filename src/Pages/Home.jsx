import { restaurantsData } from '../data'
import RestaurantCard from '../components/RestaurantCard'

export default function Home() {
  return (
    <div>
      <h2 className="mb-4 text-">Listado de Restaurantes</h2>
      <div className="row">
        {restaurantsData.map(restaurant => (
          <div key={restaurant.id} className="col-md-4">
            <RestaurantCard restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
  )
}


