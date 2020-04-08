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
    // TODO: Refactor this out to env var
    const baseUrl = "https://www.shelter-in-plates.com"
    script.src = `${baseUrl}/js/core.js`
    script.onload = () => {
      window.Core.Component.tooltip();
    }
    document.head.appendChild(script)
  }
}
</script>
<style lang="scss">

</style>
