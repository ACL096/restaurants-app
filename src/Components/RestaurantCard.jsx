export default function RestaurantCard({ restaurant }) {
  return (
    <div className="card restaurant-card mb-4 shadow-sm">
      <img src={restaurant.image} className="card-img-top" alt={restaurant.name} />
      <div className="card-body">
        <h5 className="card-title">{restaurant.name}</h5>
        <p className="card-text">{restaurant.description}</p>
        <p className="text-muted"><strong>Dirección:</strong> {restaurant.address}</p>
      </div>
    </div>
  )
}

