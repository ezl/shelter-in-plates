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
                                <li v-for="link in navLinks" :key="link.text" :class="{ selected: currentRouteName === link.value }">
                                    <router-link :to="{ name: link.value }" tag="a">{{ link.text }}</router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-md-2">
                        <div class="module right" v-if="displayJoinButton">
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
            <a v-if="displayJoinButton" href="https://shelter-in-plates.typeform.com/to/EENdAG" style='line-height: 26px; top: 3px;' class="module-cart btn btn-outline-secondary"><span>Join</span></a>
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
        </nav>
    </div>
</template>

<script>
export default {
    computed: {
        currentRouteName() {
            return this.$route.name
        },
        displayJoinButton() {
            return !['confirmation', 'restaurant'].includes(this.currentRouteName)
        },
        navLinks() {
            if(this.currentRouteName === 'restaurant') {
                return this.defaultLinks.filter(link => link.value === 'home')
            } else {
                return this.defaultLinks
            }
        }
    },
    data () {
        return {
            defaultLinks: [{
                text: "Home",
                value: "home"
            },{
                text: "Restaurants: Learn More",
                value: "learn_more"
            },{
                text: "Diners: Help Out",
                value: "help_out"
            }, {
                text: "Sample",
                value: "sample"
            }]
        }
    }
}
</script>
<style lang="scss">

</style>