<template>
    <footer id="footer" class="bg-dark dark">
        <div class="container">
            <!-- Footer 1st Row -->
            <div class="row align-items-center pt-2 pb-2">
                <div class="col-lg-2 text-center text-lg-left pt-2 pb-2">
                    <router-link :to="{ name: 'home'}" tag="a">
                        <img src="/img/logo-light.svg" alt="" width="40">
                    </router-link>
                </div>
                <div class="col-lg-5 col-md-12 text-center text-lg-right pt-2 pb-2">
                    <div>Shelter-In-Plates <span class='chicago-flag-blue'>&#x235F;</span> Feed the Front Line</div>
                </div>
                <div class="col-lg-5 col-md-12 text-center text-lg-right pt-2 pb-2">
                    <div>Made with ❤️ in Chicago</div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
.chicago-flag-blue {
  color: #B3DDF2;
}
</style>
