# vue-pjax

[![Latest Version on NPM](https://img.shields.io/npm/v/vue-pjax.svg?style=flat-square)](https://npmjs.com/package/vue-pjax)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

**THIS IS AN EXPERIMENT THAT MIGHT NEVER GET A STABLE RELEASE**

This package provides a Vue component and directive to progressively enhance your site with pjax.

```html
<!--
    Clicking one of the links will replace `pjax-container`'s contents since
    it's name is linked to the `v-pjax` directive.
-->

<ul>
    <li><a href="/foo" v-pjax:content>Foo</a></li>
    <li><a href="/bar" v-pjax:content>Bar</a></li>
</ul>

<pjax-container name="content">
    Hello world!
</pjax-container>

<!-- `v-pjax` can also be bound to form submits. -->

<pjax-container name="my-form">
    <form method="post" v-pjax:my-form>
        <!-- ... -->
    </form>
</pjax-container>
```

Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## Postcardware

You're free to use this package (it's [MIT-licensed](LICENSE.md)), but if it makes it to your production environment you are required to send us a postcard from your hometown, mentioning which of our package(s) you are using.

Our address is: Spatie, Samberstraat 69D, 2060 Antwerp, Belgium.

The best postcards will get published on the open source page on our website.

## Installation

You can install the package via npm:

```bash
$ npm install vue-pjax
```

This package requires your application to provide two peerDependencies: `vue` and `vue-resource`.

```bash
$ npm install vue@'^1.0.24' vue-resource@'^0.7.4'
```

## Usage

To enable the pjax component and directive, the easiest way is to register the mixin in your root component:

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

If you prefer global components, you'll have to register them separately:

```js
import { PjaxContainer, pjax } from 'vue-pjax';
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.component('pjax-container', PjaxContainer);
Vue.directive('pjax', pjax);
```



```html
<pjax-container name="my-dynamic-section">
    No one
</pjax-container>
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

## Why Vue?

- Events
- Resource
- Recompilation

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please contact [Freek Van der Herten](https://github.com/freekmurze) instead of using the issue tracker.

## Credits

- [Sebastian De Deyne](https://github.com/sebastiandedeyne)
- [All Contributors](../../contributors)

## About Spatie

Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
