
let items = [
]
if (window.localStorage.getItem('items')) {
  items = JSON.parse(window.localStorage.getItem('items'))
}
if (items.length != 0) {
  let item = $('<p style="color:white">').text(" Your cart ")
  $("#cartnotempty").append(item);
}
else {
  let item = $('<p style="color:white">').text("Empty")
  $("#cartempty").append(item);
}
//product Cart list
if (items.length != 0) {
  var total = 0;
  for (let i = 0; i < items.length; i++) {

    var quenti = items[i].counter;
    var pri = items[i].price;
    var multi = quenti * pri;
    var total = total + multi;
    let item =
      `  
      <tr>
      <th scope="row">${items[i].id}</th>
      <td>${items[i].name}</td>
      <td><input type="number" value ="${items[i].counter}" class="cart-quantity-input form-control inputField" id="quantity" placeholder="Quantity">      </td>
      <td>${multi}</td>
      <td><button type="calcel" class="btn btn-danger" onclick=Delete(this);> Delete</button></td>
    </tr>
      `
    $("#cartList").append(item)
  }
  //console.log(total)
  let cartitem =
    `  
  <div class="col-md-2"></div>
    <div class="col-md-4">
      <strong style="font-size: 35px; color: aliceblue;" class="cart-total-title">Total : </strong>
      <span style="font-size: 30px; color:pink;" class="cart-total-price">${"$" + total}</span>
    </div>
    <a class="btn btn-success col-md-2" href="./" role="button">
    Purches</a>
    <a class="btn btn-danger col-md-2" href="./" role="button">
                Calcel</a>
    <div class="col-md-2"></div>
   `
  $("#cart-total").append(cartitem)


}

function Delete(e) {
  let items = [];
  JSON.parse(localStorage.getItem('items')).map(data => {
    if (data.id != e.parentElement.parentElement.children[0].textContent) {
      items.push(data);
    }
  });
  localStorage.setItem('items', JSON.stringify(items));
  window.location.reload();
};