import { useEffect } from 'react'
import db from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function FirebaseTest() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'restaurants'))
        querySnapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data())
        })
      } catch (error) {
        console.error('Error al conectar con Firebase:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="container mt-5">
      <h2 className="custom-title">Prueba de Firebase</h2>
      <p>Abre la consola del navegador para ver los datos que llegan desde Firestore.</p>
    </div>
  )
}
