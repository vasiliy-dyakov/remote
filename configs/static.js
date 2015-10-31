export default {
    enabledPatterns: [
        '^/node_modules/less/dist/less\.js$',
        '^/components/.*\.less$'
    ].map(pattern => new RegExp(pattern))
};
