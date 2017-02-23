# Effect.js
Javascript DOM Effect Library (CSS3)  

[![npm version](https://badge.fury.io/js/effect-js.svg)](https://badge.fury.io/js/effect-js)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/DaeGwang/Effect.js/blob/master/LICENSE)

- Website: [https://daegwang.github.io/lab/effect.js/](https://daegwang.github.io/lab/effect.js/)
- Github: [Effect.js](https://github.com/DaeGwang/Effect.js)

## Installation

- Download [effect.js](https://raw.githubusercontent.com/DaeGwang/Effect.js/master/effect.js)

	```html
	<script type="text/javascript" src="js/effect.js"></script>
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


### Set Image Url (optional)

```js
var imgUrl = 'https://daegwang.github.io/lab/effect.js/img/sample.jpg';
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

### Duration (s)

```js
//Option 1: set Duration at First (default 0)
var dom = Effect('#sample', {
  duration: 1
});

//Option 2: change Duration
dom.setDuration(2);
```

### Overlay Effect

##### Scale + Rotate

```js
dom.scale(0.6).rotate(15);
dom.rotate(15).rotate(15); //same as dom.rotate(30);
```


### Optional: Select DOM (using jQuery)

```js
var dom = Effect($('#sample'));
```

## Example
- [https://daegwang.github.io/lab/effect.js/](https://daegwang.github.io/lab/effect.js/)

## Browser Support
- __Chrome__: 26.0, 4.0 -webkit-
- __Safari__: 6.1, 3.1 -webkit-
- __Edge__: 10.0

<!-- - Opera: 12.1, 10.5 -o- -->
<!-- - Firefox: 16.0, 4.0 -moz-	-->

## License
Released under MIT License