function addItem(itemsQuantity) {
    let item = document.querySelector('.item');
    let itemsWrapper = document.querySelector('.items-wrapper')
    
    for(let i = 1; i < itemsQuantity; i++) {
        let nextItem = item.cloneNode(true);
        itemsWrapper.append(nextItem)
    }
}
addItem(6)

function addMoreItems() {
    let item = document.querySelector('.item');
    let itemsWrapper = document.querySelector('.items-wrapper')
    
    for(let i = 0; i < 3; i++) {
        let nextItem = item.cloneNode(true);
        itemsWrapper.append(nextItem)
    }
}

document.querySelector('.see-more-items')
        .addEventListener('click', addMoreItems)



document.querySelector('.see-more-additions')
        .addEventListener('click', showHiddenAdditions)

function showHiddenAdditions() {
    document.querySelector('.hidden-additions')
            .style.display = 'block';
    document.querySelector('.see-more-additions')
            .style.display = 'none';
}



let filterBlocks = document.querySelectorAll('.filter__block'), filterBlock;
for (filterBlock of filterBlocks) {
    let filteritemHeader = filterBlock.querySelector('.filter__item-header'),
        filterBody =       filterBlock.querySelector('.filter__body'),
        showHideButton =   filterBlock.querySelector('.show-hide-button');
    
    filteritemHeader.addEventListener('click', () => {
        filterBody.style.display = 
        filterBody.style.display === 'none' ? '' : 'none';

        showHideButton.style.transform =
        showHideButton.style.transform === 'rotate(180deg)' ?
        '' : 'rotate(180deg)';
        }
    )
}      


let buttonSubwayAll = document.querySelector('.input_subway-all'),
    subwayDistanceButtons = document.querySelectorAll('.input_subway-distance'),
    sdb;

for (sdb of subwayDistanceButtons) {
    sdb.addEventListener('click', () => {
        buttonSubwayAll.checked = false
    })
}

buttonSubwayAll.addEventListener('click', () => {
    for (sdb of subwayDistanceButtons) {
        if(sdb.checked == true) sdb.checked = false;
        sdb.addEventListener('click', () => {
            buttonSubwayAll.checked = false
         })
    }
})