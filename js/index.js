"use strict";

var item = document.querySelector('.item'),
    itemsWrapper = document.querySelector('.items-wrapper');

function addItem(itemsQuantity) {
  for (var i = 1; i < itemsQuantity; i++) {
    var nextItem = item.cloneNode(true);
    itemsWrapper.appendChild(nextItem);
  }
}

addItem(6);
document.querySelector('.see-more-items').addEventListener('click', function () {
  for (var i = 0; i < 3; i++) {
    var nextItem = item.cloneNode(true);
    itemsWrapper.appendChild(nextItem);
  }
});
document.querySelector('.see-more-additions').addEventListener('click', function () {
  document.querySelector('.hidden-additions').style.display = 'block';
  document.querySelector('.see-more-additions').style.display = 'none';
});
var filterBlocks = document.querySelectorAll('.filter__block');

var _loop = function _loop(i) {
  var filteritemHeader = filterBlocks[i].querySelector('.filter__item-header'),
      filterBody = filterBlocks[i].querySelector('.filter__body'),
      showHideButton = filterBlocks[i].querySelector('.show-hide-button');
  filteritemHeader.addEventListener('click', function () {
    if (filterBody.style.display === 'none') {
      filterBody.style.display = '';
    } else {
      filterBody.style.display = 'none';
    }

    if (showHideButton.style.transform === 'rotate(180deg)') {
      showHideButton.style.transform = '';
    } else {
      showHideButton.style.transform = 'rotate(180deg)';
    }
  });
};

for (var i = 0; i < filterBlocks.length; i++) {
  _loop(i);
}

var buttonSubwayAll = document.querySelector('.input_subway-all'),
    subwayDistanceButtons = document.querySelectorAll('.input_subway-distance');

for (var _i = 0; _i < subwayDistanceButtons.length; _i++) {
  subwayDistanceButtons[_i].addEventListener('click', function () {
    buttonSubwayAll.checked = false;
  });
}

buttonSubwayAll.addEventListener('click', function () {
  for (var _i2 = 0; _i2 < subwayDistanceButtons.length; _i2++) {
    if (subwayDistanceButtons[_i2].checked == true) {
      subwayDistanceButtons[_i2].checked = false;
    }

    ;

    subwayDistanceButtons[_i2].addEventListener('click', function () {
      buttonSubwayAll.checked = false;
    });
  }
});