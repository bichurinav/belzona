// Swiper.js
const projectsSlider = new Swiper ('.slider-work', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 2000,
  speed: 800,
  grabCursor: true,
  navigation: {
    nextEl: '.slider-work__arrows-next',
    prevEl: '.slider-work__arrows-prev',
  },
});

let slider = new Swiper('.slider__container', {
  speed: 1200,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.slider__arrow_next',
    prevEl: '.slider__arrow_prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// popup
const popup = document.querySelector('.popup-callback');
const callbackBtn = document.querySelector('.header__button');
const btnClose = document.querySelector('.popup-callback__close');
const popupForm = document.querySelector('.popup-callback__form');
const popupInner = document.querySelector('.popup-callback__inner');
const btnSend = document.querySelector('.popup-callback__btn');
const fieldName = document.getElementById('fieldName');
const fieldPhone = document.getElementById('fieldPhone');
const fields = document.querySelectorAll('.popup-callback__field');
const slidesBtn = document.querySelectorAll('#slideCallback');

for (let i = 0; i < slidesBtn.length; i++) {
  slidesBtn[i].addEventListener('click', showForm);
}

popupForm.addEventListener('submit', checkForm);
callbackBtn.addEventListener('click', showForm);
btnClose.addEventListener('click', hideForm);


// mask phone
var phoneMask = IMask(
  fieldPhone, {
    mask: '+{7} (000) 000-00-00'
  });

// mobile-menu
const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.nav-mobile')
let click = true;
menuBtn.addEventListener('click', function() {
  if (click) {
    // show menu
    menuMobile.className = 'nav-mobile  nav-mobile_show';
    click = false;
  } else {
    // hide menu
    menuMobile.className = 'nav-mobile nav-mobile_hide';
    click = true;
  }
})

"use strict";
// products
var wrapperProducts = document.querySelectorAll('.products__items-wrapper');
var btnsProducts = document.querySelectorAll('.products__link');

if(!/(MSIE|Triden)/.test(navigator.userAgent)) {
  wrapperProducts[0].style.display = "grid";
  btnsProducts.forEach(function (btn, index, arrayBtn) {
    btn.setAttribute('index', index);
    if (index === 0) {
      btn.classList.add('products__link_active');
    }
    btn.addEventListener('click', function (e) {
      for (var i = 0; i < arrayBtn.length; i++) {
        arrayBtn[i].classList.remove('products__link_active');
      }
      wrapperProducts.forEach(function (wrapper, i) {
        if (i == btn.getAttribute('index')) {
          btn.classList.add('products__link_active');
          wrapper.classList.remove('products__items-wrapper_leave');
          setTimeout(function () {
            wrapper.style.display = "grid";
            wrapper.classList.add('products__items-wrapper_show');
          }, 300);
        } else {
          wrapper.classList.add('products__items-wrapper_leave');
          setTimeout(function () {
            wrapper.style.display = "none";
          }, 300);
        }
      });
    });
  });
} else {
  wrapperProducts[0].style.display = "flex";
  for (var i = 0; i < btnsProducts.length; i++) {
    btnsProducts[i].setAttribute('index', i);
    if (i === 0) {
      btnsProducts[i].className += ' products__link_active';
    }
    btnsProducts[i].addEventListener('click', function (e) {
      for (var link = 0; link < btnsProducts.length; link++) {
        btnsProducts[link].className = 'products__link';
      }
      for (var wrapper = 0; wrapper < wrapperProducts.length; wrapper++) {
        if (wrapper == this.getAttribute('index')) {
          btnsProducts[wrapper].className += ' products__link_active';
          wrapperProducts[wrapper].style.display = "flex";
        } else {
          wrapperProducts[wrapper].style.display = "none";
        }
      }
    });
  }
}


function checkForm(e) {
  e.preventDefault();
  let sendCount = null;

  function error(field, fieldTitle) {
    if (field.value != '') {
      switch(fieldTitle) {
        case 'имя':
          if (/['\d']/.test(field.value)) {
            field.nextElementSibling.className += ' popup-callback__error_show';
            field.nextElementSibling.textContent = 'Введите корректное ' + fieldTitle;
          } else {
            if (field.value.length < 2) {
              field.nextElementSibling.className += ' popup-callback__error_show';
              field.nextElementSibling.textContent = 'Введите корректное ' + fieldTitle;
            } else {
              field.nextElementSibling.className = 'popup-callback__error';
              field.nextElementSibling.textContent = '-';
              ++sendCount;
            }
          }
        break;
        case 'телефон':
            if (field.value.length < 18)  {
            field.nextElementSibling.className += ' popup-callback__error_show';
            field.nextElementSibling.textContent = 'Введите корректный ' + fieldTitle;
            } else {
              field.nextElementSibling.className = 'popup-callback__error';
              field.nextElementSibling.textContent = '-';
              ++sendCount;
            }
        break;
      }

    } else {
      field.nextElementSibling.className = 'popup-callback__error popup-callback__error_show';
      field.nextElementSibling.textContent = 'Заполните поле';
    }
  }

  error(fieldName, 'имя');
  error(fieldPhone, 'телефон');
  
  if (sendCount === 2) {
    console.log(true);
    fieldPhone.value = '';
    fieldName.value = '';
  }
}
function showForm() {
  popupInner.className += ' popup-callback__inner_show'
  popup.style.display = "block";
  popupForm.style.display = "flex";
}
function hideForm() {
  for (let i = 0; i < fields.length; i++) {
    fields[i].nextElementSibling.className = 'popup-callback__error';
  }
  popupForm.className = "popup-callback__form popup-callback__form_hide";
  setTimeout(function() {
    popupForm.style.display = "none";
    popupForm.className = "popup-callback__form";
    hidePopup();
  }, 300)
}
function hidePopup() {
  popupInner.className = "popup-callback__inner popup-callback__inner_hide"
  setTimeout(function() {
    popup.style.display = "none";
    popupInner.className = "popup-callback__inner"
  }, 300)
}

