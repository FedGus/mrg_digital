<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~@/assets/fonts/ProximaNova/stylesheet.css";
@import "~@/assets/fonts/Prata/stylesheet.css";
@import "@/styles/colors.scss";
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Proxima Nova Rg", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  line-height: 1;
}
h1 {
  color: $white;
  font-size: 8vw;
  font-family: "Proxima Nova Semibold";
  padding: 3vw 0 0 0;
}

h2 {
  font-size: 3vw;
  padding: 66px 0 2vw 0;
}

h3 {
  padding: 2vw 0;
}

h5 {
  color: $white;
  font-size: 1.75vw;
  padding-left: 0.5vw;
}

.btn {
  font-family: "Proxima Nova Rg";
  font-size: 17px;
  font-weight: bold;
  background: $primary_red;
  border-radius: 8px;
  color: #ffffff;
  box-sizing: border-box;
  padding: 5px 20px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.04);
  text-align: center;
  position: relative;
}

.btn:hover {
  background: #eb0030;
  color: #ffffff;
}

p {
  text-align: left;
  font-size: 1.5vw;
  line-height: 1.5;
}

span {
  font-family: "Proxima Nova Rg";
  font-size: 1vw;
  margin-bottom: 0.5vw;
}

header,
footer {
  background: $primary_red;
  height: 5vw;
  padding: 0 99px;
  display: flex;
  justify-content: space-between;
}
footer a {
  text-decoration: underline;
}

.logo {
  width: 15vw;
}

nav {
  padding: 1.5vw;
  a {
    color: $white;
    font-size: 1vw;
    &.router-link-exact-active {
      color: #42b983;
    }
  }

  li {
    display: inline-block;
  }
}

section {
  text-align: left;
  padding: 0 99px;
}

.link {
  color: $black;
  text-decoration: none;
  border-bottom: 4px solid $primary_red;
}
.link:hover {
  text-decoration: none;
}

@media screen and (max-device-width: 420px) {
  header,
  footer,
  section {
    padding: 0 7vw !important;
  }
}
</style>
