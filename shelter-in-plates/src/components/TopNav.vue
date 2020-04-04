<template>
    <div>
        <!-- Main Header -->
        <header id="header" class="light">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="module module-logo dark">
                            <img src="/img/logo-light.svg" alt="" width="88" >
                        </div>
                    </div>
                    <div class="col-md-7">
                        <nav class="module module-navigation left mr-4">
                            <ul id="nav-main" class="nav nav-main">
                                <li :class="{ selected: currentRouteName === 'home' }">
                                    <router-link :to="{ name: 'home' }" tag="a">Home</router-link>
                                </li>
                                <li :class="{ selected: currentRouteName === 'learn_more' }">
                                    <router-link :to="{ name: 'learn_more' }" tag="a">
                                        Restaurants: Learn More
                                    </router-link>
                                </li>
                                <li :class="{ selected: currentRouteName === 'help_out' }">
                                    <router-link :to="{ name: 'help_out' }" tag="a">
                                        Diners: Help Out
                                    </router-link>
                                </li>
                                <li :class="{ selected: currentRouteName === 'sample' }">
                                    <router-link :to="{ name: 'sample' }" tag="a">
                                        Sample
                                    </router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-md-2">
                        <div class="module right" v-if="currentRouteName !== 'confirmation'">
                            <a href="https://shelter-in-plates.typeform.com/to/EENdAG" target="_blank" class="btn btn-outline-secondary"><span>Join</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Mobile Header -->
        <header id="header-mobile" class="light">
            <div class="module module-nav-toggle">
                <a href="#" id="nav-toggle" data-toggle="panel-mobile"><span></span><span></span><span></span><span></span></a>
            </div>

            <div class="module module-logo">
                <img src="/img/logo-horizontal-dark.svg" alt="">
            </div>
            <a v-if="currentRouteName !== 'confirmation'" href="https://shelter-in-plates.typeform.com/to/EENdAG" style='line-height: 26px; top: 3px;' class="module-cart btn btn-outline-secondary"><span>Join</span></a>
        </header>

            <!-- Panel Mobile -->
        <nav id="panel-mobile">
            <div class="module module-logo bg-dark dark">
                <a href="#">
                    <img src="/img/logo-light.svg" alt="" width="88">
                </a>
                <button class="close" data-toggle="panel-mobile"><i class="ti ti-close"></i></button>
            </div>
            <nav class="module module-navigation"></nav>
            <div class="module module-social">
                <h6 class="text-sm mb-3">Follow Us!</h6>
                <a href="#" class="icon icon-social icon-circle icon-sm icon-facebook"><i class="fa fa-facebook"></i></a>
                <a href="#" class="icon icon-social icon-circle icon-sm icon-google"><i class="fa fa-google"></i></a>
                <a href="#" class="icon icon-social icon-circle icon-sm icon-twitter"><i class="fa fa-twitter"></i></a>
                <a href="#" class="icon icon-social icon-circle icon-sm icon-youtube"><i class="fa fa-youtube"></i></a>
                <a href="#" class="icon icon-social icon-circle icon-sm icon-instagram"><i class="fa fa-instagram"></i></a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    computed: {
        currentRouteName() {
            return this.$route.name
        }
    }
}
</script>
<style lang="scss">

</style>