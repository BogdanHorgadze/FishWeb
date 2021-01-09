module.exports = function (email , phone , cart , totalPrice) {
  function render (cart){
    return cart.map((item) => {
      return `<div>Название:${item.name}<span> | Количество:${item.count}</span><span> | Размеры:${item.selectedSize}</span></div>`
    })
  }
  return {
    from: 'umtexcost@gmail.com',
    to: email,
    subject: 'Заказ',
    html:
      `
          <h1>Номер заказчика ${phone}</h1>
          ${render(cart)}
          <h3>Сумма заказа: ${totalPrice}грн</h3>
      `
  }
}