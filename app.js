function updateCase(product,price, isIncreasing) {

    const productInput = document.getElementById(product+"-number");
    let productNumber = productInput.value;

    if(isIncreasing ==true){
    productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber>0){
        productNumber = parseInt(productNumber)-1;
    }
    productInput.value = productNumber;

    

    const productTotal = document.getElementById(product+"-total");

    productTotal.innerText = productNumber*price;
    //calculate 
    calculateTotal();  
}


//function calculate total

function getInputValue(product) {
    const productInput = document.getElementById(product+"-number");
    const productNumber =parseInt( productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone')*1230;
    const caseTotal = getInputValue('case')*60;
    const subTotal = phoneTotal + caseTotal;
    //update on the html
    const subTotalAmount = document.getElementById("sub-total");
    subTotalAmount.innerText = subTotal;

    const tax = subTotal / 10;

    const taxAmount = document.getElementById("tax-total");
    taxAmount.innerText = tax;
 
 //total
 
    const total = subTotal + tax;
    const totalAmount = document.getElementById("total-amount");
    totalAmount.innerText = total;

    
}


//for phone

document.getElementById("phone-up").addEventListener('click',function(){

    updateCase('phone',1230,true);
    

});



document.getElementById("phone-down").addEventListener('click',function(){

  updateCase('phone',1230,false);

});

//for case
document.getElementById("case-up").addEventListener('click',function(){

    updateCase('case',60,true);
})

document.getElementById("case-down").addEventListener('click',function(){

    updateCase('case',60,false);
})




/////hudaiii/////

document.getElementById("hudai").addEventListener('click',function(){
    window.location.href='hudai.html'

})