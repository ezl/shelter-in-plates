<template>
  <div id="app">
    <top-nav />
    <router-view/>
    <app-footer />
  </div>
</template>
<script>
export default {
  // Load core.js (animations and interactions js) after
  // Vue instance has loaded and mounted DOM elements
  mounted() {
    let script = document.createElement('script')
    script.src = `${window.location.origin}/js/core.js`
    script.onload = () => {
      window.Core.Component.tooltip();
    }
    document.head.appendChild(script)
  }
}
</script>
<style lang="scss">

</style>
