const evaluatePercentMessage = (stock = 0, quantity = 0) => {
  if (stock === 0) return 'x.x'
  let percent = Math.floor(((quantity * 100) / stock))
  if (quantity === 0) return 'En serio? 😭'
  if (percent <= 35) return 'Solo eso? 🫠'
  if (percent <= 70) return 'Alcanzara? 🫤'
  return 'Leeeets go! 😎'
}

export default evaluatePercentMessage