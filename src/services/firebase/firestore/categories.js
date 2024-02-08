import { getDocs, collection, query, orderBy } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { createCategoryAdaptedFromFirestore } from "../../../adapters/createCategoryAdaptedFromFirestore"

const getCategories = async () => {
  return getDocs(query(collection(db, "categories"), orderBy("name")))
    .then(querySnapshot => querySnapshot.docs.map(doc => createCategoryAdaptedFromFirestore(doc)))
    .catch(error => error)
}

export { getCategories }
