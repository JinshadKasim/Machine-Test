i=0

function add_product(){

    product_name=document.getElementById("product_name").value
    product_description=document.getElementById("product_description").value
    category=document.getElementById("category").value
    sub_category=document.getElementById("sub_category").value
    weight=document.getElementById("weight").value
    unit=document.getElementById("unit").value
    quantity=document.getElementById("quantity").value
    amount=document.getElementById("amount").value
    
    if(product_name==""){
      document.getElementById("nameError").style.color="red"
      document.getElementById("nameError").innerHTML="Enter product Name"
      return false
    }
    if(product_description==""){
      document.getElementById("description_error").style.color="red"
      document.getElementById("description_error").innerHTML="Enter Product Description"
      return false
    }
    if(category==""){
      document.getElementById("category_error").style.color="red"
      document.getElementById("category_error").innerHTML="Please Select Category"
      return false
    }
    if(sub_category==""){
      document.getElementById("subcategory_error").style.color="red"
      document.getElementById("subcategory_error").innerHTML="Please Select Sub-Category"
      return false
    }
    if(weight==""){
      document.getElementById("weight_error").style.color="red"
      document.getElementById("weight_error").innerHTML="Enter a Valid Weight"
      return false
    }
    if(unit==""){
      document.getElementById("unit_error").style.color="red"
      document.getElementById("unit_error").innerHTML="Enter Unit"
      return false
    }
    if(quantity==""){
      document.getElementById("quantity_error").style.color="red"
      document.getElementById("quantity_error").innerHTML="Enter Quantity"
      return false
    }
    if(amount==""){
      document.getElementById("amount_error").style.color="red"
      document.getElementById("amount_error").innerHTML="Enter Amount"
      return false
    }
  
    if (localStorage.getItem("productsInfo") === null) {

    products = []


    let product1={
        name: product_name,
        description: product_description,
        category: category,
        sub_category: sub_category,
        weight: weight,
        unit: unit,
        quantity: quantity,
        amount: amount,
    }

    products.push(product1)
    console.log(products)

    localStorage.setItem('productsInfo', JSON.stringify(products));
    console.log("first")

    showData()

}



else{

  let products = JSON.parse(localStorage.getItem("productsInfo"));

 
    let product1={
        name: product_name,
        description: product_description,
        category: category,
        sub_category: sub_category,
        weight: weight,
        unit: unit,
        quantity: quantity,
        amount: amount,
    }

    // product1_deserialized.append("product1")
    products.push(product1)
    console.log(products)

    localStorage.setItem('productsInfo', JSON.stringify(products));
    console.log("second")


    showData()


}


  }

  function myDeleteFunction() {
    document.getElementById("add_table").deleteRow(-1);
    i--

  }




  var productL=new Array()


function showData(){

  let productL = JSON.parse(localStorage.getItem("productsInfo"));
  
  

  var table = document.getElementById("add_table");
  
  while(j<productL.length){
  
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    cell1.innerHTML = i++;
    cell2.innerHTML =  productL[j].name;
    cell3.innerHTML =  productL[j].description;
    cell4.innerHTML =  productL[j].category;
    cell5.innerHTML =  productL[j].sub_category;
    cell6.innerHTML =  productL[j].weight;
    cell7.innerHTML =  productL[j].quantity;
    cell8.innerHTML =  productL[j].amount;
    j++
    
  }
}



var k=0;  
function showProductsAlredyThere(){


    let productL = JSON.parse(localStorage.getItem("productsInfo"));


    var table = document.getElementById("add_table");
  
    for(j=0;j<productL.length;j++){
  
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      cell1.innerHTML = k++;
      cell2.innerHTML =  productL[j].name;
      cell3.innerHTML =  productL[j].description;
      cell4.innerHTML =  productL[j].category;
      cell5.innerHTML =  productL[j].sub_category;
      cell6.innerHTML =  productL[j].weight;
      cell7.innerHTML =  productL[j].quantity;
      cell8.innerHTML =  productL[j].amount;
      
    }
  }
  