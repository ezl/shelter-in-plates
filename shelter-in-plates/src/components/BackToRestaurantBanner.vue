<template>
    <div id="banner"
      v-if="entryRestaurantPageIsSet && !userIsOnRestaurantPage">
      <router-link :to="path" tag="a">
          <span>Buy A Meal From {{ name }}</span>
      </router-link>
    </div>
</template>
<script>
export default {
  computed: {
    entryRestaurantPageIsSet() {
      return !(window.sessionStorage.entryRestaurantPath === undefined)
    },
    userIsOnRestaurantPage() {
      return this.$router.currentRoute.name === 'restaurant'
    },
    name() {
      return window.sessionStorage.entryRestaurantName
    },
    path() {
      return window.sessionStorage.entryRestaurantPath
    }
  }
}
</script>

<style scoped lang="scss">
#banner {
    height: 5em;
    background-color: #ffcf10;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 2px solid white;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      font-size: 1.5em;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
}
</style>

