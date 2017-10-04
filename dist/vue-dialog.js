/*!
 *  VueDialog plugin v1.0.0
 * 
 *  Dialog windows for Vue (like confirm or alert), based on Vuedals.
 * 
 *  @author Javis Perez <javisperez@gmail.com>
 *  https://github.com/javisperez/vue-dialog
 *  Released under the MIT License.
 */
!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define("VueDialog",[],factory):"object"==typeof exports?exports.VueDialog=factory():root.VueDialog=factory()}(this,function(){/******/
return function(modules){/******/
// The require function
/******/
function __webpack_require__(moduleId){/******/
// Check if module is in cache
/******/
if(installedModules[moduleId])/******/
return installedModules[moduleId].exports;/******/
// Create a new module (and put it into the cache)
/******/
var module=installedModules[moduleId]={/******/
exports:{},/******/
id:moduleId,/******/
loaded:!1};/******/
// Return the exports of the module
/******/
/******/
// Execute the module function
/******/
/******/
// Flag the module as loaded
/******/
return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}// webpackBootstrap
/******/
// The module cache
/******/
var installedModules={};/******/
// Load entry module and return exports
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
// expose the module cache
/******/
/******/
// __webpack_public_path__
/******/
return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([/* 0 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _promise=__webpack_require__(1),_promise2=_interopRequireDefault(_promise),_classCallCheck2=__webpack_require__(71),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(72),_createClass3=_interopRequireDefault(_createClass2),_vueLongpress=__webpack_require__(76),_vueLongpress2=_interopRequireDefault(_vueLongpress),_deepmerge=__webpack_require__(77),_deepmerge2=_interopRequireDefault(_deepmerge),_VueDialog=function(){function _VueDialog(){(0,_classCallCheck3.default)(this,_VueDialog),this.bus=null}return(0,_createClass3.default)(_VueDialog,[{key:"setBus",value:function(bus){this.bus=bus}},{key:"confirm",value:function(){var _this=this,message=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Are you sure?",params=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},defaults={title:"Please confirm",labels:{ok:"Ok",cancel:"Cancel"},payload:{},template:'\n                        <div class="vue-dialog-content">\n                            <header v-if="options.title"{{ options.title }}</header>\n\n                            <p>{{ message }}</p>\n\n                            <div class="actions">\n                                <span @click="success()" class="btn btn-primary button-ok">{{ options.labels.ok }}</span>\n                                <span @click="cancel()" class="btn btn-default button-cancel">{{ options.labels.cancel }}</span>\n                            </div>\n                        </div>\n                    '},options=(0,_deepmerge2.default)(defaults,params);return new _promise2.default(function(resolve,reject){var Bus=_this.bus;Bus.$emit("new",{name:"vue-dialog confirm",dismisable:!1,title:options.title,payload:options.payload,component:{name:"vue-dialog-confirm",data:function(){return{options:options,message:message}},methods:{success:function(){Bus.$emit("close"),resolve()},cancel:function(){Bus.$emit("close"),reject()}},template:options.template}})})}},{key:"hardConfirm",value:function(){var message=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"To continue please type the text below",_this2=this,confirmationMessage=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"I really want to do it",params=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},defaults={duration:5,labels:{ok:"Yes, i'm sure",pressing:"Keep pressing...",action:"Confirmed, please wait...",cancel:"Cancel"},payload:{},template:'\n                        <div>\n                            <div class="message">{{ message }}</div>\n                            <div class="confirmation-message">{{ confirmationMessage }}</div>\n                            <div class="input-container">\n                                <input type="text" v-model="typed" autofocus/>\n                                <div class="typed-progress-bar">\n                                    <span :style="\'width:\'+(progress * 100)+\'%\'"></span>\n                                </div>\n                            </div>\n                            <div class="actions">\n                                <longpress class="btn btn-danger" :disabled="!confirmed" :onConfirm="confirm" :duration="options.duration" :pressingText="options.labels.pressing" :actionText="options.labels.action">{{ options.labels.ok }}</longpress>\n                                <span class="btn btn-default" @click="cancel()">{{ options.labels.cancel }}</span>\n                            </div>\n                        </div>\n                    '},options=(0,_deepmerge2.default)(defaults,params);return new _promise2.default(function(resolve,reject){var Bus=_this2.bus;Bus.$emit("new",{name:"vue-dialog hard-confirm",title:null,payload:options.payload,component:{name:"vue-dialog-hard-confirm",components:{Longpress:_vueLongpress2.default},data:function(){return{typed:"",options:options,message:message,confirmationMessage:confirmationMessage,confirmed:!1,progress:0}},methods:{confirm:function(){Bus.$emit("close"),resolve()},cancel:function(){Bus.$emit("close"),reject()}},watch:{typed:function(value){value=value.trim().toLowerCase();var lowerConfirmationMessage=this.confirmationMessage.trim().toLowerCase();lowerConfirmationMessage.substr(0,value.length)===value&&(this.progress=value.length/lowerConfirmationMessage.length),value===lowerConfirmationMessage?this.confirmed=!0:this.confirmed=!1}},template:options.template}})})}},{key:"alert",value:function(message){var _this3=this,buttonLabel=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Ok";return new _promise2.default(function(resolve){var Bus=_this3.bus;Bus.$emit("new",{dismisable:!1,name:"vue-dialog alert",component:{name:"vue-dialog-alert",data:function(){return{buttonLabel:buttonLabel,message:message}},methods:{close:function(){Bus.$emit("close"),resolve()}},template:'\n                        <div class="vue-dialog-content">\n                            <p>{{ message }}</p>\n\n                            <div class="actions">\n                                <span @click="close()" class="btn btn-primary button-ok">{{ buttonLabel }}</span>\n                            </div>\n                        </div>\n                    '}})})}}]),_VueDialog}();exports.default=new _VueDialog},/* 1 */
/***/
function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(2),__esModule:!0}},/* 2 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(3),__webpack_require__(4),__webpack_require__(48),__webpack_require__(52),__webpack_require__(69),__webpack_require__(70),module.exports=__webpack_require__(12).Promise},/* 3 */
/***/
function(module,exports){},/* 4 */
/***/
function(module,exports,__webpack_require__){"use strict";var $at=__webpack_require__(5)(!0);
// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(8)(String,"String",function(iterated){this._t=String(iterated),// target
this._i=0},function(){var point,O=this._t,index=this._i;return index>=O.length?{value:void 0,done:!0}:(point=$at(O,index),this._i+=point.length,{value:point,done:!1})})},/* 5 */
/***/
function(module,exports,__webpack_require__){var toInteger=__webpack_require__(6),defined=__webpack_require__(7);
// true  -> String#at
// false -> String#codePointAt
module.exports=function(TO_STRING){return function(that,pos){var a,b,s=String(defined(that)),i=toInteger(pos),l=s.length;return i<0||i>=l?TO_STRING?"":void 0:(a=s.charCodeAt(i),a<55296||a>56319||i+1===l||(b=s.charCodeAt(i+1))<56320||b>57343?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-55296<<10)+(b-56320)+65536)}}},/* 6 */
/***/
function(module,exports){
// 7.1.4 ToInteger
var ceil=Math.ceil,floor=Math.floor;module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it)}},/* 7 */
/***/
function(module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports=function(it){if(void 0==it)throw TypeError("Can't call method on  "+it);return it}},/* 8 */
/***/
function(module,exports,__webpack_require__){"use strict";var LIBRARY=__webpack_require__(9),$export=__webpack_require__(10),redefine=__webpack_require__(25),hide=__webpack_require__(15),has=__webpack_require__(26),Iterators=__webpack_require__(27),$iterCreate=__webpack_require__(28),setToStringTag=__webpack_require__(44),getPrototypeOf=__webpack_require__(46),ITERATOR=__webpack_require__(45)("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this};module.exports=function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCED){$iterCreate(Constructor,NAME,next);var methods,key,IteratorPrototype,getMethod=function(kind){if(!BUGGY&&kind in proto)return proto[kind];switch(kind){case KEYS:return function(){return new Constructor(this,kind)};case VALUES:return function(){return new Constructor(this,kind)}}return function(){return new Constructor(this,kind)}},TAG=NAME+" Iterator",DEF_VALUES=DEFAULT==VALUES,VALUES_BUG=!1,proto=Base.prototype,$native=proto[ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT],$default=$native||getMethod(DEFAULT),$entries=DEFAULT?DEF_VALUES?getMethod("entries"):$default:void 0,$anyNative="Array"==NAME?proto.entries||$native:$native;if(
// Fix native
$anyNative&&(IteratorPrototype=getPrototypeOf($anyNative.call(new Base)),IteratorPrototype!==Object.prototype&&IteratorPrototype.next&&(
// Set @@toStringTag to native iterators
setToStringTag(IteratorPrototype,TAG,!0),
// fix for some old engines
LIBRARY||has(IteratorPrototype,ITERATOR)||hide(IteratorPrototype,ITERATOR,returnThis))),
// fix Array#{values, @@iterator}.name in V8 / FF
DEF_VALUES&&$native&&$native.name!==VALUES&&(VALUES_BUG=!0,$default=function(){return $native.call(this)}),
// Define iterator
LIBRARY&&!FORCED||!BUGGY&&!VALUES_BUG&&proto[ITERATOR]||hide(proto,ITERATOR,$default),
// Plug for library
Iterators[NAME]=$default,Iterators[TAG]=returnThis,DEFAULT)if(methods={values:DEF_VALUES?$default:getMethod(VALUES),keys:IS_SET?$default:getMethod(KEYS),entries:$entries},FORCED)for(key in methods)key in proto||redefine(proto,key,methods[key]);else $export($export.P+$export.F*(BUGGY||VALUES_BUG),NAME,methods);return methods}},/* 9 */
/***/
function(module,exports){module.exports=!0},/* 10 */
/***/
function(module,exports,__webpack_require__){var global=__webpack_require__(11),core=__webpack_require__(12),ctx=__webpack_require__(13),hide=__webpack_require__(15),PROTOTYPE="prototype",$export=function(type,name,source){var key,own,out,IS_FORCED=type&$export.F,IS_GLOBAL=type&$export.G,IS_STATIC=type&$export.S,IS_PROTO=type&$export.P,IS_BIND=type&$export.B,IS_WRAP=type&$export.W,exports=IS_GLOBAL?core:core[name]||(core[name]={}),expProto=exports[PROTOTYPE],target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name]||{})[PROTOTYPE];IS_GLOBAL&&(source=name);for(key in source)
// contains in native
own=!IS_FORCED&&target&&void 0!==target[key],own&&key in exports||(
// export native or passed
out=own?target[key]:source[key],
// prevent global pollution for namespaces
exports[key]=IS_GLOBAL&&"function"!=typeof target[key]?source[key]:IS_BIND&&own?ctx(out,global):IS_WRAP&&target[key]==out?function(C){var F=function(a,b,c){if(this instanceof C){switch(arguments.length){case 0:return new C;case 1:return new C(a);case 2:return new C(a,b)}return new C(a,b,c)}return C.apply(this,arguments)};return F[PROTOTYPE]=C[PROTOTYPE],F}(out):IS_PROTO&&"function"==typeof out?ctx(Function.call,out):out,
// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
IS_PROTO&&((exports.virtual||(exports.virtual={}))[key]=out,
// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
type&$export.R&&expProto&&!expProto[key]&&hide(expProto,key,out)))};
// type bitmap
$export.F=1,// forced
$export.G=2,// global
$export.S=4,// static
$export.P=8,// proto
$export.B=16,// bind
$export.W=32,// wrap
$export.U=64,// safe
$export.R=128,// real proto method for `library`
module.exports=$export},/* 11 */
/***/
function(module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global)},/* 12 */
/***/
function(module,exports){var core=module.exports={version:"2.5.0"};"number"==typeof __e&&(__e=core)},/* 13 */
/***/
function(module,exports,__webpack_require__){
// optional / simple context binding
var aFunction=__webpack_require__(14);module.exports=function(fn,that,length){if(aFunction(fn),void 0===that)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}},/* 14 */
/***/
function(module,exports){module.exports=function(it){if("function"!=typeof it)throw TypeError(it+" is not a function!");return it}},/* 15 */
/***/
function(module,exports,__webpack_require__){var dP=__webpack_require__(16),createDesc=__webpack_require__(24);module.exports=__webpack_require__(20)?function(object,key,value){return dP.f(object,key,createDesc(1,value))}:function(object,key,value){return object[key]=value,object}},/* 16 */
/***/
function(module,exports,__webpack_require__){var anObject=__webpack_require__(17),IE8_DOM_DEFINE=__webpack_require__(19),toPrimitive=__webpack_require__(23),dP=Object.defineProperty;exports.f=__webpack_require__(20)?Object.defineProperty:function(O,P,Attributes){if(anObject(O),P=toPrimitive(P,!0),anObject(Attributes),IE8_DOM_DEFINE)try{return dP(O,P,Attributes)}catch(e){}if("get"in Attributes||"set"in Attributes)throw TypeError("Accessors not supported!");return"value"in Attributes&&(O[P]=Attributes.value),O}},/* 17 */
/***/
function(module,exports,__webpack_require__){var isObject=__webpack_require__(18);module.exports=function(it){if(!isObject(it))throw TypeError(it+" is not an object!");return it}},/* 18 */
/***/
function(module,exports){module.exports=function(it){return"object"==typeof it?null!==it:"function"==typeof it}},/* 19 */
/***/
function(module,exports,__webpack_require__){module.exports=!__webpack_require__(20)&&!__webpack_require__(21)(function(){return 7!=Object.defineProperty(__webpack_require__(22)("div"),"a",{get:function(){return 7}}).a})},/* 20 */
/***/
function(module,exports,__webpack_require__){
// Thank's IE8 for his funny defineProperty
module.exports=!__webpack_require__(21)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 21 */
/***/
function(module,exports){module.exports=function(exec){try{return!!exec()}catch(e){return!0}}},/* 22 */
/***/
function(module,exports,__webpack_require__){var isObject=__webpack_require__(18),document=__webpack_require__(11).document,is=isObject(document)&&isObject(document.createElement);module.exports=function(it){return is?document.createElement(it):{}}},/* 23 */
/***/
function(module,exports,__webpack_require__){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject=__webpack_require__(18);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports=function(it,S){if(!isObject(it))return it;var fn,val;if(S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;if("function"==typeof(fn=it.valueOf)&&!isObject(val=fn.call(it)))return val;if(!S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value")}},/* 24 */
/***/
function(module,exports){module.exports=function(bitmap,value){return{enumerable:!(1&bitmap),configurable:!(2&bitmap),writable:!(4&bitmap),value:value}}},/* 25 */
/***/
function(module,exports,__webpack_require__){module.exports=__webpack_require__(15)},/* 26 */
/***/
function(module,exports){var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key)}},/* 27 */
/***/
function(module,exports){module.exports={}},/* 28 */
/***/
function(module,exports,__webpack_require__){"use strict";var create=__webpack_require__(29),descriptor=__webpack_require__(24),setToStringTag=__webpack_require__(44),IteratorPrototype={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(15)(IteratorPrototype,__webpack_require__(45)("iterator"),function(){return this}),module.exports=function(Constructor,NAME,next){Constructor.prototype=create(IteratorPrototype,{next:descriptor(1,next)}),setToStringTag(Constructor,NAME+" Iterator")}},/* 29 */
/***/
function(module,exports,__webpack_require__){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject=__webpack_require__(17),dPs=__webpack_require__(30),enumBugKeys=__webpack_require__(42),IE_PROTO=__webpack_require__(39)("IE_PROTO"),Empty=function(){},PROTOTYPE="prototype",createDict=function(){
// Thrash, waste and sodomy: IE GC bug
var iframeDocument,iframe=__webpack_require__(22)("iframe"),i=enumBugKeys.length,lt="<",gt=">";for(iframe.style.display="none",__webpack_require__(43).appendChild(iframe),iframe.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
iframeDocument=iframe.contentWindow.document,iframeDocument.open(),iframeDocument.write(lt+"script"+gt+"document.F=Object"+lt+"/script"+gt),iframeDocument.close(),createDict=iframeDocument.F;i--;)delete createDict[PROTOTYPE][enumBugKeys[i]];return createDict()};module.exports=Object.create||function(O,Properties){var result;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==O?(Empty[PROTOTYPE]=anObject(O),result=new Empty,Empty[PROTOTYPE]=null,result[IE_PROTO]=O):result=createDict(),void 0===Properties?result:dPs(result,Properties)}},/* 30 */
/***/
function(module,exports,__webpack_require__){var dP=__webpack_require__(16),anObject=__webpack_require__(17),getKeys=__webpack_require__(31);module.exports=__webpack_require__(20)?Object.defineProperties:function(O,Properties){anObject(O);for(var P,keys=getKeys(Properties),length=keys.length,i=0;length>i;)dP.f(O,P=keys[i++],Properties[P]);return O}},/* 31 */
/***/
function(module,exports,__webpack_require__){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys=__webpack_require__(32),enumBugKeys=__webpack_require__(42);module.exports=Object.keys||function(O){return $keys(O,enumBugKeys)}},/* 32 */
/***/
function(module,exports,__webpack_require__){var has=__webpack_require__(26),toIObject=__webpack_require__(33),arrayIndexOf=__webpack_require__(36)(!1),IE_PROTO=__webpack_require__(39)("IE_PROTO");module.exports=function(object,names){var key,O=toIObject(object),i=0,result=[];for(key in O)key!=IE_PROTO&&has(O,key)&&result.push(key);
// Don't enum bug & hidden keys
for(;names.length>i;)has(O,key=names[i++])&&(~arrayIndexOf(result,key)||result.push(key));return result}},/* 33 */
/***/
function(module,exports,__webpack_require__){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject=__webpack_require__(34),defined=__webpack_require__(7);module.exports=function(it){return IObject(defined(it))}},/* 34 */
/***/
function(module,exports,__webpack_require__){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof=__webpack_require__(35);
// eslint-disable-next-line no-prototype-builtins
module.exports=Object("z").propertyIsEnumerable(0)?Object:function(it){return"String"==cof(it)?it.split(""):Object(it)}},/* 35 */
/***/
function(module,exports){var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1)}},/* 36 */
/***/
function(module,exports,__webpack_require__){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject=__webpack_require__(33),toLength=__webpack_require__(37),toAbsoluteIndex=__webpack_require__(38);module.exports=function(IS_INCLUDES){return function($this,el,fromIndex){var value,O=toIObject($this),length=toLength(O.length),index=toAbsoluteIndex(fromIndex,length);
// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(IS_INCLUDES&&el!=el){for(;length>index;)
// eslint-disable-next-line no-self-compare
if(value=O[index++],value!=value)return!0}else for(;length>index;index++)if((IS_INCLUDES||index in O)&&O[index]===el)return IS_INCLUDES||index||0;return!IS_INCLUDES&&-1}}},/* 37 */
/***/
function(module,exports,__webpack_require__){
// 7.1.15 ToLength
var toInteger=__webpack_require__(6),min=Math.min;module.exports=function(it){return it>0?min(toInteger(it),9007199254740991):0}},/* 38 */
/***/
function(module,exports,__webpack_require__){var toInteger=__webpack_require__(6),max=Math.max,min=Math.min;module.exports=function(index,length){return index=toInteger(index),index<0?max(index+length,0):min(index,length)}},/* 39 */
/***/
function(module,exports,__webpack_require__){var shared=__webpack_require__(40)("keys"),uid=__webpack_require__(41);module.exports=function(key){return shared[key]||(shared[key]=uid(key))}},/* 40 */
/***/
function(module,exports,__webpack_require__){var global=__webpack_require__(11),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});module.exports=function(key){return store[key]||(store[key]={})}},/* 41 */
/***/
function(module,exports){var id=0,px=Math.random();module.exports=function(key){return"Symbol(".concat(void 0===key?"":key,")_",(++id+px).toString(36))}},/* 42 */
/***/
function(module,exports){
// IE 8- don't enum bug keys
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 43 */
/***/
function(module,exports,__webpack_require__){var document=__webpack_require__(11).document;module.exports=document&&document.documentElement},/* 44 */
/***/
function(module,exports,__webpack_require__){var def=__webpack_require__(16).f,has=__webpack_require__(26),TAG=__webpack_require__(45)("toStringTag");module.exports=function(it,tag,stat){it&&!has(it=stat?it:it.prototype,TAG)&&def(it,TAG,{configurable:!0,value:tag})}},/* 45 */
/***/
function(module,exports,__webpack_require__){var store=__webpack_require__(40)("wks"),uid=__webpack_require__(41),Symbol=__webpack_require__(11).Symbol,USE_SYMBOL="function"==typeof Symbol,$exports=module.exports=function(name){return store[name]||(store[name]=USE_SYMBOL&&Symbol[name]||(USE_SYMBOL?Symbol:uid)("Symbol."+name))};$exports.store=store},/* 46 */
/***/
function(module,exports,__webpack_require__){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has=__webpack_require__(26),toObject=__webpack_require__(47),IE_PROTO=__webpack_require__(39)("IE_PROTO"),ObjectProto=Object.prototype;module.exports=Object.getPrototypeOf||function(O){return O=toObject(O),has(O,IE_PROTO)?O[IE_PROTO]:"function"==typeof O.constructor&&O instanceof O.constructor?O.constructor.prototype:O instanceof Object?ObjectProto:null}},/* 47 */
/***/
function(module,exports,__webpack_require__){
// 7.1.13 ToObject(argument)
var defined=__webpack_require__(7);module.exports=function(it){return Object(defined(it))}},/* 48 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(49);for(var global=__webpack_require__(11),hide=__webpack_require__(15),Iterators=__webpack_require__(27),TO_STRING_TAG=__webpack_require__(45)("toStringTag"),DOMIterables="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),i=0;i<DOMIterables.length;i++){var NAME=DOMIterables[i],Collection=global[NAME],proto=Collection&&Collection.prototype;proto&&!proto[TO_STRING_TAG]&&hide(proto,TO_STRING_TAG,NAME),Iterators[NAME]=Iterators.Array}},/* 49 */
/***/
function(module,exports,__webpack_require__){"use strict";var addToUnscopables=__webpack_require__(50),step=__webpack_require__(51),Iterators=__webpack_require__(27),toIObject=__webpack_require__(33);
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports=__webpack_require__(8)(Array,"Array",function(iterated,kind){this._t=toIObject(iterated),// target
this._i=0,// next index
this._k=kind},function(){var O=this._t,kind=this._k,index=this._i++;return!O||index>=O.length?(this._t=void 0,step(1)):"keys"==kind?step(0,index):"values"==kind?step(0,O[index]):step(0,[index,O[index]])},"values"),
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments=Iterators.Array,addToUnscopables("keys"),addToUnscopables("values"),addToUnscopables("entries")},/* 50 */
/***/
function(module,exports){module.exports=function(){}},/* 51 */
/***/
function(module,exports){module.exports=function(done,value){return{value:value,done:!!done}}},/* 52 */
/***/
function(module,exports,__webpack_require__){"use strict";var Internal,newGenericPromiseCapability,OwnPromiseCapability,Wrapper,LIBRARY=__webpack_require__(9),global=__webpack_require__(11),ctx=__webpack_require__(13),classof=__webpack_require__(53),$export=__webpack_require__(10),isObject=__webpack_require__(18),aFunction=__webpack_require__(14),anInstance=__webpack_require__(54),forOf=__webpack_require__(55),speciesConstructor=__webpack_require__(59),task=__webpack_require__(60).set,microtask=__webpack_require__(62)(),newPromiseCapabilityModule=__webpack_require__(63),perform=__webpack_require__(64),promiseResolve=__webpack_require__(65),PROMISE="Promise",TypeError=global.TypeError,process=global.process,$Promise=global[PROMISE],isNode="process"==classof(process),empty=function(){},newPromiseCapability=newGenericPromiseCapability=newPromiseCapabilityModule.f,USE_NATIVE=!!function(){try{
// correct subclassing with @@species support
var promise=$Promise.resolve(1),FakePromise=(promise.constructor={})[__webpack_require__(45)("species")]=function(exec){exec(empty,empty)};
// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return(isNode||"function"==typeof PromiseRejectionEvent)&&promise.then(empty)instanceof FakePromise}catch(e){}}(),sameConstructor=LIBRARY?function(a,b){
// with library wrapper special case
return a===b||a===$Promise&&b===Wrapper}:function(a,b){return a===b},isThenable=function(it){var then;return!(!isObject(it)||"function"!=typeof(then=it.then))&&then},notify=function(promise,isReject){if(!promise._n){promise._n=!0;var chain=promise._c;microtask(function(){for(var value=promise._v,ok=1==promise._s,i=0,run=function(reaction){var result,then,handler=ok?reaction.ok:reaction.fail,resolve=reaction.resolve,reject=reaction.reject,domain=reaction.domain;try{handler?(ok||(2==promise._h&&onHandleUnhandled(promise),promise._h=1),handler===!0?result=value:(domain&&domain.enter(),result=handler(value),domain&&domain.exit()),result===reaction.promise?reject(TypeError("Promise-chain cycle")):(then=isThenable(result))?then.call(result,resolve,reject):resolve(result)):reject(value)}catch(e){reject(e)}};chain.length>i;)run(chain[i++]);// variable length - can't use forEach
promise._c=[],promise._n=!1,isReject&&!promise._h&&onUnhandled(promise)})}},onUnhandled=function(promise){task.call(global,function(){var result,handler,console,value=promise._v,unhandled=isUnhandled(promise);if(unhandled&&(result=perform(function(){isNode?process.emit("unhandledRejection",value,promise):(handler=global.onunhandledrejection)?handler({promise:promise,reason:value}):(console=global.console)&&console.error&&console.error("Unhandled promise rejection",value)}),
// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
promise._h=isNode||isUnhandled(promise)?2:1),promise._a=void 0,unhandled&&result.e)throw result.v})},isUnhandled=function(promise){if(1==promise._h)return!1;for(var reaction,chain=promise._a||promise._c,i=0;chain.length>i;)if(reaction=chain[i++],reaction.fail||!isUnhandled(reaction.promise))return!1;return!0},onHandleUnhandled=function(promise){task.call(global,function(){var handler;isNode?process.emit("rejectionHandled",promise):(handler=global.onrejectionhandled)&&handler({promise:promise,reason:promise._v})})},$reject=function(value){var promise=this;promise._d||(promise._d=!0,promise=promise._w||promise,// unwrap
promise._v=value,promise._s=2,promise._a||(promise._a=promise._c.slice()),notify(promise,!0))},$resolve=function(value){var then,promise=this;if(!promise._d){promise._d=!0,promise=promise._w||promise;// unwrap
try{if(promise===value)throw TypeError("Promise can't be resolved itself");(then=isThenable(value))?microtask(function(){var wrapper={_w:promise,_d:!1};// wrap
try{then.call(value,ctx($resolve,wrapper,1),ctx($reject,wrapper,1))}catch(e){$reject.call(wrapper,e)}}):(promise._v=value,promise._s=1,notify(promise,!1))}catch(e){$reject.call({_w:promise,_d:!1},e)}}};
// constructor polyfill
USE_NATIVE||(
// 25.4.3.1 Promise(executor)
$Promise=function(executor){anInstance(this,$Promise,PROMISE,"_h"),aFunction(executor),Internal.call(this);try{executor(ctx($resolve,this,1),ctx($reject,this,1))}catch(err){$reject.call(this,err)}},
// eslint-disable-next-line no-unused-vars
Internal=function(executor){this._c=[],// <- awaiting reactions
this._a=void 0,// <- checked in isUnhandled reactions
this._s=0,// <- state
this._d=!1,// <- done
this._v=void 0,// <- value
this._h=0,// <- rejection state, 0 - default, 1 - handled, 2 - unhandled
this._n=!1},Internal.prototype=__webpack_require__(66)($Promise.prototype,{
// 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
then:function(onFulfilled,onRejected){var reaction=newPromiseCapability(speciesConstructor(this,$Promise));return reaction.ok="function"!=typeof onFulfilled||onFulfilled,reaction.fail="function"==typeof onRejected&&onRejected,reaction.domain=isNode?process.domain:void 0,this._c.push(reaction),this._a&&this._a.push(reaction),this._s&&notify(this,!1),reaction.promise},
// 25.4.5.1 Promise.prototype.catch(onRejected)
catch:function(onRejected){return this.then(void 0,onRejected)}}),OwnPromiseCapability=function(){var promise=new Internal;this.promise=promise,this.resolve=ctx($resolve,promise,1),this.reject=ctx($reject,promise,1)},newPromiseCapabilityModule.f=newPromiseCapability=function(C){return sameConstructor($Promise,C)?new OwnPromiseCapability(C):newGenericPromiseCapability(C)}),$export($export.G+$export.W+$export.F*!USE_NATIVE,{Promise:$Promise}),__webpack_require__(44)($Promise,PROMISE),__webpack_require__(67)(PROMISE),Wrapper=__webpack_require__(12)[PROMISE],
// statics
$export($export.S+$export.F*!USE_NATIVE,PROMISE,{
// 25.4.4.5 Promise.reject(r)
reject:function(r){var capability=newPromiseCapability(this),$$reject=capability.reject;return $$reject(r),capability.promise}}),$export($export.S+$export.F*(LIBRARY||!USE_NATIVE),PROMISE,{
// 25.4.4.6 Promise.resolve(x)
resolve:function(x){
// instanceof instead of internal slot check because we should fix it without replacement native Promise core
// instanceof instead of internal slot check because we should fix it without replacement native Promise core
return x instanceof $Promise&&sameConstructor(x.constructor,this)?x:promiseResolve(this,x)}}),$export($export.S+$export.F*!(USE_NATIVE&&__webpack_require__(68)(function(iter){$Promise.all(iter).catch(empty)})),PROMISE,{
// 25.4.4.1 Promise.all(iterable)
all:function(iterable){var C=this,capability=newPromiseCapability(C),resolve=capability.resolve,reject=capability.reject,result=perform(function(){var values=[],index=0,remaining=1;forOf(iterable,!1,function(promise){var $index=index++,alreadyCalled=!1;values.push(void 0),remaining++,C.resolve(promise).then(function(value){alreadyCalled||(alreadyCalled=!0,values[$index]=value,--remaining||resolve(values))},reject)}),--remaining||resolve(values)});return result.e&&reject(result.v),capability.promise},
// 25.4.4.4 Promise.race(iterable)
race:function(iterable){var C=this,capability=newPromiseCapability(C),reject=capability.reject,result=perform(function(){forOf(iterable,!1,function(promise){C.resolve(promise).then(capability.resolve,reject)})});return result.e&&reject(result.v),capability.promise}})},/* 53 */
/***/
function(module,exports,__webpack_require__){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof=__webpack_require__(35),TAG=__webpack_require__(45)("toStringTag"),ARG="Arguments"==cof(function(){return arguments}()),tryGet=function(it,key){try{return it[key]}catch(e){}};module.exports=function(it){var O,T,B;return void 0===it?"Undefined":null===it?"Null":"string"==typeof(T=tryGet(O=Object(it),TAG))?T:ARG?cof(O):"Object"==(B=cof(O))&&"function"==typeof O.callee?"Arguments":B}},/* 54 */
/***/
function(module,exports){module.exports=function(it,Constructor,name,forbiddenField){if(!(it instanceof Constructor)||void 0!==forbiddenField&&forbiddenField in it)throw TypeError(name+": incorrect invocation!");return it}},/* 55 */
/***/
function(module,exports,__webpack_require__){var ctx=__webpack_require__(13),call=__webpack_require__(56),isArrayIter=__webpack_require__(57),anObject=__webpack_require__(17),toLength=__webpack_require__(37),getIterFn=__webpack_require__(58),BREAK={},RETURN={},exports=module.exports=function(iterable,entries,fn,that,ITERATOR){var length,step,iterator,result,iterFn=ITERATOR?function(){return iterable}:getIterFn(iterable),f=ctx(fn,that,entries?2:1),index=0;if("function"!=typeof iterFn)throw TypeError(iterable+" is not iterable!");
// fast case for arrays with default iterator
if(isArrayIter(iterFn)){for(length=toLength(iterable.length);length>index;index++)if(result=entries?f(anObject(step=iterable[index])[0],step[1]):f(iterable[index]),result===BREAK||result===RETURN)return result}else for(iterator=iterFn.call(iterable);!(step=iterator.next()).done;)if(result=call(iterator,f,step.value,entries),result===BREAK||result===RETURN)return result};exports.BREAK=BREAK,exports.RETURN=RETURN},/* 56 */
/***/
function(module,exports,__webpack_require__){
// call something on iterator step with safe closing on error
var anObject=__webpack_require__(17);module.exports=function(iterator,fn,value,entries){try{return entries?fn(anObject(value)[0],value[1]):fn(value)}catch(e){var ret=iterator.return;throw void 0!==ret&&anObject(ret.call(iterator)),e}}},/* 57 */
/***/
function(module,exports,__webpack_require__){
// check on default Array iterator
var Iterators=__webpack_require__(27),ITERATOR=__webpack_require__(45)("iterator"),ArrayProto=Array.prototype;module.exports=function(it){return void 0!==it&&(Iterators.Array===it||ArrayProto[ITERATOR]===it)}},/* 58 */
/***/
function(module,exports,__webpack_require__){var classof=__webpack_require__(53),ITERATOR=__webpack_require__(45)("iterator"),Iterators=__webpack_require__(27);module.exports=__webpack_require__(12).getIteratorMethod=function(it){if(void 0!=it)return it[ITERATOR]||it["@@iterator"]||Iterators[classof(it)]}},/* 59 */
/***/
function(module,exports,__webpack_require__){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject=__webpack_require__(17),aFunction=__webpack_require__(14),SPECIES=__webpack_require__(45)("species");module.exports=function(O,D){var S,C=anObject(O).constructor;return void 0===C||void 0==(S=anObject(C)[SPECIES])?D:aFunction(S)}},/* 60 */
/***/
function(module,exports,__webpack_require__){var defer,channel,port,ctx=__webpack_require__(13),invoke=__webpack_require__(61),html=__webpack_require__(43),cel=__webpack_require__(22),global=__webpack_require__(11),process=global.process,setTask=global.setImmediate,clearTask=global.clearImmediate,MessageChannel=global.MessageChannel,Dispatch=global.Dispatch,counter=0,queue={},ONREADYSTATECHANGE="onreadystatechange",run=function(){var id=+this;
// eslint-disable-next-line no-prototype-builtins
if(queue.hasOwnProperty(id)){var fn=queue[id];delete queue[id],fn()}},listener=function(event){run.call(event.data)};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
setTask&&clearTask||(setTask=function(fn){for(var args=[],i=1;arguments.length>i;)args.push(arguments[i++]);return queue[++counter]=function(){
// eslint-disable-next-line no-new-func
invoke("function"==typeof fn?fn:Function(fn),args)},defer(counter),counter},clearTask=function(id){delete queue[id]},
// Node.js 0.8-
"process"==__webpack_require__(35)(process)?defer=function(id){process.nextTick(ctx(run,id,1))}:Dispatch&&Dispatch.now?defer=function(id){Dispatch.now(ctx(run,id,1))}:MessageChannel?(channel=new MessageChannel,port=channel.port2,channel.port1.onmessage=listener,defer=ctx(port.postMessage,port,1)):global.addEventListener&&"function"==typeof postMessage&&!global.importScripts?(defer=function(id){global.postMessage(id+"","*")},global.addEventListener("message",listener,!1)):defer=ONREADYSTATECHANGE in cel("script")?function(id){html.appendChild(cel("script"))[ONREADYSTATECHANGE]=function(){html.removeChild(this),run.call(id)}}:function(id){setTimeout(ctx(run,id,1),0)}),module.exports={set:setTask,clear:clearTask}},/* 61 */
/***/
function(module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports=function(fn,args,that){var un=void 0===that;switch(args.length){case 0:return un?fn():fn.call(that);case 1:return un?fn(args[0]):fn.call(that,args[0]);case 2:return un?fn(args[0],args[1]):fn.call(that,args[0],args[1]);case 3:return un?fn(args[0],args[1],args[2]):fn.call(that,args[0],args[1],args[2]);case 4:return un?fn(args[0],args[1],args[2],args[3]):fn.call(that,args[0],args[1],args[2],args[3])}return fn.apply(that,args)}},/* 62 */
/***/
function(module,exports,__webpack_require__){var global=__webpack_require__(11),macrotask=__webpack_require__(60).set,Observer=global.MutationObserver||global.WebKitMutationObserver,process=global.process,Promise=global.Promise,isNode="process"==__webpack_require__(35)(process);module.exports=function(){var head,last,notify,flush=function(){var parent,fn;for(isNode&&(parent=process.domain)&&parent.exit();head;){fn=head.fn,head=head.next;try{fn()}catch(e){throw head?notify():last=void 0,e}}last=void 0,parent&&parent.enter()};
// Node.js
if(isNode)notify=function(){process.nextTick(flush)};else if(Observer){var toggle=!0,node=document.createTextNode("");new Observer(flush).observe(node,{characterData:!0}),// eslint-disable-line no-new
notify=function(){node.data=toggle=!toggle}}else if(Promise&&Promise.resolve){var promise=Promise.resolve();notify=function(){promise.then(flush)}}else notify=function(){
// strange IE + webpack dev server bug - use .call(global)
macrotask.call(global,flush)};return function(fn){var task={fn:fn,next:void 0};last&&(last.next=task),head||(head=task,notify()),last=task}}},/* 63 */
/***/
function(module,exports,__webpack_require__){"use strict";function PromiseCapability(C){var resolve,reject;this.promise=new C(function($$resolve,$$reject){if(void 0!==resolve||void 0!==reject)throw TypeError("Bad Promise constructor");resolve=$$resolve,reject=$$reject}),this.resolve=aFunction(resolve),this.reject=aFunction(reject)}
// 25.4.1.5 NewPromiseCapability(C)
var aFunction=__webpack_require__(14);module.exports.f=function(C){return new PromiseCapability(C)}},/* 64 */
/***/
function(module,exports){module.exports=function(exec){try{return{e:!1,v:exec()}}catch(e){return{e:!0,v:e}}}},/* 65 */
/***/
function(module,exports,__webpack_require__){var newPromiseCapability=__webpack_require__(63);module.exports=function(C,x){var promiseCapability=newPromiseCapability.f(C),resolve=promiseCapability.resolve;return resolve(x),promiseCapability.promise}},/* 66 */
/***/
function(module,exports,__webpack_require__){var hide=__webpack_require__(15);module.exports=function(target,src,safe){for(var key in src)safe&&target[key]?target[key]=src[key]:hide(target,key,src[key]);return target}},/* 67 */
/***/
function(module,exports,__webpack_require__){"use strict";var global=__webpack_require__(11),core=__webpack_require__(12),dP=__webpack_require__(16),DESCRIPTORS=__webpack_require__(20),SPECIES=__webpack_require__(45)("species");module.exports=function(KEY){var C="function"==typeof core[KEY]?core[KEY]:global[KEY];DESCRIPTORS&&C&&!C[SPECIES]&&dP.f(C,SPECIES,{configurable:!0,get:function(){return this}})}},/* 68 */
/***/
function(module,exports,__webpack_require__){var ITERATOR=__webpack_require__(45)("iterator"),SAFE_CLOSING=!1;try{var riter=[7][ITERATOR]();riter.return=function(){SAFE_CLOSING=!0},
// eslint-disable-next-line no-throw-literal
Array.from(riter,function(){throw 2})}catch(e){}module.exports=function(exec,skipClosing){if(!skipClosing&&!SAFE_CLOSING)return!1;var safe=!1;try{var arr=[7],iter=arr[ITERATOR]();iter.next=function(){return{done:safe=!0}},arr[ITERATOR]=function(){return iter},exec(arr)}catch(e){}return safe}},/* 69 */
/***/
function(module,exports,__webpack_require__){
// https://github.com/tc39/proposal-promise-finally
"use strict";var $export=__webpack_require__(10),core=__webpack_require__(12),global=__webpack_require__(11),speciesConstructor=__webpack_require__(59),promiseResolve=__webpack_require__(65);$export($export.P+$export.R,"Promise",{finally:function(onFinally){var C=speciesConstructor(this,core.Promise||global.Promise),isFunction="function"==typeof onFinally;return this.then(isFunction?function(x){return promiseResolve(C,onFinally()).then(function(){return x})}:onFinally,isFunction?function(e){return promiseResolve(C,onFinally()).then(function(){throw e})}:onFinally)}})},/* 70 */
/***/
function(module,exports,__webpack_require__){"use strict";
// https://github.com/tc39/proposal-promise-try
var $export=__webpack_require__(10),newPromiseCapability=__webpack_require__(63),perform=__webpack_require__(64);$export($export.S,"Promise",{try:function(callbackfn){var promiseCapability=newPromiseCapability.f(this),result=perform(callbackfn);return(result.e?promiseCapability.reject:promiseCapability.resolve)(result.v),promiseCapability.promise}})},/* 71 */
/***/
function(module,exports){"use strict";exports.__esModule=!0,exports.default=function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}},/* 72 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.__esModule=!0;var _defineProperty=__webpack_require__(73),_defineProperty2=_interopRequireDefault(_defineProperty);exports.default=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),(0,_defineProperty2.default)(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}()},/* 73 */
/***/
function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(74),__esModule:!0}},/* 74 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(75);var $Object=__webpack_require__(12).Object;module.exports=function(it,key,desc){return $Object.defineProperty(it,key,desc)}},/* 75 */
/***/
function(module,exports,__webpack_require__){var $export=__webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S+$export.F*!__webpack_require__(20),"Object",{defineProperty:__webpack_require__(16).f})},/* 76 */
/***/
function(module,exports,__webpack_require__){/*!
	 *  VueLongpress plugin v1.0.1
	 * 
	 *  A button component that requires you to keep pressing to confirm a given action
	 * 
	 *  @author Javis Perez <javisperez@gmail.com>
	 *  https://github.com/javisperez/vue-longpress
	 *  Released under the MIT License.
	 */
!function(root,factory){module.exports=factory()}(this,function(){/******/
return function(modules){/******/
// The require function
/******/
function __webpack_require__(moduleId){/******/
// Check if module is in cache
/******/
if(installedModules[moduleId])/******/
return installedModules[moduleId].exports;/******/
// Create a new module (and put it into the cache)
/******/
var module=installedModules[moduleId]={/******/
exports:{},/******/
id:moduleId,/******/
loaded:!1};/******/
// Return the exports of the module
/******/
/******/
// Execute the module function
/******/
/******/
// Flag the module as loaded
/******/
return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}// webpackBootstrap
/******/
// The module cache
/******/
var installedModules={};/******/
// Load entry module and return exports
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
// expose the module cache
/******/
/******/
// __webpack_public_path__
/******/
return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([/* 0 */
/***/
function(module,exports,__webpack_require__){/* styles */
__webpack_require__(1);var Component=__webpack_require__(6)(/* script */
__webpack_require__(7),/* template */
__webpack_require__(8),/* scopeId */
null,/* cssModules */
null);module.exports=Component.exports},/* 1 */
/***/
function(module,exports,__webpack_require__){
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(2);"string"==typeof content&&(content=[[module.id,content,""]]),content.locals&&(module.exports=content.locals),
// add the styles to the DOM
__webpack_require__(4)("481f65d0",content,!0)},/* 2 */
/***/
function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(3)(),
// imports
// module
exports.push([module.id,".longpress-button{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}.longpress-button .progress-bar{position:absolute;left:0;width:0;bottom:0;height:4px;background:#fff;opacity:.4}.longpress-button.counting .progress-bar{animation:longpress-progress 5s linear}.longpress-button.executing{opacity:.5;cursor:denied}@keyframes longpress-progress{to{width:100%}}",""])},/* 3 */
/***/
function(module,exports){/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/
// css base code, injected by the css-loader
module.exports=function(){var list=[];
// return the list of modules as css string
// import a list of modules into the list
return list.toString=function(){for(var result=[],i=0;i<this.length;i++){var item=this[i];item[2]?result.push("@media "+item[2]+"{"+item[1]+"}"):result.push(item[1])}return result.join("")},list.i=function(modules,mediaQuery){"string"==typeof modules&&(modules=[[null,modules,""]]);for(var alreadyImportedModules={},i=0;i<this.length;i++){var id=this[i][0];"number"==typeof id&&(alreadyImportedModules[id]=!0)}for(i=0;i<modules.length;i++){var item=modules[i];
// skip already imported module
// this implementation is not 100% perfect for weird media query combinations
//  when a module is imported multiple times with different media queries.
//  I hope this will never occur (Hey this way we have smaller bundles)
"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},/* 4 */
/***/
function(module,exports,__webpack_require__){function addStylesToDom(styles){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j]));domStyle.parts.length>item.parts.length&&(domStyle.parts.length=item.parts.length)}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j]));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function listToStyles(parentId,list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={css:css,media:media,sourceMap:sourceMap};newStyles[id]?(part.id=parentId+":"+newStyles[id].parts.length,newStyles[id].parts.push(part)):(part.id=parentId+":0",styles.push(newStyles[id]={id:id,parts:[part]}))}return styles}function createStyleElement(){var styleElement=document.createElement("style");return styleElement.type="text/css",head.appendChild(styleElement),styleElement}function addStyle(obj){var update,remove,styleElement=document.querySelector('style[data-vue-ssr-id~="'+obj.id+'"]'),hasSSR=null!=styleElement;
// if in production mode and style is already provided by SSR,
// simply do nothing.
if(hasSSR&&isProduction)return noop;if(isOldIE){
// use singleton mode for IE9.
var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement()),update=applyToSingletonTag.bind(null,styleElement,styleIndex,!1),remove=applyToSingletonTag.bind(null,styleElement,styleIndex,!0)}else
// use multi-style-tag mode in all other cases
styleElement=styleElement||createStyleElement(),update=applyToTag.bind(null,styleElement),remove=function(){styleElement.parentNode.removeChild(styleElement)};return hasSSR||update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet)styleElement.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=styleElement.childNodes;childNodes[index]&&styleElement.removeChild(childNodes[index]),childNodes.length?styleElement.insertBefore(cssNode,childNodes[index]):styleElement.appendChild(cssNode)}}function applyToTag(styleElement,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media&&styleElement.setAttribute("media",media),sourceMap&&(
// https://developer.chrome.com/devtools/docs/javascript-debugging
// this makes source maps inside style tags work properly in Chrome
css+="\n/*# sourceURL="+sourceMap.sources[0]+" */",
// http://stackoverflow.com/a/26603875
css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */"),styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}/*
		  MIT License http://www.opensource.org/licenses/mit-license.php
		  Author Tobias Koppers @sokra
		  Modified by Evan You @yyx990803
		*/
var hasDocument="undefined"!=typeof document,listToStyles=__webpack_require__(5),stylesInDom={},head=hasDocument&&(document.head||document.getElementsByTagName("head")[0]),singletonElement=null,singletonCounter=0,isProduction=!1,noop=function(){},isOldIE="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());module.exports=function(parentId,list,_isProduction){isProduction=_isProduction;var styles=listToStyles(parentId,list);return addStylesToDom(styles),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}newList?(styles=listToStyles(parentId,newList),addStylesToDom(styles)):styles=[];for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},/* 5 */
/***/
function(module,exports){/**
		 * Translates the list format produced by css-loader into something
		 * easier to manipulate.
		 */
module.exports=function(parentId,list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={id:parentId+":"+i,css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}},/* 6 */
/***/
function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);
// Vue.extend constructor export interop
var options="function"==typeof scriptExports?scriptExports.options:scriptExports;
// inject cssModules
if(
// render functions
compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),
// scopedId
scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},/* 7 */
/***/
function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var timer=null;exports.default={name:"longpress-button",props:["value","onConfirm","duration","pressingText","actionText"],created:function(){var _this=this;document.addEventListener("mouseup",function(){return _this.cancel()})},destroyed:function(){var _this2=this;document.removeEventListener("mouseup",function(){return _this2.cancel()})},data:function(){return{status:"default",counter:0}},methods:{triggerCount:function(){"executing"!==this.status&&"counting"!==this.status&&(this.status="counting",this.countAndConfirm())},countAndConfirm:function(){var _this3=this;timer=setTimeout(function(){return _this3.counter++,_this3.counter>=_this3.duration?(_this3.status="executing",clearTimeout(timer),void setTimeout(function(_){_this3.onConfirm&&_this3.onConfirm(_this3.value||null),_this3.reset()},1e3)):void _this3.countAndConfirm()},1e3)},reset:function(){this.status="default",this.cancel()},cancel:function(){"executing"!==this.status&&(this.counter=0,clearTimeout(timer),this.status="default")}},computed:{countingPressingText:function(){return this.pressingText.replace(/\{\$counter\}/gi,this.counter).replace(/\{\$rcounter\}/gi,this.duration-this.counter).replace(/\{\$duration\}/gi,this.duration)}}}},/* 8 */
/***/
function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"longpress-button",class:_vm.status,on:{touchend:function($event){_vm.cancel()},touchstart:function($event){$event.preventDefault(),_vm.triggerCount()},mouseup:function($event){_vm.cancel()},mousedown:function($event){$event.preventDefault(),_vm.triggerCount()}}},[_c("div",["default"===_vm.status?_vm._t("default"):_vm._e(),_vm._v(" "),"counting"===_vm.status?_c("span",[_vm._v(_vm._s(_vm.countingPressingText||"Keep pressing"))]):_vm._e(),_vm._v(" "),"executing"===_vm.status?_c("span",[_vm._v(_vm._s(_vm.actionText||"Please wait..."))]):_vm._e()],2),_vm._v(" "),_c("span",{staticClass:"progress-bar",style:"animation-duration:"+_vm.duration+"s"})])},staticRenderFns:[]}}])})},/* 77 */
/***/
function(module,exports){"use strict";function isNonNullObject(value){return!!value&&"object"==typeof value}function isNotSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"!==stringValue&&"[object Date]"!==stringValue}function emptyTarget(val){return Array.isArray(val)?[]:{}}function cloneIfNecessary(value,optionsArgument){var clone=optionsArgument&&optionsArgument.clone===!0;return clone&&index$2(value)?deepmerge(emptyTarget(value),value,optionsArgument):value}function defaultArrayMerge(target,source,optionsArgument){var destination=target.slice();return source.forEach(function(e,i){"undefined"==typeof destination[i]?destination[i]=cloneIfNecessary(e,optionsArgument):index$2(e)?destination[i]=deepmerge(target[i],e,optionsArgument):target.indexOf(e)===-1&&destination.push(cloneIfNecessary(e,optionsArgument))}),destination}function mergeObject(target,source,optionsArgument){var destination={};return index$2(target)&&Object.keys(target).forEach(function(key){destination[key]=cloneIfNecessary(target[key],optionsArgument)}),Object.keys(source).forEach(function(key){index$2(source[key])&&target[key]?destination[key]=deepmerge(target[key],source[key],optionsArgument):destination[key]=cloneIfNecessary(source[key],optionsArgument)}),destination}function deepmerge(target,source,optionsArgument){var sourceIsArray=Array.isArray(source),targetIsArray=Array.isArray(target),options=optionsArgument||{arrayMerge:defaultArrayMerge},sourceAndTargetTypesMatch=sourceIsArray===targetIsArray;if(sourceAndTargetTypesMatch){if(sourceIsArray){var arrayMerge=options.arrayMerge||defaultArrayMerge;return arrayMerge(target,source,optionsArgument)}return mergeObject(target,source,optionsArgument)}return cloneIfNecessary(source,optionsArgument)}var index$2=function(value){return isNonNullObject(value)&&isNotSpecial(value)};deepmerge.all=function(array,optionsArgument){if(!Array.isArray(array)||array.length<2)throw new Error("first argument should be an array with at least two elements");
// we are sure there are at least 2 values, so it is safe to have no initial value
return array.reduce(function(prev,next){return deepmerge(prev,next,optionsArgument)})};var index=deepmerge;module.exports=index}])});