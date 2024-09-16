let bagItems ;
onLoad();
function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}


function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon() {
    let bagItemElementCount = document.querySelector(".bag-item-count");
    if(bagItems.length > 0) {
        bagItemElementCount.style.visibility = 'visible';
        bagItemElementCount.innerText = bagItems.length;
    } else{
        bagItemElementCount.style.visibility = 'hidden';
    }
    
}

function displayItemsOnHomePage(){
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement ){
        return;
    }
innerHTML = '';
items.forEach(item => {
    innerHTML += `
    <div class="item-container">
        <img class="item-image" src="${item.image}" alt="item image">
        <div class=" rating">
             ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
         <div class="price">
             <span class="current-price"> ${item.current_price}</span>
            <span class="original-price"> ${item.original_price}</span>
            <span class="discount">${item.discount_percentage}% OFF</span>
            </div>
        <button class="btn-add-bag" onclick = "addToBag(${item.id})">Add to bag</button>
        </div>`
})
itemsContainerElement.innerHTML = innerHTML;
}
