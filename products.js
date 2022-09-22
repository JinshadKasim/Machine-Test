j=0
  
  function getProducts(){

var k=0;
  let productL = JSON.parse(localStorage.getItem("productsInfo"));

  // productL.push({
  //   name:getElementById("product_name").value,
  //   description:getElementById("product_description").value,
  //   category:getElementById("category").value,
  //   sub_category:getElementById("sub_category").value,
  //   weight:getElementById("weight").value,
  //   unit:getElementById("unit").value,
  //   quantity:getElementById("quantity").value,
  //   amount:getElementById("amount").value,
  // })

  var table = document.getElementById("product_table");

  for(let j=0;j<productL.length;j++){
    

    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    cell1.innerHTML = k++;
    cell2.innerHTML =  productL[j].name;
    cell3.innerHTML =  productL[j].description;
    cell4.innerHTML =  productL[j].category;
    cell5.innerHTML =  productL[j].sub_category;
    cell6.innerHTML =  productL[j].weight;
    cell7.innerHTML =  productL[j].quantity;
    cell8.innerHTML =  productL[j].amount;
    cell9.innerHTML = "<button type='button' id="+j+" onclick=addToCart("+ j +") >Add</button>";
   

  }
}


let totalAmount = 0;

 function addToCart(id){
  console.log(id)


        const productL = JSON.parse(localStorage.getItem("productsInfo"));

        const productObj = productL[id];

        totalAmount += parseInt(productObj.amount);
        // totalAmount = totalAmount + productObj.amount;
        if (localStorage.getItem("cart") === null) {

          cart = []
      
      
          let product1={
            name: productObj.name,
            description: productObj.description,
            unit: productObj.unit,
            quantity: productObj.quantity,
            amount: productObj.amount,
          }
      
          cart.push(product1)
          console.log(cart)
      
          localStorage.setItem('cart', JSON.stringify(cart));
          console.log("first")
      
          showCart(id)
      }
      
      
      
      else{
      
        let cart = JSON.parse(localStorage.getItem("cart"));
      
       
          let product1={
              name: productObj.name,
              description: productObj.description,
              unit: productObj.unit,
              quantity: productObj.quantity,
              amount: productObj.amount,
          }
      
          // product1_deserialized.append("product1")
          cart.push(product1)
          console.log(cart)
      
          localStorage.setItem('cart', JSON.stringify(cart));
          console.log("second")
      
          showCart(id)
      }

    
          
      
  }



        function deleteRow(rowid)  
{   
  
  const productL = JSON.parse(localStorage.getItem("productsInfo"));
     console.log(productL)
     console.log(rowid)
     
  const productObj = productL[rowid];
    var row = document.getElementById('cart'+rowid);
    row.parentNode.removeChild(row);
    console.log(productObj.amount)
    totalAmount -= parseInt(productObj.amount);
    
    document.getElementById('totalAmount').innerHTML = totalAmount;
}


function showCart(id){
     
         
     cart_table=JSON.parse(localStorage.getItem("cart"))

      cart_t=document.getElementById("cart_table")
      console.log("button")
     while(id>=0){
          var row = cart_t.insertRow(-1);
            

            row.id = 'cart' + id
            var cell1 = row.insertCell();
            var cell2 = row.insertCell();
            var cell3 = row.insertCell();
            var cell4 = row.insertCell();
            var cell5 = row.insertCell();
            var cell6 = row.insertCell();
            cell1.innerHTML = id;
            cell2.innerHTML =  cart_table[j].name;
            cell3.innerHTML =  cart_table[j].description;
            cell4.innerHTML =  "<input type='number' style='width:60px;' id='quantity' value='1'>";
            cell5.innerHTML =  cart_table[j].amount
            cell6.innerHTML =  "<button type='button' id="+ ('deleteBtn'+id) +" onclick=deleteRow("+id+")>delete</button>";
            j++
            document.getElementById('totalAmount').innerHTML = totalAmount;
            break
     }
        
            


}


function checkOut(){
  localStorage.removeItem("cart")
  location.reload()
}