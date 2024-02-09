import { getDocs, collection, query, orderBy, doc, getDoc, writeBatch, where, documentId, addDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { createOrderAdaptedFromFirestore } from "../../../adapters/createOrderAdaptedFromFirestore"

const getOrders = async (searchValue = false) => {
  return await getDocs(query(collection(db, "orders"), orderBy("createdAt")))
    .then(querySnapshot => {
      let orders = querySnapshot.docs.map(doc => createOrderAdaptedFromFirestore(doc))
      if(searchValue) {
        orders = orders.filter(p => p.buyer.email.toLowerCase().includes(searchValue.toLowerCase()))
      } 
      return orders
    })
    .catch(error => error)
}

const getOrderById = async (orderId = false) => {
  if (!orderId) return { error: true }
  return getDoc(doc(db, "orders", orderId))
    .then(doc => {
      if(doc.exists()) return createOrderAdaptedFromFirestore(doc)
      return { error: true }
    })
    .catch(error => error)
}

const setOrder = async (order) => {
  return new Promise((resolve, reject) => {
    const batch = writeBatch(db)
    const outStock = []
    let cartProduct = null
    getDocs(query(collection(db, 'products'), where(documentId(), 'in', order.cart.map(cp => cp.id)))).then(productsDB => {
      productsDB.docs.forEach(DBProduct => {
        cartProduct = order.cart.find(cp => cp.id = DBProduct.id)
        if(cartProduct.quantity > DBProduct.data().stock) {
          outStock.push(DBProduct)
        } else {
          batch.update(DBProduct.ref, { stock: DBProduct.data().stock - cartProduct.quantity})
        }
      })
      if(outStock.length > 0) return reject(outStock)
      batch.commit().then(() => addDoc(collection(db, 'orders'), order).then(data => resolve({orderId: data.id})))
    })
    .catch(error => reject(error))
  });
}

export { getOrders, getOrderById, setOrder}
