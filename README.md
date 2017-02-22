# Effect.js
Javascript DOM Effect Library (CSS3)  

[![npm version](https://badge.fury.io/js/effect-js.svg)](https://badge.fury.io/js/effect-js)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/DaeGwang/Effect.js/blob/master/LICENSE)

- Website: [https://daegwang.github.io/lab/effect.js/](https://daegwang.github.io/lab/effectjs/)
- Github: [Effect.js](https://github.com/DaeGwang/Effect.js)

## Installation

- Download [Effect.js](https://raw.githubusercontent.com/DaeGwang/Effect.js/master/js/Effect.js)

	```html
	<script type="text/javascript" src="js/Effect.js"></script>
	```
- Install with [npm](https://www.npmjs.com/)

	```
	$npm install effect-js
	```
  

## How to use

### Select DOM

```js
var dom = Effect('#sample');
```
Only `#id` selecter is possible.


### Set Image Url
```js
var imgUrl = 'https://daegwang.github.io/lab/effectjs/img/sample.jpg';
dom.setImg(imgUrl); //Change or Set Image Url
```

After call this Method, `IMG` tag is Generated in your `Selected DOM`. If `Selected DOM`'s TagName is `IMG`, src value is changed to parameter of setImg.

### Give Effect 

##### Opacity

```js
dom.opacity(0.7);
```

##### Radius (border-radius)

```js
dom.radius(30);
```

##### Rotate (deg)

```js
dom.rotate(30);
```

##### Scale

```js
dom.scale(0.7);
```

##### Blur (px)

```js
dom.blur(0.9);
```

##### GrayScale

```js
dom.grayscale(1);
```

##### Sepia

```js
dom.sepia(1);
```

### Transition

```js
//Option 1: set Transition at First (default 0)
var dom = Effect('#sample', {
  transition: 1
});

//Option 2: change Transition
dom.setTransition(2);
```

### Overlay Effect

##### Scale + Rotate

```js
dom.scale(0.6).rotate(15);
```


### Optional: Select DOM (using jQuery)

```js
var dom = Effect($('#sample'));
```

## Example
- [https://daegwang.github.io/lab/effectjs/](https://daegwang.github.io/lab/effectjs/)

<!-- ## Browser Support -->

## License
Released under MIT License