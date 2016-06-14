# vue-pjax

[![Latest Version on NPM](https://img.shields.io/npm/v/vue-pjax.svg?style=flat-square)](https://npmjs.com/package/vue-pjax)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

**Work in progress**

Vue components and directives to progressively enhance your site with PJAX.

Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## Install

You can install the package via npm:

```bash
$ npm install vue-pjax
```

This package requires your application to provide two dependencies: `vue` and `vue-resource`.

```bash
$ npm install vue vue-resource
```

## Usage

```js
import Vue from 'vue';
import VueResource from 'vue-resource';
import pjax from 'vue-pjax';

Vue.use(VueResource);

new Vue({
    el: 'body',
    mixins: [pjax],
});
```

Links:

```html
<pjax name="my-dynamic-section">
    No one
</pjax>
```

```html
<a href="/hodor" v-pjax:my-dynamic-section>
    Replace 'No one' with Hodor's contents
</a>
<a href="/bran" v-pjax:my-dynamic-section>
    Replace 'No one' with Bran's contents
</a>
```

Forms:

```html
<pjax name="my-dynamic-form">
    <form action="/submit" v-pjax:my-dynamic-form>
        <!-- Form submissions will replace `my-dynamic-form` with the server's response -->
    </form>
</pjax>
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

``` bash
$ npm run test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please contact [Sebastian De Deyne](https://github.com/sebastiandedeyne) instead of using the issue tracker.

## Credits

- [Sebastian De Deyne](https://github.com/sebastiandedeyne)
- [All Contributors](../../contributors)

## About Spatie

Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
