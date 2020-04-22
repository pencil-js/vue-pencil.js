const { DefinePlugin } = require("webpack");

module.exports = {
    plugins: [
        new DefinePlugin({
            WEB: true,
        }),
    ],
};
