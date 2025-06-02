import { useState } from 'react'
import { restaurantsData } from '../data'

export default function NewRestaurant() {
  const [formData, setFormData] = useState({
    name: '', description: '', address: '', image: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newRestaurant = {
      ...formData,
      id: Date.now()
    }
    restaurantsData.push(newRestaurant)
    alert('Restaurante agregado exitosamente')
    setFormData({ name: '', description: '', address: '', image: '' })
  }

  return (
    <div>
      <h2 className="mb-4">Agregar Nuevo Restaurante</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
        <textarea className="form-control mb-3" name="description" placeholder="Descripción" value={formData.description} onChange={handleChange} required />
        <input className="form-control mb-3" name="address" placeholder="Dirección" value={formData.address} onChange={handleChange} required />
        <input className="form-control mb-3" name="image" placeholder="URL de la imagen" value={formData.image} onChange={handleChange} required />
        <button className="btn btn-success" type="submit">Guardar Restaurante</button>
      </form>
    </div>
  )
}

