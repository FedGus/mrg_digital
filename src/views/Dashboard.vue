<template>
  <div>
    <div>
      <header>
        <img class="logo" src="@/assets/logo.svg" alt="" />
        <nav>
          <ul>
            <li>
              <a class="nav-link" @click="signOut">Выйти</a>
            </li>
          </ul>
        </nav>
      </header>
      <!-- модальное окно -->
      <transition name="modal">
        <modal v-if="showModal" @close="showModal = false">
          <div slot="header">
            <h2>Вопрос</h2>
            <h4>Тема: {{ unit_name }}</h4>
          </div>
          <p slot="body">{{ question }}</p>

          <div slot="footer">
            <div class="wrapper">
              <div class="timer">{{ timer }}</div>
              <div class="pie spinner"></div>
              <div class="pie filler"></div>
              <div class="mask"></div>
            </div>
          </div>
        </modal>
      </transition>
      <!-- секция с кругом -->
      <div class="home">
        <div class="first_orbit first_orbit_mobile">
          <!-- первая орбита -->
          <div class="product item-1">
            <span>Еда</span>
            <img
              class="non-block product-logo"
              src="@/assets/delivery.svg"
              @click="showModal = true"
            /><img
              class="non-block product-logo"
              src="@/assets/samokat.svg"
              @click="showModal = true"
            /><img
              src="@/assets/kuhnia.svg"
              @click="showModal = true"
              class="product-logo non-block"
            />
          </div>
          <div class="product item-2">
            <span>Мобилити</span>
            <img
              src="@/assets/city_mobil.png"
              @click="showModal = true"
              class="product-logo non-block"
            />
            <img
              src="@/assets/youdrive.svg"
              @click="showModal = true"
              class="product-logo non-block"
            />
          </div>
          <div class="product item-3">
            <span>Классифайды</span>
            <img
              src="@/assets/youla.svg"
              @click="showModal = true"
              class="product-logo non-block"
            /><img
              src="@/assets/vkrabota.svg"
              @click="showModal = true"
              class="product-logo non-block"
            />
          </div>
          <div class="product item-4">
            <span>Киберспорт</span>
            <img
              src="@/assets/esforce.svg"
              @click="showModal = true"
              class="product-logo"
            />
          </div>
          <div class="product item-5">
            <span>В2В</span>
            <img
              src="@/assets/biz.svg"
              @click="showModal = true"
              class="product-logo non-block"
            />
            <img
              src="@/assets/mdt.svg"
              @click="showModal = true"
              class="product-logo non-block"
            />
          </div>
          <div class="product item-6">
            <span>Образование</span>
            <div>
              <img
                src="@/assets/geekbrains.png"
                @click="showModal = true"
                class="product-logo non-block"
              /><img
                src="@/assets/Skillbox.png"
                @click="showModal = true"
                class="product-logo non-block"
              /><img
                src="@/assets/skillfactory.png"
                @click="showModal = true"
                class="product-logo non-block"
              />
            </div>
          </div>
          <div class="product item-7">
            <span>E-commerce</span>
            <img
              src="@/assets/aliexpress.svg"
              @click="showModal = true"
              class="product-logo"
            />
          </div>
          <div class="product item-8">
            <span>Информация</span>
            <img
              src="@/assets/mediaproektyi.png"
              @click="showModal = true"
              class="product-logo non-block"
            /><img
              src="@/assets/poisk.png"
              @click="showModal = true"
              class="product-logo non-block"
            />
          </div>
          <div class="product item-9">
            <span>Мессенджеры</span>
            <img
              class="non-block product-logo"
              src="@/assets/agent.svg"
              @click="showModal = true"
            />
            <img
              class="non-block product-logo"
              src="@/assets/ICQNew.svg"
              @click="showModal = true"
            /><img
              src="@/assets/tamtam.svg"
              @click="showModal = true"
              class="product-logo non-block"
            />
          </div>
          <div class="product item-10">
            <span>Музыка</span>
            <img
              src="@/assets/boom.svg"
              @click="showModal = true"
              class="product-logo non-block"
            />
          </div>
          <div class="product item-11">
            <span>Adtech</span>
            <img
              src="@/assets/my.svg"
              @click="showModal = true"
              class="product-logo non-block"
            />
            <img
              src="@/assets/mytracker.svg"
              @click="showModal = true"
              class="product-logo non-block"
            />
          </div>
          <div class="product item-12">
            <span>Data</span>
            <img
              src="@/assets/tarantool.svg"
              @click="showModal = true"
              class="product-logo"
            />
          </div>
          <div class="product item-13">
            <span>AL&ML</span>
            <img
              class="product-logo non-block"
              src="@/assets/marusya.svg"
              @click="showModal = true"
            />
            <img
              class="product-logo non-block"
              src="@/assets/vision.svg"
              @click="showModal = true"
            />
            <img
              src="@/assets/predict.svg"
              @click="showModal = true"
              class="product-logo"
            />
          </div>
          <div class="product item-14">
            <span>Fintech</span>
            <img
              src="@/assets/vkpay.svg"
              @click="showModal = true"
              class="product-logo"
            />
          </div>
          <div class="product item-15">
            <span>Cloud</span>
            <img
              src="@/assets/MCS.svg"
              @click="showModal = true"
              class="product-logo non-block"
            /><img
              src="@/assets/cloud.png"
              @click="showModal = true"
              class="product-logo non-block"
            />
          </div>
          <div class="product item-16">
            <span>Коммуникации</span>
            <img
              src="@/assets/ok.svg"
              @click="showModal = true"
              class="product-logo non-block"
            />
            <img
              src="@/assets/mail.png"
              @click="showModal = true"
              class="product-logo non-block"
            />
            <img
              src="@/assets/vk.svg"
              @click="showModal = true"
              class="product-logo non-block"
            />
          </div>
          <div class="product item-17">
            <span>Игры</span>
            <img
              src="@/assets/mygames.png"
              @click="showModal = true"
              class="product-logo"
            />
          </div>
          <!-- секторы -->
          <div class="sector static-sector"></div>
          <!-- кнопка старта --><button
            class="btn circle_btn"
            :class="{ spin: state }"
            @click="start()"
          >
            Крутить!
          </button>
        </div>
      </div>
      <footer>
        <nav>
          <ul>
            <li>
              <a href="https://ambassador.mail.ru/" class="nav-link"
                >АМБАССАДОРЫ MRG</a
              >
            </li>
            <li>
              <a href="https://vk.com/digitalringmrg" class="nav-link"
                >ВКОНТАКТЕ</a
              >
            </li>
          </ul>
        </nav>
        <img class="logo" src="@/assets/logo.svg" alt="" />
      </footer>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import modal from "@/views/Modal.vue";
