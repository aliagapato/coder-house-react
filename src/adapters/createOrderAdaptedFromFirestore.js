export const createOrderAdaptedFromFirestore = doc => {
    const fields = doc.data()
    const data = {
        id: doc.id,
        buyer: fields.buyer,
        cart: fields.cart,
        createdAt: fields.createdAt,
        shipping: fields.shipping,
        total: fields.total
    }
    return data 
}