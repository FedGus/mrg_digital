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
          <!-- секторы первой орбиты -->
          <div class="sector sector-1-1"></div>
          <div class="sector sector-1-2"></div>
          <div class="sector sector-1-3"></div>
          <div class="sector sector-1-4"></div>
          <div class="sector sector-1-5"></div>
          <div class="sector sector-1-6"></div>
          <div class="sector sector-1-7"></div>
          <div class="sector sector-1-8"></div>
          <div class="sector sector-1-9"></div>
          <div class="sector sector-1-10"></div>
          <div class="sector sector-1-11"></div>
          <div class="sector sector-1-12"></div>
          <div class="sector sector-1-13"></div>
          <div class="sector sector-1-14"></div>
          <div class="sector sector-1-15"></div>
          <div class="sector sector-1-16 sector-end"></div>
          <div class="sector sector-1-17 sector-end"></div>
          <div class="sector static-sector"></div>
          <!-- вторая орбита -->
          <div class="second_orbit">
            <div class="third_orbit">
              <div class="product item-3-1">
                <button class="btn circle_btn" @click="start()">
                  Крутить!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <nav>
          <ul>
            <li>
              <a href="">АМБАССАДОРЫ MRG</a>
            </li>
            <li>
              <a href="">ВКОНТАКТЕ</a>
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
    rotation(time) {
      //быстрое вращение круга в режиме игры
      let stopDegree = this.stopDegree;
      let extraDegree = Math.ceil(Math.random() * (3600 - 3240)) + 3240;
      for (let j = 1; j <= 17; j++) {
        document.querySelector(".sector-1-" + j).style.animation =
          "rotation-1-" + j + " " + time + "s 1 ease-in-out backwards";

        let startDegree = (360 / 17) * j + this.stopDegree;
        stopDegree = extraDegree + startDegree;
        document
          .querySelector(".item-" + j)
          .animate(
            [
              { transform: "rotate(" + startDegree + "deg) translateX(275px)" },
              { transform: "rotate(" + stopDegree + "deg) translateX(275px)" },
            ],
            {
              duration: 10000,
              easing: "ease-in-out",
              iterations: 1,
            }
          );
      }
      this.stopDegree = stopDegree;
    },
    stop() {
      this.state = false;
      for (let i = 1; i <= 17; i++) {
        let el = document.querySelector(".item-" + i);
        el.style.transform =
          "rotate(" +
          ((360 / 17) * i + this.stopDegree) +
          "deg) translateX(275px)";
        let position = this.getRotationDegrees(el);
        if (
          (position > 345 && position <= 360) ||
          (position >= 0 && position < 5)
        ) {
          let ind = el.classList[1].slice(5, 7);
          console.log(ind);
          this.unit_name = this.units[ind - 1].name;
          axios
            .get("api/question/" + ind)
            .then((response) => {
              console.log(response.data);
              this.questions = response.data;
              let index = Math.ceil(
                Math.random() * (this.questions.length - 1 - 0)
              );
              if (response.data) this.question = this.questions[index].question;
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
      setTimeout(() => {
        this.showModal = true;
        this.timer = 10;
        let time = setInterval(() => {
          if (this.timer != 1) {
            this.timer--;
          } else {
            this.showModal = false;
            clearInterval(time);
          }
        }, 1000);
      }, 2000);
    },
    start() {
      /* Внешние скрипты для анимации выбора продукта */
      this.state = true;
      this.rotation(10);
      setTimeout(() => {
        this.stop();
      }, 10000);
    },
    getRotationDegrees(element) {
      //функция получения текущего сектора
      // get the computed style object for the element
      var style = window.getComputedStyle(element);
      // this string will be in the form 'matrix(a, b, c, d, tx, ty)'
      var transformString =
        style["-webkit-transform"] ||
        style["-moz-transform"] ||
        style["transform"];
      if (!transformString || transformString == "none") return 0;
      var splits = transformString.split(",");
      // parse the string to get a and b
      var parenLoc = splits[0].indexOf("(");
      var a = parseFloat(splits[0].substr(parenLoc + 1));
      var b = parseFloat(splits[1]);
      // doing atan2 on b, a will give you the angle in radians
      var rad = Math.atan2(b, a);
      var deg = (180 * rad) / Math.PI;
      // instead of having values from -180 to 180, get 0 to 360
      if (deg < 0) deg += 360;
      return deg;
    },
  },
};
</script>
<style lang="scss">
@import "@/styles/colors.scss";
$icon_width: 2vw;
$icon_height: 1vw;

$diameter_first_orbit: 40vw; //диаметр первой (внешней) орбиты
$diameter_second_orbit: 24vw; //диаметр второй орбиты
$diameter_third_orbit: 12.5vw; //диаметр третьей орбиты (ядро)

$diameter_first_products: $diameter_first_orbit / 2.8; //диаметр вращения продуктов первой (внешней) орбиты
$diameter_second_products: $diameter_second_orbit / 2.75; //диаметр вращения продуктов второй орбиты
$diameter_third_products: $diameter_third_orbit / 3.5; //диаметр вращения продуктов третьей орбиты (ядро)

$number_of_products_first_orbit: 17; //кол-во продуктов на первой орбите
$number_of_products_second_orbit: 5; //кол-во продуктов на второй орбите
$number_of_products_third_orbit: 1; //кол-во продуктов на третьей орбите

.home {
  position: relative;
  margin: 45px 0;
  background: url(../assets/background.svg);
}

.circle_btn {
  height: 5vw;
  width: 5vw;
  border-radius: 2.5vw;
  font-size: 1vw;
  padding: 0;
  position: absolute;
  top: -2vw;
  left: 2vw;
}

.present {
  height: 30vw;
  background: $primary_red;
}

#glove-1 {
  position: absolute;
  width: 7vw;
  left: 70vw;
  top: 25vw;
}

#glove-2 {
  position: absolute;
  width: 7vw;
  left: 80vw;
  top: 20vw;
}

