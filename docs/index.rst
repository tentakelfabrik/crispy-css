# Cripsy-Boilerplate - Less is more

Flat Sass Boilerplate gives you an amount of basic settings, components, helpers, mixins and functions.

The problem of most frameworks is they trying to hard adding a lot of styles, which has to be customized and documented
if you used it for a Project. Often these changes cause a loss of performance and raise the propability of errors.

[Documentation](https://crispy-boilerplate.readthedocs.io/en/latest/)

## Coding Style

The boilerplate uses as coding style [http://getbem.com/](BEM), but as a more simpler idea of it. One of the benefits of BEM is that you create components and can reuse them. But one the other hand it can be really strange if you overthinking it.

## Not Fancy but Small

Components are created to give you a structure and a basic set of styles and not to look fancy. The idea is to extend each component and save time to write a bunch of extra CSS code and therefore get more performance while minimize the causes of errors. Of Course is really Fancy to get more Performance and less Errors.

## Getting Started

```
npm install crispy-boilerplate
```

Main SCSS-File:

```
@import
    "crispy";
```

After this, include Mixins you need:

```
@include crispy__*()
```

To overwrite defaults simple add your own config-file after importing crispy:

```
@import
    "crispy",
    "config";
```

## Typography
