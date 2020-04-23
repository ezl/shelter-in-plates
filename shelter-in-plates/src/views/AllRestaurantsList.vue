<template>
    <div id="content">
        <!-- Section -->
        <section class="section bg-light">
            <div class="container">
                <div class="row mb-4">
                    <div class="col-lg-7 push-lg-3">
                        <div class="text-center mb-2">
                            <h1>Participating Restaurants</h1>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-7 push-lg-3">
                        <h2>Chicago</h2>
                        <router-link :to="{ name: 'restaurant', params: { slug: 'irazu' }}" tag="a"><h5>Irazú</h5></router-link>
                        <p class="restaurant-description">Costa Rican comfort food - This 30-year old neighborhood favorite is in Bucktown, where the Cerdas-Salazar family has been serving the community since 1990.</p>
                        <div class="float-right">
                            <span class="icon icon-sm"><i class="fa fa-facebook"></i></span>
                            <span class="icon icon-sm"><i class="fa fa-instagram"></i></span>
                            <span><a class="restaurant-link" href="http://irazuchicago.com/" target="_blank">View restaurant website</a></span>
                        </div>
                        <p>
                            <a href="/r/irazu/" style='line-height: 26px; top: 3px;' class="module-cart btn btn-outline-primary"><span>BUY</span></a>
                        </p>

                        <router-link :to="{ name: 'restaurant', params: { slug: 'spoke-and-bird' }}" tag="a"><h5>Spoke & Bird</h5></router-link>
                        <p class="restaurant-description">This friendly, neighborhood restaurant in the South Loop has an amazing outdoor patio, perfect for weekend summer lounging, craft beers, and amazingly bakes their own bread and pastries and has upscale, but accessible food featuring high quality ingredients</p>

                        <div class="float-right">
                            <span class="icon icon-sm"><i class="fa fa-facebook"></i></span>
                            <span class="icon icon-sm"><i class="fa fa-instagram"></i></span>
                            <span><a class="restaurant-link" href="https://www.spokeandbird.com/" target="_blank">View restaurant website</a></span>
                        </div>
                        <p>
                            <a href="/r/spoke-and-bird/" style='line-height: 26px; top: 3px;' class="module-cart btn btn-outline-primary"><span>BUY</span></a>
                        </p>

                        <router-link :to="{ name: 'restaurant', params: { slug: 'rooh' }}" tag="a"><h5>Rooh</h5></router-link>
                        <p class="restaurant-description">ROOH is modern Indian cuisine, featured in the Michelin Guide 2020, and situated in the hot restaurant row of Chicago's West Loop.</p>
                        <div class="float-right">
                            <span class="icon icon-sm"><i class="fa fa-facebook"></i></span>
                            <span class="icon icon-sm"><i class="fa fa-instagram"></i></span>
                            <span><a class="restaurant-link" href="https://www.roohchicago.com/" target="_blank">View restaurant website</a></span>
                        </div>
                        <p>
                            <a href="/r/rooh/" style='line-height: 26px; top: 3px;' class="module-cart btn btn-outline-primary"><span>BUY</span></a>
                        </p>

                        <h2>New York City</h2>
                        <h5>Blank Slate</h5>
                        <p>Coming soon...</p>

                        <h2>Denver / Boulder</h2>
                        <h5>Oak</h5>
                        <p>Coming soon...</p>

                        <h5>Denver Brider</h5>
                        <p>Coming soon...</p>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>

export default {
}
</script>
<style lang="scss" scoped>
h2 {
  font-size: 2.25rem;
  font-weight: 400;
}
h3 {
  font-size: 1.5rem;
  font-weight: 400;
}
li, p {
  color: #777 !important;
}

.module-social > * {
  margin: 1rem 2rem;
}

a.link {
    font-weight: 500;
    text-decoration: underline;
}
a.icon {
    cursor: pointer;

    &.icon-circle {
        color: white;

        &:hover {
          background-color: #aaa;
        }
    }

    &.icon-instagram {
        background-color: #4f86ac;
    }
    &.icon-twitter {
        background-color: #3aa8db;
    }
    &.icon-facebook {
        background-color: #3b5998;
    }
}
h2 {
  text-decoration: underline;
}
.restaurant-description {
  margin-bottom: 1rem;
}

.restaurant-link {
  font-style: italic;
}
</style>
