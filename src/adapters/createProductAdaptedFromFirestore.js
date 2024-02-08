export const createProductAdaptedFromFirestore = doc => {
    const fields = doc.data()
    return {
        id: doc.id,
        name: fields.name,
        categoryId: fields.categoryId,
        price: fields.price,
        img: fields.img,
        description: fields.description,
        stock: fields.stock
    }
}