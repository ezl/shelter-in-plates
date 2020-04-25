<template>
    <div>
        <!-- Main Header -->
        <header id="header" class="light">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="module module-logo dark">
                            <img src="/img/logo-light-fulltext.svg" alt="" width="88" >
                        </div>
                    </div>
                    <div class="col-md-6">
                        <nav class="module module-navigation left mr-4">
                            <ul id="nav-main" class="nav nav-main">
                                <li v-for="link in navLinks" :key="link.text" :class="{ selected: currentRouteName === link.value }">
                                    <router-link :to="{ name: link.value }" tag="a">{{ link.text }}</router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-md-3">
                        <div class="module right" >
                            <router-link v-if="displayBuyButton" :to="{ name: 'restaurant', params: {slug: 'donate'} }" tag="a" class="btn btn-outline-secondary">
                              <span>Donate</span>
                            </router-link>
                            <router-link v-if="displayVolunteerButton" :to="{ name: 'volunteer' }" tag="a" class="btn btn-outline-secondary">
                              <span>Volunteer</span>
                            </router-link>
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
                <img src="/img/logo-horizontal-dark-fulltext-shorter.svg" alt="">
            </div>
            <div class="module-cart">
                <router-link v-if="displayBuyButton" :to="{ name: 'restaurant', params: {slug: 'donate'} }" tag="a" style='line-height: 26px; top: 3px;' class="btn btn-outline-secondary">
                  <span>Donate</span>
                </router-link>
                <router-link v-if="displayVolunteerButton" :to="{ name: 'volunteer' }" tag="a" style='line-height: 26px; top: 3px;' class="btn btn-outline-secondary">
                  <span>Volunteer</span>
                </router-link>
            </div>
            <!--
            <a v-if="displayBuyButton" href="#" @click="openBuyModal()" style='line-height: 26px; top: 3px;' class="module-cart btn btn-outline-secondary"><span>Buy</span></a>
            <router-link v-if="displayVolunteerButton" :to="{ name: 'volunteer' }" tag="a" style='line-height: 26px; top: 3px;' class="module-cart btn btn-outline-secondary">
                <span>Volunteer</span>
            </router-link>
            -->
        </header>

            <!-- Panel Mobile -->
        <nav id="panel-mobile">
            <div class="module module-logo bg-dark dark">
                <a href="#">
                    <img src="/img/logo-light-fulltext.svg" alt="" width="88">
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
        displayBuyButton() {
            return !(this.currentRouteName === 'restaurant')
        },
        displayVolunteerButton() {
            return true
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
            }]
        }
    },
    methods: {
        openBuyModal() {
            this.$root.$emit('open-buy-modal', 'weekly');
        }
    }
}
</script>
<style lang="scss">
.btn-outline-secondary {
    margin-left: 5px;
}
#header-mobile .module-logo {
    /* override default of centering mobile logo b/c donate and volunteer buttons overlap */
    text-align: left;
}

</style>
