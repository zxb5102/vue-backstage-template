'use strict'


module.exports = {

    plugins: [

        {
            name: 'js-parser',
            test: /main\.js/,
            fn: function (source) {
                var replaceStr = process.env.NODE_ENV === 'production'
                    ? ""
                    : "import './mock/mock'"
                var result = source.replace("'@mock'", replaceStr);
                return result;
            }
        },

    ]
}