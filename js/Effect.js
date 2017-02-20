/**
 * EffectJS 
 * A javascript library implementing image effect by CSS3
 *
 * Author: Daegwang Jang
 */

(function(){

var Effect = {};

Effect.extend = function(obj, prop) {
  if(obj && prop && typeof prop == 'object'){
    for ( var i in prop ){
      obj[i] = prop[i];
    }
  }
  return obj;
};

Effect.isArray = function(arr){
  if(Object.prototype.toString.call(arr) === '[object Array]') return true;
  else return false;
}

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
    if(Effect.isArray(prop)){
      for(var arrProperty in prop){
        img.style[prop[arrProperty]] = value;
      }
    }
    else{
      img.style[prop] = value;  
    }
  },
  setFilterStyle: function(value){
    this.setStyle(['filter', '-webkit-filter'], value);
  }
});

Effect.Img.prototype.opacity = function(value){
  this.setStyle('opacity', value);
  return this;
};

Effect.Img.prototype.radius = function(value){
  this.setStyle('borderRadius', value + 'px');
  return this;
};

Effect.Img.prototype.rotate = function(value){
  this.setStyle('transform', 'rotate(' + value + 'deg)');
  return this;  
};

Effect.Img.prototype.scale = function(value){
  this.setStyle(['transform', '-webkit-transform'], 'scale(' + value + ')');
  return this;  
};

Effect.Img.prototype.blur = function(value){
  this.setFilterStyle('blur(' + value + 'px)');
  return this;  
};

Effect.Img.prototype.grayscale = function(value){
  this.setFilterStyle('grayscale(' + value + ')');
  return this;  
};

Effect.Img.prototype.sepia = function(value){
  this.setFilterStyle('sepia(' + value + ')');
  return this;  
};


if (typeof define == 'function' && define.amd){
  define(function() {
    return Effect;
  }); 
} 
if (typeof exports !== 'undefined'){
  exports.Effect = Effect;
}
if (typeof navigator !== 'undefined'){
  window.Effect = Effect; 
} 
if (typeof module !== 'undefined') {
  module.exports = Effect;
}

})();