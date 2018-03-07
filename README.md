# Cripsy-Boilerplate - Less is more

Flat Sass Boilerplate gives you an amount of basic settings, components, helpers, mixins and functions.

The problem of most frameworks is they trying to hard adding a lot of styles,
which has to be customized and documented if you used it for a Project. Often these changes cause a loss of
performance and raise the propability of errors.

Crispy Boilerplate uses also the following libraries:

* normalize.css / [https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/)
* reflex-grid / [http://reflexgrid.com/docs/](http://reflexgrid.com/docs/)
* opt / [https://octicons.github.com](https://octicons.github.com)

[Documentation](https://crispy-boilerplate.org)

## Coding Style

The boilerplate uses as coding style [http://getbem.com/](BEM), but as a more simpler idea of it. One of the benefits of BEM is that you create components and can reuse them. But one the other hand it can be really strange if you overthinking it.

## Not Fancy but Small

Components are created to give you a structure and a basic set of styles and not to look fancy. The idea is to extend each component and save time to write a bunch of extra CSS code and therefore get more performance while minimize the causes of errors. Of Course is really Fancy to get more Performance and less Errors.

## Include

Components and Helpers are organizes as Mixins, that makes it a little easier to
to add Styles you need.

## Getting Started
### Installation

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

To overwrite defaults simple add your own config-file before importing crispy:

```
@import
    "config",
    "crispy";
```

### Example

You find an example in "/src/example", this is this documentation. In the given example there are additional directories. These ones are part of a structure which might be helpful for you. 

#### Site

Contains header, footer, partials that are used on a site or webapp. Header and footer are not classical components, there often more complex and have a special brand.

#### Templates

Templates are for a single site or a group of sites, they are complex and there is no benefit so reuse them as components.
