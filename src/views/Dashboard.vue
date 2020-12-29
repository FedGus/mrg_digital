<template>
  <div class="row">
    <div class="col-12">
      <h1>Dashboard</h1>
      <a class="nav-link" @click="signOut">Выйти</a>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "Dashboard",
  mounted() {
    this.setupFirebase();
  },
  data() {},
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
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
  },
};
</script>
<style>

</style>
