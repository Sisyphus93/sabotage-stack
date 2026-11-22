/* stack3d-source-hash: 5eabc91a885d02baadf1be21ec5a2174b7452a911cae9f36d685466285925acc mode=min */
(()=>{var Af=s=>{throw TypeError(s)};var cu=(s,t,e)=>t.has(s)||Af("Cannot "+e);var Ae=(s,t,e)=>(cu(s,t,"read from private field"),e?e.call(s):t.get(s)),Xa=(s,t,e)=>t.has(s)?Af("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),hu=(s,t,e,i)=>(cu(s,t,"write to private field"),i?i.call(s,e):t.set(s,e),e),Lt=(s,t,e)=>(cu(s,t,"access private method"),e);var vp=0,Ku=1,yp=2;var Gn=1,_p=2,Cr=3,os=0,je=1,le=2,Vn=0,as=1,Oe=2,Ju=3,ju=4,Mp=5;var Ps=100,bp=101,Sp=102,Ep=103,wp=104,Tp=200,Ap=201,Rp=202,Cp=203,Qu=204,td=205,Pp=206,Ip=207,Dp=208,Fp=209,Lp=210,Np=211,Up=212,Bp=213,Op=214,Al=0,Rl=1,Cl=2,ur=3,Pl=4,Il=5,Dl=6,Fl=7,lc=0,Hp=1,kp=2,Mn=0,ia=1,na=2,sa=3,hn=4,ra=5,Is=6,Ki=7;var ed=300,Ds=301,Pr=302,cc=303,hc=304,dr=1e3,yn=1001,Ll=1002,vi=1003,zp=1004;var oa=1005;var Ci=1006,uc=1007;var un=1008;var Fi=1009,id=1010,nd=1011,Ir=1012,dc=1013,dn=1014,Ji=1015,ii=1016,fc=1017,pc=1018,Fs=1020,sd=35902,rd=35899,od=1021,ad=1022,fn=1023,Nn=1026,Wn=1027,mc=1028,gc=1029,ls=1030,xc=1031;var vc=1033,aa=33776,la=33777,ca=33778,ha=33779,yc=35840,_c=35841,Mc=35842,bc=35843,Sc=36196,Ec=37492,wc=37496,Tc=37488,Ac=37489,ua=37490,Rc=37491,Cc=37808,Pc=37809,Ic=37810,Dc=37811,Fc=37812,Lc=37813,Nc=37814,Uc=37815,Bc=37816,Oc=37817,Hc=37818,kc=37819,zc=37820,Gc=37821,Vc=36492,Wc=36494,Xc=36495,qc=36283,Yc=36284,da=36285,$c=36286;var _o=2300,Nl=2301,wl=2302,Bu=2303,Ou=2400,Hu=2401,ku=2402;var Gp=3200;var fa=0,Vp=1,Xn="",Ie="srgb",Mo="srgb-linear",bo="linear",Re="srgb";var Tl=7680;var Wp=519,Xp=512,qp=513,Yp=514,ld=515,$p=516,Zp=517,cd=518,hd=519,ud=35044,Li=35048;var dd="300 es",qi=2e3,fr=2001;function Zg(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Kg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function So(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kp(){let s=So("canvas");return s.style.display="block",s}var Rf={},pr=null;function Eo(...s){let t="THREE."+s.shift();pr?pr("log",t,...s):console.log(t,...s)}function Jp(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function qt(...s){s=Jp(s);let t="THREE."+s.shift();if(pr)pr("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Kt(...s){s=Jp(s);let t="THREE."+s.shift();if(pr)pr("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ss(...s){let t=s.join(" ");t in Rf||(Rf[t]=!0,qt(...s))}function jp(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Qp={[Al]:Al,[Cl]:Dl,[Pl]:Pl,[ur]:Il,[Rl]:Rl,[Dl]:Cl,[Fl]:Fl,[Il]:ur},_n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},Si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cf=1234567,cr=Math.PI/180,mr=180/Math.PI;function qn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Si[s&255]+Si[s>>8&255]+Si[s>>16&255]+Si[s>>24&255]+"-"+Si[t&255]+Si[t>>8&255]+"-"+Si[t>>16&15|64]+Si[t>>24&255]+"-"+Si[e&63|128]+Si[e>>8&255]+"-"+Si[e>>16&255]+Si[e>>24&255]+Si[i&255]+Si[i>>8&255]+Si[i>>16&255]+Si[i>>24&255]).toLowerCase()}function me(s,t,e){return Math.max(t,Math.min(e,s))}function fd(s,t){return(s%t+t)%t}function Jg(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function jg(s,t,e){return s!==t?(e-s)/(t-s):0}function xo(s,t,e){return(1-e)*s+e*t}function Qg(s,t,e,i){return xo(s,t,1-Math.exp(-e*i))}function tx(s,t=1){return t-Math.abs(fd(s,t*2)-t)}function ex(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ix(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function nx(s,t){return s+Math.floor(Math.random()*(t-s+1))}function sx(s,t){return s+Math.random()*(t-s)}function rx(s){return s*(.5-Math.random())}function ox(s){s!==void 0&&(Cf=s);let t=Cf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ax(s){return s*cr}function lx(s){return s*mr}function cx(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function hx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function pd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ux(s,t,e,i,n){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),f=o((t-i)/2),u=r((i-t)/2),g=o((i-t)/2);switch(n){case"XYX":s.set(a*h,l*d,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*u,a*c);break;case"YXY":s.set(l*u,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*u,a*h,a*c);break;default:qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Zc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function md(s,t){if(t.constructor===Float32Array)return s;let e=Zc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function gd(s,t){if(t.constructor===Float32Array)return s;let e=Zc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Dr={DEG2RAD:cr,RAD2DEG:mr,generateUUID:qn,clamp:me,euclideanModulo:fd,mapLinear:Jg,inverseLerp:jg,lerp:xo,damp:Qg,pingpong:tx,smoothstep:ex,smootherstep:ix,randInt:nx,randFloat:sx,randFloatSpread:rx,seededRandom:ox,degToRad:ax,radToDeg:lx,isPowerOfTwo:cx,ceilPowerOfTwo:hx,floorPowerOfTwo:pd,setQuaternionFromProperEuler:ux,normalize:gd,denormalize:md},bd=class bd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bd.prototype.isVector2=!0;var tt=bd,Je=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],f=r[o+0],u=r[o+1],g=r[o+2],m=r[o+3];if(d!==m||l!==f||c!==u||h!==g){let p=l*f+c*u+h*g+d*m;p<0&&(f=-f,u=-u,g=-g,m=-m,p=-p);let x=1-a;if(p<.9995){let y=Math.acos(p),M=Math.sin(y);x=Math.sin(x*y)/M,a=Math.sin(a*y)/M,l=l*x+f*a,c=c*x+u*a,h=h*x+g*a,d=d*x+m*a}else{l=l*x+f*a,c=c*x+u*a,h=h*x+g*a,d=d*x+m*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[o],f=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*u-c*f,t[e+1]=l*g+h*f+c*d-a*u,t[e+2]=c*g+h*u+a*f-l*d,t[e+3]=h*g-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(r/2),f=l(i/2),u=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-n)*u}else if(i>a&&i>d){let u=2*Math.sqrt(1+i-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(n+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-i-d);this._w=(r-c)/u,this._x=(n+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-i-a);this._w=(o-n)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Sd=class Sd{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=n+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return uu.copy(this).projectOnVector(t),this.sub(uu)}reflect(t){return this.sub(uu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sd.prototype.isVector3=!0;var P=Sd,uu=new P,Pf=new Je,Ed=class Ed{constructor(t,e,i,n,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],u=i[5],g=i[8],m=n[0],p=n[3],x=n[6],y=n[1],M=n[4],_=n[7],b=n[2],E=n[5],v=n[8];return r[0]=o*m+a*y+l*b,r[3]=o*p+a*M+l*E,r[6]=o*x+a*_+l*v,r[1]=c*m+h*y+d*b,r[4]=c*p+h*M+d*E,r[7]=c*x+h*_+d*v,r[2]=f*m+u*y+g*b,r[5]=f*p+u*M+g*E,r[8]=f*x+u*_+g*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,g=e*d+i*f+n*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return t[0]=d*m,t[1]=(n*c-h*i)*m,t[2]=(a*i-n*o)*m,t[3]=f*m,t[4]=(h*e-n*l)*m,t[5]=(n*r-a*e)*m,t[6]=u*m,t[7]=(i*l-c*e)*m,t[8]=(o*e-i*r)*m,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(du.makeScale(t,e)),this}rotate(t){return Ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(du.makeRotation(-t)),this}translate(t,e){return Ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(du.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ed.prototype.isMatrix3=!0;var ne=Ed,du=new ne,If=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Df=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dx(){let s={enabled:!0,workingColorSpace:Mo,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Re&&(n.r=Ln(n.r),n.g=Ln(n.g),n.b=Ln(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Re&&(n.r=hr(n.r),n.g=hr(n.g),n.b=hr(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Xn?bo:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Mo]:{primaries:t,whitePoint:i,transfer:bo,toXYZ:If,fromXYZ:Df,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:i,transfer:Re,toXYZ:If,fromXYZ:Df,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),s}var ve=dx();function Ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function hr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Xs,Ul=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Xs===void 0&&(Xs=So("canvas")),Xs.width=t.width,Xs.height=t.height;let n=Xs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Xs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=So("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ln(e[i]/255)*255):e[i]=Ln(e[i]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fx=0,gr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(fu(n[o].image)):r.push(fu(n[o]))}else r=fu(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function fu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ul.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var px=0,pu=new P,Pi=class s extends _n{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=yn,n=yn,r=Ci,o=un,a=fn,l=Fi,c=s.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=qn(),this.name="",this.source=new gr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(pu).x}get height(){return this.source.getSize(pu).y}get depth(){return this.source.getSize(pu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ed)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dr:t.x=t.x-Math.floor(t.x);break;case yn:t.x=t.x<0?0:1;break;case Ll:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dr:t.y=t.y-Math.floor(t.y);break;case yn:t.y=t.y<0?0:1;break;case Ll:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Pi.DEFAULT_IMAGE=null;Pi.DEFAULT_MAPPING=ed;Pi.DEFAULT_ANISOTROPY=1;var wd=class wd{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],m=l[2],p=l[6],x=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,_=(u+1)/2,b=(x+1)/2,E=(h+f)/4,v=(d+m)/4,S=(g+p)/4;return M>_&&M>b?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=E/i,r=v/i):_>b?_<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(_),i=E/n,r=S/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=v/r,n=S/r),this.set(i,n,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-m)*(d-m)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-m)/y,this.z=(f-h)/y,this.w=Math.acos((c+u+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wd.prototype.isVector4=!0;var De=wd,Bl=class extends _n{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Pi({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new gr(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ke=class extends Bl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},wo=class extends Pi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=vi,this.minFilter=vi,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ol=class extends Pi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=vi,this.minFilter=vi,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ac=class ac{constructor(t,e,i,n,r,o,a,l,c,h,d,f,u,g,m,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,d,f,u,g,m,p)}set(t,e,i,n,r,o,a,l,c,h,d,f,u,g,m,p){let x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=n,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=d,x[14]=f,x[3]=u,x[7]=g,x[11]=m,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ac().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/qs.setFromMatrixColumn(t,0).length(),r=1/qs.setFromMatrixColumn(t,1).length(),o=1/qs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,g=a*h,m=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=f-m*c,e[9]=-a*l,e[2]=m-f*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,g=c*h,m=c*d;e[0]=f+m*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=m+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,g=c*h,m=c*d;e[0]=f-m*a,e[4]=-o*d,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=m-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,g=a*h,m=a*d;e[0]=l*h,e[4]=g*c-u,e[8]=f*c+m,e[1]=l*d,e[5]=m*c+f,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=m-f*d,e[8]=g*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+g,e[10]=f-m*d}else if(t.order==="XZY"){let f=o*l,u=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+m,e[5]=o*h,e[9]=u*d-g,e[2]=g*d-u,e[6]=a*h,e[10]=m*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mx,t,gx)}lookAt(t,e,i){let n=this.elements;return Ui.subVectors(t,e),Ui.lengthSq()===0&&(Ui.z=1),Ui.normalize(),Kn.crossVectors(i,Ui),Kn.lengthSq()===0&&(Math.abs(i.z)===1?Ui.x+=1e-4:Ui.z+=1e-4,Ui.normalize(),Kn.crossVectors(i,Ui)),Kn.normalize(),qa.crossVectors(Ui,Kn),n[0]=Kn.x,n[4]=qa.x,n[8]=Ui.x,n[1]=Kn.y,n[5]=qa.y,n[9]=Ui.y,n[2]=Kn.z,n[6]=qa.z,n[10]=Ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],u=i[13],g=i[2],m=i[6],p=i[10],x=i[14],y=i[3],M=i[7],_=i[11],b=i[15],E=n[0],v=n[4],S=n[8],C=n[12],R=n[1],I=n[5],L=n[9],F=n[13],T=n[2],N=n[6],z=n[10],O=n[14],Y=n[3],G=n[7],$=n[11],et=n[15];return r[0]=o*E+a*R+l*T+c*Y,r[4]=o*v+a*I+l*N+c*G,r[8]=o*S+a*L+l*z+c*$,r[12]=o*C+a*F+l*O+c*et,r[1]=h*E+d*R+f*T+u*Y,r[5]=h*v+d*I+f*N+u*G,r[9]=h*S+d*L+f*z+u*$,r[13]=h*C+d*F+f*O+u*et,r[2]=g*E+m*R+p*T+x*Y,r[6]=g*v+m*I+p*N+x*G,r[10]=g*S+m*L+p*z+x*$,r[14]=g*C+m*F+p*O+x*et,r[3]=y*E+M*R+_*T+b*Y,r[7]=y*v+M*I+_*N+b*G,r[11]=y*S+M*L+_*z+b*$,r[15]=y*C+M*F+_*O+b*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],g=t[3],m=t[7],p=t[11],x=t[15],y=l*u-c*f,M=a*u-c*d,_=a*f-l*d,b=o*u-c*h,E=o*f-l*h,v=o*d-a*h;return e*(m*y-p*M+x*_)-i*(g*y-p*b+x*E)+n*(g*M-m*b+x*v)-r*(g*_-m*E+p*v)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+n*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],g=t[12],m=t[13],p=t[14],x=t[15],y=e*a-i*o,M=e*l-n*o,_=e*c-r*o,b=i*l-n*a,E=i*c-r*a,v=n*c-r*l,S=h*m-d*g,C=h*p-f*g,R=h*x-u*g,I=d*p-f*m,L=d*x-u*m,F=f*x-u*p,T=y*F-M*L+_*I+b*R-E*C+v*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/T;return t[0]=(a*F-l*L+c*I)*N,t[1]=(n*L-i*F-r*I)*N,t[2]=(m*v-p*E+x*b)*N,t[3]=(f*E-d*v-u*b)*N,t[4]=(l*R-o*F-c*C)*N,t[5]=(e*F-n*R+r*C)*N,t[6]=(p*_-g*v-x*M)*N,t[7]=(h*v-f*_+u*M)*N,t[8]=(o*L-a*R+c*S)*N,t[9]=(i*R-e*L-r*S)*N,t[10]=(g*E-m*_+x*y)*N,t[11]=(d*_-h*E-u*y)*N,t[12]=(a*C-o*I-l*S)*N,t[13]=(e*I-i*C+n*S)*N,t[14]=(m*M-g*b-p*y)*N,t[15]=(h*b-d*M+f*y)*N,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,g=r*d,m=o*h,p=o*d,x=a*d,y=l*c,M=l*h,_=l*d,b=i.x,E=i.y,v=i.z;return n[0]=(1-(m+x))*b,n[1]=(u+_)*b,n[2]=(g-M)*b,n[3]=0,n[4]=(u-_)*E,n[5]=(1-(f+x))*E,n[6]=(p+y)*E,n[7]=0,n[8]=(g+M)*v,n[9]=(p-y)*v,n[10]=(1-(f+m))*v,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=qs.set(n[0],n[1],n[2]).length(),a=qs.set(n[4],n[5],n[6]).length(),l=qs.set(n[8],n[9],n[10]).length();r<0&&(o=-o),sn.copy(this);let c=1/o,h=1/a,d=1/l;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,e.setFromRotationMatrix(sn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,r,o,a=qi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-n),f=(e+t)/(e-t),u=(i+n)/(i-n),g,m;if(l)g=r/(o-r),m=o*r/(o-r);else if(a===qi)g=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===fr)g=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=qi,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-n),f=-(e+t)/(e-t),u=-(i+n)/(i-n),g,m;if(l)g=1/(o-r),m=o/(o-r);else if(a===qi)g=-2/(o-r),m=-(o+r)/(o-r);else if(a===fr)g=-1/(o-r),m=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ac.prototype.isMatrix4=!0;var Yt=ac,qs=new P,sn=new Yt,mx=new P(0,0,0),gx=new P(1,1,1),Kn=new P,qa=new P,Ui=new P,Ff=new Yt,Lf=new Je,Di=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],f=n[6],u=n[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ff.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ff,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lf.setFromEuler(this),this.setFromQuaternion(Lf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.DEFAULT_ORDER="XYZ";var xr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xx=0,Nf=new P,Ys=new Je,Cn=new Yt,Ya=new P,ro=new P,vx=new P,yx=new Je,Uf=new P(1,0,0),Bf=new P(0,1,0),Of=new P(0,0,1),Hf={type:"added"},_x={type:"removed"},$s={type:"childadded",child:null},mu={type:"childremoved",child:null},Ve=class s extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new P,e=new Di,i=new Je,n=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ne}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(Uf,t)}rotateY(t){return this.rotateOnAxis(Bf,t)}rotateZ(t){return this.rotateOnAxis(Of,t)}translateOnAxis(t,e){return Nf.copy(t).applyQuaternion(this.quaternion),this.position.add(Nf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uf,t)}translateY(t){return this.translateOnAxis(Bf,t)}translateZ(t){return this.translateOnAxis(Of,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ya.copy(t):Ya.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(ro,Ya,this.up):Cn.lookAt(Ya,ro,this.up),this.quaternion.setFromRotationMatrix(Cn),n&&(Cn.extractRotation(n.matrixWorld),Ys.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hf),$s.child=t,this.dispatchEvent($s),$s.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_x),mu.child=t,this.dispatchEvent(mu),mu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hf),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,t,vx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,yx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ve.DEFAULT_UP=new P(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var lt=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mx={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let m of t.hand.values()){let p=e.getJointPose(m,i),x=this._getHandJoint(c,m);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=p.radius),x.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mx)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new lt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},$a={h:0,s:0,l:0};function gu(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ct=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ve.workingColorSpace){return this.r=t,this.g=e,this.b=i,ve.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ve.workingColorSpace){if(t=fd(t,1),e=me(e,0,1),i=me(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=gu(o,r,t+1/3),this.g=gu(o,r,t),this.b=gu(o,r,t-1/3)}return ve.colorSpaceToWorking(this,n),this}setStyle(t,e=Ie){function i(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let i=tm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ve.workingToColorSpace(Ei.copy(this),t),Math.round(me(Ei.r*255,0,255))*65536+Math.round(me(Ei.g*255,0,255))*256+Math.round(me(Ei.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.workingToColorSpace(Ei.copy(this),e);let i=Ei.r,n=Ei.g,r=Ei.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.workingToColorSpace(Ei.copy(this),e),t.r=Ei.r,t.g=Ei.g,t.b=Ei.b,t}getStyle(t=Ie){ve.workingToColorSpace(Ei.copy(this),t);let e=Ei.r,i=Ei.g,n=Ei.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL($a);let i=xo(Jn.h,$a.h,e),n=xo(Jn.s,$a.s,e),r=xo(Jn.l,$a.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ei=new ct;ct.NAMES=tm;var To=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Oi=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},rn=new P,Pn=new P,xu=new P,In=new P,Zs=new P,Ks=new P,kf=new P,vu=new P,yu=new P,_u=new P,Mu=new De,bu=new De,Su=new De,vn=class s{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),rn.subVectors(t,e),n.cross(rn);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){rn.subVectors(n,e),Pn.subVectors(i,e),xu.subVectors(t,e);let o=rn.dot(rn),a=rn.dot(Pn),l=rn.dot(xu),c=Pn.dot(Pn),h=Pn.dot(xu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-u-g,g,u)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(o,In.y),l.addScaledVector(a,In.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return Mu.setScalar(0),bu.setScalar(0),Su.setScalar(0),Mu.fromBufferAttribute(t,e),bu.fromBufferAttribute(t,i),Su.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Mu,r.x),o.addScaledVector(bu,r.y),o.addScaledVector(Su,r.z),o}static isFrontFacing(t,e,i,n){return rn.subVectors(i,e),Pn.subVectors(t,e),rn.cross(Pn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),rn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;Zs.subVectors(n,i),Ks.subVectors(r,i),vu.subVectors(t,i);let l=Zs.dot(vu),c=Ks.dot(vu);if(l<=0&&c<=0)return e.copy(i);yu.subVectors(t,n);let h=Zs.dot(yu),d=Ks.dot(yu);if(h>=0&&d<=h)return e.copy(n);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(Zs,o);_u.subVectors(t,r);let u=Zs.dot(_u),g=Ks.dot(_u);if(g>=0&&u<=g)return e.copy(r);let m=u*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ks,a);let p=h*g-u*d;if(p<=0&&d-h>=0&&u-g>=0)return kf.subVectors(r,n),a=(d-h)/(d-h+(u-g)),e.copy(n).addScaledVector(kf,a);let x=1/(p+m+f);return o=m*x,a=f*x,e.copy(i).addScaledVector(Zs,o).addScaledVector(Ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yi=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Za.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Za.copy(i.boundingBox)),Za.applyMatrix4(t.matrixWorld),this.union(Za)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(oo),Ka.subVectors(this.max,oo),Js.subVectors(t.a,oo),js.subVectors(t.b,oo),Qs.subVectors(t.c,oo),jn.subVectors(js,Js),Qn.subVectors(Qs,js),ys.subVectors(Js,Qs);let e=[0,-jn.z,jn.y,0,-Qn.z,Qn.y,0,-ys.z,ys.y,jn.z,0,-jn.x,Qn.z,0,-Qn.x,ys.z,0,-ys.x,-jn.y,jn.x,0,-Qn.y,Qn.x,0,-ys.y,ys.x,0];return!Eu(e,Js,js,Qs,Ka)||(e=[1,0,0,0,1,0,0,0,1],!Eu(e,Js,js,Qs,Ka))?!1:(Ja.crossVectors(jn,Qn),e=[Ja.x,Ja.y,Ja.z],Eu(e,Js,js,Qs,Ka))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Dn=[new P,new P,new P,new P,new P,new P,new P,new P],on=new P,Za=new Yi,Js=new P,js=new P,Qs=new P,jn=new P,Qn=new P,ys=new P,oo=new P,Ka=new P,Ja=new P,_s=new P;function Eu(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){_s.fromArray(s,r);let a=n.x*Math.abs(_s.x)+n.y*Math.abs(_s.y)+n.z*Math.abs(_s.z),l=t.dot(_s),c=e.dot(_s),h=i.dot(_s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ri=new P,ja=new tt,bx=0,Be=class extends _n{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ud,this.updateRanges=[],this.gpuType=Ji,this.version=0,this._normalizationScale=t!==void 0?Zc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ja.fromBufferAttribute(this,e),ja.applyMatrix3(t),this.setXY(e,ja.x,ja.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ri.fromBufferAttribute(this,e),ri.applyMatrix3(t),this.setXYZ(e,ri.x,ri.y,ri.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ri.fromBufferAttribute(this,e),ri.applyMatrix4(t),this.setXYZ(e,ri.x,ri.y,ri.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ri.fromBufferAttribute(this,e),ri.applyNormalMatrix(t),this.setXYZ(e,ri.x,ri.y,ri.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ri.fromBufferAttribute(this,e),ri.transformDirection(t),this.setXYZ(e,ri.x,ri.y,ri.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):md(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):gd(t,this.array)}};var Ao=class extends Be{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ro=class extends Be{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var $t=class extends Be{constructor(t,e,i){super(new Float32Array(t),e,i)}},Sx=new Yi,ao=new P,wu=new P,$i=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Sx.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ao.subVectors(t,this.center);let e=ao.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ao,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ao.copy(t.center).add(wu)),this.expandByPoint(ao.copy(t.center).sub(wu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ex=0,Xi=new Yt,Tu=new Ve,tr=new P,Bi=new Yi,lo=new Yi,xi=new P,ge=class s extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zg(t)?Ro:Ao)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ne().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Xi.makeRotationFromQuaternion(t),this.applyMatrix4(Xi),this}rotateX(t){return Xi.makeRotationX(t),this.applyMatrix4(Xi),this}rotateY(t){return Xi.makeRotationY(t),this.applyMatrix4(Xi),this}rotateZ(t){return Xi.makeRotationZ(t),this.applyMatrix4(Xi),this}translate(t,e,i){return Xi.makeTranslation(t,e,i),this.applyMatrix4(Xi),this}scale(t,e,i){return Xi.makeScale(t,e,i),this.applyMatrix4(Xi),this}lookAt(t){return Tu.lookAt(t),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];Bi.setFromBufferAttribute(r),this.morphTargetsRelative?(xi.addVectors(this.boundingBox.min,Bi.min),this.boundingBox.expandByPoint(xi),xi.addVectors(this.boundingBox.max,Bi.max),this.boundingBox.expandByPoint(xi)):(this.boundingBox.expandByPoint(Bi.min),this.boundingBox.expandByPoint(Bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(Bi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(xi.addVectors(Bi.min,lo.min),Bi.expandByPoint(xi),xi.addVectors(Bi.max,lo.max),Bi.expandByPoint(xi)):(Bi.expandByPoint(lo.min),Bi.expandByPoint(lo.max))}Bi.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)xi.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(xi));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xi.fromBufferAttribute(a,c),l&&(tr.fromBufferAttribute(t,c),xi.add(tr)),n=Math.max(n,i.distanceToSquared(xi))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Be(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)a[C]=new P,l[C]=new P;let h=new P,d=new P,f=new P,u=new tt,g=new tt,m=new tt,p=new P,x=new P;function y(C,R,I){c[C]=c[R]=c[I]=1,h.fromBufferAttribute(i,C),d.fromBufferAttribute(i,R),f.fromBufferAttribute(i,I),u.fromBufferAttribute(r,C),g.fromBufferAttribute(r,R),m.fromBufferAttribute(r,I),d.sub(h),f.sub(h),g.sub(u),m.sub(u);let L=1/(g.x*m.y-m.x*g.y);isFinite(L)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(L),x.copy(f).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(L),a[C].add(p),a[R].add(p),a[I].add(p),l[C].add(x),l[R].add(x),l[I].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,R=M.length;C<R;++C){let I=M[C],L=I.start,F=I.count;for(let T=L,N=L+F;T<N;T+=3)y(t.getX(T+0),t.getX(T+1),t.getX(T+2))}let _=new P,b=new P,E=new P,v=new P;function S(C){E.fromBufferAttribute(n,C),v.copy(E);let R=a[C];_.copy(R),_.sub(E.multiplyScalar(E.dot(R))).normalize(),b.crossVectors(v,R);let L=b.dot(l[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,L)}for(let C=0,R=i.count;C<R;++C)c[C]&&S(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);let n=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let f=0,u=t.count;f<u;f+=3){let g=t.getX(f+0),m=t.getX(f+1),p=t.getX(f+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)xi.fromBufferAttribute(t,e),xi.normalize(),t.setXYZ(e,xi.x,xi.y,xi.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?u=l[m]*a.data.stride+a.offset:u=l[m]*h;for(let x=0;x<h;x++)f[g++]=c[u++]}return new Be(f,h,d)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,i);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Co=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ud,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=zf(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=zf(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function zf(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=qn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var Ri=new P,yr=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?Zc(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ri.fromBufferAttribute(this,e),Ri.applyMatrix4(t),this.setXYZ(e,Ri.x,Ri.y,Ri.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ri.fromBufferAttribute(this,e),Ri.applyNormalMatrix(t),this.setXYZ(e,Ri.x,Ri.y,Ri.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ri.fromBufferAttribute(this,e),Ri.transformDirection(t),this.setXYZ(e,Ri.x,Ri.y,Ri.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Eo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Eo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):md(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):gd(t,this.data.array)}},Au=new P,wx=new P,Tx=new ne,oi=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Au.subVectors(i,e).cross(wx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(Au),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Tx.getNormalMatrix(t),n=this.coplanarPoint(Au).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ax=0,Zi=class extends _n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=as,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qu,this.blendDst=td,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tl,this.stencilZFail=Tl,this.stencilZPass=Tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new oi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new tt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},_r=class extends Zi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},er,co=new P,ir=new P,nr=new P,sr=new tt,ho=new tt,em=new Yt,Qa=new P,uo=new P,tl=new P,Gf=new tt,Ru=new tt,Vf=new tt,Po=class extends Ve{constructor(t=new _r){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Co(e,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new yr(i,3,0,!1)),er.setAttribute("uv",new yr(i,2,3,!1))}this.geometry=er,this.material=t,this.center=new tt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),em.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-nr.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let o=this.center;el(Qa.set(-.5,-.5,0),nr,o,ir,n,r),el(uo.set(.5,-.5,0),nr,o,ir,n,r),el(tl.set(.5,.5,0),nr,o,ir,n,r),Gf.set(0,0),Ru.set(1,0),Vf.set(1,1);let a=t.ray.intersectTriangle(Qa,uo,tl,!1,co);if(a===null&&(el(uo.set(-.5,.5,0),nr,o,ir,n,r),Ru.set(0,1),a=t.ray.intersectTriangle(Qa,tl,uo,!1,co),a===null))return;let l=t.ray.origin.distanceTo(co);l<t.near||l>t.far||e.push({distance:l,point:co.clone(),uv:vn.getInterpolation(co,Qa,uo,tl,Gf,Ru,Vf,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function el(s,t,e,i,n,r){sr.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(ho.x=r*sr.x-n*sr.y,ho.y=n*sr.x+r*sr.y):ho.copy(sr),s.copy(t),s.x+=ho.x,s.y+=ho.y,s.applyMatrix4(em)}var Fn=new P,Cu=new P,il=new P,nl=new P,Es=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Cu.copy(t).add(e).multiplyScalar(.5),il.copy(e).sub(t).normalize(),nl.copy(this.origin).sub(Cu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(il),a=nl.dot(this.direction),l=-nl.dot(il),c=nl.lengthSq(),h=Math.abs(1-o*o),d,f,u,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let m=1/h;d*=m,f*=m,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Cu).addScaledVector(il,f),u}intersectSphere(t,e){if(t.radius<0)return null;Fn.subVectors(t.center,this.origin);let i=Fn.dot(this.direction),n=Fn.dot(Fn)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,i,n,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,g=e.x-o.x,m=e.y-o.y,p=e.z-o.z,x=i.x-o.x,y=i.y-o.y,M=i.z-o.z,_=Math.abs(l),b=Math.abs(c),E=Math.abs(h),v,S,C,R,I,L,F,T,N,z,O,Y;if(_>=b&&_>=E?(C=l,L=d,N=g,Y=x,l>=0?(v=c,S=h,R=f,I=u,F=m,T=p,z=y,O=M):(v=h,S=c,R=u,I=f,F=p,T=m,z=M,O=y)):b>=E?(C=c,L=f,N=m,Y=y,c>=0?(v=h,S=l,R=u,I=d,F=p,T=g,z=M,O=x):(v=l,S=h,R=d,I=u,F=g,T=p,z=x,O=M)):(C=h,L=u,N=p,Y=M,h>=0?(v=l,S=c,R=d,I=f,F=g,T=m,z=x,O=y):(v=c,S=l,R=f,I=d,F=m,T=g,z=y,O=x)),C===0)return null;let G=v/C,$=S/C,et=1/C,dt=R-G*L,xt=I-$*L,K=F-G*N,yt=T-$*N,Ct=z-G*Y,kt=O-$*Y,wt=Ct*yt-kt*K,zt=dt*kt-xt*Ct,Te=K*xt-yt*dt;if(n){if(wt<0||zt<0||Te<0)return null}else if((wt<0||zt<0||Te<0)&&(wt>0||zt>0||Te>0))return null;let Gt=wt+zt+Te;if(Gt===0)return null;let Qt=et*(wt*L+zt*N+Te*Y);return(Gt>0?Qt<0:Qt>0)?null:this.at(Qt/Gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Wf=new Yt,Ms=new Es,sl=new $i,Xf=new P,rl=new P,ol=new P,al=new P,Pu=new P,ll=new P,qf=new P,cl=new P,st=class extends Ve{constructor(t=new ge,e=new oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){ll.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Pu.fromBufferAttribute(d,t),o?ll.addScaledVector(Pu,h):ll.addScaledVector(Pu.sub(e),h))}e.add(ll)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(r),Ms.copy(t.ray).recast(t.near),!(sl.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(sl,Xf)===null||Ms.origin.distanceToSquared(Xf)>(t.far-t.near)**2))&&(Wf.copy(r).invert(),Ms.copy(t.ray).applyMatrix4(Wf),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ms)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,m=f.length;g<m;g++){let p=f[g],x=o[p.materialIndex],y=Math.max(p.start,u.start),M=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let _=y,b=M;_<b;_+=3){let E=a.getX(_),v=a.getX(_+1),S=a.getX(_+2);n=hl(this,x,t,i,c,h,d,E,v,S),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,u.start),m=Math.min(a.count,u.start+u.count);for(let p=g,x=m;p<x;p+=3){let y=a.getX(p),M=a.getX(p+1),_=a.getX(p+2);n=hl(this,o,t,i,c,h,d,y,M,_),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,m=f.length;g<m;g++){let p=f[g],x=o[p.materialIndex],y=Math.max(p.start,u.start),M=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let _=y,b=M;_<b;_+=3){let E=_,v=_+1,S=_+2;n=hl(this,x,t,i,c,h,d,E,v,S),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,u.start),m=Math.min(l.count,u.start+u.count);for(let p=g,x=m;p<x;p+=3){let y=p,M=p+1,_=p+2;n=hl(this,o,t,i,c,h,d,y,M,_),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}};function Rx(s,t,e,i,n,r,o,a){let l;if(t.side===je?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===os,a),l===null)return null;cl.copy(a),cl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(cl);return c<e.near||c>e.far?null:{distance:c,point:cl.clone(),object:s}}function hl(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,rl),s.getVertexPosition(l,ol),s.getVertexPosition(c,al);let h=Rx(s,t,e,i,rl,ol,al,qf);if(h){let d=new P;vn.getBarycoord(qf,rl,ol,al,d),n&&(h.uv=vn.getInterpolatedAttribute(n,a,l,c,d,new tt)),r&&(h.uv1=vn.getInterpolatedAttribute(r,a,l,c,d,new tt)),o&&(h.normal=vn.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new P,materialIndex:0};vn.getNormal(rl,ol,al,f.normal),h.face=f,h.barycoord=d}return h}var Io=class extends Pi{constructor(t=null,e=1,i=1,n,r,o,a,l,c=vi,h=vi,d,f){super(null,o,a,l,c,h,n,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mr=class extends Be{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},rr=new Yt,Yf=new Yt,ul=[],$f=new Yi,Cx=new Yt,fo=new st,po=new $i,li=class extends st{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Cx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,rr),$f.copy(t.boundingBox).applyMatrix4(rr),this.boundingBox.union($f)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,rr),po.copy(t.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(po)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(fo.geometry=this.geometry,fo.material=this.material,fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(i),t.ray.intersectsSphere(po)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,rr),Yf.multiplyMatrices(i,rr),fo.matrixWorld=Yf,fo.raycast(t,ul);for(let o=0,a=ul.length;o<a;o++){let l=ul[o];l.instanceId=r,l.object=this,e.push(l)}ul.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Mr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Io(new Float32Array(n*this.count),n,this.count,mc,Ji));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bs=new $i,Px=new tt(.5,.5),dl=new P,es=class{constructor(t=new oi,e=new oi,i=new oi,n=new oi,r=new oi,o=new oi){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=qi,i=!1){let n=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],g=r[8],m=r[9],p=r[10],x=r[11],y=r[12],M=r[13],_=r[14],b=r[15];if(n[0].setComponents(c-o,u-h,x-g,b-y).normalize(),n[1].setComponents(c+o,u+h,x+g,b+y).normalize(),n[2].setComponents(c+a,u+d,x+m,b+M).normalize(),n[3].setComponents(c-a,u-d,x-m,b-M).normalize(),i)n[4].setComponents(l,f,p,_).normalize(),n[5].setComponents(c-l,u-f,x-p,b-_).normalize();else if(n[4].setComponents(c-l,u-f,x-p,b-_).normalize(),e===qi)n[5].setComponents(c+l,u+f,x+p,b+_).normalize();else if(e===fr)n[5].setComponents(l,f,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){bs.center.set(0,0,0);let e=Px.distanceTo(t.center);return bs.radius=.7071067811865476+e,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(dl.x=n.normal.x>0?t.max.x:t.min.x,dl.y=n.normal.y>0?t.max.y:t.min.y,dl.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(dl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zf=new Yt,Hl=class s{constructor(){this.coordinateSystem=qi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let r=e[n];Zf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new es),i[n].setFromProjectionMatrix(Zf,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new es),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new s().copy(this)}};var ln=class extends Zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},kl=new P,zl=new P,Kf=new Yt,mo=new Es,fl=new $i,Iu=new P,Jf=new P,br=class extends Ve{constructor(t=new ge,e=new ln){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)kl.fromBufferAttribute(e,n-1),zl.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=kl.distanceTo(zl);t.setAttribute("lineDistance",new $t(i,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(n),fl.radius+=r,t.ray.intersectsSphere(fl)===!1)return;Kf.copy(n).invert(),mo.copy(t.ray).applyMatrix4(Kf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let u=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let m=u,p=g-1;m<p;m+=c){let x=h.getX(m),y=h.getX(m+1),M=pl(this,t,mo,l,x,y,m);M&&e.push(M)}if(this.isLineLoop){let m=h.getX(g-1),p=h.getX(u),x=pl(this,t,mo,l,m,p,g-1);x&&e.push(x)}}else{let u=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let m=u,p=g-1;m<p;m+=c){let x=pl(this,t,mo,l,m,m+1,m);x&&e.push(x)}if(this.isLineLoop){let m=pl(this,t,mo,l,g-1,u,g-1);m&&e.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pl(s,t,e,i,n,r,o){let a=s.geometry.attributes.position;if(kl.fromBufferAttribute(a,n),zl.fromBufferAttribute(a,r),e.distanceSqToSegment(kl,zl,Iu,Jf)>i)return;Iu.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Iu);if(!(c<t.near||c>t.far))return{distance:c,point:Jf.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var jf=new P,Qf=new P,Un=class extends br{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)jf.fromBufferAttribute(e,n),Qf.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+jf.distanceTo(Qf);t.setAttribute("lineDistance",new $t(i,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Gl=class extends Zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},tp=new Yt,zu=new Es,ml=new $i,gl=new P,ws=class extends Ve{constructor(t=new ge,e=new Gl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(n),ml.radius+=r,t.ray.intersectsSphere(ml)===!1)return;tp.copy(n).invert(),zu.copy(t.ray).applyMatrix4(tp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let g=f,m=u;g<m;g++){let p=c.getX(g);gl.fromBufferAttribute(d,p),ep(gl,p,l,n,t,e,this)}}else{let f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let g=f,m=u;g<m;g++)gl.fromBufferAttribute(d,g),ep(gl,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ep(s,t,e,i,n,r,o){let a=zu.distanceSqToPoint(s);if(a<e){let l=new P;zu.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Do=class extends Pi{constructor(t=[],e=Ds,i,n,r,o,a,l,c,h){super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hi=class extends Pi{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bn=class extends Pi{constructor(t,e,i=dn,n,r,o,a=vi,l=vi,c,h=Nn,d=1){if(h!==Nn&&h!==Wn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fo=class extends Bn{constructor(t,e=dn,i=Ds,n,r,o=vi,a=vi,l,c=Nn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Lo=class extends Pi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ae=class s extends ge{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(d,2));function g(m,p,x,y,M,_,b,E,v,S,C){let R=_/v,I=b/S,L=_/2,F=b/2,T=E/2,N=v+1,z=S+1,O=0,Y=0,G=new P;for(let $=0;$<z;$++){let et=$*I-F;for(let dt=0;dt<N;dt++){let xt=dt*R-L;G[m]=xt*y,G[p]=et*M,G[x]=T,c.push(G.x,G.y,G.z),G[m]=0,G[p]=0,G[x]=E>0?1:-1,h.push(G.x,G.y,G.z),d.push(dt/v),d.push(1-$/S),O+=1}}for(let $=0;$<S;$++)for(let et=0;et<v;et++){let dt=f+et+N*$,xt=f+et+N*($+1),K=f+(et+1)+N*($+1),yt=f+(et+1)+N*$;l.push(dt,xt,yt),l.push(xt,K,yt),Y+=6}a.addGroup(u,Y,C),u+=Y,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},On=class s extends ge{constructor(t=1,e=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,f=e,u=2*d+f,g=i*2+r,m=n+1,p=new P,x=new P;for(let y=0;y<=g;y++){let M=0,_=0,b=0,E=0;if(y<=i){let C=y/i,R=C*Math.PI/2;_=-h-t*Math.cos(R),b=t*Math.sin(R),E=-t*Math.cos(R),M=C*d}else if(y<=i+r){let C=(y-i)/r;_=-h+C*e,b=t,E=0,M=d+C*f}else{let C=(y-i-r)/i,R=C*Math.PI/2;_=h+t*Math.sin(R),b=t*Math.cos(R),E=t*Math.sin(R),M=d+f+C*d}let v=Math.max(0,Math.min(1,M/u)),S=0;y===0?S=.5/n:y===g&&(S=-.5/n);for(let C=0;C<=n;C++){let R=C/n,I=R*Math.PI*2,L=Math.sin(I),F=Math.cos(I);x.x=-b*F,x.y=_,x.z=b*L,a.push(x.x,x.y,x.z),p.set(-b*F,E,b*L),p.normalize(),l.push(p.x,p.y,p.z),c.push(R+S,v)}if(y>0){let C=(y-1)*m;for(let R=0;R<n;R++){let I=C+R,L=C+R+1,F=y*m+R,T=y*m+R+1;o.push(I,L,F),o.push(L,T,F)}}}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ti=class s extends ge{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new P,h=new tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let u=i+d/e*n;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},_e=class s extends ge{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],d=[],f=[],u=[],g=0,m=[],p=i/2,x=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(u,2));function y(){let _=new P,b=new P,E=0,v=(e-t)/i;for(let S=0;S<=r;S++){let C=[],R=S/r,I=R*(e-t)+t;for(let L=0;L<=n;L++){let F=L/n,T=F*l+a,N=Math.sin(T),z=Math.cos(T);b.x=I*N,b.y=-R*i+p,b.z=I*z,d.push(b.x,b.y,b.z),_.set(N,v,z).normalize(),f.push(_.x,_.y,_.z),u.push(F,1-R),C.push(g++)}m.push(C)}for(let S=0;S<n;S++)for(let C=0;C<r;C++){let R=m[C][S],I=m[C+1][S],L=m[C+1][S+1],F=m[C][S+1];(t>0||C!==0)&&(h.push(R,I,F),E+=3),(e>0||C!==r-1)&&(h.push(I,L,F),E+=3)}c.addGroup(x,E,0),x+=E}function M(_){let b=g,E=new tt,v=new P,S=0,C=_===!0?t:e,R=_===!0?1:-1;for(let L=1;L<=n;L++)d.push(0,p*R,0),f.push(0,R,0),u.push(.5,.5),g++;let I=g;for(let L=0;L<=n;L++){let T=L/n*l+a,N=Math.cos(T),z=Math.sin(T);v.x=C*z,v.y=p*R,v.z=C*N,d.push(v.x,v.y,v.z),f.push(0,R,0),E.x=N*.5+.5,E.y=z*.5*R+.5,u.push(E.x,E.y),g++}for(let L=0;L<n;L++){let F=b+L,T=I+L;_===!0?h.push(T,T+1,F):h.push(T+1,T,F),S+=3}c.addGroup(x,S,_===!0?1:2),x+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ei=class s extends _e{constructor(t=1,e=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},No=class s extends ge{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new P,_=new P,b=new P;for(let E=0;E<e.length;E+=3)u(e[E+0],M),u(e[E+1],_),u(e[E+2],b),l(M,_,b,y)}function l(y,M,_,b){let E=b+1,v=[];for(let S=0;S<=E;S++){v[S]=[];let C=y.clone().lerp(_,S/E),R=M.clone().lerp(_,S/E),I=E-S;for(let L=0;L<=I;L++)L===0&&S===E?v[S][L]=C:v[S][L]=C.clone().lerp(R,L/I)}for(let S=0;S<E;S++)for(let C=0;C<2*(E-S)-1;C++){let R=Math.floor(C/2);C%2===0?(f(v[S][R+1]),f(v[S+1][R]),f(v[S][R])):(f(v[S][R+1]),f(v[S+1][R+1]),f(v[S+1][R]))}}function c(y){let M=new P;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(y),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){let y=new P;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let _=p(y)/2/Math.PI+.5,b=x(y)/Math.PI+.5;o.push(_,1-b)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){let M=o[y+0],_=o[y+2],b=o[y+4],E=Math.max(M,_,b),v=Math.min(M,_,b);E>.9&&v<.1&&(M<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function u(y,M){let _=y*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){let y=new P,M=new P,_=new P,b=new P,E=new tt,v=new tt,S=new tt;for(let C=0,R=0;C<r.length;C+=9,R+=6){y.set(r[C+0],r[C+1],r[C+2]),M.set(r[C+3],r[C+4],r[C+5]),_.set(r[C+6],r[C+7],r[C+8]),E.set(o[R+0],o[R+1]),v.set(o[R+2],o[R+3]),S.set(o[R+4],o[R+5]),b.copy(y).add(M).add(_).divideScalar(3);let I=p(b);m(E,R+0,y,I),m(v,R+2,M,I),m(S,R+4,_,I)}}function m(y,M,_,b){b<0&&y.x===1&&(o[M]=y.x-1),_.x===0&&_.z===0&&(o[M]=b/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function x(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var xl=new P,vl=new P,Du=new P,yl=new vn,is=class extends ge{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let n=Math.pow(10,4),r=Math.cos(cr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),f=new Map,u=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:m,b:p,c:x}=yl;if(m.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),x.fromBufferAttribute(a,c[2]),yl.getNormal(Du),d[0]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,d[1]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,d[2]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){let M=(y+1)%3,_=d[y],b=d[M],E=yl[h[y]],v=yl[h[M]],S=`${_}_${b}`,C=`${b}_${_}`,R=f.get(C);R?(Du.dot(R.normal)<=r&&(u.push(E.x,E.y,E.z),u.push(v.x,v.y,v.z)),f.set(C,null)):f.has(S)||f.set(S,{index0:c[y],index1:c[M],normal:Du.clone()})}}for(let g of f.values())if(g){let{index0:m,index1:p}=g;xl.fromBufferAttribute(a,m),vl.fromBufferAttribute(a,p),u.push(xl.x,xl.y,xl.z),u.push(vl.x,vl.y,vl.z)}this.setAttribute("position",new $t(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],f=i[n+1]-h,u=(o-h)/f;return(n+u)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new tt:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new P,n=[],r=[],o=[],a=new P,l=new Yt;for(let u=0;u<=t;u++){let g=u/t;n[u]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(n[u-1],n[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(me(n[u-1].dot(n[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(n[u],r[u])}if(e===!0){let u=Math.acos(me(r[0].dot(r[t]),-1,1));u/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],u*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Sr=class extends Hi{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new tt){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Vl=class extends Sr{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xd(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,n(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+i*a}}}var ip=new P,np=new P,Fu=new xd,Lu=new xd,Nu=new xd,Er=class extends Hi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new P){let i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(np.subVectors(n[0],n[1]).add(n[0]),c=np);let d=n[a%r],f=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(ip.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=ip),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(f),u),p=Math.pow(f.distanceToSquared(h),u);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),Fu.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,m,p),Lu.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,m,p),Nu.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,m,p)}else this.curveType==="catmullrom"&&(Fu.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Lu.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Nu.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(Fu.calc(l),Lu.calc(l),Nu.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new P().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function sp(s,t,e,i,n){let r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function Ix(s,t){let e=1-s;return e*e*t}function Dx(s,t){return 2*(1-s)*s*t}function Fx(s,t){return s*s*t}function vo(s,t,e,i){return Ix(s,t)+Dx(s,e)+Fx(s,i)}function Lx(s,t){let e=1-s;return e*e*e*t}function Nx(s,t){let e=1-s;return 3*e*e*s*t}function Ux(s,t){return 3*(1-s)*s*s*t}function Bx(s,t){return s*s*s*t}function yo(s,t,e,i,n){return Lx(s,t)+Nx(s,e)+Ux(s,i)+Bx(s,n)}var Uo=class extends Hi{constructor(t=new tt,e=new tt,i=new tt,n=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new tt){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(yo(t,n.x,r.x,o.x,a.x),yo(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wl=class extends Hi{constructor(t=new P,e=new P,i=new P,n=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new P){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(yo(t,n.x,r.x,o.x,a.x),yo(t,n.y,r.y,o.y,a.y),yo(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bo=class extends Hi{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xl=class extends Hi{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oo=class extends Hi{constructor(t=new tt,e=new tt,i=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new tt){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(vo(t,n.x,r.x,o.x),vo(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ho=class extends Hi{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(vo(t,n.x,r.x,o.x),vo(t,n.y,r.y,o.y),vo(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ko=class extends Hi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],d=n[o>n.length-3?n.length-1:o+2];return i.set(sp(a,l.x,c.x,h.x,d.x),sp(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new tt().fromArray(n))}return this}},ql=Object.freeze({__proto__:null,ArcCurve:Vl,CatmullRomCurve3:Er,CubicBezierCurve:Uo,CubicBezierCurve3:Wl,EllipseCurve:Sr,LineCurve:Bo,LineCurve3:Xl,QuadraticBezierCurve:Oo,QuadraticBezierCurve3:Ho,SplineCurve:ko}),Yl=class extends Hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ql[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let o=r[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new ql[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Ts=class extends Yl{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Bo(this.currentPoint.clone(),new tt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new Oo(this.currentPoint.clone(),new tt(t,e),new tt(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,o){let a=new Uo(this.currentPoint.clone(),new tt(t,e),new tt(i,n),new tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ko(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,r,o),this}absarc(t,e,i,n,r,o){return this.absellipse(t,e,i,i,n,r,o),this}ellipse(t,e,i,n,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,o,a,l),this}absellipse(t,e,i,n,r,o,a,l){let c=new Sr(t,e,i,n,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},cn=class extends Ts{constructor(t){super(t),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Ts().fromJSON(n))}return this}};function Ox(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=im(s,0,n,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Vx(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,d=l;for(let f=e;f<n;f+=e){let u=s[f],g=s[f+1];u<a&&(a=u),g<l&&(l=g),u>h&&(h=u),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return zo(r,o,e,a,l,c,0),o}function im(s,t,e,i,n){let r;if(n===tv(s,t,e,i)>0)for(let o=t;o<e;o+=i)r=rp(o/i|0,s[o],s[o+1],r);else for(let o=e-i;o>=t;o-=i)r=rp(o/i|0,s[o],s[o+1],r);return r&&wr(r,r.next)&&(Vo(r),r=r.next),r}function As(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(wr(e,e.next)||Ze(e.prev,e,e.next)===0)){if(Vo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function zo(s,t,e,i,n,r,o){if(!s)return;!o&&r&&$x(s,i,n,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?kx(s,i,n,r):Hx(s)){t.push(l.i,s.i,c.i),Vo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=zx(As(s),t),zo(s,t,e,i,n,r,2)):o===2&&Gx(s,t,e,i,n,r):zo(As(s),t,e,i,n,r,1);break}}}function Hx(s){let t=s.prev,e=s,i=s.next;if(Ze(t,e,i)>=0)return!1;let n=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(n,r,o),d=Math.min(a,l,c),f=Math.max(n,r,o),u=Math.max(a,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=u&&go(n,a,r,l,o,c,g.x,g.y)&&Ze(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function kx(s,t,e,i){let n=s.prev,r=s,o=s.next;if(Ze(n,r,o)>=0)return!1;let a=n.x,l=r.x,c=o.x,h=n.y,d=r.y,f=o.y,u=Math.min(a,l,c),g=Math.min(h,d,f),m=Math.max(a,l,c),p=Math.max(h,d,f),x=Gu(u,g,t,e,i),y=Gu(m,p,t,e,i),M=s.prevZ,_=s.nextZ;for(;M&&M.z>=x&&_&&_.z<=y;){if(M.x>=u&&M.x<=m&&M.y>=g&&M.y<=p&&M!==n&&M!==o&&go(a,h,l,d,c,f,M.x,M.y)&&Ze(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=u&&_.x<=m&&_.y>=g&&_.y<=p&&_!==n&&_!==o&&go(a,h,l,d,c,f,_.x,_.y)&&Ze(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=x;){if(M.x>=u&&M.x<=m&&M.y>=g&&M.y<=p&&M!==n&&M!==o&&go(a,h,l,d,c,f,M.x,M.y)&&Ze(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=y;){if(_.x>=u&&_.x<=m&&_.y>=g&&_.y<=p&&_!==n&&_!==o&&go(a,h,l,d,c,f,_.x,_.y)&&Ze(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function zx(s,t){let e=s;do{let i=e.prev,n=e.next.next;!wr(i,n)&&sm(i,e,e.next,n)&&Go(i,n)&&Go(n,i)&&(t.push(i.i,e.i,n.i),Vo(e),Vo(e.next),e=s=n),e=e.next}while(e!==s);return As(e)}function Gx(s,t,e,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jx(o,a)){let l=rm(o,a);o=As(o,o.next),l=As(l,l.next),zo(o,t,e,i,n,r,0),zo(l,t,e,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function Vx(s,t,e,i){let n=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:s.length,c=im(s,a,l,i,!1);c===c.next&&(c.steiner=!0),n.push(Kx(c))}n.sort(Wx);for(let r=0;r<n.length;r++)e=Xx(n[r],e);return e}function Wx(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let i=(s.next.y-s.y)/(s.next.x-s.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function Xx(s,t){let e=qx(s,t);if(!e)return t;let i=rm(e,s);return As(i,i.next),As(e,e.next)}function qx(s,t){let e=t,i=s.x,n=s.y,r=-1/0,o;if(wr(s,e))return e;do{if(wr(s,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){let d=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&nm(n<c?i:r,n,l,c,n<c?r:i,n,e.x,e.y)){let d=Math.abs(n-e.y)/(i-e.x);Go(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Yx(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Yx(s,t){return Ze(s.prev,s,t.prev)<0&&Ze(t.next,s,s.next)<0}function $x(s,t,e,i){let n=s;do n.z===0&&(n.z=Gu(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Zx(n)}function Zx(s){let t,e=1;do{let i=s,n;s=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(n=i,i=i.nextZ,a--):(n=o,o=o.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=o}r.nextZ=null,e*=2}while(t>1);return s}function Gu(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Kx(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function nm(s,t,e,i,n,r,o,a){return(n-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(n-o)*(i-a)}function go(s,t,e,i,n,r,o,a){return!(s===o&&t===a)&&nm(s,t,e,i,n,r,o,a)}function Jx(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!jx(s,t)&&(Go(s,t)&&Go(t,s)&&Qx(s,t)&&(Ze(s.prev,s,t.prev)||Ze(s,t.prev,t))||wr(s,t)&&Ze(s.prev,s,s.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function wr(s,t){return s.x===t.x&&s.y===t.y}function sm(s,t,e,i){let n=Ml(Ze(s,t,e)),r=Ml(Ze(s,t,i)),o=Ml(Ze(e,i,s)),a=Ml(Ze(e,i,t));return!!(n!==r&&o!==a||n===0&&_l(s,e,t)||r===0&&_l(s,i,t)||o===0&&_l(e,s,i)||a===0&&_l(e,t,i))}function _l(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ml(s){return s>0?1:s<0?-1:0}function jx(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&sm(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Go(s,t){return Ze(s.prev,s,s.next)<0?Ze(s,t,s.next)>=0&&Ze(s,s.prev,t)>=0:Ze(s,t,s.prev)<0||Ze(s,s.next,t)<0}function Qx(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function rm(s,t){let e=Vu(s.i,s.x,s.y),i=Vu(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function rp(s,t,e,i){let n=Vu(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Vo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Vu(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tv(s,t,e,i){let n=0;for(let r=t,o=e-i;r<e;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}var Wu=class{static triangulate(t,e,i=2){return Ox(t,e,i)}},an=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];op(t),ap(i,t);let o=t.length;e.forEach(op);for(let l=0;l<e.length;l++)n.push(o),o+=e[l].length,ap(i,e[l]);let a=Wu.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function op(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ap(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Hn=class s extends ge{constructor(t=new cn([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new $t(n,3)),this.setAttribute("uv",new $t(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,x=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:ev,M,_=!1,b,E,v,S;if(x){M=x.getSpacedPoints(h),_=!0,f=!1;let B=x.isCatmullRomCurve3?x.closed:!1;b=x.computeFrenetFrames(h,B),E=new P,v=new P,S=new P}f||(p=0,u=0,g=0,m=0);let C=a.extractPoints(c),R=C.shape,I=C.holes;if(!an.isClockWise(R)){R=R.reverse();for(let B=0,V=I.length;B<V;B++){let j=I[B];an.isClockWise(j)&&(I[B]=j.reverse())}}function F(B){let j=10000000000000001e-36,ut=B[0];for(let ot=1;ot<=B.length;ot++){let Ft=ot%B.length,vt=B[Ft],Jt=vt.x-ut.x,ie=vt.y-ut.y,fe=Jt*Jt+ie*ie,H=Math.max(Math.abs(vt.x),Math.abs(vt.y),Math.abs(ut.x),Math.abs(ut.y)),Se=j*H*H;if(fe<=Se){B.splice(Ft,1),ot--;continue}ut=vt}}F(R),I.forEach(F);let T=I.length,N=R;for(let B=0;B<T;B++){let V=I[B];R=R.concat(V)}function z(B,V,j){return V||Kt("ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(V,j)}let O=R.length;function Y(B,V,j){let ut,ot,Ft,vt=B.x-V.x,Jt=B.y-V.y,ie=j.x-B.x,fe=j.y-B.y,H=vt*vt+Jt*Jt,Se=vt*fe-Jt*ie;if(Math.abs(Se)>Number.EPSILON){let ue=Math.sqrt(H),Le=Math.sqrt(ie*ie+fe*fe),_t=V.x-Jt/ue,ze=V.y+vt/ue,Wt=j.x-fe/Le,ee=j.y+ie/Le,D=((Wt-_t)*fe-(ee-ze)*ie)/(vt*fe-Jt*ie);ut=_t+vt*D-B.x,ot=ze+Jt*D-B.y;let w=ut*ut+ot*ot;if(w<=2)return new tt(ut,ot);Ft=Math.sqrt(w/2)}else{let ue=!1;vt>Number.EPSILON?ie>Number.EPSILON&&(ue=!0):vt<-Number.EPSILON?ie<-Number.EPSILON&&(ue=!0):Math.sign(Jt)===Math.sign(fe)&&(ue=!0),ue?(ut=-Jt,ot=vt,Ft=Math.sqrt(H)):(ut=vt,ot=Jt,Ft=Math.sqrt(H/2))}return new tt(ut/Ft,ot/Ft)}let G=[];for(let B=0,V=N.length,j=V-1,ut=B+1;B<V;B++,j++,ut++)j===V&&(j=0),ut===V&&(ut=0),G[B]=Y(N[B],N[j],N[ut]);let $=[],et,dt=G.concat();for(let B=0,V=T;B<V;B++){let j=I[B];et=[];for(let ut=0,ot=j.length,Ft=ot-1,vt=ut+1;ut<ot;ut++,Ft++,vt++)Ft===ot&&(Ft=0),vt===ot&&(vt=0),et[ut]=Y(j[ut],j[Ft],j[vt]);$.push(et),dt=dt.concat(et)}let xt;if(p===0)xt=an.triangulateShape(N,I);else{let B=[],V=[];for(let j=0;j<p;j++){let ut=j/p,ot=u*Math.cos(ut*Math.PI/2),Ft=g*Math.sin(ut*Math.PI/2)+m;for(let vt=0,Jt=N.length;vt<Jt;vt++){let ie=z(N[vt],G[vt],Ft);zt(ie.x,ie.y,-ot),ut===0&&B.push(ie)}for(let vt=0,Jt=T;vt<Jt;vt++){let ie=I[vt];et=$[vt];let fe=[];for(let H=0,Se=ie.length;H<Se;H++){let ue=z(ie[H],et[H],Ft);zt(ue.x,ue.y,-ot),ut===0&&fe.push(ue)}ut===0&&V.push(fe)}}xt=an.triangulateShape(B,V)}let K=xt.length,yt=g+m;for(let B=0;B<O;B++){let V=f?z(R[B],dt[B],yt):R[B];_?(v.copy(b.normals[0]).multiplyScalar(V.x),E.copy(b.binormals[0]).multiplyScalar(V.y),S.copy(M[0]).add(v).add(E),zt(S.x,S.y,S.z)):zt(V.x,V.y,0)}for(let B=1;B<=h;B++)for(let V=0;V<O;V++){let j=f?z(R[V],dt[V],yt):R[V];_?(v.copy(b.normals[B]).multiplyScalar(j.x),E.copy(b.binormals[B]).multiplyScalar(j.y),S.copy(M[B]).add(v).add(E),zt(S.x,S.y,S.z)):zt(j.x,j.y,d/h*B)}for(let B=p-1;B>=0;B--){let V=B/p,j=u*Math.cos(V*Math.PI/2),ut=g*Math.sin(V*Math.PI/2)+m;for(let ot=0,Ft=N.length;ot<Ft;ot++){let vt=z(N[ot],G[ot],ut);zt(vt.x,vt.y,d+j)}for(let ot=0,Ft=I.length;ot<Ft;ot++){let vt=I[ot];et=$[ot];for(let Jt=0,ie=vt.length;Jt<ie;Jt++){let fe=z(vt[Jt],et[Jt],ut);_?zt(fe.x,fe.y+M[h-1].y,M[h-1].x+j):zt(fe.x,fe.y,d+j)}}}Ct(),kt();function Ct(){let B=n.length/3;if(f){let V=0,j=O*V;for(let ut=0;ut<K;ut++){let ot=xt[ut];Te(ot[2]+j,ot[1]+j,ot[0]+j)}V=h+p*2,j=O*V;for(let ut=0;ut<K;ut++){let ot=xt[ut];Te(ot[0]+j,ot[1]+j,ot[2]+j)}}else{for(let V=0;V<K;V++){let j=xt[V];Te(j[2],j[1],j[0])}for(let V=0;V<K;V++){let j=xt[V];Te(j[0]+O*h,j[1]+O*h,j[2]+O*h)}}i.addGroup(B,n.length/3-B,0)}function kt(){let B=n.length/3,V=0;wt(N,V),V+=N.length;for(let j=0,ut=I.length;j<ut;j++){let ot=I[j];wt(ot,V),V+=ot.length}i.addGroup(B,n.length/3-B,1)}function wt(B,V){let j=B.length;for(;--j>=0;){let ut=j,ot=j-1;ot<0&&(ot=B.length-1);for(let Ft=0,vt=h+p*2;Ft<vt;Ft++){let Jt=O*Ft,ie=O*(Ft+1),fe=V+ut+Jt,H=V+ot+Jt,Se=V+ot+ie,ue=V+ut+ie;Gt(fe,H,Se,ue)}}}function zt(B,V,j){l.push(B),l.push(V),l.push(j)}function Te(B,V,j){Qt(B),Qt(V),Qt(j);let ut=n.length/3,ot=y.generateTopUV(i,n,ut-3,ut-2,ut-1);te(ot[0]),te(ot[1]),te(ot[2])}function Gt(B,V,j,ut){Qt(B),Qt(V),Qt(ut),Qt(V),Qt(j),Qt(ut);let ot=n.length/3,Ft=y.generateSideWallUV(i,n,ot-6,ot-3,ot-2,ot-1);te(Ft[0]),te(Ft[1]),te(Ft[3]),te(Ft[1]),te(Ft[2]),te(Ft[3])}function Qt(B){n.push(l[B*3+0]),n.push(l[B*3+1]),n.push(l[B*3+2])}function te(B){r.push(B.x),r.push(B.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return iv(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new ql[n.type]().fromJSON(n)),new s(i,t.options)}},ev={generateTopUV:function(s,t,e,i,n){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new tt(r,o),new tt(a,l),new tt(c,h)]},generateSideWallUV:function(s,t,e,i,n,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],f=t[n*3],u=t[n*3+1],g=t[n*3+2],m=t[r*3],p=t[r*3+1],x=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new tt(o,1-l),new tt(c,1-d),new tt(f,1-g),new tt(m,1-x)]:[new tt(a,1-l),new tt(h,1-d),new tt(u,1-g),new tt(p,1-x)]}};function iv(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){let r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Wo=class s extends No{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},kn=class s extends ge{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=me(n,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new P,f=new tt,u=new P,g=new P,m=new P,p=0,x=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,x=t[y+1].y-t[y].y,u.x=x*1,u.y=-p,u.z=x*0,m.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:m.normalize(),l.push(m.x,m.y,m.z);break;default:p=t[y+1].x-t[y].x,x=t[y+1].y-t[y].y,u.x=x*1,u.y=-p,u.z=x*0,g.copy(u),u.x+=m.x,u.y+=m.y,u.z+=m.z,u.normalize(),l.push(u.x,u.y,u.z),m.copy(g)}for(let y=0;y<=e;y++){let M=i+y*h*n,_=Math.sin(M),b=Math.cos(M);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*_,d.y=t[E].y,d.z=t[E].x*b,o.push(d.x,d.y,d.z),f.x=y/e,f.y=E/(t.length-1),a.push(f.x,f.y);let v=l[3*E+0]*_,S=l[3*E+1],C=l[3*E+0]*b;c.push(v,S,C)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){let _=M+y*t.length,b=_,E=_+t.length,v=_+t.length+1,S=_+1;r.push(b,E,S),r.push(v,S,E)}this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("uv",new $t(a,2)),this.setAttribute("normal",new $t(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Xo=class s extends No{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Fe=class s extends ge{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=t/a,f=e/l,u=[],g=[],m=[],p=[];for(let x=0;x<h;x++){let y=x*f-o;for(let M=0;M<c;M++){let _=M*d-r;g.push(_,-y,0),m.push(0,0,1),p.push(M/a),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let y=0;y<a;y++){let M=y+c*x,_=y+c*(x+1),b=y+1+c*(x+1),E=y+1+c*x;u.push(M,_,E),u.push(_,b,E)}this.setIndex(u),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(m,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Ii=class s extends ge{constructor(t=.5,e=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],d=t,f=(e-t)/n,u=new P,g=new tt;for(let m=0;m<=n;m++){for(let p=0;p<=i;p++){let x=r+p/i*o;u.x=d*Math.cos(x),u.y=d*Math.sin(x),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,h.push(g.x,g.y)}d+=f}for(let m=0;m<n;m++){let p=m*(i+1);for(let x=0;x<i;x++){let y=x+p,M=y,_=y+i+1,b=y+i+2,E=y+1;a.push(M,_,E),a.push(_,b,E)}}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},qo=class s extends ge{constructor(t=new cn([new tt(0,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],n=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new $t(n,3)),this.setAttribute("normal",new $t(r,3)),this.setAttribute("uv",new $t(o,2));function c(h){let d=n.length/3,f=h.extractPoints(e),u=f.shape,g=f.holes;an.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,x=g.length;p<x;p++){let y=g[p];an.isClockWise(y)===!0&&(g[p]=y.reverse())}let m=an.triangulateShape(u,g);for(let p=0,x=g.length;p<x;p++){let y=g[p];u=u.concat(y)}for(let p=0,x=u.length;p<x;p++){let y=u[p];n.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,x=m.length;p<x;p++){let y=m[p],M=y[0]+d,_=y[1]+d,b=y[2]+d;i.push(M,_,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return nv(e,t)}static fromJSON(t,e){let i=[];for(let n=0,r=t.shapes.length;n<r;n++){let o=e[t.shapes[n]];i.push(o)}return new s(i,t.curveSegments)}};function nv(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){let n=s[e];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return t}var ye=class s extends ge{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,f=new P,u=[],g=[],m=[],p=[];for(let x=0;x<=i;x++){let y=[],M=x/i,_=o+M*a,b=t*Math.cos(_),E=Math.sqrt(t*t-b*b),v=0;x===0&&o===0?v=.5/e:x===i&&l===Math.PI&&(v=-.5/e);for(let S=0;S<=e;S++){let C=S/e,R=n+C*r;d.x=-E*Math.cos(R),d.y=b,d.z=E*Math.sin(R),g.push(d.x,d.y,d.z),f.copy(d).normalize(),m.push(f.x,f.y,f.z),p.push(C+v,1-M),y.push(c++)}h.push(y)}for(let x=0;x<i;x++)for(let y=0;y<e;y++){let M=h[x][y+1],_=h[x][y],b=h[x+1][y],E=h[x+1][y+1];(x!==0||o>0)&&u.push(M,_,E),(x!==i-1||l<Math.PI)&&u.push(_,b,E)}this.setIndex(u),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(m,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ce=class s extends ge{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],d=[],f=new P,u=new P,g=new P;for(let m=0;m<=i;m++){let p=o+m/i*a;for(let x=0;x<=n;x++){let y=x/n*r;u.x=(t+e*Math.cos(p))*Math.cos(y),u.y=(t+e*Math.cos(p))*Math.sin(y),u.z=e*Math.sin(p),c.push(u.x,u.y,u.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),g.subVectors(u,f).normalize(),h.push(g.x,g.y,g.z),d.push(x/n),d.push(m/i)}}for(let m=1;m<=i;m++)for(let p=1;p<=n;p++){let x=(n+1)*m+p-1,y=(n+1)*(m-1)+p-1,M=(n+1)*(m-1)+p,_=(n+1)*m+p;l.push(x,y,_),l.push(y,M,_)}this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Yo=class s extends ge{constructor(t=new Ho(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new tt,h=new P,d=[],f=[],u=[],g=[];m(),this.setIndex(g),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(u,2));function m(){for(let M=0;M<e;M++)p(M);p(r===!1?e:0),y(),x()}function p(M){h=t.getPointAt(M/e,h);let _=o.normals[M],b=o.binormals[M];for(let E=0;E<=n;E++){let v=E/n*Math.PI*2,S=Math.sin(v),C=-Math.cos(v);l.x=C*_.x+S*b.x,l.y=C*_.y+S*b.y,l.z=C*_.z+S*b.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function x(){for(let M=1;M<=e;M++)for(let _=1;_<=n;_++){let b=(n+1)*(M-1)+(_-1),E=(n+1)*M+(_-1),v=(n+1)*M+_,S=(n+1)*(M-1)+_;g.push(b,E,S),g.push(E,v,S)}}function y(){for(let M=0;M<=e;M++)for(let _=0;_<=n;_++)c.x=M/e,c.y=_/n,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new ql[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ls(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(lp(n))n.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(lp(n[0])){let r=[];for(let o=0,a=n.length;o<a;o++)r[o]=n[o].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function wi(s){let t={};for(let e=0;e<s.length;e++){let i=Ls(s[e]);for(let n in i)t[n]=i[n]}return t}function lp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function sv(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function vd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var Ni={clone:Ls,merge:wi},rv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xe=class extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rv,this.fragmentShader=ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=sv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new ct().setHex(n.value);break;case"v2":this.uniforms[i].value=new tt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new P().fromArray(n.value);break;case"v4":this.uniforms[i].value=new De().fromArray(n.value);break;case"m3":this.uniforms[i].value=new ne().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Yt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Tr=class extends xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ht=class extends Zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xe=class extends Ht{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Ss('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Ss('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var $o=class extends Zi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=lc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},$l=class extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zl=class extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function or(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function bl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var ns=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Kl=class extends ns{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ou,endingEnd:Ou}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hu:r=t,a=2*e-i;break;case ku:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Hu:o=t,l=2*i-e;break;case ku:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,g=(i-e)/(n-e),m=g*g,p=m*g,x=-f*p+2*f*m-f*g,y=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*g+1,M=(-1-u)*p+(1.5+u)*m+.5*g,_=u*p-u*m;for(let b=0;b!==a;++b)r[b]=x*o[h+b]+y*o[c+b]+M*o[l+b]+_*o[d+b];return r}},Jl=class extends ns{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},jl=class extends ns{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ql=class extends ns{interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-e)/(n-e),m=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*m+o[l+p]*g;return r}let f=a*2,u=t-1;for(let g=0;g!==a;++g){let m=o[c+g],p=o[l+g],x=u*f+g*2,y=d[x],M=d[x+1],_=t*f+g*2,b=h[_],E=h[_+1],v=lv(i,e,y,b,n);r[g]=om(v,m,M,E,p)}return r}};function om(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function av(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function lv(s,t,e,i,n){let r=(s-t)/(n-t);for(let o=0;o<8;o++){let a=om(r,t,e,i,n)-s;if(Math.abs(a)<1e-10)break;let l=av(r,t,e,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ki=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=or(e,this.TimeBufferType),this.values=or(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:or(t.times,Array),values:or(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),bl(t.settings)&&(i.settings={inTangents:or(t.settings.inTangents,Array),outTangents:or(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ql(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _o:e=this.InterpolantFactoryMethodDiscrete;break;case Nl:e=this.InterpolantFactoryMethodLinear;break;case wl:e=this.InterpolantFactoryMethodSmooth;break;case Bu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _o;case this.InterpolantFactoryMethodLinear:return Nl;case this.InterpolantFactoryMethodSmooth:return wl;case this.InterpolantFactoryMethodBezier:return Bu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;bl(this.settings)&&(cp(this.settings.inTangents,t),cp(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;bl(this.settings)&&(hp(this.settings.inTangents,t),hp(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&Kg(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===wl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let d=a*i,f=d-i,u=d+i;for(let g=0;g!==i;++g){let m=e[d+g];if(m!==e[f+g]||m!==e[u+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let u=0;u!==i;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,bl(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function cp(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]+=t}function hp(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}ki.prototype.ValueTypeName="";ki.prototype.TimeBufferType=Float32Array;ki.prototype.ValueBufferType=Float32Array;ki.prototype.DefaultInterpolation=Nl;var ss=class extends ki{constructor(t,e,i){super(t,e,i)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=_o;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends ki{constructor(t,e,i,n){super(t,e,i,n)}};tc.prototype.ValueTypeName="color";var ec=class extends ki{constructor(t,e,i,n){super(t,e,i,n)}};ec.prototype.ValueTypeName="number";var ic=class extends ns{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)Je.slerpFlat(r,0,o,c-a,o,c,l);return r}},Zo=class extends ki{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new ic(this.times,this.values,this.getValueSize(),t)}};Zo.prototype.ValueTypeName="quaternion";Zo.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends ki{constructor(t,e,i){super(t,e,i)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=_o;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var nc=class extends ki{constructor(t,e,i,n){super(t,e,i,n)}};nc.prototype.ValueTypeName="vector";var sc=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],g=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},am=new sc,Ko=class{constructor(t){this.manager=t!==void 0?t:am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ko.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ar=class extends Ve{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},zn=class extends Ar{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Uu=new Yt,up=new P,dp=new P,Jo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new es,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;up.setFromMatrixPosition(t.matrixWorld),e.position.copy(up),dp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Uu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Uu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=n?n.z/r.x:1,a=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===fr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Uu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Sl=new P,El=new Je,xn=new P,jo=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sl,El,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sl,El,xn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Sl,El,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sl,El,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ts=new P,fp=new tt,pp=new tt,ai=class extends jo{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,e){return this.getViewBounds(t,fp,pp),e.subVectors(pp,fp)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Xu=class extends Jo{constructor(){super(new ai(90,1,.5,500)),this.isPointLightShadow=!0}},Rs=class extends Ar{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Xu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Cs=class extends jo{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qu=class extends Jo{constructor(){super(new Cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zi=class extends Ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new qu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ar=-90,lr=1,Rr=class extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ai(ar,lr,t,e);n.layers=this.layers,this.add(n);let r=new ai(ar,lr,t,e);r.layers=this.layers,this.add(r);let o=new ai(ar,lr,t,e);o.layers=this.layers,this.add(o);let a=new ai(ar,lr,t,e);a.layers=this.layers,this.add(a);let l=new ai(ar,lr,t,e);l.layers=this.layers,this.add(l);let c=new ai(ar,lr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===qi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let m=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=m,t.setRenderTarget(i,5,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},rc=class extends ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Qo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=cv.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function cv(){this._document.hidden===!1&&this.reset()}var yd="\\[\\]\\.:\\/",hv=new RegExp("["+yd+"]","g"),_d="[^"+yd+"]",uv="[^"+yd.replace("\\.","")+"]",dv=/((?:WC+[\/:])*)/.source.replace("WC",_d),fv=/(WCOD+)?/.source.replace("WCOD",uv),pv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_d),mv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_d),gv=new RegExp("^"+dv+fv+pv+mv+"$"),xv=["material","materials","bones","map"],Yu=class{constructor(t,e,i){let n=i||Ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ge=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hv,"")}static parseTrackName(t){let e=gv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);xv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=Yu;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vE=new Float32Array(1);var mp=new Yt,ta=class{constructor(t,e,i=0,n=1/0){this.ray=new Es(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return mp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mp),this}intersectObject(t,e=!0,i=[]){return $u(t,this,i,e),i.sort(gp),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)$u(t[n],this,i,e);return i.sort(gp),i}};function gp(s,t){return s.distance-t.distance}function $u(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)$u(r[o],t,e,!0)}}var Td=class Td{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};Td.prototype.isMatrix2=!0;var Zu=Td,xp=new tt,oc=class{constructor(t=new tt(1/0,1/0),e=new tt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=xp.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xp).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var ea=class{constructor(){this.type="ShapePath",this.color=new ct,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Ts,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,n){return this.currentPath.quadraticCurveTo(t,e,i,n),this}bezierCurveTo(t,e,i,n,r,o){return this.currentPath.bezierCurveTo(t,e,i,n,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1,d=c.length;for(let f=0,u=d-1;f<d;u=f++){let g=c[f],m=c[u];g.y>l.y!=m.y>l.y&&l.x<(m.x-g.x)*(l.y-g.y)/(m.y-g.y)+g.x&&(h=!h)}return h}function e(l,c){let h=c.getCenter(new tt);if(t(h,l))return h;let d=h.y,f=[],u=l.length;for(let g=0;g<u;g++){let m=l[g],p=l[(g+1)%u];if(m.y>d!=p.y>d){let x=m.x+(d-m.y)*(p.x-m.x)/(p.y-m.y);f.push(x)}}return f.length>1&&(f.sort((g,m)=>g-m),h.x=(f[0]+f[1])/2),h}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(qt('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");let n=i==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=an.area(c);if(h===0)continue;let d=new oc;for(let f=0;f<c.length;f++)d.expandByPoint(c[f]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:e(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let d=l-1;d>=0;d--){let f=r[d];if(f.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,f.points)){c.container=f.exclude?f.container:f,h=f.winding,c.winding+=h;break}}n(c.winding)===n(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let o=[],a=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new cn;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=a.get(l.container);if(!c)continue;let h=new Ts;h.curves=l.subPath.curves,c.holes.push(h)}return o}};function Md(s,t,e,i){let n=vv(i);switch(e){case od:return s*t;case mc:return s*t/n.components*n.byteLength;case gc:return s*t/n.components*n.byteLength;case ls:return s*t*2/n.components*n.byteLength;case xc:return s*t*2/n.components*n.byteLength;case ad:return s*t*3/n.components*n.byteLength;case fn:return s*t*4/n.components*n.byteLength;case vc:return s*t*4/n.components*n.byteLength;case aa:case la:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ca:case ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _c:case bc:return Math.max(s,16)*Math.max(t,8)/4;case yc:case Mc:return Math.max(s,8)*Math.max(t,8)/2;case Sc:case Ec:case Tc:case Ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wc:case ua:case Rc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case kc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case zc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Gc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Vc:case Wc:case Xc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case qc:case Yc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case da:case $c:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vv(s){switch(s){case Fi:case id:return{byteLength:1,components:1};case Ir:case nd:case ii:return{byteLength:2,components:1};case fc:case pc:return{byteLength:2,components:4};case dn:case dc:case Ji:return{byteLength:4,components:1};case sd:case rd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Cm(){let s=null,t=!1,e=null,i=null;function n(r,o){i=s.requestAnimationFrame(n),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ev(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){let g=d[f],m=d[u];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++f,d[f]=m)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){let m=d[u];s.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var wv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tv=`#ifdef USE_ALPHAHASH
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
#endif`,Av=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iv=`#ifdef USE_AOMAP
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
#endif`,Dv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fv=`#ifdef USE_BATCHING
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
#endif`,Lv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ov=`#ifdef USE_IRIDESCENCE
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
#endif`,Hv=`#ifdef USE_BUMPMAP
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
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$v=`#define PI 3.141592653589793
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
} // validated`,Zv=`vec3 transformedNormal = objectNormal;
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
#endif`,Kv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",ey=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iy=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,sy=`#ifdef USE_ENVMAP
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
#endif`,ry=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
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
#endif`,ay=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ly=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uy=`#ifdef USE_GRADIENTMAP
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
}`,dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,my=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gy=`#ifdef USE_ENVMAP
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
#endif`,xy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,My=`PhysicalMaterial material;
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
#endif`,by=`uniform sampler2D dfgLUT;
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
}`,Sy=`
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
#endif`,Ey=`#if defined( RE_IndirectDiffuse )
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
#endif`,wy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ty=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ry=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ly=`#if defined( USE_POINTS_UV )
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
#endif`,Ny=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,By=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Oy=`#if defined( USE_MORPHCOLORS )
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
#endif`,Hy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ky=`#ifdef USE_MORPHTARGETS
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
#endif`,zy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yy=`#ifdef USE_NORMALMAP
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
#endif`,$y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c_=`float getShadowMask() {
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
}`,h_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u_=`#ifdef USE_SKINNING
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
#endif`,d_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f_=`#ifdef USE_SKINNING
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
#endif`,p_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v_=`#ifdef USE_TRANSMISSION
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
#endif`,y_=`#ifdef USE_TRANSMISSION
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
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w_=`uniform sampler2D t2D;
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
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A_=`uniform float backgroundBlurriness;
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`#include <common>
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
}`,I_=`#if DEPTH_PACKING == 3200
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
}`,D_=`#define DISTANCE
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
}`,F_=`#define DISTANCE
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
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`uniform float scale;
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
}`,B_=`uniform vec3 diffuse;
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
}`,O_=`#include <common>
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
}`,H_=`uniform vec3 diffuse;
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
}`,k_=`#define LAMBERT
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
}`,z_=`#define LAMBERT
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
}`,G_=`#define MATCAP
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
}`,V_=`#define MATCAP
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
}`,W_=`#define NORMAL
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
}`,X_=`#define NORMAL
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
}`,q_=`#define PHONG
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
}`,Y_=`#define PHONG
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
}`,$_=`#define STANDARD
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
}`,Z_=`#define STANDARD
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
}`,K_=`#define TOON
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
}`,J_=`#define TOON
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
}`,j_=`uniform float size;
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
}`,Q_=`uniform vec3 diffuse;
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
}`,tM=`#include <common>
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
}`,eM=`uniform vec3 color;
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
}`,iM=`uniform float rotation;
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
}`,nM=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:wv,alphahash_pars_fragment:Tv,alphamap_fragment:Av,alphamap_pars_fragment:Rv,alphatest_fragment:Cv,alphatest_pars_fragment:Pv,aomap_fragment:Iv,aomap_pars_fragment:Dv,batching_pars_vertex:Fv,batching_vertex:Lv,begin_vertex:Nv,beginnormal_vertex:Uv,bsdfs:Bv,iridescence_fragment:Ov,bumpmap_pars_fragment:Hv,clipping_planes_fragment:kv,clipping_planes_pars_fragment:zv,clipping_planes_pars_vertex:Gv,clipping_planes_vertex:Vv,color_fragment:Wv,color_pars_fragment:Xv,color_pars_vertex:qv,color_vertex:Yv,common:$v,defaultnormal_vertex:Zv,displacementmap_pars_vertex:Kv,displacementmap_vertex:Jv,emissivemap_fragment:jv,emissivemap_pars_fragment:Qv,colorspace_fragment:ty,colorspace_pars_fragment:ey,envmap_fragment:iy,envmap_common_pars_fragment:ny,envmap_pars_fragment:sy,envmap_pars_vertex:ry,envmap_physical_pars_fragment:gy,envmap_vertex:oy,fog_vertex:ay,fog_pars_vertex:ly,fog_fragment:cy,fog_pars_fragment:hy,gradientmap_pars_fragment:uy,lightmap_pars_fragment:dy,lights_lambert_fragment:fy,lights_lambert_pars_fragment:py,lights_pars_begin:my,lights_toon_fragment:xy,lights_toon_pars_fragment:vy,lights_phong_fragment:yy,lights_phong_pars_fragment:_y,lights_physical_fragment:My,lights_physical_pars_fragment:by,lights_fragment_begin:Sy,lights_fragment_maps:Ey,lights_fragment_end:wy,lightprobes_pars_fragment:Ty,logdepthbuf_fragment:Ay,logdepthbuf_pars_fragment:Ry,logdepthbuf_pars_vertex:Cy,logdepthbuf_vertex:Py,map_fragment:Iy,map_pars_fragment:Dy,map_particle_fragment:Fy,map_particle_pars_fragment:Ly,metalnessmap_fragment:Ny,metalnessmap_pars_fragment:Uy,morphinstance_vertex:By,morphcolor_vertex:Oy,morphnormal_vertex:Hy,morphtarget_pars_vertex:ky,morphtarget_vertex:zy,normal_fragment_begin:Gy,normal_fragment_maps:Vy,normal_pars_fragment:Wy,normal_pars_vertex:Xy,normal_vertex:qy,normalmap_pars_fragment:Yy,clearcoat_normal_fragment_begin:$y,clearcoat_normal_fragment_maps:Zy,clearcoat_pars_fragment:Ky,iridescence_pars_fragment:Jy,opaque_fragment:jy,packing:Qy,premultiplied_alpha_fragment:t_,project_vertex:e_,dithering_fragment:i_,dithering_pars_fragment:n_,roughnessmap_fragment:s_,roughnessmap_pars_fragment:r_,shadowmap_pars_fragment:o_,shadowmap_pars_vertex:a_,shadowmap_vertex:l_,shadowmask_pars_fragment:c_,skinbase_vertex:h_,skinning_pars_vertex:u_,skinning_vertex:d_,skinnormal_vertex:f_,specularmap_fragment:p_,specularmap_pars_fragment:m_,tonemapping_fragment:g_,tonemapping_pars_fragment:x_,transmission_fragment:v_,transmission_pars_fragment:y_,uv_pars_fragment:__,uv_pars_vertex:M_,uv_vertex:b_,worldpos_vertex:S_,background_vert:E_,background_frag:w_,backgroundCube_vert:T_,backgroundCube_frag:A_,cube_vert:R_,cube_frag:C_,depth_vert:P_,depth_frag:I_,distance_vert:D_,distance_frag:F_,equirect_vert:L_,equirect_frag:N_,linedashed_vert:U_,linedashed_frag:B_,meshbasic_vert:O_,meshbasic_frag:H_,meshlambert_vert:k_,meshlambert_frag:z_,meshmatcap_vert:G_,meshmatcap_frag:V_,meshnormal_vert:W_,meshnormal_frag:X_,meshphong_vert:q_,meshphong_frag:Y_,meshphysical_vert:$_,meshphysical_frag:Z_,meshtoon_vert:K_,meshtoon_frag:J_,points_vert:j_,points_frag:Q_,shadow_vert:tM,shadow_frag:eM,sprite_vert:iM,sprite_frag:nM},It={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Sn={basic:{uniforms:wi([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:wi([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:wi([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:wi([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:wi([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new ct(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:wi([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:wi([It.points,It.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:wi([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:wi([It.common,It.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:wi([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:wi([It.sprite,It.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:wi([It.common,It.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:wi([It.lights,It.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Sn.physical={uniforms:wi([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var Kc={r:0,b:0,g:0},sM=new Yt,Pm=new ne;Pm.set(-1,0,0,0,1,0,0,0,1);function rM(s,t,e,i,n,r){let o=new ct(0),a=n===!0?0:1,l,c,h=null,d=0,f=null;function u(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let _=y.backgroundBlurriness>0;M=t.get(M,_)}return M}function g(y){let M=!1,_=u(y);_===null?p(o,a):_&&_.isColor&&(p(_,1),M=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,M){let _=u(M);_&&_.isCubeTexture?(c===void 0&&(c=new st(new ae(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:Ls(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sM.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pm),c.material.toneMapped=ve.getTransfer(_.colorSpace)!==Re,(h!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new st(new Fe(2,2),new xe({name:"BackgroundMaterial",uniforms:Ls(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ve.getTransfer(_.colorSpace)!==Re,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,M){y.getRGB(Kc,vd(s)),e.buffers.color.setClear(Kc.r,Kc.g,Kc.b,M,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:g,addToRenderList:m,dispose:x}}function oM(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null),r=n,o=!1;function a(I,L,F,T,N){let z=!1,O=d(I,T,F,L);r!==O&&(r=O,c(r.object)),z=u(I,T,F,N),z&&g(I,T,F,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,_(I,L,F,T),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function d(I,L,F,T){let N=T.wireframe===!0,z=i[L.id];z===void 0&&(z={},i[L.id]=z);let O=I.isInstancedMesh===!0?I.id:0,Y=z[O];Y===void 0&&(Y={},z[O]=Y);let G=Y[F.id];G===void 0&&(G={},Y[F.id]=G);let $=G[N];return $===void 0&&($=f(l()),G[N]=$),$}function f(I){let L=[],F=[],T=[];for(let N=0;N<e;N++)L[N]=0,F[N]=0,T[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:T,object:I,attributes:{},index:null}}function u(I,L,F,T){let N=r.attributes,z=L.attributes,O=0,Y=F.getAttributes();for(let G in Y)if(Y[G].location>=0){let et=N[G],dt=z[G];if(dt===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(dt=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(dt=I.instanceColor)),et===void 0||et.attribute!==dt||dt&&et.data!==dt.data)return!0;O++}return r.attributesNum!==O||r.index!==T}function g(I,L,F,T){let N={},z=L.attributes,O=0,Y=F.getAttributes();for(let G in Y)if(Y[G].location>=0){let et=z[G];et===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(et=I.instanceColor));let dt={};dt.attribute=et,et&&et.data&&(dt.data=et.data),N[G]=dt,O++}r.attributes=N,r.attributesNum=O,r.index=T}function m(){let I=r.newAttributes;for(let L=0,F=I.length;L<F;L++)I[L]=0}function p(I){x(I,0)}function x(I,L){let F=r.newAttributes,T=r.enabledAttributes,N=r.attributeDivisors;F[I]=1,T[I]===0&&(s.enableVertexAttribArray(I),T[I]=1),N[I]!==L&&(s.vertexAttribDivisor(I,L),N[I]=L)}function y(){let I=r.newAttributes,L=r.enabledAttributes;for(let F=0,T=L.length;F<T;F++)L[F]!==I[F]&&(s.disableVertexAttribArray(F),L[F]=0)}function M(I,L,F,T,N,z,O){O===!0?s.vertexAttribIPointer(I,L,F,N,z):s.vertexAttribPointer(I,L,F,T,N,z)}function _(I,L,F,T){m();let N=T.attributes,z=F.getAttributes(),O=L.defaultAttributeValues;for(let Y in z){let G=z[Y];if(G.location>=0){let $=N[Y];if($===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){let et=$.normalized,dt=$.itemSize,xt=t.get($);if(xt===void 0)continue;let K=xt.buffer,yt=xt.type,Ct=xt.bytesPerElement,kt=yt===s.INT||yt===s.UNSIGNED_INT||$.gpuType===dc;if($.isInterleavedBufferAttribute){let wt=$.data,zt=wt.isInterleavedBuffer===!0?wt.stride:wt.itemSize,Te=$.offset;if(wt.isInstancedInterleavedBuffer||wt.isInstancedBufferAttribute){for(let Gt=0;Gt<G.locationSize;Gt++)x(G.location+Gt,wt.meshPerAttribute);I.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Gt=0;Gt<G.locationSize;Gt++)p(G.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,K);for(let Gt=0;Gt<G.locationSize;Gt++)M(G.location+Gt,dt/G.locationSize,yt,et,zt*Ct,(Te+dt/G.locationSize*Gt)*Ct,kt)}else{if($.isInstancedBufferAttribute){for(let wt=0;wt<G.locationSize;wt++)x(G.location+wt,$.meshPerAttribute);I.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let wt=0;wt<G.locationSize;wt++)p(G.location+wt);s.bindBuffer(s.ARRAY_BUFFER,K);for(let wt=0;wt<G.locationSize;wt++)M(G.location+wt,dt/G.locationSize,yt,et,dt*Ct,dt/G.locationSize*wt*Ct,kt)}}else if(O!==void 0){let et=O[Y];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(G.location,et);break;case 3:s.vertexAttrib3fv(G.location,et);break;case 4:s.vertexAttrib4fv(G.location,et);break;default:s.vertexAttrib1fv(G.location,et)}}}}y()}function b(){C();for(let I in i){let L=i[I];for(let F in L){let T=L[F];for(let N in T){let z=T[N];for(let O in z)h(z[O].object),delete z[O];delete T[N]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;let L=i[I.id];for(let F in L){let T=L[F];for(let N in T){let z=T[N];for(let O in z)h(z[O].object),delete z[O];delete T[N]}}delete i[I.id]}function v(I){for(let L in i){let F=i[L];for(let T in F){let N=F[T];if(N[I.id]===void 0)continue;let z=N[I.id];for(let O in z)h(z[O].object),delete z[O];delete N[I.id]}}}function S(I){for(let L in i){let F=i[L],T=I.isInstancedMesh===!0?I.id:0,N=F[T];if(N!==void 0){for(let z in N){let O=N[z];for(let Y in O)h(O[Y].object),delete O[Y];delete N[z]}delete F[T],Object.keys(F).length===0&&delete i[L]}}}function C(){R(),o=!0,r!==n&&(r=n,c(r.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:C,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:m,enableAttribute:p,disableUnusedAttributes:y}}function aM(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function lM(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(v){return!(v!==fn&&i.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let S=v===ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==Fi&&v!==Ji&&!S&&i.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&qt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:p,maxAttributes:x,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:_,maxSamples:b,samples:E}}function cM(s){let t=this,e=null,i=0,n=!1,r=!1,o=new oi,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||i!==0||n;return n=f,i=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let g=d.clippingPlanes,m=d.clipIntersection,p=d.clipShadows,x=s.get(d);if(!n||g===null||g.length===0||r&&!p)r?h(null):c();else{let y=r?0:i,M=y*4,_=x.clippingState||null;l.value=_,_=h(g,f,M,u);for(let b=0;b!==M;++b)_[b]=e[b];x.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,u,g){let m=d!==null?d.length:0,p=null;if(m!==0){if(p=l.value,g!==!0||p===null){let x=u+m*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<x)&&(p=new Float32Array(x));for(let M=0,_=u;M!==m;++M,_+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,p}}var ga=class extends Ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Do(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ae(5,5,5),r=new xe({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:Vn});r.uniforms.tEquirect.value=e;let o=new st(n,r),a=e.minFilter;return e.minFilter===un&&(e.minFilter=Ci),new Rr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},lm=256,hM=3,uM=20,Im=256,Dm=16,dM=3,fM=new P,pM=new ct,En=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Rr(1,10,null),this._boxMesh=new st(new ae(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:o=256,position:a=fM}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,g=l.autoClearStencil,m=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,m===null&&(t.background=l.getClearColor(pM));let p=new Rr(i,n,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=g,t.background=m,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(lm,pd(t))}_fromTexture(t,e){t.mapping===Ds||t.mapping===Pr?this._setSize(t.image.length===0?lm:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=cm(t,!1,!1),i=Math.log2(t)-hM;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=cm(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ds||t.mapping===Pr?(this._cubemapMaterial===null&&(this._cubemapMaterial=um()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=hm()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=mM(),this._integrationMaterial=gM());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Dm);for(let o=0;o<=i;o++){let a=s.lodToRoughness(o,i);if(o>i-dM)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Im*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=xM());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}};function cm(s,t,e){return new ga(s,{minFilter:un,generateMipmaps:t,type:ii,colorSpace:Mo,depthBuffer:e})}function xa(s,t,e){return new xe({name:s,uniforms:t,vertexShader:ce.cube_vert,fragmentShader:e,side:je,blending:Vn,depthTest:!1,depthWrite:!1})}function mM(){return xa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Im}u

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
	`)}function gM(){return xa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Dm}},`

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
	`)}function xM(){return xa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${uM}
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
	`)}function hm(){return xa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function um(){return xa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vM(s){let t=new WeakMap,e=new WeakMap,i=null;function n(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===cc||u===hc)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let m=new ga(g.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",c),a(m.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,g=u===cc||u===hc,m=u===Ds||u===Pr;if(g||m){let p=e.get(f),x=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return i===null&&(i=new En(s)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let y=f.image;return g&&y&&y.height>0||m&&y&&l(y)?(i===null&&(i=new En(s)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,u){return u===cc?f.mapping=Ds:u===hc&&(f.mapping=Pr),f}function l(f){let u=0,g=6;for(let m=0;m<g;m++)f[m]!==void 0&&u++;return u===g}function c(f){let u=f.target;u.removeEventListener("dispose",c);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function yM(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Ss("WebGLRenderer: "+i+" extension not supported."),n}}}function _M(s,t,e,i){let n={},r=new WeakMap,o=new FinalizationRegistry(g=>delete n[g]);function a(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete n[g.id],o.unregister(g);let m=r.get(g);m&&(t.remove(m),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,m){return n[m.id]!==void 0||(m.addEventListener("dispose",a),n[m.id]=new WeakRef(m),o.register(m,m.id,m),e.memory.geometries++),m}function h(g){let m=g.attributes;for(let p in m)t.update(m[p],s.ARRAY_BUFFER)}function d(g){let m=g.index,p=g.attributes.position,x=0;if(p===void 0)return;let y=m!==null?m.array.length:p.array.length/3-1,M=p.count>=65535?Ro:Ao,_=new M(Math.ceil(y/3)*6,1),b=_.array;if(m!==null){let v=m.array;x=m.version;for(let S=0,C=0;S<y;S+=3){let R=v[S+0],I=v[S+1],L=v[S+2];b[C++]=R,b[C++]=I,b[C++]=I,b[C++]=L,b[C++]=L,b[C++]=R}}else{x=p.version;for(let v=0,S=0;v<y;v+=3){let C=v+0,R=v+1,I=v+2;b[S++]=C,b[S++]=R,b[S++]=R,b[S++]=I,b[S++]=I,b[S++]=C}}_.version=x;let E=r.get(g);E&&t.remove(E),r.set(g,_)}function f(g){let m=r.get(g);if(m){let p=g.index;p!==null&&m.version<p.version&&d(g)}else d(g);return r.get(g)}function u(){for(let g in n){let m=n[g].deref();m!==void 0&&l(m)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function MM(s,t,e){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(i,f,r,d*o,u),e.update(f,i,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,u);let m=0;for(let p=0;p<u;p++)m+=f[p];e.update(m,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function bM(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Kt("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function SM(s,t,e){let i=new WeakMap,n=new De;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==d){let C=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;u===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let _=a.attributes.position.count*M,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*b*4*d),v=new wo(E,_,b,d);v.type=Ji,v.needsUpdate=!0;let S=M*4;for(let R=0;R<d;R++){let I=p[R],L=x[R],F=y[R],T=_*b*4*R;for(let N=0;N<I.count;N++){let z=N*S;u===!0&&(n.fromBufferAttribute(I,N),E[T+z+0]=n.x,E[T+z+1]=n.y,E[T+z+2]=n.z,E[T+z+3]=0),g===!0&&(n.fromBufferAttribute(L,N),E[T+z+4]=n.x,E[T+z+5]=n.y,E[T+z+6]=n.z,E[T+z+7]=0),m===!0&&(n.fromBufferAttribute(F,N),E[T+z+8]=n.x,E[T+z+9]=n.y,E[T+z+10]=n.z,E[T+z+11]=F.itemSize===4?n.w:1)}}f={count:d,texture:v,size:new tt(_,b)},i.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let m=0;m<c.length;m++)u+=c[m];let g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function EM(s,t,e,i,n){let r=new WeakMap;function o(c){let h=n.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var wM={[ia]:"LINEAR_TONE_MAPPING",[na]:"REINHARD_TONE_MAPPING",[sa]:"CINEON_TONE_MAPPING",[hn]:"ACES_FILMIC_TONE_MAPPING",[Is]:"AGX_TONE_MAPPING",[Ki]:"NEUTRAL_TONE_MAPPING",[ra]:"CUSTOM_TONE_MAPPING"};function TM(s,t,e,i,n,r){let o=new Ke(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new ge;h.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $t([0,2,0,0,2,0],2));let d=new Tr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new st(h,d),u=new Cs(-1,1,1,-1,0,1),g=null,m=null,p=!1,x,y=null,M=[],_=!1;this.setSize=function(b,E){o.setSize(b,E),a!==null&&a.setSize(b,E),l!==null&&l.setSize(b,E);for(let v=0;v<M.length;v++){let S=M[v];S.setSize&&S.setSize(b,E)}},this.setEffects=function(b){M=b,_=M.length>0&&M[0].isRenderPass===!0;let E=o.width,v=o.height;M.length>0&&a===null&&(a=new Ke(E,v,{type:ii,depthBuffer:!1,stencilBuffer:!1}),l=new Ke(E,v,{type:ii,depthBuffer:!1,stencilBuffer:!1}));let S=n===!0&&M.some(C=>C.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Bn(E,v),r===!0&&(c.format=Wn,c.type=Fs)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let C=0;C<M.length;C++){let R=M[C];R.setSize&&R.setSize(E,v),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(b,E){if(p||b.toneMapping===Mn&&M.length===0)return!1;if(y=E,E!==null){let v=E.width,S=E.height;(o.width!==v||o.height!==S)&&this.setSize(v,S)}return _===!1&&b.setRenderTarget(o),x=b.toneMapping,b.toneMapping=Mn,!0},this.hasRenderPass=function(){return _},this.end=function(b,E){b.toneMapping=x,p=!0;let v=o,S=a;for(let C=0;C<M.length;C++){let R=M[C];R.enabled!==!1&&(R.render(b,S,v,E),R.needsSwap!==!1&&(v=S,S=S===a?l:a))}if(g!==b.outputColorSpace||m!==b.toneMapping){g=b.outputColorSpace,m=b.toneMapping,d.defines={},ve.getTransfer(g)===Re&&(d.defines.SRGB_TRANSFER="");let C=wM[m];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,b.setRenderTarget(y),b.render(f,u),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Fm=new Pi,Lm=new Bn(1,1),Nm=new Fo(1),Um=new wo,Bm=new Ol,Om=new Do,dm=[],fm=[],pm=new Float32Array(16),mm=new Float32Array(9),gm=new Float32Array(4);function Lr(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=dm[n];if(r===void 0&&(r=new Float32Array(n),dm[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ui(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function di(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function jc(s,t){let e=fm[t];e===void 0&&(e=new Int32Array(t),fm[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function AM(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function RM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ui(e,t))return;s.uniform2fv(this.addr,t),di(e,t)}}function CM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ui(e,t))return;s.uniform3fv(this.addr,t),di(e,t)}}function PM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ui(e,t))return;s.uniform4fv(this.addr,t),di(e,t)}}function IM(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ui(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),di(e,t)}else{if(ui(e,i))return;gm.set(i),s.uniformMatrix2fv(this.addr,!1,gm),di(e,i)}}function DM(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ui(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),di(e,t)}else{if(ui(e,i))return;mm.set(i),s.uniformMatrix3fv(this.addr,!1,mm),di(e,i)}}function FM(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ui(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),di(e,t)}else{if(ui(e,i))return;pm.set(i),s.uniformMatrix4fv(this.addr,!1,pm),di(e,i)}}function LM(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function NM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ui(e,t))return;s.uniform2iv(this.addr,t),di(e,t)}}function UM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ui(e,t))return;s.uniform3iv(this.addr,t),di(e,t)}}function BM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ui(e,t))return;s.uniform4iv(this.addr,t),di(e,t)}}function OM(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function HM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ui(e,t))return;s.uniform2uiv(this.addr,t),di(e,t)}}function kM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ui(e,t))return;s.uniform3uiv(this.addr,t),di(e,t)}}function zM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ui(e,t))return;s.uniform4uiv(this.addr,t),di(e,t)}}function Qc(s){return s.version===0&&(s.compareFunction=hd,s.needsUpdate=!0),s}function GM(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=Qc(Lm):r=Fm,e.setTexture2D(t||r,n)}function VM(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Bm,n)}function WM(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Qc(Nm):r=Om,e.setTextureCube(t||r,n)}function XM(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Um,n)}function qM(s){switch(s){case 5126:return AM;case 35664:return RM;case 35665:return CM;case 35666:return PM;case 35674:return IM;case 35675:return DM;case 35676:return FM;case 5124:case 35670:return LM;case 35667:case 35671:return NM;case 35668:case 35672:return UM;case 35669:case 35673:return BM;case 5125:return OM;case 36294:return HM;case 36295:return kM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return WM;case 36289:case 36303:case 36311:case 36292:return XM}}function YM(s,t){s.uniform1fv(this.addr,t)}function $M(s,t){let e=Lr(t,this.size,2);s.uniform2fv(this.addr,e)}function ZM(s,t){let e=Lr(t,this.size,3);s.uniform3fv(this.addr,e)}function KM(s,t){let e=Lr(t,this.size,4);s.uniform4fv(this.addr,e)}function JM(s,t){let e=Lr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function jM(s,t){let e=Lr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function QM(s,t){let e=Lr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function t1(s,t){s.uniform1iv(this.addr,t)}function e1(s,t){s.uniform2iv(this.addr,t)}function i1(s,t){s.uniform3iv(this.addr,t)}function n1(s,t){s.uniform4iv(this.addr,t)}function s1(s,t){s.uniform1uiv(this.addr,t)}function r1(s,t){s.uniform2uiv(this.addr,t)}function o1(s,t){s.uniform3uiv(this.addr,t)}function a1(s,t){s.uniform4uiv(this.addr,t)}function l1(s,t,e){let i=this.cache,n=t.length,r=jc(e,n);ui(i,r)||(s.uniform1iv(this.addr,r),di(i,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Qc(Lm):o=Fm;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,r[a])}function c1(s,t,e){let i=this.cache,n=t.length,r=jc(e,n);ui(i,r)||(s.uniform1iv(this.addr,r),di(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Bm,r[o])}function h1(s,t,e){let i=this.cache,n=t.length,r=jc(e,n);ui(i,r)||(s.uniform1iv(this.addr,r),di(i,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Qc(Nm):o=Om;for(let a=0;a!==n;++a)e.setTextureCube(t[a]||o,r[a])}function u1(s,t,e){let i=this.cache,n=t.length,r=jc(e,n);ui(i,r)||(s.uniform1iv(this.addr,r),di(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Um,r[o])}function d1(s){switch(s){case 5126:return YM;case 35664:return $M;case 35665:return ZM;case 35666:return KM;case 35674:return JM;case 35675:return jM;case 35676:return QM;case 5124:case 35670:return t1;case 35667:case 35671:return e1;case 35668:case 35672:return i1;case 35669:case 35673:return n1;case 5125:return s1;case 36294:return r1;case 36295:return o1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return u1}}var Cd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=qM(e.type)}},Pd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d1(e.type)}},Id=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},Ad=/(\w+)(\])?(\[|\.)?/g;function xm(s,t){s.seq.push(t),s.map[t.id]=t}function f1(s,t,e){let i=s.name,n=i.length;for(Ad.lastIndex=0;;){let r=Ad.exec(i),o=Ad.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){xm(e,c===void 0?new Cd(a,s,t):new Pd(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Id(a),xm(e,d)),e=d}}}var Fr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);f1(a,l,this)}let n=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):r.push(o);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function vm(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var p1=37297,m1=0;function g1(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var ym=new ne;function x1(s){ve._getMatrix(ym,ve.workingColorSpace,s);let t=`mat3( ${ym.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(s)){case bo:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function _m(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+g1(s.getShaderSource(t),a)}else return r}function v1(s,t){let e=x1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var y1={[ia]:"Linear",[na]:"Reinhard",[sa]:"Cineon",[hn]:"ACESFilmic",[Is]:"AgX",[Ki]:"Neutral",[ra]:"Custom"};function _1(s,t){let e=y1[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jc=new P;function M1(){ve.getLuminanceCoefficients(Jc);let s=Jc.x.toFixed(4),t=Jc.y.toFixed(4),e=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function S1(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function E1(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ma(s){return s!==""}function Mm(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function bm(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var w1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(s){return s.replace(w1,T1)}function T1(s,t){let e=ce[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Dd(e)}var A1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sm(s){return s.replace(A1,R1)}function R1(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Em(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var C1={[Gn]:"SHADOWMAP_TYPE_PCF",[Cr]:"SHADOWMAP_TYPE_VSM"};function P1(s){return C1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var I1={[Pr]:"ENVMAP_MODE_REFRACTION"};function D1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":I1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var F1={[lc]:"ENVMAP_BLENDING_MULTIPLY",[Hp]:"ENVMAP_BLENDING_MIX",[kp]:"ENVMAP_BLENDING_ADD"};function L1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":F1[s.combine]||"ENVMAP_BLENDING_NONE"}function N1(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=P1(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=D1(e),d=L1(e),f=b1(e),u=S1(r),g=n.createProgram(),m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(ma).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(ma).join(`
`),p.length>0&&(p+=`
`)):(m=[Em(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),p=[Em(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?ce.tonemapping_pars_fragment:"",e.toneMapping!==Mn?_1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,v1("linearToOutputTexel",e.outputColorSpace),M1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ma).join(`
`)),o=Dd(o),o=Mm(o,e),o=bm(o,e),a=Dd(a),a=Mm(a,e),a=bm(a,e),o=Sm(o),a=Sm(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=x+m+o,M=x+p+a,_=vm(n,n.VERTEX_SHADER,y),b=vm(n,n.FRAGMENT_SHADER,M);n.attachShader(g,_),n.attachShader(g,b),e.index0AttributeName!==void 0?n.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function E(R){if(s.debug.checkShaderErrors){let I=n.getProgramInfoLog(g)||"",L=n.getShaderInfoLog(_)||"",F=n.getShaderInfoLog(b)||"",T=I.trim(),N=L.trim(),z=F.trim(),O=!0,Y=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,_,b);else{let G=_m(n,_,"vertex"),$=_m(n,b,"fragment");Kt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+T+`
`+G+`
`+$)}else T!==""?qt("WebGLProgram: Program Info Log:",T):(N===""||z==="")&&(Y=!1);Y&&(R.diagnostics={runnable:O,programLog:T,vertexShader:{log:N,prefix:m},fragmentShader:{log:z,prefix:p}})}n.deleteShader(_),n.deleteShader(b),v=new Fr(n,g),S=E1(n,g)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(g,p1)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=m1++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=b,this}var U1=0,Fd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ld(t),e.set(t,i)),i}},Ld=class{constructor(t){this.id=U1++,this.code=t,this.usedTimes=0}};function B1(s){return s===ls||s===ua||s===da}function O1(s,t,e,i,n,r){let o=new xr,a=new Fd,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,S,C,R,I,L){let F=R.fog,T=I.geometry,N=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=t.get(v.envMap||N,z),Y=f[v.type],G=i.precision;v.precision!==null&&(G=i.getMaxPrecision(v.precision),G!==v.precision&&qt("WebGLProgram.getParameters:",v.precision,"not supported, using",G,"instead."));let $=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,et=$!==void 0?$.length:0,dt=0;T.morphAttributes.position!==void 0&&(dt=1),T.morphAttributes.normal!==void 0&&(dt=2),T.morphAttributes.color!==void 0&&(dt=3);let xt,K,yt,Ct;if(Y){let Pt=Sn[Y];xt=Pt.vertexShader,K=Pt.fragmentShader}else{xt=v.vertexShader,K=v.fragmentShader;let Pt=a.getVertexShaderStage(v),Ne=a.getFragmentShaderStage(v);a.update(v,Pt,Ne),yt=Pt.id,Ct=Ne.id}let kt=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),zt=I.isInstancedMesh===!0,Te=I.isBatchedMesh===!0,Gt=!!v.map,Qt=!!v.matcap,te=!!O,B=te&&O.isPMREMTexture===!0,V=!!v.aoMap,j=!!v.lightMap,ut=!!v.bumpMap&&v.wireframe===!1,ot=!!v.normalMap,Ft=!!v.displacementMap,vt=!!v.emissiveMap,Jt=!!v.metalnessMap,ie=!!v.roughnessMap,fe=v.anisotropy>0,H=v.clearcoat>0,Se=v.diffuseRoughness>0,ue=v.dispersion>0,Le=v.retroreflectivity>0,_t=v.iridescence>0,ze=v.sheen>0,Wt=v.transmission>0,ee=fe&&!!v.anisotropyMap,D=H&&!!v.clearcoatMap,w=H&&!!v.clearcoatNormalMap,X=H&&!!v.clearcoatRoughnessMap,ht=Se&&!!v.diffuseRoughnessMap,rt=_t&&!!v.iridescenceMap,Mt=_t&&!!v.iridescenceThicknessMap,At=ze&&!!v.sheenColorMap,Q=ze&&!!v.sheenRoughnessMap,it=!!v.specularMap,St=!!v.specularColorMap,U=!!v.specularIntensityMap,nt=Wt&&!!v.transmissionMap,J=Wt&&!!v.thicknessMap,Et=!!v.gradientMap,gt=!!v.alphaMap,bt=v.alphaTest>0,Vt=!!v.alphaHash,pe=!!v.extensions,ft=Mn;v.toneMapped&&(kt===null||kt.isXRRenderTarget===!0)&&(ft=s.toneMapping);let Xt=B?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,de={shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:xt,fragmentShader:K,defines:v.defines,customVertexShaderID:yt,customFragmentShaderID:Ct,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:G,batching:Te,batchingColor:Te&&I._colorsTexture!==null,instancing:zt,instancingColor:zt&&I.instanceColor!==null,instancingMorph:zt&&I.morphTexture!==null,outputColorSpace:kt===null?s.outputColorSpace:kt.isXRRenderTarget===!0?kt.texture.colorSpace:ve.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Gt,matcap:Qt,envMap:te,envMapMode:te&&O.mapping,envMapPMREM:B,envMapMaxLod:B?Xt.length-1:null,envMapSize:B?Xt[0].width:null,aoMap:V,lightMap:j,bumpMap:ut,normalMap:ot,displacementMap:Ft,emissiveMap:vt,normalMapObjectSpace:ot&&v.normalMapType===Vp,normalMapTangentSpace:ot&&v.normalMapType===fa,packedNormalMap:ot&&v.normalMapType===fa&&B1(v.normalMap.format),metalnessMap:Jt,roughnessMap:ie,anisotropy:fe,anisotropyMap:ee,clearcoat:H,clearcoatMap:D,clearcoatNormalMap:w,clearcoatRoughnessMap:X,diffuseRoughness:Se,diffuseRoughnessMap:ht,dispersion:ue,retroreflection:Le,iridescence:_t,iridescenceMap:rt,iridescenceThicknessMap:Mt,sheen:ze,sheenColorMap:At,sheenRoughnessMap:Q,specularMap:it,specularColorMap:St,specularIntensityMap:U,transmission:Wt,transmissionMap:nt,thicknessMap:J,gradientMap:Et,opaque:v.transparent===!1&&v.blending===as&&v.alphaToCoverage===!1,alphaMap:gt,alphaTest:bt,alphaHash:Vt,combine:v.combine,mapUv:Gt&&u(v.map.channel),aoMapUv:V&&u(v.aoMap.channel),lightMapUv:j&&u(v.lightMap.channel),bumpMapUv:ut&&u(v.bumpMap.channel),normalMapUv:ot&&u(v.normalMap.channel),displacementMapUv:Ft&&u(v.displacementMap.channel),emissiveMapUv:vt&&u(v.emissiveMap.channel),metalnessMapUv:Jt&&u(v.metalnessMap.channel),roughnessMapUv:ie&&u(v.roughnessMap.channel),anisotropyMapUv:ee&&u(v.anisotropyMap.channel),clearcoatMapUv:D&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:w&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&u(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ht&&u(v.diffuseRoughnessMap.channel),iridescenceMapUv:rt&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:At&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:Q&&u(v.sheenRoughnessMap.channel),specularMapUv:it&&u(v.specularMap.channel),specularColorMapUv:St&&u(v.specularColorMap.channel),specularIntensityMapUv:U&&u(v.specularIntensityMap.channel),transmissionMapUv:nt&&u(v.transmissionMap.channel),thicknessMapUv:J&&u(v.thicknessMap.channel),alphaMapUv:gt&&u(v.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(ot||fe),vertexNormals:!!T.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!T.attributes.uv&&(Gt||gt),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||T.attributes.normal===void 0&&ot===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:wt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:T.attributes.position!==void 0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:dt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.filter(Pt=>Pt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ft,decodeVideoTexture:Gt&&v.map.isVideoTexture===!0&&ve.getTransfer(v.map.colorSpace)===Re,decodeVideoTextureEmissive:vt&&v.emissiveMap.isVideoTexture===!0&&ve.getTransfer(v.emissiveMap.colorSpace)===Re,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===le,flipSided:v.side===je,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:pe&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&v.extensions.multiDraw===!0||Te)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return de.vertexUv1s=l.has(1),de.vertexUv2s=l.has(2),de.vertexUv3s=l.has(3),l.clear(),de}function m(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)S.push(C),S.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(p(S,v),x(S,v),S.push(s.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function p(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function x(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function y(v){let S=f[v.type],C;if(S){let R=Sn[S];C=Ni.clone(R.uniforms)}else C=v.uniforms;return C}function M(v,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new N1(s,S,v,n),c.push(C),h.set(S,C)),C}function _(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function E(){a.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:M,releaseProgram:_,releaseShaderCache:b,programs:c,dispose:E}}function H1(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function k1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function wm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Tm(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,g,m,p,x){let y=s[t];return y===void 0?(y={id:f.id,object:f,geometry:u,material:g,materialVariant:o(f),groupOrder:m,renderOrder:f.renderOrder,z:p,group:x},s[t]=y):(y.id=f.id,y.object=f,y.geometry=u,y.material=g,y.materialVariant=o(f),y.groupOrder=m,y.renderOrder=f.renderOrder,y.z=p,y.group=x),t++,y}function l(f,u,g,m,p,x,y){y.reversedDepth===!0&&(p=-p);let M=a(f,u,g,m,p,x);g.transmission>0?i.push(M):g.transparent===!0?n.push(M):e.push(M)}function c(f,u,g,m,p,x){let y=a(f,u,g,m,p,x);g.transmission>0?i.unshift(y):g.transparent===!0?n.unshift(y):e.unshift(y)}function h(f,u){e.length>1&&e.sort(f||k1),i.length>1&&i.sort(u||wm),n.length>1&&n.sort(u||wm)}function d(){for(let f=t,u=s.length;f<u;f++){let g=s[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:h}}function z1(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new Tm,s.set(i,[o])):n>=r.length?(o=new Tm,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function G1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new ct};break;case"SpotLight":e={position:new P,direction:new P,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function V1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var W1=0;function X1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function q1(s){let t=new G1,e=V1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let n=new P,r=new Yt,o=new Yt;function a(c){let h=0,d=0,f=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let u=0,g=0,m=0,p=0,x=0,y=0,M=0,_=0,b=0,E=0,v=0,S=0,C=0,R=0;c.sort(X1);for(let L=0,F=c.length;L<F;L++){let T=c[L],N=T.color,z=T.intensity,O=T.distance,Y=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===ls?Y=T.shadow.map.texture:Y=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)h+=N.r*z,d+=N.g*z,f+=N.b*z;else if(T.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(T.sh.coefficients[G],z);R++}else if(T.isSunLight){let G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let $=T.shadow,et=e.get(T);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[g]=et,i.sunShadowMap[g]=Y;let dt=$.getViewportCount();for(let xt=0;xt<dt;xt++)i.sunShadowMatrix[m+xt]=$.getMatrix(xt),i.sunShadowCascade[m+xt]=$._cascadeData[xt];m+=dt,g++}i.sun[u]=G,u++}else if(T.isDirectionalLight){let G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let $=T.shadow,et=e.get(T);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,i.directionalShadow[p]=et,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=T.shadow.matrix,b++}i.directional[p]=G,p++}else if(T.isSpotLight){let G=t.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(N).multiplyScalar(z),G.distance=O,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,i.spot[y]=G;let $=T.shadow;if(T.map&&(i.spotLightMap[S]=T.map,S++,$.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[y]=$.matrix,T.castShadow){let et=e.get(T);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,i.spotShadow[y]=et,i.spotShadowMap[y]=Y,v++}y++}else if(T.isRectAreaLight){let G=t.get(T);G.color.copy(N).multiplyScalar(z),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),i.rectArea[M]=G,M++}else if(T.isPointLight){let G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){let $=T.shadow,et=e.get(T);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,et.shadowCameraNear=$.camera.near,et.shadowCameraFar=$.camera.far,i.pointShadow[x]=et,i.pointShadowMap[x]=Y,i.pointShadowMatrix[x]=T.shadow.matrix,E++}i.point[x]=G,x++}else if(T.isHemisphereLight){let G=t.get(T);G.skyColor.copy(T.color).multiplyScalar(z),G.groundColor.copy(T.groundColor).multiplyScalar(z),i.hemi[_]=G,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=It.LTC_FLOAT_1,i.rectAreaLTC2=It.LTC_FLOAT_2):(i.rectAreaLTC1=It.LTC_HALF_1,i.rectAreaLTC2=It.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let I=i.hash;(I.sunLength!==u||I.directionalLength!==p||I.pointLength!==x||I.spotLength!==y||I.rectAreaLength!==M||I.hemiLength!==_||I.numSunShadows!==g||I.numDirectionalShadows!==b||I.numPointShadows!==E||I.numSpotShadows!==v||I.numSpotMaps!==S||I.numLightProbes!==R)&&(i.sun.length=u,i.directional.length=p,i.spot.length=y,i.rectArea.length=M,i.point.length=x,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=m,i.sunShadowCascade.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+S-C,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,I.sunLength=u,I.directionalLength=p,I.pointLength=x,I.spotLength=y,I.rectAreaLength=M,I.hemiLength=_,I.numSunShadows=g,I.numDirectionalShadows=b,I.numPointShadows=E,I.numSpotShadows=v,I.numSpotMaps=S,I.numLightProbes=R,i.version=W1++)}function l(c,h){let d=0,f=0,u=0,g=0,m=0,p=0,x=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let _=c[y];if(_.isSunLight){let b=i.sun[d];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(x),d++}else if(_.isDirectionalLight){let b=i.directional[f];b.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(x),f++}else if(_.isSpotLight){let b=i.spot[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(x),g++}else if(_.isRectAreaLight){let b=i.rectArea[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(x),o.identity(),r.copy(_.matrixWorld),r.premultiply(x),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let b=i.point[u];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(x),u++}else if(_.isHemisphereLight){let b=i.hemi[p];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(x),p++}}}return{setup:a,setupView:l,state:i}}function Am(s){let t=new q1(s),e=[],i=[],n=[];function r(d){h.camera=d,e.length=0,i.length=0,n.length=0}function o(d){d.isLightProbeGrid?n.push(d):e.push(d)}function a(d){i.push(d)}function l(){t.setup(e),n.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Y1(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new Am(s),t.set(n,[a])):r>=o.length?(a=new Am(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var $1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z1=`uniform sampler2D shadow_pass;
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
}`,K1=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],J1=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Rm=new Yt,pa=new P,Rd=new P;function j1(s,t,e){let i=new es,n=new tt,r=new tt,o=new De,a=new $l,l=new Zl,c={},h=e.maxTextureSize,d={[os]:je,[je]:os,[le]:le},f=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:$1,fragmentShader:Z1}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let g=new ge;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new st(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gn;let x=this.type;this.render=function(E,v,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===_p&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gn);let C=s.getRenderTarget(),R=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Vn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=x!==this.type;F&&v.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(N=>N.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,N=E.length;T<N;T++){let z=E[T],O=z.shadow;if(O===void 0){qt("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;n.copy(O.mapSize);let Y=O.getFrameExtents();n.multiply(Y),r.copy(O.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Y.x),n.x=r.x*Y.x,O.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Y.y),n.y=r.y*Y.y,O.mapSize.y=r.y));let G=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=G,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Cr){if(z.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ke(n.x,n.y,{format:ls,type:ii,minFilter:Ci,magFilter:Ci,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new Bn(n.x,n.y,Ji),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=Nn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=vi,O.map.depthTexture.magFilter=vi}else z.isPointLight?(O.map=new ga(n.x),O.map.depthTexture=new Fo(n.x,dn)):(O.map=new Ke(n.x,n.y),O.map.depthTexture=new Bn(n.x,n.y,dn)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=Nn,this.type===Gn?(O.map.depthTexture.compareFunction=G?cd:ld,O.map.depthTexture.minFilter=Ci,O.map.depthTexture.magFilter=Ci):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=vi,O.map.depthTexture.magFilter=vi);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==n.x||O.map.height!==n.y)&&O.map.setSize(n.x,n.y);let $=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();z.isPointLight!==!0&&O.updateMatrices(z,S);let et=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let dt=0;dt<$;dt++){let xt=O.getCamera(dt);if(z.isPointLight){let K=O.camera,yt=O.matrix,Ct=z.distance||K.far;Ct!==K.far&&(K.far=Ct,K.updateProjectionMatrix()),pa.setFromMatrixPosition(z.matrixWorld),K.position.copy(pa),Rd.copy(K.position),Rd.add(K1[dt]),K.up.copy(J1[dt]),K.lookAt(Rd),K.updateMatrixWorld(),yt.makeTranslation(-pa.x,-pa.y,-pa.z),Rm.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Rm,K.coordinateSystem,K.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,dt),s.clear();else{dt===0&&(s.setRenderTarget(O.map),s.clear());let K=O.getViewport(dt);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),L.viewport(o)}i=O.getFrustum(dt),_(v,S,xt,z,et,this.type)}O.isPointLightShadow!==!0&&this.type===Cr&&y(O,S),O.needsUpdate=!1}x=this.type,p.needsUpdate=!1,s.setRenderTarget(C,R,I)};function y(E,v){let S=t.update(m);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ke(n.x,n.y,{format:ls,type:ii}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(v,null,S,f,m,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(v,null,S,u,m,null)}function M(E,v,S,C){let R=null,I=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)R=I;else if(R=S.isPointLight===!0?l:a,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let L=R.uuid,F=v.uuid,T=c[L];T===void 0&&(T={},c[L]=T);let N=T[F];N===void 0&&(N=R.clone(),T[F]=N,v.addEventListener("dispose",b)),R=N}if(R.visible=v.visible,R.wireframe=v.wireframe,C===Cr?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:d[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=s.properties.get(R);L.light=S}return R}function _(E,v,S,C,R,I){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Cr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let T=t.update(E),N=E.material;if(Array.isArray(N)){let z=T.groups;for(let O=0,Y=z.length;O<Y;O++){let G=z[O],$=N[G.materialIndex];if($&&$.visible){let et=M(E,$,C,I);E.onBeforeShadow(s,E,v,S,T,et,G),s.renderBufferDirect(S,null,T,et,E,G),E.onAfterShadow(s,E,v,S,T,et,G)}}}else if(N.visible){let z=M(E,N,C,I);E.onBeforeShadow(s,E,v,S,T,z,null),s.renderBufferDirect(S,null,T,z,E,null),E.onAfterShadow(s,E,v,S,T,z,null)}}let F=E.children;for(let T=0,N=F.length;T<N;T++)_(F[T],v,S,C,R,I)}function b(E){E.target.removeEventListener("dispose",b);for(let S in c){let C=c[S],R=E.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function Q1(s,t){function e(){let U=!1,nt=new De,J=null,Et=new De(0,0,0,0);return{setMask:function(gt){J!==gt&&!U&&(s.colorMask(gt,gt,gt,gt),J=gt)},setLocked:function(gt){U=gt},setClear:function(gt,bt,Vt,pe,ft){ft===!0&&(gt*=pe,bt*=pe,Vt*=pe),nt.set(gt,bt,Vt,pe),Et.equals(nt)===!1&&(s.clearColor(gt,bt,Vt,pe),Et.copy(nt))},reset:function(){U=!1,J=null,Et.set(-1,0,0,0)}}}function i(){let U=!1,nt=!1,J=null,Et=null,gt=null;return{setReversed:function(bt){if(nt!==bt){let Vt=t.get("EXT_clip_control");bt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),nt=bt;let pe=gt;gt=null,this.setClear(pe)}},getReversed:function(){return nt},setTest:function(bt){bt?wt(s.DEPTH_TEST):zt(s.DEPTH_TEST)},setMask:function(bt){J!==bt&&!U&&(s.depthMask(bt),J=bt)},setFunc:function(bt){if(nt&&(bt=Qp[bt]),Et!==bt){switch(bt){case Al:s.depthFunc(s.NEVER);break;case Rl:s.depthFunc(s.ALWAYS);break;case Cl:s.depthFunc(s.LESS);break;case ur:s.depthFunc(s.LEQUAL);break;case Pl:s.depthFunc(s.EQUAL);break;case Il:s.depthFunc(s.GEQUAL);break;case Dl:s.depthFunc(s.GREATER);break;case Fl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Et=bt}},setLocked:function(bt){U=bt},setClear:function(bt){gt!==bt&&(gt=bt,nt&&(bt=1-bt),s.clearDepth(bt))},reset:function(){U=!1,J=null,Et=null,gt=null,nt=!1}}}function n(){let U=!1,nt=null,J=null,Et=null,gt=null,bt=null,Vt=null,pe=null,ft=null;return{setTest:function(Xt){U||(Xt?wt(s.STENCIL_TEST):zt(s.STENCIL_TEST))},setMask:function(Xt){nt!==Xt&&!U&&(s.stencilMask(Xt),nt=Xt)},setFunc:function(Xt,de,Pt){(J!==Xt||Et!==de||gt!==Pt)&&(s.stencilFunc(Xt,de,Pt),J=Xt,Et=de,gt=Pt)},setOp:function(Xt,de,Pt){(bt!==Xt||Vt!==de||pe!==Pt)&&(s.stencilOp(Xt,de,Pt),bt=Xt,Vt=de,pe=Pt)},setLocked:function(Xt){U=Xt},setClear:function(Xt){ft!==Xt&&(s.clearStencil(Xt),ft=Xt)},reset:function(){U=!1,nt=null,J=null,Et=null,gt=null,bt=null,Vt=null,pe=null,ft=null}}}let r=new e,o=new i,a=new n,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,g=[],m=null,p=!1,x=null,y=null,M=null,_=null,b=null,E=null,v=null,S=new ct(0,0,0),C=0,R=!1,I=null,L=null,F=null,T=null,N=null,z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Y=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=Y>=2);let $=null,et={},dt=s.getParameter(s.SCISSOR_BOX),xt=s.getParameter(s.VIEWPORT),K=new De().fromArray(dt),yt=new De().fromArray(xt);function Ct(U,nt,J,Et){let gt=new Uint8Array(4),bt=s.createTexture();s.bindTexture(U,bt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<J;Vt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,Et,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(nt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return bt}let kt={};kt[s.TEXTURE_2D]=Ct(s.TEXTURE_2D,s.TEXTURE_2D,1),kt[s.TEXTURE_CUBE_MAP]=Ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),kt[s.TEXTURE_2D_ARRAY]=Ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),kt[s.TEXTURE_3D]=Ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),wt(s.DEPTH_TEST),o.setFunc(ur),ut(!1),ot(Ku),wt(s.CULL_FACE),V(Vn);function wt(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function zt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Te(U,nt){return f[U]!==nt?(s.bindFramebuffer(U,nt),f[U]=nt,U===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=nt),U===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function Gt(U,nt){let J=g,Et=!1;if(U){J=u.get(nt),J===void 0&&(J=[],u.set(nt,J));let gt=U.textures;if(J.length!==gt.length||J[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,Vt=gt.length;bt<Vt;bt++)J[bt]=s.COLOR_ATTACHMENT0+bt;J.length=gt.length,Et=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,Et=!0);Et&&s.drawBuffers(J)}function Qt(U){return m!==U?(s.useProgram(U),m=U,!0):!1}let te={[Ps]:s.FUNC_ADD,[bp]:s.FUNC_SUBTRACT,[Sp]:s.FUNC_REVERSE_SUBTRACT};te[Ep]=s.MIN,te[wp]=s.MAX;let B={[Tp]:s.ZERO,[Ap]:s.ONE,[Rp]:s.SRC_COLOR,[Qu]:s.SRC_ALPHA,[Lp]:s.SRC_ALPHA_SATURATE,[Dp]:s.DST_COLOR,[Pp]:s.DST_ALPHA,[Cp]:s.ONE_MINUS_SRC_COLOR,[td]:s.ONE_MINUS_SRC_ALPHA,[Fp]:s.ONE_MINUS_DST_COLOR,[Ip]:s.ONE_MINUS_DST_ALPHA,[Np]:s.CONSTANT_COLOR,[Up]:s.ONE_MINUS_CONSTANT_COLOR,[Bp]:s.CONSTANT_ALPHA,[Op]:s.ONE_MINUS_CONSTANT_ALPHA};function V(U,nt,J,Et,gt,bt,Vt,pe,ft,Xt){if(U===Vn){p===!0&&(zt(s.BLEND),p=!1);return}if(p===!1&&(wt(s.BLEND),p=!0),U!==Mp){if(U!==x||Xt!==R){if((y!==Ps||b!==Ps)&&(s.blendEquation(s.FUNC_ADD),y=Ps,b=Ps),Xt)switch(U){case as:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oe:s.blendFunc(s.ONE,s.ONE);break;case Ju:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ju:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Kt("WebGLState: Invalid blending: ",U);break}else switch(U){case as:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oe:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ju:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ju:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",U);break}M=null,_=null,E=null,v=null,S.set(0,0,0),C=0,x=U,R=Xt}return}gt=gt||nt,bt=bt||J,Vt=Vt||Et,(nt!==y||gt!==b)&&(s.blendEquationSeparate(te[nt],te[gt]),y=nt,b=gt),(J!==M||Et!==_||bt!==E||Vt!==v)&&(s.blendFuncSeparate(B[J],B[Et],B[bt],B[Vt]),M=J,_=Et,E=bt,v=Vt),(pe.equals(S)===!1||ft!==C)&&(s.blendColor(pe.r,pe.g,pe.b,ft),S.copy(pe),C=ft),x=U,R=!1}function j(U,nt){U.side===le?zt(s.CULL_FACE):wt(s.CULL_FACE);let J=U.side===je;nt&&(J=!J),ut(J),U.blending===as&&U.transparent===!1?V(Vn):V(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Et=U.stencilWrite;a.setTest(Et),Et&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),vt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?wt(s.SAMPLE_ALPHA_TO_COVERAGE):zt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(U){I!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),I=U)}function ot(U){U!==vp?(wt(s.CULL_FACE),U!==L&&(U===Ku?s.cullFace(s.BACK):U===yp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):zt(s.CULL_FACE),L=U}function Ft(U){U!==F&&(O&&s.lineWidth(U),F=U)}function vt(U,nt,J){U?(wt(s.POLYGON_OFFSET_FILL),(T!==nt||N!==J)&&(T=nt,N=J,o.getReversed()&&(nt=-nt,J=-J),s.polygonOffset(nt,J))):zt(s.POLYGON_OFFSET_FILL)}function Jt(U){U?wt(s.SCISSOR_TEST):zt(s.SCISSOR_TEST)}function ie(U){U===void 0&&(U=s.TEXTURE0+z-1),$!==U&&(s.activeTexture(U),$=U)}function fe(U,nt,J){J===void 0&&($===null?J=s.TEXTURE0+z-1:J=$);let Et=et[J];Et===void 0&&(Et={type:void 0,texture:void 0},et[J]=Et),(Et.type!==U||Et.texture!==nt)&&($!==J&&(s.activeTexture(J),$=J),s.bindTexture(U,nt||kt[U]),Et.type=U,Et.texture=nt)}function H(){let U=et[$];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Se(){try{s.compressedTexImage2D(...arguments)}catch(U){Kt("WebGLState:",U)}}function ue(){try{s.compressedTexImage3D(...arguments)}catch(U){Kt("WebGLState:",U)}}function Le(){try{s.texSubImage2D(...arguments)}catch(U){Kt("WebGLState:",U)}}function _t(){try{s.texSubImage3D(...arguments)}catch(U){Kt("WebGLState:",U)}}function ze(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Kt("WebGLState:",U)}}function Wt(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Kt("WebGLState:",U)}}function ee(){try{s.texStorage2D(...arguments)}catch(U){Kt("WebGLState:",U)}}function D(){try{s.texStorage3D(...arguments)}catch(U){Kt("WebGLState:",U)}}function w(){try{s.texImage2D(...arguments)}catch(U){Kt("WebGLState:",U)}}function X(){try{s.texImage3D(...arguments)}catch(U){Kt("WebGLState:",U)}}function ht(U){return d[U]!==void 0?d[U]:s.getParameter(U)}function rt(U,nt){d[U]!==nt&&(s.pixelStorei(U,nt),d[U]=nt)}function Mt(U){K.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),K.copy(U))}function At(U){yt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),yt.copy(U))}function Q(U,nt){let J=c.get(nt);J===void 0&&(J=new WeakMap,c.set(nt,J));let Et=J.get(U);Et===void 0&&(Et=s.getUniformBlockIndex(nt,U.name),s.uniformBlockBinding(nt,Et,Et),J.set(U,Et))}function it(U,nt,J){let gt=c.get(nt).get(U);l[gt]!==J&&(s.bindBufferBase(s.UNIFORM_BUFFER,gt,J),l[gt]=J)}function St(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},$=null,et={},f={},l={},u=new WeakMap,g=[],m=null,p=!1,x=null,y=null,M=null,_=null,b=null,E=null,v=null,S=new ct(0,0,0),C=0,R=!1,I=null,L=null,F=null,T=null,N=null,K.set(0,0,s.canvas.width,s.canvas.height),yt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:wt,disable:zt,bindFramebuffer:Te,drawBuffers:Gt,useProgram:Qt,setBlending:V,setMaterial:j,setFlipSided:ut,setCullFace:ot,setLineWidth:Ft,setPolygonOffset:vt,setScissorTest:Jt,activeTexture:ie,bindTexture:fe,unbindTexture:H,compressedTexImage2D:Se,compressedTexImage3D:ue,texImage2D:w,texImage3D:X,pixelStorei:rt,getParameter:ht,updateUBOMapping:Q,uniformBlockBinding:it,texStorage2D:ee,texStorage3D:D,texSubImage2D:Le,texSubImage3D:_t,compressedTexSubImage2D:ze,compressedTexSubImage3D:Wt,scissor:Mt,viewport:At,reset:St}}function tb(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,d=new Set,f,u=new WeakMap,g=new Set,m=new FinalizationRegistry(D=>g.delete(D)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,w){return p?new OffscreenCanvas(D,w):So("canvas")}function y(D,w,X){let ht=1,rt=ee(D);if((rt.width>X||rt.height>X)&&(ht=X/Math.max(rt.width,rt.height)),ht<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let Mt=Math.floor(ht*rt.width),At=Math.floor(ht*rt.height);f===void 0&&(f=x(Mt,At));let Q=w?x(Mt,At):f;return Q.width=Mt,Q.height=At,Q.getContext("2d").drawImage(D,0,0,Mt,At),qt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+Mt+"x"+At+")."),Q}else return"data"in D&&qt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),D;return D}function M(D){return D.generateMipmaps}function _(D){s.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(D,w,X,ht,rt,Mt=!1){if(D!==null){if(s[D]!==void 0)return s[D];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let At;ht&&(At=t.get("EXT_texture_norm16"),At||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=w;if(w===s.RED&&(X===s.FLOAT&&(Q=s.R32F),X===s.HALF_FLOAT&&(Q=s.R16F),X===s.UNSIGNED_BYTE&&(Q=s.R8),X===s.UNSIGNED_SHORT&&At&&(Q=At.R16_EXT),X===s.SHORT&&At&&(Q=At.R16_SNORM_EXT)),w===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(Q=s.R8UI),X===s.UNSIGNED_SHORT&&(Q=s.R16UI),X===s.UNSIGNED_INT&&(Q=s.R32UI),X===s.BYTE&&(Q=s.R8I),X===s.SHORT&&(Q=s.R16I),X===s.INT&&(Q=s.R32I)),w===s.RG&&(X===s.FLOAT&&(Q=s.RG32F),X===s.HALF_FLOAT&&(Q=s.RG16F),X===s.UNSIGNED_BYTE&&(Q=s.RG8),X===s.UNSIGNED_SHORT&&At&&(Q=At.RG16_EXT),X===s.SHORT&&At&&(Q=At.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(Q=s.RG8UI),X===s.UNSIGNED_SHORT&&(Q=s.RG16UI),X===s.UNSIGNED_INT&&(Q=s.RG32UI),X===s.BYTE&&(Q=s.RG8I),X===s.SHORT&&(Q=s.RG16I),X===s.INT&&(Q=s.RG32I)),w===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),X===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),X===s.UNSIGNED_INT&&(Q=s.RGB32UI),X===s.BYTE&&(Q=s.RGB8I),X===s.SHORT&&(Q=s.RGB16I),X===s.INT&&(Q=s.RGB32I)),w===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),X===s.UNSIGNED_INT&&(Q=s.RGBA32UI),X===s.BYTE&&(Q=s.RGBA8I),X===s.SHORT&&(Q=s.RGBA16I),X===s.INT&&(Q=s.RGBA32I)),w===s.RGB&&(X===s.UNSIGNED_SHORT&&At&&(Q=At.RGB16_EXT),X===s.SHORT&&At&&(Q=At.RGB16_SNORM_EXT),X===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),w===s.RGBA){let it=Mt?bo:ve.getTransfer(rt);X===s.FLOAT&&(Q=s.RGBA32F),X===s.HALF_FLOAT&&(Q=s.RGBA16F),X===s.UNSIGNED_BYTE&&(Q=it===Re?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT&&At&&(Q=At.RGBA16_EXT),X===s.SHORT&&At&&(Q=At.RGBA16_SNORM_EXT),X===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(D,w){let X;return D?w===null||w===dn||w===Fs?X=s.DEPTH24_STENCIL8:w===Ji?X=s.DEPTH32F_STENCIL8:w===Ir&&(X=s.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===dn||w===Fs?X=s.DEPTH_COMPONENT24:w===Ji?X=s.DEPTH_COMPONENT32F:w===Ir&&(X=s.DEPTH_COMPONENT16),X}function S(D,w){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==vi&&D.minFilter!==Ci?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function C(D){let w=new WeakRef(D);i.get(D).__ref=w,g.add(w),m.register(D,w,w)}function R(D){let w=i.get(D).__ref;w!==void 0&&(g.delete(w),m.unregister(w))}function I(D){F(D.target)}function L(D){T(D.target)}function F(D){D.removeEventListener("dispose",I),R(D),z(D),D.isVideoTexture&&h.delete(D),D.isHTMLTexture&&d.delete(D)}function T(D){D.removeEventListener("dispose",L),R(D),Y(D)}function N(){for(let D of g){let w=D.deref();w!==void 0&&(w.isRenderTarget===!0?T(w):F(w))}g.clear(),d.clear()}function z(D){let w=i.get(D);if(w.__webglInit===void 0)return;let X=D.source,ht=u.get(X);if(ht){let rt=ht[w.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&O(D),Object.keys(ht).length===0&&u.delete(X)}i.remove(D)}function O(D){let w=i.get(D);s.deleteTexture(w.__webglTexture);let X=D.source,ht=u.get(X);delete ht[w.__cacheKey],o.memory.textures--}function Y(D){let w=i.get(D);w.__depthDisposeCallback&&w.__depthDisposeCallback();let X=D.depthTexture;if(X&&X.renderTarget===D&&F(X),D.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(w.__webglFramebuffer[rt]))for(let Mt=0;Mt<w.__webglFramebuffer[rt].length;Mt++)s.deleteFramebuffer(w.__webglFramebuffer[rt][Mt]);else s.deleteFramebuffer(w.__webglFramebuffer[rt]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[rt])}else{if(Array.isArray(w.__webglFramebuffer))for(let rt=0;rt<w.__webglFramebuffer.length;rt++)s.deleteFramebuffer(w.__webglFramebuffer[rt]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let rt=0;rt<w.__webglColorRenderbuffer.length;rt++)w.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[rt]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ht=D.textures;for(let rt=0,Mt=ht.length;rt<Mt;rt++){let At=i.get(ht[rt]);At.__webglTexture&&(s.deleteTexture(At.__webglTexture),o.memory.textures--),i.remove(ht[rt])}i.remove(D)}let G=0;function $(){G=0}function et(){return G}function dt(D){G=D}function xt(){let D=G;return D>=n.maxTextures&&qt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+n.maxTextures),G+=1,D}function K(D){let w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.mipmapsAutoUpdate),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function yt(D,w){let X=i.get(D);if(D.isVideoTexture&&ze(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&X.__version!==D.version){let ht=D.image;if(ht===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{j(X,D,w);return}}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+w)}function Ct(D,w){let X=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){j(X,D,w);return}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+w)}function kt(D,w){let X=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){j(X,D,w);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+w)}function wt(D,w){let X=i.get(D);if(D.version>0&&X.__version!==D.version){ut(X,D,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+w)}let zt={[dr]:s.REPEAT,[yn]:s.CLAMP_TO_EDGE,[Ll]:s.MIRRORED_REPEAT},Te={[vi]:s.NEAREST,[zp]:s.NEAREST_MIPMAP_NEAREST,[oa]:s.NEAREST_MIPMAP_LINEAR,[Ci]:s.LINEAR,[uc]:s.LINEAR_MIPMAP_NEAREST,[un]:s.LINEAR_MIPMAP_LINEAR},Gt={[Xp]:s.NEVER,[hd]:s.ALWAYS,[qp]:s.LESS,[ld]:s.LEQUAL,[Yp]:s.EQUAL,[cd]:s.GEQUAL,[$p]:s.GREATER,[Zp]:s.NOTEQUAL};function Qt(D,w){if(w.type===Ji&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ci||w.magFilter===uc||w.magFilter===oa||w.magFilter===un||w.minFilter===Ci||w.minFilter===uc||w.minFilter===oa||w.minFilter===un)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,zt[w.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,zt[w.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,zt[w.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Te[w.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Te[w.minFilter]),w.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Gt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===vi||w.minFilter!==oa&&w.minFilter!==un||w.type===Ji&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function te(D,w){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",I),C(w));let ht=w.source,rt=u.get(ht);rt===void 0&&(rt={},u.set(ht,rt));let Mt=K(w);if(Mt!==D.__cacheKey){rt[Mt]===void 0&&(rt[Mt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),rt[Mt].usedTimes++;let At=rt[D.__cacheKey];At!==void 0&&(rt[D.__cacheKey].usedTimes--,At.usedTimes===0&&O(w)),D.__cacheKey=Mt,D.__webglTexture=rt[Mt].texture}return X}function B(D,w,X){return Math.floor(Math.floor(D/X)/w)}function V(D,w,X,ht){let Mt=D.updateRanges;if(Mt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,X,ht,w.data);else{Mt.sort((U,nt)=>U.start-nt.start);let At=0;for(let U=1;U<Mt.length;U++){let nt=Mt[At],J=Mt[U],Et=nt.start+nt.count,gt=B(J.start,w.width,4),bt=B(nt.start,w.width,4);J.start<=Et+1&&gt===bt&&B(J.start+J.count-1,w.width,4)===gt?nt.count=Math.max(nt.count,J.start+J.count-nt.start):(++At,Mt[At]=J)}Mt.length=At+1;let Q=e.getParameter(s.UNPACK_ROW_LENGTH),it=e.getParameter(s.UNPACK_SKIP_PIXELS),St=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let U=0,nt=Mt.length;U<nt;U++){let J=Mt[U],Et=Math.floor(J.start/4),gt=Math.ceil(J.count/4),bt=Et%w.width,Vt=Math.floor(Et/w.width),pe=gt,ft=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,bt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Vt),e.texSubImage2D(s.TEXTURE_2D,0,bt,Vt,pe,ft,X,ht,w.data)}D.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Q),e.pixelStorei(s.UNPACK_SKIP_PIXELS,it),e.pixelStorei(s.UNPACK_SKIP_ROWS,St)}}function j(D,w,X){let ht=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ht=s.TEXTURE_3D);let rt=te(D,w),Mt=w.source;e.bindTexture(ht,D.__webglTexture,s.TEXTURE0+X);let At=i.get(Mt);if(Mt.version!==At.__version||rt===!0){if(e.activeTexture(s.TEXTURE0+X),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ft=ve.getPrimaries(ve.workingColorSpace),Xt=w.colorSpace===Xn?null:ve.getPrimaries(w.colorSpace),de=w.colorSpace===Xn||ft===Xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let it=y(w.image,!1,n.maxTextureSize);it=Wt(w,it);let St=r.convert(w.format,w.colorSpace),U=r.convert(w.type),nt=E(w.internalFormat,St,U,w.normalized,w.colorSpace,w.isVideoTexture);Qt(ht,w);let J,Et=w.mipmaps,gt=w.isVideoTexture!==!0,bt=At.__version===void 0||rt===!0,Vt=Mt.dataReady,pe=S(w,it);if(w.isDepthTexture)nt=v(w.format===Wn,w.type),bt&&(gt?e.texStorage2D(s.TEXTURE_2D,1,nt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,nt,it.width,it.height,0,St,U,null));else if(w.isDataTexture)if(Et.length>0){gt&&bt&&e.texStorage2D(s.TEXTURE_2D,pe,nt,Et[0].width,Et[0].height);for(let ft=0,Xt=Et.length;ft<Xt;ft++)J=Et[ft],gt?Vt&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,J.width,J.height,St,U,J.data):e.texImage2D(s.TEXTURE_2D,ft,nt,J.width,J.height,0,St,U,J.data);w.generateMipmaps=!1}else gt?(bt&&e.texStorage2D(s.TEXTURE_2D,pe,nt,it.width,it.height),Vt&&V(w,it,St,U)):e.texImage2D(s.TEXTURE_2D,0,nt,it.width,it.height,0,St,U,it.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){gt&&bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pe,nt,Et[0].width,Et[0].height,it.depth);for(let ft=0,Xt=Et.length;ft<Xt;ft++)if(J=Et[ft],w.format!==fn)if(St!==null)if(gt){if(Vt)if(w.layerUpdates.size>0){let de=Md(J.width,J.height,w.format,w.type);for(let Pt of w.layerUpdates){let Ne=J.data.subarray(Pt*de/J.data.BYTES_PER_ELEMENT,(Pt+1)*de/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,Pt,J.width,J.height,1,St,Ne)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,J.width,J.height,it.depth,St,J.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,nt,J.width,J.height,it.depth,0,J.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?Vt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,J.width,J.height,it.depth,St,U,J.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ft,nt,J.width,J.height,it.depth,0,St,U,J.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{gt&&bt&&e.texStorage2D(s.TEXTURE_2D,pe,nt,Et[0].width,Et[0].height);for(let ft=0,Xt=Et.length;ft<Xt;ft++)J=Et[ft],w.format!==fn?St!==null?gt?Vt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,J.width,J.height,St,J.data):e.compressedTexImage2D(s.TEXTURE_2D,ft,nt,J.width,J.height,0,J.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?Vt&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,J.width,J.height,St,U,J.data):e.texImage2D(s.TEXTURE_2D,ft,nt,J.width,J.height,0,St,U,J.data)}else if(w.isDataArrayTexture)if(gt){if(bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pe,nt,it.width,it.height,it.depth),Vt)if(w.layerUpdates.size>0){let ft=Md(it.width,it.height,w.format,w.type);for(let Xt of w.layerUpdates){let de=it.data.subarray(Xt*ft/it.data.BYTES_PER_ELEMENT,(Xt+1)*ft/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Xt,it.width,it.height,1,St,U,de)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,St,U,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,it.width,it.height,it.depth,0,St,U,it.data);else if(w.isData3DTexture)gt?(bt&&e.texStorage3D(s.TEXTURE_3D,pe,nt,it.width,it.height,it.depth),Vt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,St,U,it.data)):e.texImage3D(s.TEXTURE_3D,0,nt,it.width,it.height,it.depth,0,St,U,it.data);else if(w.isFramebufferTexture){if(bt)if(gt)e.texStorage2D(s.TEXTURE_2D,pe,nt,it.width,it.height);else{let ft=it.width,Xt=it.height;for(let de=0;de<pe;de++)e.texImage2D(s.TEXTURE_2D,de,nt,ft,Xt,0,St,U,null),ft>>=1,Xt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){let ft=s.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),it.parentNode!==ft){ft.appendChild(it),d.add(w),ft.onpaint=Xt=>{let de=Xt.changedElements;for(let Pt of d)de.includes(Pt.image)&&(Pt.needsUpdate=!0)},ft.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,it);else{let de=s.RGBA,Pt=s.RGBA,Ne=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,de,Pt,Ne,it)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Et.length>0){if(gt&&bt){let ft=ee(Et[0]);e.texStorage2D(s.TEXTURE_2D,pe,nt,ft.width,ft.height)}for(let ft=0,Xt=Et.length;ft<Xt;ft++)J=Et[ft],gt?Vt&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,St,U,J):e.texImage2D(s.TEXTURE_2D,ft,nt,St,U,J);w.generateMipmaps=!1}else if(gt){if(bt){let ft=ee(it);e.texStorage2D(s.TEXTURE_2D,pe,nt,ft.width,ft.height)}Vt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,U,it)}else e.texImage2D(s.TEXTURE_2D,0,nt,St,U,it);M(w)&&w.mipmapsAutoUpdate===!0&&_(ht),At.__version=Mt.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ut(D,w,X){if(w.image.length!==6)return;let ht=te(D,w),rt=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+X);let Mt=i.get(rt);if(rt.version!==Mt.__version||ht===!0){e.activeTexture(s.TEXTURE0+X);let At=ve.getPrimaries(ve.workingColorSpace),Q=w.colorSpace===Xn?null:ve.getPrimaries(w.colorSpace),it=w.colorSpace===Xn||At===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let St=w.isCompressedTexture||w.image[0].isCompressedTexture,U=w.image[0]&&w.image[0].isDataTexture,nt=[];for(let Pt=0;Pt<6;Pt++)!St&&!U?nt[Pt]=y(w.image[Pt],!0,n.maxCubemapSize):nt[Pt]=U?w.image[Pt].image:w.image[Pt],nt[Pt]=Wt(w,nt[Pt]);let J=nt[0],Et=r.convert(w.format,w.colorSpace),gt=r.convert(w.type),bt=E(w.internalFormat,Et,gt,w.normalized,w.colorSpace),Vt=w.isVideoTexture!==!0,pe=Mt.__version===void 0||ht===!0,ft=rt.dataReady,Xt=S(w,J);Qt(s.TEXTURE_CUBE_MAP,w);let de;if(w.isDepthTexture){if(bt=v(w.format===Wn,w.type),pe)if(Vt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,bt,J.width,J.height);else for(let Pt=0;Pt<6;Pt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,bt,J.width,J.height,0,Et,gt,null)}else if(St){Vt&&pe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Xt,bt,J.width,J.height);for(let Pt=0;Pt<6;Pt++){de=nt[Pt].mipmaps;for(let Ne=0;Ne<de.length;Ne++){let mi=de[Ne];w.format!==fn?Et!==null?Vt?ft&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ne,0,0,mi.width,mi.height,Et,mi.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ne,bt,mi.width,mi.height,0,mi.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ne,0,0,mi.width,mi.height,Et,gt,mi.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ne,bt,mi.width,mi.height,0,Et,gt,mi.data)}}}else{if(de=w.mipmaps,Vt&&pe){de.length>0&&Xt++;let Pt=ee(nt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Xt,bt,Pt.width,Pt.height)}for(let Pt=0;Pt<6;Pt++)if(U){Vt?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,nt[Pt].width,nt[Pt].height,Et,gt,nt[Pt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,bt,nt[Pt].width,nt[Pt].height,0,Et,gt,nt[Pt].data);for(let Ne=0;Ne<de.length;Ne++){let $n=de[Ne].image[Pt].image;Vt?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ne+1,0,0,$n.width,$n.height,Et,gt,$n.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ne+1,bt,$n.width,$n.height,0,Et,gt,$n.data)}}else{Vt?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,Et,gt,nt[Pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,bt,Et,gt,nt[Pt]);for(let Ne=0;Ne<de.length;Ne++){let mi=de[Ne];Vt?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ne+1,0,0,Et,gt,mi.image[Pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ne+1,bt,Et,gt,mi.image[Pt])}}}M(w)&&w.mipmapsAutoUpdate===!0&&_(s.TEXTURE_CUBE_MAP),Mt.__version=rt.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ot(D,w,X,ht,rt,Mt){let At=r.convert(X.format,X.colorSpace),Q=r.convert(X.type),it=E(X.internalFormat,At,Q,X.normalized,X.colorSpace),St=i.get(w),U=i.get(X);if(U.__renderTarget=w,!St.__hasExternalTextures){let nt=Math.max(1,w.width>>Mt),J=Math.max(1,w.height>>Mt);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,Mt,it,nt,J,w.depth,0,At,Q,null):e.texImage2D(rt,Mt,it,nt,J,0,At,Q,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),_t(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,rt,U.__webglTexture,0,Le(w)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,rt,U.__webglTexture,Mt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(D,w,X){if(s.bindRenderbuffer(s.RENDERBUFFER,D),w.depthBuffer){let ht=w.depthTexture,rt=ht&&ht.isDepthTexture?ht.type:null,Mt=v(w.stencilBuffer,rt),At=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;_t(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le(w),Mt,w.width,w.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le(w),Mt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Mt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,At,s.RENDERBUFFER,D)}else{let ht=w.textures;for(let rt=0;rt<ht.length;rt++){let Mt=ht[rt],At=r.convert(Mt.format,Mt.colorSpace),Q=r.convert(Mt.type),it=E(Mt.internalFormat,At,Q,Mt.normalized,Mt.colorSpace);_t(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le(w),it,w.width,w.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le(w),it,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,it,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function vt(D,w,X){let ht=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=i.get(w.depthTexture);rt.__renderTarget=w;let Mt=ht?w.depthTexture.image[0]:w.depthTexture.image;(!rt.__webglTexture||Mt.width!==w.width||Mt.height!==w.height)&&(Mt.width=w.width,Mt.height=w.height,w.depthTexture.needsUpdate=!0),ht?wt(w.depthTexture,0):yt(w.depthTexture,0);let At=rt.__webglTexture,Q=Le(w),it=ht?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,St=w.depthTexture.format===Wn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Nn)_t(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,St,it,At,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,St,it,At,0);else if(w.depthTexture.format===Wn)_t(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,St,it,At,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,St,it,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Jt(D){let w=i.get(D),X=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){let ht=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ht){let rt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ht.removeEventListener("dispose",rt)};ht.addEventListener("dispose",rt),w.__depthDisposeCallback=rt}w.__boundDepthTexture=ht}if(D.depthTexture&&!w.__autoAllocateDepthBuffer)if(X)for(let ht=0;ht<6;ht++)vt(w.__webglFramebuffer[ht],D,ht);else D.texture.mipmaps.length>0?vt(w.__webglFramebuffer[0],D,0):vt(w.__webglFramebuffer,D,0);else if(X){w.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ht]),w.__webglDepthbuffer[ht]===void 0)w.__webglDepthbuffer[ht]=s.createRenderbuffer(),Ft(w.__webglDepthbuffer[ht],D,!1);else{let rt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=w.__webglDepthbuffer[ht];s.bindRenderbuffer(s.RENDERBUFFER,Mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,Mt)}}else if(D.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Ft(w.__webglDepthbuffer,D,!1);else{let rt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,Mt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(D,w,X){let ht=i.get(D);w!==void 0&&ot(ht.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Jt(D)}function fe(D){let w=D.texture,X=i.get(D),ht=i.get(w);D.addEventListener("dispose",L),C(D);let rt=D.textures,Mt=D.isWebGLCubeRenderTarget===!0,At=rt.length>1;if(At||(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=w.version,o.memory.textures++),Mt){X.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(w.mipmaps.length>0){X.__webglFramebuffer[Q]=[];for(let it=0;it<w.mipmaps.length;it++)X.__webglFramebuffer[Q][it]=s.createFramebuffer()}else X.__webglFramebuffer[Q]=s.createFramebuffer()}else{if(w.mipmaps.length>0){X.__webglFramebuffer=[];for(let Q=0;Q<w.mipmaps.length;Q++)X.__webglFramebuffer[Q]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(At)for(let Q=0,it=rt.length;Q<it;Q++){let St=i.get(rt[Q]);St.__webglTexture===void 0&&(St.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&_t(D)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Q=0;Q<rt.length;Q++){let it=rt[Q];X.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[Q]);let St=r.convert(it.format,it.colorSpace),U=r.convert(it.type),nt=E(it.internalFormat,St,U,it.normalized,it.colorSpace,D.isXRRenderTarget===!0),J=Le(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,J,nt,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,X.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Ft(X.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),Qt(s.TEXTURE_CUBE_MAP,w);for(let Q=0;Q<6;Q++)if(w.mipmaps.length>0)for(let it=0;it<w.mipmaps.length;it++)ot(X.__webglFramebuffer[Q][it],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,it);else ot(X.__webglFramebuffer[Q],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);M(w)?_(s.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(At){for(let Q=0,it=rt.length;Q<it;Q++){let St=rt[Q],U=i.get(St),nt=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(nt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(nt,U.__webglTexture),Qt(nt,St),ot(X.__webglFramebuffer,D,St,s.COLOR_ATTACHMENT0+Q,nt,0),M(St)&&_(nt)}e.unbindTexture()}else{let Q=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Q=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Q,ht.__webglTexture),Qt(Q,w),w.mipmaps.length>0)for(let it=0;it<w.mipmaps.length;it++)ot(X.__webglFramebuffer[it],D,w,s.COLOR_ATTACHMENT0,Q,it);else ot(X.__webglFramebuffer,D,w,s.COLOR_ATTACHMENT0,Q,0);M(w)?_(Q):w.mipmaps.length>0&&s.texParameteri(Q,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}D.depthBuffer&&Jt(D)}function H(D){let w=D.textures;for(let X=0,ht=w.length;X<ht;X++){let rt=w[X];if(M(rt)&&rt.mipmapsAutoUpdate===!0){let Mt=b(D),At=i.get(rt).__webglTexture;e.bindTexture(Mt,At),_(Mt),e.unbindTexture()}}}let Se=[];function ue(D){if(D.samples>0){if(_t(D)===!1){let w=D.textures,X=D.width,ht=D.height,rt=s.COLOR_BUFFER_BIT,Mt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=i.get(D),Q=w.length>1;if(Q)for(let St=0;St<w.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let St=0;St<w.length;St++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),Q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[St]);let U=i.get(w[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,U,0)}s.blitFramebuffer(0,0,X,ht,0,0,X,ht,rt,s.NEAREST),l===!0&&(Se.length=0,Se.push(s.COLOR_ATTACHMENT0+St),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&Se.push(Mt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let St=0;St<w.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,At.__webglColorRenderbuffer[St]);let U=i.get(w[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,U,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let w=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Le(D){return Math.min(n.maxSamples,D.samples)}function _t(D){let w=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ze(D){let w=o.render.frame;h.get(D)!==w&&(h.set(D,w),D.update())}function Wt(D,w){let X=D.colorSpace,ht=D.format,rt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==Mo&&X!==Xn&&(ve.getTransfer(X)===Re?(ht!==fn||rt!==Fi)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",X)),w}function ee(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=xt,this.resetTextureUnits=$,this.getTextureUnits=et,this.setTextureUnits=dt,this.setTexture2D=yt,this.setTexture2DArray=Ct,this.setTexture3D=kt,this.setTextureCube=wt,this.rebindTextures=ie,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=_t,this.dispose=N}function eb(s,t){function e(i,n=Xn){let r,o=ve.getTransfer(n);if(i===Fi)return s.UNSIGNED_BYTE;if(i===fc)return s.UNSIGNED_SHORT_4_4_4_4;if(i===pc)return s.UNSIGNED_SHORT_5_5_5_1;if(i===sd)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===rd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===id)return s.BYTE;if(i===nd)return s.SHORT;if(i===Ir)return s.UNSIGNED_SHORT;if(i===dc)return s.INT;if(i===dn)return s.UNSIGNED_INT;if(i===Ji)return s.FLOAT;if(i===ii)return s.HALF_FLOAT;if(i===od)return s.ALPHA;if(i===ad)return s.RGB;if(i===fn)return s.RGBA;if(i===Nn)return s.DEPTH_COMPONENT;if(i===Wn)return s.DEPTH_STENCIL;if(i===mc)return s.RED;if(i===gc)return s.RED_INTEGER;if(i===ls)return s.RG;if(i===xc)return s.RG_INTEGER;if(i===vc)return s.RGBA_INTEGER;if(i===aa||i===la||i===ca||i===ha)if(o===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yc||i===_c||i===Mc||i===bc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sc||i===Ec||i===wc||i===Tc||i===Ac||i===ua||i===Rc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Sc||i===Ec)return o===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Tc)return r.COMPRESSED_R11_EAC;if(i===Ac)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ua)return r.COMPRESSED_RG11_EAC;if(i===Rc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Cc||i===Pc||i===Ic||i===Dc||i===Fc||i===Lc||i===Nc||i===Uc||i===Bc||i===Oc||i===Hc||i===kc||i===zc||i===Gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Cc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ic)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vc||i===Wc||i===Xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Vc)return o===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qc||i===Yc||i===da||i===$c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===qc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nb=`
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

}`,Nd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Lo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new xe({vertexShader:ib,fragmentShader:nb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new st(new Fe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ud=class extends _n{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null,m=typeof XRWebGLBinding<"u",p=new Nd,x={},y=e.getContextAttributes(),M=null,_=null,b=[],E=[],v=new tt,S=null,C=null,R=new ai;R.viewport=new De;let I=new ai;I.viewport=new De;let L=[R,I],F=new rc,T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let yt=b[K];return yt===void 0&&(yt=new vr,b[K]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(K){let yt=b[K];return yt===void 0&&(yt=new vr,b[K]=yt),yt.getGripSpace()},this.getHand=function(K){let yt=b[K];return yt===void 0&&(yt=new vr,b[K]=yt),yt.getHandSpace()};function z(K){let yt=E.indexOf(K.inputSource);if(yt===-1)return;let Ct=b[yt];Ct!==void 0&&(Ct.update(K.inputSource,K.frame,c||o),Ct.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",Y);for(let K=0;K<b.length;K++){let yt=E[K];yt!==null&&(E[K]=null,b[K].disconnect(yt))}T=null,N=null,p.reset();for(let K in x)delete x[K];if(t.setRenderTarget(M),u=null,f=null,d=null,n=null,_=null,xt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(v.width,v.height,!1),C!==null){let K=C.camera;K.fov=C.fov,K.zoom=C.zoom,K.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&m&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(M=t.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",O),n.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(v),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,kt=null,wt=null;y.depth&&(wt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=y.stencil?Wn:Nn,kt=y.stencil?Fs:dn);let zt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(zt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Ke(f.textureWidth,f.textureHeight,{format:fn,type:Fi,depthTexture:new Bn(f.textureWidth,f.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ct={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(n,e,Ct),n.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),_=new Ke(u.framebufferWidth,u.framebufferHeight,{format:fn,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),xt.setContext(n),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(K){for(let yt=0;yt<K.removed.length;yt++){let Ct=K.removed[yt],kt=E.indexOf(Ct);kt>=0&&(E[kt]=null,b[kt].disconnect(Ct))}for(let yt=0;yt<K.added.length;yt++){let Ct=K.added[yt],kt=E.indexOf(Ct);if(kt===-1){for(let zt=0;zt<b.length;zt++)if(zt>=E.length){E.push(Ct),kt=zt;break}else if(E[zt]===null){E[zt]=Ct,kt=zt;break}if(kt===-1)break}let wt=b[kt];wt&&wt.connect(Ct)}}function G(K,yt){yt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(yt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let yt=K.near,Ct=K.far;p.texture!==null&&(p.depthNear>0&&(yt=p.depthNear),p.depthFar>0&&(Ct=p.depthFar)),F.near=I.near=R.near=yt,F.far=I.far=R.far=Ct,(T!==F.near||N!==F.far)&&(n.updateRenderState({depthNear:F.near,depthFar:F.far}),T=F.near,N=F.far),F.layers.mask=K.layers.mask|6,R.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;let kt=K.parent,wt=F.cameras;G(F,kt);for(let zt=0;zt<wt.length;zt++)G(wt[zt],kt);F.projectionMatrix.copy(R.projectionMatrix),F.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&K.isPerspectiveCamera&&(C={camera:K,fov:K.fov,zoom:K.zoom}),$(K,F,kt)};function $(K,yt,Ct){Ct===null?K.matrix.copy(yt.matrixWorld):(K.matrix.copy(Ct.matrixWorld),K.matrix.invert(),K.matrix.multiply(yt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(yt.projectionMatrix),K.projectionMatrixInverse.copy(yt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=mr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(K){return x[K]};let et=null;function dt(K,yt){if(h=yt.getViewerPose(c||o),g=yt,h!==null){let Ct=h.views;u!==null&&(t.setRenderTargetFramebuffer(_,u.framebuffer),t.setRenderTarget(_));let kt=!1;Ct.length!==F.cameras.length&&(F.cameras.length=0,kt=!0);for(let Gt=0;Gt<Ct.length;Gt++){let Qt=Ct[Gt],te=null;if(u!==null)te=u.getViewport(Qt);else{let V=d.getViewSubImage(f,Qt);te=V.viewport,Gt===0&&(t.setRenderTargetTextures(_,V.colorTexture,V.depthStencilTexture),t.setRenderTarget(_))}let B=L[Gt];B===void 0&&(B=new ai,B.layers.enable(Gt),B.viewport=new De,L[Gt]=B),B.matrix.fromArray(Qt.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(Qt.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(te.x,te.y,te.width,te.height),Gt===0&&(F.matrix.copy(B.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),kt===!0&&F.cameras.push(B)}let wt=n.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&m){d=i.getBinding();let Gt=d.getDepthInformation(Ct[0]);Gt&&Gt.isValid&&Gt.texture&&p.init(Gt,n.renderState)}if(wt&&wt.includes("camera-access")&&m){t.state.unbindTexture(),d=i.getBinding();for(let Gt=0;Gt<Ct.length;Gt++){let Qt=Ct[Gt].camera;if(Qt){let te=x[Qt];te||(te=new Lo,x[Qt]=te);let B=d.getCameraImage(Qt);te.sourceTexture=B}}}}for(let Ct=0;Ct<b.length;Ct++){let kt=E[Ct],wt=b[Ct];kt!==null&&wt!==void 0&&wt.update(kt,yt,c||o)}et&&et(K,yt),yt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:yt}),g=null}let xt=new Cm;xt.setAnimationLoop(dt),this.setAnimationLoop=function(K){et=K},this.dispose=function(){}}},sb=new Yt,Hm=new ne;Hm.set(-1,0,0,0,1,0,0,0,1);function rb(s,t){function e(p,x){p.matrixAutoUpdate===!0&&p.updateMatrix(),x.value.copy(p.matrix)}function i(p,x){x.color.getRGB(p.fogColor.value,vd(s)),x.isFog?(p.fogNear.value=x.near,p.fogFar.value=x.far):x.isFogExp2&&(p.fogDensity.value=x.density)}function n(p,x,y,M,_){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(p,x):x.isMeshLambertMaterial?(r(p,x),x.envMap&&(p.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(p,x),d(p,x)):x.isMeshPhongMaterial?(r(p,x),h(p,x),x.envMap&&(p.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(p,x),f(p,x),x.isMeshPhysicalMaterial&&u(p,x,_)):x.isMeshMatcapMaterial?(r(p,x),g(p,x)):x.isMeshDepthMaterial?r(p,x):x.isMeshDistanceMaterial?(r(p,x),m(p,x)):x.isMeshNormalMaterial?r(p,x):x.isLineBasicMaterial?(o(p,x),x.isLineDashedMaterial&&a(p,x)):x.isPointsMaterial?l(p,x,y,M):x.isSpriteMaterial?c(p,x):x.isShadowMaterial?(p.color.value.copy(x.color),p.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(p,x){p.opacity.value=x.opacity,x.color&&p.diffuse.value.copy(x.color),x.emissive&&p.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(p.map.value=x.map,e(x.map,p.mapTransform)),x.alphaMap&&(p.alphaMap.value=x.alphaMap,e(x.alphaMap,p.alphaMapTransform)),x.bumpMap&&(p.bumpMap.value=x.bumpMap,e(x.bumpMap,p.bumpMapTransform),p.bumpScale.value=x.bumpScale,x.side===je&&(p.bumpScale.value*=-1)),x.normalMap&&(p.normalMap.value=x.normalMap,e(x.normalMap,p.normalMapTransform),p.normalScale.value.copy(x.normalScale),x.side===je&&p.normalScale.value.negate()),x.displacementMap&&(p.displacementMap.value=x.displacementMap,e(x.displacementMap,p.displacementMapTransform),p.displacementScale.value=x.displacementScale,p.displacementBias.value=x.displacementBias),x.emissiveMap&&(p.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,p.emissiveMapTransform)),x.specularMap&&(p.specularMap.value=x.specularMap,e(x.specularMap,p.specularMapTransform)),x.alphaTest>0&&(p.alphaTest.value=x.alphaTest);let y=t.get(x),M=y.envMap,_=y.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(sb.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Hm),p.reflectivity.value=x.reflectivity,p.ior.value=x.ior,p.refractionRatio.value=x.refractionRatio),x.lightMap&&(p.lightMap.value=x.lightMap,p.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,p.lightMapTransform)),x.aoMap&&(p.aoMap.value=x.aoMap,p.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,p.aoMapTransform))}function o(p,x){p.diffuse.value.copy(x.color),p.opacity.value=x.opacity,x.map&&(p.map.value=x.map,e(x.map,p.mapTransform))}function a(p,x){p.dashSize.value=x.dashSize,p.totalSize.value=x.dashSize+x.gapSize,p.scale.value=x.scale}function l(p,x,y,M){p.diffuse.value.copy(x.color),p.opacity.value=x.opacity,p.size.value=x.size*y,p.scale.value=M*.5,x.map&&(p.map.value=x.map,e(x.map,p.uvTransform)),x.alphaMap&&(p.alphaMap.value=x.alphaMap,e(x.alphaMap,p.alphaMapTransform)),x.alphaTest>0&&(p.alphaTest.value=x.alphaTest)}function c(p,x){p.diffuse.value.copy(x.color),p.opacity.value=x.opacity,p.rotation.value=x.rotation,x.map&&(p.map.value=x.map,e(x.map,p.mapTransform)),x.alphaMap&&(p.alphaMap.value=x.alphaMap,e(x.alphaMap,p.alphaMapTransform)),x.alphaTest>0&&(p.alphaTest.value=x.alphaTest)}function h(p,x){p.specular.value.copy(x.specular),p.shininess.value=Math.max(x.shininess,1e-4)}function d(p,x){x.gradientMap&&(p.gradientMap.value=x.gradientMap)}function f(p,x){p.metalness.value=x.metalness,x.metalnessMap&&(p.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,p.metalnessMapTransform)),p.roughness.value=x.roughness,x.roughnessMap&&(p.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,p.roughnessMapTransform)),x.envMap&&(p.envMapIntensity.value=x.envMapIntensity)}function u(p,x,y){p.ior.value=x.ior,x.diffuseRoughness>0&&(p.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=x.diffuseRoughnessMap,e(x.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),x.sheen>0&&(p.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),p.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(p.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,p.sheenColorMapTransform)),x.sheenRoughnessMap&&(p.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,p.sheenRoughnessMapTransform))),x.clearcoat>0&&(p.clearcoat.value=x.clearcoat,p.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(p.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,p.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(p.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===je&&p.clearcoatNormalScale.value.negate())),x.dispersion>0&&(p.dispersion.value=x.dispersion),x.retroreflectivity>0&&(p.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(p.iridescence.value=x.iridescence,p.iridescenceIOR.value=x.iridescenceIOR,p.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(p.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,p.iridescenceMapTransform)),x.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),x.transmission>0&&(p.transmission.value=x.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),x.transmissionMap&&(p.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,p.transmissionMapTransform)),p.thickness.value=x.thickness,x.thicknessMap&&(p.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=x.attenuationDistance,p.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(p.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(p.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=x.specularIntensity,p.specularColor.value.copy(x.specularColor),x.specularColorMap&&(p.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,p.specularColorMapTransform)),x.specularIntensityMap&&(p.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,x){x.matcap&&(p.matcap.value=x.matcap)}function m(p,x){let y=t.get(x).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function ob(s,t,e,i){let n={},r={};function o(y,M){let _=M.program;i.uniformBlockBinding(y,_,n[y.id])}function a(y,M){let _=n[y.id];_===void 0&&(g(y),_=l(y),n[y.id]=_,y.addEventListener("dispose",p));let b=M.program;i.updateUBOMapping(y,b);let E=t.render.frame;r[y.id]!==E&&(c(y),r[y.id]=E)}function l(y){let M=s.createBuffer(),_=y.__size,b=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,_,b),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function c(y){let M=n[y.id],_=y.uniforms,b=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,v=_.length;E<v;E++){let S=_[E];if(Array.isArray(S))for(let C=0,R=S.length;C<R;C++)h(S[C],E,C,b);else h(S,E,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,M,_,b){if(f(y,M,_,b)===!0){let E=y.__offset,v=y.value;if(Array.isArray(v)){let S=0;for(let C=0;C<v.length;C++){let R=v[C],I=m(R,!0);d(R,y.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,y.__data)}}function d(y,M,_){typeof y=="number"||typeof y=="boolean"?M[_]=y:y.isMatrix3?(M[_]=y.elements[0],M[_+1]=y.elements[1],M[_+2]=y.elements[2],M[_+3]=0,M[_+4]=y.elements[3],M[_+5]=y.elements[4],M[_+6]=y.elements[5],M[_+7]=0,M[_+8]=y.elements[6],M[_+9]=y.elements[7],M[_+10]=y.elements[8],M[_+11]=0):ArrayBuffer.isView(y)?M.set(y.subarray(0,M.length-_),_):y.toArray(M,_)}function f(y,M,_,b){let E=y.value,v=M+"_"+_;if(Array.isArray(E)){b[v]===void 0&&(b[v]=[]);let S=b[v],C=!1;for(let R=0;R<E.length;R++)u(E[R],S,R)===!0&&(C=!0);return C}return u(E,b,v)}function u(y,M,_){if(M[_]===void 0)return typeof y=="number"||typeof y=="boolean"?M[_]=y:ArrayBuffer.isView(y)?M[_]=y.slice():M[_]=y.clone(),!0;{let b=M[_];if(typeof y=="number"||typeof y=="boolean"){if(b!==y)return M[_]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(b.equals(y)===!1)return b.copy(y),!0}}return!1}function g(y){let M=y.uniforms,_=0,b=16;for(let v=0,S=M.length;v<S;v++){let C=Array.isArray(M[v])?M[v]:[M[v]];for(let R=0,I=C.length;R<I;R++){let L=C[R],F=Array.isArray(L.value)?L.value:[L.value],T=Array.isArray(M[v])||Array.isArray(L.value),N=_;for(let O=0,Y=F.length;O<Y;O++){let G=F[O],$=m(G,T),et=_%b,dt=et%$.boundary,xt=et+dt;_+=dt,xt!==0&&b-xt<$.storage&&(_+=b-xt),O===0&&(N=_),_+=$.storage}let z=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new z((_-N)/Float32Array.BYTES_PER_ELEMENT),L.__offset=N}}let E=_%b;return E>0&&(_+=b-E),y.__size=_,y.__cache={},this}function m(y,M){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=16,_.storage=48):y.isMatrix4?(_.boundary=16,_.storage=64):y.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(_.boundary=16,_.storage=y.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",y),M===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function p(y){let M=y.target;M.removeEventListener("dispose",p),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function x(){for(let y in n)s.deleteBuffer(n[y]);n={},r={}}return{bind:o,update:a,dispose:x}}var ab=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bn=null;function lb(){return bn===null&&(bn=new Io(ab,16,16,ls,ii),bn.name="DFG_LUT",bn.minFilter=Ci,bn.magFilter=Ci,bn.wrapS=yn,bn.wrapT=yn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}var cs=class{constructor(t={}){let{canvas:e=Kp(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Fi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let m=u,p=new Set([vc,xc,gc]),x=new Set([Fi,dn,Ir,Fs,fc,pc]),y=new Uint32Array(4),M=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},b=null,E=null,v=[],S=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,L=null,F=null,T=null,N=null;this._outputColorSpace=Ie;let z=0,O=0,Y=null,G=-1,$=null,et=new De,dt=new De,xt=null,K=new ct(0),yt=0,Ct=e.width,kt=e.height,wt=1,zt=null,Te=null,Gt=new De(0,0,Ct,kt),Qt=new De(0,0,Ct,kt),te=!1,B=new es,V=new Hl,j=!1,ut=!1,ot=new Yt,Ft=new P,vt=new De,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function fe(){return Y===null?wt:1}let H=i;function Se(A,k){return e.getContext(A,k)}let ue,Le,_t,ze,Wt,ee,D,w,X,ht,rt,Mt,At,Q,it,St,U,nt,J,Et,gt,bt,Vt;try{let A={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),H===null){let k="webgl2";if(H=Se(k,A),H===null)throw Se(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pe()}catch(A){throw e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),Kt("WebGLRenderer: "+A.message),A}function pe(){ue=new yM(H),ue.init(),gt=new eb(H,ue),Le=new lM(H,ue,t,gt),_t=new Q1(H,ue),Le.reversedDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),F=H.createFramebuffer(),T=H.createFramebuffer(),N=H.createFramebuffer(),ze=new bM(H),Wt=new H1,ee=new tb(H,ue,_t,Wt,Le,gt,ze),D=new vM(R),w=new Ev(H),bt=new oM(H,w),X=new _M(H,w,ze,bt),ht=new EM(H,X,w,bt,ze),nt=new SM(H,Le,ee),it=new cM(Wt),rt=new O1(R,D,ue,Le,bt,it),Mt=new rb(R,Wt),At=new z1,Q=new Y1(ue),U=new rM(R,D,_t,ht,g,l),St=new j1(R,ht,Le),Vt=new ob(H,ze,Le,_t),J=new aM(H,ue,ze),Et=new MM(H,ue,ze),ze.programs=rt.programs,R.capabilities=Le,R.extensions=ue,R.properties=Wt,R.renderLists=At,R.shadowMap=St,R.state=_t,R.info=ze}m!==Fi&&(C=new TM(m,e.width,e.height,a,n,r));let ft=new Ud(R,H);this.xr=ft,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(A){A!==void 0&&(wt=A,this.setSize(Ct,kt,!1))},this.getSize=function(A){return A.set(Ct,kt)},this.setSize=function(A,k,Z=!0){if(ft.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ct=A,kt=k,e.width=Math.floor(A*wt),e.height=Math.floor(k*wt),Z===!0&&(e.style.width=A+"px",e.style.height=k+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(Ct*wt,kt*wt).floor()},this.setDrawingBufferSize=function(A,k,Z){Ct=A,kt=k,wt=Z,e.width=Math.floor(A*Z),e.height=Math.floor(k*Z),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(m===Fi){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(et)},this.getViewport=function(A){return A.copy(Gt)},this.setViewport=function(A,k,Z,W){A.isVector4?Gt.set(A.x,A.y,A.z,A.w):Gt.set(A,k,Z,W),_t.viewport(et.copy(Gt).multiplyScalar(fe()).round())},this.getScissor=function(A){return A.copy(Qt)},this.setScissor=function(A,k,Z,W){A.isVector4?Qt.set(A.x,A.y,A.z,A.w):Qt.set(A,k,Z,W),_t.scissor(dt.copy(Qt).multiplyScalar(fe()).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(A){_t.setScissorTest(te=A)},this.setOpaqueSort=function(A){zt=A},this.setTransparentSort=function(A){Te=A},this.getClearColor=function(A){return A.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,Z=!0){let W=0;if(A){let q=!1;if(Y!==null){let Rt=Y.texture.format;q=p.has(Rt)}if(q){let Rt=Y.texture.type,Nt=x.has(Rt),Tt=U.getClearColor(),Dt=U.getClearAlpha(),Ot=Tt.r,re=Tt.g,Me=Tt.b;Nt?(y[0]=Ot,y[1]=re,y[2]=Me,y[3]=Dt,H.clearBufferuiv(H.COLOR,0,y)):(M[0]=Ot,M[1]=re,M[2]=Me,M[3]=Dt,H.clearBufferiv(H.COLOR,0,M))}else W|=H.COLOR_BUFFER_BIT}k&&(W|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&H.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),U.dispose(),At.dispose(),Q.dispose(),ee.dispose(),Wt.dispose(),D.dispose(),ht.dispose(),X.dispose(),bt.dispose(),Vt.dispose(),rt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",xf),ft.removeEventListener("sessionend",vf),gs.stop()};function Xt(A){A.preventDefault(),Eo("WebGLRenderer: Context Lost."),I=!0}function de(){Eo("WebGLRenderer: Context Restored."),I=!1;let A=ze.autoReset,k=St.enabled,Z=St.autoUpdate,W=St.needsUpdate,q=St.type;pe(),ze.autoReset=A,St.enabled=k,St.autoUpdate=Z,St.needsUpdate=W,St.type=q}function Pt(A){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ne(A){let k=A.target;k.removeEventListener("dispose",Ne),mi(k)}function mi(A){$n(A),Wt.remove(A)}function $n(A){let k=Wt.get(A).programs;k!==void 0&&(k.forEach(function(Z){rt.releaseProgram(Z)}),A.isShaderMaterial&&rt.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,Z,W,q,Rt){k===null&&(k=Jt);let Nt=q.isMesh&&q.matrixWorld.determinantAffine()<0,Tt=qg(A,k,Z,W,q);_t.setMaterial(W,Nt);let Dt=Z.index,Ot=1;if(W.wireframe===!0){if(Dt=X.getWireframeAttribute(Z),Dt===void 0)return;Ot=2}let re=Z.drawRange,Me=Z.attributes.position,Ut=re.start*Ot,be=(re.start+re.count)*Ot;Rt!==null&&(Ut=Math.max(Ut,Rt.start*Ot),be=Math.min(be,(Rt.start+Rt.count)*Ot)),Dt!==null?(Ut=Math.max(Ut,0),be=Math.min(be,Dt.count)):Me!=null&&(Ut=Math.max(Ut,0),be=Math.min(be,Me.count));let si=be-Ut;if(si<0||si===1/0)return;bt.setup(q,W,Tt,Z,Dt);let He,Ue=J;if(Dt!==null&&(He=w.get(Dt),Ue=Et,Ue.setIndex(He)),q.isMesh)W.wireframe===!0?(_t.setLineWidth(W.wireframeLinewidth*fe()),Ue.setMode(H.LINES)):Ue.setMode(H.TRIANGLES);else if(q.isLine){let Mi=W.linewidth;Mi===void 0&&(Mi=1),_t.setLineWidth(Mi*fe()),q.isLineSegments?Ue.setMode(H.LINES):q.isLineLoop?Ue.setMode(H.LINE_LOOP):Ue.setMode(H.LINE_STRIP)}else q.isPoints?Ue.setMode(H.POINTS):q.isSprite&&Ue.setMode(H.TRIANGLES);if(q.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))Ue.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Mi=q._multiDrawStarts,Bt=q._multiDrawCounts,Ai=q._multiDrawCount,Pe=Dt?w.get(Dt).bytesPerElement:1,xs=Wt.get(W).currentProgram.getUniforms();for(let bi=0;bi<Ai;bi++)xs.setValue(H,"_gl_DrawID",bi),Ue.render(Mi[bi]/Pe,Bt[bi])}else if(q.isInstancedMesh)Ue.renderInstances(Ut,si,q.count);else if(Z.isInstancedBufferGeometry){let Mi=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Bt=Math.min(Z.instanceCount,Mi);Ue.renderInstances(Ut,si,Bt)}else Ue.render(Ut,si)};function gf(A,k,Z,W){L!==null&&A.isNodeMaterial&&L.setObject(W,A),j===!0&&it.setState(A,Z,!1),A.transparent===!0&&A.side===le&&A.forceSinglePass===!1?(A.side=je,A.needsUpdate=!0,so(A,k,W),A.side=os,A.needsUpdate=!0,so(A,k,W),A.side=le):so(A,k,W)}this.compile=function(A,k,Z=null){Z===null&&(Z=A),L!==null&&L.renderStart(A,k,Z),E=Q.get(Z),E.init(k),S.push(E),Z.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),A!==Z&&A.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),ut=this.localClippingEnabled,j=it.init(this.clippingPlanes,ut),j===!0&&it.setGlobalState(this.clippingPlanes,k),L!==null&&St.render(E.state.shadowsArray,Z,k);let W=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Rt=q.material;if(Rt)if(Array.isArray(Rt))for(let Nt=0;Nt<Rt.length;Nt++){let Tt=Rt[Nt];gf(Tt,Z,k,q),W.add(Tt)}else gf(Rt,Z,k,q),W.add(Rt)}),E=S.pop(),L!==null&&L.renderEnd(),W},this.compileAsync=function(A,k,Z=null){let W=this.compile(A,k,Z);return new Promise(q=>{function Rt(){if(W.forEach(function(Nt){let Dt=Wt.get(Nt).currentProgram;(Dt===void 0||Dt.isReady())&&W.delete(Nt)}),W.size===0){q(A);return}setTimeout(Rt,10)}ue.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let au=null;function Wg(A){au&&au(A)}function xf(){gs.stop()}function vf(){gs.start()}let gs=new Cm;gs.setAnimationLoop(Wg),typeof self<"u"&&gs.setContext(self),this.setAnimationLoop=function(A){au=A,ft.setAnimationLoop(A),A===null?gs.stop():gs.start()},ft.addEventListener("sessionstart",xf),ft.addEventListener("sessionend",vf),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(A,k);let Z=ft.enabled===!0&&ft.isPresenting===!0,W=C!==null&&(Y===null||Z)&&C.begin(R,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(k),k=ft.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,k,Y),E=Q.get(A,S.length),E.init(k),E.state.textureUnits=ee.getTextureUnits(),S.push(E),ot.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?V.setFromArrayCamera(k):B.setFromProjectionMatrix(ot,qi,k.reversedDepth),ut=this.localClippingEnabled,j=it.init(this.clippingPlanes,ut),b=At.get(A,v.length),b.init(),v.push(b),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){let Nt=R.xr.getDepthSensingMesh();Nt!==null&&lu(Nt,k,-1/0,R.sortObjects)}lu(A,k,0,R.sortObjects),b.finish(),L!==null&&L.updateLights(E.state.lightsArray),R.sortObjects===!0&&b.sort(zt,Te),ie=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,ie&&U.addToRenderList(b,A),this.info.autoReset===!0&&this.info.reset(),j===!0&&it.beginShadows();let q=E.state.shadowsArray;if(St.render(q,A,k),j===!0&&it.endShadows(),(W&&C.hasRenderPass())===!1){let Nt=b.opaque,Tt=b.transmissive;if(E.setupLights(),k.isArrayCamera){let Dt=k.cameras;if(Tt.length>0)for(let Ot=0,re=Dt.length;Ot<re;Ot++){let Me=Dt[Ot];_f(Nt,Tt,A,Me)}ie&&U.render(A);for(let Ot=0,re=Dt.length;Ot<re;Ot++){let Me=Dt[Ot];yf(b,A,Me,Me.viewport)}}else Tt.length>0&&_f(Nt,Tt,A,k),ie&&U.render(A),yf(b,A,k)}Y!==null&&O===0&&(ee.updateMultisampleRenderTarget(Y),ee.updateRenderTargetMipmap(Y)),W&&C.end(R),A.isScene===!0&&A.onAfterRender(R,A,k),bt.resetDefaultState(),G=-1,$=null,S.pop(),S.length>0?(E=S[S.length-1],ee.setTextureUnits(E.state.textureUnits),j===!0&&it.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,v.pop(),v.length>0?b=v[v.length-1]:b=null,L!==null&&L.renderEnd()};function lu(A,k,Z,W){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){let Nt=k.isArrayCamera?V:B;if(!A.frustumCulled||A.intersectsFrustum(Nt)){W&&vt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ot);let Tt=ht.update(A),Dt=A.material;Dt.visible&&b.push(A,Tt,Dt,Z,vt.z,null,k)}}else if(A.isMesh||A.isLine||A.isPoints){let Nt=k.isArrayCamera?V:B;if(!A.frustumCulled||A.intersectsFrustum(Nt)){let Tt=ht.update(A),Dt=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),vt.copy(A.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),vt.copy(Tt.boundingSphere.center)),vt.applyMatrix4(A.matrixWorld).applyMatrix4(ot)),Array.isArray(Dt)){let Ot=Tt.groups;for(let re=0,Me=Ot.length;re<Me;re++){let Ut=Ot[re],be=Dt[Ut.materialIndex];be&&be.visible&&b.push(A,Tt,be,Z,vt.z,Ut,k)}}else Dt.visible&&b.push(A,Tt,Dt,Z,vt.z,null,k)}}}let Rt=A.children;for(let Nt=0,Tt=Rt.length;Nt<Tt;Nt++)lu(Rt[Nt],k,Z,W)}function yf(A,k,Z,W){let{opaque:q,transmissive:Rt,transparent:Nt}=A;E.setupLightsView(Z),j===!0&&it.setGlobalState(R.clippingPlanes,Z),W&&_t.viewport(et.copy(W)),q.length>0&&Va(q,k,Z),Rt.length>0&&Va(Rt,k,Z),Nt.length>0&&Va(Nt,k,Z),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function _f(A,k,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){let Ut=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Ke(1,1,{generateMipmaps:!0,type:Ut?ii:Fi,minFilter:un,samples:Math.max(4,Le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ve.workingColorSpace})}let Rt=E.state.transmissionRenderTarget[W.id],Nt=W.viewport||et;Rt.setSize(Nt.z*R.transmissionResolutionScale,Nt.w*R.transmissionResolutionScale);let Tt=R.getRenderTarget(),Dt=R.getActiveCubeFace(),Ot=R.getActiveMipmapLevel();R.setRenderTarget(Rt),R.getClearColor(K),yt=R.getClearAlpha(),yt<1&&R.setClearColor(16777215,.5),R.clear(),ie&&U.render(Z);let re=R.toneMapping;R.toneMapping=Mn;let Me=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),j===!0&&it.setGlobalState(R.clippingPlanes,W),Va(A,Z,W),ee.updateMultisampleRenderTarget(Rt),ee.updateRenderTargetMipmap(Rt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let be=0,si=k.length;be<si;be++){let He=k[be],{object:Ue,geometry:Mi,material:Bt,group:Ai}=He;if(Bt.side===le&&Ue.layers.test(W.layers)){let Pe=Bt.side;Bt.side=je,Bt.needsUpdate=!0,Mf(Ue,Z,W,Mi,Bt,Ai),Bt.side=Pe,Bt.needsUpdate=!0,Ut=!0}}Ut===!0&&(ee.updateMultisampleRenderTarget(Rt),ee.updateRenderTargetMipmap(Rt))}R.setRenderTarget(Tt,Dt,Ot),R.setClearColor(K,yt),Me!==void 0&&(W.viewport=Me),R.toneMapping=re}function Va(A,k,Z){let W=k.isScene===!0?k.overrideMaterial:null;for(let q=0,Rt=A.length;q<Rt;q++){let Nt=A[q],{object:Tt,geometry:Dt,group:Ot}=Nt,re=Nt.material;re.allowOverride===!0&&W!==null&&(re=W),Tt.layers.test(Z.layers)&&Mf(Tt,k,Z,Dt,re,Ot)}}function Mf(A,k,Z,W,q,Rt){L!==null&&q.isNodeMaterial&&L.setObject(A,q),A.onBeforeRender(R,k,Z,W,q,Rt),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(R,k,Z,W,A,Rt),q.transparent===!0&&q.side===le&&q.forceSinglePass===!1?(q.side=je,q.needsUpdate=!0,R.renderBufferDirect(Z,k,W,q,A,Rt),q.side=os,q.needsUpdate=!0,R.renderBufferDirect(Z,k,W,q,A,Rt),q.side=le):R.renderBufferDirect(Z,k,W,q,A,Rt),A.onAfterRender(R,k,Z,W,q,Rt)}function bf(A){let k=0;for(let Z of A)Z.texture!==null&&k++;return k}function so(A,k,Z){k.isScene!==!0&&(k=Jt);let W=Wt.get(A),q=E.state.lights,Rt=E.state.shadowsArray,Nt=q.state.version,Tt=rt.getParameters(A,q.state,Rt,k,Z,E.state.lightProbeGridArray),Dt=rt.getProgramCacheKey(Tt),Ot=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,W.fog=k.fog;let re=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=D.get(A.envMap||W.environment,re),W.envMapRotation=W.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ot===void 0&&(A.addEventListener("dispose",Ne),Ot=new Map,W.programs=Ot,W.programVariants=new Map);let Me=Ot.get(Dt);if(Me!==void 0){if(W.currentProgram===Me&&W.lightsStateVersion===Nt)return Ef(A,Tt),Me}else Tt.uniforms=rt.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,Z,Tt),A.onBeforeCompile(Tt,R),Me=rt.acquireProgram(Tt,Dt),Ot.set(Dt,Me),W.uniforms=Tt.uniforms;let Ut=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ut.clippingPlanes=it.uniform),Ef(A,Tt),W.needsLights=$g(A),W.lightsStateVersion=Nt,W.needsLights&&(Ut.ambientLightColor.value=q.state.ambient,Ut.lightProbe.value=q.state.probe,Ut.sunLights.value=q.state.sun,Ut.sunLightShadows.value=q.state.sunShadow,Ut.directionalLights.value=q.state.directional,Ut.directionalLightShadows.value=q.state.directionalShadow,Ut.spotLights.value=q.state.spot,Ut.spotLightShadows.value=q.state.spotShadow,Ut.rectAreaLights.value=q.state.rectArea,Ut.ltc_1.value=q.state.rectAreaLTC1,Ut.ltc_2.value=q.state.rectAreaLTC2,Ut.pointLights.value=q.state.point,Ut.pointLightShadows.value=q.state.pointShadow,Ut.hemisphereLights.value=q.state.hemi,Ut.sunShadowMatrix.value=q.state.sunShadowMatrix,Ut.sunShadowCascade.value=q.state.sunShadowCascade,Ut.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ut.spotLightMatrix.value=q.state.spotLightMatrix,Ut.spotLightMap.value=q.state.spotLightMap,Ut.pointShadowMatrix.value=q.state.pointShadowMatrix),W.numLightProbeGrids=bf(E.state.lightProbeGridArray),W.currentProgram=Me,W.uniformsList=null,Me}function Xg(A,k,Z,W,q){let Rt=Wt.get(A),Nt=Rt.currentProgram.id+","+W+","+q,Tt=Rt.programVariants.get(Nt);return Tt===void 0?(Tt=so(A,k,Z),Rt.programVariants.set(Nt,Tt)):(Rt.currentProgram=Tt,Rt.uniformsList=null,Rt.outputColorSpace=W,Rt.toneMapping=q),Tt}function Sf(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=Fr.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Ef(A,k){let Z=Wt.get(A);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function qg(A,k,Z,W,q){k.isScene!==!0&&(k=Jt),ee.resetTextureUnits();let Rt=k.fog,Nt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?k.environment:null,Tt=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ve.workingColorSpace,Dt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ot=D.get(W.envMap||Nt,Dt),re=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Me=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!Z.morphAttributes.position,be=!!Z.morphAttributes.normal,si=!!Z.morphAttributes.color,He=Mn;W.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(He=R.toneMapping);let Ue=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Mi=Ue!==void 0?Ue.length:0,Bt=Wt.get(W),Ai=E.state.lights;if(j===!0&&(ut===!0||A!==$)){let $e=A===$&&W.id===G;it.setState(W,A,$e)}let Pe=!1,xs=!1;W.version===Bt.__version?Bt.needsLights&&Bt.lightsStateVersion!==Ai.state.version||q.isBatchedMesh&&Bt.batching===!1||!q.isBatchedMesh&&Bt.batching===!0||q.isBatchedMesh&&Bt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Bt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Bt.instancing===!1||!q.isInstancedMesh&&Bt.instancing===!0||q.isSkinnedMesh&&Bt.skinning===!1||!q.isSkinnedMesh&&Bt.skinning===!0||q.isInstancedMesh&&Bt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Bt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Bt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Bt.instancingMorph===!1&&q.morphTexture!==null||Bt.envMap!==Ot||W.fog===!0&&Bt.fog!==Rt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==it.numPlanes||Bt.numIntersection!==it.numIntersection)||Bt.vertexAlphas!==re||Bt.vertexTangents!==Me||Bt.morphTargets!==Ut||Bt.morphNormals!==be||Bt.morphColors!==si||Bt.morphTargetsCount!==Mi||Bt.numLightProbeGrids!==bf(E.state.lightProbeGridArray)?Pe=!0:(Bt.outputColorSpace!==Tt||Bt.toneMapping!==He)&&(xs=!0):(Pe=!0,Bt.__version=W.version);let bi=Bt.currentProgram;(Pe===!0||xs===!0)&&(bi=xs===!0?Xg(W,k,q,Tt,He):so(W,k,q),L&&W.isNodeMaterial&&L.onUpdateProgram(W,bi,Bt));let Wa=!1,Zn=!1,vs=!1,we=bi.getUniforms(),yi=Bt.uniforms;if(_t.useProgram(bi.program)&&(Wa=!0,Zn=!0,vs=!0),W.id!==G&&(G=W.id,Zn=!0),Wa||$!==A){_t.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),we.setValue(H,"projectionMatrix",A.projectionMatrix),we.setValue(H,"viewMatrix",A.matrixWorldInverse);let gi=we.map.cameraPosition;gi!==void 0&&gi.setValue(H,Ft.setFromMatrixPosition(A.matrixWorld)),Le.logarithmicDepthBuffer&&we.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&we.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,Zn=!0,vs=!0)}if(Bt.needsLights&&(Ai.state.sunShadowMap.length>0&&we.setValue(H,"sunShadowMap",Ai.state.sunShadowMap,ee),Ai.state.directionalShadowMap.length>0&&we.setValue(H,"directionalShadowMap",Ai.state.directionalShadowMap,ee),Ai.state.spotShadowMap.length>0&&we.setValue(H,"spotShadowMap",Ai.state.spotShadowMap,ee),Ai.state.pointShadowMap.length>0&&we.setValue(H,"pointShadowMap",Ai.state.pointShadowMap,ee)),q.isSkinnedMesh){we.setOptional(H,q,"bindMatrix"),we.setOptional(H,q,"bindMatrixInverse");let $e=q.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),we.setValue(H,"boneTexture",$e.boneTexture,ee))}q.isBatchedMesh&&(we.setOptional(H,q,"batchingTexture"),we.setValue(H,"batchingTexture",q._matricesTexture,ee),we.setOptional(H,q,"batchingIdTexture"),we.setValue(H,"batchingIdTexture",q._indirectTexture,ee),we.setOptional(H,q,"batchingColorTexture"),q._colorsTexture!==null&&we.setValue(H,"batchingColorTexture",q._colorsTexture,ee));let nn=Z.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&nt.update(q,Z,bi),(Zn||Bt.receiveShadow!==q.receiveShadow)&&(Bt.receiveShadow=q.receiveShadow,we.setValue(H,"receiveShadow",q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&k.environment!==null&&(yi.envMapIntensity.value=k.environmentIntensity),yi.dfgLUT!==void 0&&(yi.dfgLUT.value=lb()),Zn){if(we.setValue(H,"toneMappingExposure",R.toneMappingExposure),Bt.needsLights&&Yg(yi,vs),Rt&&W.fog===!0&&Mt.refreshFogUniforms(yi,Rt),Mt.refreshMaterialUniforms(yi,W,wt,kt,E.state.transmissionRenderTarget[A.id]),Bt.needsLights&&Bt.numLightProbeGrids>0){let $e=_,gi=0;for(let Rn of E.state.lightProbeGridArray)Rn.texture!==null&&($e.textures[gi]=Rn.texture,$e.min[gi]=Rn.boundingBox.min,$e.max[gi]=Rn.boundingBox.max,$e.resolution[gi]=Rn.resolution,gi++);for(let Rn in $e)$e[Rn].length=gi;yi.probesSH.value=$e.textures,yi.probesMin.value=$e.min,yi.probesMax.value=$e.max,yi.probesResolution.value=$e.resolution}Fr.upload(H,Sf(Bt),yi,ee)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Fr.upload(H,Sf(Bt),yi,ee),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&we.setValue(H,"center",q.center),we.setValue(H,"modelViewMatrix",q.modelViewMatrix),we.setValue(H,"normalMatrix",q.normalMatrix),we.setValue(H,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){let $e=W.uniformsGroups;for(let gi=0,Rn=$e.length;gi<Rn;gi++){let Tf=$e[gi];Vt.update(Tf,bi),Vt.bind(Tf,bi)}}return bi}function Yg(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function $g(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,k,Z){let W=Wt.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Wt.get(A.texture).__webglTexture=k,Wt.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){let Z=Wt.get(A);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,Z=0){Y=A,z=k,O=Z;let W=null,q=!1,Rt=!1;if(A){let Tt=Wt.get(A);if(Tt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(H.FRAMEBUFFER,Tt.__webglFramebuffer),et.copy(A.viewport),dt.copy(A.scissor),xt=A.scissorTest,_t.viewport(et),_t.scissor(dt),_t.setScissorTest(xt),G=-1;return}else if(Tt.__webglFramebuffer===void 0)ee.setupRenderTarget(A);else if(Tt.__hasExternalTextures)ee.rebindTextures(A,Wt.get(A.texture).__webglTexture,Wt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let re=A.depthTexture;if(Tt.__boundDepthTexture!==re){if(re!==null&&Wt.has(re)&&(A.width!==re.image.width||A.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(A)}}let Dt=A.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Rt=!0);let Ot=Wt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ot[k])?W=Ot[k][Z]:W=Ot[k],q=!0):A.samples>0&&ee.useMultisampledRTT(A)===!1?W=Wt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ot)?W=Ot[Z]:W=Ot,et.copy(A.viewport),dt.copy(A.scissor),xt=A.scissorTest}else et.copy(Gt).multiplyScalar(wt).floor(),dt.copy(Qt).multiplyScalar(wt).floor(),xt=te;if(Z!==0&&(W=F),_t.bindFramebuffer(H.FRAMEBUFFER,W)&&_t.drawBuffers(A,W),_t.viewport(et),_t.scissor(dt),_t.setScissorTest(xt),q){let Tt=Wt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Tt.__webglTexture,Z)}else if(Rt){let Tt=k;for(let Dt=0;Dt<A.textures.length;Dt++){let Ot=Wt.get(A.textures[Dt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Dt,Ot.__webglTexture,Z,Tt)}}else if(A!==null&&Z!==0){let Tt=Wt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Tt.__webglTexture,Z)}G=-1};function wf(A){let k=Wt.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=Le.textureFormatReadable(A.format),k.__typeReadable=Le.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,Z,W,q,Rt,Nt,Tt=0){if(!(A&&A.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Wt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Nt!==void 0&&(Dt=Dt[Nt],Array.isArray(Dt)&&(Dt=Dt[0])),Dt){_t.bindFramebuffer(H.FRAMEBUFFER,Dt);try{let Ot=A.textures[Tt],re=Ot.format,Me=Ot.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Tt);let Ut=wf(Ot);if(Ut.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-W&&Z>=0&&Z<=A.height-q&&H.readPixels(k,Z,W,q,gt.convert(re),gt.convert(Me),Rt)}finally{let Ot=Y!==null?Wt.get(Y).__webglFramebuffer:null;_t.bindFramebuffer(H.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(A,k,Z,W,q,Rt,Nt,Tt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Wt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Nt!==void 0&&(Dt=Dt[Nt],Array.isArray(Dt)&&(Dt=Dt[0])),Dt)if(k>=0&&k<=A.width-W&&Z>=0&&Z<=A.height-q){_t.bindFramebuffer(H.FRAMEBUFFER,Dt);let Ot=A.textures[Tt],re=Ot.format,Me=Ot.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Tt);let Ut=wf(Ot);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let be=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,be),H.bufferData(H.PIXEL_PACK_BUFFER,Rt.byteLength,H.STREAM_READ),H.readPixels(k,Z,W,q,gt.convert(re),gt.convert(Me),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let si=Y!==null?Wt.get(Y).__webglFramebuffer:null;_t.bindFramebuffer(H.FRAMEBUFFER,si);let He=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await jp(H,He,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,be),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Rt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(be),H.deleteSync(He),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,Z=0){let W=Math.pow(2,-Z),q=Math.floor(A.image.width*W),Rt=Math.floor(A.image.height*W),Nt=k!==null?k.x:0,Tt=k!==null?k.y:0;ee.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,Z,0,0,Nt,Tt,q,Rt),_t.unbindTexture()},this.copyTextureToTexture=function(A,k,Z=null,W=null,q=0,Rt=0){let Nt,Tt,Dt,Ot,re,Me,Ut,be,si,He=A.isCompressedTexture?A.mipmaps[Rt]:A.image;if(Z!==null)Nt=Z.max.x-Z.min.x,Tt=Z.max.y-Z.min.y,Dt=Z.isBox3?Z.max.z-Z.min.z:1,Ot=Z.min.x,re=Z.min.y,Me=Z.isBox3?Z.min.z:0;else{let we=Math.pow(2,-q);Nt=Math.floor(He.width*we),Tt=Math.floor(He.height*we),A.isDataArrayTexture?Dt=He.depth:A.isData3DTexture?Dt=Math.floor(He.depth*we):Dt=1,Ot=0,re=0,Me=0}W!==null?(Ut=W.x,be=W.y,si=W.z):(Ut=0,be=0,si=0);let Ue=gt.convert(k.format),Mi=gt.convert(k.type),Bt;k.isData3DTexture?(ee.setTexture3D(k,0),Bt=H.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ee.setTexture2DArray(k,0),Bt=H.TEXTURE_2D_ARRAY):(ee.setTexture2D(k,0),Bt=H.TEXTURE_2D),_t.activeTexture(H.TEXTURE0),_t.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),_t.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_t.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);let Ai=_t.getParameter(H.UNPACK_ROW_LENGTH),Pe=_t.getParameter(H.UNPACK_IMAGE_HEIGHT),xs=_t.getParameter(H.UNPACK_SKIP_PIXELS),bi=_t.getParameter(H.UNPACK_SKIP_ROWS),Wa=_t.getParameter(H.UNPACK_SKIP_IMAGES);_t.pixelStorei(H.UNPACK_ROW_LENGTH,He.width),_t.pixelStorei(H.UNPACK_IMAGE_HEIGHT,He.height),_t.pixelStorei(H.UNPACK_SKIP_PIXELS,Ot),_t.pixelStorei(H.UNPACK_SKIP_ROWS,re),_t.pixelStorei(H.UNPACK_SKIP_IMAGES,Me);let Zn=A.isDataArrayTexture||A.isData3DTexture,vs=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){let we=Wt.get(A),yi=Wt.get(k),nn=Wt.get(we.__renderTarget),$e=Wt.get(yi.__renderTarget);_t.bindFramebuffer(H.READ_FRAMEBUFFER,nn.__webglFramebuffer),_t.bindFramebuffer(H.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let gi=0;gi<Dt;gi++)Zn&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Wt.get(A).__webglTexture,q,Me+gi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Wt.get(k).__webglTexture,Rt,si+gi)),H.blitFramebuffer(Ot,re,Ot+Nt,re+Tt,Ut,be,Ut+Nt,be+Tt,H.DEPTH_BUFFER_BIT,H.NEAREST);_t.bindFramebuffer(H.READ_FRAMEBUFFER,null),_t.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Wt.has(A)){let we=Wt.get(A),yi=Wt.get(k);_t.bindFramebuffer(H.READ_FRAMEBUFFER,T),_t.bindFramebuffer(H.DRAW_FRAMEBUFFER,N);for(let nn=0;nn<Dt;nn++)Zn?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,we.__webglTexture,q,Me+nn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,we.__webglTexture,q),vs?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,yi.__webglTexture,Rt,si+nn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,yi.__webglTexture,Rt),q!==0?H.blitFramebuffer(Ot,re,Ot+Nt,re+Tt,Ut,be,Ut+Nt,be+Tt,H.COLOR_BUFFER_BIT,H.NEAREST):vs?H.copyTexSubImage3D(Bt,Rt,Ut,be,si+nn,Ot,re,Nt,Tt):H.copyTexSubImage2D(Bt,Rt,Ut,be,Ot,re,Nt,Tt);_t.bindFramebuffer(H.READ_FRAMEBUFFER,null),_t.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else vs?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Bt,Rt,Ut,be,si,Nt,Tt,Dt,Ue,Mi,He.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D(Bt,Rt,Ut,be,si,Nt,Tt,Dt,Ue,He.data):H.texSubImage3D(Bt,Rt,Ut,be,si,Nt,Tt,Dt,Ue,Mi,He):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Rt,Ut,be,Nt,Tt,Ue,Mi,He.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Rt,Ut,be,He.width,He.height,Ue,He.data):H.texSubImage2D(H.TEXTURE_2D,Rt,Ut,be,Nt,Tt,Ue,Mi,He);_t.pixelStorei(H.UNPACK_ROW_LENGTH,Ai),_t.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pe),_t.pixelStorei(H.UNPACK_SKIP_PIXELS,xs),_t.pixelStorei(H.UNPACK_SKIP_ROWS,bi),_t.pixelStorei(H.UNPACK_SKIP_IMAGES,Wa),Rt===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&H.generateMipmap(Bt),_t.unbindTexture()},this.initRenderTarget=function(A){Wt.get(A).__webglFramebuffer===void 0&&ee.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ee.setTextureCube(A,0):A.isData3DTexture?ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ee.setTexture2DArray(A,0):ee.setTexture2D(A,0),_t.unbindTexture()},this.resetState=function(){z=0,O=0,Y=null,_t.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}};var th=class{constructor({tierCount:t,tier:e=0,scale:i=1,minScale:n=.65,warmup:r=3e3,cooldown:o=2500,slowMs:a=26,fastMs:l=14.5,windowSize:c=50,upWindows:h=4,ignoreAbove:d=250}={}){Object.assign(this,{tierCount:t,tier:e,scale:i,minScale:n,warmup:r,cooldown:o,slowMs:a,fastMs:l,windowSize:c,upWindows:h,ignoreAbove:d}),this.frames=[],this.startedAt=null,this.lastChange=-1/0,this.fastWindows=0,this.blockedTier=1/0}update(t,e){if(!(t>0)||t>this.ignoreAbove||(this.startedAt==null&&(this.startedAt=e),e-this.startedAt<this.warmup)||(this.frames.push(t),this.frames.length<this.windowSize))return null;let i=this.frames.slice().sort((a,l)=>a-l);this.frames.length=0;let n=Math.floor(i.length*.1),r=i.slice(n,i.length-n),o=r.reduce((a,l)=>a+l,0)/r.length;return e-this.lastChange<this.cooldown?null:o>this.slowMs?(this.fastWindows=0,this.scale>this.minScale+.05?(this.lastChange=e,this.scale=Math.max(this.minScale,+(this.scale-.12).toFixed(2)),{type:"scale",scale:this.scale}):this.tier>0?(this.lastChange=e,this.blockedTier=Math.min(this.blockedTier,this.tier),this.tier-=1,this.scale=1,{type:"tier",tier:this.tier,scale:1}):null):o<this.fastMs?(this.fastWindows+=1,this.fastWindows<this.upWindows?null:(this.fastWindows=0,this.scale<1?(this.lastChange=e,this.scale=Math.min(1,+(this.scale+.12).toFixed(2)),{type:"scale",scale:this.scale}):this.tier+1<this.tierCount&&this.tier+1<this.blockedTier?(this.lastChange=e,this.tier+=1,this.scale=.88,{type:"tier",tier:this.tier,scale:.88}):null)):(this.fastWindows=0,null)}};function Bd(s){if(s){for(let t of Array.isArray(s.passes)?s.passes:[])try{t&&typeof t.dispose=="function"&&t.dispose()}catch{}try{typeof s.dispose=="function"&&s.dispose()}catch{}}}var Nr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Gi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},cb=new Cs(-1,1,1,-1,0,1),Od=class extends ge{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}},hb=new Od,hs=class{constructor(t){this._mesh=new st(hb,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,cb)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ns=class extends Gi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ni.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new hs(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var va=class extends Gi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},eh=class extends Gi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ih=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new tt);this._width=i.width,this._height=i.height,e=new Ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ii}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ns(Nr),this.copyPass.material.blending=Vn,this.timer=new Qo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}va!==void 0&&(o instanceof va?i=!0:o instanceof eh&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var nh=class extends Gi{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ct}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}};var km={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ct(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ur=class s extends Gi{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new tt(t.x,t.y):new tt(256,256),this.clearColor=new ct(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ke(r,o,{type:ii,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ke(r,o,{type:ii,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ke(r,o,{type:ii,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=km;this.highPassUniforms=Ni.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new tt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ni.clone(Nr.uniforms),this.blendMaterial=new xe({uniforms:this.copyUniforms,vertexShader:Nr.vertexShader,fragmentShader:Nr.fragmentShader,premultipliedAlpha:!0,blending:Oe,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ct,this._oldClearAlpha=1,this._basic=new oe,this._fsQuad=new hs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new tt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let n=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;n.push((o*a+(o+1)*l)/c),r.push(c)}return new xe({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ur.BlurDirectionX=new tt(1,0);Ur.BlurDirectionY=new tt(0,1);var ya={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var sh=class extends Gi{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ni.clone(ya.uniforms),this.material=new Tr({name:ya.name,uniforms:this.uniforms,vertexShader:ya.vertexShader,fragmentShader:ya.fragmentShader}),this._fsQuad=new hs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ve.getTransfer(this._outputColorSpace)===Re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ia?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===na?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===sa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===hn?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Is?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ki?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ra&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Hd={name:"StackFinishA",uniforms:{tDiffuse:{value:null},uRes:{value:[1,1]},uTime:{value:0},uTiltCenter:{value:.52},uTiltRange:{value:.18},uBlur:{value:0},uCA:{value:0},uWobble:{value:0},uPixel:{value:0},uZoomBlur:{value:0},uDesat:{value:0},uTint:{value:[1,1,1]},uFlash:{value:0},uFlashColor:{value:[1,.95,.8]}},vertexShader:`
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
  `},kd={name:"StackFinishB",uniforms:{tDiffuse:{value:null},uRes:{value:[1,1]},uTime:{value:0},uVignette:{value:.3},uGrain:{value:.04},uLevels:{value:0},uPixel:{value:1},uScan:{value:0},uFade:{value:0},uFadeColor:{value:[0,0,0]},uAspect:{value:1},uLift:{value:[0,0,0]},uSat:{value:1},uContrast:{value:1},uVeilColor:{value:[.1,.1,.1]},uSpot:{value:Array.from({length:6},()=>new De(0,0,0,0))},uSpotRect:{value:Array.from({length:6},()=>new De(0,0,1,1))}},vertexShader:`
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
      // Spotlight sabotage: everything inside a spot's rectangle is hidden by an opaque veil except its soft-edged circles of light.
      // Spots that share a rectangle light it together (the veil is laid once, over the union of their holes).
      // A spot with w = 2 is the Macro Zoom loupe: a solid magnifier rim and a handle running down and to the right, drawn over the veil.
      float veiled = 0.0; float lit = 0.0; float rimSum = 0.0; float frame = 0.0; float handle = 0.0;
      for (int i = 0; i < 6; i++) {
        vec4 sp = uSpot[i];
        if (sp.w > 0.5) {
          vec4 rc = uSpotRect[i];
          if (vUv.x >= rc.x && vUv.x <= rc.z && vUv.y >= rc.y && vUv.y <= rc.w) {
            vec2 d = (vUv - sp.xy) * vec2(uAspect, 1.0);
            float dist = length(d);
            float hole = 1.0 - smoothstep(sp.z * 0.985, sp.z * 1.02, dist);
            float rim = smoothstep(sp.z * 0.93, sp.z, dist) * (1.0 - smoothstep(sp.z, sp.z * 1.05, dist));
            veiled = 1.0; lit = max(lit, hole); rimSum += rim;
            if (sp.w > 1.5) {
              float band = sp.z * 0.06;
              frame = max(frame, 1.0 - smoothstep(band * 0.7, band, abs(dist - sp.z * 1.03)));
              vec2 dir = vec2(0.70710678, -0.70710678);
              vec2 rel = d - dir * sp.z * 1.06; float along = clamp(dot(rel, dir), 0.0, sp.z * 0.62);
              handle = max(handle, 1.0 - smoothstep(sp.z * 0.07, sp.z * 0.09, length(rel - dir * along)));
            }
          }
        }
      }
      col = mix(col, mix(uVeilColor, col, lit), veiled);
      col += min(rimSum, 1.0) * veiled * vec3(1.0, 0.78, 0.25) * 0.6;
      col = mix(col, vec3(0.84, 0.28, 0.18), handle * veiled);
      col = mix(col, vec3(0.89, 0.64, 0.23), frame * veiled);
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
  `};var Zt=Math.PI*2,mt=(s,t=0,e=1)=>s<t?t:s>e?e:s,Ee=(s,t,e)=>s+(t-s)*e,ub=(s,t,e)=>s===t?0:mt((e-s)/(t-s)),ke=(s,t,e)=>{let i=ub(s,t,e);return i*i*(3-2*i)};var Br=(s,t)=>(s%t+t)%t;var jt=(s,t,e,i)=>Ee(s,t,1-Math.exp(-e*i)),wn=s=>1-(1-s)**3,Yn=s=>s<.5?4*s*s*s:1-(-2*s+2)**3/2,us=(s,t=1.70158)=>1+(t+1)*(s-1)**3+t*(s-1)**2;function We(s=1){let t=s|0,e=()=>{t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return e.range=(i,n)=>i+(n-i)*e(),e.int=(i,n)=>Math.floor(i+(n-i+1)*e()),e.pick=i=>i[Math.floor(e()*i.length)%i.length],e.sign=()=>e()<.5?-1:1,e}function zm(s){let t=Math.sin(s*127.1+311.7)*43758.5453123;return t-Math.floor(t)}function db(s,t=0){let e=Math.floor(s),i=s-e,n=zm(e+t*17.13),r=zm(e+1+t*17.13),o=i*i*(3-2*i);return Ee(n,r,o)*2-1}function Gm(s,t=0,e=4){let i=0,n=.5,r=1;for(let o=0;o<e;o+=1)i+=db(s*r,t+o*3.7)*n,n*=.5,r*=2;return i}var rh=class{constructor(t=0,e=120,i=12){this.value=t,this.target=t,this.velocity=0,this.stiffness=e,this.damping=i}step(t){let e=Math.max(1,Math.ceil(t/.008)),i=t/e;for(let n=0;n<e;n+=1)this.velocity+=((this.target-this.value)*this.stiffness-this.velocity*this.damping)*i,this.value+=this.velocity*i;return this.value}snap(t){this.value=t,this.target=t,this.velocity=0}};function fb(s){let t=/^#?([0-9a-f]{6})$/i.exec(String(s||""));if(!t)return null;let e=parseInt(t[1],16);return[e>>16&255,e>>8&255,e&255]}function Us(s,t=[1,1,1]){let e=fb(s);return e?e.map(i=>i/255):t}var pb=Object.freeze(["paper","sunset","primetime"]),pn=s=>pb.includes(s)?s:"paper",mb=Object.freeze({paper:Object.freeze({}),sunset:Object.freeze({"#E3A33B":"#FFC53D","#2F8478":"#2EC4B6","#7FA6BD":"#9B5DE5","#D5472F":"#FF5964","#7A6AA6":"#B983FF","#C96F8A":"#FF8FAB"}),primetime:Object.freeze({"#E3A33B":"#FFC83D","#2F8478":"#35D0E8","#7FA6BD":"#F2F5FF","#D5472F":"#E5322D","#7A6AA6":"#9B8CFF","#C96F8A":"#FF7FA8"})});function _i(s,t){let e=mb[s];return!e||typeof t!="string"?t||"#2F8478":e[t.toUpperCase()]||t}var ds=Object.freeze({paper:["#2F8478","#7FA6BD","#D5472F"],sunset:["#2EC4B6","#9B5DE5","#FF5964"],primetime:["#35D0E8","#F2F5FF","#E5322D"]}),Or=Object.freeze({paper:Object.freeze({name:"paper",label:"The Paper Theatre",ink:"#2A2520",paper:"#F4EDDF",cream:"#F7F0E2",amber:"#E3A33B",teal:"#2F8478",blue:"#7FA6BD",vermilion:"#D5472F",violet:"#7A6AA6",rose:"#C96F8A",skyHorizon:"#FFD8A6",skyMid:"#F6E7CC",skyZenith:"#8FC9CC",journey:["#F4EDDF","#F6D9AE","#7FA6BD","#243047"],fog:"#F4EDDF",fogDensity:32e-5,floor:"#9CC4B2",floorLine:"#F4EDDF",plinth:"#F2E8D3",plinthRim:"#E3A33B",hills:["#E9D8B8","#C9D8C4","#9FC0B3","#7FA6BD","#5E8EA0"],key:"#FFE4BC",fill:"#CFE3EA",ground:"#E7D2B0",rim:"#A5D6D8",exposure:.98,bloom:.1,bloomThreshold:1.15,bloomRadius:.4,sat:1.18,contrast:1.08,grain:.03,vignette:.24,tilt:.5,aberration:9e-4,toneMapping:"neutral",fontKey:"paper"}),sunset:Object.freeze({name:"sunset",label:"Sunset Stack \u201994",ink:"#170B33",paper:"#2B1155",cream:"#FFF3E2",amber:"#FFC53D",teal:"#2EC4B6",blue:"#9B5DE5",vermilion:"#FF5964",violet:"#B983FF",rose:"#FF8FAB",skyHorizon:"#FF7A3D",skyMid:"#8E1D6B",skyZenith:"#120826",journey:["#FF6B35","#C1266B","#4A1A8C","#0B0620"],fog:"#3A1166",fogDensity:42e-5,floor:"#1A0B3A",floorLine:"#FF4FD8",plinth:"#2B1155",plinthRim:"#FFC53D",hills:["#3A1166","#2B0F57","#220C48","#190838","#120528"],key:"#FFB27A",fill:"#7A3CFF",ground:"#FF4FD8",rim:"#2EC4B6",exposure:1,bloom:.5,bloomThreshold:1,bloomRadius:.6,sat:1.12,contrast:1.06,grain:.02,vignette:.42,tilt:0,aberration:.0016,toneMapping:"aces",fontKey:"sunset",pixel:3,levels:14}),primetime:Object.freeze({name:"primetime",label:"Prime Time",ink:"#061238",paper:"#0A1A55",cream:"#FFFFFF",amber:"#FFC83D",teal:"#35D0E8",blue:"#F2F5FF",vermilion:"#E5322D",violet:"#9B8CFF",rose:"#FF7FA8",skyHorizon:"#2447C9",skyMid:"#1B3CAA",skyZenith:"#06113A",journey:["#1B3CAA","#16318F","#0A1A55","#030818"],fog:"#0A1A55",fogDensity:36e-5,floor:"#050C26",floorLine:"#FFC83D",plinth:"#0B1B5C",plinthRim:"#FFC83D",hills:["#14297F","#10236D","#0B1B5C","#08154A","#050E36"],key:"#FFF1CF",fill:"#4F7BFF",ground:"#1B3CAA",rim:"#FFC83D",exposure:.96,bloom:.38,bloomThreshold:1.05,bloomRadius:.5,sat:1.12,contrast:1.1,grain:.03,vignette:.36,tilt:.15,aberration:.0012,toneMapping:"aces",fontKey:"primetime"})}),Bs=s=>Or[pn(s)];var gb="vec3 safeNormalize( vec3 v, vec3 fallback ) { float l = dot( v, v ); return l > 1e-24 ? v * inversesqrt( l ) : fallback; }",Vm=/vec3 vSigmaX = normalize\( dFdx\( surf_pos\.xyz \) \);/,Wm=/vec3 vSigmaY = normalize\( dFdy\( surf_pos\.xyz \) \);/,Xm=/return normalize\( abs\( fDet \) \* surf_norm - vGrad \);/,qm=/vec3 perturbNormalArb\(/,Ym=/vec4 texel = texture2D\( tDiffuse, vUv \);/;function xb(s){return typeof s!="string"||s.includes("safeNormalize")||![Vm,Wm,Xm,qm].every(t=>t.test(s))?s:s.replace(qm,`${gb}
	vec3 perturbNormalArb(`).replace(Vm,"vec3 vSigmaX = safeNormalize( dFdx( surf_pos.xyz ), vec3( 1.0, 0.0, 0.0 ) );").replace(Wm,"vec3 vSigmaY = safeNormalize( dFdy( surf_pos.xyz ), vec3( 0.0, 1.0, 0.0 ) );").replace(Xm,"return safeNormalize( abs( fDet ) * surf_norm - vGrad, surf_norm );")}function vb(s){return typeof s!="string"||s.includes("isnan")||!Ym.test(s)?s:s.replace(Ym,`vec4 texel = texture2D( tDiffuse, vUv );
			if ( any( isnan( texel ) ) || any( isinf( texel ) ) ) texel = vec4( 0.0 );
			texel = min( texel, vec4( 64.0 ) );`)}var zd=!1;function $m(s=ce){if(zd&&String(s.bumpmap_pars_fragment).includes("safeNormalize"))return!0;let t=xb(s.bumpmap_pars_fragment);return t!==s.bumpmap_pars_fragment&&(s.bumpmap_pars_fragment=t),zd=String(s.bumpmap_pars_fragment).includes("safeNormalize"),zd}function Zm(s){let t=s&&s.materialHighPassFilter;if(!t)return!1;let e=vb(t.fragmentShader);return e!==t.fragmentShader&&(t.fragmentShader=e,t.needsUpdate=!0),t.fragmentShader.includes("isnan")}var _a=Object.freeze([Object.freeze({name:"low",dpr:1,msaa:0,shadow:1024,shadowBias:-.0012,bloom:!1,blur:!1,crowd:.35,particles:.4,reflect:0,soft:!1}),Object.freeze({name:"medium",dpr:1.25,msaa:0,shadow:1024,shadowBias:-.001,bloom:!0,blur:!1,crowd:.65,particles:.7,reflect:.38,soft:!0}),Object.freeze({name:"high",dpr:1.75,msaa:4,shadow:2048,shadowBias:-8e-4,bloom:!0,blur:!0,crowd:1,particles:1,reflect:.6,soft:!0}),Object.freeze({name:"ultra",dpr:2,msaa:4,shadow:2048,shadowBias:-6e-4,bloom:!0,blur:!0,crowd:1,particles:1,reflect:.85,soft:!0})]);function Km(){try{let t=document.createElement("canvas").getContext("webgl2");if(!t||typeof t.createShader!="function"||typeof t.getParameter!="function")return!1;let e=typeof t.getParameter(t.MAX_TEXTURE_SIZE)=="number"&&t.isContextLost&&!t.isContextLost(),i=t.getExtension&&t.getExtension("WEBGL_lose_context");return i&&i.loseContext(),!!e}catch{return!1}}var yb={neutral:Ki,aces:hn,agx:Is};function _b(s){if(s!=null){let n=_a.findIndex(r=>r.name===s);if(n>=0)return n}let t=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,e=navigator.hardwareConcurrency||4,i=navigator.deviceMemory||4;return t||e<=4||i<=3?1:2}var oh=class{constructor({canvas:t,theme:e="paper",forcedTier:i=null,reducedMotion:n=!1}={}){this.canvas=t,this.reducedMotion=n,this.theme=e,this.time=0,this.tierIndex=_b(i),this.forcedTier=i!=null,this.scale=1,this.listeners={tier:new Set,lost:new Set,restored:new Set},this.governor=this.forcedTier?null:new th({tierCount:_a.length,tier:this.tierIndex}),this.width=1,this.height=1,this.pixelRatio=1,this.contextLost=!1,this.fade={value:1,target:0,speed:1.2},$m(),this.renderer=new cs({canvas:t,antialias:!1,alpha:!1,stencil:!1,depth:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ie,this.renderer.localClippingEnabled=!0,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Gn,this.renderer.setClearColor(0,1),this.scene=new Oi,this.camera=new ai(30,1,4,24e3),this.camera.position.set(0,160,820),t.addEventListener("webglcontextlost",r=>{r.preventDefault(),this.contextLost=!0;for(let o of this.listeners.lost)o()}),t.addEventListener("webglcontextrestored",()=>{this.contextLost=!1,this.buildComposer();for(let r of this.listeners.restored)r()}),this.buildComposer(),this.setTheme(e)}get tier(){return _a[this.tierIndex]}on(t,e){return this.listeners[t].add(e),()=>this.listeners[t].delete(e)}buildComposer(){this.composer&&Bd(this.composer);let t=new Ke(this.width,this.height,{type:ii,samples:this.tier.msaa});this.composer=new ih(this.renderer,t),this.renderPass=new nh(this.scene,this.camera),this.bloomPass=new Ur(new tt(this.width,this.height),.3,.6,.9),Zm(this.bloomPass),this.passA=new Ns({...Hd,uniforms:Ni.clone(Hd.uniforms)}),this.outputPass=new sh,this.passB=new Ns({...kd,uniforms:Ni.clone(kd.uniforms)}),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(this.passA),this.composer.addPass(this.outputPass),this.composer.addPass(this.passB),this.applyTierToPasses(),this.applyThemeToPasses(),this.resize(!0)}applyTierToPasses(){this.bloomPass.enabled=this.tier.bloom}setTheme(t){this.theme=t,this.palette=Bs(t),this.applyThemeToPasses()}applyThemeToPasses(){let t=this.palette||Bs(this.theme);this.renderer.toneMapping=yb[t.toneMapping]||Ki,this.renderer.toneMappingExposure=t.exposure,this.bloomPass.strength=t.bloom,this.bloomPass.threshold=t.bloomThreshold,this.bloomPass.radius=t.bloomRadius;let e=this.passA.uniforms,i=this.passB.uniforms;i.uVignette.value=t.vignette,i.uGrain.value=t.grain,i.uLevels.value=t.levels||0,i.uSat.value=t.sat||1,i.uContrast.value=t.contrast||1,i.uVeilColor.value=Us(t.ink),i.uScan.value=t.pixel?.16:0}resize(t=!1){let e=Math.max(1,Math.floor(this.canvas.clientWidth||window.innerWidth)),i=Math.max(1,Math.floor(this.canvas.clientHeight||window.innerHeight)),n=Math.max(.5,Math.min(window.devicePixelRatio||1,this.tier.dpr)*this.scale);if(!(!t&&e===this.cssWidth&&i===this.cssHeight&&Math.abs(n-this.pixelRatio)<.001)){this.cssWidth=e,this.cssHeight=i,this.pixelRatio=n,this.width=Math.max(2,Math.round(e*n)),this.height=Math.max(2,Math.round(i*n)),this.renderer.setPixelRatio(n),this.renderer.setSize(e,i,!1),this.composer.setPixelRatio(n),this.composer.setSize(e,i),this.camera.aspect=e/i,this.camera.updateProjectionMatrix();for(let r of[this.passA,this.passB])r.uniforms.uRes.value=[this.width,this.height];this.passB.uniforms.uAspect.value=this.camera.aspect}}setQuality(t){let e=mt(Math.round(t),0,_a.length-1);if(e===this.tierIndex)return;let i=_a[e].msaa!==this.tier.msaa;this.tierIndex=e,this.scale=1,this.applyTierToPasses(),i?this.buildComposer():this.resize(!0);for(let n of this.listeners.tier)n(this.tier,e)}govern(t,e){if(this.forcedTier||!this.governor)return;let i=this.governor.update(t,e);i&&(i.type==="tier"&&this.setQuality(i.tier),i.scale!=null&&(this.scale=i.scale,this.resize(!0)))}render(t,e={}){if(this.contextLost)return;this.time+=t;let i=this.passA.uniforms,n=this.passB.uniforms,r=this.palette;i.uTime.value=this.time,n.uTime.value=this.time,i.uBlur.value=this.tier.blur?(e.blur!=null?e.blur:7)*(r.tilt>0?1:0):0,i.uTiltCenter.value=e.tiltCenter!=null?e.tiltCenter:.5,i.uTiltRange.value=e.tiltRange!=null?e.tiltRange:.2+(1-r.tilt)*.15,i.uCA.value=(r.aberration+(e.ca||0))*(this.tier.blur?1:.6),i.uWobble.value=e.wobble||0,i.uZoomBlur.value=e.zoomBlur||0,i.uDesat.value=e.desat||0,i.uPixel.value=r.pixel?Math.max(2,Math.round(r.pixel*this.pixelRatio)):e.pixel||0,n.uPixel.value=r.pixel?Math.max(2,Math.round(r.pixel*this.pixelRatio)):1;let o=e.tint||[1,1,1];i.uTint.value=o,i.uFlash.value=e.flash||0,e.flashColor&&(i.uFlashColor.value=e.flashColor),n.uFade.value=mt(this.fade.value+(e.fade||0)),n.uFadeColor.value=e.fadeColor||Us(r.paper==="#F4EDDF"?"#F4EDDF":r.skyZenith),n.uVignette.value=r.vignette+(e.vignette||0),e.bloom!=null&&this.bloomPass.enabled&&(this.bloomPass.strength=e.bloom);let a=e.spots||[];for(let l=0;l<6;l+=1){let c=a[l],h=n.uSpot.value[l],d=n.uSpotRect.value[l];c?(h.set(c.x,c.y,c.r,c.loupe?2:1),d.set(c.rect[0],c.rect[1],c.rect[2],c.rect[3])):h.w=0}this.composer.render(t)}dispose(){Bd(this.composer),this.renderer.dispose()}};var Mb=Object.freeze(["hero","lobby","results","celebrate"]),ah=class{constructor({targetFps:t=30,quietMs:e=2500,gapMs:i=1e3,idleModes:n=Mb}={}){this.targetFps=t,this.quietMs=e,this.gapMs=i,this.idleModes=n,this.lastActivity=null,this.lastDraw=null,this.idle=null}get intervalMs(){return 1e3/this.targetFps}wake(t){Number.isFinite(t)&&(this.lastActivity=t,this.idle=!1)}shouldDraw({mode:t,settled:e,now:i}){if(!this.idleModes.includes(t)||!e)return this.lastActivity=i,this.lastDraw=i,this.idle=!1,!0;if(this.lastActivity==null&&(this.lastActivity=i),i-this.lastActivity<this.quietMs)return this.lastDraw=i,this.idle=!1,!0;if(this.idle=!0,this.lastDraw==null)return this.lastDraw=i,!0;let n=i-this.lastDraw,r=this.intervalMs;return n>=r?(this.lastDraw=i-n%r,!0):!1}};var Ma=Math.PI*2,bb=.3,Jm=s=>s-bb*Math.sin(s),Gd=s=>{let t=(s+Math.PI)%Ma;return(t<0?t+Ma:t)-Math.PI},lh=class{constructor({yawPerPixel:t=.0072,pitchPerPixel:e=.0044,minPitch:i=-.2,maxPitch:n=.9,friction:r=4.2,maxSpeed:o=7,flingWindow:a=.1,tapSlop:l=5}={}){Object.assign(this,{yawPerPixel:t,pitchPerPixel:e,minPitch:i,maxPitch:n,friction:r,maxSpeed:o,flingWindow:a,tapSlop:l}),this.yaw=0,this.pitch=0,this.vyaw=0,this.vpitch=0,this.dragging=!1,this.reduced=!1,this.touched=!1,this.samples=[],this.tween=null,this.lastX=0,this.lastY=0}get rotated(){return Math.abs(Gd(this.yaw))>.02||Math.abs(this.pitch)>.02}get moving(){return this.dragging||!!this.tween||Math.abs(this.vyaw)>.012||Math.abs(this.vpitch)>.012}setReduced(t){this.reduced=!!t}begin(t,e,i){!Number.isFinite(t)||!Number.isFinite(e)||(this.dragging=!0,this.touched=!0,this.tween=null,this.vyaw=0,this.vpitch=0,this.lastX=t,this.lastY=e,this.samples.length=0,this.sample(i))}move(t,e,i,{pitch:n=!0}={}){if(!this.dragging||!Number.isFinite(t)||!Number.isFinite(e))return!1;let r=t-this.lastX,o=e-this.lastY;return this.lastX=t,this.lastY=e,this.yaw-=r*this.yawPerPixel,n&&(this.pitch=mt(this.pitch+o*this.pitchPerPixel,this.minPitch,this.maxPitch)),this.sample(i),r!==0||o!==0}end(t){if(!this.dragging)return;this.dragging=!1,this.vyaw=0,this.vpitch=0;let e=this.samples[this.samples.length-1];if(!this.reduced&&e&&Number.isFinite(t)&&t-e.t<.06){let i=this.samples.find(r=>e.t-r.t<=this.flingWindow)||e,n=e.t-i.t;n>=.012&&(this.vyaw=mt((e.yaw-i.yaw)/n,-this.maxSpeed,this.maxSpeed),this.vpitch=mt((e.pitch-i.pitch)/n,-this.maxSpeed,this.maxSpeed))}this.samples.length=0}sample(t){if(Number.isFinite(t))for(this.samples.push({t,yaw:this.yaw,pitch:this.pitch});this.samples.length>2&&t-this.samples[0].t>.3;)this.samples.shift()}update(t){if(t>0){if(t=Math.min(t,.05),this.tween){let e=this.tween;e.t+=t;let i=mt(e.t/e.dur),n=Yn(i);this.yaw=e.fromYaw+(e.toYaw-e.fromYaw)*n,this.pitch=e.fromPitch+(e.toPitch-e.fromPitch)*n,i>=1&&(this.tween=null,this.yaw=Gd(this.yaw));return}if(!this.dragging){if(this.vyaw||this.vpitch){this.yaw+=this.vyaw*t;let e=this.pitch+this.vpitch*t;this.pitch=mt(e,this.minPitch,this.maxPitch),this.pitch!==e&&(this.vpitch=0);let i=Math.exp(-this.friction*t);this.vyaw*=i,this.vpitch*=i,Math.abs(this.vyaw)<.012&&(this.vyaw=0),Math.abs(this.vpitch)<.012&&(this.vpitch=0)}Math.abs(this.yaw)>Ma&&(this.yaw=Gd(this.yaw))}}}tweenTo(t,e,i=.6){this.dragging=!1,this.vyaw=0,this.vpitch=0;let n=Math.max(.001,this.reduced?i*.3:i);this.tween={t:0,dur:n,fromYaw:this.yaw,fromPitch:this.pitch,toYaw:t,toPitch:mt(e,this.minPitch,this.maxPitch)}}reset(t=.9){!this.rotated&&!this.tween&&!this.dragging&&!this.vyaw&&!this.vpitch||this.tweenTo(Math.round(this.yaw/Ma)*Ma,0,t)}rotateBy(t,e=.5){let i=this.tween?this.tween.toYaw:this.yaw,n=this.tween?this.tween.toPitch:this.pitch;this.tweenTo(i+t,n,e)}snap(){this.yaw=0,this.pitch=0,this.vyaw=0,this.vpitch=0,this.tween=null,this.dragging=!1,this.samples.length=0}};var Sb=.5,Eb=3.2,wb=33,Tb=480,jm=240;function Ab(s,t=0){let e=Number(s);return Number.isFinite(e)?(e*=t===1?wb:t===2?Tb:1,mt(e,-jm,jm)):0}var Rb=(s,t=.0013)=>Math.exp(-s*t),ch=class{constructor({min:t=Sb,max:e=Eb,perPixel:i=.0013,ease:n=11}={}){Object.assign(this,{min:t,max:e,perPixel:i,ease:n}),this.value=1,this.target=1,this.reduced=!1,this.tween=null}get zoomed(){return Math.abs(Math.log(this.target))>.02}get moving(){return!!this.tween||Math.abs(Math.log(this.value/this.target))>8e-4}get atMin(){return this.target<=this.min*1.0005}get atMax(){return this.target>=this.max*.9995}setReduced(t){this.reduced=!!t,this.reduced&&(this.value=this.target)}wheel(t,e=0){let i=Ab(t,e);if(i===0)return!1;let n=mt(this.target*Rb(i,this.perPixel),this.min,this.max);return n===this.target||(this.target=n,this.tween=null,this.reduced&&(this.value=n)),!0}zoomBy(t){let e=mt(this.target*(Number.isFinite(t)&&t>0?t:1),this.min,this.max);return e===this.target?!1:(this.target=e,this.tween=null,this.reduced&&(this.value=e),!0)}reset(t=.9){this.tweenTo(1,t)}tweenTo(t,e=.9){let i=mt(Number.isFinite(t)&&t>0?t:1,this.min,this.max);if(this.target=i,this.reduced||!(e>0)||Math.abs(Math.log(this.value/i))<.002){this.value=i,this.tween=null;return}this.tween={t:0,dur:e,from:Math.log(this.value),to:Math.log(i)}}snap(){this.value=1,this.target=1,this.tween=null}update(t){if(!(t>0))return;if(this.reduced){this.value=this.target,this.tween=null;return}if(this.tween){let n=this.tween;n.t+=Math.min(t,.05);let r=mt(n.t/n.dur);this.value=Math.exp(n.from+(n.to-n.from)*Yn(r)),r>=1&&(this.tween=null,this.value=this.target);return}let e=1-Math.exp(-this.ease*Math.min(t,.05)),i=Math.exp(Math.log(this.value)+(Math.log(this.target)-Math.log(this.value))*e);this.value=Math.abs(Math.log(i/this.target))<4e-4?this.target:i}};var Vd="sabotage-stack-orbit-hint-v1";var Qm={left:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',right:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',reset:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12a7 7 0 1 0 2.2-5.1M5 4.5v4h4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',drop:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4.5" y="14" width="15" height="6" rx="1.6" fill="currentColor"/><path d="M12 3.5v7.5M8.4 7.6l3.6 3.6 3.6-3.6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',sabotage:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.4 2.5 5 13.6h6l-1.2 7.9 8.6-11.6h-6z" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>',minus:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5.5 12h13" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></svg>',plus:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 5.5v13M5.5 12h13" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></svg>'};function Cb(s,t=Vd){try{return!!(s&&s.getItem(t))}catch{return!1}}function Pb(s,t=Vd){try{s&&s.setItem(t,"1")}catch{}}function hh({doc:s=document,storage:t=null,touch:e=!1,hostId:i="title-screen",id:n="orbit-hud",dock:r=!0,layout:o="corner",hint:a=null,hintKey:l=Vd,onTurn:c=()=>{},onReset:h=()=>{},onZoom:d=()=>{},onToy:f=()=>{}}={}){let u=s.getElementById(i);if(!u)return null;let g=s.createElement("div");g.id=n,g.className="orbit-hud",g.setAttribute("role","group"),g.setAttribute("aria-label","3D view controls"),o==="stage"&&g.classList.add("is-stage"),Cb(t,l)&&g.classList.add("is-quiet");let m=s.createElement("p");m.className="orbit-hint";let p={touch:a&&a.touch||'<span class="orbit-hint-full">Swipe sideways to turn the scene</span><span class="orbit-hint-short">Swipe to turn</span>',mouse:a&&a.mouse||'<span class="orbit-hint-full"><b>Drag</b> with left or right click to turn the scene, <b>scroll</b> to zoom. Double-click resets.</span><span class="orbit-hint-short"><b>Drag</b> to turn, <b>scroll</b> to zoom</span>'};m.innerHTML=e?p.touch:p.mouse;let x=[],y=(T,N)=>{T.addEventListener("click",N),x.push([T,N])},M=(T,N,z,O="orbit",Y=T)=>{let G=s.createElement("button");return G.type="button",G.className="button orbit-btn",G.dataset[O]=T,G.setAttribute("aria-label",N),G.title=N,G.innerHTML=Qm[Y],y(G,z),G},_=M("left","Turn the 3D scene left",()=>c(-Math.PI/4)),b=M("reset","Reset the 3D view",()=>h()),E=M("right","Turn the 3D scene right",()=>c(Math.PI/4)),v=M("out","Zoom the 3D scene out",()=>d(1/1.3),"zoom","minus"),S=M("in","Zoom the 3D scene in",()=>d(1.3),"zoom","plus"),C=s.createElement("div");C.className="orbit-row",o==="stage"?C.append(v,S,_,b,E):C.append(m,v,S,_,b,E);let R=s.createElement("div");R.className="toy-dock",R.setAttribute("role","group"),R.setAttribute("aria-label","Play with the title");let I=(T,N,z,O)=>{let Y=s.createElement("button");return Y.type="button",Y.className="button toy-key",Y.dataset.toy=T,Y.title=O,Y.innerHTML=`${Qm[T]}<span class="toy-full">${N}</span><span class="toy-short">${z}</span>`,y(Y,()=>f(T)),Y};R.append(I("sabotage","Trigger sabotage","Sabotage","Let chat sabotage the title right now")),o==="stage"?g.append(m,C):r?g.append(R,C):g.append(C),u.appendChild(g);let L=NaN,F=NaN;return{root:g,place(T,N){Math.abs(T-L)<.75&&Math.abs(N-F)<.75||(L=T,F=N,g.style.left=`${Math.round(T)}px`,g.style.top=`${Math.round(N)}px`)},setRotated(T){g.classList.toggle("is-rotated",!!T)},setHeld(T=""){g.classList.toggle("is-held",!!T);for(let N of C.querySelectorAll("button")){N.dataset.label||(N.dataset.label=N.getAttribute("aria-label"));let z=T?`${N.dataset.label} (Held by ${T})`:N.dataset.label;N.setAttribute("aria-label",z),N.title=z,T?N.setAttribute("aria-disabled","true"):N.removeAttribute("aria-disabled")}},quiet(){g.classList.add("is-quiet"),Pb(t,l)},fade(){g.classList.add("is-quiet")},dispose(){for(let[T,N]of x)T.removeEventListener("click",N);x.length=0,g.remove()}}}var Ib='button, a, select, input, textarea, label, dialog, summary, [role="button"]:not(canvas):not(#game-canvas)',Db='input, textarea, select, dialog, video, audio, [contenteditable]:not([contenteditable="false"]), [role="textbox"], [role="slider"], [role="spinbutton"], [role="radio"], [role="tab"], [role="listbox"], [role="option"], [role="combobox"], [role="menu"], [role="menuitem"], [role="menuitemradio"], [role="menuitemcheckbox"], [role="tree"], [role="treeitem"], [role="grid"], [role="gridcell"]',Fb={mouse:'<span class="orbit-hint-full"><b>Drag</b> to turn, <b>scroll</b> to zoom</span><span class="orbit-hint-short"><b>Drag</b> to turn, <b>scroll</b> to zoom</span>'},Lb=".side-card, .play-card, .result-info, .multiplayer-results, .preview-card, .home-copy, .home-bottom, .topbar, .footer-note, .orbit-hud",Nb="#game-stage",Wd="sabotage-stack-play-view-hint-v1",dh=(s,t)=>!!(s&&s.closest&&s.closest(t)),uh=s=>dh(s,Ib)||dh(s,Lb)&&!dh(s,Nb),ci,fi,pt,ba,Os,Sa,e0,i0,Xd,Hs,n0,s0,Ea,qd,fh,r0,Hr,o0,a0,l0,Yd,c0,$d,kr,zr,ks,ph=class{constructor({doc:t=document,win:e=window,now:i=()=>performance.now(),onTap:n=()=>{},onRushIntro:r=()=>{},onToy:o=()=>{}}={}){Xa(this,pt);Xa(this,ci);Xa(this,fi);Object.assign(this,{doc:t,win:e,now:i,onTap:n,onRushIntro:r,onToy:o}),this.mode="",this.reduced=!1,hu(this,ci,new lh),hu(this,fi,new ch),this.pointer={x:0,y:0,px:0,py:0,speed:0,inside:!1,lastX:0,lastY:0,lastT:0,ndc:{x:0,y:0,set(a,l){this.x=a,this.y=l}}},this.drag=null,this.dragBlend=0,this.cursor="",this.lastRightTap=null,this.hud=null,this.playHud=null,this.resultsHud=null,this.lobbyHud=null,this.hintAge=0,this.playHintAge=0,this.resultsHintAge=0,this.lobbyHintAge=0,this.idleFor=0,this.lastActivity=0,this.contextGuardUntil=0,this.active=!1,this.disposed=!1,this.held=null}activate(){this.active||this.disposed||(this.active=!0,this.win.addEventListener("pointermove",this.onPointerMove=t=>Lt(this,pt,e0).call(this,t),{passive:!0}),this.win.addEventListener("pointerdown",this.onPointerDown=t=>Lt(this,pt,i0).call(this,t),{passive:!0}),this.win.addEventListener("pointerup",this.onPointerUp=t=>Lt(this,pt,Xd).call(this,t),{passive:!0}),this.win.addEventListener("pointercancel",this.onPointerCancel=t=>Lt(this,pt,Xd).call(this,t,!0),{passive:!0}),this.doc.documentElement.addEventListener("pointerleave",this.onPointerLeave=()=>{this.pointer.inside=!1}),this.win.addEventListener("blur",this.onBlur=()=>{this.pointer.inside=!1,Lt(this,pt,Hs).call(this,!0)}),this.win.addEventListener("contextmenu",this.onContextMenu=t=>{if(Lt(this,pt,Os).call(this),!Lt(this,pt,Hr).call(this))return;(this.drag&&this.drag.button===2||this.now()<this.contextGuardUntil||!uh(t.target))&&t.preventDefault()}),this.win.addEventListener("dblclick",this.onDoubleClick=t=>{Lt(this,pt,Os).call(this),this.mode!=="play"&&Lt(this,pt,Hr).call(this)&&!uh(t.target)&&Lt(this,pt,ks).call(this)}),this.win.addEventListener("wheel",this.onWheel=t=>Lt(this,pt,s0).call(this,t),{passive:!1}),this.win.addEventListener("keydown",this.onKeyDown=t=>Lt(this,pt,r0).call(this,t)))}get dragging(){return!!this.drag}get moving(){return!!this.drag||Ae(this,ci).moving||Ae(this,fi).moving}get view(){return{yaw:Ae(this,ci).yaw,pitch:Ae(this,ci).pitch,zoom:Ae(this,fi).value,rotated:Ae(this,ci).rotated,zoomed:Ae(this,fi).zoomed}}setContext({mode:t=this.mode,reduced:e=this.reduced,reenter:i=!1}={}){this.reduced=!!e,!(this.disposed||t===this.mode&&!i)&&(this.held&&(this.held=null,Lt(this,pt,ba).call(this)),this.mode=t,Lt(this,pt,Hs).call(this,!0),Ae(this,ci).snap(),Ae(this,fi).snap(),t==="hero"?Lt(this,pt,o0).call(this):(this.lastRightTap=null,this.dragBlend=0,this.setCursor("")),(t==="results"||t==="celebrate")&&Lt(this,pt,a0).call(this),t==="lobby"&&Lt(this,pt,l0).call(this),t==="play"||t==="arena"?Lt(this,pt,c0).call(this):Lt(this,pt,$d).call(this))}hold(t){if(this.disposed)return;if(this.held){this.held.reason!==t&&(this.held.reason=t,Lt(this,pt,ba).call(this));return}let e=Ae(this,ci),i=Ae(this,fi);this.held={reason:t,yaw:e.tween?e.tween.toYaw:e.yaw,pitch:e.tween?e.tween.toPitch:e.pitch,zoom:i.target},Lt(this,pt,Hs).call(this,!0),Lt(this,pt,fh).call(this,this.reduced?0:.8),Lt(this,pt,ba).call(this)}release(){let t=this.held;if(!t)return;this.held=null,Lt(this,pt,ba).call(this);let e=this.reduced?0:.9;Ae(this,ci).tweenTo(t.yaw,t.pitch,e),Ae(this,fi).setReduced(this.reduced),Ae(this,fi).tweenTo(t.zoom,e)}wake(){this.idleFor=0}endFrame(){this.pointer.speed*=.9}placeHud(t,e,i,n){let r=t==="hero"?this.hud:t==="results"?this.resultsHud:t==="lobby"?this.lobbyHud:this.playHud;if(!r)return;r.place(e,i),r.setRotated(Ae(this,ci).rotated||t!=="hero"&&Ae(this,fi).zoomed);let o=t==="hero"?"hintAge":t==="results"?"resultsHintAge":t==="lobby"?"lobbyHintAge":"playHintAge";this[o]+=n,this[o]>(t==="play"?12:10)&&r.fade()}samplePointer(t){let e=this.pointer,i=this.now(),n=this.win.innerWidth,r=this.win.innerHeight,o=Math.max(1,i-e.lastT),a=Math.hypot(t.clientX-e.lastX,t.clientY-e.lastY)/o*1e3;e.speed=Math.min(5e3,Math.max(a,e.speed*.6)),e.lastX=t.clientX,e.lastY=t.clientY,e.lastT=i,e.x=t.clientX/n*2-1,e.y=-(t.clientY/r*2-1),e.ndc.set(e.x,e.y),e.inside=!0,e.touch=t.pointerType==="touch",e.buttons=t.buttons||0,e.overUi=uh(t.target)}setCursor(t){t!==this.cursor&&(this.cursor=t,this.doc.documentElement.style.cursor=t)}update(t,e,{idleReset:i=!1,cameraDistance:n=1700}={}){let r=Ae(this,ci),o=Ae(this,fi),a=this.reduced,l=Math.asin(mt((10-e)/(n||1700),-.95,.95));r.setReduced(a),r.minPitch=Math.min(0,l-.045),r.update(t),o.setReduced(a),o.update(t);let c=!!this.drag||r.moving;return i&&!a&&(r.rotated||o.zoomed)&&!c&&!o.moving?(this.idleFor+=t,this.idleFor>30&&(Lt(this,pt,fh).call(this,2.4),this.idleFor=0)):(c||o.moving)&&(this.idleFor=0),this.dragBlend=jt(this.dragBlend,c?1:0,this.drag?14:2.2,t),{yaw:r.yaw,pitch:r.pitch,zoom:o.value,par:1-this.dragBlend}}dispose(){if(!this.disposed){for(let[t,e]of[["pointermove",this.onPointerMove],["pointerdown",this.onPointerDown],["pointerup",this.onPointerUp],["pointercancel",this.onPointerCancel],["blur",this.onBlur],["contextmenu",this.onContextMenu],["dblclick",this.onDoubleClick],["wheel",this.onWheel],["keydown",this.onKeyDown]])this.win.removeEventListener(t,e);this.doc.documentElement.removeEventListener("pointerleave",this.onPointerLeave),this.setCursor(""),Lt(this,pt,Hs).call(this,!0),this.hud&&(this.hud.dispose(),this.hud=null),Lt(this,pt,$d).call(this),this.resultsHud&&(this.resultsHud.dispose(),this.resultsHud=null),this.lobbyHud&&(this.lobbyHud.dispose(),this.lobbyHud=null),this.doc.documentElement.classList.remove("orbiting"),this.pointer.inside=!1,this.pointer.buttons=0,this.lastRightTap=null,this.contextGuardUntil=0,Ae(this,ci).snap(),Ae(this,fi).snap(),this.active=!1,this.disposed=!0}}};ci=new WeakMap,fi=new WeakMap,pt=new WeakSet,ba=function(){let t=Lt(this,pt,qd).call(this);t&&t.setHeld(this.held?this.held.reason:"")},Os=function(){this.lastActivity=this.now()},Sa=function(){this.idleFor=0,Lt(this,pt,Os).call(this)},e0=function(t){this.samplePointer(t),Lt(this,pt,Sa).call(this);let e=this.drag;if(!(!e||t.pointerId!==e.id)){if(t.pointerType==="mouse"&&t.buttons===0){Lt(this,pt,Hs).call(this,!1,t);return}!e.moved&&Math.hypot(t.clientX-e.x,t.clientY-e.y)>Ae(this,ci).tapSlop&&(e.moved=!0),Ae(this,ci).move(t.clientX,t.clientY,t.timeStamp/1e3,{pitch:!e.touch})}},i0=function(t){if(this.onRushIntro(),this.samplePointer(t),Lt(this,pt,Sa).call(this),!Lt(this,pt,Hr).call(this,t.button)||this.drag||!t.isPrimary||t.button!==0&&t.button!==2||this.pointer.overUi||this.held)return;this.drag={id:t.pointerId,x:t.clientX,y:t.clientY,t:t.timeStamp,button:t.button,moved:!1,touch:t.pointerType==="touch"},Ae(this,ci).begin(t.clientX,t.clientY,t.timeStamp/1e3),this.doc.documentElement.classList.add("orbiting");let e=this.win.getSelection&&this.win.getSelection();e&&e.removeAllRanges&&e.removeAllRanges()},Xd=function(t,e=!1){this.pointer.buttons=t.buttons||0,Lt(this,pt,Os).call(this);let i=this.drag;!i||t.pointerId!==i.id||(t.pointerType==="touch"&&(this.pointer.inside=!1),Lt(this,pt,Hs).call(this,e,t))},Hs=function(t=!1,e=null){let i=this.drag;if(i){if(this.drag=null,Ae(this,ci).end(e?e.timeStamp/1e3:this.now()/1e3),i.button===2&&(this.contextGuardUntil=this.now()+500),this.doc.documentElement.classList.remove("orbiting"),i.moved){Lt(this,pt,Ea).call(this);return}!t&&e&&i.button===0&&e.timeStamp-i.t<600?this.onTap(e):!t&&e&&i.button===2&&Lt(this,pt,n0).call(this,e)}},n0=function(t){let e=this.lastRightTap,i=t.timeStamp;e&&i-e.t<420&&Math.hypot(t.clientX-e.x,t.clientY-e.y)<12?(this.lastRightTap=null,Lt(this,pt,ks).call(this)):this.lastRightTap={t:i,x:t.clientX,y:t.clientY}},s0=function(t){if(Lt(this,pt,Os).call(this),!(t.defaultPrevented||t.ctrlKey||t.metaKey||!Lt(this,pt,Hr).call(this))&&!(Math.abs(t.deltaX)>Math.abs(t.deltaY)||uh(t.target)||this.doc.querySelector("dialog[open]"))){if(this.held){t.deltaY&&t.preventDefault();return}Ae(this,fi).setReduced(this.reduced),Ae(this,fi).wheel(t.deltaY,t.deltaMode)&&(t.preventDefault(),Lt(this,pt,Ea).call(this))}},Ea=function(){Lt(this,pt,Sa).call(this);let t=Lt(this,pt,qd).call(this);t&&t.quiet()},qd=function(){switch(this.mode){case"hero":return this.hud;case"results":case"celebrate":return this.resultsHud;case"lobby":return this.lobbyHud;default:return this.playHud}},fh=function(t=.9){Ae(this,ci).reset(t),Ae(this,fi).reset(t),Lt(this,pt,Sa).call(this)},r0=function(t){if(Lt(this,pt,Os).call(this),this.onRushIntro(),!Lt(this,pt,Hr).call(this)||t.defaultPrevented||t.ctrlKey||t.metaKey||t.altKey||dh(t.target,Db))return;let e=t.shiftKey?Math.PI/2:Math.PI/8;t.key==="ArrowLeft"?(Lt(this,pt,kr).call(this,-e,.35),t.preventDefault()):t.key==="ArrowRight"?(Lt(this,pt,kr).call(this,e,.35),t.preventDefault()):t.key==="Home"||t.key==="0"?(Lt(this,pt,ks).call(this),t.preventDefault()):t.key==="+"||t.key==="="?(Lt(this,pt,zr).call(this,1.3),t.preventDefault()):(t.key==="-"||t.key==="_")&&(Lt(this,pt,zr).call(this,1/1.3),t.preventDefault())},Hr=function(t=2){switch(this.mode){case"hero":case"results":case"arena":case"lobby":case"celebrate":return!0;case"play":return t===2;default:return!1}},o0=function(){if(this.hud)return;this.hintAge=0;let t=null;try{t=this.win.localStorage}catch{t=null}let e=!!(this.win.matchMedia&&this.win.matchMedia("(pointer: coarse)").matches);this.hud=hh({doc:this.doc,storage:t,touch:e,onTurn:i=>Lt(this,pt,kr).call(this,i),onReset:()=>Lt(this,pt,ks).call(this),onZoom:i=>Lt(this,pt,zr).call(this,i),onToy:()=>this.onToy()})},a0=function(){this.resultsHintAge=0,this.resultsHud||(this.resultsHud=Lt(this,pt,Yd).call(this,"results-screen","orbit-hud-results"))},l0=function(){this.lobbyHintAge=0,this.lobbyHud||(this.lobbyHud=Lt(this,pt,Yd).call(this,"room-screen","orbit-hud-lobby"))},Yd=function(t,e){let i=null;try{i=this.win.localStorage}catch{i=null}let n=!!(this.win.matchMedia&&this.win.matchMedia("(pointer: coarse)").matches);return hh({doc:this.doc,storage:i,touch:n,hostId:t,id:e,dock:!1,hint:Fb,onTurn:r=>Lt(this,pt,kr).call(this,r),onReset:()=>Lt(this,pt,ks).call(this),onZoom:r=>Lt(this,pt,zr).call(this,r)})},c0=function(){if(this.playHud||(this.playHintAge=0,this.win.matchMedia&&this.win.matchMedia("(pointer: coarse)").matches))return;let t=null;try{t=this.win.localStorage}catch{t=null}let e=0;try{e=Number(t.getItem(`${Wd}-shown`))||0,t.setItem(`${Wd}-shown`,String(e+1))}catch{e=0}let i={mouse:'<span class="orbit-hint-full"><b>Right-drag</b> to look around, <b>scroll</b> to zoom</span><span class="orbit-hint-short"><b>Right-drag</b> to look, <b>scroll</b> to zoom</span>'};this.playHud=hh({doc:this.doc,storage:t,hostId:"game-screen",id:"orbit-hud-play",dock:!1,layout:"stage",hint:i,hintKey:Wd,onTurn:n=>Lt(this,pt,kr).call(this,n),onReset:()=>Lt(this,pt,ks).call(this),onZoom:n=>Lt(this,pt,zr).call(this,n)}),e>=3&&this.playHud&&this.playHud.fade()},$d=function(){this.playHud&&(this.playHud.dispose(),this.playHud=null)},kr=function(t,e){this.held||(Ae(this,ci).rotateBy(t,e),Lt(this,pt,Ea).call(this))},zr=function(t){this.held||(Ae(this,fi).setReduced(this.reduced),Ae(this,fi).zoomBy(t),Lt(this,pt,Ea).call(this))},ks=function(){this.held||Lt(this,pt,fh).call(this)};var se=s=>{let[t,e,i]=Us(s);return new ct().setRGB(t,e,i,Ie)};function h0(s,{stars:t=0,stripedSun:e=!1,sunSize:i=.035,sunDir:n=[-.34,.2,-1],sunColor:r="#FFE2A8",sunGlow:o=.5}={}){let a=new xe({side:je,depthWrite:!1,fog:!1,uniforms:{uHorizon:{value:se(s.skyHorizon)},uMid:{value:se(s.skyMid)},uZenith:{value:se(s.skyZenith)},uJ0:{value:se(s.journey[0])},uJ1:{value:se(s.journey[1])},uJ2:{value:se(s.journey[2])},uJ3:{value:se(s.journey[3])},uAltitude:{value:0},uJourney:{value:1},uTime:{value:0},uStars:{value:t},uSunDir:{value:new P(...n).normalize()},uSunColor:{value:se(r)},uSunSize:{value:i},uSunGlow:{value:o},uStripes:{value:e?1:0},uDim:{value:1}},vertexShader:`
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
    `}),l=new st(new ye(9e3,48,24),a);return l.frustumCulled=!1,l.renderOrder=-100,{mesh:l,material:a}}function u0(s,t,{boxes:e=[]}={}){let i=new Oi,n=new st(new ye(50,32,16),new xe({side:je,uniforms:{top:{value:se(t.skyZenith)},mid:{value:se(t.skyMid)},bottom:{value:se(t.ground)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:"varying vec3 vP; uniform vec3 top, mid, bottom; void main(){ float h = vP.y; vec3 c = h > 0. ? mix(mid, top, smoothstep(0., .9, h)) : mix(mid, bottom, smoothstep(0., -.7, h)); gl_FragColor = vec4(c, 1.); }"}));i.add(n);for(let a of e){let l=new st(new Fe(a.w,a.h),new oe({color:se(a.color).multiplyScalar(a.intensity||4),side:le}));l.position.set(...a.pos),l.lookAt(0,0,0),i.add(l)}let r=new En(s),o=r.fromScene(i,.035);return r.dispose(),n.geometry.dispose(),n.material.dispose(),i.traverse(a=>{a.isMesh&&a!==n&&(a.geometry.dispose(),a.material.dispose())}),o.texture}function Ub(s,t,e=1024){let i=document.createElement("canvas");i.width=i.height=e;let n=i.getContext("2d"),r=e/2,o=e/2-4,a=(c,h)=>[r+Math.cos(h)*c*o,r+Math.sin(h)*c*o];if(s==="paper"){n.fillStyle=t.plinth,n.fillRect(0,0,e,e);let c=n.createRadialGradient(r,r,0,r,r,o);c.addColorStop(0,"rgba(255,255,255,.55)"),c.addColorStop(1,"rgba(120,90,40,.10)"),n.fillStyle=c,n.fillRect(0,0,e,e),n.strokeStyle=t.teal,n.globalAlpha=.55;for(let d of[.25,.5,.75])n.lineWidth=2.2,n.beginPath(),n.arc(r,r,d*o,0,Zt),n.stroke();n.lineWidth=1.4,n.beginPath(),n.arc(r,r,.12*o,0,Zt),n.stroke(),n.globalAlpha=1,n.strokeStyle=t.ink;for(let d=0;d<360;d+=5){let f=d*Math.PI/180,u=d%45===0,g=d%15===0,[m,p]=a(.935,f),[x,y]=a(u?.86:g?.895:.915,f);n.lineWidth=u?4:g?2.6:1.6,n.globalAlpha=u?.9:.6,n.beginPath(),n.moveTo(m,p),n.lineTo(x,y),n.stroke()}n.globalAlpha=1,n.strokeStyle=t.amber,n.lineWidth=8,n.beginPath(),n.arc(r,r,o*.97,0,Zt),n.stroke(),n.strokeStyle=t.ink,n.globalAlpha=.55,n.lineWidth=2,n.beginPath(),n.moveTo(r-o*.1,r),n.lineTo(r+o*.1,r),n.moveTo(r,r-o*.1),n.lineTo(r,r+o*.1),n.stroke(),n.globalAlpha=.8,n.fillStyle=t.ink,n.font=`700 ${e*.034}px Fraunces, serif`,n.textAlign="center",n.textBaseline="middle";for(let[d,f]of[["0",0],["90",Math.PI/2],["180",Math.PI],["270",-Math.PI/2]]){let[u,g]=a(.8,f);n.fillText(d,u,g)}let h=We(11);n.globalAlpha=.05;for(let d=0;d<700;d+=1)n.fillStyle=h()>.5?"#6b5a3a":"#ffffff",n.fillRect(h()*e,h()*e,1+h()*2,1+h()*2)}else if(s==="sunset"){n.fillStyle="#10062a",n.fillRect(0,0,e,e),n.strokeStyle="#FF4FD8",n.shadowColor="#FF4FD8",n.shadowBlur=10,n.lineWidth=3;for(let c=1;c<=6;c+=1)n.beginPath(),n.arc(r,r,c/6*o*.96,0,Zt),n.stroke();n.strokeStyle="#2EC4B6",n.shadowColor="#2EC4B6";for(let c=0;c<24;c+=1){let h=c/24*Zt;n.beginPath(),n.moveTo(r,r),n.lineTo(...a(.96,h)),n.stroke()}n.shadowBlur=0,n.strokeStyle=t.amber,n.lineWidth=10,n.beginPath(),n.arc(r,r,o*.985,0,Zt),n.stroke()}else{let c=n.createRadialGradient(r,r,0,r,r,o);c.addColorStop(0,"#2447C9"),c.addColorStop(.7,"#0B1B5C"),c.addColorStop(1,"#050C26"),n.fillStyle=c,n.fillRect(0,0,e,e),n.strokeStyle=t.amber,n.globalAlpha=.9;for(let h=0;h<36;h+=1){let d=h/36*Zt;n.lineWidth=h%3===0?5:2,n.globalAlpha=h%3===0?.85:.35,n.beginPath(),n.moveTo(...a(.2,d)),n.lineTo(...a(.94,d)),n.stroke()}n.globalAlpha=1,n.lineWidth=6;for(let h of[.2,.58,.97])n.beginPath(),n.arc(r,r,h*o,0,Zt),n.stroke();n.fillStyle=t.amber,n.beginPath(),n.arc(r,r,.05*o,0,Zt),n.fill()}let l=new hi(i);return l.colorSpace=Ie,l.anisotropy=8,l.generateMipmaps=!0,l.minFilter=un,l}function d0(s,t,e=250){let i=new lt,n=[[0,-70],[e+64,-70],[e+64,-42],[e+58,-36],[e+22,-30],[e+18,-20],[e+10,-11],[e+4,-5],[e,0],[0,0]].map(([d,f])=>new tt(d,f)),r=s==="primetime"?new Xe({color:t.plinth,roughness:.18,metalness:.5,clearcoat:1,envMapIntensity:1.3}):s==="sunset"?new Ht({color:t.plinth,roughness:.6,metalness:.1,emissive:"#3a0f66",emissiveIntensity:.5}):new Ht({color:"#EADFC8",roughness:.82,metalness:0}),o=new st(new kn(n,128),r);o.receiveShadow=!0,o.castShadow=!1,i.add(o);let a=Ub(s,t),l=s==="primetime"?new Xe({map:a,roughness:.2,metalness:.25,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.2}):s==="sunset"?new Ht({map:a,emissiveMap:a,emissive:"#ffffff",emissiveIntensity:.55,roughness:.7}):new Ht({map:a,roughness:.9,metalness:0}),c=new st(new ti(e-2,128).rotateX(-Math.PI/2),l);c.position.y=.2,c.receiveShadow=!0,i.add(c);let h=new st(new Ce(e+1,2.6,10,160).rotateX(Math.PI/2),new Ht({color:t.plinthRim,emissive:t.plinthRim,emissiveIntensity:s==="paper"?0:1.2,roughness:.35,metalness:s==="paper"?0:.8}));return h.position.y=.4,i.add(h),i.userData.dispose=()=>{o.geometry.dispose(),r.dispose(),c.geometry.dispose(),l.dispose(),a.dispose(),h.geometry.dispose(),h.material.dispose()},i}function f0(s,t,{y:e=-64,radius:i=8800}={}){let n=new lt,r=s==="primetime"?new Xe({color:t.floor,roughness:.22,metalness:.4,clearcoat:.6,envMapIntensity:.9}):s==="sunset"?new Ht({color:t.floor,roughness:.9,metalness:0}):new Ht({color:t.floor,roughness:.95,metalness:0}),o=new st(new ti(i,96).rotateX(-Math.PI/2),r);o.position.y=e,o.receiveShadow=!0,n.add(o);let a=new xe({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{uColor:{value:se(t.floorLine)},uTime:{value:0},uCell:{value:s==="sunset"?90:48},uFade:{value:s==="sunset"?4200:2600},uStrength:{value:s==="paper"?.5:s==="sunset"?1.5:.35},uScroll:{value:s==="sunset"?1:0},uMajor:{value:s==="paper"?5:4},uScrollDir:{value:new tt(0,1)}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
    `});a.extensions={derivatives:!0};let l=new st(new ti(i*.55,64).rotateX(-Math.PI/2),a);return l.position.y=e+.4,l.renderOrder=-20,n.add(l),n.userData.update=c=>{a.uniforms.uTime.value=c},n.userData.setViewYaw=c=>{a.uniforms.uScrollDir.value.set(Math.sin(c),Math.cos(c))},n.userData.dispose=()=>{o.geometry.dispose(),r.dispose(),l.geometry.dispose(),a.dispose()},n.userData.floorMesh=o,n}function p0({count:s=260,box:t=[1200,900,900],color:e="#FFE7B8",size:i=5,speed:n=1,opacity:r=.7}={}){let o=We(33),a=new Float32Array(s*3),l=new Float32Array(s*2);for(let f=0;f<s;f+=1)a[f*3]=(o()-.5)*t[0],a[f*3+1]=(o()-.5)*t[1],a[f*3+2]=(o()-.5)*t[2],l[f*2]=o()*Zt,l[f*2+1]=.4+o()*1.2;let c=new ge;c.setAttribute("position",new Be(a,3)),c.setAttribute("aSeed",new Be(l,2));let h=new xe({transparent:!0,depthWrite:!1,blending:Oe,uniforms:{uTime:{value:0},uCenter:{value:new P},uBox:{value:new P(...t)},uColor:{value:se(e)},uSize:{value:i},uScale:{value:800},uOpacity:{value:r},uSpeed:{value:n}},vertexShader:`
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
    `}),d=new ws(c,h);return d.frustumCulled=!1,d.renderOrder=6,d.userData.dispose=()=>{c.dispose(),h.dispose()},d}function m0(s=1){let t=We(s*31+7),e=[],i=4+Math.floor(t()*3);for(let a=0;a<i;a+=1){let l=i===1?0:a/(i-1),c=1-Math.abs(l-.5)*2;e.push({x:(l-.5)*3.2+(t()-.5)*.2,r:.5+c*.5+t()*.18})}let n=new cn,r=e[0].x-e[0].r*.92,o=e[i-1].x+e[i-1].r*.92;n.moveTo(r,0);for(let a=0;a<=90;a+=1){let l=r+(o-r)*a/90,c=0;for(let h of e){let d=(l-h.x)/h.r;Math.abs(d)<1&&(c=Math.max(c,Math.sqrt(1-d*d)*h.r))}n.lineTo(l,c*.9)}return n.lineTo(o,0),n.closePath(),n}function Zd({width:s=6e3,base:t=-200,amp:e=160,freq:i=.0012,seed:n=1,step:r=40,bottom:o=-900}){let a=new cn;a.moveTo(-s/2,o);for(let l=-s/2;l<=s/2;l+=r)a.lineTo(l,t+Gm(l*i,n,4)*e+(Math.abs(l)/s)**2*e*1.4);return a.lineTo(s/2,o),a.closePath(),new qo(a)}function wa(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new ge;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){let d=s[h],f=0,u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in d.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(d.attributes[g]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in d.morphAttributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[g].length!==s[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(d.morphAttributes[g]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=d.index.count;else if(d.attributes.position!==void 0)g=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(e){let h=0,d=[];for(let f=0;f<s.length;++f){let u=s[f].index;for(let g=0;g<u.count;++g)d.push(u.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(d)}for(let h in r){let d=g0(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){let u=[];for(let m=0;m<o[h].length;++m)u.push(o[h][m][f]);let g=g0(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function g0(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Be(o,e,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let f=0,u=h.count;f<u;f++)for(let g=0;g<e;g++){let m=h.getComponent(f,g);a.setComponent(f+d,g,m)}}else o.set(h.array,l);l+=h.count*e}return n!==void 0&&(a.gpuType=n),a}var Ta={paper:{x:4.3,y:57.4,z:9.3,r:3.7},sunset:{x:3.9,y:37.6,z:7.3,r:3},primetime:{x:4.1,y:49.2,z:8.8,r:3.5}},Kd=1500,x0=104,v0=14,Gr=x0*v0;function Jd(s){let t=[];if(s==="sunset"){let i=new ae(18,28,11);i.translate(0,14,0);let n=new ae(15,15,15);n.translate(0,36,0);let r=new ae(5,20,6);r.translate(-12,18,0);let o=new ae(5,20,6);o.translate(12,18,0),t.push(i,n,r,o)}else if(s==="primetime"){let i=new On(10,22,4,10);i.translate(0,21,0);let n=new ye(10.5,14,10);n.translate(0,47,0),t.push(i,n)}else{let i=[[0,0],[15,0],[15.5,4],[11,32],[7.5,43],[0,44]].map(([a,l])=>new tt(a,l)),n=new kn(i,14),r=new ye(11,16,12);r.translate(0,55,0);let o=new ei(8,13,12);o.translate(0,70,0),t.push(n,r,o)}let e=wa(t.map(i=>i.toNonIndexed?i.toNonIndexed():i),!1);for(let i of t)i.dispose();return e.computeVertexNormals(),e}function Bb(s,t,e){if(s==="sunset")return new ae(t,6,e);if(s==="primetime"){let o=new ae(t,9,e),a=new ae(t+4,3,5);a.translate(0,2,e/2);let l=wa([o,a].map(c=>c.toNonIndexed()));return o.dispose(),a.dispose(),l}let i=new Wo(1,3);i.scale(t/2,11,e/2+6);let n=i.attributes.position,r=We(t+e);for(let o=0;o<n.count;o+=1){let a=n.getX(o),l=n.getY(o),c=n.getZ(o),h=Math.sin(a*.045)*4+Math.sin(a*.11+c*.07)*3+r()*.3;n.setXYZ(o,a,l>0?l+h*.5:l*.45,c)}return i.computeVertexNormals(),i}var mh=class{constructor(t,e,{max:i=700,density:n=1}={}){this.theme=t,this.palette=e,this.group=new lt,this.centerY=0,this.excite=0,this.time=0,this.attention={x:0,z:0,amount:0,interest:0},this.spread=0,this.spreadGoal=0,this.ballotColors=ds[t]||ds.paper;let r=We(101),o=[],a=[];for(let m=0;m<v0;m+=1)for(let p of[-1,1])for(let x of[0,1]){let y=p*(x===0?450+m%4*64:980+m%3*110)+(r()-.5)*24,M=x===0?-70-m%3*80:-520-m%2*120,_=m*x0+(x?46:0),b=x?1.5:1;a.push({x:y,y:_,z:M,w:250*b,d:92*b});for(let E=0;E<2;E+=1)for(let v=0;v<(x?5:6);v+=1)o.push({x:y+(v-(x?2:2.5))*38*b+(r()-.5)*8,y:_+6*b,z:M+(E===0?16:-18)*b+(r()-.5)*6,s:b})}for(let m=o.length-1;m>0;m-=1){let p=Math.floor(r()*(m+1));[o[m],o[p]]=[o[p],o[m]]}this.slots=o.slice(0,i),this.count=this.slots.length,this.max=this.count;let l=this.count;this.seed=new Float32Array(l),this.speed=new Float32Array(l),this.raise=new Float32Array(l),this.target=new Float32Array(l),this.option=new Int8Array(l).fill(-1),this.key=new Float32Array(l),this.lean=new Float32Array(l),this.facing=new Float32Array(l);for(let m=0;m<l;m+=1)this.seed[m]=r()*Zt,this.speed[m]=1.2+r()*1.6,this.key[m]=r(),this.lean[m]=(r()-.5)*.12,this.facing[m]=(r()-.5)*.5;let c=t==="sunset"?new Ht({roughness:.8,flatShading:!0,emissive:"#ffffff",emissiveIntensity:.18}):t==="primetime"?new Ht({roughness:.6,metalness:.1,color:"#0a1233",emissive:"#16308a",emissiveIntensity:.25}):new Ht({roughness:.78,metalness:0});this.figures=new li(Jd(t),c,l),this.figures.frustumCulled=!1,this.figures.instanceMatrix.setUsage(Li);let h=t==="sunset"?["#FFC53D","#2EC4B6","#9B5DE5","#FF5964","#B983FF","#FF8FAB"]:t==="primetime"?["#1B3CAA","#16308f","#2447C9","#0f1f6b","#27399a","#3b2a7a"]:[e.amber,e.teal,e.blue,e.vermilion,e.violet,e.rose,"#EFE2C4"],d=new ct;for(let m=0;m<l;m+=1){let p=h[Math.floor(r()*h.length)%h.length];d.set(p),t==="paper"&&d.lerp(new ct("#F4EDDF"),.18+r()*.18),this.figures.setColorAt(m,d)}this.figures.instanceColor.needsUpdate=!0;let f=new ae(28,36,1.8);f.translate(0,18,0),this.cards=new li(f,new Ht({roughness:.5,metalness:.05,emissive:"#ffffff",emissiveIntensity:t==="paper"?.04:.55}),l),this.cards.frustumCulled=!1,this.cards.instanceMatrix.setUsage(Li);for(let m=0;m<l;m+=1)this.cards.setColorAt(m,d.set("#ffffff"));this.cards.instanceColor.needsUpdate=!0,this.eye=Ta[t]||Ta.paper,this.eyeMaterial=new Ht({color:"#ffffff",roughness:.22,emissive:"#ffffff",emissiveIntensity:t==="paper"?.2:.45,flatShading:t==="sunset"}),this.pupilMaterial=new Ht({color:"#15111c",roughness:.3,flatShading:t==="sunset"}),this.eyes=new li(new ye(1,7,5),this.eyeMaterial,l*2),this.pupils=new li(new ye(1,6,4),this.pupilMaterial,l*2);for(let m of[this.eyes,this.pupils])m.frustumCulled=!1,m.instanceMatrix.setUsage(Li);this.pupilX=new Float32Array(l),this.pupilY=new Float32Array(l),this.pupilVX=new Float32Array(l),this.pupilVY=new Float32Array(l),this.gaze={x:0,y:260,z:260,amount:.85},this.waves=[],this.lastWave=-99,this.frenzy=0,this.uproar=0,this.mFigure=new Yt,this.mLocal=new Yt,this.mOut=new Yt,this.vPos=new P,this.vScale=new P,this.qNone=new Je;let u=new Map;this.shelfMeshes=[];for(let m of a){let p=`${m.w}|${m.d}`;u.has(p)||u.set(p,{geometry:Bb(t,m.w,m.d),items:[]}),u.get(p).items.push(m)}let g=t==="sunset"?new Ht({color:"#2b1155",emissive:"#FF4FD8",emissiveIntensity:.55,roughness:.6}):t==="primetime"?new Ht({color:"#0b1b5c",roughness:.3,metalness:.6,emissive:"#FFC83D",emissiveIntensity:.1}):new Ht({color:"#FFF8EA",roughness:.95,emissive:"#FFF1D0",emissiveIntensity:.12});for(let{geometry:m,items:p}of u.values()){let x=new li(m,g,p.length);x.frustumCulled=!1,x.receiveShadow=!1,x.userData.items=p,this.shelfMeshes.push(x),this.group.add(x)}this.dummy=new Ve,this.dummy.rotation.order="YXZ",this.group.add(this.figures,this.cards,this.eyes,this.pupils),this.density=1,this.setDensity(n),this.ballot=null,this.ballotKey="",this.shelfMaterial=g,this.figMaterial=c}setDensity(t){this.density=t;let e=Math.max(40,Math.round(this.max*t));this.figures.count=e,this.cards.count=e,this.eyes.count=e*2,this.pupils.count=e*2,this.visible=e}setCenterY(t){this.centerY=t}setSpread(t,e=!1){this.spreadGoal=t,e&&(this.spread=t)}setBallot(t){if(!t){this.ballot&&(this.ballot=null,this.ballotKey="");return}let e=`${t.voted.toFixed(2)}|${t.fractions.map(o=>o.toFixed(2)).join(",")}|${t.colors?t.colors.join(""):""}`;if(e===this.ballotKey)return;this.ballotKey=e,this.ballot=t;let i=t.colors||this.ballotColors,n=new ct,r=t.fractions.reduce((o,a)=>o+a,0)||1;for(let o=0;o<this.count;o+=1)if(this.key[o]<t.voted){let a=this.key[o]/Math.max(1e-4,t.voted),l=0,c=2;for(let h=0;h<3;h+=1)if(l+=t.fractions[h]/r,a<=l){c=h;break}this.target[o]=1,this.option[o]!==c&&(this.option[o]=c,this.cards.setColorAt(o,n.set(i[c])))}else this.target[o]=0;this.cards.instanceColor.needsUpdate=!0}clearBallot(){this.ballot=null,this.ballotKey="";for(let t=0;t<this.count;t+=1)this.target[t]=0}cheer(t=1){this.excite=Math.min(2.5,this.excite+t)}setGaze(t,e,i,n=1){let r=this.gaze;r.x=t,r.y=e,r.z=i,r.amount=n}wave(t=1,{speed:e=1250,width:i=520,gap:n=3.2}={}){return this.time-this.lastWave<n?!1:(this.lastWave=this.time,this.waves.length>3&&this.waves.shift(),this.waves.push({t0:this.time,dir:t>=0?1:-1,speed:e,width:i}),!0)}chaos(t=1){this.uproar=Math.min(1.4,this.uproar+t),this.excite=Math.min(2.5,this.excite+t*.8)}setAttention(t,e,i,n=0){let r=this.attention;r.x=t,r.z=e,r.amount=i,r.interest=n}update(t,e){this.time=e,this.excite=jt(this.excite,0,1.6,t),this.spread=jt(this.spread,this.spreadGoal,3.2,t);let i=this.spread;this.frenzy=jt(this.frenzy,this.ballot?1:0,3,t),this.uproar=jt(this.uproar,0,.8,t);let n=Math.min(1.4,this.frenzy+this.uproar),r=this.uproar,o=this.waves;for(let p=o.length-1;p>=0;p-=1)(e-o[p].t0)*o[p].speed>Kd*2+o[p].width+200&&o.splice(p,1);let a=this.gaze,l=this.eye,c=Math.min(t,.033),h=this.dummy,d=this.centerY,f=this.visible,u=this.attention,g=u.amount>.004,m=this.excite+u.interest*.55+this.frenzy*.5;for(let p=0;p<f;p+=1){let x=this.slots[p],y=x.x+(x.x<0?-i:i);this.raise[p]=jt(this.raise[p],this.target[p],7+this.seed[p]%3,t);let M=d+Br(x.y-d+Gr/2,Gr)-Gr/2,_=Math.sin(e*this.speed[p]+this.seed[p])*1.4*(1+m),b=0;for(let F=0;F<o.length;F+=1){let T=o[F],N=(e-T.t0)*T.speed-(T.dir>0?y+Kd:Kd-y);N>0&&N<T.width&&(b=Math.max(b,Math.sin(Math.PI*N/T.width)))}let E=Math.max(0,Math.sin(e*(7+this.speed[p])+this.seed[p]*3))*m*9+b*30*x.s,v=0,S=0,C=0;if(g){let F=u.x-y,T=u.z-x.z,N=Math.atan2(F,T);v=mt(N,-.75,.75)*u.amount,S=u.amount*ke(1900,420,Math.hypot(F,T)),C=N}let R=this.facing[p]*(1-u.amount*.7)+v+Math.sin(e*.6+this.seed[p])*.12,I=S*.24*(.8+.2*Math.sin(e*2.1+this.seed[p]));h.position.set(y,M+_+E,x.z),h.rotation.set(I*Math.cos(C-R),R,this.lean[p]+Math.sin(e*2*this.speed[p]+this.seed[p])*.03*(1+m)-I*Math.sin(C-R)),h.scale.set(x.s,x.s*(1+S*.09+b*.16),x.s),h.updateMatrix(),this.figures.setMatrixAt(p,h.matrix);{let F=a.x-y,T=a.z-x.z,N=a.y-(M+l.y*x.s),z=Math.hypot(F,T)+1,O=Math.sin(Math.atan2(F,T)-R)*a.amount,Y=mt(N/z*1.6,-1,1)*a.amount;if(r>.02){let dt=e*15+this.seed[p]*3;O+=Math.cos(dt)*r*.9,Y+=Math.sin(dt)*r*.9}O+=Math.sin(e*(4+this.speed[p])+this.seed[p])*.07*(1+m),Y+=Math.cos(e*(3+this.speed[p])+this.seed[p]*2)*.05*(1+m),O=mt(O,-1,1),Y=mt(Y,-1,1),this.pupilVX[p]+=((O-this.pupilX[p])*85-this.pupilVX[p]*6.5)*c,this.pupilVY[p]+=((Y-this.pupilY[p])*85-this.pupilVY[p]*6.5)*c,this.pupilX[p]+=this.pupilVX[p]*c,this.pupilY[p]+=this.pupilVY[p]*c;let G=mt(this.pupilX[p],-1.2,1.2)*.5,$=mt(this.pupilY[p],-1.2,1.2)*.5,et=Math.sqrt(Math.max(.12,1-G*G-$*$))*.78;this.mFigure.copy(h.matrix);for(let dt=0;dt<2;dt+=1){let xt=dt===0?-l.x:l.x;this.vPos.set(xt,l.y,l.z),this.vScale.setScalar(l.r),this.mLocal.compose(this.vPos,this.qNone,this.vScale),this.mOut.multiplyMatrices(this.mFigure,this.mLocal),this.eyes.setMatrixAt(p*2+dt,this.mOut),this.vPos.set(xt+G*l.r,l.y+$*l.r,l.z+et*l.r),this.vScale.setScalar(l.r*.52),this.mLocal.compose(this.vPos,this.qNone,this.vScale),this.mOut.multiplyMatrices(this.mFigure,this.mLocal),this.pupils.setMatrixAt(p*2+dt,this.mOut)}}let L=this.raise[p];if(L<.01)h.scale.setScalar(0);else{let F=Math.sin(e*(14+this.speed[p]*4)+this.seed[p]*5),T=44*x.s+L*18*x.s+(Math.abs(F)*11*n+b*16)*x.s;h.position.set(y+(12+F*6*n)*x.s,M+_+E+T,x.z+8),h.rotation.set(0,this.facing[p]*.4,Math.sin(e*5+this.seed[p])*.1+F*(.1+.5*n)),h.scale.setScalar(x.s*(.3+.7*L))}h.updateMatrix(),this.cards.setMatrixAt(p,h.matrix)}this.figures.instanceMatrix.needsUpdate=!0,this.cards.instanceMatrix.needsUpdate=!0,this.eyes.instanceMatrix.needsUpdate=!0,this.pupils.instanceMatrix.needsUpdate=!0;for(let p of this.shelfMeshes){let x=p.userData.items;for(let y=0;y<x.length;y+=1){let M=x[y],_=d+Br(M.y-d+Gr/2,Gr)-Gr/2;h.position.set(M.x+(M.x<0?-i:i),_-3,M.z),h.rotation.set(0,0,0),h.scale.setScalar(1),h.updateMatrix(),p.setMatrixAt(y,h.matrix)}p.instanceMatrix.needsUpdate=!0}}dispose(){this.figures.geometry.dispose(),this.figMaterial.dispose(),this.cards.geometry.dispose(),this.cards.material.dispose(),this.eyes.geometry.dispose(),this.pupils.geometry.dispose(),this.eyeMaterial.dispose(),this.pupilMaterial.dispose();for(let t of this.shelfMeshes)t.geometry.dispose();this.shelfMaterial.dispose()}};function Ob(s,t){let e=new lt,i=new zi(se(s.key),t==="paper"?2.3:t==="sunset"?2.4:3);i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.bias=-7e-4,i.shadow.normalBias=.6,i.shadow.radius=t==="paper"?5:2.5;let n=560;Object.assign(i.shadow.camera,{left:-n,right:n,top:n,bottom:-n,near:20,far:2600}),i.position.set(-420,640,760),i.target.position.set(0,0,0);let r=new zn(se(s.fill),se(s.ground),t==="paper"?.6:.85),o=new zi(se(s.rim),t==="paper"?.8:2.2);o.position.set(520,260,-640);let a=new zi(se(s.fill),t==="paper"?.35:.55);return a.position.set(120,120,900),e.add(i,i.target,r,o,a),{group:e,key:i,hemi:r,rim:o,front:a}}function Hb(s,t,e){let i=We(3),n=new lt;n.name="decor",s.add(n);let r=[],o=[];t.hills.forEach((f,u)=>{let g=Zd({width:9e3+u*1800,base:-150+u*40,amp:220-u*22,freq:85e-5+u*2e-4,seed:u*3+1,bottom:-1200}),m=new Ht({color:f,roughness:1,metalness:0,emissive:f,emissiveIntensity:.16,fog:!0}),p=new st(g,m);p.position.set(0,-60-u*6,-1100-u*760),p.receiveShadow=!1,n.add(p),o.push(p),r.push(g,m)});let a=[1,2,3,4].map(f=>{let u=new Hn(m0(f),{depth:.22,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:2,curveSegments:6});return u.center(),u}),l=new Ht({color:"#FFFDF6",roughness:.95,emissive:"#FFF0D2",emissiveIntensity:.16,fog:!0}),c=[],h=3200;for(let f=0;f<30;f+=1){let u=new st(a[f%4],l),g=-650-i()*2300,m=34+i()*60+-g*.022;u.userData={x:(i()-.5)*3600,y:i()*h,z:g,speed:4+i()*9,scale:m},u.scale.set(m,m,m*.5),u.castShadow=!1,u.receiveShadow=!1,n.add(u),c.push(u)}r.push(...a,l);let d=new st(new ti(4200,48,0,Zt),new xe({transparent:!0,depthWrite:!1,side:le,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:"varying vec2 vP; uniform float uTime; void main(){ float a = atan(vP.y, vP.x); float r = length(vP)/4200.; float s = smoothstep(.35,.5,.5+.5*sin(a*14.+uTime*.05)); gl_FragColor = vec4(1.,.93,.75, s*.1*(1.-r)*smoothstep(0.,.25,r)); }"}));return d.position.set(-1200,500,-3600),d.renderOrder=-50,n.add(d),r.push(d.geometry,d.material),{group:n,update({time:f,focusY:u,altitude:g,dim:m}){for(let p of c){let x=p.userData,y=Br(x.y-u*.62+h/2,h)-h/2;p.position.set(x.x+f*x.speed*.4,u+y,x.z),p.visible=!0}l.emissiveIntensity=.16*(1-g*.7),l.color.set("#FFFDF6").lerp(new ct("#7f8fb8"),mt(g*1.2-.2,0,.85)),o.forEach((p,x)=>{p.position.y=-60-x*6-u*(.2+x*.09),p.material.emissiveIntensity=.16*(1-g*.8)*m}),d.material.uniforms.uTime.value=f,d.position.y=500+u*.3,d.material.opacity=1-g},dispose(){for(let f of r)f.dispose();s.remove(n)}}}function kb(s,t){let e=new lt;s.add(e);let i=[],n=[];[["#2a0b52","#FF4FD8"],["#1d0840","#7a3cff"],["#13052c","#2EC4B6"]].forEach(([h,d],f)=>{let u=Zd({width:9e3,base:20+f*10,amp:520-f*120,freq:.0011+f*4e-4,seed:9+f*2,step:220,bottom:-1e3}),g=new oe({color:h,fog:!0}),m=new st(u,g);m.position.set(0,-52,-2600+f*700);let p=[],x=u.attributes.position;for(let _=1;_<x.count;_+=1)x.getY(_)>-900&&x.getY(_)<2e3&&p.push(new P(x.getX(_),x.getY(_),.5));p.sort((_,b)=>_.x-b.x);let y=new ge().setFromPoints(p.filter((_,b)=>b%1===0)),M=new ln({color:d,transparent:!0,opacity:.9,fog:!0});m.add(new br(y,M)),e.add(m),n.push(m),i.push(u,g,y,M)});let o=[],a=new ei(1,1.4,4,1,!0).toNonIndexed(),l=new is(new ei(1,1.4,4)),c=We(8);for(let h=0;h<16;h+=1){let d=new ln({color:["#FF4FD8","#2EC4B6","#FFC53D","#9B5DE5"][h%4],transparent:!0,opacity:.85}),f=new Un(h%5===4?new is(new Ce(1,.12,6,14)):l,d);f.userData={x:(c()-.5)*3600,y:c()*3e3,z:-700-c()*1500,s:36+c()*70,sp:.2+c()*.6,ph:c()*Zt},e.add(f),o.push(f),i.push(d)}return i.push(a,l),{group:e,update({time:h,focusY:d,altitude:f,dim:u}){n.forEach((g,m)=>{g.position.y=-52-d*(.22+m*.12)});for(let g of o){let m=g.userData;g.position.set(m.x,d*.55+Br(m.y-d*.4,3e3)-800+Math.sin(h*m.sp+m.ph)*24,m.z),g.rotation.set(h*m.sp*.7,h*m.sp,0),g.scale.setScalar(m.s)}},dispose(){for(let h of i)h.dispose();s.remove(e)}}}function zb(s,t){let e=new lt;s.add(e);let i=[],n=new st(new ti(1500,96),new xe({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uGold:{value:se(t.amber)},uBlue:{value:se("#2447C9")}},vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`varying vec2 vP; uniform float uTime; uniform vec3 uGold, uBlue;
      void main(){
        float r = length(vP)/1500.; float a = atan(vP.y, vP.x);
        float rays = smoothstep(.0,.06, abs(sin(a*12.+uTime*.12))-.35);
        float ring = smoothstep(.02,.0,abs(r-.62))+smoothstep(.015,.0,abs(r-.9))*.8+smoothstep(.02,.0,abs(r-.3))*.6;
        vec3 c = mix(uBlue*.8, uGold, rays*.55+ring);
        float alpha = (1.-smoothstep(.85,1.,r))*(.1+rays*.16+ring*.22);
        gl_FragColor = vec4(c, alpha);
      }`}));n.position.set(0,520,-1400),e.add(n),i.push(n.geometry,n.material);let r=new st(new _e(2600,2600,2800,64,1,!0,Math.PI*.65,Math.PI*.7),new xe({side:je,transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uGold:{value:se(t.amber)},uCyan:{value:se(t.teal)},uShift:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`varying vec2 vUv; varying vec3 vW; uniform float uTime, uShift; uniform vec3 uGold, uCyan;
      void main(){
        vec2 g = vec2(vUv.x * 150., (vUv.y*2800. + uShift*.6) / 34.);
        vec2 f = fract(g) - .5; float dotm = smoothstep(.42,.2,length(f));
        float chev = abs(sin((g.x*.12 + g.y*.5 + uTime*.7)));
        float band = smoothstep(.55,.95,chev);
        vec3 c = mix(uCyan, uGold, smoothstep(.2,.8,.5+.5*sin(g.y*.08 + uTime*.4)));
        float a = dotm * (.06 + band * .5) * smoothstep(0.,.5,vUv.y) ;
        gl_FragColor = vec4(c, a);
      }`}));r.position.set(0,600,-200),e.add(r),i.push(r.geometry,r.material);let o=[],a=new ei(1,1,32,1,!0);a.translate(0,-.5,0);let l=new xe({transparent:!0,depthWrite:!1,blending:Oe,side:le,uniforms:{uColor:{value:se("#FFF1CF")},uOpacity:{value:.05}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = position.y; vec4 mv = modelViewMatrix*vec4(position,1.); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying float vY; varying vec3 vN; varying vec3 vV; uniform vec3 uColor; uniform float uOpacity; void main(){ float fres = pow(abs(dot(vN,vV)),1.5); gl_FragColor = vec4(uColor, uOpacity * fres * (1.+vY) ); }"}),c=["#FFF1CF","#FFC83D","#4F7BFF","#FF7FA8","#35D0E8"];for(let m=0;m<7;m+=1){let p=l.clone();p.uniforms={uColor:{value:se(c[m%c.length])},uOpacity:{value:.045+m%3*.01}};let x=new st(a,p);x.scale.set(160,1900,160),x.userData={x:(m-3)*360,ph:m*1.3,sp:.35+m%3*.12},e.add(x),o.push(x),i.push(p)}i.push(a,l);let h=new Ht({color:"#0b1b5c",metalness:.85,roughness:.25,emissive:t.amber,emissiveIntensity:.06}),d=new st(new ae(3400,22,22),h);e.add(d),i.push(d.geometry,h);let f=[],u=new ye(7,10,8),g=new oe({color:t.amber});for(let m=0;m<28;m+=1){let p=new st(u,g);p.position.set((m-13.5)*120,-16,14),d.add(p),f.push(p)}return i.push(u,g),{group:e,update({time:m,focusY:p,altitude:x,tick:y=0}){n.material.uniforms.uTime.value=m+y,n.position.y=520+p*.82,n.rotation.z=m*.02,r.material.uniforms.uTime.value=m,r.position.y=600+p*.9,r.material.uniforms.uShift.value=p,d.position.set(0,p+760,-300),o.forEach(M=>{let _=M.userData;M.position.set(_.x,p+760,-300),M.rotation.z=Math.sin(m*_.sp+_.ph)*.5,M.rotation.x=Math.cos(m*_.sp*.8+_.ph)*.18}),f.forEach((M,_)=>{M.scale.setScalar(.7+.5*Math.max(0,Math.sin(m*4-_*.55)))})},dispose(){for(let m of i)m.dispose();s.remove(e)}}}function y0(s,t,{crowdDensity:e=1}={}){let i=t.palette,n=new lt;t.scene&&t.scene.environmentRotation&&(t.scene.environmentRotation.y=0);let r=Ob(i,s);n.add(r.group);let o=h0(i,s==="paper"?{stars:1,sunSize:.0035,sunDir:[-.42,.16,-1],sunColor:"#FFE2A8",sunGlow:.75}:s==="sunset"?{stars:1,stripedSun:!0,sunSize:.0042,sunDir:[.02,-.006,-1],sunColor:"#FF8C42",sunGlow:.16}:{stars:0,sunSize:0,sunDir:[0,.5,-1],sunColor:"#8CAEFF",sunGlow:.15});o.mesh.name="sky",n.add(o.mesh);let a=u0(t.renderer,i,{boxes:s==="primetime"?[{w:60,h:30,pos:[20,40,30],color:"#FFF1CF",intensity:6},{w:40,h:40,pos:[-40,10,-20],color:"#4F7BFF",intensity:3}]:s==="sunset"?[{w:50,h:30,pos:[0,10,-40],color:"#FF6B35",intensity:3},{w:40,h:20,pos:[-30,30,10],color:"#9B5DE5",intensity:2}]:[{w:55,h:28,pos:[-25,38,30],color:"#FFF4DC",intensity:4},{w:36,h:22,pos:[35,12,-10],color:"#CFE8EA",intensity:1.6}]}),l=d0(s,i);l.name="plinth",n.add(l);let c=f0(s,i);c.name="ground",n.add(c);let h=p0({count:s==="paper"?220:160,color:s==="paper"?"#FFE7B8":s==="sunset"?"#FF9BE8":"#BBD0FF",size:s==="paper"?5:4.2,opacity:s==="paper"?.8:.9});h.name="motes",n.add(h);let d=s==="paper"?Hb(n,i):s==="sunset"?kb(n,i):zb(n,i),f=new mh(s,i,{max:520,density:e});f.group.name="crowd",n.add(f.group);let u=new To(se(i.fog),i.fogDensity),g=new ct,m=new ct,p={},x=1,y=0,M=r.key.intensity,_=r.hemi.intensity,b=r.rim.intensity,E=r.front.intensity;return{theme:s,root:n,lights:r,sky:o,plinth:l,ground:c,crowd:f,motes:h,decor:d,envTexture:a,fog:u,palette:i,update({time:v,dt:S,focusY:C,altitude:R,dim:I=1,camera:L,shadowFocus:F=null,fogDist:T=1e3,tick:N=0}){let z=o.material.uniforms;z.uAltitude.value=R,z.uTime.value=v,z.uDim.value=I,o.mesh.position.copy(L.position);let O=i.journey,Y=mt(R,0,1)*3,G=Math.min(2,Math.floor(Y)),$=Y-G;g.set(i.fog),m.set(O[G]).lerp(g.clone().set(O[Math.min(3,G+1)]),$),u.color.copy(g.set(i.fog).lerp(m,.12+.88*ke(.03,.4,R))).multiplyScalar(I),u.density=i.fogDensity/32e-5*.2884/Math.max(300,T)*(1+R*.5);let et=1-R*(s==="paper"?.62:.4);r.key.intensity=M*et*I,r.hemi.intensity=_*(.55+.45*et)*(.35+.65*I),r.rim.intensity=b*(1+R*.6)*I,r.front.intensity=E*I;let dt=F||{x:0,y:C};r.key.target.position.set(dt.x,dt.y,0),r.key.position.set(dt.x-420,dt.y+640,760),r.key.target.updateMatrixWorld(),r.key.updateMatrixWorld(),c.userData.update(v+N),h.material.uniforms.uTime.value=v,h.material.uniforms.uCenter.value.set(0,C,0),h.material.uniforms.uScale.value=t.height*.9,d.update({time:v,dt:S,focusY:C,altitude:R,dim:I,tick:N}),f.setCenterY(C),f.update(S,v),x=I},setCrowdDensity(v){f.setDensity(v)},setViewYaw(v){if(Math.abs(v-y)<1e-5)return;y=v;let S=Jm(v);r.group.rotation.y=v,f.group.rotation.y=v,d.group.rotation.y=S,o.mesh.rotation.y=S,c.userData.setViewYaw(v),t.scene&&t.scene.environmentRotation&&(t.scene.environmentRotation.y=v)},get viewYaw(){return y},dispose(){d.dispose(),f.dispose(),l.userData.dispose(),c.userData.dispose(),h.userData.dispose(),o.mesh.geometry.dispose(),o.material.dispose(),a.dispose(),r.key.shadow.map&&r.key.shadow.map.dispose()}}}var Aa=new P;function ji(s,t,e,i,n,r){let o=2*Math.PI*n/4,a=Math.max(r-2*n,0),l=Math.PI/4;Aa.copy(t),Aa[i]=0,Aa.normalize();let c=.5*o/(o+a),h=1-Aa.angleTo(s)/l;return Math.sign(Aa[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Vr=class s extends ae{constructor(t=1,e=1,i=1,n=2,r=.1){let o=n*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:n,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,h=new P(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,g=d.length/6,m=new P,p=.5/o;for(let x=0,y=0;x<d.length;x+=3,y+=2)switch(l.fromArray(d,x),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[x+0]=h.x*Math.sign(l.x)+c.x*r,d[x+1]=h.y*Math.sign(l.y)+c.y*r,d[x+2]=h.z*Math.sign(l.z)+c.z*r,f[x+0]=c.x,f[x+1]=c.y,f[x+2]=c.z,Math.floor(x/g)){case 0:m.set(1,0,0),u[y+0]=ji(m,c,"z","y",r,i),u[y+1]=1-ji(m,c,"y","z",r,e);break;case 1:m.set(-1,0,0),u[y+0]=1-ji(m,c,"z","y",r,i),u[y+1]=1-ji(m,c,"y","z",r,e);break;case 2:m.set(0,1,0),u[y+0]=1-ji(m,c,"x","z",r,t),u[y+1]=ji(m,c,"z","x",r,i);break;case 3:m.set(0,-1,0),u[y+0]=1-ji(m,c,"x","z",r,t),u[y+1]=1-ji(m,c,"z","x",r,i);break;case 4:m.set(0,0,1),u[y+0]=1-ji(m,c,"x","y",r,t),u[y+1]=1-ji(m,c,"y","x",r,e);break;case 5:m.set(0,0,-1),u[y+0]=ji(m,c,"x","y",r,t),u[y+1]=1-ji(m,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var Vi=22,qe=21.2,Ti=120,Qi=360,zs=null;function Gb(){if(zs)return zs;let s=128,t=document.createElement("canvas");t.width=t.height=s;let e=t.getContext("2d"),i=e.createImageData(s,s),n=We(5);for(let r=0;r<s*s;r+=1){let o=r%s,a=Math.floor(r/s),l=.5+.18*Math.sin(o*.35+Math.sin(a*.11)*3)+(n()-.5)*.5,c=Math.max(0,Math.min(255,l*255));i.data[r*4]=i.data[r*4+1]=i.data[r*4+2]=c,i.data[r*4+3]=255}return e.putImageData(i,0,0),zs=new hi(t),zs.wrapS=zs.wrapT=dr,zs.repeat.set(2,1),zs}function Vb(s,t,e=5){let i=new cn;for(let n=0;n<e*2;n+=1){let r=n%2===0?s:t,o=-Math.PI/2+n*Math.PI/e,a=Math.cos(o)*r,l=Math.sin(o)*r;n===0?i.moveTo(a,l):i.lineTo(a,l)}return i.closePath(),i}var Wr=class{constructor(t="paper"){this.geometries=new Map,this.materials=new Map,this.edgeGeometries=new Map,this.star=new Hn(Vb(6.2,2.7),{depth:1.4,bevelEnabled:!0,bevelThickness:.5,bevelSize:.5,bevelSegments:1}),this.starMaterial=null,this.setTheme(t)}setTheme(t){this.theme=t,this.palette=Bs(t);for(let e of this.materials.values())e.dispose();this.materials.clear();for(let e of this.geometries.values())e.dispose();this.geometries.clear();for(let e of this.edgeGeometries.values())e.dispose();this.edgeGeometries.clear(),this.starMaterial&&this.starMaterial.dispose(),this.starMaterial=new Ht({color:this.palette.ink,emissive:this.theme==="paper"?"#000000":this.palette.amber,emissiveIntensity:this.theme==="paper"?0:1.6,roughness:.5,metalness:this.theme==="primetime"?.6:0})}radius(t){let e=this.theme==="sunset"?0:this.theme==="primetime"?2.4:3.6;return Math.min(e,t/4,qe/2-.2)}geometry(t,e=Ti,i=qe){let n=Math.max(2,Math.round(t/2)*2),r=`${n}|${e}|${i}`,o=this.geometries.get(r);return o||(o=this.theme==="sunset"?new ae(n,i,e):new Vr(n,i,e,3,this.radius(n)),o.userData.quantWidth=n,this.geometries.set(r,o)),o}edges(t,e=Ti,i=qe){let n=Math.max(2,Math.round(t/2)*2),r=`${n}|${e}|${i}`,o=this.edgeGeometries.get(r);return o||(o=new is(new ae(n,i,e)),o.userData.quantWidth=n,this.edgeGeometries.set(r,o)),o}color(t){return _i(this.theme,t)}material(t,e="solid"){let i=this.color(t),n=`${i}|${e}`,r=this.materials.get(n);return r||(this.theme==="sunset"?r=new Ht({color:i,emissive:i,emissiveIntensity:.38,roughness:.78,metalness:.04,flatShading:!0}):this.theme==="primetime"?r=new Xe({color:i,roughness:.16,metalness:.1,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.4,emissive:i,emissiveIntensity:.06}):r=new Xe({color:i,roughness:.55,metalness:0,clearcoat:.3,clearcoatRoughness:.42,sheen:.6,sheenColor:new ct("#fff4dc"),sheenRoughness:.5,envMapIntensity:.9,bumpMap:Gb(),bumpScale:.45}),e==="ghost"&&(r.transparent=!0,r.depthWrite=!1),e==="clipped"&&(r.clippingPlanes=[]),this.materials.set(n,r),r)}uniqueMaterial(t){return this.material(t).clone()}mesh(t,{depth:e=Ti,shadow:i=!0}={}){let n=Math.max(1,t.right!=null?t.right-t.left:t.width),r=this.geometry(n,e),o=new st(r,this.material(t.color));if(o.scale.x=n/r.userData.quantWidth,o.castShadow=i,o.receiveShadow=!0,this.theme==="sunset"){let a=new Un(this.edges(n,e),new ln({color:this.palette.ink,transparent:!0,opacity:.85}));o.add(a),o.userData.edges=a}return o.userData.width=n,o}addPerfectStar(t,e){if(t.userData.star)return;let i=new st(this.star,this.starMaterial);i.position.set(0,0,Ti/2+.2),i.scale.setScalar(Math.min(1.1,e/60)),i.castShadow=!1,t.add(i),t.userData.star=i}dispose(){for(let t of this.materials.values())t.dispose();for(let t of this.geometries.values())t.dispose();for(let t of this.edgeGeometries.values())t.dispose();this.star.dispose(),this.starMaterial&&this.starMaterial.dispose()}};var gh=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],_0=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],jd=s=>Math.hypot(s[0],s[1],s[2]);function Wb(s){let t=Math.hypot(s[0],s[1],s[2],s[3])||1;s[0]/=t,s[1]/=t,s[2]/=t,s[3]/=t}function M0(s){let[t,e,i,n]=s;return[1-2*(e*e+i*i),2*(t*e-i*n),2*(t*i+e*n),2*(t*e+i*n),1-2*(t*t+i*i),2*(e*i-t*n),2*(t*i-e*n),2*(e*i+t*n),1-2*(t*t+e*e)]}var b0=(s,t)=>[s[0]*t[0]+s[1]*t[1]+s[2]*t[2],s[3]*t[0]+s[4]*t[1]+s[5]*t[2],s[6]*t[0]+s[7]*t[1]+s[8]*t[2]],Xb=(s,t)=>[s[0]*t[0]+s[3]*t[1]+s[6]*t[2],s[1]*t[0]+s[4]*t[1]+s[7]*t[2],s[2]*t[0]+s[5]*t[1]+s[8]*t[2]];function Ra({pos:s,half:t,vel:e=[0,0,0],angVel:i=[0,0,0],quat:n=[0,0,0,1],density:r=.0012,restitution:o=.32,friction:a=.55,life:l=1/0,data:c=null}){let[h,d,f]=t,u=8*h*d*f*r,g=u/12*((2*d)**2+(2*f)**2),m=u/12*((2*h)**2+(2*f)**2),p=u/12*((2*h)**2+(2*d)**2);return{pos:[...s],half:[...t],vel:[...e],angVel:[...i],quat:[...n],mass:u,invMass:1/u,invInertia:[1/g,1/m,1/p],restitution:o,friction:a,age:0,life:l,resting:0,asleep:!1,data:c}}var Xr=class{constructor({gravity:t=-520,floorY:e=()=>0,linearDamping:i=.04,angularDamping:n=.35}={}){this.gravity=t,this.floorY=e,this.linearDamping=i,this.angularDamping=n,this.bodies=[]}add(t){return this.bodies.push(t),t}remove(t){let e=this.bodies.indexOf(t);e>=0&&this.bodies.splice(e,1)}clear(){this.bodies.length=0}step(t){let e=Math.max(1,Math.ceil(t/.008333333333333333)),i=t/e;for(let n=0;n<e;n+=1)for(let r of this.bodies)r.asleep||this.integrate(r,i);for(let n of this.bodies)n.age+=t}corners(t){let e=M0(t.quat),i=[];for(let n=-1;n<=1;n+=2)for(let r=-1;r<=1;r+=2)for(let o=-1;o<=1;o+=2){let a=[n*t.half[0],r*t.half[1],o*t.half[2]];i.push(b0(e,a))}return i}integrate(t,e){t.vel[1]+=this.gravity*e;let i=Math.max(0,1-this.linearDamping*e),n=Math.max(0,1-this.angularDamping*e);for(let d=0;d<3;d+=1)t.vel[d]*=i,t.angVel[d]*=n,t.pos[d]+=t.vel[d]*e;let[r,o,a]=t.angVel,l=t.quat,c=[.5*(r*l[3]+o*l[2]-a*l[1]),.5*(o*l[3]+a*l[0]-r*l[2]),.5*(a*l[3]+r*l[1]-o*l[0]),.5*(-r*l[0]-o*l[1]-a*l[2])];l[0]+=c[0]*e,l[1]+=c[1]*e,l[2]+=c[2]*e,l[3]+=c[3]*e,Wb(l),this.collideFloor(t);let h=jd(t.vel)+jd(t.angVel)*Math.max(...t.half);t.resting=h<14&&t.pos[1]-t.half[1]<this.floorY(t.pos[0],t.pos[2])+Math.max(...t.half)*1.6?t.resting+e:0,t.resting>.7&&(t.asleep=!0,t.vel=[0,0,0],t.angVel=[0,0,0])}invInertiaWorld(t,e){let i=M0(t.quat),n=Xb(i,e);return b0(i,[n[0]*t.invInertia[0],n[1]*t.invInertia[1],n[2]*t.invInertia[2]])}collideFloor(t){let e=[0,1,0],i=0;for(let n=0;n<3;n+=1)for(let r of this.corners(t)){let o=t.pos[0]+r[0],a=t.pos[1]+r[1],l=t.pos[2]+r[2],c=this.floorY(o,l)-a;if(c<=0)continue;i=Math.max(i,c);let h=[t.vel[0]+t.angVel[1]*r[2]-t.angVel[2]*r[1],t.vel[1]+t.angVel[2]*r[0]-t.angVel[0]*r[2],t.vel[2]+t.angVel[0]*r[1]-t.angVel[1]*r[0]],d=h[1];if(d>=0)continue;let f=gh(r,e),u=t.invMass+_0(gh(this.invInertiaWorld(t,f),r),e),m=-(1+(d<-90?t.restitution:0))*d/u;t.vel[1]+=m*t.invMass;let p=this.invInertiaWorld(t,f);t.angVel[0]+=p[0]*m,t.angVel[1]+=p[1]*m,t.angVel[2]+=p[2]*m;let x=[h[0],0,h[2]],y=jd(x);if(y>.001){let M=[x[0]/y,0,x[2]/y],_=gh(r,M),b=t.invMass+_0(gh(this.invInertiaWorld(t,_),r),M),E=Math.min(y/b,t.friction*m);t.vel[0]-=M[0]*E*t.invMass,t.vel[2]-=M[2]*E*t.invMass,p=this.invInertiaWorld(t,_),t.angVel[0]-=p[0]*E,t.angVel[1]-=p[1]*E,t.angVel[2]-=p[2]*E}}i>0&&(t.pos[1]+=i*.85)}settle(t=3,e=1/60){for(let i=0;i<t;i+=e)this.step(e)}};function xh({plinthRadius:s=250,ground:t=-64}={}){return(e,i)=>{let n=Math.hypot(e,i);return n<=s?0:n>=s+22?t:t*((n-s)/22)}}var fs=s=>s*Vi+Vi/2,Gs=s=>s-Qi/2,ni=Ti/2+.6,Ca=(s,t=1.7)=>se(s).multiplyScalar(t);function Tn(s,t=1){return new oe({color:Ca(s),transparent:!0,opacity:t,blending:Oe,depthWrite:!1,side:le,toneMapped:!1})}var E0="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",qb=`varying vec2 vUv; uniform vec3 uColor; uniform float uTime, uDash, uSpeed, uOpacity;
  void main(){
    float d = fract(vUv.x * uDash - uTime * uSpeed);
    float a = smoothstep(0.0, 0.18, d) * smoothstep(0.78, 0.5, d);
    a *= smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.7, vUv.y);
    gl_FragColor = vec4(uColor, a * uOpacity);
  }`;function vh(s,{dash:t=14,speed:e=1.4,opacity:i=1}={}){return new xe({transparent:!0,depthWrite:!1,blending:Oe,side:le,toneMapped:!1,uniforms:{uColor:{value:Ca(s,1.9)},uTime:{value:0},uDash:{value:t},uSpeed:{value:e},uOpacity:{value:i}},vertexShader:E0,fragmentShader:qb})}var qr=class{constructor(t,e,i){this.count=t,this.width=e,this.positions=new Float32Array(t*6);let n=new Float32Array(t*4),r=[];for(let a=0;a<t;a+=1){let l=a/(t-1);if(n.set([l,0,l,1],a*4),a<t-1){let c=a*2;r.push(c,c+1,c+2,c+1,c+3,c+2)}}let o=new ge;o.setAttribute("position",new Be(this.positions,3).setUsage(Li)),o.setAttribute("uv",new Be(n,2)),o.setIndex(r),this.mesh=new st(o,i),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7}set(t,e=0){let i=this.count,n=this.positions,r=[];for(let o=0;o<i;o+=1)r.push(t(o/(i-1)));for(let o=0;o<i;o+=1){let a=r[Math.max(0,o-1)],l=r[Math.min(i-1,o+1)],c=l[0]-a[0],h=l[1]-a[1],d=Math.hypot(c,h)||1;c/=d,h/=d;let f=-h*this.width/2,u=c*this.width/2;n.set([r[o][0]+f,r[o][1]+u,e,r[o][0]-f,r[o][1]-u,e],o*6)}this.mesh.geometry.attributes.position.needsUpdate=!0}dispose(){this.mesh.geometry.dispose()}};function S0(s,t,e=256,i=64,n=5){let r=document.createElement("canvas");r.width=e,r.height=i;let o=r.getContext("2d");o.strokeStyle=s,o.lineWidth=n,o.lineCap="round",o.lineJoin="round";for(let l of t)o.beginPath(),l.forEach(([c,h],d)=>d?o.lineTo(c*e,h*i):o.moveTo(c*e,h*i)),o.stroke();let a=new hi(r);return a.colorSpace=Ie,a}var _h=class{constructor(t){this.tower=t,this.group=new lt,this.group.name="effects",t.body.add(this.group),this.kit=t.kit,this.currentId="",this.built=new Map,this.active=null,this.clock=0,this.sparkTimer=0,this.spot=null,this.mover=null}get palette(){return this.kit.palette}setKit(t){this.kit=t;for(let e of this.built.values())this.group.remove(e.group),e.dispose();this.built.clear(),this.active=null,this.currentId=""}attachMover(t){this.mover=t;for(let e of this.built.values())e.attach&&e.attach(t)}update(t,e,i,n){let r=t.effect,o=r?r.id:"";if(this.spot=null,o!==this.currentId&&(this.active&&(this.active.group.visible=!1,this.active.off&&this.active.off(e)),this.currentId=o,this.active=null,o&&Qd[o])){if(!this.built.has(o)){let c=Qd[o](this);c.group.visible=!1,this.group.add(c.group),this.built.set(o,c),c.attach&&this.mover&&c.attach(this.mover)}this.active=this.built.get(o),this.active.group.visible=!0,this.active.t0=n,this.active.on&&this.active.on(e)}if(!this.active)return;let a=t.blocks||[],l=a[a.length-1]||null;this.active.update({state:t,effect:r,mover:e,below:l,moving:t.moving,dt:i,time:n,rig:this,tower:this.tower,helpers:t.helpers,reduced:this.tower.reduced})}emit(t,e){let i=this.tower.fx&&this.tower.fx.sparks;if(!i)return;let n=this.tower.root.localToWorld(t.clone());i.emit({pos:[n.x,n.y,n.z],...e})}dispose(){for(let t of this.built.values())t.dispose();this.built.clear(),this.tower.body.remove(this.group)}},Vs=(s=0,t=0,e=0)=>new P(s,t,e),yh=s=>Us(s),Qd={turbo(s){let t=new lt,e=s.palette,i=[],n=new Fe(1,1);for(let r=0;r<4;r+=1){let o=new st(n,Tn(r%2?e.amber:e.vermilion,.8));t.add(o),i.push(o)}return{group:t,update({moving:r,mover:o,time:a,reduced:l}){if(t.visible=!!(o&&r&&o.visible),!t.visible)return;let c=Number(r.direction)<0?-1:1,h=o.userData.drawnWidth;i.forEach((d,f)=>{let u=(46+f*20+Math.sin(a*40+f*7)*14)*(l?.6:1);d.scale.set(u,1.7,1),d.position.set(o.position.x-c*(h/2+u/2+3),o.position.y+(f-1.5)*4.6,ni)}),!l&&Math.random()<.7&&s.emit(Vs(o.position.x-c*h/2,o.position.y+(Math.random()-.5)*12,ni),{vel:[-c*(90+Math.random()*110),(Math.random()-.5)*60,40],color:yh(Math.random()>.5?e.amber:e.vermilion),size:5,life:.45,drag:2,gravity:0})},dispose(){n.dispose(),i.forEach(r=>r.material.dispose())}}},drunk(s){let t=new lt,e=s.palette,i=new qr(28,3,vh(e.rose,{dash:6,speed:.8,opacity:.9}));return t.add(i.mesh),{group:t,update({mover:n,time:r,moving:o,reduced:a}){if(t.visible=!!(n&&n.visible),!t.visible)return;let l=n.userData.drawnWidth,c=n.position.x,h=n.position.y+qe/2+9;i.mesh.material.uniforms.uTime.value=r,i.set(d=>[c-l/2+d*l,h+Math.sin(d*Zt*2+r*6)*4.5],ni+4),!a&&Math.random()<.25&&s.emit(Vs(c+(Math.random()-.5)*l,h,ni),{vel:[(Math.random()-.5)*30,40+Math.random()*40,20],color:yh(e.rose),size:8,life:1.1,drag:.8,gravity:30,growth:6,alpha:.7})},dispose(){i.dispose(),i.mesh.material.dispose()}}},slowmo(s){let t=new lt,e=s.palette,i=new st(new Ce(1,.05,8,64),Tn(e.blue,.9));t.add(i);let n=new st(new Fe(.06,.8).translate(0,.4,0),Tn(e.amber,1));i.add(n);let r=new lt;i.add(r);for(let o=0;o<12;o+=1){let a=new st(new Fe(.05,o%3?.1:.18),Tn(e.blue,.8)),l=o/12*Zt;a.position.set(Math.sin(l)*.9,Math.cos(l)*.9,0),a.rotation.z=-l,r.add(a)}return{group:t,update({mover:o,time:a,effect:l,reduced:c}){if(t.visible=!!(o&&o.visible),!t.visible)return;let h=34;i.scale.set(h,h,h),i.position.set(o.position.x,o.position.y+4,ni+2),n.rotation.z=c?0:-((l.elapsed||0)*.55),r.rotation.z=0,i.material.opacity=.55+.35*Math.sin(a*2)},dispose(){i.geometry.dispose(),i.material.dispose(),n.geometry.dispose(),n.material.dispose(),r.children.forEach(o=>{o.geometry.dispose(),o.material.dispose()})}}},magnet(s){let t=new lt,e=s.palette,i=[0,1,2].map(l=>new qr(24,2.2,vh(e.teal,{dash:9,speed:-1.6-l*.2,opacity:.95})));i.forEach(l=>t.add(l.mesh));let n=new lt,r=new Ht({color:e.vermilion,roughness:.35,metalness:.5,emissive:e.vermilion,emissiveIntensity:.15}),o=new st(new Ce(15,5,10,28,Math.PI),r);o.rotation.z=0,n.add(o);let a=new Ht({color:"#f4f4f4",roughness:.3,metalness:.8});for(let l of[-1,1]){let c=new st(new ae(10,11,10),a);c.position.set(l*15,-5,0),n.add(c)}return n.rotation.x=Math.PI,t.add(n),n.scale.setScalar(1.1),{group:t,update({mover:l,below:c,moving:h,time:d,reduced:f}){if(t.visible=!!(l&&l.visible&&c),!t.visible)return;let u=l.position.x,g=l.position.y,m=Gs((c.left+c.right)/2),p=fs(c.level)+qe/2+2;i.forEach((x,y)=>{x.mesh.material.uniforms.uTime.value=d;let M=(y-1)*7;x.set(_=>{let b=u+M+(m+M-u-M)*_,E=g-qe/2+(p-g+qe/2)*_-Math.sin(_*Math.PI)*(11+y*4);return[b,E]},ni+2)}),n.position.set(u,g+34+(f?0:Math.sin(d*3)*3),ni),n.rotation.y=f?0:Math.sin(d*1.4)*.35,!f&&Math.random()<.3&&s.emit(Vs(u+(Math.random()-.5)*30,g-6,ni),{vel:[(m-u)*.6,-30,10],color:yh(e.teal),size:4,life:.5,drag:2})},dispose(){i.forEach(l=>{l.dispose(),l.mesh.material.dispose()}),o.geometry.dispose(),r.dispose(),a.dispose(),n.children.forEach(l=>l.geometry&&l.geometry.dispose())}}},portal(s){let t=new lt,e=s.palette,i=a=>new xe({transparent:!0,depthWrite:!1,blending:Oe,side:le,toneMapped:!1,uniforms:{uTime:{value:0},uA:{value:Ca(e.teal,1.7)},uB:{value:Ca(e.amber,1.7)},uDir:{value:1}},vertexShader:E0,fragmentShader:`varying vec2 vUv; uniform vec3 uA, uB; uniform float uTime, uDir;
        void main(){
          float edge = 1.0 - abs(vUv.x - 0.5) * 2.0;
          float swirl = sin(vUv.y * 38.0 + uDir * uTime * 5.0 + sin(vUv.x * 9.0 + uTime) * 2.0) * 0.5 + 0.5;
          float fade = smoothstep(0.0, 0.18, vUv.y) * smoothstep(1.0, 0.82, vUv.y);
          float core = smoothstep(0.55, 1.0, edge);
          vec3 c = mix(uA, uB, swirl);
          gl_FragColor = vec4(c, (0.18 + swirl * 0.4) * (0.35 + core * 0.65) * fade);
        }`}),n=[-1,1].map(a=>{let l=new st(new Fe(26,1),i(a));return t.add(l),l}),r=[],o=new Ce(1,.1,6,26);for(let a=0;a<12;a+=1){let l=new st(o,Tn(e.amber,.75));l.scale.set(4,11,4),l.rotation.y=Math.PI/2,t.add(l),r.push(l)}return{group:t,update({moving:a,mover:l,effect:c,time:h,state:d}){let f=a?a.level:d.blocks.length||1,u=fs(f),g=380,m=Number(c.windDirection)<0?-1:1;n.forEach((p,x)=>{p.scale.y=g,p.position.set((x?1:-1)*(Qi/2-4),u+40,0),p.material.uniforms.uTime.value=h,p.material.uniforms.uDir.value=m*(x?-1:1)}),r.forEach((p,x)=>{let y=x%2?1:-1,M=Math.floor(x/2),_=u-190+((M*66+h*20*m*y)%400+400)%400;p.position.set(y*(Qi/2-4+(y>0?2:-2)*0),_,0),p.rotation.y=Math.PI/2,p.rotation.z=h*.6*y})},dispose(){n.forEach(a=>{a.geometry.dispose(),a.material.dispose()}),r.forEach(a=>a.material.dispose()),o.dispose()}}},rollercoaster(s){let t=new lt,e=s.palette,i=new qr(40,3,vh(e.teal,{dash:20,speed:.6,opacity:.9}));t.add(i.mesh);let n=new _e(4.2,4.2,3,14);n.rotateX(Math.PI/2);let r=new Ht({color:e.ink,roughness:.4,metalness:.6}),o=[0,1].map(()=>{let a=new st(n,r);return a.castShadow=!0,t.add(a),a});return{group:t,update({mover:a,time:l,below:c,moving:h,reduced:d}){if(t.visible=!!(a&&a.visible),!t.visible)return;let f=fs(h.level)-qe/2-9;i.mesh.material.uniforms.uTime.value=l,i.set(g=>[Gs(g*Qi),f+Math.sin(g*14+l*3)*9],ni);let u=a.userData.drawnWidth;o.forEach((g,m)=>{g.position.set(a.position.x+(m?1:-1)*u*.34,a.position.y-qe/2-3,ni-6),g.rotation.z=-l*6*(Number(h.direction)||1)})},dispose(){i.dispose(),i.mesh.material.dispose(),n.dispose(),r.dispose()}}},pisa(s){return{group:new lt,update({effect:e,tower:i,time:n,reduced:r}){if(r||Math.random()>.12)return;let o=(Math.random()<.5?-1:1)*(60+Math.random()*120);s.emit(Vs(o,2,ni),{vel:[(Math.random()-.5)*40,28+Math.random()*30,20],color:[.8,.74,.6],size:14,life:1.1,drag:1.4,growth:14,alpha:.35})},dispose(){}}},earthquake(s){let t=new lt,e=s.palette,i=[];for(let n=0;n<6;n+=1){let r=new qr(14,3.4,vh(e.vermilion,{dash:3,speed:.4,opacity:1})),o=n/6*Zt+.4,a=n*1.7;r.angle=o,r.seed=a,r.mesh.rotation.x=-Math.PI/2,r.mesh.position.y=1.2,t.add(r.mesh),i.push(r)}return{group:t,update({effect:n,time:r,reduced:o}){let a=mt((n.elapsed||0)/.5)*mt((n.remaining??5)/.8);if(i.forEach(l=>{l.mesh.material.uniforms.uTime.value=r,l.mesh.material.uniforms.uOpacity.value=a,l.set(c=>{let h=20+c*220,d=l.angle+Math.sin(c*9+l.seed)*.16;return[Math.cos(d)*h,-Math.sin(d)*h]},0)}),!o&&Math.random()<.5){let l=Math.random()*Zt,c=160+Math.random()*110;s.emit(Vs(Math.cos(l)*c,2,Math.sin(l)*c*.6+40),{vel:[(Math.random()-.5)*40,40+Math.random()*70,20],color:[.85,.77,.62],size:12,life:1.2,drag:1.1,growth:12,alpha:.3})}},dispose(){i.forEach(n=>{n.dispose(),n.mesh.material.dispose()})}}},spotlight(s){let t=new lt,e=s.palette,i=new ei(1,1,40,1,!0);i.translate(0,-.5,0);let n=new st(i,new xe({transparent:!0,depthWrite:!1,blending:Oe,side:le,toneMapped:!1,uniforms:{uColor:{value:Ca(e.amber,1.3)}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = position.y; vec4 mv = modelViewMatrix*vec4(position,1.); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying float vY; varying vec3 vN; varying vec3 vV; uniform vec3 uColor; void main(){ float f = pow(abs(dot(vN,vV)),1.4); gl_FragColor = vec4(uColor, f * (1.0 + vY) * 0.28); }"}));t.add(n);let r=new st(new Ii(0,1,48),Tn(e.amber,.28));return r.rotation.x=-Math.PI/2,t.add(r),{group:t,update({below:o,effect:a,time:l,reduced:c}){if(!o){t.visible=!1;return}let h=Number(a.spotlightSide)<0?-1:1,d=Gs(h<0?o.left+7:o.right-7),f=fs(o.level);n.position.set(d,f+620,0),n.scale.set(52,620,52),r.position.set(d,f+qe/2+.6,30),r.scale.set(52,52,1),s.spot={x:d,y:f,z:Ti/2,radius:52},!c&&Math.random()<.45&&s.emit(Vs(d+(Math.random()-.5)*80,f+160+Math.random()*120,0),{vel:[0,-60,0],color:yh(e.amber),size:3,life:1,drag:.2,alpha:.7})},dispose(){i.dispose(),n.material.dispose(),r.geometry.dispose(),r.material.dispose()}}},double(s){let t=new lt,e=s.palette,i=null,n=null,r=S0(e.ink,[[[.53,.1],[.48,.34],[.55,.55],[.49,.9]]],256,64,8),o=new oe({map:r,transparent:!0,depthWrite:!1});return n=new st(new Fe(1,qe),o),{group:t,attach(a){i&&i.parent&&i.parent.remove(i),i=n,a.add(i),i.position.z=ni,i.scale.x=a.userData.baseW},off(){i&&i.parent&&i.parent.remove(i)},update({mover:a}){(!i||i.parent!==a)&&a&&(a.add(i),i.position.z=ni,i.scale.x=a.userData.baseW)},dispose(){r.dispose(),o.dispose(),n.geometry.dispose()}}},crumble(s){let t=new lt,e=s.palette,i=S0(e.ink,[[[.24,.04],[.31,.34],[.2,.62],[.27,.96]],[[.31,.34],[.42,.5]],[[.68,.04],[.61,.34],[.72,.62],[.65,.96]],[[.61,.34],[.5,.5]]],256,64,6),n=new oe({map:i,transparent:!0,depthWrite:!1}),r=new st(new Fe(1,qe),n);return t.add(r),{group:t,update({below:o,time:a,reduced:l}){if(!o){t.visible=!1;return}let c=o.right-o.left;r.scale.x=c,r.position.set(Gs((o.left+o.right)/2),fs(o.level),ni),!l&&Math.random()<.28&&s.emit(Vs(r.position.x+(Math.random()-.5)*c*.7,r.position.y-4,ni),{vel:[(Math.random()-.5)*18,-10,18],color:[.62,.55,.45],size:3.2,life:1.1,drag:.4,gravity:-200,alpha:.9})},dispose(){i.dispose(),n.dispose(),r.geometry.dispose()}}},superglue(s){let t=new lt,e=s.palette,i=new Xe({color:e.amber,roughness:.08,metalness:0,clearcoat:1,transmission:0,emissive:e.amber,emissiveIntensity:.55}),n=new st(new On(2.6,1,6,14).rotateZ(Math.PI/2),i);t.add(n);let r=new st(new ye(3,12,10),i);t.add(r);let o=new st(new Fe(28,Ti*.96).rotateX(-Math.PI/2),Tn(e.amber,.2));return t.add(o),{group:t,attach(){},off(a){a&&a.material&&a.material.emissive&&(a.material.emissiveIntensity=0)},update({below:a,mover:l,time:c,reduced:h}){if(!a){t.visible=!1;return}let d=a.right-a.left,f=Gs((a.left+a.right)/2),u=fs(a.level)+qe/2;n.scale.set((d-8)/6.2,1,1),n.position.set(f,u+1.2,ni-8),r.position.set(f+Math.sin(c*.5)*d*.2,u-2-c*.6%1*9,ni-1),r.scale.setScalar(.7+.3*Math.sin(c*4)),o.position.set(f,u+.7,0),o.material.opacity=.14+.1*(h?1:Math.sin(c*4)*.5+.5),l&&l.visible&&l.material&&(l.material.emissive.set(e.amber),l.material.emissiveIntensity=h?.4:.35+.3*Math.sin(c*5))},dispose(){i.dispose(),n.geometry.dispose(),r.geometry.dispose(),o.geometry.dispose(),o.material.dispose()}}},calipers(s){let t=new lt,e=s.palette,i=new ae(2,1,3),n=[0,1].map(()=>{let c=new st(i,Tn(e.amber,.95));return t.add(c),c}),r=new ae(1,2,3),o=[0,1,2,3].map(()=>{let c=new st(r,Tn(e.amber,.95));return t.add(c),c}),a=new ye(3.4,12,8),l=[0,1].map(()=>{let c=new st(a,Tn(e.amber,1));return t.add(c),c});return{group:t,update({below:c,moving:h,helpers:d,time:f}){if(!c||!h||!d){t.visible=!1;return}let u=d.caliperBounds(c,h),g=Gs(u.minLeft),m=Gs(u.maxLeft+h.width),p=fs(h.level),x=fs(c.level),y=Math.max(p,x)+22,M=x-13,_=y-M;n.forEach((v,S)=>{v.scale.y=_,v.position.set(S?m:g,(y+M)/2,ni+1)});let b=[1,-1];[g,m].forEach((v,S)=>{o[S*2].scale.x=14,o[S*2].position.set(v+b[S]*7,p,ni+1),o[S*2+1].scale.x=14,o[S*2+1].position.set(v+b[S]*7,x-Vi/2,ni+1),l[S].position.set(v,y,ni+1)});let E=1+Math.sin(f*5)*.2;l.forEach(v=>v.scale.setScalar(E))},dispose(){i.dispose(),r.dispose(),a.dispose(),[...n,...o,...l].forEach(c=>c.material.dispose())}}}},LA=Object.keys(Qd).concat(["zoom"]).filter((s,t,e)=>e.indexOf(s)===t);var Wi=s=>s*Vi+Vi/2,Yr=s=>s-Qi/2,Yb=70,$b=.01,w0=7,T0=.85,$r=class{constructor(t,e,{scale:i=1,depth:n=Ti,name:r="",color:o="#2F8478",interactive:a=!1}={}){this.kit=t,this.fx=e,this.depth=n,this.name=r,this.color=o,this.root=new lt,this.root.scale.setScalar(i),this.body=new lt,this.debrisGroup=new lt,this.root.add(this.body,this.debrisGroup),this.meshes=[],this.facing=0,this.count=0,this.stateId=null,this.lastFallen=0,this.lastCollapsed=!1,this.collapseDone=!1,this.world=new Xr({floorY:xh()}),this.random=We(77),this.mover=null,this.moverMaterial=null,this.decoy=null,this.portalClones=[],this.prevMover=null,this.shake=new P,this.rig=new _h(this),this.height=0,this.topLevel=0,this.timeScale=1,this.lastEdge=[0,0],this.listeners={land:[],perfect:[],collapse:[],piece:[],impact:[]},this.collapseQueue=[],this.alpha=1,this.tick=this.makeCentreTick()}makeCentreTick(){let t=new lt;t.visible=!1,t.renderOrder=5;let e=(r,o)=>{let a=new oe({color:o,transparent:!0,opacity:.85,depthTest:!1}),l=new st(new ae(r,w0,1),a);return l.renderOrder=5,t.add(l),l},i=e(3,1052688),n=e(1,16777215);return n.position.z=.5,t.userData.parts=[i,n],this.body.add(t),t}syncCentreTick(t){let e=this.topMesh(),i=!!(t.moving&&e);this.tick.visible=i,i&&this.tick.position.set(e.userData.baseX,Wi(e.userData.level)+qe/2-1-w0/2,this.depth/2+1)}on(t,e){return this.listeners[t].push(e),this}emit(t,e){for(let i of this.listeners[t])i(e,this)}setKit(t){this.kit=t,this.clear(!1),this.rig.setKit(t)}clear(t=!1){for(let e of this.meshes)this.disposeMesh(e);this.meshes.length=0,this.count=0;for(let e of this.world.bodies)e.data&&e.data.mesh&&this.disposeMesh(e.data.mesh);this.world.clear(),this.mover&&(this.body.remove(this.mover),this.mover=null),this.decoy&&(this.body.remove(this.decoy),this.decoy=null);for(let e of this.portalClones)this.body.remove(e);this.portalClones.length=0,this.collapseQueue.length=0,this.moverMaterial&&(this.moverMaterial.dispose(),this.moverMaterial=null),t?this.lastFallen=0:(this.stateId=null,this.lastFallen=0,this.lastCollapsed=!1)}disposeMesh(t){t&&(t.parent&&t.parent.remove(t),t.userData.plaque&&(t.userData.plaque.material.map.dispose(),t.userData.plaque.material.dispose(),t.userData.plaque.geometry.dispose()),t.userData.edges&&t.userData.edges.material.dispose())}makeBlockMesh(t,{animate:e=!1,plaque:i=!1}={}){let n=this.kit.mesh(t,{depth:this.depth}),r=Math.max(1,t.right-t.left);return n.position.set(Yr((t.left+t.right)/2),Wi(t.level),0),n.userData.level=t.level,n.userData.baseX=n.position.x,n.userData.width=r,n.userData.placer=t.placer,t.perfect&&this.kit.addPerfectStar(n,r),e&&(n.userData.land={t:0,perfect:!!t.perfect}),i&&t.placer&&t.placer!=="Base"&&this.addPlaque(n,t),this.body.add(n),n}addPlaque(t,e){let i=String(e.placer).slice(0,12),n=document.createElement("canvas");n.width=256,n.height=72;let r=n.getContext("2d"),o=this.kit.palette,a=this.kit.theme==="sunset"?"30px VT323, monospace":this.kit.theme==="primetime"?'700 34px "Barlow Condensed", sans-serif':'700 30px "DM Sans", sans-serif';r.fillStyle=this.kit.theme==="paper"?"rgba(42,37,32,0.88)":"rgba(6,10,36,0.9)",this.kit.theme==="sunset"?r.fillRect(2,2,252,68):(r.beginPath(),r.roundRect(2,2,252,68,16),r.fill()),r.strokeStyle=o.amber,r.lineWidth=3,r.stroke(),r.fillStyle=this.kit.theme==="paper"?"#F4EDDF":"#ffffff",r.font=a,r.textAlign="center",r.textBaseline="middle",r.fillText(i,128,38,232);let l=new hi(n);l.colorSpace=Ie,l.anisotropy=4;let c=new st(new Fe(52,14.6),new oe({map:l,transparent:!0,depthWrite:!1})),h=e.left>Qi*.56,d=t.userData.width;c.position.set(h?-d/2-28:d/2+28,0,this.depth/2+2),c.rotation.y=this.facing,t.add(c),t.userData.plaque=c}setFacing(t){if(t!==this.facing){this.facing=t;for(let e of this.meshes)e&&e.userData.plaque&&(e.userData.plaque.rotation.y=t)}}sync(t,e,i){let n=t.blocks||[],r=n[this.count-1],o=this.stateId!==t.id||n.length<this.count||this.count>0&&(!r||Math.abs(r.left-this.lastEdge[0])>.6||Math.abs(r.right-this.lastEdge[1])>.6);o&&(this.clear(),this.stateId=t.id,this.lastFallen=(t.fallen||[]).length,this.lastCollapsed=!!t.collapsed,this.prevMover=null,this.collapseDone=!!(t.collapsed&&t.phase!=="collapse")),this.reduced=!!t.reduced;let a=this.count,l=o||n.length-a>1;for(let d=a;d<n.length;d+=1){let f=n[d],u=this.makeBlockMesh(f,{animate:!l&&!this.reduced,plaque:t.teamPlacers});this.meshes[d]=u,this.count=d+1,this.lastEdge=[f.left,f.right],!l&&d>0&&this.onLand(f,u,t)}this.height=n.length,this.topLevel=n.length-1;let c=t.fallen||[];c.length<this.lastFallen&&(this.lastFallen=0);for(let d=this.lastFallen;d<c.length;d+=1)!o&&!this.collapseDone&&this.spawnPiece(c[d]);this.lastFallen=c.length;let h=!!t.collapsed;h&&!this.lastCollapsed&&!o&&this.beginCollapse(t),h&&!this.lastCollapsed&&o&&(this.collapseDone=!0),this.lastCollapsed=h,this.updateCollapseQueue(e),this.syncMover(t,e,i),this.animateBlocks(e,i,t),this.syncCentreTick(t),this.stepDebris(e*this.timeScale,i),this.applyBodyTransform(t,i),this.rig.update(t,this.mover,e,i),this.prevMover=t.moving?{...t.moving}:null}onLand(t,e,i){this.root.updateWorldMatrix(!0,!1);let n=new P(e.position.x,e.position.y-qe/2,this.depth/2-4);this.root.localToWorld(n),this.emit("land",{block:t,perfect:!!t.perfect,position:n,width:t.right-t.left,level:t.level}),t.perfect&&this.emit("perfect",{block:t,position:n.clone(),width:t.right-t.left,level:t.level})}syncMover(t,e,i){let n=t.moving,r=t.effect?t.effect.id:"";if(!n||t.phase==="collapse"||t.ended||t.collapsed){this.mover&&(this.mover.visible=!1),this.decoy&&(this.decoy.visible=!1);for(let x of this.portalClones)x.visible=!1;return}let o=n.color||"#2F8478",a=Math.max(4,n.width);if(!this.mover||this.mover.userData.color!==o||this.mover.userData.theme!==this.kit.theme||a/this.mover.userData.baseW>1.22||a/this.mover.userData.baseW<.82){this.mover&&this.body.remove(this.mover),this.moverMaterial&&this.moverMaterial.dispose(),this.moverMaterial=this.kit.uniqueMaterial(o),this.moverMaterial.transparent=!0,this.mover=new st(this.kit.geometry(a,this.depth),this.moverMaterial),this.mover.castShadow=!0,this.mover.receiveShadow=!0;let x=this.mover.geometry.parameters?this.mover.geometry.parameters.width:a;if(this.mover.userData={color:o,theme:this.kit.theme,baseW:x,level:n.level},this.kit.theme==="sunset"){let y=new Un(this.kit.edges(x,this.depth),new ln({color:this.kit.palette.ink,transparent:!0,opacity:T0}));this.mover.add(y),this.mover.userData.edges=y}this.body.add(this.mover);for(let y of this.portalClones)this.body.remove(y);this.portalClones.length=0,this.rig.attachMover(this.mover)}let l=this.mover,c=r==="slowmo"&&t.helpers?t.helpers.slowToDartWindup(t.effect.elapsed):0,h=n.width*(1-.08*c),d=n.left+(n.width-h)/2,f=1;!this.reduced&&r==="peekaboo"&&t.helpers&&(f=t.helpers.peekabooOpacity(t.effect.elapsed));let u=r==="rollercoaster"&&!this.reduced&&t.helpers?t.helpers.rollercoasterOffset(t.effect.elapsed,Number(n.rollerPhase)||0):0,g=Wi(n.level)-u;l.scale.set(h/l.userData.baseW,1+.06*c,1),l.position.set(Yr(d+h/2),g,0),l.userData.alpha=f,l.userData.drawnWidth=h,l.userData.drawnLeft=d;let m=this.moverMaterial;l.visible=f>$b,m.opacity=f,m.depthWrite=f>=.999,l.userData.edges&&(l.userData.edges.material.opacity=T0*f),l.castShadow=f>.55&&r!=="spotlight",l.rotation.z=r==="drunk"&&!this.reduced?Math.sin(i*5.2)*.07+Math.sin(i*2.3)*.04:0;let p=r==="portal";for(let x=0;x<2;x+=1){let y=this.portalClones[x];y||(y=new st(l.geometry,m),y.castShadow=!0,this.body.add(y),this.portalClones[x]=y),y.geometry=l.geometry,y.material=m;let M=x===0?Qi:-Qi,_=n.left+0,b=p&&(x===0&&n.left<0||x===1&&n.left+n.width>Qi);y.visible=!!b,y.scale.copy(l.scale),y.position.set(l.position.x+M,l.position.y,0)}if(r==="double"&&n.decoy){if(!this.decoy||this.decoy.userData.color!==(n.decoy.color||o)){this.decoy&&this.body.remove(this.decoy);let x=this.kit.material(n.decoy.color||o);this.decoy=new st(this.kit.geometry(Math.max(4,n.decoy.width),this.depth),x),this.decoy.userData={color:n.decoy.color||o,baseW:this.decoy.geometry.parameters.width},this.decoy.castShadow=!0,this.body.add(this.decoy)}this.decoy.visible=f>.01,this.decoy.scale.x=n.decoy.width/this.decoy.userData.baseW,this.decoy.position.set(Yr(n.decoy.left+n.decoy.width/2),g,0)}else this.decoy&&(this.decoy.visible=!1)}animateBlocks(t,e,i){let n=this.meshes.length,r=i.effect&&i.effect.id==="earthquake"?1:0;for(let o=0;o<n;o+=1){let a=this.meshes[o];if(!a||!a.visible&&a.userData.collapsing)continue;let l=a.userData.level,c=this.reduced?0:Math.min(2.2,(l/36)**2*1.4)*(1+r*2);a.position.x=a.userData.baseX+Math.sin(e*.8+l*.31)*c;let h=a.userData.land;if(h){h.t+=t;let f=Math.exp(-h.t*8.5)*Math.cos(h.t*30);a.scale.y=1-.2*f,a.position.y=Wi(l)-(1-a.scale.y)*qe*.5,h.t>.6&&(a.scale.y=1,a.position.y=Wi(l),a.userData.land=null)}let d=a.userData.star;d&&!this.reduced&&(d.rotation.z=Math.sin(e*1.6+l)*.12)}}spawnPiece(t){if(!t||!(t.right>t.left))return;let e=t.right-t.left,i=Number.isInteger(t.level)?t.level:this.topLevel+1,n=(t.left+t.right)/2<Qi/2?-1:1,r=this.kit.mesh({left:t.left,right:t.right,color:t.color||"#2F8478"},{depth:this.depth}),o=this.random,a=Ra({pos:[Yr((t.left+t.right)/2),Wi(i),0],half:[e/2,qe/2,this.depth/2],vel:[n*(70+o()*150),-10+o()*70,(o()-.2)*150],angVel:[(o()-.5)*5,(o()-.5)*3,-n*(2+o()*5)],restitution:.3,friction:.5,data:{mesh:r,width:e,piece:t}});t.kind==="crumble"&&(a.vel[1]+=60,a.angVel[0]*=2),this.world.add(a),this.debrisGroup.add(r),this.trimBodies(),this.emit("piece",{piece:t,width:e,position:new P(r.position.x,Wi(i),0),side:n})}trimBodies(){for(;this.world.bodies.length>Yb;){let t=this.world.bodies.find(e=>e.asleep)||this.world.bodies[0];this.disposeMesh(t.data.mesh),this.world.remove(t)}}beginCollapse(t){let e=t.collapseStartLevel!=null?t.collapseStartLevel:Math.max(0,this.count-6),i=this.meshes.filter(n=>n&&n.userData.level>=e).reverse();i.forEach((n,r)=>this.collapseQueue.push({mesh:n,delay:this.reduced?0:r*.07})),this.emit("collapse",{count:i.length,top:i.length?i[0].position.clone():null})}updateCollapseQueue(t){if(!this.collapseQueue.length)return;for(let i of this.collapseQueue)i.delay-=t*this.timeScale;let e=this.collapseQueue.filter(i=>i.delay<=0);if(e.length){this.collapseQueue=this.collapseQueue.filter(i=>i.delay>0);for(let{mesh:i}of e){let n=i.userData.width,r=i.userData.level,o=i.position.x<0?-1:1,a=this.random;i.userData.collapsing=!0;let l=Ra({pos:[i.position.x,i.position.y,0],half:[n/2,qe/2,this.depth/2],vel:[o*(38+a()*130),10+a()*90,(a()-.1)*160],angVel:[(a()-.5)*4,(a()-.5)*3,-o*(1.2+a()*4)],restitution:.28,friction:.5,data:{mesh:i,width:n,level:r}});this.meshes[r]=null,this.world.add(l),this.debrisGroup.add(i),i.userData.land=null,i.scale.y=1}this.trimBodies()}}stepDebris(t,e){if(this.world.bodies.length){this.world.step(Math.min(t,1/30));for(let i of this.world.bodies){let n=i.data.mesh;if(n.position.set(i.pos[0],i.pos[1],i.pos[2]),n.quaternion.set(i.quat[0],i.quat[1],i.quat[2],i.quat[3]),i.hit==null&&i.pos[1]-i.half[1]<1.5&&i.vel[1]<0&&i.age>.05){i.hit=!0;let r=new P(i.pos[0],0,i.pos[2]);this.root.localToWorld(r),this.emit("impact",{position:r,width:i.data.width,speed:Math.abs(i.vel[1])})}}}}applyBodyTransform(t,e){let i=t.effect,n=t.helpers,r=0,o=0,a=0;if(i&&n&&i.id==="earthquake"){let u=n.earthquakeOffset(i.elapsed,i.remaining,this.reduced);r=u.x*1.25,o=-u.y*1.25}this.shake.set(r,o,a);let l=this.topMesh(),c=l?l.userData.baseX:0,h=l?Wi(l.userData.level):11,d=Math.cos(a),f=Math.sin(a);this.body.rotation.z=a,this.body.position.set(r+c-(d*c-f*h),o+h-(f*c+d*h),0)}topMesh(){for(let t=this.meshes.length-1;t>=0;t-=1)if(this.meshes[t])return this.meshes[t];return null}topPoint(t=new P){let e=this.topMesh();return t.set(e?e.userData.baseX:0,e?Wi(e.userData.level)+qe/2:qe,0),this.root.localToWorld(t)}setAlpha(t){this.alpha=t}dispose(){this.clear(),this.rig.dispose();for(let t of this.tick.userData.parts)t.geometry.dispose(),t.material.dispose();this.body.remove(this.tick)}};var Zb=`
  attribute float aSize; attribute vec4 aColor; varying vec4 vColor; uniform float uScale;
  void main() {
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = max(1.0, aSize * uScale / max(1.0, -mv.z));
    gl_Position = projectionMatrix * mv;
  }
`,Kb=`
  varying vec4 vColor;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float a = 1.0 - smoothstep(0.0, 1.0, d);
    a *= a;
    if (a < 0.01) discard;
    gl_FragColor = vec4(vColor.rgb, vColor.a * a);
  }
`,Pa=class{constructor(t=1400,{blending:e=Oe,depthTest:i=!0}={}){this.capacity=t,this.cursor=0,this.position=new Float32Array(t*3),this.color=new Float32Array(t*4),this.size=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.drag=new Float32Array(t),this.gravity=new Float32Array(t),this.base=new Float32Array(t*4),this.growth=new Float32Array(t);let n=new ge;n.setAttribute("position",new Be(this.position,3).setUsage(Li)),n.setAttribute("aColor",new Be(this.color,4).setUsage(Li)),n.setAttribute("aSize",new Be(this.size,1).setUsage(Li)),this.material=new xe({uniforms:{uScale:{value:800}},vertexShader:Zb,fragmentShader:Kb,transparent:!0,depthWrite:!1,depthTest:i,blending:e}),this.points=new ws(n,this.material),this.points.frustumCulled=!1,this.points.renderOrder=8,this.density=1,this.random=We(7)}emit({pos:t,vel:e=[0,0,0],color:i=[1,1,1],alpha:n=1,size:r=6,life:o=1,drag:a=.6,gravity:l=0,growth:c=0}){if(this.density<1&&Math.random()>this.density)return;let h=this.cursor;this.cursor=(this.cursor+1)%this.capacity,this.position.set(t,h*3),this.vel.set(e,h*3),this.base.set([i[0],i[1],i[2],n],h*4),this.size[h]=r,this.life[h]=o,this.maxLife[h]=o,this.drag[h]=a,this.gravity[h]=l,this.growth[h]=c}burst({pos:t,count:e=24,speed:i=160,spread:n=1,color:r=[1,.8,.3],size:o=5,life:a=.9,gravity:l=-260,up:c=.2,drag:h=1.2,alpha:d=1,growth:f=0,direction:u=null}){for(let g=0;g<e;g+=1){let m=this.random()*Zt,p=Math.acos(2*this.random()-1),x=i*(.35+this.random()*.65),y=Math.sin(p)*Math.cos(m)*n,M=Math.cos(p)*n+c,_=Math.sin(p)*Math.sin(m)*n;u&&(y=u[0]+y*.5,M=u[1]+M*.5,_=u[2]+_*.5),this.emit({pos:t,vel:[y*x,M*x,_*x],color:r.map(b=>b*(.85+this.random()*.3)),alpha:d,size:o*(.6+this.random()*.8),life:a*(.6+this.random()*.7),gravity:l,drag:h,growth:f})}}update(t){let e=!1;for(let i=0;i<this.capacity;i+=1){if(this.life[i]<=0){this.color[i*4+3]=0;continue}e=!0,this.life[i]-=t;let n=Math.max(0,1-this.drag[i]*t),r=i*3;this.vel[r]*=n,this.vel[r+1]=this.vel[r+1]*n+this.gravity[i]*t,this.vel[r+2]*=n,this.position[r]+=this.vel[r]*t,this.position[r+1]+=this.vel[r+1]*t,this.position[r+2]+=this.vel[r+2]*t;let o=Math.max(0,this.life[i]/this.maxLife[i]),a=i*4;this.color[a]=this.base[a],this.color[a+1]=this.base[a+1],this.color[a+2]=this.base[a+2],this.color[a+3]=this.base[a+3]*Math.min(1,o*2.2)*Math.min(1,(1-o)*14+.15),this.growth[i]&&(this.size[i]+=this.growth[i]*t)}if(e||this.dirty){let i=this.points.geometry;i.attributes.position.needsUpdate=!0,i.attributes.aColor.needsUpdate=!0,i.attributes.aSize.needsUpdate=!0}this.dirty=e}setScale(t){this.material.uniforms.uScale.value=t}dispose(){this.points.geometry.dispose(),this.material.dispose()}},Mh=class{constructor(t=360){this.capacity=t,this.cursor=0;let e=new Fe(1,.55);this.material=new Ht({roughness:.45,metalness:.25,side:le,vertexColors:!1}),this.mesh=new li(e,this.material,t),this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,this.mesh.instanceMatrix.setUsage(Li),this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.rot=new Float32Array(t*3),this.spin=new Float32Array(t*3),this.life=new Float32Array(t),this.size=new Float32Array(t),this.phase=new Float32Array(t),this.dummy=new Ve,this.tint=new ct,this.random=We(21),this.floor=-64;let i=new Yt().makeScale(0,0,0);for(let n=0;n<t;n+=1)this.mesh.setMatrixAt(n,i),this.mesh.setColorAt(n,this.tint.set("#ffffff"));this.density=1}burst({pos:t,count:e=60,speed:i=260,colors:n=["#E3A33B","#2F8478","#7FA6BD","#D5472F"],size:r=7,life:o=3.2,cone:a=1,direction:l=[0,1,0]}){let c=Math.round(e*this.density);for(let h=0;h<c;h+=1){let d=this.cursor;this.cursor=(this.cursor+1)%this.capacity;let f=this.random()*Zt,u=Math.sqrt(this.random())*a,g=i*(.4+this.random()*.8);this.pos.set(t,d*3),this.vel[d*3]=(l[0]+Math.cos(f)*u)*g,this.vel[d*3+1]=(l[1]+(this.random()-.3)*.4)*g,this.vel[d*3+2]=(l[2]+Math.sin(f)*u)*g,this.rot[d*3]=this.random()*Zt,this.rot[d*3+1]=this.random()*Zt,this.rot[d*3+2]=this.random()*Zt,this.spin[d*3]=(this.random()-.5)*16,this.spin[d*3+1]=(this.random()-.5)*16,this.spin[d*3+2]=(this.random()-.5)*12,this.life[d]=o*(.7+this.random()*.6),this.size[d]=r*(.7+this.random()*.7),this.phase[d]=this.random()*Zt,this.mesh.setColorAt(d,this.tint.set(n[Math.floor(this.random()*n.length)%n.length]))}this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}update(t,e){let i=!1;for(let n=0;n<this.capacity;n+=1){if(this.life[n]<=0){this.life[n]>-1&&(this.dummy.scale.setScalar(0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n,this.dummy.matrix),this.life[n]=-2,i=!0);continue}i=!0,this.life[n]-=t;let r=n*3;this.vel[r]*=1-1.6*t,this.vel[r+2]*=1-1.6*t,this.vel[r+1]=this.vel[r+1]*(1-.9*t)-150*t,this.vel[r+1]=Math.max(this.vel[r+1],-110),this.pos[r]+=(this.vel[r]+Math.sin(e*3+this.phase[n])*26)*t,this.pos[r+1]+=this.vel[r+1]*t,this.pos[r+2]+=(this.vel[r+2]+Math.cos(e*2.4+this.phase[n])*18)*t,this.pos[r+1]<this.floor&&(this.pos[r+1]=this.floor,this.vel[r+1]=0,this.spin[r]*=.2,this.spin[r+1]*=.2,this.spin[r+2]*=.2),this.rot[r]+=this.spin[r]*t,this.rot[r+1]+=this.spin[r+1]*t,this.rot[r+2]+=this.spin[r+2]*t;let o=Math.min(1,this.life[n]*1.5);this.dummy.position.set(this.pos[r],this.pos[r+1],this.pos[r+2]),this.dummy.rotation.set(this.rot[r],this.rot[r+1],this.rot[r+2]),this.dummy.scale.setScalar(this.size[n]*o),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n,this.dummy.matrix)}i&&(this.mesh.instanceMatrix.needsUpdate=!0)}dispose(){this.mesh.geometry.dispose(),this.material.dispose(),this.mesh.dispose()}},bh=class{constructor(t=10){this.items=[],this.group=new lt;let e=new Ii(.86,1,64).rotateX(-Math.PI/2);this.geometry=e;for(let i=0;i<t;i+=1){let n=new oe({color:"#ffffff",transparent:!0,opacity:0,blending:Oe,depthWrite:!1,side:le,toneMapped:!1}),r=new st(e,n);r.visible=!1,r.renderOrder=7,this.group.add(r),this.items.push({mesh:r,t:1,life:1,radius:1,from:0})}this.cursor=0}pulse({pos:t,color:e="#FFD36B",radius:i=140,life:n=.7,from:r=.2,strength:o=1.6,vertical:a=!1}){let l=this.items[this.cursor];this.cursor=(this.cursor+1)%this.items.length,l.t=0,l.life=n,l.radius=i,l.from=r,l.strength=o,l.mesh.position.set(t[0],t[1],t[2]),l.mesh.rotation.x=a?Math.PI/2:0,l.mesh.material.color.set(e).multiplyScalar(o),l.mesh.visible=!0}update(t){for(let e of this.items){if(e.t>=1){e.mesh.visible=!1;continue}e.t=Math.min(1,e.t+t/e.life);let i=1-(1-e.t)**3,n=e.radius*(e.from+(1-e.from)*i);e.mesh.scale.set(n,1,n),e.mesh.material.opacity=(1-e.t)**1.6}}dispose(){this.geometry.dispose();for(let t of this.items)t.mesh.material.dispose()}};var Sh=class{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100,i="ltr"){let n=[],r=Jb(t,e,this.data,i);for(let o=0,a=r.length;o<a;o++)n.push(...r[o].toShapes());return n}};function Jb(s,t,e,i){let n=Array.from(s),r=t/e.resolution,o=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,a=[],l=0,c=0;(i=="rtl"||i=="tb")&&n.reverse();for(let h=0;h<n.length;h++){let d=n[h];if(d===`
`)l=0,c-=o;else{let f=jb(d,r,l,c,e);i=="tb"?(l=0,c+=e.ascender*r):l+=f.offsetX,a.push(f.path)}}return a}function jb(s,t,e,i,n){let r=n.glyphs[s]||n.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+n.familyName+".");return}let o=new ea,a,l,c,h,d,f,u,g;if(r.o){let m=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,x=m.length;p<x;)switch(m[p++]){case"m":a=m[p++]*t+e,l=m[p++]*t+i,o.moveTo(a,l);break;case"l":a=m[p++]*t+e,l=m[p++]*t+i,o.lineTo(a,l);break;case"q":c=m[p++]*t+e,h=m[p++]*t+i,d=m[p++]*t+e,f=m[p++]*t+i,o.quadraticCurveTo(d,f,c,h);break;case"b":c=m[p++]*t+e,h=m[p++]*t+i,d=m[p++]*t+e,f=m[p++]*t+i,u=m[p++]*t+e,g=m[p++]*t+i,o.bezierCurveTo(d,f,u,g,c,h);break}}return{offsetX:r.ha*t,path:o}}var Eh={paper:"/public/typefaces/typeface-paper-d10eceb297f1e4df.json",sunset:"/public/typefaces/typeface-sunset-aab6b3268b60a471.json",primetime:"/public/typefaces/typeface-primetime-27b8ef75bfb08c7c.json"};var ps=Object.create(null),wh=new Map,Th=new Map;var tf=new Map;function A0(s){return Object.prototype.hasOwnProperty.call(Eh,s)}function R0(s){return ps[s]?s:!A0(s)&&ps.paper?"paper":null}function Ws(s){return!!ps[s]||!A0(s)&&!!ps.paper}function tS(s,t){if(!t||!t.glyphs||typeof t.resolution!="number")throw new Error(`invalid typeface data for "${s}"`);return ps[s]=t,Th.delete(s),t}function Zr(s){let t=Eh[s]?s:"paper";if(ps[t])return Promise.resolve(!0);if(wh.has(t))return wh.get(t);let e=(async()=>{let i=typeof AbortController=="function"?new AbortController:null,n=i?setTimeout(()=>i.abort(),8e3):null;try{let r=await fetch(Eh[t],{credentials:"same-origin",signal:i?i.signal:void 0});if(!r.ok)throw new Error(`HTTP ${r.status}`);let o=await r.json();return tS(t,o),!0}catch(r){return console.warn(`3D typeface "${t}" could not be loaded; its text will be omitted.`,r),!1}finally{n!==null&&clearTimeout(n),wh.delete(t)}})();return wh.set(t,e),e}function eS(s){let t=R0(s);return t?(Th.has(t)||Th.set(t,new Sh(ps[t])),Th.get(t)):null}function Ia(s){let t=R0(s);if(!t)return null;let e=ps[t];return{resolution:e.resolution,capHeight:e.capHeight,glyphs:e.glyphs}}function C0(s,t){let e=Ia(s);return e?[...String(t)].every(i=>i===" "||e.glyphs[i]):!0}var Ah={paper:{bevel:.06,curveSegments:4,tracking:.02},sunset:{bevel:0,curveSegments:1,tracking:.06},primetime:{bevel:.05,curveSegments:4,tracking:.035}};function iS(s,t,e,i){let n=Ah[s]||Ah.paper,r=Ia(s);if(!r)return null;let{resolution:o,glyphs:a}=r,l=a[t];if(!l)return null;let c=e/o,h=l.ha*c,d=l.o?eS(s).generateShapes(t,e):[];if(!d.length)return{geometry:null,advance:h,width:h,height:0};let f=n.bevel*e,u=new Hn(d,{depth:i,curveSegments:n.curveSegments,steps:1,bevelEnabled:f>0,bevelThickness:f,bevelSize:f*.8,bevelOffset:0,bevelSegments:1});u.computeBoundingBox();let g=u.boundingBox;return{geometry:u,advance:h,width:g.max.x-g.min.x,height:g.max.y-g.min.y,box:g}}function ef(s,t,{size:e=40,depth:i=8,tracking:n,align:r="center"}={}){let o=`${s}|${t}|${e}|${i}|${n}|${r}`,a=Ia(s);if(!a)return{geometry:new ge,width:0,capHeight:0};if(tf.has(o))return tf.get(o);let l=Ah[s]||Ah.paper,c=(n??l.tracking)*e,{capHeight:h,resolution:d,glyphs:f}=a,u=h/d*e,g=[],m=0;for(let _ of String(t).toUpperCase()){if(_===" "){m+=(f.I?f.I.ha:400)*(e/d)*.9;continue}let b=iS(s,_,e,i);if(!b){m+=e*.5;continue}if(b.geometry){let E=b.geometry;E.translate(m,0,0),g.push(E)}m+=b.advance+c}let p=Math.max(0,m-c),x=r==="left"?0:r==="right"?-p:-p/2,y;if(!g.length)y=new ge;else{y=wa(g,!1);for(let _ of g)_.dispose()}g.length&&(y.translate(x,-u/2,0),y.computeBoundingBox());let M={geometry:y,width:p,capHeight:u};return tf.set(o,M),M}function nS(s,t,e=.55,i=!0){return s==="sunset"?new Ht({color:se(t),emissive:se(t),emissiveIntensity:.9+e,roughness:.6,flatShading:!0,transparent:i}):s==="primetime"?new Xe({color:se(t),emissive:se(t),emissiveIntensity:.25+e*.5,roughness:.18,metalness:.6,clearcoat:1,transparent:i}):new Xe({color:se(t),emissive:se(t),emissiveIntensity:e*.25,roughness:.35,metalness:.05,clearcoat:.8,clearcoatRoughness:.25,transparent:i})}var Rh=class{constructor(t,e){this.group=new lt,this.items=[],this.faceYaw=0,this.setTheme(t,e)}setTheme(t,e){this.theme=t,this.palette=e,this.clear()}clear(){for(let t of this.items)this.dispose(t);this.items.length=0}dispose(t){this.group.remove(t.mesh),t.mesh.material.dispose()}show({text:t,position:e=[0,0,80],size:i=34,depth:n=10,color:r=this.palette.amber,glow:o=.6,style:a="slam",life:l=1.6,tilt:c=0,key:h=null}){if(h){let m=this.items.find(p=>p.key===h);if(m&&m.text===t)return m.t=Math.min(m.t,m.life*0),m.life=l,m.dying=!1,m.base=e.slice(),m;m&&(this.dispose(m),this.items.splice(this.items.indexOf(m),1))}let d=this.palette.fontKey,{geometry:f}=ef(d,t,{size:i,depth:n}),u=new st(f,nS(this.theme,r,o));u.castShadow=!1,u.position.set(...e),u.renderOrder=9,this.group.add(u);let g={mesh:u,text:t,t:0,life:l,style:a,base:e.slice(),tilt:c,key:h,dying:!1,seed:Math.random()*Zt};return this.items.push(g),g}hide(t){let e=this.items.find(i=>i.key===t);e&&(e.dying=!0,e.dieT=0)}update(t,e){for(let i=this.items.length-1;i>=0;i-=1){let n=this.items[i],r=n.mesh;n.t+=t;let o=n.life>0?mt(n.t/n.life):0,a=1,l=1,c=us(mt(n.t/.38),1.9);n.style==="slam"?(l=(n.t<.22?2.6-1.6*wn(n.t/.22):1)*(n.t<.22?1:1+Math.exp(-(n.t-.22)*9)*Math.cos((n.t-.22)*26)*.06),r.position.set(n.base[0],n.base[1]+(n.t<.22?(1-n.t/.22)*46:0)+Math.sin(e*1.3+n.seed)*1.4,n.base[2]),r.rotation.set(0,this.faceYaw+Math.sin(e*.9+n.seed)*.12,n.tilt*(1+Math.exp(-n.t*6))),a=ke(0,.1,n.t)*(1-ke(.72,1,o)),n.life<=0&&(a=1)):n.style==="rise"?(l=c,r.position.set(n.base[0],n.base[1]+n.t*30,n.base[2]),r.rotation.set(0,this.faceYaw+Math.sin(e*2+n.seed)*.18,n.tilt),a=ke(0,.08,n.t)*(1-ke(.55,1,o))):(l=c,r.position.set(n.base[0],n.base[1]+Math.sin(e*1.7+n.seed)*2.2,n.base[2]),r.rotation.set(0,this.faceYaw+Math.sin(e*.8+n.seed)*.16,n.tilt),a=1),n.dying&&(n.dieT=(n.dieT||0)+t,a*=1-mt(n.dieT/.35),l*=1-.2*mt(n.dieT/.35)),r.scale.setScalar(Math.max(1e-4,l)),r.material.opacity=mt(a),r.visible=a>.01,(n.style!=="hold"&&n.life>0&&n.t>=n.life||n.dying&&n.dieT>.36)&&(this.dispose(n),this.items.splice(i,1))}}},Ch=class{constructor(t,e,i=-214){this.group=new lt,this.theme=t,this.palette=e,this.x=i,this.labels=new Map,this.max=0,this.material=new Ht({color:se(t==="paper"?e.ink:e.cream),roughness:.6,emissive:se(t==="paper"?"#000000":e.cream),emissiveIntensity:t==="paper"?0:.35,transparent:!0,opacity:.8}),this.pole=new st(new ae(2.2,1,2.2),this.material),this.pole.castShadow=!1,this.group.add(this.pole),this.tickGeo=new ae(12,1.6,2),this.ticks=[],this.group.position.set(i,0,24)}setHeight(t){let e=Math.ceil((t+8)/5)*5;if(e!==this.max){this.max=e,this.pole.scale.y=e*22,this.pole.position.y=e*22/2;for(let i=5;i<=e;i+=5){if(this.labels.has(i))continue;let n=new st(this.tickGeo,this.material);n.position.set(6,i*22,0),this.group.add(n),this.ticks.push(n);let{geometry:r}=ef(this.palette.fontKey,String(i),{size:15,depth:3,align:"right"}),o=new st(r,this.material);o.position.set(-5,i*22+0,0),o.rotation.y=this.facing||0,o.castShadow=!1,this.group.add(o),this.labels.set(i,o)}}}setAlpha(t){this.material.opacity=.8*t,this.group.visible=t>.02}setFacing(t){if(!(Math.abs(t-(this.facing||0))<1e-5)){this.facing=t;for(let e of this.labels.values())e.rotation.y=t}}dispose(){this.pole.geometry.dispose(),this.tickGeo.dispose(),this.material.dispose()}};var Jr=class extends Oi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ae;t.deleteAttribute("uv");let e=new Ht({side:je}),i=new Ht,n=new Rs(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let r=new st(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new li(t,i,6),a=new Ve;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new st(t,Kr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new st(t,Kr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new st(t,Kr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new st(t,Kr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new st(t,Kr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let u=new st(t,Kr(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Kr(s){return new $o({color:0,emissive:16777215,emissiveIntensity:s})}var he=(s,t,e,i=2.2)=>new Vr(s,t,e,2,Math.min(i,s/2-.01,t/2-.01,e/2-.01)),jr=(s,t=28)=>new kn(s.map(([e,i])=>new tt(e,i)),t),Da=Object.freeze(["turbo","crumble","slowmo","magnet","drunk","spotlight","zoom","double","accordion","rollercoaster","peekaboo","earthquake","pisa","superglue","portal","calipers"]);function sS(s){let t=Or[s]||Or.paper,e=o=>_i(s,o),i=new Map;return{p:t,T:e,mat:(o,{rough:a=.5,metal:l=0,emissive:c=0,glass:h=!1,shine:d=.3}={})=>{let f=`${o}|${a}|${l}|${c}|${h}`;if(i.has(f))return i.get(f);let u=new ct(o),g;return h?g=new Xe({color:u,roughness:.05,metalness:0,transparent:!0,opacity:.38,clearcoat:1,envMapIntensity:1.6}):s==="sunset"?g=new Ht({color:u,roughness:.7,metalness:l*.4,flatShading:!0,emissive:u,emissiveIntensity:.32+c}):s==="primetime"?g=new Xe({color:u,roughness:Math.max(.08,a*.4),metalness:l,clearcoat:1,clearcoatRoughness:.06,emissive:u,emissiveIntensity:.05+c}):g=new Xe({color:u,roughness:a,metalness:l,clearcoat:d,clearcoatRoughness:.4,sheen:.4,sheenColor:new ct("#fff2d6"),emissive:u,emissiveIntensity:c}),i.set(f,g),g},glowMat:(o,a=.9)=>new oe({color:new ct(o).multiplyScalar(1.6),transparent:!0,opacity:a,blending:Oe,depthWrite:!1,side:le,toneMapped:!1}),cache:i}}var at=(s,t,e,i=0,n=0,r=0,o=0,a=0,l=0)=>{let c=new st(t,e);return c.position.set(i,n,r),c.rotation.set(o,a,l),c.castShadow=!0,s.add(c),c};function P0({p:s,mat:t},e){let i=new lt;return at(i,he(13,18,17,3),t(s.ink,{metal:.3,rough:.4}),-17,0,0),at(i,new _e(15,7,18,30),t(s.amber,{metal:.45,rough:.28}),-4,0,0,0,0,-Math.PI/2),at(i,new _e(11,11,2,26),t(s.cream,{rough:.6}),4.6,0,0,0,0,-Math.PI/2),e?[[15,2.6],[23,2.6]].forEach(([n,r],o)=>at(i,new Ce(n,r,9,26,1.5),t(o?s.teal:s.vermilion,{emissive:.45}),5,0,0,0,0,-.75)):(at(i,he(4.4,28,5,1.6),t(s.vermilion,{emissive:.5}),22,0,3,0,0,.785),at(i,he(4.4,28,5,1.6),t(s.vermilion,{emissive:.5}),22,0,3,0,0,-.785)),i}var I0={turbo({p:s,mat:t,glowMat:e}){let i=new lt,n=new lt;i.add(n),at(n,jr([[0,-22],[7,-22],[11,-12],[12,4],[10,16],[6,26],[0,34]]),t(s.amber,{metal:.2,rough:.35})),at(n,jr([[0,22],[6,22],[8,28],[0,38]]),t(s.vermilion,{rough:.4})),at(n,new ye(5,18,14),t("#F4EDDF",{rough:.15}),0,8,9.5).scale.z=.6,at(n,new Ce(5,1.4,8,20),t(s.ink,{metal:.6}),0,8,10.5);for(let r=0;r<3;r+=1){let o=r/3*Zt,a=at(n,he(3,16,14,1.2),t(s.vermilion),Math.sin(o)*12,-14,Math.cos(o)*12);a.rotation.y=o}return at(n,new ei(7,22,16),e(s.amber,.9),0,-34,0,Math.PI,0,0),at(n,new ei(4,15,16),e("#ffffff",.9),0,-30,0,Math.PI,0,0),n.rotation.z=-.62,i},crumble({p:s,mat:t}){let e=new lt,i=at(e,he(24,30,26,2.5),t(s.cream,{rough:.8}),-13.5,2,0);i.rotation.z=.12;let n=at(e,he(22,30,26,2.5),t(s.cream,{rough:.8}),13,-2,0);n.rotation.z=-.14,at(e,he(3,32,22,1),t(s.vermilion,{emissive:.5}),.5,0,2.5,0,0,.18);for(let r=0;r<5;r+=1)at(e,he(5-r*.4,5-r*.4,5-r*.4,1.2),t(r%2?s.amber:s.cream,{rough:.7}),-8+r*8,-23-r%2*6,8+r%3*3,r,r*.7,.4);return e},slowmo({p:s,mat:t}){let e=new lt,i=new lt;e.add(i),at(i,new Ce(21,3.6,14,44),t(s.amber,{metal:.5,rough:.28})),at(i,new _e(19.5,19.5,5,40),t("#F4EDDF",{rough:.5}),0,0,-1,Math.PI/2,0,0);for(let n=0;n<12;n+=1){let r=n/12*Zt;at(i,he(1.4,n%3?3:5.5,1.4,.4),t(s.ink),Math.sin(r)*15.5,Math.cos(r)*15.5,2,0,0,-r)}return at(i,he(2,14,2,.6),t(s.vermilion,{emissive:.3}),0,6,3,0,0,-.5).geometry.translate(0,0,0),at(i,he(2,10,2,.6),t(s.ink),-3.5,-1,3,0,0,1.9),at(i,new ye(2.4,12,10),t(s.ink,{metal:.6}),0,0,3.5),at(i,new _e(3.6,3.6,7,16),t(s.teal,{metal:.4}),0,27,0),at(i,new _e(2,2,6,12),t(s.teal,{metal:.4}),17,21,0,0,0,-.7),i.rotation.x=-.1,e},magnet({p:s,mat:t}){let e=new lt;at(e,new Ce(17,6,14,30,Math.PI),t(s.vermilion,{metal:.35,rough:.3}),0,4,0,0,0,0);for(let i of[-1,1])at(e,he(12,17,12,1.4),t("#e9edf2",{metal:.85,rough:.22}),i*17,-13,0),at(e,he(12.4,4,12.4,1),t(i<0?s.blue:s.amber),i*17,-3.2,0);for(let i=0;i<3;i+=1)at(e,new Ce(6+i*6,.9,6,20,Math.PI),t(s.teal,{emissive:.8}),0,-26,0,0,0,Math.PI).scale.set(1,.6,1);return e},drunk({p:s,mat:t}){let e=new lt,i=new lt;e.add(i),at(i,jr([[0,-26],[11,-26],[13,-22],[13,6],[9,14],[4.4,18],[4.4,30],[0,30]]),t(s.teal,{rough:.12,metal:.1,emissive:.1})),at(i,new _e(5.2,5.2,5,14),t(s.amber,{rough:.7}),0,33,0),at(i,new _e(13.4,13.4,14,28,1,!0),t("#F4EDDF",{rough:.6}),0,-8,0),at(i,new Fe(14,9),t(s.vermilion,{rough:.6}),0,-8,13.5),i.rotation.z=.5,i.position.set(-4,-3,0);for(let n=0;n<4;n+=1)at(e,new ye(2.6-n*.3,12,10),t(s.rose,{rough:.15,emissive:.3}),18+n%2*5,8+n*8,4);return e},spotlight({p:s,mat:t,glowMat:e}){let i=new lt,n=new lt;return i.add(n),at(n,jr([[0,-8],[10,-8],[15,4],[17,14],[0,14]],24),t(s.amber,{metal:.5,rough:.28}),0,8,0,0,0,0),at(n,new _e(12.5,12.5,2,28),e("#ffffff",.95),0,22.2,0),at(n,new Ce(17,1.8,10,30),t(s.ink,{metal:.6}),0,22,0,Math.PI/2,0,0),at(n,new _e(3,3,22,12),t(s.ink,{metal:.5}),0,-10,0),at(n,he(26,4,16,1.4),t(s.ink,{metal:.5}),0,-22,0),at(n,new ei(34,60,32,1,!0),e(s.amber,.18),0,52,0).scale.set(1,1,1),n.rotation.z=-.5,n.position.set(-4,-10,0),i},zoom({p:s,mat:t}){let e=new lt,i=new lt;return e.add(i),at(i,new Ce(19,3.6,14,44),t(s.amber,{metal:.6,rough:.25})),at(i,new _e(17.2,17.2,2.4,40),t(s.blue,{glass:!0}),0,0,0,Math.PI/2,0,0),at(i,new _e(3.4,4.4,24,14),t(s.vermilion,{rough:.3}),21,-21,0,0,0,Math.PI/4),at(i,new Ce(19,.9,8,30,1.1),t("#ffffff",{emissive:.6}),0,0,3.6,0,0,1.9),at(i,he(14,3,3,1),t(s.teal),0,0,1.4),at(i,he(3,14,3,1),t(s.teal),0,0,1.4),i.position.set(-5,5,0),i.rotation.y=-.25,e},double({p:s,mat:t}){let e=new lt,i=(n,r,o,a)=>{let l=at(e,jr([[0,0],[10,0],[13,4],[10,26],[0,27]]),t(n,{metal:.3,rough:.3}),r,o,0);return l.rotation.z=a,l.rotation.x=Math.PI,l.position.y+=26,l};return i(s.amber,-14,-22,.1),i(s.blue,15,-22,-.1),at(e,new ye(6,18,14),t(s.vermilion,{rough:.15,emissive:.25}),0,-18,14),at(e,new Ce(4,1.2,6,16,4.2),t(s.ink),-14,14,12,0,0,.5),at(e,new ye(1.2,8,6),t(s.ink),-14,8,12),e},accordion({p:s,mat:t}){let e=new lt;at(e,he(7,32,28,2),t(s.teal,{metal:.2}),-23,0,0),at(e,he(7,36,28,2),t(s.vermilion,{metal:.2}),23,0,0);for(let i=0;i<9;i+=1){let n=-16+i*4;at(e,he(1.8,28,24,.5),t(i%2?s.amber:"#F4EDDF",{rough:.6}),n,0,0,0,0,i%2?.28:-.28)}for(let i=0;i<3;i+=1)at(e,new ye(1.6,10,8),t("#F4EDDF",{rough:.2}),23,8-i*8,14.4);for(let i=0;i<4;i+=1)at(e,he(3,4,3,.8),t("#F4EDDF"),-23,10-i*6.5,14.4);return e},rollercoaster({p:s,mat:t}){let e=new lt,i=new Er([[-30,-12,0],[-18,8,0],[-6,-12,0],[8,14,0],[20,-8,0],[32,6,0]].map(([l,c,h])=>new P(l,c,h)));at(e,new Yo(i,48,2.2,8,!1),t(s.teal,{metal:.3,rough:.3}));for(let l=0;l<9;l+=1){let c=i.getPoint(l/8);at(e,new _e(1,1,c.y+30,6),t(s.blue,{rough:.5}),c.x,(c.y-30)/2-2,0)}let n=.52,r=i.getPoint(n),o=i.getTangent(n),a=new lt;a.position.copy(r).add(new P(0,7,0)),a.rotation.z=Math.atan2(o.y,o.x),e.add(a),at(a,he(20,10,14,3),t(s.amber,{rough:.3})),at(a,he(18,3,12,1),t(s.vermilion),0,4,0),at(a,new ye(4,12,10),t("#F4EDDF",{rough:.3}),-3,8,0);for(let l of[-1,1])at(a,new _e(3,3,3,12),t(s.ink,{metal:.6}),l*6,-6,7.4,Math.PI/2,0,0);return e.position.y=3,e},peekaboo({p:s,mat:t}){let e=new lt;at(e,new ye(20,32,24),t("#F7F1E4",{rough:.2,shine:1}),0,-2,0).scale.set(1.35,.85,.7),at(e,new _e(9.6,9.6,4,28),t(s.blue,{rough:.15,shine:1}),0,-2,12.6,Math.PI/2,0,0),at(e,new _e(4.6,4.6,4.6,20),t(s.ink,{rough:.2}),0,-2,13.2,Math.PI/2,0,0),at(e,new ye(1.8,10,8),t("#ffffff",{emissive:.7}),3,1.4,16);let n=at(e,new ye(21.5,32,16,0,Zt,0,.9),t(s.amber,{rough:.4}),0,2,0);n.scale.set(1.36,.9,.74),n.rotation.x=-.5;for(let r=0;r<5;r+=1){let o=-.9+r*.45;at(e,new ei(1.4,9,6),t(s.ink),Math.sin(o)*25,20+Math.cos(o)*3,6,0,0,-o*.8)}return e},earthquake({p:s,mat:t}){let e=new lt,i=at(e,he(34,8,34,2),t(s.cream,{rough:.9}),-15,-17,0);i.rotation.z=.2;let n=at(e,he(34,8,34,2),t(s.cream,{rough:.9}),15,-19,0);n.rotation.z=-.22,at(e,he(5,7,30,1),t(s.vermilion,{emissive:1.1}),0,-22,0);let r=at(e,he(26,14,22,3),t(s.amber,{rough:.35}),0,0,0);r.rotation.z=.28,at(e,he(20,12,20,3),t(s.blue,{rough:.35}),6,14,0).rotation.z=-.34;for(let o=0;o<6;o+=1)at(e,he(3.6,3.6,3.6,.8),t(s.cream,{rough:.9}),-26+o*10,-8-o%2*5,14,o,o*.8,0);for(let o of[-1,1])at(e,new Ce(29,.9,6,18,1),t(s.vermilion,{emissive:.8}),0,0,-6,0,0,o>0?-.5:Math.PI-.5).scale.set(o,1,1);return e},pisa({p:s,mat:t}){let e=new lt,i=new lt;e.add(i),at(e,new _e(27,29,4,32),t(s.teal,{rough:.8}),0,-30,0);for(let n=0;n<6;n+=1){let r=-24+n*9.2;at(i,new _e(12-n*.5,12.6-n*.5,8.4,24),t(s.cream,{rough:.7}),0,r,0),at(i,new Ce(12.3-n*.5,1,6,24),t(s.amber,{rough:.5}),0,r+4.4,0,Math.PI/2,0,0);for(let o=0;o<6;o+=1){let a=o/6*Zt+.4;at(i,he(2.2,5.4,1.2,.5),t(s.ink),Math.sin(a)*(12.2-n*.5),r,Math.cos(a)*(12.2-n*.5),0,a,0)}}return at(i,new ei(8.5,10,20),t(s.vermilion,{rough:.4}),0,36,0),i.position.set(-3,0,0),i.rotation.z=-.2,e},superglue({p:s,mat:t}){let e=new lt,i=new lt;return e.add(i),at(i,new On(10,26,8,20),t(s.amber,{rough:.25,shine:1}),0,-2,0),at(i,new _e(10.4,10.4,12,24,1,!0),t(s.teal,{rough:.4}),0,-4,0),at(i,jr([[0,0],[6,0],[4,10],[1.4,17],[0,17]],14),t(s.teal,{rough:.3}),0,24,0),at(i,new _e(1.7,1.7,6,10),t(s.vermilion,{rough:.3}),0,36,0),i.rotation.z=.5,i.position.set(-6,4,0),at(e,new ye(4,16,12),t(s.blue,{rough:.08,shine:1,emissive:.15}),14,-20,2).scale.set(.8,1.3,.8),at(e,new ye(2.4,12,10),t(s.blue,{rough:.08,shine:1}),18,-32,2),at(e,new _e(15,15,3,24),t(s.blue,{rough:.08,shine:1}),16,-36,2).scale.set(1,.4,.5),e},portal({p:s,mat:t,glowMat:e}){let i=new lt;at(i,new Ce(19,4.2,14,40),t(s.teal,{metal:.4,rough:.3,emissive:.4}),-17,0,-2,0,.55,0),at(i,new Ce(19,4.2,14,40),t(s.blue,{metal:.4,rough:.3,emissive:.4}),17,0,2,0,-.55,0),at(i,new ti(16,36),e(s.teal,.55),-17,0,-2,0,.55,0),at(i,new ti(16,36),e(s.amber,.5),17,0,2,0,-.55,0),at(i,he(14,10,14,2.4),t(s.amber,{rough:.3,emissive:.2}),0,0,0,.2,.4,.1);for(let n=0;n<5;n+=1)at(i,new ye(1.4,8,6),e("#ffffff",.9),-8+n*4,11-Math.abs(n-2)*2.5,6);return i},calipers({p:s,mat:t}){let e=new lt,i=new lt;e.add(i),at(i,he(60,8,4,1),t("#e7ecf1",{metal:.8,rough:.25}),0,6,0);for(let n=0;n<15;n+=1)at(i,he(.9,n%5?3:5,.8,.2),t(s.ink),-28+n*4,3.5-(n%5?0:.5),2.4);return at(i,he(6,34,6,1.2),t("#e7ecf1",{metal:.8,rough:.25}),-27,-10,0),at(i,he(10,5,6,1.2),t("#e7ecf1",{metal:.8}),-22.5,-26,0),at(i,he(7,30,6,1.2),t(s.amber,{metal:.5,rough:.28}),14,-8,0),at(i,he(11,5,6,1.2),t(s.amber,{metal:.5}),8.5,-23,0),at(i,he(8,7,7,1.4),t(s.vermilion,{rough:.3}),14,8,0),at(i,he(14,12,10,2),t(s.blue,{rough:.35}),-7,-17,0),i.position.set(4,3,0),e},empty({p:s,mat:t}){let e=new lt;return[[s.teal,38,-14],[s.amber,30,-1.5],[s.blue,22,11]].forEach(([i,n,r])=>at(e,he(n,11,22,3),t(i,{rough:.4}),0,r,0)),at(e,new Ce(5,1.6,6,14,4.3),t(s.vermilion,{emissive:.4}),17,20,4),e},brand({p:s,mat:t}){let e=new lt;return[[s.teal,42,-20],[s.amber,34,-7.5],[s.vermilion,26,5],[s.blue,18,17.5]].forEach(([i,n,r],o)=>{let a=at(e,he(n,11.5,25,3),t(i,{rough:.4}),o%2?2:-2,r,0);a.rotation.y=o%2?.05:-.06}),at(e,new Xo(5.2,0),t("#FFC83D",{metal:.5,rough:.25,emissive:.7}),17,31,5).rotation.set(.4,.6,.2),at(e,he(9,2.6,2.6,1),t("#FFC83D",{emissive:.7}),26,22,4,0,0,.7),at(e,he(8,2.6,2.6,1),t("#FFC83D",{emissive:.7}),29,31,4,0,0,-.2),e},"speaker-on"({p:s,mat:t}){return P0({p:s,mat:t},!0)},"speaker-off"({p:s,mat:t}){return P0({p:s,mat:t},!1)}};function Fa(s,t="paper"){let e=sS(t),n=(I0[s]||I0.empty)(e),r=new Yi().setFromObject(n),o=r.getSize(new P),a=r.getCenter(new P),l=54/Math.max(o.x,o.y*1.05,o.z),c=new lt;return n.position.sub(a),c.add(n),c.scale.setScalar(l),c.userData.dispose=()=>{c.traverse(h=>{h.geometry&&h.geometry.dispose()});for(let h of e.cache.values())h.dispose()},c.userData.id=s,c.userData.size=54,c}var rS=Object.freeze(["brand","speaker-on","speaker-off"]);function D0(s="paper",{size:t=192,ids:e=[...Da,"empty",...rS]}={}){let i=document.createElement("canvas");i.width=i.height=t;let n=new cs({canvas:i,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,premultipliedAlpha:!1});n.setPixelRatio(1),n.setSize(t,t,!1),n.setClearColor(0,0),n.outputColorSpace=Ie,n.toneMapping=s==="paper"?Ki:hn,n.toneMappingExposure=s==="paper"?1.05:1,n.shadowMap.enabled=!1;let r=new En(n),o=new Jr,a=r.fromScene(o,.04).texture,l=new Oi;l.environment=a,l.environmentIntensity=s==="paper"?.75:.9;let c=new ai(26,1,10,600);c.position.set(34,40,150),c.lookAt(0,-1,0);let h=new zi("#fff2dc",s==="paper"?2.4:2.6);h.position.set(-60,90,120);let d=new zi(s==="sunset"?"#2EC4B6":s==="primetime"?"#FFC83D":"#bfe6ea",1.6);d.position.set(80,30,-90),l.add(new zn("#ffffff","#cdbfa5",.7),h,d);let f=(()=>{let m=document.createElement("canvas");m.width=m.height=64;let p=m.getContext("2d"),x=p.createRadialGradient(32,32,0,32,32,32);return x.addColorStop(0,"rgba(20,12,0,.34)"),x.addColorStop(1,"rgba(20,12,0,0)"),p.fillStyle=x,p.fillRect(0,0,64,64),new hi(m)})(),u=new st(new Fe(64,64),new oe({map:f,transparent:!0,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=-30,l.add(u);let g={};for(let m of e){let p=Fa(m,s);p.rotation.y=-.5,p.rotation.x=.1,l.add(p),n.render(l,c),g[m]=i.toDataURL("image/png"),l.remove(p),p.userData.dispose()}return f.dispose(),u.geometry.dispose(),u.material.dispose(),a.dispose(),r.dispose(),o.dispose(),n.dispose(),n.forceContextLoss(),g}function F0(s,t){let e=0;for(let[i,n]of Object.entries(t)){let r=s.getElementById(`sabotage-symbol-${i}`);r&&(r.dataset.flat||(r.dataset.flat=r.innerHTML),r.innerHTML=`<image href="${n}" x="-1" y="-1" width="34" height="34" preserveAspectRatio="xMidYMid meet"/>`,e+=1)}return e}function L0(s,t){let e=0,i=(r,o)=>{r&&(r.dataset.flat===void 0&&(r.dataset.flat=r.innerHTML),r.dataset.glyph3d="1",r.innerHTML=o,e+=1)},n=(r,o="")=>`<image ${o} href="${r}" x="-3" y="-3" width="30" height="30" preserveAspectRatio="xMidYMid meet"/>`;return t.brand&&i(s.querySelector(".brand-mark svg"),n(t.brand)),t["speaker-on"]&&t["speaker-off"]&&i(s.querySelector(".sound-toggle svg"),n(t["speaker-on"],'class="speaker-on"')+n(t["speaker-off"],'class="speaker-off"')),e}function N0(s){for(let t of s.querySelectorAll('symbol[id^="sabotage-symbol-"][data-flat]'))t.innerHTML=t.dataset.flat,delete t.dataset.flat;for(let t of s.querySelectorAll("svg[data-glyph3d]"))t.innerHTML=t.dataset.flat,delete t.dataset.flat,delete t.dataset.glyph3d}var Ph=class{constructor(){this.energy=0,this.x=0,this.y=0,this.z=0,this.dwell=0,this.inside=!1,this.entered=!1,this.enterX=0,this.sparkCarry=0}update(t,{point:e=null,speed:i=0,blocked:n=!1,reduced:r=!1}={}){if(!(t>0))return this;t=Math.min(t,.1);let o=!!e&&!n;if(this.entered=!1,o&&!this.inside&&(this.entered=!0,this.enterX=e.x,this.x=e.x,this.y=e.y,this.z=e.z||0),this.inside=o,this.energy=jt(this.energy,o?1:0,o?6:2.4,t),this.energy<.002&&!o&&(this.energy=0),o){let a=r?30:13;this.x=jt(this.x,e.x,a,t),this.y=jt(this.y,e.y,a,t),this.z=jt(this.z,e.z||0,a,t),this.dwell=i<140?Math.min(6,this.dwell+t):Math.max(0,this.dwell-t*3)}else this.dwell=0;return this}sparks(t,e,i=!1){if(i||!this.inside||!(t>0))return this.sparkCarry=0,0;let n=mt((e-90)/900,0,1)*70;this.sparkCarry+=n*Math.min(t,.1);let r=Math.min(4,Math.floor(this.sparkCarry));return this.sparkCarry-=Math.floor(this.sparkCarry),r}};function Ih(s,t,e,i,n={dx:0,dy:0}){let r=t-s.point.x,o=e-s.point.y,a=i-s.point.z,l=s.right,c=s.up;return n.dx=r*l.x+o*l.y+a*l.z,n.dy=r*c.x+o*c.y+a*c.z,n}var Dh=class{constructor(t,e,i){this.theme=t,this.palette=e,this.group=new lt,this.items=[],this.hover=-1,this.t=0,this.rx=450,this.rz=300,this.zc=40,this.base=30,this.gone=0;let n=i&&i.length?i.map(r=>r.id):Da;n.forEach((r,o)=>{let a=Fa(r,t),l=new lt;l.add(a);let c=new st(new ye(46,8,6),new oe({visible:!1}));c.userData.index=o,l.add(c);let h=i&&i.find(d=>d.id===r);this.group.add(l),this.items.push({id:r,holder:l,icon:a,proxy:c,name:h?h.name:r,angle:o/n.length*Zt,scale:1.5,spin:0,lift:0,seed:o*1.7})}),this.proxies=this.items.map(r=>r.proxy)}update(t,e,i,n={}){let r=n.yaw||0,o=Math.sin(r),a=Math.cos(r),l=!i&&n.pointer&&n.energy>.01?n.pointer:null,c=n.energy||0,h=this.rx,d=this.rz,f=this.base,u=this.off||(this.off={dx:0,dy:0});this.gone=jt(this.gone,n.away?1:0,n.away?7:3.2,t),this.group.visible=this.gone<.995;let g=1-this.gone,m=0;this.items.forEach(p=>{p.mag=0,l&&(Ih(l,p.holder.position.x,p.holder.position.y+24,p.holder.position.z,u),p.mag=ke(330,50,Math.hypot(u.dx,u.dy))*c,p.dxs=u.dx,m=Math.max(m,p.mag))}),this.slow=jt(this.slow===void 0?1:this.slow,1-.85*m,7,t),this.t+=t*(i?.25:1)*this.slow,this.items.forEach((p,x)=>{let y=p.angle+this.t*.13,M=this.hover===x;p.scale=jt(p.scale,M?2.3:1.5+p.mag*.45,9,t),p.lift=jt(p.lift,M?34:p.mag*16,8,t),p.tilt=jt(p.tilt||0,M?0:-Math.sign(p.dxs||0)*p.mag*.4,9,t),p.spin+=t*(M?2.8:.5+p.mag*1.2);let _=Math.cos(y)*h,b=Math.sin(y)*d+this.zc;p.holder.position.set(_,f+p.lift+(i?0:Math.sin(e*1.3+p.seed)*5),b),p.holder.scale.setScalar(Math.max(1e-4,p.scale*g*(1+(_*o+b*a)/1800))),p.icon.rotation.y=p.spin+y*.3,p.icon.rotation.x=.1,p.icon.rotation.z=p.tilt})}pick(t){let e=t.intersectObjects(this.proxies,!1)[0];return e?e.object.userData.index:-1}dispose(){for(let t of this.items)t.icon.userData.dispose(),t.proxy.geometry.dispose(),t.proxy.material.dispose()}};var oS={paper:.045,sunset:0,primetime:.05},U0=21;function B0(s,t=1,e=6,i=t){let n=String(s||"").trim().split(/\s+/),r=[],o=null,a=0,l=0,c=0,h=()=>Number(n[c++])*t,d=()=>Number(n[c++])*i;for(;c<n.length;){let f=n[c++];if(f==="m")a=h(),l=d(),o=[[a,l]],r.push(o);else if(f==="l"&&o)a=h(),l=d(),o.push([a,l]);else if(f==="q"&&o){let u=h(),g=d(),m=h(),p=d();for(let x=1;x<=e;x+=1){let y=x/e,M=(1-y)*(1-y),_=2*(1-y)*y,b=y*y;o.push([M*a+_*m+b*u,M*l+_*p+b*g])}a=u,l=g}else if(f==="b"&&o){let u=h(),g=d(),m=h(),p=d(),x=h(),y=d();for(let M=1;M<=e;M+=1){let _=M/e,b=1-_,E=b*b*b,v=3*b*b*_,S=3*b*_*_,C=_*_*_;o.push([E*a+v*m+S*x+C*u,E*l+v*p+S*y+C*g])}a=u,l=g}}return r}function aS(s,t){let e=[];for(let o of s)for(let a=0,l=o.length;a<l;a+=1){let c=o[a],h=o[(a+1)%l];(c[1]<=t&&h[1]>t||h[1]<=t&&c[1]>t)&&e.push([c[0]+(t-c[1])/(h[1]-c[1])*(h[0]-c[0]),h[1]>c[1]?1:-1])}e.sort((o,a)=>o[0]-a[0]);let i=[],n=0,r=0;for(let[o,a]of e){let l=n;n+=a,l===0&&n!==0?r=o:l!==0&&n===0&&i.push([r,o])}return i}function lS(s,t,e){let i=[];for(let r of[.2,.5,.8])for(let o of aS(s,t+(e-t)*r))i.push(o);i.sort((r,o)=>r[0]-o[0]);let n=[];for(let r of i){let o=n[n.length-1];o&&r[0]<=o[1]+1e-6?o[1]=Math.max(o[1],r[1]):n.push([r[0],r[1]])}return n}function cS(s,t,e,i){let n=t-s;if(n<=.001)return[];if(n<e*1.35)return[[s,t]];let r=[s],o=Math.ceil((s-i)/e+1e-9);for(let l=o;;l+=1){let c=i+l*e;if(c>=t-1e-6)break;c>s+1e-6&&r.push(c)}r.push(t);for(let l=r.length-2;l>=1;l-=1)r[l+1]-r[l]<e*.45&&l+1===r.length-1&&r.splice(l,1);r.length>2&&r[1]-r[0]<e*.45&&r.splice(1,1);let a=[];for(let l=0;l<r.length-1;l+=1)a.push([r[l],r[l+1]]);return a}function La(s,t,{capHeight:e=112,rows:i=0,rowHeight:n=0,brickLength:r=0,tracking:o,gap:a=0,xScale:l=1}={}){let c=Ia(s);if(!c)return{bricks:[],letters:[],width:0,capHeight:e,rowHeight:n||e/(i||U0),brickLength:r||0};let h=e/(c.capHeight/c.resolution)/c.resolution,d=h*c.resolution,f=s==="sunset",u=125*h,g=n||(f?u:e/(i||U0)),m=r||(f?u*2:g*3.1),p=((o??oS[s]??.04)*d+a)*l,x=[],y=[],M=0,_=0,b=1/0;for(let S of String(t).toUpperCase()){let C=c.glyphs[S];if(C&&C.o)for(let R of B0(C.o,h*l,1,h))for(let[,I]of R)b=Math.min(b,I)}let E=Number.isFinite(b)?Math.max(0,Math.floor(b/g+1e-6)):0;for(let S of String(t).toUpperCase()){let C=c.glyphs[S];if(S===" "||!C){M+=(c.glyphs.I?c.glyphs.I.ha:400)*h*l*.9;continue}let R=C.ha*h*l;if(C.o){let I=B0(C.o,h*l,6,h),L=-1/0,F=1/0,T=-1/0;for(let O of I)for(let[Y,G]of O)L=Math.max(L,G),F=Math.min(F,Y),T=Math.max(T,Y);let N=Math.max(1,Math.ceil(L/g-1e-6)-E),z={ch:S,x0:M+F,x1:M+T,cx:M+(F+T)/2,rows:N,base:M};for(let O=0;O<N;O+=1){let Y=lS(I,(O+E)*g,(O+E+1)*g),G=O%2*m*.5,$=0;for(let[et,dt]of Y)for(let[xt,K]of cS(et,dt,m,G))x.push({x:M+(xt+K)/2,y:(O+.5)*g,w:K-xt,h:g,letter:_,row:O,col:$}),$+=1}y.push(z),_+=1}M+=R+p}let v=Math.max(0,M-p);for(let S of x)S.x-=v/2;for(let S of y)S.x0-=v/2,S.x1-=v/2,S.cx-=v/2,S.base-=v/2;return{bricks:x,letters:y,width:v,capHeight:e,rowHeight:g,brickLength:m}}var Lh=Object.freeze(["turbo","drunk","slowmo","magnet","portal","rollercoaster","earthquake","pisa","spotlight","peekaboo","zoom","double","accordion","crumble","superglue","calipers"]),hS=Object.freeze(["accordion","pisa","rollercoaster","peekaboo","earthquake"]),bR=Math.PI*2,O0=s=>1-(1-s)*(1-s),uS=s=>s*s;function z0(s,t,e=.45,i=.6){return ke(0,e,s)*(1-ke(Math.max(e,t-i),t,s))}var H0=()=>({x:0,y:0,rz:0,sx:1});function k0(s,t,e=1){return e*.2792*z0(s,t,.9,1)*(.86+.14*Math.sin(s*2.3))}function Nh(s,t,e=4.6,{reduced:i=!1,dir:n=1}={}){let r=z0(t,e),o=i?0:1,a={id:s,env:r,t,top:H0(),bottom:H0(),letter:null,shed:0,shedMode:"",post:{},cam:{zoom:1,focus:0,roll:0,shake:0},veil:0,loupe:0,spotSweep:0,ghost:0,ghostDx:0,gates:0,wrap:0,jaws:0,glue:0,streaks:0,clip:!1,rail:0},l=r*o;switch(s){case"turbo":{a.top.x=l*(Math.sin(t*5.6)*40+Math.sin(t*23)*3.5),a.bottom.x=-l*Math.sin(t*5.6)*16,a.top.sx=1+l*.015*Math.sin(t*23),a.streaks=r,a.post.zoomBlur=.28*r,a.post.ca=.0014*r;break}case"drunk":{a.top.rz=l*(Math.sin(t*2.1)*.06+Math.sin(t*3.7)*.03),a.top.x=l*Math.sin(t*1.6)*26,a.bottom.rz=l*Math.sin(t*1.9+1)*.026,a.bottom.x=-l*Math.sin(t*1.6)*8,a.letter=(c,h)=>({y:l*Math.abs(Math.sin(t*2.6+c*1.4))*4,rz:l*Math.sin(t*3.1+c*1.3)*.09,vis:1}),a.post.wobble=.8*r;break}case"slowmo":{let c=t%1.4/1.4,h=.56,d=Math.floor(t/1.4),f=c<h?c/h*.3:.3+.7*O0((c-h)/(1-h)),u=d%2?-1:1;a.top.x=l*u*(f-.5)*120,a.bottom.x=-a.top.x*.22,a.post.desat=.5*r,a.post.tint=[.9,.97,1.12];break}case"magnet":{let h=t%1.25/1.25,f=(Math.floor(t/1.25)%2?-1:1)*n,u=h<.66?-f*62*O0(h/.66):-f*62+f*150*uS((h-.66)/.34)*(1-.35*(h-.66));a.top.x=l*u,a.top.sx=1+l*(h<.66?-.04*h:.07*(1-h)),a.top.rz=l*f*.03*(h<.66?h:1-h),a.bottom.x=l*u*-.12,a.cam.shake=.15*r;break}case"portal":{a.gates=r,a.clip=!0,a.wrap=o?n*ke(.3,Math.max(.6,e-.5),t):0;break}case"rollercoaster":{a.letter=(c,h)=>({y:l*(Math.sin(t*3.2-c*.55)*22+6),rz:l*Math.cos(t*3.2-c*.55)*.1,vis:1}),a.top.y=l*Math.sin(t*3.2+1.2)*6,a.rail=r;break}case"earthquake":{a.top.x=l*(Math.sin(t*47)*5.5+Math.sin(t*31+1)*4),a.top.y=l*Math.sin(t*53)*2.4,a.top.rz=l*Math.sin(t*41)*.007,a.bottom.x=l*(Math.sin(t*43+2)*4+Math.sin(t*29)*3),a.bottom.y=l*Math.sin(t*59)*1.6,a.cam.shake=1*r,a.shed=l*.28,a.shedMode="top",a.post.ca=.0022*r;break}case"pisa":{let c=k0(t,e,n)*o;a.cam.roll=c*.62,a.top.rz=c*.55,a.bottom.rz=c*.3,a.top.x=c*70,a.bottom.x=c*14,a.shed=Math.max(0,Math.abs(c)-.1)*5.2,a.shedMode="lean",i&&(a.cam.roll=k0(t,e,n)*.3);break}case"spotlight":{a.veil=r,a.spotSweep=Math.sin(t*.9+(n>0?0:Math.PI))*.42*(i?0:1);break}case"peekaboo":{a.letter=(c,h)=>({y:0,rz:0,vis:r>.02&&(t*1.5+c*.37)%1<.66?1:0});break}case"zoom":{a.cam.zoom=1+.85*r,a.cam.focus=r,a.loupe=r;break}case"double":{let c=74*r*(o?Math.sin(t*1.8):.55);a.ghost=r,a.ghostDx=c,a.top.x=-c*.55,a.bottom.x=-c*.3;break}case"accordion":{let c=.5-.5*Math.cos(t*7.85);a.top.sx=1-.55*c*l,a.bottom.sx=1-.4*(.5-.5*Math.cos(t*7.85+.9))*l;break}case"crumble":{a.shed=r*.9,a.shedMode="edges",a.cam.shake=.18*r;break}case"superglue":{a.glue=r,a.top.rz=l*Math.sin(t*2)*.004,a.top.sx=1+l*.012*Math.sin(t*5);break}case"calipers":{let c=ke(0,1.1,t)*(1-ke(e-.7,e,t));a.jaws=c,a.top.sx=1-.07*c,a.bottom.sx=1-.05*c;break}default:break}return a}function G0(s){return`CHAT VOTED: ${String(s||"").toUpperCase()}`}var Fh=class{constructor(t=Lh,e=Math.random,{reduced:i=!1}={}){this.ids=t.slice(),this.random=e,this.order=[],this.next=0,this.reduced=i,this.stage="idle",this.timer=0,this.idle=2.2,this.ballot=null,this.effect=null,this.forced=null,this.count=0,this.dir=1}setReduced(t){this.reduced=!!t}pool(){return this.reduced?this.ids.filter(t=>!hS.includes(t)):this.ids}pick(){let t=this.pool();if(!this.order.length||this.next>=this.order.length||this.order.some(e=>!t.includes(e))){this.order=t.slice();for(let e=this.order.length-1;e>0;e-=1){let i=Math.floor(this.random()*(e+1));[this.order[e],this.order[i]]=[this.order[i],this.order[e]]}this.next=0}return this.order[this.next++]}force(t){if(t){if(this.stage==="vote"&&this.ballot){let e=this.ballot.options.indexOf(t);e>0&&(this.ballot.options[e]=this.ballot.options[0]),this.ballot.options[0]=t,this.ballot.winner=t,this.timer=Math.max(this.timer,1.45);return}this.forced=t,this.stage==="effect"&&this.effect&&(this.effect.remaining=Math.min(this.effect.remaining,.3))}}begin(t){this.dir=this.random()<.5?-1:1,this.effect={id:t,elapsed:0,remaining:4.4,duration:4.4,dir:this.dir,n:++this.count},this.stage="effect",this.timer=0}openVote(t){let e=[t],i=this.ids.filter(r=>r!==t).sort(()=>this.random()-.5);for(;e.length<3;)e.push(i[e.length-1]);let n=[.3+this.random()*.2,.18+this.random()*.18,.16+this.random()*.18];this.ballot={options:e,base:n,fractions:n.slice(),voted:0,winner:t},this.stage="vote",this.timer=0}update(t){if(this.timer+=t,this.stage==="idle")if(this.forced){let e=this.forced;this.forced=null,this.begin(e)}else this.timer>=this.idle&&this.openVote(this.pick());else if(this.stage==="vote"){let e=this.timer,i=this.ballot.fractions,n=this.ballot.base;for(let r=0;r<3;r+=1)i[r]=mt(n[r]*(.4+e*.55)+(r===0?e*.07:0)+Math.sin(e*5+r*2)*.04,.02,1);if(this.ballot.voted=mt(e/1.4),e>=1.9){let r=this.ballot.winner;this.ballot=null,this.begin(r)}}else if(this.stage==="effect"){let e=this.effect;if(e.elapsed+=t,e.remaining-=t,e.remaining<=0&&(this.effect=null,this.stage="idle",this.timer=0,this.idle=this.reduced?3.2:1.7,this.forced)){let i=this.forced;this.forced=null,this.begin(i)}}}};var ms=Object.freeze({radiusBricks:3,maxCells:1.5,stiffness:.12,damping:.8,hz:30,rest:.04}),dS=Math.PI*2;function V0(s,t,e,i,n={x:0,y:0},r=0){let o=Math.hypot(s,t);if(!(e>0)||!(o<e))return n.x=0,n.y=0,n;let a=i*(1-o/e);if(o<1e-6){let l=r*2.399963229728653%dS;return n.x=Math.cos(l)*a,n.y=Math.sin(l)*a,n}return n.x=s/o*a,n.y=t/o*a,n}function W0(s,t,e,i=ms.stiffness,n=ms.damping){return s.vx=(s.vx+(t-s.x)*i)*n,s.vy=(s.vy+(e-s.y)*i)*n,s.x+=s.vx,s.y+=s.vy,s}function nf(s){let t=Math.round(Math.abs(s));return t===0?0:s<0?-t:t}function X0(s,t=0,e=0,i=ms.rest){return t===0&&e===0&&Math.abs(s.x)<i&&Math.abs(s.y)<i&&Math.abs(s.vx)<i&&Math.abs(s.vy)<i}var Uh=class{constructor(t=ms.hz,e=3){this.step=1/t,this.max=e,this.acc=0}advance(t){if(!(t>0))return 0;this.acc+=Math.min(t,.25);let e=0;for(;this.acc+1e-9>=this.step&&e<this.max;)this.acc-=this.step,e+=1;return e===this.max&&(this.acc=0),e}reset(){this.acc=0}};var Bh=Object.freeze({strength:1,near:190,lean:-.16,sink:-.1,push:4,swell:.05,hopSpeed:700,hopNear:.55,hopMin:170,hopSpeedGain:.05,hopMax:420,hopKick:2.4,spring:150,damping:10,swellDamp:12,hopGravity:2400,hopBounce:.3,hopBounceMin:160,breatheAmp:.8,rippleAmp:2.4}),q0=.15,TR=Math.PI*2;function Y0(s,t,e,{pointerSpeed:i=0,energy:n=0,reduced:r=!1,strength:o=Bh.strength,near:a=null,t:l=0}={}){let c=Bh,h=s.length,d=!!t&&!r&&o>0,f=d?t.point.x:0,u=d?t.point.y:0,g=d?t.point.z:0,m=d?t.right.x:0,p=d?t.right.y:0,x=d?t.right.z:0,y=d?t.up.x:0,M=d?t.up.y:0,_=d?t.up.z:0;if(a)for(let b=0;b<h;b+=1)a[b]=0;for(let b=0;b<h;b+=1){let E=s[b];if(E.tz=0,E.tx=0,E.push=0,E.swellTarget=0,d){let v=e(b),S=v[0]-f,C=v[1]-u,R=v[2]-g,I=S*m+C*p+R*x,L=S*y+C*M+R*_,F=ke(c.near,0,Math.sqrt(I*I+L*L));if(a&&(a[b]=F),F>0){let T=I>=0?1:-1;E.tz=-T*F*c.lean*o,E.tx=-F*c.sink*o,E.push=F*(1+i*.01)*c.push*o,E.swellTarget=F*c.swell*o,F>c.hopNear&&i>c.hopSpeed&&E.vhop<=0&&E.hop<.5&&(E.vhop=Math.min(c.hopMax,c.hopMin+i*c.hopSpeedGain),E.vrz+=-T*c.hopKick*o)}}E.breathe=r?0:Math.round(c.breatheAmp*Math.sin(1.4*l+E.seed)*20)/20,E.ripple=r?0:Math.round(n*c.rippleAmp*(.5+.5*Math.sin(4.6*l-.013*E.cx+1.3*E.tier))*200)/200}}var fS=34,mn=[22,27],sf=[112,128],$0=2500;var Na=0,Qr=1,An=2,rf=3,Oh=4,Z0=5,Ua=6,K0=2,pS=new Set,of=["#E3A33B","#2F8478","#7FA6BD","#D5472F"],af=["#2F8478","#7FA6BD","#D5472F","#E3A33B"],kh={paper:{rough:.82,metal:0,emit:0,line:1.35,slab:"#F2E8D3",cycleB:of,cycleT:af,rows:19,cap:124,xScale:.86,tone:[.07,-.07]},sunset:{rough:.7,metal:0,emit:1.55,line:1.5,ink:"#3A0F66",slab:"#4A1D8C",cycleB:of,cycleT:af,rows:0,cap:112,xScale:1,tone:[.14,.03]},primetime:{rough:.34,metal:.12,emit:.04,line:1.4,slab:"#10256E",cycleB:of,cycleT:af,rows:19,cap:124,xScale:.88,tone:[.04,-.03]}},Hh=new Di,tn=new Je,pi=new P,en=new P,to=new Yt,Ye=new P,J0=new Yt,j0=new P,UR=new P(1,1,1),mS=new P(0,0,0),Ba=new Je;function eo(s,t,{line:e=0,clip:i=!0}={}){let n=kh[s]||kh.paper,r=new Ht({color:"#ffffff",roughness:n.rough,metalness:n.metal,flatShading:s==="sunset"}),o={uInk:{value:new ct(n.ink||t.ink)},uLine:{value:e||n.line},uEmit:{value:n.emit},uGlue:{value:0},uGlueX:{value:0},uGhost:{value:0}};return r.userData.uniforms=o,i&&(r.clippingPlanes=[new oi(new P(1,0,0),1e5),new oi(new P(-1,0,0),1e5)]),r.onBeforeCompile=a=>{Object.assign(a.uniforms,o),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vBrickLocal; varying vec3 vBrickSize; varying float vBrickX;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vBrickLocal = position;
        #ifdef USE_INSTANCING
          vBrickSize = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
          vBrickX = (modelMatrix * instanceMatrix * vec4(position, 1.0)).x;
        #else
          vBrickSize = vec3(1.0); vBrickX = 0.0;
        #endif`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vBrickLocal; varying vec3 vBrickSize; varying float vBrickX; uniform vec3 uInk; uniform float uLine; uniform float uEmit; uniform float uGlue; uniform float uGlueX; uniform float uGhost;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        #ifdef USE_INSTANCING_COLOR
          totalEmissiveRadiance += vColor * uEmit;
        #endif`).replace("#include <opaque_fragment>",`
        {
          vec3 a = abs(vBrickLocal); float m = max(a.x, max(a.y, a.z)); vec3 e = (vec3(0.5) - a) * vBrickSize; float d = 1e3;
          if (a.x < m - 0.002) d = min(d, e.x);
          if (a.y < m - 0.002) d = min(d, e.y);
          if (a.z < m - 0.002) d = min(d, e.z);
          float minDim = min(vBrickSize.x, min(vBrickSize.y, vBrickSize.z));
          float lw = min(uLine * (0.85 + 0.55 * clamp(minDim / 9.0, 0.0, 2.2)), minDim * 0.24); // thicker ink round the big slabs than round the small bricks, never more than a quarter of a piece
          float edge = smoothstep(lw * 0.45, lw, d);
          outgoingLight = mix(uInk, outgoingLight, edge);
          float band = exp(-pow((vBrickX - uGlueX) / 52.0, 2.0));
          outgoingLight += uGlue * vec3(1.0, 0.76, 0.26) * (0.1 + band * 0.75) * edge;
          outgoingLight = mix(outgoingLight, vec3(dot(outgoingLight, vec3(0.3, 0.59, 0.11))) * 0.92, uGhost * 0.5);
        }
        #include <opaque_fragment>`)},r.customProgramCacheKey=()=>`brick-${s}${i?"":"-free"}`,r}var zh=class{constructor(t,e,i){this.theme=t,this.palette=e,this.fx=i,this.group=new lt,this.group.name="title-stack",this.look=kh[t]||kh.paper,this.random=We(31),this.bricks=[],this.letters=[],this.mesh=null,this.ghost=null,this.material=null,this.geometry=null,this.marquee=null,this.bounds={x0:-520,x1:520,y0:0,y1:300},this.tierM=[new Yt,new Yt],this.events=[],this.age=0,this.introDuration=4.4,this.speed=1,this.exploded=!1,this.gone=!1,this.pose=null,this.effectKey="",this.floor=()=>0,this.toCamera=new P(0,.1,1),this.sway=0,this.layout={bottomTop:0,slabBW:0,slabTW:0,topOffsetX:0,topBase:0,capHeight:112,halfTop:0},this.poseB={x:0,y:0,rz:0,sx:1},this.poseT={x:0,y:0,rz:0,sx:1},this.shedClock=0,this.recallClock=0,this.rebuildAt=-1,this.scatterActive=new Set,this.scatterChanged=new Set,this.scatterClock=new Uh(ms.hz),this.scatterOff={dx:0,dy:0},this.scatterGoal={x:0,y:0},this.scatterAxes={right:new P(1,0,0),up:new P(0,1,0)},this.centerOf=(n,r)=>this.letterCenterOf(n,r),this.scatterVisited=new Set,this.letterActivity=0,this.letterNear=[],this.letterPoint=null,this.letterCenter=[0,0,0]}clear(){if(this.mesh&&(this.group.remove(this.mesh),this.mesh.dispose(),this.mesh=null),this.ghost&&(this.group.remove(this.ghost),this.ghost=null),this.geometry&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null),this.ghostMaterial&&(this.ghostMaterial.dispose(),this.ghostMaterial=null),this.marquee){this.group.remove(this.marquee.group);for(let t of this.marquee.geos)t.dispose();for(let t of this.marquee.mats)t.dispose();this.marquee=null}this.bricks.length=0,this.letters.length=0,this.scatterActive.clear(),this.scatterClock.reset()}build({speed:t=1,instant:e=!1}={}){this.clear(),this.speed=t,this.exploded=!1,this.gone=!1,this.age=0,this.effectKey="",this.rebuildAt=-1;let i=this.palette.fontKey,n=this.look,r=n.cap,o=La(i,"STACK",{capHeight:r,rows:n.rows,xScale:n.xScale}),a=La(i,"SABOTAGE",{capHeight:r,rows:n.rows,xScale:n.xScale});if(!o.letters.length||!a.letters.length){this.layout.capHeight=r,this.introDuration=0,this.age=0;return}let l=o.width+96,c=a.width+120,h=this.layout;h.capHeight=r,h.slabBW=l,h.slabTW=c,h.cell=a.rowHeight,h.brickLength=a.brickLength,h.letterCount=a.letters.length,h.bottomTop=mn[0]+r+1,h.topOffsetX=-.04*c,h.halfTop=c/2,h.baseB=mn[0],h.baseT=mn[1];let d=this.random,f=v=>new ct(_i(this.theme,v)),u=this.bricks,g=v=>(v.i=u.length,v.state===void 0&&(v.state=Na),v.t=0,v.oy=0,v.vy=0,v.bounces=0,v.pos=new P,v.vel=new P,v.quat=new Je,v.spin=new P,v.rest=0,v.recallT=0,v.recallAt=-1,v.from=new P,v.sx=0,v.sy=0,v.sp=null,v.tx=0,v.ty=0,u.push(v),v),m=new ct(this.look.slab),p=[0,1].map(v=>g({kind:1,tier:v===0?1:0,letter:-1,lx:0,ly:mn[v]/2,lz:0,w:v===0?l:c,h:mn[v],d:sf[v],color:m.clone(),row:0,edge:!1,delay:0}));p[0].tier=1,p[1].tier=0;for(let v of p)for(let R=0;R<7;R+=1)for(let I=0;I<2;I+=1)g({kind:2,tier:v.tier,letter:-1,parent:v,lx:-v.w/2+(R+.5)*v.w/7,ly:v.ly,lz:-v.d/2+(I+.5)*v.d/2,w:v.w/7,h:v.h,d:v.d/2,color:m.clone().multiplyScalar(.94+d()*.1),row:0,edge:!1,delay:0,state:Ua});let x=this.letters,y=0;this.scatterActive.clear(),this.scatterChanged.clear(),this.scatterClock.reset(),this.scatterVisited.clear(),this.scatterDrawn=!1,this.letterActivity=0;let M=(v,S,C,R,I,L)=>{v.letters.forEach((T,N)=>x.push({ch:T.ch,tier:S,cx:T.cx,rows:T.rows,hop:0,vhop:0,rz:0,vrz:0,rx:0,vrx:0,swell:0,waveDelay:-1,seed:d()*Zt,baseY:C,vis:1,visTarget:1,ox:0,line:S,tz:0,tx:0,push:0,swellTarget:0,breathe:0,ripple:0}));let F=new Map;for(let T of v.bricks){let N=`${T.letter}:${T.row}`,z=F.get(N)||[];z.push(T),F.set(N,z)}for(let T of v.bricks){let N=I+T.letter,z=x[N],O=F.get(`${T.letter}:${T.row}`),Y=O.indexOf(T),G=Y===0||Y===O.length-1,$=f(R[T.letter%R.length]);(n.tone[0]||n.tone[1])&&$.offsetHSL(0,n.tone[0],n.tone[1]),$.multiplyScalar(.94+d()*.12),g({kind:0,tier:S,letter:N,lx:T.x-z.cx,ly:T.y,lz:0,w:T.w,h:T.h,d:fS,color:$,row:T.row,edge:G,delay:L+T.letter*.085+T.row*.031+d()*.06,localX:T.x})}return v.letters.length},_=M(o,1,mn[0],n.cycleB,0,.62),b=Math.max(...u.filter(v=>v.kind===0&&v.tier===1).map(v=>v.delay))+.42;p[0].delay=.1,p[1].delay=b-.5,M(a,0,mn[1],n.cycleT,_,p[1].delay+.62);for(let v of x)v.bricks=[];for(let v of u)v.kind===0&&x[v.letter].bricks.push(v);this.introDuration=Math.max(...u.map(v=>v.delay))+.5;for(let v of u)v.kind!==2&&(v.oy0=560+d()*720,v.kind===1&&(v.oy0=900),v.vy0=-240-d()*260);this.tierPrev=null,this.tierDelta=0,this.geometry=new ae(1,1,1),this.material=eo(this.theme,this.palette),this.mesh=new li(this.geometry,this.material,u.length),this.mesh.name="bricks",this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,u.forEach(v=>this.mesh.setColorAt(v.i,v.color)),this.mesh.instanceColor.needsUpdate=!0,this.group.add(this.mesh),this.ghostMaterial=eo(this.theme,this.palette),this.mesh.boundingSphere=new $i(new P(0,150,0),2400),this.ghost=new li(this.geometry,this.ghostMaterial,u.length),this.ghost.name="bricks-ghost",this.ghost.frustumCulled=!1,this.ghost.visible=!1,this.ghost.raycast=()=>{},this.ghost.instanceMatrix=this.mesh.instanceMatrix,this.ghost.instanceColor=this.mesh.instanceColor,this.ghost.castShadow=!1,this.ghost.receiveShadow=!1,this.group.add(this.ghost);let E=h.bottomTop+mn[1]+r+8;if(this.bounds={x0:-c/2-8,x1:c/2+8,y0:0,y1:E},this.theme==="sunset"&&this.addMarquee(c+80,E+24),e){for(let v of u)v.kind!==2&&(v.state=An,v.oy=0);this.age=this.introDuration+1}this.updateMatrices(0,0,{})}finish(){for(let t of this.bricks)t.kind!==2&&(t.state===Na||t.state===Qr)&&(t.state=An,t.oy=0);this.age=Math.max(this.age,this.introDuration+.01)}addMarquee(t,e){let i=[],n=[],r=new lt;r.position.set(0,e/2-8,-98);let o=new Fe(t,e),a=new oe({color:"#10052A",transparent:!0,opacity:.9,depthWrite:!1,toneMapped:!1,side:le});r.add(new st(o,a)),i.push(o),n.push(a);let l=(g,m,p,x,y)=>{let M=new Fe(m,p),_=new st(M,g);_.position.set(x,y,1),r.add(_),i.push(M)},c=new oe({color:"#FF4FB0",toneMapped:!1,side:le}),h=new oe({color:"#2EE6D6",toneMapped:!1,side:le});n.push(c,h);let d=5;l(c,t,d,0,e/2),l(c,t,d,0,-e/2),l(c,d,e,-t/2,0),l(c,d,e,t/2,0);let f=13,u=2.5;l(h,t-f*2,u,0,e/2-f),l(h,t-f*2,u,0,-e/2+f),l(h,u,e-f*2,-t/2+f,0),l(h,u,e-f*2,t/2-f,0),r.scale.y=.001,this.group.add(r),this.marquee={group:r,geos:i,mats:n,plateMat:a,outer:c,inner:h}}updateMarquee(t,e,i,n){let r=this.marquee;if(!r)return;r.plateMat.opacity=.9*(.22+.78*ke(-.25,.45,Math.cos(e)))*(this.exploded?0:1);let o=this.exploded?0:mt(this.age/.6);r.group.scale.y=Math.max(.001,1-(1-o)**3),r.group.visible=o>.002;let a=i||o>=1||Math.sin(this.age*55)>-.3?1:.35,l=(i?1:.94+.06*Math.sin(t*3.1)*Math.sin(t*1.7))*(1+n*.28);r.outer.color.set("#FF4FB0").multiplyScalar(a*l*1.25),r.inner.color.set("#2EE6D6").multiplyScalar(a*l)}get complete(){return this.age>=this.introDuration}get topCenterY(){return this.layout.bottomTop+mn[1]+this.layout.capHeight*.5}update(t,e,{pointer:i=null,pointerSpeed:n=0,reduced:r=!1,energy:o=0,yaw:a=0,effect:l=null,floor:c=null,toCamera:h=null}={}){if(!this.mesh)return;this.letterPoint=i&&!r?i:null,this.age+=t*(this.age<this.introDuration?this.speed:1),c&&(this.floor=c),h&&this.toCamera.copy(h);let d=this.bricks,f=this.layout,u=null;l&&this.complete&&!this.exploded?(u=Nh(l.id,l.elapsed,l.duration,{reduced:r,dir:l.dir||1}),this.effectKey!==`${l.id}:${l.n}`&&(this.effectKey=`${l.id}:${l.n}`,this.onEffectStart(l))):this.effectKey&&(this.effectKey="",this.onEffectEnd()),this.pose=u;let g=r?0:Math.round(Math.sin(e*.55)*3.5)/1e3,m=r?0:Math.round(Math.sin(e*.41+1)*22)/10,p=this.poseB,x=this.poseT,y=u?u.bottom:null,M=u?u.top:null,_=this.tierNow||(this.tierNow=new Float64Array(8)),b=this.tierPrev||(this.tierPrev=new Float64Array(8)),E=(y?y.rz:0)-g*.4,v=(M?M.x:0)+m,S=(M?M.rz:0)+g,C=[y?y.x:0,y?y.y:0,E,y?y.sx:1,v,M?M.y:0,S,M?M.sx:1],R=0;for(let T=0;T<8;T+=1)R=Math.max(R,Math.abs(C[T]-b[T])),b[T]=C[T];this.tierDelta=R,p.x=y?y.x:0,p.y=y?y.y:0,p.rz=E,p.sx=y?y.sx:1,x.x=v,x.y=M?M.y:0,x.rz=S,x.sx=M?M.sx:1;let I=this.complete?1:ke(.4,1,this.age/this.introDuration);this.age<this.introDuration&&(x.rz*=I,x.x*=I),this.gateX=f.halfTop+14,u&&u.clip&&(x.x+=u.wrap*this.gateX*2);let L=u&&u.clip?this.gateX:1e5;for(let T of[this.material,this.ghostMaterial])T.clippingPlanes[0].constant=L,T.clippingPlanes[1].constant=L;let F=this.ghostMaterial.userData.uniforms;u&&u.clip&&Math.abs(u.wrap)>.001?(this.ghost.visible=!0,this.ghost.position.x=-Math.sign(u.wrap)*this.gateX*2,F.uGhost.value=0):u&&u.ghost>.02?(this.ghost.visible=!0,this.ghost.position.x=u.ghostDx||0,F.uGhost.value=1):(this.ghost.visible=!1,F.uGhost.value=0);for(let T of[this.material,this.ghostMaterial]){let N=T.userData.uniforms;N.uGlue.value=u?u.glue:0,N.uGlueX.value=u&&u.glue>0?Math.sin(e*1.5)*f.halfTop*1.1:0}this.updateMarquee(e,a,r,o),this.updateLetters(t,e,n,r,o,u),this.updateScatter(t,i,r),this.updateBricks(t,e,u,r),this.updateMatrices(t,e,u)}onEffectStart(t){this.shedClock=0}onEffectEnd(){this.rebuild(.1)}updateLetters(t,e,i,n,r,o){let a=this.letters,l=a.length,c=o&&o.letter,h=Bh;this.letterNear=new Float32Array(l);let d=this.centerOf;Y0(a,this.letterPoint,d,{pointerSpeed:i,energy:r,reduced:n,strength:h.strength,near:this.letterNear,t:e});let f=0,u=this.letterMoved=this.letterMoved||new Uint8Array(l);u.fill(0);for(let g=0;g<l;g+=1){let m=a[g],p=c?c(g,l):null,x=p?p.y:0,y=p?p.rz:0,M=m.breathe,_=m.ripple;if((this.letterNear[g]||0)<.001&&Math.abs(m.swellTarget)<.001&&!p&&m.waveDelay<0&&m.visTarget===1&&m.vis===1&&m.vhop===0&&m.vrz===0&&m.vrx===0&&Math.abs(m.rz)<1e-4&&Math.abs(m.rx)<1e-4&&Math.abs(m.hop)<.01&&Math.abs(m.push)*h.strength<.01){let v=m.rz!==0||m.rx!==0||m.hop!==0||m.swell!==0;m.swell=jt(m.swell,0,h.swellDamp,t),m.swell<1e-4&&(m.swell=0),m.vis!==1&&(m.visTarget=1,m.vis=jt(m.vis,m.visTarget,40,t)),m.hop=0,m.vhop=0,m.rz=0,m.vrz=0,m.rx=0,m.vrx=0,m.y=M,m.zr=0,m.xr=0,m.lastY!==void 0&&(m.lastY!==m.y||v)&&(f+=1,u[g]=K0),m.lastY=m.y;for(let S of m.bricks)if(S.sp||S.sx!==0||S.sy!==0){f+=1,u[g]=K0;break}continue}m.waveDelay>=0&&(m.waveDelay-=t,m.waveDelay<0&&(m.vhop=Math.max(m.vhop,260),m.vrz+=(this.random()-.5)*3.6,m.waveDelay=-1));let b=h.spring,E=h.damping;if(m.swell=jt(m.swell,m.swellTarget*Math.min(1,h.strength),h.swellDamp,t),m.vrz+=((m.tz-m.rz)*b-m.vrz*E)*t,m.rz+=m.vrz*t,m.vrx+=((m.tx-m.rx)*b-m.vrx*E)*t,m.rx+=m.vrx*t,Math.abs(m.rz)<1e-6&&Math.abs(m.vrz)<1e-6&&Math.abs(m.tz)<1e-6&&(m.rz=0,m.vrz=0),Math.abs(m.rx)<1e-6&&Math.abs(m.vrx)<1e-6&&Math.abs(m.tx)<1e-6&&(m.rx=0,m.vrx=0),m.vhop!==0||m.hop!==0){let v=m.vhop;m.vhop-=h.hopGravity*t,m.hop+=m.vhop*t,m.hop<0&&(v<-h.hopBounceMin?m.vhop=-v*h.hopBounce:(m.hop=0,m.vhop=0))}m.visTarget=p&&p.vis!==void 0?p.vis:1,m.vis=jt(m.vis,m.visTarget,40,t),m.y=m.hop+M+_+m.push*.4*h.strength+(p?p.y:0),m.lastY=m.y,m.zr=m.rz+y,m.xr=m.rx,f+=1,u[g]=1}this.letterActivity=f}letterCenterOf(t,e=this.letterCenter){e||(e=this.letterCenter);let i=this.letters[t];return i&&(pi.set(i.cx,i.baseY+this.layout.capHeight/2,0).applyMatrix4(this.tierM[i.tier]),e[0]=pi.x,e[1]=pi.y,e[2]=pi.z),e}updateScatter(t,e,i){if(i||this.exploded){(this.scatterActive.size||this.scatterDrawn)&&this.scatterClear(),this.scatterClock.reset();return}let n=!!(this.pose&&this.pose.glue>.4),r=!!e&&this.complete&&!n;if(!r&&!this.scatterActive.size){this.scatterClock.reset();return}for(let o=this.scatterClock.advance(t);o>0;o-=1)this.scatterTick(r?e:null)}scatterClear(){for(let t of this.scatterActive)(t.sx!==0||t.sy!==0)&&this.scatterChanged.add(t),t.sx=0,t.sy=0,t.sp=null;this.scatterActive.clear(),this.scatterVisited.clear(),this.scatterDrawn=!1}scatterTick(t){let e=this.layout,i=ms.radiusBricks*e.brickLength,n=this.scatterActive,r=this.scatterOff,o=this.scatterGoal;for(let l of n)l.tx=0,l.ty=0;let a=this.scatterVisited;a.clear();for(let l=0;l<this.letters.length;l+=1){let c=this.letters[l];if(!(!t||c.vis<.5||!c.bricks||(this.letterNear[l]||0)<q0))for(let h of c.bricks)h.state===An&&(this.restWorld(h,Ye,0),Ih(t,Ye.x,Ye.y,Ye.z,r),!(Math.hypot(r.dx,r.dy)>=i)&&(V0(r.dx,r.dy,i,ms.maxCells,o,h.i),h.tx=o.x,h.ty=o.y,h.sp||(h.sp={x:0,y:0,vx:0,vy:0}),n.add(h),a.add(h)))}for(let l of n){if(l.state!==An){(l.sx!==0||l.sy!==0)&&this.scatterChanged.add(l),l.sx=0,l.sy=0,l.sp=null,n.delete(l);continue}W0(l.sp,l.tx,l.ty);let c=nf(l.sp.x),h=nf(l.sp.y);X0(l.sp,l.tx,l.ty)?((l.sx!==0||l.sy!==0)&&this.scatterChanged.add(l),l.sx=0,l.sy=0,l.sp=null,n.delete(l)):(c!==l.sx||h!==l.sy)&&(l.sx=c,l.sy=h,this.scatterChanged.add(l))}}updateBricks(t,e,i,n){let r=this.bricks,o=this.age,a=this.random,l=t*(o<this.introDuration+.5?this.speed:1),c=0;i&&i.shed>0&&!n&&(this.shedClock+=t*i.shed*18,c=Math.floor(this.shedClock),this.shedClock-=c);for(let h of r)switch(h.state){case Na:if(h.kind===2)break;o>=h.delay&&(h.state=Qr,h.oy=h.oy0,h.vy=h.vy0,h.bounces=0,h.kind===1&&(h.drop=!0));break;case Qr:{h.vy-=$0*l,h.oy+=h.vy*l,h.oy<=0&&(h.vy<-420&&h.bounces<1&&h.kind===0?(h.oy=.01,h.vy=-h.vy*.16,h.bounces+=1,this.landed(h,!1)):(h.oy=0,h.vy=0,h.state=An,this.landed(h,!0)));break}case rf:this.stepLoose(h,t);break;case Oh:h.rest+=t,h.recallAt>=0&&o>=h.recallAt&&(h.state=Z0,h.recallT=0,h.from.copy(h.pos));break;case Z0:{h.recallT+=t/.5;let d=mt(h.recallT),f=d*d*(3-2*d);this.homeWorld(h,Ye,150),h.pos.lerpVectors(h.from,Ye,f),h.pos.y+=Math.sin(d*Math.PI)*90,h.quat.slerp(Ba,.12+.2*d),d>=1&&(h.state=Qr,h.oy=150,h.vy=0,h.bounces=0);break}default:break}if(c>0&&this.shed(c,i),this.exploded&&(this.explodeT+=t,this.explodeT>2.6)){let h=mt((this.explodeT-2.6)/.7);for(let d of r)d.shrink=1-h;h>=1&&(this.gone=!0)}}landed(t,e){if(t.kind===1){this.events.push({type:"thud",tier:t.tier,power:t.tier===0?1:.7});for(let i of this.letters)i.tier===1&&t.tier===0&&(i.vhop=Math.max(i.vhop,190+this.random()*70),i.vrz+=(this.random()-.5)*2.5)}e&&this.fx&&this.random()<.06&&(this.homeWorld(t,Ye,0),this.fx.dust([Ye.x,Ye.y-t.h/2,Ye.z+8],2))}homeWorld(t,e,i=0){if(t.kind===0){let n=this.letters[t.letter];this.letterMatrix(n,to),e.set(t.lx,t.ly+i,t.lz).applyMatrix4(to)}else e.set(t.lx,t.ly+i,t.lz).applyMatrix4(this.tierM[t.tier]);return e}restWorld(t,e,i=0){if(t.kind===0){let n=this.letters[t.letter];pi.set(n.cx,n.baseY,0),j0.set(1,1,1),J0.compose(pi,Ba,j0).premultiply(this.tierM[n.tier]),e.set(t.lx,t.ly+i,t.lz).applyMatrix4(J0)}else e.set(t.lx,t.ly+i,t.lz).applyMatrix4(this.tierM[t.tier]);return e}letterMatrix(t,e){Hh.set(t.xr||0,0,t.zr||0),tn.setFromEuler(Hh),pi.set(t.cx,t.baseY+(t.y||0)+(t.yr||0),0);let i=1+t.swell;return en.set(i,i,i),e.compose(pi,tn,en).premultiply(this.tierM[t.tier])}release(t,e,i){if(this.homeWorld(t,t.pos,0),t.kind===0){let n=this.letters[t.letter];this.letterMatrix(n,to),tn.setFromRotationMatrix(to),t.quat.copy(tn)}else tn.setFromRotationMatrix(this.tierM[t.tier]),t.quat.copy(tn);t.vel.copy(e),t.spin.copy(i),t.state=rf,t.rest=0,t.recallAt=-1,t.oy=0,t.vy=0,t.landedOnce=!1}stepLoose(t,e){t.vel.y-=$0*e,t.pos.addScaledVector(t.vel,e);let i=t.spin.length();i>1e-4&&(tn.setFromAxisAngle(Ye.copy(t.spin).multiplyScalar(1/i),i*e),t.quat.premultiply(tn));let n=Math.max(2,Math.min(t.h,t.d)/2*(t.kind===0,1)),r=this.surfaceAt(t.pos.x,t.pos.z,t.pos.y);t.pos.y-n<=r&&t.vel.y<=0&&(t.pos.y=r+n,t.vel.y<-140?(t.vel.y=-t.vel.y*.26,t.vel.x*=.72,t.vel.z*=.72,t.spin.multiplyScalar(.6),!t.landedOnce&&this.fx&&t.kind!==1&&this.random()<.18&&t.vel.y>70&&this.fx.dust([t.pos.x,t.pos.y,t.pos.z+6],2),t.landedOnce=!0):(t.vel.set(0,0,0),t.spin.set(0,0,0),t.state=Oh,t.rest=0,this.flatten(t))),t.pos.y<-400&&(t.state=Oh,t.vel.set(0,0,0),t.spin.set(0,0,0))}flatten(t){Hh.set(0,this.random()*Zt,0),t.quat.setFromEuler(Hh)}surfaceAt(t,e,i){let n=this.layout,r=this.floor(t,e),o=this.tierM[1].elements,a=this.tierM[0].elements,l=o[13]+mn[0],c=a[13]+mn[1];return Math.abs(t-o[12])<n.slabBW/2&&Math.abs(e)<sf[0]/2&&i>=l-6&&(r=Math.max(r,l)),Math.abs(t-a[12])<n.slabTW/2&&Math.abs(e)<sf[1]/2&&i>=c-6&&(r=Math.max(r,c)),r}knock(t,e=58,{max:i=46,power:n=1,keep:r=!1,hold:o=1.3}={}){let a=[];for(let d of this.bricks){if(d.kind!==0||d.state!==An&&d.state!==Qr)continue;this.homeWorld(d,Ye,0);let f=Ye.distanceTo(t);f<e&&a.push([f,d])}a.sort((d,f)=>d[0]-f[0]);let l=this.random,c=this.toCamera,h=0;for(let[d,f]of a.slice(0,i)){this.homeWorld(f,Ye,0);let u=Ye.clone().sub(t),g=u.length()||1;u.multiplyScalar(1/g);let m=(170+l()*230)*n*(1-.5*d/e),p=u.multiplyScalar(m).addScaledVector(c,(140+l()*260)*n);p.y+=(160+l()*330)*n;let x=new P((l()-.5)*16,(l()-.5)*16,(l()-.5)*16);this.release(f,p,x),r||(f.recallAt=this.age+o+l()*.9+d/e*.5),h+=1}return h&&this.fx&&this.fx.dust([t.x,t.y,t.z+10],Math.min(14,4+h/3)),h}pick(t){if(!this.mesh||this.exploded)return null;let e=t.intersectObject(this.mesh,!1)[0];return e?{point:e.point.clone(),instanceId:e.instanceId,brick:this.bricks[e.instanceId]}:null}poke(t,{power:e=1}={}){let i=this.pick(t);if(!i)return 0;if(this.pose&&this.pose.glue>.4){for(let o of this.letters)o.vhop=Math.max(o.vhop,120),o.vrz+=(this.random()-.5)*3;return 0}let r=this.knock(i.point,62*e,{max:52,power:e});for(let o of this.letters){pi.set(o.cx,o.baseY+50,0).applyMatrix4(this.tierM[o.tier]);let a=pi.distanceTo(i.point);a<220&&(o.vhop=Math.max(o.vhop,260*(1-a/260)),o.vrz+=(this.random()-.5)*4*(1-a/260))}return r}shed(t,e){let i=this.layout,n=this.random,r=e.shedMode,o=e.id==="pisa"?Math.sign(this.poseT.rz||1):0,a=0;for(;t>0&&a<90;){a+=1;let l=this.bricks[Math.floor(n()*this.bricks.length)];if(!l||l.kind!==0||l.state!==An)continue;let c=this.letters[l.letter];if(r==="top"&&(l.tier!==0||l.ly<i.capHeight*.45)||r==="lean"&&(l.tier!==0||l.ly<i.capHeight*.3||o&&Math.sign(l.lx+c.cx-this.layout.topOffsetX)!==o)||r==="edges"&&!l.edge)continue;this.homeWorld(l,Ye,0);let h=new P((n()-.5)*120+(o||n()-.5)*90,20+n()*100,60+n()*120);this.release(l,h,new P((n()-.5)*9,(n()-.5)*9,(n()-.5)*9)),l.recallAt=-1,t-=1,this.fx&&n()<.3&&this.fx.dust([Ye.x,Ye.y,Ye.z+8],2)}}rebuild(t=0){let e=0,i=this.bricks.filter(n=>n.kind===0&&(n.state===rf||n.state===Oh));i.sort((n,r)=>n.row-r.row||n.letter-r.letter);for(let n of i)n.recallAt=this.age+t+.25+e*.0035+this.random()*.25+n.row*.012,e+=1}explode(t=1){if(this.exploded)return;this.exploded=!0,this.explodeT=0;let e=this.random,i=this.toCamera,n=new P(0,150,0),r=new Map(this.bricks.filter(o=>o.kind===1).map(o=>[o,o.state===An]));for(let o of this.bricks){if(o.kind===1){o.state=Ua;continue}if(o.kind===2){if(!r.get(o.parent)){o.state=Ua;continue}o.state=An,o.oy=0}else if(o.state===Na){o.state=Ua;continue}this.homeWorld(o,Ye,0);let a=Ye.clone().sub(n),l=a.length()||1;a.multiplyScalar(1/l);let c=(360+e()*640)*t,h=a.multiplyScalar(c*.9).addScaledVector(i,220+e()*520);h.y=Math.abs(h.y)*.5+220+e()*520*(o.kind===2?.7:1),this.release(o,h,new P((e()-.5)*22,(e()-.5)*22,(e()-.5)*22)),o.recallAt=-1,o.shrink=1}this.fx&&(this.fx.dust([0,20,40],24),this.fx.dust([-200,10,30],12),this.fx.dust([200,10,30],12))}wave(t=0,e=1500){for(let i of this.letters)i.waveDelay=Math.abs(i.cx-t)/e+i.tier*.05}dirtySet(t=!1){if(this.letterMoved===void 0||t)return this.bricks;if(this.letterActivity===0&&this.scatterChanged.size===0)return pS;let e=this.dirty||(this.dirty=new Set);e.clear();for(let i of this.scatterActive)e.add(i);for(let i of this.scatterVisited)e.add(i);for(let i=0;i<this.letters.length;i+=1)if(this.letterMoved[i])for(let n of this.letters[i].bricks)e.add(n);for(let i of this.scatterChanged)e.add(i);return e}updateMatrices(t,e,i){let n=this.layout,r=this.poseB,o=this.poseT;tn.setFromAxisAngle(Ye.set(0,0,1),r.rz),pi.set(r.x,r.y,0),en.set(r.sx,1,1),this.tierM[1].compose(pi,tn,en),tn.setFromAxisAngle(Ye.set(0,0,1),o.rz),pi.set(n.topOffsetX+o.x,n.bottomTop+o.y,0),en.set(o.sx,1,1),to.compose(pi,tn,en),this.tierM[0].multiplyMatrices(this.tierM[1],to);let a=this.letterMats||(this.letterMats=[]);for(;a.length<this.letters.length;)a.push(new Yt);this.letters.forEach((m,p)=>this.letterMatrix(m,a[p]));let l=this.mesh,c=this.scratchM||(this.scratchM=new Yt),h=(this.tierDelta||0)>1e-6,d=this.letterMoved===void 0;if(!h&&!d&&this.letterActivity===0&&this.scatterChanged.size===0){this.composed=0;return}let f=this.dirtySet(h);this.composed=f===this.bricks?f.length:f.size;let u=0,g=this.scatterRanges||(this.scatterRanges=[]);g.length=0;for(let m of f){let p=!0;switch(m.state){case Na:case Ua:p=!1;break;case An:case Qr:{if(m.kind===0){let M=this.letters[m.letter];if(M.vis<.02){p=!1;break}if(pi.set(m.lx,m.ly+m.oy,m.lz),en.set(m.w,m.h,m.d),c.compose(pi,Ba,en).premultiply(a[m.letter]),M.vis<.98&&c.scale(Ye.set(M.vis,M.vis,M.vis)),m.sx!==0||m.sy!==0){let _=this.scatterAxes,b=this.layout.cell,E=c.elements;E[12]+=(_.right.x*m.sx+_.up.x*m.sy)*b,E[13]+=(_.right.y*m.sx+_.up.y*m.sy)*b,E[14]+=(_.right.z*m.sx+_.up.z*m.sy)*b}}else pi.set(m.lx,m.ly+m.oy,m.lz),en.set(m.w,m.h,m.d),c.compose(pi,Ba,en).premultiply(this.tierM[m.tier]);break}default:{let M=m.shrink===void 0?1:Math.max(1e-4,m.shrink);en.set(m.w*M,m.h*M,m.d*M),c.compose(m.pos,m.quat,en)}}p||c.compose(pi.set(0,-9999,0),Ba,mS);let x=m.hex||(m.hex=new Float64Array(16)),y=!0;for(let M=0;M<16;M+=1)if(x[M]!==c.elements[M]){y=!1;break}if(!y){x.set(c.elements),l.setMatrixAt(m.i,c),u+=1;let M=g[g.length-1];M&&M.start+M.count===m.i?M.count+=1:g.push({start:m.i,count:1})}}if(this.scatterChanged.clear(),u){let m=l.instanceMatrix;if(m.clearUpdateRanges){m.clearUpdateRanges();for(let p of g)m.addUpdateRange(p.start*16,p.count*16)}m.needsUpdate=!0,l.updateMatrixWorld()}}dispose(){this.clear()}};var Gh=(s,t=1.7)=>se(s).multiplyScalar(t),Q0=(s,t=1)=>new oe({color:Gh(s),transparent:!0,opacity:t,blending:Oe,depthWrite:!1,side:le,toneMapped:!1}),tg="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",gS=(s,{dash:t=26,speed:e=.7}={})=>new xe({transparent:!0,depthWrite:!1,blending:Oe,side:le,toneMapped:!1,uniforms:{uColor:{value:Gh(s,1.9)},uTime:{value:0},uDash:{value:t},uSpeed:{value:e},uOpacity:{value:1}},vertexShader:tg,fragmentShader:`varying vec2 vUv; uniform vec3 uColor; uniform float uTime, uDash, uSpeed, uOpacity;
    void main(){ float d = fract(vUv.x * uDash - uTime * uSpeed); float a = smoothstep(0.0, 0.18, d) * smoothstep(0.78, 0.5, d); a *= smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.7, vUv.y); gl_FragColor = vec4(uColor, a * uOpacity); }`}),Vh=class{constructor(t,e){this.theme=t,this.palette=e,this.group=new lt,this.group.name="title-props",this.disposables=[];let i=M=>(this.disposables.push(M),M);this.gates=[];let n=M=>i(new xe({transparent:!0,depthWrite:!1,blending:Oe,side:le,toneMapped:!1,uniforms:{uTime:{value:0},uA:{value:Gh(e.teal,1.7)},uB:{value:Gh(e.amber,1.7)},uDir:{value:1},uOpacity:{value:0}},vertexShader:tg,fragmentShader:`varying vec2 vUv; uniform vec3 uA, uB; uniform float uTime, uDir, uOpacity;
        void main(){ float edge = 1.0 - abs(vUv.x - 0.5) * 2.0; float swirl = sin(vUv.y * 38.0 + uDir * uTime * 5.0 + sin(vUv.x * 9.0 + uTime) * 2.0) * 0.5 + 0.5;
          float fade = smoothstep(0.0, 0.18, vUv.y) * smoothstep(1.0, 0.82, vUv.y); float core = smoothstep(0.55, 1.0, edge);
          gl_FragColor = vec4(mix(uA, uB, swirl), (0.2 + swirl * 0.45) * (0.35 + core * 0.65) * fade * uOpacity); }`})),r=i(new Fe(46,1)),o=i(new Ce(1,.08,6,28));this.gateGroup=new lt,this.gateGroup.visible=!1,this.group.add(this.gateGroup);for(let M of[-1,1]){let _=new st(r,n(M));_.userData.side=M,this.gateGroup.add(_),this.gates.push(_)}this.rings=[];let a=i(Q0(e.amber,.8));for(let M=0;M<14;M+=1){let _=new st(o,a);_.rotation.y=Math.PI/2,this.gateGroup.add(_),this.rings.push(_)}this.jawGroup=new lt,this.jawGroup.visible=!1,this.group.add(this.jawGroup);let l=i(new Ht({color:"#E7ECF1",metalness:.85,roughness:.28})),c=i(new Ht({color:e.amber,metalness:.6,roughness:.3})),h=i(new ae(10,1,16)),d=i(new ei(7,34,4)),f=i(new ae(1,8,12)),u=i(new ae(1.6,8,3));this.legs=[-1,1].map(M=>{let _=new lt,b=new st(h,l);b.castShadow=!0,_.add(b);let E=new st(d,l);return E.rotation.z=-M*Math.PI/2,E.position.set(-M*22,0,0),_.add(E),_.userData={leg:b,tip:E,side:M},this.jawGroup.add(_),_}),this.bow=new st(f,c),this.bow.castShadow=!0,this.jawGroup.add(this.bow),this.ticks=[];for(let M=0;M<24;M+=1){let _=new st(u,l);this.jawGroup.add(_),this.ticks.push(_)}this.streakGroup=new lt,this.streakGroup.visible=!1,this.group.add(this.streakGroup);let g=i(new Fe(1,1));this.streaks=[];for(let M=0;M<12;M+=1){let _=new st(g,i(Q0(M%2?e.amber:e.vermilion,.8)));_.userData={y:(M+.5)/12,speed:700+M*137%600,phase:M*.37%1,len:150+M*53%150},this.streakGroup.add(_),this.streaks.push(_)}this.railGroup=new lt,this.railGroup.visible=!1,this.group.add(this.railGroup),this.railCount=48;let m=new Float32Array(this.railCount*6),p=new Float32Array(this.railCount*4),x=[];for(let M=0;M<this.railCount;M+=1){let _=M/(this.railCount-1);if(p.set([_,0,_,1],M*4),M<this.railCount-1){let b=M*2;x.push(b,b+1,b+2,b+1,b+3,b+2)}}let y=i(new ge);y.setAttribute("position",new Be(m,3).setUsage(Li)),y.setAttribute("uv",new Be(p,2)),y.setIndex(x),this.railMat=i(gS(e.teal)),this.rail=new st(y,this.railMat),this.rail.frustumCulled=!1,this.railGroup.add(this.rail),this.railPositions=m}update(t,{time:e=0,layout:i,gateX:n=560,topMid:r=250,reduced:o=!1,floorY:a=0}={}){let l=t?t.id:"",c=l==="portal"&&t.gates>.01;if(this.gateGroup.visible=c,c){let g=Math.sign(t.wrap)||1;this.gates.forEach(m=>{m.scale.y=380,m.position.set(m.userData.side*n,r+20,0);let p=m.material.uniforms;p.uTime.value=e,p.uDir.value=g*m.userData.side,p.uOpacity.value=t.gates}),this.rings.forEach((m,p)=>{let x=p%2?1:-1,y=Math.floor(p/2),M=r-190+((y*58+e*24*g*x)%400+400)%400;m.position.set(x*n,M,0),m.scale.set(5*t.gates,12*t.gates,5*t.gates)})}let h=l==="calipers"&&t.jaws>.01;if(this.jawGroup.visible=h,h){let u=t.jaws,g=i.slabTW/2,m=i.bottomTop+27+i.capHeight+44,p=g+70,x=g+6,y=p+(x-p)*u;this.legs.forEach(M=>{let{leg:_,tip:b,side:E}=M.userData;_.scale.y=m,M.position.set(E*y,m/2,0),b.position.set(-E*22,-m/2+6,0),b.rotation.z=-E*Math.PI/2}),this.bow.scale.x=y*2,this.bow.position.set(0,m+2,0),this.ticks.forEach((M,_)=>{let b=(_+.5)/this.ticks.length;M.position.set((b-.5)*y*2*.96,m-6,7),M.scale.y=_%4===0?1.6:1})}let d=l==="turbo"&&t.streaks>.01;if(this.streakGroup.visible=d,d){let u=i.slabTW+160,g=i.bottomTop+27;this.streaks.forEach(m=>{let p=m.userData,x=Math.sign(Math.sin(e*5.6))||1,y=(e*p.speed/u+p.phase)%1;m.scale.set(p.len*(.6+.4*Math.sin(e*30+p.phase*9)),2.2,1),m.position.set((x>0?y:1-y)*u-u/2,g+p.y*i.capHeight,74),m.material.opacity=.75*t.streaks})}let f=l==="rollercoaster"&&t.rail>.01&&!o;if(this.railGroup.visible=f,f){let u=this.railCount,g=this.railPositions,m=i.slabTW/2+40,p=i.bottomTop+27-12,x=i.letterCount||8,y=[];for(let M=0;M<u;M+=1){let _=M/(u-1),b=(_-.5)*m*2,E=_*x;y.push([b,p+t.rail*(Math.sin(e*3.2-E*.55)*22+6)-4])}for(let M=0;M<u;M+=1){let _=y[Math.max(0,M-1)],b=y[Math.min(u-1,M+1)],E=b[0]-_[0],v=b[1]-_[1],S=Math.hypot(E,v)||1;E/=S,v/=S;let C=-v*2.2,R=E*2.2;g.set([y[M][0]+C,y[M][1]+R,70,y[M][0]-C,y[M][1]-R,70],M*6)}this.rail.geometry.attributes.position.needsUpdate=!0,this.railMat.uniforms.uTime.value=e,this.railMat.uniforms.uOpacity.value=t.rail}}dispose(){for(let t of this.disposables)t.dispose();this.disposables.length=0}};var xS=["#E3A33B","#2F8478","#7FA6BD","#D5472F"],vS=new Je,Wh=new P,io=new P,Xh=new Je,yS=new P,eg=new Di,qh=new Yt,ig=new Yt,_S=2300,Yh=class{constructor(t,e){this.theme=t,this.palette=e,this.group=new lt,this.group.name="brick-text",this.items=[],this.random=We(77),this.faceYaw=0,this.events=[],this.geometry=new ae(1,1,1),this.material=eo(t,e,{line:t==="sunset"?1.1:.9,clip:!1})}show({key:t=null,text:e,position:i=[0,0,80],cap:n=56,colors:r=xS,style:o="slam",life:a=1.8,tilt:l=0,rows:c=9,baseline:h=!1,shatterOld:d=!0,reduced:f=!1}){let u=String(e);if(t){let S=this.items.find(C=>C.key===t&&C.state!=="out"&&C.state!=="dead");if(S&&S.text===u)return S.t=Math.min(S.t,S.style==="slam"?.4:0),S.life=a,S.base=i.slice(),S.state==="out"&&(S.state="hold"),S;S&&this.release(S,d&&!f)}let g=La(this.palette.fontKey,u,{capHeight:n,rows:this.theme==="sunset"?0:c,xScale:this.theme==="sunset"?1:.9}),m=g.bricks,p=m.length;if(!p)return null;let x=new li(this.geometry,this.material,p);x.frustumCulled=!1,x.castShadow=!1,x.receiveShadow=!1,x.renderOrder=8;let y=this.random,M=n*.36,_=new ct,b=[],E=h?0:-n/2;m.forEach((S,C)=>{_.set(_i(this.theme,r[S.letter%r.length])),_.offsetHSL(0,this.theme==="paper"?.05:.1,this.theme==="paper"?-.05:.02),_.multiplyScalar(.94+y()*.12),x.setColorAt(C,_),b.push({x:S.x,y:S.y+E,w:S.w,h:S.h,d:M,letter:S.letter,row:S.row,delay:S.letter*.025+S.row*.012+y()*.05,from:new P((y()-.5)*150,90+y()*160,150+y()*200),pos:new P,vel:new P,quat:new Je,spin:new P,shrink:1})}),x.instanceColor.needsUpdate=!0,this.group.add(x);let v={key:t,text:u,mesh:x,pieces:b,t:0,life:a,style:o,base:i.slice(),tilt:l,state:f?"hold":"in",width:g.width,cap:n,outT:0,seed:y()*Zt,reduced:f,baseline:h,thump:0};return this.items.push(v),this.compose(v,0),v}hide(t,e=!0){for(let i of this.items)i.key===t&&i.state!=="out"&&i.state!=="dead"&&this.release(i,e&&!i.reduced)}clear(){for(let t of this.items)this.dispose(t);this.items.length=0}dispose(t){this.group.remove(t.mesh),t.mesh.dispose()}release(t,e){if(t.state==="out"||t.state==="dead")return;t.state="out",t.outT=0,t.shatter=e;let i=this.random;for(let n of t.pieces)n.pos.set(n.x,n.y,0),e?(n.vel.set(n.x/Math.max(30,t.width*.5)*(140+i()*220)+(i()-.5)*120,80+i()*320,120+i()*360),n.spin.set((i()-.5)*18,(i()-.5)*18,(i()-.5)*18)):(n.vel.set(0,0,0),n.spin.set(0,0,0)),n.quat.identity(),n.shrink=1;e&&this.events.push({type:"shatter",item:t})}itemMatrix(t,e,i){let n=t.reduced?0:Math.sin(e*1.3+t.seed)*1.4,r=t.thump;Wh.set(t.base[0],t.base[1]+n+(t.state==="in",0),t.base[2]),eg.set(0,this.faceYaw+(t.reduced?0:Math.sin(e*.9+t.seed)*.08),t.tilt),Xh.setFromEuler(eg);let o=1-.1*r,a=1+.06*r;return io.set(a,o,1),i.compose(Wh,Xh,io)}compose(t,e){this.itemMatrix(t,e,ig);let i=t.mesh,n=t.pieces;for(let r=0;r<n.length;r+=1){let o=n[r];if(t.state==="out")io.set(o.w*o.shrink,o.h*o.shrink,o.d*o.shrink),qh.compose(o.pos,o.quat,io);else{let a=1,l=1;if(t.state==="in"){let c=mt((t.t-o.delay)/.3);a=wn(c),l=Ee(2.1,1,us(c,1.3)),c<=0&&(l=1e-4)}Wh.set(o.x+o.from.x*(1-a),o.y+o.from.y*(1-a),o.from.z*(1-a)),io.set(o.w*l,o.h*l,o.d*l),qh.compose(Wh,vS,io)}qh.premultiply(ig),i.setMatrixAt(r,qh)}i.instanceMatrix.needsUpdate=!0}update(t,e,{faceYaw:i=this.faceYaw}={}){this.faceYaw=i;for(let n=this.items.length-1;n>=0;n-=1){let r=this.items[n];if(r.t+=t,r.thump=Math.max(0,r.thump-t*5),r.state==="in"){let o=r.t>.8480000000000001;!r.landed&&r.t>.24&&(r.landed=!0,r.thump=1,this.events.push({type:"slam",item:r})),o&&(r.state="hold")}if(r.state==="hold"&&r.style==="slam"&&r.life>0&&r.t>=r.life&&this.release(r,!r.reduced),r.state==="out"){r.outT+=t;for(let o of r.pieces){if(r.shatter){o.vel.y-=_S*t,o.pos.addScaledVector(o.vel,t);let a=o.spin.length();a>1e-4&&(Xh.setFromAxisAngle(yS.copy(o.spin).multiplyScalar(1/a),a*t),o.quat.premultiply(Xh))}o.shrink=r.shatter?1-ke(.8,1.35,r.outT):1-ke(0,.2,r.outT)}r.outT>(r.shatter?1.4:.22)&&(r.state="dead")}if(r.state==="dead"){this.dispose(r),this.items.splice(n,1);continue}this.compose(r,e)}}setTheme(){}destroy(){this.clear(),this.geometry.dispose(),this.material.dispose()}};var lf=32,MS=20;function bS(s){return s&&s.pixel?MS:lf}var SS=Object.freeze(["#E3A33B","#2F8478","#7FA6BD","#D5472F","#7A6AA6","#C96F8A","#F4EDDF"]),Oa={paper:"#3B322A",sunset:"#FFF3E2",primetime:"#FFFFFF"},ES=s=>{let t=parseInt(s.slice(1),16);return[t>>16&255,t>>8&255,t&255]},wS=(s,t,e)=>.2126*s+.7152*t+.0722*e;function TS(s,t,e,i=62){let n=null,r=i*i;for(let o of SS){let[a,l,c]=ES(o),h=(s-a)**2+(t-l)**2+(e-c)**2;h<r&&(r=h,n=o)}return n}function AS(s,{theme:t="paper",alpha:e=90,maxRun:i=3,ink:n=null}={}){let{width:r,height:o,data:a}=s,l=[],c=n||Oa[t]||Oa.paper,h=(d,f)=>{let u=(f*r+d)*4;return[a[u],a[u+1],a[u+2],a[u+3]]};for(let d=0;d<o;d+=1){let f=0;for(;f<r;){let[u,g,m,p]=h(f,d);if(p<e){f+=1;continue}let x=`${u>>4}.${g>>4}.${m>>4}`,y=1,M=u,_=g,b=m;for(;f+y<r&&y<i;){let[I,L,F,T]=h(f+y,d);if(T<e||`${I>>4}.${L>>4}.${F>>4}`!==x)break;M+=I,_+=L,b+=F,y+=1}let E=M/y,v=_/y,S=b/y,C=wS(E,v,S)<78,R;if(C)R=c;else{let I=TS(E,v,S);R=I?_i(t,I):`#${[E,v,S].map(L=>Math.round(L).toString(16).padStart(2,"0")).join("")}`}l.push({x:f+y/2-r/2,y:o/2-(d+.5),len:y,color:R,raised:C}),f+=y}}return l}function Zh(s,t=1.05,e=.66){let i=s*t;return i-e*Math.sin(i)}function RS(s,t=lf,e=Oa.paper){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${t}" height="${t}" style="color:${e}">${s}</svg>`}function CS(s,t){let e=s.getElementById(`sabotage-symbol-${t}`);return e?e.dataset.flat||e.innerHTML:""}function PS(s,t,{size:e=lf,stroke:i=Oa.paper}={}){let n=CS(s,t);return!n||n.includes("<image")?Promise.resolve(null):new Promise(r=>{try{let o=new Image;o.onload=()=>{try{let a=s.createElement("canvas");a.width=a.height=e;let l=a.getContext("2d");l.drawImage(o,0,0,e,e);let c=l.getImageData(0,0,e,e);r({width:e,height:e,data:c.data})}catch{r(null)}},o.onerror=()=>r(null),o.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(RS(n,e,i))}`}catch{r(null)}})}var $h=class{constructor(t,e,i){this.doc=t,this.theme=e,this.palette=i||Or[e],this.rasters=new Map,this.pending=new Set,this.live=new Set,this.grid=bS(this.palette),this.geometry=new ae(1,1,1),this.material=eo(e,this.palette,{line:.3,clip:!1})}prime(t){for(let e of t)this.rasters.has(e)||this.pending.has(e)||(this.pending.add(e),PS(this.doc,e,{size:this.grid,stroke:Oa[this.theme]}).then(i=>{this.pending.delete(e),i&&!this.disposed&&this.rasters.set(e,AS(i,{theme:this.theme}))}))}has(t){return this.rasters.has(t)}build(t){let e=this.rasters.get(t);if(!e||!e.length)return null;let i=54/this.grid,n=2.5*i,r=new li(this.geometry,this.material,e.length),o=new Yt,a=new ct;e.forEach((c,h)=>{let d=c.raised?n*1.3:n;o.compose(new P(c.x*i,c.y*i,0),new Je,new P(c.len*i,i,d)),r.setMatrixAt(h,o),a.set(c.color),r.setColorAt(h,a)}),r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0,r.castShadow=!0,r.frustumCulled=!1;let l=new lt;return l.add(r),l.userData.id=t,l.userData.voxel=!0,l.userData.size=54,l.userData.mesh=r,l.userData.bricks=e,l.userData.dispose=()=>{r.dispose(),this.live.delete(l)},this.live.add(l),l}dispose(){this.disposed=!0;for(let t of[...this.live])t.userData.dispose();this.geometry.dispose(),this.material.dispose(),this.rasters.clear()}};function IS(s){let t=new Map;for(let e of s)e.raised||t.set(e.color,(t.get(e.color)||0)+1);return[...t].sort((e,i)=>i[1]-e[1]||(e[0]<i[0]?-1:1))}function DS(s){let t=IS(s);return t.length>=2?[t[0][0],t[1][0]]:null}function FS(s){let t=s.length,e=new Float32Array(t);if(!t)return e;let i=1/0,n=-1/0,r=0;for(let o of s)i=Math.min(i,o.x),n=Math.max(n,o.y);for(let o=0;o<t;o+=1)e[o]=s[o].x-i+(n-s[o].y),r=Math.max(r,e[o]);if(r>0)for(let o=0;o<t;o+=1)e[o]/=r;return e}var Kh=class{constructor(t,{total:e=.36}={}){if(this.bricks=t,this.total=e,this.pair=DS(t),this.n=t.length,this.swappable=new Uint8Array(this.n),this.pair)for(let i=0;i<this.n;i+=1)this.swappable[i]=!t[i].raised&&(t[i].color===this.pair[0]||t[i].color===this.pair[1])?1:0;this.fraction=FS(t),this.state=new Uint8Array(this.n),this.from=new Uint8Array(this.n),this.goal=0,this.t0=0,this.active=!1}setHover(t,e,{immediate:i=!1}={}){let n=t?1:0;if(n===this.goal||(this.goal=n,!this.pair))return!1;if(i){if(this.state.fill(0),n)for(let r=0;r<this.n;r+=1)this.state[r]=this.swappable[r];return this.active=!1,!0}return this.from.set(this.state),this.t0=e,this.active=!0,!0}update(t){if(!this.active)return!1;let e=t-this.t0,i=!1;for(let n=0;n<this.n;n+=1){if(!this.swappable[n])continue;let r=(this.goal?this.fraction[n]:1-this.fraction[n])*this.total,o=e>=r?this.goal:this.from[n];o!==this.state[n]&&(this.state[n]=o,i=!0)}return e>=this.total&&(this.active=!1),i}colorOf(t){let e=this.bricks[t];return!this.state[t]||!this.pair?e.color:e.color===this.pair[0]?this.pair[1]:this.pair[0]}};var LS=116,NS=new ct;function US(s,t){for(let e=0;e<t.n;e+=1)t.swappable[e]&&s.setColorAt(e,NS.set(t.colorOf(e)));s.instanceColor&&(s.instanceColor.needsUpdate=!0)}function BS(s){let t=(s||[]).slice(0,3).map(i=>Math.max(0,Number(i)||0));for(;t.length<3;)t.push(0);let e=t.reduce((i,n)=>i+n,0);return e>.001?t.map(i=>i/e):[1/3,1/3,1/3]}function OS(s){return .62+1*mt(s,0,1)}function ng(s){let t=String(s||"");return t.includes(":")&&(t=t.split(":").pop()),t.trim().replace(/^the\s+/i,"")}var sg=Object.freeze({paper:[112,35],sunset:[128,40],primetime:[112,35]}),HS=Object.freeze({paper:116,sunset:136,primetime:116}),rg=s=>sg[s]||sg.paper;function kS(s,t,e,i,n=22){let r=e;for(;r>n&&s(r,t)>i;)r-=1;return r}function og(s,t,e,i){let n=document.createElement("canvas");n.width=288,n.height=92;let r=n.getContext("2d"),o=s==="paper",a=s==="sunset",l=a?f=>`${f}px VT323, monospace`:s==="primetime"?(f,u=700)=>`${u} ${f}px "Barlow Condensed", sans-serif`:(f,u=700)=>`${u} ${f}px "DM Sans", sans-serif`;r.fillStyle=o?"rgba(244,237,223,0.94)":a?"#FFF3E2":"rgba(8,12,40,0.92)",a?r.fillRect(4,4,280,84):(r.beginPath(),r.roundRect(4,4,280,84,24),r.fill()),r.strokeStyle=i,r.lineWidth=6,r.stroke(),r.textBaseline="middle",r.textAlign="center";let c=String(t).toUpperCase().slice(0,18);r.fillStyle=o?"#2A2520":a?"#170B33":"#ffffff";let h=kS((f,u)=>(r.font=l(f),r.measureText(u).width),c,a?40:s==="primetime"?34:29,258);r.font=l(h),a&&(r.lineJoin="round",r.lineWidth=2.6,r.strokeStyle=r.fillStyle,r.strokeText(c,144,33,262)),r.fillText(c,144,33,262),r.fillStyle=a?new ct(i).multiplyScalar(.5).getStyle():i,r.font=a?l(42):l(s==="primetime"?32:27,800),a&&(r.lineWidth=2.6,r.strokeStyle=r.fillStyle,r.strokeText(`${e}%`,144,68,120)),r.fillText(`${e}%`,144,68,120);let d=new hi(n);return d.colorSpace=Ie,d.anisotropy=4,{canvas:n,texture:d}}var Jh=class{constructor(t,e,i,{makeIcon:n,nameOf:r}){this.theme=t,this.palette=e,this.colors=i,this.makeIcon=n,this.nameOf=r,this.group=new lt,this.group.name="vote-candidates",this.cards=[],this.open=!1,this.winner="",this.closeT=0,this.discGeo=new _e(30,34,7,32),this.ringGeo=new Ii(36,41,40),this.backGeo=new ti(38,40),this.label=rg(t),this.slot=HS[t]||LS}build(t){this.clear(),t.slice(0,3).forEach((e,i)=>{let n=new lt,r=new lt;n.add(r);let o=this.colors[i],a=new st(this.discGeo,new Ht({color:o,roughness:.5,metalness:.1,emissive:o,emissiveIntensity:this.theme==="paper"?.1:.45}));a.position.y=-34,a.castShadow=!0,r.add(a);let l=new st(this.ringGeo,new oe({color:new ct(o).multiplyScalar(1.5),transparent:!0,opacity:0,side:le,depthWrite:!1,toneMapped:!1}));l.rotation.x=-Math.PI/2,l.position.y=-29.5,r.add(l);let c=this.makeIcon(e);c.scale.setScalar(1.15),r.add(c);let h=null;this.theme!=="paper"&&(h=new st(this.backGeo,new oe({color:new ct(this.palette.ink),transparent:!0,opacity:.9,depthWrite:!1,fog:!1,toneMapped:!1})),h.position.z=-16,r.add(h));let d=og(this.theme,ng(this.nameOf(e)),0,o),f=new Po(new _r({map:d.texture,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1}));f.scale.set(...rg(this.theme),1),f.renderOrder=9,n.add(f),r.scale.setScalar(1e-4),this.group.add(n);let u=c.userData&&c.userData.mesh&&c.userData.bricks?new Kh(c.userData.bricks):null;this.cards.push({id:e,holder:n,body:r,disc:a,ring:l,icon:c,back:h,label:f,canvas:d.canvas,texture:d.texture,color:o,shown:"",scale:0,seed:i*2.1,fly:0,share:1/3,wave:u})}),this.open=!0,this.winner="",this.closeT=0}clear(){for(let t of this.cards)this.group.remove(t.holder),t.icon.userData&&t.icon.userData.dispose&&t.icon.userData.dispose(),t.disc.material.dispose(),t.ring.material.dispose(),t.label.material.dispose(),t.texture.dispose(),t.back&&t.back.material.dispose();this.cards.length=0,this.open=!1}update(t,e,{options:i=null,fractions:n=null,y:r=220,you:o=-1,winner:a="",reduced:l=!1,away:c=null,faceYaw:h=0,hover:d=-1}={}){if(i&&i.length&&!this.open&&!this.closing&&this.build(i),i&&this.open&&i.join()!==this.cards.map(u=>u.id).join()&&(this.clear(),this.build(i)),!i&&this.open&&(this.open=!1,this.closing=!0,this.closeT=0,this.winner=a||this.winner),!this.cards.length){this.closing=!1;return}let f=this.open?BS(n):this.cards.map(u=>u.share);this.closing&&(this.closeT+=t),this.cards.forEach((u,g)=>{u.share=this.open?f[g]:u.share;let m=this.closing&&this.winner&&u.id===this.winner,p=this.open?OS(u.share):m?1.5:0;this.closing&&!m&&(p=0),u.scale=l?p:jt(u.scale,p,this.open?6:9,t);let x=(g-1)*this.slot,y=l?0:Math.sin(e*1.9+u.seed)*5,M=x,_=r+y,b=96;if(m&&c){u.fly=Math.min(1,u.fly+t/.55);let I=us(u.fly,1.1);M=Ee(x,c.x,I),_=Ee(r,c.y,I)+y,b=Ee(96,c.z,I)}u.holder.position.set(M,_,b),u.holder.rotation.y=h,u.body.scale.setScalar(Math.max(1e-4,u.scale)),u.holder.visible=u.scale>.01,u.label.position.set(0,-34*u.scale-30-(this.label[1]-35)*.5,20);let E=Math.min(1,u.scale*1.4);if(u.label.scale.set(this.label[0]*E,this.label[1]*E,1),u.icon.rotation.y=l?.4:Zh(e+u.seed,.7+u.share*1.2),u.icon.rotation.x=.12,u.wave){let I=u.wave.setHover(this.open&&d===g,e,{immediate:l});(u.wave.update(e)||I)&&US(u.icon.userData.mesh,u.wave)}let v=this.open&&u.share===Math.max(...f)&&u.share>.38,S=v?.55+.35*Math.sin(e*6):0;u.ring.material.opacity=jt(u.ring.material.opacity,o===g?.95:S,10,t),u.ring.scale.setScalar(1+(v&&!l?.07*Math.sin(e*6):0));let C=Math.round(u.share*100),R=`${C}`;if(u.shown!==R){u.shown=R;let I=og(this.theme,ng(this.nameOf(u.id)),C,u.color),L=u.texture;u.label.material.map=I.texture,u.label.material.needsUpdate=!0,u.texture=I.texture,u.canvas=I.canvas,L.dispose()}}),this.closing&&this.closeT>.7&&!this.cards.some(u=>u.id===this.winner)&&(this.clear(),this.closing=!1),this.closing&&this.closeT>1.6&&(this.clear(),this.closing=!1)}release(){this.clear(),this.closing=!1}dispose(){this.clear(),this.discGeo.dispose(),this.ringGeo.dispose(),this.backGeo.dispose()}};var Ha=class s extends st{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let i=this,n=e.color!==void 0?new ct(e.color):new ct(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||s.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new oi,d=new P,f=new P,u=new P,g=new Yt,m=new P(0,0,-1),p=new De,x=new P,y=new P,M=new De,_=new Yt,b=new Ke(r,o,{samples:c,type:ii}),E=new xe({name:l.name!==void 0?l.name:"unspecified",uniforms:Ni.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=b.texture,E.uniforms.color.value=n,E.uniforms.textureMatrix.value=_,this.material=E,this.onBeforeRender=function(v,S,C){let R=this.getReflectionCamera(C);if(f.setFromMatrixPosition(i.matrixWorld),u.setFromMatrixPosition(C.matrixWorld),g.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(g),x.subVectors(f,u),x.dot(d)>0===!0&&this.forceUpdate===!1)return;x.reflect(d).negate(),x.add(f),g.extractRotation(C.matrixWorld),m.set(0,0,-1),m.applyMatrix4(g),m.add(u),y.subVectors(f,m),y.reflect(d).negate(),y.add(f),R.position.copy(x),R.up.set(0,1,0),R.up.applyMatrix4(g),R.up.reflect(d),R.lookAt(y),R.far=C.far,R.updateMatrixWorld(),R.projectionMatrix.copy(C.projectionMatrix),R.projectionMatrix.elements[8]*=-1,R.projectionMatrix.elements[12]*=-1,_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(R.projectionMatrix),_.multiply(R.matrixWorldInverse),_.multiply(i.matrixWorld),h.setFromNormalAndCoplanarPoint(d,f),h.applyMatrix4(R.matrixWorldInverse),p.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let L=R.projectionMatrix;R.isOrthographicCamera?(M.x=(Math.sign(p.x)+L.elements[8])/L.elements[0],M.y=(Math.sign(p.y)+L.elements[9])/L.elements[5],M.z=-C.far,M.w=1):(M.x=(Math.sign(p.x)+L.elements[8])/L.elements[0],M.y=(Math.sign(p.y)+L.elements[9])/L.elements[5],M.z=-1,M.w=(1+L.elements[10])/L.elements[14]),p.multiplyScalar(2/p.dot(M)),L.elements[2]=p.x,L.elements[6]=p.y,R.isOrthographicCamera?(L.elements[10]=p.z-a,L.elements[14]=p.w-1):(L.elements[10]=p.z+1-a,L.elements[14]=p.w),i.visible=!1;let F=v.getRenderTarget(),T=v.xr.enabled,N=v.shadowMap.autoUpdate;v.xr.enabled=!1,v.shadowMap.autoUpdate=!1,v.setRenderTarget(b),v.state.buffers.depth.setMask(!0),v.autoClear===!1&&v.clear(),v.render(S,R),v.xr.enabled=T,v.shadowMap.autoUpdate=N,v.setRenderTarget(F);let z=C.viewport;z!==void 0&&v.state.viewport(z),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),i.material.dispose()},this.getReflectionCamera=function(v){let S=this._reflectionCameras.get(v);return S===void 0&&(S=v.clone(),this._reflectionCameras.set(v,S)),S}}};Ha.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var zS={paper:.82,sunset:.86,primetime:.92},GS={name:"FloorMirror",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uStrength:{value:.3},uTexel:{value:new tt(1/512,1/512)},uRadius:{value:250}},vertexShader:`
    uniform mat4 textureMatrix; varying vec4 vUv; varying vec2 vFloor;
    void main() { vUv = textureMatrix * vec4(position, 1.0); vFloor = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform vec3 color; uniform sampler2D tDiffuse; uniform float uStrength; uniform vec2 uTexel; uniform float uRadius; varying vec4 vUv; varying vec2 vFloor;
    void main() {
      vec2 uv = vUv.xy / vUv.w; vec4 c = texture2D(tDiffuse, uv) * 0.36;
      c += texture2D(tDiffuse, uv + vec2(uTexel.x * 2.0, 0.0)) * 0.16 + texture2D(tDiffuse, uv - vec2(uTexel.x * 2.0, 0.0)) * 0.16;
      c += texture2D(tDiffuse, uv + vec2(0.0, uTexel.y * 2.0)) * 0.16 + texture2D(tDiffuse, uv - vec2(0.0, uTexel.y * 2.0)) * 0.16;
      float r = length(vFloor) / uRadius; float fade = 1.0 - 0.55 * smoothstep(0.3, 1.0, r); float edge = 1.0 - smoothstep(0.93, 0.99, r); // strongest at the foot of what stands there, a ghost at the rim
      gl_FragColor = vec4(c.rgb * color * 1.22, clamp(c.a, 0.0, 1.0) * uStrength * fade * edge);
    }`},jh=class{constructor(t,e,{hide:i=[],radius:n=250}={}){this.theme=t,this.hide=i,this.scale=0,this.radius=n,this.size=[0,0];let r=new ti(n-4,96);r.rotateX(-Math.PI/2),this.mirror=new Ha(r,{textureWidth:256,textureHeight:256,clipBias:.02,color:16777215,multisample:0,shader:GS});let o=this.mirror;o.name="floor-mirror",o.position.y=.6,o.renderOrder=2,o.material.transparent=!0,o.material.depthWrite=!1,o.material.polygonOffset=!0,o.material.polygonOffsetFactor=-3,o.material.polygonOffsetUnits=-3,o.material.uniforms.uStrength.value=zS[t]||.3,o.material.uniforms.uRadius.value=n-4;let a=o.onBeforeRender,l=new ct;o.onBeforeRender=(c,h,d)=>{if(!this.scale)return;let f=c.getClearAlpha();c.getClearColor(l),c.setClearColor(0,0);let u=this.hide.filter(g=>g&&g.visible);for(let g of u)g.visible=!1;a.call(o,c,h,d);for(let g of u)g.visible=!0;c.setClearColor(l,f)},o.visible=!1,this.mesh=o}setQuality(t,e,i){if(this.scale=t,this.mesh.visible=t>0,!t)return;let n=Math.max(64,Math.round(e*t)),r=Math.max(64,Math.round(i*t));(n!==this.size[0]||r!==this.size[1])&&(this.size=[n,r],this.mirror.getRenderTarget().setSize(n,r),this.mirror.material.uniforms.uTexel.value.set(1/n,1/r))}dispose(){this.mirror.getRenderTarget().dispose(),this.mirror.geometry.dispose(),this.mirror.material.dispose(),this.mirror.parent&&this.mirror.parent.remove(this.mirror)}};var ag=Object.freeze({"hero>play":{dur:1.7,pull:-.12,rise:.17,lift:30},"hero>arena":{dur:1.7,pull:.06,rise:.15,lift:40},"hero>lobby":{dur:1.6,pull:.1,rise:.12,lift:60},"play>results":{dur:1.4,pull:.14,rise:.05,lift:0},"results>play":{dur:1.25,pull:.08,rise:.04,lift:0},"results>hero":{dur:1.9,pull:.2,rise:.15,lift:110},"play>hero":{dur:1.9,pull:.2,rise:.15,lift:110},"lobby>hero":{dur:1.7,pull:.16,rise:.12,lift:80},default:{dur:1.35,pull:.12,rise:.08,lift:40}}),lg=(s,t)=>ag[`${s}>${t}`]||ag.default;function VS(s,t,e){let i=(t-s)%Zt;return i>Math.PI?i-=Zt:i<-Math.PI&&(i+=Zt),s+i*e}function cg(s,t,e,{pull:i=0,rise:n=0,lift:r=0}={}){let o=mt(e),a=Yn(o),l=Math.sin(Math.PI*o);return{ax:Ee(s.ax,t.ax,a),ay:Ee(s.ay,t.ay,a)+r*l,az:Ee(s.az,t.az,a),sx:Ee(s.sx,t.sx,a),sy:Ee(s.sy,t.sy,a),ppu:Math.exp(Ee(Math.log(s.ppu),Math.log(t.ppu),a))/Math.max(.3,1+i*l),yaw:VS(s.yaw,t.yaw,a),pitch:Ee(s.pitch,t.pitch,a)+n*l,roll:Ee(s.roll,t.roll,a)}}var ka=Object.freeze({jumps:3,intervalMs:85}),hg=Object.freeze({paper:0,sunset:.43,primetime:8.7}),Qh=class{constructor(){this.base=0,this.t0=-1/0,this.running=!1}trigger(t){return this.settle(t),this.running?!1:(this.running=!0,this.t0=t,!0)}settle(t){this.running&&t-this.t0>=ka.jumps*ka.intervalMs/1e3&&(this.running=!1,this.base+=ka.jumps)}jumps(t){return this.settle(t),this.running?this.base+Math.min(ka.jumps,Math.floor((t-this.t0)*1e3/ka.intervalMs+1e-9)+1):this.base}};var gn=1.9;function tu(s){let t=s%2===0?-1:1,e=Math.floor(s/2);return{x:t*(115+e*55),z:55-e*52}}var ug=s=>({paper:76,sunset:44,primetime:58}[s]||76)*gn,WS=s=>s<1/2.75?7.5625*s*s:s<2/2.75?(s-=1.5/2.75,7.5625*s*s+.75):s<2.5/2.75?(s-=2.25/2.75,7.5625*s*s+.9375):(s-=2.625/2.75,7.5625*s*s+.984375),eu=class{constructor(t,e){this.theme=t,this.palette=e,this.group=new lt,this.group.visible=!1,this.items=new Map,this.figure=Jd(t),this.eye=Ta[t]||Ta.paper,this.eyeGeometry=new ye(1,12,9),this.pupilGeometry=new ye(1,10,7),this.ringGeometry=new Ii(29,34,56),this.pulseGeometry=new Ii(30,32.5,56),this.beamGeometry=new _e(25,31,190,28,1,!0),this.eyeMaterial=new Ht({color:"#ffffff",roughness:.2,emissive:"#ffffff",emissiveIntensity:.3,flatShading:t==="sunset"}),this.pupilMaterial=new Ht({color:"#15111c",roughness:.3}),this.disposables=[]}bodyMaterial(t){let e=new ct(t);return this.theme==="sunset"?new Ht({color:e,roughness:.7,flatShading:!0,emissive:e,emissiveIntensity:.28}):this.theme==="primetime"?new Xe({color:e,roughness:.25,metalness:.35,clearcoat:1,emissive:e,emissiveIntensity:.12}):new Xe({color:e,roughness:.55,clearcoat:.6,clearcoatRoughness:.35,emissive:e,emissiveIntensity:.06})}add(t,e,i,n){let r=_i(this.theme,e||"#E3A33B"),o=new lt,a=new st(this.figure,this.bodyMaterial(r));a.scale.setScalar(gn),a.castShadow=!0,o.add(a);let l=[],c=[];for(let M of[-1,1]){let _=new st(this.eyeGeometry,this.eyeMaterial);_.position.set(M*this.eye.x*gn,this.eye.y*gn,this.eye.z*gn),_.scale.setScalar(this.eye.r*gn),o.add(_),l.push(_);let b=new st(this.pupilGeometry,this.pupilMaterial);b.scale.setScalar(this.eye.r*gn*.52),o.add(b),c.push(b)}let h=new ct(r).multiplyScalar(1.7),d=new oe({color:h,transparent:!0,opacity:.7,side:le,toneMapped:!1,depthWrite:!1}),f=new st(this.ringGeometry,d);f.rotation.x=-Math.PI/2,f.position.y=1.2,o.add(f);let u=d.clone(),g=new st(this.pulseGeometry,u);g.rotation.x=-Math.PI/2,g.position.y=1.4,o.add(g);let m=new oe({color:h,transparent:!0,opacity:.12,side:le,blending:Oe,toneMapped:!1,depthWrite:!1}),p=new st(this.beamGeometry,m);p.position.y=95,o.add(p),this.group.add(o);let x=tu(n),y={id:t,color:e,group:o,body:a,eyes:l,pupils:c,ring:f,pulse:g,beam:p,ringMaterial:d,pulseMaterial:u,beamMaterial:m,bodyMaterial:a.material,born:i,leaving:-1,ready:!1,x:x.x,z:x.z,seed:(this.items.size+1)*1.93,px:0,py:0,vx:0,vy:0,glowLevel:0};return this.items.set(t,y),y}remove(t){this.group.remove(t.group),t.bodyMaterial.dispose(),t.ringMaterial.dispose(),t.pulseMaterial.dispose(),t.beamMaterial.dispose(),this.items.delete(t.id)}sync(t,e,i,n={x:0,y:0},r=!1,o=0){let a=new Set;t.slice(0,6).forEach((c,h)=>{let d=String(c.id||c.playerId||`${h}:${c.name}`);a.add(d);let f=this.items.get(d)||this.add(d,c.color,i,h);f.leaving=-1,f.ready=!!c.ready,f.index=h});for(let c of[...this.items.values()])if(!a.has(c.id)&&(c.leaving<0&&(c.leaving=i),i-c.leaving>.45)){this.remove(c);continue}let l=Math.min(e,.033);for(let c of this.items.values()){let h=tu(c.index||0);c.x=r?h.x:jt(c.x,h.x,6,e),c.z=r?h.z:jt(c.z,h.z,6,e);let d=i-c.born,f=r?1:mt(d/.95),u=c.leaving<0?0:mt((i-c.leaving)/.45),g=(1-WS(f))*260,m=(.35+.65*wn(mt(f*1.6)))*(1-u*u);c.glowLevel=jt(c.glowLevel,c.ready?1:0,5,e);let p=r?0:c.ready?Math.max(0,Math.sin(i*5.5+c.seed))*9:0,x=r?0:Math.sin(i*2+c.seed)*2.2;c.group.position.set(c.x,g+p+x*.5,c.z),c.group.scale.setScalar(Math.max(.001,m)),c.group.rotation.y=(r?0:Math.sin(i*1.3+c.seed)*.12+mt(c.x/900,-.3,.3)*-1)+o;let y=1+(r?0:.07*Math.sin(i*(3+c.glowLevel*2.5)+c.seed));c.ring.scale.setScalar(y),c.ringMaterial.opacity=(.5+.2*c.glowLevel+(r?0:.15*Math.sin(i*3+c.seed)))*(1-u);let M=r?.4:(i*(.55+.35*c.glowLevel)+c.seed)%1;c.pulse.scale.setScalar(1+M*1.15),c.pulseMaterial.opacity=(1-M)*(.35+.35*c.glowLevel)*(1-u),c.beamMaterial.opacity=(.07+.11*c.glowLevel+(r?0:.02*Math.sin(i*4+c.seed)))*(1-u),c.beam.scale.y=.6+.4*(c.ready?1:.55);let _=mt(n.x*1.3,-1,1),b=mt(n.y*1.1-.15,-1,1);c.vx+=((_-c.px)*70-c.vx*6)*l,c.vy+=((b-c.py)*70-c.vy*6)*l,c.px+=c.vx*l,c.py+=c.vy*l;let E=mt(c.px,-1.2,1.2)*.5,v=mt(c.py,-1.2,1.2)*.5,S=Math.sqrt(Math.max(.12,1-E*E-v*v))*.78,C=r?1:(i+c.seed*2.1)%3.7<.12?.12:1;[-1,1].forEach((R,I)=>{let L=this.eye.r*gn;c.eyes[I].scale.set(L,L*C,L),c.pupils[I].position.set(R*this.eye.x*gn+E*L,this.eye.y*gn+v*L*C,this.eye.z*gn+S*L),c.pupils[I].scale.set(L*.52,L*.52*C,L*.52)})}}dispose(){for(let t of[...this.items.values()])this.remove(t);for(let t of[this.figure,this.eyeGeometry,this.pupilGeometry,this.ringGeometry,this.pulseGeometry,this.beamGeometry])t.dispose();this.eyeMaterial.dispose(),this.pupilMaterial.dispose()}};var dg=["#E5322D","#2EC4B6","#3B6BFF","#B983FF","#FF8FAB"];function fg(s){let t=s==="sunset",e=t?10:36,i=new lt,n=[],r=l=>(n.push(l),l),o=r(s==="sunset"?new Ht({color:"#FFC53D",metalness:.5,roughness:.4,flatShading:!0,emissive:"#FF9A1F",emissiveIntensity:.55}):new Xe({color:"#FFC83D",metalness:1,roughness:.24,clearcoat:.6,emissive:"#8A5A00",emissiveIntensity:.4,envMapIntensity:1.6,side:le}));o.side=le;let a=(l,c,h,d,f)=>{let u=new st(r(l),c);return u.position.set(h,d,f),u.castShadow=!1,i.add(u),u};a(new _e(25,21.5,17,e,1,!0),o,0,0,0);for(let l of[-8.5,8.5]){let c=a(new Ce(l>0?25:21.5,2.1,8,e),o,0,l,0);c.rotation.x=Math.PI/2}for(let l=0;l<5;l+=1){let c=l/5*Math.PI*2,h=Math.sin(c)*24,d=Math.cos(c)*24;a(new ei(7.4,28,t?4:16),o,h,8.5+14,d),a(new ye(4.4,t?6:14,t?4:10),o,h,8.5+29.5,d);let f=r(new Ht({color:dg[l],roughness:.15,metalness:.2,emissive:dg[l],emissiveIntensity:.9,flatShading:t}));a(new ye(3.6,t?5:12,t?4:9),f,Math.sin(c+.63)*25.3,0,Math.cos(c+.63)*25.3)}return i.userData.dispose=()=>{for(let l of n)l.dispose()},i.userData.height=8.5+34,i}function pg(s,t,e=!1){let i=s<=0?0:s>=.8?1:(()=>{let n=s/.8;return 1+2.7*Math.pow(n-1,3)+1.7*Math.pow(n-1,2)})();return{scale:Math.max(0,i),spin:e?.5:t*1.35,bob:e?0:Math.sin(t*2.2)*4,tilt:e?.1:Math.sin(t*1.6)*.07+.1}}var XS=7.5,qS=.9;function mg(s){let t=[];if(s&&s.mode==="teamwork")t.push({key:"team",name:"The crew",color:"#E3A33B",blocks:s.blocks||[],fallen:s.fallen||[],height:Number(s.height)||0,winner:!0,team:!0,score:Number(s.score)||0});else if(s){let i=new Set(s.winnerIds||[]);(s.players||[]).forEach((n,r)=>t.push({key:String(n.id!=null?n.id:r),name:String(n.name||"Player"),color:n.color,blocks:n.blocks||[],fallen:n.fallen||[],height:Number(n.height)||0,winner:i.has(n.id),team:!1,score:0}))}let e=YS(t.length);return t.forEach((i,n)=>{i.slot=e[n]}),t}function YS(s){let t=Array.from({length:s},(i,n)=>n===0?0:(n%2?-1:1)*Math.ceil(n/2)),e=s?(Math.min(...t)+Math.max(...t))/2:0;return t.map(i=>i-e)}function gg(s,t){let e=s<=1?560:s===2?640:760,i=e/Math.max(1,s),n=Math.max(0,t-1),r=mt(Math.min(i/400,400/((n+2)*22)),.07,1);return{worldW:e,colW:i,scale:r,maxHeight:n}}function xg(s,t,{reduced:e=!1,rate:i=XS,delay:n=qS}={}){return t<=0?0:e?t:mt(Math.floor((s-n)*i)+1,1,t)}function vg(s,t,e){let i=0;for(;i<s.length;){let n=s[i];if(t>=e||Number.isInteger(n.level)&&n.level<=t-1)i+=1;else break}return i}function yg(s,t=e=>String(e).toUpperCase()){if(!s.length)return"";if(s[0].team)return s[0].score>0?`TEAM SCORE ${s[0].score}`:"THE FLOOR WINS";let e=s.filter(i=>i.winner);return e.length===1?`${t(e[0].name.slice(0,12))||"CHAMPION"} WINS`:"A TIE AT THE TOP"}var no=360,_g=2.2,cf=no/2+118,Mg=-(no/2)-116,hf=[.82,.74,.6],$S=.5,ZS=1.8,KS=3.6,JS=1.6,jS='button, a, select, input, textarea, label, dialog, summary, [role="button"]:not(canvas):not(#game-canvas)',QS=14,bg={paper:{light:"#FFD9A0",power:52e3,sparkles:["#E3A33B","#2F8478","#D5472F","#FFF1D0","#C96F8A"]},sunset:{light:"#FF6BE0",power:76e3,sparkles:["#FF4FD8","#2EE6D6","#FFC53D","#B983FF"]},primetime:{light:"#CFE0FF",power:64e3,sparkles:["#FFC83D","#FFFFFF","#35D0E8","#FF7FA8"]}},za=new P,tE=(s,t)=>!!(s&&s.closest&&s.closest(t)),uf=new WeakMap,eE=0,iE=s=>(uf.has(s)||uf.set(s,++eE),uf.get(s)),iu=class{constructor({canvas:t,host:e,tier:i=null,scale:n=1}){this.host=e,this.canvas=t,this.time=0,this.last=0,this.mode="",this.modeTime=0;let r=e.view();this.sabotages=r.Core.SABOTAGE_BY_ID,this.theme=pn(r.theme),this.engine=new oh({canvas:t,theme:this.theme,reducedMotion:r.reduced,forcedTier:i}),n!==1&&(this.engine.scale=n,this.engine.forcedTier=!0),this.scene=this.engine.scene,this.camera=this.engine.camera,this.fx={sparks:new Pa(1800),glints:new Pa(260),confetti:new Mh(420),pulses:new bh(12),dust:(o,a=6)=>this.fx.sparks.burst({pos:o,count:a,speed:70,spread:1,color:hf,size:16,life:.9,gravity:10,up:.5,drag:1.5,alpha:.34,growth:16})},this.scene.add(this.fx.sparks.points,this.fx.glints.points,this.fx.confetti.mesh,this.fx.pulses.group),this.interaction=new ph({onTap:o=>this.handleClick(o),onRushIntro:()=>this.rushIntro(),onToy:()=>this.triggerSabotage()}),this.pace=new ah,this.inputSeen=0,this.settled=!1,this.raycaster=new ta,this.plane=new oi(new P(0,0,1),40),this.rig={yaw:0,pitch:.1,zoom:1,roll:0,kick:new rh(0,220,14),shakeAmp:0,shakeT:0,focusY:220,intro:0},this.timeScale=1,this.slowT=0,this.flash=0,this.desatPulse=0,this.caPulse=0,this.towers={},this.arena=[],this.lastEffectKey="",this.badge=null,this.labels=[],this.sinking=new Map,this.flight=null,this.camSpec=null,this.plinthGoal=null,this.lastDt=.016,this.lobbyKey="",this.lobbyArrivalAt=0,this.heroSeen=!1,this.holdMenu=!1,this.heroHover=-1,this.heroEffectN=0,this.caption=null,this.captionKey="",this.hover=new Ph,this.gridTrail=null,this.voteHover=-1,this.patternTick=new Qh,this.facing=0,this.pointerFrame=null,this.lastRipple=0,this.cameraRay=new P,this.groundPlane=new oi(new P(0,1,0),60),this.cursorLight=new Rs("#FFD9A0",0,900,1.8),this.cursorLight.name="cursor-light",this.scene.add(this.cursorLight),this.pendingTheme=null,this.disposed=!1,this.buildTheme(this.theme),Ws(this.theme)||Zr(this.theme).then(()=>{!this.disposed&&!this.pendingTheme&&Ws(this.theme)&&pn(this.host.view().theme)===this.theme&&this.buildTheme(this.theme,!0)}).catch(o=>console.warn("3D typeface retry failed.",o)),this.engine.on("tier",o=>this.applyTier(o)),this.engine.on("restored",()=>this.buildTheme(this.theme,!0)),this.interaction.activate(),this.applyTier(this.engine.tier),r.screen==="title"&&!r.reduced&&(this.holdMenu=!0,document.documentElement.dataset.intro="hold")}get pointer(){return this.interaction.pointer}applyTier(t){this.fx.sparks.density=t.particles,this.fx.glints.density=t.particles,this.fx.confetti.density=t.particles,this.mirror&&this.mirror.setQuality(t.reflect,this.engine.width,this.engine.height),this.world&&this.world.setCrowdDensity(t.crowd),this.world&&this.world.lights.key.shadow.mapSize.width!==t.shadow&&(this.world.lights.key.shadow.mapSize.set(t.shadow,t.shadow),this.world.lights.key.shadow.map&&(this.world.lights.key.shadow.map.dispose(),this.world.lights.key.shadow.map=null))}requestTheme(t){if(!(this.disposed||t===this.theme||t===this.pendingTheme)){if(this.pendingTheme=t,Ws(t)){this.commitTheme(t);return}Zr(t).then(()=>this.commitTheme(t)).catch(e=>{console.warn("3D theme switch failed.",e),this.pendingTheme===t&&(this.pendingTheme=null)})}}commitTheme(t){this.disposed||this.pendingTheme!==t||(this.pendingTheme=null,this.buildTheme(t))}buildTheme(t,e=!1){this.world&&(this.scene.remove(this.world.root),this.world.dispose()),this.theme=t,this.engine.setTheme(t),this.palette=this.engine.palette;let i=bg[t]||bg.paper;this.cursorLight.color.set(i.light),this.cursorLightPower=i.power,this.sparkleColors=i.sparkles.map(a=>{let l=new ct(a);return[l.r,l.g,l.b]});let n=this.fx.glints.material,r=t==="paper"?as:Oe;n.blending!==r&&(n.blending=r,n.needsUpdate=!0),this.glintBoost=t==="paper"?1:1.7,this.kit&&this.kit.dispose(),this.kit=new Wr(t),this.world=y0(t,this.engine,{crowdDensity:this.engine.tier.crowd}),this.mirror&&(this.mirror.dispose(),this.mirror=null),this.mirror=new jh(t,this.palette,{hide:[this.world.sky.mesh,this.world.crowd.group,this.world.ground,this.world.motes,this.world.decor.group]}),this.world.plinth.add(this.mirror.mesh),this.scene.add(this.world.root),this.scene.fog=this.world.fog,this.scene.environment=this.world.envTexture,this.scene.environmentIntensity=t==="paper"?.7:.85,this.scene.background=null,this.popups&&(this.scene.remove(this.popups.group),this.popups.clear()),this.popups=new Rh(t,this.palette),this.scene.add(this.popups.group),this.ruler&&(this.scene.remove(this.ruler.group),this.ruler.dispose()),this.ruler=new Ch(t,this.palette),this.scene.add(this.ruler.group),this.bricks&&(this.scene.remove(this.bricks.group),this.bricks.destroy()),this.bricks=new Yh(t,this.palette),this.scene.add(this.bricks.group),this.heightShown=-1,this.voxel&&this.voxel.dispose(),this.voxel=new $h(document,t,this.palette),this.voxel.prime([...Da,"empty"]),this.candidates&&(this.scene.remove(this.candidates.group),this.candidates.dispose()),this.candidates=new Jh(t,this.palette,ds[t]||ds.paper,{makeIcon:a=>this.makeEmblem(a),nameOf:a=>this.sabotageName(a)}),this.scene.add(this.candidates.group),this.totems&&(this.scene.remove(this.totems.group),this.totems.dispose()),this.totems=new eu(t,this.palette),this.scene.add(this.totems.group),this.crown&&(this.scene.remove(this.crown),this.crown.userData.dispose()),this.crown=fg(t),this.crown.visible=!1,this.scene.add(this.crown),this.lastCrownSpark=0,this.titleProps&&(this.scene.remove(this.titleProps.group),this.titleProps.dispose()),this.titleProps=new Vh(t,this.palette),this.scene.add(this.titleProps.group),this.title&&(this.scene.remove(this.title.group),this.title.dispose()),this.title=new zh(t,this.palette,this.fx),this.scene.add(this.title.group),this.arsenal&&(this.scene.remove(this.arsenal.group),this.arsenal.dispose());let o=this.host.view();this.arsenal=new Dh(t,this.palette,o.Core.SABOTAGE_CATALOGUE),this.scene.add(this.arsenal.group);for(let a of Object.values(this.towers))a.setKit(this.kit);for(let a of this.arena)a.setKit(this.kit);this.removeBadge(),this.labels.forEach(a=>{this.scene.remove(a.mesh),a.mesh.material.map.dispose(),a.mesh.material.dispose(),a.mesh.geometry.dispose()}),this.labels.length=0,this.applyTier(this.engine.tier),this.mode=""}getTower(t,e){if(!this.towers[t]){let i=new $r(this.kit,this.fx,e);this.scene.add(i.root),this.towers[t]=i,this.wireTower(i,t)}return this.towers[t]}wireTower(t,e){t.on("land",({position:i,width:n,level:r})=>{let o=[i.x,i.y+2,i.z];this.fx.sparks.burst({pos:[o[0]-n/2,o[1],o[2]],count:4,speed:55,spread:1,color:hf,size:10,life:.7,gravity:8,up:.2,drag:2,alpha:.4,growth:12,direction:[-1.2,.1,.4]}),this.fx.sparks.burst({pos:[o[0]+n/2,o[1],o[2]],count:4,speed:55,spread:1,color:hf,size:10,life:.7,gravity:8,up:.2,drag:2,alpha:.4,growth:12,direction:[1.2,.1,.4]}),e!=="arena"&&(this.rig.kick.velocity-=70)}),t.on("perfect",({position:i,width:n,level:r})=>{let o=this.palette.amber,a=new ct(o);this.fx.pulses.pulse({pos:[i.x,i.y+1,i.z-20],color:o,radius:Math.max(120,n*.9),life:.8,from:.15,strength:1.5}),this.fx.sparks.burst({pos:[i.x,i.y+6,i.z],count:26,speed:190,spread:1,color:[a.r*1.6,a.g*1.6,a.b*1.6],size:6.5,life:.95,gravity:-220,up:.7,drag:1.1}),this.world.crowd.cheer(.9),this.waveDir=-(this.waveDir||1),this.world.crowd.wave(this.waveDir,{gap:this.mode==="hero"?9:3.2}),e!=="arena"&&(this.reduced||(this.flash=Math.max(this.flash,.09)),this.popups.show({text:"PERFECT!",position:[mt(i.x,-90,90),i.y+52,96],size:30,depth:9,color:o,glow:.9,style:"slam",life:1.15,tilt:(Math.random()-.5)*.18}),this.reduced||this.fx.confetti.burst({pos:[i.x,i.y+8,i.z],count:22,speed:230,colors:this.confettiColors(),size:6.5,life:2.4,cone:.9}))}),t.on("impact",({position:i,width:n,speed:r})=>{r>90&&(this.fx.dust([i.x,i.y+4,i.z],5),r>280&&(this.rig.kick.velocity-=20))}),t.on("collapse",({top:i})=>{if(e==="arena"){this.world.crowd.cheer(.5);return}this.slowT=.62,this.timeScale=.32,this.rig.shakeAmp=this.reduced?0:16,this.rig.shakeT=0,this.reduced||(this.flash=Math.max(this.flash,.26),this.caPulse=1,this.desatPulse=1);let n=i||new P(0,200,0),r=new ct(this.palette.vermilion);this.fx.sparks.burst({pos:[n.x,n.y,40],count:60,speed:260,spread:1,color:[r.r*1.4,r.g*1.4,r.b*1.4],size:7,life:1.1,gravity:-300,up:.5,drag:1.2}),this.fx.dust([n.x,n.y,40],22),this.fx.dust([0,6,50],16),this.fx.pulses.pulse({pos:[0,2,0],color:this.palette.vermilion,radius:330,life:1,from:.3,strength:1.2}),e==="play"&&this.popups.show({text:"TIMBER!",position:[0,n.y+40,100],size:40,depth:12,color:this.palette.vermilion,glow:.9,style:"slam",life:1.5,tilt:-.08}),this.world.crowd.cheer(1.6)})}watch(t,e,i=0,n=1,r=0){let o=Math.cos(r),a=Math.sin(r);this.world.crowd.setGaze(o*t-a*i,e,a*t+o*i+90,n)}confettiColors(){return this.theme==="paper"?["#E3A33B","#2F8478","#7FA6BD","#D5472F","#C96F8A"]:this.theme==="sunset"?["#FFC53D","#2EC4B6","#9B5DE5","#FF5964","#FF8FAB"]:["#FFC83D","#35D0E8","#F2F5FF","#E5322D","#FF7FA8"]}rushIntro(){this.holdMenu&&this.title&&this.title.mesh&&!this.title.complete&&(this.title.speed=Math.max(this.title.speed,3.4))}pickRing(){let t=this.raycaster.intersectObjects(this.arsenal.proxies,!1),e=-1,i=1/0,n=this.ringCentre||(this.ringCentre=new P),r=this.ringScale||(this.ringScale=new P);for(let o of t){let a=o.object;a.getWorldPosition(n);let l=46*a.getWorldScale(r).x,c=this.raycaster.ray.distanceSqToPoint(n)/(l*l);c<=.62*.62&&c<i&&(i=c,e=a.userData.index)}return e>=0?e:t.length?t[0].object.userData.index:-1}handleClick(t){if(this.mode!=="hero"||!this.arsenal||tE(t.target,jS))return;this.interaction.samplePointer(t),this.raycaster.setFromCamera(this.pointer.ndc,this.camera);let e=this.pickRing();if(e>=0){this.directorForce(this.arsenal.items[e].id),this.reduced||this.title.wave(this.arsenal.items[e].holder.position.x);return}this.title.complete&&this.title.poke(this.raycaster)>0&&(this.world.crowd.cheer(.5),this.reduced||this.title.wave(this.pointerFrame?this.pointerFrame.point.x:0,1900))}pointerOnScreenPlane(t,e=this.pointer.ndc,i=0){let n=this.camera,r=n.getWorldDirection(this.tmpForward||(this.tmpForward=new P)),o=this.screenPlane||(this.screenPlane=new oi),a=this.tmpThrough||(this.tmpThrough=new P);o.normal.copy(r).negate(),o.constant=-o.normal.dot(a.copy(t).addScaledVector(r,-i)),this.raycaster.setFromCamera(e,n);let l=this.pointerFrame||(this.pointerFrame={point:new P,right:new P,up:new P});return this.raycaster.ray.intersectPlane(o,l.point)?(l.right.setFromMatrixColumn(n.matrixWorld,0),l.up.setFromMatrixColumn(n.matrixWorld,1),l):null}directorForce(t){this.director&&this.title.complete&&this.director.force(t)}triggerSabotage(){let t=this.director;if(this.mode!=="hero"||!t)return"";let e=t.effect?t.effect.id:"",i=Lh.filter(r=>r!==e&&r!==t.forced&&(!this.reduced||t.pool().includes(r)));if(!i.length)return"";let n=i[Math.floor(Math.random()*i.length)];return this.directorForce(n),this.interaction.wake(),n}pickMode(t){let e=t.game;switch(t.screen){case"title":return"hero";case"room":case"lobby":return"lobby";case"results":return t.results?"results":"celebrate";case"game":return t.arena?"arena":"play";default:return"hero"}}advance(t,e=1/30){let i=Math.max(1,Math.ceil(t/e)),n=this.fakeTs||this.last||0;for(let r=0;r<i;r+=1)n+=e*1e3,this.frame(n,{render:!1});this.fakeTs=n}wake(t=performance.now()){this.pace.wake(t)}frame(t,{render:e=!0}={}){let i=this.last,n=i?t-i:1/0,r=mt((t-(i||t))/1e3,0,.05);if(this.last=t,this.lastDt=r,this.engine.contextLost)return;e&&n>this.pace.gapMs&&this.pace.wake(t),this.time+=r;let o=this.host.view();this.view=o,this.reduced=!!o.reduced,this.engine.reducedMotion=this.reduced,this.interaction.setContext({reduced:this.reduced});let a=pn(o.theme);a!==this.theme?this.requestTheme(a):this.pendingTheme&&(this.pendingTheme=null);let l=this.pickMode(o);l!==this.mode&&(this.enterMode(l,o),e&&this.pace.wake(t)),this.modeTime+=r,this.flight&&(this.flight.t+=r,this.flight.t>=this.flight.dur&&(this.flight=null,delete document.documentElement.dataset.flight)),this.slowT>0?(this.slowT-=r,this.slowT<=0&&(this.timeScale=1)):this.timeScale=jt(this.timeScale,1,6,r);for(let c of this.activeTowers())c.timeScale=this.timeScale;this.post={spots:[]},this.engine.resize(),this.watch(0,this.rig.focusY||220,0,.85),this.facing=0,this["update_"+this.mode](r,o),this.popups.faceYaw=this.facing,this.ruler.setFacing(this.facing),this.bricks.update(r,this.time,{faceYaw:this.facing}),this.bricks.events.length=0,this.updateLeaving(r),this.updateCommon(r),e&&(this.interaction.lastActivity>this.inputSeen&&(this.inputSeen=this.interaction.lastActivity,this.pace.wake(this.inputSeen)),this.interaction.moving&&this.pace.wake(t),this.settled=this.sceneSettled(),this.pace.shouldDraw({mode:this.mode,settled:this.settled,now:t})&&(this.engine.render(r,this.post),this.engine.govern(r*1e3,t))),this.interaction.endFrame()}sceneSettled(){if(this.flight||Math.abs(this.engine.fade.value-this.engine.fade.target)>.02)return!1;switch(this.mode){case"hero":{let t=this.title;return!!t&&t.age>=t.introDuration+$S}case"results":return(this.resultsT||0)>=(this.reduced?.5:ZS);case"celebrate":return!!this.podiumFinished&&(!this.podiumFinale||this.podiumClock-this.podiumFinaleAt>=KS);case"lobby":return this.modeTime-(this.lobbyArrivalAt||0)>=JS;default:return!1}}activeTowers(){return this.mode==="arena"||this.mode==="celebrate"?this.arena:Object.values(this.towers)}enterMode(t,e){let i=this.mode;this.mode=t,this.modeTime=0;let n=!!i&&!this.reduced&&!!this.camSpec;this.engine.fade.value=n?this.engine.fade.value:Math.max(this.engine.fade.value,i?.8:1),this.engine.fade.target=0,n?this.startFlight(i,t):(this.flight=null,delete document.documentElement.dataset.flight);let r=t==="hero",o=t==="play"||t==="results";i==="hero"&&!r&&(n&&this.title.mesh&&!this.title.gone?this.title.explode(1):(this.title.group.visible=!1,this.arsenal.group.visible=!1)),this.title.group.visible=r||i==="hero"&&n&&this.title.exploded&&!this.title.gone,this.arsenal.group.visible=r||i==="hero"&&n&&this.title.exploded,this.titleProps.group.visible=r,r&&(this.title.titleBuilt=!1),this.leave(this.towers.play,o,n),this.leave(this.towers.lobby,t==="lobby",n),this.totems.group.visible=t==="lobby",this.crown.visible=!1;for(let a of this.arena)a.root.visible=t==="arena"||t==="celebrate";for(let a of this.labels)a.mesh.visible=!1;this.ruler.group.visible=o,this.plinthGoal=t==="celebrate"?null:[t==="arena"?2.3:r?2.2:o?1.4:1,t==="arena"?.62:r?1.5:1],!n&&this.plinthGoal&&this.world.plinth.scale.set(this.plinthGoal[0],1,this.plinthGoal[1]),this.popups.clear(),this.lastEffectKey="",this.removeBadge(),this.interaction.setContext({mode:t,reduced:this.reduced,reenter:!i}),r||this.leaveHome(),r&&!this.director&&(this.director=new Fh(Lh,We(Date.now()&65535),{reduced:this.reduced})),t==="results"&&(this.resultsT=0,this.scoreShown=!1),t==="lobby"&&(this.lobbyKey="",this.lobbyArrivalAt=0),this.bricks.hide("score",!1),this.bricks.hide("height",!1),this.heightShown=-1,this.candidates.release(),this.world.crowd.clearBallot(),this.world.crowd.setSpread(r?230:0,!i),(i==="results"||i==="celebrate")&&(this.fx.confetti.floor=-64)}leave(t,e,i){if(!t)return;let n=t.root;if(e){this.unsink(t),n.visible=!0;return}i&&n.visible?this.sinking.set(n,0):n.visible=!1}unsink(t){t&&(this.sinking.delete(t.root),t.root.position.y=0)}updateLeaving(t){for(let[i,n]of this.sinking){let r=n+t/.75;r>=1?(i.visible=!1,i.position.y=0,this.sinking.delete(i)):(this.sinking.set(i,r),i.position.y=-r*r*420)}let e=this.title;if(this.mode!=="hero"&&e&&e.mesh)if(e.exploded&&!e.gone){e.toCamera.copy(this.camera.position).sub(za.set(0,150,0)).normalize(),e.update(this.lastDt||.016,this.time,{reduced:this.reduced,floor:(i,n)=>this.floorAt(i,n),toCamera:e.toCamera}),this.arsenal.update(this.lastDt||.016,this.time,this.reduced,{away:1});for(let i of e.events.splice(0));}else e.group.visible&&(e.group.visible=!1,this.arsenal.group.visible=!1)}placeLobbyHud(t,e,i){this.interaction.placeHud("lobby",t-16,e-14,i)}placePlayHud(t,e){this.interaction.placeHud("play",t.x+t.w-10,t.y+t.h-12,e)}leaveHome(){this.world.setViewYaw(0),this.popups.faceYaw=0,this.facing=0,this.heroHover=-1,this.arsenal.hover=-1,this.cursorLight.intensity=0,this.hover.energy=0,this.hover.inside=!1,this.world.crowd.setAttention(0,0,0,0),this.hideCaption(),this.engine.bloomPass.strength=this.palette.bloom}updateCommon(t){let e=this.time;if(this.plinthGoal){let i=this.world.plinth.scale;i.x=jt(i.x,this.plinthGoal[0],3.2,t),i.z=jt(i.z,this.plinthGoal[1],3.2,t)}this.engine.fade.value=jt(this.engine.fade.value,this.engine.fade.target,this.engine.fade.speed*3,t),this.fx.sparks.update(t*this.timeScale),this.fx.glints.update(t),this.fx.confetti.update(t,e),this.fx.pulses.update(t),this.fx.sparks.setScale(this.engine.height*.95),this.fx.glints.setScale(this.engine.height*.95),this.popups.update(t,e),this.flash=jt(this.flash,0,7,t),this.desatPulse=jt(this.desatPulse,0,3.2,t),this.caPulse=jt(this.caPulse,0,4,t),this.post.flash=this.flash,this.post.desat=Math.max(this.post.desat||0,this.desatPulse*.45),this.post.ca=(this.post.ca||0)+this.caPulse*.004,this.flash>.01&&(this.post.flashColor=this.theme==="primetime"?[1,.9,.6]:this.desatPulse>.2?[.9,.25,.2]:[1,.86,.55])}userView(t,e,{idleReset:i=!1}={}){return this.interaction.update(t,e,{idleReset:i,cameraDistance:this.camDist||1700})}placeCamera({anchor:t,screen:e,rect:i,worldW:n,worldH:r,yaw:o=0,pitch:a=.1,zoom:l=1,roll:c=0,shake:h=[0,0,0]}){let d=this.camera,f=this.engine.cssWidth,u=this.engine.cssHeight,g=Math.max(.05,Math.min(i.w/n,i.h/r))*l,m=t.x,p=t.y,x=t.z,y=e.x,M=e.y,_=o,b=a,E=c,v=this.flight;if(v){let R=cg(v.from,{ax:m,ay:p,az:x,sx:y,sy:M,ppu:g,yaw:o,pitch:a,roll:c},v.t/v.dur,v);({ax:m,ay:p,sx:y,sy:M,ppu:g}=R),_=R.yaw,b=R.pitch,E=R.roll}let S=u/(2*g*Math.tan(Dr.degToRad(d.fov)/2));b=Math.max(b,Math.asin(mt((QS-p)/S,-.99,.99))),this.camSpec={ax:m,ay:p,az:x,sx:y,sy:M,ppu:g,yaw:_,pitch:b,roll:E};let C=Math.cos(b);return this.camDist=S,d.position.set(m+Math.sin(_)*C*S+h[0],p+Math.sin(b)*S+h[1],x+Math.cos(_)*C*S+h[2]),d.near=Math.max(4,S*.05),d.far=3e4,d.up.set(0,1,0),d.lookAt(m,p,x),E&&d.rotateZ(E),d.setViewOffset(f,u,-(y-f/2),-(M-u/2),f,u),d.updateProjectionMatrix(),d.updateMatrixWorld(!0),g}startFlight(t,e){if(!this.camSpec||this.reduced){this.flight=null;return}let i=lg(t,e);this.flight={t:0,dur:i.dur,pull:i.pull,rise:i.rise,lift:i.lift,from:{...this.camSpec},to:e},document.documentElement.dataset.flight=e}flying(){return!!this.flight}layoutRect(t){if(!t||t.offsetWidth===void 0)return null;let e=0,i=0,n=t;for(;n;)e+=n.offsetLeft||0,i+=n.offsetTop||0,n=n.offsetParent;let r=window.scrollX||0,o=window.scrollY||0,a=t.offsetWidth,l=t.offsetHeight;return{left:e-r,top:i-o,right:e-r+a,bottom:i-o+l,width:a,height:l}}rectOf(t,e){let i=this.layoutRect(t)||(t&&t.getBoundingClientRect?t.getBoundingClientRect():null);return i&&i.width>8&&i.height>8?{x:i.left,y:i.top,w:i.width,h:i.height}:e||{x:0,y:0,w:this.engine.cssWidth,h:this.engine.cssHeight}}uvRect(t){let e=this.engine.cssWidth,i=this.engine.cssHeight;return[t.x/e,1-(t.y+t.h)/i,(t.x+t.w)/e,1-t.y/i]}parallax(t=1){let e=this.pointer;return this.reduced?[0,0]:[(e.inside?e.x:0)*.07*t,(e.inside?e.y:0)*.025*t]}towerStateFromGame(t){let e=t.game,i=t.Core,n=t.mp,r=e.multiplayer?`mp:${e.roundNumber}:${e.mode}`:`solo:${iE(e)}`,o=e.phase==="collapse"||e.phase==="ended"||e.phase==="results";if(e.multiplayer&&e.mode==="competitive"){let l=(e.remotePlayers||[]).find(c=>c.playerId===n.playerId);l&&l.collapsed&&(o=!0)}let a=e.phase==="playing"&&!o;return{id:r,blocks:e.stack||[],fallen:e.fallenPieces||[],moving:a?e.moving:null,effect:e.activeEffect,helpers:i,phase:e.phase,collapsed:o,collapseStartLevel:e.collapseStartLevel,reduced:this.reduced,teamPlacers:!!(e.multiplayer&&e.mode==="teamwork"),ended:!1}}ballotFrom(t){let e=t.game;if(!e||!t.ballot)return null;let i=!!(t.mp.active&&e.multiplayer),{counts:n,total:r}=t.ballot,o=e.vote.options.slice(0,3).map(l=>Number(n[l])||0);for(;o.length<3;)o.push(0);let a=i?Math.max(5,(t.mp.room&&t.mp.room.players?t.mp.room.players.length:4)*1.5):22;return{voted:mt(r/a),fractions:o.map(l=>l+1e-4),colors:ds[this.theme]}}sabotageName(t){let e=this.sabotages[t];return e?e.name:String(t)}makeEmblem(t){return this.voxel.build(t)||Fa(t,this.theme)}announceEffect(t,e){let i=this.sabotages[t.id];if(!i)return;let n=i.name.toUpperCase(),r=this.rig.focusY,o=mt(330/(n.length*.62),24,50);this.bricks.show({key:"effect",text:n,position:[0,r+150,110],cap:o,rows:9,style:"slam",life:t.id==="spotlight"?this.reduced?.9:1.2:1.9,tilt:.04,reduced:this.reduced}),this.removeBadge();let a=this.makeEmblem(t.id);a.scale.multiplyScalar(_g),a.position.set(cf,r+30,70),this.scene.add(a);let l=new st(new Ii(30,33,48,1,0,Zt),new oe({color:new ct(this.palette.amber).multiplyScalar(1.6),transparent:!0,opacity:.95,side:le,toneMapped:!1,depthWrite:!1}));l.position.copy(a.position),l.position.z-=4,this.scene.add(l);let c=new st(new ti(30,48),new oe({color:new ct(this.theme==="paper"?this.palette.cream:this.palette.ink),transparent:!0,opacity:this.theme==="paper"?.84:.9,fog:!1,toneMapped:!1,depthWrite:!1}));c.position.copy(a.position),c.position.z-=9,this.scene.add(c),this.badge={icon:a,ring:l,disc:c,born:this.time,progress:1},this.fx.pulses.pulse({pos:[0,r+60,80],color:this.palette.amber,radius:220,life:.7,from:.2,strength:1,vertical:!0}),this.world.crowd.cheer(.6),this.world.crowd.chaos(1)}removeBadge(){if(!this.badge)return;let t=this.badge;this.scene.remove(t.icon,t.ring,t.disc),t.icon.userData.dispose(),t.ring.geometry.dispose(),t.ring.material.dispose(),t.disc.geometry.dispose(),t.disc.material.dispose(),this.badge=null}updateBadge(t,e,i){if(!this.badge)return;let n=this.badge;if(!t){this.removeBadge();return}let r=this.time-n.born,o=us(mt(r/.45),1.4);n.pop=o*1.5;let a=this.reduced;n.icon.scale.setScalar(Math.max(1e-4,_g*o*(a?1:1+Math.sin(r*2)*.03))),n.icon.rotation.y=(a?.3:Zh(r,1))+this.facing,n.icon.rotation.x=.12,n.ring.rotation.y=this.facing,n.disc.rotation.y=this.facing,n.icon.position.set(cf,i+30+(a?0:Math.sin(r*2.2)*4),70);let l=Number(t.duration)||Number(t.elapsed)+Number(t.remaining)||5,c=mt(Number.isFinite(Number(t.remaining))&&t.remaining>0?t.remaining/l:1,0,1);Math.abs(c-n.progress)>.015&&(n.progress=c,n.ring.geometry.dispose(),n.ring.geometry=new Ii(30,33,48,1,Math.PI/2,Math.max(.001,Zt*c))),n.ring.position.set(n.icon.position.x,n.icon.position.y,64),n.ring.scale.setScalar(Math.max(1e-4,o*1.5)),n.disc.position.set(n.icon.position.x,n.icon.position.y,61),n.disc.scale.setScalar(Math.max(1e-4,o*1.5))}update_play(t,e){let i=e.game,n=this.getTower("play");if(n.root.visible=!0,!i){this.interaction.release(),this.placeIdle(t,e);return}let r=this.towerStateFromGame(e);this.lastPlayKey=r.id,n.sync(r,t,this.time);let o=r.blocks,a=o.length,l=i.activeEffect?i.activeEffect.id:"",c=Math.max(220,(a+1)*22-60);this.rig.focusY=this.reduced?c:jt(this.rig.focusY,c,1/.12,t),l==="zoom"?this.interaction.hold(this.sabotages.zoom.name):this.interaction.release();let h=this.userView(t,this.rig.focusY);this.facing=h.yaw,n.setFacing(h.yaw);let d=mt(this.rig.focusY/2200),f=i.activeEffect,u=f?`${f.id}:${f.targetPlayerId||""}`:"";u!==this.lastEffectKey&&(f?this.announceEffect(f,e):this.removeBadge(),this.lastEffectKey=u),this.updateBadge(f,t,this.rig.focusY);let g=l==="zoom"?e.Core.SABOTAGE_TUNING.zoom.scale:1;this.rig.zoom=this.reduced?g:jt(this.rig.zoom,g,1/.12,t);let m=mt((this.rig.zoom*h.zoom-1)/.85),p=o[o.length-1],x=p?(p.left+p.right)/2-180:0,y=p?Wi(p.level):11,M=document.getElementById("game-stage"),_=this.rectOf(M),b=Math.min(_.w/no,_.h/520),E=new P(Ee(0,x,m),Ee(this.rig.focusY,y,m),30),v={x:_.x+_.w/2+Ee(0,x*b,m),y:_.y+_.h/2-Ee(0,(y-this.rig.focusY)*b,m)},[S,C]=this.parallax(),R=this.reduced?0:Math.sin(this.time*.23)*.05;this.rig.yaw=jt(this.rig.yaw,R+S*h.par,4,t),this.rig.pitch=jt(this.rig.pitch,.1+C*h.par+(this.reduced?0:Math.sin(this.time*.17)*.012),4,t);let I=[0,this.rig.kick.step(t),0];if(this.rig.shakeAmp>.01&&!this.reduced&&(this.rig.shakeT+=t,this.rig.shakeAmp*=Math.exp(-t*2.8),I=[I[0]+Math.sin(this.rig.shakeT*61)*this.rig.shakeAmp,I[1]+Math.cos(this.rig.shakeT*53)*this.rig.shakeAmp*.7,0]),l==="earthquake"&&!this.reduced&&i.activeEffect){let O=e.Core.earthquakeOffset(i.activeEffect.elapsed,i.activeEffect.remaining,!1);I[0]+=O.x*.55,I[1]-=O.y*.55}let L=l==="drunk"&&!this.reduced?Math.sin(this.time*2.1)*.035+Math.sin(this.time*3.7)*.018:0;l==="pisa"&&i.activeEffect&&e.Core.pisaAngle&&(L=e.Core.pisaAngle(i.activeEffect.elapsed,i.activeEffect.remaining,i.activeEffect.tiltDirection,this.reduced)),this.placeCamera({anchor:E,screen:v,rect:_,worldW:no,worldH:520,yaw:this.rig.yaw+h.yaw,pitch:this.rig.pitch+h.pitch,zoom:this.rig.zoom*h.zoom,roll:L,shake:I}),this.world.setViewYaw(h.yaw),this.placePlayHud(_,t),this.world.plinth.position.set(n.shake.x,n.shake.y,0),this.ruler.setHeight(a),this.ruler.group.position.y=0;let F=this.ballotFrom(e);F?this.world.crowd.setBallot(F):this.world.crowd.clearBallot();let T=Math.max(0,a-1);this.heightShown!==T&&(this.heightShown=T,this.bricks.show({key:"height",text:String(T),position:[Mg,0,62],cap:92,colors:["#2F8478"],rows:14,style:"hold",baseline:!0,shatterOld:!1,reduced:this.reduced}),T>0&&!this.reduced&&this.fx.dust([Mg,6,70],4));{let O=F&&i.vote,Y=!!(e.mp.active&&i.multiplayer),G=O?O.options.indexOf(e.ballot.pick):-1;this.candidates.update(t,this.time,{options:O?O.options.slice(0,3):null,fractions:F?F.fractions:null,y:Math.max(176,(a+1)*22+132),you:G,winner:l,reduced:this.reduced,away:this.badge?this.badge.icon.position:za.set(cf,this.rig.focusY+30,70),faceYaw:this.facing,hover:this.voteHover})}if(this.reduced||(l==="slowmo"&&(this.post.desat=.5,this.post.tint=[.9,.97,1.12]),l==="turbo"&&(this.post.zoomBlur=.28,this.post.ca=.0014),l==="drunk"&&(this.post.wobble=1),l==="earthquake"&&(this.post.ca=.0022)),n.rig.spot&&f){let O={x:0,y:0,w:this.engine.cssWidth,h:this.engine.cssHeight},Y=this.spotOpen(f),G=this.spotPost(n,n.rig.spot,O,Y);if(G&&this.post.spots.push(G),Y<.999){let $=this.emblemLight();$&&this.post.spots.push($)}}if(l==="zoom"&&f){let O={x:0,y:0,w:this.engine.cssWidth,h:this.engine.cssHeight},Y=this.loupePost(n,e.Core.macroZoomLens(p),O);Y&&this.post.spots.push(Y)}let N=i.moving,z=N&&Number.isFinite(N.left)&&Number.isFinite(N.width);this.watch(z?N.left+N.width/2-no/2:x,z?Wi(N.level||a):y,0,1,h.yaw),this.updateWorld(t,this.rig.focusY,d,e,n),this.voteCalm=jt(this.voteCalm||0,this.candidates.cards.length?1:0,4,t),this.theme==="sunset"&&this.engine.bloomPass.enabled&&(this.post.bloom=this.palette.bloom*(1-.82*this.voteCalm)),this.post.tiltCenter=.5,this.post.blur=5}spotPost(t,e,i,n=0){let r=t.root.localToWorld(new P(e.x,e.y,e.z)),o=new P().setFromMatrixColumn(this.camera.matrixWorld,0).multiplyScalar(e.radius*t.root.scale.x),a=r.clone().project(this.camera),l=r.clone().add(o).project(this.camera),c=this.camera.aspect,h=Math.abs((l.x-a.x)*.5)*c,d=this.uvRect(i),f=a.x*.5+.5,u=a.y*.5+.5;if(n>.001){let g=Math.max(...[[d[0],d[1]],[d[2],d[1]],[d[0],d[3]],[d[2],d[3]]].map(([m,p])=>Math.hypot((m-f)*c,p-u)));h+=(g*1.05-h)*n}return{x:f,y:u,r:h,rect:d}}spotOpen(t){let e=Number(t&&t.elapsed)||0;return this.reduced?e<.9?1:0:1-wn(mt((e-.8)/.5))}loupePost(t,e,i){if(!e)return null;let n=this.spotPost(t,{x:Yr(e.x),y:Wi(e.level)+14,z:Ti/2,radius:e.radius},i);return n.loupe=!0,n}emblemLight(){let t=this.badge;return t?this.spotWorld(t.disc.position,52*Math.max(.05,t.pop||1),[0,0,1,1]):null}updateWorld(t,e,i,n,r){this.world.update({time:this.time,dt:t,focusY:e,altitude:i,dim:1,camera:this.camera,shadowFocus:{x:0,y:e},fogDist:this.camDist||1e3,tick:this.patternSeconds()})}placeIdle(t,e){let i=this.rectOf(document.getElementById("game-stage"));this.placeCamera({anchor:new P(0,220,30),screen:{x:i.x+i.w/2,y:i.y+i.h/2},rect:i,worldW:no,worldH:520,pitch:.1}),this.updateWorld(t,220,0,e)}update_hero(t,e){let i=this.engine.cssWidth,n=this.engine.cssHeight,r=this.reduced,o=document.querySelector("#title-screen .home-copy"),a=document.querySelector("header.topbar"),l=a?a.getBoundingClientRect().bottom:0,c=o&&this.layoutRect(o)||{left:0,right:0,top:n,width:0},h;i>=900&&c.right<i*.66?h={x:c.right+12,y:l+6,w:i-c.right-28,h:n-l-20}:h={x:6,y:l+2,w:i-12,h:Math.max(180,Math.min(c.top-l-6,n*.62))};let d=this.title,f=this.director,u=this.pointer,g=this.hover;d.titleBuilt||(d.titleBuilt=!0,this.swoop=!this.heroSeen&&!r,d.build({speed:this.heroSeen?2.2:1,instant:r}),this.heroSeen=!0,f.timer=0),r&&!d.complete&&d.finish();let m=d.layout;d.floor=(B,V)=>this.floorAt(B,V);let p=d.complete&&!d.exploded;p?(f.setReduced(r),f.update(t*this.timeScale)):d.complete||(f.timer=0);let x=p?f.effect:null,y=x?Nh(x.id,x.elapsed,x.duration,{reduced:r,dir:x.dir}):null;this.holdMenu&&(r||d.age>=d.introDuration*.8)&&this.releaseMenu();let M=d.bounds,_=this.arsenal.rx+44,b=Math.max(M.x1-M.x0,_*2)*1.04,E=M.y1+96,v=-70,S=E-v,C=(E+v)/2-24,R=r||!this.swoop?1:Yn(mt(d.age/(d.introDuration+.2))),I=this.userView(t,C,{idleReset:!0}),L=I.par,[F,T]=this.parallax(1.4),N=y?y.cam:null,z=N?N.focus:0,O=(1-R)*-.5+F*L+(r?0:Math.sin(this.time*.19)*.035)+I.yaw,Y=Ee(.74,.085,R)+T*L+I.pitch,G=Ee(.46,1,R)*(r?1:1+.028*g.energy)*(N?N.zoom:1)*I.zoom,$=N&&!r?N.shake*8:0,et=[$?Math.sin(this.time*61)*$:0,this.rig.kick.step(t)+($?Math.cos(this.time*53)*$*.7:0),0],dt=this.heroAnchor||(this.heroAnchor=new P);dt.set(Ee(0,m.topOffsetX,z),Ee(C,d.topCenterY,z),0),this.placeCamera({anchor:dt,screen:{x:h.x+h.w/2,y:h.y+h.h*.5},rect:h,worldW:b,worldH:S,yaw:O,pitch:Y,zoom:G,roll:N?N.roll:0,shake:et}),this.world.setViewYaw(I.yaw),this.facing=O,d.toCamera.copy(this.camera.position).sub(za.set(0,150,0)).normalize();let xt=u.inside&&!u.overUi&&!u.touch,yt=xt&&u.lastX>=h.x&&u.lastX<=h.x+h.w&&u.lastY>=h.y&&u.lastY<=h.y+h.h?this.pointerOnScreenPlane(dt,u.ndc,0):null,Ct=-1;xt&&!this.interaction.dragging&&(this.raycaster.setFromCamera(u.ndc,this.camera),Ct=this.pickRing()),Ct!==this.heroHover?(this.heroHover=Ct,this.arsenal.hover=Ct,this.showHoverLabel(Ct,O)):Ct>=0&&this.showHoverLabel(Ct,O,!0);let kt=xt&&!this.interaction.dragging&&Ct<0&&d.complete&&this.overTitle(u.lastX,u.lastY);this.interaction.setCursor(this.interaction.dragging?"grabbing":Ct>=0||kt?"pointer":xt?"grab":""),g.update(t,{point:yt?yt.point:null,speed:u.speed,blocked:!!this.interaction.dragging,reduced:r}),this.hoverLife(t,yt,dt,O,h);{let B=g.energy,V=Math.sin(this.time*.5)*(M.x1-M.x0)*.3;this.watch(Ee(V,g.x,B),Ee(d.topCenterY,g.y,B),Ee(0,g.z,B),1,I.yaw)}let wt=this.interaction.dragging?null:yt,zt=u.buttons?null:wt;d.update(t,this.time,{pointer:zt,pointerSpeed:u.speed,reduced:r,energy:g.energy,yaw:O,effect:x,floor:d.floor,toCamera:d.toCamera}),this.arsenal.update(t,this.time,r,{yaw:O,pointer:wt,energy:g.energy,away:d.exploded?1:0}),this.titleProps.update(y,{time:this.time,layout:m,gateX:d.gateX,topMid:d.topCenterY,reduced:r});for(let B of d.events.splice(0))this.onTitleEvent(B);let Te=p?f.ballot:null;Te?this.world.crowd.setBallot({voted:Te.voted,fractions:Te.fractions,colors:ds[this.theme]}):this.world.crowd.clearBallot(),x&&x.n!==this.heroEffectN?(this.heroEffectN=x.n,this.world.crowd.cheer(.8),this.world.crowd.chaos(.8),this.showCaption(x.id),r||d.wave(0,1500)):!x&&this.captionKey&&this.hideCaption(),this.placeCaption(h),this.ruler.group.visible=!1;let Gt=document.querySelector("#title-screen .home-bottom"),Qt=Gt?Gt.getBoundingClientRect():null,te=Qt&&Qt.height>4&&Qt.top<n?Qt.top-10:1/0;if(this.interaction.placeHud("hero",h.x+h.w-14,Math.max(h.y+120,Math.min(h.y+h.h-12,te)),t),this.world.plinth.position.set(0,0,0),this.updateWorld(t,190,0,e,null),y&&!r){let B=y.post;B.zoomBlur&&(this.post.zoomBlur=B.zoomBlur),B.wobble&&(this.post.wobble=B.wobble),B.desat&&(this.post.desat=B.desat),B.tint&&(this.post.tint=B.tint),B.ca&&(this.post.ca=(this.post.ca||0)+B.ca)}else y&&y.post.tint&&(this.post.tint=y.post.tint);if(y&&y.veil>.01){let B=y.spotSweep*(M.x1-M.x0),V=(M.x1-M.x0)*.155,j=this.spotWorld(za.set(B,d.topCenterY*.78,30),V*(1+4.5*(1-wn(y.veil))),[0,0,1,1]);j&&this.post.spots.push(j)}if(y&&y.loupe>.01){let B=(M.x1-M.x0)*.2,V=this.spotWorld(za.set(m.topOffsetX,d.topCenterY,30),B*(1+4.5*(1-wn(y.loupe))),[0,0,1,1]);V&&(V.loupe=!0,this.post.spots.push(V))}this.post.tiltCenter=Ee(.55,mt((u.ndc.y+1)/2,.2,.85),r?0:.8*g.energy),this.post.blur=6,this.engine.bloomPass.enabled&&(this.post.bloom=this.palette.bloom*(1+.3*g.energy)),this.post.fade=0}floorAt(t,e){let i=this.world.plinth.scale,n=250*i.x,r=250*i.z;return t*t/(n*n)+e*e/(r*r)<1?0:-64}overTitle(t,e){let i=this.titleRect();return t>=i.x&&t<=i.x+i.w&&e>=i.y&&e<=i.y+i.h}titleRect(){let t=this.engine.cssWidth,e=this.engine.cssHeight,i=this.title.bounds,n=this.fieldCorner||(this.fieldCorner=new P),r=1/0,o=1/0,a=-1/0,l=-1/0;for(let c of[i.x0,i.x1])for(let h of[i.y0,i.y1])for(let d of[-60,60]){n.set(c,h,d).project(this.camera);let f=(n.x*.5+.5)*t,u=(.5-n.y*.5)*e;r=Math.min(r,f),a=Math.max(a,f),o=Math.min(o,u),l=Math.max(l,u)}return{x:r,y:o,w:a-r,h:l-o}}spotWorld(t,e,i){let n=this.spotA||(this.spotA=new P),r=this.spotB||(this.spotB=new P);return n.copy(t).project(this.camera),r.setFromMatrixColumn(this.camera.matrixWorld,0).multiplyScalar(e).add(t).project(this.camera),{x:n.x*.5+.5,y:n.y*.5+.5,r:Math.abs((r.x-n.x)*.5)*this.camera.aspect,rect:i}}releaseMenu(){this.holdMenu&&(this.holdMenu=!1,document.documentElement.removeAttribute("data-intro"))}onTitleEvent(t){if(t.type!=="thud")return;this.rig.kick.velocity-=60*t.power,this.reduced||(this.flash=Math.max(this.flash,.04*t.power));let e=t.tier===0?this.title.layout.bottomTop:4;this.fx.pulses.pulse({pos:[0,e,40],color:this.palette.amber,radius:t.tier===0?330:240,life:.8,from:.2,strength:1.2}),this.fx.dust([-this.title.layout.slabTW*.3,e,50],6),this.fx.dust([this.title.layout.slabTW*.3,e,50],6),this.world.crowd.cheer(t.tier===0?1.2:.6)}ensureCaption(){if(this.caption)return this.caption;let t=document.getElementById("title-screen");if(!t)return null;let e=document.createElement("div");return e.className="chat-caption",e.setAttribute("aria-hidden","true"),e.innerHTML='<svg class="chat-caption-icon" viewBox="0 0 32 32" focusable="false"><use href="#sabotage-symbol-empty"></use></svg><span class="chat-caption-text"></span>',t.appendChild(e),this.caption={el:e,use:e.querySelector("use"),text:e.querySelector(".chat-caption-text"),x:NaN,y:NaN},this.caption}showCaption(t){let e=this.ensureCaption();if(!e)return;let i=this.sabotages[t];e.use.setAttribute("href",`#sabotage-symbol-${t}`),e.text.textContent=G0(i?i.name:t),this.captionKey=t,e.el.classList.add("is-on")}hideCaption(){this.captionKey="",this.caption&&this.caption.el.classList.remove("is-on")}placeCaption(t){let e=this.caption;if(!e)return;let i=Math.round(t.x+t.w/2),n=Math.round(t.y+t.h-34);(e.x!==i||e.y!==n)&&(e.x=i,e.y=n,e.el.style.left=`${i}px`,e.el.style.top=`${n}px`)}hoverLife(t,e,i,n,r){let o=this.hover,a=o.energy,l=this.reduced,c=this.cursorLight,h=this.world.crowd,d=this.tmpForward;if(a>.003&&d?(c.position.set(o.x,o.y,o.z).addScaledVector(d,-170),c.intensity=a*this.cursorLightPower):c.intensity=0,l||!e){h.setAttention(0,0,0,0);return}let f=Math.cos(this.interaction.view.yaw),u=Math.sin(this.interaction.view.yaw);if(h.setAttention(f*o.x-u*o.z,u*o.x+f*o.z+260,a*.85,a*(o.dwell>1.2?1:.65)),o.entered&&(this.title.wave(e.point.x),h.cheer(.55),this.groundRipple(1)),!(this.gridTrail&&this.gridTrail()))for(let g=o.sparks(t,this.pointer.speed,l);g>0;g-=1)this.sparkle(e);this.pointer.speed>340&&this.time-this.lastRipple>.34&&(this.lastRipple=this.time,this.groundRipple(.7))}setVoteHover(t){this.voteHover=Number.isInteger(t)?t:-1}tickPattern(){return this.patternTick.trigger(this.time)}patternSeconds(){return this.patternTick.jumps(this.time)*(hg[this.theme]||0)}sparkle(t){let e=this.sparkleColors,i=e[Math.floor(Math.random()*e.length)%e.length],n=this.tmpForward,r=this.glintBoost,o=(Math.random()-.5)*40,a=(Math.random()-.5)*40,l=t.right,c=t.up;this.fx.glints.emit({pos:[t.point.x+l.x*o+c.x*a-n.x*150,t.point.y+l.y*o+c.y*a-n.y*150,t.point.z+l.z*o+c.z*a-n.z*150],vel:[(Math.random()-.5)*56,26+Math.random()*50,(Math.random()-.5)*30],color:[i[0]*r,i[1]*r,i[2]*r],alpha:1,size:(this.theme==="paper"?12:9)+Math.random()*12,life:.7+Math.random()*.6,drag:1.5,gravity:-38})}groundRipple(t=1){this.raycaster.setFromCamera(this.pointer.ndc,this.camera);let e=this.raycaster.ray.intersectPlane(this.groundPlane,this.tmpGround||(this.tmpGround=new P));!e||Math.hypot(e.x,e.z)>1e3||this.fx.pulses.pulse({pos:[e.x,-58,e.z],color:this.theme==="sunset"?"#FF4FD8":this.palette.amber,radius:90+110*t,life:1.05,from:.08,strength:1.1})}showHoverLabel(t,e=0,i=!1){if(i||this.popups.hide("hover"),t<0)return;let n=this.arsenal.items[t],r=n.holder.position,o=[r.x+Math.sin(e)*60,r.y+92,r.z+Math.cos(e)*60];if(i){let l=this.popups.items.find(c=>c.key==="hover"&&!c.dying);l&&(l.base=o);return}let a=String(n.name||n.id).toUpperCase();this.popups.show({key:"hover",text:a,position:o,size:mt(300/(a.length*.72),14,30),depth:8,color:this.theme==="paper"?this.palette.ink:this.palette.cream,glow:this.theme==="paper"?.15:.7,style:"hold",life:1})}update_arena(t,e){let i=e.game;if(!i){this.placeIdle(t,e);return}let n=e.Core,r=i.remotePlayers||[],o=Math.max(1,r.length);for(;this.arena.length<o;){let v=new $r(this.kit,this.fx,{scale:1});v.root.visible=!0,this.scene.add(v.root),this.wireTower(v,"arena"),this.arena.push(v)}this.arena.forEach((v,S)=>{v.root.visible=S<o});let a=this.rectOf(document.getElementById("game-stage")),l=this.userView(t,226);this.facing=l.yaw;let c=720/o,h=Math.max(0,...r.map(v=>Number(v.height)||(v.blocks?v.blocks.length-1:0))),d=mt(Math.min(c/400,440/((h+2)*22)),.06,.9),f=i.remoteEffects||[],u=f.map(v=>`${v.id}:${v.targetPlayerId||"all"}`).join(",");if(u!==this.lastArenaKey){let v=f.find(S=>!(this.lastArenaKey||"").includes(`${S.id}:${S.targetPlayerId||"all"}`));if(v&&this.mode==="arena"){let S=this.sabotages[v.id];if(S){let C=S.name.toUpperCase();this.popups.show({text:C,position:[0,330,130],size:mt(520/(C.length*.7),18,46),depth:12,color:this.palette.cream,glow:.7,style:"slam",life:1.9,tilt:.05}),this.world.crowd.cheer(.9),this.world.crowd.chaos(1)}}this.lastArenaKey=u}r.forEach((v,S)=>{let C=this.arena[S],R=(S-(o-1)/2)*c;C.root.position.set(R,0,0),C.root.scale.setScalar(d);let I=f.find(N=>N.targetPlayerId===v.playerId||N.targetPlayerId==null)||null,L=v.blocks&&v.blocks.length?v.blocks:[n.makeBase()],F=!v.ended&&!v.collapsed&&v.moving;C.sync({id:`arena:${i.roundNumber}:${v.playerId||S}`,blocks:L,fallen:v.fallen||[],moving:F?v.moving:null,effect:I,helpers:n,phase:"playing",collapsed:!!v.collapsed,reduced:this.reduced,ended:!!v.ended},t,this.time),this.arenaLabel(S,v,R,d,h);let T={x:a.x+a.w*(S/o),y:a.y+60*(a.h/520),w:a.w/o,h:a.h-66*(a.h/520)};if(C.rig.spot&&I){let N=this.spotPost(C,C.rig.spot,T);N&&this.post.spots.length<6&&this.post.spots.push(N)}if(I&&I.id==="zoom"&&this.post.spots.length<6){let N=this.loupePost(C,n.macroZoomLens(L[L.length-1]),T);N&&this.post.spots.push(N)}}),this.watch(Math.sin(this.time*.8)*c*Math.max(.5,(o-1)/2),this.rig.focusY,0,1,l.yaw);for(let v=o;v<this.arena.length;v+=1)this.arena[v].root.visible=!1;for(let v=o;v<this.labels.length;v+=1)this.labels[v].mesh.visible=!1;let g=226,[m,p]=this.parallax(.7),x=(h+1)*22*d,y=mt((l.zoom-1)/.85),M=mt(x*.55,30,g);this.arenaFocus=this.arenaFocus==null||this.reduced?M:jt(this.arenaFocus,M,1/.3,t);let _=Ee(g,this.arenaFocus,y),b=Math.min(a.w/720,a.h/520);this.placeCamera({anchor:new P(0,_,30),screen:{x:a.x+a.w/2,y:a.y+a.h/2-(_-g)*b},rect:a,worldW:720,worldH:520,yaw:m*.8*l.par+(this.reduced?0:Math.sin(this.time*.2)*.04)+l.yaw,pitch:.12+p*l.par+l.pitch,zoom:l.zoom}),this.world.setViewYaw(l.yaw),this.placePlayHud(a,t),this.ruler.group.visible=!1,this.world.crowd.clearBallot();let E=this.ballotFrom(e);E&&this.world.crowd.setBallot(E),this.updateWorld(t,g,0,e),this.post.tiltCenter=.5,this.post.blur=4}arenaLabel(t,e,i,n,r,o={}){let a=this.labels[t],l=String(e.name||"Player").slice(0,12),c=Number(e.height)||0,h=o.status||(e.disconnected?"OFFLINE":e.collapsed?"COLLAPSED":e.ended?"FINISHED":`${c} HIGH`),d=`${l}|${h}|${e.color}`;if(!a){let u=document.createElement("canvas");u.width=256,u.height=96;let g=new hi(u);g.colorSpace=Ie,g.anisotropy=4;let m=new st(new Fe(112,42),new oe({map:g,transparent:!0,depthWrite:!1}));a={mesh:m,canvas:u,texture:g,text:""},this.labels[t]=a,this.scene.add(m)}if(a.mesh.visible=!0,a.text!==d){a.text=d;let u=a.canvas.getContext("2d");u.clearRect(0,0,256,96);let g=this.palette;u.fillStyle=this.theme==="paper"?"rgba(244,237,223,0.92)":"rgba(6,10,36,0.9)",this.theme==="sunset"?u.fillRect(4,4,248,88):(u.beginPath(),u.roundRect(4,4,248,88,22),u.fill()),u.strokeStyle=_i(this.theme,e.color||"#E3A33B"),u.lineWidth=6,u.stroke(),u.fillStyle=_i(this.theme,e.color||"#E3A33B"),u.beginPath(),u.arc(34,34,12,0,Zt),u.fill(),u.fillStyle=this.theme==="paper"?"#2A2520":"#ffffff",u.textBaseline="middle",u.font=this.theme==="sunset"?"34px VT323, monospace":this.theme==="primetime"?'700 34px "Barlow Condensed", sans-serif':'700 30px "DM Sans", sans-serif',u.textAlign="left",u.fillText(l,58,34,180),u.fillStyle=this.theme==="paper"?"#6E6558":"#C9D6FF",u.font=this.theme==="sunset"?"28px VT323, monospace":this.theme==="primetime"?'500 26px "Barlow Condensed", sans-serif':'600 24px "DM Sans", sans-serif',u.textAlign="center",u.fillText(h,128,72,220),a.texture.needsUpdate=!0}let f=o.colW||720/Math.max(1,this.view.game.remotePlayers.length);a.mesh.scale.setScalar(mt(f/150,.5,1.15)),a.mesh.position.set(i,o.y==null?470:o.y,120),a.mesh.rotation.y=this.facing}update_results(t,e){let i=e.results,n=this.getTower("play");n.root.visible=!0;let r=i.blocks||[],o=(i.collapsedBlocks||[]).map(v=>v.level),a=o.length?Math.min(...o):null;n.sync({id:this.lastPlayKey||"results",blocks:r,fallen:i.fallen||[],moving:null,effect:null,helpers:e.Core,phase:"ended",collapsed:!0,collapseStartLevel:a,reduced:this.reduced,ended:!0},t,this.time),this.resultsT=(this.resultsT||0)+t;let l=document.querySelector("#solo-result-layout .results-frame"),c=this.rectOf(l,this.rectOf(document.getElementById("results-canvas"))),h=a??r.length,d=h*22+40,f=Math.max(520,d+230+(i.newBest?130:0)),u=f/2-50;this.rig.focusY=jt(this.rig.focusY,u,3,t);let g=this.reduced?1:Yn(mt(this.resultsT/1.8)),m=this.reduced,p=this.pointer,x=this.userView(t,this.rig.focusY,{idleReset:!0}),y=x.par,[M,_]=this.parallax(1.4),b=(Math.sin(this.time*.22)*.14+M)*y+x.yaw,E=Ee(.04,.13,g)+_*y+x.pitch;if(this.world.setViewYaw(x.yaw),this.facing=x.yaw,this.interaction.setCursor(this.interaction.dragging?"grabbing":p.inside&&!p.overUi&&!p.touch?"grab":""),this.placeCamera({anchor:new P(0,this.rig.focusY,30),screen:{x:c.x+c.w/2,y:c.y+c.h/2},rect:c,worldW:400,worldH:f,yaw:b,pitch:E,zoom:Ee(1.08,1,g)*x.zoom}),!this.scoreShown&&this.resultsT>.4&&(this.scoreShown=!0,this.bricks.show({key:"score",text:String(i.height),position:[0,h*22+52,80],cap:112,colors:["#E3A33B"],rows:15,style:"hold",baseline:!0,reduced:this.reduced}),i.newBest&&this.popups.show({key:"best",text:"NEW BEST",position:[0,h*22+202,80],size:22,depth:8,color:this.palette.vermilion,glow:1,style:"hold",life:1,tilt:-.05}),!this.reduced&&(i.newBest||i.height>=15)&&this.fx.confetti.burst({pos:[0,h*22+140,40],count:130,speed:360,colors:this.confettiColors(),size:7.5,life:4.2,cone:1.4}),this.world.crowd.cheer(i.newBest?2.2:1)),i.newBest&&this.resultsT>.5){let v=pg(this.resultsT-.55,this.time,m),S=h*22+268+v.bob,C=this.crown;if(C.visible=v.scale>.002,C.position.set(0,S,80),C.scale.setScalar(1.75*Math.max(.001,v.scale)),C.rotation.set(v.tilt,v.spin,0),!m&&C.visible&&this.time-this.lastCrownSpark>.3){this.lastCrownSpark=this.time;let R=Math.random()*Zt;this.fx.sparks.burst({pos:[Math.cos(R)*46,S+20+Math.random()*40,80+Math.sin(R)*30],count:3,speed:60,spread:1,color:[1.7,1.25,.3],size:5.5,life:1,gravity:-30,up:.4,drag:1.2})}}else this.crown.visible=!1;this.interaction.placeHud("results",c.x+c.w-14,c.y+c.h-12,t),this.ruler.setHeight(r.length),this.world.plinth.position.set(0,0,0),this.world.crowd.clearBallot(),this.updateWorld(t,this.rig.focusY,mt(this.rig.focusY/2200),e,n),this.post.tiltCenter=.5,this.post.blur=5}startPodium(t){this.podiumFor=t,this.podiumId=(this.podiumId||0)+1,this.podiumClock=0,this.podiumFinale=!1,this.podiumFinaleAt=0,this.podiumFinished=!1,this.podiumCannon=0,this.podiumSide=1,this.podium=mg(t);for(let e of this.podium)e.shown=0,e.fallenShown=-1,e.blockView=[],e.fallenView=[];this.fx.confetti.floor=-64}update_celebrate(t,e){let i=this.engine.cssWidth,n=this.engine.cssHeight,r=e.Core,o=e.mp&&e.mp.resultPayload||null;(!this.podium||o!==this.podiumFor)&&this.startPodium(o);let a=this.podium,l=a.length;for(;this.arena.length<l;){let F=new $r(this.kit,this.fx,{scale:1});F.root.visible=!0,this.scene.add(F.root),this.wireTower(F,"arena"),this.arena.push(F)}this.arena.forEach((F,T)=>{F.root.visible=T<l});for(let F=l;F<this.labels.length;F+=1)this.labels[F].mesh.visible=!1;this.podiumClock+=t;let c=Math.max(1,...a.map(F=>F.blocks.length)),{worldW:h,colW:d,scale:f,maxHeight:u}=gg(l,c),g=this.userView(t,(u+1)*11*f+40,{idleReset:!0});this.facing=g.yaw;let m=!0,p=mt(d/150,.5,1.15);a.forEach((F,T)=>{let N=F.blocks.length,z=xg(this.podiumClock,N,{reduced:this.reduced});z>F.shown&&(F.shown=z,F.blockView=F.blocks.slice(0,z)),F.shown<N&&(m=!1);let O=vg(F.fallen,F.shown,N);O!==F.fallenShown&&(F.fallenShown=O,F.fallenView=F.fallen.slice(0,O));let Y=this.arena[T];Y.setFacing(g.yaw);let G=F.slot*d;if(Y.root.position.set(G,0,0),Y.root.scale.setScalar(f),Y.sync({id:`podium:${this.podiumId}:${F.key}`,blocks:F.blockView.length?F.blockView:[r.makeBase()],fallen:F.fallenView,moving:null,effect:null,helpers:r,phase:"ended",collapsed:!1,reduced:this.reduced,ended:!0,teamPlacers:!!F.team},t,this.time),F.team){this.labels[T]&&(this.labels[T].mesh.visible=!1);return}let et=F.shown>=N?`${F.winner?"WINNER \xB7 ":""}${F.height}${F.winner?"":" HIGH"}`:`${Math.max(0,F.shown-1)} HIGH`;this.arenaLabel(T,{name:F.name,color:F.color},G,f,u,{status:et,colW:d,y:Math.max(1,F.shown)*22*f+26+24*p})}),this.podiumFinished=m;let x=this.world.plinth.scale,y=l<=1?1:l===2?1.7:2.3,M=l<=1?1:.62;this.world.plinth.scale.set(jt(x.x,y,4,t),1,jt(x.z,M,4,t)),this.world.plinth.position.set(0,0,0);let _=(u+1)*22*f;if(m&&l>0&&!this.podiumFinale){this.podiumFinale=!0,this.podiumFinaleAt=this.podiumClock,this.podiumCannon=.5,this.world.crowd.cheer(2.4);let F=a.filter(O=>O.winner),T=this.palette.amber;F.forEach(O=>{let Y=O.slot*d,G=O.blocks.length*22*f;this.fx.pulses.pulse({pos:[Y,2,20],color:T,radius:Math.max(160,330*f),life:1.3,from:.2,strength:1.5}),this.reduced||this.fx.confetti.burst({pos:[Y,G+10,40],count:150,speed:400,colors:this.confettiColors(),size:11,life:4.6,cone:1.5})});let z=yg(a,O=>[...String(O).toUpperCase()].filter(Y=>C0(this.palette.fontKey,Y)).join("").trim());this.popups.show({text:z,position:[0,_+96,130],size:mt(560/(z.length*.72),18,46),depth:12,color:T,glow:.9,style:"slam",life:3.6,tilt:-.04})}if(this.podiumFinale&&!this.reduced&&(this.podiumCannon-=t,this.podiumCannon<=0)){this.podiumCannon=2.2,this.podiumSide=-this.podiumSide;let F=this.podiumSide;this.fx.confetti.burst({pos:[F*(h/2+30),0,40],count:64,speed:660,colors:this.confettiColors(),size:11,life:5.2,cone:.4,direction:[-F*.5,1,0]}),this.world.crowd.cheer(.7)}let b=this.rectOf(document.getElementById("multiplayer-results"),{x:i*.5,y:n*.4,w:i*.5,h:n*.5}),E=this.rectOf(document.querySelector("#results-screen .screen-heading"),{x:0,y:60,w:i,h:60}),v=b.x>i*.4,S=v?{x:12,y:E.y+E.h+8,w:Math.max(240,b.x-36),h:Math.max(240,n-E.y-E.h-24)}:{x:8,y:E.y+E.h+6,w:i-16,h:Math.max(200,b.y-E.y-E.h-14)},C=_*.5+40,R=_+220,[I,L]=this.parallax(1.2);this.placeCamera({anchor:new P(0,C,30),screen:{x:S.x+S.w/2,y:S.y+S.h*.47},rect:S,worldW:h+60,worldH:R,yaw:I*g.par+(this.reduced?0:Math.sin(this.time*.18)*.1)+g.yaw,pitch:.1+L*g.par+g.pitch,zoom:g.zoom}),this.world.setViewYaw(g.yaw),this.interaction.placeHud("results",v?i-16:S.x+S.w-14,v?n-14:S.y+S.h-12,t),this.ruler.group.visible=!1,this.world.crowd.clearBallot(),this.updateWorld(t,C,.04,e),this.post.tiltCenter=.5,this.post.blur=4}update_lobby(t,e){let i=e.mp.room,n=i&&i.players||[],r=this.getTower("lobby");r.root.visible=!0;let o=n.map(v=>`${v.id||""}:${v.name||""}:${v.color||""}`).join("|");o!==this.lobbyKey&&(this.lobbyKey=o,this.lobbyArrivalAt=this.modeTime);let a=this.userView(t,230,{idleReset:!0});this.facing=a.yaw,r.setFacing(a.yaw);let l=[e.Core.makeBase()];n.forEach((v,S)=>{let C=Math.max(60,190-S*18),R=(360-C)/2+(S%2?8:-8);l.push({left:R,right:R+C,level:S+1,color:v.color||"#E3A33B",perfect:!1,placer:v.name||"Player"})}),r.sync({id:`lobby:${e.mp.code}`,blocks:l,fallen:[],moving:null,effect:null,helpers:e.Core,phase:"lobby",collapsed:!1,reduced:this.reduced,teamPlacers:!0},t,this.time);let c=this.rectOf(document.querySelector("#room-screen .room-lobby-layout"),{x:0,y:0,w:this.engine.cssWidth,h:this.engine.cssHeight}),h=this.engine.cssWidth,d=this.engine.cssHeight,[f,u]=this.parallax(1.3),g=h>=900?{x:h*.36,y:60,w:h*.62,h:d-80}:{x:8,y:54,w:h-16,h:d*.5},m=h>=900,p=m?Math.max(g.y+g.h/2,d*.69):g.y+g.h/2,x=mt((a.zoom-1)/.85),y=Ee(230,70,x),M=Math.min(g.w/620,g.h/(m?760:640));this.placeCamera({anchor:new P(0,y,0),screen:{x:g.x+g.w/2,y:p-(y-230)*M},rect:g,worldW:620,worldH:m?760:640,yaw:f*a.par+Math.sin(this.time*.2)*.1+a.yaw,pitch:.1+u*a.par+a.pitch,zoom:a.zoom}),this.world.setViewYaw(a.yaw),this.world.plinth.position.set(0,0,0),this.ruler.group.visible=!1,this.world.crowd.clearBallot();let _=n.slice(0,6),b=this.pointer,E=b.inside&&!b.touch;this.totems.sync(_.map(v=>({id:v.id,name:v.name,color:v.color,ready:v.connected!==!1})),t,this.time,{x:E?b.x:0,y:E?b.y:0},this.reduced,a.yaw),_.forEach((v,S)=>this.arenaLabel(S,v,tu(S).x,1,0,{status:v.connected===!1?"OFFLINE":"READY",colW:160,y:ug(this.theme)+36+Math.floor(S/2)*36}));for(let v=_.length;v<this.labels.length;v+=1)this.labels[v].mesh.visible=!1;this.watch(0,200,0,.8,a.yaw),this.placeLobbyHud(h,d,t),this.updateWorld(t,230,0,e,r),this.post.tiltCenter=.5,this.post.blur=5}dispose(){this.disposed=!0,this.pendingTheme=null,this.interaction.dispose(),this.bricks&&this.bricks.destroy(),this.voxel&&this.voxel.dispose(),this.candidates&&this.candidates.dispose(),this.releaseMenu(),this.caption&&(this.caption.el.remove(),this.caption=null),this.scene.remove(this.cursorLight),this.cursorLight.dispose(),this.totems&&(this.scene.remove(this.totems.group),this.totems.dispose()),this.crown&&(this.scene.remove(this.crown),this.crown.userData.dispose()),this.engine.dispose()}};var nu=null;function nE(){if(nu)return nu;let s=document.createElement("canvas"),t=new cs({canvas:s,antialias:!0,alpha:!1,preserveDrawingBuffer:!0});t.outputColorSpace=Ie,t.shadowMap.enabled=!0,t.shadowMap.type=Gn;let e=new En(t),i=new Jr;return nu={canvas:s,renderer:t,envMap:e.fromScene(i,.04).texture},e.dispose(),i.dispose(),nu}function sE(s){let t=document.createElement("canvas");t.width=4,t.height=256;let e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,s.skyZenith),i.addColorStop(.62,s.skyMid),i.addColorStop(1,s.skyHorizon),e.fillStyle=i,e.fillRect(0,0,4,256);let n=new hi(t);return n.colorSpace=Ie,n}function Sg(s,t,e){try{let i=pn(s.theme),n=Bs(i),{renderer:r,envMap:o}=nE(),a=Math.min(2,Math.max(1,window.devicePixelRatio||1)),l=e.width,c=e.height;r.setPixelRatio(1),r.setSize(Math.round(l*a),Math.round(c*a),!1),r.toneMapping=i==="paper"?Ki:hn,r.toneMappingExposure=n.exposure;let h=new Oi,d=sE(n);h.background=d,h.environment=o,h.environmentIntensity=.7;let f=new Wr(i),u=e.teamwork?422:252,g=Math.min(1,(u-26)/(Math.max(1,e.maxHeight+1)*Vi)),m=new lt;h.add(m);let p=[];for(let T of e.blocks||[]){let N=Number.isInteger(T.level)?T.level:(e.blocks||[]).indexOf(T),z=f.mesh({left:T.left,right:T.right,color:T.color},{depth:Ti});z.position.set((T.left+T.right)/2-180,N*Vi+Vi/2,0),m.add(z),T.perfect&&f.addPerfectStar(z,T.right-T.left)}if(e.collapseLevel!=null){let T=new st(new Ce(210,1.4,6,64).rotateX(Math.PI/2),new oe({color:se(n.vermilion).multiplyScalar(1.4)}));T.position.y=(Math.max(0,e.collapseLevel)+1)*Vi,m.add(T),p.push(T)}let x=new Xr({floorY:xh()}),y=We(9),M=(e.fallen||[]).slice(0,12),_=Math.max(40,Math.min(95,l/2/g-30));M.forEach((T,N)=>{let z=Math.max(6,(T.right||0)-(T.left||0)),O=f.mesh({left:0,right:z,color:T.color||n.vermilion},{depth:Ti*.7});m.add(O),x.add(Ra({pos:[(y()*2-1)*_,16+N*9,70+y()*70],half:[z/2,qe/2,Ti*.35],vel:[0,0,0],angVel:[y()-.5,(y()-.5)*2,(y()-.5)*2],data:{mesh:O}}))}),x.settle(2.6);for(let T of x.bodies){let N=T.data.mesh;N.position.set(...T.pos),N.quaternion.set(...T.quat)}let b=new st(new _e(260,268,40,64),new Ht({color:i==="paper"?"#EADFC8":n.plinth,roughness:.8,metalness:i==="primetime"?.4:0}));b.position.y=-20.2,b.receiveShadow=!0,h.add(b);let E=new st(new ti(4e3,48).rotateX(-Math.PI/2),new Ht({color:n.floor,roughness:.95}));E.position.y=-44,h.add(E);let v=new zi(se(n.key),i==="paper"?2.3:2.6);v.position.set(-300,520,600),v.castShadow=!0,Object.assign(v.shadow.camera,{left:-420,right:420,top:420,bottom:-120,near:10,far:1800}),v.shadow.mapSize.set(1024,1024),v.shadow.bias=-8e-4,h.add(v),h.add(new zn(se(n.fill),se(n.ground),.7));let S=new zi(se(n.rim),1.2);S.position.set(380,160,-400),h.add(S);let C=new ai(24,l/c,20,12e3),R=c/(2*g*Math.tan(Dr.degToRad(24)/2)),I=.12,L=-.2;C.position.set(Math.sin(L)*Math.cos(I)*R,Math.sin(I)*R,30+Math.cos(L)*Math.cos(I)*R),C.lookAt(0,0,30),C.setViewOffset(l,c,0,-(u-c/2),l,c),C.updateProjectionMatrix(),r.render(h,C),t.width=Math.round(l*a),t.height=Math.round(c*a);let F=t.getContext("2d");if(F.setTransform(1,0,0,1,0,0),F.drawImage(r.domElement,0,0,t.width,t.height),e.teamwork){F.save(),F.scale(a,a);for(let T of e.blocks||[]){if(!T.placer||T.placer==="Base")continue;let N=Number.isInteger(T.level)?T.level:0,z=l/2+(T.left-180)*g,O=(T.right-T.left)*g,Y=u-(N+1)*Vi*g,G=String(T.placer).slice(0,10);F.font=i==="sunset"?"14px VT323, monospace":i==="primetime"?'600 12px "Barlow Condensed", sans-serif':'600 10px "DM Sans", sans-serif';let $=Math.min(72,F.measureText(G).width+8),et=z>l*.56?Math.max(2,z-$-3):Math.min(l-$-2,z+O+3);F.fillStyle=i==="paper"?"rgba(42,37,32,.85)":"rgba(6,10,36,.88)",F.fillRect(et,Y+3,$,13),F.fillStyle="#fff",F.textAlign="center",F.textBaseline="middle",F.fillText(G,et+$/2,Y+10,$-4)}F.restore()}d.dispose(),f.dispose(),b.geometry.dispose(),b.material.dispose(),E.geometry.dispose(),E.material.dispose(),v.shadow.map&&v.shadow.map.dispose();for(let T of p)T.geometry.dispose(),T.material.dispose();for(let T of x.bodies)T.data.mesh.geometry;return!0}catch(i){return console.warn("3D snapshot failed",i),!1}}function Eg(s,t,e={set:(i,n)=>setTimeout(i,n),clear:i=>clearTimeout(i)}){let i=null;return{request(){return i!==null?!1:(i=e.set(()=>{i=null,s()},t),!0)},cancel(){i!==null&&(e.clear(i),i=null)},get pending(){return i!==null}}}var rE=".home-copy, .side-card, .result-info, .multiplayer-results, .preview-card",wg={Digit1:0,Numpad1:0,Digit2:1,Numpad2:1,Digit3:2,Numpad3:2},Tg=(s,t,e)=>Math.min(e,Math.max(t,s));function Ag({doc:s=document,win:t=window,maxTilt:e=2.2,hover:i}={}){let n=s.documentElement,r=()=>n.dataset.motion==="reduced",o=i!==void 0?!!i:!(t.matchMedia&&t.matchMedia("(pointer: coarse)").matches),a=new Set,l=b=>!!b&&(/^(INPUT|TEXTAREA|SELECT)$/.test(b.tagName)||!!b.isContentEditable),c=b=>{b&&!b.disabled&&(b.classList.add("is-pressed"),a.add(b))},h=()=>{for(let b of a)b.classList.remove("is-pressed");a.clear()},d=b=>Object.prototype.hasOwnProperty.call(wg,b),f=b=>{b.repeat||s.body.dataset.screen!=="game"||l(b.target)||(b.code==="Space"?c(s.getElementById("drop-button")):d(b.code)&&c(s.querySelector(`.vote-option[data-option-index="${wg[b.code]}"]`)))},u=b=>{(b.code==="Space"||d(b.code))&&h()},g={el:null,rx:0,ry:0,tx:0,ty:0,raf:0},m=b=>{b&&(b.style.removeProperty("--tx"),b.style.removeProperty("--ty"),b.classList.remove("is-tilting"))},p=()=>{g.raf=0;let b=g.el;if(!b)return;if(g.rx+=(g.tx-g.rx)*.16,g.ry+=(g.ty-g.ry)*.16,g.tx===0&&g.ty===0&&Math.abs(g.rx)<.01&&Math.abs(g.ry)<.01){g.rx=g.ry=0,m(b),g.el=null;return}b.style.setProperty("--tx",g.rx.toFixed(3)),b.style.setProperty("--ty",g.ry.toFixed(3)),g.raf=t.requestAnimationFrame(p)},x=()=>{!g.raf&&g.el&&(g.raf=t.requestAnimationFrame(p))},y=()=>{g.tx=0,g.ty=0,x()},M=b=>{if(!o||b.pointerType==="touch")return;let E=b.target&&b.target.closest?b.target.closest(rE):null;if(!E||r()){y();return}g.el&&g.el!==E&&(m(g.el),g.rx=g.ry=0);let v=E.getBoundingClientRect();if(!(v.width>0&&v.height>0))return;let S=Tg((b.clientX-v.left)/v.width*2-1,-1,1),C=Tg((b.clientY-v.top)/v.height*2-1,-1,1);g.el=E,E.classList.add("is-tilting"),g.tx=-C*e,g.ty=S*e,x()},_=()=>y();return t.addEventListener("keydown",f),t.addEventListener("keyup",u),t.addEventListener("blur",h),s.addEventListener("pointermove",M),n.addEventListener("pointerleave",_),{get tilting(){return g.el},dispose(){t.removeEventListener("keydown",f),t.removeEventListener("keyup",u),t.removeEventListener("blur",h),s.removeEventListener("pointermove",M),n.removeEventListener("pointerleave",_),g.raf&&t.cancelAnimationFrame(g.raf),g.raf=0,m(g.el),g.el=null,h()}}}var Rg='svg > use[href^="#sabotage-symbol-"]';function Cg(s,t){let e=t.parentNode;if(!e||e.dataset.turn||e.closest(".icon-turn"))return null;e.dataset.turn="front";let i=s.createElement("span");i.className="icon-turn",e.parentNode.insertBefore(i,e),i.appendChild(e);let n=[];for(let l=1;l<=4;l+=1){let c=e.cloneNode(!0);c.removeAttribute("id"),c.removeAttribute("class"),c.removeAttribute("data-turn"),c.setAttribute("aria-hidden","true"),c.setAttribute("focusable","false"),c.classList.add("icon-back"),c.style.setProperty("--layer",String(l));let h=c.querySelector("use");h&&(h.removeAttribute("id"),h.removeAttribute("class")),i.appendChild(c),n.push(h)}let r=()=>{let l=t.getAttribute("href");for(let c of n)c&&c.getAttribute("href")!==l&&c.setAttribute("href",l)},o=Ig(s),a=o?new o(r):null;return a&&a.observe(t,{attributes:!0,attributeFilter:["href"]}),i.style.setProperty("--turn-delay",`${-(Math.abs(oE(t))%90/10).toFixed(1)}s`),{holder:i,front:e,observer:a,undo(){a&&a.disconnect();for(let l of i.querySelectorAll(".icon-back"))l.remove();i.parentNode.insertBefore(e,i),i.remove(),delete e.dataset.turn}}}var Ig=s=>s.defaultView&&s.defaultView.MutationObserver||(typeof MutationObserver=="function"?MutationObserver:null),Pg=0,df=new WeakMap;function oE(s){return df.has(s)||(Pg+=1,df.set(s,Pg*37+11)),df.get(s)}function Dg({doc:s=document}={}){let t=new Set,e=r=>{if(!(!r||!r.querySelectorAll))for(let o of r.querySelectorAll(Rg)){let a=Cg(s,o);a&&t.add(a)}};e(s);let i=Ig(s),n=i?new i(r=>{for(let o of r)for(let a of o.addedNodes)if(a.nodeType===1)if(a.matches&&a.matches(Rg)){let l=Cg(s,a);l&&t.add(l)}else e(a)}):null;return n&&s.body&&n.observe(s.body,{childList:!0,subtree:!0}),{get count(){return t.size},rescan(){e(s)},dispose(){n&&n.disconnect();for(let r of t)r.undo();t.clear()}}}var ff=16,aE=14,lE=420,Fg=Object.freeze(["#E3A33B","#2F8478","#7FA6BD","#D5472F","#7A6AA6","#C96F8A"]),cE=Object.freeze([Object.freeze({until:140,size:16,inset:0}),Object.freeze({until:280,size:8,inset:4}),Object.freeze({until:420,size:4,inset:6})]),Lg=s=>Math.floor(s/ff);function hE(s){for(let t of cE)if(s<t.until)return t;return null}var su=class{constructor({max:t=aE,life:e=lE}={}){this.max=t,this.life=e,this.cells=[],this.lastX=NaN,this.lastY=NaN,this.count=0}push(t,e,i,n="paper"){if(!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(i))return!1;let r=Lg(t),o=Lg(e);if(r===this.lastX&&o===this.lastY)return!1;for(this.lastX=r,this.lastY=o,this.prune(i),this.cells.push({cx:r,cy:o,born:i,color:_i(pn(n),Fg[this.count%Fg.length])}),this.count+=1;this.cells.length>this.max;)this.cells.shift();return!0}prune(t){return this.cells.length&&(this.cells=this.cells.filter(e=>t-e.born<this.life)),this.cells.length}alive(t){return this.cells.some(e=>t-e.born<this.life)}rects(t){let e=[];for(let i of this.cells){let n=hE(t-i.born);n&&e.push({x:i.cx*ff+n.inset,y:i.cy*ff+n.inset,w:n.size,h:n.size,color:i.color})}return e}clear(){this.cells.length=0,this.lastX=NaN,this.lastY=NaN}};var l3=Object.freeze(["title","lobby","results"]);function uE(s){return!!(s&&(s.soloPaused||s.paused))}function Ng(s){return(s&&s.screen?String(s.screen):"title")!=="game"?!0:uE(s.game)}function pf(s){if(Array.isArray(s))return s.length>=3?s.slice(0,3).map(Number):null;let t=String(s??"").trim(),e=/^#([\da-f]{3})$/i.exec(t);return e?e[1].split("").map(i=>parseInt(i+i,16)):(e=/^#([\da-f]{6})(?:[\da-f]{2})?$/i.exec(t),e?[0,2,4].map(i=>parseInt(e[1].slice(i,i+2),16)):(e=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(t),e?[Number(e[1]),Number(e[2]),Number(e[3])]:null))}function ru(s){let t=pf(s);if(!t)return 0;let[e,i,n]=t.map(r=>{let o=Math.min(255,Math.max(0,r))/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4});return .2126*e+.7152*i+.0722*n}function Ga(s,t){let e=Math.max(ru(s),ru(t)),i=Math.min(ru(s),ru(t));return(e+.05)/(i+.05)}var dE=4.5,Ug=Object.freeze({paper:Object.freeze({light:"#F4EDDF",dark:"#2A2520"}),sunset:Object.freeze({light:"#FFF3E2",dark:"#170B33"}),primetime:Object.freeze({light:"#FFFFFF",dark:"#0A1A55"})});function Bg(s,t,e){let i=Ga(s,t)>=Ga(s,e)?t:e;return Ga(s,i)>=dE?i:Ga(s,"#000000")>=Ga(s,"#FFFFFF")?"#000000":"#FFFFFF"}var ou=Object.freeze({ticks:3,intervalMs:60});function Og(s){return Math.max(2,Math.round((Number(s)||16)/10))}function Hg(s,t,e,i,{threshold:n=.35}={}){let r=Math.ceil(t/i),o=Math.ceil(e/i),a=[];for(let l=0;l<o;l+=1)for(let c=0;c<r;c+=1){let h=0,d=0;for(let f=l*i;f<Math.min(e,(l+1)*i);f+=1)for(let u=c*i;u<Math.min(t,(c+1)*i);u+=1)h+=s[(f*t+u)*4+3]/255,d+=1;d&&h/d>=n&&a.push({gx:c,gy:l})}return{cols:r,rows:o,rects:a}}function kg(s,t,e=Math.random,i=ou.ticks){let n=new Int8Array(t),r=new Int8Array(t);if(s>=i)return{dx:n,dy:r};for(let o=0;o<t;o+=1){let a=0,l=0;for(;a===0&&l===0;)a=Math.floor(e()*3)-1,l=Math.floor(e()*3)-1;n[o]=a,r[o]=l}return{dx:n,dy:r}}function zg(s){let t=String(s||"").trim();if(!t||t==="none")return null;let e=t.split(/,(?![^(]*\))/)[0].trim(),i=/(rgba?\([^)]*\)|#[\da-f]{3,8})/i.exec(e);if(!i)return null;let n=e.replace(i[0]," ").match(/-?[\d.]+px|-?[\d.]+(?=\s|$)/g)||[];return n.length<2?null:{x:parseFloat(n[0]),y:parseFloat(n[1]),color:i[0]}}var mf="http://www.w3.org/2000/svg",fE='input:not([type]), input[type="text"], input[type="search"], input[type="email"], input[type="url"], input[type="tel"], input[type="password"], input[type="number"], textarea',pE=`[data-no-trail], select, ${fE}, [contenteditable=""], [contenteditable="true"]`,mE=".room-player-list li";function Gg({doc:s=document,win:t=window,hover:e,now:i,hooks:n={},rng:r=Math.random,timers:o}={}){let a=s.documentElement,l=e!==void 0?!!e:!(t.matchMedia&&t.matchMedia("(pointer: coarse)").matches),c=typeof i=="function"?i:()=>t.performance.now(),h=()=>a.dataset.motion==="reduced",d=()=>pn(a.dataset.theme),f=()=>{let B=t.SabotageStackHost;try{return B&&typeof B.view=="function"?B.view():null}catch{return null}},u=()=>Ng(f()||{screen:s.body&&s.body.dataset?s.body.dataset.screen:"title"}),g=(B,V)=>o&&o.set?o.set(B,V):t.setInterval(B,V),m=B=>o&&o.clear?o.clear(B):t.clearInterval(B),p=B=>!B.pointerType||B.pointerType==="mouse",x=(B,V)=>B&&B.closest?B.closest(V):null,y=(B,V)=>!(B.relatedTarget&&V.contains&&V.contains(B.relatedTarget)),M=new su,_=null,b=null,E=0,v=!0,S=()=>s.fullscreenElement||s.querySelector("dialog[open]")||s.body;function C(){if(!v)return!1;if(!_){let V=s.createElement("canvas"),j=V.getContext?V.getContext("2d"):null;if(!j)return v=!1,!1;V.className="pixel-trail",V.setAttribute("aria-hidden","true"),V.setAttribute("data-no-trail",""),V.style.pointerEvents="none",_=V,b=j}let B=S();return _.parentNode!==B&&B.appendChild(_),!0}function R(B){if(!_||!b)return;let V=Math.max(1,Number(t.devicePixelRatio)||1),j=Math.round((t.innerWidth||0)*V),ut=Math.round((t.innerHeight||0)*V);_.width!==j&&(_.width=j),_.height!==ut&&(_.height=ut),b.setTransform(1,0,0,1,0,0),b.imageSmoothingEnabled=!1,b.clearRect(0,0,_.width,_.height);for(let ot of B){let Ft=Math.round(ot.x*V),vt=Math.round(ot.y*V),Jt=Math.round((ot.x+ot.w)*V),ie=Math.round((ot.y+ot.h)*V);b.fillStyle=ot.color,b.fillRect(Ft,vt,Math.max(1,Jt-Ft),Math.max(1,ie-vt))}}function I(){if(E=0,!_)return;let B=c(),V=h()||!u();V?M.clear():M.prune(B),R(V?[]:M.rects(B)),!V&&M.cells.length&&(E=t.requestAnimationFrame(I))}let L=()=>{E||(E=t.requestAnimationFrame(I))},F=-1,T=-1,N=-1,z=()=>{let B=F>=0?F:T;B!==N&&(N=B,n.onVoteHover&&n.onVoteHover(B))},O=B=>{let V=x(B,".vote-option");if(!V||V.disabled)return-1;let j=Number(V.dataset.optionIndex);return Number.isInteger(j)?j:-1},Y=B=>{p(B)&&(l&&(F=O(B.target),z()),!(!l||B.buttons||h()||!u())&&(x(B.target,pE)||C()&&M.push(B.clientX,B.clientY,c(),d())&&L()))},G=()=>{F=-1,z()},$=new Set;function et(B){let V=B.querySelector(".player-color-dot");if(!V)return;let j=t.getComputedStyle(V).backgroundColor,ut=pf(j);if(!ut)return;let ot=`${j}|${d()}`;if(B.dataset.floodKey===ot)return;let Ft=Ug[d()];B.style.setProperty("--row-accent",j),B.style.setProperty("--row-fg",Bg(ut,Ft.light,Ft.dark));for(let vt of $)vt.isConnected||$.delete(vt);B.dataset.floodKey=ot,$.add(B)}let dt=null,xt={timer:0,brand:null,svg:null,tick:0,main:[],shade:[],rects:[],cell:1,shadow:null};function K(B){let V=t.getComputedStyle(B),j=B.textContent||"",ut=V.textTransform==="uppercase"?j.toUpperCase():j,ot=B.getBoundingClientRect(),Ft=Math.ceil(ot.width),vt=Math.ceil(ot.height);if(!ut.trim()||!(Ft>0&&vt>0))return null;let Jt=`${V.fontStyle||"normal"} ${V.fontWeight||"400"} ${V.fontSize||"16px"} ${V.fontFamily||"sans-serif"}`;if(s.fonts&&typeof s.fonts.check=="function")try{if(!s.fonts.check(Jt,ut))return null}catch{}let ie=[d(),Jt,V.letterSpacing,V.textTransform,V.color,V.textShadow,ut,Ft,vt].join("|");if(dt&&dt.key===ie)return dt;let fe=s.createElement("canvas");fe.width=Ft,fe.height=vt;let H=fe.getContext?fe.getContext("2d",{willReadFrequently:!0}):null;if(!H)return null;H.font=Jt,"letterSpacing"in H&&V.letterSpacing&&V.letterSpacing!=="normal"&&(H.letterSpacing=V.letterSpacing),H.fillStyle="#000",H.textAlign="left",H.textBaseline="alphabetic";let Se=H.measureText(ut),ue=parseFloat(V.fontSize)||16,Le=Number.isFinite(Se.fontBoundingBoxAscent)&&Number.isFinite(Se.fontBoundingBoxDescent)?(vt-(Se.fontBoundingBoxAscent+Se.fontBoundingBoxDescent))/2+Se.fontBoundingBoxAscent:vt/2+ue*.35;H.fillText(ut,0,Le);let _t=Og(ue),ze=Hg(H.getImageData(0,0,Ft,vt).data,Ft,vt,_t);return ze.rects.length?(dt={key:ie,w:Ft,h:vt,cell:_t,rects:ze.rects,color:V.color,shadow:zg(V.textShadow)},dt):null}function yt(B){let{cell:V,rects:j,shadow:ut,main:ot,shade:Ft}=xt;for(let vt=0;vt<j.length;vt+=1){let Jt=(j[vt].gx+B.dx[vt])*V,ie=(j[vt].gy+B.dy[vt])*V;ot[vt].setAttribute("x",Jt),ot[vt].setAttribute("y",ie),ut&&(Ft[vt].setAttribute("x",Jt+ut.x),Ft[vt].setAttribute("y",ie+ut.y))}}function Ct(){xt.timer&&m(xt.timer),xt.timer=0,xt.svg&&xt.svg.remove(),xt.brand&&xt.brand.classList.remove("is-pixelating"),xt.svg=null,xt.brand=null,xt.main=[],xt.shade=[],xt.rects=[]}function kt(B){if(xt.brand||!l||h()||!u())return;let V=B.querySelector(".brand-word");if(!V)return;let j=K(V);if(!j)return;let ut=B.getBoundingClientRect(),ot=V.getBoundingClientRect(),Ft=s.createElementNS(mf,"svg");Ft.setAttribute("class","brand-pixels"),Ft.setAttribute("aria-hidden","true"),Ft.setAttribute("focusable","false"),Ft.setAttribute("shape-rendering","crispEdges"),Ft.setAttribute("viewBox",`0 0 ${j.w} ${j.h}`),Ft.setAttribute("width",String(j.w)),Ft.setAttribute("height",String(j.h)),Object.assign(Ft.style,{position:"absolute",left:`${Math.round(ot.left-ut.left)}px`,top:`${Math.round(ot.top-ut.top)}px`,pointerEvents:"none",overflow:"visible",color:j.color});let vt=(Jt,ie)=>{let fe=s.createElementNS(mf,"g");for(let H of j.rects){let Se=s.createElementNS(mf,"rect");Se.setAttribute("width",String(j.cell)),Se.setAttribute("height",String(j.cell)),Se.setAttribute("fill",Jt),Se.setAttribute("x",String(H.gx*j.cell)),Se.setAttribute("y",String(H.gy*j.cell)),fe.appendChild(Se),ie.push(Se)}Ft.appendChild(fe)};Object.assign(xt,{brand:B,svg:Ft,tick:0,main:[],shade:[],rects:j.rects,cell:j.cell,shadow:j.shadow}),j.shadow&&vt(j.shadow.color,xt.shade),vt("currentColor",xt.main),B.classList.add("is-pixelating"),B.appendChild(Ft),xt.timer=g(()=>{xt.tick+=1,yt(kg(xt.tick,xt.rects.length,r)),xt.tick>=ou.ticks&&Ct()},ou.intervalMs)}let wt=B=>{if(!p(B)||!l)return;let V=B.target;if(!V||!V.closest)return;let j=V.closest(mE);j&&et(j);let ut=V.closest(".brand");ut&&y(B,ut)&&kt(ut);let ot=V.closest(".button-primary");ot&&!ot.disabled&&y(B,ot)&&!h()&&u()&&n.onPrimaryHover&&n.onPrimaryHover()},zt=B=>{let V=B.target;if(!V||!V.closest)return;let j=V.closest(".brand");j&&kt(j);let ut=O(V);if(ut<0)return;let ot=!0;try{ot=V.matches(":focus-visible")}catch{}ot&&(T=ut,z())},Te=B=>{(O(B.target)>=0||T>=0)&&(T=-1,z())},Gt=()=>{_&&M.cells.length&&L()},Qt=()=>{if(_&&_.parentNode){let B=S();_.parentNode!==B&&B.appendChild(_)}},te={passive:!0};return t.addEventListener("pointermove",Y,te),t.addEventListener("resize",Gt,te),s.addEventListener("pointerover",wt,te),s.addEventListener("focusin",zt,te),s.addEventListener("focusout",Te,te),s.addEventListener("fullscreenchange",Qt,te),a.addEventListener("pointerleave",G,te),s.fonts&&s.fonts.ready&&typeof s.fonts.ready.then=="function"&&s.fonts.ready.then(()=>{let B=s.querySelector(".brand-word");if(B&&l)try{K(B)}catch{}},()=>{}),{get trailActive(){return v&&l&&!h()&&u()},get canvas(){return _},get jittering(){return!!xt.brand},trail:M,dispose(){t.removeEventListener("pointermove",Y),t.removeEventListener("resize",Gt),s.removeEventListener("pointerover",wt),s.removeEventListener("focusin",zt),s.removeEventListener("focusout",Te),s.removeEventListener("fullscreenchange",Qt),a.removeEventListener("pointerleave",G),E&&t.cancelAnimationFrame(E),E=0,M.clear(),_&&_.remove(),_=null,b=null,Ct(),dt=null;for(let B of $)B.style.removeProperty("--row-accent"),B.style.removeProperty("--row-fg"),delete B.dataset.floodKey;$.clear(),F=-1,T=-1,z()}}}async function gE(){let s=window.SabotageStackHost;if(!s||window.__stack3d)return;let t=new URLSearchParams(window.location.search),e=Km(),i=document,n=i.documentElement,r=null,o=null,a=0,l=0,c="",h=null,d=null,f=null,u=null,g=null;function m(){if(i.getElementById("webgl-required"))return;let b=i.createElement("div");b.id="webgl-required",b.setAttribute("role","alert");let E=i.createElement("h1");E.textContent="Sabotage Stack needs WebGL 2";let v=i.createElement("p");v.textContent="Your browser cannot show the 3D world. Turn on hardware acceleration or open the game in a recent Chrome, Firefox, Safari or Edge, then reload.",b.append(E,v),i.body.append(b),n.classList.add("needs-webgl")}let p=Eg(()=>{if(!o)return;let b=o.theme;c=b;try{let E=D0(b,{size:192});F0(i,E),L0(i,E)}catch(E){console.warn("3D icon sprites unavailable",E)}},160);function x(){o&&o.theme!==c&&p.request()}function y(b){if(a=requestAnimationFrame(y),!o||i.hidden){o&&(o.last=0);return}try{o.frame(b,{render:!window.__stack3dNoRender}),l=0,o.theme!==c&&x()}catch(E){l+=1,console.error("3D frame failed",E&&E.stack||E),l>=3&&(console.warn("3D stopped after repeated frame errors."),_(),m())}}function M(){if(!e||o)return!!o;try{r=i.createElement("canvas"),r.id="stage3d",r.setAttribute("aria-hidden","true"),i.body.insertBefore(r,i.body.firstChild),o=new iu({canvas:r,host:s,tier:t.get("tier"),scale:Number(t.get("scale"))||1})}catch(b){return console.warn("3D could not start.",b),r&&r.remove(),r=null,o=null,!1}return s.setActive(!0),u=()=>{!i.hidden&&o&&o.wake()},g=()=>{o&&o.wake()},i.addEventListener("visibilitychange",u),window.addEventListener("resize",g),h=Ag({doc:i,win:window}),d=Dg({doc:i}),f=Gg({doc:i,win:window,hooks:{onVoteHover:b=>{o&&o.setVoteHover(b)},onPrimaryHover:()=>{o&&o.tickPattern()}}}),o.gridTrail=()=>!!(f&&f.trailActive),window.__stack3d=o,cancelAnimationFrame(a),a=requestAnimationFrame(y),!0}function _(){if(cancelAnimationFrame(a),p.cancel(),u&&(i.removeEventListener("visibilitychange",u),u=null),g&&(window.removeEventListener("resize",g),g=null),h&&(h.dispose(),h=null),d&&(d.dispose(),d=null),f&&(f.dispose(),f=null),o)try{o.dispose()}catch{}r&&r.remove(),o=null,r=null,c="",window.__stack3d=null,N0(i),s.setActive(!1),document.documentElement.style.cursor=""}if(s.snapshot=(b,E)=>o?Sg(o,b,E):!1,e){for(let E=0;E<5;E+=1){let v=s.view().theme;if(Ws(v)||(await Zr(v),s.view().theme===v))break}let b=s.view().theme;Ws(b)||await Zr(b)}(!e||!M())&&m(),window.__stack3dBoot={enable:M,disable:_,supported:e}}var Vg=()=>gE().catch(s=>console.warn("3D could not start.",s));document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Vg):Vg();})();
