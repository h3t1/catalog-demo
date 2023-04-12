<template>
  <div class="root">
      <banner-component />
      <top-menu-component />
      <div class="main-content">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import BannerComponent from '@/components/header/BannerComponent.vue';
import TopMenuComponent from '@/components/header/TopMenuComponent.vue'

export default {
  name: 'MainLayout',
  components : {
    BannerComponent,
    TopMenuComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root {
  border: 1px solid rgb(224, 224, 224);
  box-shadow: rgb(238, 238, 238) 0px 0px 3px 1px;
  max-width: 500px;
  margin: 0px auto;
  min-height: 100vh;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  max-height: none;
}
</style>
