export default {
    enabledPatterns: [
        '^/node_modules/less/dist/less\.js$',
        '^/dist/.*\.js$',
        '^/components/.*\.(less|png|svg|jpg)$'
    ].map(pattern => new RegExp(pattern))
};
