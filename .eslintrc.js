/**
 * @file eslint configuration
 * @author lihaizhu
 * @since 2018/01/23
 */
module.exports = {
    "extends": "eslint:recommanded",
    "fix": true,
    "rules": {
        // enable addtional rules
        "indent": ["warning", 4],
        "linebreak-style": ["warning", "unix"],
        "quotes": ["warning", "double"],
        "semi": ["warning", "always"],
        // override default options for rules from base configurations
        "comma-dangle": ["warning", "always"],
        "no-cond-assign": ["warning", "always"],
        // disable rules from base configurations
        "no-console": "off"
    }
};
