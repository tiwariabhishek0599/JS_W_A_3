const Products = [
    {id: 1, name: "Shoes", price:100},
    {id: 2, name: "Goggles", price:200},
    {id: 3, name: "Trousers", price:300},
    ];
    
    const productList  = document.getElementById('product-list');
    Products.forEach((Product) =>{
        productList.appendChild(createProductElement(Product));
    });
  
    updateCart();
    
  
    function createProductElement(product){
        const ProDiv = document.createElement('div');
        ProDiv.classList.add('div1');
        ProDiv.innerHTML = `<h3 class="productName">${product.name}</h3>
        <h5 class="productPrice">${product.price}</h5>
        <div class="quantity"  id="${product.name}">
          <button class="remove">-</button>
          <h6 class="quantProduct">0</h6>
          <button class="add">+</button>
        </div>`;
        console.log(ProDiv);
        const addButton = ProDiv.querySelector(".add");
        const removeButton = ProDiv.querySelector(".remove");
        const quantityDisplay = ProDiv.querySelector(".quantProduct");
  
        addButton.addEventListener("click", () => {
            const currentAmount = parseInt(quantityDisplay.textContent,10);
            quantityDisplay.textContent = currentAmount + 1;
            updateCart();
        });
  
        removeButton.addEventListener("click", () => {
            const currentAmount = parseInt(quantityDisplay.textContent,10);
            if(currentAmount > 0){
                quantityDisplay.textContent = currentAmount-1;
                updateCart();
            }
        });
        return ProDiv;
    }
  
    function updateCart(){
        const cart = document.getElementById('cart');
        const totalprice =document.getElementById('total-amount');
        cart.innerHTML = "";
        let totalpriceValue = 0 ;
        Products.forEach((Product) =>{
            const quantity = parseInt(document.querySelector(`.div1 #${Product.name} .quantProduct`)
            .textContent,10);
          if(quantity > 0){
            const cartItem = document.createElement('div');
            cartItem.classList.add("item1");
            cartItem.innerHTML  =`<h5 class="productCartName">${Product.name}</h5>
            <div class="content">
              <h5 class="quantCartProduct">${quantity}</h5>
              <h5>*</h5>
              <h5 class="productCartPrice">${Product.price}</h5>
            </div>`;
            cart.appendChild(cartItem);
            totalpriceValue += quantity * Product.price;
          }
        });
        if(cart.children.length === 0){
            cart.innerHTML = "<p>No Product added to the cart</p>";
            totalprice.textContent = "INR 0";
          } else {
            totalprice.textContent = `INR ${totalpriceValue}`;
        }
    }