<template>
  <div>
    <transition name="modal">
      <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">{{ name }}</h3>
        <img slot="logo-header" :src="`/static/${image}`" />
        <p slot="body">{{ description }}</p>
        <a slot="footer" :href="site">Официальный сайт</a>
      </modal>
    </transition>
    <div class="home">
      <div class="first_orbit">
        <!-- первая орбита -->
        <div class="product item-1-1">
          <img
            class="non-block"
            src="@/assets/delivery.png"
            @click="showModal = true"
          /><img
            class="non-block"
            src="@/assets/samokat.png"
            @click="showModal = true"
          /><img src="@/assets/kuhnia.png" @click="showModal = true" />
        </div>
        <div class="product item-1-2">
          <img src="@/assets/city_mobil.png" @click="showModal = true" />
        </div>
        <div class="product item-1-3">
          <img src="@/assets/youla.png" @click="showModal = true" /><img
            src="@/assets/worki.png"
            @click="showModal = true"
          />
        </div>
        <div class="product item-1-4">
          <img src="@/assets/Esforce.png" @click="showModal = true" />
        </div>
        <div class="product item-1-5">
          <img src="@/assets/biz.svg" @click="showModal = true" />
        </div>
        <div class="product item-1-6">
          <img src="@/assets/geekbrains.png" @click="showModal = true" /><img
            src="@/assets/Skillbox.png"
            @click="showModal = true"
          /><img src="@/assets/skillfactory.png" @click="showModal = true" />
        </div>
        <div class="product item-1-7">
          <img src="@/assets/aliexpress.png" @click="showModal = true" />
        </div>
        <div class="product item-1-8">
          <img src="@/assets/mediaproektyi.png" @click="showModal = true" /><img
            src="@/assets/poisk.png"
            @click="showModal = true"
          />
        </div>
        <div class="product item-1-9">
          <img src="@/assets/ICQNew.png" @click="showModal = true" />
        </div>
        <div class="product item-1-10">
          <img src="@/assets/boom.png" @click="showModal = true" />
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
        <div class="second_orbit">
          <div class="product item-2-1">
            <img
              class="non-block"
              src="@/assets/marusya.png"
              @click="showModal = true"
            /><img
              class="non-block"
              src="@/assets/vision.png"
              @click="showModal = true"
            /><img src="@/assets/predict.png" @click="showModal = true" />
          </div>
          <div class="product item-2-2">
            <img src="@/assets/tarantool.png" @click="showModal = true" />
          </div>
          <div class="product item-2-3">
            <img src="@/assets/mytarget.png" @click="showModal = true" />
          </div>
          <div class="product item-2-4">
            <img src="@/assets/MCS.png" @click="showModal = true" /><img
              src="@/assets/cloud.png"
              @click="showModal = true"
            />
          </div>
          <div class="product item-2-5">
            <img src="@/assets/vkpay.png" @click="showModal = true" />
          </div>
          <!-- секторы второй орбиты -->
          <div class="sector sector-2-1"></div>
          <div class="sector sector-2-2"></div>
          <div class="sector sector-2-3"></div>
          <div class="sector sector-2-4"></div>
          <div class="sector sector-2-5"></div>
          <div class="third_orbit">
            <!-- третья орбита -->
            <div v-for="(product, idx) in products" :key="idx">
              <div :class="`product item-3-${idx + 1}`">
                <img
                  class="image-product"
                  :src="`/static/${product.image}`"
                  @click="productInfo(product)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-link class="nav-link" to="/login">Login</router-link>
    </div>
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
</script>
<style lang="scss">
$icon_width: 4vw;
$icon_height: 2vw;

$diameter_first_orbit: 50vw; //диаметр первой (внешней) орбиты
$diameter_second_orbit: 30vw; //диаметр второй орбиты
$diameter_third_orbit: 15vw; //диаметр третьей орбиты (ядро)

$diameter_first_products: $diameter_first_orbit / 2.5; //диаметр вращения продуктов первой (внешней) орбиты
$diameter_second_products: $diameter_second_orbit / 2.75; //диаметр вращения продуктов второй орбиты
$diameter_third_products: $diameter_third_orbit / 3.5; //диаметр вращения продуктов третьей орбиты (ядро)


$number_of_products_first_orbit: 10; //кол-во продуктов на первой орбите
$number_of_products_second_orbit: 5; //кол-во продуктов на второй орбите
$number_of_products_third_orbit: 4; //кол-во продуктов на третьей орбите

.home {
  position: relative;
  transition: all 0.1s ease;
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

img {
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
  left: calc(50% - 1.5vw);
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
    transition: 0.5s;
  }
  .sector-1-#{$i}:nth-child(odd) {
    background: #eeeeee;
  }
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
    border: 2px solid #f3f7f4;
    animation: rotation-2-#{$i} 20s infinite linear;
    transition: 0.5s;
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
</style>