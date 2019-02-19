module.exports = {
    'extends': [
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        'airbnb-base',
    ],
    'plugins': ['vue'],
    'rules': {
        // indentation
        'indent': [ 2, 4, { "SwitchCase": 1 } ],

        // make it meaningful
        'prefer-const': 1,

        // turn off linebreak checks
        'linebreak-style': 0,

        // line-length
        'max-len': ['error', 150],

        // unused vars -- disable for the time-being in development
        'no-unused-vars': 0,

        // shadowing -- check best practises against vuex store
        'no-shadow': 0,
        'no-param-reassign': 0,

        // no use before defined
        'no-use-before-define': 0,
        'no-undef': 0,
        'prefer-destructuring': 0,

        // console logging
        'no-console': 1,

        // turn of forced defaults
        'prefer-default-export': 0,

        // disable because of vue
        'no-underscore-dangle': 0,

        // kebab-case for component names
        "vue/name-property-casing": ["error", "kebab-case"],

        "vue/max-attributes-per-line": [2, {
            "singleline": 4,
            "multiline": {
                "max": 1,
                "allowFirstLine": true
            }
        }]
  },
  'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.common.js'
            }
        },
      'eslint.validate': [
          'javascript',
          'javascriptreact',
          { 'language': 'vue', 'autoFix': true }
      ]
    }
};

