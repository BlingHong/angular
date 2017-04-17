/**
 * isString 
 */
var isString=(value)=>{return typeof value ==='string';}

/*
 * /**
 * isArray
 */
var isArray=Array.isArray();
/**
 * isObject
 */
var isObject=(value)=>{return value!==null && typeof value==='object';}

var getPrototypeOf=Object.getPrototypeOf;


/**
 * isFunction
 */
var isFunction=(value)=>{return typeof value==='function';}

/**
 * isWindow
 */
var isWindow=(value)=>{return value&& value.window===value;}

/**
 * isNumber
 */
var isNumber=(value)=>{return typeof value==='number';}

/**
 * isBlankObject 空对象
 */

var isBlankObject=(value)=>{return value!==null&&typeof value==='object'&&Object.getPrototypeOf(value);}

/**
 * isUndefined
 */
var isUndefined=(value)=>{return typeof value == 'undefined';}
/**
 * 
 * @param {Object} value
 */
var isDefined=(value)=>{return typeof value != 'undefined';}
/**
 * isBoolean
 */
var isBoolean=(value)=>{return typeof value ==='boolean';}

/**
 * toLowerCase
 */

var tolowerCase=(value)=>{return isString(value)?value.toLowerCase():value;}

/**
 * toUpperCase
 */
var toupperCase=(value)=>{return isString(value)?value.toUpperCase():value;}

/**
 * manulLowerCase
 */
var manulLowerCase=(value)=>{return isString(value)? value.replace(/[A-Z]/g, function(ch) {return String.fromCharCode(ch.charCodeAt(0) | 32);})
         : value;}

/**
 * manulUpperCase
 */
var manulUpperCase=(value)=>{return isString(value)? value.replace(/[A-Z]/g,function(ch){return String.fromCharCode(ch.charCodeAt(0) |32);}) :value;}

/**
 * isArrayLike  数组类对象
 */
var isArrayLike=(value)=>{
	if(value==null || isWindow(value)) return false;
	
	 if (isArray(obj) || isString(obj))  return true;
	 var length = 'length' in Object(obj) && obj.length;

     // NodeList objects (with `item` method) and
     // other objects with suitable length characteristics are array-like
     console.log( obj.item)
     return isNumber(length) &&
         (length >= 0 && ((length - 1) in obj || obj instanceof Array) || typeof obj.item === 'function');
}

/**
 * forEach
 */

var forEach=(obj, iterator, context)=>{
  var key, length;
  if (obj) {
    if (isFunction(obj)) {
      for (key in obj) {
        if (key !== 'prototype' && key !== 'length' && key !== 'name' && obj.hasOwnProperty(key)) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (isArray(obj) || isArrayLike(obj)) {
      var isPrimitive = typeof obj !== 'object';
      for (key = 0, length = obj.length; key < length; key++) {
        if (isPrimitive || key in obj) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (obj.forEach && obj.forEach !== forEach) {
        obj.forEach(iterator, context, obj);
    } else if (isBlankObject(obj)) {
      // createMap() fast path --- Safe to avoid hasOwnProperty check because prototype chain is empty
      for (key in obj) {
        iterator.call(context, obj[key], key, obj);
      }
    } else if (typeof obj.hasOwnProperty === 'function') {
      // Slow path for objects inheriting Object.prototype, hasOwnProperty check needed
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else {
      // Slow path for objects which do not have a method `hasOwnProperty`
      for (key in obj) {
        if (hasOwnProperty.call(obj, key)) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    }
  }
  return obj;
}
/**
 * nextNum
 */
var nextNum=(num)=>{
	return ++num
}

/**
 * when using forEach the params are value, key, but it is often useful to have key, value.
 * @param {function(string, *)} iteratorFn
 * @returns {function(*, string)}
 */
var reverseParams=(iteratorFn)=>{
	return function(key,value){iteratorFn(value,key);}
}

/**
 * setHashKey
 *if value is there are ,set obj'$$hashKey=value else delete obj.$$hashKey
 */

var setHashKey=(obj,value)=>{if(value){obj.$$hashKey=value;}else{delete obj.$$hashKey;}}

/**
 * toInt
 */
var toInt=(str)=>{return parsetInt(str,10);}

/**
 * isNumberNaN
 */
//var isNumberNaN=Number.isNaN || isNumberNaN(num){return num!==num;}

/**
 * isBlankObject 空对象
 */
var isBlankObject=(obj)=>{return obj!==null&& isObject(obj) && !getPrototypeOf(obj);}

/**
 * isDate
 */
var isDate=(date)=>{return toString.call(date) ==="[object Date]";}

/**
 * isRegExp
 */
var isRegExp=(value)=>{return toString.call(value) === '[object RegExp]';}

/**
 * isFile
 */
var isFile=(value)=>{return toString.call(value)==="[object File]";}

/**
 * isFormData  h5新增表单提交控件,与传统ajax相比能够上传二进制文件
 */
var isFormData=(value)=>{return toString.call(value)==="[object FormData]";}

/**
 * isBlob  栏位对象,一般可与file对象用在相同的位置
 */
var isBlob=(value)=>{return toSting.call(value)==="[object Blob]";}

/**
 * isArrayBuffer
 */
 var isArrayBuffer=(value)=>{return toString.call(value)==="[object ArrayBuffer]";}
 
 /**
  * trim 去掉字符串左右两边的空格
  */
 var trim=(value)=>{isString(value)?value.trim():value;}

/**
 * isElement
 */

var isElement=(node)=>{return !!(node &&(node.nodeName || (node.prop && node.attr && node.find)));}

/**
 * arrayRemove  删除某个元素并返回该元素位置
 */
var arrayRemove=(array,value)=>{var index=array.indexOf(value);if(index>=0){array.splice(index,1);} return index;}

/**
 * arrayIncludes   判断数组中包含某几个元素
 */

var arrayIncludes=(arr,...val)=>{return Array.prototype.indexOf.call(arr,...val) !== -1;}




























