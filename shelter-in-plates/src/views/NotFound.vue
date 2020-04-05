<template>
    <div id="content">
        <!-- Section -->
        <section class="section bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 push-lg-3">
                        <div class="text-center mb-2">
                            <span class="icon icon-md icon-danger"><i class="ti ti-face-sad"></i></span>
                            <h3>Page Not Found</h3>
                        </div>
                        <p class="lead text-muted">Uh oh...</p>
                        <p class="lead text-muted">Unforunately, we couldn't find the page you're looking for.</p>
                        <p class="lead text-muted">If you manually typed the address and landed here, please check and try again. If you clicked a link to get here, please let us know at <a href="mailto:admin@shelter-in-plates.com">admin@shelter-in-plates.com</a>.</p>
                        <p class="lead text-muted"><a href="/">Learn more about <strong style="text-decoration: underline;">Shelter-in-Plates</strong>.</a></p>

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
#content {
    margin-left: 30px;
}

@media (max-width: 754px) {
    #content {
        margin-left: 0px;
    }
}
</style>
