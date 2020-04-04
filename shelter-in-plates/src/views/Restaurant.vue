<template>
    <div id="content">
        <!-- Page Title -->
        <div class="page-title bg-dark dark">
            <div class="bg-image bg-parallax"><img :src="restaurant.headerImageUrl" alt=""></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 push-lg-4">
                        <h1 class="mb-0">{{ restaurant.name }}</h1>
                        <h4 class="text-muted mb-0">Join {{ restaurant.name }} in Helping Hospital Workers Fight This Pandemic</h4>
                    </div>
                </div>
            </div>
        </div>

        <!-- Page Content -->
        <div class="page-content">
            <div class="container">
                <div class="row no-gutters">
                    <div class="col-md-10 push-md-1" role="tablist">
                        <!-- Menu Category / Burgers -->
                        <div id="Burgers" class="menu-category">
                            <div class="restaurant-page-message">
                                <p>
                                The people working in Emergency Rooms and ICUs in Chicago - and all over the world - are our heroes!
                                </p>
                                <p>
                                Imagine that instead of “distancing” right now, you were leaving home each day to interact with hundreds of people who all have in common the fact that they are sick. The doctors, nurses, techs and administrators do their work with care, with professionalism, and with selflessness. But they’re not immune to anxiety and they certainly feel overwhelmed during intense times like these.
                                </p>
                                <p>
                                Through your generosity, we would like to nourish and support these teams, to show them how appreciated they are! ❤️
                                </p>
                                <p>
                                Every meal you purchase for a healthcare worker will be prepared at Osea and delivered to an Emergency Department in Chicago.
                                </p>
                            </div>

                            <div id="menuBurgersContent" class="menu-category-content padded">
                                <div class="row gutters-sm">
                                    <div class="col-lg-4 col-6" v-for="item in restaurant.menuItems" :key="item.name">
                                        <!-- Menu Item -->
                                        <div class="menu-item menu-grid-item" >
                                            <img class="mb-4" :src="item.imageUrl" alt="">
                                            <h6 class="mb-2">{{ item.name }}</h6>
                                            <span class="text-muted text-sm">{{ item.description }}</span>
                                            <div class="row align-items-center mt-4">
                                                <div class="col-sm-6"><span class="text-md mr-4">{{ item.price | currency }} <span class="text-muted">{{ item.type === 'once' ? 'one time' : 'weekly' }}</span></span></div>
                                                <buy-modal :item="item" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="restaurant-page-message">

                                <p>
When making your purchase, please include a message for the hospital staff, your name, and what part of town you are from. We hope to provide these people with the sense that the whole city is behind them.
                                </p>
                                <p>
                                  With every purchase of a meal, we will follow up and let you know what hospital your meal was delivered to and keep you up to date with our journey.
                                </p>
                                <p>
                                  For all weekly meal purchase subscriptions:
                                  <ul>
                                    <li>you can cancel at any time</li>
                                    <li>we will notify you 2 days in advance of your next charge in case you are unable to continue</li>
                                    <li>we will also keep you up to date with when and where your meals are delivered</li>
                                  </ul>
                                </p>
                                <h6>{{ restaurant.owner }}</h6>
                                <img :src="restaurant.signImageUrl" alt="" class="mb-5">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            restaurant: {
                headerImageUrl:"img/photos/bg-croissant.jpg",
                name: "Osea Cafe",
                slug: "sample",
                message: "The people working in Emergency Rooms and ICUs in Chicago - and all over the world - are our heroes!\n\n\nImagine that instead of “distancing” right now, you were leaving home each day to interact with hundreds of people who all have in common the fact that they are sick. The doctors, nurses, techs and administrators do their work with care, with professionalism, and with selflessness. But they’re not immune to anxiety and they certainly feel overwhelmed during intense times like these.\n\n\nThrough your generosity, we would like to nourish and support these teams, to show them how appreciated they are! ❤️\n\n\nEvery meal you purchase for a healthcare worker will be prepared at Osea and delivered to an Emergency Department in Chicago.",
                menuItems: [{
                    imageUrl: "img/products/product-burger.jpg",
                    name: "Buy a meal for a healthcare worker: Once",
                    type: "once",
                    description: "We'll deliver a healthy, nourishing meal to hospital healthcare worker in Chicago on your behalf.",
                    price: 11.00,
                    stripeId: ""
                },{
                    imageUrl: "img/products/product-chicken-burger.jpg",
                    name: "Buy a meal for a healthcare worker: Weekly",
                    type: "weekly",
                    description: "We'll deliver a healthy, nourishing meal to hospital healthcare worker in Chicago on your behalf.",
                    price: 10.00,
                    stripeId: ""
                }],
                bottomMessage: "",
                owner: "James Bascharon, Chef/Owner",
                signImageUrl: "img/svg/sign.svg"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.mr-4 {
    margin-right: 0px !important;
}
</style>