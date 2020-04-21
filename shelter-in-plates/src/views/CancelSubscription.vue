<template>
    <div id="content">
        <!-- Section -->
        <section class="section bg-light">
            <div class="container">
                <div class="row mb-4">
                    <div class="col-lg-7 push-lg-3">
                        <div class="text-center mb-2">
                            <span class="icon icon-md icon-danger"><i class="ti ti-heart"></i></span>
                            <h2>Cancelling A Weekly Meal Purchase</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-7 push-lg-3">
                        <h3>Thank You!</h3>
                        <p>First of all: A huge <strong>THANK YOU</strong>!</p>
                        <p>You are amazing and you've already done so much to help support frontline healthcare workers &amp; independent restaurants.</p>
                        <p>Second: We recognize that these are unprecedent, uncertain times. Just because someone was in a position to give last week does not mean they are in a position to give this week.</p>
                        <p>For that reason: If, for ANY reason, it's no longer something you are able to do, we totally understand.</p>

                        <h3>How To Cancel</h3>
                        <p>Please just email us at <a class="link" href="mailto:admin@shelter-in-plates.com">admin@shelter-in-plates.com</a> with the name and/or email you used on the credit card transaction, and we will make sure your card is not charged again.</p>
                        <p>If your card was already charged and you are unable to support that, please let us know and we will happily refund a charge even if it was already processed.</p>
                        <p>Thank you for letting us be a part of this with you.</p>

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
</style>
