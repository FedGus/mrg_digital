<template>
  <div>
    <!-- меню -->
    <header>
      <img class="logo" src="@/assets/logo.svg" alt="" />
      <nav>
        <ul>
          <li>
            <a href=""><img id="icon" src="@/assets/vkgroup.svg" /> Стать зрителем</a>
          </li>
          <li>
            <router-link class="nav-link" to="/login" tag="a"
              >Личный кабинет</router-link
            >
          </li>
        </ul>
      </nav>
    </header>
    <!-- заголовок -->
    <section class="present">
      <h1>Цифровой ринг</h1>
      <h5>Командное онлайн шоу-игра от амбассадоров Mail.ru Group</h5>
      <div><img id="glove-1" src="@/assets/boxing_glove_1.svg" /></div>
      <div><img id="glove-2" src="@/assets/boxing_glove_2.svg" /></div>
      <div id="arrow">
        <h5>Кликни!</h5>
        <img src="@/assets/arrow.svg" />
      </div>
    </section>
    <!-- модальное окно -->
    <transition name="modal">
      <modal v-if="showModal" @close="showModal = false">
        <h2 slot="header">{{ name }}</h2>
        <img
          class="product-logo"
          slot="logo-header"
          :src="`/static/${image}`"
        />
        <p slot="body">{{ description }}</p>
        <a slot="footer" :href="site">Официальный сайт</a>
      </modal>
    </transition>
    <!-- секция с кругом -->
    <div class="home">
      <div class="first_orbit first_orbit_mobile">
        <!-- первая орбита -->
        <div class="product item-1-1">
          <span>B2B</span>
          <ul class="bottom_right_side">
            <li>
              <img
                src="@/assets/biz.svg"
                @click="showModal = true"
                class="product-logo"
              />
            </li>
            <li>
              <img
                src="@/assets/mdt.svg"
                @click="showModal = true"
                class="product-logo"
              />
            </li>
          </ul>
        </div>
        <div class="product item-1-2">
          <span class="non-block">Музыка</span>
          <img
            src="@/assets/boom.svg"
            @click="showModal = true"
            class="product-logo"
          />
        </div>
        <div class="product item-1-3"></div>
        <div class="product item-1-4">
          <span class="non-block left">Образование</span>
          <ul class="bottom_left_side">
            <li>
              <img
                src="@/assets/geekbrains.png"
                @click="showModal = true"
                class="product-logo"
              />
            </li>
            <li>
              <img
                src="@/assets/Skillbox.png"
                @click="showModal = true"
                class="product-logo"
              />
            </li>
            <li>
              <img
                src="@/assets/skillfactory.png"
                @click="showModal = true"
                class="product-logo"
              />
            </li>
            <li>
              <img
                src="@/assets/algoritmika.svg"
                @click="showModal = true"
                class="product-logo non-block"
              /><img
                src="@/assets/tetrika.svg"
                @click="showModal = true"
                class="product-logo non-block"
              />
            </li>
            <li></li>
            <li>
              <img
                src="@/assets/uchi.svg"
                @click="showModal = true"
                class="product-logo"
              />
            </li>
          </ul>
        </div>
        <div class="product item-1-5">
          <span class="non-block">Информация</span>
          <ul class="bottom_left_side">
            <li>
              <img
                src="@/assets/mediaproektyi.png"
                @click="showModal = true"
                class="product-logo"
              />
            </li>
            <li>
              <img
                src="@/assets/poisk.png"
                @click="showModal = true"
                class="product-logo"
              />
            </li>
            <li>
              <img
                src="@/assets/donations.svg"
                @click="showModal = true"
                class="product-logo"
              />
            </li>
          </ul>
        </div>
        <div class="product item-1-6">
          <span class="non-block">Мессенджеры</span>
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
        <div class="product item-1-7">
          <span class="non-block">Еда</span><span>●</span><br />
          <div class="non-block">
            <img
              src="@/assets/delivery.svg"
              @click="showModal = true"
              class="product-logo non-block"
            />
            <img
              src="@/assets/samokat.svg"
              @click="showModal = true"
              class="product-logo non-block"
            />
            <img
              src="@/assets/kuhnia.svg"
              @click="showModal = true"
              class="product-logo non-block"
            />
          </div>
        </div>
        <div class="product item-1-8">
          
          <span class="non-block">Классифайды</span><br>
          <div class="non-block">
              <img
                src="@/assets/youla.svg"
                @click="showModal = true"
                class="product-logo non-block"
              />
              <img
                src="@/assets/vkrabota.svg"
                @click="showModal = true"
                class="product-logo non-block"
              />
            </div>
        </div>
        <div class="product item-1-9">
          <span class="non-block">Киберспорт</span><br />
          <img
            src="@/assets/esforce.svg"
            @click="showModal = true"
            class="product-logo non-block"
          />
        </div>
        <div class="product item-1-10">
          <span class="non-block">E-commerce</span><span>●</span><br>
          <img
                src="@/assets/aliexpress.svg"
                @click="showModal = true"
                class="product-logo non-block"
              />
        </div>
        <div class="product item-1-11">
          <span class="non-block">Мобилити</span><span>●</span>
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
        <div class="sector sector-1-10 sector-end"></div>
        <div class="sector sector-1-11 sector-end"></div>
        <!-- вторая орбита -->
        <div class="second_orbit second_orbit_mobile">
          <div class="product item-2-1">
            <img
              src="@/assets/my.svg"
              @click="showModal = true"
              class="product-logo non-block"
            /><span class="non-block">Adtech</span>
            <img
              src="@/assets/mytracker.svg"
              @click="showModal = true"
              class="product-logo"
            />
          </div>
          <div class="product item-2-2">
            <span class="non-block">Data</span>
            <img
              src="@/assets/tarantool.svg"
              @click="showModal = true"
              class="product-logo"
            />
          </div>
          <div class="product item-2-3">
            <span class="non-block">AL&ML</span>
            <ul class="top_left_side">
              <li>
                <img
                  class="non-block product-logo"
                  src="@/assets/marusya.svg"
                  @click="showModal = true"
                />
              </li>
              <li>
                <img
                  class="non-block product-logo"
                  src="@/assets/vision.svg"
                  @click="showModal = true"
                />
              </li>
              <li>
                <img
                  src="@/assets/predict.svg"
                  @click="showModal = true"
                  class="product-logo"
                />
              </li>
            </ul>
          </div>
          <div class="product item-2-4">
            <span class="non-block">Fintech</span>
            <img
              src="@/assets/vkpay.svg"
              @click="showModal = true"
              class="product-logo"
            />
          </div>
          <div class="product item-2-5">
            <span class="non-block">Cloud</span>
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
            <div class="product item-3-1"></div>
            <div class="product item-3-2">
              <span>Коммуникации и соцсети</span>
              <div>
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
              <span class="non-block">Игры</span><br />
              <img
                src="@/assets/mygames.png"
                @click="showModal = true"
                class="product-logo non-block"
              />
            </div>
            <!-- <div class="product item-3-3">
              
            </div>
            <div class="product item-3-4"></div>
            <div class="sector sector-3-1"></div>
            <div class="sector sector-3-2"></div>
            <div class="sector sector-3-3"></div>
            <div class="sector sector-3-4"></div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- секция с описанием игры -->
    <section class="clarification">
      <span>Партнерства</span><span>●</span>
      <div><img id="glove-3" src="@/assets/boxing_glove_3.svg" /></div>
    </section>
    <section class="about">
      <div class="description">
        <h2>Стань зрителем и поддержи любимую команду</h2>
        <p>
          Игра проходит в ВК трансляции. Становись нашим зрителем, следи за
          новостями в группе ВКонтакте и получи возможность тоже выиграть призы
          от Mail.ru Group.
        </p>
        <a href="" class="link">СТАТЬ ЗРИТЕЛЕМ</a>
        <div class="announce-date">
          <h5>Следующий раунд</h5>
          <b>22</b>
          <span>марта</span>
        </div>
      </div>
    </section>
    <section>
      <h2>Трансляции</h2>
      <iframe class="broadcast" src="https://vk.com/video_ext.php?oid=-92204627&id=456239457&hash=b8ab880543307ad3&hd=1" frameborder="0" allowfullscreen></iframe>
    <h3>Предыдущие выпуски</h3>
    <div class="past_broadcasts">
    <iframe src="https://vk.com/video_ext.php?oid=-153502007&id=456239549&hash=bccf93c9905b18bb&hd=2"  frameborder="0" allowfullscreen></iframe>
    <iframe src="https://vk.com/video_ext.php?oid=-153502007&id=456239548&hash=1b5cdde20253f1b6&hd=1"  frameborder="0" allowfullscreen></iframe>
    <iframe src="https://vk.com/video_ext.php?oid=-153502007&id=456239466&hash=1271a107e45761ab&hd=2"  frameborder="0" allowfullscreen></iframe>
    </div>
    </section>
    <section class="rating">
      <h2>Рейтинг команд</h2>
      <ul class="rating-list">
        <li v-for="(university, idx) in universities" :key="idx">
          <div class="command-card">
            <p v-bind:class="[{ command_place: university.id <= 3 }, none]">
              {{ university.id }}
            </p>
            <p>{{ university.command }}</p>
            <p>{{ university.points }}</p>
          </div>
          <div class="command-card">
            <span></span>
            <span>{{ university.name }}</span>
            <span></span>
          </div>
        </li>
      </ul>
      <div class="rounds">
        <h2>1/5</h2>
        <span> раундов</span>
      </div>
    </section>
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
</template>

