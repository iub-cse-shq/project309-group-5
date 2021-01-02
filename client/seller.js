//return to home page
$('.seller-home-btn').click(function(){
    $('.header-area').show()
    $('.home-page-area').show();
    $('.order-page-area').hide();
})


// order product button
$('.order-btn').click(function(){
    $('.order-page-area').show();
    $('.home-page-area').hide();
}) 


// Add product button
$('.add-product-btn').click(function(){
    $('.add-product-header').show();
    $('.add-product-area').show();
    $('.header-area').hide();
    $('.home-page-area').hide();
    $('.order-page-area').hide();
    //console.log('clicked');
})

//click submit button of add new product to home page
let product = []
if(window.localStorage.getItem('product')){
    product = JSON.parse(window.localStorage.getItem('product'))
}
// first save to localStorage

$('.submit-btn').click(function(){
    let name = $('.add-name').val()
    let image = $('.add-img').val()
    let quantity = $('.add-quantity').val()
    let category = $('.add-category').val()
    let price = $('.add-price').val()
    if(name && image && quantity && category && price){
        let item =
        `
            <div class='product-element'>
                <img class='product-img' src='${image}' />
                <div class='price-edit'>
                    <div class='price'>
                        <p class='amount'>${'$' + price}</p>
                    </div>
                    <div class='edit'>
                        <button class='edit-button'>EDIT</button>
                    </div>
                </div>
            </div>
        `
        $('.product-list').append(item);

        let newProduct = {
            productName: name,
            productImage: image,
            productQuantity: quantity,
            productCategory: category,
            productPrice: price
        }
        product.push(newProduct);
        window.localStorage.setItem('product',JSON.stringify(product))
        $('.add-product-header').hide();
        $('.add-product-area').hide();
        $('.header-area').show();
        $('.home-page-area').show();

    }
    else{
        alert('Fields can not be empty')
    }
})
// show in home page from localStorage
if(product.length != 0){
    let p = JSON.parse(window.localStorage.getItem('product'))
    for(var i=0;i<p.length;i++){
        let items =
        `
            <div class='product-element'>
                <img class='product-img' src='${p[i].productImage}' />
                <div class='price-edit'>
                    <div class='price'>
                        <p class='amount'>${'$' + p[i].productPrice}</p>
                    </div>
                    <div class='edit'>
                        <button class='edit-button'>EDIT</button>
                    </div>
                </div>
            </div>
        `
        $('.product-list').append(items);
    }
}
else{
    alert('There has no product')
}



// cancel button of add product area
$('.cancel-btn').click(function(){
    $('.header-area').show();
    $('.home-page-area').show();
    $('.add-product-header').hide();
    $('.add-product-area').hide();
})


// return to home page
$('.seller-home-btn').click(function(){
    //console.log('clicked');
})

