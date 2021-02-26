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
            <h4>Тема: Классифайды</h4>
          </div>
          <img class="product-logo" slot="logo-header" src="@/assets/hmm.png" />
          <p slot="body">
            Как называется сервис для поиска проверенных фондов, которые могут
            помочь, являющийся частью Добро@mail.ru?
          </p>

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
          <div class="product item-1-1">
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
              class="product-logo"
            />
          </div>
          <div class="product item-1-2">
            <img
              src="@/assets/city_mobil.png"
              @click="showModal = true"
              class="product-logo"
            />
            <img
            src="@/assets/youdrive.svg"
            @click="showModal = true"
            class="product-logo"
          />
          </div>
          <div class="product item-1-3">
            <img
              src="@/assets/youla.svg"
              @click="showModal = true"
              class="product-logo"
            /><img
              src="@/assets/vkrabota.svg"
              @click="showModal = true"
              class="product-logo"
            />
          </div>
          <div class="product item-1-4">
            <img
              src="@/assets/esforce.svg"
              @click="showModal = true"
              class="product-logo"
            />
          </div>
          <div class="product item-1-5">
            <img
              src="@/assets/biz.svg"
              @click="showModal = true"
              class="product-logo"
            />
            <img
                src="@/assets/mdt.svg"
                @click="showModal = true"
                class="product-logo"
              />
          </div>
          <div class="product item-1-6">
            <img
              src="@/assets/geekbrains.png"
              @click="showModal = true"
              class="product-logo"
            /><img
              src="@/assets/Skillbox.png"
              @click="showModal = true"
              class="product-logo"
            /><img
              src="@/assets/skillfactory.png"
              @click="showModal = true"
              class="product-logo"
            />
          </div>
          <div class="product item-1-7">
            <img
              src="@/assets/aliexpress.svg"
              @click="showModal = true"
              class="product-logo"
            />
          </div>
          <div class="product item-1-8">
            <img
              src="@/assets/mediaproektyi.png"
              @click="showModal = true"
              class="product-logo"
            /><img
              src="@/assets/poisk.png"
              @click="showModal = true"
              class="product-logo"
            />
          </div>
          <div class="product item-1-9">
            <div>
            <img
              class="non-block product-logo"
              src="@/assets/agent.svg"
              @click="showModal = true"
            />
            <img
              class="non-block product-logo"
              src="@/assets/ICQNew.svg"
              @click="showModal = true"
            />
          </div>
          <img
            src="@/assets/tamtam.svg"
            @click="showModal = true"
            class="product-logo non-block"
          />
          </div>
          <div class="product item-1-10">
            <img
              src="@/assets/boom.svg"
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
          <div class="sector sector-1-9 sector-end"></div>
          <div class="sector sector-1-10 sector-end"></div>
          <!-- вторая орбита -->
          <div class="second_orbit second_orbit_mobile">
            <div class="product item-2-1">
              <img
                class="non-block product-logo"
                src="@/assets/marusya.svg"
                @click="showModal = true"
              /><img
                class="product-logo"
                src="@/assets/vision.svg"
                @click="showModal = true"
              /><img
                src="@/assets/predict.svg"
                @click="showModal = true"
                class="product-logo"
              />
            </div>
            <div class="product item-2-2">
              <img
                src="@/assets/tarantool.svg"
                @click="showModal = true"
                class="product-logo"
              />
            </div>
            <div class="product item-2-3">
              <img
              src="@/assets/my.svg"
              @click="showModal = true"
              class="product-logo non-block"
            />
            <img
              src="@/assets/mytracker.svg"
              @click="showModal = true"
              class="product-logo"
            />
            </div>
            <div class="product item-2-4">
              <img
                src="@/assets/MCS.svg"
                @click="showModal = true"
                class="product-logo"
              /><img
                src="@/assets/cloud.png"
                @click="showModal = true"
                class="product-logo"
              />
            </div>
            <div class="product item-2-5">
              <img
                src="@/assets/vkpay.svg"
                @click="showModal = true"
                class="product-logo"
              />
            </div>
            <!-- секторы второй орбиты -->
            <div class="sector sector-2-1"></div>
            <div class="sector sector-2-2"></div>
            <div class="sector sector-2-3"></div>
            <div class="sector sector-2-4"></div>
            <div class="sector sector-2-5"></div>
            <div class="third_orbit third_orbit_mobile">
              <!-- третья орбита -->
              <!-- <div v-for="(product, idx) in products" :key="idx">
                <div :class="`product item-3-${idx + 1}`">
                  <img
                    class="image-product product-logo"
                    :src="`/static/${product.image}`"
                    @click="productInfo(product)"
                  />
                </div>
              </div> -->
              <div class="product item-3-1">
                <img
                  src="@/assets/vk.svg"
                  @click="showModal = true"
                  class="product-logo"
                />
              </div>
              <div class="product item-3-2">
                <img
                  src="@/assets/ok.svg"
                  @click="showModal = true"
                  class="product-logo"
                />
              </div>
              <div class="product item-3-3">
                <img
                  src="@/assets/mail.png"
                  @click="showModal = true"
                  class="product-logo"
                />
              </div>
              <div class="product item-3-4">
                <img
                  src="@/assets/mygames.png"
                  @click="showModal = true"
                  class="product-logo"
                />
              </div>
              <div class="sector sector-3-1"></div>
              <div class="sector sector-3-2"></div>
              <div class="sector sector-3-3"></div>
              <div class="sector sector-3-4"></div>
            </div>
          </div>
        </div>
        <button class="btn circle_btn" v-if="!state" @click="start()">
          Крутить!
        </button>
        <button class="btn circle_btn" v-if="state" @click="stop()">
          СТОП!
        </button>
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
import { db } from "../main";
import modal from "@/views/Modal.vue";
export default {
  name: "Dashboard",
  components: {
    modal,
  },
  mounted() {
    this.setupFirebase();
  },
  data() {
    return { state: false, showModal: false, timer: 60 };
  },
  firestore() {
    return {
      products: db.collection("products"),
    };
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
    rotation(time, odds) {
      for (let i = 1; i <= 3; i++) {
        time = time - odds;
        for (let j = 1; j <= 10; j++) {
          document.querySelector(".sector-" + i + "-" + j).style.animation =
            "rotation-" + i + "-" + j + " " + time + "s infinite linear";

          document.querySelector(".item-" + i + "-" + j).style.animation =
            "myOrbit-" + i + "-" + j + " " + time + "s infinite linear";
        }
      }
    },
    start() {
      /* Внешние скрипты для анимации выбора продукта */
      this.state = true;
      this.rotation(2, 0.5);
    },
    stop() {
      this.state = false;
      let x = Math.ceil(Math.random() * (8 - 1)) + 1;
      // let y = Math.ceil(Math.random() * (5 - 1)) + 1;
      // let z = Math.ceil(Math.random() * (4 - 1)) + 1;
      console.log(x);
      document.querySelector(".sector-1-" + x).style.background = "#FC9696";
      setTimeout(() => {
        document.querySelector(".sector-1-" + x).style.background = "#f3f7f4";
        this.showModal = true;
        this.timer = 60;
        let time = setInterval(() => {
          if (this.timer != 0) {
            this.timer--;
          } else {
            this.showModal = false;
            clearInterval(time);
          }
        }, 1000);
      }, 2000);
      this.rotation(30, 10);
    },
  },
};
</script>
<style lang="scss">
@import "@/styles/colors.scss";
$icon_width: 3.5vw;
$icon_height: 2vw;