<script>
import { db } from "../main";
import modal from "@/views/Modal.vue";

export default {
  name: "Home",
  components: {
    modal,
  },
  data() {
    return {
      showModal: false,
      products: [],
      universities: [
        {
          id: 1,
          command: "Команда Крестовоздвиженских",
          name: "Универстиет ИТМО",
          points: 32,
        },
        {
          id: 2,
          command: "Фиксики",
          name: "Московский Политех",
          points: 30,
        },
        {
          id: 3,
          command: "Цветуёчки",
          name: "КФУ",
          points: 29,
        },
        {
          id: 4,
          command: "Лучшие на свете юристы",
          name: "Московский Городской",
          points: 28,
        },
      ],
      name: "",
      image: "",
      description: "",
      site: "",
    };
  },
  firestore() {
    return {
      products: db.collection("products"),
    };
  },
  methods: {
    productInfo(item) {
      this.showModal = true;
      this.name = item.name;
      this.image = item.image;
      this.description = item.description;
      this.site = item.site;
    },
  },
};

window.addEventListener("mousemove", function (e) {
  let arrow = document.querySelector("#arrow");
  let glove1 = document.querySelector("#glove-1");
  let glove2 = document.querySelector("#glove-2");
  if (arrow && glove1 && glove2) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    arrow.style.transform = "translate(" + x * 10 + "px, -" + y * 10 + "px)";
    glove1.style.transform = "translate(" + x * 20 + "px, " + y * 20 + "px)";
    glove2.style.transform = "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
  }
});
</script>
<style lang="scss" scoped>
@import "@/styles/colors.scss";
$icon_width: 4.5vw;
$icon_height: 2vw;

