# Crispy - Lightweight CSS / SCSS Framework

## Installation

```
npm install crispy-css
```

## How it works

### SCSS

```
@import
    "crispy";
```

Now include Mixins you need. Components and Modifiziers only works if you include them,</

```
@include crispy__core();
@include crispy__modifiers();

// components
@include crispy__button();
@include crispy__code();
@include crispy__field();
@include crispy__group();
@include crispy__heading();
@include crispy__hero();
@include crispy__icon();
@include crispy__media();
@include crispy__modal();
@include crispy__overlay();
@include crispy__panel();
@include crispy__table();
```

For Custom Variables add a File before importing Crispy,

```
@import
    "variables",
    "crispy";
```

If you need all, mixins will be included,

```
@import
    "crispy_all";
```

Only need Core and Modifiziers?

```
@import
    "crispy_minimal";
```

### CSS

For using CSS you can use crispy.css for all Styles or crispy_mininmal.css without Components.

## Example
You find an example in "/src/example", this is this Documentation. In the given example there are additional directories. These ones are part of a structure which might be helpful for you.

### Site
Contains header, footer, partials that are used on a site or webapp. Header and Footer are not classical components, there often more complex and have a special brand.

### Templates
Templates are for a single site or a group of sites, they are complex and there is no benefit so reuse them as components.
