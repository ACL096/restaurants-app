import { collection, addDoc } from "firebase/firestore"
import db from "../firebase"

const collectionRef = collection(db, "restaurants")

export const addNewRestaurant = async (restaurant) => {
  await addDoc(collectionRef, restaurant)
}
