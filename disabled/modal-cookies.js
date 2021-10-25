const modal = document.createElement("div");

modal.setAttribute("class", "modal-cookies");
modal.setAttribute("id", "modal-cookies");
document.getElementById('modal-cookies').appendChild(modal);

setTimeout(() => {
  if(modal && typeof window.ga === 'function') {
      window.ga('send','event','search_sa', 'load', 'sud');
  }
}, 1000);

modal.innerHTML = `
<div class="modal-cookies__wrap">
  <div class="modal-cookies__cross" onclick="setCookieFiles('cross')">
    <div class="icon-app-cross"></div>
  </div>
  <div class="modal-cookies__title" id="title">Наш сайт использует файлы cookie</div>
  <div class="modal-cookies__text-view">
    <div class="text-view__text">
      <span>
        В соответствии с решением Арбитражного суда Ульяновской области от 16 декабря 2020 года  ООО «Суточно» публикует резолютивную часть решения по делу А72-9609/2019 по иску ООО «Стратегия Роста»:<br />
        16.12.2020 г. Арбитражный суд Ульяновской области решил:<br />
        Требование истца удовлетворить частично. Обязать ИП Кузнецова Ю.В., ООО «Суточно» в течение пяти дней с момента вступления решения суда в законную силу за свой счет опубликовать резолютивную часть решения суда по настоящему делу без права удаления или изменения на протяжении одного года в верхней части главной страницы сайта под доменным именем sutochno.ru. Публикация должна быть осуществлена в текстовой форме, в текстовом формате (не в графическом) и шрифтом, присущим обычной публикации на сайте sutochno.ru. В остальной части требование истца оставить без удовлетворения.<br />
        27.01.2020 г. Арбитражный суд Ульяновской области решил:<br />
        Исковые требования удовлетворить частично. Запретить Кузнецову Юрию Владимировичу использовать в сети "Интернет", в том числе в доменных именах kvartirka.ru, kvartirka.com.ru, kvartirka.msk.ru, kvartirka.spb.ru обозначения, тождественные и сходные до степени смешения с товарными знаками по свидетельствам №№440741 и 491267. В остальной части требование истца оставить без удовлетворения.
      </span>
    </div>
    <div class="text-view__button" onclick="setCookieFiles('button')">
      <button class="button-complete-cookies">Понятно, больше не показывать</button>
    </div>
  </div>
  <div class="modal-cookies__hint">
    <span>Нажимая на кнопку «Понятно, больше не показывать» или крестик Вы соглашаетесь с тем, что ознакомились с информацией и больше не желаете её видеть. Для этого ваш браузер сохранит на вашем устройстве соответствующий файл cookie. Чтобы снова увидеть данную информацию, удалите cookie, либо откройте сайт в режиме «Инкогнито», либо зайдите на сайт с другого браузера или другого устройства.</span>
  </div>
  <div class="modal-cookies__button" onclick="setCookieFiles('button')">
    <button class="button-complete-cookies">Понятно, больше не показывать</button>
  </div>
  <div class="modal-cookies__simple-block"></div>
</div>
`

const cookieStyles = document.createElement("style");
document.head.appendChild(cookieStyles);

const setCookieFiles = (el) => {
  document.cookie = `cookieFilesConfirmation=true;domain=.${window.location.host};path=/;max-age=${100 * 60 * 60 * 24 * 30 * 12}`
  modal.innerHTML = ''
  modal.style.display = 'none'
  if(typeof window.ga === 'function') {
    if(el === 'button') {
      window.ga('send','event','search_sa', 'click', 'sud');
    } else if(el === 'cross') {
      window.ga('send','event','search_sa', 'click', 'sud_x');
    }
  }
}

cookieStyles.innerHTML = `
  @media (max-width: 767px) {
    .modal-cookies {
      font-size: 12px;
      width: 100%;
      // bottom: 0 !important;
      // transform: translate(0, 10%) !important;
    }
    .modal-cookies__text-view {
      flex-direction: column;
    }
    .button-complete-cookies {
      margin-top: 20px;
      margin-left: 0;
      width: 100%;
      padding: 0;
    }
    .modal-cookies__hint {
      margin-top: 20px;
    }
    .text-view__button {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .modal-cookies {
      left: 50%;
      transform: translateX(-50%);
      // width: 50%;
      font-size: 14px;
    }
    .button-complete-cookies {
      margin-left: 15px;
      width: 322px;
      padding: 20px 34px;
    }
    .modal-cookies__hint {
      margin-top: 5px;
    }
    .modal-cookies__button {
      display: none;
    }
  }
  @media (min-width: 768px) and (max-width: 1359px) {
    .modal-cookies {
      width: 100%;
    }
  }
  @media (min-width: 1350px) {
    .modal-cookies {
      width: 1300px;
    }
  }

  .modal-cookies {
    position: absolute;
    bottom: 20px;
    transform: translate(-50%, 0);
    z-index: 9999;
    padding: 0 10px;
    color: #717171;
    -webkit-animation: fly 0.7s ease-out;
    animation: fly 0.7s ease-out;
  }
  .modal-cookies__wrap {
    padding: 25px;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
    background-color: #f6f6f6;
    border-radius: 7px;
    min-height: 240px;
  }
  .modal-cookies__cross {
    position: absolute;
    top: 0;
    right: 0;
    left: auto;
    display: flex;
    align-items: center;
    padding-left: 0;
    width: 40px;
    height: 50px;
    cursor: pointer;
  }
  .modal-cookies__cross .icon-app-cross {
    font-size: 14px;
    color: #a6a6a6;
  }
  .modal-cookies__title {
    font-size: 22px;
    color: #000;
    font-weight: bold;
  }

  .modal-cookies__simple-block {
    position: absolute;
    bottom: -45px;
    height: 45px;
    width: 100%;
    transform: translate(-50%, 0);
    left: 50%;
  }

  .modal-cookies__text-view {
    display: flex;
    margin-top: 30px;
  }

  .modal-cookies .text-view__text {
    max-height: 72px;
    overflow: auto;
  }

  .modal-cookies .text-view__text::-webkit-scrollbar {
    width: 15px;
    background: transparent;
  }
  .modal-cookies .text-view__text::-webkit-scrollbar-track {
    background: #fff;
    border-left: 1px solid #e7e7e7;
    border-right: 1px solid #e7e7e7;
  }
  .modal-cookies .text-view__text::-webkit-scrollbar-thumb {
    width: 4px;
    background: transparent;
    border-radius: 32px;
    box-shadow: inset 0 0 0 10px #c1c2c1;
    border: 4px solid transparent;
  }

  .button-complete-cookies {
    border-radius: 3px;
    background-color: #f51449;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 16px;
    color: #fff;
  }
  .button-complete-cookies:hover {
    opacity: 0.9;
  }

  @keyframes fly {
    0% {
      transform: translate(-50%, 50%);
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      transform: translate(-50%, -15%);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, 0%);
      opacity: 1;
    }
  }
`