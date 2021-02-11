<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">
          </slot>
          
          <slot name="logo-header"><button class="modal-default-button" @click="$emit('close')">
            x
          </button></slot>
        </div>

        <div class="modal-body">
          <slot name="body"></slot>
        </div>

        <div class="modal-footer">
          <slot name="footer"> </slot>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~@/assets/fonts/ProximaNova/stylesheet.css";
@import "@/styles/colors.scss";
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.5s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 45vw;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

@media screen and (max-width: 420px) {
  .modal-container {
    width: 80vw;
    font-size: 75%;
  }
  h2 {
    font-size: 20px;
  }
  .btn {
    font-size: 75%;
  }
}

.modal-footer {
  border: 0;
}

.modal-header {
  text-align: left;
}
.modal-header h2 {
  font-family: "Proxima Nova Rg", Helvetica, Arial, sans-serif;
  padding: 0;
  color: $primary_red;
}

h4 {
  color: $gray;
}

.logo-header {
  float: right;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-active {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}
</style>