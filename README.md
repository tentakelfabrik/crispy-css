# Crispy - Lightweight CSS / SASS Framework

## Installation

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
