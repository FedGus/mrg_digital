<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~@/assets/fonts/ProximaNova/stylesheet.css";
@import "~@/assets/fonts/Prata/stylesheet.css";

#app {
  font-family: 'Proxima Nova Rg', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h3 {
  font-family: 'Prata', Helvetica, Arial, sans-serif;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.btn {
    font-family: 'Proxima Nova Rg';
    font-size: 17px;
    font-weight: bold;
    background: #fc2c38;
    border-radius: 8px;
    color: #FFFFFF;
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
  color: #FFFFFF;
}

p {
  text-align: left;
}
</style>