$diameter_first_orbit: 50vw; //диаметр первой (внешней) орбиты
$diameter_second_orbit: 30vw; //диаметр второй орбиты
$diameter_third_orbit: 15vw; //диаметр третьей орбиты (ядро)

$diameter_first_products: $diameter_first_orbit / 2.5; //диаметр вращения продуктов первой (внешней) орбиты
$diameter_second_products: $diameter_second_orbit / 2.75; //диаметр вращения продуктов второй орбиты
$diameter_third_products: $diameter_third_orbit / 3.5; //диаметр вращения продуктов третьей орбиты (ядро)

$number_of_products_first_orbit: 11; //кол-во продуктов на первой орбите
$number_of_products_second_orbit: 5; //кол-во продуктов на второй орбите
$number_of_products_third_orbit: 2; //кол-во продуктов на третьей орбите

.home {
  position: relative;
  transition: all 0.1s ease;
  background: linear-gradient(to top, $white 60%, $primary_red 40%);
  span {
    color: $dark_gray;
  }
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
  padding: 2vw 2vw 0 2vw;
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

.command_place {
  color: $primary_red;
}

.rounds {
  text-align: right;
  height: 20vw;
  h2 {
    display: inline;
  }
}
.broadcast {
  width: 100%;
  height: 45vw;
}
.past_broadcasts {
  display: flex;
  justify-content: space-between;
  & iframe {
  height: 15vw;
  width: 25vw;
}
}

@media screen and (max-device-width: 420px) {
  header,
  footer {
    height: 50px;
  }
  h1 {
    font-size: 38px;
    padding-top: 30px;
    width: 60vw;
  }
  h2 {
    font-size: 24px;
    padding: 20px 0;
  }
  h5 {
    font-size: 14px;
  }
  .present {
    height: 250px;
  }
  #glove-1 {
    width: 32px;
    left: 230px;
    top: 130px;
  }
  #glove-2 {
    width: 32px;
    left: 290px;
    top: 110px;
  }
  #glove-3 {
    width: 32px;
  }
  #arrow {
    top: 250px;
    left: 10vw;
    h5 {
      margin: 0;
    }
    img {
      display: block;
      width: 48px;
    }
  }
  .first_orbit_mobile {
    width: 90vw !important;
    height: 90vw !important;
  }

  .second_orbit_mobile {
    width: 60vw !important;
    height: 60vw !important;
    top: calc(25% - 6vw) !important;
  }
  .third_orbit_mobile {
    width: 30vw !important;
    height: 30vw !important;
  }
  .about {
    height: 460px;
    background: linear-gradient(to bottom, $light_gray 80%, $white 20%);
  }
  .description {
    width: 100%;
  }
  p {
    font-size: 16px;
  }
  b {
    font-size: 96px;
  }
  span,
  a {
    font-size: 10px !important;
  }
  .rating-list {
    columns: 1;
  }
  .command-card {
    width: 100%;
  }
  .logo {
    width: 75px;
  }
  .past_broadcasts {
  flex-direction: column;
  & iframe {
  height: 35vw;
  width: 100%;
  margin-bottom: 10px;
}
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
  top: calc(25% - 2vw);
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
  margin-right: 0.6vw;
}

