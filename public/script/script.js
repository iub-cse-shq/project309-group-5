
// Add to cart
const addToCartBtn = document.getElementsByClassName('addToCart');
let items = [];
for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener("click", function (e) {

    console.log(e.target.parentElement.children[0].textContent,)
    console.log(e.target.parentElement.children[1].textContent,)

    if (typeof (Storage) !== 'undefined') {
      console.log(e.target.parentElement);
      let item = {
        id: i + 1,
        name: e.target.parentElement.children[0].textContent,
        price: e.target.parentElement.children[1].children[0].textContent,
        counter: 1
      };
      if (JSON.parse(localStorage.getItem('items')) === null) {
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
        window.location.reload();
      } else {
        const localItems = JSON.parse(localStorage.getItem("items"));
        localItems.map(data => {
          if (item.id == data.id) {
            item.counter = data.counter + 1;
          } else {
            items.push(data);
          }
        });
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
        window.location.reload();
      }
    } else {
      alert('Storage is not found');
    }
  });
}



// adding data to shopping cart 
const iconShoppingP = document.querySelector('.iconShopping p');
let counter = 0;
JSON.parse(localStorage.getItem('items')).map(data => {
  counter = counter + data.counter
    ;
});
iconShoppingP.innerHTML = counter;




















// Show selected product 

// const productBox = document.querySelector('.productBox');
// const productView = document.getElementsByClassName("productView");

// const cartCloseBtn = document.querySelector('.fa-close');
// for (let i = 0; i < products.length; i++) {
//   productView[i].addEventListener("click", function (e) {

//     console.log(products[i].productName)

//     // productBox.classList.add('active');
//     let pp = `
//     <div class="productBox active">

//     <div class="row">
//       <div class="col-md-6" style="height: 440px;">
//         <img src="${products[i].productImage}" class="product-img" alt="...">
//       </div>
//       <div class="col-md-6" style="height: 440px; background-color: rgb(25, 36, 46);">
//       <div class="col">
//         <h1 style="color: rgb(255, 62, 62);">${products[i].productName} </h1>
//         <p> ${products[i].productDiscription}</p>
//           <h5> Price:  </h5>
//           <h1 style="color: rgb(0, 150, 0);">$${products[i].productPrice}</h1>
//           <div class="row">
//             <div class="col-6">
//               <a class="btn btn-primary" href="index.html" role="button"><i class=" fas fa-shopping-cart"></i>
//                 Add to Cart</a>

//             </div>
//             <div class="col-6">
//               <a class="btn btn-danger" href="index.html" role="button"><i class=" fa fa-close"></i>
//                 Calcel</a>

//             </div>

//           </div>
//       </div>

//       </div>
//     </div>

// </div>

//     `
//     $("#ff").append(pp);
//   });

// }