$diameter_first_orbit: 40vw; //диаметр первой (внешней) орбиты
$diameter_second_orbit: 24vw; //диаметр второй орбиты
$diameter_third_orbit: 12.5vw; //диаметр третьей орбиты (ядро)

$diameter_first_products: $diameter_first_orbit / 2.5; //диаметр вращения продуктов первой (внешней) орбиты
$diameter_second_products: $diameter_second_orbit / 2.75; //диаметр вращения продуктов второй орбиты
$diameter_third_products: $diameter_third_orbit / 3.5; //диаметр вращения продуктов третьей орбиты (ядро)

$number_of_products_first_orbit: 10; //кол-во продуктов на первой орбите
$number_of_products_second_orbit: 5; //кол-во продуктов на второй орбите
$number_of_products_third_orbit: 4; //кол-во продуктов на третьей орбите

.home {
  position: relative;
  margin: 45px 0;
  background: $white;
}

.circle_btn {
  height: 5vw;
  width: 5vw;
  border-radius: 2.5vw;
  padding: 0;
  position: absolute;
  bottom: 50px;
  left: 300px;
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
  height: 15vw;
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
  background: #f9fefb;
  box-shadow: 0px 0px 40px #e4e4e4;
}

.third_orbit {
  width: $diameter_third_orbit;
  height: $diameter_third_orbit;
  position: relative;
  top: calc(25%);
  z-index: 300;
  border-radius: 50%;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 0px 40px #e4e4e4;
}