.left {
  text-align: left;
  width: 100%;
}
.right {
  text-align: right;
  width: 10vw;
}

.product-logo:hover {
  transform: scale(1.25);
  transition: 1s;
  cursor: pointer;
}

.product {
  position: absolute;
  left: calc(50% - 2.5vw);
  top: calc(50% - 1.5vw);
}

.top_left_side {
  li:first-child {
    margin-left: 0vw;
  }
  li:nth-child(2) {
    margin-left: -2vw;
  }
  li:nth-child(3) {
    margin-left: -1.5vw;
  }
}

.bottom_left_side {
  li:nth-child(2) {
    margin-left: 1vw;
  }
  li:nth-child(3) {
    margin-left: 2vw;
  }
  li:nth-child(4) {
    margin-left: 4vw;
  }
  li:nth-child(5) {
    margin-left: 6vw;
  }
  li:nth-child(6) {
    margin-left: 8vw;
  }
}

.top_right_side {
  li:first-child {
    margin-left: -1.5vw;
  }
  li:nth-child(2) {
    margin-left: 0vw;
  }
}

.bottom_right_side {
  li:nth-child(2) {
    margin-left: -1.5vw;
  }
  li:nth-child(3) {
    margin-left: -3vw;
  }
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
    transform: rotate(
      ((360deg / $number_of_products_first_orbit) * $i) + 18deg
    );
    transition: 0.5s;
  }
  // .sector-1-#{$i}:nth-child(odd) {
  //   background: #eeeeee;
  // }
  // .sector-1-#{$i}:hover {
  //   background: #e4e4e4;
  //   transition: 0.5s;
  // }
  // @keyframes rotation-1-#{$i} {
  //   //вращение секторов ПЕРВОЙ орбиты
  //   from {
  //     transform: rotate(
  //       ((360deg / $number_of_products_first_orbit) * $i) + 18deg
  //     );
  //   }
  //   to {
  //     transform: rotate(
  //       360deg + ((360deg / $number_of_products_first_orbit) * $i) + 18deg
  //     );
  //   }
  // }
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
    transform: rotate(
      ((360deg / $number_of_products_second_orbit) * $i) + 72deg
    );
    transition: 0.5s;
  }
  // .sector-2-#{$i}:hover {
  //   background: #eeeeee;
  //   transition: 0.5s;
  // }
  // @keyframes rotation-2-#{$i} {
  //   //вращение секторов ВТОРОЙ орбиты
  //   from {
  //     transform: rotate(
  //       ((360deg / $number_of_products_second_orbit) * $i) + 72deg
  //     );
  //   }
  //   to {
  //     transform: rotate(
  //       360deg + ((360deg / $number_of_products_second_orbit) * $i) + 72deg
  //     );
  //   }
  // }
}

