export default {
    enabledPatterns: [
        '^/node_modules/less/dist/less\.js$',
        '^/components/.*\.(less|png|svg|jpg)$'
    ].map(pattern => new RegExp(pattern))
};
