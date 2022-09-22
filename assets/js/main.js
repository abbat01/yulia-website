const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
  
    // If we need pagination
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
  });

  const select = document.querySelector('select');
  const allLang = ['ua', 'ru']

  select.addEventListener('change', changeURLLang);

  function changeURLLang() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
  }

  function changeLang() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash)
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ua';
        location.reload();
    }
    select.value = hash

    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key)
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
  }

  changeLang()


  /* --- preloader --- */

    let loader = document.querySelector('.loader');
  window.addEventListener('load', () => {
    loader.classList.add('hide')
  });