// .sector-end {
//   background: linear-gradient(36deg, #f3f7f4 43%, transparent 0);
//   transition: 0.5s;
// }
// .sector-end:hover {
//   background: linear-gradient(36deg, #e4e4e4 43%, transparent 0);
//   transition: 0.5s;
// }

/*
  вращение продуктов по орбите
*/

@for $i from 1 through $number_of_products_first_orbit {
  .item-1-#{$i} {
    z-index: 100;
    transform: rotate((360deg / $number_of_products_first_orbit) * $i)
      translateX($diameter_first_products)
      rotate(-(360deg / $number_of_products_first_orbit) * $i);
  }
  // @keyframes myOrbit-1-#{$i} {
  //   from {
  //     transform: rotate((360deg / $number_of_products_first_orbit) * $i)
  //       translateX($diameter_first_products)
  //       rotate(-(360deg / $number_of_products_first_orbit) * $i);
  //   }
  //   to {
  //     transform: rotate(
  //         360deg + ((360deg / $number_of_products_first_orbit) * $i)
  //       )
  //       translateX($diameter_first_products)
  //       rotate(-360deg - ((360deg / $number_of_products_first_orbit) * $i));
  //   }
  // }
}

@for $i from 1 through $number_of_products_second_orbit {
  .item-2-#{$i} {
    z-index: 200;
    transform: rotate((360deg / $number_of_products_second_orbit) * $i)
      translateX($diameter_second_products)
      rotate(-(360deg / $number_of_products_second_orbit) * $i);
  }
  // @keyframes myOrbit-2-#{$i} {
  //   from {
  //     transform: rotate((360deg / $number_of_products_second_orbit) * $i)
  //       translateX($diameter_second_products)
  //       rotate(-(360deg / $number_of_products_second_orbit) * $i);
  //   }
  //   to {
  //     transform: rotate(
  //         360deg + ((360deg / $number_of_products_second_orbit) * $i)
  //       )
  //       translateX($diameter_second_products)
  //       rotate(-360deg - ((360deg / $number_of_products_second_orbit) * $i));
  //   }
  // }
}

@for $i from 1 through $number_of_products_third_orbit {
  .item-3-#{$i} {
    transform: rotate((240deg / $number_of_products_third_orbit) * $i)
      translateX($diameter_third_products)
      rotate(-(240deg / $number_of_products_third_orbit) * $i);
  }
  // @keyframes myOrbit-3-#{$i} {
  //   from {
  //     transform: rotate((360deg / $number_of_products_third_orbit) * $i)
  //       translateX($diameter_third_products)
  //       rotate(-(360deg / $number_of_products_third_orbit) * $i);
  //   }
  //   to {
  //     transform: rotate(
  //         360deg + ((360deg / $number_of_products_third_orbit) * $i)
  //       )
  //       translateX($diameter_third_products)
  //       rotate(-360deg - ((360deg / $number_of_products_third_orbit) * $i));
  //   }
  // }
}
</style>