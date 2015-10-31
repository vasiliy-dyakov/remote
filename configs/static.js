export default {
    enabledPatterns: [
        '^/node_modules/less/dist/less\.js$',
        '^/(dist|client)/.*\.(js|less|css)$',
        '^/components/.*\.(less|png|svg|jpg)$'
    ].map(pattern => new RegExp(pattern))
};
