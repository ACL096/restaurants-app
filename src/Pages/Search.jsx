import { useState } from 'react'
import { restaurantsData } from '../data'
import RestaurantCard from '../components/RestaurantCard'

export default function Search() {
  const [query, setQuery] = useState('')

  const filtered = restaurantsData.filter(r =>
    r.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <h2 className="mb-4">Buscar Restaurante</h2>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Buscar por nombre..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filtered.length > 0 ? (
        filtered.map(r => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))
      ) : (
        <p>No se encontraron restaurantes con ese nombre.</p>
      )}
    </div>
  )
}

