export default {
    enabledPatterns: [
        '^/node_modules/less/dist/less\.js$',
        '^/node_modules/babel-core/browser\.js$',
        '^/(actions|client|configs|stores|dist)/.*\.js$',
        '^/(common|components|pages)/.*\.(js|jsx)$',
        '^/components/.*\.(less|png|svg|jpg)$'
    ].map(pattern => new RegExp(pattern))
};
