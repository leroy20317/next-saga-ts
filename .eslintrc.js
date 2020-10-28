module.exports = {
	parser: '@typescript-eslint/parser',
	extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],
	plugins: ['@typescript-eslint', 'react'],
	env: {
		browser: true,
		node: true,
		es6: true,
		mocha: true,
		jest: true,
		jasmine: true,
	},
	settings: {
		//自动发现React的版本，从而进行规范react代码
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
	parserOptions: {
		//指定ESLint可以解析JSX语法
		ecmaVersion: 2019,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'linebreak-style': [0, 'windows'],
		'generator-star-spacing': [0],
		'consistent-return': [0],
		'class-methods-use-this': [0],
		'react/jsx-indent': [0],
		'react/jsx-indent-props': [0],
		'react/jsx-wrap-multilines': [0],
		'react/sort-comp': [0],
		'react/no-did-mount-set-state': [0],
		'react/no-array-index-key': [0],
		'react/forbid-prop-types': [0],
		'react/no-string-refs': [0],
		'react/no-unescaped-entities': [0],
		'react/no-danger': [0],
		'react/self-closing-comp': [0],
		'jsx-quotes': [0],
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		],
		'global-require': [1],
		'import/prefer-default-export': [0],
		'prefer-rest-params': [0],
		'vars-on-top': [0],
		'import/no-mutable-exports': [0],
		'react/jsx-no-bind': [0],
		'react/prop-types': [0],
		'react/prefer-stateless-function': [0],
		'react/no-multi-comp': [0],
		'no-else-return': [0],
		'no-restricted-syntax': [0],
		'import/no-extraneous-dependencies': [0],
		'no-use-before-define': [0],
		'jsx-a11y/no-static-element-interactions': [0],
		'jsx-a11y/no-noninteractive-element-interactions': [0],
		'jsx-a11y/click-events-have-key-events': [0],
		'jsx-a11y/anchor-is-valid': [0],
		'no-nested-ternary': [0],
		'arrow-body-style': [0],
		'import/extensions': [0],
		'no-console': [0],
		'no-bitwise': [0],
		'no-unused-vars': [0],
		'no-cond-assign': [0],
		'import/no-unresolved': [0],
		'comma-dangle': [
			'error',
			{
				arrays: 'only-multiline',
				objects: 'only-multiline',
				imports: 'only-multiline',
				exports: 'only-multiline',
				functions: 'ignore',
			},
		],
		'object-curly-newline': [0],
		'function-paren-newline': [0],
		'no-restricted-globals': [0],
		'no-restricted-properties': [0],
		'no-caller': [0],
		'require-yield': [1],
		'compat/compat': [0],
		'prefer-promise-reject-errors': [0],
		indent: ['off'],
		semi: [0],
		'no-case-declarations': 0,
		'no-shadow': 0,
		'array-callback-return': 0,
		'one-var': [
			0,
			{
				var: 'always',
				let: 'always',
				const: 'always',
			},
		],
		eqeqeq: [0],
		'prefer-destructuring': [0],
		'no-multi-spaces': [0],
		'prefer-const': [0],
		'func-names': [0],
		'func-call-spacing': [0],
		'wrap-iife': [0],
		quotes: [0],
		'prefer-template': [0],
		'no-lonely-if': [0],
		'no-underscore-dangle': [0],
		'no-var': [0],
		'object-shorthand': [0],
		'arrow-parens': [0],
		'prefer-arrow-callback': [0],
		'no-trailing-spaces': [0],
		'no-useless-return': [0],
		'no-param-reassign': [0],
		'import/first': [0],
		'one-var-declaration-per-line': [0],
		'no-plusplus': [0],
		'guard-for-in': [0],
		'no-unused-expressions': [0],
		'object-curly-spacing': [0],
		'quote-props': [0],
		'no-useless-constructor': [0],
		radix: [0],
		'jsx-a11y/label-has-for': [0],
		'no-useless-escape': [0],
	},
};
