# Cripsy-Boilerplate - Less is more

Flat Sass Boilerplate give you a amount of Basic Settings, Components, Helpers,
Mixins and Functions. It uses also the following Libraries,

* normalize.css / [https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/)
* reflex-grid / [http://reflexgrid.com/docs/](http://reflexgrid.com/docs/)
* opt / [https://octicons.github.com](https://octicons.github.com)

Many Boilerplates and also Frameworks, are trying to hard adding styles that
are most time will be overwritten to make it work for you. This causes a loss in
Performance and more Fighting with the Framework and the Documentation.

[Documentation](https://crispy-boilerplate.org)

## Coding Style

The Boilerplate uses as Coding Style [http://getbem.com/](BEM), but as a more
simpler idea of it. One of the Benefits of BEM is that you create Components and
can reuse them. But one the other hand it can be really Strange if you overthinking it.

## Not Fancy but Small

Components are created to give you a Structure and a Basic set of Styles and
not that they look fancy. The Idea is to extend each Compontent and save up
a Bunch of CSS Code and so get more Performance and less Errors.
Of Course is really Fancy to get more Performance and less Errors.

## Only Include if you need it

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

To overwrite defaults simple adding your own config-file before import crispy:

```
@import
    "config",
    "crispy";
```

### Example

You find an Example in "/src/example". It is also the site of the Documentation.
In the Example there are additional Directories. These one are part of a Structure
you might find helpful.

#### Site

Contains header, footer, Partials that use on are site or webapp. Header, Footer are
not Classical Components, there often more Complex and have a special Brand.

#### Templates

Templates are for a single Site or a group of Sites, they are complex and the is
no benfit so reuse them as Components.
