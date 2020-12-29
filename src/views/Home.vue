<template>
  <div class="home">
    <div class="first_orbit">
      <!-- первая орбита -->
      <div class="product item-1-1"><img src="@/assets/delivery.png" /></div>
      <div class="product item-1-2"><img src="@/assets/city_mobil.png" /></div>
      <div class="product item-1-3"><img src="@/assets/youla.png" /></div>
      <div class="product item-1-4"><img src="@/assets/Esforce.png" /></div>
      <div class="product item-1-5"><img src="@/assets/biz.svg" /></div>
      <div class="product item-1-6"><img src="@/assets/geekbrains.png" /></div>
      <div class="product item-1-7"><img src="@/assets/aliexpress.png" /></div>
      <div class="product item-1-8">
        <img src="@/assets/mediaproektyi.png" />
      </div>
      <div class="product item-1-9"><img src="@/assets/ICQNew.png" /></div>
      <div class="product item-1-10"><img src="@/assets/boom.png" /></div>
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
        <div class="product item-2-1"><img src="@/assets/marusya.png" /></div>
        <div class="product item-2-2"><img src="@/assets/tarantool.png" /></div>
        <div class="product item-2-3"><img src="@/assets/mytarget.png" /></div>
        <div class="product item-2-4"><img src="@/assets/MCS.png" /></div>
        <div class="product item-2-5"><img src="@/assets/vkpay.png" /></div>
        <!-- секторы второй орбиты -->
        <div class="sector sector-2-1"></div>
        <div class="sector sector-2-2"></div>
        <div class="sector sector-2-3"></div>
        <div class="sector sector-2-4"></div>
        <div class="sector sector-2-5"></div>
        <div class="third_orbit">
          <!-- третья орбита -->
          <div class="product item-3-1"><img src="@/assets/vk.png" /></div>
          <div class="product item-3-2"><img src="@/assets/ok.png" /></div>
          <div class="product item-3-3"><img src="@/assets/mail.png" /></div>
          <div class="product item-3-4"><img src="@/assets/mygames.png" /></div>
        </div>
      </div>
    </div>
    <router-link class="nav-link" to="/login">Login</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="scss">
$icon_width: 4vw;

$diameter_first_orbit: 20vw;
$diameter_second_orbit: 11vw;
$diameter_third_orbit: 4vw;

$number_of_products_first_orbit: 10; //кол-во продуктов на первой орбите
$number_of_products_second_orbit: 5; //кол-во продуктов на второй орбите
$number_of_products_third_orbit: 4; //кол-во продуктов на третьей орбите

.home {
  position: relative;
}

/*
  стили орбит
*/

.first_orbit {
  width: 50vw;
  height: 50vw;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto;
  background: #f3f7f4;
  box-shadow: 0px 0px 40px #e4e4e4;
}
.second_orbit {
  width: 30vw;
  height: 30vw;
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
  width: 15vw;
  height: 15vw;
  position: relative;
  top: calc(25%);
  z-index: 300;
  border-radius: 50%;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 0px 40px #e4e4e4;
}

img {
  width: $icon_width;
  transition: 1s;
}

img:hover {
  width: 5vw;
  transition: 1s;
}

.product {
  position: absolute;
  left: calc(50% - 2vw);
  top: calc(50% - 2vw);
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
        translateX($diameter_first_orbit)
        rotate(-(360deg / $number_of_products_first_orbit) * $i);
    }
    to {
      transform: rotate(
          360deg + ((360deg / $number_of_products_first_orbit) * $i)
        )
        translateX($diameter_first_orbit)
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
        translateX($diameter_second_orbit)
        rotate(-(360deg / $number_of_products_second_orbit) * $i);
    }
    to {
      transform: rotate(
          360deg + ((360deg / $number_of_products_second_orbit) * $i)
        )
        translateX($diameter_second_orbit)
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
        translateX($diameter_third_orbit)
        rotate(-(360deg / $number_of_products_third_orbit) * $i);
    }
    to {
      transform: rotate(
          360deg + ((360deg / $number_of_products_third_orbit) * $i)
        )
        translateX($diameter_third_orbit)
        rotate(-360deg - ((360deg / $number_of_products_third_orbit) * $i));
    }
  }
}
</style>