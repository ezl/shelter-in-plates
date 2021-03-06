const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(
                new PrerenderSPAPlugin({
                    staticDir: path.join(__dirname, 'dist'),
                    routes: [
                        '/r/blankslatenyc',
                        '/r/donate',
                        '/r/rooh',
                        '/r/irazu',
                        '/r/spoke-and-bird'],
                })
            )
        }
    }
}
