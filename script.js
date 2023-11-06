// Global variable
let countPrices = 0



// HTML Element and DOM Conection
const BuyNowBtn = document.getElementById('BuyNow-btn');
const couponBtn = document.getElementById('coupon-Btn');
const couponInputFailed = document.getElementById('coupon-input-failed');






// DOM handel function

// create a handel Click Event function
function handelClickEvent(data){

    // Selected items method
    const selectedItemsContainer = document.getElementById('items-list');
    const itemName = data.childNodes[3].childNodes[3].innerText;
    const itemCount = selectedItemsContainer.childElementCount +1;

    // set total items and show display
    let totalItems = document.getElementById('total-items')
    totalItems.innerText = itemCount

    // set itmes name and show display
    const li = document.createElement('li');
    li.innerText = itemName;
    li.style.cursor = 'pointer';
    li.setAttribute('id', 'rony')
    selectedItemsContainer.appendChild(li);

    // remove li ites for selectedItemsContainer
    console.log(totalItems.innerText);
    selectedItemsContainer.addEventListener('click', (event)=>{
         if(event.target.matches('li')){
            event.target.remove();
        }
    });



    // septup a  product prices
    const itemsPrice = data.childNodes[3].childNodes[5].innerText.split(' ')[0];
    countPrices += parseFloat(itemsPrice);
    let countPricesToFixed = countPrices.toFixed(2)
    getItemsPrices('Total-Prices', countPricesToFixed);



    // Activity check  bbutton
    if(countPrices > 0){
        BuyNowBtn.disabled = false
    }
    if(countPrices >= 200){
        couponBtn.disabled = false
    }


    // use coupon code validetion and calculation discount prices
    couponBtn.addEventListener('click', function(){
        if(couponInputFailed.value === 'SELL200'){
            const discountItems = (countPrices * 20) / 100;
            const TotaldisabledPrices = countPrices - discountItems;
            getItemsPrices('items-Total-Prices', TotaldisabledPrices);
            // Save money calculation
            const SaveMoney = countPrices - TotaldisabledPrices;
               let SaveMoneyToFixed = SaveMoney.toFixed(2)
            getItemsPrices('Discount-price', SaveMoneyToFixed);
        }
        couponInputFailed.value ='';
    })
};



// create a  Copy coupon event function

function CopyPromoCode(data){
    window.navigator.clipboard.writeText(data.innerText)
}


// create window reload function
function handleReload(){
    window.location.reload()
}


// create a get items prices add function
function getItemsPrices(nameId, Itemprices){
    const setPrices = document.getElementById(nameId);
    setPrices.innerText = Itemprices
};


// create a get id name and show simple name
function getIdName(idName){
    const Element = document.getElementById(idName);
    return Element
}