#glove-3 {
  width: 5vw;
}

#arrow {
  color: $white;
  position: absolute;
  z-index: 1000;
  top: 40vw;
  left: 10vw;
  img {
    display: block;
    width: 7vw;
  }
}

.announce-date {
  background: $primary_red;
  color: $white;
  padding: 3vw 3vw;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  right: 10vw;
}

.description {
  width: 50vw;
}
.clarification {
  height: 5vw;
  span {
    float: right;
  }
}
b {
  font-size: 10vw;
  font-weight: normal;
}

.about {
  height: 50vw;
  max-height: 700px;
  background: linear-gradient(to bottom, $light_gray 70%, $white 30%);
  position: relative;
}

.command-card {
  width: 30vw;
  display: grid;
  grid-template-columns: 0.25fr 3.5fr 0.25fr;
  p {
    margin: 0;
  }
}

.rating-list {
  columns: 2;
}
li {
  list-style: none;
  padding: 0 2vw 0 0;
}

li:nth-child(-n + 3) {
  color: $primary_red;
}

.rounds {
  text-align: right;
  height: 20vw;
  h2 {
    display: inline;
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
}
.second_orbit {
  width: $diameter_second_orbit;
  height: $diameter_second_orbit;
  position: relative;
  top: calc(25% - 1.5vw);
  z-index: 200;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
}

.third_orbit {
  width: $diameter_third_orbit;
  height: $diameter_third_orbit;
  position: relative;
  top: calc(25%);
  z-index: 300;
  border-radius: 50%;
  margin: 0 auto;
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
}

/*
  вращение секторов по орбите
*/

@for $i from 1 through $number_of_products_first_orbit {
  //стили секторов ПЕРВОЙ орбиты
  .sector-1-#{$i} {
    background: #f3f7f4;
    overflow: hidden;
    position: absolute;
    width: 50%;
    height: 50%;
    z-index: (20 + $i);
    transform-origin: 100% 100%;
    animation: rotation-1-#{$i} 100s infinite linear;
    //transition: 2s;
  }
  // .sector-1-#{$i}:nth-child(odd) {
  //   background: #eeeeee;
  // }
  // .sector-1-#{$i}:hover {
  //   background: #e4e4e4;
  //   transition: 0.5s;
  // }
  @keyframes rotation-1-#{$i} {
    //вращение секторов ПЕРВОЙ орбиты
    from {
      transform: rotate(
        ((3600deg / $number_of_products_first_orbit) * $i) + 18deg
      );
    }
    to {
      transform: rotate(
        3600deg + ((3600deg / $number_of_products_first_orbit) * $i) + 18deg
      );
    }
  }
}

.sector-end {
  background: linear-gradient(36deg, #f3f7f4 43%, transparent 0);
  transition: 0.5s;
}
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
  // @keyframes myOrbit-1-#{$i} {
  //   0% {
  //     transform: rotate((3600deg / $number_of_products_first_orbit) * $i)
  //       translateX($diameter_first_products);
  //     //rotate(-(360deg / $number_of_products_first_orbit) * $i);
  //   }
  //   100% {
  //     transform: rotate(
  //         3600deg + ((3600deg / $number_of_products_first_orbit) * $i)
  //       )
  //       translateX($diameter_first_products);
  //     //rotate(-360deg - ((360deg / $number_of_products_first_orbit) * $i));
  //   }
  // }
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

@include timer(".wrapper", 10, 100px, transparent, "5px solid #E92D37");
</style>
