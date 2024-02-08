export const createCategoryAdaptedFromFirestore = (doc) => {
  const fields = doc.data()
  
  return {
      id: doc.id,
      name: fields.name
  }
}