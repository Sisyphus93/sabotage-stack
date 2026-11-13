/* stack3d-source-hash: 9656f295e2e1ee0ad42799cea0cc6087ea3257e344b5412b2a6705391042363f mode=min */
(()=>{var hd=0,uh=1,ud=2;var Tn=1,dd=2,er=3,Gn=0,kt=1,yt=2,An=0,Vn=1,Vt=2,dh=3,fh=4,fd=5;var hs=100,pd=101,md=102,gd=103,xd=104,_d=200,vd=201,yd=202,Md=203,ph=204,mh=205,Sd=206,bd=207,Ed=208,wd=209,Td=210,Ad=211,Rd=212,Cd=213,Pd=214,Sa=0,ba=1,Ea=2,Bs=3,wa=4,Ta=5,Aa=6,Ra=7,sl=0,Id=1,Dd=2,an=0,uo=1,fo=2,po=3,Yi=4,mo=5,us=6,Di=7;var gh=300,ds=301,tr=302,rl=303,ol=304,Os=1e3,en=1001,Ca=1002,ii=1003,qd=1004;var go=1005;var fi=1006,al=1007;var Zi=1008;var gi=1009,xh=1010,_h=1011,ir=1012,ll=1013,Ji=1014,qi=1015,$t=1016,cl=1017,hl=1018,fs=1020,vh=35902,yh=35899,Mh=1021,Sh=1022,$i=1023,vn=1026,Rn=1027,ul=1028,dl=1029,Wn=1030,fl=1031;var pl=1033,xo=33776,_o=33777,vo=33778,yo=33779,ml=35840,gl=35841,xl=35842,_l=35843,vl=36196,yl=37492,Ml=37496,Sl=37488,bl=37489,Mo=37490,El=37491,wl=37808,Tl=37809,Al=37810,Rl=37811,Cl=37812,Pl=37813,Il=37814,Dl=37815,ql=37816,Fl=37817,Ll=37818,Nl=37819,Ul=37820,Bl=37821,Ol=36492,Hl=36494,zl=36495,kl=36283,Gl=36284,So=36285,Vl=36286;var Fr=2300,Pa=2301,ya=2302,Qc=2303,jc=2400,eh=2401,th=2402;var Fd=3200;var bo=0,Ld=1,Cn="",Et="srgb",Lr="srgb-linear",Nr="linear",_t="srgb";var Ma=7680;var Nd=519,Ud=512,Bd=513,Od=514,bh=515,Hd=516,zd=517,Eh=518,wh=519,kd=35044,Ki=35048;var Th="300 es",Pi=2e3,Hs=2001;function Ip(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Dp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gd(){let s=Ur("canvas");return s.style.display="block",s}var bu={},zs=null;function Ah(...s){let e="THREE."+s.shift();zs?zs("log",e,...s):console.log(e,...s)}function Vd(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ze(...s){s=Vd(s);let e="THREE."+s.shift();if(zs)zs("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ve(...s){s=Vd(s);let e="THREE."+s.shift();if(zs)zs("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ns(...s){let e=s.join(" ");e in bu||(bu[e]=!0,ze(...s))}function Wd(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Xd={[Sa]:Sa,[Ea]:Aa,[wa]:wa,[Bs]:Ta,[ba]:ba,[Aa]:Ea,[Ra]:Ra,[Ta]:Bs},tn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,e);e.target=null}}},li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eu=1234567,Ns=Math.PI/180,ks=180/Math.PI;function ps(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(li[s&255]+li[s>>8&255]+li[s>>16&255]+li[s>>24&255]+"-"+li[e&255]+li[e>>8&255]+"-"+li[e>>16&15|64]+li[e>>24&255]+"-"+li[t&63|128]+li[t>>8&255]+"-"+li[t>>16&255]+li[t>>24&255]+li[i&255]+li[i>>8&255]+li[i>>16&255]+li[i>>24&255]).toLowerCase()}function tt(s,e,t){return Math.max(e,Math.min(t,s))}function Rh(s,e){return(s%e+e)%e}function qp(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Fp(s,e,t){return s!==e?(t-s)/(e-s):0}function Ir(s,e,t){return(1-t)*s+t*e}function Lp(s,e,t,i){return Ir(s,e,1-Math.exp(-t*i))}function Np(s,e=1){return e-Math.abs(Rh(s,e*2)-e)}function Up(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Bp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Op(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Hp(s,e){return s+Math.random()*(e-s)}function zp(s){return s*(.5-Math.random())}function kp(s){s!==void 0&&(Eu=s);let e=Eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gp(s){return s*Ns}function Vp(s){return s*ks}function Wp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Xp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ch(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Yp(s,e,t,i,n){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(n){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ph(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Yd(s,e){if(e.constructor===Float32Array)return s;let t=Ph(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Zd(s,e){if(e.constructor===Float32Array)return s;let t=Ph(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var nr={DEG2RAD:Ns,RAD2DEG:ks,generateUUID:ps,clamp:tt,euclideanModulo:Rh,mapLinear:qp,inverseLerp:Fp,lerp:Ir,damp:Lp,pingpong:Np,smoothstep:Up,smootherstep:Bp,randInt:Op,randFloat:Hp,randFloatSpread:zp,seededRandom:kp,degToRad:Gp,radToDeg:Vp,isPowerOfTwo:Wp,ceilPowerOfTwo:Xp,floorPowerOfTwo:Ch,setQuaternionFromProperEuler:Yp,normalize:Zd,denormalize:Yd},Nh=class Nh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*n+e.x,this.y=r*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nh.prototype.isVector2=!0;var Q=Nh,nn=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[o+0],f=r[o+1],p=r[o+2],g=r[o+3];if(u!==g||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*g;m<0&&(d=-d,f=-f,p=-p,g=-g,m=-m);let x=1-a;if(m<.9995){let _=Math.acos(m),M=Math.sin(_);x=Math.sin(x*_)/M,a=Math.sin(a*_)/M,l=l*x+d*a,c=c*x+f*a,h=h*x+p*a,u=u*x+g*a}else{l=l*x+d*a,c=c*x+f*a,h=h*x+p*a,u=u*x+g*a;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),d=l(i/2),f=l(n/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,n=-n,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Uh=class Uh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),h=2*(a*t-r*n),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=n+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uh.prototype.isVector3=!0;var P=Uh,Ac=new P,wu=new nn,Bh=class Bh{constructor(e,t,i,n,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c)}set(e,t,i,n,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],g=n[0],m=n[3],x=n[6],_=n[1],M=n[4],y=n[7],w=n[2],T=n[5],v=n[8];return r[0]=o*g+a*_+l*w,r[3]=o*m+a*M+l*T,r[6]=o*x+a*y+l*v,r[1]=c*g+h*_+u*w,r[4]=c*m+h*M+u*T,r[7]=c*x+h*y+u*v,r[2]=d*g+f*_+p*w,r[5]=d*m+f*M+p*T,r[8]=d*x+f*y+p*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=u*g,e[1]=(n*c-h*i)*g,e[2]=(a*i-n*o)*g,e[3]=d*g,e[4]=(h*t-n*l)*g,e[5]=(n*r-a*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rc.makeScale(e,t)),this}rotate(e){return ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rc.makeRotation(-e)),this}translate(e,t){return ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bh.prototype.isMatrix3=!0;var Ye=Bh,Rc=new Ye,Tu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Au=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zp(){let s={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(n.r=_n(n.r),n.g=_n(n.g),n.b=_n(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(n.r=Us(n.r),n.g=Us(n.g),n.b=Us(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Cn?Nr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Lr]:{primaries:e,whitePoint:i,transfer:Nr,toXYZ:Tu,fromXYZ:Au,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Tu,fromXYZ:Au,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),s}var st=Zp();function _n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ss,Ia=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ss===void 0&&(Ss=Ur("canvas")),Ss.width=e.width,Ss.height=e.height;let n=Ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Ss}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ur("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=_n(r[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_n(t[i]/255)*255):t[i]=_n(t[i]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jp=0,Gs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Cc(n[o].image)):r.push(Cc(n[o]))}else r=Cc(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function Cc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ia.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var $p=0,Pc=new P,pi=class s extends tn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=en,n=en,r=fi,o=Zi,a=$i,l=gi,c=s.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=ps(),this.name="",this.source=new Gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Pc).x}get height(){return this.source.getSize(Pc).y}get depth(){return this.source.getSize(Pc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=gh;pi.DEFAULT_ANISOTROPY=1;var Oh=class Oh{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],g=l[2],m=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(f+1)/2,w=(x+1)/2,T=(h+d)/4,v=(u+g)/4,S=(p+m)/4;return M>y&&M>w?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=T/i,r=v/i):y>w?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=T/n,r=S/n):w<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(w),i=v/r,n=S/r),this.set(i,n,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(u-g)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oh.prototype.isVector4=!0;var Pt=Oh,Da=class extends tn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new pi({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:fi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Gs(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends Da{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Br=class extends pi{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ii,this.minFilter=ii,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qa=class extends pi{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ii,this.minFilter=ii,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var nl=class nl{constructor(e,t,i,n,r,o,a,l,c,h,u,d,f,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c,h,u,d,f,p,g,m)}set(e,t,i,n,r,o,a,l,c,h,u,d,f,p,g,m){let x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=n,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=f,x[7]=p,x[11]=g,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nl().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/bs.setFromMatrixColumn(e,0).length(),r=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,g=c*u;t[0]=d+g*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,g=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-g*u}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kp,e,Qp)}lookAt(e,t,i){let n=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),qn.crossVectors(i,vi),qn.lengthSq()===0&&(Math.abs(i.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),qn.crossVectors(i,vi)),qn.normalize(),Vo.crossVectors(vi,qn),n[0]=qn.x,n[4]=Vo.x,n[8]=vi.x,n[1]=qn.y,n[5]=Vo.y,n[9]=vi.y,n[2]=qn.z,n[6]=Vo.z,n[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],g=i[6],m=i[10],x=i[14],_=i[3],M=i[7],y=i[11],w=i[15],T=n[0],v=n[4],S=n[8],I=n[12],R=n[1],q=n[5],D=n[9],U=n[13],C=n[2],B=n[6],H=n[10],O=n[14],te=n[3],V=n[7],X=n[11],j=n[15];return r[0]=o*T+a*R+l*C+c*te,r[4]=o*v+a*q+l*B+c*V,r[8]=o*S+a*D+l*H+c*X,r[12]=o*I+a*U+l*O+c*j,r[1]=h*T+u*R+d*C+f*te,r[5]=h*v+u*q+d*B+f*V,r[9]=h*S+u*D+d*H+f*X,r[13]=h*I+u*U+d*O+f*j,r[2]=p*T+g*R+m*C+x*te,r[6]=p*v+g*q+m*B+x*V,r[10]=p*S+g*D+m*H+x*X,r[14]=p*I+g*U+m*O+x*j,r[3]=_*T+M*R+y*C+w*te,r[7]=_*v+M*q+y*B+w*V,r[11]=_*S+M*D+y*H+w*X,r[15]=_*I+M*U+y*O+w*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],g=e[7],m=e[11],x=e[15],_=l*f-c*d,M=a*f-c*u,y=a*d-l*u,w=o*f-c*h,T=o*d-l*h,v=o*u-a*h;return t*(g*_-m*M+x*y)-i*(p*_-m*w+x*T)+n*(p*M-g*w+x*v)-r*(p*y-g*T+m*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+n*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],g=e[13],m=e[14],x=e[15],_=t*a-i*o,M=t*l-n*o,y=t*c-r*o,w=i*l-n*a,T=i*c-r*a,v=n*c-r*l,S=h*g-u*p,I=h*m-d*p,R=h*x-f*p,q=u*m-d*g,D=u*x-f*g,U=d*x-f*m,C=_*U-M*D+y*q+w*R-T*I+v*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/C;return e[0]=(a*U-l*D+c*q)*B,e[1]=(n*D-i*U-r*q)*B,e[2]=(g*v-m*T+x*w)*B,e[3]=(d*T-u*v-f*w)*B,e[4]=(l*R-o*U-c*I)*B,e[5]=(t*U-n*R+r*I)*B,e[6]=(m*y-p*v-x*M)*B,e[7]=(h*v-d*y+f*M)*B,e[8]=(o*D-a*R+c*S)*B,e[9]=(i*R-t*D-r*S)*B,e[10]=(p*T-g*y+x*_)*B,e[11]=(u*y-h*T-f*_)*B,e[12]=(a*I-o*q-l*S)*B,e[13]=(t*q-i*I+n*S)*B,e[14]=(g*M-p*w-m*_)*B,e[15]=(h*w-u*M+d*_)*B,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,o){return this.set(1,i,r,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,g=o*h,m=o*u,x=a*u,_=l*c,M=l*h,y=l*u,w=i.x,T=i.y,v=i.z;return n[0]=(1-(g+x))*w,n[1]=(f+y)*w,n[2]=(p-M)*w,n[3]=0,n[4]=(f-y)*T,n[5]=(1-(d+x))*T,n[6]=(m+_)*T,n[7]=0,n[8]=(p+M)*v,n[9]=(m-_)*v,n[10]=(1-(d+g))*v,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=bs.set(n[0],n[1],n[2]).length(),a=bs.set(n[4],n[5],n[6]).length(),l=bs.set(n[8],n[9],n[10]).length();r<0&&(o=-o),Oi.copy(this);let c=1/o,h=1/a,u=1/l;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=h,Oi.elements[5]*=h,Oi.elements[6]*=h,Oi.elements[8]*=u,Oi.elements[9]*=u,Oi.elements[10]*=u,t.setFromRotationMatrix(Oi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,n,r,o,a=Pi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n),p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===Pi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Hs)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,o,a=Pi,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n),p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===Pi)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===Hs)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};nl.prototype.isMatrix4=!0;var pt=nl,bs=new P,Oi=new pt,Kp=new P(0,0,0),Qp=new P(1,1,1),qn=new P,Vo=new P,vi=new P,Ru=new pt,Cu=new nn,sn=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ru,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var Vs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jp=0,Pu=new P,Es=new nn,dn=new pt,Wo=new P,br=new P,e0=new P,t0=new nn,Iu=new P(1,0,0),Du=new P(0,1,0),qu=new P(0,0,1),Fu={type:"added"},i0={type:"removed"},ws={type:"childadded",child:null},Ic={type:"childremoved",child:null},Lt=class s extends tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new P,t=new sn,i=new nn,n=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ye}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Iu,e)}rotateY(e){return this.rotateOnAxis(Du,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Pu.copy(e).applyQuaternion(this.quaternion),this.position.add(Pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Iu,e)}translateY(e){return this.translateOnAxis(Du,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wo.copy(e):Wo.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(br,Wo,this.up):dn.lookAt(Wo,br,this.up),this.quaternion.setFromRotationMatrix(dn),n&&(dn.extractRotation(n.matrixWorld),Es.setFromRotationMatrix(dn),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fu),ws.child=e,this.dispatchEvent(ws),ws.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(i0),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fu),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,e0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new P(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ue=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},n0={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),x=this._getHandJoint(c,g);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(n0)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ue;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function Dc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Se=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=st.workingColorSpace){if(e=Rh(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Dc(o,r,e+1/3),this.g=Dc(o,r,e),this.b=Dc(o,r,e-1/3)}return st.colorSpaceToWorking(this,n),this}setStyle(e,t=Et){function i(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let i=Jd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return st.workingToColorSpace(ci.copy(this),e),Math.round(tt(ci.r*255,0,255))*65536+Math.round(tt(ci.g*255,0,255))*256+Math.round(tt(ci.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(ci.copy(this),t);let i=ci.r,n=ci.g,r=ci.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(ci.copy(this),t),e.r=ci.r,e.g=ci.g,e.b=ci.b,e}getStyle(e=Et){st.workingToColorSpace(ci.copy(this),e);let t=ci.r,i=ci.g,n=ci.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Xo);let i=Ir(Fn.h,Xo.h,t),n=Ir(Fn.s,Xo.s,t),r=Ir(Fn.l,Xo.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ci=new Se;Se.NAMES=Jd;var Or=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Mi=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hi=new P,fn=new P,qc=new P,pn=new P,Ts=new P,As=new P,Lu=new P,Fc=new P,Lc=new P,Nc=new P,Uc=new Pt,Bc=new Pt,Oc=new Pt,xn=class s{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Hi.subVectors(e,t),n.cross(Hi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Hi.subVectors(n,t),fn.subVectors(i,t),qc.subVectors(e,t);let o=Hi.dot(Hi),a=Hi.dot(fn),l=Hi.dot(qc),c=fn.dot(fn),h=fn.dot(qc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(e,t,i,n,r,o,a,l){return this.getBarycoord(e,t,i,n,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pn.x),l.addScaledVector(o,pn.y),l.addScaledVector(a,pn.z),l)}static getInterpolatedAttribute(e,t,i,n,r,o){return Uc.setScalar(0),Bc.setScalar(0),Oc.setScalar(0),Uc.fromBufferAttribute(e,t),Bc.fromBufferAttribute(e,i),Oc.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(Uc,r.x),o.addScaledVector(Bc,r.y),o.addScaledVector(Oc,r.z),o}static isFrontFacing(e,t,i,n){return Hi.subVectors(i,t),fn.subVectors(e,t),Hi.cross(fn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Hi.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,o,a;Ts.subVectors(n,i),As.subVectors(r,i),Fc.subVectors(e,i);let l=Ts.dot(Fc),c=As.dot(Fc);if(l<=0&&c<=0)return t.copy(i);Lc.subVectors(e,n);let h=Ts.dot(Lc),u=As.dot(Lc);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(Ts,o);Nc.subVectors(e,r);let f=Ts.dot(Nc),p=As.dot(Nc);if(p>=0&&f<=p)return t.copy(r);let g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(As,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Lu.subVectors(r,n),a=(u-h)/(u-h+(f-p)),t.copy(n).addScaledVector(Lu,a);let x=1/(m+g+d);return o=g*x,a=d*x,t.copy(i).addScaledVector(Ts,o).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ii=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zi):zi.fromBufferAttribute(r,o),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yo.copy(i.boundingBox)),Yo.applyMatrix4(e.matrixWorld),this.union(Yo)}let n=e.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),Zo.subVectors(this.max,Er),Rs.subVectors(e.a,Er),Cs.subVectors(e.b,Er),Ps.subVectors(e.c,Er),Ln.subVectors(Cs,Rs),Nn.subVectors(Ps,Cs),jn.subVectors(Rs,Ps);let t=[0,-Ln.z,Ln.y,0,-Nn.z,Nn.y,0,-jn.z,jn.y,Ln.z,0,-Ln.x,Nn.z,0,-Nn.x,jn.z,0,-jn.x,-Ln.y,Ln.x,0,-Nn.y,Nn.x,0,-jn.y,jn.x,0];return!Hc(t,Rs,Cs,Ps,Zo)||(t=[1,0,0,0,1,0,0,0,1],!Hc(t,Rs,Cs,Ps,Zo))?!1:(Jo.crossVectors(Ln,Nn),t=[Jo.x,Jo.y,Jo.z],Hc(t,Rs,Cs,Ps,Zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mn=[new P,new P,new P,new P,new P,new P,new P,new P],zi=new P,Yo=new Ii,Rs=new P,Cs=new P,Ps=new P,Ln=new P,Nn=new P,jn=new P,Er=new P,Zo=new P,Jo=new P,es=new P;function Hc(s,e,t,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){es.fromArray(s,r);let a=n.x*Math.abs(es.x)+n.y*Math.abs(es.y)+n.z*Math.abs(es.z),l=e.dot(es),c=t.dot(es),h=i.dot(es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Yt=new P,$o=new Q,s0=0,Ht=class extends tn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:s0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kd,this.updateRanges=[],this.gpuType=qi,this.version=0,this._normalizationScale=e!==void 0?Ph(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix3(e),this.setXY(t,$o.x,$o.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Yd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Zd(e,this.array)}};var Hr=class extends Ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var zr=class extends Ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ge=class extends Ht{constructor(e,t,i){super(new Float32Array(e),t,i)}},r0=new Ii,wr=new P,zc=new P,rn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):r0.setFromPoints(e).getCenter(i);let n=0;for(let r=0,o=e.length;r<o;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(wr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(zc)),this.expandByPoint(wr.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},o0=0,Ci=new pt,kc=new Lt,Is=new P,yi=new Ii,Tr=new Ii,ti=new P,ht=class s extends tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ip(e)?zr:Hr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,i){return Ci.makeTranslation(e,t,i),this.applyMatrix4(Ci),this}scale(e,t,i){return Ci.makeScale(e,t,i),this.applyMatrix4(Ci),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ge(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];yi.setFromBufferAttribute(r),this.morphTargetsRelative?(ti.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(ti),ti.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(ti)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(ti.addVectors(yi.min,Tr.min),yi.expandByPoint(ti),ti.addVectors(yi.max,Tr.max),yi.expandByPoint(ti)):(yi.expandByPoint(Tr.min),yi.expandByPoint(Tr.max))}yi.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)ti.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(ti));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ti.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(e,c),ti.add(Is)),n=Math.max(n,i.distanceToSquared(ti))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ht(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let I=0;I<i.count;I++)a[I]=new P,l[I]=new P;let h=new P,u=new P,d=new P,f=new Q,p=new Q,g=new Q,m=new P,x=new P;function _(I,R,q){c[I]=c[R]=c[q]=1,h.fromBufferAttribute(i,I),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,q),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,R),g.fromBufferAttribute(r,q),u.sub(h),d.sub(h),p.sub(f),g.sub(f);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(m.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),x.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[I].add(m),a[R].add(m),a[q].add(m),l[I].add(x),l[R].add(x),l[q].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,R=M.length;I<R;++I){let q=M[I],D=q.start,U=q.count;for(let C=D,B=D+U;C<B;C+=3)_(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let y=new P,w=new P,T=new P,v=new P;function S(I){T.fromBufferAttribute(n,I),v.copy(T);let R=a[I];y.copy(R),y.sub(T.multiplyScalar(T.dot(R))).normalize(),w.crossVectors(v,R);let D=w.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,D)}for(let I=0,R=i.count;I<R;++I)c[I]&&S(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ti.fromBufferAttribute(e,t),ti.normalize(),e.setXYZ(t,ti.x,ti.y,ti.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let x=0;x<h;x++)d[p++]=c[f++]}return new Ht(d,h,u)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Gc=new P,a0=new P,l0=new Ye,di=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Gc.subVectors(i,t).cross(a0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(Gc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||l0.getNormalMatrix(e),n=this.coplanarPoint(Gc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},c0=0,Gi=class extends tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=Vn,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=n(e.textures),o=n(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new di().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Q().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Q().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var gn=new P,Vc=new P,Ko=new P,Qo=new P,ss=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Vc.copy(e).add(t).multiplyScalar(.5),Ko.copy(t).sub(e).normalize(),Qo.copy(this.origin).sub(Vc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ko),a=Qo.dot(this.direction),l=-Qo.dot(Ko),c=Qo.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Vc).addScaledVector(Ko,d),f}intersectSphere(e,t){if(e.radius<0)return null;gn.subVectors(e.center,this.origin);let i=gn.dot(this.direction),n=gn.dot(gn)-i*i,r=e.radius*e.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,i,n,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,g=t.y-o.y,m=t.z-o.z,x=i.x-o.x,_=i.y-o.y,M=i.z-o.z,y=Math.abs(l),w=Math.abs(c),T=Math.abs(h),v,S,I,R,q,D,U,C,B,H,O,te;if(y>=w&&y>=T?(I=l,D=u,B=p,te=x,l>=0?(v=c,S=h,R=d,q=f,U=g,C=m,H=_,O=M):(v=h,S=c,R=f,q=d,U=m,C=g,H=M,O=_)):w>=T?(I=c,D=d,B=g,te=_,c>=0?(v=h,S=l,R=f,q=u,U=m,C=p,H=M,O=x):(v=l,S=h,R=u,q=f,U=p,C=m,H=x,O=M)):(I=h,D=f,B=m,te=M,h>=0?(v=l,S=c,R=u,q=d,U=p,C=g,H=x,O=_):(v=c,S=l,R=d,q=u,U=g,C=p,H=_,O=x)),I===0)return null;let V=v/I,X=S/I,j=1/I,Re=R-V*D,Ne=q-X*D,Z=U-V*B,Me=C-X*B,Te=H-V*te,De=O-X*te,ve=Te*Me-De*Z,Ue=Re*De-Ne*Te,It=Z*Ne-Me*Re;if(n){if(ve<0||Ue<0||It<0)return null}else if((ve<0||Ue<0||It<0)&&(ve>0||Ue>0||It>0))return null;let Oe=ve+Ue+It;if(Oe===0)return null;let Ke=j*(ve*D+Ue*B+It*te);return(Oe>0?Ke<0:Ke>0)?null:this.at(Ke/Oe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mt=class extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nu=new pt,ts=new ss,jo=new rn,Uu=new P,ea=new P,ta=new P,ia=new P,Wc=new P,na=new P,Bu=new P,sa=new P,ne=class extends Lt{constructor(e=new ht,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let a=this.morphTargetInfluences;if(r&&a){na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Wc.fromBufferAttribute(u,e),o?na.addScaledVector(Wc,h):na.addScaledVector(Wc.sub(t),h))}t.add(na)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(jo.containsPoint(ts.origin)===!1&&(ts.intersectSphere(jo,Uu)===null||ts.origin.distanceToSquared(Uu)>(e.far-e.near)**2))&&(Nu.copy(r).invert(),ts.copy(e.ray).applyMatrix4(Nu),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let m=d[p],x=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,w=M;y<w;y+=3){let T=a.getX(y),v=a.getX(y+1),S=a.getX(y+2);n=ra(this,x,e,i,c,h,u,T,v,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=p,x=g;m<x;m+=3){let _=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);n=ra(this,o,e,i,c,h,u,_,M,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let m=d[p],x=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,w=M;y<w;y+=3){let T=y,v=y+1,S=y+2;n=ra(this,x,e,i,c,h,u,T,v,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=p,x=g;m<x;m+=3){let _=m,M=m+1,y=m+2;n=ra(this,o,e,i,c,h,u,_,M,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function h0(s,e,t,i,n,r,o,a){let l;if(e.side===kt?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,e.side===Gn,a),l===null)return null;sa.copy(a),sa.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(sa);return c<t.near||c>t.far?null:{distance:c,point:sa.clone(),object:s}}function ra(s,e,t,i,n,r,o,a,l,c){s.getVertexPosition(a,ea),s.getVertexPosition(l,ta),s.getVertexPosition(c,ia);let h=h0(s,e,t,i,ea,ta,ia,Bu);if(h){let u=new P;xn.getBarycoord(Bu,ea,ta,ia,u),n&&(h.uv=xn.getInterpolatedAttribute(n,a,l,c,u,new Q)),r&&(h.uv1=xn.getInterpolatedAttribute(r,a,l,c,u,new Q)),o&&(h.normal=xn.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};xn.getNormal(ea,ta,ia,d.normal),h.face=d,h.barycoord=u}return h}var kr=class extends pi{constructor(e=null,t=1,i=1,n,r,o,a,l,c=ii,h=ii,u,d){super(null,o,a,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xs=class extends Ht{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ds=new pt,Ou=new pt,oa=[],Hu=new Ii,u0=new pt,Ar=new ne,Rr=new rn,Vi=class extends ne{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,u0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ds),Hu.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(Hu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ds),Rr.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(Rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(i),e.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Ds),Ou.multiplyMatrices(i,Ds),Ar.matrixWorld=Ou,Ar.raycast(e,oa);for(let o=0,a=oa.length;o<a;o++){let l=oa[o];l.instanceId=r,l.object=this,t.push(l)}oa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new kr(new Float32Array(n*this.count),n,this.count,ul,qi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},is=new rn,d0=new Q(.5,.5),aa=new P,Bn=class{constructor(e=new di,t=new di,i=new di,n=new di,r=new di,o=new di){this.planes=[e,t,i,n,r,o]}set(e,t,i,n,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi,i=!1){let n=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],m=r[10],x=r[11],_=r[12],M=r[13],y=r[14],w=r[15];if(n[0].setComponents(c-o,f-h,x-p,w-_).normalize(),n[1].setComponents(c+o,f+h,x+p,w+_).normalize(),n[2].setComponents(c+a,f+u,x+g,w+M).normalize(),n[3].setComponents(c-a,f-u,x-g,w-M).normalize(),i)n[4].setComponents(l,d,m,y).normalize(),n[5].setComponents(c-l,f-d,x-m,w-y).normalize();else if(n[4].setComponents(c-l,f-d,x-m,w-y).normalize(),t===Pi)n[5].setComponents(c+l,f+d,x+m,w+y).normalize();else if(t===Hs)n[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);let t=d0.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(aa.x=n.normal.x>0?e.max.x:e.min.x,aa.y=n.normal.y>0?e.max.y:e.min.y,aa.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},zu=new pt,Fa=class s{constructor(){this.coordinateSystem=Pi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];zu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new Bn),i[n].setFromProjectionMatrix(zu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new Bn),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new s().copy(this)}};var Wi=class extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},La=new P,Na=new P,ku=new pt,Cr=new ss,la=new rn,Xc=new P,Gu=new P,Ys=class extends Lt{constructor(e=new ht,t=new Wi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)La.fromBufferAttribute(t,n-1),Na.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=La.distanceTo(Na);e.setAttribute("lineDistance",new Ge(i,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(n),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;ku.copy(n).invert(),Cr.copy(e.ray).applyMatrix4(ku);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){let x=h.getX(g),_=h.getX(g+1),M=ca(this,e,Cr,l,x,_,g);M&&t.push(M)}if(this.isLineLoop){let g=h.getX(p-1),m=h.getX(f),x=ca(this,e,Cr,l,g,m,p-1);x&&t.push(x)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){let x=ca(this,e,Cr,l,g,g+1,g);x&&t.push(x)}if(this.isLineLoop){let g=ca(this,e,Cr,l,p-1,f,p-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ca(s,e,t,i,n,r,o){let a=s.geometry.attributes.position;if(La.fromBufferAttribute(a,n),Na.fromBufferAttribute(a,r),t.distanceSqToSegment(La,Na,Xc,Gu)>i)return;Xc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Xc);if(!(c<e.near||c>e.far))return{distance:c,point:Gu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Vu=new P,Wu=new P,yn=class extends Ys{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Vu.fromBufferAttribute(t,n),Wu.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Vu.distanceTo(Wu);e.setAttribute("lineDistance",new Ge(i,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ua=class extends Gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xu=new pt,ih=new ss,ha=new rn,ua=new P,rs=class extends Lt{constructor(e=new ht,t=new Ua){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(n),ha.radius+=r,e.ray.intersectsSphere(ha)===!1)return;Xu.copy(n).invert(),ih.copy(e.ray).applyMatrix4(Xu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,g=f;p<g;p++){let m=c.getX(p);ua.fromBufferAttribute(u,m),Yu(ua,m,l,n,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,g=f;p<g;p++)ua.fromBufferAttribute(u,p),Yu(ua,p,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yu(s,e,t,i,n,r,o){let a=ih.distanceSqToPoint(s);if(a<t){let l=new P;ih.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Gr=class extends pi{constructor(e=[],t=ds,i,n,r,o,a,l,c,h){super(e,t,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},si=class extends pi{constructor(e,t,i,n,r,o,a,l,c){super(e,t,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Mn=class extends pi{constructor(e,t,i=Ji,n,r,o,a=ii,l=ii,c,h=vn,u=1){if(h!==vn&&h!==Rn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Vr=class extends Mn{constructor(e,t=Ji,i=ds,n,r,o=ii,a=ii,l,c=vn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wr=class extends pi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},gt=class s extends ht{constructor(e=1,t=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,n,o,2),p("x","z","y",1,-1,e,i,-t,n,o,3),p("x","y","z",1,-1,e,t,i,n,r,4),p("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2));function p(g,m,x,_,M,y,w,T,v,S,I){let R=y/v,q=w/S,D=y/2,U=w/2,C=T/2,B=v+1,H=S+1,O=0,te=0,V=new P;for(let X=0;X<H;X++){let j=X*q-U;for(let Re=0;Re<B;Re++){let Ne=Re*R-D;V[g]=Ne*_,V[m]=j*M,V[x]=C,c.push(V.x,V.y,V.z),V[g]=0,V[m]=0,V[x]=T>0?1:-1,h.push(V.x,V.y,V.z),u.push(Re/v),u.push(1-X/S),O+=1}}for(let X=0;X<S;X++)for(let j=0;j<v;j++){let Re=d+j+B*X,Ne=d+j+B*(X+1),Z=d+(j+1)+B*(X+1),Me=d+(j+1)+B*X;l.push(Re,Ne,Me),l.push(Ne,Z,Me),te+=6}a.addGroup(f,te,I),f+=te,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Sn=class s extends ht{constructor(e=1,t=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=i*2+r,g=n+1,m=new P,x=new P;for(let _=0;_<=p;_++){let M=0,y=0,w=0,T=0;if(_<=i){let I=_/i,R=I*Math.PI/2;y=-h-e*Math.cos(R),w=e*Math.sin(R),T=-e*Math.cos(R),M=I*u}else if(_<=i+r){let I=(_-i)/r;y=-h+I*t,w=e,T=0,M=u+I*d}else{let I=(_-i-r)/i,R=I*Math.PI/2;y=h+e*Math.sin(R),w=e*Math.cos(R),T=e*Math.sin(R),M=u+d+I*u}let v=Math.max(0,Math.min(1,M/f)),S=0;_===0?S=.5/n:_===p&&(S=-.5/n);for(let I=0;I<=n;I++){let R=I/n,q=R*Math.PI*2,D=Math.sin(q),U=Math.cos(q);x.x=-w*U,x.y=y,x.z=w*D,a.push(x.x,x.y,x.z),m.set(-w*U,T,w*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+S,v)}if(_>0){let I=(_-1)*g;for(let R=0;R<n;R++){let q=I+R,D=I+R+1,U=_*g+R,C=_*g+R+1;o.push(q,D,U),o.push(D,C,U)}}}this.setIndex(o),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},mi=class s extends ht{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new Q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(a,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mt=class s extends ht{constructor(e=1,t=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,g=[],m=i/2,x=0;_(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(f,2));function _(){let y=new P,w=new P,T=0,v=(t-e)/i;for(let S=0;S<=r;S++){let I=[],R=S/r,q=R*(t-e)+e;for(let D=0;D<=n;D++){let U=D/n,C=U*l+a,B=Math.sin(C),H=Math.cos(C);w.x=q*B,w.y=-R*i+m,w.z=q*H,u.push(w.x,w.y,w.z),y.set(B,v,H).normalize(),d.push(y.x,y.y,y.z),f.push(U,1-R),I.push(p++)}g.push(I)}for(let S=0;S<n;S++)for(let I=0;I<r;I++){let R=g[I][S],q=g[I+1][S],D=g[I+1][S+1],U=g[I][S+1];(e>0||I!==0)&&(h.push(R,q,U),T+=3),(t>0||I!==r-1)&&(h.push(q,D,U),T+=3)}c.addGroup(x,T,0),x+=T}function M(y){let w=p,T=new Q,v=new P,S=0,I=y===!0?e:t,R=y===!0?1:-1;for(let D=1;D<=n;D++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),p++;let q=p;for(let D=0;D<=n;D++){let C=D/n*l+a,B=Math.cos(C),H=Math.sin(C);v.x=I*H,v.y=m*R,v.z=I*B,u.push(v.x,v.y,v.z),d.push(0,R,0),T.x=B*.5+.5,T.y=H*.5*R+.5,f.push(T.x,T.y),p++}for(let D=0;D<n;D++){let U=w+D,C=q+D;y===!0?h.push(C,C+1,U):h.push(C+1,C,U),S+=3}c.addGroup(x,S,y===!0?1:2),x+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ri=class s extends Mt{constructor(e=1,t=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ba=class s extends ht{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(r.slice(),3)),this.setAttribute("uv",new Ge(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let M=new P,y=new P,w=new P;for(let T=0;T<t.length;T+=3)f(t[T+0],M),f(t[T+1],y),f(t[T+2],w),l(M,y,w,_)}function l(_,M,y,w){let T=w+1,v=[];for(let S=0;S<=T;S++){v[S]=[];let I=_.clone().lerp(y,S/T),R=M.clone().lerp(y,S/T),q=T-S;for(let D=0;D<=q;D++)D===0&&S===T?v[S][D]=I:v[S][D]=I.clone().lerp(R,D/q)}for(let S=0;S<T;S++)for(let I=0;I<2*(T-S)-1;I++){let R=Math.floor(I/2);I%2===0?(d(v[S][R+1]),d(v[S+1][R]),d(v[S][R])):(d(v[S][R+1]),d(v[S+1][R+1]),d(v[S+1][R]))}}function c(_){let M=new P;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(_),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){let _=new P;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let y=m(_)/2/Math.PI+.5,w=x(_)/Math.PI+.5;o.push(y,1-w)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){let M=o[_+0],y=o[_+2],w=o[_+4],T=Math.max(M,y,w),v=Math.min(M,y,w);T>.9&&v<.1&&(M<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),w<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,M){let y=_*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function p(){let _=new P,M=new P,y=new P,w=new P,T=new Q,v=new Q,S=new Q;for(let I=0,R=0;I<r.length;I+=9,R+=6){_.set(r[I+0],r[I+1],r[I+2]),M.set(r[I+3],r[I+4],r[I+5]),y.set(r[I+6],r[I+7],r[I+8]),T.set(o[R+0],o[R+1]),v.set(o[R+2],o[R+3]),S.set(o[R+4],o[R+5]),w.copy(_).add(M).add(y).divideScalar(3);let q=m(w);g(T,R+0,_,q),g(v,R+2,M,q),g(S,R+4,y,q)}}function g(_,M,y,w){w<0&&_.x===1&&(o[M]=_.x-1),y.x===0&&y.z===0&&(o[M]=w/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function x(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var da=new P,fa=new P,Yc=new P,pa=new xn,On=class extends ht{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),r=Math.cos(Ns*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d=new Map,f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:g,b:m,c:x}=pa;if(g.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),x.fromBufferAttribute(a,c[2]),pa.getNormal(Yc),u[0]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,u[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,u[2]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let _=0;_<3;_++){let M=(_+1)%3,y=u[_],w=u[M],T=pa[h[_]],v=pa[h[M]],S=`${y}_${w}`,I=`${w}_${y}`,R=d.get(I);R?(Yc.dot(R.normal)<=r&&(f.push(T.x,T.y,T.z),f.push(v.x,v.y,v.z)),d.set(I,null)):d.has(S)||d.set(S,{index0:c[_],index1:c[M],normal:Yc.clone()})}}for(let p of d.values())if(p){let{index0:g,index1:m}=p;da.fromBufferAttribute(a,g),fa.fromBufferAttribute(a,m),f.push(da.x,da.y,da.z),f.push(fa.x,fa.y,fa.z)}this.setAttribute("position",new Ge(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],d=i[n+1]-h,f=(o-h)/d;return(n+f)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=t||(o.isVector2?new Q:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,n=[],r=[],o=[],a=new P,l=new pt;for(let f=0;f<=e;f++){let p=f/e;n[f]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(tt(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(n[f],r[f])}if(t===!0){let f=Math.acos(tt(r[0].dot(r[e]),-1,1));f/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),o[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Zs=class extends Si{constructor(e=0,t=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Q){let i=t,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Oa=class extends Zs{constructor(e,t,i,n,r,o){super(e,t,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ih(){let s=0,e=0,t=0,i=0;function n(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,n(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+i*a}}}var Zu=new P,Ju=new P,Zc=new Ih,Jc=new Ih,$c=new Ih,Js=class extends Si{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new P){let i=t,n=this.points,r=n.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(Ju.subVectors(n[0],n[1]).add(n[0]),c=Ju);let u=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(Zu.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Zu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),Zc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,g,m),Jc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,g,m),$c.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,g,m)}else this.curveType==="catmullrom"&&(Zc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Jc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),$c.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Zc.calc(l),Jc.calc(l),$c.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new P().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function $u(s,e,t,i,n){let r=(i-e)*.5,o=(n-t)*.5,a=s*s,l=s*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*s+t}function f0(s,e){let t=1-s;return t*t*e}function p0(s,e){return 2*(1-s)*s*e}function m0(s,e){return s*s*e}function Dr(s,e,t,i){return f0(s,e)+p0(s,t)+m0(s,i)}function g0(s,e){let t=1-s;return t*t*t*e}function x0(s,e){let t=1-s;return 3*t*t*s*e}function _0(s,e){return 3*(1-s)*s*s*e}function v0(s,e){return s*s*s*e}function qr(s,e,t,i,n){return g0(s,e)+x0(s,t)+_0(s,i)+v0(s,n)}var Xr=class extends Si{constructor(e=new Q,t=new Q,i=new Q,n=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Q){let i=t,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(qr(e,n.x,r.x,o.x,a.x),qr(e,n.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ha=class extends Si{constructor(e=new P,t=new P,i=new P,n=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new P){let i=t,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(qr(e,n.x,r.x,o.x,a.x),qr(e,n.y,r.y,o.y,a.y),qr(e,n.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yr=class extends Si{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends Si{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zr=class extends Si{constructor(e=new Q,t=new Q,i=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Q){let i=t,n=this.v0,r=this.v1,o=this.v2;return i.set(Dr(e,n.x,r.x,o.x),Dr(e,n.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jr=class extends Si{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,n=this.v0,r=this.v1,o=this.v2;return i.set(Dr(e,n.x,r.x,o.x),Dr(e,n.y,r.y,o.y),Dr(e,n.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$r=class extends Si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){let i=t,n=this.points,r=(n.length-1)*e,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set($u(a,l.x,c.x,h.x,u.x),$u(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new Q().fromArray(n))}return this}},ka=Object.freeze({__proto__:null,ArcCurve:Oa,CatmullRomCurve3:Js,CubicBezierCurve:Xr,CubicBezierCurve3:Ha,EllipseCurve:Zs,LineCurve:Yr,LineCurve3:za,QuadraticBezierCurve:Zr,QuadraticBezierCurve3:Jr,SplineCurve:$r}),Ga=class extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ka[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let o=r[n],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new ka[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},os=class extends Ga{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Yr(this.currentPoint.clone(),new Q(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new Zr(this.currentPoint.clone(),new Q(e,t),new Q(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,o){let a=new Xr(this.currentPoint.clone(),new Q(e,t),new Q(i,n),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new $r(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,n,r,o),this}absarc(e,t,i,n,r,o){return this.absellipse(e,t,i,i,n,r,o),this}ellipse(e,t,i,n,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,r,o,a,l),this}absellipse(e,t,i,n,r,o,a,l){let c=new Zs(e,t,i,n,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Xi=class extends os{constructor(e){super(e),this.uuid=ps(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new os().fromJSON(n))}return this}};function y0(s,e,t=2){let i=e&&e.length,n=i?e[0]*t:s.length,r=$d(s,0,n,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=w0(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,u=l;for(let d=t;d<n;d+=t){let f=s[d],p=s[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Kr(r,o,t,a,l,c,0),o}function $d(s,e,t,i,n){let r;if(n===N0(s,e,t,i)>0)for(let o=e;o<t;o+=i)r=Ku(o/i|0,s[o],s[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Ku(o/i|0,s[o],s[o+1],r);return r&&$s(r,r.next)&&(jr(r),r=r.next),r}function as(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&($s(t,t.next)||Ot(t.prev,t,t.next)===0)){if(jr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Kr(s,e,t,i,n,r,o){if(!s)return;!o&&r&&P0(s,i,n,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?S0(s,i,n,r):M0(s)){e.push(l.i,s.i,c.i),jr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=b0(as(s),e),Kr(s,e,t,i,n,r,2)):o===2&&E0(s,e,t,i,n,r):Kr(as(s),e,t,i,n,r,1);break}}}function M0(s){let e=s.prev,t=s,i=s.next;if(Ot(e,t,i)>=0)return!1;let n=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(n,r,o),u=Math.min(a,l,c),d=Math.max(n,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Pr(n,a,r,l,o,c,p.x,p.y)&&Ot(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function S0(s,e,t,i){let n=s.prev,r=s,o=s.next;if(Ot(n,r,o)>=0)return!1;let a=n.x,l=r.x,c=o.x,h=n.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),g=Math.max(a,l,c),m=Math.max(h,u,d),x=nh(f,p,e,t,i),_=nh(g,m,e,t,i),M=s.prevZ,y=s.nextZ;for(;M&&M.z>=x&&y&&y.z<=_;){if(M.x>=f&&M.x<=g&&M.y>=p&&M.y<=m&&M!==n&&M!==o&&Pr(a,h,l,u,c,d,M.x,M.y)&&Ot(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=g&&y.y>=p&&y.y<=m&&y!==n&&y!==o&&Pr(a,h,l,u,c,d,y.x,y.y)&&Ot(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=x;){if(M.x>=f&&M.x<=g&&M.y>=p&&M.y<=m&&M!==n&&M!==o&&Pr(a,h,l,u,c,d,M.x,M.y)&&Ot(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=g&&y.y>=p&&y.y<=m&&y!==n&&y!==o&&Pr(a,h,l,u,c,d,y.x,y.y)&&Ot(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function b0(s,e){let t=s;do{let i=t.prev,n=t.next.next;!$s(i,n)&&Qd(i,t,t.next,n)&&Qr(i,n)&&Qr(n,i)&&(e.push(i.i,t.i,n.i),jr(t),jr(t.next),t=s=n),t=t.next}while(t!==s);return as(t)}function E0(s,e,t,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&q0(o,a)){let l=jd(o,a);o=as(o,o.next),l=as(l,l.next),Kr(o,e,t,i,n,r,0),Kr(l,e,t,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function w0(s,e,t,i){let n=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:s.length,c=$d(s,a,l,i,!1);c===c.next&&(c.steiner=!0),n.push(D0(c))}n.sort(T0);for(let r=0;r<n.length;r++)t=A0(n[r],t);return t}function T0(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let i=(s.next.y-s.y)/(s.next.x-s.x),n=(e.next.y-e.y)/(e.next.x-e.x);t=i-n}return t}function A0(s,e){let t=R0(s,e);if(!t)return e;let i=jd(t,s);return as(i,i.next),as(t,t.next)}function R0(s,e){let t=e,i=s.x,n=s.y,r=-1/0,o;if($s(s,t))return t;do{if($s(s,t.next))return t.next;if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){let u=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Kd(n<c?i:r,n,l,c,n<c?r:i,n,t.x,t.y)){let u=Math.abs(n-t.y)/(i-t.x);Qr(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&C0(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function C0(s,e){return Ot(s.prev,s,e.prev)<0&&Ot(e.next,s,s.next)<0}function P0(s,e,t,i){let n=s;do n.z===0&&(n.z=nh(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,I0(n)}function I0(s){let e,t=1;do{let i=s,n;s=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(n=i,i=i.nextZ,a--):(n=o,o=o.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=o}r.nextZ=null,t*=2}while(e>1);return s}function nh(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function D0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Kd(s,e,t,i,n,r,o,a){return(n-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(n-o)*(i-a)}function Pr(s,e,t,i,n,r,o,a){return!(s===o&&e===a)&&Kd(s,e,t,i,n,r,o,a)}function q0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!F0(s,e)&&(Qr(s,e)&&Qr(e,s)&&L0(s,e)&&(Ot(s.prev,s,e.prev)||Ot(s,e.prev,e))||$s(s,e)&&Ot(s.prev,s,s.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function $s(s,e){return s.x===e.x&&s.y===e.y}function Qd(s,e,t,i){let n=ga(Ot(s,e,t)),r=ga(Ot(s,e,i)),o=ga(Ot(t,i,s)),a=ga(Ot(t,i,e));return!!(n!==r&&o!==a||n===0&&ma(s,t,e)||r===0&&ma(s,i,e)||o===0&&ma(t,s,i)||a===0&&ma(t,e,i))}function ma(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ga(s){return s>0?1:s<0?-1:0}function F0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Qd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Qr(s,e){return Ot(s.prev,s,s.next)<0?Ot(s,e,s.next)>=0&&Ot(s,s.prev,e)>=0:Ot(s,e,s.prev)<0||Ot(s,s.next,e)<0}function L0(s,e){let t=s,i=!1,n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function jd(s,e){let t=sh(s.i,s.x,s.y),i=sh(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ku(s,e,t,i){let n=sh(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function jr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function sh(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function N0(s,e,t,i){let n=0;for(let r=e,o=t-i;r<t;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}var rh=class{static triangulate(e,t,i=2){return y0(e,t,i)}},ki=class s{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];Qu(e),ju(i,e);let o=e.length;t.forEach(Qu);for(let l=0;l<t.length;l++)n.push(o),o+=t[l].length,ju(i,t[l]);let a=rh.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Qu(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ju(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var bn=class s extends ht{constructor(e=new Xi([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ge(n,3)),this.setAttribute("uv",new Ge(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:U0,M,y=!1,w,T,v,S;if(x){M=x.getSpacedPoints(h),y=!0,d=!1;let ie=x.isCatmullRomCurve3?x.closed:!1;w=x.computeFrenetFrames(h,ie),T=new P,v=new P,S=new P}d||(m=0,f=0,p=0,g=0);let I=a.extractPoints(c),R=I.shape,q=I.holes;if(!ki.isClockWise(R)){R=R.reverse();for(let ie=0,de=q.length;ie<de;ie++){let le=q[ie];ki.isClockWise(le)&&(q[ie]=le.reverse())}}function U(ie){let le=10000000000000001e-36,Ae=ie[0];for(let ye=1;ye<=ie.length;ye++){let $e=ye%ie.length,Le=ie[$e],ot=Le.x-Ae.x,at=Le.y-Ae.y,xt=ot*ot+at*at,N=Math.max(Math.abs(Le.x),Math.abs(Le.y),Math.abs(Ae.x),Math.abs(Ae.y)),Wt=le*N*N;if(xt<=Wt){ie.splice($e,1),ye--;continue}Ae=Le}}U(R),q.forEach(U);let C=q.length,B=R;for(let ie=0;ie<C;ie++){let de=q[ie];R=R.concat(de)}function H(ie,de,le){return de||Ve("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(de,le)}let O=R.length;function te(ie,de,le){let Ae,ye,$e,Le=ie.x-de.x,ot=ie.y-de.y,at=le.x-ie.x,xt=le.y-ie.y,N=Le*Le+ot*ot,Wt=Le*xt-ot*at;if(Math.abs(Wt)>Number.EPSILON){let nt=Math.sqrt(N),Rt=Math.sqrt(at*at+xt*xt),ge=de.x-ot/nt,zt=de.y+Le/nt,ke=le.x-xt/Rt,We=le.y+at/Rt,A=((ke-ge)*xt-(We-zt)*at)/(Le*xt-ot*at);Ae=ge+Le*A-ie.x,ye=zt+ot*A-ie.y;let b=Ae*Ae+ye*ye;if(b<=2)return new Q(Ae,ye);$e=Math.sqrt(b/2)}else{let nt=!1;Le>Number.EPSILON?at>Number.EPSILON&&(nt=!0):Le<-Number.EPSILON?at<-Number.EPSILON&&(nt=!0):Math.sign(ot)===Math.sign(xt)&&(nt=!0),nt?(Ae=-ot,ye=Le,$e=Math.sqrt(N)):(Ae=Le,ye=ot,$e=Math.sqrt(N/2))}return new Q(Ae/$e,ye/$e)}let V=[];for(let ie=0,de=B.length,le=de-1,Ae=ie+1;ie<de;ie++,le++,Ae++)le===de&&(le=0),Ae===de&&(Ae=0),V[ie]=te(B[ie],B[le],B[Ae]);let X=[],j,Re=V.concat();for(let ie=0,de=C;ie<de;ie++){let le=q[ie];j=[];for(let Ae=0,ye=le.length,$e=ye-1,Le=Ae+1;Ae<ye;Ae++,$e++,Le++)$e===ye&&($e=0),Le===ye&&(Le=0),j[Ae]=te(le[Ae],le[$e],le[Le]);X.push(j),Re=Re.concat(j)}let Ne;if(m===0)Ne=ki.triangulateShape(B,q);else{let ie=[],de=[];for(let le=0;le<m;le++){let Ae=le/m,ye=f*Math.cos(Ae*Math.PI/2),$e=p*Math.sin(Ae*Math.PI/2)+g;for(let Le=0,ot=B.length;Le<ot;Le++){let at=H(B[Le],V[Le],$e);Ue(at.x,at.y,-ye),Ae===0&&ie.push(at)}for(let Le=0,ot=C;Le<ot;Le++){let at=q[Le];j=X[Le];let xt=[];for(let N=0,Wt=at.length;N<Wt;N++){let nt=H(at[N],j[N],$e);Ue(nt.x,nt.y,-ye),Ae===0&&xt.push(nt)}Ae===0&&de.push(xt)}}Ne=ki.triangulateShape(ie,de)}let Z=Ne.length,Me=p+g;for(let ie=0;ie<O;ie++){let de=d?H(R[ie],Re[ie],Me):R[ie];y?(v.copy(w.normals[0]).multiplyScalar(de.x),T.copy(w.binormals[0]).multiplyScalar(de.y),S.copy(M[0]).add(v).add(T),Ue(S.x,S.y,S.z)):Ue(de.x,de.y,0)}for(let ie=1;ie<=h;ie++)for(let de=0;de<O;de++){let le=d?H(R[de],Re[de],Me):R[de];y?(v.copy(w.normals[ie]).multiplyScalar(le.x),T.copy(w.binormals[ie]).multiplyScalar(le.y),S.copy(M[ie]).add(v).add(T),Ue(S.x,S.y,S.z)):Ue(le.x,le.y,u/h*ie)}for(let ie=m-1;ie>=0;ie--){let de=ie/m,le=f*Math.cos(de*Math.PI/2),Ae=p*Math.sin(de*Math.PI/2)+g;for(let ye=0,$e=B.length;ye<$e;ye++){let Le=H(B[ye],V[ye],Ae);Ue(Le.x,Le.y,u+le)}for(let ye=0,$e=q.length;ye<$e;ye++){let Le=q[ye];j=X[ye];for(let ot=0,at=Le.length;ot<at;ot++){let xt=H(Le[ot],j[ot],Ae);y?Ue(xt.x,xt.y+M[h-1].y,M[h-1].x+le):Ue(xt.x,xt.y,u+le)}}}Te(),De();function Te(){let ie=n.length/3;if(d){let de=0,le=O*de;for(let Ae=0;Ae<Z;Ae++){let ye=Ne[Ae];It(ye[2]+le,ye[1]+le,ye[0]+le)}de=h+m*2,le=O*de;for(let Ae=0;Ae<Z;Ae++){let ye=Ne[Ae];It(ye[0]+le,ye[1]+le,ye[2]+le)}}else{for(let de=0;de<Z;de++){let le=Ne[de];It(le[2],le[1],le[0])}for(let de=0;de<Z;de++){let le=Ne[de];It(le[0]+O*h,le[1]+O*h,le[2]+O*h)}}i.addGroup(ie,n.length/3-ie,0)}function De(){let ie=n.length/3,de=0;ve(B,de),de+=B.length;for(let le=0,Ae=q.length;le<Ae;le++){let ye=q[le];ve(ye,de),de+=ye.length}i.addGroup(ie,n.length/3-ie,1)}function ve(ie,de){let le=ie.length;for(;--le>=0;){let Ae=le,ye=le-1;ye<0&&(ye=ie.length-1);for(let $e=0,Le=h+m*2;$e<Le;$e++){let ot=O*$e,at=O*($e+1),xt=de+Ae+ot,N=de+ye+ot,Wt=de+ye+at,nt=de+Ae+at;Oe(xt,N,Wt,nt)}}}function Ue(ie,de,le){l.push(ie),l.push(de),l.push(le)}function It(ie,de,le){Ke(ie),Ke(de),Ke(le);let Ae=n.length/3,ye=_.generateTopUV(i,n,Ae-3,Ae-2,Ae-1);rt(ye[0]),rt(ye[1]),rt(ye[2])}function Oe(ie,de,le,Ae){Ke(ie),Ke(de),Ke(Ae),Ke(de),Ke(le),Ke(Ae);let ye=n.length/3,$e=_.generateSideWallUV(i,n,ye-6,ye-3,ye-2,ye-1);rt($e[0]),rt($e[1]),rt($e[3]),rt($e[1]),rt($e[2]),rt($e[3])}function Ke(ie){n.push(l[ie*3+0]),n.push(l[ie*3+1]),n.push(l[ie*3+2])}function rt(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return B0(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new ka[n.type]().fromJSON(n)),new s(i,e.options)}},U0={generateTopUV:function(s,e,t,i,n){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[n*3],h=e[n*3+1];return[new Q(r,o),new Q(a,l),new Q(c,h)]},generateSideWallUV:function(s,e,t,i,n,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[n*3],f=e[n*3+1],p=e[n*3+2],g=e[r*3],m=e[r*3+1],x=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Q(o,1-l),new Q(c,1-u),new Q(d,1-p),new Q(g,1-x)]:[new Q(a,1-l),new Q(h,1-u),new Q(f,1-p),new Q(m,1-x)]}};function B0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){let r=s[i];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var eo=class s extends Ba{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},En=class s extends ht{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=tt(n,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new P,d=new Q,f=new P,p=new P,g=new P,m=0,x=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,f.x=x*1,f.y=-m,f.z=x*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:g.normalize(),l.push(g.x,g.y,g.z);break;default:m=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,f.x=x*1,f.y=-m,f.z=x*0,p.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(p)}for(let _=0;_<=t;_++){let M=i+_*h*n,y=Math.sin(M),w=Math.cos(M);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*y,u.y=e[T].y,u.z=e[T].x*w,o.push(u.x,u.y,u.z),d.x=_/t,d.y=T/(e.length-1),a.push(d.x,d.y);let v=l[3*T+0]*y,S=l[3*T+1],I=l[3*T+0]*w;c.push(v,S,I)}}for(let _=0;_<t;_++)for(let M=0;M<e.length-1;M++){let y=M+_*e.length,w=y,T=y+e.length,v=y+e.length+1,S=y+1;r.push(w,T,S),r.push(v,S,T)}this.setIndex(r),this.setAttribute("position",new Ge(o,3)),this.setAttribute("uv",new Ge(a,2)),this.setAttribute("normal",new Ge(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Tt=class s extends ht{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],g=[],m=[];for(let x=0;x<h;x++){let _=x*d-o;for(let M=0;M<c;M++){let y=M*u-r;p.push(y,-_,0),g.push(0,0,1),m.push(M/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let _=0;_<a;_++){let M=_+c*x,y=_+c*(x+1),w=_+1+c*(x+1),T=_+1+c*x;f.push(M,y,T),f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new Ge(p,3)),this.setAttribute("normal",new Ge(g,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},on=class s extends ht{constructor(e=.5,t=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/n,f=new P,p=new Q;for(let g=0;g<=n;g++){for(let m=0;m<=i;m++){let x=r+m/i*o;f.x=u*Math.cos(x),f.y=u*Math.sin(x),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let g=0;g<n;g++){let m=g*(i+1);for(let x=0;x<i;x++){let _=x+m,M=_,y=_+i+1,w=_+i+2,T=_+1;a.push(M,y,T),a.push(y,w,T)}}this.setIndex(a),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},to=class s extends ht{constructor(e=new Xi([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ge(n,3)),this.setAttribute("normal",new Ge(r,3)),this.setAttribute("uv",new Ge(o,2));function c(h){let u=n.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;ki.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,x=p.length;m<x;m++){let _=p[m];ki.isClockWise(_)===!0&&(p[m]=_.reverse())}let g=ki.triangulateShape(f,p);for(let m=0,x=p.length;m<x;m++){let _=p[m];f=f.concat(_)}for(let m=0,x=f.length;m<x;m++){let _=f[m];n.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,x=g.length;m<x;m++){let _=g[m],M=_[0]+u,y=_[1]+u,w=_[2]+u;i.push(M,y,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return O0(t,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let o=t[e.shapes[n]];i.push(o)}return new s(i,e.curveSegments)}};function O0(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,i=s.length;t<i;t++){let n=s[t];e.shapes.push(n.uuid)}else e.shapes.push(s.uuid);return e}var St=class s extends ht{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,d=new P,f=[],p=[],g=[],m=[];for(let x=0;x<=i;x++){let _=[],M=x/i,y=o+M*a,w=e*Math.cos(y),T=Math.sqrt(e*e-w*w),v=0;x===0&&o===0?v=.5/t:x===i&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){let I=S/t,R=n+I*r;u.x=-T*Math.cos(R),u.y=w,u.z=T*Math.sin(R),p.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(I+v,1-M),_.push(c++)}h.push(_)}for(let x=0;x<i;x++)for(let _=0;_<t;_++){let M=h[x][_+1],y=h[x][_],w=h[x+1][_],T=h[x+1][_+1];(x!==0||o>0)&&f.push(M,y,T),(x!==i-1||l<Math.PI)&&f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new Ge(p,3)),this.setAttribute("normal",new Ge(g,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var wt=class s extends ht{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],u=[],d=new P,f=new P,p=new P;for(let g=0;g<=i;g++){let m=o+g/i*a;for(let x=0;x<=n;x++){let _=x/n*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(x/n),u.push(g/i)}}for(let g=1;g<=i;g++)for(let m=1;m<=n;m++){let x=(n+1)*g+m-1,_=(n+1)*(g-1)+m-1,M=(n+1)*(g-1)+m,y=(n+1)*g+m;l.push(x,_,y),l.push(_,M,y)}this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var io=class s extends ht{constructor(e=new Jr(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new Q,h=new P,u=[],d=[],f=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(f,2));function g(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),_(),x()}function m(M){h=e.getPointAt(M/t,h);let y=o.normals[M],w=o.binormals[M];for(let T=0;T<=n;T++){let v=T/n*Math.PI*2,S=Math.sin(v),I=-Math.cos(v);l.x=I*y.x+S*w.x,l.y=I*y.y+S*w.y,l.z=I*y.z+S*w.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function x(){for(let M=1;M<=t;M++)for(let y=1;y<=n;y++){let w=(n+1)*(M-1)+(y-1),T=(n+1)*M+(y-1),v=(n+1)*M+y,S=(n+1)*(M-1)+y;p.push(w,T,S),p.push(T,v,S)}}function _(){for(let M=0;M<=t;M++)for(let y=0;y<=n;y++)c.x=M/t,c.y=y/n,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new ka[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ms(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];if(ed(n))n.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(ed(n[0])){let r=[];for(let o=0,a=n.length;o<a;o++)r[o]=n[o].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function hi(s){let e={};for(let t=0;t<s.length;t++){let i=ms(s[t]);for(let n in i)e[n]=i[n]}return e}function ed(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function H0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Dh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var Fi={clone:ms,merge:hi},z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dt=class extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z0,this.fragmentShader=k0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=H0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Se().setHex(n.value);break;case"v2":this.uniforms[i].value=new Q().fromArray(n.value);break;case"v3":this.uniforms[i].value=new P().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(n.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ks=class extends dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xe=class extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jt=class extends Xe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ns('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ns('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var no=class extends Gi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=sl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Va=class extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wa=class extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function xa(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Hn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break i}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let o=0;o!==n;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xa=class extends Hn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jc,endingEnd:jc}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,o=e+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case eh:r=e,a=2*t-i;break;case th:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case eh:o=e,l=2*i-t;break;case th:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(n-t),g=p*p,m=g*p,x=-d*m+2*d*g-d*p,_=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*p+1,M=(-1-f)*m+(1.5+f)*g+.5*p,y=f*m-f*g;for(let w=0;w!==a;++w)r[w]=x*o[h+w]+_*o[c+w]+M*o[l+w]+y*o[u+w];return r}},Ya=class extends Hn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Za=class extends Hn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Ja=class extends Hn{interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(n-t),g=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*g+o[l+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let g=o[c+p],m=o[l+p],x=f*d+p*2,_=u[x],M=u[x+1],y=e*d+p*2,w=h[y],T=h[y+1],v=V0(i,t,_,w,n);r[p]=ef(v,g,M,T,m)}return r}};function ef(s,e,t,i,n){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*i+s*s*s*n}function G0(s,e,t,i,n){let r=1-s;return 3*r*r*(t-e)+6*r*s*(i-t)+3*s*s*(n-i)}function V0(s,e,t,i,n){let r=(s-e)/(n-e);for(let o=0;o<8;o++){let a=ef(r,e,t,i,n)-s;if(Math.abs(a)<1e-10)break;let l=G0(r,e,t,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var bi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qs(t,this.TimeBufferType),this.values=qs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:qs(e.times,Array),values:qs(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),xa(e.settings)&&(i.settings={inTangents:qs(e.settings.inTangents,Array),outTangents:qs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ja(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fr:t=this.InterpolantFactoryMethodDiscrete;break;case Pa:t=this.InterpolantFactoryMethodLinear;break;case ya:t=this.InterpolantFactoryMethodSmooth;break;case Qc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ze("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return ya;case this.InterpolantFactoryMethodBezier:return Qc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;xa(this.settings)&&(td(this.settings.inTangents,e),td(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;xa(this.settings)&&(id(this.settings.inTangents,e),id(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ve("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&Dp(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ya,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let g=t[u+p];if(g!==t[d+p]||g!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,xa(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function td(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]+=e}function id(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]*=e}bi.prototype.ValueTypeName="";bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=Pa;var zn=class extends bi{constructor(e,t,i){super(e,t,i)}};zn.prototype.ValueTypeName="bool";zn.prototype.ValueBufferType=Array;zn.prototype.DefaultInterpolation=Fr;zn.prototype.InterpolantFactoryMethodLinear=void 0;zn.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends bi{constructor(e,t,i,n){super(e,t,i,n)}};$a.prototype.ValueTypeName="color";var Ka=class extends bi{constructor(e,t,i,n){super(e,t,i,n)}};Ka.prototype.ValueTypeName="number";var Qa=class extends Hn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t),c=e*a;for(let h=c+a;c!==h;c+=4)nn.slerpFlat(r,0,o,c-a,o,c,l);return r}},so=class extends bi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Qa(this.times,this.values,this.getValueSize(),e)}};so.prototype.ValueTypeName="quaternion";so.prototype.InterpolantFactoryMethodSmooth=void 0;var kn=class extends bi{constructor(e,t,i){super(e,t,i)}};kn.prototype.ValueTypeName="string";kn.prototype.ValueBufferType=Array;kn.prototype.DefaultInterpolation=Fr;kn.prototype.InterpolantFactoryMethodLinear=void 0;kn.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends bi{constructor(e,t,i,n){super(e,t,i,n)}};ja.prototype.ValueTypeName="vector";var el=class{constructor(e,t,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tf=new el,ro=class{constructor(e){this.manager=e!==void 0?e:tf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qs=class extends Lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},wn=class extends Qs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Kc=new pt,nd=new P,sd=new P,oo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bn,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;nd.setFromMatrixPosition(e.matrixWorld),t.position.copy(nd),sd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Kc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=n?n.z/r.x:1,a=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===Hs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_a=new P,va=new nn,ji=new P,ao=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_a,va,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,va,ji.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(_a,va,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,va,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Un=new P,rd=new Q,od=new Q,Zt=class extends ao{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,rd,od),t.subVectors(od,rd)}setViewOffset(e,t,i,n,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var oh=class extends oo{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}},ls=class extends Qs{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new oh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},cs=class extends ao{constructor(e=-1,t=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ah=class extends oo{constructor(){super(new cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ei=class extends Qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new ah}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Fs=-90,Ls=1,js=class extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Zt(Fs,Ls,e,t);n.layers=this.layers,this.add(n);let r=new Zt(Fs,Ls,e,t);r.layers=this.layers,this.add(r);let o=new Zt(Fs,Ls,e,t);o.layers=this.layers,this.add(o);let a=new Zt(Fs,Ls,e,t);a.layers=this.layers,this.add(a);let l=new Zt(Fs,Ls,e,t);l.layers=this.layers,this.add(l);let c=new Zt(Fs,Ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},tl=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},lo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=W0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function W0(){this._document.hidden===!1&&this.reset()}var qh="\\[\\]\\.:\\/",X0=new RegExp("["+qh+"]","g"),Fh="[^"+qh+"]",Y0="[^"+qh.replace("\\.","")+"]",Z0=/((?:WC+[\/:])*)/.source.replace("WC",Fh),J0=/(WCOD+)?/.source.replace("WCOD",Y0),$0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fh),K0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fh),Q0=new RegExp("^"+Z0+J0+$0+K0+"$"),j0=["material","materials","bones","map"],lh=class{constructor(e,t,i){let n=i||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ft=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(X0,"")}static parseTrackName(e){let t=Q0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);j0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[n];if(o===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=lh;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O3=new Float32Array(1);var ad=new pt,co=class{constructor(e,t,i=0,n=1/0){this.ray=new ss(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ad.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ad),this}intersectObject(e,t=!0,i=[]){return ch(e,this,i,t),i.sort(ld),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)ch(e[n],this,i,t);return i.sort(ld),i}};function ld(s,e){return s.distance-e.distance}function ch(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)ch(r[o],e,t,!0)}}var Hh=class Hh{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};Hh.prototype.isMatrix2=!0;var hh=Hh,cd=new Q,il=class{constructor(e=new Q(1/0,1/0),t=new Q(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=cd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var ho=class{constructor(){this.type="ShapePath",this.color=new Se,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new os,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,r,o){return this.currentPath.bezierCurveTo(e,t,i,n,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let h=!1,u=c.length;for(let d=0,f=u-1;d<u;f=d++){let p=c[d],g=c[f];p.y>l.y!=g.y>l.y&&l.x<(g.x-p.x)*(l.y-p.y)/(g.y-p.y)+p.x&&(h=!h)}return h}function t(l,c){let h=c.getCenter(new Q);if(e(h,l))return h;let u=h.y,d=[],f=l.length;for(let p=0;p<f;p++){let g=l[p],m=l[(p+1)%f];if(g.y>u!=m.y>u){let x=g.x+(u-g.y)*(m.x-g.x)/(m.y-g.y);d.push(x)}}return d.length>1&&(d.sort((p,g)=>p-g),h.x=(d[0]+d[1])/2),h}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(ze('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");let n=i==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=ki.area(c);if(h===0)continue;let u=new il;for(let d=0;d<c.length;d++)u.expandByPoint(c[d]);r.push({subPath:l,points:c,boundingBox:u,interiorPoint:t(c,u),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let u=l-1;u>=0;u--){let d=r[u];if(d.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,d.points)){c.container=d.exclude?d.container:d,h=d.winding,c.winding+=h;break}}n(c.winding)===n(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let o=[],a=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new Xi;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=a.get(l.container);if(!c)continue;let h=new os;h.curves=l.subPath.curves,c.holes.push(h)}return o}};function Lh(s,e,t,i){let n=em(i);switch(t){case Mh:return s*e;case ul:return s*e/n.components*n.byteLength;case dl:return s*e/n.components*n.byteLength;case Wn:return s*e*2/n.components*n.byteLength;case fl:return s*e*2/n.components*n.byteLength;case Sh:return s*e*3/n.components*n.byteLength;case $i:return s*e*4/n.components*n.byteLength;case pl:return s*e*4/n.components*n.byteLength;case xo:case _o:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vo:case yo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gl:case _l:return Math.max(s,16)*Math.max(e,8)/4;case ml:case xl:return Math.max(s,8)*Math.max(e,8)/2;case vl:case yl:case Sl:case bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ml:case Mo:case El:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Al:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Il:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ql:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ol:case Hl:case zl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case kl:case Gl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case So:case Vl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function em(s){switch(s){case gi:case xh:return{byteLength:1,components:1};case ir:case _h:case $t:return{byteLength:2,components:1};case cl:case hl:return{byteLength:2,components:4};case Ji:case ll:case qi:return{byteLength:4,components:1};case vh:case yh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Ef(){let s=null,e=!1,t=null,i=null;function n(r,o){i=s.requestAnimationFrame(n),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function lm(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],g=u[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let g=u[f];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Dm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,km=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,e1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,t1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,o1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,a1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h1=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,u1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,I1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,D1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,B1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,X1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Y1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Q1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ig=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ng=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ag=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:cm,alphahash_pars_fragment:hm,alphamap_fragment:um,alphamap_pars_fragment:dm,alphatest_fragment:fm,alphatest_pars_fragment:pm,aomap_fragment:mm,aomap_pars_fragment:gm,batching_pars_vertex:xm,batching_vertex:_m,begin_vertex:vm,beginnormal_vertex:ym,bsdfs:Mm,iridescence_fragment:Sm,bumpmap_pars_fragment:bm,clipping_planes_fragment:Em,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:Am,color_fragment:Rm,color_pars_fragment:Cm,color_pars_vertex:Pm,color_vertex:Im,common:Dm,defaultnormal_vertex:qm,displacementmap_pars_vertex:Fm,displacementmap_vertex:Lm,emissivemap_fragment:Nm,emissivemap_pars_fragment:Um,colorspace_fragment:Bm,colorspace_pars_fragment:Om,envmap_fragment:Hm,envmap_common_pars_fragment:zm,envmap_pars_fragment:km,envmap_pars_vertex:Gm,envmap_physical_pars_fragment:e1,envmap_vertex:Vm,fog_vertex:Wm,fog_pars_vertex:Xm,fog_fragment:Ym,fog_pars_fragment:Zm,gradientmap_pars_fragment:Jm,lightmap_pars_fragment:$m,lights_lambert_fragment:Km,lights_lambert_pars_fragment:Qm,lights_pars_begin:jm,lights_toon_fragment:t1,lights_toon_pars_fragment:i1,lights_phong_fragment:n1,lights_phong_pars_fragment:s1,lights_physical_fragment:r1,lights_physical_pars_fragment:o1,lights_fragment_begin:a1,lights_fragment_maps:l1,lights_fragment_end:c1,lightprobes_pars_fragment:h1,logdepthbuf_fragment:u1,logdepthbuf_pars_fragment:d1,logdepthbuf_pars_vertex:f1,logdepthbuf_vertex:p1,map_fragment:m1,map_pars_fragment:g1,map_particle_fragment:x1,map_particle_pars_fragment:_1,metalnessmap_fragment:v1,metalnessmap_pars_fragment:y1,morphinstance_vertex:M1,morphcolor_vertex:S1,morphnormal_vertex:b1,morphtarget_pars_vertex:E1,morphtarget_vertex:w1,normal_fragment_begin:T1,normal_fragment_maps:A1,normal_pars_fragment:R1,normal_pars_vertex:C1,normal_vertex:P1,normalmap_pars_fragment:I1,clearcoat_normal_fragment_begin:D1,clearcoat_normal_fragment_maps:q1,clearcoat_pars_fragment:F1,iridescence_pars_fragment:L1,opaque_fragment:N1,packing:U1,premultiplied_alpha_fragment:B1,project_vertex:O1,dithering_fragment:H1,dithering_pars_fragment:z1,roughnessmap_fragment:k1,roughnessmap_pars_fragment:G1,shadowmap_pars_fragment:V1,shadowmap_pars_vertex:W1,shadowmap_vertex:X1,shadowmask_pars_fragment:Y1,skinbase_vertex:Z1,skinning_pars_vertex:J1,skinning_vertex:$1,skinnormal_vertex:K1,specularmap_fragment:Q1,specularmap_pars_fragment:j1,tonemapping_fragment:eg,tonemapping_pars_fragment:tg,transmission_fragment:ig,transmission_pars_fragment:ng,uv_pars_fragment:sg,uv_pars_vertex:rg,uv_vertex:og,worldpos_vertex:ag,background_vert:lg,background_frag:cg,backgroundCube_vert:hg,backgroundCube_frag:ug,cube_vert:dg,cube_frag:fg,depth_vert:pg,depth_frag:mg,distance_vert:gg,distance_frag:xg,equirect_vert:_g,equirect_frag:vg,linedashed_vert:yg,linedashed_frag:Mg,meshbasic_vert:Sg,meshbasic_frag:bg,meshlambert_vert:Eg,meshlambert_frag:wg,meshmatcap_vert:Tg,meshmatcap_frag:Ag,meshnormal_vert:Rg,meshnormal_frag:Cg,meshphong_vert:Pg,meshphong_frag:Ig,meshphysical_vert:Dg,meshphysical_frag:qg,meshtoon_vert:Fg,meshtoon_frag:Lg,points_vert:Ng,points_frag:Ug,shadow_vert:Bg,shadow_frag:Og,sprite_vert:Hg,sprite_frag:zg},Ee={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},cn={basic:{uniforms:hi([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:hi([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:hi([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:hi([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:hi([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Se(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:hi([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:hi([Ee.points,Ee.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:hi([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:hi([Ee.common,Ee.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:hi([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:hi([Ee.sprite,Ee.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:hi([Ee.common,Ee.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:hi([Ee.lights,Ee.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};cn.physical={uniforms:hi([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var Wl={r:0,b:0,g:0},kg=new pt,wf=new Ye;wf.set(-1,0,0,0,1,0,0,0,1);function Gg(s,e,t,i,n,r){let o=new Se(0),a=n===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let y=_.backgroundBlurriness>0;M=e.get(M,y)}return M}function p(_){let M=!1,y=f(_);y===null?m(o,a):y&&y.isColor&&(m(y,1),M=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,M){let y=f(M);y&&y.isCubeTexture?(c===void 0&&(c=new ne(new gt(1,1,1),new dt({name:"BackgroundCubeMaterial",uniforms:ms(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wf),c.material.toneMapped=st.getTransfer(y.colorSpace)!==_t,(h!==y||u!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ne(new Tt(2,2),new dt({name:"BackgroundMaterial",uniforms:ms(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=st.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(Wl,Dh(s)),t.buffers.color.setClear(Wl.r,Wl.g,Wl.b,M,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:g,dispose:x}}function Vg(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,o=!1;function a(q,D,U,C,B){let H=!1,O=u(q,C,U,D);r!==O&&(r=O,c(r.object)),H=f(q,C,U,B),H&&p(q,C,U,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(q,D,U,C),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(q){return s.bindVertexArray(q)}function h(q){return s.deleteVertexArray(q)}function u(q,D,U,C){let B=C.wireframe===!0,H=i[D.id];H===void 0&&(H={},i[D.id]=H);let O=q.isInstancedMesh===!0?q.id:0,te=H[O];te===void 0&&(te={},H[O]=te);let V=te[U.id];V===void 0&&(V={},te[U.id]=V);let X=V[B];return X===void 0&&(X=d(l()),V[B]=X),X}function d(q){let D=[],U=[],C=[];for(let B=0;B<t;B++)D[B]=0,U[B]=0,C[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:C,object:q,attributes:{},index:null}}function f(q,D,U,C){let B=r.attributes,H=D.attributes,O=0,te=U.getAttributes();for(let V in te)if(te[V].location>=0){let j=B[V],Re=H[V];if(Re===void 0&&(V==="instanceMatrix"&&q.instanceMatrix&&(Re=q.instanceMatrix),V==="instanceColor"&&q.instanceColor&&(Re=q.instanceColor)),j===void 0||j.attribute!==Re||Re&&j.data!==Re.data)return!0;O++}return r.attributesNum!==O||r.index!==C}function p(q,D,U,C){let B={},H=D.attributes,O=0,te=U.getAttributes();for(let V in te)if(te[V].location>=0){let j=H[V];j===void 0&&(V==="instanceMatrix"&&q.instanceMatrix&&(j=q.instanceMatrix),V==="instanceColor"&&q.instanceColor&&(j=q.instanceColor));let Re={};Re.attribute=j,j&&j.data&&(Re.data=j.data),B[V]=Re,O++}r.attributes=B,r.attributesNum=O,r.index=C}function g(){let q=r.newAttributes;for(let D=0,U=q.length;D<U;D++)q[D]=0}function m(q){x(q,0)}function x(q,D){let U=r.newAttributes,C=r.enabledAttributes,B=r.attributeDivisors;U[q]=1,C[q]===0&&(s.enableVertexAttribArray(q),C[q]=1),B[q]!==D&&(s.vertexAttribDivisor(q,D),B[q]=D)}function _(){let q=r.newAttributes,D=r.enabledAttributes;for(let U=0,C=D.length;U<C;U++)D[U]!==q[U]&&(s.disableVertexAttribArray(U),D[U]=0)}function M(q,D,U,C,B,H,O){O===!0?s.vertexAttribIPointer(q,D,U,B,H):s.vertexAttribPointer(q,D,U,C,B,H)}function y(q,D,U,C){g();let B=C.attributes,H=U.getAttributes(),O=D.defaultAttributeValues;for(let te in H){let V=H[te];if(V.location>=0){let X=B[te];if(X===void 0&&(te==="instanceMatrix"&&q.instanceMatrix&&(X=q.instanceMatrix),te==="instanceColor"&&q.instanceColor&&(X=q.instanceColor)),X!==void 0){let j=X.normalized,Re=X.itemSize,Ne=e.get(X);if(Ne===void 0)continue;let Z=Ne.buffer,Me=Ne.type,Te=Ne.bytesPerElement,De=Me===s.INT||Me===s.UNSIGNED_INT||X.gpuType===ll;if(X.isInterleavedBufferAttribute){let ve=X.data,Ue=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,It=X.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Oe=0;Oe<V.locationSize;Oe++)x(V.location+Oe,ve.meshPerAttribute);q.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)m(V.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let Oe=0;Oe<V.locationSize;Oe++)M(V.location+Oe,Re/V.locationSize,Me,j,Ue*Te,(It+Re/V.locationSize*Oe)*Te,De)}else{if(X.isInstancedBufferAttribute){for(let ve=0;ve<V.locationSize;ve++)x(V.location+ve,X.meshPerAttribute);q.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ve=0;ve<V.locationSize;ve++)m(V.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let ve=0;ve<V.locationSize;ve++)M(V.location+ve,Re/V.locationSize,Me,j,Re*Te,Re/V.locationSize*ve*Te,De)}}else if(O!==void 0){let j=O[te];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(V.location,j);break;case 3:s.vertexAttrib3fv(V.location,j);break;case 4:s.vertexAttrib4fv(V.location,j);break;default:s.vertexAttrib1fv(V.location,j)}}}}_()}function w(){I();for(let q in i){let D=i[q];for(let U in D){let C=D[U];for(let B in C){let H=C[B];for(let O in H)h(H[O].object),delete H[O];delete C[B]}}delete i[q]}}function T(q){if(i[q.id]===void 0)return;let D=i[q.id];for(let U in D){let C=D[U];for(let B in C){let H=C[B];for(let O in H)h(H[O].object),delete H[O];delete C[B]}}delete i[q.id]}function v(q){for(let D in i){let U=i[D];for(let C in U){let B=U[C];if(B[q.id]===void 0)continue;let H=B[q.id];for(let O in H)h(H[O].object),delete H[O];delete B[q.id]}}}function S(q){for(let D in i){let U=i[D],C=q.isInstancedMesh===!0?q.id:0,B=U[C];if(B!==void 0){for(let H in B){let O=B[H];for(let te in O)h(O[te].object),delete O[te];delete B[H]}delete U[C],Object.keys(U).length===0&&delete i[D]}}}function I(){R(),o=!0,r!==n&&(r=n,c(r.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:I,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function Wg(s,e,t){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Xg(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(v){return!(v!==$i&&i.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let S=v===$t&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==gi&&v!==qi&&!S&&i.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,maxSamples:w,samples:T}}function Yg(s){let e=this,t=null,i=0,n=!1,r=!1,o=new di,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,x=s.get(u);if(!n||p===null||p.length===0||r&&!m)r?h(null):c();else{let _=r?0:i,M=_*4,y=x.clippingState||null;l.value=y,y=h(p,d,M,f);for(let w=0;w!==M;++w)y[w]=t[w];x.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,p){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let x=f+g*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<x)&&(m=new Float32Array(x));for(let M=0,y=f;M!==g;++M,y+=4)o.copy(u[M]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}var To=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Gr(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new gt(5,5,5),r=new dt({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:An});r.uniforms.tEquirect.value=t;let o=new ne(n,r),a=t.minFilter;return t.minFilter===Zi&&(t.minFilter=fi),new js(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(r)}},nf=256,Zg=3,Jg=20,Tf=256,Af=16,$g=3,Kg=new P,Qg=new Se,hn=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new js(1,10,null),this._boxMesh=new ne(new gt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:o=256,position:a=Kg}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,g=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(e.background=l.getClearColor(Qg));let m=new js(i,n,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=g,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(nf,Ch(e))}_fromTexture(e,t){e.mapping===ds||e.mapping===tr?this._setSize(e.image.length===0?nf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=sf(e,!1,!1),i=Math.log2(e)-Zg;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=sf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ds||e.mapping===tr?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=rf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=jg(),this._integrationMaterial=e2());let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Af);for(let o=0;o<=i;o++){let a=s.lodToRoughness(o,i);if(o>i-$g)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Tf*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=t2());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}};function sf(s,e,t){return new To(s,{minFilter:Zi,generateMipmaps:e,type:$t,colorSpace:Lr,depthBuffer:t})}function Ao(s,e,t){return new dt({name:s,uniforms:e,vertexShader:it.cube_vert,fragmentShader:t,side:kt,blending:An,depthTest:!1,depthWrite:!1})}function jg(){return Ao("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Tf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function e2(){return Ao("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Af}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function t2(){return Ao("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Jg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function rf(){return Ao("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function of(){return Ao("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function i2(s){let e=new WeakMap,t=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===rl||f===ol)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let g=new To(p.height);return g.fromEquirectangularTexture(s,d),e.set(d,g),d.addEventListener("dispose",c),a(g.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===rl||f===ol,g=f===ds||f===tr;if(p||g){let m=t.get(d),x=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new hn(s)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return p&&_&&_.height>0||g&&_&&l(_)?(i===null&&(i=new hn(s)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===rl?d.mapping=ds:f===ol&&(d.mapping=tr),d}function l(d){let f=0,p=6;for(let g=0;g<p;g++)d[g]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function n2(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&ns("WebGLRenderer: "+i+" extension not supported."),n}}}function s2(s,e,t,i){let n={},r=new WeakMap,o=new FinalizationRegistry(p=>delete n[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete n[p.id],o.unregister(p);let g=r.get(p);g&&(e.remove(g),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,g){return n[g.id]!==void 0||(g.addEventListener("dispose",a),n[g.id]=new WeakRef(g),o.register(g,g.id,g),t.memory.geometries++),g}function h(p){let g=p.attributes;for(let m in g)e.update(g[m],s.ARRAY_BUFFER)}function u(p){let g=p.index,m=p.attributes.position,x=0;if(m===void 0)return;let _=g!==null?g.array.length:m.array.length/3-1,M=m.count>=65535?zr:Hr,y=new M(Math.ceil(_/3)*6,1),w=y.array;if(g!==null){let v=g.array;x=g.version;for(let S=0,I=0;S<_;S+=3){let R=v[S+0],q=v[S+1],D=v[S+2];w[I++]=R,w[I++]=q,w[I++]=q,w[I++]=D,w[I++]=D,w[I++]=R}}else{x=m.version;for(let v=0,S=0;v<_;v+=3){let I=v+0,R=v+1,q=v+2;w[S++]=I,w[S++]=R,w[S++]=R,w[S++]=q,w[S++]=q,w[S++]=I}}y.version=x;let T=r.get(p);T&&e.remove(T),r.set(p,y)}function d(p){let g=r.get(p);if(g){let m=p.index;m!==null&&g.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in n){let g=n[p].deref();g!==void 0&&l(g)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function r2(s,e,t){let i;function n(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(i,d,r,u*o),t.update(d,i,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(i,d,r,u*o,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let g=0;for(let m=0;m<f;m++)g+=d[m];t.update(g,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function o2(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function a2(s,e,t){let i=new WeakMap,n=new Pt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let I=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),g===!0&&(M=3);let y=a.attributes.position.count*M,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*w*4*u),v=new Br(T,y,w,u);v.type=qi,v.needsUpdate=!0;let S=M*4;for(let R=0;R<u;R++){let q=m[R],D=x[R],U=_[R],C=y*w*4*R;for(let B=0;B<q.count;B++){let H=B*S;f===!0&&(n.fromBufferAttribute(q,B),T[C+H+0]=n.x,T[C+H+1]=n.y,T[C+H+2]=n.z,T[C+H+3]=0),p===!0&&(n.fromBufferAttribute(D,B),T[C+H+4]=n.x,T[C+H+5]=n.y,T[C+H+6]=n.z,T[C+H+7]=0),g===!0&&(n.fromBufferAttribute(U,B),T[C+H+8]=n.x,T[C+H+9]=n.y,T[C+H+10]=n.z,T[C+H+11]=U.itemSize===4?n.w:1)}}d={count:u,texture:v,size:new Q(y,w)},i.set(a,d),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function l2(s,e,t,i,n){let r=new WeakMap;function o(c){let h=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var c2={[uo]:"LINEAR_TONE_MAPPING",[fo]:"REINHARD_TONE_MAPPING",[po]:"CINEON_TONE_MAPPING",[Yi]:"ACES_FILMIC_TONE_MAPPING",[us]:"AGX_TONE_MAPPING",[Di]:"NEUTRAL_TONE_MAPPING",[mo]:"CUSTOM_TONE_MAPPING"};function h2(s,e,t,i,n,r){let o=new Gt(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new ht;h.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let u=new Ks({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ne(h,u),f=new cs(-1,1,1,-1,0,1),p=null,g=null,m=!1,x,_=null,M=[],y=!1;this.setSize=function(w,T){o.setSize(w,T),a!==null&&a.setSize(w,T),l!==null&&l.setSize(w,T);for(let v=0;v<M.length;v++){let S=M[v];S.setSize&&S.setSize(w,T)}},this.setEffects=function(w){M=w,y=M.length>0&&M[0].isRenderPass===!0;let T=o.width,v=o.height;M.length>0&&a===null&&(a=new Gt(T,v,{type:$t,depthBuffer:!1,stencilBuffer:!1}),l=new Gt(T,v,{type:$t,depthBuffer:!1,stencilBuffer:!1}));let S=n===!0&&M.some(I=>I.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Mn(T,v),r===!0&&(c.format=Rn,c.type=fs)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let I=0;I<M.length;I++){let R=M[I];R.setSize&&R.setSize(T,v),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,T){if(m||w.toneMapping===an&&M.length===0)return!1;if(_=T,T!==null){let v=T.width,S=T.height;(o.width!==v||o.height!==S)&&this.setSize(v,S)}return y===!1&&w.setRenderTarget(o),x=w.toneMapping,w.toneMapping=an,!0},this.hasRenderPass=function(){return y},this.end=function(w,T){w.toneMapping=x,m=!0;let v=o,S=a;for(let I=0;I<M.length;I++){let R=M[I];R.enabled!==!1&&(R.render(w,S,v,T),R.needsSwap!==!1&&(v=S,S=S===a?l:a))}if(p!==w.outputColorSpace||g!==w.toneMapping){p=w.outputColorSpace,g=w.toneMapping,u.defines={},st.getTransfer(p)===_t&&(u.defines.SRGB_TRANSFER="");let I=c2[g];I&&(u.defines[I]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,w.setRenderTarget(_),w.render(d,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Rf=new pi,Cf=new Mn(1,1),Pf=new Vr(1),If=new Br,Df=new qa,qf=new Gr,af=[],lf=[],cf=new Float32Array(16),hf=new Float32Array(9),uf=new Float32Array(4);function rr(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=af[n];if(r===void 0&&(r=new Float32Array(n),af[n]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Kt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Qt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Yl(s,e){let t=lf[e];t===void 0&&(t=new Int32Array(e),lf[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function u2(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function d2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2fv(this.addr,e),Qt(t,e)}}function f2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;s.uniform3fv(this.addr,e),Qt(t,e)}}function p2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4fv(this.addr,e),Qt(t,e)}}function m2(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,i))return;uf.set(i),s.uniformMatrix2fv(this.addr,!1,uf),Qt(t,i)}}function g2(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,i))return;hf.set(i),s.uniformMatrix3fv(this.addr,!1,hf),Qt(t,i)}}function x2(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,i))return;cf.set(i),s.uniformMatrix4fv(this.addr,!1,cf),Qt(t,i)}}function _2(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function v2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2iv(this.addr,e),Qt(t,e)}}function y2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3iv(this.addr,e),Qt(t,e)}}function M2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4iv(this.addr,e),Qt(t,e)}}function S2(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function b2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2uiv(this.addr,e),Qt(t,e)}}function E2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3uiv(this.addr,e),Qt(t,e)}}function w2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4uiv(this.addr,e),Qt(t,e)}}function Zl(s){return s.version===0&&(s.compareFunction=wh,s.needsUpdate=!0),s}function T2(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=Zl(Cf):r=Rf,t.setTexture2D(e||r,n)}function A2(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Df,n)}function R2(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Zl(Pf):r=qf,t.setTextureCube(e||r,n)}function C2(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||If,n)}function P2(s){switch(s){case 5126:return u2;case 35664:return d2;case 35665:return f2;case 35666:return p2;case 35674:return m2;case 35675:return g2;case 35676:return x2;case 5124:case 35670:return _2;case 35667:case 35671:return v2;case 35668:case 35672:return y2;case 35669:case 35673:return M2;case 5125:return S2;case 36294:return b2;case 36295:return E2;case 36296:return w2;case 35678:case 36198:case 36298:case 36306:case 35682:return T2;case 35679:case 36299:case 36307:return A2;case 35680:case 36300:case 36308:case 36293:return R2;case 36289:case 36303:case 36311:case 36292:return C2}}function I2(s,e){s.uniform1fv(this.addr,e)}function D2(s,e){let t=rr(e,this.size,2);s.uniform2fv(this.addr,t)}function q2(s,e){let t=rr(e,this.size,3);s.uniform3fv(this.addr,t)}function F2(s,e){let t=rr(e,this.size,4);s.uniform4fv(this.addr,t)}function L2(s,e){let t=rr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function N2(s,e){let t=rr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function U2(s,e){let t=rr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function B2(s,e){s.uniform1iv(this.addr,e)}function O2(s,e){s.uniform2iv(this.addr,e)}function H2(s,e){s.uniform3iv(this.addr,e)}function z2(s,e){s.uniform4iv(this.addr,e)}function k2(s,e){s.uniform1uiv(this.addr,e)}function G2(s,e){s.uniform2uiv(this.addr,e)}function V2(s,e){s.uniform3uiv(this.addr,e)}function W2(s,e){s.uniform4uiv(this.addr,e)}function X2(s,e,t){let i=this.cache,n=e.length,r=Yl(t,n);Kt(i,r)||(s.uniform1iv(this.addr,r),Qt(i,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Zl(Cf):o=Rf;for(let a=0;a!==n;++a)t.setTexture2D(e[a]||o,r[a])}function Y2(s,e,t){let i=this.cache,n=e.length,r=Yl(t,n);Kt(i,r)||(s.uniform1iv(this.addr,r),Qt(i,r));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Df,r[o])}function Z2(s,e,t){let i=this.cache,n=e.length,r=Yl(t,n);Kt(i,r)||(s.uniform1iv(this.addr,r),Qt(i,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Zl(Pf):o=qf;for(let a=0;a!==n;++a)t.setTextureCube(e[a]||o,r[a])}function J2(s,e,t){let i=this.cache,n=e.length,r=Yl(t,n);Kt(i,r)||(s.uniform1iv(this.addr,r),Qt(i,r));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||If,r[o])}function $2(s){switch(s){case 5126:return I2;case 35664:return D2;case 35665:return q2;case 35666:return F2;case 35674:return L2;case 35675:return N2;case 35676:return U2;case 5124:case 35670:return B2;case 35667:case 35671:return O2;case 35668:case 35672:return H2;case 35669:case 35673:return z2;case 5125:return k2;case 36294:return G2;case 36295:return V2;case 36296:return W2;case 35678:case 36198:case 36298:case 36306:case 35682:return X2;case 35679:case 36299:case 36307:return Y2;case 35680:case 36300:case 36308:case 36293:return Z2;case 36289:case 36303:case 36311:case 36292:return J2}}var Gh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=P2(t.type)}},Vh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$2(t.type)}},Wh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(e,t[a.id],i)}}},zh=/(\w+)(\])?(\[|\.)?/g;function df(s,e){s.seq.push(e),s.map[e.id]=e}function K2(s,e,t){let i=s.name,n=i.length;for(zh.lastIndex=0;;){let r=zh.exec(i),o=zh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){df(t,c===void 0?new Gh(a,s,e):new Vh(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Wh(a),df(t,u)),t=u}}}var sr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);K2(a,l,this)}let n=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(o):r.push(o);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let o=e[n];o.id in t&&i.push(o)}return i}};function ff(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var Q2=37297,j2=0;function ex(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var pf=new Ye;function tx(s){st._getMatrix(pf,st.workingColorSpace,s);let e=`mat3( ${pf.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(s)){case Nr:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function mf(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ex(s.getShaderSource(e),a)}else return r}function ix(s,e){let t=tx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var nx={[uo]:"Linear",[fo]:"Reinhard",[po]:"Cineon",[Yi]:"ACESFilmic",[us]:"AgX",[Di]:"Neutral",[mo]:"Custom"};function sx(s,e){let t=nx[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xl=new P;function rx(){st.getLuminanceCoefficients(Xl);let s=Xl.x.toFixed(4),e=Xl.y.toFixed(4),t=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ox(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function ax(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lx(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function wo(s){return s!==""}function gf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function xf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(s){return s.replace(cx,hx)}function hx(s,e){let t=it[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Xh(t)}var ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(s){return s.replace(ux,dx)}function dx(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function vf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var fx={[Tn]:"SHADOWMAP_TYPE_PCF",[er]:"SHADOWMAP_TYPE_VSM"};function px(s){return fx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mx={[tr]:"ENVMAP_MODE_REFRACTION"};function gx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":mx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xx={[sl]:"ENVMAP_BLENDING_MULTIPLY",[Id]:"ENVMAP_BLENDING_MIX",[Dd]:"ENVMAP_BLENDING_ADD"};function _x(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":xx[s.combine]||"ENVMAP_BLENDING_NONE"}function vx(s,e,t,i){let n=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=px(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=gx(t),u=_x(t),d=ox(t),f=ax(r),p=n.createProgram(),g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(wo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(wo).join(`
`),m.length>0&&(m+=`
`)):(g=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),m=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==an?"#define TONE_MAPPING":"",t.toneMapping!==an?it.tonemapping_pars_fragment:"",t.toneMapping!==an?sx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,ix("linearToOutputTexel",t.outputColorSpace),rx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wo).join(`
`)),o=Xh(o),o=gf(o,t),o=xf(o,t),a=Xh(a),a=gf(a,t),a=xf(a,t),o=_f(o),a=_f(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=x+g+o,M=x+m+a,y=ff(n,n.VERTEX_SHADER,_),w=ff(n,n.FRAGMENT_SHADER,M);n.attachShader(p,y),n.attachShader(p,w),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function T(R){if(s.debug.checkShaderErrors){let q=n.getProgramInfoLog(p)||"",D=n.getShaderInfoLog(y)||"",U=n.getShaderInfoLog(w)||"",C=q.trim(),B=D.trim(),H=U.trim(),O=!0,te=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,y,w);else{let V=mf(n,y,"vertex"),X=mf(n,w,"fragment");Ve("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+C+`
`+V+`
`+X)}else C!==""?ze("WebGLProgram: Program Info Log:",C):(B===""||H==="")&&(te=!1);te&&(R.diagnostics={runnable:O,programLog:C,vertexShader:{log:B,prefix:g},fragmentShader:{log:H,prefix:m}})}n.deleteShader(y),n.deleteShader(w),v=new sr(n,p),S=lx(n,p)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=n.getProgramParameter(p,Q2)),I},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j2++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=w,this}var yx=0,Yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Zh(e),t.set(e,i)),i}},Zh=class{constructor(e){this.id=yx++,this.code=e,this.usedTimes=0}};function Mx(s){return s===Wn||s===Mo||s===So}function Sx(s,e,t,i,n,r){let o=new Vs,a=new Yh,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,S,I,R,q,D){let U=R.fog,C=q.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||B,H),te=d[v.type],V=i.precision;v.precision!==null&&(V=i.getMaxPrecision(v.precision),V!==v.precision&&ze("WebGLProgram.getParameters:",v.precision,"not supported, using",V,"instead."));let X=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,j=X!==void 0?X.length:0,Re=0;C.morphAttributes.position!==void 0&&(Re=1),C.morphAttributes.normal!==void 0&&(Re=2),C.morphAttributes.color!==void 0&&(Re=3);let Ne,Z,Me,Te;if(te){let be=cn[te];Ne=be.vertexShader,Z=be.fragmentShader}else{Ne=v.vertexShader,Z=v.fragmentShader;let be=a.getVertexShaderStage(v),bt=a.getFragmentShaderStage(v);a.update(v,be,bt),Me=be.id,Te=bt.id}let De=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),Ue=q.isInstancedMesh===!0,It=q.isBatchedMesh===!0,Oe=!!v.map,Ke=!!v.matcap,rt=!!O,ie=rt&&O.isPMREMTexture===!0,de=!!v.aoMap,le=!!v.lightMap,Ae=!!v.bumpMap&&v.wireframe===!1,ye=!!v.normalMap,$e=!!v.displacementMap,Le=!!v.emissiveMap,ot=!!v.metalnessMap,at=!!v.roughnessMap,xt=v.anisotropy>0,N=v.clearcoat>0,Wt=v.diffuseRoughness>0,nt=v.dispersion>0,Rt=v.retroreflectivity>0,ge=v.iridescence>0,zt=v.sheen>0,ke=v.transmission>0,We=xt&&!!v.anisotropyMap,A=N&&!!v.clearcoatMap,b=N&&!!v.clearcoatNormalMap,k=N&&!!v.clearcoatRoughnessMap,re=Wt&&!!v.diffuseRoughnessMap,ee=ge&&!!v.iridescenceMap,ce=ge&&!!v.iridescenceThicknessMap,xe=zt&&!!v.sheenColorMap,J=zt&&!!v.sheenRoughnessMap,$=!!v.specularMap,fe=!!v.specularColorMap,F=!!v.specularIntensityMap,K=ke&&!!v.transmissionMap,Y=ke&&!!v.thicknessMap,pe=!!v.gradientMap,ae=!!v.alphaMap,he=v.alphaTest>0,Be=!!v.alphaHash,et=!!v.extensions,oe=an;v.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(oe=s.toneMapping);let He=ie?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,je={shaderID:te,shaderType:v.type,shaderName:v.name,vertexShader:Ne,fragmentShader:Z,defines:v.defines,customVertexShaderID:Me,customFragmentShaderID:Te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:V,batching:It,batchingColor:It&&q._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&q.instanceColor!==null,instancingMorph:Ue&&q.morphTexture!==null,outputColorSpace:De===null?s.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Oe,matcap:Ke,envMap:rt,envMapMode:rt&&O.mapping,envMapPMREM:ie,envMapMaxLod:ie?He.length-1:null,envMapSize:ie?He[0].width:null,aoMap:de,lightMap:le,bumpMap:Ae,normalMap:ye,displacementMap:$e,emissiveMap:Le,normalMapObjectSpace:ye&&v.normalMapType===Ld,normalMapTangentSpace:ye&&v.normalMapType===bo,packedNormalMap:ye&&v.normalMapType===bo&&Mx(v.normalMap.format),metalnessMap:ot,roughnessMap:at,anisotropy:xt,anisotropyMap:We,clearcoat:N,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:k,diffuseRoughness:Wt,diffuseRoughnessMap:re,dispersion:nt,retroreflection:Rt,iridescence:ge,iridescenceMap:ee,iridescenceThicknessMap:ce,sheen:zt,sheenColorMap:xe,sheenRoughnessMap:J,specularMap:$,specularColorMap:fe,specularIntensityMap:F,transmission:ke,transmissionMap:K,thicknessMap:Y,gradientMap:pe,opaque:v.transparent===!1&&v.blending===Vn&&v.alphaToCoverage===!1,alphaMap:ae,alphaTest:he,alphaHash:Be,combine:v.combine,mapUv:Oe&&f(v.map.channel),aoMapUv:de&&f(v.aoMap.channel),lightMapUv:le&&f(v.lightMap.channel),bumpMapUv:Ae&&f(v.bumpMap.channel),normalMapUv:ye&&f(v.normalMap.channel),displacementMapUv:$e&&f(v.displacementMap.channel),emissiveMapUv:Le&&f(v.emissiveMap.channel),metalnessMapUv:ot&&f(v.metalnessMap.channel),roughnessMapUv:at&&f(v.roughnessMap.channel),anisotropyMapUv:We&&f(v.anisotropyMap.channel),clearcoatMapUv:A&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:J&&f(v.sheenRoughnessMap.channel),specularMapUv:$&&f(v.specularMap.channel),specularColorMapUv:fe&&f(v.specularColorMap.channel),specularIntensityMapUv:F&&f(v.specularIntensityMap.channel),transmissionMapUv:K&&f(v.transmissionMap.channel),thicknessMapUv:Y&&f(v.thicknessMap.channel),alphaMapUv:ae&&f(v.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ye||xt),vertexNormals:!!C.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!C.attributes.uv&&(Oe||ae),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||C.attributes.normal===void 0&&ye===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Re,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(be=>be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,decodeVideoTexture:Oe&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===_t,decodeVideoTextureEmissive:Le&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)===_t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===yt,flipSided:v.side===kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:et&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&v.extensions.multiDraw===!0||It)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function g(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)S.push(I),S.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(m(S,v),x(S,v),S.push(s.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function m(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function x(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function _(v){let S=d[v.type],I;if(S){let R=cn[S];I=Fi.clone(R.uniforms)}else I=v.uniforms;return I}function M(v,S){let I=h.get(S);return I!==void 0?++I.usedTimes:(I=new vx(s,S,v,n),c.push(I),h.set(S,I)),I}function y(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:_,acquireProgram:M,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:T}}function bx(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function Ex(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function yf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Mf(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,g,m,x){let _=s[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:g,renderOrder:d.renderOrder,z:m,group:x},s[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=p,_.materialVariant=o(d),_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=m,_.group=x),e++,_}function l(d,f,p,g,m,x,_){_.reversedDepth===!0&&(m=-m);let M=a(d,f,p,g,m,x);p.transmission>0?i.push(M):p.transparent===!0?n.push(M):t.push(M)}function c(d,f,p,g,m,x){let _=a(d,f,p,g,m,x);p.transmission>0?i.unshift(_):p.transparent===!0?n.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||Ex),i.length>1&&i.sort(f||yf),n.length>1&&n.sort(f||yf)}function u(){for(let d=e,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:u,sort:h}}function wx(){let s=new WeakMap;function e(i,n){let r=s.get(i),o;return r===void 0?(o=new Mf,s.set(i,[o])):n>=r.length?(o=new Mf,r.push(o)):o=r[n],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Tx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Se};break;case"SpotLight":t={position:new P,direction:new P,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function Ax(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Rx=0;function Cx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Px(s){let e=new Tx,t=Ax(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let n=new P,r=new pt,o=new pt;function a(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let f=0,p=0,g=0,m=0,x=0,_=0,M=0,y=0,w=0,T=0,v=0,S=0,I=0,R=0;c.sort(Cx);for(let D=0,U=c.length;D<U;D++){let C=c[D],B=C.color,H=C.intensity,O=C.distance,te=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Wn?te=C.shadow.map.texture:te=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=B.r*H,u+=B.g*H,d+=B.b*H;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],H);R++}else if(C.isSunLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,j=t.get(C);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[p]=j,i.sunShadowMap[p]=te;let Re=X.getViewportCount();for(let Ne=0;Ne<Re;Ne++)i.sunShadowMatrix[g+Ne]=X.getMatrix(Ne),i.sunShadowCascade[g+Ne]=X._cascadeData[Ne];g+=Re,p++}i.sun[f]=V,f++}else if(C.isDirectionalLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,j=t.get(C);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=C.shadow.matrix,w++}i.directional[m]=V,m++}else if(C.isSpotLight){let V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(B).multiplyScalar(H),V.distance=O,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[_]=V;let X=C.shadow;if(C.map&&(i.spotLightMap[S]=C.map,S++,X.updateMatrices(C),C.castShadow&&I++),i.spotLightMatrix[_]=X.matrix,C.castShadow){let j=t.get(C);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=te,v++}_++}else if(C.isRectAreaLight){let V=e.get(C);V.color.copy(B).multiplyScalar(H),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[M]=V,M++}else if(C.isPointLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let X=C.shadow,j=t.get(C);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,j.shadowCameraNear=X.camera.near,j.shadowCameraFar=X.camera.far,i.pointShadow[x]=j,i.pointShadowMap[x]=te,i.pointShadowMatrix[x]=C.shadow.matrix,T++}i.point[x]=V,x++}else if(C.isHemisphereLight){let V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(H),V.groundColor.copy(C.groundColor).multiplyScalar(H),i.hemi[y]=V,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let q=i.hash;(q.sunLength!==f||q.directionalLength!==m||q.pointLength!==x||q.spotLength!==_||q.rectAreaLength!==M||q.hemiLength!==y||q.numSunShadows!==p||q.numDirectionalShadows!==w||q.numPointShadows!==T||q.numSpotShadows!==v||q.numSpotMaps!==S||q.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=_,i.rectArea.length=M,i.point.length=x,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=g,i.sunShadowCascade.length=g,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+S-I,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,q.sunLength=f,q.directionalLength=m,q.pointLength=x,q.spotLength=_,q.rectAreaLength=M,q.hemiLength=y,q.numSunShadows=p,q.numDirectionalShadows=w,q.numPointShadows=T,q.numSpotShadows=v,q.numSpotMaps=S,q.numLightProbes=R,i.version=Rx++)}function l(c,h){let u=0,d=0,f=0,p=0,g=0,m=0,x=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let y=c[_];if(y.isSunLight){let w=i.sun[u];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(x),u++}else if(y.isDirectionalLight){let w=i.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(x),d++}else if(y.isSpotLight){let w=i.spot[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(x),p++}else if(y.isRectAreaLight){let w=i.rectArea[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),o.identity(),r.copy(y.matrixWorld),r.premultiply(x),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),f++}else if(y.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:i}}function Sf(s){let e=new Px(s),t=[],i=[],n=[];function r(u){h.camera=u,t.length=0,i.length=0,n.length=0}function o(u){u.isLightProbeGrid?n.push(u):t.push(u)}function a(u){i.push(u)}function l(){e.setup(t),n.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ix(s){let e=new WeakMap;function t(n,r=0){let o=e.get(n),a;return o===void 0?(a=new Sf(s),e.set(n,[a])):r>=o.length?(a=new Sf(s),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Fx=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Lx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],bf=new pt,Eo=new P,kh=new P;function Nx(s,e,t){let i=new Bn,n=new Q,r=new Q,o=new Pt,a=new Va,l=new Wa,c={},h=t.maxTextureSize,u={[Gn]:kt,[kt]:Gn,[yt]:yt},d=new dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:Dx,fragmentShader:qx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new ht;p.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ne(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tn;let x=this.type;this.render=function(T,v,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===dd&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tn);let I=s.getRenderTarget(),R=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),D=s.state;D.setBlending(An),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let U=x!==this.type;U&&v.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(B=>B.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,B=T.length;C<B;C++){let H=T[C],O=H.shadow;if(O===void 0){ze("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;n.copy(O.mapSize);let te=O.getFrameExtents();n.multiply(te),r.copy(O.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/te.x),n.x=r.x*te.x,O.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/te.y),n.y=r.y*te.y,O.mapSize.y=r.y));let V=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=V,O.map===null||U===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===er){if(H.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Gt(n.x,n.y,{format:Wn,type:$t,minFilter:fi,magFilter:fi,generateMipmaps:!1}),O.map.texture.name=H.name+".shadowMap",O.map.depthTexture=new Mn(n.x,n.y,qi),O.map.depthTexture.name=H.name+".shadowMapDepth",O.map.depthTexture.format=vn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ii,O.map.depthTexture.magFilter=ii}else H.isPointLight?(O.map=new To(n.x),O.map.depthTexture=new Vr(n.x,Ji)):(O.map=new Gt(n.x,n.y),O.map.depthTexture=new Mn(n.x,n.y,Ji)),O.map.depthTexture.name=H.name+".shadowMap",O.map.depthTexture.format=vn,this.type===Tn?(O.map.depthTexture.compareFunction=V?Eh:bh,O.map.depthTexture.minFilter=fi,O.map.depthTexture.magFilter=fi):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ii,O.map.depthTexture.magFilter=ii);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==n.x||O.map.height!==n.y)&&O.map.setSize(n.x,n.y);let X=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();H.isPointLight!==!0&&O.updateMatrices(H,S);let j=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let Re=0;Re<X;Re++){let Ne=O.getCamera(Re);if(H.isPointLight){let Z=O.camera,Me=O.matrix,Te=H.distance||Z.far;Te!==Z.far&&(Z.far=Te,Z.updateProjectionMatrix()),Eo.setFromMatrixPosition(H.matrixWorld),Z.position.copy(Eo),kh.copy(Z.position),kh.add(Fx[Re]),Z.up.copy(Lx[Re]),Z.lookAt(kh),Z.updateMatrixWorld(),Me.makeTranslation(-Eo.x,-Eo.y,-Eo.z),bf.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),O._frustum.setFromProjectionMatrix(bf,Z.coordinateSystem,Z.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,Re),s.clear();else{Re===0&&(s.setRenderTarget(O.map),s.clear());let Z=O.getViewport(Re);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),D.viewport(o)}i=O.getFrustum(Re),y(v,S,Ne,H,j,this.type)}O.isPointLightShadow!==!0&&this.type===er&&_(O,S),O.needsUpdate=!1}x=this.type,m.needsUpdate=!1,s.setRenderTarget(I,R,q)};function _(T,v){let S=e.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Gt(n.x,n.y,{format:Wn,type:$t}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(v,null,S,d,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(v,null,S,f,g,null)}function M(T,v,S,I){let R=null,q=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(q!==void 0)R=q;else if(R=S.isPointLight===!0?l:a,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let D=R.uuid,U=v.uuid,C=c[D];C===void 0&&(C={},c[D]=C);let B=C[U];B===void 0&&(B=R.clone(),C[U]=B,v.addEventListener("dispose",w)),R=B}if(R.visible=v.visible,R.wireframe=v.wireframe,I===er?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:u[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=s.properties.get(R);D.light=S}return R}function y(T,v,S,I,R,q){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&q===er)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let C=e.update(T),B=T.material;if(Array.isArray(B)){let H=C.groups;for(let O=0,te=H.length;O<te;O++){let V=H[O],X=B[V.materialIndex];if(X&&X.visible){let j=M(T,X,I,q);T.onBeforeShadow(s,T,v,S,C,j,V),s.renderBufferDirect(S,null,C,j,T,V),T.onAfterShadow(s,T,v,S,C,j,V)}}}else if(B.visible){let H=M(T,B,I,q);T.onBeforeShadow(s,T,v,S,C,H,null),s.renderBufferDirect(S,null,C,H,T,null),T.onAfterShadow(s,T,v,S,C,H,null)}}let U=T.children;for(let C=0,B=U.length;C<B;C++)y(U[C],v,S,I,R,q)}function w(T){T.target.removeEventListener("dispose",w);for(let S in c){let I=c[S],R=T.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function Ux(s,e){function t(){let F=!1,K=new Pt,Y=null,pe=new Pt(0,0,0,0);return{setMask:function(ae){Y!==ae&&!F&&(s.colorMask(ae,ae,ae,ae),Y=ae)},setLocked:function(ae){F=ae},setClear:function(ae,he,Be,et,oe){oe===!0&&(ae*=et,he*=et,Be*=et),K.set(ae,he,Be,et),pe.equals(K)===!1&&(s.clearColor(ae,he,Be,et),pe.copy(K))},reset:function(){F=!1,Y=null,pe.set(-1,0,0,0)}}}function i(){let F=!1,K=!1,Y=null,pe=null,ae=null;return{setReversed:function(he){if(K!==he){let Be=e.get("EXT_clip_control");he?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),K=he;let et=ae;ae=null,this.setClear(et)}},getReversed:function(){return K},setTest:function(he){he?ve(s.DEPTH_TEST):Ue(s.DEPTH_TEST)},setMask:function(he){Y!==he&&!F&&(s.depthMask(he),Y=he)},setFunc:function(he){if(K&&(he=Xd[he]),pe!==he){switch(he){case Sa:s.depthFunc(s.NEVER);break;case ba:s.depthFunc(s.ALWAYS);break;case Ea:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case wa:s.depthFunc(s.EQUAL);break;case Ta:s.depthFunc(s.GEQUAL);break;case Aa:s.depthFunc(s.GREATER);break;case Ra:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=he}},setLocked:function(he){F=he},setClear:function(he){ae!==he&&(ae=he,K&&(he=1-he),s.clearDepth(he))},reset:function(){F=!1,Y=null,pe=null,ae=null,K=!1}}}function n(){let F=!1,K=null,Y=null,pe=null,ae=null,he=null,Be=null,et=null,oe=null;return{setTest:function(He){F||(He?ve(s.STENCIL_TEST):Ue(s.STENCIL_TEST))},setMask:function(He){K!==He&&!F&&(s.stencilMask(He),K=He)},setFunc:function(He,je,be){(Y!==He||pe!==je||ae!==be)&&(s.stencilFunc(He,je,be),Y=He,pe=je,ae=be)},setOp:function(He,je,be){(he!==He||Be!==je||et!==be)&&(s.stencilOp(He,je,be),he=He,Be=je,et=be)},setLocked:function(He){F=He},setClear:function(He){oe!==He&&(s.clearStencil(He),oe=He)},reset:function(){F=!1,K=null,Y=null,pe=null,ae=null,he=null,Be=null,et=null,oe=null}}}let r=new t,o=new i,a=new n,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],g=null,m=!1,x=null,_=null,M=null,y=null,w=null,T=null,v=null,S=new Se(0,0,0),I=0,R=!1,q=null,D=null,U=null,C=null,B=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,te=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=te>=2);let X=null,j={},Re=s.getParameter(s.SCISSOR_BOX),Ne=s.getParameter(s.VIEWPORT),Z=new Pt().fromArray(Re),Me=new Pt().fromArray(Ne);function Te(F,K,Y,pe){let ae=new Uint8Array(4),he=s.createTexture();s.bindTexture(F,he),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<Y;Be++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(K,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,ae):s.texImage2D(K+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ae);return he}let De={};De[s.TEXTURE_2D]=Te(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=Te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[s.TEXTURE_2D_ARRAY]=Te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=Te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(s.DEPTH_TEST),o.setFunc(Bs),Ae(!1),ye(uh),ve(s.CULL_FACE),de(An);function ve(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Ue(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function It(F,K){return d[F]!==K?(s.bindFramebuffer(F,K),d[F]=K,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=K),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=K),!0):!1}function Oe(F,K){let Y=p,pe=!1;if(F){Y=f.get(K),Y===void 0&&(Y=[],f.set(K,Y));let ae=F.textures;if(Y.length!==ae.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let he=0,Be=ae.length;he<Be;he++)Y[he]=s.COLOR_ATTACHMENT0+he;Y.length=ae.length,pe=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,pe=!0);pe&&s.drawBuffers(Y)}function Ke(F){return g!==F?(s.useProgram(F),g=F,!0):!1}let rt={[hs]:s.FUNC_ADD,[pd]:s.FUNC_SUBTRACT,[md]:s.FUNC_REVERSE_SUBTRACT};rt[gd]=s.MIN,rt[xd]=s.MAX;let ie={[_d]:s.ZERO,[vd]:s.ONE,[yd]:s.SRC_COLOR,[ph]:s.SRC_ALPHA,[Td]:s.SRC_ALPHA_SATURATE,[Ed]:s.DST_COLOR,[Sd]:s.DST_ALPHA,[Md]:s.ONE_MINUS_SRC_COLOR,[mh]:s.ONE_MINUS_SRC_ALPHA,[wd]:s.ONE_MINUS_DST_COLOR,[bd]:s.ONE_MINUS_DST_ALPHA,[Ad]:s.CONSTANT_COLOR,[Rd]:s.ONE_MINUS_CONSTANT_COLOR,[Cd]:s.CONSTANT_ALPHA,[Pd]:s.ONE_MINUS_CONSTANT_ALPHA};function de(F,K,Y,pe,ae,he,Be,et,oe,He){if(F===An){m===!0&&(Ue(s.BLEND),m=!1);return}if(m===!1&&(ve(s.BLEND),m=!0),F!==fd){if(F!==x||He!==R){if((_!==hs||w!==hs)&&(s.blendEquation(s.FUNC_ADD),_=hs,w=hs),He)switch(F){case Vn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vt:s.blendFunc(s.ONE,s.ONE);break;case dh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ve("WebGLState: Invalid blending: ",F);break}else switch(F){case Vn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vt:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dh:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fh:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",F);break}M=null,y=null,T=null,v=null,S.set(0,0,0),I=0,x=F,R=He}return}ae=ae||K,he=he||Y,Be=Be||pe,(K!==_||ae!==w)&&(s.blendEquationSeparate(rt[K],rt[ae]),_=K,w=ae),(Y!==M||pe!==y||he!==T||Be!==v)&&(s.blendFuncSeparate(ie[Y],ie[pe],ie[he],ie[Be]),M=Y,y=pe,T=he,v=Be),(et.equals(S)===!1||oe!==I)&&(s.blendColor(et.r,et.g,et.b,oe),S.copy(et),I=oe),x=F,R=!1}function le(F,K){F.side===yt?Ue(s.CULL_FACE):ve(s.CULL_FACE);let Y=F.side===kt;K&&(Y=!Y),Ae(Y),F.blending===Vn&&F.transparent===!1?de(An):de(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let pe=F.stencilWrite;a.setTest(pe),pe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Le(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(F){q!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),q=F)}function ye(F){F!==hd?(ve(s.CULL_FACE),F!==D&&(F===uh?s.cullFace(s.BACK):F===ud?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ue(s.CULL_FACE),D=F}function $e(F){F!==U&&(O&&s.lineWidth(F),U=F)}function Le(F,K,Y){F?(ve(s.POLYGON_OFFSET_FILL),(C!==K||B!==Y)&&(C=K,B=Y,o.getReversed()&&(K=-K,Y=-Y),s.polygonOffset(K,Y))):Ue(s.POLYGON_OFFSET_FILL)}function ot(F){F?ve(s.SCISSOR_TEST):Ue(s.SCISSOR_TEST)}function at(F){F===void 0&&(F=s.TEXTURE0+H-1),X!==F&&(s.activeTexture(F),X=F)}function xt(F,K,Y){Y===void 0&&(X===null?Y=s.TEXTURE0+H-1:Y=X);let pe=j[Y];pe===void 0&&(pe={type:void 0,texture:void 0},j[Y]=pe),(pe.type!==F||pe.texture!==K)&&(X!==Y&&(s.activeTexture(Y),X=Y),s.bindTexture(F,K||De[F]),pe.type=F,pe.texture=K)}function N(){let F=j[X];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Wt(){try{s.compressedTexImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function nt(){try{s.compressedTexImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function Rt(){try{s.texSubImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function ge(){try{s.texSubImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function zt(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function ke(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function We(){try{s.texStorage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function A(){try{s.texStorage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function b(){try{s.texImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function k(){try{s.texImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function re(F){return u[F]!==void 0?u[F]:s.getParameter(F)}function ee(F,K){u[F]!==K&&(s.pixelStorei(F,K),u[F]=K)}function ce(F){Z.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Z.copy(F))}function xe(F){Me.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Me.copy(F))}function J(F,K){let Y=c.get(K);Y===void 0&&(Y=new WeakMap,c.set(K,Y));let pe=Y.get(F);pe===void 0&&(pe=s.getUniformBlockIndex(K,F.name),s.uniformBlockBinding(K,pe,pe),Y.set(F,pe))}function $(F,K,Y){let ae=c.get(K).get(F);l[ae]!==Y&&(s.bindBufferBase(s.UNIFORM_BUFFER,ae,Y),l[ae]=Y)}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},X=null,j={},d={},l={},f=new WeakMap,p=[],g=null,m=!1,x=null,_=null,M=null,y=null,w=null,T=null,v=null,S=new Se(0,0,0),I=0,R=!1,q=null,D=null,U=null,C=null,B=null,Z.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ve,disable:Ue,bindFramebuffer:It,drawBuffers:Oe,useProgram:Ke,setBlending:de,setMaterial:le,setFlipSided:Ae,setCullFace:ye,setLineWidth:$e,setPolygonOffset:Le,setScissorTest:ot,activeTexture:at,bindTexture:xt,unbindTexture:N,compressedTexImage2D:Wt,compressedTexImage3D:nt,texImage2D:b,texImage3D:k,pixelStorei:ee,getParameter:re,updateUBOMapping:J,uniformBlockBinding:$,texStorage2D:We,texStorage3D:A,texSubImage2D:Rt,texSubImage3D:ge,compressedTexSubImage2D:zt,compressedTexSubImage3D:ke,scissor:ce,viewport:xe,reset:fe}}function Bx(s,e,t,i,n,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,g=new FinalizationRegistry(A=>p.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,b){return m?new OffscreenCanvas(A,b):Ur("canvas")}function _(A,b,k){let re=1,ee=We(A);if((ee.width>k||ee.height>k)&&(re=k/Math.max(ee.width,ee.height)),re<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ce=Math.floor(re*ee.width),xe=Math.floor(re*ee.height);d===void 0&&(d=x(ce,xe));let J=b?x(ce,xe):d;return J.width=ce,J.height=xe,J.getContext("2d").drawImage(A,0,0,ce,xe),ze("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ce+"x"+xe+")."),J}else return"data"in A&&ze("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function M(A){return A.generateMipmaps}function y(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(A,b,k,re,ee,ce=!1){if(A!==null){if(s[A]!==void 0)return s[A];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let xe;re&&(xe=e.get("EXT_texture_norm16"),xe||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=b;if(b===s.RED&&(k===s.FLOAT&&(J=s.R32F),k===s.HALF_FLOAT&&(J=s.R16F),k===s.UNSIGNED_BYTE&&(J=s.R8),k===s.UNSIGNED_SHORT&&xe&&(J=xe.R16_EXT),k===s.SHORT&&xe&&(J=xe.R16_SNORM_EXT)),b===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.R8UI),k===s.UNSIGNED_SHORT&&(J=s.R16UI),k===s.UNSIGNED_INT&&(J=s.R32UI),k===s.BYTE&&(J=s.R8I),k===s.SHORT&&(J=s.R16I),k===s.INT&&(J=s.R32I)),b===s.RG&&(k===s.FLOAT&&(J=s.RG32F),k===s.HALF_FLOAT&&(J=s.RG16F),k===s.UNSIGNED_BYTE&&(J=s.RG8),k===s.UNSIGNED_SHORT&&xe&&(J=xe.RG16_EXT),k===s.SHORT&&xe&&(J=xe.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RG8UI),k===s.UNSIGNED_SHORT&&(J=s.RG16UI),k===s.UNSIGNED_INT&&(J=s.RG32UI),k===s.BYTE&&(J=s.RG8I),k===s.SHORT&&(J=s.RG16I),k===s.INT&&(J=s.RG32I)),b===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RGB8UI),k===s.UNSIGNED_SHORT&&(J=s.RGB16UI),k===s.UNSIGNED_INT&&(J=s.RGB32UI),k===s.BYTE&&(J=s.RGB8I),k===s.SHORT&&(J=s.RGB16I),k===s.INT&&(J=s.RGB32I)),b===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),k===s.UNSIGNED_INT&&(J=s.RGBA32UI),k===s.BYTE&&(J=s.RGBA8I),k===s.SHORT&&(J=s.RGBA16I),k===s.INT&&(J=s.RGBA32I)),b===s.RGB&&(k===s.UNSIGNED_SHORT&&xe&&(J=xe.RGB16_EXT),k===s.SHORT&&xe&&(J=xe.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),b===s.RGBA){let $=ce?Nr:st.getTransfer(ee);k===s.FLOAT&&(J=s.RGBA32F),k===s.HALF_FLOAT&&(J=s.RGBA16F),k===s.UNSIGNED_BYTE&&(J=$===_t?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&xe&&(J=xe.RGBA16_EXT),k===s.SHORT&&xe&&(J=xe.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(A,b){let k;return A?b===null||b===Ji||b===fs?k=s.DEPTH24_STENCIL8:b===qi?k=s.DEPTH32F_STENCIL8:b===ir&&(k=s.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ji||b===fs?k=s.DEPTH_COMPONENT24:b===qi?k=s.DEPTH_COMPONENT32F:b===ir&&(k=s.DEPTH_COMPONENT16),k}function S(A,b){return M(A)===!0||A.isFramebufferTexture&&A.minFilter!==ii&&A.minFilter!==fi?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function I(A){let b=new WeakRef(A);i.get(A).__ref=b,p.add(b),g.register(A,b,b)}function R(A){let b=i.get(A).__ref;b!==void 0&&(p.delete(b),g.unregister(b))}function q(A){U(A.target)}function D(A){C(A.target)}function U(A){A.removeEventListener("dispose",q),R(A),H(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function C(A){A.removeEventListener("dispose",D),R(A),te(A)}function B(){for(let A of p){let b=A.deref();b!==void 0&&(b.isRenderTarget===!0?C(b):U(b))}p.clear(),u.clear()}function H(A){let b=i.get(A);if(b.__webglInit===void 0)return;let k=A.source,re=f.get(k);if(re){let ee=re[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&O(A),Object.keys(re).length===0&&f.delete(k)}i.remove(A)}function O(A){let b=i.get(A);s.deleteTexture(b.__webglTexture);let k=A.source,re=f.get(k);delete re[b.__cacheKey],o.memory.textures--}function te(A){let b=i.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();let k=A.depthTexture;if(k&&k.renderTarget===A&&U(k),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let ce=0;ce<b.__webglFramebuffer[ee].length;ce++)s.deleteFramebuffer(b.__webglFramebuffer[ee][ce]);else s.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)s.deleteFramebuffer(b.__webglFramebuffer[ee]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let re=A.textures;for(let ee=0,ce=re.length;ee<ce;ee++){let xe=i.get(re[ee]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(re[ee])}i.remove(A)}let V=0;function X(){V=0}function j(){return V}function Re(A){V=A}function Ne(){let A=V;return A>=n.maxTextures&&ze("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),V+=1,A}function Z(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function Me(A,b){let k=i.get(A);if(A.isVideoTexture&&zt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let re=A.image;if(re===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{le(k,A,b);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+b)}function Te(A,b){let k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){le(k,A,b);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+b)}function De(A,b){let k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){le(k,A,b);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+b)}function ve(A,b){let k=i.get(A);if(A.version>0&&k.__version!==A.version){Ae(k,A,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+b)}let Ue={[Os]:s.REPEAT,[en]:s.CLAMP_TO_EDGE,[Ca]:s.MIRRORED_REPEAT},It={[ii]:s.NEAREST,[qd]:s.NEAREST_MIPMAP_NEAREST,[go]:s.NEAREST_MIPMAP_LINEAR,[fi]:s.LINEAR,[al]:s.LINEAR_MIPMAP_NEAREST,[Zi]:s.LINEAR_MIPMAP_LINEAR},Oe={[Ud]:s.NEVER,[wh]:s.ALWAYS,[Bd]:s.LESS,[bh]:s.LEQUAL,[Od]:s.EQUAL,[Eh]:s.GEQUAL,[Hd]:s.GREATER,[zd]:s.NOTEQUAL};function Ke(A,b){if(b.type===qi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===fi||b.magFilter===al||b.magFilter===go||b.magFilter===Zi||b.minFilter===fi||b.minFilter===al||b.minFilter===go||b.minFilter===Zi)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Ue[b.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Ue[b.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Ue[b.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,It[b.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,It[b.minFilter]),b.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Oe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ii||b.minFilter!==go&&b.minFilter!==Zi||b.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function rt(A,b){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",q),I(b));let re=b.source,ee=f.get(re);ee===void 0&&(ee={},f.set(re,ee));let ce=Z(b);if(ce!==A.__cacheKey){ee[ce]===void 0&&(ee[ce]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[ce].usedTimes++;let xe=ee[A.__cacheKey];xe!==void 0&&(ee[A.__cacheKey].usedTimes--,xe.usedTimes===0&&O(b)),A.__cacheKey=ce,A.__webglTexture=ee[ce].texture}return k}function ie(A,b,k){return Math.floor(Math.floor(A/k)/b)}function de(A,b,k,re){let ce=A.updateRanges;if(ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,k,re,b.data);else{ce.sort((F,K)=>F.start-K.start);let xe=0;for(let F=1;F<ce.length;F++){let K=ce[xe],Y=ce[F],pe=K.start+K.count,ae=ie(Y.start,b.width,4),he=ie(K.start,b.width,4);Y.start<=pe+1&&ae===he&&ie(Y.start+Y.count-1,b.width,4)===ae?K.count=Math.max(K.count,Y.start+Y.count-K.start):(++xe,ce[xe]=Y)}ce.length=xe+1;let J=t.getParameter(s.UNPACK_ROW_LENGTH),$=t.getParameter(s.UNPACK_SKIP_PIXELS),fe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let F=0,K=ce.length;F<K;F++){let Y=ce[F],pe=Math.floor(Y.start/4),ae=Math.ceil(Y.count/4),he=pe%b.width,Be=Math.floor(pe/b.width),et=ae,oe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,he),t.pixelStorei(s.UNPACK_SKIP_ROWS,Be),t.texSubImage2D(s.TEXTURE_2D,0,he,Be,et,oe,k,re,b.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,J),t.pixelStorei(s.UNPACK_SKIP_PIXELS,$),t.pixelStorei(s.UNPACK_SKIP_ROWS,fe)}}function le(A,b,k){let re=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(re=s.TEXTURE_3D);let ee=rt(A,b),ce=b.source;t.bindTexture(re,A.__webglTexture,s.TEXTURE0+k);let xe=i.get(ce);if(ce.version!==xe.__version||ee===!0){if(t.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let oe=st.getPrimaries(st.workingColorSpace),He=b.colorSpace===Cn?null:st.getPrimaries(b.colorSpace),je=b.colorSpace===Cn||oe===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let $=_(b.image,!1,n.maxTextureSize);$=ke(b,$);let fe=r.convert(b.format,b.colorSpace),F=r.convert(b.type),K=T(b.internalFormat,fe,F,b.normalized,b.colorSpace,b.isVideoTexture);Ke(re,b);let Y,pe=b.mipmaps,ae=b.isVideoTexture!==!0,he=xe.__version===void 0||ee===!0,Be=ce.dataReady,et=S(b,$);if(b.isDepthTexture)K=v(b.format===Rn,b.type),he&&(ae?t.texStorage2D(s.TEXTURE_2D,1,K,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,K,$.width,$.height,0,fe,F,null));else if(b.isDataTexture)if(pe.length>0){ae&&he&&t.texStorage2D(s.TEXTURE_2D,et,K,pe[0].width,pe[0].height);for(let oe=0,He=pe.length;oe<He;oe++)Y=pe[oe],ae?Be&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Y.width,Y.height,fe,F,Y.data):t.texImage2D(s.TEXTURE_2D,oe,K,Y.width,Y.height,0,fe,F,Y.data);b.generateMipmaps=!1}else ae?(he&&t.texStorage2D(s.TEXTURE_2D,et,K,$.width,$.height),Be&&de(b,$,fe,F)):t.texImage2D(s.TEXTURE_2D,0,K,$.width,$.height,0,fe,F,$.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ae&&he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,et,K,pe[0].width,pe[0].height,$.depth);for(let oe=0,He=pe.length;oe<He;oe++)if(Y=pe[oe],b.format!==$i)if(fe!==null)if(ae){if(Be)if(b.layerUpdates.size>0){let je=Lh(Y.width,Y.height,b.format,b.type);for(let be of b.layerUpdates){let bt=Y.data.subarray(be*je/Y.data.BYTES_PER_ELEMENT,(be+1)*je/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,be,Y.width,Y.height,1,fe,bt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Y.width,Y.height,$.depth,fe,Y.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,K,Y.width,Y.height,$.depth,0,Y.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Be&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Y.width,Y.height,$.depth,fe,F,Y.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,K,Y.width,Y.height,$.depth,0,fe,F,Y.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ae&&he&&t.texStorage2D(s.TEXTURE_2D,et,K,pe[0].width,pe[0].height);for(let oe=0,He=pe.length;oe<He;oe++)Y=pe[oe],b.format!==$i?fe!==null?ae?Be&&t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,Y.width,Y.height,fe,Y.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,K,Y.width,Y.height,0,Y.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Be&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Y.width,Y.height,fe,F,Y.data):t.texImage2D(s.TEXTURE_2D,oe,K,Y.width,Y.height,0,fe,F,Y.data)}else if(b.isDataArrayTexture)if(ae){if(he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,et,K,$.width,$.height,$.depth),Be)if(b.layerUpdates.size>0){let oe=Lh($.width,$.height,b.format,b.type);for(let He of b.layerUpdates){let je=$.data.subarray(He*oe/$.data.BYTES_PER_ELEMENT,(He+1)*oe/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,He,$.width,$.height,1,fe,F,je)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,fe,F,$.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,K,$.width,$.height,$.depth,0,fe,F,$.data);else if(b.isData3DTexture)ae?(he&&t.texStorage3D(s.TEXTURE_3D,et,K,$.width,$.height,$.depth),Be&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,fe,F,$.data)):t.texImage3D(s.TEXTURE_3D,0,K,$.width,$.height,$.depth,0,fe,F,$.data);else if(b.isFramebufferTexture){if(he)if(ae)t.texStorage2D(s.TEXTURE_2D,et,K,$.width,$.height);else{let oe=$.width,He=$.height;for(let je=0;je<et;je++)t.texImage2D(s.TEXTURE_2D,je,K,oe,He,0,fe,F,null),oe>>=1,He>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let oe=s.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),$.parentNode!==oe){oe.appendChild($),u.add(b),oe.onpaint=He=>{let je=He.changedElements;for(let be of u)je.includes(be.image)&&(be.needsUpdate=!0)},oe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,$);else{let je=s.RGBA,be=s.RGBA,bt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,je,be,bt,$)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(pe.length>0){if(ae&&he){let oe=We(pe[0]);t.texStorage2D(s.TEXTURE_2D,et,K,oe.width,oe.height)}for(let oe=0,He=pe.length;oe<He;oe++)Y=pe[oe],ae?Be&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,fe,F,Y):t.texImage2D(s.TEXTURE_2D,oe,K,fe,F,Y);b.generateMipmaps=!1}else if(ae){if(he){let oe=We($);t.texStorage2D(s.TEXTURE_2D,et,K,oe.width,oe.height)}Be&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,F,$)}else t.texImage2D(s.TEXTURE_2D,0,K,fe,F,$);M(b)&&b.mipmapsAutoUpdate===!0&&y(re),xe.__version=ce.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Ae(A,b,k){if(b.image.length!==6)return;let re=rt(A,b),ee=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+k);let ce=i.get(ee);if(ee.version!==ce.__version||re===!0){t.activeTexture(s.TEXTURE0+k);let xe=st.getPrimaries(st.workingColorSpace),J=b.colorSpace===Cn?null:st.getPrimaries(b.colorSpace),$=b.colorSpace===Cn||xe===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let fe=b.isCompressedTexture||b.image[0].isCompressedTexture,F=b.image[0]&&b.image[0].isDataTexture,K=[];for(let be=0;be<6;be++)!fe&&!F?K[be]=_(b.image[be],!0,n.maxCubemapSize):K[be]=F?b.image[be].image:b.image[be],K[be]=ke(b,K[be]);let Y=K[0],pe=r.convert(b.format,b.colorSpace),ae=r.convert(b.type),he=T(b.internalFormat,pe,ae,b.normalized,b.colorSpace),Be=b.isVideoTexture!==!0,et=ce.__version===void 0||re===!0,oe=ee.dataReady,He=S(b,Y);Ke(s.TEXTURE_CUBE_MAP,b);let je;if(b.isDepthTexture){if(he=v(b.format===Rn,b.type),et)if(Be)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,he,Y.width,Y.height);else for(let be=0;be<6;be++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,he,Y.width,Y.height,0,pe,ae,null)}else if(fe){Be&&et&&t.texStorage2D(s.TEXTURE_CUBE_MAP,He,he,Y.width,Y.height);for(let be=0;be<6;be++){je=K[be].mipmaps;for(let bt=0;bt<je.length;bt++){let jt=je[bt];b.format!==$i?pe!==null?Be?oe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,bt,0,0,jt.width,jt.height,pe,jt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,bt,he,jt.width,jt.height,0,jt.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,bt,0,0,jt.width,jt.height,pe,ae,jt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,bt,he,jt.width,jt.height,0,pe,ae,jt.data)}}}else{if(je=b.mipmaps,Be&&et){je.length>0&&He++;let be=We(K[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,He,he,be.width,be.height)}for(let be=0;be<6;be++)if(F){Be?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,K[be].width,K[be].height,pe,ae,K[be].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,he,K[be].width,K[be].height,0,pe,ae,K[be].data);for(let bt=0;bt<je.length;bt++){let In=je[bt].image[be].image;Be?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,bt+1,0,0,In.width,In.height,pe,ae,In.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,bt+1,he,In.width,In.height,0,pe,ae,In.data)}}else{Be?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,pe,ae,K[be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,he,pe,ae,K[be]);for(let bt=0;bt<je.length;bt++){let jt=je[bt];Be?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,bt+1,0,0,pe,ae,jt.image[be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,bt+1,he,pe,ae,jt.image[be])}}}M(b)&&b.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),ce.__version=ee.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ye(A,b,k,re,ee,ce){let xe=r.convert(k.format,k.colorSpace),J=r.convert(k.type),$=T(k.internalFormat,xe,J,k.normalized,k.colorSpace),fe=i.get(b),F=i.get(k);if(F.__renderTarget=b,!fe.__hasExternalTextures){let K=Math.max(1,b.width>>ce),Y=Math.max(1,b.height>>ce);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,ce,$,K,Y,b.depth,0,xe,J,null):t.texImage2D(ee,ce,$,K,Y,0,xe,J,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),ge(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,ee,F.__webglTexture,0,Rt(b)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,ee,F.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(A,b,k){if(s.bindRenderbuffer(s.RENDERBUFFER,A),b.depthBuffer){let re=b.depthTexture,ee=re&&re.isDepthTexture?re.type:null,ce=v(b.stencilBuffer,ee),xe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ge(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt(b),ce,b.width,b.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt(b),ce,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ce,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,A)}else{let re=b.textures;for(let ee=0;ee<re.length;ee++){let ce=re[ee],xe=r.convert(ce.format,ce.colorSpace),J=r.convert(ce.type),$=T(ce.internalFormat,xe,J,ce.normalized,ce.colorSpace);ge(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt(b),$,b.width,b.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt(b),$,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,$,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(A,b,k){let re=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=i.get(b.depthTexture);ee.__renderTarget=b;let ce=re?b.depthTexture.image[0]:b.depthTexture.image;(!ee.__webglTexture||ce.width!==b.width||ce.height!==b.height)&&(ce.width=b.width,ce.height=b.height,b.depthTexture.needsUpdate=!0),re?ve(b.depthTexture,0):Me(b.depthTexture,0);let xe=ee.__webglTexture,J=Rt(b),$=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,fe=b.depthTexture.format===Rn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===vn)ge(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,$,xe,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,fe,$,xe,0);else if(b.depthTexture.format===Rn)ge(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,$,xe,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,fe,$,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(A){let b=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let re=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),re){let ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,re.removeEventListener("dispose",ee)};re.addEventListener("dispose",ee),b.__depthDisposeCallback=ee}b.__boundDepthTexture=re}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(k)for(let re=0;re<6;re++)Le(b.__webglFramebuffer[re],A,re);else A.texture.mipmaps.length>0?Le(b.__webglFramebuffer[0],A,0):Le(b.__webglFramebuffer,A,0);else if(k){b.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[re]),b.__webglDepthbuffer[re]===void 0)b.__webglDepthbuffer[re]=s.createRenderbuffer(),$e(b.__webglDepthbuffer[re],A,!1);else{let ee=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,ce)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),$e(b.__webglDepthbuffer,A,!1);else{let ee=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,ce)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function at(A,b,k){let re=i.get(A);b!==void 0&&ye(re.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&ot(A)}function xt(A){let b=A.texture,k=i.get(A),re=i.get(b);A.addEventListener("dispose",D),I(A);let ee=A.textures,ce=A.isWebGLCubeRenderTarget===!0,xe=ee.length>1;if(xe||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=b.version,o.memory.textures++),ce){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(b.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let $=0;$<b.mipmaps.length;$++)k.__webglFramebuffer[J][$]=s.createFramebuffer()}else k.__webglFramebuffer[J]=s.createFramebuffer()}else{if(b.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<b.mipmaps.length;J++)k.__webglFramebuffer[J]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(xe)for(let J=0,$=ee.length;J<$;J++){let fe=i.get(ee[J]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&ge(A)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<ee.length;J++){let $=ee[J];k.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[J]);let fe=r.convert($.format,$.colorSpace),F=r.convert($.type),K=T($.internalFormat,fe,F,$.normalized,$.colorSpace,A.isXRRenderTarget===!0),Y=Rt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Y,K,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,k.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),$e(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Ke(s.TEXTURE_CUBE_MAP,b);for(let J=0;J<6;J++)if(b.mipmaps.length>0)for(let $=0;$<b.mipmaps.length;$++)ye(k.__webglFramebuffer[J][$],A,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else ye(k.__webglFramebuffer[J],A,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);M(b)?y(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let J=0,$=ee.length;J<$;J++){let fe=ee[J],F=i.get(fe),K=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(K,F.__webglTexture),Ke(K,fe),ye(k.__webglFramebuffer,A,fe,s.COLOR_ATTACHMENT0+J,K,0),M(fe)&&y(K)}t.unbindTexture()}else{let J=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,re.__webglTexture),Ke(J,b),b.mipmaps.length>0)for(let $=0;$<b.mipmaps.length;$++)ye(k.__webglFramebuffer[$],A,b,s.COLOR_ATTACHMENT0,J,$);else ye(k.__webglFramebuffer,A,b,s.COLOR_ATTACHMENT0,J,0);M(b)?y(J):b.mipmaps.length>0&&s.texParameteri(J,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&ot(A)}function N(A){let b=A.textures;for(let k=0,re=b.length;k<re;k++){let ee=b[k];if(M(ee)&&ee.mipmapsAutoUpdate===!0){let ce=w(A),xe=i.get(ee).__webglTexture;t.bindTexture(ce,xe),y(ce),t.unbindTexture()}}}let Wt=[];function nt(A){if(A.samples>0){if(ge(A)===!1){let b=A.textures,k=A.width,re=A.height,ee=s.COLOR_BUFFER_BIT,ce=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=i.get(A),J=b.length>1;if(J)for(let fe=0;fe<b.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let fe=0;fe<b.length;fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);let F=i.get(b[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,F,0)}s.blitFramebuffer(0,0,k,re,0,0,k,re,ee,s.NEAREST),l===!0&&(Wt.length=0,Wt.push(s.COLOR_ATTACHMENT0+fe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Wt.push(ce),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Wt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let fe=0;fe<b.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);let F=i.get(b[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,F,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let b=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Rt(A){return Math.min(n.maxSamples,A.samples)}function ge(A){let b=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function zt(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function ke(A,b){let k=A.colorSpace,re=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Lr&&k!==Cn&&(st.getTransfer(k)===_t?(re!==$i||ee!==gi)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",k)),b}function We(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ne,this.resetTextureUnits=X,this.getTextureUnits=j,this.setTextureUnits=Re,this.setTexture2D=Me,this.setTexture2DArray=Te,this.setTexture3D=De,this.setTextureCube=ve,this.rebindTextures=at,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ge,this.dispose=B}function Ox(s,e){function t(i,n=Cn){let r,o=st.getTransfer(n);if(i===gi)return s.UNSIGNED_BYTE;if(i===cl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===hl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===vh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===yh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===xh)return s.BYTE;if(i===_h)return s.SHORT;if(i===ir)return s.UNSIGNED_SHORT;if(i===ll)return s.INT;if(i===Ji)return s.UNSIGNED_INT;if(i===qi)return s.FLOAT;if(i===$t)return s.HALF_FLOAT;if(i===Mh)return s.ALPHA;if(i===Sh)return s.RGB;if(i===$i)return s.RGBA;if(i===vn)return s.DEPTH_COMPONENT;if(i===Rn)return s.DEPTH_STENCIL;if(i===ul)return s.RED;if(i===dl)return s.RED_INTEGER;if(i===Wn)return s.RG;if(i===fl)return s.RG_INTEGER;if(i===pl)return s.RGBA_INTEGER;if(i===xo||i===_o||i===vo||i===yo)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ml||i===gl||i===xl||i===_l)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vl||i===yl||i===Ml||i===Sl||i===bl||i===Mo||i===El)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===vl||i===yl)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ml)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sl)return r.COMPRESSED_R11_EAC;if(i===bl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Mo)return r.COMPRESSED_RG11_EAC;if(i===El)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===wl||i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===Dl||i===ql||i===Fl||i===Ll||i===Nl||i===Ul||i===Bl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===wl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Al)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Il)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ql)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ll)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ul)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ol||i===Hl||i===zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ol)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kl||i===Gl||i===So||i===Vl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===kl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var Hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Wr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new dt({vertexShader:Hx,fragmentShader:zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new Tt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$h=class extends tn{constructor(e,t){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,g=typeof XRWebGLBinding<"u",m=new Jh,x={},_=t.getContextAttributes(),M=null,y=null,w=[],T=[],v=new Q,S=null,I=null,R=new Zt;R.viewport=new Pt;let q=new Zt;q.viewport=new Pt;let D=[R,q],U=new tl,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Me=w[Z];return Me===void 0&&(Me=new Ws,w[Z]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(Z){let Me=w[Z];return Me===void 0&&(Me=new Ws,w[Z]=Me),Me.getGripSpace()},this.getHand=function(Z){let Me=w[Z];return Me===void 0&&(Me=new Ws,w[Z]=Me),Me.getHandSpace()};function H(Z){let Me=T.indexOf(Z.inputSource);if(Me===-1)return;let Te=w[Me];Te!==void 0&&(Te.update(Z.inputSource,Z.frame,c||o),Te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",te);for(let Z=0;Z<w.length;Z++){let Me=T[Z];Me!==null&&(T[Z]=null,w[Z].disconnect(Me))}C=null,B=null,m.reset();for(let Z in x)delete x[Z];if(e.setRenderTarget(M),f=null,d=null,u=null,n=null,y=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(v.width,v.height,!1),I!==null){let Z=I.camera;Z.fov=I.fov,Z.zoom=I.zoom,Z.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(M=e.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",O),n.addEventListener("inputsourceschange",te),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(v),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,De=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=_.stencil?Rn:vn,De=_.stencil?fs:Ji);let Ue={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ue),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Gt(d.textureWidth,d.textureHeight,{format:$i,type:gi,depthTexture:new Mn(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Te={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,Te),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Gt(f.framebufferWidth,f.framebufferHeight,{format:$i,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Ne.setContext(n),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(Z){for(let Me=0;Me<Z.removed.length;Me++){let Te=Z.removed[Me],De=T.indexOf(Te);De>=0&&(T[De]=null,w[De].disconnect(Te))}for(let Me=0;Me<Z.added.length;Me++){let Te=Z.added[Me],De=T.indexOf(Te);if(De===-1){for(let Ue=0;Ue<w.length;Ue++)if(Ue>=T.length){T.push(Te),De=Ue;break}else if(T[Ue]===null){T[Ue]=Te,De=Ue;break}if(De===-1)break}let ve=w[De];ve&&ve.connect(Te)}}function V(Z,Me){Me===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Me.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let Me=Z.near,Te=Z.far;m.texture!==null&&(m.depthNear>0&&(Me=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),U.near=q.near=R.near=Me,U.far=q.far=R.far=Te,(C!==U.near||B!==U.far)&&(n.updateRenderState({depthNear:U.near,depthFar:U.far}),C=U.near,B=U.far),U.layers.mask=Z.layers.mask|6,R.layers.mask=U.layers.mask&-5,q.layers.mask=U.layers.mask&-3;let De=Z.parent,ve=U.cameras;V(U,De);for(let Ue=0;Ue<ve.length;Ue++)V(ve[Ue],De);U.projectionMatrix.copy(R.projectionMatrix),U.projectionMatrixInverse.copy(R.projectionMatrixInverse),I===null&&Z.isPerspectiveCamera&&(I={camera:Z,fov:Z.fov,zoom:Z.zoom}),X(Z,U,De)};function X(Z,Me,Te){Te===null?Z.matrix.copy(Me.matrixWorld):(Z.matrix.copy(Te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Me.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Me.projectionMatrix),Z.projectionMatrixInverse.copy(Me.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ks*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Z){return x[Z]};let j=null;function Re(Z,Me){if(h=Me.getViewerPose(c||o),p=Me,h!==null){let Te=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let De=!1;Te.length!==U.cameras.length&&(U.cameras.length=0,De=!0);for(let Oe=0;Oe<Te.length;Oe++){let Ke=Te[Oe],rt=null;if(f!==null)rt=f.getViewport(Ke);else{let de=u.getViewSubImage(d,Ke);rt=de.viewport,Oe===0&&(e.setRenderTargetTextures(y,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(y))}let ie=D[Oe];ie===void 0&&(ie=new Zt,ie.layers.enable(Oe),ie.viewport=new Pt,D[Oe]=ie),ie.matrix.fromArray(Ke.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Ke.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(rt.x,rt.y,rt.width,rt.height),Oe===0&&(U.matrix.copy(ie.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),De===!0&&U.cameras.push(ie)}let ve=n.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let Oe=u.getDepthInformation(Te[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,n.renderState)}if(ve&&ve.includes("camera-access")&&g){e.state.unbindTexture(),u=i.getBinding();for(let Oe=0;Oe<Te.length;Oe++){let Ke=Te[Oe].camera;if(Ke){let rt=x[Ke];rt||(rt=new Wr,x[Ke]=rt);let ie=u.getCameraImage(Ke);rt.sourceTexture=ie}}}}for(let Te=0;Te<w.length;Te++){let De=T[Te],ve=w[Te];De!==null&&ve!==void 0&&ve.update(De,Me,c||o)}j&&j(Z,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),p=null}let Ne=new Ef;Ne.setAnimationLoop(Re),this.setAnimationLoop=function(Z){j=Z},this.dispose=function(){}}},kx=new pt,Ff=new Ye;Ff.set(-1,0,0,0,1,0,0,0,1);function Gx(s,e){function t(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function i(m,x){x.color.getRGB(m.fogColor.value,Dh(s)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function n(m,x,_,M,y){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(m,x):x.isMeshLambertMaterial?(r(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(m,x),u(m,x)):x.isMeshPhongMaterial?(r(m,x),h(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(m,x),d(m,x),x.isMeshPhysicalMaterial&&f(m,x,y)):x.isMeshMatcapMaterial?(r(m,x),p(m,x)):x.isMeshDepthMaterial?r(m,x):x.isMeshDistanceMaterial?(r(m,x),g(m,x)):x.isMeshNormalMaterial?r(m,x):x.isLineBasicMaterial?(o(m,x),x.isLineDashedMaterial&&a(m,x)):x.isPointsMaterial?l(m,x,_,M):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,t(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===kt&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,t(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===kt&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,t(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,t(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let _=e.get(x),M=_.envMap,y=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ff),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,m.aoMapTransform))}function o(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform))}function a(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,_,M){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*_,m.scale.value=M*.5,x.map&&(m.map.value=x.map,t(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function h(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function u(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function d(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function f(m,x,_){m.ior.value=x.ior,x.diffuseRoughness>0&&(m.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kt&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,x){x.matcap&&(m.matcap.value=x.matcap)}function g(m,x){let _=e.get(x).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Vx(s,e,t,i){let n={},r={};function o(_,M){let y=M.program;i.uniformBlockBinding(_,y,n[_.id])}function a(_,M){let y=n[_.id];y===void 0&&(p(_),y=l(_),n[_.id]=y,_.addEventListener("dispose",m));let w=M.program;i.updateUBOMapping(_,w);let T=e.render.frame;r[_.id]!==T&&(c(_),r[_.id]=T)}function l(_){let M=s.createBuffer(),y=_.__size,w=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,y,w),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function c(_){let M=n[_.id],y=_.uniforms,w=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let T=0,v=y.length;T<v;T++){let S=y[T];if(Array.isArray(S))for(let I=0,R=S.length;I<R;I++)h(S[I],T,I,w);else h(S,T,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(_,M,y,w){if(d(_,M,y,w)===!0){let T=_.__offset,v=_.value;if(Array.isArray(v)){let S=0;for(let I=0;I<v.length;I++){let R=v[I],q=g(R,!0);u(R,_.__data,S),S+=q.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,_.__data)}}function u(_,M,y){typeof _=="number"||typeof _=="boolean"?M[y]=_:_.isMatrix3?(M[y]=_.elements[0],M[y+1]=_.elements[1],M[y+2]=_.elements[2],M[y+3]=0,M[y+4]=_.elements[3],M[y+5]=_.elements[4],M[y+6]=_.elements[5],M[y+7]=0,M[y+8]=_.elements[6],M[y+9]=_.elements[7],M[y+10]=_.elements[8],M[y+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-y),y):_.toArray(M,y)}function d(_,M,y,w){let T=_.value,v=M+"_"+y;if(Array.isArray(T)){w[v]===void 0&&(w[v]=[]);let S=w[v],I=!1;for(let R=0;R<T.length;R++)f(T[R],S,R)===!0&&(I=!0);return I}return f(T,w,v)}function f(_,M,y){if(M[y]===void 0)return typeof _=="number"||typeof _=="boolean"?M[y]=_:ArrayBuffer.isView(_)?M[y]=_.slice():M[y]=_.clone(),!0;{let w=M[y];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return M[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function p(_){let M=_.uniforms,y=0,w=16;for(let v=0,S=M.length;v<S;v++){let I=Array.isArray(M[v])?M[v]:[M[v]];for(let R=0,q=I.length;R<q;R++){let D=I[R],U=Array.isArray(D.value)?D.value:[D.value],C=Array.isArray(M[v])||Array.isArray(D.value),B=y;for(let O=0,te=U.length;O<te;O++){let V=U[O],X=g(V,C),j=y%w,Re=j%X.boundary,Ne=j+Re;y+=Re,Ne!==0&&w-Ne<X.storage&&(y+=w-Ne),O===0&&(B=y),y+=X.storage}let H=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new H((y-B)/Float32Array.BYTES_PER_ELEMENT),D.__offset=B}}let T=y%w;return T>0&&(y+=w-T),_.__size=y,_.__cache={},this}function g(_,M){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(_){let M=_.target;M.removeEventListener("dispose",m),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function x(){for(let _ in n)s.deleteBuffer(n[_]);n={},r={}}return{bind:o,update:a,dispose:x}}var Wx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ln=null;function Xx(){return ln===null&&(ln=new kr(Wx,16,16,Wn,$t),ln.name="DFG_LUT",ln.minFilter=fi,ln.magFilter=fi,ln.wrapS=en,ln.wrapT=en,ln.generateMipmaps=!1,ln.needsUpdate=!0),ln}var Xn=class{constructor(e={}){let{canvas:t=Gd(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=gi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=f,m=new Set([pl,fl,dl]),x=new Set([gi,Ji,ir,fs,cl,hl]),_=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,T=null,v=[],S=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=an,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,q=!1,D=null,U=null,C=null,B=null;this._outputColorSpace=Et;let H=0,O=0,te=null,V=-1,X=null,j=new Pt,Re=new Pt,Ne=null,Z=new Se(0),Me=0,Te=t.width,De=t.height,ve=1,Ue=null,It=null,Oe=new Pt(0,0,Te,De),Ke=new Pt(0,0,Te,De),rt=!1,ie=new Bn,de=new Fa,le=!1,Ae=!1,ye=new pt,$e=new P,Le=new Pt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function xt(){return te===null?ve:1}let N=i;function Wt(E,L){return t.getContext(E,L)}let nt,Rt,ge,zt,ke,We,A,b,k,re,ee,ce,xe,J,$,fe,F,K,Y,pe,ae,he,Be;try{let E={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",be,!1),N===null){let L="webgl2";if(N=Wt(L,E),N===null)throw Wt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(E){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ve("WebGLRenderer: "+E.message),E}function et(){nt=new n2(N),nt.init(),ae=new Ox(N,nt),Rt=new Xg(N,nt,e,ae),ge=new Ux(N,nt),Rt.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),U=N.createFramebuffer(),C=N.createFramebuffer(),B=N.createFramebuffer(),zt=new o2(N),ke=new bx,We=new Bx(N,nt,ge,ke,Rt,ae,zt),A=new i2(R),b=new lm(N),he=new Vg(N,b),k=new s2(N,b,zt,he),re=new l2(N,k,b,he,zt),K=new a2(N,Rt,We),$=new Yg(ke),ee=new Sx(R,A,nt,Rt,he,$),ce=new Gx(R,ke),xe=new wx,J=new Ix(nt),F=new Gg(R,A,ge,re,p,l),fe=new Nx(R,re,Rt),Be=new Vx(N,zt,Rt,ge),Y=new Wg(N,nt,zt),pe=new r2(N,nt,zt),zt.programs=ee.programs,R.capabilities=Rt,R.extensions=nt,R.properties=ke,R.renderLists=xe,R.shadowMap=fe,R.state=ge,R.info=zt}g!==gi&&(I=new h2(g,t.width,t.height,a,n,r));let oe=new $h(R,N);this.xr=oe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(E){E!==void 0&&(ve=E,this.setSize(Te,De,!1))},this.getSize=function(E){return E.set(Te,De)},this.setSize=function(E,L,W=!0){if(oe.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=E,De=L,t.width=Math.floor(E*ve),t.height=Math.floor(L*ve),W===!0&&(t.style.width=E+"px",t.style.height=L+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(Te*ve,De*ve).floor()},this.setDrawingBufferSize=function(E,L,W){Te=E,De=L,ve=W,t.width=Math.floor(E*W),t.height=Math.floor(L*W),this.setViewport(0,0,E,L)},this.setEffects=function(E){if(g===gi){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let L=0;L<E.length;L++)if(E[L].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(j)},this.getViewport=function(E){return E.copy(Oe)},this.setViewport=function(E,L,W,z){E.isVector4?Oe.set(E.x,E.y,E.z,E.w):Oe.set(E,L,W,z),ge.viewport(j.copy(Oe).multiplyScalar(xt()).round())},this.getScissor=function(E){return E.copy(Ke)},this.setScissor=function(E,L,W,z){E.isVector4?Ke.set(E.x,E.y,E.z,E.w):Ke.set(E,L,W,z),ge.scissor(Re.copy(Ke).multiplyScalar(xt()).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(E){ge.setScissorTest(rt=E)},this.setOpaqueSort=function(E){Ue=E},this.setTransparentSort=function(E){It=E},this.getClearColor=function(E){return E.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(E=!0,L=!0,W=!0){let z=0;if(E){let G=!1;if(te!==null){let _e=te.texture.format;G=m.has(_e)}if(G){let _e=te.texture.type,Ce=x.has(_e),me=F.getClearColor(),we=F.getClearAlpha(),qe=me.r,Ze=me.g,lt=me.b;Ce?(_[0]=qe,_[1]=Ze,_[2]=lt,_[3]=we,N.clearBufferuiv(N.COLOR,0,_)):(M[0]=qe,M[1]=Ze,M[2]=lt,M[3]=we,N.clearBufferiv(N.COLOR,0,M))}else z|=N.COLOR_BUFFER_BIT}L&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",be,!1),F.dispose(),xe.dispose(),J.dispose(),We.dispose(),ke.dispose(),A.dispose(),re.dispose(),k.dispose(),he.dispose(),Be.dispose(),ee.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",fu),oe.removeEventListener("sessionend",pu),$n.stop()};function He(E){E.preventDefault(),Ah("WebGLRenderer: Context Lost."),q=!0}function je(){Ah("WebGLRenderer: Context Restored."),q=!1;let E=zt.autoReset,L=fe.enabled,W=fe.autoUpdate,z=fe.needsUpdate,G=fe.type;et(),zt.autoReset=E,fe.enabled=L,fe.autoUpdate=W,fe.needsUpdate=z,fe.type=G}function be(E){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function bt(E){let L=E.target;L.removeEventListener("dispose",bt),jt(L)}function jt(E){In(E),ke.remove(E)}function In(E){let L=ke.get(E).programs;L!==void 0&&(L.forEach(function(W){ee.releaseProgram(W)}),E.isShaderMaterial&&ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,W,z,G,_e){L===null&&(L=ot);let Ce=G.isMesh&&G.matrixWorld.determinantAffine()<0,me=Rp(E,L,W,z,G);ge.setMaterial(z,Ce);let we=W.index,qe=1;if(z.wireframe===!0){if(we=k.getWireframeAttribute(W),we===void 0)return;qe=2}let Ze=W.drawRange,lt=W.attributes.position,Pe=Ze.start*qe,ct=(Ze.start+Ze.count)*qe;_e!==null&&(Pe=Math.max(Pe,_e.start*qe),ct=Math.min(ct,(_e.start+_e.count)*qe)),we!==null?(Pe=Math.max(Pe,0),ct=Math.min(ct,we.count)):lt!=null&&(Pe=Math.max(Pe,0),ct=Math.min(ct,lt.count));let Xt=ct-Pe;if(Xt<0||Xt===1/0)return;he.setup(G,z,me,W,we);let Dt,Ct=Y;if(we!==null&&(Dt=b.get(we),Ct=pe,Ct.setIndex(Dt)),G.isMesh)z.wireframe===!0?(ge.setLineWidth(z.wireframeLinewidth*xt()),Ct.setMode(N.LINES)):Ct.setMode(N.TRIANGLES);else if(G.isLine){let oi=z.linewidth;oi===void 0&&(oi=1),ge.setLineWidth(oi*xt()),G.isLineSegments?Ct.setMode(N.LINES):G.isLineLoop?Ct.setMode(N.LINE_LOOP):Ct.setMode(N.LINE_STRIP)}else G.isPoints?Ct.setMode(N.POINTS):G.isSprite&&Ct.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let oi=G._multiDrawStarts,Ie=G._multiDrawCounts,ui=G._multiDrawCount,vt=we?b.get(we).bytesPerElement:1,Kn=ke.get(z).currentProgram.getUniforms();for(let ai=0;ai<ui;ai++)Kn.setValue(N,"_gl_DrawID",ai),Ct.render(oi[ai]/vt,Ie[ai])}else if(G.isInstancedMesh)Ct.renderInstances(Pe,Xt,G.count);else if(W.isInstancedBufferGeometry){let oi=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ie=Math.min(W.instanceCount,oi);Ct.renderInstances(Pe,Xt,Ie)}else Ct.render(Pe,Xt)};function du(E,L,W,z){D!==null&&E.isNodeMaterial&&D.setObject(z,E),le===!0&&$.setState(E,W,!1),E.transparent===!0&&E.side===yt&&E.forceSinglePass===!1?(E.side=kt,E.needsUpdate=!0,Sr(E,L,z),E.side=Gn,E.needsUpdate=!0,Sr(E,L,z),E.side=yt):Sr(E,L,z)}this.compile=function(E,L,W=null){W===null&&(W=E),D!==null&&D.renderStart(E,L,W),T=J.get(W),T.init(L),S.push(T),W.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),E!==W&&E.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),D!==null&&D.updateLights(T.state.lightsArray),Ae=this.localClippingEnabled,le=$.init(this.clippingPlanes,Ae),le===!0&&$.setGlobalState(this.clippingPlanes,L),D!==null&&fe.render(T.state.shadowsArray,W,L);let z=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let _e=G.material;if(_e)if(Array.isArray(_e))for(let Ce=0;Ce<_e.length;Ce++){let me=_e[Ce];du(me,W,L,G),z.add(me)}else du(_e,W,L,G),z.add(_e)}),T=S.pop(),D!==null&&D.renderEnd(),z},this.compileAsync=function(E,L,W=null){let z=this.compile(E,L,W);return new Promise(G=>{function _e(){if(z.forEach(function(Ce){let we=ke.get(Ce).currentProgram;(we===void 0||we.isReady())&&z.delete(Ce)}),z.size===0){G(E);return}setTimeout(_e,10)}nt.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let wc=null;function Tp(E){wc&&wc(E)}function fu(){$n.stop()}function pu(){$n.start()}let $n=new Ef;$n.setAnimationLoop(Tp),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(E){wc=E,oe.setAnimationLoop(E),E===null?$n.stop():$n.start()},oe.addEventListener("sessionstart",fu),oe.addEventListener("sessionend",pu),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;D!==null&&D.renderStart(E,L);let W=oe.enabled===!0&&oe.isPresenting===!0,z=I!==null&&(te===null||W)&&I.begin(R,te);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(L),L=oe.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,L,te),T=J.get(E,S.length),T.init(L),T.state.textureUnits=We.getTextureUnits(),S.push(T),ye.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?de.setFromArrayCamera(L):ie.setFromProjectionMatrix(ye,Pi,L.reversedDepth),Ae=this.localClippingEnabled,le=$.init(this.clippingPlanes,Ae),w=xe.get(E,v.length),w.init(),v.push(w),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){let Ce=R.xr.getDepthSensingMesh();Ce!==null&&Tc(Ce,L,-1/0,R.sortObjects)}Tc(E,L,0,R.sortObjects),w.finish(),D!==null&&D.updateLights(T.state.lightsArray),R.sortObjects===!0&&w.sort(Ue,It),at=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,at&&F.addToRenderList(w,E),this.info.autoReset===!0&&this.info.reset(),le===!0&&$.beginShadows();let G=T.state.shadowsArray;if(fe.render(G,E,L),le===!0&&$.endShadows(),(z&&I.hasRenderPass())===!1){let Ce=w.opaque,me=w.transmissive;if(T.setupLights(),L.isArrayCamera){let we=L.cameras;if(me.length>0)for(let qe=0,Ze=we.length;qe<Ze;qe++){let lt=we[qe];gu(Ce,me,E,lt)}at&&F.render(E);for(let qe=0,Ze=we.length;qe<Ze;qe++){let lt=we[qe];mu(w,E,lt,lt.viewport)}}else me.length>0&&gu(Ce,me,E,L),at&&F.render(E),mu(w,E,L)}te!==null&&O===0&&(We.updateMultisampleRenderTarget(te),We.updateRenderTargetMipmap(te)),z&&I.end(R),E.isScene===!0&&E.onAfterRender(R,E,L),he.resetDefaultState(),V=-1,X=null,S.pop(),S.length>0?(T=S[S.length-1],We.setTextureUnits(T.state.textureUnits),le===!0&&$.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,v.pop(),v.length>0?w=v[v.length-1]:w=null,D!==null&&D.renderEnd()};function Tc(E,L,W,z){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){let Ce=L.isArrayCamera?de:ie;if(!E.frustumCulled||E.intersectsFrustum(Ce)){z&&Le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ye);let me=re.update(E),we=E.material;we.visible&&w.push(E,me,we,W,Le.z,null,L)}}else if(E.isMesh||E.isLine||E.isPoints){let Ce=L.isArrayCamera?de:ie;if(!E.frustumCulled||E.intersectsFrustum(Ce)){let me=re.update(E),we=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Le.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Le.copy(me.boundingSphere.center)),Le.applyMatrix4(E.matrixWorld).applyMatrix4(ye)),Array.isArray(we)){let qe=me.groups;for(let Ze=0,lt=qe.length;Ze<lt;Ze++){let Pe=qe[Ze],ct=we[Pe.materialIndex];ct&&ct.visible&&w.push(E,me,ct,W,Le.z,Pe,L)}}else we.visible&&w.push(E,me,we,W,Le.z,null,L)}}}let _e=E.children;for(let Ce=0,me=_e.length;Ce<me;Ce++)Tc(_e[Ce],L,W,z)}function mu(E,L,W,z){let{opaque:G,transmissive:_e,transparent:Ce}=E;T.setupLightsView(W),le===!0&&$.setGlobalState(R.clippingPlanes,W),z&&ge.viewport(j.copy(z)),G.length>0&&ko(G,L,W),_e.length>0&&ko(_e,L,W),Ce.length>0&&ko(Ce,L,W),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function gu(E,L,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let Pe=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new Gt(1,1,{generateMipmaps:!0,type:Pe?$t:gi,minFilter:Zi,samples:Math.max(4,Rt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let _e=T.state.transmissionRenderTarget[z.id],Ce=z.viewport||j;_e.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);let me=R.getRenderTarget(),we=R.getActiveCubeFace(),qe=R.getActiveMipmapLevel();R.setRenderTarget(_e),R.getClearColor(Z),Me=R.getClearAlpha(),Me<1&&R.setClearColor(16777215,.5),R.clear(),at&&F.render(W);let Ze=R.toneMapping;R.toneMapping=an;let lt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),le===!0&&$.setGlobalState(R.clippingPlanes,z),ko(E,W,z),We.updateMultisampleRenderTarget(_e),We.updateRenderTargetMipmap(_e),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ct=0,Xt=L.length;ct<Xt;ct++){let Dt=L[ct],{object:Ct,geometry:oi,material:Ie,group:ui}=Dt;if(Ie.side===yt&&Ct.layers.test(z.layers)){let vt=Ie.side;Ie.side=kt,Ie.needsUpdate=!0,xu(Ct,W,z,oi,Ie,ui),Ie.side=vt,Ie.needsUpdate=!0,Pe=!0}}Pe===!0&&(We.updateMultisampleRenderTarget(_e),We.updateRenderTargetMipmap(_e))}R.setRenderTarget(me,we,qe),R.setClearColor(Z,Me),lt!==void 0&&(z.viewport=lt),R.toneMapping=Ze}function ko(E,L,W){let z=L.isScene===!0?L.overrideMaterial:null;for(let G=0,_e=E.length;G<_e;G++){let Ce=E[G],{object:me,geometry:we,group:qe}=Ce,Ze=Ce.material;Ze.allowOverride===!0&&z!==null&&(Ze=z),me.layers.test(W.layers)&&xu(me,L,W,we,Ze,qe)}}function xu(E,L,W,z,G,_e){D!==null&&G.isNodeMaterial&&D.setObject(E,G),E.onBeforeRender(R,L,W,z,G,_e),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(R,L,W,z,E,_e),G.transparent===!0&&G.side===yt&&G.forceSinglePass===!1?(G.side=kt,G.needsUpdate=!0,R.renderBufferDirect(W,L,z,G,E,_e),G.side=Gn,G.needsUpdate=!0,R.renderBufferDirect(W,L,z,G,E,_e),G.side=yt):R.renderBufferDirect(W,L,z,G,E,_e),E.onAfterRender(R,L,W,z,G,_e)}function _u(E){let L=0;for(let W of E)W.texture!==null&&L++;return L}function Sr(E,L,W){L.isScene!==!0&&(L=ot);let z=ke.get(E),G=T.state.lights,_e=T.state.shadowsArray,Ce=G.state.version,me=ee.getParameters(E,G.state,_e,L,W,T.state.lightProbeGridArray),we=ee.getProgramCacheKey(me),qe=z.programs;z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?L.environment:null,z.fog=L.fog;let Ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;z.envMap=A.get(E.envMap||z.environment,Ze),z.envMapRotation=z.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,qe===void 0&&(E.addEventListener("dispose",bt),qe=new Map,z.programs=qe,z.programVariants=new Map);let lt=qe.get(we);if(lt!==void 0){if(z.currentProgram===lt&&z.lightsStateVersion===Ce)return yu(E,me),lt}else me.uniforms=ee.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,W,me),E.onBeforeCompile(me,R),lt=ee.acquireProgram(me,we),qe.set(we,lt),z.uniforms=me.uniforms;let Pe=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=$.uniform),yu(E,me),z.needsLights=Pp(E),z.lightsStateVersion=Ce,z.needsLights&&(Pe.ambientLightColor.value=G.state.ambient,Pe.lightProbe.value=G.state.probe,Pe.sunLights.value=G.state.sun,Pe.sunLightShadows.value=G.state.sunShadow,Pe.directionalLights.value=G.state.directional,Pe.directionalLightShadows.value=G.state.directionalShadow,Pe.spotLights.value=G.state.spot,Pe.spotLightShadows.value=G.state.spotShadow,Pe.rectAreaLights.value=G.state.rectArea,Pe.ltc_1.value=G.state.rectAreaLTC1,Pe.ltc_2.value=G.state.rectAreaLTC2,Pe.pointLights.value=G.state.point,Pe.pointLightShadows.value=G.state.pointShadow,Pe.hemisphereLights.value=G.state.hemi,Pe.sunShadowMatrix.value=G.state.sunShadowMatrix,Pe.sunShadowCascade.value=G.state.sunShadowCascade,Pe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pe.spotLightMatrix.value=G.state.spotLightMatrix,Pe.spotLightMap.value=G.state.spotLightMap,Pe.pointShadowMatrix.value=G.state.pointShadowMatrix),z.numLightProbeGrids=_u(T.state.lightProbeGridArray),z.currentProgram=lt,z.uniformsList=null,lt}function Ap(E,L,W,z,G){let _e=ke.get(E),Ce=_e.currentProgram.id+","+z+","+G,me=_e.programVariants.get(Ce);return me===void 0?(me=Sr(E,L,W),_e.programVariants.set(Ce,me)):(_e.currentProgram=me,_e.uniformsList=null,_e.outputColorSpace=z,_e.toneMapping=G),me}function vu(E){if(E.uniformsList===null){let L=E.currentProgram.getUniforms();E.uniformsList=sr.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function yu(E,L){let W=ke.get(E);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function Rp(E,L,W,z,G){L.isScene!==!0&&(L=ot),We.resetTextureUnits();let _e=L.fog,Ce=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?L.environment:null,me=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:st.workingColorSpace,we=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,qe=A.get(z.envMap||Ce,we),Ze=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,lt=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pe=!!W.morphAttributes.position,ct=!!W.morphAttributes.normal,Xt=!!W.morphAttributes.color,Dt=an;z.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Dt=R.toneMapping);let Ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,oi=Ct!==void 0?Ct.length:0,Ie=ke.get(z),ui=T.state.lights;if(le===!0&&(Ae===!0||E!==X)){let Bt=E===X&&z.id===V;$.setState(z,E,Bt)}let vt=!1,Kn=!1;z.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==ui.state.version||G.isBatchedMesh&&Ie.batching===!1||!G.isBatchedMesh&&Ie.batching===!0||G.isBatchedMesh&&Ie.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ie.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ie.instancing===!1||!G.isInstancedMesh&&Ie.instancing===!0||G.isSkinnedMesh&&Ie.skinning===!1||!G.isSkinnedMesh&&Ie.skinning===!0||G.isInstancedMesh&&Ie.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ie.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ie.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ie.instancingMorph===!1&&G.morphTexture!==null||Ie.envMap!==qe||z.fog===!0&&Ie.fog!==_e||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==$.numPlanes||Ie.numIntersection!==$.numIntersection)||Ie.vertexAlphas!==Ze||Ie.vertexTangents!==lt||Ie.morphTargets!==Pe||Ie.morphNormals!==ct||Ie.morphColors!==Xt||Ie.morphTargetsCount!==oi||Ie.numLightProbeGrids!==_u(T.state.lightProbeGridArray)?vt=!0:(Ie.outputColorSpace!==me||Ie.toneMapping!==Dt)&&(Kn=!0):(vt=!0,Ie.__version=z.version);let ai=Ie.currentProgram;(vt===!0||Kn===!0)&&(ai=Kn===!0?Ap(z,L,G,me,Dt):Sr(z,L,G),D&&z.isNodeMaterial&&D.onUpdateProgram(z,ai,Ie));let Go=!1,Dn=!1,Qn=!1,ft=ai.getUniforms(),ni=Ie.uniforms;if(ge.useProgram(ai.program)&&(Go=!0,Dn=!0,Qn=!0),z.id!==V&&(V=z.id,Dn=!0),Go||X!==E){ge.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ft.setValue(N,"projectionMatrix",E.projectionMatrix),ft.setValue(N,"viewMatrix",E.matrixWorldInverse);let ei=ft.map.cameraPosition;ei!==void 0&&ei.setValue(N,$e.setFromMatrixPosition(E.matrixWorld)),Rt.logarithmicDepthBuffer&&ft.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ft.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,Dn=!0,Qn=!0)}if(Ie.needsLights&&(ui.state.sunShadowMap.length>0&&ft.setValue(N,"sunShadowMap",ui.state.sunShadowMap,We),ui.state.directionalShadowMap.length>0&&ft.setValue(N,"directionalShadowMap",ui.state.directionalShadowMap,We),ui.state.spotShadowMap.length>0&&ft.setValue(N,"spotShadowMap",ui.state.spotShadowMap,We),ui.state.pointShadowMap.length>0&&ft.setValue(N,"pointShadowMap",ui.state.pointShadowMap,We)),G.isSkinnedMesh){ft.setOptional(N,G,"bindMatrix"),ft.setOptional(N,G,"bindMatrixInverse");let Bt=G.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ft.setValue(N,"boneTexture",Bt.boneTexture,We))}G.isBatchedMesh&&(ft.setOptional(N,G,"batchingTexture"),ft.setValue(N,"batchingTexture",G._matricesTexture,We),ft.setOptional(N,G,"batchingIdTexture"),ft.setValue(N,"batchingIdTexture",G._indirectTexture,We),ft.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&ft.setValue(N,"batchingColorTexture",G._colorsTexture,We));let Bi=W.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&K.update(G,W,ai),(Dn||Ie.receiveShadow!==G.receiveShadow)&&(Ie.receiveShadow=G.receiveShadow,ft.setValue(N,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&L.environment!==null&&(ni.envMapIntensity.value=L.environmentIntensity),ni.dfgLUT!==void 0&&(ni.dfgLUT.value=Xx()),Dn){if(ft.setValue(N,"toneMappingExposure",R.toneMappingExposure),Ie.needsLights&&Cp(ni,Qn),_e&&z.fog===!0&&ce.refreshFogUniforms(ni,_e),ce.refreshMaterialUniforms(ni,z,ve,De,T.state.transmissionRenderTarget[E.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){let Bt=y,ei=0;for(let un of T.state.lightProbeGridArray)un.texture!==null&&(Bt.textures[ei]=un.texture,Bt.min[ei]=un.boundingBox.min,Bt.max[ei]=un.boundingBox.max,Bt.resolution[ei]=un.resolution,ei++);for(let un in Bt)Bt[un].length=ei;ni.probesSH.value=Bt.textures,ni.probesMin.value=Bt.min,ni.probesMax.value=Bt.max,ni.probesResolution.value=Bt.resolution}sr.upload(N,vu(Ie),ni,We)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(sr.upload(N,vu(Ie),ni,We),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ft.setValue(N,"center",G.center),ft.setValue(N,"modelViewMatrix",G.modelViewMatrix),ft.setValue(N,"normalMatrix",G.normalMatrix),ft.setValue(N,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let Bt=z.uniformsGroups;for(let ei=0,un=Bt.length;ei<un;ei++){let Su=Bt[ei];Be.update(Su,ai),Be.bind(Su,ai)}}return ai}function Cp(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.sunLights.needsUpdate=L,E.sunLightShadows.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function Pp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(E,L,W){let z=ke.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ke.get(E.texture).__webglTexture=L,ke.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,L){let W=ke.get(E);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,W=0){te=E,H=L,O=W;let z=null,G=!1,_e=!1;if(E){let me=ke.get(E);if(me.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(N.FRAMEBUFFER,me.__webglFramebuffer),j.copy(E.viewport),Re.copy(E.scissor),Ne=E.scissorTest,ge.viewport(j),ge.scissor(Re),ge.setScissorTest(Ne),V=-1;return}else if(me.__webglFramebuffer===void 0)We.setupRenderTarget(E);else if(me.__hasExternalTextures)We.rebindTextures(E,ke.get(E.texture).__webglTexture,ke.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ze=E.depthTexture;if(me.__boundDepthTexture!==Ze){if(Ze!==null&&ke.has(Ze)&&(E.width!==Ze.image.width||E.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(E)}}let we=E.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(_e=!0);let qe=ke.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[L])?z=qe[L][W]:z=qe[L],G=!0):E.samples>0&&We.useMultisampledRTT(E)===!1?z=ke.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?z=qe[W]:z=qe,j.copy(E.viewport),Re.copy(E.scissor),Ne=E.scissorTest}else j.copy(Oe).multiplyScalar(ve).floor(),Re.copy(Ke).multiplyScalar(ve).floor(),Ne=rt;if(W!==0&&(z=U),ge.bindFramebuffer(N.FRAMEBUFFER,z)&&ge.drawBuffers(E,z),ge.viewport(j),ge.scissor(Re),ge.setScissorTest(Ne),G){let me=ke.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,me.__webglTexture,W)}else if(_e){let me=L;for(let we=0;we<E.textures.length;we++){let qe=ke.get(E.textures[we]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+we,qe.__webglTexture,W,me)}}else if(E!==null&&W!==0){let me=ke.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,me.__webglTexture,W)}V=-1};function Mu(E){let L=ke.get(E);return(L.__readFormat!==E.format||L.__readType!==E.type)&&(L.__readFormat=E.format,L.__readType=E.type,L.__formatReadable=Rt.textureFormatReadable(E.format),L.__typeReadable=Rt.textureTypeReadable(E.type)),L}this.readRenderTargetPixels=function(E,L,W,z,G,_e,Ce,me=0){if(!(E&&E.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(we=we[Ce],Array.isArray(we)&&(we=we[0])),we){ge.bindFramebuffer(N.FRAMEBUFFER,we);try{let qe=E.textures[me],Ze=qe.format,lt=qe.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me);let Pe=Mu(qe);if(Pe.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-z&&W>=0&&W<=E.height-G&&N.readPixels(L,W,z,G,ae.convert(Ze),ae.convert(lt),_e)}finally{let qe=te!==null?ke.get(te).__webglFramebuffer:null;ge.bindFramebuffer(N.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(E,L,W,z,G,_e,Ce,me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(we=we[Ce],Array.isArray(we)&&(we=we[0])),we)if(L>=0&&L<=E.width-z&&W>=0&&W<=E.height-G){ge.bindFramebuffer(N.FRAMEBUFFER,we);let qe=E.textures[me],Ze=qe.format,lt=qe.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me);let Pe=Mu(qe);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ct),N.bufferData(N.PIXEL_PACK_BUFFER,_e.byteLength,N.STREAM_READ),N.readPixels(L,W,z,G,ae.convert(Ze),ae.convert(lt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Xt=te!==null?ke.get(te).__webglFramebuffer:null;ge.bindFramebuffer(N.FRAMEBUFFER,Xt);let Dt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Wd(N,Dt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ct),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,_e),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ct),N.deleteSync(Dt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,L=null,W=0){let z=Math.pow(2,-W),G=Math.floor(E.image.width*z),_e=Math.floor(E.image.height*z),Ce=L!==null?L.x:0,me=L!==null?L.y:0;We.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,Ce,me,G,_e),ge.unbindTexture()},this.copyTextureToTexture=function(E,L,W=null,z=null,G=0,_e=0){let Ce,me,we,qe,Ze,lt,Pe,ct,Xt,Dt=E.isCompressedTexture?E.mipmaps[_e]:E.image;if(W!==null)Ce=W.max.x-W.min.x,me=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,qe=W.min.x,Ze=W.min.y,lt=W.isBox3?W.min.z:0;else{let ft=Math.pow(2,-G);Ce=Math.floor(Dt.width*ft),me=Math.floor(Dt.height*ft),E.isDataArrayTexture?we=Dt.depth:E.isData3DTexture?we=Math.floor(Dt.depth*ft):we=1,qe=0,Ze=0,lt=0}z!==null?(Pe=z.x,ct=z.y,Xt=z.z):(Pe=0,ct=0,Xt=0);let Ct=ae.convert(L.format),oi=ae.convert(L.type),Ie;L.isData3DTexture?(We.setTexture3D(L,0),Ie=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(We.setTexture2DArray(L,0),Ie=N.TEXTURE_2D_ARRAY):(We.setTexture2D(L,0),Ie=N.TEXTURE_2D),ge.activeTexture(N.TEXTURE0),ge.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),ge.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),ge.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);let ui=ge.getParameter(N.UNPACK_ROW_LENGTH),vt=ge.getParameter(N.UNPACK_IMAGE_HEIGHT),Kn=ge.getParameter(N.UNPACK_SKIP_PIXELS),ai=ge.getParameter(N.UNPACK_SKIP_ROWS),Go=ge.getParameter(N.UNPACK_SKIP_IMAGES);ge.pixelStorei(N.UNPACK_ROW_LENGTH,Dt.width),ge.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Dt.height),ge.pixelStorei(N.UNPACK_SKIP_PIXELS,qe),ge.pixelStorei(N.UNPACK_SKIP_ROWS,Ze),ge.pixelStorei(N.UNPACK_SKIP_IMAGES,lt);let Dn=E.isDataArrayTexture||E.isData3DTexture,Qn=L.isDataArrayTexture||L.isData3DTexture;if(E.isDepthTexture){let ft=ke.get(E),ni=ke.get(L),Bi=ke.get(ft.__renderTarget),Bt=ke.get(ni.__renderTarget);ge.bindFramebuffer(N.READ_FRAMEBUFFER,Bi.__webglFramebuffer),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let ei=0;ei<we;ei++)Dn&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ke.get(E).__webglTexture,G,lt+ei),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ke.get(L).__webglTexture,_e,Xt+ei)),N.blitFramebuffer(qe,Ze,qe+Ce,Ze+me,Pe,ct,Pe+Ce,ct+me,N.DEPTH_BUFFER_BIT,N.NEAREST);ge.bindFramebuffer(N.READ_FRAMEBUFFER,null),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||ke.has(E)){let ft=ke.get(E),ni=ke.get(L);ge.bindFramebuffer(N.READ_FRAMEBUFFER,C),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,B);for(let Bi=0;Bi<we;Bi++)Dn?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ft.__webglTexture,G,lt+Bi):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ft.__webglTexture,G),Qn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ni.__webglTexture,_e,Xt+Bi):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ni.__webglTexture,_e),G!==0?N.blitFramebuffer(qe,Ze,qe+Ce,Ze+me,Pe,ct,Pe+Ce,ct+me,N.COLOR_BUFFER_BIT,N.NEAREST):Qn?N.copyTexSubImage3D(Ie,_e,Pe,ct,Xt+Bi,qe,Ze,Ce,me):N.copyTexSubImage2D(Ie,_e,Pe,ct,qe,Ze,Ce,me);ge.bindFramebuffer(N.READ_FRAMEBUFFER,null),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Qn?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Ie,_e,Pe,ct,Xt,Ce,me,we,Ct,oi,Dt.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(Ie,_e,Pe,ct,Xt,Ce,me,we,Ct,Dt.data):N.texSubImage3D(Ie,_e,Pe,ct,Xt,Ce,me,we,Ct,oi,Dt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,_e,Pe,ct,Ce,me,Ct,oi,Dt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,_e,Pe,ct,Dt.width,Dt.height,Ct,Dt.data):N.texSubImage2D(N.TEXTURE_2D,_e,Pe,ct,Ce,me,Ct,oi,Dt);ge.pixelStorei(N.UNPACK_ROW_LENGTH,ui),ge.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt),ge.pixelStorei(N.UNPACK_SKIP_PIXELS,Kn),ge.pixelStorei(N.UNPACK_SKIP_ROWS,ai),ge.pixelStorei(N.UNPACK_SKIP_IMAGES,Go),_e===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&N.generateMipmap(Ie),ge.unbindTexture()},this.initRenderTarget=function(E){ke.get(E).__webglFramebuffer===void 0&&We.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?We.setTextureCube(E,0):E.isData3DTexture?We.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?We.setTexture2DArray(E,0):We.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){H=0,O=0,te=null,ge.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var Jl=class{constructor({tierCount:e,tier:t=0,scale:i=1,minScale:n=.65,warmup:r=3e3,cooldown:o=2500,slowMs:a=26,fastMs:l=14.5,windowSize:c=50,upWindows:h=4,ignoreAbove:u=250}={}){Object.assign(this,{tierCount:e,tier:t,scale:i,minScale:n,warmup:r,cooldown:o,slowMs:a,fastMs:l,windowSize:c,upWindows:h,ignoreAbove:u}),this.frames=[],this.startedAt=null,this.lastChange=-1/0,this.fastWindows=0,this.blockedTier=1/0}update(e,t){if(!(e>0)||e>this.ignoreAbove||(this.startedAt==null&&(this.startedAt=t),t-this.startedAt<this.warmup)||(this.frames.push(e),this.frames.length<this.windowSize))return null;let i=this.frames.slice().sort((a,l)=>a-l);this.frames.length=0;let n=Math.floor(i.length*.1),r=i.slice(n,i.length-n),o=r.reduce((a,l)=>a+l,0)/r.length;return t-this.lastChange<this.cooldown?null:o>this.slowMs?(this.fastWindows=0,this.scale>this.minScale+.05?(this.lastChange=t,this.scale=Math.max(this.minScale,+(this.scale-.12).toFixed(2)),{type:"scale",scale:this.scale}):this.tier>0?(this.lastChange=t,this.blockedTier=Math.min(this.blockedTier,this.tier),this.tier-=1,this.scale=1,{type:"tier",tier:this.tier,scale:1}):null):o<this.fastMs?(this.fastWindows+=1,this.fastWindows<this.upWindows?null:(this.fastWindows=0,this.scale<1?(this.lastChange=t,this.scale=Math.min(1,+(this.scale+.12).toFixed(2)),{type:"scale",scale:this.scale}):this.tier+1<this.tierCount&&this.tier+1<this.blockedTier?(this.lastChange=t,this.tier+=1,this.scale=.88,{type:"tier",tier:this.tier,scale:.88}):null)):(this.fastWindows=0,null)}};var or={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ti=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Yx=new cs(-1,1,1,-1,0,1),Kh=class extends ht{constructor(){super(),this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}},Zx=new Kh,Yn=class{constructor(e){this._mesh=new ne(Zx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Yx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var gs=class extends Ti{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fi.clone(e.uniforms),this.material=new dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Yn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ro=class extends Ti{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},$l=class extends Ti{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Kl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Q);this._width=i.width,this._height=i.height,t=new Gt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$t}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gs(or),this.copyPass.material.blending=An,this.timer=new lo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ro!==void 0&&(o instanceof Ro?i=!0:o instanceof $l&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ql=class extends Ti{constructor(e,t,i=null,n=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Se}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n}};var Lf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ar=class s extends Ti{constructor(e,t=1,i,n){super(),this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Q(e.x,e.y):new Q(256,256),this.clearColor=new Se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Gt(r,o,{type:$t,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Gt(r,o,{type:$t,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Gt(r,o,{type:$t,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Lf;this.highPassUniforms=Fi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new dt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Q(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Fi.clone(or.uniforms),this.blendMaterial=new dt({uniforms:this.copyUniforms,vertexShader:or.vertexShader,fragmentShader:or.fragmentShader,premultipliedAlpha:!0,blending:Vt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Se,this._oldClearAlpha=1,this._basic=new mt,this._fsQuad=new Yn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new Q(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let n=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;n.push((o*a+(o+1)*l)/c),r.push(c)}return new dt({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ar.BlurDirectionX=new Q(1,0);ar.BlurDirectionY=new Q(0,1);var Co={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var jl=class extends Ti{constructor(){super(),this.isOutputPass=!0,this.uniforms=Fi.clone(Co.uniforms),this.material=new Ks({name:Co.name,uniforms:this.uniforms,vertexShader:Co.vertexShader,fragmentShader:Co.fragmentShader}),this._fsQuad=new Yn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===uo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===po?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===us?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Di?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===mo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Qh={name:"StackFinishA",uniforms:{tDiffuse:{value:null},uRes:{value:[1,1]},uTime:{value:0},uTiltCenter:{value:.52},uTiltRange:{value:.18},uBlur:{value:0},uCA:{value:0},uWobble:{value:0},uPixel:{value:0},uZoomBlur:{value:0},uDesat:{value:0},uTint:{value:[1,1,1]},uFlash:{value:0},uFlashColor:{value:[1,.95,.8]}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 uRes;
    uniform float uTime, uTiltCenter, uTiltRange, uBlur, uCA, uWobble, uPixel, uZoomBlur, uDesat, uFlash;
    uniform vec3 uTint, uFlashColor;
    varying vec2 vUv;
    #define TAPS 12
    vec3 tap(vec2 uv) { return texture2D(tDiffuse, clamp(uv, vec2(0.001), vec2(0.999))).rgb; }
    void main() {
      vec2 uv = vUv;
      if (uWobble > 0.0) {
        float w = uWobble;
        uv += w * 0.006 * vec2(sin(uv.y * 16.0 + uTime * 2.1) + 0.5 * sin(uv.y * 41.0 - uTime * 3.3), cos(uv.x * 13.0 + uTime * 1.7));
      }
      if (uPixel > 0.5) {
        vec2 cell = uRes / uPixel;
        uv = (floor(uv * cell) + 0.5) / cell;
      }
      vec2 dir = uv - 0.5;
      float band = abs(uv.y - uTiltCenter);
      float amount = uBlur * smoothstep(uTiltRange, uTiltRange + 0.34, band);
      vec3 col;
      if (amount > 0.35) {
        col = vec3(0.0);
        for (int i = 0; i < TAPS; i++) {
          float r = sqrt((float(i) + 0.5) / float(TAPS));
          float a = float(i) * 2.39996323;
          col += tap(uv + vec2(cos(a), sin(a)) * r * amount / uRes);
        }
        col /= float(TAPS);
      } else if (uCA > 0.0) {
        col = vec3(tap(uv + dir * uCA).r, tap(uv).g, tap(uv - dir * uCA).b);
      } else {
        col = tap(uv);
      }
      if (uCA > 0.0 && amount > 0.35) {
        vec2 o = dir * uCA * 1.5;
        col.r = mix(col.r, tap(uv + o).r, 0.6);
        col.b = mix(col.b, tap(uv - o).b, 0.6);
      }
      if (uZoomBlur > 0.0) {
        vec3 acc = col; float n = 1.0;
        for (int i = 1; i < 6; i++) { acc += tap(uv - dir * uZoomBlur * float(i) * 0.045); n += 1.0; }
        col = acc / n;
      }
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(col, vec3(luma) * vec3(0.86, 0.95, 1.1), uDesat);
      col *= uTint;
      col += uFlashColor * uFlash;
      gl_FragColor = vec4(col, 1.0);
    }
  `},jh={name:"StackFinishB",uniforms:{tDiffuse:{value:null},uRes:{value:[1,1]},uTime:{value:0},uVignette:{value:.3},uGrain:{value:.04},uLevels:{value:0},uPixel:{value:1},uScan:{value:0},uFade:{value:0},uFadeColor:{value:[0,0,0]},uAspect:{value:1},uLift:{value:[0,0,0]},uSat:{value:1},uContrast:{value:1},uVeilColor:{value:[.1,.1,.1]},uSpot:{value:Array.from({length:6},()=>new Pt(0,0,0,0))},uSpotRect:{value:Array.from({length:6},()=>new Pt(0,0,1,1))}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 uRes;
    uniform float uTime, uVignette, uGrain, uLevels, uPixel, uScan, uFade, uAspect, uSat, uContrast;
    uniform vec3 uFadeColor, uLift, uVeilColor;
    uniform vec4 uSpot[6];
    uniform vec4 uSpotRect[6];
    varying vec2 vUv;
    float hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
    float bayer4(vec2 p) {
      vec2 q = mod(floor(p), 4.0);
      float i = q.x + q.y * 4.0;
      // 4x4 ordered-dither matrix (0..15)/16
      float m = 0.0;
      if (i < 0.5) m = 0.0; else if (i < 1.5) m = 8.0; else if (i < 2.5) m = 2.0; else if (i < 3.5) m = 10.0;
      else if (i < 4.5) m = 12.0; else if (i < 5.5) m = 4.0; else if (i < 6.5) m = 14.0; else if (i < 7.5) m = 6.0;
      else if (i < 8.5) m = 3.0; else if (i < 9.5) m = 11.0; else if (i < 10.5) m = 1.0; else if (i < 11.5) m = 9.0;
      else if (i < 12.5) m = 15.0; else if (i < 13.5) m = 7.0; else if (i < 14.5) m = 13.0; else m = 5.0;
      return m / 16.0 - 0.5;
    }
    void main() {
      vec3 col = texture2D(tDiffuse, vUv).rgb;
      col += uLift;
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(luma), col, uSat);
      col = (col - 0.5) * uContrast + 0.5;
      // Spotlight sabotage: everything inside the player's rectangle is hidden by an opaque veil except a soft-edged beam.
      for (int i = 0; i < 6; i++) {
        vec4 sp = uSpot[i];
        if (sp.w > 0.5) {
          vec4 rc = uSpotRect[i];
          if (vUv.x >= rc.x && vUv.x <= rc.z && vUv.y >= rc.y && vUv.y <= rc.w) {
            vec2 d = (vUv - sp.xy) * vec2(uAspect, 1.0);
            float dist = length(d);
            float hole = 1.0 - smoothstep(sp.z * 0.985, sp.z * 1.02, dist);
            float rim = smoothstep(sp.z * 0.93, sp.z, dist) * (1.0 - smoothstep(sp.z, sp.z * 1.05, dist));
            col = mix(uVeilColor, col, hole);
            col += rim * vec3(1.0, 0.78, 0.25) * 0.6;
          }
        }
      }
      vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);
      float vig = 1.0 - uVignette * smoothstep(0.25, 1.05, length(p) * 1.35);
      col *= vig;
      if (uLevels > 1.5) {
        vec2 virtualPx = floor(vUv * uRes / max(1.0, uPixel));
        col = floor(col * (uLevels - 1.0) + 0.5 + bayer4(virtualPx) * 0.55) / (uLevels - 1.0);
      }
      if (uScan > 0.0) {
        float line = 0.5 + 0.5 * sin(vUv.y * uRes.y / max(1.0, uPixel) * 3.14159265);
        col *= 1.0 - uScan * (1.0 - line);
      }
      col += (hash(vUv * uRes + fract(uTime) * 91.7) - 0.5) * uGrain;
      col = mix(col, uFadeColor, uFade);
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }
  `};var Qe=Math.PI*2,Fe=(s,e=0,t=1)=>s<e?e:s>t?t:s,Li=(s,e,t)=>s+(e-s)*t,Jx=(s,e,t)=>s===e?0:Fe((t-s)/(e-s)),xi=(s,e,t)=>{let i=Jx(s,e,t);return i*i*(3-2*i)};var lr=(s,e)=>(s%e+e)%e;var At=(s,e,t,i)=>Li(s,e,1-Math.exp(-t*i)),tc=s=>1-(1-s)**3,Po=s=>s<.5?4*s*s*s:1-(-2*s+2)**3/2,Uf=(s,e=1.70158)=>1+(e+1)*(s-1)**3+e*(s-1)**2;function Nt(s=1){let e=s|0,t=()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return t.range=(i,n)=>i+(n-i)*t(),t.int=(i,n)=>Math.floor(i+(n-i+1)*t()),t.pick=i=>i[Math.floor(t()*i.length)%i.length],t.sign=()=>t()<.5?-1:1,t}function Nf(s){let e=Math.sin(s*127.1+311.7)*43758.5453123;return e-Math.floor(e)}function $x(s,e=0){let t=Math.floor(s),i=s-t,n=Nf(t+e*17.13),r=Nf(t+1+e*17.13),o=i*i*(3-2*i);return Li(n,r,o)*2-1}function Bf(s,e=0,t=4){let i=0,n=.5,r=1;for(let o=0;o<t;o+=1)i+=$x(s*r,e+o*3.7)*n,n*=.5,r*=2;return i}var ec=class{constructor(e=0,t=120,i=12){this.value=e,this.target=e,this.velocity=0,this.stiffness=t,this.damping=i}step(e){let t=Math.max(1,Math.ceil(e/.008)),i=e/t;for(let n=0;n<t;n+=1)this.velocity+=((this.target-this.value)*this.stiffness-this.velocity*this.damping)*i,this.value+=this.velocity*i;return this.value}snap(e){this.value=e,this.target=e,this.velocity=0}};function Kx(s){let e=/^#?([0-9a-f]{6})$/i.exec(String(s||""));if(!e)return null;let t=parseInt(e[1],16);return[t>>16&255,t>>8&255,t&255]}function xs(s,e=[1,1,1]){let t=Kx(s);return t?t.map(i=>i/255):e}var Qx=Object.freeze(["paper","sunset","primetime"]),cr=s=>Qx.includes(s)?s:"paper",jx=Object.freeze({paper:Object.freeze({}),sunset:Object.freeze({"#E3A33B":"#FFC53D","#2F8478":"#2EC4B6","#7FA6BD":"#9B5DE5","#D5472F":"#FF5964","#7A6AA6":"#B983FF","#C96F8A":"#FF8FAB"}),primetime:Object.freeze({"#E3A33B":"#FFC83D","#2F8478":"#35D0E8","#7FA6BD":"#F2F5FF","#D5472F":"#E5322D","#7A6AA6":"#9B8CFF","#C96F8A":"#FF7FA8"})});function _s(s,e){let t=jx[s];return!t||typeof e!="string"?e||"#2F8478":t[e.toUpperCase()]||e}var hr=Object.freeze({paper:["#2F8478","#7FA6BD","#D5472F"],sunset:["#2EC4B6","#9B5DE5","#FF5964"],primetime:["#35D0E8","#F2F5FF","#E5322D"]}),ic=Object.freeze({paper:Object.freeze({name:"paper",label:"The Paper Theatre",ink:"#2A2520",paper:"#F4EDDF",cream:"#F7F0E2",amber:"#E3A33B",teal:"#2F8478",blue:"#7FA6BD",vermilion:"#D5472F",violet:"#7A6AA6",rose:"#C96F8A",skyHorizon:"#FFD8A6",skyMid:"#F6E7CC",skyZenith:"#8FC9CC",journey:["#F4EDDF","#F6D9AE","#7FA6BD","#243047"],fog:"#F4EDDF",fogDensity:32e-5,floor:"#9CC4B2",floorLine:"#F4EDDF",plinth:"#F2E8D3",plinthRim:"#E3A33B",hills:["#E9D8B8","#C9D8C4","#9FC0B3","#7FA6BD","#5E8EA0"],key:"#FFE4BC",fill:"#CFE3EA",ground:"#E7D2B0",rim:"#A5D6D8",exposure:.98,bloom:.1,bloomThreshold:1.15,bloomRadius:.4,sat:1.18,contrast:1.08,grain:.03,vignette:.24,tilt:.5,aberration:9e-4,toneMapping:"neutral",fontKey:"paper"}),sunset:Object.freeze({name:"sunset",label:"Sunset Stack \u201994",ink:"#170B33",paper:"#2B1155",cream:"#FFF3E2",amber:"#FFC53D",teal:"#2EC4B6",blue:"#9B5DE5",vermilion:"#FF5964",violet:"#B983FF",rose:"#FF8FAB",skyHorizon:"#FF7A3D",skyMid:"#8E1D6B",skyZenith:"#120826",journey:["#FF6B35","#C1266B","#4A1A8C","#0B0620"],fog:"#3A1166",fogDensity:42e-5,floor:"#1A0B3A",floorLine:"#FF4FD8",plinth:"#2B1155",plinthRim:"#FFC53D",hills:["#3A1166","#2B0F57","#220C48","#190838","#120528"],key:"#FFB27A",fill:"#7A3CFF",ground:"#FF4FD8",rim:"#2EC4B6",exposure:1,bloom:.5,bloomThreshold:1,bloomRadius:.6,sat:1.12,contrast:1.06,grain:.02,vignette:.42,tilt:0,aberration:.0016,toneMapping:"aces",fontKey:"sunset",pixel:3,levels:14}),primetime:Object.freeze({name:"primetime",label:"Prime Time",ink:"#061238",paper:"#0A1A55",cream:"#FFFFFF",amber:"#FFC83D",teal:"#35D0E8",blue:"#F2F5FF",vermilion:"#E5322D",violet:"#9B8CFF",rose:"#FF7FA8",skyHorizon:"#2447C9",skyMid:"#1B3CAA",skyZenith:"#06113A",journey:["#1B3CAA","#16318F","#0A1A55","#030818"],fog:"#0A1A55",fogDensity:36e-5,floor:"#050C26",floorLine:"#FFC83D",plinth:"#0B1B5C",plinthRim:"#FFC83D",hills:["#14297F","#10236D","#0B1B5C","#08154A","#050E36"],key:"#FFF1CF",fill:"#4F7BFF",ground:"#1B3CAA",rim:"#FFC83D",exposure:.96,bloom:.38,bloomThreshold:1.05,bloomRadius:.5,sat:1.12,contrast:1.1,grain:.03,vignette:.36,tilt:.15,aberration:.0012,toneMapping:"aces",fontKey:"primetime"})}),vs=s=>ic[cr(s)];var Io=Object.freeze([Object.freeze({name:"low",dpr:1,msaa:0,shadow:1024,shadowBias:-.0012,bloom:!1,blur:!1,crowd:.35,particles:.4,reflect:!1,soft:!1}),Object.freeze({name:"medium",dpr:1.25,msaa:0,shadow:1024,shadowBias:-.001,bloom:!0,blur:!1,crowd:.65,particles:.7,reflect:!1,soft:!0}),Object.freeze({name:"high",dpr:1.75,msaa:4,shadow:2048,shadowBias:-8e-4,bloom:!0,blur:!0,crowd:1,particles:1,reflect:!0,soft:!0}),Object.freeze({name:"ultra",dpr:2,msaa:4,shadow:2048,shadowBias:-6e-4,bloom:!0,blur:!0,crowd:1,particles:1,reflect:!0,soft:!0})]);function Of(){try{let e=document.createElement("canvas").getContext("webgl2");if(!e||typeof e.createShader!="function"||typeof e.getParameter!="function")return!1;let t=typeof e.getParameter(e.MAX_TEXTURE_SIZE)=="number"&&e.isContextLost&&!e.isContextLost(),i=e.getExtension&&e.getExtension("WEBGL_lose_context");return i&&i.loseContext(),!!t}catch{return!1}}var e3={neutral:Di,aces:Yi,agx:us};function t3(s){if(s!=null){let n=Io.findIndex(r=>r.name===s);if(n>=0)return n}let e=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,t=navigator.hardwareConcurrency||4,i=navigator.deviceMemory||4;return e||t<=4||i<=3?1:2}var nc=class{constructor({canvas:e,theme:t="paper",forcedTier:i=null,reducedMotion:n=!1}={}){this.canvas=e,this.reducedMotion=n,this.theme=t,this.time=0,this.tierIndex=t3(i),this.forcedTier=i!=null,this.scale=1,this.listeners={tier:new Set,lost:new Set,restored:new Set},this.governor=this.forcedTier?null:new Jl({tierCount:Io.length,tier:this.tierIndex}),this.width=1,this.height=1,this.pixelRatio=1,this.contextLost=!1,this.fade={value:1,target:0,speed:1.2},this.renderer=new Xn({canvas:e,antialias:!1,alpha:!1,stencil:!1,depth:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Et,this.renderer.localClippingEnabled=!0,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Tn,this.renderer.setClearColor(0,1),this.scene=new Mi,this.camera=new Zt(30,1,4,24e3),this.camera.position.set(0,160,820),e.addEventListener("webglcontextlost",r=>{r.preventDefault(),this.contextLost=!0;for(let o of this.listeners.lost)o()}),e.addEventListener("webglcontextrestored",()=>{this.contextLost=!1,this.buildComposer();for(let r of this.listeners.restored)r()}),this.buildComposer(),this.setTheme(t)}get tier(){return Io[this.tierIndex]}on(e,t){return this.listeners[e].add(t),()=>this.listeners[e].delete(t)}buildComposer(){this.composer&&(this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose());let e=new Gt(this.width,this.height,{type:$t,samples:this.tier.msaa});this.composer=new Kl(this.renderer,e),this.renderPass=new Ql(this.scene,this.camera),this.bloomPass=new ar(new Q(this.width,this.height),.3,.6,.9),this.passA=new gs({...Qh,uniforms:Fi.clone(Qh.uniforms)}),this.outputPass=new jl,this.passB=new gs({...jh,uniforms:Fi.clone(jh.uniforms)}),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(this.passA),this.composer.addPass(this.outputPass),this.composer.addPass(this.passB),this.applyTierToPasses(),this.applyThemeToPasses(),this.resize(!0)}applyTierToPasses(){this.bloomPass.enabled=this.tier.bloom}setTheme(e){this.theme=e,this.palette=vs(e),this.applyThemeToPasses()}applyThemeToPasses(){let e=this.palette||vs(this.theme);this.renderer.toneMapping=e3[e.toneMapping]||Di,this.renderer.toneMappingExposure=e.exposure,this.bloomPass.strength=e.bloom,this.bloomPass.threshold=e.bloomThreshold,this.bloomPass.radius=e.bloomRadius;let t=this.passA.uniforms,i=this.passB.uniforms;i.uVignette.value=e.vignette,i.uGrain.value=e.grain,i.uLevels.value=e.levels||0,i.uSat.value=e.sat||1,i.uContrast.value=e.contrast||1,i.uVeilColor.value=xs(e.ink),i.uScan.value=e.pixel?.16:0}resize(e=!1){let t=Math.max(1,Math.floor(this.canvas.clientWidth||window.innerWidth)),i=Math.max(1,Math.floor(this.canvas.clientHeight||window.innerHeight)),n=Math.max(.5,Math.min(window.devicePixelRatio||1,this.tier.dpr)*this.scale);if(!(!e&&t===this.cssWidth&&i===this.cssHeight&&Math.abs(n-this.pixelRatio)<.001)){this.cssWidth=t,this.cssHeight=i,this.pixelRatio=n,this.width=Math.max(2,Math.round(t*n)),this.height=Math.max(2,Math.round(i*n)),this.renderer.setPixelRatio(n),this.renderer.setSize(t,i,!1),this.composer.setPixelRatio(n),this.composer.setSize(t,i),this.camera.aspect=t/i,this.camera.updateProjectionMatrix();for(let r of[this.passA,this.passB])r.uniforms.uRes.value=[this.width,this.height];this.passB.uniforms.uAspect.value=this.camera.aspect}}setQuality(e){let t=Fe(Math.round(e),0,Io.length-1);if(t===this.tierIndex)return;let i=Io[t].msaa!==this.tier.msaa;this.tierIndex=t,this.scale=1,this.applyTierToPasses(),i?this.buildComposer():this.resize(!0);for(let n of this.listeners.tier)n(this.tier,t)}govern(e,t){if(this.forcedTier||!this.governor)return;let i=this.governor.update(e,t);i&&(i.type==="tier"&&this.setQuality(i.tier),i.scale!=null&&(this.scale=i.scale,this.resize(!0)))}render(e,t={}){if(this.contextLost)return;this.time+=e;let i=this.passA.uniforms,n=this.passB.uniforms,r=this.palette;i.uTime.value=this.time,n.uTime.value=this.time,i.uBlur.value=this.tier.blur?(t.blur!=null?t.blur:7)*(r.tilt>0?1:0):0,i.uTiltCenter.value=t.tiltCenter!=null?t.tiltCenter:.5,i.uTiltRange.value=t.tiltRange!=null?t.tiltRange:.2+(1-r.tilt)*.15,i.uCA.value=(r.aberration+(t.ca||0))*(this.tier.blur?1:.6),i.uWobble.value=t.wobble||0,i.uZoomBlur.value=t.zoomBlur||0,i.uDesat.value=t.desat||0,i.uPixel.value=r.pixel?Math.max(2,Math.round(r.pixel*this.pixelRatio)):t.pixel||0,n.uPixel.value=r.pixel?Math.max(2,Math.round(r.pixel*this.pixelRatio)):1;let o=t.tint||[1,1,1];i.uTint.value=o,i.uFlash.value=t.flash||0,t.flashColor&&(i.uFlashColor.value=t.flashColor),n.uFade.value=Fe(this.fade.value+(t.fade||0)),n.uFadeColor.value=t.fadeColor||xs(r.paper==="#F4EDDF"?"#F4EDDF":r.skyZenith),n.uVignette.value=r.vignette+(t.vignette||0),t.bloom!=null&&this.bloomPass.enabled&&(this.bloomPass.strength=t.bloom);let a=t.spots||[];for(let l=0;l<6;l+=1){let c=a[l],h=n.uSpot.value[l],u=n.uSpotRect.value[l];c?(h.set(c.x,c.y,c.r,1),u.set(c.rect[0],c.rect[1],c.rect[2],c.rect[3])):h.w=0}this.composer.render(e)}dispose(){this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose(),this.renderer.dispose()}};var Je=s=>{let[e,t,i]=xs(s);return new Se().setRGB(e,t,i,Et)};function Hf(s,{stars:e=0,stripedSun:t=!1,sunSize:i=.035,sunDir:n=[-.34,.2,-1],sunColor:r="#FFE2A8",sunGlow:o=.5}={}){let a=new dt({side:kt,depthWrite:!1,fog:!1,uniforms:{uHorizon:{value:Je(s.skyHorizon)},uMid:{value:Je(s.skyMid)},uZenith:{value:Je(s.skyZenith)},uJ0:{value:Je(s.journey[0])},uJ1:{value:Je(s.journey[1])},uJ2:{value:Je(s.journey[2])},uJ3:{value:Je(s.journey[3])},uAltitude:{value:0},uJourney:{value:1},uTime:{value:0},uStars:{value:e},uSunDir:{value:new P(...n).normalize()},uSunColor:{value:Je(r)},uSunSize:{value:i},uSunGlow:{value:o},uStripes:{value:t?1:0},uDim:{value:1}},vertexShader:`
      varying vec3 vDir;
      void main() { vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }
    `,fragmentShader:`
      varying vec3 vDir;
      uniform vec3 uHorizon, uMid, uZenith, uJ0, uJ1, uJ2, uJ3, uSunDir, uSunColor;
      uniform float uAltitude, uJourney, uTime, uStars, uSunSize, uSunGlow, uStripes, uDim;
      float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      vec3 journey(float a) {
        a = clamp(a, 0.0, 1.0) * 3.0;
        vec3 c = mix(uJ0, uJ1, smoothstep(0.0, 1.0, a));
        c = mix(c, uJ2, smoothstep(1.0, 2.0, a));
        return mix(c, uJ3, smoothstep(2.0, 3.0, a));
      }
      void main() {
        vec3 dir = normalize(vDir);
        float h = dir.y;
        vec3 base = mix(uHorizon, uMid, smoothstep(-0.08, 0.22, h));
        base = mix(base, uZenith, smoothstep(0.18, 0.9, h));
        vec3 j = journey(uAltitude);
        base = mix(base, j, uJourney * (0.18 + 0.82 * smoothstep(-0.1, 0.55, h)) * smoothstep(0.02, 0.35, uAltitude));
        // below the horizon: fade into the floor haze colour so the world has no visible seam
        base = mix(base, uHorizon * 0.92, smoothstep(0.0, -0.25, h));
        // sun disc + halo
        float sd = max(dot(dir, normalize(uSunDir)), 0.0);
        float sunMask = smoothstep(1.0 - uSunSize, 1.0 - uSunSize * 0.72, sd);
        if (uStripes > 0.5) {
          float sy = dir.y - normalize(uSunDir).y;
          float cut = step(0.5, fract(sy * 120.0 + 0.2)) ;
          float band = smoothstep(0.02, -0.12, sy);
          sunMask *= mix(1.0, cut, band);
          vec3 sunCol = mix(vec3(1.0, 0.82, 0.25), vec3(1.0, 0.18, 0.55), smoothstep(0.08, -0.12, sy));
          base += sunCol * sunMask * 1.05;
        } else {
          base = mix(base, uSunColor * 1.15, sunMask * (1.0 - uAltitude * 0.8));
        }
        float halo = pow(sd, 6.0) * 0.28 + pow(sd, 48.0) * 0.55;
        base += uSunColor * halo * uSunGlow * (1.0 - uAltitude * 0.7);
        // stars appear with altitude and with a high sky
        float starFade = uStars * smoothstep(0.2, 0.8, uAltitude) * smoothstep(0.0, 0.35, h);
        if (starFade > 0.0) {
          vec3 g = floor(dir * 190.0);
          float r = hash(g);
          float on = step(0.9965, r);
          float tw = 0.55 + 0.45 * sin(uTime * (1.2 + r * 3.0) + r * 60.0);
          base += vec3(1.0, 0.96, 0.85) * on * tw * starFade * 1.6;
        }
        gl_FragColor = vec4(base * uDim, 1.0);
      }
    `}),l=new ne(new St(9e3,48,24),a);return l.frustumCulled=!1,l.renderOrder=-100,{mesh:l,material:a}}function zf(s,e,{boxes:t=[]}={}){let i=new Mi,n=new ne(new St(50,32,16),new dt({side:kt,uniforms:{top:{value:Je(e.skyZenith)},mid:{value:Je(e.skyMid)},bottom:{value:Je(e.ground)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:"varying vec3 vP; uniform vec3 top, mid, bottom; void main(){ float h = vP.y; vec3 c = h > 0. ? mix(mid, top, smoothstep(0., .9, h)) : mix(mid, bottom, smoothstep(0., -.7, h)); gl_FragColor = vec4(c, 1.); }"}));i.add(n);for(let a of t){let l=new ne(new Tt(a.w,a.h),new mt({color:Je(a.color).multiplyScalar(a.intensity||4),side:yt}));l.position.set(...a.pos),l.lookAt(0,0,0),i.add(l)}let r=new hn(s),o=r.fromScene(i,.035);return r.dispose(),n.geometry.dispose(),n.material.dispose(),i.traverse(a=>{a.isMesh&&a!==n&&(a.geometry.dispose(),a.material.dispose())}),o.texture}function i3(s,e,t=1024){let i=document.createElement("canvas");i.width=i.height=t;let n=i.getContext("2d"),r=t/2,o=t/2-4,a=(c,h)=>[r+Math.cos(h)*c*o,r+Math.sin(h)*c*o];if(s==="paper"){n.fillStyle=e.plinth,n.fillRect(0,0,t,t);let c=n.createRadialGradient(r,r,0,r,r,o);c.addColorStop(0,"rgba(255,255,255,.55)"),c.addColorStop(1,"rgba(120,90,40,.10)"),n.fillStyle=c,n.fillRect(0,0,t,t),n.strokeStyle=e.teal,n.globalAlpha=.55;for(let u of[.25,.5,.75])n.lineWidth=2.2,n.beginPath(),n.arc(r,r,u*o,0,Qe),n.stroke();n.lineWidth=1.4,n.beginPath(),n.arc(r,r,.12*o,0,Qe),n.stroke(),n.globalAlpha=1,n.strokeStyle=e.ink;for(let u=0;u<360;u+=5){let d=u*Math.PI/180,f=u%45===0,p=u%15===0,[g,m]=a(.935,d),[x,_]=a(f?.86:p?.895:.915,d);n.lineWidth=f?4:p?2.6:1.6,n.globalAlpha=f?.9:.6,n.beginPath(),n.moveTo(g,m),n.lineTo(x,_),n.stroke()}n.globalAlpha=1,n.strokeStyle=e.amber,n.lineWidth=8,n.beginPath(),n.arc(r,r,o*.97,0,Qe),n.stroke(),n.strokeStyle=e.ink,n.globalAlpha=.55,n.lineWidth=2,n.beginPath(),n.moveTo(r-o*.1,r),n.lineTo(r+o*.1,r),n.moveTo(r,r-o*.1),n.lineTo(r,r+o*.1),n.stroke(),n.globalAlpha=.8,n.fillStyle=e.ink,n.font=`700 ${t*.034}px Fraunces, serif`,n.textAlign="center",n.textBaseline="middle";for(let[u,d]of[["0",0],["90",Math.PI/2],["180",Math.PI],["270",-Math.PI/2]]){let[f,p]=a(.8,d);n.fillText(u,f,p)}let h=Nt(11);n.globalAlpha=.05;for(let u=0;u<700;u+=1)n.fillStyle=h()>.5?"#6b5a3a":"#ffffff",n.fillRect(h()*t,h()*t,1+h()*2,1+h()*2)}else if(s==="sunset"){n.fillStyle="#10062a",n.fillRect(0,0,t,t),n.strokeStyle="#FF4FD8",n.shadowColor="#FF4FD8",n.shadowBlur=10,n.lineWidth=3;for(let c=1;c<=6;c+=1)n.beginPath(),n.arc(r,r,c/6*o*.96,0,Qe),n.stroke();n.strokeStyle="#2EC4B6",n.shadowColor="#2EC4B6";for(let c=0;c<24;c+=1){let h=c/24*Qe;n.beginPath(),n.moveTo(r,r),n.lineTo(...a(.96,h)),n.stroke()}n.shadowBlur=0,n.strokeStyle=e.amber,n.lineWidth=10,n.beginPath(),n.arc(r,r,o*.985,0,Qe),n.stroke()}else{let c=n.createRadialGradient(r,r,0,r,r,o);c.addColorStop(0,"#2447C9"),c.addColorStop(.7,"#0B1B5C"),c.addColorStop(1,"#050C26"),n.fillStyle=c,n.fillRect(0,0,t,t),n.strokeStyle=e.amber,n.globalAlpha=.9;for(let h=0;h<36;h+=1){let u=h/36*Qe;n.lineWidth=h%3===0?5:2,n.globalAlpha=h%3===0?.85:.35,n.beginPath(),n.moveTo(...a(.2,u)),n.lineTo(...a(.94,u)),n.stroke()}n.globalAlpha=1,n.lineWidth=6;for(let h of[.2,.58,.97])n.beginPath(),n.arc(r,r,h*o,0,Qe),n.stroke();n.fillStyle=e.amber,n.beginPath(),n.arc(r,r,.05*o,0,Qe),n.fill()}let l=new si(i);return l.colorSpace=Et,l.anisotropy=8,l.generateMipmaps=!0,l.minFilter=Zi,l}function kf(s,e,t=250){let i=new ue,n=[[0,-70],[t+64,-70],[t+64,-42],[t+58,-36],[t+22,-30],[t+18,-20],[t+10,-11],[t+4,-5],[t,0],[0,0]].map(([u,d])=>new Q(u,d)),r=s==="primetime"?new Jt({color:e.plinth,roughness:.18,metalness:.5,clearcoat:1,envMapIntensity:1.3}):s==="sunset"?new Xe({color:e.plinth,roughness:.6,metalness:.1,emissive:"#3a0f66",emissiveIntensity:.5}):new Xe({color:"#EADFC8",roughness:.82,metalness:0}),o=new ne(new En(n,128),r);o.receiveShadow=!0,o.castShadow=!1,i.add(o);let a=i3(s,e),l=s==="primetime"?new Jt({map:a,roughness:.2,metalness:.25,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.2}):s==="sunset"?new Xe({map:a,emissiveMap:a,emissive:"#ffffff",emissiveIntensity:.55,roughness:.7}):new Xe({map:a,roughness:.9,metalness:0}),c=new ne(new mi(t-2,128).rotateX(-Math.PI/2),l);c.position.y=.2,c.receiveShadow=!0,i.add(c);let h=new ne(new wt(t+1,2.6,10,160).rotateX(Math.PI/2),new Xe({color:e.plinthRim,emissive:e.plinthRim,emissiveIntensity:s==="paper"?0:1.2,roughness:.35,metalness:s==="paper"?0:.8}));return h.position.y=.4,i.add(h),i.userData.dispose=()=>{o.geometry.dispose(),r.dispose(),c.geometry.dispose(),l.dispose(),a.dispose(),h.geometry.dispose(),h.material.dispose()},i}function Gf(s,e,{y:t=-64,radius:i=8800}={}){let n=new ue,r=s==="primetime"?new Jt({color:e.floor,roughness:.22,metalness:.4,clearcoat:.6,envMapIntensity:.9}):s==="sunset"?new Xe({color:e.floor,roughness:.9,metalness:0}):new Xe({color:e.floor,roughness:.95,metalness:0}),o=new ne(new mi(i,96).rotateX(-Math.PI/2),r);o.position.y=t,o.receiveShadow=!0,n.add(o);let a=new dt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{uColor:{value:Je(e.floorLine)},uTime:{value:0},uCell:{value:s==="sunset"?90:48},uFade:{value:s==="sunset"?4200:2600},uStrength:{value:s==="paper"?.5:s==="sunset"?1.5:.35},uScroll:{value:s==="sunset"?1:0},uMajor:{value:s==="paper"?5:4},uScrollDir:{value:new Q(0,1)}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      varying vec3 vW; uniform vec3 uColor; uniform vec2 uScrollDir; uniform float uTime, uCell, uFade, uStrength, uScroll, uMajor;
      float line(vec2 p, float cell) {
        vec2 g = p / cell; vec2 d = abs(fract(g - 0.5) - 0.5) / fwidth(g);
        return 1.0 - min(min(d.x, d.y), 1.0);
      }
      void main() {
        vec2 p = vW.xz + uScrollDir * (uScroll * uTime * 70.0);
        float minor = line(p, uCell);
        float major = line(p, uCell * uMajor);
        float dist = length(vW.xz);
        float fade = smoothstep(uFade, 0.0, dist) * smoothstep(120.0, 420.0, dist);
        float a = (minor * 0.45 + major * 0.9) * fade * uStrength;
        if (a < 0.004) discard;
        gl_FragColor = vec4(uColor, a);
      }
    `});a.extensions={derivatives:!0};let l=new ne(new mi(i*.55,64).rotateX(-Math.PI/2),a);return l.position.y=t+.4,l.renderOrder=-20,n.add(l),n.userData.update=c=>{a.uniforms.uTime.value=c},n.userData.setViewYaw=c=>{a.uniforms.uScrollDir.value.set(Math.sin(c),Math.cos(c))},n.userData.dispose=()=>{o.geometry.dispose(),r.dispose(),l.geometry.dispose(),a.dispose()},n.userData.floorMesh=o,n}function Vf({count:s=260,box:e=[1200,900,900],color:t="#FFE7B8",size:i=5,speed:n=1,opacity:r=.7}={}){let o=Nt(33),a=new Float32Array(s*3),l=new Float32Array(s*2);for(let d=0;d<s;d+=1)a[d*3]=(o()-.5)*e[0],a[d*3+1]=(o()-.5)*e[1],a[d*3+2]=(o()-.5)*e[2],l[d*2]=o()*Qe,l[d*2+1]=.4+o()*1.2;let c=new ht;c.setAttribute("position",new Ht(a,3)),c.setAttribute("aSeed",new Ht(l,2));let h=new dt({transparent:!0,depthWrite:!1,blending:Vt,uniforms:{uTime:{value:0},uCenter:{value:new P},uBox:{value:new P(...e)},uColor:{value:Je(t)},uSize:{value:i},uScale:{value:800},uOpacity:{value:r},uSpeed:{value:n}},vertexShader:`
      attribute vec2 aSeed; uniform float uTime, uSize, uScale, uSpeed; uniform vec3 uCenter, uBox; varying float vA;
      void main() {
        vec3 p = position + vec3(sin(uTime * 0.21 * uSpeed + aSeed.x), sin(uTime * 0.33 * uSpeed + aSeed.x * 1.7) * 0.6 - uTime * 3.0 * uSpeed * 0.1, cos(uTime * 0.17 * uSpeed + aSeed.x * 2.3)) * 34.0 * aSeed.y;
        p = uCenter + mod(p - uCenter + uBox * 0.5, uBox) - uBox * 0.5;
        vec4 mv = viewMatrix * vec4(p, 1.0);
        float tw = 0.55 + 0.45 * sin(uTime * 1.3 + aSeed.x * 9.0);
        vA = tw * smoothstep(1400.0, 300.0, -mv.z) * smoothstep(0.0, 180.0, -mv.z);
        gl_PointSize = max(1.0, uSize * aSeed.y * uScale / max(1.0, -mv.z));
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform vec3 uColor; uniform float uOpacity; varying float vA;
      void main() { float d = length(gl_PointCoord - 0.5) * 2.0; float a = (1.0 - smoothstep(0.0, 1.0, d)); a *= a; gl_FragColor = vec4(uColor, a * vA * uOpacity); }
    `}),u=new rs(c,h);return u.frustumCulled=!1,u.renderOrder=6,u.userData.dispose=()=>{c.dispose(),h.dispose()},u}function Wf(s=1){let e=Nt(s*31+7),t=[],i=4+Math.floor(e()*3);for(let a=0;a<i;a+=1){let l=i===1?0:a/(i-1),c=1-Math.abs(l-.5)*2;t.push({x:(l-.5)*3.2+(e()-.5)*.2,r:.5+c*.5+e()*.18})}let n=new Xi,r=t[0].x-t[0].r*.92,o=t[i-1].x+t[i-1].r*.92;n.moveTo(r,0);for(let a=0;a<=90;a+=1){let l=r+(o-r)*a/90,c=0;for(let h of t){let u=(l-h.x)/h.r;Math.abs(u)<1&&(c=Math.max(c,Math.sqrt(1-u*u)*h.r))}n.lineTo(l,c*.9)}return n.lineTo(o,0),n.closePath(),n}function eu({width:s=6e3,base:e=-200,amp:t=160,freq:i=.0012,seed:n=1,step:r=40,bottom:o=-900}){let a=new Xi;a.moveTo(-s/2,o);for(let l=-s/2;l<=s/2;l+=r)a.lineTo(l,e+Bf(l*i,n,4)*t+(Math.abs(l)/s)**2*t*1.4);return a.lineTo(s/2,o),a.closePath(),new to(a)}function Do(s,e=!1){let t=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new ht;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Xf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let g=0;g<o[h].length;++g)f.push(o[h][g][d]);let p=Xf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Xf(s){let e,t,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ht(o,t,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let g=h.getComponent(d,p);a.setComponent(d+u,p,g)}}else o.set(h.array,l);l+=h.count*t}return n!==void 0&&(a.gpuType=n),a}var Yf=104,Zf=14,ur=Yf*Zf;function n3(s){let e=[];if(s==="sunset"){let i=new gt(18,28,11);i.translate(0,14,0);let n=new gt(15,15,15);n.translate(0,36,0);let r=new gt(5,20,6);r.translate(-12,18,0);let o=new gt(5,20,6);o.translate(12,18,0),e.push(i,n,r,o)}else if(s==="primetime"){let i=new Sn(10,22,4,10);i.translate(0,21,0);let n=new St(10.5,14,10);n.translate(0,47,0),e.push(i,n)}else{let i=[[0,0],[15,0],[15.5,4],[11,32],[7.5,43],[0,44]].map(([a,l])=>new Q(a,l)),n=new En(i,14),r=new St(11,16,12);r.translate(0,55,0);let o=new ri(8,13,12);o.translate(0,70,0),e.push(n,r,o)}let t=Do(e.map(i=>i.toNonIndexed?i.toNonIndexed():i),!1);for(let i of e)i.dispose();return t.computeVertexNormals(),t}function s3(s,e,t){if(s==="sunset")return new gt(e,6,t);if(s==="primetime"){let o=new gt(e,9,t),a=new gt(e+4,3,5);a.translate(0,2,t/2);let l=Do([o,a].map(c=>c.toNonIndexed()));return o.dispose(),a.dispose(),l}let i=new eo(1,3);i.scale(e/2,11,t/2+6);let n=i.attributes.position,r=Nt(e+t);for(let o=0;o<n.count;o+=1){let a=n.getX(o),l=n.getY(o),c=n.getZ(o),h=Math.sin(a*.045)*4+Math.sin(a*.11+c*.07)*3+r()*.3;n.setXYZ(o,a,l>0?l+h*.5:l*.45,c)}return i.computeVertexNormals(),i}var sc=class{constructor(e,t,{max:i=700,density:n=1}={}){this.theme=e,this.palette=t,this.group=new ue,this.centerY=0,this.excite=0,this.time=0,this.attention={x:0,z:0,amount:0,interest:0},this.ballotColors=hr[e]||hr.paper;let r=Nt(101),o=[],a=[];for(let g=0;g<Zf;g+=1)for(let m of[-1,1])for(let x of[0,1]){let _=m*(x===0?450+g%4*64:980+g%3*110)+(r()-.5)*24,M=x===0?-70-g%3*80:-520-g%2*120,y=g*Yf+(x?46:0),w=x?1.5:1;a.push({x:_,y,z:M,w:250*w,d:92*w});for(let T=0;T<2;T+=1)for(let v=0;v<(x?5:6);v+=1)o.push({x:_+(v-(x?2:2.5))*38*w+(r()-.5)*8,y:y+6*w,z:M+(T===0?16:-18)*w+(r()-.5)*6,s:w})}for(let g=o.length-1;g>0;g-=1){let m=Math.floor(r()*(g+1));[o[g],o[m]]=[o[m],o[g]]}this.slots=o.slice(0,i),this.count=this.slots.length,this.max=this.count;let l=this.count;this.seed=new Float32Array(l),this.speed=new Float32Array(l),this.raise=new Float32Array(l),this.target=new Float32Array(l),this.option=new Int8Array(l).fill(-1),this.key=new Float32Array(l),this.lean=new Float32Array(l),this.facing=new Float32Array(l);for(let g=0;g<l;g+=1)this.seed[g]=r()*Qe,this.speed[g]=1.2+r()*1.6,this.key[g]=r(),this.lean[g]=(r()-.5)*.12,this.facing[g]=(r()-.5)*.5;let c=e==="sunset"?new Xe({roughness:.8,flatShading:!0,emissive:"#ffffff",emissiveIntensity:.18}):e==="primetime"?new Xe({roughness:.6,metalness:.1,color:"#0a1233",emissive:"#16308a",emissiveIntensity:.25}):new Xe({roughness:.78,metalness:0});this.figures=new Vi(n3(e),c,l),this.figures.frustumCulled=!1,this.figures.instanceMatrix.setUsage(Ki);let h=e==="sunset"?["#FFC53D","#2EC4B6","#9B5DE5","#FF5964","#B983FF","#FF8FAB"]:e==="primetime"?["#1B3CAA","#16308f","#2447C9","#0f1f6b","#27399a","#3b2a7a"]:[t.amber,t.teal,t.blue,t.vermilion,t.violet,t.rose,"#EFE2C4"],u=new Se;for(let g=0;g<l;g+=1){let m=h[Math.floor(r()*h.length)%h.length];u.set(m),e==="paper"&&u.lerp(new Se("#F4EDDF"),.18+r()*.18),this.figures.setColorAt(g,u)}this.figures.instanceColor.needsUpdate=!0;let d=new gt(28,36,1.8);d.translate(0,18,0),this.cards=new Vi(d,new Xe({roughness:.5,metalness:.05,emissive:"#ffffff",emissiveIntensity:e==="paper"?.04:.55}),l),this.cards.frustumCulled=!1,this.cards.instanceMatrix.setUsage(Ki);for(let g=0;g<l;g+=1)this.cards.setColorAt(g,u.set("#ffffff"));this.cards.instanceColor.needsUpdate=!0;let f=new Map;this.shelfMeshes=[];for(let g of a){let m=`${g.w}|${g.d}`;f.has(m)||f.set(m,{geometry:s3(e,g.w,g.d),items:[]}),f.get(m).items.push(g)}let p=e==="sunset"?new Xe({color:"#2b1155",emissive:"#FF4FD8",emissiveIntensity:.55,roughness:.6}):e==="primetime"?new Xe({color:"#0b1b5c",roughness:.3,metalness:.6,emissive:"#FFC83D",emissiveIntensity:.1}):new Xe({color:"#FFF8EA",roughness:.95,emissive:"#FFF1D0",emissiveIntensity:.12});for(let{geometry:g,items:m}of f.values()){let x=new Vi(g,p,m.length);x.frustumCulled=!1,x.receiveShadow=!1,x.userData.items=m,this.shelfMeshes.push(x),this.group.add(x)}this.dummy=new Lt,this.dummy.rotation.order="YXZ",this.group.add(this.figures,this.cards),this.density=1,this.setDensity(n),this.ballot=null,this.ballotKey="",this.shelfMaterial=p,this.figMaterial=c}setDensity(e){this.density=e;let t=Math.max(40,Math.round(this.max*e));this.figures.count=t,this.cards.count=t,this.visible=t}setCenterY(e){this.centerY=e}setBallot(e){if(!e){this.ballot&&(this.ballot=null,this.ballotKey="");return}let t=`${e.voted.toFixed(2)}|${e.fractions.map(o=>o.toFixed(2)).join(",")}|${e.colors?e.colors.join(""):""}`;if(t===this.ballotKey)return;this.ballotKey=t,this.ballot=e;let i=e.colors||this.ballotColors,n=new Se,r=e.fractions.reduce((o,a)=>o+a,0)||1;for(let o=0;o<this.count;o+=1)if(this.key[o]<e.voted){let a=this.key[o]/Math.max(1e-4,e.voted),l=0,c=2;for(let h=0;h<3;h+=1)if(l+=e.fractions[h]/r,a<=l){c=h;break}this.target[o]=1,this.option[o]!==c&&(this.option[o]=c,this.cards.setColorAt(o,n.set(i[c])))}else this.target[o]=0;this.cards.instanceColor.needsUpdate=!0}clearBallot(){this.ballot=null,this.ballotKey="";for(let e=0;e<this.count;e+=1)this.target[e]=0}cheer(e=1){this.excite=Math.min(2.5,this.excite+e)}setAttention(e,t,i,n=0){let r=this.attention;r.x=e,r.z=t,r.amount=i,r.interest=n}update(e,t){this.time=t,this.excite=At(this.excite,0,1.6,e);let i=this.dummy,n=this.centerY,r=this.visible,o=this.attention,a=o.amount>.004,l=this.excite+o.interest*.55;for(let c=0;c<r;c+=1){let h=this.slots[c];this.raise[c]=At(this.raise[c],this.target[c],7+this.seed[c]%3,e);let u=n+lr(h.y-n+ur/2,ur)-ur/2,d=Math.sin(t*this.speed[c]+this.seed[c])*1.4*(1+l),f=Math.max(0,Math.sin(t*(7+this.speed[c])+this.seed[c]*3))*l*9,p=0,g=0,m=0;if(a){let y=o.x-h.x,w=o.z-h.z,T=Math.atan2(y,w);p=Fe(T,-.75,.75)*o.amount,g=o.amount*xi(1900,420,Math.hypot(y,w)),m=T}let x=this.facing[c]*(1-o.amount*.7)+p+Math.sin(t*.6+this.seed[c])*.12,_=g*.24*(.8+.2*Math.sin(t*2.1+this.seed[c]));i.position.set(h.x,u+d+f,h.z),i.rotation.set(_*Math.cos(m-x),x,this.lean[c]+Math.sin(t*2*this.speed[c]+this.seed[c])*.03*(1+l)-_*Math.sin(m-x)),i.scale.set(h.s,h.s*(1+g*.09),h.s),i.updateMatrix(),this.figures.setMatrixAt(c,i.matrix);let M=this.raise[c];if(M<.01)i.scale.setScalar(0);else{let y=44*h.s+M*18*h.s;i.position.set(h.x+12*h.s,u+d+f+y,h.z+8),i.rotation.set(0,this.facing[c]*.4,Math.sin(t*5+this.seed[c])*.1),i.scale.setScalar(h.s*(.3+.7*M))}i.updateMatrix(),this.cards.setMatrixAt(c,i.matrix)}this.figures.instanceMatrix.needsUpdate=!0,this.cards.instanceMatrix.needsUpdate=!0;for(let c of this.shelfMeshes){let h=c.userData.items;for(let u=0;u<h.length;u+=1){let d=h[u],f=n+lr(d.y-n+ur/2,ur)-ur/2;i.position.set(d.x,f-3,d.z),i.rotation.set(0,0,0),i.scale.setScalar(1),i.updateMatrix(),c.setMatrixAt(u,i.matrix)}c.instanceMatrix.needsUpdate=!0}}dispose(){this.figures.geometry.dispose(),this.figMaterial.dispose(),this.cards.geometry.dispose(),this.cards.material.dispose();for(let e of this.shelfMeshes)e.geometry.dispose();this.shelfMaterial.dispose()}};var qo=Math.PI*2,r3=.3,Jf=s=>s-r3*Math.sin(s),tu=s=>{let e=(s+Math.PI)%qo;return(e<0?e+qo:e)-Math.PI},rc=class{constructor({yawPerPixel:e=.0072,pitchPerPixel:t=.0044,minPitch:i=-.2,maxPitch:n=.9,friction:r=4.2,maxSpeed:o=7,flingWindow:a=.1,tapSlop:l=5}={}){Object.assign(this,{yawPerPixel:e,pitchPerPixel:t,minPitch:i,maxPitch:n,friction:r,maxSpeed:o,flingWindow:a,tapSlop:l}),this.yaw=0,this.pitch=0,this.vyaw=0,this.vpitch=0,this.dragging=!1,this.reduced=!1,this.touched=!1,this.samples=[],this.tween=null,this.lastX=0,this.lastY=0}get rotated(){return Math.abs(tu(this.yaw))>.02||Math.abs(this.pitch)>.02}get moving(){return this.dragging||!!this.tween||Math.abs(this.vyaw)>.012||Math.abs(this.vpitch)>.012}setReduced(e){this.reduced=!!e}begin(e,t,i){!Number.isFinite(e)||!Number.isFinite(t)||(this.dragging=!0,this.touched=!0,this.tween=null,this.vyaw=0,this.vpitch=0,this.lastX=e,this.lastY=t,this.samples.length=0,this.sample(i))}move(e,t,i,{pitch:n=!0}={}){if(!this.dragging||!Number.isFinite(e)||!Number.isFinite(t))return!1;let r=e-this.lastX,o=t-this.lastY;return this.lastX=e,this.lastY=t,this.yaw-=r*this.yawPerPixel,n&&(this.pitch=Fe(this.pitch+o*this.pitchPerPixel,this.minPitch,this.maxPitch)),this.sample(i),r!==0||o!==0}end(e){if(!this.dragging)return;this.dragging=!1,this.vyaw=0,this.vpitch=0;let t=this.samples[this.samples.length-1];if(!this.reduced&&t&&Number.isFinite(e)&&e-t.t<.06){let i=this.samples.find(r=>t.t-r.t<=this.flingWindow)||t,n=t.t-i.t;n>=.012&&(this.vyaw=Fe((t.yaw-i.yaw)/n,-this.maxSpeed,this.maxSpeed),this.vpitch=Fe((t.pitch-i.pitch)/n,-this.maxSpeed,this.maxSpeed))}this.samples.length=0}sample(e){if(Number.isFinite(e))for(this.samples.push({t:e,yaw:this.yaw,pitch:this.pitch});this.samples.length>2&&e-this.samples[0].t>.3;)this.samples.shift()}update(e){if(e>0){if(e=Math.min(e,.05),this.tween){let t=this.tween;t.t+=e;let i=Fe(t.t/t.dur),n=Po(i);this.yaw=t.fromYaw+(t.toYaw-t.fromYaw)*n,this.pitch=t.fromPitch+(t.toPitch-t.fromPitch)*n,i>=1&&(this.tween=null,this.yaw=tu(this.yaw));return}if(!this.dragging){if(this.vyaw||this.vpitch){this.yaw+=this.vyaw*e;let t=this.pitch+this.vpitch*e;this.pitch=Fe(t,this.minPitch,this.maxPitch),this.pitch!==t&&(this.vpitch=0);let i=Math.exp(-this.friction*e);this.vyaw*=i,this.vpitch*=i,Math.abs(this.vyaw)<.012&&(this.vyaw=0),Math.abs(this.vpitch)<.012&&(this.vpitch=0)}Math.abs(this.yaw)>qo&&(this.yaw=tu(this.yaw))}}}tweenTo(e,t,i=.6){this.dragging=!1,this.vyaw=0,this.vpitch=0;let n=Math.max(.001,this.reduced?i*.3:i);this.tween={t:0,dur:n,fromYaw:this.yaw,fromPitch:this.pitch,toYaw:e,toPitch:Fe(t,this.minPitch,this.maxPitch)}}reset(e=.9){!this.rotated&&!this.tween&&!this.dragging&&!this.vyaw&&!this.vpitch||this.tweenTo(Math.round(this.yaw/qo)*qo,0,e)}rotateBy(e,t=.5){let i=this.tween?this.tween.toYaw:this.yaw,n=this.tween?this.tween.toPitch:this.pitch;this.tweenTo(i+e,n,t)}snap(){this.yaw=0,this.pitch=0,this.vyaw=0,this.vpitch=0,this.tween=null,this.dragging=!1,this.samples.length=0}};function o3(s,e){let t=new ue,i=new Ei(Je(s.key),e==="paper"?2.3:e==="sunset"?2.4:3);i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.bias=-7e-4,i.shadow.normalBias=.6,i.shadow.radius=e==="paper"?5:2.5;let n=560;Object.assign(i.shadow.camera,{left:-n,right:n,top:n,bottom:-n,near:20,far:2600}),i.position.set(-420,640,760),i.target.position.set(0,0,0);let r=new wn(Je(s.fill),Je(s.ground),e==="paper"?.6:.85),o=new Ei(Je(s.rim),e==="paper"?.8:2.2);o.position.set(520,260,-640);let a=new Ei(Je(s.fill),e==="paper"?.35:.55);return a.position.set(120,120,900),t.add(i,i.target,r,o,a),{group:t,key:i,hemi:r,rim:o,front:a}}function a3(s,e,t){let i=Nt(3),n=new ue;n.name="decor",s.add(n);let r=[],o=[];e.hills.forEach((d,f)=>{let p=eu({width:9e3+f*1800,base:-150+f*40,amp:220-f*22,freq:85e-5+f*2e-4,seed:f*3+1,bottom:-1200}),g=new Xe({color:d,roughness:1,metalness:0,emissive:d,emissiveIntensity:.16,fog:!0}),m=new ne(p,g);m.position.set(0,-60-f*6,-1100-f*760),m.receiveShadow=!1,n.add(m),o.push(m),r.push(p,g)});let a=[1,2,3,4].map(d=>{let f=new bn(Wf(d),{depth:.22,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:2,curveSegments:6});return f.center(),f}),l=new Xe({color:"#FFFDF6",roughness:.95,emissive:"#FFF0D2",emissiveIntensity:.16,fog:!0}),c=[],h=3200;for(let d=0;d<30;d+=1){let f=new ne(a[d%4],l),p=-650-i()*2300,g=34+i()*60+-p*.022;f.userData={x:(i()-.5)*3600,y:i()*h,z:p,speed:4+i()*9,scale:g},f.scale.set(g,g,g*.5),f.castShadow=!1,f.receiveShadow=!1,n.add(f),c.push(f)}r.push(...a,l);let u=new ne(new mi(4200,48,0,Qe),new dt({transparent:!0,depthWrite:!1,side:yt,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:"varying vec2 vP; uniform float uTime; void main(){ float a = atan(vP.y, vP.x); float r = length(vP)/4200.; float s = smoothstep(.35,.5,.5+.5*sin(a*14.+uTime*.05)); gl_FragColor = vec4(1.,.93,.75, s*.1*(1.-r)*smoothstep(0.,.25,r)); }"}));return u.position.set(-1200,500,-3600),u.renderOrder=-50,n.add(u),r.push(u.geometry,u.material),{group:n,update({time:d,focusY:f,altitude:p,dim:g}){for(let m of c){let x=m.userData,_=lr(x.y-f*.62+h/2,h)-h/2;m.position.set(x.x+d*x.speed*.4,f+_,x.z),m.visible=!0}l.emissiveIntensity=.16*(1-p*.7),l.color.set("#FFFDF6").lerp(new Se("#7f8fb8"),Fe(p*1.2-.2,0,.85)),o.forEach((m,x)=>{m.position.y=-60-x*6-f*(.2+x*.09),m.material.emissiveIntensity=.16*(1-p*.8)*g}),u.material.uniforms.uTime.value=d,u.position.y=500+f*.3,u.material.opacity=1-p},dispose(){for(let d of r)d.dispose();s.remove(n)}}}function l3(s,e){let t=new ue;s.add(t);let i=[],n=[];[["#2a0b52","#FF4FD8"],["#1d0840","#7a3cff"],["#13052c","#2EC4B6"]].forEach(([h,u],d)=>{let f=eu({width:9e3,base:20+d*10,amp:520-d*120,freq:.0011+d*4e-4,seed:9+d*2,step:220,bottom:-1e3}),p=new mt({color:h,fog:!0}),g=new ne(f,p);g.position.set(0,-52,-2600+d*700);let m=[],x=f.attributes.position;for(let y=1;y<x.count;y+=1)x.getY(y)>-900&&x.getY(y)<2e3&&m.push(new P(x.getX(y),x.getY(y),.5));m.sort((y,w)=>y.x-w.x);let _=new ht().setFromPoints(m.filter((y,w)=>w%1===0)),M=new Wi({color:u,transparent:!0,opacity:.9,fog:!0});g.add(new Ys(_,M)),t.add(g),n.push(g),i.push(f,p,_,M)});let o=[],a=new ri(1,1.4,4,1,!0).toNonIndexed(),l=new On(new ri(1,1.4,4)),c=Nt(8);for(let h=0;h<16;h+=1){let u=new Wi({color:["#FF4FD8","#2EC4B6","#FFC53D","#9B5DE5"][h%4],transparent:!0,opacity:.85}),d=new yn(h%5===4?new On(new wt(1,.12,6,14)):l,u);d.userData={x:(c()-.5)*3600,y:c()*3e3,z:-700-c()*1500,s:36+c()*70,sp:.2+c()*.6,ph:c()*Qe},t.add(d),o.push(d),i.push(u)}return i.push(a,l),{group:t,update({time:h,focusY:u,altitude:d,dim:f}){n.forEach((p,g)=>{p.position.y=-52-u*(.22+g*.12)});for(let p of o){let g=p.userData;p.position.set(g.x,u*.55+lr(g.y-u*.4,3e3)-800+Math.sin(h*g.sp+g.ph)*24,g.z),p.rotation.set(h*g.sp*.7,h*g.sp,0),p.scale.setScalar(g.s)}},dispose(){for(let h of i)h.dispose();s.remove(t)}}}function c3(s,e){let t=new ue;s.add(t);let i=[],n=new ne(new mi(1500,96),new dt({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uGold:{value:Je(e.amber)},uBlue:{value:Je("#2447C9")}},vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`varying vec2 vP; uniform float uTime; uniform vec3 uGold, uBlue;
      void main(){
        float r = length(vP)/1500.; float a = atan(vP.y, vP.x);
        float rays = smoothstep(.0,.06, abs(sin(a*12.+uTime*.12))-.35);
        float ring = smoothstep(.02,.0,abs(r-.62))+smoothstep(.015,.0,abs(r-.9))*.8+smoothstep(.02,.0,abs(r-.3))*.6;
        vec3 c = mix(uBlue*.8, uGold, rays*.55+ring);
        float alpha = (1.-smoothstep(.85,1.,r))*(.1+rays*.16+ring*.22);
        gl_FragColor = vec4(c, alpha);
      }`}));n.position.set(0,520,-1400),t.add(n),i.push(n.geometry,n.material);let r=new ne(new Mt(2600,2600,2800,64,1,!0,Math.PI*.65,Math.PI*.7),new dt({side:kt,transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uGold:{value:Je(e.amber)},uCyan:{value:Je(e.teal)},uShift:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`varying vec2 vUv; varying vec3 vW; uniform float uTime, uShift; uniform vec3 uGold, uCyan;
      void main(){
        vec2 g = vec2(vUv.x * 150., (vUv.y*2800. + uShift*.6) / 34.);
        vec2 f = fract(g) - .5; float dotm = smoothstep(.42,.2,length(f));
        float chev = abs(sin((g.x*.12 + g.y*.5 + uTime*.7)));
        float band = smoothstep(.55,.95,chev);
        vec3 c = mix(uCyan, uGold, smoothstep(.2,.8,.5+.5*sin(g.y*.08 + uTime*.4)));
        float a = dotm * (.06 + band * .5) * smoothstep(0.,.5,vUv.y) ;
        gl_FragColor = vec4(c, a);
      }`}));r.position.set(0,600,-200),t.add(r),i.push(r.geometry,r.material);let o=[],a=new ri(1,1,32,1,!0);a.translate(0,-.5,0);let l=new dt({transparent:!0,depthWrite:!1,blending:Vt,side:yt,uniforms:{uColor:{value:Je("#FFF1CF")},uOpacity:{value:.05}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = position.y; vec4 mv = modelViewMatrix*vec4(position,1.); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying float vY; varying vec3 vN; varying vec3 vV; uniform vec3 uColor; uniform float uOpacity; void main(){ float fres = pow(abs(dot(vN,vV)),1.5); gl_FragColor = vec4(uColor, uOpacity * fres * (1.+vY) ); }"}),c=["#FFF1CF","#FFC83D","#4F7BFF","#FF7FA8","#35D0E8"];for(let g=0;g<7;g+=1){let m=l.clone();m.uniforms={uColor:{value:Je(c[g%c.length])},uOpacity:{value:.045+g%3*.01}};let x=new ne(a,m);x.scale.set(160,1900,160),x.userData={x:(g-3)*360,ph:g*1.3,sp:.35+g%3*.12},t.add(x),o.push(x),i.push(m)}i.push(a,l);let h=new Xe({color:"#0b1b5c",metalness:.85,roughness:.25,emissive:e.amber,emissiveIntensity:.06}),u=new ne(new gt(3400,22,22),h);t.add(u),i.push(u.geometry,h);let d=[],f=new St(7,10,8),p=new mt({color:e.amber});for(let g=0;g<28;g+=1){let m=new ne(f,p);m.position.set((g-13.5)*120,-16,14),u.add(m),d.push(m)}return i.push(f,p),{group:t,update({time:g,focusY:m,altitude:x}){n.material.uniforms.uTime.value=g,n.position.y=520+m*.82,n.rotation.z=g*.02,r.material.uniforms.uTime.value=g,r.position.y=600+m*.9,r.material.uniforms.uShift.value=m,u.position.set(0,m+760,-300),o.forEach(_=>{let M=_.userData;_.position.set(M.x,m+760,-300),_.rotation.z=Math.sin(g*M.sp+M.ph)*.5,_.rotation.x=Math.cos(g*M.sp*.8+M.ph)*.18}),d.forEach((_,M)=>{_.scale.setScalar(.7+.5*Math.max(0,Math.sin(g*4-M*.55)))})},dispose(){for(let g of i)g.dispose();s.remove(t)}}}function $f(s,e,{crowdDensity:t=1}={}){let i=e.palette,n=new ue;e.scene&&e.scene.environmentRotation&&(e.scene.environmentRotation.y=0);let r=o3(i,s);n.add(r.group);let o=Hf(i,s==="paper"?{stars:1,sunSize:.0035,sunDir:[-.42,.16,-1],sunColor:"#FFE2A8",sunGlow:.75}:s==="sunset"?{stars:1,stripedSun:!0,sunSize:.0042,sunDir:[.02,-.006,-1],sunColor:"#FF8C42",sunGlow:.16}:{stars:0,sunSize:0,sunDir:[0,.5,-1],sunColor:"#8CAEFF",sunGlow:.15});o.mesh.name="sky",n.add(o.mesh);let a=zf(e.renderer,i,{boxes:s==="primetime"?[{w:60,h:30,pos:[20,40,30],color:"#FFF1CF",intensity:6},{w:40,h:40,pos:[-40,10,-20],color:"#4F7BFF",intensity:3}]:s==="sunset"?[{w:50,h:30,pos:[0,10,-40],color:"#FF6B35",intensity:3},{w:40,h:20,pos:[-30,30,10],color:"#9B5DE5",intensity:2}]:[{w:55,h:28,pos:[-25,38,30],color:"#FFF4DC",intensity:4},{w:36,h:22,pos:[35,12,-10],color:"#CFE8EA",intensity:1.6}]}),l=kf(s,i);l.name="plinth",n.add(l);let c=Gf(s,i);c.name="ground",n.add(c);let h=Vf({count:s==="paper"?220:160,color:s==="paper"?"#FFE7B8":s==="sunset"?"#FF9BE8":"#BBD0FF",size:s==="paper"?5:4.2,opacity:s==="paper"?.8:.9});h.name="motes",n.add(h);let u=s==="paper"?a3(n,i):s==="sunset"?l3(n,i):c3(n,i),d=new sc(s,i,{max:520,density:t});d.group.name="crowd",n.add(d.group);let f=new Or(Je(i.fog),i.fogDensity),p=new Se,g=new Se,m={},x=1,_=0,M=r.key.intensity,y=r.hemi.intensity,w=r.rim.intensity,T=r.front.intensity;return{theme:s,root:n,lights:r,sky:o,plinth:l,ground:c,crowd:d,motes:h,envTexture:a,fog:f,palette:i,update({time:v,dt:S,focusY:I,altitude:R,dim:q=1,camera:D,shadowFocus:U=null,fogDist:C=1e3}){let B=o.material.uniforms;B.uAltitude.value=R,B.uTime.value=v,B.uDim.value=q,o.mesh.position.copy(D.position);let H=i.journey,O=Fe(R,0,1)*3,te=Math.min(2,Math.floor(O)),V=O-te;p.set(i.fog),g.set(H[te]).lerp(p.clone().set(H[Math.min(3,te+1)]),V),f.color.copy(p.set(i.fog).lerp(g,.12+.88*xi(.03,.4,R))).multiplyScalar(q),f.density=i.fogDensity/32e-5*.2884/Math.max(300,C)*(1+R*.5);let X=1-R*(s==="paper"?.62:.4);r.key.intensity=M*X*q,r.hemi.intensity=y*(.55+.45*X)*(.35+.65*q),r.rim.intensity=w*(1+R*.6)*q,r.front.intensity=T*q;let j=U||{x:0,y:I};r.key.target.position.set(j.x,j.y,0),r.key.position.set(j.x-420,j.y+640,760),r.key.target.updateMatrixWorld(),r.key.updateMatrixWorld(),c.userData.update(v),h.material.uniforms.uTime.value=v,h.material.uniforms.uCenter.value.set(0,I,0),h.material.uniforms.uScale.value=e.height*.9,u.update({time:v,dt:S,focusY:I,altitude:R,dim:q}),d.setCenterY(I),d.update(S,v),x=q},setCrowdDensity(v){d.setDensity(v)},setViewYaw(v){if(Math.abs(v-_)<1e-5)return;_=v;let S=Jf(v);r.group.rotation.y=v,d.group.rotation.y=v,u.group.rotation.y=S,o.mesh.rotation.y=S,c.userData.setViewYaw(v),e.scene&&e.scene.environmentRotation&&(e.scene.environmentRotation.y=v)},get viewYaw(){return _},dispose(){u.dispose(),d.dispose(),l.userData.dispose(),c.userData.dispose(),h.userData.dispose(),o.mesh.geometry.dispose(),o.material.dispose(),a.dispose(),r.key.shadow.map&&r.key.shadow.map.dispose()}}}var Fo=new P;function Ni(s,e,t,i,n,r){let o=2*Math.PI*n/4,a=Math.max(r-2*n,0),l=Math.PI/4;Fo.copy(e),Fo[i]=0,Fo.normalize();let c=.5*o/(o+a),h=1-Fo.angleTo(s)/l;return Math.sign(Fo[t])===1?h*c:a/(o+a)+c+c*(1-h)}var dr=class s extends gt{constructor(e=1,t=1,i=1,n=2,r=.1){let o=n*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:n,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,h=new P(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,g=new P,m=.5/o;for(let x=0,_=0;x<u.length;x+=3,_+=2)switch(l.fromArray(u,x),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[x+0]=h.x*Math.sign(l.x)+c.x*r,u[x+1]=h.y*Math.sign(l.y)+c.y*r,u[x+2]=h.z*Math.sign(l.z)+c.z*r,d[x+0]=c.x,d[x+1]=c.y,d[x+2]=c.z,Math.floor(x/p)){case 0:g.set(1,0,0),f[_+0]=Ni(g,c,"z","y",r,i),f[_+1]=1-Ni(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),f[_+0]=1-Ni(g,c,"z","y",r,i),f[_+1]=1-Ni(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),f[_+0]=1-Ni(g,c,"x","z",r,e),f[_+1]=Ni(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),f[_+0]=1-Ni(g,c,"x","z",r,e),f[_+1]=1-Ni(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),f[_+0]=1-Ni(g,c,"x","y",r,e),f[_+1]=1-Ni(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),f[_+0]=Ni(g,c,"x","y",r,e),f[_+1]=1-Ni(g,c,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};var Ai=22,Ut=21.2,_i=120,Ui=360,ys=null;function h3(){if(ys)return ys;let s=128,e=document.createElement("canvas");e.width=e.height=s;let t=e.getContext("2d"),i=t.createImageData(s,s),n=Nt(5);for(let r=0;r<s*s;r+=1){let o=r%s,a=Math.floor(r/s),l=.5+.18*Math.sin(o*.35+Math.sin(a*.11)*3)+(n()-.5)*.5,c=Math.max(0,Math.min(255,l*255));i.data[r*4]=i.data[r*4+1]=i.data[r*4+2]=c,i.data[r*4+3]=255}return t.putImageData(i,0,0),ys=new si(e),ys.wrapS=ys.wrapT=Os,ys.repeat.set(2,1),ys}function u3(s,e,t=5){let i=new Xi;for(let n=0;n<t*2;n+=1){let r=n%2===0?s:e,o=-Math.PI/2+n*Math.PI/t,a=Math.cos(o)*r,l=Math.sin(o)*r;n===0?i.moveTo(a,l):i.lineTo(a,l)}return i.closePath(),i}var fr=class{constructor(e="paper"){this.geometries=new Map,this.materials=new Map,this.edgeGeometries=new Map,this.star=new bn(u3(6.2,2.7),{depth:1.4,bevelEnabled:!0,bevelThickness:.5,bevelSize:.5,bevelSegments:1}),this.starMaterial=null,this.setTheme(e)}setTheme(e){this.theme=e,this.palette=vs(e);for(let t of this.materials.values())t.dispose();this.materials.clear();for(let t of this.geometries.values())t.dispose();this.geometries.clear();for(let t of this.edgeGeometries.values())t.dispose();this.edgeGeometries.clear(),this.starMaterial&&this.starMaterial.dispose(),this.starMaterial=new Xe({color:this.palette.ink,emissive:this.theme==="paper"?"#000000":this.palette.amber,emissiveIntensity:this.theme==="paper"?0:1.6,roughness:.5,metalness:this.theme==="primetime"?.6:0})}radius(e){let t=this.theme==="sunset"?0:this.theme==="primetime"?2.4:3.6;return Math.min(t,e/4,Ut/2-.2)}geometry(e,t=_i,i=Ut){let n=Math.max(2,Math.round(e/2)*2),r=`${n}|${t}|${i}`,o=this.geometries.get(r);return o||(o=this.theme==="sunset"?new gt(n,i,t):new dr(n,i,t,3,this.radius(n)),o.userData.quantWidth=n,this.geometries.set(r,o)),o}edges(e,t=_i,i=Ut){let n=Math.max(2,Math.round(e/2)*2),r=`${n}|${t}|${i}`,o=this.edgeGeometries.get(r);return o||(o=new On(new gt(n,i,t)),o.userData.quantWidth=n,this.edgeGeometries.set(r,o)),o}color(e){return _s(this.theme,e)}material(e,t="solid"){let i=this.color(e),n=`${i}|${t}`,r=this.materials.get(n);return r||(this.theme==="sunset"?r=new Xe({color:i,emissive:i,emissiveIntensity:.38,roughness:.78,metalness:.04,flatShading:!0}):this.theme==="primetime"?r=new Jt({color:i,roughness:.16,metalness:.1,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.4,emissive:i,emissiveIntensity:.06}):r=new Jt({color:i,roughness:.55,metalness:0,clearcoat:.3,clearcoatRoughness:.42,sheen:.6,sheenColor:new Se("#fff4dc"),sheenRoughness:.5,envMapIntensity:.9,bumpMap:h3(),bumpScale:.45}),t==="ghost"&&(r.transparent=!0,r.depthWrite=!1),t==="clipped"&&(r.clippingPlanes=[]),this.materials.set(n,r),r)}uniqueMaterial(e){return this.material(e).clone()}mesh(e,{depth:t=_i,shadow:i=!0}={}){let n=Math.max(1,e.right!=null?e.right-e.left:e.width),r=this.geometry(n,t),o=new ne(r,this.material(e.color));if(o.scale.x=n/r.userData.quantWidth,o.castShadow=i,o.receiveShadow=!0,this.theme==="sunset"){let a=new yn(this.edges(n,t),new Wi({color:this.palette.ink,transparent:!0,opacity:.85}));o.add(a),o.userData.edges=a}return o.userData.width=n,o}addPerfectStar(e,t){if(e.userData.star)return;let i=new ne(this.star,this.starMaterial);i.position.set(0,0,_i/2+.2),i.scale.setScalar(Math.min(1.1,t/60)),i.castShadow=!1,e.add(i),e.userData.star=i}dispose(){for(let e of this.materials.values())e.dispose();for(let e of this.geometries.values())e.dispose();for(let e of this.edgeGeometries.values())e.dispose();this.star.dispose(),this.starMaterial&&this.starMaterial.dispose()}};var oc=(s,e)=>[s[1]*e[2]-s[2]*e[1],s[2]*e[0]-s[0]*e[2],s[0]*e[1]-s[1]*e[0]],Kf=(s,e)=>s[0]*e[0]+s[1]*e[1]+s[2]*e[2],iu=s=>Math.hypot(s[0],s[1],s[2]);function d3(s){let e=Math.hypot(s[0],s[1],s[2],s[3])||1;s[0]/=e,s[1]/=e,s[2]/=e,s[3]/=e}function Qf(s){let[e,t,i,n]=s;return[1-2*(t*t+i*i),2*(e*t-i*n),2*(e*i+t*n),2*(e*t+i*n),1-2*(e*e+i*i),2*(t*i-e*n),2*(e*i-t*n),2*(t*i+e*n),1-2*(e*e+t*t)]}var jf=(s,e)=>[s[0]*e[0]+s[1]*e[1]+s[2]*e[2],s[3]*e[0]+s[4]*e[1]+s[5]*e[2],s[6]*e[0]+s[7]*e[1]+s[8]*e[2]],f3=(s,e)=>[s[0]*e[0]+s[3]*e[1]+s[6]*e[2],s[1]*e[0]+s[4]*e[1]+s[7]*e[2],s[2]*e[0]+s[5]*e[1]+s[8]*e[2]];function Lo({pos:s,half:e,vel:t=[0,0,0],angVel:i=[0,0,0],quat:n=[0,0,0,1],density:r=.0012,restitution:o=.32,friction:a=.55,life:l=1/0,data:c=null}){let[h,u,d]=e,f=8*h*u*d*r,p=f/12*((2*u)**2+(2*d)**2),g=f/12*((2*h)**2+(2*d)**2),m=f/12*((2*h)**2+(2*u)**2);return{pos:[...s],half:[...e],vel:[...t],angVel:[...i],quat:[...n],mass:f,invMass:1/f,invInertia:[1/p,1/g,1/m],restitution:o,friction:a,age:0,life:l,resting:0,asleep:!1,data:c}}var pr=class{constructor({gravity:e=-520,floorY:t=()=>0,linearDamping:i=.04,angularDamping:n=.35}={}){this.gravity=e,this.floorY=t,this.linearDamping=i,this.angularDamping=n,this.bodies=[]}add(e){return this.bodies.push(e),e}remove(e){let t=this.bodies.indexOf(e);t>=0&&this.bodies.splice(t,1)}clear(){this.bodies.length=0}step(e){let t=Math.max(1,Math.ceil(e/.008333333333333333)),i=e/t;for(let n=0;n<t;n+=1)for(let r of this.bodies)r.asleep||this.integrate(r,i);for(let n of this.bodies)n.age+=e}corners(e){let t=Qf(e.quat),i=[];for(let n=-1;n<=1;n+=2)for(let r=-1;r<=1;r+=2)for(let o=-1;o<=1;o+=2){let a=[n*e.half[0],r*e.half[1],o*e.half[2]];i.push(jf(t,a))}return i}integrate(e,t){e.vel[1]+=this.gravity*t;let i=Math.max(0,1-this.linearDamping*t),n=Math.max(0,1-this.angularDamping*t);for(let u=0;u<3;u+=1)e.vel[u]*=i,e.angVel[u]*=n,e.pos[u]+=e.vel[u]*t;let[r,o,a]=e.angVel,l=e.quat,c=[.5*(r*l[3]+o*l[2]-a*l[1]),.5*(o*l[3]+a*l[0]-r*l[2]),.5*(a*l[3]+r*l[1]-o*l[0]),.5*(-r*l[0]-o*l[1]-a*l[2])];l[0]+=c[0]*t,l[1]+=c[1]*t,l[2]+=c[2]*t,l[3]+=c[3]*t,d3(l),this.collideFloor(e);let h=iu(e.vel)+iu(e.angVel)*Math.max(...e.half);e.resting=h<14&&e.pos[1]-e.half[1]<this.floorY(e.pos[0],e.pos[2])+Math.max(...e.half)*1.6?e.resting+t:0,e.resting>.7&&(e.asleep=!0,e.vel=[0,0,0],e.angVel=[0,0,0])}invInertiaWorld(e,t){let i=Qf(e.quat),n=f3(i,t);return jf(i,[n[0]*e.invInertia[0],n[1]*e.invInertia[1],n[2]*e.invInertia[2]])}collideFloor(e){let t=[0,1,0],i=0;for(let n=0;n<3;n+=1)for(let r of this.corners(e)){let o=e.pos[0]+r[0],a=e.pos[1]+r[1],l=e.pos[2]+r[2],c=this.floorY(o,l)-a;if(c<=0)continue;i=Math.max(i,c);let h=[e.vel[0]+e.angVel[1]*r[2]-e.angVel[2]*r[1],e.vel[1]+e.angVel[2]*r[0]-e.angVel[0]*r[2],e.vel[2]+e.angVel[0]*r[1]-e.angVel[1]*r[0]],u=h[1];if(u>=0)continue;let d=oc(r,t),f=e.invMass+Kf(oc(this.invInertiaWorld(e,d),r),t),g=-(1+(u<-90?e.restitution:0))*u/f;e.vel[1]+=g*e.invMass;let m=this.invInertiaWorld(e,d);e.angVel[0]+=m[0]*g,e.angVel[1]+=m[1]*g,e.angVel[2]+=m[2]*g;let x=[h[0],0,h[2]],_=iu(x);if(_>.001){let M=[x[0]/_,0,x[2]/_],y=oc(r,M),w=e.invMass+Kf(oc(this.invInertiaWorld(e,y),r),M),T=Math.min(_/w,e.friction*g);e.vel[0]-=M[0]*T*e.invMass,e.vel[2]-=M[2]*T*e.invMass,m=this.invInertiaWorld(e,y),e.angVel[0]-=m[0]*T,e.angVel[1]-=m[1]*T,e.angVel[2]-=m[2]*T}}i>0&&(e.pos[1]+=i*.85)}settle(e=3,t=1/60){for(let i=0;i<e;i+=t)this.step(t)}};function ac({plinthRadius:s=250,ground:e=-64}={}){return(t,i)=>{let n=Math.hypot(t,i);return n<=s?0:n>=s+22?e:e*((n-s)/22)}}var Pn=s=>s*Ai+Ai/2,Zn=s=>s-Ui/2,qt=_i/2+.6,Uo=(s,e=1.7)=>Je(s).multiplyScalar(e);function Ri(s,e=1){return new mt({color:Uo(s),transparent:!0,opacity:e,blending:Vt,depthWrite:!1,side:yt,toneMapped:!1})}var tp="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",p3=`varying vec2 vUv; uniform vec3 uColor; uniform float uTime, uDash, uSpeed, uOpacity;
  void main(){
    float d = fract(vUv.x * uDash - uTime * uSpeed);
    float a = smoothstep(0.0, 0.18, d) * smoothstep(0.78, 0.5, d);
    a *= smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.7, vUv.y);
    gl_FragColor = vec4(uColor, a * uOpacity);
  }`;function lc(s,{dash:e=14,speed:t=1.4,opacity:i=1}={}){return new dt({transparent:!0,depthWrite:!1,blending:Vt,side:yt,toneMapped:!1,uniforms:{uColor:{value:Uo(s,1.9)},uTime:{value:0},uDash:{value:e},uSpeed:{value:t},uOpacity:{value:i}},vertexShader:tp,fragmentShader:p3})}var mr=class{constructor(e,t,i){this.count=e,this.width=t,this.positions=new Float32Array(e*6);let n=new Float32Array(e*4),r=[];for(let a=0;a<e;a+=1){let l=a/(e-1);if(n.set([l,0,l,1],a*4),a<e-1){let c=a*2;r.push(c,c+1,c+2,c+1,c+3,c+2)}}let o=new ht;o.setAttribute("position",new Ht(this.positions,3).setUsage(Ki)),o.setAttribute("uv",new Ht(n,2)),o.setIndex(r),this.mesh=new ne(o,i),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7}set(e,t=0){let i=this.count,n=this.positions,r=[];for(let o=0;o<i;o+=1)r.push(e(o/(i-1)));for(let o=0;o<i;o+=1){let a=r[Math.max(0,o-1)],l=r[Math.min(i-1,o+1)],c=l[0]-a[0],h=l[1]-a[1],u=Math.hypot(c,h)||1;c/=u,h/=u;let d=-h*this.width/2,f=c*this.width/2;n.set([r[o][0]+d,r[o][1]+f,t,r[o][0]-d,r[o][1]-f,t],o*6)}this.mesh.geometry.attributes.position.needsUpdate=!0}dispose(){this.mesh.geometry.dispose()}};function ep(s,e,t=256,i=64,n=5){let r=document.createElement("canvas");r.width=t,r.height=i;let o=r.getContext("2d");o.strokeStyle=s,o.lineWidth=n,o.lineCap="round",o.lineJoin="round";for(let l of e)o.beginPath(),l.forEach(([c,h],u)=>u?o.lineTo(c*t,h*i):o.moveTo(c*t,h*i)),o.stroke();let a=new si(r);return a.colorSpace=Et,a}var cc=class{constructor(e){this.tower=e,this.group=new ue,this.group.name="effects",e.body.add(this.group),this.kit=e.kit,this.currentId="",this.built=new Map,this.active=null,this.clock=0,this.sparkTimer=0,this.spot=null,this.mover=null}get palette(){return this.kit.palette}setKit(e){this.kit=e;for(let t of this.built.values())this.group.remove(t.group),t.dispose();this.built.clear(),this.active=null,this.currentId=""}attachMover(e){this.mover=e;for(let t of this.built.values())t.attach&&t.attach(e)}update(e,t,i,n){let r=e.effect,o=r?r.id:"";if(this.spot=null,o!==this.currentId&&(this.active&&(this.active.group.visible=!1,this.active.off&&this.active.off(t)),this.currentId=o,this.active=null,o&&nu[o])){if(!this.built.has(o)){let c=nu[o](this);c.group.visible=!1,this.group.add(c.group),this.built.set(o,c),c.attach&&this.mover&&c.attach(this.mover)}this.active=this.built.get(o),this.active.group.visible=!0,this.active.t0=n,this.active.on&&this.active.on(t)}if(!this.active)return;let a=e.blocks||[],l=a[a.length-1]||null;this.active.update({state:e,effect:r,mover:t,below:l,moving:e.moving,dt:i,time:n,rig:this,tower:this.tower,helpers:e.helpers,reduced:this.tower.reduced})}emit(e,t){let i=this.tower.fx&&this.tower.fx.sparks;if(!i)return;let n=this.tower.root.localToWorld(e.clone());i.emit({pos:[n.x,n.y,n.z],...t})}dispose(){for(let e of this.built.values())e.dispose();this.built.clear(),this.tower.body.remove(this.group)}},Jn=(s=0,e=0,t=0)=>new P(s,e,t),No=s=>xs(s),nu={turbo(s){let e=new ue,t=s.palette,i=[],n=new Tt(1,1);for(let r=0;r<4;r+=1){let o=new ne(n,Ri(r%2?t.amber:t.vermilion,.8));e.add(o),i.push(o)}return{group:e,update({moving:r,mover:o,time:a,reduced:l}){if(e.visible=!!(o&&r&&o.visible),!e.visible)return;let c=Number(r.direction)<0?-1:1,h=o.userData.drawnWidth;i.forEach((u,d)=>{let f=(46+d*20+Math.sin(a*40+d*7)*14)*(l?.6:1);u.scale.set(f,1.7,1),u.position.set(o.position.x-c*(h/2+f/2+3),o.position.y+(d-1.5)*4.6,qt)}),!l&&Math.random()<.7&&s.emit(Jn(o.position.x-c*h/2,o.position.y+(Math.random()-.5)*12,qt),{vel:[-c*(90+Math.random()*110),(Math.random()-.5)*60,40],color:No(Math.random()>.5?t.amber:t.vermilion),size:5,life:.45,drag:2,gravity:0})},dispose(){n.dispose(),i.forEach(r=>r.material.dispose())}}},drunk(s){let e=new ue,t=s.palette,i=new mr(28,3,lc(t.rose,{dash:6,speed:.8,opacity:.9}));return e.add(i.mesh),{group:e,update({mover:n,time:r,moving:o,reduced:a}){if(e.visible=!!(n&&n.visible),!e.visible)return;let l=n.userData.drawnWidth,c=n.position.x,h=n.position.y+Ut/2+9;i.mesh.material.uniforms.uTime.value=r,i.set(u=>[c-l/2+u*l,h+Math.sin(u*Qe*2+r*6)*4.5],qt+4),!a&&Math.random()<.25&&s.emit(Jn(c+(Math.random()-.5)*l,h,qt),{vel:[(Math.random()-.5)*30,40+Math.random()*40,20],color:No(t.rose),size:8,life:1.1,drag:.8,gravity:30,growth:6,alpha:.7})},dispose(){i.dispose(),i.mesh.material.dispose()}}},slowmo(s){let e=new ue,t=s.palette,i=new ne(new wt(1,.05,8,64),Ri(t.blue,.9));e.add(i);let n=new ne(new Tt(.06,.8).translate(0,.4,0),Ri(t.amber,1));i.add(n);let r=new ue;i.add(r);for(let o=0;o<12;o+=1){let a=new ne(new Tt(.05,o%3?.1:.18),Ri(t.blue,.8)),l=o/12*Qe;a.position.set(Math.sin(l)*.9,Math.cos(l)*.9,0),a.rotation.z=-l,r.add(a)}return{group:e,update({mover:o,time:a,effect:l,reduced:c}){if(e.visible=!!(o&&o.visible),!e.visible)return;let h=34;i.scale.set(h,h,h),i.position.set(o.position.x,o.position.y+4,qt+2),n.rotation.z=c?0:-((l.elapsed||0)*.55),r.rotation.z=0,i.material.opacity=.55+.35*Math.sin(a*2)},dispose(){i.geometry.dispose(),i.material.dispose(),n.geometry.dispose(),n.material.dispose(),r.children.forEach(o=>{o.geometry.dispose(),o.material.dispose()})}}},magnet(s){let e=new ue,t=s.palette,i=[0,1,2].map(l=>new mr(24,2.2,lc(t.teal,{dash:9,speed:-1.6-l*.2,opacity:.95})));i.forEach(l=>e.add(l.mesh));let n=new ue,r=new Xe({color:t.vermilion,roughness:.35,metalness:.5,emissive:t.vermilion,emissiveIntensity:.15}),o=new ne(new wt(15,5,10,28,Math.PI),r);o.rotation.z=0,n.add(o);let a=new Xe({color:"#f4f4f4",roughness:.3,metalness:.8});for(let l of[-1,1]){let c=new ne(new gt(10,11,10),a);c.position.set(l*15,-5,0),n.add(c)}return n.rotation.x=Math.PI,e.add(n),n.scale.setScalar(1.1),{group:e,update({mover:l,below:c,moving:h,time:u,reduced:d}){if(e.visible=!!(l&&l.visible&&c),!e.visible)return;let f=l.position.x,p=l.position.y,g=Zn((c.left+c.right)/2),m=Pn(c.level)+Ut/2+2;i.forEach((x,_)=>{x.mesh.material.uniforms.uTime.value=u;let M=(_-1)*7;x.set(y=>{let w=f+M+(g+M-f-M)*y,T=p-Ut/2+(m-p+Ut/2)*y-Math.sin(y*Math.PI)*(11+_*4);return[w,T]},qt+2)}),n.position.set(f,p+34+(d?0:Math.sin(u*3)*3),qt),n.rotation.y=d?0:Math.sin(u*1.4)*.35,!d&&Math.random()<.3&&s.emit(Jn(f+(Math.random()-.5)*30,p-6,qt),{vel:[(g-f)*.6,-30,10],color:No(t.teal),size:4,life:.5,drag:2})},dispose(){i.forEach(l=>{l.dispose(),l.mesh.material.dispose()}),o.geometry.dispose(),r.dispose(),a.dispose(),n.children.forEach(l=>l.geometry&&l.geometry.dispose())}}},portal(s){let e=new ue,t=s.palette,i=a=>new dt({transparent:!0,depthWrite:!1,blending:Vt,side:yt,toneMapped:!1,uniforms:{uTime:{value:0},uA:{value:Uo(t.teal,1.7)},uB:{value:Uo(t.amber,1.7)},uDir:{value:1}},vertexShader:tp,fragmentShader:`varying vec2 vUv; uniform vec3 uA, uB; uniform float uTime, uDir;
        void main(){
          float edge = 1.0 - abs(vUv.x - 0.5) * 2.0;
          float swirl = sin(vUv.y * 38.0 + uDir * uTime * 5.0 + sin(vUv.x * 9.0 + uTime) * 2.0) * 0.5 + 0.5;
          float fade = smoothstep(0.0, 0.18, vUv.y) * smoothstep(1.0, 0.82, vUv.y);
          float core = smoothstep(0.55, 1.0, edge);
          vec3 c = mix(uA, uB, swirl);
          gl_FragColor = vec4(c, (0.18 + swirl * 0.4) * (0.35 + core * 0.65) * fade);
        }`}),n=[-1,1].map(a=>{let l=new ne(new Tt(26,1),i(a));return e.add(l),l}),r=[],o=new wt(1,.1,6,26);for(let a=0;a<12;a+=1){let l=new ne(o,Ri(t.amber,.75));l.scale.set(4,11,4),l.rotation.y=Math.PI/2,e.add(l),r.push(l)}return{group:e,update({moving:a,mover:l,effect:c,time:h,state:u}){let d=a?a.level:u.blocks.length||1,f=Pn(d),p=380,g=Number(c.windDirection)<0?-1:1;n.forEach((m,x)=>{m.scale.y=p,m.position.set((x?1:-1)*(Ui/2-4),f+40,0),m.material.uniforms.uTime.value=h,m.material.uniforms.uDir.value=g*(x?-1:1)}),r.forEach((m,x)=>{let _=x%2?1:-1,M=Math.floor(x/2),y=f-190+((M*66+h*20*g*_)%400+400)%400;m.position.set(_*(Ui/2-4+(_>0?2:-2)*0),y,0),m.rotation.y=Math.PI/2,m.rotation.z=h*.6*_})},dispose(){n.forEach(a=>{a.geometry.dispose(),a.material.dispose()}),r.forEach(a=>a.material.dispose()),o.dispose()}}},rollercoaster(s){let e=new ue,t=s.palette,i=new mr(40,3,lc(t.teal,{dash:20,speed:.6,opacity:.9}));e.add(i.mesh);let n=new Mt(4.2,4.2,3,14);n.rotateX(Math.PI/2);let r=new Xe({color:t.ink,roughness:.4,metalness:.6}),o=[0,1].map(()=>{let a=new ne(n,r);return a.castShadow=!0,e.add(a),a});return{group:e,update({mover:a,time:l,below:c,moving:h,reduced:u}){if(e.visible=!!(a&&a.visible),!e.visible)return;let d=Pn(h.level)-Ut/2-9;i.mesh.material.uniforms.uTime.value=l,i.set(p=>[Zn(p*Ui),d+Math.sin(p*14+l*3)*9],qt);let f=a.userData.drawnWidth;o.forEach((p,g)=>{p.position.set(a.position.x+(g?1:-1)*f*.34,a.position.y-Ut/2-3,qt-6),p.rotation.z=-l*6*(Number(h.direction)||1)})},dispose(){i.dispose(),i.mesh.material.dispose(),n.dispose(),r.dispose()}}},pisa(s){return{group:new ue,update({effect:t,tower:i,time:n,reduced:r}){if(r||Math.random()>.12)return;let o=(Math.random()<.5?-1:1)*(60+Math.random()*120);s.emit(Jn(o,2,qt),{vel:[(Math.random()-.5)*40,28+Math.random()*30,20],color:[.8,.74,.6],size:14,life:1.1,drag:1.4,growth:14,alpha:.35})},dispose(){}}},earthquake(s){let e=new ue,t=s.palette,i=[];for(let n=0;n<6;n+=1){let r=new mr(14,3.4,lc(t.vermilion,{dash:3,speed:.4,opacity:1})),o=n/6*Qe+.4,a=n*1.7;r.angle=o,r.seed=a,r.mesh.rotation.x=-Math.PI/2,r.mesh.position.y=1.2,e.add(r.mesh),i.push(r)}return{group:e,update({effect:n,time:r,reduced:o}){let a=Fe((n.elapsed||0)/.5)*Fe((n.remaining??5)/.8);if(i.forEach(l=>{l.mesh.material.uniforms.uTime.value=r,l.mesh.material.uniforms.uOpacity.value=a,l.set(c=>{let h=20+c*220,u=l.angle+Math.sin(c*9+l.seed)*.16;return[Math.cos(u)*h,-Math.sin(u)*h]},0)}),!o&&Math.random()<.5){let l=Math.random()*Qe,c=160+Math.random()*110;s.emit(Jn(Math.cos(l)*c,2,Math.sin(l)*c*.6+40),{vel:[(Math.random()-.5)*40,40+Math.random()*70,20],color:[.85,.77,.62],size:12,life:1.2,drag:1.1,growth:12,alpha:.3})}},dispose(){i.forEach(n=>{n.dispose(),n.mesh.material.dispose()})}}},spotlight(s){let e=new ue,t=s.palette,i=new ri(1,1,40,1,!0);i.translate(0,-.5,0);let n=new ne(i,new dt({transparent:!0,depthWrite:!1,blending:Vt,side:yt,toneMapped:!1,uniforms:{uColor:{value:Uo(t.amber,1.3)}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = position.y; vec4 mv = modelViewMatrix*vec4(position,1.); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying float vY; varying vec3 vN; varying vec3 vV; uniform vec3 uColor; void main(){ float f = pow(abs(dot(vN,vV)),1.4); gl_FragColor = vec4(uColor, f * (1.0 + vY) * 0.28); }"}));e.add(n);let r=new ne(new on(0,1,48),Ri(t.amber,.28));return r.rotation.x=-Math.PI/2,e.add(r),{group:e,update({below:o,effect:a,time:l,reduced:c}){if(!o){e.visible=!1;return}let h=Number(a.spotlightSide)<0?-1:1,u=Zn(h<0?o.left+7:o.right-7),d=Pn(o.level);n.position.set(u,d+620,0),n.scale.set(52,620,52),r.position.set(u,d+Ut/2+.6,30),r.scale.set(52,52,1),s.spot={x:u,y:d,z:_i/2,radius:52},!c&&Math.random()<.45&&s.emit(Jn(u+(Math.random()-.5)*80,d+160+Math.random()*120,0),{vel:[0,-60,0],color:No(t.amber),size:3,life:1,drag:.2,alpha:.7})},dispose(){i.dispose(),n.material.dispose(),r.geometry.dispose(),r.material.dispose()}}},peekaboo(s){let e=new ue,t=s.palette,i=new ne(new wt(1,.03,6,48),Ri(t.teal,.6));return e.add(i),{group:e,update({mover:n,effect:r,moving:o,helpers:a,time:l,reduced:c}){if(e.visible=!!(n&&n.visible),!e.visible)return;let h=n.userData.alpha;i.scale.set(n.userData.drawnWidth/2+14,20,1),i.position.set(n.position.x,n.position.y,qt),i.material.opacity=(1-h)*.75,!c&&h<.5&&Math.random()<.35&&s.emit(Jn(n.position.x+(Math.random()-.5)*n.userData.drawnWidth,n.position.y+(Math.random()-.5)*14,qt),{vel:[0,12,0],color:No(t.teal),size:3.4,life:.7,alpha:.7,drag:1})},dispose(){i.geometry.dispose(),i.material.dispose()}}},zoom(s){let e=new ue,t=s.palette,i=new ne(new wt(1,.04,8,64),Ri(t.amber,.9));e.add(i);let n=new ne(new Mt(.05,.05,.7,8),Ri(t.vermilion,.9));return n.position.set(.88,-.88,0),n.rotation.z=Math.PI/4,i.add(n),{group:e,update({below:r,effect:o,time:a,reduced:l}){if(!r){e.visible=!1;return}let c=1+(l?0:Math.sin(a*3)*.04),h=(r.right-r.left)*.5+24;i.scale.set(h*c,h*c,1),i.position.set(Zn((r.left+r.right)/2),Pn(r.level)+14,qt+4),i.material.opacity=.5*Fe((o.remaining??5)/.4)},dispose(){i.geometry.dispose(),i.material.dispose(),n.geometry.dispose(),n.material.dispose()}}},double(s){let e=new ue,t=s.palette,i=null,n=null,r=ep(t.ink,[[[.53,.1],[.48,.34],[.55,.55],[.49,.9]]],256,64,8),o=new mt({map:r,transparent:!0,depthWrite:!1});return n=new ne(new Tt(1,Ut),o),{group:e,attach(a){i&&i.parent&&i.parent.remove(i),i=n,a.add(i),i.position.z=qt,i.scale.x=a.userData.baseW},off(){i&&i.parent&&i.parent.remove(i)},update({mover:a}){(!i||i.parent!==a)&&a&&(a.add(i),i.position.z=qt,i.scale.x=a.userData.baseW)},dispose(){r.dispose(),o.dispose(),n.geometry.dispose()}}},accordion(s){let e=new ue,t=s.palette,i=new ue,n=new mt({color:t.ink,transparent:!0,opacity:.38,depthWrite:!1}),r=new Tt(1.1,Ut*.9),o=[];for(let l=0;l<9;l+=1){let c=new ne(r,n);c.userData.k=(l+.5)/9-.5,c.rotation.z=l%2?.14:-.14,i.add(c),o.push(c)}let a=null;return{group:e,attach(l){i.parent&&i.parent.remove(i),l.add(i),i.position.z=qt},off(){i.parent&&i.parent.remove(i)},update({mover:l,time:c,reduced:h}){if(!l)return;i.parent!==l&&(l.add(i),i.position.z=qt);let u=l.userData.baseW;o.forEach(d=>{d.position.x=d.userData.k*u,d.scale.x=1/Math.max(.2,l.scale.x)})},dispose(){n.dispose(),r.dispose()}}},crumble(s){let e=new ue,t=s.palette,i=ep(t.ink,[[[.24,.04],[.31,.34],[.2,.62],[.27,.96]],[[.31,.34],[.42,.5]],[[.68,.04],[.61,.34],[.72,.62],[.65,.96]],[[.61,.34],[.5,.5]]],256,64,6),n=new mt({map:i,transparent:!0,depthWrite:!1}),r=new ne(new Tt(1,Ut),n);return e.add(r),{group:e,update({below:o,time:a,reduced:l}){if(!o){e.visible=!1;return}let c=o.right-o.left;r.scale.x=c,r.position.set(Zn((o.left+o.right)/2),Pn(o.level),qt),!l&&Math.random()<.28&&s.emit(Jn(r.position.x+(Math.random()-.5)*c*.7,r.position.y-4,qt),{vel:[(Math.random()-.5)*18,-10,18],color:[.62,.55,.45],size:3.2,life:1.1,drag:.4,gravity:-200,alpha:.9})},dispose(){i.dispose(),n.dispose(),r.geometry.dispose()}}},superglue(s){let e=new ue,t=s.palette,i=new Jt({color:t.amber,roughness:.08,metalness:0,clearcoat:1,transmission:0,emissive:t.amber,emissiveIntensity:.55}),n=new ne(new Sn(2.6,1,6,14).rotateZ(Math.PI/2),i);e.add(n);let r=new ne(new St(3,12,10),i);e.add(r);let o=new ne(new Tt(28,_i*.96).rotateX(-Math.PI/2),Ri(t.amber,.2));return e.add(o),{group:e,attach(){},off(a){a&&a.material&&a.material.emissive&&(a.material.emissiveIntensity=0)},update({below:a,mover:l,time:c,reduced:h}){if(!a){e.visible=!1;return}let u=a.right-a.left,d=Zn((a.left+a.right)/2),f=Pn(a.level)+Ut/2;n.scale.set((u-8)/6.2,1,1),n.position.set(d,f+1.2,qt-8),r.position.set(d+Math.sin(c*.5)*u*.2,f-2-c*.6%1*9,qt-1),r.scale.setScalar(.7+.3*Math.sin(c*4)),o.position.set(d,f+.7,0),o.material.opacity=.14+.1*(h?1:Math.sin(c*4)*.5+.5),l&&l.visible&&l.material&&(l.material.emissive.set(t.amber),l.material.emissiveIntensity=h?.4:.35+.3*Math.sin(c*5))},dispose(){i.dispose(),n.geometry.dispose(),r.geometry.dispose(),o.geometry.dispose(),o.material.dispose()}}},calipers(s){let e=new ue,t=s.palette,i=new gt(2,1,3),n=[0,1].map(()=>{let c=new ne(i,Ri(t.amber,.95));return e.add(c),c}),r=new gt(1,2,3),o=[0,1,2,3].map(()=>{let c=new ne(r,Ri(t.amber,.95));return e.add(c),c}),a=new St(3.4,12,8),l=[0,1].map(()=>{let c=new ne(a,Ri(t.amber,1));return e.add(c),c});return{group:e,update({below:c,moving:h,helpers:u,time:d}){if(!c||!h||!u){e.visible=!1;return}let f=u.caliperBounds(c,h),p=Zn(f.minLeft),g=Zn(f.maxLeft+h.width),m=Pn(h.level),x=Pn(c.level),_=Math.max(m,x)+22,M=x-13,y=_-M;n.forEach((v,S)=>{v.scale.y=y,v.position.set(S?g:p,(_+M)/2,qt+1)});let w=[1,-1];[p,g].forEach((v,S)=>{o[S*2].scale.x=14,o[S*2].position.set(v+w[S]*7,m,qt+1),o[S*2+1].scale.x=14,o[S*2+1].position.set(v+w[S]*7,x-Ai/2,qt+1),l[S].position.set(v,_,qt+1)});let T=1+Math.sin(d*5)*.2;l.forEach(v=>v.scale.setScalar(T))},dispose(){i.dispose(),r.dispose(),a.dispose(),[...n,...o,...l].forEach(c=>c.material.dispose())}}}},Vy=Object.keys(nu).concat(["zoom"]).filter((s,e,t)=>t.indexOf(s)===e);var Qi=s=>s*Ai+Ai/2,hc=s=>s-Ui/2,m3=70,gr=class{constructor(e,t,{scale:i=1,depth:n=_i,name:r="",color:o="#2F8478",interactive:a=!1}={}){this.kit=e,this.fx=t,this.depth=n,this.name=r,this.color=o,this.root=new ue,this.root.scale.setScalar(i),this.body=new ue,this.debrisGroup=new ue,this.root.add(this.body,this.debrisGroup),this.meshes=[],this.count=0,this.stateId=null,this.lastFallen=0,this.lastCollapsed=!1,this.collapseDone=!1,this.world=new pr({floorY:ac()}),this.random=Nt(77),this.mover=null,this.moverMaterial=null,this.decoy=null,this.portalClones=[],this.prevMover=null,this.shake=new P,this.rig=new cc(this),this.height=0,this.topLevel=0,this.timeScale=1,this.lastEdge=[0,0],this.listeners={land:[],perfect:[],collapse:[],piece:[],impact:[]},this.collapseQueue=[],this.alpha=1}on(e,t){return this.listeners[e].push(t),this}emit(e,t){for(let i of this.listeners[e])i(t,this)}setKit(e){this.kit=e,this.clear(!1),this.rig.setKit(e)}clear(e=!1){for(let t of this.meshes)this.disposeMesh(t);this.meshes.length=0,this.count=0;for(let t of this.world.bodies)t.data&&t.data.mesh&&this.disposeMesh(t.data.mesh);this.world.clear(),this.mover&&(this.body.remove(this.mover),this.mover=null),this.decoy&&(this.body.remove(this.decoy),this.decoy=null);for(let t of this.portalClones)this.body.remove(t);this.portalClones.length=0,this.collapseQueue.length=0,this.moverMaterial&&(this.moverMaterial.dispose(),this.moverMaterial=null),e?this.lastFallen=0:(this.stateId=null,this.lastFallen=0,this.lastCollapsed=!1)}disposeMesh(e){e&&(e.parent&&e.parent.remove(e),e.userData.plaque&&(e.userData.plaque.material.map.dispose(),e.userData.plaque.material.dispose(),e.userData.plaque.geometry.dispose()),e.userData.edges&&e.userData.edges.material.dispose())}makeBlockMesh(e,{animate:t=!1,plaque:i=!1}={}){let n=this.kit.mesh(e,{depth:this.depth}),r=Math.max(1,e.right-e.left);return n.position.set(hc((e.left+e.right)/2),Qi(e.level),0),n.userData.level=e.level,n.userData.baseX=n.position.x,n.userData.width=r,n.userData.placer=e.placer,e.perfect&&this.kit.addPerfectStar(n,r),t&&(n.userData.land={t:0,perfect:!!e.perfect}),i&&e.placer&&e.placer!=="Base"&&this.addPlaque(n,e),this.body.add(n),n}addPlaque(e,t){let i=String(t.placer).slice(0,12),n=document.createElement("canvas");n.width=256,n.height=72;let r=n.getContext("2d"),o=this.kit.palette,a=this.kit.theme==="sunset"?"30px VT323, monospace":this.kit.theme==="primetime"?'700 34px "Barlow Condensed", sans-serif':'700 30px "DM Sans", sans-serif';r.fillStyle=this.kit.theme==="paper"?"rgba(42,37,32,0.88)":"rgba(6,10,36,0.9)",this.kit.theme==="sunset"?r.fillRect(2,2,252,68):(r.beginPath(),r.roundRect(2,2,252,68,16),r.fill()),r.strokeStyle=o.amber,r.lineWidth=3,r.stroke(),r.fillStyle=this.kit.theme==="paper"?"#F4EDDF":"#ffffff",r.font=a,r.textAlign="center",r.textBaseline="middle",r.fillText(i,128,38,232);let l=new si(n);l.colorSpace=Et,l.anisotropy=4;let c=new ne(new Tt(52,14.6),new mt({map:l,transparent:!0,depthWrite:!1})),h=t.left>Ui*.56,u=e.userData.width;c.position.set(h?-u/2-28:u/2+28,0,this.depth/2+2),e.add(c),e.userData.plaque=c}sync(e,t,i){let n=e.blocks||[],r=n[this.count-1],o=this.stateId!==e.id||n.length<this.count||this.count>0&&(!r||Math.abs(r.left-this.lastEdge[0])>.6||Math.abs(r.right-this.lastEdge[1])>.6);o&&(this.clear(),this.stateId=e.id,this.lastFallen=(e.fallen||[]).length,this.lastCollapsed=!!e.collapsed,this.prevMover=null,this.collapseDone=!!(e.collapsed&&e.phase!=="collapse")),this.reduced=!!e.reduced;let a=this.count,l=o||n.length-a>1;for(let u=a;u<n.length;u+=1){let d=n[u],f=this.makeBlockMesh(d,{animate:!l&&!this.reduced,plaque:e.teamPlacers});this.meshes[u]=f,this.count=u+1,this.lastEdge=[d.left,d.right],!l&&u>0&&this.onLand(d,f,e)}this.height=n.length,this.topLevel=n.length-1;let c=e.fallen||[];c.length<this.lastFallen&&(this.lastFallen=0);for(let u=this.lastFallen;u<c.length;u+=1)!o&&!this.collapseDone&&this.spawnPiece(c[u]);this.lastFallen=c.length;let h=!!e.collapsed;h&&!this.lastCollapsed&&!o&&this.beginCollapse(e),h&&!this.lastCollapsed&&o&&(this.collapseDone=!0),this.lastCollapsed=h,this.updateCollapseQueue(t),this.syncMover(e,t,i),this.animateBlocks(t,i,e),this.stepDebris(t*this.timeScale,i),this.applyBodyTransform(e,i),this.rig.update(e,this.mover,t,i),this.prevMover=e.moving?{...e.moving}:null}onLand(e,t,i){this.root.updateWorldMatrix(!0,!1);let n=new P(t.position.x,t.position.y-Ut/2,this.depth/2-4);this.root.localToWorld(n),this.emit("land",{block:e,perfect:!!e.perfect,position:n,width:e.right-e.left,level:e.level}),e.perfect&&this.emit("perfect",{block:e,position:n.clone(),width:e.right-e.left,level:e.level})}syncMover(e,t,i){let n=e.moving,r=e.effect?e.effect.id:"";if(!n||e.phase==="collapse"||e.ended||e.collapsed){this.mover&&(this.mover.visible=!1),this.decoy&&(this.decoy.visible=!1);for(let _ of this.portalClones)_.visible=!1;return}let o=n.color||"#2F8478",a=Math.max(4,n.width);if(!this.mover||this.mover.userData.color!==o||this.mover.userData.theme!==this.kit.theme||a/this.mover.userData.baseW>1.22||a/this.mover.userData.baseW<.82){this.mover&&this.body.remove(this.mover),this.moverMaterial&&this.moverMaterial.dispose(),this.moverMaterial=this.kit.uniqueMaterial(o),this.mover=new ne(this.kit.geometry(a,this.depth),this.moverMaterial),this.mover.castShadow=!0,this.mover.receiveShadow=!0;let _=this.mover.geometry.parameters?this.mover.geometry.parameters.width:a;if(this.mover.userData={color:o,theme:this.kit.theme,baseW:_,level:n.level},this.kit.theme==="sunset"){let M=new yn(this.kit.edges(_,this.depth),new Wi({color:this.kit.palette.ink,transparent:!0,opacity:.85}));this.mover.add(M),this.mover.userData.edges=M}this.body.add(this.mover);for(let M of this.portalClones)this.body.remove(M);this.portalClones.length=0,this.rig.attachMover(this.mover)}let l=this.mover;l.visible=!0;let c=r==="slowmo"&&e.helpers?e.helpers.slowToDartWindup(e.effect.elapsed):0,h=n.width*(1-.08*c),u=n.left+(n.width-h)/2,d=1;!this.reduced&&r==="peekaboo"&&e.helpers&&(d=e.helpers.peekabooOpacity(e.effect.elapsed));let f=r==="rollercoaster"&&!this.reduced&&e.helpers?e.helpers.rollercoasterOffset(e.effect.elapsed,Number(n.rollerPhase)||0):0,p=Qi(n.level)-f;l.scale.set(h/l.userData.baseW,1+.06*c,1),l.position.set(hc(u+h/2),p,0),l.userData.alpha=d,l.userData.drawnWidth=h,l.userData.drawnLeft=u;let g=this.moverMaterial,m=d<.999;g.transparent=m,g.opacity=d,g.depthWrite=!m,l.castShadow=d>.55&&r!=="spotlight",l.rotation.z=r==="drunk"&&!this.reduced?Math.sin(i*5.2)*.07+Math.sin(i*2.3)*.04:0;let x=r==="portal";for(let _=0;_<2;_+=1){let M=this.portalClones[_];M||(M=new ne(l.geometry,g),M.castShadow=!0,this.body.add(M),this.portalClones[_]=M),M.geometry=l.geometry,M.material=g;let y=_===0?Ui:-Ui,w=n.left+0,T=x&&(_===0&&n.left<0||_===1&&n.left+n.width>Ui);M.visible=!!T,M.scale.copy(l.scale),M.position.set(l.position.x+y,l.position.y,0)}if(r==="double"&&n.decoy){if(!this.decoy||this.decoy.userData.color!==(n.decoy.color||o)){this.decoy&&this.body.remove(this.decoy);let _=this.kit.material(n.decoy.color||o);this.decoy=new ne(this.kit.geometry(Math.max(4,n.decoy.width),this.depth),_),this.decoy.userData={color:n.decoy.color||o,baseW:this.decoy.geometry.parameters.width},this.decoy.castShadow=!0,this.body.add(this.decoy)}this.decoy.visible=d>.01,this.decoy.scale.x=n.decoy.width/this.decoy.userData.baseW,this.decoy.position.set(hc(n.decoy.left+n.decoy.width/2),p,0)}else this.decoy&&(this.decoy.visible=!1)}animateBlocks(e,t,i){let n=this.meshes.length,r=i.effect&&i.effect.id==="earthquake"?1:0;for(let o=0;o<n;o+=1){let a=this.meshes[o];if(!a||!a.visible&&a.userData.collapsing)continue;let l=a.userData.level,c=this.reduced?0:Math.min(2.2,(l/36)**2*1.4)*(1+r*2);a.position.x=a.userData.baseX+Math.sin(t*.8+l*.31)*c;let h=a.userData.land;if(h){h.t+=e;let d=Math.exp(-h.t*8.5)*Math.cos(h.t*30);a.scale.y=1-.2*d,a.position.y=Qi(l)-(1-a.scale.y)*Ut*.5,h.t>.6&&(a.scale.y=1,a.position.y=Qi(l),a.userData.land=null)}let u=a.userData.star;u&&!this.reduced&&(u.rotation.z=Math.sin(t*1.6+l)*.12)}}spawnPiece(e){if(!e||!(e.right>e.left))return;let t=e.right-e.left,i=Number.isInteger(e.level)?e.level:this.topLevel+1,n=(e.left+e.right)/2<Ui/2?-1:1,r=this.kit.mesh({left:e.left,right:e.right,color:e.color||"#2F8478"},{depth:this.depth}),o=this.random,a=Lo({pos:[hc((e.left+e.right)/2),Qi(i),0],half:[t/2,Ut/2,this.depth/2],vel:[n*(70+o()*150),-10+o()*70,(o()-.2)*150],angVel:[(o()-.5)*5,(o()-.5)*3,-n*(2+o()*5)],restitution:.3,friction:.5,data:{mesh:r,width:t,piece:e}});e.kind==="crumble"&&(a.vel[1]+=60,a.angVel[0]*=2),this.world.add(a),this.debrisGroup.add(r),this.trimBodies(),this.emit("piece",{piece:e,width:t,position:new P(r.position.x,Qi(i),0),side:n})}trimBodies(){for(;this.world.bodies.length>m3;){let e=this.world.bodies.find(t=>t.asleep)||this.world.bodies[0];this.disposeMesh(e.data.mesh),this.world.remove(e)}}beginCollapse(e){let t=e.collapseStartLevel!=null?e.collapseStartLevel:Math.max(0,this.count-6),i=this.meshes.filter(n=>n&&n.userData.level>=t).reverse();i.forEach((n,r)=>this.collapseQueue.push({mesh:n,delay:this.reduced?0:r*.07})),this.emit("collapse",{count:i.length,top:i.length?i[0].position.clone():null})}updateCollapseQueue(e){if(!this.collapseQueue.length)return;for(let i of this.collapseQueue)i.delay-=e*this.timeScale;let t=this.collapseQueue.filter(i=>i.delay<=0);if(t.length){this.collapseQueue=this.collapseQueue.filter(i=>i.delay>0);for(let{mesh:i}of t){let n=i.userData.width,r=i.userData.level,o=i.position.x<0?-1:1,a=this.random;i.userData.collapsing=!0;let l=Lo({pos:[i.position.x,i.position.y,0],half:[n/2,Ut/2,this.depth/2],vel:[o*(38+a()*130),10+a()*90,(a()-.1)*160],angVel:[(a()-.5)*4,(a()-.5)*3,-o*(1.2+a()*4)],restitution:.28,friction:.5,data:{mesh:i,width:n,level:r}});this.meshes[r]=null,this.world.add(l),this.debrisGroup.add(i),i.userData.land=null,i.scale.y=1}this.trimBodies()}}stepDebris(e,t){if(this.world.bodies.length){this.world.step(Math.min(e,1/30));for(let i of this.world.bodies){let n=i.data.mesh;if(n.position.set(i.pos[0],i.pos[1],i.pos[2]),n.quaternion.set(i.quat[0],i.quat[1],i.quat[2],i.quat[3]),i.hit==null&&i.pos[1]-i.half[1]<1.5&&i.vel[1]<0&&i.age>.05){i.hit=!0;let r=new P(i.pos[0],0,i.pos[2]);this.root.localToWorld(r),this.emit("impact",{position:r,width:i.data.width,speed:Math.abs(i.vel[1])})}}}}applyBodyTransform(e,t){let i=e.effect,n=e.helpers,r=0,o=0,a=0;if(i&&n){if(i.id==="earthquake"){let f=n.earthquakeOffset(i.elapsed,i.remaining,this.reduced);r=f.x*1.25,o=-f.y*1.25}i.id==="pisa"&&(a=-n.pisaAngle(i.elapsed,i.remaining,i.tiltDirection,this.reduced))}this.shake.set(r,o,a);let l=this.topMesh(),c=l?l.userData.baseX:0,h=l?Qi(l.userData.level):11,u=Math.cos(a),d=Math.sin(a);this.body.rotation.z=a,this.body.position.set(r+c-(u*c-d*h),o+h-(d*c+u*h),0)}topMesh(){for(let e=this.meshes.length-1;e>=0;e-=1)if(this.meshes[e])return this.meshes[e];return null}topPoint(e=new P){let t=this.topMesh();return e.set(t?t.userData.baseX:0,t?Qi(t.userData.level)+Ut/2:Ut,0),this.root.localToWorld(e)}setAlpha(e){this.alpha=e}dispose(){this.clear(),this.rig.dispose()}};var g3=`
  attribute float aSize; attribute vec4 aColor; varying vec4 vColor; uniform float uScale;
  void main() {
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = max(1.0, aSize * uScale / max(1.0, -mv.z));
    gl_Position = projectionMatrix * mv;
  }
`,x3=`
  varying vec4 vColor;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float a = 1.0 - smoothstep(0.0, 1.0, d);
    a *= a;
    if (a < 0.01) discard;
    gl_FragColor = vec4(vColor.rgb, vColor.a * a);
  }
`,Bo=class{constructor(e=1400,{blending:t=Vt,depthTest:i=!0}={}){this.capacity=e,this.cursor=0,this.position=new Float32Array(e*3),this.color=new Float32Array(e*4),this.size=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.drag=new Float32Array(e),this.gravity=new Float32Array(e),this.base=new Float32Array(e*4),this.growth=new Float32Array(e);let n=new ht;n.setAttribute("position",new Ht(this.position,3).setUsage(Ki)),n.setAttribute("aColor",new Ht(this.color,4).setUsage(Ki)),n.setAttribute("aSize",new Ht(this.size,1).setUsage(Ki)),this.material=new dt({uniforms:{uScale:{value:800}},vertexShader:g3,fragmentShader:x3,transparent:!0,depthWrite:!1,depthTest:i,blending:t}),this.points=new rs(n,this.material),this.points.frustumCulled=!1,this.points.renderOrder=8,this.density=1,this.random=Nt(7)}emit({pos:e,vel:t=[0,0,0],color:i=[1,1,1],alpha:n=1,size:r=6,life:o=1,drag:a=.6,gravity:l=0,growth:c=0}){if(this.density<1&&Math.random()>this.density)return;let h=this.cursor;this.cursor=(this.cursor+1)%this.capacity,this.position.set(e,h*3),this.vel.set(t,h*3),this.base.set([i[0],i[1],i[2],n],h*4),this.size[h]=r,this.life[h]=o,this.maxLife[h]=o,this.drag[h]=a,this.gravity[h]=l,this.growth[h]=c}burst({pos:e,count:t=24,speed:i=160,spread:n=1,color:r=[1,.8,.3],size:o=5,life:a=.9,gravity:l=-260,up:c=.2,drag:h=1.2,alpha:u=1,growth:d=0,direction:f=null}){for(let p=0;p<t;p+=1){let g=this.random()*Qe,m=Math.acos(2*this.random()-1),x=i*(.35+this.random()*.65),_=Math.sin(m)*Math.cos(g)*n,M=Math.cos(m)*n+c,y=Math.sin(m)*Math.sin(g)*n;f&&(_=f[0]+_*.5,M=f[1]+M*.5,y=f[2]+y*.5),this.emit({pos:e,vel:[_*x,M*x,y*x],color:r.map(w=>w*(.85+this.random()*.3)),alpha:u,size:o*(.6+this.random()*.8),life:a*(.6+this.random()*.7),gravity:l,drag:h,growth:d})}}update(e){let t=!1;for(let i=0;i<this.capacity;i+=1){if(this.life[i]<=0){this.color[i*4+3]=0;continue}t=!0,this.life[i]-=e;let n=Math.max(0,1-this.drag[i]*e),r=i*3;this.vel[r]*=n,this.vel[r+1]=this.vel[r+1]*n+this.gravity[i]*e,this.vel[r+2]*=n,this.position[r]+=this.vel[r]*e,this.position[r+1]+=this.vel[r+1]*e,this.position[r+2]+=this.vel[r+2]*e;let o=Math.max(0,this.life[i]/this.maxLife[i]),a=i*4;this.color[a]=this.base[a],this.color[a+1]=this.base[a+1],this.color[a+2]=this.base[a+2],this.color[a+3]=this.base[a+3]*Math.min(1,o*2.2)*Math.min(1,(1-o)*14+.15),this.growth[i]&&(this.size[i]+=this.growth[i]*e)}if(t||this.dirty){let i=this.points.geometry;i.attributes.position.needsUpdate=!0,i.attributes.aColor.needsUpdate=!0,i.attributes.aSize.needsUpdate=!0}this.dirty=t}setScale(e){this.material.uniforms.uScale.value=e}dispose(){this.points.geometry.dispose(),this.material.dispose()}},uc=class{constructor(e=360){this.capacity=e,this.cursor=0;let t=new Tt(1,.55);this.material=new Xe({roughness:.45,metalness:.25,side:yt,vertexColors:!1}),this.mesh=new Vi(t,this.material,e),this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,this.mesh.instanceMatrix.setUsage(Ki),this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.rot=new Float32Array(e*3),this.spin=new Float32Array(e*3),this.life=new Float32Array(e),this.size=new Float32Array(e),this.phase=new Float32Array(e),this.dummy=new Lt,this.tint=new Se,this.random=Nt(21),this.floor=-64;let i=new pt().makeScale(0,0,0);for(let n=0;n<e;n+=1)this.mesh.setMatrixAt(n,i),this.mesh.setColorAt(n,this.tint.set("#ffffff"));this.density=1}burst({pos:e,count:t=60,speed:i=260,colors:n=["#E3A33B","#2F8478","#7FA6BD","#D5472F"],size:r=7,life:o=3.2,cone:a=1,direction:l=[0,1,0]}){let c=Math.round(t*this.density);for(let h=0;h<c;h+=1){let u=this.cursor;this.cursor=(this.cursor+1)%this.capacity;let d=this.random()*Qe,f=Math.sqrt(this.random())*a,p=i*(.4+this.random()*.8);this.pos.set(e,u*3),this.vel[u*3]=(l[0]+Math.cos(d)*f)*p,this.vel[u*3+1]=(l[1]+(this.random()-.3)*.4)*p,this.vel[u*3+2]=(l[2]+Math.sin(d)*f)*p,this.rot[u*3]=this.random()*Qe,this.rot[u*3+1]=this.random()*Qe,this.rot[u*3+2]=this.random()*Qe,this.spin[u*3]=(this.random()-.5)*16,this.spin[u*3+1]=(this.random()-.5)*16,this.spin[u*3+2]=(this.random()-.5)*12,this.life[u]=o*(.7+this.random()*.6),this.size[u]=r*(.7+this.random()*.7),this.phase[u]=this.random()*Qe,this.mesh.setColorAt(u,this.tint.set(n[Math.floor(this.random()*n.length)%n.length]))}this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}update(e,t){let i=!1;for(let n=0;n<this.capacity;n+=1){if(this.life[n]<=0){this.life[n]>-1&&(this.dummy.scale.setScalar(0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n,this.dummy.matrix),this.life[n]=-2,i=!0);continue}i=!0,this.life[n]-=e;let r=n*3;this.vel[r]*=1-1.6*e,this.vel[r+2]*=1-1.6*e,this.vel[r+1]=this.vel[r+1]*(1-.9*e)-150*e,this.vel[r+1]=Math.max(this.vel[r+1],-110),this.pos[r]+=(this.vel[r]+Math.sin(t*3+this.phase[n])*26)*e,this.pos[r+1]+=this.vel[r+1]*e,this.pos[r+2]+=(this.vel[r+2]+Math.cos(t*2.4+this.phase[n])*18)*e,this.pos[r+1]<this.floor&&(this.pos[r+1]=this.floor,this.vel[r+1]=0,this.spin[r]*=.2,this.spin[r+1]*=.2,this.spin[r+2]*=.2),this.rot[r]+=this.spin[r]*e,this.rot[r+1]+=this.spin[r+1]*e,this.rot[r+2]+=this.spin[r+2]*e;let o=Math.min(1,this.life[n]*1.5);this.dummy.position.set(this.pos[r],this.pos[r+1],this.pos[r+2]),this.dummy.rotation.set(this.rot[r],this.rot[r+1],this.rot[r+2]),this.dummy.scale.setScalar(this.size[n]*o),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n,this.dummy.matrix)}i&&(this.mesh.instanceMatrix.needsUpdate=!0)}dispose(){this.mesh.geometry.dispose(),this.material.dispose(),this.mesh.dispose()}},dc=class{constructor(e=10){this.items=[],this.group=new ue;let t=new on(.86,1,64).rotateX(-Math.PI/2);this.geometry=t;for(let i=0;i<e;i+=1){let n=new mt({color:"#ffffff",transparent:!0,opacity:0,blending:Vt,depthWrite:!1,side:yt,toneMapped:!1}),r=new ne(t,n);r.visible=!1,r.renderOrder=7,this.group.add(r),this.items.push({mesh:r,t:1,life:1,radius:1,from:0})}this.cursor=0}pulse({pos:e,color:t="#FFD36B",radius:i=140,life:n=.7,from:r=.2,strength:o=1.6,vertical:a=!1}){let l=this.items[this.cursor];this.cursor=(this.cursor+1)%this.items.length,l.t=0,l.life=n,l.radius=i,l.from=r,l.strength=o,l.mesh.position.set(e[0],e[1],e[2]),l.mesh.rotation.x=a?Math.PI/2:0,l.mesh.material.color.set(t).multiplyScalar(o),l.mesh.visible=!0}update(e){for(let t of this.items){if(t.t>=1){t.mesh.visible=!1;continue}t.t=Math.min(1,t.t+e/t.life);let i=1-(1-t.t)**3,n=t.radius*(t.from+(1-t.from)*i);t.mesh.scale.set(n,1,n),t.mesh.material.opacity=(1-t.t)**1.6}}dispose(){this.geometry.dispose();for(let e of this.items)e.mesh.material.dispose()}};var fc=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,i="ltr"){let n=[],r=_3(e,t,this.data,i);for(let o=0,a=r.length;o<a;o++)n.push(...r[o].toShapes());return n}};function _3(s,e,t,i){let n=Array.from(s),r=e/t.resolution,o=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,a=[],l=0,c=0;(i=="rtl"||i=="tb")&&n.reverse();for(let h=0;h<n.length;h++){let u=n[h];if(u===`
`)l=0,c-=o;else{let d=v3(u,r,l,c,t);i=="tb"?(l=0,c+=t.ascender*r):l+=d.offsetX,a.push(d.path)}}return a}function v3(s,e,t,i,n){let r=n.glyphs[s]||n.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+n.familyName+".");return}let o=new ho,a,l,c,h,u,d,f,p;if(r.o){let g=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,x=g.length;m<x;)switch(g[m++]){case"m":a=g[m++]*e+t,l=g[m++]*e+i,o.moveTo(a,l);break;case"l":a=g[m++]*e+t,l=g[m++]*e+i,o.lineTo(a,l);break;case"q":c=g[m++]*e+t,h=g[m++]*e+i,u=g[m++]*e+t,d=g[m++]*e+i,o.quadraticCurveTo(u,d,c,h);break;case"b":c=g[m++]*e+t,h=g[m++]*e+i,u=g[m++]*e+t,d=g[m++]*e+i,f=g[m++]*e+t,p=g[m++]*e+i,o.bezierCurveTo(u,d,f,p,c,h);break}}return{offsetX:r.ha*e,path:o}}var ip={glyphs:{"0":{ha:648,x_min:23,x_max:626,o:"m 320 709 q 484 667 416 709 q 589 545 553 625 q 626 349 626 465 q 588 153 626 233 q 481 31 550 73 q 320 -10 413 -10 q 158 33 224 -10 q 57 159 92 76 q 23 360 23 241 q 59 545 23 467 q 163 666 96 624 q 320 709 229 709 m 424 306 q 413 534 424 447 q 379 660 403 620 q 315 700 355 700 q 263 671 283 700 q 233 575 243 642 q 224 394 224 508 q 234 168 224 255 q 269 40 245 81 q 333 0 293 0 q 384 27 364 0 q 414 122 404 55 q 424 306 424 189"},"1":{ha:400,x_min:16,x_max:388,o:"m 32 664 l 88 664 q 100 659 96 664 q 105 644 105 654 l 105 61 q 95 32 105 41 q 68 19 85 23 l 24 10 q 16 6 16 9 q 18 2 16 3 q 23 0 20 0 l 380 0 q 386 2 384 0 q 388 5 388 3 q 380 9 388 8 l 332 19 q 309 32 318 22 q 301 61 301 42 l 301 719 q 294 728 301 728 q 290 726 292 728 q 285 722 288 724 q 217 685 262 695 q 89 676 172 676 l 31 676 q 26 674 28 676 q 24 670 24 673 q 25 666 24 668 q 32 664 27 664"},"2":{ha:595,x_min:21,x_max:570,o:"m 97 180 l 94 186 l 179 230 q 268 297 231 256 q 326 395 306 338 q 347 523 347 451 q 337 630 347 590 q 310 686 327 669 q 274 703 293 703 q 221 679 239 703 q 204 609 204 656 l 204 528 q 179 456 204 483 q 118 430 154 430 q 56 451 79 430 q 34 513 34 473 q 64 607 34 562 q 158 681 95 653 q 315 710 220 710 q 441 688 389 710 q 519 625 493 665 q 546 532 546 585 q 518 434 546 479 q 429 346 490 389 q 273 260 369 304 m 21 69 q 72 172 21 135 q 221 210 122 210 q 286 203 253 210 q 350 189 319 197 q 411 175 382 181 q 466 169 440 169 q 528 185 507 169 q 563 241 550 201 q 565 244 564 243 q 568 245 566 246 q 569 244 569 245 q 570 240 570 243 q 540 89 563 144 q 482 13 518 35 q 398 -9 446 -9 q 328 5 358 -9 q 274 58 299 20 q 223 167 250 96 q 208 195 213 188 q 196 202 202 202 q 185 189 189 202 q 178 141 180 177 q 161 48 173 81 q 129 3 149 16 q 83 -9 109 -9 q 37 13 54 -9 q 21 69 21 35"},"3":{ha:550,x_min:20,x_max:550,o:"m 219 369 l 216 375 q 226 375 219 375 q 239 375 233 375 q 248 375 246 375 q 397 356 334 375 q 494 299 460 338 q 529 201 529 261 q 495 89 529 137 q 402 16 462 42 q 263 -10 342 -10 q 131 12 185 -10 q 48 69 77 33 q 20 149 20 105 q 45 222 20 193 q 107 252 71 252 q 160 228 138 252 q 182 168 182 205 l 182 96 q 205 26 182 55 q 264 -3 227 -3 q 310 13 291 -3 q 340 67 330 29 q 351 172 351 105 q 321 314 351 267 q 243 361 291 361 l 216 361 q 210 363 213 361 q 208 367 208 365 q 210 372 208 370 q 216 378 213 375 l 395 555 l 395 549 l 112 549 q 97 544 103 549 q 87 530 91 540 l 65 458 q 62 454 64 456 q 59 453 61 453 q 55 455 56 453 q 54 460 54 458 l 81 681 q 86 695 82 690 q 96 700 90 700 l 543 700 q 548 698 546 700 q 550 694 550 697 q 548 689 550 692 q 544 683 547 687"},"4":{ha:607,x_min:2,x_max:582,o:"m 284 325 q 286 332 284 329 q 291 337 288 335 l 463 487 q 470 492 468 491 q 475 493 472 493 q 478 491 477 493 q 480 486 480 490 l 480 39 q 485 26 480 30 q 499 19 490 22 l 549 9 q 553 7 551 8 q 555 5 555 7 q 553 1 555 3 q 549 0 551 0 l 212 0 q 206 4 206 0 q 211 8 206 7 l 268 19 q 281 25 277 21 q 284 37 284 29 m 213 364 q 238 395 230 379 q 247 434 247 412 q 234 473 247 454 q 206 513 222 492 q 177 557 189 533 q 164 609 164 580 q 180 667 164 640 q 225 711 196 694 q 296 727 255 727 q 386 694 353 727 q 419 615 419 661 q 408 559 419 585 q 371 501 398 532 q 297 426 344 469 l 13 155 l 13 162 l 576 162 q 580 161 579 162 q 582 158 582 160 q 573 151 582 151 l 9 151 q 4 153 6 151 q 2 157 2 154 q 4 161 2 159 q 7 164 5 163"},"5":{ha:561,x_min:34,x_max:533,o:"m 34 151 q 60 217 34 191 q 124 243 86 243 q 177 218 155 243 q 200 152 200 193 l 200 56 q 216 14 200 32 q 263 -4 233 -4 q 317 48 296 -4 q 338 195 338 100 q 312 348 338 298 q 240 399 287 399 q 192 390 216 399 q 146 363 168 381 q 103 319 123 346 q 95 312 99 315 q 88 310 92 310 q 82 313 85 310 q 80 320 80 317 l 80 701 q 82 708 80 706 q 90 711 85 711 q 99 709 95 711 q 109 706 104 708 q 179 686 143 694 q 256 674 215 678 q 341 671 296 671 q 456 686 407 671 q 515 727 506 702 q 518 730 516 729 q 522 732 520 732 q 526 730 525 731 q 527 727 527 729 q 496 590 522 640 q 421 518 471 540 q 291 497 371 497 q 214 502 252 497 q 145 516 177 507 q 87 537 112 525 l 94 541 l 94 317 l 88 319 q 144 374 117 353 q 207 405 172 395 q 290 415 242 415 q 418 390 363 415 q 503 319 472 365 q 533 212 533 274 q 500 95 533 145 q 405 17 467 45 q 258 -10 343 -10 q 139 12 189 -10 q 61 70 88 33 q 34 151 34 106"},"6":{ha:603,x_min:26,x_max:578,o:"m 339 710 q 471 690 419 710 q 548 636 523 670 q 573 559 573 602 q 545 485 573 511 q 472 459 518 459 q 399 487 430 459 q 368 565 368 516 l 368 640 q 357 687 368 669 q 325 704 347 704 q 285 684 304 704 q 251 617 266 663 q 227 494 236 571 q 219 304 219 417 q 232 119 219 186 q 266 23 245 51 q 312 -5 287 -5 q 373 44 351 -5 q 396 200 396 93 q 365 341 396 294 q 289 389 335 389 q 245 377 265 389 q 214 344 226 365 q 202 294 202 323 l 194 298 q 216 361 194 333 q 278 406 238 389 q 374 423 319 423 q 485 399 438 423 q 556 329 531 375 q 578 218 581 283 q 542 96 576 147 q 448 17 509 45 q 306 -10 388 -10 q 163 27 226 -10 q 63 138 100 64 q 26 322 26 212 q 68 538 26 451 q 181 667 110 624 q 339 710 252 710"},"7":{ha:517,x_min:34,x_max:533,o:"m 423 556 l 424 549 l 90 549 q 77 546 83 549 q 69 532 72 543 l 46 457 q 42 452 44 454 q 39 451 41 451 q 35 453 37 451 q 34 458 34 455 l 63 686 q 67 696 64 692 q 77 700 71 700 l 523 700 q 530 698 528 700 q 533 692 533 695 q 530 683 533 688 q 523 672 528 679 l 369 460 q 334 411 349 434 q 309 368 319 389 q 293 327 299 347 q 288 287 288 307 q 298 230 288 255 q 320 184 307 206 q 342 139 333 162 q 352 88 352 116 q 323 16 352 47 q 242 -14 294 -14 q 167 16 194 -14 q 140 97 140 46 q 149 159 140 126 q 177 227 159 192 q 223 298 196 262"},"8":{ha:574,x_min:24,x_max:557,o:"m 276 -10 q 139 10 194 -10 q 55 66 83 30 q 27 150 27 103 q 45 222 27 190 q 106 276 64 254 q 224 312 149 299 l 226 309 q 206 248 214 285 q 197 177 197 212 q 222 40 197 82 q 287 -2 247 -2 q 353 28 331 -2 q 374 112 374 58 q 363 169 374 143 q 327 215 352 194 q 263 250 303 235 q 82 360 139 297 q 24 503 24 423 q 56 609 24 562 q 148 683 88 656 q 292 710 208 710 q 439 689 381 710 q 526 627 497 668 q 554 528 554 586 q 530 441 554 480 q 461 376 506 402 q 351 342 416 350 l 349 346 q 368 385 360 361 q 380 441 376 410 q 385 505 385 472 q 373 617 385 573 q 339 683 361 662 q 287 704 318 704 q 240 690 260 704 q 209 649 220 675 q 199 589 199 622 q 213 504 199 542 q 259 440 228 467 q 341 395 291 412 q 508 302 460 354 q 557 193 557 249 q 523 86 557 131 q 427 15 490 40 q 276 -10 364 -10"},"9":{ha:610,x_min:27,x_max:584,o:"m 266 -10 q 134 10 186 -10 q 57 64 82 30 q 33 142 33 99 q 60 215 33 188 q 134 242 87 242 q 208 212 180 242 q 237 128 237 183 l 237 61 q 249 17 237 37 q 281 -3 260 -3 q 335 34 310 -3 q 376 159 360 72 q 391 397 391 246 q 379 581 391 514 q 346 676 366 648 q 300 704 325 704 q 234 654 259 704 q 209 500 209 604 q 238 359 209 407 q 309 311 267 311 q 359 323 337 311 q 394 356 381 335 q 407 406 407 378 l 416 402 q 396 340 416 369 q 336 295 377 312 q 232 278 295 278 q 122 302 168 278 q 52 372 76 326 q 27 483 27 418 q 62 601 27 550 q 160 681 98 652 q 304 710 223 710 q 447 673 384 710 q 547 562 511 636 q 584 379 584 489 q 541 162 584 249 q 427 33 499 76 q 266 -10 355 -10"},A:{ha:661,x_min:-10,x_max:661,o:"m 133 268 l 378 268 l 380 257 l 131 257 m 183 4 q 181 1 183 3 q 178 0 180 0 l -6 0 q -9 1 -8 0 q -10 4 -10 3 q -9 7 -10 6 q -5 9 -7 8 l 7 13 q 48 42 27 20 q 81 108 69 65 l 228 619 q 229 661 235 645 q 209 686 223 676 q 198 693 202 692 q 194 696 194 695 q 196 699 194 699 q 200 700 197 700 l 450 700 q 454 699 452 700 q 456 697 456 699 q 452 692 456 694 q 441 687 449 691 q 430 679 433 685 q 433 657 428 673 l 628 36 q 638 18 631 25 q 653 10 645 12 q 659 7 658 9 q 661 4 661 6 q 659 1 661 3 q 655 0 658 0 l 385 0 q 381 1 382 0 q 380 4 380 3 q 381 7 380 6 q 387 9 383 7 l 406 13 q 422 24 420 18 q 421 45 425 31 l 238 627 l 253 665 l 93 105 q 94 64 86 82 q 121 33 102 45 q 165 12 140 20 l 177 9 q 181 7 180 8 q 183 4 183 6"},B:{ha:695,x_min:32,x_max:672,o:"m 672 167 q 609 47 672 93 q 420 0 546 0 l 38 0 q 33 1 35 0 q 32 4 32 3 q 40 9 32 7 l 71 14 q 87 22 82 16 q 93 39 93 27 l 93 672 q 88 681 93 678 q 71 686 84 684 l 40 692 q 32 696 32 693 q 33 699 32 698 q 38 700 35 700 l 306 700 q 484 674 412 700 q 594 603 557 649 q 632 498 632 557 q 603 409 632 447 q 520 350 574 371 q 393 330 466 330 l 424 333 q 552 312 496 333 q 640 253 609 291 q 672 167 672 216 m 347 323 l 270 323 l 270 335 l 349 335 q 413 351 388 335 q 450 400 438 367 q 462 484 462 433 q 440 592 462 547 q 382 663 419 638 q 303 689 346 689 l 284 689 l 284 33 q 291 16 284 21 q 313 12 299 12 l 366 12 q 428 31 402 12 q 468 86 454 51 q 482 171 482 122 q 448 283 482 243 q 347 323 414 323"},C:{ha:654,x_min:20,x_max:638,o:"m 635 227 q 609 132 631 176 q 549 55 586 88 q 462 3 512 22 q 353 -15 412 -15 q 175 29 250 -15 q 60 153 101 74 q 20 339 20 232 q 45 490 20 422 q 116 609 70 559 q 226 686 162 659 q 368 713 290 713 q 444 704 413 713 q 495 685 476 694 q 518 675 513 675 q 539 684 525 675 q 568 703 554 694 q 586 713 582 713 q 590 710 588 713 q 593 703 592 708 l 638 490 q 638 482 639 485 q 634 478 637 480 q 628 480 630 478 q 624 487 626 482 q 559 610 594 565 q 487 675 524 655 q 413 695 449 695 q 343 675 375 695 q 285 619 310 656 q 246 528 260 582 q 232 402 232 473 q 260 210 232 286 q 336 99 287 135 q 448 63 385 63 q 563 104 514 63 q 627 228 612 146 q 628 233 628 231 q 632 235 629 234 q 635 232 634 234 q 635 227 636 230"},D:{ha:746,x_min:32,x_max:723,o:"m 32 4 q 39 9 32 8 l 73 15 q 88 20 84 16 q 93 30 93 23 l 93 670 q 88 680 93 677 q 73 686 83 684 l 37 692 q 32 697 32 693 q 33 699 32 699 q 37 700 35 700 l 311 700 q 476 674 401 700 q 607 598 552 649 q 692 474 662 548 q 723 304 723 401 q 677 140 723 208 q 548 36 632 72 q 351 0 465 0 l 37 0 q 33 1 34 0 q 32 4 32 2 m 351 12 q 437 42 399 12 q 496 141 474 73 q 518 323 518 210 q 503 483 518 414 q 461 597 488 552 q 395 666 434 643 q 311 689 357 689 l 288 689 l 288 30 q 294 17 288 22 q 309 12 299 12"},E:{ha:624,x_min:32,x_max:607,o:"m 259 376 l 357 376 q 426 396 403 376 q 459 473 449 417 q 461 478 460 477 q 464 479 462 479 q 469 473 468 479 l 527 281 q 528 276 529 278 q 526 273 527 274 q 522 272 524 273 q 518 275 521 272 q 468 330 490 311 q 424 357 446 350 q 372 364 401 364 l 259 364 m 32 696 q 33 699 32 698 q 38 700 35 700 l 495 700 q 517 703 507 700 q 534 709 527 706 q 543 712 541 712 q 546 710 545 712 q 548 701 547 708 l 596 499 q 596 493 597 495 q 594 491 595 492 q 591 491 593 490 q 587 494 590 491 q 511 593 544 556 q 449 652 477 631 q 396 681 422 673 q 344 689 371 689 l 288 689 l 288 36 q 295 18 288 24 q 313 12 301 12 l 352 12 q 417 31 383 12 q 495 102 451 50 q 598 255 539 154 q 602 258 601 257 q 605 259 603 259 q 607 256 606 258 q 607 250 608 254 l 549 0 q 547 -9 548 -7 q 545 -11 546 -11 q 535 -9 542 -11 q 518 -3 528 -6 q 494 0 507 0 l 38 0 q 33 1 35 0 q 32 4 32 3 q 40 9 32 7 l 70 14 q 87 19 82 16 q 93 29 93 23 l 93 672 q 87 681 93 678 q 70 686 82 685 l 40 692 q 32 696 32 693"},F:{ha:569,x_min:32,x_max:573,o:"m 471 700 q 494 703 483 700 q 511 709 504 706 q 520 712 518 712 q 522 710 521 712 q 525 701 523 707 l 572 499 q 573 493 573 495 q 570 491 572 491 q 568 491 569 490 q 564 495 566 492 q 476 611 516 569 q 402 671 437 653 q 330 689 367 689 l 288 689 l 288 29 q 294 19 288 23 q 312 14 300 15 l 366 9 q 372 7 370 8 q 373 4 373 6 q 372 1 373 3 q 367 0 370 0 l 38 0 q 33 1 35 0 q 32 4 32 3 q 40 9 32 7 l 70 14 q 87 19 82 16 q 93 29 93 23 l 93 672 q 87 681 93 678 q 70 686 82 685 l 40 692 q 32 696 32 693 q 33 699 32 698 q 38 700 35 700 m 245 362 l 346 362 q 422 383 397 362 q 457 459 448 403 q 459 464 458 464 q 461 465 460 465 q 467 459 466 466 l 508 267 q 508 262 508 264 q 505 259 507 260 q 502 259 504 259 q 498 262 501 259 q 450 316 470 296 q 409 343 430 335 q 361 350 388 350 l 245 350"},G:{ha:705,x_min:22,x_max:685,o:"m 643 2 q 641 -8 643 -5 q 637 -11 640 -11 q 609 -3 629 -11 q 563 17 589 6 q 515 36 538 28 q 479 45 492 45 q 461 36 473 45 q 432 17 450 28 q 391 -2 415 7 q 336 -10 367 -10 q 210 14 267 -10 q 110 82 152 38 q 45 189 68 127 q 22 326 22 251 q 47 482 22 411 q 120 604 73 553 q 235 682 168 655 q 385 710 302 710 q 445 700 420 710 q 485 681 471 691 q 505 671 500 671 q 535 681 516 671 q 573 700 555 691 q 601 710 592 710 q 604 708 603 710 q 606 699 605 707 l 643 459 q 643 453 644 455 q 641 451 642 452 q 638 451 639 450 q 635 454 637 452 q 556 600 597 546 q 474 677 515 654 q 390 701 432 701 q 301 663 339 701 q 243 549 264 625 q 223 357 223 473 q 247 173 223 249 q 310 57 272 97 q 391 17 348 17 q 417 23 404 17 q 441 38 431 28 q 459 60 452 48 q 465 87 465 73 l 465 291 q 460 300 465 297 q 443 306 454 304 l 401 311 q 394 312 396 312 q 393 316 393 313 q 394 318 393 317 q 399 319 396 319 l 679 319 q 683 318 682 319 q 685 315 685 317 q 683 312 685 313 q 677 311 682 312 l 656 305 q 646 300 650 304 q 643 291 643 297"},H:{ha:791,x_min:37,x_max:755,o:"m 194 334 l 580 334 l 580 323 l 194 323 m 293 29 q 298 19 293 23 q 315 14 304 16 l 346 9 q 354 4 354 7 q 352 1 354 3 q 348 0 351 0 l 42 0 q 38 1 39 0 q 37 4 37 3 q 44 9 37 7 l 75 14 q 92 19 86 16 q 97 29 97 23 l 97 672 q 92 681 97 678 q 75 686 86 685 l 44 692 q 37 696 37 693 q 38 699 37 698 q 42 700 39 700 l 348 700 q 352 699 351 700 q 354 696 354 698 q 346 692 354 693 l 315 686 q 298 681 304 685 q 293 672 293 678 m 694 29 q 699 19 694 23 q 716 14 705 16 l 747 9 q 755 4 755 7 q 753 1 755 3 q 749 0 752 0 l 443 0 q 439 1 440 0 q 438 4 438 3 q 445 9 438 7 l 477 14 q 493 19 487 16 q 498 29 498 23 l 498 672 q 493 681 498 678 q 477 686 487 685 l 445 692 q 438 696 438 693 q 439 699 438 698 q 443 700 440 700 l 749 700 q 753 699 752 700 q 755 696 755 698 q 747 692 755 693 l 716 686 q 699 681 705 685 q 694 672 694 678"},I:{ha:380,x_min:32,x_max:349,o:"m 288 29 q 294 19 288 23 q 310 14 300 16 l 341 9 q 349 4 349 7 q 348 1 349 3 q 343 0 346 0 l 38 0 q 33 1 35 0 q 32 4 32 3 q 40 9 32 7 l 71 14 q 87 19 82 16 q 93 29 93 23 l 93 672 q 87 681 93 678 q 71 686 82 685 l 40 692 q 32 696 32 693 q 33 699 32 698 q 38 700 35 700 l 343 700 q 348 699 346 700 q 349 696 349 698 q 341 692 349 693 l 310 686 q 294 681 300 685 q 288 672 288 678"},J:{ha:434,x_min:2,x_max:398,o:"m 396 140 q 338 28 396 70 q 182 -14 281 -14 q 49 19 96 -14 q 2 103 2 52 q 22 162 2 140 q 80 185 42 185 q 129 163 109 185 q 149 101 149 141 l 149 50 q 159 9 149 25 q 193 -6 169 -6 q 230 15 216 -6 q 244 75 244 36 q 229 132 244 104 q 194 193 214 161 q 159 267 174 225 q 144 364 144 308 l 144 662 q 141 678 144 673 q 127 685 137 684 l 96 690 q 87 692 90 691 q 85 695 85 694 q 88 699 85 698 q 92 700 90 700 l 390 700 q 396 699 394 700 q 398 696 398 698 q 382 691 398 694 l 360 686 q 344 680 349 684 q 339 669 339 677 l 339 365 q 347 297 339 327 q 367 244 356 268 q 387 194 379 219 q 396 140 396 170"},K:{ha:740,x_min:32,x_max:746,o:"m 258 275 l 494 523 q 539 592 529 558 q 536 652 549 627 q 490 689 524 678 l 475 692 q 471 694 472 693 q 470 696 470 695 q 471 699 470 698 q 474 700 472 700 l 713 700 q 716 699 715 700 q 717 697 717 698 q 715 693 717 694 q 712 692 714 692 q 681 676 697 686 q 643 648 665 666 q 588 600 620 630 q 508 522 556 570 l 263 264 m 339 356 l 479 494 l 697 54 q 717 19 709 30 q 742 8 726 9 q 745 7 744 8 q 746 4 746 6 q 745 1 746 2 q 741 0 744 0 l 454 0 q 450 1 452 0 q 449 5 449 3 q 450 7 449 7 q 455 9 452 8 l 482 13 q 490 21 488 14 q 485 45 493 27 m 288 29 q 294 19 288 23 q 311 14 299 16 l 341 9 q 347 7 346 9 q 349 4 349 6 q 347 1 349 3 q 343 0 346 0 l 38 0 q 33 1 35 0 q 32 4 32 3 q 40 9 32 7 l 70 14 q 87 19 82 16 q 93 29 93 23 l 93 672 q 87 681 93 678 q 70 686 82 685 l 40 692 q 32 696 32 693 q 33 699 32 698 q 38 700 35 700 l 343 700 q 348 699 346 700 q 349 696 349 698 q 341 692 349 693 l 311 686 q 294 681 300 685 q 288 672 288 678"},L:{ha:588,x_min:32,x_max:587,o:"m 341 692 l 310 686 q 294 681 300 685 q 288 672 288 678 l 288 33 q 295 16 288 21 q 313 12 301 12 l 358 12 q 408 23 383 12 q 461 62 433 34 q 518 145 489 91 l 578 254 q 581 258 579 257 q 584 259 582 259 q 586 256 586 258 q 586 249 587 254 l 538 0 q 535 -10 536 -8 q 533 -11 534 -11 q 524 -8 531 -11 q 506 -3 517 -5 q 482 0 496 0 l 38 0 q 33 1 35 0 q 32 4 32 3 q 40 9 32 7 l 71 14 q 87 19 82 16 q 93 29 93 23 l 93 672 q 87 681 93 678 q 71 686 82 685 l 40 692 q 32 696 32 693 q 33 699 32 698 q 38 700 35 700 l 343 700 q 348 699 346 700 q 349 696 349 698 q 341 692 349 693"},M:{ha:847,x_min:-14,x_max:836,o:"m 440 318 l 427 295 l 555 681 q 562 696 559 693 q 573 700 566 700 l 786 700 q 790 699 789 700 q 792 696 792 698 q 790 693 792 695 q 785 692 788 692 l 753 686 q 737 676 742 684 q 734 654 733 668 l 777 41 q 782 21 778 26 q 798 14 786 16 l 829 9 q 834 7 833 9 q 836 4 836 6 q 835 1 836 3 q 831 0 833 0 l 528 0 q 524 1 525 0 q 523 4 523 3 q 524 7 523 7 q 530 9 526 8 l 560 14 q 577 22 573 16 q 581 42 582 28 l 540 619 l 550 631 l 359 45 q 353 32 356 34 q 348 30 350 30 q 344 31 346 30 q 341 35 343 32 q 337 45 339 38 l 123 619 l 132 636 l 89 88 q 107 42 87 62 q 160 13 127 23 l 178 9 q 182 7 181 8 q 183 4 183 6 q 182 1 183 3 q 179 0 181 0 l -9 0 q -12 1 -11 0 q -14 4 -14 3 q -12 7 -14 6 q -8 9 -10 8 l 7 13 q 54 41 34 21 q 77 90 75 61 l 117 597 q 117 662 121 640 q 98 686 113 683 l 69 691 q 62 693 64 692 q 60 696 60 694 q 67 700 60 700 l 286 700 q 295 697 291 700 q 303 685 299 694"},N:{ha:680,x_min:8,x_max:677,o:"m 210 4 q 208 1 210 3 q 205 0 207 0 l 13 0 q 9 1 10 0 q 8 4 8 3 q 14 9 8 7 l 29 13 q 80 45 59 23 q 101 106 101 67 l 101 580 q 101 589 101 586 q 96 599 100 592 l 48 683 q 43 692 46 688 q 40 698 40 696 q 41 700 40 699 q 45 700 42 700 l 258 700 q 263 698 261 700 q 268 692 266 697 l 581 107 l 572 85 l 572 595 q 551 656 572 634 q 499 687 530 679 l 481 692 q 475 696 475 694 q 476 699 475 698 q 480 700 477 700 l 672 700 q 675 699 674 700 q 677 696 677 698 q 671 692 677 694 l 656 687 q 605 656 626 678 q 584 595 584 634 l 584 112 q 585 100 584 105 q 590 91 587 95 l 627 27 q 635 11 634 16 q 637 4 637 6 q 636 1 637 3 q 631 0 635 0 l 430 0 q 424 8 424 0 q 422 16 424 11 q 418 25 420 22 l 85 627 l 112 627 l 112 105 q 134 44 112 66 q 185 13 156 22 l 204 9 q 210 4 210 7"},O:{ha:743,x_min:22,x_max:721,o:"m 364 710 q 511 684 445 710 q 624 611 577 659 q 696 499 671 564 q 721 355 721 434 q 697 206 721 273 q 627 91 672 139 q 519 16 582 43 q 379 -10 456 -10 q 232 16 298 -10 q 119 89 166 41 q 47 203 73 136 q 22 354 22 271 q 47 498 22 433 q 118 611 72 563 q 226 684 164 658 q 364 710 289 710 m 525 203 q 513 348 525 277 q 482 482 502 420 q 437 593 463 545 q 382 669 411 642 q 322 696 353 696 q 267 674 290 696 q 231 610 244 653 q 219 507 219 568 q 230 358 219 431 q 261 221 241 285 q 306 108 280 157 q 361 32 332 60 q 421 5 391 5 q 478 25 455 5 q 513 90 502 46 q 525 203 525 134"},P:{ha:670,x_min:32,x_max:656,o:"m 656 428 q 623 311 656 361 q 533 235 591 261 q 400 208 476 208 q 297 222 336 208 q 225 260 257 235 l 227 270 q 268 244 250 254 q 303 230 286 235 q 339 226 321 226 q 401 248 372 226 q 448 316 430 271 q 466 432 466 362 q 445 573 466 516 q 389 659 424 630 q 313 689 354 689 l 288 689 l 288 30 q 294 20 288 24 q 310 14 299 17 l 343 8 q 347 7 346 8 q 349 4 349 6 q 347 1 349 3 q 343 0 346 0 l 38 0 q 33 1 35 0 q 32 5 32 3 q 39 9 32 7 l 72 15 q 88 20 83 16 q 93 29 93 24 l 93 669 q 88 680 93 675 q 73 686 83 684 l 37 692 q 32 696 32 693 q 33 699 32 698 q 37 700 34 700 l 313 700 q 493 666 416 700 q 613 571 570 632 q 656 428 656 510"},Q:{ha:760,x_min:18,x_max:748,o:"m 366 710 q 515 684 448 710 q 630 611 582 659 q 705 499 679 564 q 731 355 731 434 q 706 206 731 273 q 635 91 681 139 q 525 16 589 43 q 383 -10 461 -10 q 230 15 297 -10 q 115 87 162 40 q 42 202 67 135 q 18 354 18 270 q 43 498 18 433 q 115 611 69 563 q 226 684 162 658 q 366 710 290 710 m 530 203 q 519 349 530 277 q 487 484 507 421 q 440 596 467 548 q 385 673 414 645 q 324 700 355 700 q 267 678 291 700 q 231 613 244 656 q 219 507 219 569 q 230 357 219 431 q 261 219 242 283 q 307 105 281 155 q 364 28 334 56 q 425 0 394 0 q 483 22 460 0 q 518 88 507 43 q 530 203 530 133 m 402 193 q 402 199 401 197 q 405 201 403 201 q 408 199 407 202 q 410 194 409 197 q 449 63 428 113 q 499 -13 471 13 q 563 -49 527 -40 q 647 -59 599 -59 q 693 -56 676 -59 q 720 -47 711 -53 q 735 -35 730 -41 q 740 -30 737 -31 q 745 -30 743 -29 q 748 -35 748 -31 q 745 -44 748 -38 l 689 -138 q 669 -155 682 -148 q 638 -161 656 -161 q 561 -143 595 -161 q 498 -83 526 -124 q 445 26 469 -42 q 402 193 422 94"},R:{ha:715,x_min:32,x_max:717,o:"m 679 451 q 656 360 679 401 q 590 293 633 320 q 489 256 548 267 q 464 252 477 254 q 440 250 452 251 q 414 250 427 250 q 340 255 369 250 q 292 270 312 260 q 254 294 272 280 l 260 303 q 290 282 275 290 q 323 271 306 274 q 361 267 340 267 q 449 307 415 267 q 482 438 482 347 q 459 567 482 510 q 398 656 436 624 q 315 689 360 689 l 288 689 l 288 39 q 293 22 288 27 q 310 14 299 16 l 341 9 q 347 7 346 8 q 349 4 349 6 q 343 0 349 0 l 38 0 q 33 1 35 0 q 32 4 32 3 q 40 9 32 7 l 71 14 q 87 22 82 16 q 93 39 93 27 l 93 672 q 87 681 93 678 q 71 686 82 685 l 40 692 q 32 696 32 693 q 33 699 32 698 q 38 700 35 700 l 314 700 q 508 669 426 700 q 634 583 590 639 q 679 451 679 527 m 352 261 l 533 281 l 674 37 q 690 18 681 25 q 709 9 698 12 q 715 7 714 7 q 717 4 717 6 q 715 1 717 3 q 711 0 714 0 l 438 0 q 432 4 432 0 q 434 6 432 6 q 440 9 436 7 l 454 14 q 472 25 467 19 q 467 50 477 32"},S:{ha:586,x_min:27,x_max:563,o:"m 306 -10 q 235 3 263 -10 q 191 29 207 16 q 170 42 176 42 q 155 33 165 42 q 132 14 144 25 q 109 -5 120 3 q 93 -13 99 -13 q 85 -10 89 -13 q 80 -2 80 -7 l 45 238 q 45 243 45 242 q 47 246 46 245 q 50 246 48 247 q 54 242 53 245 q 148 92 106 144 q 224 20 189 40 q 290 1 258 1 q 368 27 339 1 q 397 106 397 53 q 384 169 397 141 q 339 219 371 197 q 253 259 308 241 q 121 322 171 287 q 49 401 72 357 q 27 499 27 445 q 60 609 27 561 q 150 683 92 657 q 286 710 209 710 q 347 702 322 710 q 387 685 372 694 q 411 677 403 677 q 437 686 420 677 q 472 704 455 695 q 498 714 490 714 q 503 711 500 714 q 507 705 506 709 l 562 474 q 562 468 563 470 q 560 465 562 466 q 557 466 559 465 q 553 469 555 467 q 452 612 497 563 q 371 680 408 662 q 298 699 334 699 q 227 669 255 699 q 199 588 199 638 q 212 523 199 552 q 254 472 225 495 q 333 432 283 450 q 469 368 419 402 q 541 292 520 334 q 562 200 562 251 q 532 94 562 141 q 444 18 501 46 q 306 -10 387 -10"},T:{ha:661,x_min:10,x_max:651,o:"m 94 700 l 566 700 q 588 703 578 700 q 606 709 599 706 q 615 712 613 712 q 617 710 616 712 q 620 700 619 708 l 651 485 q 651 478 652 480 q 649 476 650 477 q 645 476 647 475 q 642 479 643 477 q 568 614 601 569 q 507 674 535 659 q 458 689 480 689 l 428 689 l 428 29 q 434 19 428 23 q 451 14 440 16 l 482 9 q 489 4 489 7 q 483 0 489 0 l 178 0 q 174 1 175 0 q 172 4 172 3 q 180 9 172 7 l 211 14 q 228 19 222 16 q 233 29 233 23 l 233 689 l 204 689 q 157 672 183 689 q 96 610 130 655 q 19 479 62 565 q 16 476 18 477 q 13 476 14 475 q 10 478 11 477 q 10 485 10 480 l 42 700 q 44 710 43 708 q 47 712 45 712 q 55 709 49 712 q 72 703 62 706 q 94 700 82 700"},U:{ha:675,x_min:45,x_max:668,o:"m 582 310 l 564 594 q 544 654 561 631 q 490 687 526 677 l 474 692 q 469 694 471 693 q 468 696 468 695 q 469 699 468 698 q 473 700 470 700 l 663 700 q 667 699 666 700 q 668 696 668 698 q 666 694 668 695 q 662 692 665 693 l 646 687 q 593 653 613 678 q 575 596 573 629 l 593 315 q 597 261 595 288 q 598 207 598 235 q 576 98 598 147 q 504 19 555 48 q 368 -10 453 -10 q 202 16 267 -10 q 106 90 137 43 q 75 196 75 136 q 76 233 75 210 q 80 278 78 255 q 82 317 82 301 l 105 672 q 100 681 106 678 q 83 686 94 685 l 52 692 q 45 696 45 693 q 46 699 45 698 q 50 700 47 700 l 356 700 q 360 699 359 700 q 361 696 361 698 q 359 694 361 695 q 354 692 358 693 l 320 686 q 304 681 309 684 q 298 671 298 678 l 276 321 q 273 249 273 282 q 272 194 272 217 q 309 50 272 94 q 404 6 347 6 q 497 29 457 6 q 562 96 538 52 q 586 200 586 139 q 584 262 586 237 q 582 310 583 288"},V:{ha:628,x_min:-6,x_max:646,o:"m 467 696 q 468 699 467 698 q 472 700 469 700 l 641 700 q 645 699 644 700 q 646 696 646 698 q 645 694 646 695 q 640 692 643 693 l 628 687 q 586 655 606 678 q 554 592 565 632 l 413 92 q 409 68 409 79 q 408 46 408 58 l 408 6 q 407 2 408 3 q 403 0 406 0 l 227 0 q 222 2 224 0 q 221 6 221 3 l 221 45 q 218 63 221 52 q 212 85 216 73 l 34 662 q 27 678 30 673 q 18 685 24 683 l 2 691 q -6 696 -6 694 q -4 699 -6 698 q 0 700 -3 700 l 281 700 q 285 699 284 700 q 287 696 287 698 q 285 694 287 695 q 279 692 284 693 l 256 686 q 240 676 243 683 q 242 655 237 669 l 408 98 l 392 62 l 542 590 q 540 649 551 622 q 487 688 528 676 l 473 692 q 468 694 470 693 q 467 696 467 695"},W:{ha:971,x_min:10,x_max:986,o:"m 502 541 l 512 535 l 392 63 q 391 57 392 61 q 390 48 390 53 l 390 5 q 389 2 390 3 q 386 0 388 0 l 199 0 q 195 2 196 0 q 194 5 194 3 l 194 48 q 193 56 194 53 q 192 65 192 60 l 54 672 q 49 683 52 680 q 42 688 47 686 l 13 694 q 11 696 12 695 q 10 697 10 696 q 11 699 10 698 q 14 700 12 700 l 300 700 q 303 699 302 700 q 304 697 304 698 q 301 695 304 694 l 262 688 q 252 682 254 686 q 251 671 250 677 l 387 64 l 375 41 m 809 696 q 810 699 809 698 q 814 700 812 700 l 982 700 q 985 699 984 700 q 986 696 986 698 q 985 694 986 695 q 981 692 983 693 l 969 687 q 925 656 946 678 q 897 600 904 633 l 787 63 q 786 57 787 61 q 785 48 785 53 l 785 5 q 784 2 785 3 q 782 0 784 0 l 594 0 q 591 2 592 0 q 590 5 590 3 l 590 48 q 589 56 590 53 q 587 65 589 60 l 442 672 q 437 682 439 679 q 429 687 434 685 l 403 694 q 399 695 401 695 q 398 697 398 696 q 399 699 398 698 q 402 700 401 700 l 687 700 q 689 699 688 700 q 690 697 690 698 q 689 695 690 696 q 686 694 688 694 l 653 687 q 643 681 645 685 q 643 670 641 677 l 783 60 l 771 41 l 886 603 q 878 655 892 632 q 827 689 863 678 l 815 692 q 810 694 812 693 q 809 696 809 695"},X:{ha:672,x_min:12,x_max:667,o:"m 610 44 q 623 25 616 32 q 640 14 631 18 q 660 9 649 11 q 666 7 664 8 q 667 4 667 6 q 666 1 667 3 q 662 0 665 0 l 348 0 q 343 1 345 0 q 342 4 342 3 q 344 7 342 6 q 350 9 346 8 q 381 17 371 12 q 391 29 390 22 q 386 47 392 36 l 68 660 q 54 678 61 672 q 39 688 47 685 q 21 692 32 691 q 16 694 17 693 q 16 696 16 695 q 17 699 16 698 q 21 700 19 700 l 333 700 q 338 699 336 700 q 339 696 339 698 q 338 694 339 695 q 332 692 336 693 l 299 687 q 285 679 287 685 q 288 663 283 673 m 393 369 l 382 372 l 518 590 q 529 654 541 628 q 486 688 517 680 l 472 692 q 467 693 469 693 q 466 696 466 694 q 467 699 466 698 q 471 700 469 700 l 643 700 q 648 696 648 700 q 647 694 648 695 q 642 692 645 693 q 576 649 601 675 q 529 587 552 623 m 300 366 l 310 361 l 144 95 q 137 44 127 68 q 179 12 148 21 l 194 9 q 198 7 197 8 q 199 4 199 6 q 198 1 199 3 q 194 0 197 0 l 17 0 q 13 1 14 0 q 12 4 12 3 q 13 7 12 6 q 18 9 15 8 q 69 31 49 20 q 104 60 89 43 q 135 103 119 77"},Y:{ha:634,x_min:10,x_max:633,o:"m 418 247 l 229 225 l 55 671 q 45 684 51 680 q 30 690 39 688 l 17 692 q 11 694 13 693 q 10 696 10 695 q 11 699 10 698 q 15 700 12 700 l 303 700 q 308 699 306 700 q 309 697 309 698 q 302 692 309 693 l 271 686 q 258 682 259 685 q 258 674 256 679 l 417 262 l 408 252 l 527 592 q 523 649 537 621 q 472 688 510 678 l 460 692 q 455 694 457 693 q 454 696 454 695 q 455 699 454 698 q 459 700 457 700 l 628 700 q 632 699 631 700 q 633 697 633 698 q 631 693 633 695 q 627 692 630 692 l 617 688 q 587 670 602 682 q 561 638 573 658 q 539 591 549 619 m 225 250 l 421 255 l 421 29 q 426 19 421 23 q 443 14 432 16 l 474 9 q 481 4 481 7 q 480 1 481 3 q 476 0 478 0 l 171 0 q 166 1 168 0 q 165 4 165 3 q 172 9 165 7 l 203 14 q 220 19 215 16 q 225 29 225 23"},Z:{ha:588,x_min:4,x_max:585,o:"m 584 696 l 215 3 l 212 12 l 350 12 q 406 19 381 12 q 453 48 431 27 q 499 107 475 69 q 555 209 523 146 l 564 227 q 567 230 565 229 q 570 231 568 232 q 572 229 572 230 q 573 225 573 228 l 544 1 q 543 -8 544 -5 q 539 -11 542 -11 q 531 -8 538 -11 q 514 -2 524 -5 q 493 0 505 0 l 7 0 q 4 1 5 0 q 4 3 4 2 q 4 5 4 4 q 5 6 5 6 l 375 697 l 377 689 l 242 689 q 170 675 200 689 q 112 626 140 662 q 51 525 84 591 l 38 498 q 34 494 35 495 q 31 494 32 493 q 29 496 29 494 q 28 500 28 497 l 57 700 q 59 709 59 706 q 62 711 60 711 q 71 708 65 711 q 88 703 78 706 q 109 700 97 700 l 583 700 q 584 700 584 700 q 585 699 585 700 q 585 698 585 698 q 584 696 585 697"},".":{ha:242,x_min:26,x_max:216,o:"m 120 -9 q 72 4 94 -9 q 39 39 51 17 q 26 88 26 62 q 39 136 26 114 q 72 171 51 158 q 120 184 94 184 q 169 171 148 184 q 203 136 191 158 q 216 88 216 114 q 203 39 216 62 q 169 4 191 17 q 120 -9 148 -9"},",":{ha:250,x_min:32,x_max:225,o:"m 137 0 q 58 24 84 0 q 32 91 32 49 q 59 157 32 131 q 128 184 86 184 q 195 153 166 184 q 225 63 225 123 q 215 -26 225 13 q 186 -96 206 -66 q 138 -147 167 -126 q 70 -180 109 -168 q 64 -180 67 -181 q 61 -176 61 -178 q 63 -171 61 -173 q 68 -168 65 -169 q 141 -126 115 -151 q 178 -74 168 -101 q 189 -24 189 -47 q 186 -6 189 -13 q 169 0 182 0"},"!":{ha:290,x_min:37,x_max:253,o:"m 148 736 q 228 712 203 736 q 253 653 253 689 q 250 616 253 637 q 242 577 247 595 l 147 220 q 145 216 146 218 q 142 215 145 215 q 140 216 141 215 q 139 220 139 218 l 48 579 q 39 621 41 605 q 37 653 37 636 q 65 712 37 689 q 148 736 93 736 m 140 -9 q 92 4 113 -9 q 58 40 71 18 q 45 88 45 62 q 58 136 45 114 q 92 171 71 159 q 139 184 114 184 q 188 171 167 184 q 223 136 210 159 q 235 88 235 114 q 223 40 235 62 q 188 4 210 18 q 140 -9 167 -9"},"?":{ha:563,x_min:26,x_max:549,o:"m 244 311 l 249 231 q 251 224 250 227 q 256 222 253 222 q 260 224 258 222 q 263 231 262 226 l 267 293 q 275 317 268 309 q 298 328 283 325 l 340 333 q 495 399 441 347 q 549 527 549 452 q 478 670 549 620 q 280 720 408 720 q 148 697 206 720 q 58 634 91 673 q 26 549 26 596 q 49 474 26 501 q 111 448 72 448 q 182 479 157 448 q 207 567 207 510 l 206 626 q 224 689 206 666 q 275 711 242 711 q 325 676 309 711 q 342 567 342 640 q 326 422 342 471 q 277 354 310 374 l 260 344 q 248 331 252 339 q 244 311 244 323 m 252 -9 q 204 4 226 -9 q 170 39 183 17 q 158 88 158 62 q 170 136 158 114 q 204 171 183 158 q 252 184 226 184 q 301 171 279 184 q 335 136 322 158 q 348 88 348 114 q 335 39 348 62 q 301 4 322 17 q 252 -9 279 -9"},":":{ha:240,x_min:25,x_max:215,o:"m 119 -9 q 71 4 93 -9 q 38 39 50 17 q 25 88 25 62 q 38 136 25 114 q 71 171 50 158 q 119 184 93 184 q 168 171 147 184 q 202 136 190 158 q 215 88 215 114 q 202 39 215 62 q 168 4 190 17 q 119 -9 147 -9 m 119 269 q 71 282 93 269 q 38 317 50 295 q 25 366 25 340 q 38 414 25 392 q 71 449 50 436 q 119 462 93 462 q 168 449 147 462 q 202 414 190 436 q 215 366 215 392 q 202 317 215 340 q 168 282 190 295 q 119 269 147 269"},";":{ha:258,x_min:30,x_max:224,o:"m 128 265 q 80 278 102 265 q 47 313 59 291 q 34 362 34 336 q 47 410 34 388 q 80 445 59 432 q 128 458 102 458 q 177 445 156 458 q 211 410 199 432 q 224 362 224 388 q 211 313 224 336 q 177 278 199 291 q 128 265 156 265 m 135 0 q 56 24 83 0 q 30 91 30 49 q 57 157 30 131 q 126 184 84 184 q 194 153 165 184 q 223 63 223 123 q 214 -26 223 13 q 185 -96 204 -66 q 136 -147 166 -126 q 68 -180 107 -168 q 62 -180 65 -181 q 59 -176 59 -178 q 61 -171 59 -173 q 67 -168 63 -169 q 140 -126 114 -151 q 177 -74 166 -101 q 188 -24 188 -47 q 184 -6 188 -13 q 168 0 181 0"},"-":{ha:249,x_min:20,x_max:230,o:"m 227 299 q 230 295 230 299 l 223 221 q 222 218 223 219 q 218 218 221 218 l 23 218 q 20 221 20 218 l 26 295 q 28 298 27 298 q 31 299 29 299"},"\u2013":{ha:469,x_min:15,x_max:455,o:"m 15 251 q 17 257 15 256 q 23 259 19 259 l 447 259 q 453 257 451 259 q 455 251 455 256 q 453 245 455 246 q 447 244 451 244 l 23 244 q 17 245 19 244 q 15 251 15 246"},"\u2014":{ha:725,x_min:15,x_max:711,o:"m 15 251 q 17 257 15 256 q 23 259 19 259 l 702 259 q 709 257 707 259 q 711 251 711 256 q 709 245 711 246 q 702 244 707 244 l 23 244 q 17 245 19 244 q 15 251 15 246"},"+":{ha:455,x_min:47,x_max:915,o:"m 47 341 q 49 345 47 344 q 54 346 51 346 l 402 346 q 406 345 404 346 q 408 341 408 344 q 406 337 408 339 q 402 336 404 336 l 54 336 q 49 337 51 336 q 47 341 47 339 m 910 62 q 913 60 912 62 q 915 55 915 58 l 915 -293 q 913 -297 915 -295 q 910 -299 912 -299 q 906 -297 907 -299 q 905 -293 905 -295 l 905 55 q 906 60 905 58 q 910 62 907 62"},"\xD7":{ha:401,x_min:47,x_max:353,o:"m 49 161 q 49 168 46 164 l 345 519 q 348 521 347 521 q 351 520 350 522 q 353 517 353 519 q 352 514 354 516 l 56 162 q 52 160 54 160 q 49 161 50 160 m 352 161 q 349 160 351 160 q 345 162 347 160 l 50 513 q 48 517 48 516 q 50 520 49 519 q 56 519 53 523 l 352 168 q 353 164 353 166 q 352 161 354 163"},"/":{ha:319,x_min:18,x_max:328,o:"m 176 302 q 159 251 169 282 q 136 183 148 220 q 111 107 124 146 q 85 29 98 68 q 60 -43 72 -9 q 40 -103 49 -77 q 34 -111 38 -108 q 25 -111 30 -113 q 19 -105 20 -109 q 20 -95 18 -101 q 39 -42 28 -73 q 65 28 51 -10 q 93 104 79 65 q 122 181 108 144 q 147 251 136 219 q 167 306 159 284 q 187 362 176 329 q 211 433 198 395 q 238 512 224 472 q 264 591 251 553 q 288 662 277 630 q 307 717 299 695 q 313 724 309 722 q 321 726 317 727 q 327 719 326 724 q 327 710 329 715 q 305 649 317 683 q 278 576 292 615 q 249 498 264 538 q 221 422 235 459 q 196 354 207 385 q 176 302 184 323"},"%":{ha:626,x_min:13,x_max:614,o:"m 184 711 q 305 663 259 711 q 352 532 352 615 q 329 432 352 473 q 269 369 307 390 q 184 347 231 347 q 58 395 103 347 q 13 532 13 442 q 59 661 13 612 q 184 711 105 711 m 229 528 q 217 661 229 623 q 184 700 205 700 q 148 659 161 700 q 135 535 135 619 q 148 398 135 438 q 184 358 161 358 q 206 373 196 358 q 223 426 217 389 q 229 528 229 463 m 327 366 q 324 363 326 364 q 322 364 323 363 q 320 366 321 365 q 322 370 320 367 q 343 399 325 374 q 387 462 361 425 q 442 540 413 499 q 496 617 471 581 q 538 676 522 653 q 556 701 555 700 q 565 708 560 707 q 574 705 570 709 q 578 697 578 703 q 574 688 578 691 q 555 664 573 686 q 511 606 538 642 q 454 531 485 571 q 396 456 424 492 q 349 395 368 420 q 327 366 330 370 m 298 338 q 301 341 299 340 q 304 341 303 341 q 305 338 306 340 q 302 334 305 336 q 281 304 300 330 q 237 241 263 278 q 182 162 211 203 q 128 84 154 120 q 86 24 102 48 q 68 -1 69 0 q 60 -7 65 -6 q 51 -5 55 -7 q 48 3 48 -2 q 52 14 48 9 q 70 38 52 15 q 114 96 87 61 q 172 171 142 131 q 229 247 202 211 q 276 308 257 284 q 298 338 295 333 m 446 352 q 567 304 521 352 q 614 173 614 257 q 591 73 614 115 q 531 10 569 32 q 446 -11 493 -11 q 320 36 365 -11 q 275 173 275 84 q 321 303 275 253 q 446 352 367 352 m 491 170 q 479 303 491 264 q 446 342 467 342 q 410 301 423 342 q 397 177 397 260 q 410 39 397 79 q 446 -1 423 -1 q 468 15 458 -1 q 485 67 479 30 q 491 170 491 104"},"#":{ha:603,x_min:24,x_max:579,o:"m 222 347 q 210 305 217 331 q 195 248 204 279 q 178 182 187 216 q 161 115 169 148 q 144 55 152 83 q 131 7 137 27 q 118 -1 128 -3 q 112 4 114 1 q 112 12 110 8 q 124 56 117 29 q 142 114 132 82 q 162 180 152 146 q 182 246 172 214 q 199 305 191 279 q 212 350 207 332 q 224 395 217 368 q 239 455 231 422 q 256 523 248 488 q 272 591 264 558 q 288 651 281 624 q 300 696 295 679 q 313 704 303 706 q 318 698 317 702 q 319 691 320 695 q 305 642 314 670 q 288 580 297 614 q 269 513 279 547 q 251 447 260 479 q 234 389 242 415 q 222 347 227 363 m 318 466 q 359 467 334 466 q 414 468 385 467 q 473 469 443 468 q 527 470 502 470 q 568 471 552 471 q 576 468 573 471 q 579 460 579 465 q 576 453 579 456 q 568 450 573 451 q 523 451 549 450 q 468 452 497 451 q 410 454 439 453 q 358 455 382 455 q 319 456 334 456 q 279 455 303 456 q 226 454 255 455 q 168 452 198 453 q 112 451 138 451 q 67 450 86 450 q 59 453 62 450 q 56 461 56 456 q 59 468 56 466 q 67 471 62 471 q 108 470 83 471 q 163 469 133 470 q 222 468 192 468 q 277 467 252 467 q 318 466 302 466 m 286 243 q 247 242 271 243 q 194 241 223 242 q 135 239 165 240 q 80 238 106 238 q 35 237 54 237 q 27 240 30 237 q 24 247 24 243 q 27 255 24 252 q 35 257 30 257 q 76 257 51 257 q 130 256 101 256 q 190 254 160 255 q 245 253 220 254 q 286 253 270 253 q 327 253 302 253 q 382 254 353 254 q 441 256 411 255 q 495 257 470 256 q 535 257 520 257 q 543 255 540 257 q 547 247 547 252 q 543 239 547 242 q 535 237 540 237 q 491 237 517 237 q 435 239 465 238 q 377 241 406 240 q 325 242 349 242 q 286 243 301 243 m 308 7 q 296 -1 305 -3 q 290 4 292 1 q 289 12 288 8 q 302 55 294 29 q 319 114 310 82 q 339 180 329 146 q 359 246 349 214 q 377 305 369 278 q 390 350 385 332 q 402 395 395 368 q 416 455 409 423 q 433 523 424 488 q 450 591 442 559 q 465 651 458 624 q 476 696 472 678 q 489 704 480 706 q 496 698 494 702 q 496 690 497 695 q 482 642 490 670 q 465 580 474 614 q 446 513 456 547 q 427 447 436 479 q 411 389 418 415 q 399 347 404 363 q 388 305 395 331 q 373 247 381 279 q 355 182 364 216 q 338 115 346 148 q 321 54 329 82 q 308 7 314 26"},"&":{ha:942,x_min:42,x_max:912,o:"m 650 -11 q 793 18 735 -11 q 882 103 852 46 q 912 245 912 160 q 877 414 912 330 q 781 567 843 499 q 614 693 711 644 q 406 742 517 742 q 213 709 293 742 q 91 619 134 676 q 49 491 49 563 q 73 408 49 436 q 138 380 97 380 q 191 402 170 380 q 212 457 212 423 q 209 495 212 478 q 201 530 205 513 q 194 564 197 546 q 191 606 191 583 q 214 676 191 647 q 284 719 237 704 q 403 735 331 735 q 609 687 514 735 q 772 563 704 639 q 870 411 835 495 q 905 245 905 327 q 885 127 905 174 q 831 58 866 81 q 751 36 797 36 q 678 51 711 36 q 611 102 645 66 q 532 202 577 139 q 477 294 499 248 q 444 391 455 340 q 433 505 433 443 q 449 591 433 556 q 484 626 464 626 q 509 593 502 626 q 516 508 516 561 q 505 421 516 457 q 474 366 494 385 q 431 347 455 347 l 433 340 q 555 361 504 341 q 634 416 607 380 q 662 500 662 452 q 641 573 662 541 q 583 623 620 605 q 497 641 545 641 q 376 611 426 641 q 298 530 325 582 q 271 409 271 478 q 278 323 271 369 q 303 228 285 277 q 355 129 322 179 q 437 45 391 75 q 537 2 483 15 q 650 -11 591 -11 m 605 99 l 607 93 q 755 170 703 117 q 807 291 807 224 q 781 366 807 340 q 721 392 756 392 q 656 368 682 392 q 630 313 630 344 q 634 277 630 293 q 643 243 639 261 q 647 199 647 225 q 643 165 647 185 q 631 126 640 144 q 605 99 622 108 m 292 327 l 291 333 q 156 310 212 332 q 71 249 100 289 q 42 152 42 209 q 89 34 42 79 q 224 -11 137 -11 q 318 -2 280 -11 q 385 23 357 7 q 435 58 413 39 l 431 72 q 398 57 417 63 q 356 52 380 52 q 262 92 295 52 q 228 205 228 131 q 236 266 228 238 q 259 309 245 293 q 292 327 273 326"},"*":{ha:552,x_min:33,x_max:525,o:"m 278 509 l 274 509 q 264 575 274 548 q 240 621 254 601 q 217 658 227 640 q 207 696 207 675 q 277 765 207 765 q 328 747 310 765 q 346 696 346 730 q 336 657 346 675 q 312 620 326 640 q 289 575 299 601 q 278 509 278 548 m 277 511 l 276 507 q 210 517 239 519 q 159 509 181 516 q 116 498 136 502 q 77 500 97 494 q 33 588 11 522 q 66 632 44 620 q 120 633 88 644 q 153 611 140 627 q 181 577 167 596 q 218 541 196 559 q 277 511 240 523 m 275 510 l 278 508 q 247 448 255 476 q 240 397 240 421 q 237 353 239 373 q 223 316 235 333 q 125 302 182 261 q 94 346 99 321 q 110 398 90 371 q 140 423 122 415 q 181 440 159 432 q 228 463 204 448 q 275 510 252 478 m 275 508 l 278 510 q 325 463 301 478 q 371 439 349 447 q 412 423 394 431 q 443 398 430 415 q 426 301 483 343 q 375 285 400 282 q 329 316 350 289 q 315 353 317 333 q 313 397 313 373 q 305 448 312 421 q 275 508 298 476 m 276 511 q 335 540 313 523 q 371 577 357 558 q 399 611 386 596 q 433 633 413 627 q 520 587 498 654 q 519 533 530 556 q 476 500 508 511 q 436 498 456 494 q 394 509 416 502 q 342 517 371 516 q 277 507 314 519"},"(":{ha:329,x_min:60,x_max:324,o:"m 60 306 q 90 482 60 403 q 175 621 121 562 q 301 715 230 680 q 324 724 322 725 q 323 719 325 723 q 312 703 321 715 q 255 599 280 659 q 216 465 230 539 q 203 306 203 391 q 216 147 203 221 q 255 13 230 74 q 312 -90 280 -47 q 323 -107 321 -103 q 324 -111 325 -110 q 301 -102 322 -113 q 175 -8 230 -66 q 90 130 121 51 q 60 306 60 210"},")":{ha:324,x_min:1,x_max:265,o:"m 265 303 q 234 127 265 206 q 150 -12 204 47 q 24 -106 95 -71 q 1 -115 3 -116 q 2 -110 0 -114 q 13 -94 4 -106 q 70 10 45 -50 q 108 144 95 70 q 122 303 122 218 q 108 462 122 388 q 70 595 95 535 q 13 699 45 656 q 2 715 4 712 q 1 720 0 719 q 24 711 3 722 q 150 616 95 675 q 234 478 204 558 q 265 303 265 399"},"\xB7":{ha:292,x_min:51,x_max:241,o:"m 145 196 q 97 209 119 196 q 64 244 76 222 q 51 293 51 267 q 64 341 51 319 q 97 376 76 363 q 145 389 119 389 q 194 376 173 389 q 228 341 216 363 q 241 293 241 319 q 228 244 241 267 q 194 209 216 222 q 145 196 173 196"},"\u2019":{ha:193,x_min:28,x_max:209,o:"m 127 603 q 52 626 77 603 q 28 689 28 649 q 53 751 28 727 q 118 775 79 775 q 181 747 154 775 q 209 662 209 719 q 193 565 209 607 q 144 496 177 523 q 62 459 111 469 q 56 459 59 458 q 53 462 53 461 q 55 466 54 465 q 60 469 57 468 q 128 500 103 479 q 163 545 153 521 q 173 587 173 569 q 169 599 173 595 q 155 603 165 603"},"'":{ha:189,x_min:16,x_max:173,o:"m 89 415 q 84 417 87 415 q 81 425 82 420 l 21 696 q 28 778 9 749 q 95 807 48 807 q 162 777 144 807 q 167 697 181 747 l 98 425 q 94 417 96 419 q 89 415 92 415"},'"':{ha:369,x_min:16,x_max:352,o:"m 269 415 q 264 417 266 415 q 261 425 262 420 l 200 696 q 208 778 188 749 q 275 807 228 807 q 342 777 323 807 q 347 697 360 747 l 277 425 q 274 417 276 419 q 269 415 272 415 m 89 414 q 84 416 87 414 q 81 424 82 419 l 21 695 q 28 777 9 748 q 95 806 48 806 q 162 776 144 806 q 167 696 181 746 l 98 424 q 94 416 96 418 q 89 414 92 414"}},familyName:"Fraunces",resolution:1e3,capHeight:700,ascender:978,descender:-255,underlinePosition:-150,underlineThickness:25,boundingBox:{xMin:-14,yMin:-299,xMax:986,yMax:807}};var np={glyphs:{"0":{ha:1e3,x_min:0,x_max:875,o:"m 250 125 l 250 250 l 125 250 l 125 375 l 0 375 l 0 750 l 125 750 l 125 875 l 250 875 l 250 1000 l 625 1000 l 625 875 l 750 875 l 750 750 l 875 750 l 875 375 l 750 375 l 750 250 l 625 250 l 625 125 m 375 250 l 625 250 l 625 750 l 500 750 l 500 875 l 250 875 l 250 375 l 375 375"},"1":{ha:1e3,x_min:125,x_max:875,o:"m 125 125 l 125 250 l 375 250 l 375 750 l 250 750 l 250 875 l 375 875 l 375 1000 l 625 1000 l 625 250 l 875 250 l 875 125"},"2":{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 375 l 125 375 l 125 500 l 250 500 l 250 625 l 500 625 l 500 750 l 625 750 l 625 875 l 250 875 l 250 750 l 0 750 l 0 875 l 125 875 l 125 1000 l 750 1000 l 750 875 l 875 875 l 875 625 l 750 625 l 750 500 l 625 500 l 625 375 l 375 375 l 375 250 l 875 250 l 875 125"},"3":{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 375 l 250 375 l 250 250 l 625 250 l 625 500 l 250 500 l 250 625 l 375 625 l 375 750 l 500 750 l 500 875 l 125 875 l 125 1000 l 875 1000 l 875 875 l 750 875 l 750 750 l 625 750 l 625 625 l 750 625 l 750 500 l 875 500 l 875 250 l 750 250 l 750 125"},"4":{ha:1e3,x_min:0,x_max:875,o:"m 500 125 l 500 375 l 0 375 l 0 625 l 125 625 l 125 750 l 250 750 l 250 875 l 375 875 l 375 1000 l 750 1000 l 750 500 l 875 500 l 875 375 l 750 375 l 750 125 m 250 500 l 500 500 l 500 750 l 375 750 l 375 625 l 250 625"},"5":{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 375 l 250 375 l 250 250 l 625 250 l 625 625 l 0 625 l 0 1000 l 750 1000 l 750 875 l 250 875 l 250 750 l 750 750 l 750 625 l 875 625 l 875 250 l 750 250 l 750 125"},"6":{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 750 l 125 750 l 125 875 l 250 875 l 250 1000 l 750 1000 l 750 875 l 375 875 l 375 750 l 250 750 l 250 625 l 750 625 l 750 500 l 875 500 l 875 250 l 750 250 l 750 125 m 250 250 l 625 250 l 625 500 l 250 500"},"7":{ha:1e3,x_min:0,x_max:875,o:"m 250 125 l 250 500 l 375 500 l 375 625 l 500 625 l 500 750 l 625 750 l 625 875 l 250 875 l 250 750 l 0 750 l 0 1000 l 875 1000 l 875 750 l 750 750 l 750 625 l 625 625 l 625 500 l 500 500 l 500 125"},"8":{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 500 l 125 500 l 125 625 l 0 625 l 0 875 l 125 875 l 125 1000 l 625 1000 l 625 875 l 750 875 l 750 625 l 625 625 l 625 500 l 875 500 l 875 250 l 750 250 l 750 125 m 375 625 l 625 625 l 625 875 l 250 875 l 250 750 l 375 750 m 125 250 l 625 250 l 625 375 l 375 375 l 375 500 l 125 500"},"9":{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 500 250 l 500 375 l 625 375 l 625 500 l 125 500 l 125 625 l 0 625 l 0 875 l 125 875 l 125 1000 l 750 1000 l 750 875 l 875 875 l 875 375 l 750 375 l 750 250 l 625 250 l 625 125 m 250 625 l 625 625 l 625 875 l 250 875"},A:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 750 l 125 750 l 125 875 l 250 875 l 250 1000 l 625 1000 l 625 875 l 750 875 l 750 750 l 875 750 l 875 125 l 625 125 l 625 375 l 250 375 l 250 125 m 250 500 l 625 500 l 625 750 l 500 750 l 500 875 l 375 875 l 375 750 l 250 750"},B:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 750 1000 l 750 875 l 875 875 l 875 625 l 750 625 l 750 500 l 875 500 l 875 250 l 750 250 l 750 125 m 250 625 l 625 625 l 625 875 l 250 875 m 250 250 l 625 250 l 625 500 l 250 500"},C:{ha:1e3,x_min:0,x_max:875,o:"m 250 125 l 250 250 l 125 250 l 125 375 l 0 375 l 0 750 l 125 750 l 125 875 l 250 875 l 250 1000 l 750 1000 l 750 875 l 875 875 l 875 750 l 625 750 l 625 875 l 375 875 l 375 750 l 250 750 l 250 375 l 375 375 l 375 250 l 625 250 l 625 375 l 875 375 l 875 250 l 750 250 l 750 125"},D:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 625 1000 l 625 875 l 750 875 l 750 750 l 875 750 l 875 375 l 750 375 l 750 250 l 625 250 l 625 125 m 250 250 l 500 250 l 500 375 l 625 375 l 625 750 l 500 750 l 500 875 l 250 875"},E:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 875 1000 l 875 875 l 250 875 l 250 625 l 750 625 l 750 500 l 250 500 l 250 250 l 875 250 l 875 125"},F:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 875 1000 l 875 875 l 250 875 l 250 625 l 750 625 l 750 500 l 250 500 l 250 125"},G:{ha:1e3,x_min:0,x_max:875,o:"m 250 125 l 250 250 l 125 250 l 125 375 l 0 375 l 0 750 l 125 750 l 125 875 l 250 875 l 250 1000 l 875 1000 l 875 875 l 375 875 l 375 750 l 250 750 l 250 375 l 375 375 l 375 250 l 625 250 l 625 500 l 500 500 l 500 625 l 875 625 l 875 125"},H:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 250 1000 l 250 625 l 625 625 l 625 1000 l 875 1000 l 875 125 l 625 125 l 625 500 l 250 500 l 250 125"},I:{ha:1e3,x_min:125,x_max:875,o:"m 125 125 l 125 250 l 375 250 l 375 875 l 125 875 l 125 1000 l 875 1000 l 875 875 l 625 875 l 625 250 l 875 250 l 875 125"},J:{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 375 l 250 375 l 250 250 l 625 250 l 625 1000 l 875 1000 l 875 250 l 750 250 l 750 125"},K:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 250 1000 l 250 625 l 375 625 l 375 750 l 500 750 l 500 875 l 625 875 l 625 1000 l 875 1000 l 875 875 l 750 875 l 750 750 l 625 750 l 625 625 l 500 625 l 500 500 l 625 500 l 625 375 l 750 375 l 750 250 l 875 250 l 875 125 l 500 125 l 500 250 l 375 250 l 375 375 l 250 375 l 250 125"},L:{ha:1e3,x_min:125,x_max:875,o:"m 125 125 l 125 1000 l 375 1000 l 375 250 l 875 250 l 875 125"},M:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 250 1000 l 250 875 l 375 875 l 375 750 l 500 750 l 500 875 l 625 875 l 625 1000 l 875 1000 l 875 125 l 625 125 l 625 625 l 500 625 l 500 375 l 375 375 l 375 625 l 250 625 l 250 125"},N:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 250 1000 l 250 875 l 375 875 l 375 750 l 500 750 l 500 625 l 625 625 l 625 1000 l 875 1000 l 875 125 l 625 125 l 625 375 l 500 375 l 500 500 l 375 500 l 375 625 l 250 625 l 250 125"},O:{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 875 l 125 875 l 125 1000 l 750 1000 l 750 875 l 875 875 l 875 250 l 750 250 l 750 125 m 250 250 l 625 250 l 625 875 l 250 875"},P:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 750 1000 l 750 875 l 875 875 l 875 500 l 750 500 l 750 375 l 250 375 l 250 125 m 250 500 l 625 500 l 625 875 l 250 875"},Q:{ha:1e3,x_min:0,x_max:875,o:"m 875 875 l 875 375 l 750 375 l 750 250 l 625 250 l 625 125 l 125 125 l 125 250 l 0 250 l 0 875 l 125 875 l 125 1000 l 750 1000 l 750 875 m 625 875 l 250 875 l 250 250 l 500 250 l 500 375 l 375 375 l 375 500 l 625 500 m 750 125 l 750 250 l 875 250 l 875 125"},R:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 750 1000 l 750 875 l 875 875 l 875 500 l 625 500 l 625 375 l 750 375 l 750 250 l 875 250 l 875 125 l 500 125 l 500 250 l 375 250 l 375 375 l 250 375 l 250 125 m 250 500 l 500 500 l 500 625 l 625 625 l 625 875 l 250 875"},S:{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 375 l 250 375 l 250 250 l 625 250 l 625 500 l 125 500 l 125 625 l 0 625 l 0 875 l 125 875 l 125 1000 l 750 1000 l 750 875 l 875 875 l 875 750 l 625 750 l 625 875 l 250 875 l 250 625 l 750 625 l 750 500 l 875 500 l 875 250 l 750 250 l 750 125"},T:{ha:1e3,x_min:125,x_max:875,o:"m 375 125 l 375 875 l 125 875 l 125 1000 l 875 1000 l 875 875 l 625 875 l 625 125"},U:{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 1000 l 250 1000 l 250 250 l 625 250 l 625 1000 l 875 1000 l 875 250 l 750 250 l 750 125"},V:{ha:1e3,x_min:0,x_max:875,o:"m 375 125 l 375 250 l 250 250 l 250 375 l 125 375 l 125 500 l 0 500 l 0 1000 l 250 1000 l 250 625 l 375 625 l 375 500 l 500 500 l 500 625 l 625 625 l 625 1000 l 875 1000 l 875 500 l 750 500 l 750 375 l 625 375 l 625 250 l 500 250 l 500 125"},W:{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 1000 l 250 1000 l 250 500 l 375 500 l 375 1000 l 500 1000 l 500 500 l 625 500 l 625 1000 l 875 1000 l 875 250 l 750 250 l 750 125 l 625 125 l 625 250 l 500 250 l 500 375 l 375 375 l 375 250 l 250 250 l 250 125"},X:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 375 l 125 375 l 125 500 l 250 500 l 250 625 l 125 625 l 125 750 l 0 750 l 0 1000 l 250 1000 l 250 750 l 375 750 l 375 625 l 500 625 l 500 750 l 625 750 l 625 1000 l 875 1000 l 875 750 l 750 750 l 750 625 l 625 625 l 625 500 l 750 500 l 750 375 l 875 375 l 875 125 l 625 125 l 625 375 l 500 375 l 500 500 l 375 500 l 375 375 l 250 375 l 250 125"},Y:{ha:1e3,x_min:125,x_max:875,o:"m 375 125 l 375 500 l 250 500 l 250 625 l 125 625 l 125 1000 l 375 1000 l 375 625 l 625 625 l 625 1000 l 875 1000 l 875 625 l 750 625 l 750 500 l 625 500 l 625 125"},Z:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 375 l 125 375 l 125 500 l 250 500 l 250 625 l 375 625 l 375 750 l 500 750 l 500 875 l 0 875 l 0 1000 l 875 1000 l 875 750 l 750 750 l 750 625 l 625 625 l 625 500 l 500 500 l 500 375 l 375 375 l 375 250 l 875 250 l 875 125"},".":{ha:1e3,x_min:250,x_max:500,o:"m 250 125 l 250 375 l 500 375 l 500 125"},",":{ha:1e3,x_min:125,x_max:500,o:"m 125 0 l 125 125 l 250 125 l 250 375 l 500 375 l 500 125 l 375 125 l 375 0"},"!":{ha:1e3,x_min:250,x_max:625,o:"m 250 375 l 250 1000 l 625 1000 l 625 625 l 500 625 l 500 375 m 250 125 l 250 250 l 500 250 l 500 125"},"?":{ha:1e3,x_min:0,x_max:875,o:"m 250 375 l 250 500 l 500 500 l 500 625 l 625 625 l 625 750 l 250 750 l 250 625 l 0 625 l 0 875 l 125 875 l 125 1000 l 750 1000 l 750 875 l 875 875 l 875 625 l 750 625 l 750 500 l 625 500 l 625 375 m 250 125 l 250 250 l 625 250 l 625 125"},":":{ha:1e3,x_min:250,x_max:500,o:"m 250 625 l 250 875 l 500 875 l 500 625 m 250 250 l 250 500 l 500 500 l 500 250"},";":{ha:1e3,x_min:125,x_max:500,o:"m 250 625 l 250 875 l 500 875 l 500 625 m 125 125 l 125 250 l 250 250 l 250 500 l 500 500 l 500 250 l 375 250 l 375 125"},"-":{ha:1e3,x_min:125,x_max:875,o:"m 125 500 l 125 625 l 875 625 l 875 500"},"\u2013":{ha:1e3,x_min:0,x_max:875,o:"m 0 500 l 0 625 l 875 625 l 875 500"},"\u2014":{ha:1e3,x_min:0,x_max:1e3,o:"m 0 500 l 0 625 l 1000 625 l 1000 500"},"+":{ha:1e3,x_min:125,x_max:875,o:"m 375 250 l 375 500 l 125 500 l 125 625 l 375 625 l 375 875 l 625 875 l 625 625 l 875 625 l 875 500 l 625 500 l 625 250"},"\xD7":{ha:1e3,x_min:125,x_max:750,o:"m 250 875 l 250 750 l 125 750 l 125 875 m 750 875 l 750 750 l 625 750 l 625 875 m 375 750 l 375 625 l 250 625 l 250 750 m 500 750 l 625 750 l 625 625 l 500 625 m 375 625 l 500 625 l 500 500 l 375 500 m 250 500 l 375 500 l 375 375 l 250 375 m 500 375 l 500 500 l 625 500 l 625 375 m 125 375 l 250 375 l 250 250 l 125 250 m 625 250 l 625 375 l 750 375 l 750 250"},"/":{ha:1e3,x_min:0,x_max:875,o:"m 875 1000 l 875 875 l 750 875 l 750 1000 m 625 875 l 750 875 l 750 750 l 625 750 m 500 750 l 625 750 l 625 625 l 500 625 m 375 625 l 500 625 l 500 500 l 375 500 m 250 500 l 375 500 l 375 375 l 250 375 m 125 375 l 250 375 l 250 250 l 125 250 m 0 250 l 125 250 l 125 125 l 0 125"},"%":{ha:1e3,x_min:0,x_max:875,o:"m 250 875 l 125 875 l 125 1000 l 375 1000 l 375 750 l 250 750 m 875 1000 l 875 875 l 750 875 l 750 1000 m 250 625 l 0 625 l 0 875 l 125 875 l 125 750 l 250 750 m 625 875 l 750 875 l 750 750 l 625 750 m 500 750 l 625 750 l 625 625 l 500 625 m 375 625 l 500 625 l 500 500 l 375 500 m 250 500 l 375 500 l 375 375 l 250 375 m 625 500 l 875 500 l 875 250 l 750 250 l 750 375 l 625 375 m 125 375 l 250 375 l 250 250 l 125 250 m 625 250 l 750 250 l 750 125 l 500 125 l 500 375 l 625 375 m 0 250 l 125 250 l 125 125 l 0 125"},"#":{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 375 l 125 375 l 125 750 l 0 750 l 0 875 l 125 875 l 125 1000 l 375 1000 l 375 875 l 500 875 l 500 1000 l 750 1000 l 750 875 l 875 875 l 875 750 l 750 750 l 750 375 l 875 375 l 875 250 l 750 250 l 750 125 l 500 125 l 500 250 l 375 250 l 375 125 m 375 375 l 500 375 l 500 750 l 375 750"},"&":{ha:1e3,x_min:0,x_max:875,o:"m 625 375 l 750 375 l 750 250 l 875 250 l 875 125 l 125 125 l 125 250 l 0 250 l 0 500 l 125 500 l 125 625 l 0 625 l 0 875 l 125 875 l 125 1000 l 500 1000 l 500 875 l 625 875 l 625 625 l 500 625 l 500 500 l 625 500 m 250 625 l 375 625 l 375 875 l 250 875 m 500 375 l 375 375 l 375 500 l 250 500 l 250 250 l 500 250 m 875 500 l 875 375 l 750 375 l 750 500"},"*":{ha:1e3,x_min:0,x_max:875,o:"m 125 250 l 125 375 l 250 375 l 250 500 l 0 500 l 0 625 l 250 625 l 250 750 l 125 750 l 125 875 l 375 875 l 375 750 l 500 750 l 500 875 l 750 875 l 750 750 l 625 750 l 625 625 l 875 625 l 875 500 l 625 500 l 625 375 l 750 375 l 750 250 l 500 250 l 500 375 l 375 375 l 375 250"},"(":{ha:1e3,x_min:250,x_max:750,o:"m 500 125 l 500 250 l 375 250 l 375 375 l 250 375 l 250 750 l 375 750 l 375 875 l 500 875 l 500 1000 l 750 1000 l 750 875 l 625 875 l 625 750 l 500 750 l 500 375 l 625 375 l 625 250 l 750 250 l 750 125"},")":{ha:1e3,x_min:125,x_max:625,o:"m 125 125 l 125 250 l 250 250 l 250 375 l 375 375 l 375 750 l 250 750 l 250 875 l 125 875 l 125 1000 l 375 1000 l 375 875 l 500 875 l 500 750 l 625 750 l 625 375 l 500 375 l 500 250 l 375 250 l 375 125"},"\xB7":{ha:1e3,x_min:250,x_max:500,o:"m 250 375 l 250 625 l 500 625 l 500 375"},"\u2019":{ha:1e3,x_min:250,x_max:625,o:"m 250 625 l 250 750 l 375 750 l 375 1000 l 625 1000 l 625 750 l 500 750 l 500 625"},"'":{ha:1e3,x_min:250,x_max:500,o:"m 250 625 l 250 1000 l 500 1000 l 500 625"},'"':{ha:1e3,x_min:125,x_max:750,o:"m 125 625 l 125 1000 l 375 1000 l 375 625 m 500 625 l 500 1000 l 750 1000 l 750 625"}},familyName:"Press Start 2P",resolution:1e3,capHeight:1e3,ascender:1e3,descender:0,underlinePosition:-75,underlineThickness:50,boundingBox:{xMin:0,yMin:0,xMax:1e3,yMax:1e3}};var sp={glyphs:{"0":{ha:732,x_min:14,x_max:718,o:"m 366 -14 q 106 82 197 -14 q 14 389 14 178 q 106 696 14 600 q 366 792 197 792 q 627 696 535 792 q 718 389 718 600 q 634 90 718 194 q 366 -14 549 -14 m 366 164 q 434 238 434 164 l 434 540 q 366 614 434 614 q 298 540 298 614 l 298 238 q 366 164 298 164"},"1":{ha:522,x_min:14,x_max:488,o:"m 44 0 l 44 164 l 140 164 l 140 614 l 14 614 l 14 727 l 236 778 l 404 778 l 404 164 l 488 164 l 488 0"},"2":{ha:649,x_min:12,x_max:626,o:"m 12 86 q 38 238 12 172 q 121 363 63 304 q 281 484 179 421 q 324 517 311 503 q 336 549 336 530 q 277 590 336 590 q 176 567 233 590 q 73 509 119 544 l 14 722 q 161 777 78 754 q 328 799 244 799 q 542 738 466 799 q 618 565 618 677 q 592 460 618 505 q 528 383 565 414 q 430 312 490 352 q 332 237 363 268 q 300 164 300 205 l 421 164 l 421 221 l 626 221 l 626 0 l 12 0"},"3":{ha:623,x_min:14,x_max:611,o:"m 486 397 q 546 365 517 389 q 593 303 574 340 q 611 221 611 266 q 533 49 611 111 q 300 -14 454 -14 q 154 3 227 -14 q 24 43 81 19 l 24 256 q 153 212 86 229 q 279 195 219 195 q 341 208 321 195 q 360 251 360 221 q 290 309 360 309 l 218 309 l 218 473 l 274 473 q 340 529 340 473 q 274 583 340 583 q 174 561 226 583 q 73 502 122 538 l 14 715 q 153 770 75 747 q 310 792 231 792 q 522 734 448 792 q 596 570 596 676 q 565 462 596 504 q 486 397 534 419"},"4":{ha:694,x_min:18,x_max:676,o:"m 343 0 l 343 125 l 18 125 l 18 289 l 363 778 l 607 778 l 607 277 l 676 277 l 676 125 l 607 125 l 607 0 m 203 277 l 343 277 l 343 474"},"5":{ha:651,x_min:22,x_max:637,o:"m 407 514 q 578 448 519 514 q 637 269 637 382 q 599 120 637 184 q 484 21 560 56 q 300 -14 408 -14 q 154 3 227 -14 q 24 43 81 19 l 24 256 q 260 195 154 195 q 342 218 315 195 q 369 288 369 240 q 353 343 369 323 q 302 363 337 363 q 259 350 275 363 q 232 311 242 336 l 22 311 l 65 778 l 597 778 l 597 584 l 265 584 l 256 481 q 407 514 319 514"},"6":{ha:693,x_min:18,x_max:685,o:"m 449 491 q 623 427 560 491 q 685 249 685 363 q 602 54 685 122 q 366 -14 518 -14 q 104 82 190 -14 q 18 374 18 177 q 120 691 18 590 q 399 792 221 792 q 535 780 472 792 q 636 747 598 767 l 636 545 q 549 573 598 562 q 445 583 500 583 q 302 477 302 583 l 302 465 q 372 484 333 476 q 449 491 411 491 m 370 164 q 421 185 404 164 q 438 249 438 205 q 421 312 438 289 q 367 334 403 334 q 302 321 333 334 l 302 241 q 319 183 302 201 q 370 164 336 164"},"7":{ha:648,x_min:10,x_max:638,o:"m 122 0 q 160 197 122 89 q 254 407 197 305 q 369 584 311 508 l 220 584 l 220 492 l 10 492 l 10 778 l 638 778 l 638 626 q 530 435 583 544 q 441 210 476 325 q 405 0 405 94 l 122 0"},"8":{ha:700,x_min:10,x_max:690,o:"m 553 404 q 650 338 609 384 q 690 215 690 291 q 604 44 690 102 q 350 -14 517 -14 q 97 43 183 -14 q 10 209 10 99 q 54 336 10 288 q 157 404 97 384 q 68 466 104 423 q 32 575 32 508 q 113 737 32 682 q 350 792 193 792 q 586 737 506 792 q 666 575 666 682 q 634 465 666 507 q 553 404 602 423 m 350 614 q 282 544 282 614 q 350 478 282 478 q 418 544 418 478 q 350 614 418 614 m 350 164 q 428 244 428 164 q 408 305 428 284 q 350 326 388 326 q 292 305 312 326 q 272 244 272 284 q 350 164 272 164"},"9":{ha:693,x_min:10,x_max:677,o:"m 325 792 q 590 697 503 792 q 677 404 677 601 q 576 87 677 188 q 296 -14 474 -14 q 160 -1 223 -14 q 59 31 97 11 l 59 233 q 146 206 97 216 q 250 195 195 195 q 393 301 393 195 l 393 312 q 255 287 329 287 q 75 350 139 287 q 10 524 10 412 q 92 725 10 657 q 325 792 174 792 m 257 528 q 275 466 257 488 q 328 444 292 444 q 393 457 362 444 l 393 537 q 376 596 393 577 q 325 614 359 614 q 274 593 291 614 q 257 528 257 572"},A:{ha:806,x_min:12,x_max:794,o:"m 754 164 l 794 164 l 794 0 l 402 0 l 402 164 l 462 164 l 446 244 l 310 244 l 294 164 l 354 164 l 354 0 l 12 0 l 12 164 l 52 164 l 221 778 l 585 778 m 332 350 l 424 350 l 383 549 l 373 549"},B:{ha:775,x_min:20,x_max:763,o:"m 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 479 778 q 674 727 604 778 q 744 581 744 676 q 716 482 744 522 q 651 421 688 441 q 578 393 613 400 l 578 383 q 706 338 649 376 q 763 202 763 300 q 684 49 763 97 q 479 0 605 0 l 20 0 m 404 450 q 448 466 433 450 q 462 514 462 481 l 462 550 q 448 599 462 583 q 404 614 433 614 l 350 614 l 350 450 m 411 164 q 455 180 440 164 q 469 228 469 195 l 469 272 q 455 321 469 305 q 411 336 440 336 l 350 336 l 350 164"},C:{ha:722,x_min:14,x_max:704,o:"m 408 -14 q 117 82 219 -14 q 14 389 14 178 q 406 792 14 792 q 583 769 501 792 q 704 718 664 746 l 704 468 l 464 468 l 464 540 q 447 596 464 578 q 396 614 430 614 q 345 596 362 614 q 328 540 328 578 l 328 238 q 345 182 328 200 q 396 164 362 164 q 447 182 430 164 q 464 238 464 200 l 464 319 l 704 319 l 704 60 q 583 9 663 32 q 408 -14 502 -14"},D:{ha:804,x_min:20,x_max:790,o:"m 20 164 l 70 164 l 70 613 l 20 613 l 20 778 l 426 778 q 692 687 593 778 q 790 389 790 595 q 692 92 790 183 q 426 0 593 0 l 20 0 m 408 164 q 459 182 442 164 q 476 238 476 200 l 476 540 q 408 614 476 614 l 350 614 l 350 164"},E:{ha:713,x_min:20,x_max:695,o:"m 20 0 l 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 695 778 l 695 476 l 471 476 l 471 614 l 350 614 l 350 456 l 438 456 l 438 342 l 350 342 l 350 164 l 471 164 l 471 322 l 695 322 l 695 0"},F:{ha:632,x_min:20,x_max:618,o:"m 20 0 l 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 618 778 l 618 519 l 441 519 l 441 614 l 350 614 l 350 448 l 501 448 l 501 334 l 350 334 l 350 164 l 481 164 l 481 0"},G:{ha:782,x_min:14,x_max:774,o:"m 774 250 l 724 250 l 724 50 q 596 6 680 25 q 413 -14 511 -14 q 120 85 226 -14 q 14 389 14 183 q 120 696 14 600 q 421 792 225 792 q 599 772 516 792 q 724 727 682 752 l 724 488 l 474 488 l 474 535 q 457 596 474 577 q 401 614 439 614 q 346 596 363 614 q 328 535 328 577 l 328 243 q 346 183 328 201 q 401 164 363 164 q 457 183 439 164 q 474 243 474 201 l 474 250 l 420 250 l 420 399 l 774 399"},H:{ha:840,x_min:20,x_max:820,o:"m 820 614 l 770 614 l 770 164 l 820 164 l 820 0 l 442 0 l 442 164 l 490 164 l 490 329 l 350 329 l 350 164 l 398 164 l 398 0 l 20 0 l 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 398 778 l 398 614 l 350 614 l 350 462 l 490 462 l 490 614 l 442 614 l 442 778 l 820 778"},I:{ha:420,x_min:20,x_max:400,o:"m 20 0 l 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 400 778 l 400 614 l 350 614 l 350 164 l 400 164 l 400 0"},J:{ha:666,x_min:12,x_max:648,o:"m 273 -14 q 127 4 196 -14 q 12 52 58 21 l 12 228 l 212 228 l 212 218 q 264 164 212 164 q 305 179 291 164 q 318 224 318 193 l 318 614 l 228 614 l 228 778 l 648 778 l 648 614 l 598 614 l 598 278 q 512 59 598 131 q 273 -14 426 -14"},K:{ha:835,x_min:20,x_max:819,o:"m 769 164 l 819 164 l 819 0 l 546 0 l 396 310 l 350 272 l 350 164 l 398 164 l 398 0 l 20 0 l 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 398 778 l 398 614 l 350 614 l 350 482 l 505 614 l 442 614 l 442 778 l 814 778 l 814 614 l 764 614 l 597 476"},L:{ha:653,x_min:20,x_max:639,o:"m 20 0 l 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 442 778 l 442 614 l 350 614 l 350 164 l 440 164 l 440 256 l 639 256 l 639 0"},M:{ha:1143,x_min:20,x_max:1123,o:"m 1123 614 l 1073 614 l 1073 164 l 1123 164 l 1123 0 l 745 0 l 745 164 l 793 164 l 793 514 l 623 0 l 475 0 l 300 509 l 300 164 l 348 164 l 348 0 l 20 0 l 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 478 778 l 582 466 l 682 778 l 1123 778"},N:{ha:942,x_min:20,x_max:924,o:"m 596 778 l 924 778 l 924 614 l 874 614 l 874 0 l 593 0 l 300 451 l 300 164 l 348 164 l 348 0 l 20 0 l 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 381 778 l 644 377 l 644 614 l 596 614"},O:{ha:792,x_min:14,x_max:778,o:"m 396 -14 q 114 82 213 -14 q 14 389 14 178 q 114 696 14 600 q 396 792 213 792 q 679 696 579 792 q 778 389 778 600 q 679 82 778 178 q 396 -14 579 -14 m 396 164 q 447 182 430 164 q 464 238 464 200 l 464 540 q 447 596 464 578 q 396 614 430 614 q 345 596 362 614 q 328 540 328 578 l 328 238 q 345 182 328 199 q 396 164 362 164"},P:{ha:738,x_min:20,x_max:724,o:"m 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 459 778 q 656 723 588 778 q 724 543 724 667 q 656 364 724 419 q 459 308 588 308 l 350 308 l 350 164 l 446 164 l 446 0 l 20 0 m 384 450 q 442 514 442 450 l 442 550 q 428 599 442 583 q 384 614 413 614 l 350 614 l 350 450"},Q:{ha:810,x_min:14,x_max:794,o:"m 794 -78 q 455 -65 582 -78 q 235 -9 327 -52 q 81 118 143 33 q 14 389 14 215 q 115 692 14 592 q 396 792 215 792 q 677 704 576 792 q 778 439 778 615 q 754 297 778 363 q 669 174 729 230 l 674 164 l 794 164 l 794 -78 m 396 164 q 464 238 464 164 l 464 540 q 396 614 464 614 q 328 540 328 614 l 328 238 q 396 164 328 164"},R:{ha:800,x_min:20,x_max:784,o:"m 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 479 778 q 676 725 608 778 q 744 553 744 672 q 717 437 744 486 q 640 369 690 388 l 641 359 q 737 241 737 344 l 737 164 l 784 164 l 784 0 l 467 0 l 467 235 q 456 294 467 274 q 420 321 444 314 q 350 328 395 328 l 350 164 l 416 164 l 416 0 l 20 0 m 404 450 q 448 466 433 450 q 462 514 462 481 l 462 550 q 448 599 462 583 q 404 614 433 614 l 350 614 l 350 450"},S:{ha:674,x_min:8,x_max:666,o:"m 330 -14 q 149 3 234 -14 q 17 40 63 19 l 17 238 l 237 238 q 251 193 237 207 q 302 179 265 179 q 347 189 333 179 q 360 217 360 198 q 347 245 360 233 q 302 268 334 256 l 216 298 q 57 397 105 340 q 8 551 8 454 q 86 731 8 669 q 344 792 163 792 q 508 775 431 792 q 631 728 584 757 l 631 549 l 431 549 q 369 599 431 599 q 327 592 339 599 q 314 565 314 584 q 329 538 314 548 q 376 517 343 528 l 463 487 q 618 394 569 451 q 666 243 666 336 q 581 51 666 116 q 330 -14 495 -14"},T:{ha:780,x_min:14,x_max:766,o:"m 766 536 l 594 536 l 594 614 l 530 614 l 530 164 l 600 164 l 600 0 l 180 0 l 180 164 l 250 164 l 250 614 l 186 614 l 186 536 l 14 536 l 14 778 l 766 778"},U:{ha:781,x_min:16,x_max:765,o:"m 394 -14 q 152 55 237 -14 q 66 279 66 124 l 66 614 l 16 614 l 16 778 l 386 778 l 386 614 l 346 614 l 346 228 q 361 180 346 195 q 404 164 375 164 q 448 180 433 164 q 462 228 462 195 l 462 614 l 422 614 l 422 778 l 765 778 l 765 614 l 715 614 l 715 279 q 632 55 715 124 q 394 -14 549 -14"},V:{ha:786,x_min:12,x_max:774,o:"m 440 778 l 774 778 l 774 614 l 734 614 l 555 0 l 231 0 l 52 614 l 12 614 l 12 778 l 396 778 l 396 614 l 344 614 l 413 279 l 423 279 l 492 614 l 440 614"},W:{ha:1207,x_min:12,x_max:1195,o:"m 875 778 l 1195 778 l 1195 614 l 1155 614 l 1006 0 l 707 0 l 616 432 l 606 432 l 510 0 l 211 0 l 52 614 l 12 614 l 12 778 l 382 778 l 382 614 l 344 614 l 383 359 l 393 359 l 488 778 l 776 778 l 864 359 l 874 359 l 913 614 l 875 614"},X:{ha:800,x_min:14,x_max:786,o:"m 744 164 l 786 164 l 786 0 l 408 0 l 408 164 l 449 164 l 391 246 l 381 246 l 323 164 l 364 164 l 364 0 l 14 0 l 14 164 l 66 164 l 258 380 l 58 614 l 16 614 l 16 778 l 391 778 l 391 614 l 353 614 l 408 532 l 418 532 l 473 614 l 435 614 l 435 778 l 782 778 l 782 614 l 730 614 l 541 401"},Y:{ha:776,x_min:12,x_max:764,o:"m 457 778 l 764 778 l 764 614 l 724 614 l 531 268 l 531 164 l 581 164 l 581 0 l 201 0 l 201 164 l 251 164 l 251 268 l 52 614 l 12 614 l 12 778 l 399 778 l 399 614 l 364 614 l 423 459 l 433 459 l 492 614 l 457 614"},Z:{ha:689,x_min:14,x_max:675,o:"m 476 246 l 675 246 l 675 0 l 14 0 l 14 144 l 322 614 l 218 614 l 218 532 l 19 532 l 19 778 l 659 778 l 659 634 l 352 164 l 476 164"},".":{ha:244,x_min:40,x_max:196,o:"m 40 0 l 40 164 l 196 164 l 196 0"},",":{ha:245,x_min:40,x_max:197,o:"m 40 -161 l 92 0 l 41 0 l 41 164 l 197 164 l 197 0 l 126 -161"},"!":{ha:339,x_min:20,x_max:319,o:"m 66 219 l 20 728 l 20 778 l 319 778 l 319 728 l 272 219 m 56 0 l 56 164 l 282 164 l 282 0"},"?":{ha:630,x_min:14,x_max:620,o:"m 153 265 q 170 344 153 310 q 209 398 186 377 q 268 444 232 419 q 321 487 304 469 q 338 530 338 505 q 278 570 338 570 q 173 552 231 570 q 67 511 115 534 l 14 715 q 167 769 80 746 q 340 792 254 792 q 489 767 425 792 q 586 694 552 741 q 620 585 620 647 q 603 494 620 531 q 560 434 585 457 q 494 382 535 410 q 440 340 460 358 q 406 296 419 322 q 392 234 392 270 l 392 219 l 153 219 m 153 0 l 153 164 l 391 164 l 391 0"},":":{ha:244,x_min:40,x_max:196,o:"m 40 325 l 40 489 l 196 489 l 196 325 m 40 0 l 40 164 l 196 164 l 196 0"},";":{ha:245,x_min:40,x_max:197,o:"m 41 325 l 41 489 l 197 489 l 197 325 m 40 -161 l 92 0 l 41 0 l 41 164 l 197 164 l 197 0 l 126 -161"},"-":{ha:389,x_min:34,x_max:355,o:"m 34 199 l 34 363 l 355 363 l 355 199"},"\u2013":{ha:553,x_min:0,x_max:553,o:"m 0 199 l 0 363 l 553 363 l 553 199"},"\u2014":{ha:939,x_min:0,x_max:939,o:"m 0 199 l 0 363 l 939 363 l 939 199"},"+":{ha:576,x_min:40,x_max:536,o:"m 205 94 l 205 259 l 40 259 l 40 426 l 205 426 l 205 591 l 372 591 l 372 426 l 536 426 l 536 259 l 372 259 l 372 94"},"\xD7":{ha:570,x_min:32,x_max:538,o:"m 156 80 l 32 203 l 161 332 l 32 462 l 156 586 l 285 456 l 415 586 l 538 462 l 408 332 l 538 203 l 415 80 l 285 209"},"/":{ha:423,x_min:-20,x_max:443,o:"m -20 -151 l -20 -119 l 301 842 l 443 842 l 443 810 l 123 -151"},"%":{ha:885,x_min:30,x_max:855,o:"m 193 386 q 30 586 30 386 q 72 740 30 692 q 193 788 114 788 q 357 586 357 788 q 318 438 357 489 q 193 386 279 386 m 193 473 q 222 510 222 473 l 222 665 q 193 701 222 701 q 165 665 165 701 l 165 510 q 193 473 165 473 m 159 0 l 159 32 l 624 778 l 726 778 l 726 746 l 262 0 m 691 -10 q 528 190 528 -10 q 570 344 528 296 q 691 392 612 392 q 855 190 855 392 q 816 42 855 93 q 691 -10 777 -10 m 691 77 q 720 114 720 77 l 720 269 q 691 305 720 305 q 663 269 663 305 l 663 114 q 691 77 663 77"},"#":{ha:732,x_min:22,x_max:710,o:"m 113 0 l 113 22 l 134 193 l 22 193 l 38 332 l 151 332 l 164 437 l 42 437 l 58 576 l 182 576 l 207 778 l 349 778 l 349 756 l 326 576 l 446 576 l 471 778 l 613 778 l 613 756 l 590 576 l 710 576 l 694 437 l 573 437 l 560 332 l 690 332 l 674 193 l 543 193 l 520 0 l 377 0 l 377 22 l 398 193 l 279 193 l 256 0 m 296 332 l 415 332 l 428 437 l 309 437"},"&":{ha:828,x_min:16,x_max:814,o:"m 350 -14 q 103 46 189 -14 q 16 210 16 105 q 58 332 16 280 q 163 409 100 383 q 79 491 107 449 q 51 589 51 533 q 92 699 51 653 q 206 769 133 745 q 371 792 278 792 q 543 769 465 792 q 659 718 621 746 l 659 526 l 449 526 l 449 544 q 432 597 449 580 q 381 614 415 614 q 318 565 318 614 q 334 529 318 546 q 383 486 349 512 l 546 363 q 550 411 550 384 l 550 429 l 791 429 l 791 262 l 733 262 l 724 229 l 814 161 l 692 0 l 619 56 q 350 -14 519 -14 m 376 164 q 456 182 425 164 l 329 280 q 299 256 310 271 q 288 221 288 240 q 311 178 288 191 q 376 164 333 164"},"*":{ha:409,x_min:16,x_max:393,o:"m 145 409 l 145 424 l 163 518 l 88 458 l 76 451 l 16 551 l 27 560 l 127 593 l 27 626 l 16 633 l 76 736 l 88 729 l 163 667 l 145 761 l 145 778 l 265 778 l 265 761 l 247 667 l 321 729 l 332 736 l 393 633 l 381 626 l 280 593 l 381 560 l 393 551 l 332 451 l 321 458 l 247 518 l 265 424 l 265 409"},"(":{ha:374,x_min:36,x_max:364,o:"m 255 -232 q 97 4 158 -145 q 36 328 36 153 q 97 652 36 503 q 255 888 158 801 l 364 838 q 258 607 294 736 q 222 328 222 478 q 258 49 222 178 q 364 -182 294 -80 l 255 -232"},")":{ha:374,x_min:10,x_max:338,o:"m 10 -182 q 116 49 80 -80 q 152 328 152 178 q 116 607 152 478 q 10 838 80 736 l 119 888 q 277 652 216 801 q 338 328 338 503 q 277 4 338 153 q 119 -232 216 -145"},"\xB7":{ha:204,x_min:24,x_max:180,o:"m 24 320 l 24 472 l 180 472 l 180 320"},"\u2019":{ha:210,x_min:30,x_max:170,o:"m 36 548 l 79 650 l 30 650 l 30 778 l 170 778 l 170 650 l 103 548"},"'":{ha:193,x_min:25,x_max:168,o:"m 40 548 l 25 778 l 168 778 l 153 548"},'"':{ha:356,x_min:25,x_max:331,o:"m 203 548 l 188 778 l 331 778 l 316 548 m 40 548 l 25 778 l 168 778 l 153 548"}},familyName:"Alfa Slab One",resolution:1e3,capHeight:778,ascender:1036,descender:-333,underlinePosition:-75,underlineThickness:50,boundingBox:{xMin:-20,yMin:-232,xMax:1195,yMax:888}};var pc={paper:ip,sunset:np,primetime:sp},su=new Map,ru=new Map,ou=new Map;function b3(s){let e=pc[s]||pc.paper;return su.has(s)||su.set(s,new fc(e)),su.get(s)}function _r(s){let e=pc[s]||pc.paper;return{resolution:e.resolution,capHeight:e.capHeight,glyphs:e.glyphs}}function rp(s,e){let{glyphs:t}=_r(s);return[...String(e)].every(i=>i===" "||t[i])}var xr={paper:{bevel:.06,curveSegments:4,tracking:.02},sunset:{bevel:0,curveSegments:1,tracking:.06},primetime:{bevel:.05,curveSegments:4,tracking:.035}};function op(s,e,t,i){let n=xr[s]||xr.paper,{resolution:r,glyphs:o}=_r(s),a=o[e];if(!a)return null;let l=t/r,c=a.ha*l,h=a.o?b3(s).generateShapes(e,t):[];if(!h.length)return{geometry:null,advance:c,width:c,height:0};let u=n.bevel*t,d=new bn(h,{depth:i,curveSegments:n.curveSegments,steps:1,bevelEnabled:u>0,bevelThickness:u,bevelSize:u*.8,bevelOffset:0,bevelSegments:1});d.computeBoundingBox();let f=d.boundingBox;return{geometry:d,advance:c,width:f.max.x-f.min.x,height:f.max.y-f.min.y,box:f}}function ap(s,e,t=40,i=8,n=!1){let r=`${s}|${e}|${t}|${i}|${n}`;if(ru.has(r))return ru.get(r);let o=op(s,e,t,i),a;if(!o||!o.geometry)a={geometry:null,advance:o?o.advance:t*.4,width:o?o.width:0,height:0};else{let l=o.geometry.clone(),c=(o.box.min.x+o.box.max.x)/2,h=(o.box.min.y+o.box.max.y)/2;l.translate(-c,n?0:-h,0),o.geometry.dispose(),a={geometry:l,advance:o.advance,width:o.width,height:o.height}}return ru.set(r,a),a}function au(s,e,{size:t=40,depth:i=8,tracking:n,align:r="center"}={}){let o=`${s}|${e}|${t}|${i}|${n}|${r}`;if(ou.has(o))return ou.get(o);let a=xr[s]||xr.paper,l=(n??a.tracking)*t,{capHeight:c,resolution:h,glyphs:u}=_r(s),d=c/h*t,f=[],p=0;for(let M of String(e).toUpperCase()){if(M===" "){p+=(u.I?u.I.ha:400)*(t/h)*.9;continue}let y=op(s,M,t,i);if(!y){p+=t*.5;continue}if(y.geometry){let w=y.geometry;w.translate(p,0,0),f.push(w)}p+=y.advance+l}let g=Math.max(0,p-l),m=r==="left"?0:r==="right"?-g:-g/2,x;if(!f.length)x=new ht;else{x=Do(f,!1);for(let M of f)M.dispose()}f.length&&(x.translate(m,-d/2,0),x.computeBoundingBox());let _={geometry:x,width:g,capHeight:d};return ou.set(o,_),_}function lp(s,e,t=40,i){let n=xr[s]||xr.paper,r=(i??n.tracking)*t,{resolution:o,glyphs:a}=_r(s),l=[],c=0;for(let u of String(e).toUpperCase()){let d=a[u],f=u===" "?(a.I?a.I.ha:400)*(t/o)*.9:d?d.ha*(t/o):t*.5;u!==" "&&d&&l.push({ch:u,x:c+f/2,advance:f}),c+=f+r}let h=Math.max(0,c-r);for(let u of l)u.x-=h/2;return{letters:l,total:h}}function lu(s,e,t=.55,i=!0){return s==="sunset"?new Xe({color:Je(e),emissive:Je(e),emissiveIntensity:.9+t,roughness:.6,flatShading:!0,transparent:i}):s==="primetime"?new Jt({color:Je(e),emissive:Je(e),emissiveIntensity:.25+t*.5,roughness:.18,metalness:.6,clearcoat:1,transparent:i}):new Jt({color:Je(e),emissive:Je(e),emissiveIntensity:t*.25,roughness:.35,metalness:.05,clearcoat:.8,clearcoatRoughness:.25,transparent:i})}var mc=class{constructor(e,t){this.group=new ue,this.items=[],this.faceYaw=0,this.setTheme(e,t)}setTheme(e,t){this.theme=e,this.palette=t,this.clear()}clear(){for(let e of this.items)this.dispose(e);this.items.length=0}dispose(e){this.group.remove(e.mesh),e.mesh.material.dispose()}show({text:e,position:t=[0,0,80],size:i=34,depth:n=10,color:r=this.palette.amber,glow:o=.6,style:a="slam",life:l=1.6,tilt:c=0,key:h=null}){if(h){let g=this.items.find(m=>m.key===h);if(g&&g.text===e)return g.t=Math.min(g.t,g.life*0),g.life=l,g.dying=!1,g.base=t.slice(),g;g&&(this.dispose(g),this.items.splice(this.items.indexOf(g),1))}let u=this.palette.fontKey,{geometry:d}=au(u,e,{size:i,depth:n}),f=new ne(d,lu(this.theme,r,o));f.castShadow=!1,f.position.set(...t),f.renderOrder=9,this.group.add(f);let p={mesh:f,text:e,t:0,life:l,style:a,base:t.slice(),tilt:c,key:h,dying:!1,seed:Math.random()*Qe};return this.items.push(p),p}hide(e){let t=this.items.find(i=>i.key===e);t&&(t.dying=!0,t.dieT=0)}update(e,t){for(let i=this.items.length-1;i>=0;i-=1){let n=this.items[i],r=n.mesh;n.t+=e;let o=n.life>0?Fe(n.t/n.life):0,a=1,l=1,c=Uf(Fe(n.t/.38),1.9);n.style==="slam"?(l=(n.t<.22?2.6-1.6*tc(n.t/.22):1)*(n.t<.22?1:1+Math.exp(-(n.t-.22)*9)*Math.cos((n.t-.22)*26)*.06),r.position.set(n.base[0],n.base[1]+(n.t<.22?(1-n.t/.22)*46:0)+Math.sin(t*1.3+n.seed)*1.4,n.base[2]),r.rotation.set(0,this.faceYaw+Math.sin(t*.9+n.seed)*.12,n.tilt*(1+Math.exp(-n.t*6))),a=xi(0,.1,n.t)*(1-xi(.72,1,o)),n.life<=0&&(a=1)):n.style==="rise"?(l=c,r.position.set(n.base[0],n.base[1]+n.t*30,n.base[2]),r.rotation.set(0,this.faceYaw+Math.sin(t*2+n.seed)*.18,n.tilt),a=xi(0,.08,n.t)*(1-xi(.55,1,o))):(l=c,r.position.set(n.base[0],n.base[1]+Math.sin(t*1.7+n.seed)*2.2,n.base[2]),r.rotation.set(0,this.faceYaw+Math.sin(t*.8+n.seed)*.16,n.tilt),a=1),n.dying&&(n.dieT=(n.dieT||0)+e,a*=1-Fe(n.dieT/.35),l*=1-.2*Fe(n.dieT/.35)),r.scale.setScalar(Math.max(1e-4,l)),r.material.opacity=Fe(a),r.visible=a>.01,(n.style!=="hold"&&n.life>0&&n.t>=n.life||n.dying&&n.dieT>.36)&&(this.dispose(n),this.items.splice(i,1))}}},gc=class{constructor(e,t,i=-214){this.group=new ue,this.theme=e,this.palette=t,this.x=i,this.labels=new Map,this.max=0,this.material=new Xe({color:Je(e==="paper"?t.ink:t.cream),roughness:.6,emissive:Je(e==="paper"?"#000000":t.cream),emissiveIntensity:e==="paper"?0:.35,transparent:!0,opacity:.8}),this.pole=new ne(new gt(2.2,1,2.2),this.material),this.pole.castShadow=!1,this.group.add(this.pole),this.tickGeo=new gt(12,1.6,2),this.ticks=[],this.group.position.set(i,0,24)}setHeight(e){let t=Math.ceil((e+8)/5)*5;if(t!==this.max){this.max=t,this.pole.scale.y=t*22,this.pole.position.y=t*22/2;for(let i=5;i<=t;i+=5){if(this.labels.has(i))continue;let n=new ne(this.tickGeo,this.material);n.position.set(6,i*22,0),this.group.add(n),this.ticks.push(n);let{geometry:r}=au(this.palette.fontKey,String(i),{size:15,depth:3,align:"right"}),o=new ne(r,this.material);o.position.set(-5,i*22+0,0),o.castShadow=!1,this.group.add(o),this.labels.set(i,o)}}}setAlpha(e){this.material.opacity=.8*e,this.group.visible=e>.02}dispose(){this.pole.geometry.dispose(),this.tickGeo.dispose(),this.material.dispose()}};var yr=class extends Mi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new gt;e.deleteAttribute("uv");let t=new Xe({side:kt}),i=new Xe,n=new ls(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let r=new ne(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Vi(e,i,6),a=new Lt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ne(e,vr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ne(e,vr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ne(e,vr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new ne(e,vr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new ne(e,vr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ne(e,vr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function vr(s){return new no({color:0,emissive:16777215,emissiveIntensity:s})}var ut=(s,e,t,i=2.2)=>new dr(s,e,t,2,Math.min(i,s/2-.01,e/2-.01,t/2-.01)),Mr=(s,e=28)=>new En(s.map(([t,i])=>new Q(t,i)),e),Oo=Object.freeze(["turbo","crumble","slowmo","magnet","drunk","spotlight","zoom","double","accordion","rollercoaster","peekaboo","earthquake","pisa","superglue","portal","calipers"]);function E3(s){let e=ic[s]||ic.paper,t=o=>_s(s,o),i=new Map;return{p:e,T:t,mat:(o,{rough:a=.5,metal:l=0,emissive:c=0,glass:h=!1,shine:u=.3}={})=>{let d=`${o}|${a}|${l}|${c}|${h}`;if(i.has(d))return i.get(d);let f=new Se(o),p;return h?p=new Jt({color:f,roughness:.05,metalness:0,transparent:!0,opacity:.38,clearcoat:1,envMapIntensity:1.6}):s==="sunset"?p=new Xe({color:f,roughness:.7,metalness:l*.4,flatShading:!0,emissive:f,emissiveIntensity:.32+c}):s==="primetime"?p=new Jt({color:f,roughness:Math.max(.08,a*.4),metalness:l,clearcoat:1,clearcoatRoughness:.06,emissive:f,emissiveIntensity:.05+c}):p=new Jt({color:f,roughness:a,metalness:l,clearcoat:u,clearcoatRoughness:.4,sheen:.4,sheenColor:new Se("#fff2d6"),emissive:f,emissiveIntensity:c}),i.set(d,p),p},glowMat:(o,a=.9)=>new mt({color:new Se(o).multiplyScalar(1.6),transparent:!0,opacity:a,blending:Vt,depthWrite:!1,side:yt,toneMapped:!1}),cache:i}}var se=(s,e,t,i=0,n=0,r=0,o=0,a=0,l=0)=>{let c=new ne(e,t);return c.position.set(i,n,r),c.rotation.set(o,a,l),c.castShadow=!0,s.add(c),c},cp={turbo({p:s,mat:e,glowMat:t}){let i=new ue,n=new ue;i.add(n),se(n,Mr([[0,-22],[7,-22],[11,-12],[12,4],[10,16],[6,26],[0,34]]),e(s.amber,{metal:.2,rough:.35})),se(n,Mr([[0,22],[6,22],[8,28],[0,38]]),e(s.vermilion,{rough:.4})),se(n,new St(5,18,14),e("#F4EDDF",{rough:.15}),0,8,9.5).scale.z=.6,se(n,new wt(5,1.4,8,20),e(s.ink,{metal:.6}),0,8,10.5);for(let r=0;r<3;r+=1){let o=r/3*Qe,a=se(n,ut(3,16,14,1.2),e(s.vermilion),Math.sin(o)*12,-14,Math.cos(o)*12);a.rotation.y=o}return se(n,new ri(7,22,16),t(s.amber,.9),0,-34,0,Math.PI,0,0),se(n,new ri(4,15,16),t("#ffffff",.9),0,-30,0,Math.PI,0,0),n.rotation.z=-.62,i},crumble({p:s,mat:e}){let t=new ue,i=se(t,ut(24,30,26,2.5),e(s.cream,{rough:.8}),-13.5,2,0);i.rotation.z=.12;let n=se(t,ut(22,30,26,2.5),e(s.cream,{rough:.8}),13,-2,0);n.rotation.z=-.14,se(t,ut(3,32,22,1),e(s.vermilion,{emissive:.5}),.5,0,2.5,0,0,.18);for(let r=0;r<5;r+=1)se(t,ut(5-r*.4,5-r*.4,5-r*.4,1.2),e(r%2?s.amber:s.cream,{rough:.7}),-8+r*8,-23-r%2*6,8+r%3*3,r,r*.7,.4);return t},slowmo({p:s,mat:e}){let t=new ue,i=new ue;t.add(i),se(i,new wt(21,3.6,14,44),e(s.amber,{metal:.5,rough:.28})),se(i,new Mt(19.5,19.5,5,40),e("#F4EDDF",{rough:.5}),0,0,-1,Math.PI/2,0,0);for(let n=0;n<12;n+=1){let r=n/12*Qe;se(i,ut(1.4,n%3?3:5.5,1.4,.4),e(s.ink),Math.sin(r)*15.5,Math.cos(r)*15.5,2,0,0,-r)}return se(i,ut(2,14,2,.6),e(s.vermilion,{emissive:.3}),0,6,3,0,0,-.5).geometry.translate(0,0,0),se(i,ut(2,10,2,.6),e(s.ink),-3.5,-1,3,0,0,1.9),se(i,new St(2.4,12,10),e(s.ink,{metal:.6}),0,0,3.5),se(i,new Mt(3.6,3.6,7,16),e(s.teal,{metal:.4}),0,27,0),se(i,new Mt(2,2,6,12),e(s.teal,{metal:.4}),17,21,0,0,0,-.7),i.rotation.x=-.1,t},magnet({p:s,mat:e}){let t=new ue;se(t,new wt(17,6,14,30,Math.PI),e(s.vermilion,{metal:.35,rough:.3}),0,4,0,0,0,0);for(let i of[-1,1])se(t,ut(12,17,12,1.4),e("#e9edf2",{metal:.85,rough:.22}),i*17,-13,0),se(t,ut(12.4,4,12.4,1),e(i<0?s.blue:s.amber),i*17,-3.2,0);for(let i=0;i<3;i+=1)se(t,new wt(6+i*6,.9,6,20,Math.PI),e(s.teal,{emissive:.8}),0,-26,0,0,0,Math.PI).scale.set(1,.6,1);return t},drunk({p:s,mat:e}){let t=new ue,i=new ue;t.add(i),se(i,Mr([[0,-26],[11,-26],[13,-22],[13,6],[9,14],[4.4,18],[4.4,30],[0,30]]),e(s.teal,{rough:.12,metal:.1,emissive:.1})),se(i,new Mt(5.2,5.2,5,14),e(s.amber,{rough:.7}),0,33,0),se(i,new Mt(13.4,13.4,14,28,1,!0),e("#F4EDDF",{rough:.6}),0,-8,0),se(i,new Tt(14,9),e(s.vermilion,{rough:.6}),0,-8,13.5),i.rotation.z=.5,i.position.set(-4,-3,0);for(let n=0;n<4;n+=1)se(t,new St(2.6-n*.3,12,10),e(s.rose,{rough:.15,emissive:.3}),18+n%2*5,8+n*8,4);return t},spotlight({p:s,mat:e,glowMat:t}){let i=new ue,n=new ue;return i.add(n),se(n,Mr([[0,-8],[10,-8],[15,4],[17,14],[0,14]],24),e(s.amber,{metal:.5,rough:.28}),0,8,0,0,0,0),se(n,new Mt(12.5,12.5,2,28),t("#ffffff",.95),0,22.2,0),se(n,new wt(17,1.8,10,30),e(s.ink,{metal:.6}),0,22,0,Math.PI/2,0,0),se(n,new Mt(3,3,22,12),e(s.ink,{metal:.5}),0,-10,0),se(n,ut(26,4,16,1.4),e(s.ink,{metal:.5}),0,-22,0),se(n,new ri(34,60,32,1,!0),t(s.amber,.18),0,52,0).scale.set(1,1,1),n.rotation.z=-.5,n.position.set(-4,-10,0),i},zoom({p:s,mat:e}){let t=new ue,i=new ue;return t.add(i),se(i,new wt(19,3.6,14,44),e(s.amber,{metal:.6,rough:.25})),se(i,new Mt(17.2,17.2,2.4,40),e(s.blue,{glass:!0}),0,0,0,Math.PI/2,0,0),se(i,new Mt(3.4,4.4,24,14),e(s.vermilion,{rough:.3}),21,-21,0,0,0,Math.PI/4),se(i,new wt(19,.9,8,30,1.1),e("#ffffff",{emissive:.6}),0,0,3.6,0,0,1.9),se(i,ut(14,3,3,1),e(s.teal),0,0,1.4),se(i,ut(3,14,3,1),e(s.teal),0,0,1.4),i.position.set(-5,5,0),i.rotation.y=-.25,t},double({p:s,mat:e}){let t=new ue,i=(n,r,o,a)=>{let l=se(t,Mr([[0,0],[10,0],[13,4],[10,26],[0,27]]),e(n,{metal:.3,rough:.3}),r,o,0);return l.rotation.z=a,l.rotation.x=Math.PI,l.position.y+=26,l};return i(s.amber,-14,-22,.1),i(s.blue,15,-22,-.1),se(t,new St(6,18,14),e(s.vermilion,{rough:.15,emissive:.25}),0,-18,14),se(t,new wt(4,1.2,6,16,4.2),e(s.ink),-14,14,12,0,0,.5),se(t,new St(1.2,8,6),e(s.ink),-14,8,12),t},accordion({p:s,mat:e}){let t=new ue;se(t,ut(7,32,28,2),e(s.teal,{metal:.2}),-23,0,0),se(t,ut(7,36,28,2),e(s.vermilion,{metal:.2}),23,0,0);for(let i=0;i<9;i+=1){let n=-16+i*4;se(t,ut(1.8,28,24,.5),e(i%2?s.amber:"#F4EDDF",{rough:.6}),n,0,0,0,0,i%2?.28:-.28)}for(let i=0;i<3;i+=1)se(t,new St(1.6,10,8),e("#F4EDDF",{rough:.2}),23,8-i*8,14.4);for(let i=0;i<4;i+=1)se(t,ut(3,4,3,.8),e("#F4EDDF"),-23,10-i*6.5,14.4);return t},rollercoaster({p:s,mat:e}){let t=new ue,i=new Js([[-30,-12,0],[-18,8,0],[-6,-12,0],[8,14,0],[20,-8,0],[32,6,0]].map(([l,c,h])=>new P(l,c,h)));se(t,new io(i,48,2.2,8,!1),e(s.teal,{metal:.3,rough:.3}));for(let l=0;l<9;l+=1){let c=i.getPoint(l/8);se(t,new Mt(1,1,c.y+30,6),e(s.blue,{rough:.5}),c.x,(c.y-30)/2-2,0)}let n=.52,r=i.getPoint(n),o=i.getTangent(n),a=new ue;a.position.copy(r).add(new P(0,7,0)),a.rotation.z=Math.atan2(o.y,o.x),t.add(a),se(a,ut(20,10,14,3),e(s.amber,{rough:.3})),se(a,ut(18,3,12,1),e(s.vermilion),0,4,0),se(a,new St(4,12,10),e("#F4EDDF",{rough:.3}),-3,8,0);for(let l of[-1,1])se(a,new Mt(3,3,3,12),e(s.ink,{metal:.6}),l*6,-6,7.4,Math.PI/2,0,0);return t.position.y=3,t},peekaboo({p:s,mat:e}){let t=new ue;se(t,new St(20,32,24),e("#F7F1E4",{rough:.2,shine:1}),0,-2,0).scale.set(1.35,.85,.7),se(t,new Mt(9.6,9.6,4,28),e(s.blue,{rough:.15,shine:1}),0,-2,12.6,Math.PI/2,0,0),se(t,new Mt(4.6,4.6,4.6,20),e(s.ink,{rough:.2}),0,-2,13.2,Math.PI/2,0,0),se(t,new St(1.8,10,8),e("#ffffff",{emissive:.7}),3,1.4,16);let n=se(t,new St(21.5,32,16,0,Qe,0,.9),e(s.amber,{rough:.4}),0,2,0);n.scale.set(1.36,.9,.74),n.rotation.x=-.5;for(let r=0;r<5;r+=1){let o=-.9+r*.45;se(t,new ri(1.4,9,6),e(s.ink),Math.sin(o)*25,20+Math.cos(o)*3,6,0,0,-o*.8)}return t},earthquake({p:s,mat:e}){let t=new ue,i=se(t,ut(34,8,34,2),e(s.cream,{rough:.9}),-15,-17,0);i.rotation.z=.2;let n=se(t,ut(34,8,34,2),e(s.cream,{rough:.9}),15,-19,0);n.rotation.z=-.22,se(t,ut(5,7,30,1),e(s.vermilion,{emissive:1.1}),0,-22,0);let r=se(t,ut(26,14,22,3),e(s.amber,{rough:.35}),0,0,0);r.rotation.z=.28,se(t,ut(20,12,20,3),e(s.blue,{rough:.35}),6,14,0).rotation.z=-.34;for(let o=0;o<6;o+=1)se(t,ut(3.6,3.6,3.6,.8),e(s.cream,{rough:.9}),-26+o*10,-8-o%2*5,14,o,o*.8,0);for(let o of[-1,1])se(t,new wt(29,.9,6,18,1),e(s.vermilion,{emissive:.8}),0,0,-6,0,0,o>0?-.5:Math.PI-.5).scale.set(o,1,1);return t},pisa({p:s,mat:e}){let t=new ue,i=new ue;t.add(i),se(t,new Mt(27,29,4,32),e(s.teal,{rough:.8}),0,-30,0);for(let n=0;n<6;n+=1){let r=-24+n*9.2;se(i,new Mt(12-n*.5,12.6-n*.5,8.4,24),e(s.cream,{rough:.7}),0,r,0),se(i,new wt(12.3-n*.5,1,6,24),e(s.amber,{rough:.5}),0,r+4.4,0,Math.PI/2,0,0);for(let o=0;o<6;o+=1){let a=o/6*Qe+.4;se(i,ut(2.2,5.4,1.2,.5),e(s.ink),Math.sin(a)*(12.2-n*.5),r,Math.cos(a)*(12.2-n*.5),0,a,0)}}return se(i,new ri(8.5,10,20),e(s.vermilion,{rough:.4}),0,36,0),i.position.set(-3,0,0),i.rotation.z=-.2,t},superglue({p:s,mat:e}){let t=new ue,i=new ue;return t.add(i),se(i,new Sn(10,26,8,20),e(s.amber,{rough:.25,shine:1}),0,-2,0),se(i,new Mt(10.4,10.4,12,24,1,!0),e(s.teal,{rough:.4}),0,-4,0),se(i,Mr([[0,0],[6,0],[4,10],[1.4,17],[0,17]],14),e(s.teal,{rough:.3}),0,24,0),se(i,new Mt(1.7,1.7,6,10),e(s.vermilion,{rough:.3}),0,36,0),i.rotation.z=.5,i.position.set(-6,4,0),se(t,new St(4,16,12),e(s.blue,{rough:.08,shine:1,emissive:.15}),14,-20,2).scale.set(.8,1.3,.8),se(t,new St(2.4,12,10),e(s.blue,{rough:.08,shine:1}),18,-32,2),se(t,new Mt(15,15,3,24),e(s.blue,{rough:.08,shine:1}),16,-36,2).scale.set(1,.4,.5),t},portal({p:s,mat:e,glowMat:t}){let i=new ue;se(i,new wt(19,4.2,14,40),e(s.teal,{metal:.4,rough:.3,emissive:.4}),-17,0,-2,0,.55,0),se(i,new wt(19,4.2,14,40),e(s.blue,{metal:.4,rough:.3,emissive:.4}),17,0,2,0,-.55,0),se(i,new mi(16,36),t(s.teal,.55),-17,0,-2,0,.55,0),se(i,new mi(16,36),t(s.amber,.5),17,0,2,0,-.55,0),se(i,ut(14,10,14,2.4),e(s.amber,{rough:.3,emissive:.2}),0,0,0,.2,.4,.1);for(let n=0;n<5;n+=1)se(i,new St(1.4,8,6),t("#ffffff",.9),-8+n*4,11-Math.abs(n-2)*2.5,6);return i},calipers({p:s,mat:e}){let t=new ue,i=new ue;t.add(i),se(i,ut(60,8,4,1),e("#e7ecf1",{metal:.8,rough:.25}),0,6,0);for(let n=0;n<15;n+=1)se(i,ut(.9,n%5?3:5,.8,.2),e(s.ink),-28+n*4,3.5-(n%5?0:.5),2.4);return se(i,ut(6,34,6,1.2),e("#e7ecf1",{metal:.8,rough:.25}),-27,-10,0),se(i,ut(10,5,6,1.2),e("#e7ecf1",{metal:.8}),-22.5,-26,0),se(i,ut(7,30,6,1.2),e(s.amber,{metal:.5,rough:.28}),14,-8,0),se(i,ut(11,5,6,1.2),e(s.amber,{metal:.5}),8.5,-23,0),se(i,ut(8,7,7,1.4),e(s.vermilion,{rough:.3}),14,8,0),se(i,ut(14,12,10,2),e(s.blue,{rough:.35}),-7,-17,0),i.position.set(4,3,0),t},empty({p:s,mat:e}){let t=new ue;return[[s.teal,38,-14],[s.amber,30,-1.5],[s.blue,22,11]].forEach(([i,n,r])=>se(t,ut(n,11,22,3),e(i,{rough:.4}),0,r,0)),se(t,new wt(5,1.6,6,14,4.3),e(s.vermilion,{emissive:.4}),17,20,4),t}};function Ho(s,e="paper"){let t=E3(e),n=(cp[s]||cp.empty)(t),r=new Ii().setFromObject(n),o=r.getSize(new P),a=r.getCenter(new P),l=54/Math.max(o.x,o.y*1.05,o.z),c=new ue;return n.position.sub(a),c.add(n),c.scale.setScalar(l),c.userData.dispose=()=>{c.traverse(h=>{h.geometry&&h.geometry.dispose()});for(let h of t.cache.values())h.dispose()},c.userData.id=s,c.userData.size=54,c}function hp(s="paper",{size:e=192,ids:t=[...Oo,"empty"]}={}){let i=document.createElement("canvas");i.width=i.height=e;let n=new Xn({canvas:i,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,premultipliedAlpha:!1});n.setPixelRatio(1),n.setSize(e,e,!1),n.setClearColor(0,0),n.outputColorSpace=Et,n.toneMapping=s==="paper"?Di:Yi,n.toneMappingExposure=s==="paper"?1.05:1,n.shadowMap.enabled=!1;let r=new hn(n),o=new yr,a=r.fromScene(o,.04).texture,l=new Mi;l.environment=a,l.environmentIntensity=s==="paper"?.75:.9;let c=new Zt(26,1,10,600);c.position.set(34,40,150),c.lookAt(0,-1,0);let h=new Ei("#fff2dc",s==="paper"?2.4:2.6);h.position.set(-60,90,120);let u=new Ei(s==="sunset"?"#2EC4B6":s==="primetime"?"#FFC83D":"#bfe6ea",1.6);u.position.set(80,30,-90),l.add(new wn("#ffffff","#cdbfa5",.7),h,u);let d=(()=>{let g=document.createElement("canvas");g.width=g.height=64;let m=g.getContext("2d"),x=m.createRadialGradient(32,32,0,32,32,32);return x.addColorStop(0,"rgba(20,12,0,.34)"),x.addColorStop(1,"rgba(20,12,0,0)"),m.fillStyle=x,m.fillRect(0,0,64,64),new si(g)})(),f=new ne(new Tt(64,64),new mt({map:d,transparent:!0,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=-30,l.add(f);let p={};for(let g of t){let m=Ho(g,s);m.rotation.y=-.5,m.rotation.x=.1,l.add(m),n.render(l,c),p[g]=i.toDataURL("image/png"),l.remove(m),m.userData.dispose()}return d.dispose(),f.geometry.dispose(),f.material.dispose(),a.dispose(),r.dispose(),o.dispose(),n.dispose(),n.forceContextLoss(),p}function up(s,e){let t=0;for(let[i,n]of Object.entries(e)){let r=s.getElementById(`sabotage-symbol-${i}`);r&&(r.dataset.flat||(r.dataset.flat=r.innerHTML),r.innerHTML=`<image href="${n}" x="-1" y="-1" width="34" height="34" preserveAspectRatio="xMidYMid meet"/>`,t+=1)}return t}function dp(s){for(let e of s.querySelectorAll('symbol[id^="sabotage-symbol-"][data-flat]'))e.innerHTML=e.dataset.flat,delete e.dataset.flat}var xc=class{constructor(){this.energy=0,this.x=0,this.y=0,this.z=0,this.dwell=0,this.inside=!1,this.entered=!1,this.enterX=0,this.sparkCarry=0}update(e,{point:t=null,speed:i=0,blocked:n=!1,reduced:r=!1}={}){if(!(e>0))return this;e=Math.min(e,.1);let o=!!t&&!n;if(this.entered=!1,o&&!this.inside&&(this.entered=!0,this.enterX=t.x,this.x=t.x,this.y=t.y,this.z=t.z||0),this.inside=o,this.energy=At(this.energy,o?1:0,o?6:2.4,e),this.energy<.002&&!o&&(this.energy=0),o){let a=r?30:13;this.x=At(this.x,t.x,a,e),this.y=At(this.y,t.y,a,e),this.z=At(this.z,t.z||0,a,e),this.dwell=i<140?Math.min(6,this.dwell+e):Math.max(0,this.dwell-e*3)}else this.dwell=0;return this}sparks(e,t,i=!1){if(i||!this.inside||!(e>0))return this.sparkCarry=0,0;let n=Fe((t-90)/900,0,1)*70;this.sparkCarry+=n*Math.min(e,.1);let r=Math.min(4,Math.floor(this.sparkCarry));return this.sparkCarry-=Math.floor(this.sparkCarry),r}};function _c(s,e,t,i,n={dx:0,dy:0}){let r=e-s.point.x,o=t-s.point.y,a=i-s.point.z,l=s.right,c=s.up;return n.dx=r*l.x+o*l.y+a*l.z,n.dy=r*c.x+o*c.y+a*c.z,n}var w3={paper:["#2A2520","#D5472F"],sunset:["#FFC53D","#FF4FD8"],primetime:["#FFFFFF","#FFC83D"]},T3={paper:["#2F8478","#E3A33B"],sunset:["#2B1155","#2B1155"],primetime:["#0B1B5C","#0B1B5C"]},A3=Object.freeze({wide:Object.freeze([["STACK THE BLOCKS.",0],["CHAT RUINS YOUR LIFE.",1]]),tall:Object.freeze([["STACK THE",0],["BLOCKS.",0],["CHAT RUINS",1],["YOUR LIFE.",1]])}),vc=class{constructor(e,t,i){this.theme=e,this.palette=t,this.fx=i,this.group=new ue,this.letters=[],this.layout="",this.bounds={x0:-500,x1:500,y0:-64,y1:600},this.materials=[],this.ledges=[],this.marquee=null,this.age=0,this.random=Nt(12),this.glow=[],this.off={dx:0,dy:0},this.energy=0}build(e){this.clear(),this.layout=e;let t=A3[e],i=this.palette.fontKey,n=i==="sunset"?26:30,r=e==="wide"?80:74,o=r*1.4,{capHeight:a,resolution:l}=_r(i),c=a/l*r,h=w3[this.theme],u=T3[this.theme],d=e==="wide"?372:356,f=0,p=0;t.map((x,_)=>({line:x,i:_})).forEach(({line:[x,_],i:M})=>{let y=d+(t.length-1-M)*o,w=e==="wide"&&M===1?r*.92:r,{letters:T,total:v}=lp(i,x,w);f=Math.max(f,v/2);let S=lu(this.theme,h[_],.5,!1);this.materials.push(S),this.glow.push({material:S,base:S.emissiveIntensity});let I=null;for(let C of T){let B=ap(i,C.ch,w,n,!0);if(!B.geometry)continue;let H=new ne(B.geometry,S);H.castShadow=!0,H.receiveShadow=!0;let O=new ue;O.add(H),H.position.z=-n/2;let te={x:C.x,y,z:-40},V=p*.055+Math.floor(M/2)*.35+this.random()*.12,X={holder:O,home:te,y:y+1100+this.random()*500,vy:-200-this.random()*300,delay:V,landed:!1,bounces:0,rz:(this.random()-.5)*1.6,vrz:0,rx:(this.random()-.5)*.8,vrx:0,ry:(this.random()-.5)*1.2,vry:0,hop:0,vhop:0,swell:0,waveDelay:-1,line:M,seed:this.random()*Qe,ch:C.ch,width:B.width,cap:w*(a/l)};O.position.set(te.x,X.y,te.z),O.rotation.set(X.rx,X.ry,X.rz),this.group.add(O),this.letters.push(X),p+=1}let R=v+w*.9,q=new gt(R,w*.16,74),D=this.theme==="paper"?new Xe({color:u[_],roughness:.6}):new Xe({color:u[_],roughness:.4,metalness:.4,emissive:h[_],emissiveIntensity:this.theme==="sunset"?.3:.12}),U=new ne(q,D);U.position.set(0,y-w*.08,-22),U.castShadow=!0,U.receiveShadow=!0,U.scale.x=.001,U.userData={delay:.1+Math.floor(M/2)*.35,width:R},this.group.add(U),this.ledges.push(U),this.materials.push(D),U.userData.geo=q});let m=d+(t.length-1)*o+c;this.bounds={x0:-f-60,x1:f+60,y0:-70,y1:m+60},this.theme==="sunset"&&this.addMarquee(f,d-r*.34,m+46),this.age=0}addMarquee(e,t,i){let n=(e+74)*2,r=i-t,o=[],a=[],l=new ue;l.position.set(0,(t+i)/2,-68);let c=new Tt(n,r),h=new mt({color:"#10052A",transparent:!0,opacity:.9,depthWrite:!1,toneMapped:!1,side:yt});l.add(new ne(c,h)),o.push(c),a.push(h);let u=(x,_,M,y,w,T)=>{let v=new Tt(_,M),S=new ne(v,x);S.position.set(y,w,T),l.add(S),o.push(v)},d=new mt({color:"#FF4FB0",toneMapped:!1,side:yt}),f=new mt({color:"#2EE6D6",toneMapped:!1,side:yt});a.push(d,f);let p=5;u(d,n,p,0,r/2,1),u(d,n,p,0,-r/2,1),u(d,p,r,-n/2,0,1),u(d,p,r,n/2,0,1);let g=13,m=2.5;u(f,n-g*2,m,0,r/2-g,1),u(f,n-g*2,m,0,-r/2+g,1),u(f,m,r-g*2,-n/2+g,0,1),u(f,m,r-g*2,n/2-g,0,1),l.scale.y=.001,this.group.add(l),this.marquee={group:l,geos:o,mats:a,plateMat:h,outer:d,inner:f}}clear(){for(let e of this.letters)this.group.remove(e.holder);for(let e of this.ledges)this.group.remove(e),e.userData.geo.dispose();for(let e of this.materials)e.dispose();if(this.letters.length=0,this.ledges.length=0,this.materials.length=0,this.glow.length=0,this.marquee){this.group.remove(this.marquee.group);for(let e of this.marquee.geos)e.dispose();for(let e of this.marquee.mats)e.dispose();this.marquee=null}}update(e,t,{pointer:i=null,pointerSpeed:n=0,reduced:r=!1,energy:o=0,yaw:a=0}={}){if(this.age+=e,this.energy=o,this.marquee){this.marquee.plateMat.opacity=.9*(.22+.78*xi(-.25,.45,Math.cos(a)));let c=Fe(this.age/.6);this.marquee.group.scale.y=Math.max(.001,1-(1-c)**3);let h=r||c>=1||Math.sin(this.age*55)>-.3?1:.35,u=(r?1:.94+.06*Math.sin(t*3.1)*Math.sin(t*1.7))*(1+o*.28);this.marquee.outer.color.set("#FF4FB0").multiplyScalar(h*u*1.25),this.marquee.inner.color.set("#2EE6D6").multiplyScalar(h*u)}for(let c of this.glow)c.material.emissiveIntensity=c.base+o*(this.theme==="paper"?.2:.45);for(let c of this.ledges){let h=Fe((this.age-c.userData.delay)/.5);c.scale.x=Math.max(.001,1-(1-h)**3)}let l=this.off;for(let c of this.letters){let h=c.holder;if(!c.landed){if(this.age<c.delay){h.visible=!1;continue}h.visible=!0,r?(c.y=c.home.y,c.landed=!0,c.rz=c.rx=c.ry=0):(c.vy-=2900*e,c.y+=c.vy*e,h.rotation.z+=(c.rz>0?1:-1)*e*.8,c.rz*=1-e*.4,c.y<=c.home.y&&(c.y=c.home.y,c.vy<-260&&c.bounces<3?(c.vy=-c.vy*.34,c.bounces+=1,c.vrz=(this.random()-.5)*6,c.vrx=(this.random()-.5)*3,this.impact(c)):(c.landed=!0,c.vy=0,c.rz=h.rotation.z))),h.position.y=c.y,h.position.x=c.home.x;continue}let u=0,d=0,f=0,p=0;if(i&&!r){let M,y;i.point?(_c(i,c.home.x,c.home.y+c.cap/2,c.home.z,l),M=l.dx,y=l.dy):(M=c.home.x-i.x,y=c.home.y+c.cap/2-i.y);let w=Math.hypot(M,y),T=xi(190,0,w);u=-Math.sign(M||1)*T*.34,d=-T*.2,f=T*(1+n*.01)*5,p=T*.075,T>.55&&n>700&&c.vhop<=0&&c.hop<.5&&(c.vhop=Math.min(520,190+n*.06),c.vrz+=-Math.sign(M||1)*5,this.fx&&this.fx.dust&&this.fx.dust([h.position.x,c.home.y,c.home.z+20],2))}c.waveDelay>=0&&(c.waveDelay-=e,c.waveDelay<0&&(c.vhop=Math.max(c.vhop,300),c.vrz+=(this.random()-.5)*7,c.waveDelay=-1)),c.swell=At(c.swell,p,12,e);let g=150,m=10;c.vrz+=((u-c.rz)*g-c.vrz*m)*e,c.rz+=c.vrz*e,c.vrx+=((d-c.rx)*g-c.vrx*m)*e,c.rx+=c.vrx*e,c.vry+=((0-c.ry)*g-c.vry*m)*e,c.ry+=c.vry*e,c.vhop-=2400*e,c.hop+=c.vhop*e,c.hop<0&&(c.vhop<-160?c.vhop=-c.vhop*.3:(c.hop=0,c.vhop=0));let x=r?0:Math.sin(t*1.4+c.seed)*1.1,_=r?0:o*(.5+.5*Math.sin(t*4.6-c.home.x*.013+c.line*1.3))*3.4;h.position.set(c.home.x,c.home.y+c.hop+x+_+f*.4,c.home.z),h.rotation.set(c.rx,c.ry,c.rz),h.scale.setScalar(1+c.swell)}}wave(e=0,t=1500){for(let i of this.letters)i.landed&&(i.waveDelay=Math.abs(i.home.x-e)/t+i.line*.04)}impact(e){this.fx&&this.fx.dust&&this.fx.dust([e.home.x,e.home.y,e.home.z+24],4)}poke(e){let t=null,i=70,n=this.off;for(let r of this.letters){let o,a;e.point?(_c(e,r.home.x,r.home.y+r.cap/2,r.home.z,n),o=n.dx,a=n.dy):(o=r.home.x-e.x,a=r.home.y+r.cap/2-e.y);let l=Math.hypot(o,a);l<i&&r.landed&&(i=l,t=r)}return t?(t.vhop=760,t.vrz+=(this.random()-.5)*22,t.vrx+=(this.random()-.5)*8,t.vry+=(this.random()-.5)*14,t.hop=1,this.fx&&this.fx.dust&&this.fx.dust([t.home.x,t.home.y+10,t.home.z+20],10),t):!1}dispose(){this.clear()}},yc=class{constructor(e,t=Nt(5)){this.Core=e,this.random=t,this.idCounter=0,this.order=[],this.next=0,this.ballot=null,this.speedBase=150,this.reset()}nextEffect(){let e=this.Core.SABOTAGE_IDS||Oo;if(!this.order.length||this.next>=this.order.length){this.order=e.slice();for(let t=this.order.length-1;t>0;t-=1){let i=Math.floor(this.random()*(t+1));[this.order[t],this.order[i]]=[this.order[i],this.order[t]]}this.next=0}return this.order[this.next++]}reset(){this.id=`attract-${++this.idCounter}`;let e=this.Core;this.blocks=[e.makeBase()],this.fallen=[],this.moving=null,this.effect=null,this.phase="playing",this.collapsed=!1,this.timer=0,this.stage="stack",this.stageTimer=0,this.target=11+Math.floor(this.random()*3),this.voteAt=5+Math.floor(this.random()*2),this.ballot=null,this.pendingFail=!1,this.voted=!1,this.forced=this.forced||null,this.spawnMover(),this.dropOffset=this.pickOffset()}pickOffset(){return this.random()<.58?0:(this.random()<.5?-1:1)*(6+this.random()*26)}spawnMover(){let e=this.Core,t=this.blocks[this.blocks.length-1],i=Math.max(e.MIN_WIDTH,t.right-t.left),n=this.blocks.length,r=n%2===1,o=e.PALETTE||["#E3A33B","#2F8478","#7FA6BD","#D5472F"],a={left:r?0:360-i,width:i,direction:r?1:-1,level:n,fromLeft:r,color:o[n%o.length],rollerPhase:n*.38196601125%1};this.effect&&this.effect.id==="double"&&e.createShellDecoy&&(a.decoy=e.createShellDecoy(a)),this.moving=a,this.maxWidth=i,this.blockClock=0}speed(){let e=this.effect?this.effect.id:"",t=this.speedBase+this.blocks.length*5;return e==="turbo"?t*=1.9:e==="slowmo"?t*=.5:e==="drunk"?t*=1+.7*Math.sin(this.timer*3.1):e==="rollercoaster"&&(t*=1+.4*Math.sin(this.timer*2.6)),t}force(e){if(this.forced=e,this.ballot){let t=this.ballot.options,i=t.indexOf(e);i>0&&(t[i]=t[0]),t[0]=e,this.ballot.winner=e,this.forced=null}else this.effect&&(this.effect.remaining=Math.min(this.effect.remaining,.3))}startEffect(e){this.effect={id:e,elapsed:0,remaining:4.6,duration:4.6,tiltDirection:this.random()<.5?-1:1,spotlightSide:this.random()<.5?-1:1,windDirection:this.random()<.5?-1:1,dropsRemaining:3},e==="double"&&this.moving&&this.Core.createShellDecoy&&(this.moving.decoy=this.Core.createShellDecoy(this.moving)),this.pendingFail=!0}update(e,t=!1){this.timer+=e;let i=this.Core;if(this.stage==="collapse"){this.stageTimer+=e,this.stageTimer>3.2&&this.reset();return}if(this.forced&&!this.ballot&&!this.effect){let p=this.forced;this.forced=null,this.startEffect(p)}if(this.stage==="vote"){this.stageTimer+=e;let p=this.stageTimer,g=this.ballot.fractions;for(let m=0;m<3;m+=1)g[m]=Fe(this.ballot.base[m]*(.4+p*.5)+Math.sin(p*5+m*2)*.05,.02,1);if(this.ballot.voted=Fe(p/1.7),p>2.4){let m=this.ballot.winner;this.ballot=null,this.stage="stack",this.stageTimer=0,this.startEffect(m)}return}this.effect&&(this.effect.elapsed+=e,this.effect.remaining-=e,this.effect.remaining<=0&&(this.effect=null,this.moving&&delete this.moving.decoy));let n=this.moving;if(!n)return;this.blockClock+=e;let r=this.effect?this.effect.id:"";if(r==="accordion"){let p=this.maxWidth*(.72+.28*Math.sin(this.effect.elapsed*3.4)),g=n.left+n.width/2;n.width=Math.max(i.MIN_WIDTH,p),n.left=g-n.width/2}let o=this.speed(),a=n.left+n.width/2;n.left+=n.direction*o*e,r==="portal"?(n.left>360&&(n.left-=360),n.left+n.width<0&&(n.left+=360)):(n.left<=0&&(n.left=0,n.direction=1),n.left+n.width>=360&&(n.left=360-n.width,n.direction=-1));let l=this.blocks[this.blocks.length-1],c=(l.left+l.right)/2,h=n.left+n.width/2,u=c+this.dropOffset,d=(a-u)*(h-u)<=0&&Math.abs(h-a)<40;if(this.pendingFail&&!this.effect&&this.blocks.length>=this.voteAt+1&&this.blockClock>.6){(n.left<=1||n.left+n.width>=359)&&this.drop(!0);return}this.blockClock>(this.effect?.9:1.15)&&d&&this.drop(!1),!this.effect&&!this.pendingFail&&this.blocks.length>=this.voteAt&&this.stage==="stack"&&this.blockClock<.2&&!this.voted&&this.openVote()}openVote(){this.voted=!0;let e=this.forced||this.nextEffect();this.forced=null;let t=[.25+this.random()*.2,.2+this.random()*.2,.2+this.random()*.2],i=this.Core.SABOTAGE_IDS||Oo,n=[e,...i.filter(r=>r!==e).sort(()=>this.random()-.5).slice(0,2)];this.ballot={options:n,base:t,fractions:t.slice(),voted:0,winner:e},this.stage="vote",this.stageTimer=0}drop(e){let t=this.Core,i=this.moving,n=this.blocks[this.blocks.length-1],r=this.blocks.length,o=this.effect?this.effect.id:"",a=(n.left+n.right)/2,l=t.placeDrop(n,e?{...i,left:i.left+i.width/2<a?n.left-i.width-4:n.right+4}:i,{perfectWindow:o==="superglue"?14:3,level:r,color:i.color,placer:"You",crumble:o==="crumble"});for(let c of l.fallen)this.fallen.push({...c});if(l.status==="miss"||e&&!l.placed){this.phase="collapse",this.collapsed=!0,this.collapseStartLevel=Math.max(0,this.blocks.length-6),this.moving=null,this.stage="collapse",this.stageTimer=0,this.effect=null;return}this.blocks.push(l.placed),this.dropOffset=this.pickOffset(),this.blocks.length>=this.target&&!this.pendingFail&&(this.pendingFail=!0),this.spawnMover()}state(e,t){return{id:this.id,blocks:this.blocks,fallen:this.fallen,moving:this.moving,effect:this.effect,helpers:e,phase:this.phase,collapsed:this.collapsed,collapseStartLevel:this.collapseStartLevel,reduced:t,teamPlacers:!1}}},Mc=class{constructor(e,t,i){this.theme=e,this.palette=t,this.group=new ue,this.items=[],this.hover=-1,this.t=0;let n=i&&i.length?i.map(r=>r.id):Oo;n.forEach((r,o)=>{let a=Ho(r,e),l=new ue;l.add(a);let c=new ne(new St(46,8,6),new mt({visible:!1}));c.userData.index=o,l.add(c);let h=i&&i.find(u=>u.id===r);this.group.add(l),this.items.push({id:r,holder:l,icon:a,proxy:c,name:h?h.name:r,angle:o/n.length*Qe,scale:1.5,spin:0,lift:0,seed:o*1.7})}),this.proxies=this.items.map(r=>r.proxy)}update(e,t,i,n={}){let r=n.yaw||0,o=Math.sin(r),a=Math.cos(r),l=!i&&n.pointer&&n.energy>.01?n.pointer:null,c=n.energy||0,h=352,u=215,d=-26,f=this.off||(this.off={dx:0,dy:0}),p=0;this.items.forEach(g=>{g.mag=0,l&&(_c(l,g.holder.position.x,g.holder.position.y+24,g.holder.position.z,f),g.mag=xi(330,50,Math.hypot(f.dx,f.dy))*c,g.dxs=f.dx,p=Math.max(p,g.mag))}),this.slow=At(this.slow===void 0?1:this.slow,1-.85*p,7,e),this.t+=e*(i?.25:1)*this.slow,this.items.forEach((g,m)=>{let x=g.angle+this.t*.13,_=this.hover===m;g.scale=At(g.scale,_?2.3:1.5+g.mag*.45,9,e),g.lift=At(g.lift,_?34:g.mag*16,8,e),g.tilt=At(g.tilt||0,_?0:-Math.sign(g.dxs||0)*g.mag*.4,9,e),g.spin+=e*(_?2.8:.5+g.mag*1.2);let M=Math.cos(x)*h,y=Math.sin(x)*u+20;g.holder.position.set(M,d+g.lift+(i?0:Math.sin(t*1.3+g.seed)*5),y),g.holder.scale.setScalar(g.scale*(1+(M*o+y*a)/1800)),g.icon.rotation.y=g.spin+x*.3,g.icon.rotation.x=.1,g.icon.rotation.z=g.tilt})}pick(e){let t=e.intersectObjects(this.proxies,!1)[0];return t?t.object.userData.index:-1}dispose(){for(let e of this.items)e.icon.userData.dispose(),e.proxy.geometry.dispose(),e.proxy.material.dispose()}};var fp="sabotage-stack-orbit-hint-v1",R3={left:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',right:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',reset:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12a7 7 0 1 0 2.2-5.1M5 4.5v4h4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'};function C3(s){try{return!!(s&&s.getItem(fp))}catch{return!1}}function P3(s){try{s&&s.setItem(fp,"1")}catch{}}function pp({doc:s=document,storage:e=null,touch:t=!1,onTurn:i=()=>{},onReset:n=()=>{}}={}){let r=s.getElementById("title-screen");if(!r)return null;let o=s.createElement("div");o.id="orbit-hud",o.className="orbit-hud",o.setAttribute("role","group"),o.setAttribute("aria-label","3D view controls"),C3(e)&&o.classList.add("is-quiet");let a=s.createElement("p");a.className="orbit-hint",a.innerHTML=t?'<span class="orbit-hint-full">Swipe sideways to turn the scene</span><span class="orbit-hint-short">Swipe to turn</span>':'<span class="orbit-hint-full"><b>Drag</b> with left or right click to turn the scene. Double-click resets.</span><span class="orbit-hint-short"><b>Drag</b> to turn</span>';let l=(p,g,m)=>{let x=s.createElement("button");return x.type="button",x.className="button orbit-btn",x.dataset.orbit=p,x.setAttribute("aria-label",g),x.title=g,x.innerHTML=R3[p],x.addEventListener("click",m),x},c=l("left","Turn the 3D scene left",()=>i(-Math.PI/4)),h=l("reset","Reset the 3D view",()=>n()),u=l("right","Turn the 3D scene right",()=>i(Math.PI/4));o.append(a,c,h,u),r.appendChild(o);let d=NaN,f=NaN;return{root:o,place(p,g){Math.abs(p-d)<.75&&Math.abs(g-f)<.75||(d=p,f=g,o.style.left=`${Math.round(p)}px`,o.style.top=`${Math.round(g)}px`)},setRotated(p){o.classList.toggle("is-rotated",!!p)},quiet(){o.classList.add("is-quiet"),P3(e)},fade(){o.classList.add("is-quiet")},dispose(){o.remove()}}}var I3=7.5,D3=.9;function mp(s){let e=[];if(s&&s.mode==="teamwork")e.push({key:"team",name:"The crew",color:"#E3A33B",blocks:s.blocks||[],fallen:s.fallen||[],height:Number(s.height)||0,winner:!0,team:!0,score:Number(s.score)||0});else if(s){let i=new Set(s.winnerIds||[]);(s.players||[]).forEach((n,r)=>e.push({key:String(n.id!=null?n.id:r),name:String(n.name||"Player"),color:n.color,blocks:n.blocks||[],fallen:n.fallen||[],height:Number(n.height)||0,winner:i.has(n.id),team:!1,score:0}))}let t=q3(e.length);return e.forEach((i,n)=>{i.slot=t[n]}),e}function q3(s){let e=Array.from({length:s},(i,n)=>n===0?0:(n%2?-1:1)*Math.ceil(n/2)),t=s?(Math.min(...e)+Math.max(...e))/2:0;return e.map(i=>i-t)}function gp(s,e){let t=s<=1?560:s===2?640:760,i=t/Math.max(1,s),n=Math.max(0,e-1),r=Fe(Math.min(i/400,400/((n+2)*22)),.07,1);return{worldW:t,colW:i,scale:r,maxHeight:n}}function xp(s,e,{reduced:t=!1,rate:i=I3,delay:n=D3}={}){return e<=0?0:t?e:Fe(Math.floor((s-n)*i)+1,1,e)}function _p(s,e,t){let i=0;for(;i<s.length;){let n=s[i];if(e>=t||Number.isInteger(n.level)&&n.level<=e-1)i+=1;else break}return i}function vp(s,e=t=>String(t).toUpperCase()){if(!s.length)return"";if(s[0].team)return s[0].score>0?`TEAM SCORE ${s[0].score}`:"THE FLOOR WINS";let t=s.filter(i=>i.winner);return t.length===1?`${e(t[0].name.slice(0,12))||"CHAMPION"} WINS`:"A TIE AT THE TOP"}var zo=360,cu=[.82,.74,.6],Sc='button, a, select, input, textarea, label, dialog, summary, [role="button"]',hu=".side-card, .play-card, .result-info, .preview-card, .home-copy, .home-bottom, .topbar, .footer-note, .orbit-hud",yp={paper:{light:"#FFD9A0",power:52e3,sparkles:["#E3A33B","#2F8478","#D5472F","#FFF1D0","#C96F8A"]},sunset:{light:"#FF6BE0",power:76e3,sparkles:["#FF4FD8","#2EE6D6","#FFC53D","#B983FF"]},primetime:{light:"#CFE0FF",power:64e3,sparkles:["#FFC83D","#FFFFFF","#35D0E8","#FF7FA8"]}},Ms=(s,e)=>!!(s&&s.closest&&s.closest(e)),uu=new WeakMap,F3=0,L3=s=>(uu.has(s)||uu.set(s,++F3),uu.get(s)),bc=class{constructor({canvas:e,host:t,tier:i=null,scale:n=1}){this.host=t,this.canvas=e,this.time=0,this.last=0,this.mode="",this.modeTime=0;let r=t.view();this.theme=cr(r.theme),this.engine=new nc({canvas:e,theme:this.theme,reducedMotion:r.reduced,forcedTier:i}),n!==1&&(this.engine.scale=n,this.engine.forcedTier=!0),this.scene=this.engine.scene,this.camera=this.engine.camera,this.fx={sparks:new Bo(1800),glints:new Bo(260),confetti:new uc(420),pulses:new dc(12),dust:(o,a=6)=>this.fx.sparks.burst({pos:o,count:a,speed:70,spread:1,color:cu,size:16,life:.9,gravity:10,up:.5,drag:1.5,alpha:.34,growth:16})},this.scene.add(this.fx.sparks.points,this.fx.glints.points,this.fx.confetti.mesh,this.fx.pulses.group),this.pointer={x:0,y:0,px:0,py:0,speed:0,inside:!1,lastX:0,lastY:0,lastT:0,ndc:new Q},this.raycaster=new co,this.plane=new di(new P(0,0,1),40),this.rig={yaw:0,pitch:.1,zoom:1,roll:0,kick:new ec(0,220,14),shakeAmp:0,shakeT:0,focusY:220,intro:0},this.timeScale=1,this.slowT=0,this.flash=0,this.desatPulse=0,this.caPulse=0,this.towers={},this.arena=[],this.lastEffectKey="",this.badge=null,this.labels=[],this.heroLayout="",this.introDone=!1,this.heroHover=-1,this.orbit=new rc,this.hover=new xc,this.drag=null,this.dragBlend=0,this.cursor="",this.hud=null,this.hintAge=0,this.idleFor=0,this.contextGuardUntil=0,this.pointerFrame=null,this.lastRipple=0,this.cameraRay=new P,this.groundPlane=new di(new P(0,1,0),60),this.cursorLight=new ls("#FFD9A0",0,900,1.8),this.cursorLight.name="cursor-light",this.scene.add(this.cursorLight),this.buildTheme(this.theme),this.engine.on("tier",o=>this.applyTier(o)),this.engine.on("restored",()=>this.buildTheme(this.theme,!0)),window.addEventListener("pointermove",this.onPointerMove=o=>this.handleMove(o),{passive:!0}),window.addEventListener("pointerdown",this.onPointerDown=o=>this.handleDown(o),{passive:!0}),window.addEventListener("pointerup",this.onPointerUp=o=>this.handleUp(o),{passive:!0}),window.addEventListener("pointercancel",this.onPointerCancel=o=>this.handleUp(o,!0),{passive:!0}),document.documentElement.addEventListener("pointerleave",this.onPointerLeave=()=>{this.pointer.inside=!1}),window.addEventListener("blur",this.onBlur=()=>{this.pointer.inside=!1,this.endDrag(!0)}),window.addEventListener("contextmenu",this.onContextMenu=o=>{if(this.mode!=="hero")return;(this.drag&&this.drag.button===2||performance.now()<this.contextGuardUntil||!Ms(o.target,Sc)&&!Ms(o.target,hu))&&o.preventDefault()}),window.addEventListener("dblclick",this.onDoubleClick=o=>{this.mode==="hero"&&!Ms(o.target,Sc)&&!Ms(o.target,hu)&&this.orbit.reset()}),window.addEventListener("keydown",this.onKeyDown=o=>this.handleKey(o)),this.applyTier(this.engine.tier)}applyTier(e){this.fx.sparks.density=e.particles,this.fx.glints.density=e.particles,this.fx.confetti.density=e.particles,this.world&&this.world.setCrowdDensity(e.crowd),this.world&&this.world.lights.key.shadow.mapSize.width!==e.shadow&&(this.world.lights.key.shadow.mapSize.set(e.shadow,e.shadow),this.world.lights.key.shadow.map&&(this.world.lights.key.shadow.map.dispose(),this.world.lights.key.shadow.map=null))}buildTheme(e,t=!1){this.world&&(this.scene.remove(this.world.root),this.world.dispose()),this.theme=e,this.engine.setTheme(e),this.palette=this.engine.palette;let i=yp[e]||yp.paper;this.cursorLight.color.set(i.light),this.cursorLightPower=i.power,this.sparkleColors=i.sparkles.map(a=>{let l=new Se(a);return[l.r,l.g,l.b]});let n=this.fx.glints.material,r=e==="paper"?Vn:Vt;n.blending!==r&&(n.blending=r,n.needsUpdate=!0),this.glintBoost=e==="paper"?1:1.7,this.kit&&this.kit.dispose(),this.kit=new fr(e),this.world=$f(e,this.engine,{crowdDensity:this.engine.tier.crowd}),this.scene.add(this.world.root),this.scene.fog=this.world.fog,this.scene.environment=this.world.envTexture,this.scene.environmentIntensity=e==="paper"?.7:.85,this.scene.background=null,this.popups&&(this.scene.remove(this.popups.group),this.popups.clear()),this.popups=new mc(e,this.palette),this.scene.add(this.popups.group),this.ruler&&(this.scene.remove(this.ruler.group),this.ruler.dispose()),this.ruler=new gc(e,this.palette),this.scene.add(this.ruler.group),this.title&&(this.scene.remove(this.title.group),this.title.dispose()),this.title=new vc(e,this.palette,this.fx),this.scene.add(this.title.group),this.heroLayout="",this.arsenal&&(this.scene.remove(this.arsenal.group),this.arsenal.dispose());let o=this.host.view();this.arsenal=new Mc(e,this.palette,window.SabotageStack&&window.SabotageStack.sabotages),this.scene.add(this.arsenal.group);for(let a of Object.values(this.towers))a.setKit(this.kit);for(let a of this.arena)a.setKit(this.kit);this.removeBadge(),this.labels.forEach(a=>{this.scene.remove(a.mesh),a.mesh.material.map.dispose(),a.mesh.material.dispose(),a.mesh.geometry.dispose()}),this.labels.length=0,this.applyTier(this.engine.tier),this.mode=""}getTower(e,t){if(!this.towers[e]){let i=new gr(this.kit,this.fx,t);this.scene.add(i.root),this.towers[e]=i,this.wireTower(i,e)}return this.towers[e]}wireTower(e,t){e.on("land",({position:i,width:n,level:r})=>{let o=[i.x,i.y+2,i.z];this.fx.sparks.burst({pos:[o[0]-n/2,o[1],o[2]],count:4,speed:55,spread:1,color:cu,size:10,life:.7,gravity:8,up:.2,drag:2,alpha:.4,growth:12,direction:[-1.2,.1,.4]}),this.fx.sparks.burst({pos:[o[0]+n/2,o[1],o[2]],count:4,speed:55,spread:1,color:cu,size:10,life:.7,gravity:8,up:.2,drag:2,alpha:.4,growth:12,direction:[1.2,.1,.4]}),t!=="arena"&&(this.rig.kick.velocity-=70)}),e.on("perfect",({position:i,width:n,level:r})=>{let o=this.palette.amber,a=new Se(o);this.fx.pulses.pulse({pos:[i.x,i.y+1,i.z-20],color:o,radius:Math.max(120,n*.9),life:.8,from:.15,strength:1.5}),this.fx.sparks.burst({pos:[i.x,i.y+6,i.z],count:26,speed:190,spread:1,color:[a.r*1.6,a.g*1.6,a.b*1.6],size:6.5,life:.95,gravity:-220,up:.7,drag:1.1}),this.world.crowd.cheer(.9),!(t==="arena"||this.mode==="hero")&&(this.reduced||(this.flash=Math.max(this.flash,.09)),this.popups.show({text:"PERFECT!",position:[Fe(i.x,-90,90),i.y+52,96],size:30,depth:9,color:o,glow:.9,style:"slam",life:1.15,tilt:(Math.random()-.5)*.18}),this.reduced||this.fx.confetti.burst({pos:[i.x,i.y+8,i.z],count:22,speed:230,colors:this.confettiColors(),size:6.5,life:2.4,cone:.9}))}),e.on("impact",({position:i,width:n,speed:r})=>{r>90&&(this.fx.dust([i.x,i.y+4,i.z],5),r>280&&(this.rig.kick.velocity-=20))}),e.on("collapse",({top:i})=>{if(t==="arena"){this.world.crowd.cheer(.5);return}this.slowT=.62,this.timeScale=.32,this.rig.shakeAmp=this.reduced?0:16,this.rig.shakeT=0,this.reduced||(this.flash=Math.max(this.flash,.26),this.caPulse=1,this.desatPulse=1);let n=i||new P(0,200,0),r=new Se(this.palette.vermilion);this.fx.sparks.burst({pos:[n.x,n.y,40],count:60,speed:260,spread:1,color:[r.r*1.4,r.g*1.4,r.b*1.4],size:7,life:1.1,gravity:-300,up:.5,drag:1.2}),this.fx.dust([n.x,n.y,40],22),this.fx.dust([0,6,50],16),this.fx.pulses.pulse({pos:[0,2,0],color:this.palette.vermilion,radius:330,life:1,from:.3,strength:1.2}),t==="play"&&this.popups.show({text:"TIMBER!",position:[0,n.y+40,100],size:40,depth:12,color:this.palette.vermilion,glow:.9,style:"slam",life:1.5,tilt:-.08}),this.world.crowd.cheer(1.6)})}confettiColors(){return this.theme==="paper"?["#E3A33B","#2F8478","#7FA6BD","#D5472F","#C96F8A"]:this.theme==="sunset"?["#FFC53D","#2EC4B6","#9B5DE5","#FF5964","#FF8FAB"]:["#FFC83D","#35D0E8","#F2F5FF","#E5322D","#FF7FA8"]}handlePointer(e){let t=this.pointer,i=performance.now(),n=window.innerWidth,r=window.innerHeight,o=Math.max(1,i-t.lastT),a=Math.hypot(e.clientX-t.lastX,e.clientY-t.lastY)/o*1e3;t.speed=Math.min(5e3,Math.max(a,t.speed*.6)),t.lastX=e.clientX,t.lastY=e.clientY,t.lastT=i,t.x=e.clientX/n*2-1,t.y=-(e.clientY/r*2-1),t.ndc.set(t.x,t.y),t.inside=!0,t.touch=e.pointerType==="touch",t.overUi=Ms(e.target,Sc)||Ms(e.target,hu)}handleMove(e){this.handlePointer(e),this.idleFor=0;let t=this.drag;if(!(!t||e.pointerId!==t.id)){if(e.pointerType==="mouse"&&e.buttons===0){this.endDrag(!1,e);return}!t.moved&&Math.hypot(e.clientX-t.x,e.clientY-t.y)>this.orbit.tapSlop&&(t.moved=!0),this.orbit.move(e.clientX,e.clientY,e.timeStamp/1e3,{pitch:!t.touch})}}handleDown(e){if(this.handlePointer(e),this.idleFor=0,this.mode!=="hero"||!this.arsenal||this.drag||!e.isPrimary||e.button!==0&&e.button!==2||this.pointer.overUi)return;this.drag={id:e.pointerId,x:e.clientX,y:e.clientY,t:e.timeStamp,button:e.button,moved:!1,touch:e.pointerType==="touch"},this.orbit.begin(e.clientX,e.clientY,e.timeStamp/1e3),document.documentElement.classList.add("orbiting");let t=window.getSelection&&window.getSelection();t&&t.removeAllRanges&&t.removeAllRanges()}handleUp(e,t=!1){let i=this.drag;!i||e.pointerId!==i.id||(e.pointerType==="touch"&&(this.pointer.inside=!1),this.endDrag(t,e))}endDrag(e=!1,t=null){let i=this.drag;if(i){if(this.drag=null,this.orbit.end(t?t.timeStamp/1e3:performance.now()/1e3),i.button===2&&(this.contextGuardUntil=performance.now()+500),document.documentElement.classList.remove("orbiting"),i.moved){this.hud&&this.hud.quiet();return}!e&&t&&i.button===0&&t.timeStamp-i.t<600&&this.handleClick(t)}}handleClick(e){if(this.mode!=="hero"||!this.arsenal||Ms(e.target,Sc))return;this.handlePointer(e),this.raycaster.setFromCamera(this.pointer.ndc,this.camera);let t=this.arsenal.pick(this.raycaster);if(t>=0){this.directorForce(this.arsenal.items[t].id),this.reduced||this.title.wave(this.arsenal.items[t].holder.position.x);return}let i=this.heroAnchor&&this.pointerOnScreenPlane(this.heroAnchor,this.pointer.ndc,0);i&&this.title.poke(i)&&!this.reduced&&this.title.wave(i.point.x,1900)}handleKey(e){if(this.mode!=="hero"||e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)return;let t=e.target;if(t&&t!==document.body&&t!==document.documentElement)return;let i=e.shiftKey?Math.PI/2:Math.PI/8;e.key==="ArrowLeft"?(this.orbit.rotateBy(-i,.35),this.idleFor=0,e.preventDefault()):e.key==="ArrowRight"?(this.orbit.rotateBy(i,.35),this.idleFor=0,e.preventDefault()):e.key==="Home"&&(this.orbit.reset(),e.preventDefault())}setCursor(e){e!==this.cursor&&(this.cursor=e,document.documentElement.style.cursor=e)}pointerOnScreenPlane(e,t=this.pointer.ndc,i=0){let n=this.camera,r=n.getWorldDirection(this.tmpForward||(this.tmpForward=new P)),o=this.screenPlane||(this.screenPlane=new di),a=this.tmpThrough||(this.tmpThrough=new P);o.normal.copy(r).negate(),o.constant=-o.normal.dot(a.copy(e).addScaledVector(r,-i)),this.raycaster.setFromCamera(t,n);let l=this.pointerFrame||(this.pointerFrame={point:new P,right:new P,up:new P});return this.raycaster.ray.intersectPlane(o,l.point)?(l.right.setFromMatrixColumn(n.matrixWorld,0),l.up.setFromMatrixColumn(n.matrixWorld,1),l):null}directorForce(e){this.director&&(this.director.voted=!1,this.director.force(e))}pickMode(e){let t=e.game;switch(e.screen){case"title":return"hero";case"room":case"lobby":return"lobby";case"results":return e.results?"results":"celebrate";case"game":return t&&t.multiplayer&&t.mode==="competitive"&&e.mp.role!=="player"?"arena":"play";default:return"hero"}}advance(e,t=1/30){let i=Math.max(1,Math.ceil(e/t)),n=this.fakeTs||this.last||0;for(let r=0;r<i;r+=1)n+=t*1e3,this.frame(n,{render:!1});this.fakeTs=n}frame(e,{render:t=!0}={}){let i=Fe((e-(this.last||e))/1e3,0,.05);if(this.last=e,this.engine.contextLost)return;this.time+=i;let n=this.host.view();this.view=n,this.reduced=!!n.reduced,this.engine.reducedMotion=this.reduced;let r=cr(n.theme);r!==this.theme&&this.buildTheme(r);let o=this.pickMode(n);o!==this.mode&&this.enterMode(o,n),this.modeTime+=i,this.slowT>0?(this.slowT-=i,this.slowT<=0&&(this.timeScale=1)):this.timeScale=At(this.timeScale,1,6,i);for(let a of this.activeTowers())a.timeScale=this.timeScale;this.post={spots:[]},this.engine.resize(),this["update_"+this.mode](i,n),this.updateCommon(i),t&&(this.engine.render(i,this.post),this.engine.govern(i*1e3,e)),this.pointer.speed*=.9}activeTowers(){return this.mode==="arena"||this.mode==="celebrate"?this.arena:Object.values(this.towers)}enterMode(e,t){let i=this.mode;this.mode=e,this.modeTime=0,this.engine.fade.value=Math.max(this.engine.fade.value,i?.8:1),this.engine.fade.target=0;let n=e==="hero",r=e==="play"||e==="results";this.title.group.visible=n,this.arsenal.group.visible=n,this.towers.hero&&(this.towers.hero.root.visible=n),this.towers.play&&(this.towers.play.root.visible=r),this.towers.lobby&&(this.towers.lobby.root.visible=e==="lobby");for(let o of this.arena)o.root.visible=e==="arena"||e==="celebrate";for(let o of this.labels)o.mesh.visible=!1;this.ruler.group.visible=r,e!=="celebrate"&&this.world.plinth.scale.set(e==="arena"?2.3:1,1,e==="arena"?.62:1),this.popups.clear(),this.lastEffectKey="",this.removeBadge(),n?this.openHud():this.leaveHome(),e==="hero"&&!this.director&&(this.director=new yc(t.Core,Nt(Date.now()&65535))),e==="results"&&(this.resultsT=0),this.world.crowd.clearBallot(),(i==="results"||i==="celebrate")&&(this.fx.confetti.floor=-64)}openHud(){if(this.hud)return;this.hintAge=0;let e=null;try{e=window.localStorage}catch{e=null}let t=!!(window.matchMedia&&window.matchMedia("(pointer: coarse)").matches);this.hud=pp({doc:document,storage:e,touch:t,onTurn:i=>{this.orbit.rotateBy(i),this.idleFor=0,this.hud&&this.hud.quiet()},onReset:()=>this.orbit.reset()})}leaveHome(){this.endDrag(!0),this.orbit.snap(),this.world.setViewYaw(0),this.popups.faceYaw=0,this.dragBlend=0,this.setCursor(""),this.heroHover=-1,this.arsenal.hover=-1,this.cursorLight.intensity=0,this.hover.energy=0,this.hover.inside=!1,this.world.crowd.setAttention(0,0,0,0),this.engine.bloomPass.strength=this.palette.bloom}updateCommon(e){let t=this.time;this.engine.fade.value=At(this.engine.fade.value,this.engine.fade.target,this.engine.fade.speed*3,e),this.fx.sparks.update(e*this.timeScale),this.fx.glints.update(e),this.fx.confetti.update(e,t),this.fx.pulses.update(e),this.fx.sparks.setScale(this.engine.height*.95),this.fx.glints.setScale(this.engine.height*.95),this.popups.update(e,t),this.flash=At(this.flash,0,7,e),this.desatPulse=At(this.desatPulse,0,3.2,e),this.caPulse=At(this.caPulse,0,4,e),this.post.flash=this.flash,this.post.desat=Math.max(this.post.desat||0,this.desatPulse*.45),this.post.ca=(this.post.ca||0)+this.caPulse*.004,this.flash>.01&&(this.post.flashColor=this.theme==="primetime"?[1,.9,.6]:this.desatPulse>.2?[.9,.25,.2]:[1,.86,.55])}placeCamera({anchor:e,screen:t,rect:i,worldW:n,worldH:r,yaw:o=0,pitch:a=.1,zoom:l=1,roll:c=0,shake:h=[0,0,0]}){let u=this.camera,d=this.engine.cssWidth,f=this.engine.cssHeight,p=Math.max(.05,Math.min(i.w/n,i.h/r))*l,g=f/(2*p*Math.tan(nr.degToRad(u.fov)/2)),m=Math.cos(a);return this.camDist=g,u.position.set(e.x+Math.sin(o)*m*g+h[0],e.y+Math.sin(a)*g+h[1],e.z+Math.cos(o)*m*g+h[2]),u.near=Math.max(4,g*.05),u.far=3e4,u.up.set(0,1,0),u.lookAt(e.x,e.y,e.z),c&&u.rotateZ(c),u.setViewOffset(d,f,-(t.x-d/2),-(t.y-f/2),d,f),u.updateProjectionMatrix(),u.updateMatrixWorld(!0),p}rectOf(e,t){if(e&&e.getBoundingClientRect){let i=e.getBoundingClientRect();if(i.width>8&&i.height>8)return{x:i.left,y:i.top,w:i.width,h:i.height}}return t||{x:0,y:0,w:this.engine.cssWidth,h:this.engine.cssHeight}}uvRect(e){let t=this.engine.cssWidth,i=this.engine.cssHeight;return[e.x/t,1-(e.y+e.h)/i,(e.x+e.w)/t,1-e.y/i]}parallax(e=1){let t=this.pointer;return this.reduced?[0,0]:[(t.inside?t.x:0)*.07*e,(t.inside?t.y:0)*.025*e]}towerStateFromGame(e){let t=e.game,i=e.Core,n=e.mp,r=t.multiplayer?`mp:${t.roundNumber}:${t.mode}`:`solo:${L3(t)}`,o=t.phase==="collapse"||t.phase==="ended"||t.phase==="results";if(t.multiplayer&&t.mode==="competitive"){let l=(t.remotePlayers||[]).find(c=>c.playerId===n.playerId);l&&l.collapsed&&(o=!0)}let a=t.phase==="playing"&&!o;return{id:r,blocks:t.stack||[],fallen:t.fallenPieces||[],moving:a?t.moving:null,effect:t.activeEffect,helpers:i,phase:t.phase,collapsed:o,collapseStartLevel:t.collapseStartLevel,reduced:this.reduced,teamPlacers:!!(t.multiplayer&&t.mode==="teamwork"),ended:!1}}ballotFrom(e){let t=e.game;if(!t||!t.vote||t.phase!=="playing")return null;let i=!!(e.mp.active&&t.multiplayer),n=t.vote,r=e.Core,o=i&&n.counts?n.counts:r.countVotes(n.votes,n.options),a=i?Number(n.totalVotes)||0:n.votes.size,l=n.options.slice(0,3).map(h=>Number(o[h])||0);if(!i&&n.votes.has&&n.votes.has("you")){let h=n.votes.get("you"),u=n.options.indexOf(h);u>=0&&(l[u]+=3),a+=3}for(;l.length<3;)l.push(0);let c=i?Math.max(5,(e.mp.room&&e.mp.room.players?e.mp.room.players.length:4)*1.5):22;return{voted:Fe(a/c),fractions:l.map(h=>h+1e-4),colors:hr[this.theme]}}announceEffect(e,t){let i=window.SabotageStack&&window.SabotageStack.sabotages.find(c=>c.id===e.id);if(!i)return;let n=i.name.toUpperCase(),r=Fe(300/(n.length*.7),15,36),o=this.rig.focusY;this.popups.show({text:n,position:[0,o+150,110],size:r,depth:10,color:this.palette.cream,glow:.6,style:"slam",life:1.9,tilt:.06}),this.removeBadge();let a=Ho(e.id,this.theme);a.scale.multiplyScalar(1.5),a.position.set(-128,o+168,120),this.scene.add(a);let l=new ne(new on(30,33,48,1,0,Qe),new mt({color:new Se(this.palette.amber).multiplyScalar(1.6),transparent:!0,opacity:.9,side:yt,toneMapped:!1,depthWrite:!1}));l.position.copy(a.position),l.position.z-=4,this.scene.add(l),this.badge={icon:a,ring:l,born:this.time,progress:1},this.fx.pulses.pulse({pos:[0,o+60,80],color:this.palette.amber,radius:220,life:.7,from:.2,strength:1,vertical:!0}),this.world.crowd.cheer(.6)}removeBadge(){this.badge&&(this.scene.remove(this.badge.icon,this.badge.ring),this.badge.icon.userData.dispose(),this.badge.ring.geometry.dispose(),this.badge.ring.material.dispose(),this.badge=null)}updateBadge(e,t,i){if(!this.badge)return;let n=this.badge;if(!e){this.removeBadge();return}let r=this.time-n.born,o=tc(Fe(r/.35));n.icon.scale.setScalar(1.5*o*(1+Math.sin(r*2)*.03)),n.icon.rotation.y=r*1.1,n.icon.position.set(-128,i+168+Math.sin(r*2.2)*3,120);let a=Number(e.duration)||Number(e.elapsed)+Number(e.remaining)||5,l=Fe(Number.isFinite(Number(e.remaining))&&e.remaining>0?e.remaining/a:1,0,1);Math.abs(l-n.progress)>.015&&(n.progress=l,n.ring.geometry.dispose(),n.ring.geometry=new on(30,33,48,1,Math.PI/2,Math.max(.001,Qe*l))),n.ring.position.set(n.icon.position.x,n.icon.position.y,116),n.ring.scale.setScalar(o)}update_play(e,t){let i=t.game,n=this.getTower("play"),r=this.towers.hero;if(r&&(r.root.visible=!1),n.root.visible=!0,!i){this.placeIdle(e,t);return}let o=this.towerStateFromGame(t);this.lastPlayKey=o.id,n.sync(o,e,this.time);let a=o.blocks,l=a.length,c=i.activeEffect?i.activeEffect.id:"",h=Math.max(220,(l+1)*22-60);this.rig.focusY=this.reduced?h:At(this.rig.focusY,h,1/.12,e);let u=Fe(this.rig.focusY/2200),d=i.activeEffect,f=d?`${d.id}:${d.targetPlayerId||""}`:"";f!==this.lastEffectKey&&(d?this.announceEffect(d,t):this.removeBadge(),this.lastEffectKey=f),this.updateBadge(d,e,this.rig.focusY);let p=c==="zoom"?1.85:1;this.rig.zoom=this.reduced?p:At(this.rig.zoom,p,1/.12,e);let g=Fe((this.rig.zoom-1)/.85),m=a[a.length-1],x=m?(m.left+m.right)/2-180:0,_=m?Qi(m.level):11,M=document.getElementById("game-stage"),y=this.rectOf(M),w=Math.min(y.w/zo,y.h/520),T=new P(Li(0,x,g),Li(this.rig.focusY,_,g),30),v={x:y.x+y.w/2+Li(0,x*w,g),y:y.y+y.h/2-Li(0,(_-this.rig.focusY)*w,g)},[S,I]=this.parallax(),R=this.reduced?0:Math.sin(this.time*.23)*.05;this.rig.yaw=At(this.rig.yaw,R+S+(this.reduced,0),4,e),this.rig.pitch=At(this.rig.pitch,.1+I+(this.reduced?0:Math.sin(this.time*.17)*.012),4,e);let q=[0,this.rig.kick.step(e),0];if(this.rig.shakeAmp>.01&&!this.reduced&&(this.rig.shakeT+=e,this.rig.shakeAmp*=Math.exp(-e*2.8),q=[q[0]+Math.sin(this.rig.shakeT*61)*this.rig.shakeAmp,q[1]+Math.cos(this.rig.shakeT*53)*this.rig.shakeAmp*.7,0]),c==="earthquake"&&!this.reduced&&i.activeEffect){let C=t.Core.earthquakeOffset(i.activeEffect.elapsed,i.activeEffect.remaining,!1);q[0]+=C.x*.55,q[1]-=C.y*.55}let D=c==="drunk"&&!this.reduced?Math.sin(this.time*2.1)*.035+Math.sin(this.time*3.7)*.018:0;this.placeCamera({anchor:T,screen:v,rect:y,worldW:zo,worldH:520,yaw:this.rig.yaw,pitch:this.rig.pitch,zoom:this.rig.zoom,roll:D,shake:q}),this.world.plinth.position.set(n.shake.x,n.shake.y,0),this.ruler.setHeight(l),this.ruler.group.position.y=0;let U=this.ballotFrom(t);if(U?this.world.crowd.setBallot(U):this.world.crowd.clearBallot(),this.reduced||(c==="slowmo"&&(this.post.desat=.5,this.post.tint=[.9,.97,1.12]),c==="turbo"&&(this.post.zoomBlur=.28,this.post.ca=.0014),c==="drunk"&&(this.post.wobble=1),c==="earthquake"&&(this.post.ca=.0022)),n.rig.spot&&d){let C=this.spotPost(n,n.rig.spot,y);C&&this.post.spots.push(C)}this.updateWorld(e,this.rig.focusY,u,t,n),this.post.tiltCenter=.5,this.post.blur=5}spotPost(e,t,i){let n=e.root.localToWorld(new P(t.x,t.y,t.z)),r=new P().setFromMatrixColumn(this.camera.matrixWorld,0).multiplyScalar(t.radius*e.root.scale.x),o=n.clone().project(this.camera),a=n.clone().add(r).project(this.camera),l=this.camera.aspect,c=Math.abs((a.x-o.x)*.5)*l;return{x:o.x*.5+.5,y:o.y*.5+.5,r:c,rect:this.uvRect(i)}}heroFieldRect(e,t){let i=this.engine.cssWidth,n=this.engine.cssHeight,r=this.fieldCorner||(this.fieldCorner=new P),o=Qi(t+1)+24,a=1/0,l=1/0,c=-1/0,h=-1/0;for(let u of[-zo/2-12,zo/2+12])for(let d of[-8,o])for(let f of[-50,50]){e.root.localToWorld(r.set(u,d,f)),r.project(this.camera);let p=(r.x*.5+.5)*i,g=(.5-r.y*.5)*n;a=Math.min(a,p),c=Math.max(c,p),l=Math.min(l,g),h=Math.max(h,g)}return a=Fe(a,0,i),c=Fe(c,0,i),l=Fe(l,0,n),h=Fe(h,0,n),{x:a,y:l,w:Math.max(8,c-a),h:Math.max(8,h-l)}}updateWorld(e,t,i,n,r){this.world.update({time:this.time,dt:e,focusY:t,altitude:i,dim:1,camera:this.camera,shadowFocus:{x:0,y:t},fogDist:this.camDist||1e3})}placeIdle(e,t){let i=this.rectOf(document.getElementById("game-stage"));this.placeCamera({anchor:new P(0,220,30),screen:{x:i.x+i.w/2,y:i.y+i.h/2},rect:i,worldW:zo,worldH:520,pitch:.1}),this.updateWorld(e,220,0,t)}update_hero(e,t){let i=this.engine.cssWidth,n=this.engine.cssHeight,r=t.Core,o=document.querySelector("#title-screen .home-copy"),a=document.querySelector("header.topbar"),l=a?a.getBoundingClientRect().bottom:0,c=o?o.getBoundingClientRect():{left:0,right:0,top:n,width:0},h;i>=900&&c.right<i*.66?h={x:c.right+12,y:l+6,w:i-c.right-28,h:n-l-20}:h={x:6,y:l+2,w:i-12,h:Math.max(180,Math.min(c.top-l-6,n*.62))};let u=h.w/h.h>1.75?"wide":"tall";u!==this.heroLayout&&(this.heroLayout=u,this.title.build(u));let d=this.getTower("hero");d.root.visible=!0,this.towers.play&&(this.towers.play.root.visible=!1);let f=this.director;this.reduced&&!f.reducedSet&&(f.reducedSet=!0),f.update(e*this.timeScale,this.reduced);let p=f.state(r,this.reduced);d.sync(p,e,this.time);let g=p.effect,m=g?g.id:"";m!==this.lastEffectKey&&(this.lastEffectKey=m);let x=this.reduced,_=this.pointer,M=this.orbit,y=this.hover,w=this.title.bounds,v=Math.max(w.x1-w.x0,420*2+40),S=w.y1,I=-175,R=v,q=S-I,D=0,U=(S+I)/2,C=x?1:Po(Fe(this.modeTime/3.2)),B=Math.asin(Fe((10-U)/(this.camDist||1700),-.95,.95));M.setReduced(x),M.minPitch=Math.min(0,B-.045),M.update(e),!x&&M.rotated&&!this.drag&&!M.moving?(this.idleFor+=e,this.idleFor>30&&(M.reset(2.4),this.idleFor=0)):(this.drag||M.moving)&&(this.idleFor=0),this.dragBlend=At(this.dragBlend,this.drag||M.moving?1:0,this.drag?14:2.2,e);let[H,O]=this.parallax(1.4),te=1-this.dragBlend,V=(1-C)*-.22+H*te+(x?0:Math.sin(this.time*.19)*.035)+M.yaw,X=Li(-.12,.085,C)+O*te+M.pitch,j=Li(.8,1,C)*(x?1:1+.028*y.energy),Re=[0,this.rig.kick.step(e),0],Ne=this.heroAnchor||(this.heroAnchor=new P);Ne.set(D,U,-20),this.placeCamera({anchor:Ne,screen:{x:h.x+h.w/2,y:h.y+h.h/2},rect:h,worldW:R*1.04,worldH:q*1.04,yaw:V,pitch:X,zoom:j,shake:Re}),this.world.setViewYaw(M.yaw),this.popups.faceYaw=V;let Z=_.inside&&!_.overUi&&!_.touch,Te=Z&&_.lastX>=h.x&&_.lastX<=h.x+h.w&&_.lastY>=h.y&&_.lastY<=h.y+h.h?this.pointerOnScreenPlane(Ne,_.ndc,0):null,De=-1;Z&&!this.drag&&(this.raycaster.setFromCamera(_.ndc,this.camera),De=this.arsenal.pick(this.raycaster)),De!==this.heroHover?(this.heroHover=De,this.arsenal.hover=De,this.showHoverLabel(De,V)):De>=0&&this.showHoverLabel(De,V,!0),this.setCursor(this.drag?"grabbing":De>=0?"pointer":Z?"grab":""),y.update(e,{point:Te?Te.point:null,speed:_.speed,blocked:!!this.drag,reduced:x}),this.hoverLife(e,Te,Ne,V,h);let ve=this.drag?null:Te;this.title.update(e,this.time,{pointer:ve,pointerSpeed:_.speed,reduced:x,energy:y.energy,yaw:V}),this.arsenal.update(e,this.time,x,{yaw:V,pointer:ve,energy:y.energy});let Ue=f.ballot;Ue?this.world.crowd.setBallot({voted:Ue.voted,fractions:Ue.fractions,colors:hr[this.theme]}):this.world.crowd.clearBallot(),g&&g.id!==this.heroEffect?(this.heroEffect=g.id,this.world.crowd.cheer(.8)):g||(this.heroEffect=""),this.ruler.group.visible=!1,this.hud&&(this.hud.place(h.x+h.w-14,h.y+h.h-12),this.hud.setRotated(M.rotated),this.hintAge+=e,this.hintAge>10&&this.hud.fade()),this.world.plinth.position.set(d.shake.x,d.shake.y,0),this.updateWorld(e,260,0,t,d);let Oe=g?g.id:"";if(x||(Oe==="slowmo"&&(this.post.desat=.35,this.post.tint=[.92,.98,1.08]),Oe==="turbo"&&(this.post.zoomBlur=.25),Oe==="drunk"&&(this.post.wobble=.6)),d.rig.spot&&g){let Ke=this.spotPost(d,d.rig.spot,this.heroFieldRect(d,(p.blocks||[]).length));Ke&&this.post.spots.push(Ke)}this.post.tiltCenter=Li(.55,Fe((_.ndc.y+1)/2,.2,.85),x?0:.8*y.energy),this.post.blur=6,this.engine.bloomPass.enabled&&(this.post.bloom=this.palette.bloom*(1+.3*y.energy)),this.post.fade=0}hoverLife(e,t,i,n,r){let o=this.hover,a=o.energy,l=this.reduced,c=this.cursorLight,h=this.world.crowd,u=this.tmpForward;if(a>.003&&u?(c.position.set(o.x,o.y,o.z).addScaledVector(u,-170),c.intensity=a*this.cursorLightPower):c.intensity=0,l||!t){h.setAttention(0,0,0,0);return}let d=Math.cos(this.orbit.yaw),f=Math.sin(this.orbit.yaw);h.setAttention(d*o.x-f*o.z,f*o.x+d*o.z+260,a*.85,a*(o.dwell>1.2?1:.65)),o.entered&&(this.title.wave(t.point.x),h.cheer(.55),this.groundRipple(1));for(let p=o.sparks(e,this.pointer.speed,l);p>0;p-=1)this.sparkle(t);this.pointer.speed>340&&this.time-this.lastRipple>.34&&(this.lastRipple=this.time,this.groundRipple(.7))}sparkle(e){let t=this.sparkleColors,i=t[Math.floor(Math.random()*t.length)%t.length],n=this.tmpForward,r=this.glintBoost,o=(Math.random()-.5)*40,a=(Math.random()-.5)*40,l=e.right,c=e.up;this.fx.glints.emit({pos:[e.point.x+l.x*o+c.x*a-n.x*150,e.point.y+l.y*o+c.y*a-n.y*150,e.point.z+l.z*o+c.z*a-n.z*150],vel:[(Math.random()-.5)*56,26+Math.random()*50,(Math.random()-.5)*30],color:[i[0]*r,i[1]*r,i[2]*r],alpha:1,size:(this.theme==="paper"?12:9)+Math.random()*12,life:.7+Math.random()*.6,drag:1.5,gravity:-38})}groundRipple(e=1){this.raycaster.setFromCamera(this.pointer.ndc,this.camera);let t=this.raycaster.ray.intersectPlane(this.groundPlane,this.tmpGround||(this.tmpGround=new P));!t||Math.hypot(t.x,t.z)>1e3||this.fx.pulses.pulse({pos:[t.x,-58,t.z],color:this.theme==="sunset"?"#FF4FD8":this.palette.amber,radius:90+110*e,life:1.05,from:.08,strength:1.1})}showHoverLabel(e,t=0,i=!1){if(i||this.popups.hide("hover"),e<0)return;let n=this.arsenal.items[e],r=n.holder.position,o=[r.x+Math.sin(t)*60,r.y+92,r.z+Math.cos(t)*60];if(i){let l=this.popups.items.find(c=>c.key==="hover"&&!c.dying);l&&(l.base=o);return}let a=String(n.name||n.id).toUpperCase();this.popups.show({key:"hover",text:a,position:o,size:Fe(300/(a.length*.72),14,30),depth:8,color:this.theme==="paper"?this.palette.ink:this.palette.cream,glow:this.theme==="paper"?.15:.7,style:"hold",life:1})}update_arena(e,t){let i=t.game;if(!i){this.placeIdle(e,t);return}let n=t.Core,r=i.remotePlayers||[],o=Math.max(1,r.length);for(;this.arena.length<o;){let _=new gr(this.kit,this.fx,{scale:1});_.root.visible=!0,this.scene.add(_.root),this.wireTower(_,"arena"),this.arena.push(_)}this.arena.forEach((_,M)=>{_.root.visible=M<o});let a=this.rectOf(document.getElementById("game-stage")),l=720/o,c=Math.max(0,...r.map(_=>Number(_.height)||(_.blocks?_.blocks.length-1:0))),h=Fe(Math.min(l/400,440/((c+2)*22)),.06,.9),u=i.remoteEffects||[],d=u.map(_=>`${_.id}:${_.targetPlayerId||"all"}`).join(",");if(d!==this.lastArenaKey){let _=u.find(M=>!(this.lastArenaKey||"").includes(`${M.id}:${M.targetPlayerId||"all"}`));if(_&&this.mode==="arena"){let M=window.SabotageStack&&window.SabotageStack.sabotages.find(y=>y.id===_.id);if(M){let y=M.name.toUpperCase();this.popups.show({text:y,position:[0,330,130],size:Fe(520/(y.length*.7),18,46),depth:12,color:this.palette.cream,glow:.7,style:"slam",life:1.9,tilt:.05}),this.world.crowd.cheer(.9)}}this.lastArenaKey=d}r.forEach((_,M)=>{let y=this.arena[M],w=(M-(o-1)/2)*l;y.root.position.set(w,0,0),y.root.scale.setScalar(h);let T=u.find(I=>I.targetPlayerId===_.playerId||I.targetPlayerId==null)||null,v=_.blocks&&_.blocks.length?_.blocks:[n.makeBase()],S=!_.ended&&!_.collapsed&&_.moving;if(y.sync({id:`arena:${i.roundNumber}:${_.playerId||M}`,blocks:v,fallen:_.fallen||[],moving:S?_.moving:null,effect:T,helpers:n,phase:"playing",collapsed:!!_.collapsed,reduced:this.reduced,ended:!!_.ended},e,this.time),this.arenaLabel(M,_,w,h,c),y.rig.spot&&T){let I={x:a.x+a.w*(M/o),y:a.y+60*(a.h/520),w:a.w/o,h:a.h-66*(a.h/520)},R=this.spotPost(y,y.rig.spot,I);R&&this.post.spots.length<6&&this.post.spots.push(R)}});for(let _=o;_<this.arena.length;_+=1)this.arena[_].root.visible=!1;for(let _=o;_<this.labels.length;_+=1)this.labels[_].mesh.visible=!1;let f=226,[p,g]=this.parallax(.7);this.placeCamera({anchor:new P(0,f,30),screen:{x:a.x+a.w/2,y:a.y+a.h/2},rect:a,worldW:720,worldH:520,yaw:p*.8+(this.reduced?0:Math.sin(this.time*.2)*.04),pitch:.12+g});let m=(c+1)*22*h;this.ruler.group.visible=!1,this.world.crowd.clearBallot();let x=this.ballotFrom(t);x&&this.world.crowd.setBallot(x),this.updateWorld(e,f,0,t),this.post.tiltCenter=.5,this.post.blur=4}arenaLabel(e,t,i,n,r,o={}){let a=this.labels[e],l=String(t.name||"Player").slice(0,12),c=Number(t.height)||0,h=o.status||(t.disconnected?"OFFLINE":t.collapsed?"COLLAPSED":t.ended?"FINISHED":`${c} HIGH`),u=`${l}|${h}|${t.color}`;if(!a){let f=document.createElement("canvas");f.width=256,f.height=96;let p=new si(f);p.colorSpace=Et,p.anisotropy=4;let g=new ne(new Tt(112,42),new mt({map:p,transparent:!0,depthWrite:!1}));a={mesh:g,canvas:f,texture:p,text:""},this.labels[e]=a,this.scene.add(g)}if(a.mesh.visible=!0,a.text!==u){a.text=u;let f=a.canvas.getContext("2d");f.clearRect(0,0,256,96);let p=this.palette;f.fillStyle=this.theme==="paper"?"rgba(244,237,223,0.92)":"rgba(6,10,36,0.9)",this.theme==="sunset"?f.fillRect(4,4,248,88):(f.beginPath(),f.roundRect(4,4,248,88,22),f.fill()),f.strokeStyle=_s(this.theme,t.color||"#E3A33B"),f.lineWidth=6,f.stroke(),f.fillStyle=_s(this.theme,t.color||"#E3A33B"),f.beginPath(),f.arc(34,34,12,0,Qe),f.fill(),f.fillStyle=this.theme==="paper"?"#2A2520":"#ffffff",f.textBaseline="middle",f.font=this.theme==="sunset"?"34px VT323, monospace":this.theme==="primetime"?'700 34px "Barlow Condensed", sans-serif':'700 30px "DM Sans", sans-serif',f.textAlign="left",f.fillText(l,58,34,180),f.fillStyle=this.theme==="paper"?"#6E6558":"#C9D6FF",f.font=this.theme==="sunset"?"28px VT323, monospace":this.theme==="primetime"?'500 26px "Barlow Condensed", sans-serif':'600 24px "DM Sans", sans-serif',f.textAlign="center",f.fillText(h,128,72,220),a.texture.needsUpdate=!0}let d=o.colW||720/Math.max(1,this.view.game.remotePlayers.length);a.mesh.scale.setScalar(Fe(d/150,.5,1.15)),a.mesh.position.set(i,o.y==null?470:o.y,120)}update_results(e,t){let i=t.results,n=this.getTower("play");n.root.visible=!0;let r=i.blocks||[],o=(i.collapsedBlocks||[]).map(M=>M.level),a=o.length?Math.min(...o):null;n.sync({id:this.lastPlayKey||"results",blocks:r,fallen:i.fallen||[],moving:null,effect:null,helpers:t.Core,phase:"ended",collapsed:!0,collapseStartLevel:a,reduced:this.reduced,ended:!0},e,this.time),this.resultsT=(this.resultsT||0)+e;let l=document.querySelector("#solo-result-layout .results-frame"),c=this.rectOf(l,this.rectOf(document.getElementById("results-canvas"))),h=a??r.length,u=h*22+40,d=Math.max(520,u+220),f=d/2-50;this.rig.focusY=At(this.rig.focusY,f,3,e);let p=this.reduced?1:Po(Fe(this.resultsT/1.8)),[g,m]=this.parallax(1.4),x=(1-p)*0+Math.sin(this.time*.22)*.14+g,_=Li(.04,.13,p)+m;this.placeCamera({anchor:new P(0,this.rig.focusY,30),screen:{x:c.x+c.w/2,y:c.y+c.h/2},rect:c,worldW:400,worldH:d,yaw:x,pitch:_,zoom:Li(1.08,1,p)}),!this.popups.items.find(M=>M.key==="height")&&this.resultsT>.4&&(this.popups.show({key:"height",text:String(i.height),position:[0,h*22+92,80],size:96,depth:30,color:this.palette.amber,glow:.9,style:"hold",life:1}),i.newBest&&this.popups.show({key:"best",text:"NEW BEST",position:[0,h*22+168,80],size:22,depth:8,color:this.palette.vermilion,glow:1,style:"hold",life:1,tilt:-.05}),!this.reduced&&(i.newBest||i.height>=15)&&this.fx.confetti.burst({pos:[0,h*22+140,40],count:130,speed:360,colors:this.confettiColors(),size:7.5,life:4.2,cone:1.4}),this.world.crowd.cheer(i.newBest?2.2:1)),this.ruler.setHeight(r.length),this.world.plinth.position.set(0,0,0),this.world.crowd.clearBallot(),this.updateWorld(e,this.rig.focusY,Fe(this.rig.focusY/2200),t,n),this.post.tiltCenter=.5,this.post.blur=5}startPodium(e){this.podiumFor=e,this.podiumId=(this.podiumId||0)+1,this.podiumClock=0,this.podiumFinale=!1,this.podiumCannon=0,this.podiumSide=1,this.podium=mp(e);for(let t of this.podium)t.shown=0,t.fallenShown=-1,t.blockView=[],t.fallenView=[];this.fx.confetti.floor=-64}update_celebrate(e,t){let i=this.engine.cssWidth,n=this.engine.cssHeight,r=t.Core,o=t.mp&&t.mp.resultPayload||null;(!this.podium||o!==this.podiumFor)&&this.startPodium(o);let a=this.podium,l=a.length;for(;this.arena.length<l;){let D=new gr(this.kit,this.fx,{scale:1});D.root.visible=!0,this.scene.add(D.root),this.wireTower(D,"arena"),this.arena.push(D)}this.arena.forEach((D,U)=>{D.root.visible=U<l});for(let D=l;D<this.labels.length;D+=1)this.labels[D].mesh.visible=!1;this.podiumClock+=e;let c=Math.max(1,...a.map(D=>D.blocks.length)),{worldW:h,colW:u,scale:d,maxHeight:f}=gp(l,c),p=!0,g=Fe(u/150,.5,1.15);a.forEach((D,U)=>{let C=D.blocks.length,B=xp(this.podiumClock,C,{reduced:this.reduced});B>D.shown&&(D.shown=B,D.blockView=D.blocks.slice(0,B)),D.shown<C&&(p=!1);let H=_p(D.fallen,D.shown,C);H!==D.fallenShown&&(D.fallenShown=H,D.fallenView=D.fallen.slice(0,H));let O=this.arena[U],te=D.slot*u;if(O.root.position.set(te,0,0),O.root.scale.setScalar(d),O.sync({id:`podium:${this.podiumId}:${D.key}`,blocks:D.blockView.length?D.blockView:[r.makeBase()],fallen:D.fallenView,moving:null,effect:null,helpers:r,phase:"ended",collapsed:!1,reduced:this.reduced,ended:!0,teamPlacers:!!D.team},e,this.time),D.team){this.labels[U]&&(this.labels[U].mesh.visible=!1);return}let X=D.shown>=C?`${D.winner?"WINNER \xB7 ":""}${D.height}${D.winner?"":" HIGH"}`:`${Math.max(0,D.shown-1)} HIGH`;this.arenaLabel(U,{name:D.name,color:D.color},te,d,f,{status:X,colW:u,y:Math.max(1,D.shown)*22*d+26+24*g})});let m=this.world.plinth.scale,x=l<=1?1:l===2?1.7:2.3,_=l<=1?1:.62;this.world.plinth.scale.set(At(m.x,x,4,e),1,At(m.z,_,4,e)),this.world.plinth.position.set(0,0,0);let M=(f+1)*22*d;if(p&&l>0&&!this.podiumFinale){this.podiumFinale=!0,this.podiumCannon=.5,this.world.crowd.cheer(2.4);let D=a.filter(H=>H.winner),U=this.palette.amber;D.forEach(H=>{let O=H.slot*u,te=H.blocks.length*22*d;this.fx.pulses.pulse({pos:[O,2,20],color:U,radius:Math.max(160,330*d),life:1.3,from:.2,strength:1.5}),this.reduced||this.fx.confetti.burst({pos:[O,te+10,40],count:150,speed:400,colors:this.confettiColors(),size:11,life:4.6,cone:1.5})});let B=vp(a,H=>[...String(H).toUpperCase()].filter(O=>rp(this.palette.fontKey,O)).join("").trim());this.popups.show({text:B,position:[0,M+96,130],size:Fe(560/(B.length*.72),18,46),depth:12,color:U,glow:.9,style:"slam",life:3.6,tilt:-.04})}if(this.podiumFinale&&!this.reduced&&(this.podiumCannon-=e,this.podiumCannon<=0)){this.podiumCannon=2.2,this.podiumSide=-this.podiumSide;let D=this.podiumSide;this.fx.confetti.burst({pos:[D*(h/2+30),0,40],count:64,speed:660,colors:this.confettiColors(),size:11,life:5.2,cone:.4,direction:[-D*.5,1,0]}),this.world.crowd.cheer(.7)}let y=this.rectOf(document.getElementById("multiplayer-results"),{x:i*.5,y:n*.4,w:i*.5,h:n*.5}),w=this.rectOf(document.querySelector("#results-screen .screen-heading"),{x:0,y:60,w:i,h:60}),v=y.x>i*.4?{x:12,y:w.y+w.h+8,w:Math.max(240,y.x-36),h:Math.max(240,n-w.y-w.h-24)}:{x:8,y:w.y+w.h+6,w:i-16,h:Math.max(200,y.y-w.y-w.h-14)},S=M*.5+40,I=M+220,[R,q]=this.parallax(1.2);this.placeCamera({anchor:new P(0,S,30),screen:{x:v.x+v.w/2,y:v.y+v.h*.47},rect:v,worldW:h+60,worldH:I,yaw:R+(this.reduced?0:Math.sin(this.time*.18)*.1),pitch:.1+q}),this.ruler.group.visible=!1,this.world.crowd.clearBallot(),this.updateWorld(e,S,.04,t),this.post.tiltCenter=.5,this.post.blur=4}update_lobby(e,t){let i=t.mp.room,n=i&&i.players||[],r=this.getTower("lobby");r.root.visible=!0;let o=[t.Core.makeBase()];n.forEach((f,p)=>{let g=Math.max(60,190-p*18),m=(360-g)/2+(p%2?8:-8);o.push({left:m,right:m+g,level:p+1,color:f.color||"#E3A33B",perfect:!1,placer:f.name||"Player"})}),r.sync({id:`lobby:${t.mp.code}`,blocks:o,fallen:[],moving:null,effect:null,helpers:t.Core,phase:"lobby",collapsed:!1,reduced:this.reduced,teamPlacers:!0},e,this.time);let a=this.rectOf(document.querySelector("#room-screen .room-lobby-layout"),{x:0,y:0,w:this.engine.cssWidth,h:this.engine.cssHeight}),l=this.engine.cssWidth,c=this.engine.cssHeight,[h,u]=this.parallax(1.3),d=l>=900?{x:l*.36,y:60,w:l*.62,h:c-80}:{x:8,y:54,w:l-16,h:c*.5};this.placeCamera({anchor:new P(0,230,0),screen:{x:d.x+d.w/2,y:d.y+d.h/2},rect:d,worldW:620,worldH:640,yaw:h+Math.sin(this.time*.2)*.1,pitch:.1+u}),this.world.plinth.position.set(0,0,0),this.ruler.group.visible=!1,this.world.crowd.clearBallot(),this.updateWorld(e,230,0,t,r),this.post.tiltCenter=.5,this.post.blur=5}dispose(){for(let[e,t]of[["pointermove",this.onPointerMove],["pointerdown",this.onPointerDown],["pointerup",this.onPointerUp],["pointercancel",this.onPointerCancel],["blur",this.onBlur],["contextmenu",this.onContextMenu],["dblclick",this.onDoubleClick],["keydown",this.onKeyDown]])window.removeEventListener(e,t);document.documentElement.removeEventListener("pointerleave",this.onPointerLeave),this.setCursor(""),this.endDrag(!0),this.hud&&(this.hud.dispose(),this.hud=null),document.documentElement.classList.remove("orbiting"),this.scene.remove(this.cursorLight),this.cursorLight.dispose(),this.engine.dispose()}};var Ec=null;function N3(){if(Ec)return Ec;let s=document.createElement("canvas"),e=new Xn({canvas:s,antialias:!0,alpha:!1,preserveDrawingBuffer:!0});e.outputColorSpace=Et,e.shadowMap.enabled=!0,e.shadowMap.type=Tn;let t=new hn(e),i=new yr;return Ec={canvas:s,renderer:e,envMap:t.fromScene(i,.04).texture},t.dispose(),i.dispose(),Ec}function U3(s){let e=document.createElement("canvas");e.width=4,e.height=256;let t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,256);i.addColorStop(0,s.skyZenith),i.addColorStop(.62,s.skyMid),i.addColorStop(1,s.skyHorizon),t.fillStyle=i,t.fillRect(0,0,4,256);let n=new si(e);return n.colorSpace=Et,n}function Mp(s,e,t){try{let i=cr(s.theme),n=vs(i),{renderer:r,envMap:o}=N3(),a=Math.min(2,Math.max(1,window.devicePixelRatio||1)),l=t.width,c=t.height;r.setPixelRatio(1),r.setSize(Math.round(l*a),Math.round(c*a),!1),r.toneMapping=i==="paper"?Di:Yi,r.toneMappingExposure=n.exposure;let h=new Mi,u=U3(n);h.background=u,h.environment=o,h.environmentIntensity=.7;let d=new fr(i),f=t.teamwork?422:252,p=Math.min(1,(f-26)/(Math.max(1,t.maxHeight+1)*Ai)),g=new ue;h.add(g);let m=[];for(let C of t.blocks||[]){let B=Number.isInteger(C.level)?C.level:(t.blocks||[]).indexOf(C),H=d.mesh({left:C.left,right:C.right,color:C.color},{depth:_i});H.position.set((C.left+C.right)/2-180,B*Ai+Ai/2,0),g.add(H),C.perfect&&d.addPerfectStar(H,C.right-C.left)}if(t.collapseLevel!=null){let C=new ne(new wt(210,1.4,6,64).rotateX(Math.PI/2),new mt({color:Je(n.vermilion).multiplyScalar(1.4)}));C.position.y=(Math.max(0,t.collapseLevel)+1)*Ai,g.add(C),m.push(C)}let x=new pr({floorY:ac()}),_=Nt(9),M=(t.fallen||[]).slice(0,12),y=Math.max(40,Math.min(95,l/2/p-30));M.forEach((C,B)=>{let H=Math.max(6,(C.right||0)-(C.left||0)),O=d.mesh({left:0,right:H,color:C.color||n.vermilion},{depth:_i*.7});g.add(O),x.add(Lo({pos:[(_()*2-1)*y,16+B*9,70+_()*70],half:[H/2,Ut/2,_i*.35],vel:[0,0,0],angVel:[_()-.5,(_()-.5)*2,(_()-.5)*2],data:{mesh:O}}))}),x.settle(2.6);for(let C of x.bodies){let B=C.data.mesh;B.position.set(...C.pos),B.quaternion.set(...C.quat)}let w=new ne(new Mt(260,268,40,64),new Xe({color:i==="paper"?"#EADFC8":n.plinth,roughness:.8,metalness:i==="primetime"?.4:0}));w.position.y=-20.2,w.receiveShadow=!0,h.add(w);let T=new ne(new mi(4e3,48).rotateX(-Math.PI/2),new Xe({color:n.floor,roughness:.95}));T.position.y=-44,h.add(T);let v=new Ei(Je(n.key),i==="paper"?2.3:2.6);v.position.set(-300,520,600),v.castShadow=!0,Object.assign(v.shadow.camera,{left:-420,right:420,top:420,bottom:-120,near:10,far:1800}),v.shadow.mapSize.set(1024,1024),v.shadow.bias=-8e-4,h.add(v),h.add(new wn(Je(n.fill),Je(n.ground),.7));let S=new Ei(Je(n.rim),1.2);S.position.set(380,160,-400),h.add(S);let I=new Zt(24,l/c,20,12e3),R=c/(2*p*Math.tan(nr.degToRad(24)/2)),q=.12,D=-.2;I.position.set(Math.sin(D)*Math.cos(q)*R,Math.sin(q)*R,30+Math.cos(D)*Math.cos(q)*R),I.lookAt(0,0,30),I.setViewOffset(l,c,0,-(f-c/2),l,c),I.updateProjectionMatrix(),r.render(h,I),e.width=Math.round(l*a),e.height=Math.round(c*a);let U=e.getContext("2d");if(U.setTransform(1,0,0,1,0,0),U.drawImage(r.domElement,0,0,e.width,e.height),t.teamwork){U.save(),U.scale(a,a);for(let C of t.blocks||[]){if(!C.placer||C.placer==="Base")continue;let B=Number.isInteger(C.level)?C.level:0,H=l/2+(C.left-180)*p,O=(C.right-C.left)*p,te=f-(B+1)*Ai*p,V=String(C.placer).slice(0,10);U.font=i==="sunset"?"14px VT323, monospace":i==="primetime"?'600 12px "Barlow Condensed", sans-serif':'600 10px "DM Sans", sans-serif';let X=Math.min(72,U.measureText(V).width+8),j=H>l*.56?Math.max(2,H-X-3):Math.min(l-X-2,H+O+3);U.fillStyle=i==="paper"?"rgba(42,37,32,.85)":"rgba(6,10,36,.88)",U.fillRect(j,te+3,X,13),U.fillStyle="#fff",U.textAlign="center",U.textBaseline="middle",U.fillText(V,j+X/2,te+10,X-4)}U.restore()}u.dispose(),d.dispose(),w.geometry.dispose(),w.material.dispose(),T.geometry.dispose(),T.material.dispose(),v.shadow.map&&v.shadow.map.dispose();for(let C of m)C.geometry.dispose(),C.material.dispose();for(let C of x.bodies)C.data.mesh.geometry;return!0}catch(i){return console.warn("3D snapshot failed; using the flat drawing",i),!1}}function Sp(s,e,t={set:(i,n)=>setTimeout(i,n),clear:i=>clearTimeout(i)}){let i=null;return{request(){return i!==null?!1:(i=t.set(()=>{i=null,s()},e),!0)},cancel(){i!==null&&(t.clear(i),i=null)},get pending(){return i!==null}}}var wp="sabotage-stack-view-v1";function B3(){try{return window.localStorage.getItem(wp)||"3d"}catch{return"3d"}}function bp(s){try{window.localStorage.setItem(wp,s)}catch{}}function Ep(){let s=window.SabotageStackHost;if(!s||window.__stack3d)return;let e=new URLSearchParams(window.location.search),i=e.get("3d")==="off"||e.get("view")==="flat"?"flat":e.get("3d")==="on"?"3d":B3(),n=Of(),r=document,o=r.documentElement,a=null,l=null,c=0,h=0,u="",d=r.createElement("button");d.type="button",d.id="view-toggle",d.className="button view-toggle";let f=r.querySelector(".top-tools");f&&f.insertBefore(d,f.firstChild),n||(d.hidden=!0);function p(y){d.setAttribute("aria-pressed",y?"true":"false"),d.textContent=y?"3D view":"Flat view",d.setAttribute("aria-label",y?"3D view is on. Activate to switch to the flat 2D view.":"Flat view is on. Activate to switch to the 3D view.")}let g=Sp(()=>{if(!l)return;let y=l.theme;u=y;try{up(r,hp(y,{size:192}))}catch(w){console.warn("3D icon sprites unavailable",w)}},160);function m(){l&&l.theme!==u&&g.request()}function x(y){if(c=requestAnimationFrame(x),!l||r.hidden){l&&(l.last=0);return}try{l.frame(y,{render:!window.__stack3dNoRender}),h=0,l.theme!==u&&m()}catch(w){h+=1,console.error("3D frame failed",w&&w.stack||w),h>=3&&(console.warn("Falling back to the flat view."),M(!0))}}function _(){if(!n||l)return!!l;try{a=r.createElement("canvas"),a.id="stage3d",a.setAttribute("aria-hidden","true"),r.body.insertBefore(a,r.body.firstChild),l=new bc({canvas:a,host:s,tier:e.get("tier"),scale:Number(e.get("scale"))||1})}catch(y){return console.warn("3D could not start; staying flat.",y),a&&a.remove(),a=null,l=null,!1}return o.classList.add("has-3d"),s.setActive(!0),p(!0),window.__stack3d=l,cancelAnimationFrame(c),c=requestAnimationFrame(x),!0}function M(y){if(cancelAnimationFrame(c),g.cancel(),l)try{l.dispose()}catch{}a&&a.remove(),l=null,a=null,u="",window.__stack3d=null,o.classList.remove("has-3d"),dp(r),s.setActive(!1),p(!1),document.documentElement.style.cursor=""}d.addEventListener("click",()=>{l?(bp("flat"),M()):_()&&bp("3d")}),s.snapshot=(y,w)=>l?Mp(l,y,w):!1,n&&i==="3d"?_():p(!1),window.__stack3dBoot={enable:_,disable:M,supported:n}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ep):Ep();})();
