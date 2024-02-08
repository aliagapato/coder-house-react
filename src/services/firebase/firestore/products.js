import { getDocs, collection, query, where, orderBy, doc, getDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { createProductAdaptedFromFirestore } from "../../../adapters/createProductAdaptedFromFirestore"

const getProducts = async (searchValue) => {
  return getDocs(query(collection(db, "products"), orderBy("name")))
    .then(querySnapshot => {
      let products = querySnapshot.docs.map(doc => createProductAdaptedFromFirestore(doc))
      if(searchValue) products = products.filter(p => p.name.toLowerCase().includes(searchValue.toLowerCase()))
      return products
    })
    .catch(error => error)
}

const getProductsByCategory = async (categoryId = false) => {
  if (!categoryId) return { error: true }

  return getDocs(query(collection(db, "products"), where("categoryId", "==", categoryId), orderBy("name")))
    .then(querySnapshot => querySnapshot.docs.map(doc => createProductAdaptedFromFirestore(doc)))
    .catch(error => error)
}

const getProductById = async (productId = false) => {
  if (!productId) return { error: true }
  return getDoc(doc(db, "products", productId))
    .then(doc => {
      if(doc.exists()) return createProductAdaptedFromFirestore(doc)
      return { error: true }
    })
    .catch(error => error)
}

export { getProducts, getProductsByCategory, getProductById }
