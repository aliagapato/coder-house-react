const formatCurrency = (value = 0, currency = 'CLP') => {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: currency }).format(value)
}

export default formatCurrency