import axios from "axios";
export default {
  name: "Dashboard",
  components: {
    modal,
  },
  data() {
    return {
      state: false,
      showModal: false,
      timer: 60,
      units: [],
      unit_name: "",
      question: "",
      stopDegree: 0,
    };
  },
  mounted() {
    axios
      .get("api/units/")
      .then((response) => {
        console.log(response.data);
        this.units = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.$router.replace({ name: "Dashboard" });
        } else {
          // No user is signed in.
          console.log("signed out", this.loggedIn);
          this.signOut();
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "Login" });
        });
    },
    rotation() {
      //быстрое вращение круга в режиме игры
      let stopDegree = this.stopDegree;
      let extraDegree = Math.ceil(Math.random() * (3600 - 3240)) + 3240; //рандомный выбор угла остановки
      for (let j = 1; j <= 17; j++) {
        let startDegree = (360 / 17) * j + this.stopDegree; //старт вращения с текущей точки
        stopDegree = extraDegree + startDegree;
        document
          .querySelector(".item-" + j)
          .animate(
            [
              { transform: "rotate(" + startDegree + "deg) translateX(275px)" },
              { transform: "rotate(" + stopDegree + "deg) translateX(275px)" },
            ],
            {
              duration: 10000, //вращение - 10 секунд
              easing: "ease-in-out",
              iterations: 1,
            }
          ); //применение анимации вращения к каждому блоку продуктов
      }
      this.stopDegree = stopDegree; //присвоение угла остановки вращения для следующего запуска
    },
    stop() {
      this.state = false;
      for (let i = 1; i <= 17; i++) {
        let el = document.querySelector(".item-" + i);
        el.style.transform =
          "rotate(" +
          ((360 / 17) * i + this.stopDegree) +
          "deg) translateX(275px)"; //останавливаем блоки с продуктами в положении последнего кадра анимации
        document.querySelector(".static-sector").style.animation =
          "pick .3s infinite ease-in-out"; //сектором выбора выделяем выпавший сектор
        let position = this.getRotationDegrees(el);
        if (
          (position > 345 && position <= 360) ||
          (position >= 0 && position < 5)
        ) {
          //если угол сектора попал в сектор выбора
          let ind = el.classList[1].slice(5, 7); // получаем id сектора
          this.unit_name = this.units[ind - 1].name; //
          axios
            .get("api/question/" + ind) //получаем список вопросов этого продукта
            .then((response) => {
              console.log(response.data); //TODO
              this.questions = response.data;
              let index = Math.ceil(
                Math.random() * (this.questions.length - 1 - 0)
              ); //выбор рандомного вопроса из списка
              if (response.data) this.question = this.questions[index].question;
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
      setTimeout(() => {
        this.showModal = true; //показываем попап с вопросом
        document.querySelector(".static-sector").style.animation = "none"; //отключаем выделение выпавшего сектора
        this.timer = 30; //включаем таймер на 10 секунд
        let time = setInterval(() => {
          if (this.timer != 1) {
            this.timer--;
          } else {
            this.showModal = false;
            clearInterval(time);
          }
        }, 1000);
      }, 2000); //показываем только через 2 секунды после выпадания вопроса
    },
    start() {
      // Внешние скрипты для анимации выбора продукта
      this.state = true;
      this.rotation();
      setTimeout(() => {
        this.stop();
      }, 10000); //через десять секунд колесо должно остановиться
    },
    getRotationDegrees(element) {
      //функция получения текущего сектора
      // получаем вычисленный объект стиля для элемента
      var style = window.getComputedStyle(element);
      // эта строка будет иметь вид 'matrix(a, b, c, d, tx, ty)'
      var transformString =
        style["-webkit-transform"] ||
        style["-moz-transform"] ||
        style["transform"];
      if (!transformString || transformString == "none") return 0;
      var splits = transformString.split(",");
      // анализируем строку, чтобы получить a и b
      var parenLoc = splits[0].indexOf("(");
      var a = parseFloat(splits[0].substr(parenLoc + 1));
      var b = parseFloat(splits[1]);
      // выполняя atan2 от b, a даст угол в радианах
      var rad = Math.atan2(b, a);
      var deg = (180 * rad) / Math.PI;
      // вместо значений от -180 до 180, получаем от 0 до 360
      if (deg < 0) deg += 360;
      return deg;
    },
  },
};
</script>
<style lang="scss">
@import "@/styles/colors.scss";
$icon_width: 45px;
$icon_height: 20px;

$diameter_first_orbit: 777px; //диаметр первой (внешней) орбиты

$diameter_first_products: $diameter_first_orbit / 2.8; //диаметр вращения продуктов первой (внешней) орбиты

$number_of_products_first_orbit: 17; //кол-во продуктов на первой орбите

.home {
  position: relative;
  margin: 45px 0;
  background: url(../assets/background.svg);
}

.circle_btn {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  font-size: 18px;
  padding: 0;
  position: absolute;
  top: -2vw;
  left: 2vw;
}

.spin {
  pointer-events: none;
  animation: spin 10s infinite linear;
}

@keyframes spin {
  from {
    background: $light_gray;
  }
  to {
    background: $primary_red;
  }
}

@keyframes pick {
  0% {
    background: linear-gradient(20deg, #81818170 30%, transparent 0);
  }
  50% {
    background: linear-gradient(20deg, #d8a90370 30%, transparent 0);
  }
  100% {
    background: linear-gradient(20deg, #81818170 30%, transparent 0);
  }
}

/*
  стили орбит
*/

.first_orbit {
  width: $diameter_first_orbit;
  height: $diameter_first_orbit;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto;
  background: #f3f7f4;
  box-shadow: 0px 0px 40px #e4e4e4;
  & button {
    position: absolute;
    z-index: 300;
    left: calc(44%);
    top: calc(44%);
  }
}

.product-logo {
  max-width: $icon_width;
  max-height: $icon_height;
  margin: auto;
  margin-bottom: 0.5vw;
  transition: 1s;
}

.non-block {
  display: inline-block;
  margin-right: 1vw;
}

.image-product:hover {
  max-height: 3.5vw;
  max-width: 4vw;
  transition: 1s;
  cursor: pointer;
}

.product {
  position: absolute;
  width: 10vw;
  left: calc(50% - 4.5vw);
  top: calc(50% - 1vw);
}

span {
  display: block;
  font-size: 20px;
}

/*
  стили секторов
*/

.static-sector {
  background: linear-gradient(20deg, #81818170 30%, transparent 0);
  transition: 0.5s;
  z-index: 200;
  overflow: hidden;
  position: absolute;
  width: 50%;
  height: 50%;
  transform-origin: 100% 100%;
  transform: rotate(170deg);
  animation: none;
}

/*
  вращение продуктов по орбите
*/

@for $i from 1 through $number_of_products_first_orbit {
  .item-#{$i} {
    z-index: 100;
    transform: rotate((360deg / $number_of_products_first_orbit) * $i)
      translateX($diameter_first_products);
  }
}

// Стили таймера для отсчета времени вопроса

.wrapper {
  position: relative;
  background: white;
}

@mixin timer($item, $duration, $size, $color, $border, $hover: running) {
  #{$item} {
    width: $size;
    height: $size;
  }

  #{$item} .pie {
    width: 50%;
    height: 100%;
    transform-origin: 100% 50%;
    position: absolute;
    background: $color;
    border: #{$border};
  }

  #{$item} .timer {
    top: 35px;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 400;
    font-size: 32px;
    position: absolute;
  }

  #{$item} .spinner {
    border-radius: 100% 0 0 100% / 50% 0 0 50%;
    z-index: 200;
    border-right: none;
    animation: rota $duration + s linear infinite;
  }

  #{$item}:hover .spinner,
  #{$item}:hover .filler,
  #{$item}:hover .mask {
    animation-play-state: $hover;
  }

  #{$item} .filler {
    border-radius: 0 100% 100% 0 / 0 50% 50% 0;
    left: 50%;
    opacity: 0;
    z-index: 100;
    animation: opa $duration + s steps(1, end) infinite reverse;
    border-left: none;
  }

  #{$item} .mask {
    width: 50%;
    height: 100%;
    position: absolute;
    background: inherit;
    opacity: 1;
    z-index: 300;
    animation: opa $duration + s steps(1, end) infinite;
  }

  @keyframes rota {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes opa {
    0% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
  }
}

@include timer(
  ".wrapper",
  30,
  100px,
  transparent,
  "5px solid #E92D37"
); //настройка таймера, где второй параметр - время
</style>
