
var Effect = {};

Effect.extend = function(obj, prop) {
	if(obj && prop && typeof prop == 'object'){
		for ( var i in prop ){
			obj[i] = prop[i];
		}
	}
	return obj;
};

Effect.Img = function(config){
	Effect.extend(this, config);
	this.init();
};

Effect.extend(Effect.Img.prototype, {
	init: function(){
		var div = document.getElementById(this.id);
		var img = document.createElement('img');
		img.src = this.url;
		this.img = img;
		div.append(img);
	},
	getImg: function(id){
		var img = document.getElementById(id);
		return img;
	},
	setImg: function(url){
		this.img.src = url;
	},
	setStyle: function(prop, value){
		var img = this.img;
		img.style[prop] = value;
	}
});

Effect.extend(Effect.Img.prototype, {
	radius: function(value){
		this.setStyle('borderRadius', value + 'px');
		return this;
	},
	rotate: function(value){
		this.setStyle('transform', 'rotate(' + value + 'deg)');
		return this;
	}

});