.product-logo {
  max-width: $icon_width;
  max-height: $icon_height;
  display: block;
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
  left: calc(50% - 1.25vw);
  top: calc(50% - 1vw);
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
    animation: rotation-1-#{$i} 30s infinite linear;
    transition: 2s;
  }
  // .sector-1-#{$i}:nth-child(odd) {
  //   background: #eeeeee;
  // }
  .sector-1-#{$i}:hover {
    background: #e4e4e4;
    transition: 0.5s;
  }
  @keyframes rotation-1-#{$i} {
    //вращение секторов ПЕРВОЙ орбиты
    from {
      transform: rotate(
        ((360deg / $number_of_products_first_orbit) * $i) + 18deg
      );
    }
    to {
      transform: rotate(
        360deg + ((360deg / $number_of_products_first_orbit) * $i) + 18deg
      );
    }
  }
}

@for $i from 1 through $number_of_products_second_orbit {
  //стили секторов ВТОРОЙ орбиты
  .sector-2-#{$i} {
    background: #f9fefb;
    overflow: hidden;
    position: absolute;
    width: 50%;
    height: 50%;
    z-index: (20 + $i);
    transform-origin: 100% 100%;
    // border: 2px solid #f3f7f4;
    animation: rotation-2-#{$i} 20s infinite linear;
    transition: 2s;
  }
  .sector-2-#{$i}:hover {
    background: #eeeeee;
    transition: 0.5s;
  }
  @keyframes rotation-2-#{$i} {
    //вращение секторов ВТОРОЙ орбиты
    from {
      transform: rotate(
        ((360deg / $number_of_products_second_orbit) * $i) + 72deg
      );
    }
    to {
      transform: rotate(
        360deg + ((360deg / $number_of_products_second_orbit) * $i) + 72deg
      );
    }
  }
}

.sector-end {
  background: linear-gradient(36deg, #f3f7f4 43%, transparent 0);
  transition: 0.5s;
}
.sector-end:hover {
  background: linear-gradient(36deg, #e4e4e4 43%, transparent 0);
  transition: 0.5s;
}

/*
  вращение продуктов по орбите
*/

@for $i from 1 through $number_of_products_first_orbit {
  .item-1-#{$i} {
    z-index: 100;
    animation: myOrbit-1-#{$i} 30s linear infinite;
  }
  @keyframes myOrbit-1-#{$i} {
    from {
      transform: rotate((360deg / $number_of_products_first_orbit) * $i)
        translateX($diameter_first_products)
        rotate(-(360deg / $number_of_products_first_orbit) * $i);
    }
    to {
      transform: rotate(
          360deg + ((360deg / $number_of_products_first_orbit) * $i)
        )
        translateX($diameter_first_products)
        rotate(-360deg - ((360deg / $number_of_products_first_orbit) * $i));
    }
  }
}

@for $i from 1 through $number_of_products_second_orbit {
  .item-2-#{$i} {
    z-index: 200;
    animation: myOrbit-2-#{$i} 20s linear infinite;
  }
  @keyframes myOrbit-2-#{$i} {
    from {
      transform: rotate((360deg / $number_of_products_second_orbit) * $i)
        translateX($diameter_second_products)
        rotate(-(360deg / $number_of_products_second_orbit) * $i);
    }
    to {
      transform: rotate(
          360deg + ((360deg / $number_of_products_second_orbit) * $i)
        )
        translateX($diameter_second_products)
        rotate(-360deg - ((360deg / $number_of_products_second_orbit) * $i));
    }
  }
}

@for $i from 1 through $number_of_products_third_orbit {
  .item-3-#{$i} {
    animation: myOrbit-3-#{$i} 15s linear infinite;
  }
  @keyframes myOrbit-3-#{$i} {
    from {
      transform: rotate((360deg / $number_of_products_third_orbit) * $i)
        translateX($diameter_third_products)
        rotate(-(360deg / $number_of_products_third_orbit) * $i);
    }
    to {
      transform: rotate(
          360deg + ((360deg / $number_of_products_third_orbit) * $i)
        )
        translateX($diameter_third_products)
        rotate(-360deg - ((360deg / $number_of_products_third_orbit) * $i));
    }
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
    top: 25px;
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

@include timer(".wrapper", 60, 100px, transparent, "5px solid #E92D37");
</style>
