<template>
    <div class="col-sm-6 text-sm-right mt-2 mt-sm-0">
        <!-- Modal / Product -->
        <div v-show="modalToggled" class="modal fade show" id="productModal" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header modal-header-lg dark bg-dark">
                        <div class="bg-image"><img src="/img/photos/bg.png" alt=""></div>
                        <h4 class="modal-title">Buy A Meal For A Healthcare Hero</h4>
                        <button type="button" class="close" aria-label="Close" @click="toggleModal()"><i class="ti ti-close"></i></button>
                    </div>
                    <div class="modal-product-details">
                        <div class="row align-items-center">
                            <div class="col-md-12">
                                <h6 class="mb-1" id="mealFrequency">{{ item.type === 'once' ? 'One Time' : 'One Meal Every Week' }}</h6>
                                <span class="text-muted">{{ item.description }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body panel-details-container">
                        <!-- Panel Details / Size -->
                        <div class="panel-details">
                            <h5 class="panel-details-title">
                                <i class="ti ti-marker-alt"></i>
                                <span>Your Order</span>
                            </h5>
                            <div id="panelDetailsSize">
                                <div class="panel-details-content">
                                    <div class="form-group row">
                                        <label for="qty" class="col-sm-3 col-form-label">Quantity</label>
                                        <div class="col-sm-9">
                                            <input name="qty" type="number" value="1" min="1" class="form-control" required v-model.number="quantity">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Panel Details / Other -->
                        <div class="panel-details">
                            <h5 class="panel-details-title">
                                <i class="ti ti-thought"></i>
                                <span>Leave A Personalized Note</span>
                            </h5>
                            <div id="panelDetailsOther">
                                <div class="panel-details-content">
                                    <div class="form-group">
                                        <label class="col-form-label">Your name &amp; what part of town you are from</label>
                                        <input name="nameAndNeighborhood" type="text" class="form-control" placeholder="Eric, Ukranian Village" v-model="from">
                                    </div>
                                    <div class="form-group">
                                        <label>Please leave a message for our healthcare workers!</label>
                                        <textarea name="message" id="message" cols="30" rows="3" class="form-control" v-model="message"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                            id="checkout-button-sku_H1NmqIuXOTHj4k"
                            type="button"
                            class="modal-btn btn btn-secondary btn-block btn-lg"
                            @click="checkOut()"
                            data-dismiss="modal">
                        <span>Check Out</span>
                        <p class="text-muted small mb-0 mt-2">
                        <i class="ti ti-lock"></i> Secure credit card processing with Stripe</p>
                    </button>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade show" v-if="modalToggled"></div>

        <div class=" buy-button">
            <button id='buySingleMealButton' class="btn btn-outline-secondary btn-sm" @click="toggleModal()">
                <span>Buy</span>
            </button>
        </div>
    </div>
</template>
<script>
const stripe = Stripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY);

export default {
    data() {
        return {
            modalToggled: false,
            quantity: 1,
            from: "",
            message: ""
        }
    },
    props: {
        restaurant: {
            type: Object,
            required: true
        },
        item: {
            type: Object,
            required: true
        }
    },
    created() {
        this.$root.$on('open-buy-modal', this.toggleModal);
    },
    beforeDestroy() {
        this.$root.$off('open-buy-modal', this.toggleModal);
    },
    methods: {
        toggleModal (type) {
            // Type is passed by TopNav $emit, currently set as "weekly"
            if ((type && this.item.type === type) || !type ) {
                this.modalToggled = !this.modalToggled
            } 
        },
        savePersonalMessage() {
            const d = new Date()
            const timestamp = d.toDateString() + " " + d.toTimeString()
            const data = {
              'timestamp': timestamp,
              'restaurant': this.restaurant.name,
              'from': this.from,
              'message': this.message
            }

            // Saves to https://docs.google.com/spreadsheets/d/1KZVZqORT7hjG-I685c5ZbQV8ZQyqMjoWOESwhQ-T3og/edit#gid=0
            const googleSheetUrl = 'https://script.google.com/macros/s/AKfycbzelPozQBWeoeEB27DJgIgLbv-h1y0ap4tU8jSpG1DI5yorZoU/exec'
            const querystring = Object.entries(data).map(([key, val]) => `${key}=${val}`).join('&')
            const url = googleSheetUrl + "?" + querystring

            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send(null);
        },
        clearEntryRestaurant() {
            window.sessionStorage.clear()
        },
        checkOut() {
            this.clearEntryRestaurant()
            this.savePersonalMessage()

            const path = this.$router.resolve({
                    name: 'confirmation',
                    params: {slug: this.restaurant.slug }
                }).route.fullPath

            const successUrl = `${window.location.origin}${path}`

            const data = {
                successUrl: successUrl,
                cancelUrl: window.location.href,
                //successUrl: "https://www.shelter-in-plates.com/sample-page.html",
                //cancelUrl: "https://www.shelter-in-plates.com/confirmation.html"
            }

            if (this.item.type === 'once') {
                data.items = [{sku: this.item.stripeProductId, quantity: this.quantity}]
            } else {
                data.items = [{plan: this.item.stripeProductId, quantity: this.quantity}]
            }

            stripe.redirectToCheckout(data)
                .then((result) => {
                    if (result.error) {
                    // If `redirectToCheckout` fails due to a browser or network
                    // error, display the localized error message to your customer.
                    var displayError = document.getElementById('error-message');
                    displayError.textContent = result.error.message;
                    }
                });
        }
    }
}
</script>
<style lang="scss" scoped>
.modal {
    display: block;
    overflow-x: hidden;
    overflow-y: auto;

    .modal-product-details {
        .row {
            .col-md-12 {
                text-align: left;
            }
        }
    }
    .panel-details-container {
        .panel-details-title {
            text-align: left;
        }
        .panel-details-content {
            text-align: left;
        }
        i {
            margin-right: 7px;
        }
    }
    
}

.buy-button {
    float: right;
}
</style>
