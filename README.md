# Effect.js
Javascript DOM Effect Library (CSS3)

- Website: [https://daegwang.github.io/lab/effectjs/](https://daegwang.github.io/lab/effectjs/)
- Github: [Effect.js](https://github.com/DaeGwang/Effect.js)

## How to use

include Effect.js

```html
<script type="text/javascript" src="js/Effect.js"></script>
```

### Select DOM

##### html
```html
<div id="sample"></div> 
```

##### javascript

```js
var dom = Effect('#sample');
```

### Set Image Url

```js
var imgUrl = 'https://daegwang.github.io/lab/effectjs/img/sample.jpg';
dom.setImg(imgUrl); //Change or Set Image Url
```

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