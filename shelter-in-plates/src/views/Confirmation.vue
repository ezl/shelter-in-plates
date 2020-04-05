<template>
    <div id="content">
        <!-- Section -->
        <section class="section bg-light">
            <div class="container">
                <div class="row mb-4">
                    <div class="col-lg-7 push-lg-3">
                        <div class="text-center mb-2">
                            <span class="icon icon-md icon-danger"><i class="ti ti-heart"></i></span>
                            <h2>Thank you for your support!</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-7 push-lg-3">
                        <h3>Please Share Us On Social Media</h3>
                        <p>Ask your friends to join you in supporting frontline healthcare workers &amp; independent restaurants.</p>
                        <p>This makes a <strong>huge</strong> difference!</p>
                        <div class="row mb-4">
                            <div class="module-social m-auto">
                                <a href="#" class="icon icon-social icon-circle icon-sm icon-facebook"><i class="fa fa-facebook"></i></a>
                                <a href="#" class="icon icon-social icon-circle icon-sm icon-twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#" class="icon icon-social icon-circle icon-sm icon-instagram"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                        <h3>What's Next</h3>
                        <p>Your meal will be prepared and delivered to a local hospital in the coming days days.</p>
                        <p>After the meal is delivered, we will send you confirmation to let you know when and where it was delivered.</p>
                        <p>If you have purchased a subscription, then you will be notified every time a meal is delivered. If you want to cancel at any time, please just email us at admin@shelter-in-plates.com.</p>

                        <!-- 
                        <h3>How can you help?</h3>
                        <p>Please share us with your friends on social media or ask others to join you in supporting restaurants and healthcare workers.</p>
                        <p>Here are some sample messages you can copy &amp; paste:</p>
                        <ul>
                            <li>One of my favorite local restaurants, Irazu, is selling meals to feed frontline healthcare workers fighting Coronavirus. Join me in supporting them at https://www.shelter-in-plates.com/r/irazu/</li>
                            <li>Join me and Irazu in feeding the front line: Join me in supporting independent restaurants and healthcare workers fighting covid-19! https://www.shelter-in-plates.com/r/irazu/</li>
                        </ul>
                        -->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            restaurant: {
                headerImageUrl:"/img/restaurants/irazu/irazu-background.png",
                name: "Irazú",
                slug: "irazu",
                link: "http://irazuchicago.com/",
                logoUrl: "/img/restaurants/irazu/logo.png",
            },
            url: 'https://www.shelter-in-plates.com/r/irazu/' // how can I make router reverse resolve the full url?
        }
    }
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

a.icon.icon-circle.icon-instagram {
  background-color: #4f86ac;
  color: white;
}
a.icon.icon-circle.icon-twitter {
  background-color: #3aa8db;
  color: white;
}
a.icon.icon-circle.icon-facebook {
  background-color: #3b5998;
  color: white;
}
a.icon.icon-circle:hover {
  background-color: #aaa;
}
</style>
