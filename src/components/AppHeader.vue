<script>
import { RouterLink } from 'vue-router';
import { store} from "../store.js";

export default{
    name:'Appheader',
   data(){
    return{
      store
    }
   }
}
</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Projects</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="link in store. linksRoute">
          <router-link  class="nav-link active" aria-current="page" :to="{ name:link.route}" >{{ link.label }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<style scoped lang="scss">

</style>