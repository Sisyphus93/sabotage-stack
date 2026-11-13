/* stack3d-source-hash: 2b9a0bfe1d330b39d32d9d368ccf9953fb4e5b81ba2f07e5780d0f23ee001ce1 mode=min */
(()=>{var vd=0,gh=1,_d=2;var An=1,yd=2,ir=3,Wn=0,Vt=1,ht=2,Rn=0,Xn=1,kt=2,xh=3,vh=4,Md=5;var ds=100,Sd=101,bd=102,Ed=103,wd=104,Td=200,Ad=201,Rd=202,Cd=203,_h=204,yh=205,Pd=206,Id=207,Dd=208,qd=209,Ld=210,Fd=211,Nd=212,Ud=213,Bd=214,Aa=0,Ra=1,Ca=2,Hs=3,Pa=4,Ia=5,Da=6,qa=7,ll=0,Od=1,Hd=2,ln=0,xo=1,vo=2,_o=3,Ki=4,yo=5,fs=6,Ui=7;var Mh=300,ps=301,nr=302,cl=303,hl=304,zs=1e3,sn=1001,La=1002,ni=1003,zd=1004;var Mo=1005;var fi=1006,ul=1007;var ji=1008;var vi=1009,Sh=1010,bh=1011,sr=1012,dl=1013,Qi=1014,Bi=1015,Kt=1016,fl=1017,pl=1018,ms=1020,Eh=35902,wh=35899,Th=1021,Ah=1022,en=1023,yn=1026,Cn=1027,ml=1028,gl=1029,Yn=1030,xl=1031;var vl=1033,So=33776,bo=33777,Eo=33778,wo=33779,_l=35840,yl=35841,Ml=35842,Sl=35843,bl=36196,El=37492,wl=37496,Tl=37488,Al=37489,To=37490,Rl=37491,Cl=37808,Pl=37809,Il=37810,Dl=37811,ql=37812,Ll=37813,Fl=37814,Nl=37815,Ul=37816,Bl=37817,Ol=37818,Hl=37819,zl=37820,kl=37821,Gl=36492,Vl=36494,Wl=36495,Xl=36283,Yl=36284,Ao=36285,Zl=36286;var Ur=2300,Fa=2301,wa=2302,nh=2303,sh=2400,rh=2401,oh=2402;var kd=3200;var Ro=0,Gd=1,Pn="",Tt="srgb",Br="srgb-linear",Or="linear",St="srgb";var Ta=7680;var Vd=519,Wd=512,Xd=513,Yd=514,Rh=515,Zd=516,$d=517,Ch=518,Ph=519,Jd=35044,Oi=35048;var Ih="300 es",Li=2e3,ks=2001;function Zp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function $p(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Hr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kd(){let s=Hr("canvas");return s.style.display="block",s}var Iu={},Gs=null;function Dh(...s){let e="THREE."+s.shift();Gs?Gs("log",e,...s):console.log(e,...s)}function jd(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ke(...s){s=jd(s);let e="THREE."+s.shift();if(Gs)Gs("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function We(...s){s=jd(s);let e="THREE."+s.shift();if(Gs)Gs("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function rs(...s){let e=s.join(" ");e in Iu||(Iu[e]=!0,ke(...s))}function Qd(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var ef={[Aa]:Aa,[Ca]:Da,[Pa]:Pa,[Hs]:Ia,[Ra]:Ra,[Da]:Ca,[qa]:qa,[Ia]:Hs},rn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,e);e.target=null}}},li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Du=1234567,Bs=Math.PI/180,Vs=180/Math.PI;function gs(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(li[s&255]+li[s>>8&255]+li[s>>16&255]+li[s>>24&255]+"-"+li[e&255]+li[e>>8&255]+"-"+li[e>>16&15|64]+li[e>>24&255]+"-"+li[t&63|128]+li[t>>8&255]+"-"+li[t>>16&255]+li[t>>24&255]+li[i&255]+li[i>>8&255]+li[i>>16&255]+li[i>>24&255]).toLowerCase()}function nt(s,e,t){return Math.max(e,Math.min(t,s))}function qh(s,e){return(s%e+e)%e}function Jp(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Kp(s,e,t){return s!==e?(t-s)/(e-s):0}function Lr(s,e,t){return(1-t)*s+t*e}function jp(s,e,t,i){return Lr(s,e,1-Math.exp(-t*i))}function Qp(s,e=1){return e-Math.abs(qh(s,e*2)-e)}function e0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function t0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function i0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function n0(s,e){return s+Math.random()*(e-s)}function s0(s){return s*(.5-Math.random())}function r0(s){s!==void 0&&(Du=s);let e=Du+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function o0(s){return s*Bs}function a0(s){return s*Vs}function l0(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function c0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Lh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function h0(s,e,t,i,n){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(n){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Fh(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function tf(s,e){if(e.constructor===Float32Array)return s;let t=Fh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function nf(s,e){if(e.constructor===Float32Array)return s;let t=Fh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var rr={DEG2RAD:Bs,RAD2DEG:Vs,generateUUID:gs,clamp:nt,euclideanModulo:qh,mapLinear:Jp,inverseLerp:Kp,lerp:Lr,damp:jp,pingpong:Qp,smoothstep:e0,smootherstep:t0,randInt:i0,randFloat:n0,randFloatSpread:s0,seededRandom:r0,degToRad:o0,radToDeg:a0,isPowerOfTwo:l0,ceilPowerOfTwo:c0,floorPowerOfTwo:Lh,setQuaternionFromProperEuler:h0,normalize:nf,denormalize:tf},zh=class zh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*n+e.x,this.y=r*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zh.prototype.isVector2=!0;var ee=zh,Fi=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[o+0],f=r[o+1],g=r[o+2],p=r[o+3];if(u!==p||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*p;m<0&&(d=-d,f=-f,g=-g,p=-p,m=-m);let x=1-a;if(m<.9995){let v=Math.acos(m),M=Math.sin(v);x=Math.sin(x*v)/M,a=Math.sin(a*v)/M,l=l*x+d*a,c=c*x+f*a,h=h*x+g*a,u=u*x+p*a}else{l=l*x+d*a,c=c*x+f*a,h=h*x+g*a,u=u*x+p*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),d=l(i/2),f=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,n=-n,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},kh=class kh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),h=2*(a*t-r*n),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=n+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kh.prototype.isVector3=!0;var P=kh,Dc=new P,qu=new Fi,Gh=class Gh{constructor(e,t,i,n,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c)}set(e,t,i,n,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],p=n[0],m=n[3],x=n[6],v=n[1],M=n[4],y=n[7],S=n[2],E=n[5],_=n[8];return r[0]=o*p+a*v+l*S,r[3]=o*m+a*M+l*E,r[6]=o*x+a*y+l*_,r[1]=c*p+h*v+u*S,r[4]=c*m+h*M+u*E,r[7]=c*x+h*y+u*_,r[2]=d*p+f*v+g*S,r[5]=d*m+f*M+g*E,r[8]=d*x+f*y+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/g;return e[0]=u*p,e[1]=(n*c-h*i)*p,e[2]=(a*i-n*o)*p,e[3]=d*p,e[4]=(h*t-n*l)*p,e[5]=(n*r-a*t)*p,e[6]=f*p,e[7]=(i*l-c*t)*p,e[8]=(o*t-i*r)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qc.makeScale(e,t)),this}rotate(e){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qc.makeRotation(-e)),this}translate(e,t){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gh.prototype.isMatrix3=!0;var Ye=Gh,qc=new Ye,Lu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function u0(){let s={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(n.r=_n(n.r),n.g=_n(n.g),n.b=_n(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(n.r=Os(n.r),n.g=Os(n.g),n.b=Os(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Pn?Or:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Br]:{primaries:e,whitePoint:i,transfer:Or,toXYZ:Lu,fromXYZ:Fu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:i,transfer:St,toXYZ:Lu,fromXYZ:Fu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),s}var ot=u0();function _n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Es,Na=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Es===void 0&&(Es=Hr("canvas")),Es.width=e.width,Es.height=e.height;let n=Es.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Es}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=_n(r[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_n(t[i]/255)*255):t[i]=_n(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},d0=0,Ws=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Lc(n[o].image)):r.push(Lc(n[o]))}else r=Lc(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function Lc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Na.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var f0=0,Fc=new P,pi=class s extends rn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=sn,n=sn,r=fi,o=ji,a=en,l=vi,c=s.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=gs(),this.name="",this.source=new Ws(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zs:e.x=e.x-Math.floor(e.x);break;case sn:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zs:e.y=e.y-Math.floor(e.y);break;case sn:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=Mh;pi.DEFAULT_ANISOTROPY=1;var Vh=class Vh{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],p=l[2],m=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(f+1)/2,S=(x+1)/2,E=(h+d)/4,_=(u+p)/4,b=(g+m)/4;return M>y&&M>S?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=E/i,r=_/i):y>S?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=E/n,r=b/n):S<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(S),i=_/r,n=b/r),this.set(i,n,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-p)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vh.prototype.isVector4=!0;var It=Vh,Ua=class extends rn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new pi({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:fi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ws(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends Ua{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},zr=class extends pi{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ni,this.minFilter=ni,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ba=class extends pi{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ni,this.minFilter=ni,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var al=class al{constructor(e,t,i,n,r,o,a,l,c,h,u,d,f,g,p,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c,h,u,d,f,g,p,m)}set(e,t,i,n,r,o,a,l,c,h,u,d,f,g,p,m){let x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=n,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=f,x[7]=g,x[11]=p,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new al().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/ws.setFromMatrixColumn(e,0).length(),r=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,p=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-p*c,t[9]=-a*l,t[2]=p-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,p=c*u;t[0]=d+p*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=p+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,p=c*u;t[0]=d-p*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=p-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,p=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+p,t[1]=l*u,t[5]=p*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,p=a*c;t[0]=l*h,t[4]=p-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-p*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,p=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+p,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=p*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p0,e,m0)}lookAt(e,t,i){let n=this.elements;return Si.subVectors(e,t),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Fn.crossVectors(i,Si),Fn.lengthSq()===0&&(Math.abs(i.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Fn.crossVectors(i,Si)),Fn.normalize(),$o.crossVectors(Si,Fn),n[0]=Fn.x,n[4]=$o.x,n[8]=Si.x,n[1]=Fn.y,n[5]=$o.y,n[9]=Si.y,n[2]=Fn.z,n[6]=$o.z,n[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],p=i[6],m=i[10],x=i[14],v=i[3],M=i[7],y=i[11],S=i[15],E=n[0],_=n[4],b=n[8],I=n[12],A=n[1],D=n[5],q=n[9],U=n[13],C=n[2],B=n[6],O=n[10],H=n[14],te=n[3],V=n[7],W=n[11],Q=n[15];return r[0]=o*E+a*A+l*C+c*te,r[4]=o*_+a*D+l*B+c*V,r[8]=o*b+a*q+l*O+c*W,r[12]=o*I+a*U+l*H+c*Q,r[1]=h*E+u*A+d*C+f*te,r[5]=h*_+u*D+d*B+f*V,r[9]=h*b+u*q+d*O+f*W,r[13]=h*I+u*U+d*H+f*Q,r[2]=g*E+p*A+m*C+x*te,r[6]=g*_+p*D+m*B+x*V,r[10]=g*b+p*q+m*O+x*W,r[14]=g*I+p*U+m*H+x*Q,r[3]=v*E+M*A+y*C+S*te,r[7]=v*_+M*D+y*B+S*V,r[11]=v*b+M*q+y*O+S*W,r[15]=v*I+M*U+y*H+S*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],p=e[7],m=e[11],x=e[15],v=l*f-c*d,M=a*f-c*u,y=a*d-l*u,S=o*f-c*h,E=o*d-l*h,_=o*u-a*h;return t*(p*v-m*M+x*y)-i*(g*v-m*S+x*E)+n*(g*M-p*S+x*_)-r*(g*y-p*E+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+n*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],p=e[13],m=e[14],x=e[15],v=t*a-i*o,M=t*l-n*o,y=t*c-r*o,S=i*l-n*a,E=i*c-r*a,_=n*c-r*l,b=h*p-u*g,I=h*m-d*g,A=h*x-f*g,D=u*m-d*p,q=u*x-f*p,U=d*x-f*m,C=v*U-M*q+y*D+S*A-E*I+_*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/C;return e[0]=(a*U-l*q+c*D)*B,e[1]=(n*q-i*U-r*D)*B,e[2]=(p*_-m*E+x*S)*B,e[3]=(d*E-u*_-f*S)*B,e[4]=(l*A-o*U-c*I)*B,e[5]=(t*U-n*A+r*I)*B,e[6]=(m*y-g*_-x*M)*B,e[7]=(h*_-d*y+f*M)*B,e[8]=(o*q-a*A+c*b)*B,e[9]=(i*A-t*q-r*b)*B,e[10]=(g*E-p*y+x*v)*B,e[11]=(u*y-h*E-f*v)*B,e[12]=(a*I-o*D-l*b)*B,e[13]=(t*D-i*I+n*b)*B,e[14]=(p*M-g*S-m*v)*B,e[15]=(h*S-u*M+d*v)*B,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,o){return this.set(1,i,r,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,p=o*h,m=o*u,x=a*u,v=l*c,M=l*h,y=l*u,S=i.x,E=i.y,_=i.z;return n[0]=(1-(p+x))*S,n[1]=(f+y)*S,n[2]=(g-M)*S,n[3]=0,n[4]=(f-y)*E,n[5]=(1-(d+x))*E,n[6]=(m+v)*E,n[7]=0,n[8]=(g+M)*_,n[9]=(m-v)*_,n[10]=(1-(d+p))*_,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=ws.set(n[0],n[1],n[2]).length(),a=ws.set(n[4],n[5],n[6]).length(),l=ws.set(n[8],n[9],n[10]).length();r<0&&(o=-o),Vi.copy(this);let c=1/o,h=1/a,u=1/l;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=h,Vi.elements[5]*=h,Vi.elements[6]*=h,Vi.elements[8]*=u,Vi.elements[9]*=u,Vi.elements[10]*=u,t.setFromRotationMatrix(Vi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,n,r,o,a=Li,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n),g,p;if(l)g=r/(o-r),p=o*r/(o-r);else if(a===Li)g=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===ks)g=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,o,a=Li,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n),g,p;if(l)g=1/(o-r),p=o/(o-r);else if(a===Li)g=-2/(o-r),p=-(o+r)/(o-r);else if(a===ks)g=-1/(o-r),p=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};al.prototype.isMatrix4=!0;var ct=al,ws=new P,Vi=new ct,p0=new P(0,0,0),m0=new P(1,1,1),Fn=new P,$o=new P,Si=new P,Nu=new ct,Uu=new Fi,on=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER="XYZ";var Xs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},g0=0,Bu=new P,Ts=new Fi,fn=new ct,Jo=new P,Tr=new P,x0=new P,v0=new Fi,Ou=new P(1,0,0),Hu=new P(0,1,0),zu=new P(0,0,1),ku={type:"added"},_0={type:"removed"},As={type:"childadded",child:null},Nc={type:"childremoved",child:null},Ft=class s extends rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new P,t=new on,i=new Fi,n=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ye}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Ou,e)}rotateY(e){return this.rotateOnAxis(Hu,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ou,e)}translateY(e){return this.translateOnAxis(Hu,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jo.copy(e):Jo.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Tr,Jo,this.up):fn.lookAt(Jo,Tr,this.up),this.quaternion.setFromRotationMatrix(fn),n&&(fn.extractRotation(n.matrixWorld),Ts.setFromRotationMatrix(fn),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ku),As.child=e,this.dispatchEvent(As),As.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_0),Nc.child=e,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ku),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,x0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,v0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ft.DEFAULT_UP=new P(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ae=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},y0={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let p of e.hand.values()){let m=t.getJointPose(p,i),x=this._getHandJoint(c,p);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(y0)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ae;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function Uc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Se=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=ot.workingColorSpace){if(e=qh(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Uc(o,r,e+1/3),this.g=Uc(o,r,e),this.b=Uc(o,r,e-1/3)}return ot.colorSpaceToWorking(this,n),this}setStyle(e,t=Tt){function i(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let i=sf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return ot.workingToColorSpace(ci.copy(this),e),Math.round(nt(ci.r*255,0,255))*65536+Math.round(nt(ci.g*255,0,255))*256+Math.round(nt(ci.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(ci.copy(this),t);let i=ci.r,n=ci.g,r=ci.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(ci.copy(this),t),e.r=ci.r,e.g=ci.g,e.b=ci.b,e}getStyle(e=Tt){ot.workingToColorSpace(ci.copy(this),e);let t=ci.r,i=ci.g,n=ci.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Ko);let i=Lr(Nn.h,Ko.h,t),n=Lr(Nn.s,Ko.s,t),r=Lr(Nn.l,Ko.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ci=new Se;Se.NAMES=sf;var kr=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ei=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wi=new P,pn=new P,Bc=new P,mn=new P,Rs=new P,Cs=new P,Gu=new P,Oc=new P,Hc=new P,zc=new P,kc=new It,Gc=new It,Vc=new It,vn=class s{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Wi.subVectors(e,t),n.cross(Wi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Wi.subVectors(n,t),pn.subVectors(i,t),Bc.subVectors(e,t);let o=Wi.dot(Wi),a=Wi.dot(pn),l=Wi.dot(Bc),c=pn.dot(pn),h=pn.dot(Bc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,i,n,r,o,a,l){return this.getBarycoord(e,t,i,n,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mn.x),l.addScaledVector(o,mn.y),l.addScaledVector(a,mn.z),l)}static getInterpolatedAttribute(e,t,i,n,r,o){return kc.setScalar(0),Gc.setScalar(0),Vc.setScalar(0),kc.fromBufferAttribute(e,t),Gc.fromBufferAttribute(e,i),Vc.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(kc,r.x),o.addScaledVector(Gc,r.y),o.addScaledVector(Vc,r.z),o}static isFrontFacing(e,t,i,n){return Wi.subVectors(i,t),pn.subVectors(e,t),Wi.cross(pn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Wi.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,o,a;Rs.subVectors(n,i),Cs.subVectors(r,i),Oc.subVectors(e,i);let l=Rs.dot(Oc),c=Cs.dot(Oc);if(l<=0&&c<=0)return t.copy(i);Hc.subVectors(e,n);let h=Rs.dot(Hc),u=Cs.dot(Hc);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(Rs,o);zc.subVectors(e,r);let f=Rs.dot(zc),g=Cs.dot(zc);if(g>=0&&f<=g)return t.copy(r);let p=f*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Cs,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Gu.subVectors(r,n),a=(u-h)/(u-h+(f-g)),t.copy(n).addScaledVector(Gu,a);let x=1/(m+p+d);return o=p*x,a=d*x,t.copy(i).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ni=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xi):Xi.fromBufferAttribute(r,o),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jo.copy(i.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}let n=e.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),Qo.subVectors(this.max,Ar),Ps.subVectors(e.a,Ar),Is.subVectors(e.b,Ar),Ds.subVectors(e.c,Ar),Un.subVectors(Is,Ps),Bn.subVectors(Ds,Is),ts.subVectors(Ps,Ds);let t=[0,-Un.z,Un.y,0,-Bn.z,Bn.y,0,-ts.z,ts.y,Un.z,0,-Un.x,Bn.z,0,-Bn.x,ts.z,0,-ts.x,-Un.y,Un.x,0,-Bn.y,Bn.x,0,-ts.y,ts.x,0];return!Wc(t,Ps,Is,Ds,Qo)||(t=[1,0,0,0,1,0,0,0,1],!Wc(t,Ps,Is,Ds,Qo))?!1:(ea.crossVectors(Un,Bn),t=[ea.x,ea.y,ea.z],Wc(t,Ps,Is,Ds,Qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gn=[new P,new P,new P,new P,new P,new P,new P,new P],Xi=new P,jo=new Ni,Ps=new P,Is=new P,Ds=new P,Un=new P,Bn=new P,ts=new P,Ar=new P,Qo=new P,ea=new P,is=new P;function Wc(s,e,t,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){is.fromArray(s,r);let a=n.x*Math.abs(is.x)+n.y*Math.abs(is.y)+n.z*Math.abs(is.z),l=e.dot(is),c=t.dot(is),h=i.dot(is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Zt=new P,ta=new ee,M0=0,zt=class extends rn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jd,this.updateRanges=[],this.gpuType=Bi,this.version=0,this._normalizationScale=e!==void 0?Fh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):tf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):nf(e,this.array)}};var Gr=class extends zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Vr=class extends zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ve=class extends zt{constructor(e,t,i){super(new Float32Array(e),t,i)}},S0=new Ni,Rr=new P,Xc=new P,an=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):S0.setFromPoints(e).getCenter(i);let n=0;for(let r=0,o=e.length;r<o;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);let t=Rr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Rr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(Xc)),this.expandByPoint(Rr.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},b0=0,qi=new ct,Yc=new Ft,qs=new P,bi=new Ni,Cr=new Ni,ii=new P,pt=class s extends rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zp(e)?Vr:Gr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qi.makeRotationFromQuaternion(e),this.applyMatrix4(qi),this}rotateX(e){return qi.makeRotationX(e),this.applyMatrix4(qi),this}rotateY(e){return qi.makeRotationY(e),this.applyMatrix4(qi),this}rotateZ(e){return qi.makeRotationZ(e),this.applyMatrix4(qi),this}translate(e,t,i){return qi.makeTranslation(e,t,i),this.applyMatrix4(qi),this}scale(e,t,i){return qi.makeScale(e,t,i),this.applyMatrix4(qi),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ve(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];bi.setFromBufferAttribute(r),this.morphTargetsRelative?(ii.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(ii),ii.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(ii)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(bi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(ii.addVectors(bi.min,Cr.min),bi.expandByPoint(ii),ii.addVectors(bi.max,Cr.max),bi.expandByPoint(ii)):(bi.expandByPoint(Cr.min),bi.expandByPoint(Cr.max))}bi.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)ii.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(ii));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ii.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(e,c),ii.add(qs)),n=Math.max(n,i.distanceToSquared(ii))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new zt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let I=0;I<i.count;I++)a[I]=new P,l[I]=new P;let h=new P,u=new P,d=new P,f=new ee,g=new ee,p=new ee,m=new P,x=new P;function v(I,A,D){c[I]=c[A]=c[D]=1,h.fromBufferAttribute(i,I),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,D),f.fromBufferAttribute(r,I),g.fromBufferAttribute(r,A),p.fromBufferAttribute(r,D),u.sub(h),d.sub(h),g.sub(f),p.sub(f);let q=1/(g.x*p.y-p.x*g.y);isFinite(q)&&(m.copy(u).multiplyScalar(p.y).addScaledVector(d,-g.y).multiplyScalar(q),x.copy(d).multiplyScalar(g.x).addScaledVector(u,-p.x).multiplyScalar(q),a[I].add(m),a[A].add(m),a[D].add(m),l[I].add(x),l[A].add(x),l[D].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,A=M.length;I<A;++I){let D=M[I],q=D.start,U=D.count;for(let C=q,B=q+U;C<B;C+=3)v(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let y=new P,S=new P,E=new P,_=new P;function b(I){E.fromBufferAttribute(n,I),_.copy(E);let A=a[I];y.copy(A),y.sub(E.multiplyScalar(E.dot(A))).normalize(),S.crossVectors(_,A);let q=S.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,q)}for(let I=0,A=i.count;I<A;++I)c[I]&&b(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ii.fromBufferAttribute(e,t),ii.normalize(),e.setXYZ(t,ii.x,ii.y,ii.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?f=l[p]*a.data.stride+a.offset:f=l[p]*h;for(let x=0;x<h;x++)d[g++]=c[f++]}return new zt(d,h,u)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Zc=new P,E0=new P,w0=new Ye,di=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Zc.subVectors(i,t).cross(E0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(Zc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||w0.getNormalMatrix(e),n=this.coplanarPoint(Zc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},T0=0,Zi=class extends rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=Xn,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=yh,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=n(e.textures),o=n(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new di().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ee().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ee().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var xn=new P,$c=new P,ia=new P,na=new P,os=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){$c.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),na.copy(this.origin).sub($c);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ia),a=na.dot(this.direction),l=-na.dot(ia),c=na.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let p=1/h;u*=p,d*=p,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy($c).addScaledVector(ia,d),f}intersectSphere(e,t){if(e.radius<0)return null;xn.subVectors(e.center,this.origin);let i=xn.dot(this.direction),n=xn.dot(xn)-i*i,r=e.radius*e.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,i,n,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,g=t.x-o.x,p=t.y-o.y,m=t.z-o.z,x=i.x-o.x,v=i.y-o.y,M=i.z-o.z,y=Math.abs(l),S=Math.abs(c),E=Math.abs(h),_,b,I,A,D,q,U,C,B,O,H,te;if(y>=S&&y>=E?(I=l,q=u,B=g,te=x,l>=0?(_=c,b=h,A=d,D=f,U=p,C=m,O=v,H=M):(_=h,b=c,A=f,D=d,U=m,C=p,O=M,H=v)):S>=E?(I=c,q=d,B=p,te=v,c>=0?(_=h,b=l,A=f,D=u,U=m,C=g,O=M,H=x):(_=l,b=h,A=u,D=f,U=g,C=m,O=x,H=M)):(I=h,q=f,B=m,te=M,h>=0?(_=l,b=c,A=u,D=d,U=g,C=p,O=x,H=v):(_=c,b=l,A=d,D=u,U=p,C=g,O=v,H=x)),I===0)return null;let V=_/I,W=b/I,Q=1/I,Re=A-V*q,He=D-W*q,Z=U-V*B,ge=C-W*B,Ce=O-V*te,Le=H-W*te,he=Ce*ge-Le*Z,Be=Re*Le-He*Ce,At=Z*He-ge*Re;if(n){if(he<0||Be<0||At<0)return null}else if((he<0||Be<0||At<0)&&(he>0||Be>0||At>0))return null;let Oe=he+Be+At;if(Oe===0)return null;let tt=Q*(he*q+Be*B+At*te);return(Oe>0?tt<0:tt>0)?null:this.at(tt/Oe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mt=class extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vu=new ct,ns=new os,sa=new an,Wu=new P,ra=new P,oa=new P,aa=new P,Jc=new P,la=new P,Xu=new P,ca=new P,ne=class extends Ft{constructor(e=new pt,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let a=this.morphTargetInfluences;if(r&&a){la.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Jc.fromBufferAttribute(u,e),o?la.addScaledVector(Jc,h):la.addScaledVector(Jc.sub(t),h))}t.add(la)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(sa.containsPoint(ns.origin)===!1&&(ns.intersectSphere(sa,Wu)===null||ns.origin.distanceToSquared(Wu)>(e.far-e.near)**2))&&(Vu.copy(r).invert(),ns.copy(e.ray).applyMatrix4(Vu),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,p=d.length;g<p;g++){let m=d[g],x=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,S=M;y<S;y+=3){let E=a.getX(y),_=a.getX(y+1),b=a.getX(y+2);n=ha(this,x,e,i,c,h,u,E,_,b),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),p=Math.min(a.count,f.start+f.count);for(let m=g,x=p;m<x;m+=3){let v=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);n=ha(this,o,e,i,c,h,u,v,M,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,p=d.length;g<p;g++){let m=d[g],x=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,S=M;y<S;y+=3){let E=y,_=y+1,b=y+2;n=ha(this,x,e,i,c,h,u,E,_,b),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),p=Math.min(l.count,f.start+f.count);for(let m=g,x=p;m<x;m+=3){let v=m,M=m+1,y=m+2;n=ha(this,o,e,i,c,h,u,v,M,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function A0(s,e,t,i,n,r,o,a){let l;if(e.side===Vt?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,e.side===Wn,a),l===null)return null;ca.copy(a),ca.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ca);return c<t.near||c>t.far?null:{distance:c,point:ca.clone(),object:s}}function ha(s,e,t,i,n,r,o,a,l,c){s.getVertexPosition(a,ra),s.getVertexPosition(l,oa),s.getVertexPosition(c,aa);let h=A0(s,e,t,i,ra,oa,aa,Xu);if(h){let u=new P;vn.getBarycoord(Xu,ra,oa,aa,u),n&&(h.uv=vn.getInterpolatedAttribute(n,a,l,c,u,new ee)),r&&(h.uv1=vn.getInterpolatedAttribute(r,a,l,c,u,new ee)),o&&(h.normal=vn.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};vn.getNormal(ra,oa,aa,d.normal),h.face=d,h.barycoord=u}return h}var Wr=class extends pi{constructor(e=null,t=1,i=1,n,r,o,a,l,c=ni,h=ni,u,d){super(null,o,a,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zs=class extends zt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ls=new ct,Yu=new ct,ua=[],Zu=new Ni,R0=new ct,Pr=new ne,Ir=new an,wi=class extends ne{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,R0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ls),Zu.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Zu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ls),Ir.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(Ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(i),e.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Ls),Yu.multiplyMatrices(i,Ls),Pr.matrixWorld=Yu,Pr.raycast(e,ua);for(let o=0,a=ua.length;o<a;o++){let l=ua[o];l.instanceId=r,l.object=this,t.push(l)}ua.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wr(new Float32Array(n*this.count),n,this.count,ml,Bi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ss=new an,C0=new ee(.5,.5),da=new P,Hn=class{constructor(e=new di,t=new di,i=new di,n=new di,r=new di,o=new di){this.planes=[e,t,i,n,r,o]}set(e,t,i,n,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li,i=!1){let n=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],p=r[9],m=r[10],x=r[11],v=r[12],M=r[13],y=r[14],S=r[15];if(n[0].setComponents(c-o,f-h,x-g,S-v).normalize(),n[1].setComponents(c+o,f+h,x+g,S+v).normalize(),n[2].setComponents(c+a,f+u,x+p,S+M).normalize(),n[3].setComponents(c-a,f-u,x-p,S-M).normalize(),i)n[4].setComponents(l,d,m,y).normalize(),n[5].setComponents(c-l,f-d,x-m,S-y).normalize();else if(n[4].setComponents(c-l,f-d,x-m,S-y).normalize(),t===Li)n[5].setComponents(c+l,f+d,x+m,S+y).normalize();else if(t===ks)n[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);let t=C0.distanceTo(e.center);return ss.radius=.7071067811865476+t,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(da.x=n.normal.x>0?e.max.x:e.min.x,da.y=n.normal.y>0?e.max.y:e.min.y,da.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$u=new ct,Oa=class s{constructor(){this.coordinateSystem=Li,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];$u.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new Hn),i[n].setFromProjectionMatrix($u,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new Hn),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new s().copy(this)}};var $i=class extends Zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ha=new P,za=new P,Ju=new ct,Dr=new os,fa=new an,Kc=new P,Ku=new P,$s=class extends Ft{constructor(e=new pt,t=new $i){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Ha.fromBufferAttribute(t,n-1),za.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Ha.distanceTo(za);e.setAttribute("lineDistance",new Ve(i,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(n),fa.radius+=r,e.ray.intersectsSphere(fa)===!1)return;Ju.copy(n).invert(),Dr.copy(e.ray).applyMatrix4(Ju);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let p=f,m=g-1;p<m;p+=c){let x=h.getX(p),v=h.getX(p+1),M=pa(this,e,Dr,l,x,v,p);M&&t.push(M)}if(this.isLineLoop){let p=h.getX(g-1),m=h.getX(f),x=pa(this,e,Dr,l,p,m,g-1);x&&t.push(x)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let p=f,m=g-1;p<m;p+=c){let x=pa(this,e,Dr,l,p,p+1,p);x&&t.push(x)}if(this.isLineLoop){let p=pa(this,e,Dr,l,g-1,f,g-1);p&&t.push(p)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pa(s,e,t,i,n,r,o){let a=s.geometry.attributes.position;if(Ha.fromBufferAttribute(a,n),za.fromBufferAttribute(a,r),t.distanceSqToSegment(Ha,za,Kc,Ku)>i)return;Kc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Kc);if(!(c<e.near||c>e.far))return{distance:c,point:Ku.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var ju=new P,Qu=new P,Mn=class extends $s{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)ju.fromBufferAttribute(t,n),Qu.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+ju.distanceTo(Qu);e.setAttribute("lineDistance",new Ve(i,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ka=class extends Zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ed=new ct,ah=new os,ma=new an,ga=new P,as=class extends Ft{constructor(e=new pt,t=new ka){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(n),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;ed.copy(n).invert(),ah.copy(e.ray).applyMatrix4(ed);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,p=f;g<p;g++){let m=c.getX(g);ga.fromBufferAttribute(u,m),td(ga,m,l,n,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,p=f;g<p;g++)ga.fromBufferAttribute(u,g),td(ga,g,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function td(s,e,t,i,n,r,o){let a=ah.distanceSqToPoint(s);if(a<t){let l=new P;ah.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Xr=class extends pi{constructor(e=[],t=ps,i,n,r,o,a,l,c,h){super(e,t,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ri=class extends pi{constructor(e,t,i,n,r,o,a,l,c){super(e,t,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Sn=class extends pi{constructor(e,t,i=Qi,n,r,o,a=ni,l=ni,c,h=yn,u=1){if(h!==yn&&h!==Cn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ws(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Yr=class extends Sn{constructor(e,t=Qi,i=ps,n,r,o=ni,a=ni,l,c=yn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Zr=class extends pi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},yt=class s extends pt{constructor(e=1,t=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(u,2));function g(p,m,x,v,M,y,S,E,_,b,I){let A=y/_,D=S/b,q=y/2,U=S/2,C=E/2,B=_+1,O=b+1,H=0,te=0,V=new P;for(let W=0;W<O;W++){let Q=W*D-U;for(let Re=0;Re<B;Re++){let He=Re*A-q;V[p]=He*v,V[m]=Q*M,V[x]=C,c.push(V.x,V.y,V.z),V[p]=0,V[m]=0,V[x]=E>0?1:-1,h.push(V.x,V.y,V.z),u.push(Re/_),u.push(1-W/b),H+=1}}for(let W=0;W<b;W++)for(let Q=0;Q<_;Q++){let Re=d+Q+B*W,He=d+Q+B*(W+1),Z=d+(Q+1)+B*(W+1),ge=d+(Q+1)+B*W;l.push(Re,He,ge),l.push(He,Z,ge),te+=6}a.addGroup(f,te,I),f+=te,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},bn=class s extends pt{constructor(e=1,t=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=i*2+r,p=n+1,m=new P,x=new P;for(let v=0;v<=g;v++){let M=0,y=0,S=0,E=0;if(v<=i){let I=v/i,A=I*Math.PI/2;y=-h-e*Math.cos(A),S=e*Math.sin(A),E=-e*Math.cos(A),M=I*u}else if(v<=i+r){let I=(v-i)/r;y=-h+I*t,S=e,E=0,M=u+I*d}else{let I=(v-i-r)/i,A=I*Math.PI/2;y=h+e*Math.sin(A),S=e*Math.cos(A),E=e*Math.sin(A),M=u+d+I*u}let _=Math.max(0,Math.min(1,M/f)),b=0;v===0?b=.5/n:v===g&&(b=-.5/n);for(let I=0;I<=n;I++){let A=I/n,D=A*Math.PI*2,q=Math.sin(D),U=Math.cos(D);x.x=-S*U,x.y=y,x.z=S*q,a.push(x.x,x.y,x.z),m.set(-S*U,E,S*q),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+b,_)}if(v>0){let I=(v-1)*p;for(let A=0;A<n;A++){let D=I+A,q=I+A+1,U=v*p+A,C=v*p+A+1;o.push(D,q,U),o.push(q,C,U)}}}this.setIndex(o),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},mi=class s extends pt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new ee;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ve(o,3)),this.setAttribute("normal",new Ve(a,3)),this.setAttribute("uv",new Ve(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},gt=class s extends pt{constructor(e=1,t=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,p=[],m=i/2,x=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(d,3)),this.setAttribute("uv",new Ve(f,2));function v(){let y=new P,S=new P,E=0,_=(t-e)/i;for(let b=0;b<=r;b++){let I=[],A=b/r,D=A*(t-e)+e;for(let q=0;q<=n;q++){let U=q/n,C=U*l+a,B=Math.sin(C),O=Math.cos(C);S.x=D*B,S.y=-A*i+m,S.z=D*O,u.push(S.x,S.y,S.z),y.set(B,_,O).normalize(),d.push(y.x,y.y,y.z),f.push(U,1-A),I.push(g++)}p.push(I)}for(let b=0;b<n;b++)for(let I=0;I<r;I++){let A=p[I][b],D=p[I+1][b],q=p[I+1][b+1],U=p[I][b+1];(e>0||I!==0)&&(h.push(A,D,U),E+=3),(t>0||I!==r-1)&&(h.push(D,q,U),E+=3)}c.addGroup(x,E,0),x+=E}function M(y){let S=g,E=new ee,_=new P,b=0,I=y===!0?e:t,A=y===!0?1:-1;for(let q=1;q<=n;q++)u.push(0,m*A,0),d.push(0,A,0),f.push(.5,.5),g++;let D=g;for(let q=0;q<=n;q++){let C=q/n*l+a,B=Math.cos(C),O=Math.sin(C);_.x=I*O,_.y=m*A,_.z=I*B,u.push(_.x,_.y,_.z),d.push(0,A,0),E.x=B*.5+.5,E.y=O*.5*A+.5,f.push(E.x,E.y),g++}for(let q=0;q<n;q++){let U=S+q,C=D+q;y===!0?h.push(C,C+1,U):h.push(C+1,C,U),b+=3}c.addGroup(x,b,y===!0?1:2),x+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Jt=class s extends gt{constructor(e=1,t=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$r=class s extends pt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Ve(r,3)),this.setAttribute("normal",new Ve(r.slice(),3)),this.setAttribute("uv",new Ve(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new P,y=new P,S=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],M),f(t[E+1],y),f(t[E+2],S),l(M,y,S,v)}function l(v,M,y,S){let E=S+1,_=[];for(let b=0;b<=E;b++){_[b]=[];let I=v.clone().lerp(y,b/E),A=M.clone().lerp(y,b/E),D=E-b;for(let q=0;q<=D;q++)q===0&&b===E?_[b][q]=I:_[b][q]=I.clone().lerp(A,q/D)}for(let b=0;b<E;b++)for(let I=0;I<2*(E-b)-1;I++){let A=Math.floor(I/2);I%2===0?(d(_[b][A+1]),d(_[b+1][A]),d(_[b][A])):(d(_[b][A+1]),d(_[b+1][A+1]),d(_[b+1][A]))}}function c(v){let M=new P;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(v),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){let v=new P;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let y=m(v)/2/Math.PI+.5,S=x(v)/Math.PI+.5;o.push(y,1-S)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let M=o[v+0],y=o[v+2],S=o[v+4],E=Math.max(M,y,S),_=Math.min(M,y,S);E>.9&&_<.1&&(M<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),S<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,M){let y=v*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function g(){let v=new P,M=new P,y=new P,S=new P,E=new ee,_=new ee,b=new ee;for(let I=0,A=0;I<r.length;I+=9,A+=6){v.set(r[I+0],r[I+1],r[I+2]),M.set(r[I+3],r[I+4],r[I+5]),y.set(r[I+6],r[I+7],r[I+8]),E.set(o[A+0],o[A+1]),_.set(o[A+2],o[A+3]),b.set(o[A+4],o[A+5]),S.copy(v).add(M).add(y).divideScalar(3);let D=m(S);p(E,A+0,v,D),p(_,A+2,M,D),p(b,A+4,y,D)}}function p(v,M,y,S){S<0&&v.x===1&&(o[M]=v.x-1),y.x===0&&y.z===0&&(o[M]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function x(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var xa=new P,va=new P,jc=new P,_a=new vn,zn=class extends pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),r=Math.cos(Bs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d=new Map,f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:p,b:m,c:x}=_a;if(p.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),x.fromBufferAttribute(a,c[2]),_a.getNormal(jc),u[0]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,u[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,u[2]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){let M=(v+1)%3,y=u[v],S=u[M],E=_a[h[v]],_=_a[h[M]],b=`${y}_${S}`,I=`${S}_${y}`,A=d.get(I);A?(jc.dot(A.normal)<=r&&(f.push(E.x,E.y,E.z),f.push(_.x,_.y,_.z)),d.set(I,null)):d.has(b)||d.set(b,{index0:c[v],index1:c[M],normal:jc.clone()})}}for(let g of d.values())if(g){let{index0:p,index1:m}=g;xa.fromBufferAttribute(a,p),va.fromBufferAttribute(a,m),f.push(xa.x,xa.y,xa.z),f.push(va.x,va.y,va.z)}this.setAttribute("position",new Ve(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],d=i[n+1]-h,f=(o-h)/d;return(n+f)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=t||(o.isVector2?new ee:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,n=[],r=[],o=[],a=new P,l=new ct;for(let f=0;f<=e;f++){let g=f/e;n[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(nt(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(n[f],r[f])}if(t===!0){let f=Math.acos(nt(r[0].dot(r[e]),-1,1));f/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Js=class extends Ti{constructor(e=0,t=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ee){let i=t,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ga=class extends Js{constructor(e,t,i,n,r,o){super(e,t,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Nh(){let s=0,e=0,t=0,i=0;function n(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,n(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+i*a}}}var id=new P,nd=new P,Qc=new Nh,eh=new Nh,th=new Nh,Ks=class extends Ti{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new P){let i=t,n=this.points,r=n.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(nd.subVectors(n[0],n[1]).add(n[0]),c=nd);let u=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(id.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=id),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);p<1e-4&&(p=1),g<1e-4&&(g=p),m<1e-4&&(m=p),Qc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,p,m),eh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,p,m),th.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,p,m)}else this.curveType==="catmullrom"&&(Qc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),eh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),th.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Qc.calc(l),eh.calc(l),th.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new P().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function sd(s,e,t,i,n){let r=(i-e)*.5,o=(n-t)*.5,a=s*s,l=s*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*s+t}function P0(s,e){let t=1-s;return t*t*e}function I0(s,e){return 2*(1-s)*s*e}function D0(s,e){return s*s*e}function Fr(s,e,t,i){return P0(s,e)+I0(s,t)+D0(s,i)}function q0(s,e){let t=1-s;return t*t*t*e}function L0(s,e){let t=1-s;return 3*t*t*s*e}function F0(s,e){return 3*(1-s)*s*s*e}function N0(s,e){return s*s*s*e}function Nr(s,e,t,i,n){return q0(s,e)+L0(s,t)+F0(s,i)+N0(s,n)}var Jr=class extends Ti{constructor(e=new ee,t=new ee,i=new ee,n=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ee){let i=t,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Nr(e,n.x,r.x,o.x,a.x),Nr(e,n.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends Ti{constructor(e=new P,t=new P,i=new P,n=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new P){let i=t,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Nr(e,n.x,r.x,o.x,a.x),Nr(e,n.y,r.y,o.y,a.y),Nr(e,n.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Kr=class extends Ti{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends Ti{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jr=class extends Ti{constructor(e=new ee,t=new ee,i=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ee){let i=t,n=this.v0,r=this.v1,o=this.v2;return i.set(Fr(e,n.x,r.x,o.x),Fr(e,n.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qr=class extends Ti{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,n=this.v0,r=this.v1,o=this.v2;return i.set(Fr(e,n.x,r.x,o.x),Fr(e,n.y,r.y,o.y),Fr(e,n.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends Ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){let i=t,n=this.points,r=(n.length-1)*e,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(sd(a,l.x,c.x,h.x,u.x),sd(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new ee().fromArray(n))}return this}},Xa=Object.freeze({__proto__:null,ArcCurve:Ga,CatmullRomCurve3:Ks,CubicBezierCurve:Jr,CubicBezierCurve3:Va,EllipseCurve:Js,LineCurve:Kr,LineCurve3:Wa,QuadraticBezierCurve:jr,QuadraticBezierCurve3:Qr,SplineCurve:eo}),Ya=class extends Ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xa[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let o=r[n],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Xa[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},ls=class extends Ya{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Kr(this.currentPoint.clone(),new ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new jr(this.currentPoint.clone(),new ee(e,t),new ee(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,o){let a=new Jr(this.currentPoint.clone(),new ee(e,t),new ee(i,n),new ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new eo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,n,r,o),this}absarc(e,t,i,n,r,o){return this.absellipse(e,t,i,i,n,r,o),this}ellipse(e,t,i,n,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,r,o,a,l),this}absellipse(e,t,i,n,r,o,a,l){let c=new Js(e,t,i,n,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ji=class extends ls{constructor(e){super(e),this.uuid=gs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new ls().fromJSON(n))}return this}};function U0(s,e,t=2){let i=e&&e.length,n=i?e[0]*t:s.length,r=rf(s,0,n,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=k0(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,u=l;for(let d=t;d<n;d+=t){let f=s[d],g=s[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return to(r,o,t,a,l,c,0),o}function rf(s,e,t,i,n){let r;if(n===Q0(s,e,t,i)>0)for(let o=e;o<t;o+=i)r=rd(o/i|0,s[o],s[o+1],r);else for(let o=t-i;o>=e;o-=i)r=rd(o/i|0,s[o],s[o+1],r);return r&&js(r,r.next)&&(no(r),r=r.next),r}function cs(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(js(t,t.next)||Ht(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function to(s,e,t,i,n,r,o){if(!s)return;!o&&r&&Y0(s,i,n,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?O0(s,i,n,r):B0(s)){e.push(l.i,s.i,c.i),no(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=H0(cs(s),e),to(s,e,t,i,n,r,2)):o===2&&z0(s,e,t,i,n,r):to(cs(s),e,t,i,n,r,1);break}}}function B0(s){let e=s.prev,t=s,i=s.next;if(Ht(e,t,i)>=0)return!1;let n=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(n,r,o),u=Math.min(a,l,c),d=Math.max(n,r,o),f=Math.max(a,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&qr(n,a,r,l,o,c,g.x,g.y)&&Ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function O0(s,e,t,i){let n=s.prev,r=s,o=s.next;if(Ht(n,r,o)>=0)return!1;let a=n.x,l=r.x,c=o.x,h=n.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),p=Math.max(a,l,c),m=Math.max(h,u,d),x=lh(f,g,e,t,i),v=lh(p,m,e,t,i),M=s.prevZ,y=s.nextZ;for(;M&&M.z>=x&&y&&y.z<=v;){if(M.x>=f&&M.x<=p&&M.y>=g&&M.y<=m&&M!==n&&M!==o&&qr(a,h,l,u,c,d,M.x,M.y)&&Ht(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=p&&y.y>=g&&y.y<=m&&y!==n&&y!==o&&qr(a,h,l,u,c,d,y.x,y.y)&&Ht(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=x;){if(M.x>=f&&M.x<=p&&M.y>=g&&M.y<=m&&M!==n&&M!==o&&qr(a,h,l,u,c,d,M.x,M.y)&&Ht(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=p&&y.y>=g&&y.y<=m&&y!==n&&y!==o&&qr(a,h,l,u,c,d,y.x,y.y)&&Ht(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function H0(s,e){let t=s;do{let i=t.prev,n=t.next.next;!js(i,n)&&af(i,t,t.next,n)&&io(i,n)&&io(n,i)&&(e.push(i.i,t.i,n.i),no(t),no(t.next),t=s=n),t=t.next}while(t!==s);return cs(t)}function z0(s,e,t,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&J0(o,a)){let l=lf(o,a);o=cs(o,o.next),l=cs(l,l.next),to(o,e,t,i,n,r,0),to(l,e,t,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function k0(s,e,t,i){let n=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:s.length,c=rf(s,a,l,i,!1);c===c.next&&(c.steiner=!0),n.push($0(c))}n.sort(G0);for(let r=0;r<n.length;r++)t=V0(n[r],t);return t}function G0(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let i=(s.next.y-s.y)/(s.next.x-s.x),n=(e.next.y-e.y)/(e.next.x-e.x);t=i-n}return t}function V0(s,e){let t=W0(s,e);if(!t)return e;let i=lf(t,s);return cs(i,i.next),cs(t,t.next)}function W0(s,e){let t=e,i=s.x,n=s.y,r=-1/0,o;if(js(s,t))return t;do{if(js(s,t.next))return t.next;if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){let u=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&of(n<c?i:r,n,l,c,n<c?r:i,n,t.x,t.y)){let u=Math.abs(n-t.y)/(i-t.x);io(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&X0(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function X0(s,e){return Ht(s.prev,s,e.prev)<0&&Ht(e.next,s,s.next)<0}function Y0(s,e,t,i){let n=s;do n.z===0&&(n.z=lh(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Z0(n)}function Z0(s){let e,t=1;do{let i=s,n;s=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(n=i,i=i.nextZ,a--):(n=o,o=o.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=o}r.nextZ=null,t*=2}while(e>1);return s}function lh(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function $0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function of(s,e,t,i,n,r,o,a){return(n-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(n-o)*(i-a)}function qr(s,e,t,i,n,r,o,a){return!(s===o&&e===a)&&of(s,e,t,i,n,r,o,a)}function J0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!K0(s,e)&&(io(s,e)&&io(e,s)&&j0(s,e)&&(Ht(s.prev,s,e.prev)||Ht(s,e.prev,e))||js(s,e)&&Ht(s.prev,s,s.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function js(s,e){return s.x===e.x&&s.y===e.y}function af(s,e,t,i){let n=Ma(Ht(s,e,t)),r=Ma(Ht(s,e,i)),o=Ma(Ht(t,i,s)),a=Ma(Ht(t,i,e));return!!(n!==r&&o!==a||n===0&&ya(s,t,e)||r===0&&ya(s,i,e)||o===0&&ya(t,s,i)||a===0&&ya(t,e,i))}function ya(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ma(s){return s>0?1:s<0?-1:0}function K0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&af(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function io(s,e){return Ht(s.prev,s,s.next)<0?Ht(s,e,s.next)>=0&&Ht(s,s.prev,e)>=0:Ht(s,e,s.prev)<0||Ht(s,s.next,e)<0}function j0(s,e){let t=s,i=!1,n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function lf(s,e){let t=ch(s.i,s.x,s.y),i=ch(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function rd(s,e,t,i){let n=ch(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function no(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ch(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Q0(s,e,t,i){let n=0;for(let r=e,o=t-i;r<t;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}var hh=class{static triangulate(e,t,i=2){return U0(e,t,i)}},Yi=class s{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];od(e),ad(i,e);let o=e.length;t.forEach(od);for(let l=0;l<t.length;l++)n.push(o),o+=t[l].length,ad(i,t[l]);let a=hh.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function od(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ad(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var En=class s extends pt{constructor(e=new Ji([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ve(n,3)),this.setAttribute("uv",new Ve(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:em,M,y=!1,S,E,_,b;if(x){M=x.getSpacedPoints(h),y=!0,d=!1;let K=x.isCatmullRomCurve3?x.closed:!1;S=x.computeFrenetFrames(h,K),E=new P,_=new P,b=new P}d||(m=0,f=0,g=0,p=0);let I=a.extractPoints(c),A=I.shape,D=I.holes;if(!Yi.isClockWise(A)){A=A.reverse();for(let K=0,ce=D.length;K<ce;K++){let ue=D[K];Yi.isClockWise(ue)&&(D[K]=ue.reverse())}}function U(K){let ue=10000000000000001e-36,Ae=K[0];for(let Me=1;Me<=K.length;Me++){let Je=Me%K.length,Fe=K[Je],lt=Fe.x-Ae.x,ut=Fe.y-Ae.y,Mt=lt*lt+ut*ut,N=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(Ae.x),Math.abs(Ae.y)),Xt=ue*N*N;if(Mt<=Xt){K.splice(Je,1),Me--;continue}Ae=Fe}}U(A),D.forEach(U);let C=D.length,B=A;for(let K=0;K<C;K++){let ce=D[K];A=A.concat(ce)}function O(K,ce,ue){return ce||We("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(ce,ue)}let H=A.length;function te(K,ce,ue){let Ae,Me,Je,Fe=K.x-ce.x,lt=K.y-ce.y,ut=ue.x-K.x,Mt=ue.y-K.y,N=Fe*Fe+lt*lt,Xt=Fe*Mt-lt*ut;if(Math.abs(Xt)>Number.EPSILON){let rt=Math.sqrt(N),Ct=Math.sqrt(ut*ut+Mt*Mt),ve=ce.x-lt/rt,Gt=ce.y+Fe/rt,Ge=ue.x-Mt/Ct,Xe=ue.y+ut/Ct,R=((Ge-ve)*Mt-(Xe-Gt)*ut)/(Fe*Mt-lt*ut);Ae=ve+Fe*R-K.x,Me=Gt+lt*R-K.y;let w=Ae*Ae+Me*Me;if(w<=2)return new ee(Ae,Me);Je=Math.sqrt(w/2)}else{let rt=!1;Fe>Number.EPSILON?ut>Number.EPSILON&&(rt=!0):Fe<-Number.EPSILON?ut<-Number.EPSILON&&(rt=!0):Math.sign(lt)===Math.sign(Mt)&&(rt=!0),rt?(Ae=-lt,Me=Fe,Je=Math.sqrt(N)):(Ae=Fe,Me=lt,Je=Math.sqrt(N/2))}return new ee(Ae/Je,Me/Je)}let V=[];for(let K=0,ce=B.length,ue=ce-1,Ae=K+1;K<ce;K++,ue++,Ae++)ue===ce&&(ue=0),Ae===ce&&(Ae=0),V[K]=te(B[K],B[ue],B[Ae]);let W=[],Q,Re=V.concat();for(let K=0,ce=C;K<ce;K++){let ue=D[K];Q=[];for(let Ae=0,Me=ue.length,Je=Me-1,Fe=Ae+1;Ae<Me;Ae++,Je++,Fe++)Je===Me&&(Je=0),Fe===Me&&(Fe=0),Q[Ae]=te(ue[Ae],ue[Je],ue[Fe]);W.push(Q),Re=Re.concat(Q)}let He;if(m===0)He=Yi.triangulateShape(B,D);else{let K=[],ce=[];for(let ue=0;ue<m;ue++){let Ae=ue/m,Me=f*Math.cos(Ae*Math.PI/2),Je=g*Math.sin(Ae*Math.PI/2)+p;for(let Fe=0,lt=B.length;Fe<lt;Fe++){let ut=O(B[Fe],V[Fe],Je);Be(ut.x,ut.y,-Me),Ae===0&&K.push(ut)}for(let Fe=0,lt=C;Fe<lt;Fe++){let ut=D[Fe];Q=W[Fe];let Mt=[];for(let N=0,Xt=ut.length;N<Xt;N++){let rt=O(ut[N],Q[N],Je);Be(rt.x,rt.y,-Me),Ae===0&&Mt.push(rt)}Ae===0&&ce.push(Mt)}}He=Yi.triangulateShape(K,ce)}let Z=He.length,ge=g+p;for(let K=0;K<H;K++){let ce=d?O(A[K],Re[K],ge):A[K];y?(_.copy(S.normals[0]).multiplyScalar(ce.x),E.copy(S.binormals[0]).multiplyScalar(ce.y),b.copy(M[0]).add(_).add(E),Be(b.x,b.y,b.z)):Be(ce.x,ce.y,0)}for(let K=1;K<=h;K++)for(let ce=0;ce<H;ce++){let ue=d?O(A[ce],Re[ce],ge):A[ce];y?(_.copy(S.normals[K]).multiplyScalar(ue.x),E.copy(S.binormals[K]).multiplyScalar(ue.y),b.copy(M[K]).add(_).add(E),Be(b.x,b.y,b.z)):Be(ue.x,ue.y,u/h*K)}for(let K=m-1;K>=0;K--){let ce=K/m,ue=f*Math.cos(ce*Math.PI/2),Ae=g*Math.sin(ce*Math.PI/2)+p;for(let Me=0,Je=B.length;Me<Je;Me++){let Fe=O(B[Me],V[Me],Ae);Be(Fe.x,Fe.y,u+ue)}for(let Me=0,Je=D.length;Me<Je;Me++){let Fe=D[Me];Q=W[Me];for(let lt=0,ut=Fe.length;lt<ut;lt++){let Mt=O(Fe[lt],Q[lt],Ae);y?Be(Mt.x,Mt.y+M[h-1].y,M[h-1].x+ue):Be(Mt.x,Mt.y,u+ue)}}}Ce(),Le();function Ce(){let K=n.length/3;if(d){let ce=0,ue=H*ce;for(let Ae=0;Ae<Z;Ae++){let Me=He[Ae];At(Me[2]+ue,Me[1]+ue,Me[0]+ue)}ce=h+m*2,ue=H*ce;for(let Ae=0;Ae<Z;Ae++){let Me=He[Ae];At(Me[0]+ue,Me[1]+ue,Me[2]+ue)}}else{for(let ce=0;ce<Z;ce++){let ue=He[ce];At(ue[2],ue[1],ue[0])}for(let ce=0;ce<Z;ce++){let ue=He[ce];At(ue[0]+H*h,ue[1]+H*h,ue[2]+H*h)}}i.addGroup(K,n.length/3-K,0)}function Le(){let K=n.length/3,ce=0;he(B,ce),ce+=B.length;for(let ue=0,Ae=D.length;ue<Ae;ue++){let Me=D[ue];he(Me,ce),ce+=Me.length}i.addGroup(K,n.length/3-K,1)}function he(K,ce){let ue=K.length;for(;--ue>=0;){let Ae=ue,Me=ue-1;Me<0&&(Me=K.length-1);for(let Je=0,Fe=h+m*2;Je<Fe;Je++){let lt=H*Je,ut=H*(Je+1),Mt=ce+Ae+lt,N=ce+Me+lt,Xt=ce+Me+ut,rt=ce+Ae+ut;Oe(Mt,N,Xt,rt)}}}function Be(K,ce,ue){l.push(K),l.push(ce),l.push(ue)}function At(K,ce,ue){tt(K),tt(ce),tt(ue);let Ae=n.length/3,Me=v.generateTopUV(i,n,Ae-3,Ae-2,Ae-1);Qe(Me[0]),Qe(Me[1]),Qe(Me[2])}function Oe(K,ce,ue,Ae){tt(K),tt(ce),tt(Ae),tt(ce),tt(ue),tt(Ae);let Me=n.length/3,Je=v.generateSideWallUV(i,n,Me-6,Me-3,Me-2,Me-1);Qe(Je[0]),Qe(Je[1]),Qe(Je[3]),Qe(Je[1]),Qe(Je[2]),Qe(Je[3])}function tt(K){n.push(l[K*3+0]),n.push(l[K*3+1]),n.push(l[K*3+2])}function Qe(K){r.push(K.x),r.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return tm(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Xa[n.type]().fromJSON(n)),new s(i,e.options)}},em={generateTopUV:function(s,e,t,i,n){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[n*3],h=e[n*3+1];return[new ee(r,o),new ee(a,l),new ee(c,h)]},generateSideWallUV:function(s,e,t,i,n,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[n*3],f=e[n*3+1],g=e[n*3+2],p=e[r*3],m=e[r*3+1],x=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ee(o,1-l),new ee(c,1-u),new ee(d,1-g),new ee(p,1-x)]:[new ee(a,1-l),new ee(h,1-u),new ee(f,1-g),new ee(m,1-x)]}};function tm(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){let r=s[i];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var so=class s extends $r{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},wn=class s extends pt{constructor(e=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],t=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=nt(n,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new P,d=new ee,f=new P,g=new P,p=new P,m=0,x=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,x=e[v+1].y-e[v].y,f.x=x*1,f.y=-m,f.z=x*0,p.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:p.normalize(),l.push(p.x,p.y,p.z);break;default:m=e[v+1].x-e[v].x,x=e[v+1].y-e[v].y,f.x=x*1,f.y=-m,f.z=x*0,g.copy(f),f.x+=p.x,f.y+=p.y,f.z+=p.z,f.normalize(),l.push(f.x,f.y,f.z),p.copy(g)}for(let v=0;v<=t;v++){let M=i+v*h*n,y=Math.sin(M),S=Math.cos(M);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*S,o.push(u.x,u.y,u.z),d.x=v/t,d.y=E/(e.length-1),a.push(d.x,d.y);let _=l[3*E+0]*y,b=l[3*E+1],I=l[3*E+0]*S;c.push(_,b,I)}}for(let v=0;v<t;v++)for(let M=0;M<e.length-1;M++){let y=M+v*e.length,S=y,E=y+e.length,_=y+e.length+1,b=y+1;r.push(S,E,b),r.push(_,b,E)}this.setIndex(r),this.setAttribute("position",new Ve(o,3)),this.setAttribute("uv",new Ve(a,2)),this.setAttribute("normal",new Ve(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},ro=class s extends $r{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Rt=class s extends pt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],p=[],m=[];for(let x=0;x<h;x++){let v=x*d-o;for(let M=0;M<c;M++){let y=M*u-r;g.push(y,-v,0),p.push(0,0,1),m.push(M/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let v=0;v<a;v++){let M=v+c*x,y=v+c*(x+1),S=v+1+c*(x+1),E=v+1+c*x;f.push(M,y,E),f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(p,3)),this.setAttribute("uv",new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Ai=class s extends pt{constructor(e=.5,t=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/n,f=new P,g=new ee;for(let p=0;p<=n;p++){for(let m=0;m<=i;m++){let x=r+m/i*o;f.x=u*Math.cos(x),f.y=u*Math.sin(x),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let p=0;p<n;p++){let m=p*(i+1);for(let x=0;x<i;x++){let v=x+m,M=v,y=v+i+1,S=v+i+2,E=v+1;a.push(M,y,E),a.push(y,S,E)}}this.setIndex(a),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},oo=class s extends pt{constructor(e=new Ji([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ve(n,3)),this.setAttribute("normal",new Ve(r,3)),this.setAttribute("uv",new Ve(o,2));function c(h){let u=n.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;Yi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,x=g.length;m<x;m++){let v=g[m];Yi.isClockWise(v)===!0&&(g[m]=v.reverse())}let p=Yi.triangulateShape(f,g);for(let m=0,x=g.length;m<x;m++){let v=g[m];f=f.concat(v)}for(let m=0,x=f.length;m<x;m++){let v=f[m];n.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,x=p.length;m<x;m++){let v=p[m],M=v[0]+u,y=v[1]+u,S=v[2]+u;i.push(M,y,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return im(t,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let o=t[e.shapes[n]];i.push(o)}return new s(i,e.curveSegments)}};function im(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,i=s.length;t<i;t++){let n=s[t];e.shapes.push(n.uuid)}else e.shapes.push(s.uuid);return e}var at=class s extends pt{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,d=new P,f=[],g=[],p=[],m=[];for(let x=0;x<=i;x++){let v=[],M=x/i,y=o+M*a,S=e*Math.cos(y),E=Math.sqrt(e*e-S*S),_=0;x===0&&o===0?_=.5/t:x===i&&l===Math.PI&&(_=-.5/t);for(let b=0;b<=t;b++){let I=b/t,A=n+I*r;u.x=-E*Math.cos(A),u.y=S,u.z=E*Math.sin(A),g.push(u.x,u.y,u.z),d.copy(u).normalize(),p.push(d.x,d.y,d.z),m.push(I+_,1-M),v.push(c++)}h.push(v)}for(let x=0;x<i;x++)for(let v=0;v<t;v++){let M=h[x][v+1],y=h[x][v],S=h[x+1][v],E=h[x+1][v+1];(x!==0||o>0)&&f.push(M,y,E),(x!==i-1||l<Math.PI)&&f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(p,3)),this.setAttribute("uv",new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bt=class s extends pt{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],u=[],d=new P,f=new P,g=new P;for(let p=0;p<=i;p++){let m=o+p/i*a;for(let x=0;x<=n;x++){let v=x/n*r;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(x/n),u.push(p/i)}}for(let p=1;p<=i;p++)for(let m=1;m<=n;m++){let x=(n+1)*p+m-1,v=(n+1)*(p-1)+m-1,M=(n+1)*(p-1)+m,y=(n+1)*p+m;l.push(x,v,y),l.push(v,M,y)}this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ao=class s extends pt{constructor(e=new Qr(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new ee,h=new P,u=[],d=[],f=[],g=[];p(),this.setIndex(g),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(d,3)),this.setAttribute("uv",new Ve(f,2));function p(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),v(),x()}function m(M){h=e.getPointAt(M/t,h);let y=o.normals[M],S=o.binormals[M];for(let E=0;E<=n;E++){let _=E/n*Math.PI*2,b=Math.sin(_),I=-Math.cos(_);l.x=I*y.x+b*S.x,l.y=I*y.y+b*S.y,l.z=I*y.z+b*S.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function x(){for(let M=1;M<=t;M++)for(let y=1;y<=n;y++){let S=(n+1)*(M-1)+(y-1),E=(n+1)*M+(y-1),_=(n+1)*M+y,b=(n+1)*(M-1)+y;g.push(S,E,b),g.push(E,_,b)}}function v(){for(let M=0;M<=t;M++)for(let y=0;y<=n;y++)c.x=M/t,c.y=y/n,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Xa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function xs(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];if(ld(n))n.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(ld(n[0])){let r=[];for(let o=0,a=n.length;o<a;o++)r[o]=n[o].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function hi(s){let e={};for(let t=0;t<s.length;t++){let i=xs(s[t]);for(let n in i)e[n]=i[n]}return e}function ld(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function nm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Uh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var Hi={clone:xs,merge:hi},sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vt=class extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=nm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Se().setHex(n.value);break;case"v2":this.uniforms[i].value=new ee().fromArray(n.value);break;case"v3":this.uniforms[i].value=new P().fromArray(n.value);break;case"v4":this.uniforms[i].value=new It().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(n.value);break;case"m4":this.uniforms[i].value=new ct().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Qs=class extends vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ue=class extends Zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ro,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nt=class extends Ue{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return rs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){rs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var lo=class extends Zi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ro,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=ll,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Za=class extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$a=class extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Sa(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var kn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break i}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let o=0;o!==n;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ja=class extends kn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,o=e+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case rh:r=e,a=2*t-i;break;case oh:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case rh:o=e,l=2*i-t;break;case oh:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),p=g*g,m=p*g,x=-d*m+2*d*p-d*g,v=(1+d)*m+(-1.5-2*d)*p+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*p+.5*g,y=f*m-f*p;for(let S=0;S!==a;++S)r[S]=x*o[h+S]+v*o[c+S]+M*o[l+S]+y*o[u+S];return r}},Ka=class extends kn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},ja=class extends kn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Qa=class extends kn{interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(n-t),p=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*p+o[l+m]*g;return r}let d=a*2,f=e-1;for(let g=0;g!==a;++g){let p=o[c+g],m=o[l+g],x=f*d+g*2,v=u[x],M=u[x+1],y=e*d+g*2,S=h[y],E=h[y+1],_=am(i,t,v,S,n);r[g]=cf(_,p,M,E,m)}return r}};function cf(s,e,t,i,n){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*i+s*s*s*n}function om(s,e,t,i,n){let r=1-s;return 3*r*r*(t-e)+6*r*s*(i-t)+3*s*s*(n-i)}function am(s,e,t,i,n){let r=(s-e)/(n-e);for(let o=0;o<8;o++){let a=cf(r,e,t,i,n)-s;if(Math.abs(a)<1e-10)break;let l=om(r,e,t,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ri=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fs(t,this.TimeBufferType),this.values=Fs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fs(e.times,Array),values:Fs(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),Sa(e.settings)&&(i.settings={inTangents:Fs(e.settings.inTangents,Array),outTangents:Fs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ur:t=this.InterpolantFactoryMethodDiscrete;break;case Fa:t=this.InterpolantFactoryMethodLinear;break;case wa:t=this.InterpolantFactoryMethodSmooth;break;case nh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ke("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return wa;case this.InterpolantFactoryMethodBezier:return nh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;Sa(this.settings)&&(cd(this.settings.inTangents,e),cd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;Sa(this.settings)&&(hd(this.settings.inTangents,e),hd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){We("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&$p(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===wa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let p=t[u+g];if(p!==t[d+g]||p!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,Sa(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function cd(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]+=e}function hd(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]*=e}Ri.prototype.ValueTypeName="";Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=Fa;var Gn=class extends Ri{constructor(e,t,i){super(e,t,i)}};Gn.prototype.ValueTypeName="bool";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=Ur;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends Ri{constructor(e,t,i,n){super(e,t,i,n)}};el.prototype.ValueTypeName="color";var tl=class extends Ri{constructor(e,t,i,n){super(e,t,i,n)}};tl.prototype.ValueTypeName="number";var il=class extends kn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t),c=e*a;for(let h=c+a;c!==h;c+=4)Fi.slerpFlat(r,0,o,c-a,o,c,l);return r}},co=class extends Ri{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new il(this.times,this.values,this.getValueSize(),e)}};co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;var Vn=class extends Ri{constructor(e,t,i){super(e,t,i)}};Vn.prototype.ValueTypeName="string";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=Ur;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var nl=class extends Ri{constructor(e,t,i,n){super(e,t,i,n)}};nl.prototype.ValueTypeName="vector";var sl=class{constructor(e,t,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hf=new sl,ho=class{constructor(e){this.manager=e!==void 0?e:hf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ho.DEFAULT_MATERIAL_NAME="__DEFAULT";var er=class extends Ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Tn=class extends er{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ih=new ct,ud=new P,dd=new P,uo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hn,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){ih.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ih,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=n?n.z/r.x:1,a=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===ks||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ba=new P,Ea=new Fi,nn=new P,fo=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ba,Ea,nn),nn.x===1&&nn.y===1&&nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ea,nn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ba,Ea,nn),nn.x===1&&nn.y===1&&nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ea,nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},On=new P,fd=new ee,pd=new ee,$t=class extends fo{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(On.x,On.y).multiplyScalar(-e/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(On.x,On.y).multiplyScalar(-e/On.z)}getViewSize(e,t){return this.getViewBounds(e,fd,pd),t.subVectors(pd,fd)}setViewOffset(e,t,i,n,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bs*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var uh=class extends uo{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}},hs=class extends er{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new uh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},us=class extends fo{constructor(e=-1,t=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dh=class extends uo{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ci=class extends er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new dh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ns=-90,Us=1,tr=class extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new $t(Ns,Us,e,t);n.layers=this.layers,this.add(n);let r=new $t(Ns,Us,e,t);r.layers=this.layers,this.add(r);let o=new $t(Ns,Us,e,t);o.layers=this.layers,this.add(o);let a=new $t(Ns,Us,e,t);a.layers=this.layers,this.add(a);let l=new $t(Ns,Us,e,t);l.layers=this.layers,this.add(l);let c=new $t(Ns,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let p=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=p,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},rl=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},po=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=lm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function lm(){this._document.hidden===!1&&this.reset()}var Bh="\\[\\]\\.:\\/",cm=new RegExp("["+Bh+"]","g"),Oh="[^"+Bh+"]",hm="[^"+Bh.replace("\\.","")+"]",um=/((?:WC+[\/:])*)/.source.replace("WC",Oh),dm=/(WCOD+)?/.source.replace("WCOD",hm),fm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),pm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),mm=new RegExp("^"+um+dm+fm+pm+"$"),gm=["material","materials","bones","map"],fh=class{constructor(e,t,i){let n=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cm,"")}static parseTrackName(e){let t=mm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);gm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[n];if(o===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=fh;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var r5=new Float32Array(1);var md=new ct,mo=class{constructor(e,t,i=0,n=1/0){this.ray=new os(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return md.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(md),this}intersectObject(e,t=!0,i=[]){return ph(e,this,i,t),i.sort(gd),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)ph(e[n],this,i,t);return i.sort(gd),i}};function gd(s,e){return s.distance-e.distance}function ph(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)ph(r[o],e,t,!0)}}var Wh=class Wh{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};Wh.prototype.isMatrix2=!0;var mh=Wh,xd=new ee,ol=class{constructor(e=new ee(1/0,1/0),t=new ee(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=xd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var go=class{constructor(){this.type="ShapePath",this.color=new Se,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new ls,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,r,o){return this.currentPath.bezierCurveTo(e,t,i,n,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let h=!1,u=c.length;for(let d=0,f=u-1;d<u;f=d++){let g=c[d],p=c[f];g.y>l.y!=p.y>l.y&&l.x<(p.x-g.x)*(l.y-g.y)/(p.y-g.y)+g.x&&(h=!h)}return h}function t(l,c){let h=c.getCenter(new ee);if(e(h,l))return h;let u=h.y,d=[],f=l.length;for(let g=0;g<f;g++){let p=l[g],m=l[(g+1)%f];if(p.y>u!=m.y>u){let x=p.x+(u-p.y)*(m.x-p.x)/(m.y-p.y);d.push(x)}}return d.length>1&&(d.sort((g,p)=>g-p),h.x=(d[0]+d[1])/2),h}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(ke('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");let n=i==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=Yi.area(c);if(h===0)continue;let u=new ol;for(let d=0;d<c.length;d++)u.expandByPoint(c[d]);r.push({subPath:l,points:c,boundingBox:u,interiorPoint:t(c,u),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let u=l-1;u>=0;u--){let d=r[u];if(d.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,d.points)){c.container=d.exclude?d.container:d,h=d.winding,c.winding+=h;break}}n(c.winding)===n(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let o=[],a=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new Ji;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=a.get(l.container);if(!c)continue;let h=new ls;h.curves=l.subPath.curves,c.holes.push(h)}return o}};function Hh(s,e,t,i){let n=xm(i);switch(t){case Th:return s*e;case ml:return s*e/n.components*n.byteLength;case gl:return s*e/n.components*n.byteLength;case Yn:return s*e*2/n.components*n.byteLength;case xl:return s*e*2/n.components*n.byteLength;case Ah:return s*e*3/n.components*n.byteLength;case en:return s*e*4/n.components*n.byteLength;case vl:return s*e*4/n.components*n.byteLength;case So:case bo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Eo:case wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yl:case Sl:return Math.max(s,16)*Math.max(e,8)/4;case _l:case Ml:return Math.max(s,8)*Math.max(e,8)/2;case bl:case El:case Tl:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wl:case To:case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Il:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ql:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case zl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case kl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Gl:case Vl:case Wl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Xl:case Yl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ao:case Zl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xm(s){switch(s){case vi:case Sh:return{byteLength:1,components:1};case sr:case bh:case Kt:return{byteLength:2,components:1};case fl:case pl:return{byteLength:2,components:4};case Qi:case dl:case Bi:return{byteLength:4,components:1};case Eh:case wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Df(){let s=null,e=!1,t=null,i=null;function n(r,o){i=s.requestAnimationFrame(n),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function wm(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],p=u[f];p.start<=g.start+g.count+1?g.count=Math.max(g.count,p.start+p.count-g.start):(++d,u[d]=p)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let p=u[f];s.bufferSubData(c,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var Tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Am=`#ifdef USE_ALPHAHASH
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
#endif`,Rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dm=`#ifdef USE_AOMAP
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
#endif`,qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lm=`#ifdef USE_BATCHING
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
#endif`,Fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Om=`#ifdef USE_IRIDESCENCE
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
#endif`,Hm=`#ifdef USE_BUMPMAP
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
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$m=`#define PI 3.141592653589793
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
} // validated`,Jm=`vec3 transformedNormal = objectNormal;
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
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t1="gl_FragColor = linearToOutputTexel( gl_FragColor );",i1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n1=`#ifdef USE_ENVMAP
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
#endif`,s1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
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
#endif`,o1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
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
#endif`,l1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d1=`#ifdef USE_GRADIENTMAP
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
}`,f1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,x1=`#ifdef USE_ENVMAP
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
#endif`,v1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S1=`PhysicalMaterial material;
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
#endif`,b1=`uniform sampler2D dfgLUT;
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
}`,E1=`
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
#endif`,w1=`#if defined( RE_IndirectDiffuse )
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
#endif`,T1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,R1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,F1=`#if defined( USE_POINTS_UV )
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
#endif`,N1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O1=`#if defined( USE_MORPHCOLORS )
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
#endif`,H1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z1=`#ifdef USE_MORPHTARGETS
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
#endif`,k1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,V1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Z1=`#ifdef USE_NORMALMAP
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
#endif`,$1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hg=`float getShadowMask() {
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
}`,ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tg=`uniform sampler2D t2D;
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform float backgroundBlurriness;
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`#include <common>
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
}`,Dg=`#if DEPTH_PACKING == 3200
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
}`,qg=`#define DISTANCE
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
}`,Lg=`#define DISTANCE
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`uniform float scale;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,Og=`#include <common>
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
}`,Hg=`uniform vec3 diffuse;
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
}`,zg=`#define LAMBERT
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
}`,kg=`#define LAMBERT
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
}`,Gg=`#define MATCAP
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
}`,Vg=`#define MATCAP
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
}`,Wg=`#define NORMAL
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
}`,Xg=`#define NORMAL
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
}`,Yg=`#define PHONG
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
}`,Zg=`#define PHONG
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
}`,$g=`#define STANDARD
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
}`,Jg=`#define STANDARD
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
}`,Kg=`#define TOON
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
}`,jg=`#define TOON
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
}`,Qg=`uniform float size;
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
}`,e2=`uniform vec3 diffuse;
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
}`,t2=`#include <common>
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
}`,i2=`uniform vec3 color;
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
}`,n2=`uniform float rotation;
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
}`,s2=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Tm,alphahash_pars_fragment:Am,alphamap_fragment:Rm,alphamap_pars_fragment:Cm,alphatest_fragment:Pm,alphatest_pars_fragment:Im,aomap_fragment:Dm,aomap_pars_fragment:qm,batching_pars_vertex:Lm,batching_vertex:Fm,begin_vertex:Nm,beginnormal_vertex:Um,bsdfs:Bm,iridescence_fragment:Om,bumpmap_pars_fragment:Hm,clipping_planes_fragment:zm,clipping_planes_pars_fragment:km,clipping_planes_pars_vertex:Gm,clipping_planes_vertex:Vm,color_fragment:Wm,color_pars_fragment:Xm,color_pars_vertex:Ym,color_vertex:Zm,common:$m,defaultnormal_vertex:Jm,displacementmap_pars_vertex:Km,displacementmap_vertex:jm,emissivemap_fragment:Qm,emissivemap_pars_fragment:e1,colorspace_fragment:t1,colorspace_pars_fragment:i1,envmap_fragment:n1,envmap_common_pars_fragment:s1,envmap_pars_fragment:r1,envmap_pars_vertex:o1,envmap_physical_pars_fragment:x1,envmap_vertex:a1,fog_vertex:l1,fog_pars_vertex:c1,fog_fragment:h1,fog_pars_fragment:u1,gradientmap_pars_fragment:d1,lightmap_pars_fragment:f1,lights_lambert_fragment:p1,lights_lambert_pars_fragment:m1,lights_pars_begin:g1,lights_toon_fragment:v1,lights_toon_pars_fragment:_1,lights_phong_fragment:y1,lights_phong_pars_fragment:M1,lights_physical_fragment:S1,lights_physical_pars_fragment:b1,lights_fragment_begin:E1,lights_fragment_maps:w1,lights_fragment_end:T1,lightprobes_pars_fragment:A1,logdepthbuf_fragment:R1,logdepthbuf_pars_fragment:C1,logdepthbuf_pars_vertex:P1,logdepthbuf_vertex:I1,map_fragment:D1,map_pars_fragment:q1,map_particle_fragment:L1,map_particle_pars_fragment:F1,metalnessmap_fragment:N1,metalnessmap_pars_fragment:U1,morphinstance_vertex:B1,morphcolor_vertex:O1,morphnormal_vertex:H1,morphtarget_pars_vertex:z1,morphtarget_vertex:k1,normal_fragment_begin:G1,normal_fragment_maps:V1,normal_pars_fragment:W1,normal_pars_vertex:X1,normal_vertex:Y1,normalmap_pars_fragment:Z1,clearcoat_normal_fragment_begin:$1,clearcoat_normal_fragment_maps:J1,clearcoat_pars_fragment:K1,iridescence_pars_fragment:j1,opaque_fragment:Q1,packing:eg,premultiplied_alpha_fragment:tg,project_vertex:ig,dithering_fragment:ng,dithering_pars_fragment:sg,roughnessmap_fragment:rg,roughnessmap_pars_fragment:og,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:lg,shadowmap_vertex:cg,shadowmask_pars_fragment:hg,skinbase_vertex:ug,skinning_pars_vertex:dg,skinning_vertex:fg,skinnormal_vertex:pg,specularmap_fragment:mg,specularmap_pars_fragment:gg,tonemapping_fragment:xg,tonemapping_pars_fragment:vg,transmission_fragment:_g,transmission_pars_fragment:yg,uv_pars_fragment:Mg,uv_pars_vertex:Sg,uv_vertex:bg,worldpos_vertex:Eg,background_vert:wg,background_frag:Tg,backgroundCube_vert:Ag,backgroundCube_frag:Rg,cube_vert:Cg,cube_frag:Pg,depth_vert:Ig,depth_frag:Dg,distance_vert:qg,distance_frag:Lg,equirect_vert:Fg,equirect_frag:Ng,linedashed_vert:Ug,linedashed_frag:Bg,meshbasic_vert:Og,meshbasic_frag:Hg,meshlambert_vert:zg,meshlambert_frag:kg,meshmatcap_vert:Gg,meshmatcap_frag:Vg,meshnormal_vert:Wg,meshnormal_frag:Xg,meshphong_vert:Yg,meshphong_frag:Zg,meshphysical_vert:$g,meshphysical_frag:Jg,meshtoon_vert:Kg,meshtoon_frag:jg,points_vert:Qg,points_frag:e2,shadow_vert:t2,shadow_frag:i2,sprite_vert:n2,sprite_frag:s2},we={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},hn={basic:{uniforms:hi([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:hi([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:hi([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:hi([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:hi([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Se(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:hi([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:hi([we.points,we.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:hi([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:hi([we.common,we.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:hi([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:hi([we.sprite,we.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:hi([we.common,we.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:hi([we.lights,we.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};hn.physical={uniforms:hi([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var $l={r:0,b:0,g:0},r2=new ct,qf=new Ye;qf.set(-1,0,0,0,1,0,0,0,1);function o2(s,e,t,i,n,r){let o=new Se(0),a=n===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let y=v.backgroundBlurriness>0;M=e.get(M,y)}return M}function g(v){let M=!1,y=f(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),M=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(v,M){let y=f(M);y&&y.isCubeTexture?(c===void 0&&(c=new ne(new yt(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:xs(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(r2.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qf),c.material.toneMapped=ot.getTransfer(y.colorSpace)!==St,(h!==y||u!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ne(new Rt(2,2),new vt({name:"BackgroundMaterial",uniforms:xs(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ot.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB($l,Uh(s)),t.buffers.color.setClear($l.r,$l.g,$l.b,M,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:p,dispose:x}}function a2(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,o=!1;function a(D,q,U,C,B){let O=!1,H=u(D,C,U,q);r!==H&&(r=H,c(r.object)),O=f(D,C,U,B),O&&g(D,C,U,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,y(D,q,U,C),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function u(D,q,U,C){let B=C.wireframe===!0,O=i[q.id];O===void 0&&(O={},i[q.id]=O);let H=D.isInstancedMesh===!0?D.id:0,te=O[H];te===void 0&&(te={},O[H]=te);let V=te[U.id];V===void 0&&(V={},te[U.id]=V);let W=V[B];return W===void 0&&(W=d(l()),V[B]=W),W}function d(D){let q=[],U=[],C=[];for(let B=0;B<t;B++)q[B]=0,U[B]=0,C[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:U,attributeDivisors:C,object:D,attributes:{},index:null}}function f(D,q,U,C){let B=r.attributes,O=q.attributes,H=0,te=U.getAttributes();for(let V in te)if(te[V].location>=0){let Q=B[V],Re=O[V];if(Re===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(Re=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(Re=D.instanceColor)),Q===void 0||Q.attribute!==Re||Re&&Q.data!==Re.data)return!0;H++}return r.attributesNum!==H||r.index!==C}function g(D,q,U,C){let B={},O=q.attributes,H=0,te=U.getAttributes();for(let V in te)if(te[V].location>=0){let Q=O[V];Q===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let Re={};Re.attribute=Q,Q&&Q.data&&(Re.data=Q.data),B[V]=Re,H++}r.attributes=B,r.attributesNum=H,r.index=C}function p(){let D=r.newAttributes;for(let q=0,U=D.length;q<U;q++)D[q]=0}function m(D){x(D,0)}function x(D,q){let U=r.newAttributes,C=r.enabledAttributes,B=r.attributeDivisors;U[D]=1,C[D]===0&&(s.enableVertexAttribArray(D),C[D]=1),B[D]!==q&&(s.vertexAttribDivisor(D,q),B[D]=q)}function v(){let D=r.newAttributes,q=r.enabledAttributes;for(let U=0,C=q.length;U<C;U++)q[U]!==D[U]&&(s.disableVertexAttribArray(U),q[U]=0)}function M(D,q,U,C,B,O,H){H===!0?s.vertexAttribIPointer(D,q,U,B,O):s.vertexAttribPointer(D,q,U,C,B,O)}function y(D,q,U,C){p();let B=C.attributes,O=U.getAttributes(),H=q.defaultAttributeValues;for(let te in O){let V=O[te];if(V.location>=0){let W=B[te];if(W===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){let Q=W.normalized,Re=W.itemSize,He=e.get(W);if(He===void 0)continue;let Z=He.buffer,ge=He.type,Ce=He.bytesPerElement,Le=ge===s.INT||ge===s.UNSIGNED_INT||W.gpuType===dl;if(W.isInterleavedBufferAttribute){let he=W.data,Be=he.isInterleavedBuffer===!0?he.stride:he.itemSize,At=W.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Oe=0;Oe<V.locationSize;Oe++)x(V.location+Oe,he.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)m(V.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let Oe=0;Oe<V.locationSize;Oe++)M(V.location+Oe,Re/V.locationSize,ge,Q,Be*Ce,(At+Re/V.locationSize*Oe)*Ce,Le)}else{if(W.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)x(V.location+he,W.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let he=0;he<V.locationSize;he++)m(V.location+he);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let he=0;he<V.locationSize;he++)M(V.location+he,Re/V.locationSize,ge,Q,Re*Ce,Re/V.locationSize*he*Ce,Le)}}else if(H!==void 0){let Q=H[te];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(V.location,Q);break;case 3:s.vertexAttrib3fv(V.location,Q);break;case 4:s.vertexAttrib4fv(V.location,Q);break;default:s.vertexAttrib1fv(V.location,Q)}}}}v()}function S(){I();for(let D in i){let q=i[D];for(let U in q){let C=q[U];for(let B in C){let O=C[B];for(let H in O)h(O[H].object),delete O[H];delete C[B]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let q=i[D.id];for(let U in q){let C=q[U];for(let B in C){let O=C[B];for(let H in O)h(O[H].object),delete O[H];delete C[B]}}delete i[D.id]}function _(D){for(let q in i){let U=i[q];for(let C in U){let B=U[C];if(B[D.id]===void 0)continue;let O=B[D.id];for(let H in O)h(O[H].object),delete O[H];delete B[D.id]}}}function b(D){for(let q in i){let U=i[q],C=D.isInstancedMesh===!0?D.id:0,B=U[C];if(B!==void 0){for(let O in B){let H=B[O];for(let te in H)h(H[te].object),delete H[te];delete B[O]}delete U[C],Object.keys(U).length===0&&delete i[q]}}}function I(){A(),o=!0,r!==n&&(r=n,c(r.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:I,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:p,enableAttribute:m,disableUnusedAttributes:v}}function l2(s,e,t){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function c2(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(_){return!(_!==en&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let b=_===Kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==vi&&_!==Bi&&!b&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:p,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:S,samples:E}}function h2(s){let e=this,t=null,i=0,n=!1,r=!1,o=new di,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,p=u.clipIntersection,m=u.clipShadows,x=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,M=v*4,y=x.clippingState||null;l.value=y,y=h(g,d,M,f);for(let S=0;S!==M;++S)y[S]=t[S];x.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let p=u!==null?u.length:0,m=null;if(p!==0){if(m=l.value,g!==!0||m===null){let x=f+p*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<x)&&(m=new Float32Array(x));for(let M=0,y=f;M!==p;++M,y+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}var Io=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Xr(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new yt(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Rn});r.uniforms.tEquirect.value=t;let o=new ne(n,r),a=t.minFilter;return t.minFilter===ji&&(t.minFilter=fi),new tr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(r)}},uf=256,u2=3,d2=20,Lf=256,Ff=16,f2=3,p2=new P,m2=new Se,un=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new tr(1,10,null),this._boxMesh=new ne(new yt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:o=256,position:a=p2}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,p=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,p===null&&(e.background=l.getClearColor(m2));let m=new tr(i,n,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=p,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(uf,Lh(e))}_fromTexture(e,t){e.mapping===ps||e.mapping===nr?this._setSize(e.image.length===0?uf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=df(e,!1,!1),i=Math.log2(e)-u2;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=df(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ps||e.mapping===nr?(this._cubemapMaterial===null&&(this._cubemapMaterial=pf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ff()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=g2(),this._integrationMaterial=x2());let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ff);for(let o=0;o<=i;o++){let a=s.lodToRoughness(o,i);if(o>i-f2)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Lf*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=v2());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}};function df(s,e,t){return new Io(s,{minFilter:ji,generateMipmaps:e,type:Kt,colorSpace:Br,depthBuffer:t})}function Do(s,e,t){return new vt({name:s,uniforms:e,vertexShader:st.cube_vert,fragmentShader:t,side:Vt,blending:Rn,depthTest:!1,depthWrite:!1})}function g2(){return Do("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Lf}u

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
	`)}function x2(){return Do("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ff}},`

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
	`)}function v2(){return Do("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${d2}
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
	`)}function ff(){return Do("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function pf(){return Do("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _2(s){let e=new WeakMap,t=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===cl||f===hl)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let p=new Io(g.height);return p.fromEquirectangularTexture(s,d),e.set(d,p),d.addEventListener("dispose",c),a(p.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===cl||f===hl,p=f===ps||f===nr;if(g||p){let m=t.get(d),x=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new un(s)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return g&&v&&v.height>0||p&&v&&l(v)?(i===null&&(i=new un(s)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===cl?d.mapping=ps:f===hl&&(d.mapping=nr),d}function l(d){let f=0,g=6;for(let p=0;p<g;p++)d[p]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function y2(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&rs("WebGLRenderer: "+i+" extension not supported."),n}}}function M2(s,e,t,i){let n={},r=new WeakMap,o=new FinalizationRegistry(g=>delete n[g]);function a(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete n[g.id],o.unregister(g);let p=r.get(g);p&&(e.remove(p),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,p){return n[p.id]!==void 0||(p.addEventListener("dispose",a),n[p.id]=new WeakRef(p),o.register(p,p.id,p),t.memory.geometries++),p}function h(g){let p=g.attributes;for(let m in p)e.update(p[m],s.ARRAY_BUFFER)}function u(g){let p=g.index,m=g.attributes.position,x=0;if(m===void 0)return;let v=p!==null?p.array.length:m.array.length/3-1,M=m.count>=65535?Vr:Gr,y=new M(Math.ceil(v/3)*6,1),S=y.array;if(p!==null){let _=p.array;x=p.version;for(let b=0,I=0;b<v;b+=3){let A=_[b+0],D=_[b+1],q=_[b+2];S[I++]=A,S[I++]=D,S[I++]=D,S[I++]=q,S[I++]=q,S[I++]=A}}else{x=m.version;for(let _=0,b=0;_<v;_+=3){let I=_+0,A=_+1,D=_+2;S[b++]=I,S[b++]=A,S[b++]=A,S[b++]=D,S[b++]=D,S[b++]=I}}y.version=x;let E=r.get(g);E&&e.remove(E),r.set(g,y)}function d(g){let p=r.get(g);if(p){let m=g.index;m!==null&&p.version<m.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in n){let p=n[g].deref();p!==void 0&&l(p)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function S2(s,e,t){let i;function n(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(i,d,r,u*o),t.update(d,i,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(i,d,r,u*o,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let p=0;for(let m=0;m<f;m++)p+=d[m];t.update(p,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function b2(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function E2(s,e,t){let i=new WeakMap,n=new It;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let I=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),p===!0&&(M=3);let y=a.attributes.position.count*M,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*S*4*u),_=new zr(E,y,S,u);_.type=Bi,_.needsUpdate=!0;let b=M*4;for(let A=0;A<u;A++){let D=m[A],q=x[A],U=v[A],C=y*S*4*A;for(let B=0;B<D.count;B++){let O=B*b;f===!0&&(n.fromBufferAttribute(D,B),E[C+O+0]=n.x,E[C+O+1]=n.y,E[C+O+2]=n.z,E[C+O+3]=0),g===!0&&(n.fromBufferAttribute(q,B),E[C+O+4]=n.x,E[C+O+5]=n.y,E[C+O+6]=n.z,E[C+O+7]=0),p===!0&&(n.fromBufferAttribute(U,B),E[C+O+8]=n.x,E[C+O+9]=n.y,E[C+O+10]=n.z,E[C+O+11]=U.itemSize===4?n.w:1)}}d={count:u,texture:_,size:new ee(y,S)},i.set(a,d),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let p=0;p<c.length;p++)f+=c[p];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function w2(s,e,t,i,n){let r=new WeakMap;function o(c){let h=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var T2={[xo]:"LINEAR_TONE_MAPPING",[vo]:"REINHARD_TONE_MAPPING",[_o]:"CINEON_TONE_MAPPING",[Ki]:"ACES_FILMIC_TONE_MAPPING",[fs]:"AGX_TONE_MAPPING",[Ui]:"NEUTRAL_TONE_MAPPING",[yo]:"CUSTOM_TONE_MAPPING"};function A2(s,e,t,i,n,r){let o=new Wt(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new pt;h.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ve([0,2,0,0,2,0],2));let u=new Qs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ne(h,u),f=new us(-1,1,1,-1,0,1),g=null,p=null,m=!1,x,v=null,M=[],y=!1;this.setSize=function(S,E){o.setSize(S,E),a!==null&&a.setSize(S,E),l!==null&&l.setSize(S,E);for(let _=0;_<M.length;_++){let b=M[_];b.setSize&&b.setSize(S,E)}},this.setEffects=function(S){M=S,y=M.length>0&&M[0].isRenderPass===!0;let E=o.width,_=o.height;M.length>0&&a===null&&(a=new Wt(E,_,{type:Kt,depthBuffer:!1,stencilBuffer:!1}),l=new Wt(E,_,{type:Kt,depthBuffer:!1,stencilBuffer:!1}));let b=n===!0&&M.some(I=>I.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Sn(E,_),r===!0&&(c.format=Cn,c.type=ms)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let I=0;I<M.length;I++){let A=M[I];A.setSize&&A.setSize(E,_),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(S,E){if(m||S.toneMapping===ln&&M.length===0)return!1;if(v=E,E!==null){let _=E.width,b=E.height;(o.width!==_||o.height!==b)&&this.setSize(_,b)}return y===!1&&S.setRenderTarget(o),x=S.toneMapping,S.toneMapping=ln,!0},this.hasRenderPass=function(){return y},this.end=function(S,E){S.toneMapping=x,m=!0;let _=o,b=a;for(let I=0;I<M.length;I++){let A=M[I];A.enabled!==!1&&(A.render(S,b,_,E),A.needsSwap!==!1&&(_=b,b=b===a?l:a))}if(g!==S.outputColorSpace||p!==S.toneMapping){g=S.outputColorSpace,p=S.toneMapping,u.defines={},ot.getTransfer(g)===St&&(u.defines.SRGB_TRANSFER="");let I=T2[p];I&&(u.defines[I]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,S.setRenderTarget(v),S.render(d,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Nf=new pi,Uf=new Sn(1,1),Bf=new Yr(1),Of=new zr,Hf=new Ba,zf=new Xr,mf=[],gf=[],xf=new Float32Array(16),vf=new Float32Array(9),_f=new Float32Array(4);function ar(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=mf[n];if(r===void 0&&(r=new Float32Array(n),mf[n]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function jt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Qt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Kl(s,e){let t=gf[e];t===void 0&&(t=new Int32Array(e),gf[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function R2(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function C2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2fv(this.addr,e),Qt(t,e)}}function P2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;s.uniform3fv(this.addr,e),Qt(t,e)}}function I2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4fv(this.addr,e),Qt(t,e)}}function D2(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;_f.set(i),s.uniformMatrix2fv(this.addr,!1,_f),Qt(t,i)}}function q2(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;vf.set(i),s.uniformMatrix3fv(this.addr,!1,vf),Qt(t,i)}}function L2(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;xf.set(i),s.uniformMatrix4fv(this.addr,!1,xf),Qt(t,i)}}function F2(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function N2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2iv(this.addr,e),Qt(t,e)}}function U2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;s.uniform3iv(this.addr,e),Qt(t,e)}}function B2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4iv(this.addr,e),Qt(t,e)}}function O2(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function H2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2uiv(this.addr,e),Qt(t,e)}}function z2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;s.uniform3uiv(this.addr,e),Qt(t,e)}}function k2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4uiv(this.addr,e),Qt(t,e)}}function jl(s){return s.version===0&&(s.compareFunction=Ph,s.needsUpdate=!0),s}function G2(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=jl(Uf):r=Nf,t.setTexture2D(e||r,n)}function V2(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Hf,n)}function W2(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=jl(Bf):r=zf,t.setTextureCube(e||r,n)}function X2(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Of,n)}function Y2(s){switch(s){case 5126:return R2;case 35664:return C2;case 35665:return P2;case 35666:return I2;case 35674:return D2;case 35675:return q2;case 35676:return L2;case 5124:case 35670:return F2;case 35667:case 35671:return N2;case 35668:case 35672:return U2;case 35669:case 35673:return B2;case 5125:return O2;case 36294:return H2;case 36295:return z2;case 36296:return k2;case 35678:case 36198:case 36298:case 36306:case 35682:return G2;case 35679:case 36299:case 36307:return V2;case 35680:case 36300:case 36308:case 36293:return W2;case 36289:case 36303:case 36311:case 36292:return X2}}function Z2(s,e){s.uniform1fv(this.addr,e)}function $2(s,e){let t=ar(e,this.size,2);s.uniform2fv(this.addr,t)}function J2(s,e){let t=ar(e,this.size,3);s.uniform3fv(this.addr,t)}function K2(s,e){let t=ar(e,this.size,4);s.uniform4fv(this.addr,t)}function j2(s,e){let t=ar(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Q2(s,e){let t=ar(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ex(s,e){let t=ar(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function tx(s,e){s.uniform1iv(this.addr,e)}function ix(s,e){s.uniform2iv(this.addr,e)}function nx(s,e){s.uniform3iv(this.addr,e)}function sx(s,e){s.uniform4iv(this.addr,e)}function rx(s,e){s.uniform1uiv(this.addr,e)}function ox(s,e){s.uniform2uiv(this.addr,e)}function ax(s,e){s.uniform3uiv(this.addr,e)}function lx(s,e){s.uniform4uiv(this.addr,e)}function cx(s,e,t){let i=this.cache,n=e.length,r=Kl(t,n);jt(i,r)||(s.uniform1iv(this.addr,r),Qt(i,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=jl(Uf):o=Nf;for(let a=0;a!==n;++a)t.setTexture2D(e[a]||o,r[a])}function hx(s,e,t){let i=this.cache,n=e.length,r=Kl(t,n);jt(i,r)||(s.uniform1iv(this.addr,r),Qt(i,r));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Hf,r[o])}function ux(s,e,t){let i=this.cache,n=e.length,r=Kl(t,n);jt(i,r)||(s.uniform1iv(this.addr,r),Qt(i,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=jl(Bf):o=zf;for(let a=0;a!==n;++a)t.setTextureCube(e[a]||o,r[a])}function dx(s,e,t){let i=this.cache,n=e.length,r=Kl(t,n);jt(i,r)||(s.uniform1iv(this.addr,r),Qt(i,r));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Of,r[o])}function fx(s){switch(s){case 5126:return Z2;case 35664:return $2;case 35665:return J2;case 35666:return K2;case 35674:return j2;case 35675:return Q2;case 35676:return ex;case 5124:case 35670:return tx;case 35667:case 35671:return ix;case 35668:case 35672:return nx;case 35669:case 35673:return sx;case 5125:return rx;case 36294:return ox;case 36295:return ax;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return dx}}var Zh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Y2(t.type)}},$h=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fx(t.type)}},Jh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(e,t[a.id],i)}}},Xh=/(\w+)(\])?(\[|\.)?/g;function yf(s,e){s.seq.push(e),s.map[e.id]=e}function px(s,e,t){let i=s.name,n=i.length;for(Xh.lastIndex=0;;){let r=Xh.exec(i),o=Xh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){yf(t,c===void 0?new Zh(a,s,e):new $h(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Jh(a),yf(t,u)),t=u}}}var or=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);px(a,l,this)}let n=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(o):r.push(o);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let o=e[n];o.id in t&&i.push(o)}return i}};function Mf(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var mx=37297,gx=0;function xx(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Sf=new Ye;function vx(s){ot._getMatrix(Sf,ot.workingColorSpace,s);let e=`mat3( ${Sf.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(s)){case Or:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function bf(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+xx(s.getShaderSource(e),a)}else return r}function _x(s,e){let t=vx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var yx={[xo]:"Linear",[vo]:"Reinhard",[_o]:"Cineon",[Ki]:"ACESFilmic",[fs]:"AgX",[Ui]:"Neutral",[yo]:"Custom"};function Mx(s,e){let t=yx[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Jl=new P;function Sx(){ot.getLuminanceCoefficients(Jl);let s=Jl.x.toFixed(4),e=Jl.y.toFixed(4),t=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function Ex(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wx(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Po(s){return s!==""}function Ef(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function wf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(s){return s.replace(Tx,Ax)}function Ax(s,e){let t=st[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Kh(t)}var Rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tf(s){return s.replace(Rx,Cx)}function Cx(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Af(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var Px={[An]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function Ix(s){return Px[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Dx={[nr]:"ENVMAP_MODE_REFRACTION"};function qx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Dx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Lx={[ll]:"ENVMAP_BLENDING_MULTIPLY",[Od]:"ENVMAP_BLENDING_MIX",[Hd]:"ENVMAP_BLENDING_ADD"};function Fx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Lx[s.combine]||"ENVMAP_BLENDING_NONE"}function Nx(s,e,t,i){let n=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Ix(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=qx(t),u=Fx(t),d=bx(t),f=Ex(r),g=n.createProgram(),p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Po).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Po).join(`
`),m.length>0&&(m+=`
`)):(p=[Af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),m=[Af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ln?"#define TONE_MAPPING":"",t.toneMapping!==ln?st.tonemapping_pars_fragment:"",t.toneMapping!==ln?Mx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,_x("linearToOutputTexel",t.outputColorSpace),Sx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Po).join(`
`)),o=Kh(o),o=Ef(o,t),o=wf(o,t),a=Kh(a),a=Ef(a,t),a=wf(a,t),o=Tf(o),a=Tf(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=x+p+o,M=x+m+a,y=Mf(n,n.VERTEX_SHADER,v),S=Mf(n,n.FRAGMENT_SHADER,M);n.attachShader(g,y),n.attachShader(g,S),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function E(A){if(s.debug.checkShaderErrors){let D=n.getProgramInfoLog(g)||"",q=n.getShaderInfoLog(y)||"",U=n.getShaderInfoLog(S)||"",C=D.trim(),B=q.trim(),O=U.trim(),H=!0,te=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,y,S);else{let V=bf(n,y,"vertex"),W=bf(n,S,"fragment");We("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+C+`
`+V+`
`+W)}else C!==""?ke("WebGLProgram: Program Info Log:",C):(B===""||O==="")&&(te=!1);te&&(A.diagnostics={runnable:H,programLog:C,vertexShader:{log:B,prefix:p},fragmentShader:{log:O,prefix:m}})}n.deleteShader(y),n.deleteShader(S),_=new or(n,g),b=wx(n,g)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=n.getProgramParameter(g,mx)),I},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=S,this}var Ux=0,jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Qh(e),t.set(e,i)),i}},Qh=class{constructor(e){this.id=Ux++,this.code=e,this.usedTimes=0}};function Bx(s){return s===Yn||s===To||s===Ao}function Ox(s,e,t,i,n,r){let o=new Xs,a=new jh,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,I,A,D,q){let U=A.fog,C=D.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||B,O),te=d[_.type],V=i.precision;_.precision!==null&&(V=i.getMaxPrecision(_.precision),V!==_.precision&&ke("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));let W=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Q=W!==void 0?W.length:0,Re=0;C.morphAttributes.position!==void 0&&(Re=1),C.morphAttributes.normal!==void 0&&(Re=2),C.morphAttributes.color!==void 0&&(Re=3);let He,Z,ge,Ce;if(te){let Ee=hn[te];He=Ee.vertexShader,Z=Ee.fragmentShader}else{He=_.vertexShader,Z=_.fragmentShader;let Ee=a.getVertexShaderStage(_),wt=a.getFragmentShaderStage(_);a.update(_,Ee,wt),ge=Ee.id,Ce=wt.id}let Le=s.getRenderTarget(),he=s.state.buffers.depth.getReversed(),Be=D.isInstancedMesh===!0,At=D.isBatchedMesh===!0,Oe=!!_.map,tt=!!_.matcap,Qe=!!H,K=Qe&&H.isPMREMTexture===!0,ce=!!_.aoMap,ue=!!_.lightMap,Ae=!!_.bumpMap&&_.wireframe===!1,Me=!!_.normalMap,Je=!!_.displacementMap,Fe=!!_.emissiveMap,lt=!!_.metalnessMap,ut=!!_.roughnessMap,Mt=_.anisotropy>0,N=_.clearcoat>0,Xt=_.diffuseRoughness>0,rt=_.dispersion>0,Ct=_.retroreflectivity>0,ve=_.iridescence>0,Gt=_.sheen>0,Ge=_.transmission>0,Xe=Mt&&!!_.anisotropyMap,R=N&&!!_.clearcoatMap,w=N&&!!_.clearcoatNormalMap,k=N&&!!_.clearcoatRoughnessMap,re=Xt&&!!_.diffuseRoughnessMap,ie=ve&&!!_.iridescenceMap,de=ve&&!!_.iridescenceThicknessMap,_e=Gt&&!!_.sheenColorMap,$=Gt&&!!_.sheenRoughnessMap,J=!!_.specularMap,pe=!!_.specularColorMap,L=!!_.specularIntensityMap,j=Ge&&!!_.transmissionMap,Y=Ge&&!!_.thicknessMap,me=!!_.gradientMap,le=!!_.alphaMap,fe=_.alphaTest>0,Ne=!!_.alphaHash,it=!!_.extensions,oe=ln;_.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(oe=s.toneMapping);let ze=K?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,et={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:He,fragmentShader:Z,defines:_.defines,customVertexShaderID:ge,customFragmentShaderID:Ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:At,batchingColor:At&&D._colorsTexture!==null,instancing:Be,instancingColor:Be&&D.instanceColor!==null,instancingMorph:Be&&D.morphTexture!==null,outputColorSpace:Le===null?s.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Oe,matcap:tt,envMap:Qe,envMapMode:Qe&&H.mapping,envMapPMREM:K,envMapMaxLod:K?ze.length-1:null,envMapSize:K?ze[0].width:null,aoMap:ce,lightMap:ue,bumpMap:Ae,normalMap:Me,displacementMap:Je,emissiveMap:Fe,normalMapObjectSpace:Me&&_.normalMapType===Gd,normalMapTangentSpace:Me&&_.normalMapType===Ro,packedNormalMap:Me&&_.normalMapType===Ro&&Bx(_.normalMap.format),metalnessMap:lt,roughnessMap:ut,anisotropy:Mt,anisotropyMap:Xe,clearcoat:N,clearcoatMap:R,clearcoatNormalMap:w,clearcoatRoughnessMap:k,diffuseRoughness:Xt,diffuseRoughnessMap:re,dispersion:rt,retroreflection:Ct,iridescence:ve,iridescenceMap:ie,iridescenceThicknessMap:de,sheen:Gt,sheenColorMap:_e,sheenRoughnessMap:$,specularMap:J,specularColorMap:pe,specularIntensityMap:L,transmission:Ge,transmissionMap:j,thicknessMap:Y,gradientMap:me,opaque:_.transparent===!1&&_.blending===Xn&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:fe,alphaHash:Ne,combine:_.combine,mapUv:Oe&&f(_.map.channel),aoMapUv:ce&&f(_.aoMap.channel),lightMapUv:ue&&f(_.lightMap.channel),bumpMapUv:Ae&&f(_.bumpMap.channel),normalMapUv:Me&&f(_.normalMap.channel),displacementMapUv:Je&&f(_.displacementMap.channel),emissiveMapUv:Fe&&f(_.emissiveMap.channel),metalnessMapUv:lt&&f(_.metalnessMap.channel),roughnessMapUv:ut&&f(_.roughnessMap.channel),anisotropyMapUv:Xe&&f(_.anisotropyMap.channel),clearcoatMapUv:R&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:de&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(_.sheenRoughnessMap.channel),specularMapUv:J&&f(_.specularMap.channel),specularColorMapUv:pe&&f(_.specularColorMap.channel),specularIntensityMapUv:L&&f(_.specularIntensityMap.channel),transmissionMapUv:j&&f(_.transmissionMap.channel),thicknessMapUv:Y&&f(_.thicknessMap.channel),alphaMapUv:le&&f(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Me||Mt),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!C.attributes.uv&&(Oe||le),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&Me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Re,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:q.filter(Ee=>Ee.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,decodeVideoTexture:Oe&&_.map.isVideoTexture===!0&&ot.getTransfer(_.map.colorSpace)===St,decodeVideoTextureEmissive:Fe&&_.emissiveMap.isVideoTexture===!0&&ot.getTransfer(_.emissiveMap.colorSpace)===St,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ht,flipSided:_.side===Vt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:it&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&_.extensions.multiDraw===!0||At)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return et.vertexUv1s=l.has(1),et.vertexUv2s=l.has(2),et.vertexUv3s=l.has(3),l.clear(),et}function p(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)b.push(I),b.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(m(b,_),x(b,_),b.push(s.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function m(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function x(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let b=d[_.type],I;if(b){let A=hn[b];I=Hi.clone(A.uniforms)}else I=_.uniforms;return I}function M(_,b){let I=h.get(b);return I!==void 0?++I.usedTimes:(I=new Nx(s,b,_,n),c.push(I),h.set(b,I)),I}function y(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function E(){a.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:M,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:E}}function Hx(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function zx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Rf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Cf(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,p,m,x){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:p,renderOrder:d.renderOrder,z:m,group:x},s[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.materialVariant=o(d),v.groupOrder=p,v.renderOrder=d.renderOrder,v.z=m,v.group=x),e++,v}function l(d,f,g,p,m,x,v){v.reversedDepth===!0&&(m=-m);let M=a(d,f,g,p,m,x);g.transmission>0?i.push(M):g.transparent===!0?n.push(M):t.push(M)}function c(d,f,g,p,m,x){let v=a(d,f,g,p,m,x);g.transmission>0?i.unshift(v):g.transparent===!0?n.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||zx),i.length>1&&i.sort(f||Rf),n.length>1&&n.sort(f||Rf)}function u(){for(let d=e,f=s.length;d<f;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:u,sort:h}}function kx(){let s=new WeakMap;function e(i,n){let r=s.get(i),o;return r===void 0?(o=new Cf,s.set(i,[o])):n>=r.length?(o=new Cf,r.push(o)):o=r[n],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Gx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Se};break;case"SpotLight":t={position:new P,direction:new P,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function Vx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Wx=0;function Xx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Yx(s){let e=new Gx,t=Vx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let n=new P,r=new ct,o=new ct;function a(c){let h=0,u=0,d=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let f=0,g=0,p=0,m=0,x=0,v=0,M=0,y=0,S=0,E=0,_=0,b=0,I=0,A=0;c.sort(Xx);for(let q=0,U=c.length;q<U;q++){let C=c[q],B=C.color,O=C.intensity,H=C.distance,te=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Yn?te=C.shadow.map.texture:te=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=B.r*O,u+=B.g*O,d+=B.b*O;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],O);A++}else if(C.isSunLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let W=C.shadow,Q=t.get(C);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[g]=Q,i.sunShadowMap[g]=te;let Re=W.getViewportCount();for(let He=0;He<Re;He++)i.sunShadowMatrix[p+He]=W.getMatrix(He),i.sunShadowCascade[p+He]=W._cascadeData[He];p+=Re,g++}i.sun[f]=V,f++}else if(C.isDirectionalLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let W=C.shadow,Q=t.get(C);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=C.shadow.matrix,S++}i.directional[m]=V,m++}else if(C.isSpotLight){let V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(B).multiplyScalar(O),V.distance=H,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[v]=V;let W=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,W.updateMatrices(C),C.castShadow&&I++),i.spotLightMatrix[v]=W.matrix,C.castShadow){let Q=t.get(C);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=te,_++}v++}else if(C.isRectAreaLight){let V=e.get(C);V.color.copy(B).multiplyScalar(O),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[M]=V,M++}else if(C.isPointLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let W=C.shadow,Q=t.get(C);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,Q.shadowCameraNear=W.camera.near,Q.shadowCameraFar=W.camera.far,i.pointShadow[x]=Q,i.pointShadowMap[x]=te,i.pointShadowMatrix[x]=C.shadow.matrix,E++}i.point[x]=V,x++}else if(C.isHemisphereLight){let V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(O),V.groundColor.copy(C.groundColor).multiplyScalar(O),i.hemi[y]=V,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==x||D.spotLength!==v||D.rectAreaLength!==M||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==E||D.numSpotShadows!==_||D.numSpotMaps!==b||D.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=m,i.spot.length=v,i.rectArea.length=M,i.point.length=x,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=p,i.sunShadowCascade.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+b-I,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=A,D.sunLength=f,D.directionalLength=m,D.pointLength=x,D.spotLength=v,D.rectAreaLength=M,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=E,D.numSpotShadows=_,D.numSpotMaps=b,D.numLightProbes=A,i.version=Wx++)}function l(c,h){let u=0,d=0,f=0,g=0,p=0,m=0,x=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let y=c[v];if(y.isSunLight){let S=i.sun[u];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(x),u++}else if(y.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(x),d++}else if(y.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(x),g++}else if(y.isRectAreaLight){let S=i.rectArea[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),o.identity(),r.copy(y.matrixWorld),r.premultiply(x),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),f++}else if(y.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:i}}function Pf(s){let e=new Yx(s),t=[],i=[],n=[];function r(u){h.camera=u,t.length=0,i.length=0,n.length=0}function o(u){u.isLightProbeGrid?n.push(u):t.push(u)}function a(u){i.push(u)}function l(){e.setup(t),n.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Zx(s){let e=new WeakMap;function t(n,r=0){let o=e.get(n),a;return o===void 0?(a=new Pf(s),e.set(n,[a])):r>=o.length?(a=new Pf(s),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var $x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jx=`uniform sampler2D shadow_pass;
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
}`,Kx=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],jx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],If=new ct,Co=new P,Yh=new P;function Qx(s,e,t){let i=new Hn,n=new ee,r=new ee,o=new It,a=new Za,l=new $a,c={},h=t.maxTextureSize,u={[Wn]:Vt,[Vt]:Wn,[ht]:ht},d=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:$x,fragmentShader:Jx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new pt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new ne(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=An;let x=this.type;this.render=function(E,_,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===yd&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=An);let I=s.getRenderTarget(),A=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Rn),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let U=x!==this.type;U&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(B=>B.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,B=E.length;C<B;C++){let O=E[C],H=O.shadow;if(H===void 0){ke("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);let te=H.getFrameExtents();n.multiply(te),r.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/te.x),n.x=r.x*te.x,H.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/te.y),n.y=r.y*te.y,H.mapSize.y=r.y));let V=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=V,H.map===null||U===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ir){if(O.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Wt(n.x,n.y,{format:Yn,type:Kt,minFilter:fi,magFilter:fi,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new Sn(n.x,n.y,Bi),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=yn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ni,H.map.depthTexture.magFilter=ni}else O.isPointLight?(H.map=new Io(n.x),H.map.depthTexture=new Yr(n.x,Qi)):(H.map=new Wt(n.x,n.y),H.map.depthTexture=new Sn(n.x,n.y,Qi)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=yn,this.type===An?(H.map.depthTexture.compareFunction=V?Ch:Rh,H.map.depthTexture.minFilter=fi,H.map.depthTexture.magFilter=fi):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ni,H.map.depthTexture.magFilter=ni);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==n.x||H.map.height!==n.y)&&H.map.setSize(n.x,n.y);let W=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();O.isPointLight!==!0&&H.updateMatrices(O,b);let Q=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:b.layers;for(let Re=0;Re<W;Re++){let He=H.getCamera(Re);if(O.isPointLight){let Z=H.camera,ge=H.matrix,Ce=O.distance||Z.far;Ce!==Z.far&&(Z.far=Ce,Z.updateProjectionMatrix()),Co.setFromMatrixPosition(O.matrixWorld),Z.position.copy(Co),Yh.copy(Z.position),Yh.add(Kx[Re]),Z.up.copy(jx[Re]),Z.lookAt(Yh),Z.updateMatrixWorld(),ge.makeTranslation(-Co.x,-Co.y,-Co.z),If.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(If,Z.coordinateSystem,Z.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,Re),s.clear();else{Re===0&&(s.setRenderTarget(H.map),s.clear());let Z=H.getViewport(Re);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),q.viewport(o)}i=H.getFrustum(Re),y(_,b,He,O,Q,this.type)}H.isPointLightShadow!==!0&&this.type===ir&&v(H,b),H.needsUpdate=!1}x=this.type,m.needsUpdate=!1,s.setRenderTarget(I,A,D)};function v(E,_){let b=e.update(p);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Wt(n.x,n.y,{format:Yn,type:Kt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(_,null,b,d,p,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(_,null,b,f,p,null)}function M(E,_,b,I){let A=null,D=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)A=D;else if(A=b.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let q=A.uuid,U=_.uuid,C=c[q];C===void 0&&(C={},c[q]=C);let B=C[U];B===void 0&&(B=A.clone(),C[U]=B,_.addEventListener("dispose",S)),A=B}if(A.visible=_.visible,A.wireframe=_.wireframe,I===ir?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:u[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let q=s.properties.get(A);q.light=b}return A}function y(E,_,b,I,A,D){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===ir)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let C=e.update(E),B=E.material;if(Array.isArray(B)){let O=C.groups;for(let H=0,te=O.length;H<te;H++){let V=O[H],W=B[V.materialIndex];if(W&&W.visible){let Q=M(E,W,I,D);E.onBeforeShadow(s,E,_,b,C,Q,V),s.renderBufferDirect(b,null,C,Q,E,V),E.onAfterShadow(s,E,_,b,C,Q,V)}}}else if(B.visible){let O=M(E,B,I,D);E.onBeforeShadow(s,E,_,b,C,O,null),s.renderBufferDirect(b,null,C,O,E,null),E.onAfterShadow(s,E,_,b,C,O,null)}}let U=E.children;for(let C=0,B=U.length;C<B;C++)y(U[C],_,b,I,A,D)}function S(E){E.target.removeEventListener("dispose",S);for(let b in c){let I=c[b],A=E.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}function e3(s,e){function t(){let L=!1,j=new It,Y=null,me=new It(0,0,0,0);return{setMask:function(le){Y!==le&&!L&&(s.colorMask(le,le,le,le),Y=le)},setLocked:function(le){L=le},setClear:function(le,fe,Ne,it,oe){oe===!0&&(le*=it,fe*=it,Ne*=it),j.set(le,fe,Ne,it),me.equals(j)===!1&&(s.clearColor(le,fe,Ne,it),me.copy(j))},reset:function(){L=!1,Y=null,me.set(-1,0,0,0)}}}function i(){let L=!1,j=!1,Y=null,me=null,le=null;return{setReversed:function(fe){if(j!==fe){let Ne=e.get("EXT_clip_control");fe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),j=fe;let it=le;le=null,this.setClear(it)}},getReversed:function(){return j},setTest:function(fe){fe?he(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(fe){Y!==fe&&!L&&(s.depthMask(fe),Y=fe)},setFunc:function(fe){if(j&&(fe=ef[fe]),me!==fe){switch(fe){case Aa:s.depthFunc(s.NEVER);break;case Ra:s.depthFunc(s.ALWAYS);break;case Ca:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case Pa:s.depthFunc(s.EQUAL);break;case Ia:s.depthFunc(s.GEQUAL);break;case Da:s.depthFunc(s.GREATER);break;case qa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=fe}},setLocked:function(fe){L=fe},setClear:function(fe){le!==fe&&(le=fe,j&&(fe=1-fe),s.clearDepth(fe))},reset:function(){L=!1,Y=null,me=null,le=null,j=!1}}}function n(){let L=!1,j=null,Y=null,me=null,le=null,fe=null,Ne=null,it=null,oe=null;return{setTest:function(ze){L||(ze?he(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(ze){j!==ze&&!L&&(s.stencilMask(ze),j=ze)},setFunc:function(ze,et,Ee){(Y!==ze||me!==et||le!==Ee)&&(s.stencilFunc(ze,et,Ee),Y=ze,me=et,le=Ee)},setOp:function(ze,et,Ee){(fe!==ze||Ne!==et||it!==Ee)&&(s.stencilOp(ze,et,Ee),fe=ze,Ne=et,it=Ee)},setLocked:function(ze){L=ze},setClear:function(ze){oe!==ze&&(s.clearStencil(ze),oe=ze)},reset:function(){L=!1,j=null,Y=null,me=null,le=null,fe=null,Ne=null,it=null,oe=null}}}let r=new t,o=new i,a=new n,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],p=null,m=!1,x=null,v=null,M=null,y=null,S=null,E=null,_=null,b=new Se(0,0,0),I=0,A=!1,D=null,q=null,U=null,C=null,B=null,O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,te=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=te>=2);let W=null,Q={},Re=s.getParameter(s.SCISSOR_BOX),He=s.getParameter(s.VIEWPORT),Z=new It().fromArray(Re),ge=new It().fromArray(He);function Ce(L,j,Y,me){let le=new Uint8Array(4),fe=s.createTexture();s.bindTexture(L,fe),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ne=0;Ne<Y;Ne++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(j+Ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return fe}let Le={};Le[s.TEXTURE_2D]=Ce(s.TEXTURE_2D,s.TEXTURE_2D,1),Le[s.TEXTURE_CUBE_MAP]=Ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[s.TEXTURE_2D_ARRAY]=Ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Le[s.TEXTURE_3D]=Ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(s.DEPTH_TEST),o.setFunc(Hs),Ae(!1),Me(gh),he(s.CULL_FACE),ce(Rn);function he(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Be(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function At(L,j){return d[L]!==j?(s.bindFramebuffer(L,j),d[L]=j,L===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=j),L===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=j),!0):!1}function Oe(L,j){let Y=g,me=!1;if(L){Y=f.get(j),Y===void 0&&(Y=[],f.set(j,Y));let le=L.textures;if(Y.length!==le.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,Ne=le.length;fe<Ne;fe++)Y[fe]=s.COLOR_ATTACHMENT0+fe;Y.length=le.length,me=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,me=!0);me&&s.drawBuffers(Y)}function tt(L){return p!==L?(s.useProgram(L),p=L,!0):!1}let Qe={[ds]:s.FUNC_ADD,[Sd]:s.FUNC_SUBTRACT,[bd]:s.FUNC_REVERSE_SUBTRACT};Qe[Ed]=s.MIN,Qe[wd]=s.MAX;let K={[Td]:s.ZERO,[Ad]:s.ONE,[Rd]:s.SRC_COLOR,[_h]:s.SRC_ALPHA,[Ld]:s.SRC_ALPHA_SATURATE,[Dd]:s.DST_COLOR,[Pd]:s.DST_ALPHA,[Cd]:s.ONE_MINUS_SRC_COLOR,[yh]:s.ONE_MINUS_SRC_ALPHA,[qd]:s.ONE_MINUS_DST_COLOR,[Id]:s.ONE_MINUS_DST_ALPHA,[Fd]:s.CONSTANT_COLOR,[Nd]:s.ONE_MINUS_CONSTANT_COLOR,[Ud]:s.CONSTANT_ALPHA,[Bd]:s.ONE_MINUS_CONSTANT_ALPHA};function ce(L,j,Y,me,le,fe,Ne,it,oe,ze){if(L===Rn){m===!0&&(Be(s.BLEND),m=!1);return}if(m===!1&&(he(s.BLEND),m=!0),L!==Md){if(L!==x||ze!==A){if((v!==ds||S!==ds)&&(s.blendEquation(s.FUNC_ADD),v=ds,S=ds),ze)switch(L){case Xn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kt:s.blendFunc(s.ONE,s.ONE);break;case xh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:We("WebGLState: Invalid blending: ",L);break}else switch(L){case Xn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kt:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case xh:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vh:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",L);break}M=null,y=null,E=null,_=null,b.set(0,0,0),I=0,x=L,A=ze}return}le=le||j,fe=fe||Y,Ne=Ne||me,(j!==v||le!==S)&&(s.blendEquationSeparate(Qe[j],Qe[le]),v=j,S=le),(Y!==M||me!==y||fe!==E||Ne!==_)&&(s.blendFuncSeparate(K[Y],K[me],K[fe],K[Ne]),M=Y,y=me,E=fe,_=Ne),(it.equals(b)===!1||oe!==I)&&(s.blendColor(it.r,it.g,it.b,oe),b.copy(it),I=oe),x=L,A=!1}function ue(L,j){L.side===ht?Be(s.CULL_FACE):he(s.CULL_FACE);let Y=L.side===Vt;j&&(Y=!Y),Ae(Y),L.blending===Xn&&L.transparent===!1?ce(Rn):ce(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let me=L.stencilWrite;a.setTest(me),me&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Fe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(L){D!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),D=L)}function Me(L){L!==vd?(he(s.CULL_FACE),L!==q&&(L===gh?s.cullFace(s.BACK):L===_d?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),q=L}function Je(L){L!==U&&(H&&s.lineWidth(L),U=L)}function Fe(L,j,Y){L?(he(s.POLYGON_OFFSET_FILL),(C!==j||B!==Y)&&(C=j,B=Y,o.getReversed()&&(j=-j,Y=-Y),s.polygonOffset(j,Y))):Be(s.POLYGON_OFFSET_FILL)}function lt(L){L?he(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function ut(L){L===void 0&&(L=s.TEXTURE0+O-1),W!==L&&(s.activeTexture(L),W=L)}function Mt(L,j,Y){Y===void 0&&(W===null?Y=s.TEXTURE0+O-1:Y=W);let me=Q[Y];me===void 0&&(me={type:void 0,texture:void 0},Q[Y]=me),(me.type!==L||me.texture!==j)&&(W!==Y&&(s.activeTexture(Y),W=Y),s.bindTexture(L,j||Le[L]),me.type=L,me.texture=j)}function N(){let L=Q[W];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Xt(){try{s.compressedTexImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function rt(){try{s.compressedTexImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function Ct(){try{s.texSubImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function ve(){try{s.texSubImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function Gt(){try{s.compressedTexSubImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function Ge(){try{s.compressedTexSubImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function Xe(){try{s.texStorage2D(...arguments)}catch(L){We("WebGLState:",L)}}function R(){try{s.texStorage3D(...arguments)}catch(L){We("WebGLState:",L)}}function w(){try{s.texImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function k(){try{s.texImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function re(L){return u[L]!==void 0?u[L]:s.getParameter(L)}function ie(L,j){u[L]!==j&&(s.pixelStorei(L,j),u[L]=j)}function de(L){Z.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function _e(L){ge.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ge.copy(L))}function $(L,j){let Y=c.get(j);Y===void 0&&(Y=new WeakMap,c.set(j,Y));let me=Y.get(L);me===void 0&&(me=s.getUniformBlockIndex(j,L.name),s.uniformBlockBinding(j,me,me),Y.set(L,me))}function J(L,j,Y){let le=c.get(j).get(L);l[le]!==Y&&(s.bindBufferBase(s.UNIFORM_BUFFER,le,Y),l[le]=Y)}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},W=null,Q={},d={},l={},f=new WeakMap,g=[],p=null,m=!1,x=null,v=null,M=null,y=null,S=null,E=null,_=null,b=new Se(0,0,0),I=0,A=!1,D=null,q=null,U=null,C=null,B=null,Z.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:Be,bindFramebuffer:At,drawBuffers:Oe,useProgram:tt,setBlending:ce,setMaterial:ue,setFlipSided:Ae,setCullFace:Me,setLineWidth:Je,setPolygonOffset:Fe,setScissorTest:lt,activeTexture:ut,bindTexture:Mt,unbindTexture:N,compressedTexImage2D:Xt,compressedTexImage3D:rt,texImage2D:w,texImage3D:k,pixelStorei:ie,getParameter:re,updateUBOMapping:$,uniformBlockBinding:J,texStorage2D:Xe,texStorage3D:R,texSubImage2D:Ct,texSubImage3D:ve,compressedTexSubImage2D:Gt,compressedTexSubImage3D:Ge,scissor:de,viewport:_e,reset:pe}}function t3(s,e,t,i,n,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,p=new FinalizationRegistry(R=>g.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,w){return m?new OffscreenCanvas(R,w):Hr("canvas")}function v(R,w,k){let re=1,ie=Xe(R);if((ie.width>k||ie.height>k)&&(re=k/Math.max(ie.width,ie.height)),re<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let de=Math.floor(re*ie.width),_e=Math.floor(re*ie.height);d===void 0&&(d=x(de,_e));let $=w?x(de,_e):d;return $.width=de,$.height=_e,$.getContext("2d").drawImage(R,0,0,de,_e),ke("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+de+"x"+_e+")."),$}else return"data"in R&&ke("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function M(R){return R.generateMipmaps}function y(R){s.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(R,w,k,re,ie,de=!1){if(R!==null){if(s[R]!==void 0)return s[R];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let _e;re&&(_e=e.get("EXT_texture_norm16"),_e||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=w;if(w===s.RED&&(k===s.FLOAT&&($=s.R32F),k===s.HALF_FLOAT&&($=s.R16F),k===s.UNSIGNED_BYTE&&($=s.R8),k===s.UNSIGNED_SHORT&&_e&&($=_e.R16_EXT),k===s.SHORT&&_e&&($=_e.R16_SNORM_EXT)),w===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.R8UI),k===s.UNSIGNED_SHORT&&($=s.R16UI),k===s.UNSIGNED_INT&&($=s.R32UI),k===s.BYTE&&($=s.R8I),k===s.SHORT&&($=s.R16I),k===s.INT&&($=s.R32I)),w===s.RG&&(k===s.FLOAT&&($=s.RG32F),k===s.HALF_FLOAT&&($=s.RG16F),k===s.UNSIGNED_BYTE&&($=s.RG8),k===s.UNSIGNED_SHORT&&_e&&($=_e.RG16_EXT),k===s.SHORT&&_e&&($=_e.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RG8UI),k===s.UNSIGNED_SHORT&&($=s.RG16UI),k===s.UNSIGNED_INT&&($=s.RG32UI),k===s.BYTE&&($=s.RG8I),k===s.SHORT&&($=s.RG16I),k===s.INT&&($=s.RG32I)),w===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RGB8UI),k===s.UNSIGNED_SHORT&&($=s.RGB16UI),k===s.UNSIGNED_INT&&($=s.RGB32UI),k===s.BYTE&&($=s.RGB8I),k===s.SHORT&&($=s.RGB16I),k===s.INT&&($=s.RGB32I)),w===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RGBA8UI),k===s.UNSIGNED_SHORT&&($=s.RGBA16UI),k===s.UNSIGNED_INT&&($=s.RGBA32UI),k===s.BYTE&&($=s.RGBA8I),k===s.SHORT&&($=s.RGBA16I),k===s.INT&&($=s.RGBA32I)),w===s.RGB&&(k===s.UNSIGNED_SHORT&&_e&&($=_e.RGB16_EXT),k===s.SHORT&&_e&&($=_e.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),w===s.RGBA){let J=de?Or:ot.getTransfer(ie);k===s.FLOAT&&($=s.RGBA32F),k===s.HALF_FLOAT&&($=s.RGBA16F),k===s.UNSIGNED_BYTE&&($=J===St?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&_e&&($=_e.RGBA16_EXT),k===s.SHORT&&_e&&($=_e.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(R,w){let k;return R?w===null||w===Qi||w===ms?k=s.DEPTH24_STENCIL8:w===Bi?k=s.DEPTH32F_STENCIL8:w===sr&&(k=s.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Qi||w===ms?k=s.DEPTH_COMPONENT24:w===Bi?k=s.DEPTH_COMPONENT32F:w===sr&&(k=s.DEPTH_COMPONENT16),k}function b(R,w){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==ni&&R.minFilter!==fi?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function I(R){let w=new WeakRef(R);i.get(R).__ref=w,g.add(w),p.register(R,w,w)}function A(R){let w=i.get(R).__ref;w!==void 0&&(g.delete(w),p.unregister(w))}function D(R){U(R.target)}function q(R){C(R.target)}function U(R){R.removeEventListener("dispose",D),A(R),O(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function C(R){R.removeEventListener("dispose",q),A(R),te(R)}function B(){for(let R of g){let w=R.deref();w!==void 0&&(w.isRenderTarget===!0?C(w):U(w))}g.clear(),u.clear()}function O(R){let w=i.get(R);if(w.__webglInit===void 0)return;let k=R.source,re=f.get(k);if(re){let ie=re[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&H(R),Object.keys(re).length===0&&f.delete(k)}i.remove(R)}function H(R){let w=i.get(R);s.deleteTexture(w.__webglTexture);let k=R.source,re=f.get(k);delete re[w.__cacheKey],o.memory.textures--}function te(R){let w=i.get(R);w.__depthDisposeCallback&&w.__depthDisposeCallback();let k=R.depthTexture;if(k&&k.renderTarget===R&&U(k),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(w.__webglFramebuffer[ie]))for(let de=0;de<w.__webglFramebuffer[ie].length;de++)s.deleteFramebuffer(w.__webglFramebuffer[ie][de]);else s.deleteFramebuffer(w.__webglFramebuffer[ie]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ie])}else{if(Array.isArray(w.__webglFramebuffer))for(let ie=0;ie<w.__webglFramebuffer.length;ie++)s.deleteFramebuffer(w.__webglFramebuffer[ie]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ie=0;ie<w.__webglColorRenderbuffer.length;ie++)w.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ie]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let re=R.textures;for(let ie=0,de=re.length;ie<de;ie++){let _e=i.get(re[ie]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(re[ie])}i.remove(R)}let V=0;function W(){V=0}function Q(){return V}function Re(R){V=R}function He(){let R=V;return R>=n.maxTextures&&ke("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+n.maxTextures),V+=1,R}function Z(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.mipmapsAutoUpdate),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function ge(R,w){let k=i.get(R);if(R.isVideoTexture&&Gt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let re=R.image;if(re===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(k,R,w);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+w)}function Ce(R,w){let k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ue(k,R,w);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+w)}function Le(R,w){let k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ue(k,R,w);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+w)}function he(R,w){let k=i.get(R);if(R.version>0&&k.__version!==R.version){Ae(k,R,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+w)}let Be={[zs]:s.REPEAT,[sn]:s.CLAMP_TO_EDGE,[La]:s.MIRRORED_REPEAT},At={[ni]:s.NEAREST,[zd]:s.NEAREST_MIPMAP_NEAREST,[Mo]:s.NEAREST_MIPMAP_LINEAR,[fi]:s.LINEAR,[ul]:s.LINEAR_MIPMAP_NEAREST,[ji]:s.LINEAR_MIPMAP_LINEAR},Oe={[Wd]:s.NEVER,[Ph]:s.ALWAYS,[Xd]:s.LESS,[Rh]:s.LEQUAL,[Yd]:s.EQUAL,[Ch]:s.GEQUAL,[Zd]:s.GREATER,[$d]:s.NOTEQUAL};function tt(R,w){if(w.type===Bi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===fi||w.magFilter===ul||w.magFilter===Mo||w.magFilter===ji||w.minFilter===fi||w.minFilter===ul||w.minFilter===Mo||w.minFilter===ji)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Be[w.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Be[w.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Be[w.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,At[w.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,At[w.minFilter]),w.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Oe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ni||w.minFilter!==Mo&&w.minFilter!==ji||w.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Qe(R,w){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",D),I(w));let re=w.source,ie=f.get(re);ie===void 0&&(ie={},f.set(re,ie));let de=Z(w);if(de!==R.__cacheKey){ie[de]===void 0&&(ie[de]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ie[de].usedTimes++;let _e=ie[R.__cacheKey];_e!==void 0&&(ie[R.__cacheKey].usedTimes--,_e.usedTimes===0&&H(w)),R.__cacheKey=de,R.__webglTexture=ie[de].texture}return k}function K(R,w,k){return Math.floor(Math.floor(R/k)/w)}function ce(R,w,k,re){let de=R.updateRanges;if(de.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,k,re,w.data);else{de.sort((L,j)=>L.start-j.start);let _e=0;for(let L=1;L<de.length;L++){let j=de[_e],Y=de[L],me=j.start+j.count,le=K(Y.start,w.width,4),fe=K(j.start,w.width,4);Y.start<=me+1&&le===fe&&K(Y.start+Y.count-1,w.width,4)===le?j.count=Math.max(j.count,Y.start+Y.count-j.start):(++_e,de[_e]=Y)}de.length=_e+1;let $=t.getParameter(s.UNPACK_ROW_LENGTH),J=t.getParameter(s.UNPACK_SKIP_PIXELS),pe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let L=0,j=de.length;L<j;L++){let Y=de[L],me=Math.floor(Y.start/4),le=Math.ceil(Y.count/4),fe=me%w.width,Ne=Math.floor(me/w.width),it=le,oe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ne),t.texSubImage2D(s.TEXTURE_2D,0,fe,Ne,it,oe,k,re,w.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,J),t.pixelStorei(s.UNPACK_SKIP_ROWS,pe)}}function ue(R,w,k){let re=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(re=s.TEXTURE_3D);let ie=Qe(R,w),de=w.source;t.bindTexture(re,R.__webglTexture,s.TEXTURE0+k);let _e=i.get(de);if(de.version!==_e.__version||ie===!0){if(t.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let oe=ot.getPrimaries(ot.workingColorSpace),ze=w.colorSpace===Pn?null:ot.getPrimaries(w.colorSpace),et=w.colorSpace===Pn||oe===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let J=v(w.image,!1,n.maxTextureSize);J=Ge(w,J);let pe=r.convert(w.format,w.colorSpace),L=r.convert(w.type),j=E(w.internalFormat,pe,L,w.normalized,w.colorSpace,w.isVideoTexture);tt(re,w);let Y,me=w.mipmaps,le=w.isVideoTexture!==!0,fe=_e.__version===void 0||ie===!0,Ne=de.dataReady,it=b(w,J);if(w.isDepthTexture)j=_(w.format===Cn,w.type),fe&&(le?t.texStorage2D(s.TEXTURE_2D,1,j,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,j,J.width,J.height,0,pe,L,null));else if(w.isDataTexture)if(me.length>0){le&&fe&&t.texStorage2D(s.TEXTURE_2D,it,j,me[0].width,me[0].height);for(let oe=0,ze=me.length;oe<ze;oe++)Y=me[oe],le?Ne&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Y.width,Y.height,pe,L,Y.data):t.texImage2D(s.TEXTURE_2D,oe,j,Y.width,Y.height,0,pe,L,Y.data);w.generateMipmaps=!1}else le?(fe&&t.texStorage2D(s.TEXTURE_2D,it,j,J.width,J.height),Ne&&ce(w,J,pe,L)):t.texImage2D(s.TEXTURE_2D,0,j,J.width,J.height,0,pe,L,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){le&&fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,it,j,me[0].width,me[0].height,J.depth);for(let oe=0,ze=me.length;oe<ze;oe++)if(Y=me[oe],w.format!==en)if(pe!==null)if(le){if(Ne)if(w.layerUpdates.size>0){let et=Hh(Y.width,Y.height,w.format,w.type);for(let Ee of w.layerUpdates){let wt=Y.data.subarray(Ee*et/Y.data.BYTES_PER_ELEMENT,(Ee+1)*et/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,Ee,Y.width,Y.height,1,pe,wt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Y.width,Y.height,J.depth,pe,Y.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,j,Y.width,Y.height,J.depth,0,Y.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Ne&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Y.width,Y.height,J.depth,pe,L,Y.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,j,Y.width,Y.height,J.depth,0,pe,L,Y.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{le&&fe&&t.texStorage2D(s.TEXTURE_2D,it,j,me[0].width,me[0].height);for(let oe=0,ze=me.length;oe<ze;oe++)Y=me[oe],w.format!==en?pe!==null?le?Ne&&t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,Y.width,Y.height,pe,Y.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,j,Y.width,Y.height,0,Y.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Ne&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Y.width,Y.height,pe,L,Y.data):t.texImage2D(s.TEXTURE_2D,oe,j,Y.width,Y.height,0,pe,L,Y.data)}else if(w.isDataArrayTexture)if(le){if(fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,it,j,J.width,J.height,J.depth),Ne)if(w.layerUpdates.size>0){let oe=Hh(J.width,J.height,w.format,w.type);for(let ze of w.layerUpdates){let et=J.data.subarray(ze*oe/J.data.BYTES_PER_ELEMENT,(ze+1)*oe/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ze,J.width,J.height,1,pe,L,et)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,pe,L,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,j,J.width,J.height,J.depth,0,pe,L,J.data);else if(w.isData3DTexture)le?(fe&&t.texStorage3D(s.TEXTURE_3D,it,j,J.width,J.height,J.depth),Ne&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,pe,L,J.data)):t.texImage3D(s.TEXTURE_3D,0,j,J.width,J.height,J.depth,0,pe,L,J.data);else if(w.isFramebufferTexture){if(fe)if(le)t.texStorage2D(s.TEXTURE_2D,it,j,J.width,J.height);else{let oe=J.width,ze=J.height;for(let et=0;et<it;et++)t.texImage2D(s.TEXTURE_2D,et,j,oe,ze,0,pe,L,null),oe>>=1,ze>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){let oe=s.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),J.parentNode!==oe){oe.appendChild(J),u.add(w),oe.onpaint=ze=>{let et=ze.changedElements;for(let Ee of u)et.includes(Ee.image)&&(Ee.needsUpdate=!0)},oe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,J);else{let et=s.RGBA,Ee=s.RGBA,wt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,et,Ee,wt,J)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(me.length>0){if(le&&fe){let oe=Xe(me[0]);t.texStorage2D(s.TEXTURE_2D,it,j,oe.width,oe.height)}for(let oe=0,ze=me.length;oe<ze;oe++)Y=me[oe],le?Ne&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,pe,L,Y):t.texImage2D(s.TEXTURE_2D,oe,j,pe,L,Y);w.generateMipmaps=!1}else if(le){if(fe){let oe=Xe(J);t.texStorage2D(s.TEXTURE_2D,it,j,oe.width,oe.height)}Ne&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,L,J)}else t.texImage2D(s.TEXTURE_2D,0,j,pe,L,J);M(w)&&w.mipmapsAutoUpdate===!0&&y(re),_e.__version=de.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Ae(R,w,k){if(w.image.length!==6)return;let re=Qe(R,w),ie=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);let de=i.get(ie);if(ie.version!==de.__version||re===!0){t.activeTexture(s.TEXTURE0+k);let _e=ot.getPrimaries(ot.workingColorSpace),$=w.colorSpace===Pn?null:ot.getPrimaries(w.colorSpace),J=w.colorSpace===Pn||_e===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let pe=w.isCompressedTexture||w.image[0].isCompressedTexture,L=w.image[0]&&w.image[0].isDataTexture,j=[];for(let Ee=0;Ee<6;Ee++)!pe&&!L?j[Ee]=v(w.image[Ee],!0,n.maxCubemapSize):j[Ee]=L?w.image[Ee].image:w.image[Ee],j[Ee]=Ge(w,j[Ee]);let Y=j[0],me=r.convert(w.format,w.colorSpace),le=r.convert(w.type),fe=E(w.internalFormat,me,le,w.normalized,w.colorSpace),Ne=w.isVideoTexture!==!0,it=de.__version===void 0||re===!0,oe=ie.dataReady,ze=b(w,Y);tt(s.TEXTURE_CUBE_MAP,w);let et;if(w.isDepthTexture){if(fe=_(w.format===Cn,w.type),it)if(Ne)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,fe,Y.width,Y.height);else for(let Ee=0;Ee<6;Ee++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,fe,Y.width,Y.height,0,me,le,null)}else if(pe){Ne&&it&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,fe,Y.width,Y.height);for(let Ee=0;Ee<6;Ee++){et=j[Ee].mipmaps;for(let wt=0;wt<et.length;wt++){let ei=et[wt];w.format!==en?me!==null?Ne?oe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,wt,0,0,ei.width,ei.height,me,ei.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,wt,fe,ei.width,ei.height,0,ei.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,wt,0,0,ei.width,ei.height,me,le,ei.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,wt,fe,ei.width,ei.height,0,me,le,ei.data)}}}else{if(et=w.mipmaps,Ne&&it){et.length>0&&ze++;let Ee=Xe(j[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,fe,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(L){Ne?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,j[Ee].width,j[Ee].height,me,le,j[Ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,fe,j[Ee].width,j[Ee].height,0,me,le,j[Ee].data);for(let wt=0;wt<et.length;wt++){let qn=et[wt].image[Ee].image;Ne?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,wt+1,0,0,qn.width,qn.height,me,le,qn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,wt+1,fe,qn.width,qn.height,0,me,le,qn.data)}}else{Ne?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,me,le,j[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,fe,me,le,j[Ee]);for(let wt=0;wt<et.length;wt++){let ei=et[wt];Ne?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,wt+1,0,0,me,le,ei.image[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,wt+1,fe,me,le,ei.image[Ee])}}}M(w)&&w.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),de.__version=ie.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Me(R,w,k,re,ie,de){let _e=r.convert(k.format,k.colorSpace),$=r.convert(k.type),J=E(k.internalFormat,_e,$,k.normalized,k.colorSpace),pe=i.get(w),L=i.get(k);if(L.__renderTarget=w,!pe.__hasExternalTextures){let j=Math.max(1,w.width>>de),Y=Math.max(1,w.height>>de);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,de,J,j,Y,w.depth,0,_e,$,null):t.texImage2D(ie,de,J,j,Y,0,_e,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),ve(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,ie,L.__webglTexture,0,Ct(w)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,ie,L.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Je(R,w,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),w.depthBuffer){let re=w.depthTexture,ie=re&&re.isDepthTexture?re.type:null,de=_(w.stencilBuffer,ie),_e=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ve(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(w),de,w.width,w.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(w),de,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,de,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,R)}else{let re=w.textures;for(let ie=0;ie<re.length;ie++){let de=re[ie],_e=r.convert(de.format,de.colorSpace),$=r.convert(de.type),J=E(de.internalFormat,_e,$,de.normalized,de.colorSpace);ve(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(w),J,w.width,w.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(w),J,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,J,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Fe(R,w,k){let re=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=i.get(w.depthTexture);ie.__renderTarget=w;let de=re?w.depthTexture.image[0]:w.depthTexture.image;(!ie.__webglTexture||de.width!==w.width||de.height!==w.height)&&(de.width=w.width,de.height=w.height,w.depthTexture.needsUpdate=!0),re?he(w.depthTexture,0):ge(w.depthTexture,0);let _e=ie.__webglTexture,$=Ct(w),J=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,pe=w.depthTexture.format===Cn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===yn)ve(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,J,_e,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,pe,J,_e,0);else if(w.depthTexture.format===Cn)ve(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,J,_e,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,pe,J,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(R){let w=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let re=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),re){let ie=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,re.removeEventListener("dispose",ie)};re.addEventListener("dispose",ie),w.__depthDisposeCallback=ie}w.__boundDepthTexture=re}if(R.depthTexture&&!w.__autoAllocateDepthBuffer)if(k)for(let re=0;re<6;re++)Fe(w.__webglFramebuffer[re],R,re);else R.texture.mipmaps.length>0?Fe(w.__webglFramebuffer[0],R,0):Fe(w.__webglFramebuffer,R,0);else if(k){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]===void 0)w.__webglDepthbuffer[re]=s.createRenderbuffer(),Je(w.__webglDepthbuffer[re],R,!1);else{let ie=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,de)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Je(w.__webglDepthbuffer,R,!1);else{let ie=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,de)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(R,w,k){let re=i.get(R);w!==void 0&&Me(re.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&lt(R)}function Mt(R){let w=R.texture,k=i.get(R),re=i.get(w);R.addEventListener("dispose",q),I(R);let ie=R.textures,de=R.isWebGLCubeRenderTarget===!0,_e=ie.length>1;if(_e||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=w.version,o.memory.textures++),de){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(w.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let J=0;J<w.mipmaps.length;J++)k.__webglFramebuffer[$][J]=s.createFramebuffer()}else k.__webglFramebuffer[$]=s.createFramebuffer()}else{if(w.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<w.mipmaps.length;$++)k.__webglFramebuffer[$]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(_e)for(let $=0,J=ie.length;$<J;$++){let pe=i.get(ie[$]);pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&ve(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<ie.length;$++){let J=ie[$];k.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[$]);let pe=r.convert(J.format,J.colorSpace),L=r.convert(J.type),j=E(J.internalFormat,pe,L,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),Y=Ct(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Y,j,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,k.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Je(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),tt(s.TEXTURE_CUBE_MAP,w);for(let $=0;$<6;$++)if(w.mipmaps.length>0)for(let J=0;J<w.mipmaps.length;J++)Me(k.__webglFramebuffer[$][J],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else Me(k.__webglFramebuffer[$],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);M(w)?y(s.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let $=0,J=ie.length;$<J;$++){let pe=ie[$],L=i.get(pe),j=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(j,L.__webglTexture),tt(j,pe),Me(k.__webglFramebuffer,R,pe,s.COLOR_ATTACHMENT0+$,j,0),M(pe)&&y(j)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,re.__webglTexture),tt($,w),w.mipmaps.length>0)for(let J=0;J<w.mipmaps.length;J++)Me(k.__webglFramebuffer[J],R,w,s.COLOR_ATTACHMENT0,$,J);else Me(k.__webglFramebuffer,R,w,s.COLOR_ATTACHMENT0,$,0);M(w)?y($):w.mipmaps.length>0&&s.texParameteri($,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&lt(R)}function N(R){let w=R.textures;for(let k=0,re=w.length;k<re;k++){let ie=w[k];if(M(ie)&&ie.mipmapsAutoUpdate===!0){let de=S(R),_e=i.get(ie).__webglTexture;t.bindTexture(de,_e),y(de),t.unbindTexture()}}}let Xt=[];function rt(R){if(R.samples>0){if(ve(R)===!1){let w=R.textures,k=R.width,re=R.height,ie=s.COLOR_BUFFER_BIT,de=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=i.get(R),$=w.length>1;if($)for(let pe=0;pe<w.length;pe++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let pe=0;pe<w.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);let L=i.get(w[pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,k,re,0,0,k,re,ie,s.NEAREST),l===!0&&(Xt.length=0,Xt.push(s.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Xt.push(de),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Xt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let pe=0;pe<w.length;pe++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);let L=i.get(w[pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,L,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let w=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Ct(R){return Math.min(n.maxSamples,R.samples)}function ve(R){let w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Gt(R){let w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function Ge(R,w){let k=R.colorSpace,re=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Br&&k!==Pn&&(ot.getTransfer(k)===St?(re!==en||ie!==vi)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",k)),w}function Xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=He,this.resetTextureUnits=W,this.getTextureUnits=Q,this.setTextureUnits=Re,this.setTexture2D=ge,this.setTexture2DArray=Ce,this.setTexture3D=Le,this.setTextureCube=he,this.rebindTextures=ut,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ve,this.dispose=B}function i3(s,e){function t(i,n=Pn){let r,o=ot.getTransfer(n);if(i===vi)return s.UNSIGNED_BYTE;if(i===fl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===pl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Eh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===wh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sh)return s.BYTE;if(i===bh)return s.SHORT;if(i===sr)return s.UNSIGNED_SHORT;if(i===dl)return s.INT;if(i===Qi)return s.UNSIGNED_INT;if(i===Bi)return s.FLOAT;if(i===Kt)return s.HALF_FLOAT;if(i===Th)return s.ALPHA;if(i===Ah)return s.RGB;if(i===en)return s.RGBA;if(i===yn)return s.DEPTH_COMPONENT;if(i===Cn)return s.DEPTH_STENCIL;if(i===ml)return s.RED;if(i===gl)return s.RED_INTEGER;if(i===Yn)return s.RG;if(i===xl)return s.RG_INTEGER;if(i===vl)return s.RGBA_INTEGER;if(i===So||i===bo||i===Eo||i===wo)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_l||i===yl||i===Ml||i===Sl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bl||i===El||i===wl||i===Tl||i===Al||i===To||i===Rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bl||i===El)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Tl)return r.COMPRESSED_R11_EAC;if(i===Al)return r.COMPRESSED_SIGNED_R11_EAC;if(i===To)return r.COMPRESSED_RG11_EAC;if(i===Rl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Cl||i===Pl||i===Il||i===Dl||i===ql||i===Ll||i===Fl||i===Nl||i===Ul||i===Bl||i===Ol||i===Hl||i===zl||i===kl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Cl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Il)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ql)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ll)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ul)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ol)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gl||i===Vl||i===Wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Gl)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xl||i===Yl||i===Ao||i===Zl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Xl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ms?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var n3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s3=`
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

}`,eu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new vt({vertexShader:n3,fragmentShader:s3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new Rt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tu=class extends rn{constructor(e,t){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,p=typeof XRWebGLBinding<"u",m=new eu,x={},v=t.getContextAttributes(),M=null,y=null,S=[],E=[],_=new ee,b=null,I=null,A=new $t;A.viewport=new It;let D=new $t;D.viewport=new It;let q=[A,D],U=new rl,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ge=S[Z];return ge===void 0&&(ge=new Ys,S[Z]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Z){let ge=S[Z];return ge===void 0&&(ge=new Ys,S[Z]=ge),ge.getGripSpace()},this.getHand=function(Z){let ge=S[Z];return ge===void 0&&(ge=new Ys,S[Z]=ge),ge.getHandSpace()};function O(Z){let ge=E.indexOf(Z.inputSource);if(ge===-1)return;let Ce=S[ge];Ce!==void 0&&(Ce.update(Z.inputSource,Z.frame,c||o),Ce.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",te);for(let Z=0;Z<S.length;Z++){let ge=E[Z];ge!==null&&(E[Z]=null,S[Z].disconnect(ge))}C=null,B=null,m.reset();for(let Z in x)delete x[Z];if(e.setRenderTarget(M),f=null,d=null,u=null,n=null,y=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),I!==null){let Z=I.camera;Z.fov=I.fov,Z.zoom=I.zoom,Z.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&p&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(M=e.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",H),n.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),p&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Le=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=v.stencil?Cn:yn,Le=v.stencil?ms:Qi);let Be={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Be),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Wt(d.textureWidth,d.textureHeight,{format:en,type:vi,depthTexture:new Sn(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,Ce),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Wt(f.framebufferWidth,f.framebufferHeight,{format:en,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),He.setContext(n),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(Z){for(let ge=0;ge<Z.removed.length;ge++){let Ce=Z.removed[ge],Le=E.indexOf(Ce);Le>=0&&(E[Le]=null,S[Le].disconnect(Ce))}for(let ge=0;ge<Z.added.length;ge++){let Ce=Z.added[ge],Le=E.indexOf(Ce);if(Le===-1){for(let Be=0;Be<S.length;Be++)if(Be>=E.length){E.push(Ce),Le=Be;break}else if(E[Be]===null){E[Be]=Ce,Le=Be;break}if(Le===-1)break}let he=S[Le];he&&he.connect(Ce)}}function V(Z,ge){ge===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ge.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let ge=Z.near,Ce=Z.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(Ce=m.depthFar)),U.near=D.near=A.near=ge,U.far=D.far=A.far=Ce,(C!==U.near||B!==U.far)&&(n.updateRenderState({depthNear:U.near,depthFar:U.far}),C=U.near,B=U.far),U.layers.mask=Z.layers.mask|6,A.layers.mask=U.layers.mask&-5,D.layers.mask=U.layers.mask&-3;let Le=Z.parent,he=U.cameras;V(U,Le);for(let Be=0;Be<he.length;Be++)V(he[Be],Le);U.projectionMatrix.copy(A.projectionMatrix),U.projectionMatrixInverse.copy(A.projectionMatrixInverse),I===null&&Z.isPerspectiveCamera&&(I={camera:Z,fov:Z.fov,zoom:Z.zoom}),W(Z,U,Le)};function W(Z,ge,Ce){Ce===null?Z.matrix.copy(ge.matrixWorld):(Z.matrix.copy(Ce.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ge.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ge.projectionMatrix),Z.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Vs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Z){return x[Z]};let Q=null;function Re(Z,ge){if(h=ge.getViewerPose(c||o),g=ge,h!==null){let Ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Le=!1;Ce.length!==U.cameras.length&&(U.cameras.length=0,Le=!0);for(let Oe=0;Oe<Ce.length;Oe++){let tt=Ce[Oe],Qe=null;if(f!==null)Qe=f.getViewport(tt);else{let ce=u.getViewSubImage(d,tt);Qe=ce.viewport,Oe===0&&(e.setRenderTargetTextures(y,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(y))}let K=q[Oe];K===void 0&&(K=new $t,K.layers.enable(Oe),K.viewport=new It,q[Oe]=K),K.matrix.fromArray(tt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(tt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Oe===0&&(U.matrix.copy(K.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Le===!0&&U.cameras.push(K)}let he=n.enabledFeatures;if(he&&he.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&p){u=i.getBinding();let Oe=u.getDepthInformation(Ce[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,n.renderState)}if(he&&he.includes("camera-access")&&p){e.state.unbindTexture(),u=i.getBinding();for(let Oe=0;Oe<Ce.length;Oe++){let tt=Ce[Oe].camera;if(tt){let Qe=x[tt];Qe||(Qe=new Zr,x[tt]=Qe);let K=u.getCameraImage(tt);Qe.sourceTexture=K}}}}for(let Ce=0;Ce<S.length;Ce++){let Le=E[Ce],he=S[Ce];Le!==null&&he!==void 0&&he.update(Le,ge,c||o)}Q&&Q(Z,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),g=null}let He=new Df;He.setAnimationLoop(Re),this.setAnimationLoop=function(Z){Q=Z},this.dispose=function(){}}},r3=new ct,kf=new Ye;kf.set(-1,0,0,0,1,0,0,0,1);function o3(s,e){function t(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function i(m,x){x.color.getRGB(m.fogColor.value,Uh(s)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function n(m,x,v,M,y){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(m,x):x.isMeshLambertMaterial?(r(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(m,x),u(m,x)):x.isMeshPhongMaterial?(r(m,x),h(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(m,x),d(m,x),x.isMeshPhysicalMaterial&&f(m,x,y)):x.isMeshMatcapMaterial?(r(m,x),g(m,x)):x.isMeshDepthMaterial?r(m,x):x.isMeshDistanceMaterial?(r(m,x),p(m,x)):x.isMeshNormalMaterial?r(m,x):x.isLineBasicMaterial?(o(m,x),x.isLineDashedMaterial&&a(m,x)):x.isPointsMaterial?l(m,x,v,M):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,t(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===Vt&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,t(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===Vt&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,t(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,t(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let v=e.get(x),M=v.envMap,y=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(r3.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(kf),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,m.aoMapTransform))}function o(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform))}function a(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,v,M){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*v,m.scale.value=M*.5,x.map&&(m.map.value=x.map,t(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function h(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function u(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function d(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function f(m,x,v){m.ior.value=x.ior,x.diffuseRoughness>0&&(m.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Vt&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,x){x.matcap&&(m.matcap.value=x.matcap)}function p(m,x){let v=e.get(x).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function a3(s,e,t,i){let n={},r={};function o(v,M){let y=M.program;i.uniformBlockBinding(v,y,n[v.id])}function a(v,M){let y=n[v.id];y===void 0&&(g(v),y=l(v),n[v.id]=y,v.addEventListener("dispose",m));let S=M.program;i.updateUBOMapping(v,S);let E=e.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let M=s.createBuffer(),y=v.__size,S=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,y,S),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function c(v){let M=n[v.id],y=v.uniforms,S=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,_=y.length;E<_;E++){let b=y[E];if(Array.isArray(b))for(let I=0,A=b.length;I<A;I++)h(b[I],E,I,S);else h(b,E,0,S)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,M,y,S){if(d(v,M,y,S)===!0){let E=v.__offset,_=v.value;if(Array.isArray(_)){let b=0;for(let I=0;I<_.length;I++){let A=_[I],D=p(A,!0);u(A,v.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,v.__data)}}function u(v,M,y){typeof v=="number"||typeof v=="boolean"?M[y]=v:v.isMatrix3?(M[y]=v.elements[0],M[y+1]=v.elements[1],M[y+2]=v.elements[2],M[y+3]=0,M[y+4]=v.elements[3],M[y+5]=v.elements[4],M[y+6]=v.elements[5],M[y+7]=0,M[y+8]=v.elements[6],M[y+9]=v.elements[7],M[y+10]=v.elements[8],M[y+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-y),y):v.toArray(M,y)}function d(v,M,y,S){let E=v.value,_=M+"_"+y;if(Array.isArray(E)){S[_]===void 0&&(S[_]=[]);let b=S[_],I=!1;for(let A=0;A<E.length;A++)f(E[A],b,A)===!0&&(I=!0);return I}return f(E,S,_)}function f(v,M,y){if(M[y]===void 0)return typeof v=="number"||typeof v=="boolean"?M[y]=v:ArrayBuffer.isView(v)?M[y]=v.slice():M[y]=v.clone(),!0;{let S=M[y];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return M[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function g(v){let M=v.uniforms,y=0,S=16;for(let _=0,b=M.length;_<b;_++){let I=Array.isArray(M[_])?M[_]:[M[_]];for(let A=0,D=I.length;A<D;A++){let q=I[A],U=Array.isArray(q.value)?q.value:[q.value],C=Array.isArray(M[_])||Array.isArray(q.value),B=y;for(let H=0,te=U.length;H<te;H++){let V=U[H],W=p(V,C),Q=y%S,Re=Q%W.boundary,He=Q+Re;y+=Re,He!==0&&S-He<W.storage&&(y+=S-He),H===0&&(B=y),y+=W.storage}let O=q.type==="int"?Int32Array:q.type==="uint"?Uint32Array:Float32Array;q.__data=new O((y-B)/Float32Array.BYTES_PER_ELEMENT),q.__offset=B}}let E=y%S;return E>0&&(y+=S-E),v.__size=y,v.__cache={},this}function p(v,M){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let M=v.target;M.removeEventListener("dispose",m),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function x(){for(let v in n)s.deleteBuffer(n[v]);n={},r={}}return{bind:o,update:a,dispose:x}}var l3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cn=null;function c3(){return cn===null&&(cn=new Wr(l3,16,16,Yn,Kt),cn.name="DFG_LUT",cn.minFilter=fi,cn.magFilter=fi,cn.wrapS=sn,cn.wrapT=sn,cn.generateMipmaps=!1,cn.needsUpdate=!0),cn}var Zn=class{constructor(e={}){let{canvas:t=Kd(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=vi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let p=f,m=new Set([vl,xl,gl]),x=new Set([vi,Qi,sr,ms,fl,pl]),v=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},S=null,E=null,_=[],b=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,q=null,U=null,C=null,B=null;this._outputColorSpace=Tt;let O=0,H=0,te=null,V=-1,W=null,Q=new It,Re=new It,He=null,Z=new Se(0),ge=0,Ce=t.width,Le=t.height,he=1,Be=null,At=null,Oe=new It(0,0,Ce,Le),tt=new It(0,0,Ce,Le),Qe=!1,K=new Hn,ce=new Oa,ue=!1,Ae=!1,Me=new ct,Je=new P,Fe=new It,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function Mt(){return te===null?he:1}let N=i;function Xt(T,F){return t.getContext(T,F)}let rt,Ct,ve,Gt,Ge,Xe,R,w,k,re,ie,de,_e,$,J,pe,L,j,Y,me,le,fe,Ne;try{let T={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),N===null){let F="webgl2";if(N=Xt(F,T),N===null)throw Xt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(T){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),We("WebGLRenderer: "+T.message),T}function it(){rt=new y2(N),rt.init(),le=new i3(N,rt),Ct=new c2(N,rt,e,le),ve=new e3(N,rt),Ct.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),U=N.createFramebuffer(),C=N.createFramebuffer(),B=N.createFramebuffer(),Gt=new b2(N),Ge=new Hx,Xe=new t3(N,rt,ve,Ge,Ct,le,Gt),R=new _2(A),w=new wm(N),fe=new a2(N,w),k=new M2(N,w,Gt,fe),re=new w2(N,k,w,fe,Gt),j=new E2(N,Ct,Xe),J=new h2(Ge),ie=new Ox(A,R,rt,Ct,fe,J),de=new o3(A,Ge),_e=new kx,$=new Zx(rt),L=new o2(A,R,ve,re,g,l),pe=new Qx(A,re,Ct),Ne=new a3(N,Gt,Ct,ve),Y=new l2(N,rt,Gt),me=new S2(N,rt,Gt),Gt.programs=ie.programs,A.capabilities=Ct,A.extensions=rt,A.properties=Ge,A.renderLists=_e,A.shadowMap=pe,A.state=ve,A.info=Gt}p!==vi&&(I=new A2(p,t.width,t.height,a,n,r));let oe=new tu(A,N);this.xr=oe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let T=rt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=rt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(T){T!==void 0&&(he=T,this.setSize(Ce,Le,!1))},this.getSize=function(T){return T.set(Ce,Le)},this.setSize=function(T,F,X=!0){if(oe.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=T,Le=F,t.width=Math.floor(T*he),t.height=Math.floor(F*he),X===!0&&(t.style.width=T+"px",t.style.height=F+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Ce*he,Le*he).floor()},this.setDrawingBufferSize=function(T,F,X){Ce=T,Le=F,he=X,t.width=Math.floor(T*X),t.height=Math.floor(F*X),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(p===vi){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Q)},this.getViewport=function(T){return T.copy(Oe)},this.setViewport=function(T,F,X,z){T.isVector4?Oe.set(T.x,T.y,T.z,T.w):Oe.set(T,F,X,z),ve.viewport(Q.copy(Oe).multiplyScalar(Mt()).round())},this.getScissor=function(T){return T.copy(tt)},this.setScissor=function(T,F,X,z){T.isVector4?tt.set(T.x,T.y,T.z,T.w):tt.set(T,F,X,z),ve.scissor(Re.copy(tt).multiplyScalar(Mt()).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(T){ve.setScissorTest(Qe=T)},this.setOpaqueSort=function(T){Be=T},this.setTransparentSort=function(T){At=T},this.getClearColor=function(T){return T.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,X=!0){let z=0;if(T){let G=!1;if(te!==null){let ye=te.texture.format;G=m.has(ye)}if(G){let ye=te.texture.type,Pe=x.has(ye),xe=L.getClearColor(),Te=L.getClearAlpha(),qe=xe.r,Ze=xe.g,dt=xe.b;Pe?(v[0]=qe,v[1]=Ze,v[2]=dt,v[3]=Te,N.clearBufferuiv(N.COLOR,0,v)):(M[0]=qe,M[1]=Ze,M[2]=dt,M[3]=Te,N.clearBufferiv(N.COLOR,0,M))}else z|=N.COLOR_BUFFER_BIT}F&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),q=T},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),L.dispose(),_e.dispose(),$.dispose(),Xe.dispose(),Ge.dispose(),R.dispose(),re.dispose(),k.dispose(),fe.dispose(),Ne.dispose(),ie.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Mu),oe.removeEventListener("sessionend",Su),jn.stop()};function ze(T){T.preventDefault(),Dh("WebGLRenderer: Context Lost."),D=!0}function et(){Dh("WebGLRenderer: Context Restored."),D=!1;let T=Gt.autoReset,F=pe.enabled,X=pe.autoUpdate,z=pe.needsUpdate,G=pe.type;it(),Gt.autoReset=T,pe.enabled=F,pe.autoUpdate=X,pe.needsUpdate=z,pe.type=G}function Ee(T){We("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function wt(T){let F=T.target;F.removeEventListener("dispose",wt),ei(F)}function ei(T){qn(T),Ge.remove(T)}function qn(T){let F=Ge.get(T).programs;F!==void 0&&(F.forEach(function(X){ie.releaseProgram(X)}),T.isShaderMaterial&&ie.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,X,z,G,ye){F===null&&(F=lt);let Pe=G.isMesh&&G.matrixWorld.determinantAffine()<0,xe=Wp(T,F,X,z,G);ve.setMaterial(z,Pe);let Te=X.index,qe=1;if(z.wireframe===!0){if(Te=k.getWireframeAttribute(X),Te===void 0)return;qe=2}let Ze=X.drawRange,dt=X.attributes.position,Ie=Ze.start*qe,ft=(Ze.start+Ze.count)*qe;ye!==null&&(Ie=Math.max(Ie,ye.start*qe),ft=Math.min(ft,(ye.start+ye.count)*qe)),Te!==null?(Ie=Math.max(Ie,0),ft=Math.min(ft,Te.count)):dt!=null&&(Ie=Math.max(Ie,0),ft=Math.min(ft,dt.count));let Yt=ft-Ie;if(Yt<0||Yt===1/0)return;fe.setup(G,z,xe,X,Te);let Dt,Pt=Y;if(Te!==null&&(Dt=w.get(Te),Pt=me,Pt.setIndex(Dt)),G.isMesh)z.wireframe===!0?(ve.setLineWidth(z.wireframeLinewidth*Mt()),Pt.setMode(N.LINES)):Pt.setMode(N.TRIANGLES);else if(G.isLine){let oi=z.linewidth;oi===void 0&&(oi=1),ve.setLineWidth(oi*Mt()),G.isLineSegments?Pt.setMode(N.LINES):G.isLineLoop?Pt.setMode(N.LINE_LOOP):Pt.setMode(N.LINE_STRIP)}else G.isPoints?Pt.setMode(N.POINTS):G.isSprite&&Pt.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let oi=G._multiDrawStarts,De=G._multiDrawCounts,ui=G._multiDrawCount,Et=Te?w.get(Te).bytesPerElement:1,Qn=Ge.get(z).currentProgram.getUniforms();for(let ai=0;ai<ui;ai++)Qn.setValue(N,"_gl_DrawID",ai),Pt.render(oi[ai]/Et,De[ai])}else if(G.isInstancedMesh)Pt.renderInstances(Ie,Yt,G.count);else if(X.isInstancedBufferGeometry){let oi=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,De=Math.min(X.instanceCount,oi);Pt.renderInstances(Ie,Yt,De)}else Pt.render(Ie,Yt)};function yu(T,F,X,z){q!==null&&T.isNodeMaterial&&q.setObject(z,T),ue===!0&&J.setState(T,X,!1),T.transparent===!0&&T.side===ht&&T.forceSinglePass===!1?(T.side=Vt,T.needsUpdate=!0,wr(T,F,z),T.side=Wn,T.needsUpdate=!0,wr(T,F,z),T.side=ht):wr(T,F,z)}this.compile=function(T,F,X=null){X===null&&(X=T),q!==null&&q.renderStart(T,F,X),E=$.get(X),E.init(F),b.push(E),X.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),T!==X&&T.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),q!==null&&q.updateLights(E.state.lightsArray),Ae=this.localClippingEnabled,ue=J.init(this.clippingPlanes,Ae),ue===!0&&J.setGlobalState(this.clippingPlanes,F),q!==null&&pe.render(E.state.shadowsArray,X,F);let z=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ye=G.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){let xe=ye[Pe];yu(xe,X,F,G),z.add(xe)}else yu(ye,X,F,G),z.add(ye)}),E=b.pop(),q!==null&&q.renderEnd(),z},this.compileAsync=function(T,F,X=null){let z=this.compile(T,F,X);return new Promise(G=>{function ye(){if(z.forEach(function(Pe){let Te=Ge.get(Pe).currentProgram;(Te===void 0||Te.isReady())&&z.delete(Pe)}),z.size===0){G(T);return}setTimeout(ye,10)}rt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Pc=null;function Gp(T){Pc&&Pc(T)}function Mu(){jn.stop()}function Su(){jn.start()}let jn=new Df;jn.setAnimationLoop(Gp),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(T){Pc=T,oe.setAnimationLoop(T),T===null?jn.stop():jn.start()},oe.addEventListener("sessionstart",Mu),oe.addEventListener("sessionend",Su),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;q!==null&&q.renderStart(T,F);let X=oe.enabled===!0&&oe.isPresenting===!0,z=I!==null&&(te===null||X)&&I.begin(A,te);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(F),F=oe.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,F,te),E=$.get(T,b.length),E.init(F),E.state.textureUnits=Xe.getTextureUnits(),b.push(E),Me.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?ce.setFromArrayCamera(F):K.setFromProjectionMatrix(Me,Li,F.reversedDepth),Ae=this.localClippingEnabled,ue=J.init(this.clippingPlanes,Ae),S=_e.get(T,_.length),S.init(),_.push(S),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){let Pe=A.xr.getDepthSensingMesh();Pe!==null&&Ic(Pe,F,-1/0,A.sortObjects)}Ic(T,F,0,A.sortObjects),S.finish(),q!==null&&q.updateLights(E.state.lightsArray),A.sortObjects===!0&&S.sort(Be,At),ut=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,ut&&L.addToRenderList(S,T),this.info.autoReset===!0&&this.info.reset(),ue===!0&&J.beginShadows();let G=E.state.shadowsArray;if(pe.render(G,T,F),ue===!0&&J.endShadows(),(z&&I.hasRenderPass())===!1){let Pe=S.opaque,xe=S.transmissive;if(E.setupLights(),F.isArrayCamera){let Te=F.cameras;if(xe.length>0)for(let qe=0,Ze=Te.length;qe<Ze;qe++){let dt=Te[qe];Eu(Pe,xe,T,dt)}ut&&L.render(T);for(let qe=0,Ze=Te.length;qe<Ze;qe++){let dt=Te[qe];bu(S,T,dt,dt.viewport)}}else xe.length>0&&Eu(Pe,xe,T,F),ut&&L.render(T),bu(S,T,F)}te!==null&&H===0&&(Xe.updateMultisampleRenderTarget(te),Xe.updateRenderTargetMipmap(te)),z&&I.end(A),T.isScene===!0&&T.onAfterRender(A,T,F),fe.resetDefaultState(),V=-1,W=null,b.pop(),b.length>0?(E=b[b.length-1],Xe.setTextureUnits(E.state.textureUnits),ue===!0&&J.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?S=_[_.length-1]:S=null,q!==null&&q.renderEnd()};function Ic(T,F,X,z){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){let Pe=F.isArrayCamera?ce:K;if(!T.frustumCulled||T.intersectsFrustum(Pe)){z&&Fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Me);let xe=re.update(T),Te=T.material;Te.visible&&S.push(T,xe,Te,X,Fe.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){let Pe=F.isArrayCamera?ce:K;if(!T.frustumCulled||T.intersectsFrustum(Pe)){let xe=re.update(T),Te=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Fe.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Fe.copy(xe.boundingSphere.center)),Fe.applyMatrix4(T.matrixWorld).applyMatrix4(Me)),Array.isArray(Te)){let qe=xe.groups;for(let Ze=0,dt=qe.length;Ze<dt;Ze++){let Ie=qe[Ze],ft=Te[Ie.materialIndex];ft&&ft.visible&&S.push(T,xe,ft,X,Fe.z,Ie,F)}}else Te.visible&&S.push(T,xe,Te,X,Fe.z,null,F)}}}let ye=T.children;for(let Pe=0,xe=ye.length;Pe<xe;Pe++)Ic(ye[Pe],F,X,z)}function bu(T,F,X,z){let{opaque:G,transmissive:ye,transparent:Pe}=T;E.setupLightsView(X),ue===!0&&J.setGlobalState(A.clippingPlanes,X),z&&ve.viewport(Q.copy(z)),G.length>0&&Yo(G,F,X),ye.length>0&&Yo(ye,F,X),Pe.length>0&&Yo(Pe,F,X),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Eu(T,F,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Ie=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new Wt(1,1,{generateMipmaps:!0,type:Ie?Kt:vi,minFilter:ji,samples:Math.max(4,Ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let ye=E.state.transmissionRenderTarget[z.id],Pe=z.viewport||Q;ye.setSize(Pe.z*A.transmissionResolutionScale,Pe.w*A.transmissionResolutionScale);let xe=A.getRenderTarget(),Te=A.getActiveCubeFace(),qe=A.getActiveMipmapLevel();A.setRenderTarget(ye),A.getClearColor(Z),ge=A.getClearAlpha(),ge<1&&A.setClearColor(16777215,.5),A.clear(),ut&&L.render(X);let Ze=A.toneMapping;A.toneMapping=ln;let dt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),ue===!0&&J.setGlobalState(A.clippingPlanes,z),Yo(T,X,z),Xe.updateMultisampleRenderTarget(ye),Xe.updateRenderTargetMipmap(ye),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ft=0,Yt=F.length;ft<Yt;ft++){let Dt=F[ft],{object:Pt,geometry:oi,material:De,group:ui}=Dt;if(De.side===ht&&Pt.layers.test(z.layers)){let Et=De.side;De.side=Vt,De.needsUpdate=!0,wu(Pt,X,z,oi,De,ui),De.side=Et,De.needsUpdate=!0,Ie=!0}}Ie===!0&&(Xe.updateMultisampleRenderTarget(ye),Xe.updateRenderTargetMipmap(ye))}A.setRenderTarget(xe,Te,qe),A.setClearColor(Z,ge),dt!==void 0&&(z.viewport=dt),A.toneMapping=Ze}function Yo(T,F,X){let z=F.isScene===!0?F.overrideMaterial:null;for(let G=0,ye=T.length;G<ye;G++){let Pe=T[G],{object:xe,geometry:Te,group:qe}=Pe,Ze=Pe.material;Ze.allowOverride===!0&&z!==null&&(Ze=z),xe.layers.test(X.layers)&&wu(xe,F,X,Te,Ze,qe)}}function wu(T,F,X,z,G,ye){q!==null&&G.isNodeMaterial&&q.setObject(T,G),T.onBeforeRender(A,F,X,z,G,ye),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(A,F,X,z,T,ye),G.transparent===!0&&G.side===ht&&G.forceSinglePass===!1?(G.side=Vt,G.needsUpdate=!0,A.renderBufferDirect(X,F,z,G,T,ye),G.side=Wn,G.needsUpdate=!0,A.renderBufferDirect(X,F,z,G,T,ye),G.side=ht):A.renderBufferDirect(X,F,z,G,T,ye),T.onAfterRender(A,F,X,z,G,ye)}function Tu(T){let F=0;for(let X of T)X.texture!==null&&F++;return F}function wr(T,F,X){F.isScene!==!0&&(F=lt);let z=Ge.get(T),G=E.state.lights,ye=E.state.shadowsArray,Pe=G.state.version,xe=ie.getParameters(T,G.state,ye,F,X,E.state.lightProbeGridArray),Te=ie.getProgramCacheKey(xe),qe=z.programs;z.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,z.fog=F.fog;let Ze=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;z.envMap=R.get(T.envMap||z.environment,Ze),z.envMapRotation=z.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,qe===void 0&&(T.addEventListener("dispose",wt),qe=new Map,z.programs=qe,z.programVariants=new Map);let dt=qe.get(Te);if(dt!==void 0){if(z.currentProgram===dt&&z.lightsStateVersion===Pe)return Ru(T,xe),dt}else xe.uniforms=ie.getUniforms(T),q!==null&&T.isNodeMaterial&&q.build(T,X,xe),T.onBeforeCompile(xe,A),dt=ie.acquireProgram(xe,Te),qe.set(Te,dt),z.uniforms=xe.uniforms;let Ie=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=J.uniform),Ru(T,xe),z.needsLights=Yp(T),z.lightsStateVersion=Pe,z.needsLights&&(Ie.ambientLightColor.value=G.state.ambient,Ie.lightProbe.value=G.state.probe,Ie.sunLights.value=G.state.sun,Ie.sunLightShadows.value=G.state.sunShadow,Ie.directionalLights.value=G.state.directional,Ie.directionalLightShadows.value=G.state.directionalShadow,Ie.spotLights.value=G.state.spot,Ie.spotLightShadows.value=G.state.spotShadow,Ie.rectAreaLights.value=G.state.rectArea,Ie.ltc_1.value=G.state.rectAreaLTC1,Ie.ltc_2.value=G.state.rectAreaLTC2,Ie.pointLights.value=G.state.point,Ie.pointLightShadows.value=G.state.pointShadow,Ie.hemisphereLights.value=G.state.hemi,Ie.sunShadowMatrix.value=G.state.sunShadowMatrix,Ie.sunShadowCascade.value=G.state.sunShadowCascade,Ie.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ie.spotLightMatrix.value=G.state.spotLightMatrix,Ie.spotLightMap.value=G.state.spotLightMap,Ie.pointShadowMatrix.value=G.state.pointShadowMatrix),z.numLightProbeGrids=Tu(E.state.lightProbeGridArray),z.currentProgram=dt,z.uniformsList=null,dt}function Vp(T,F,X,z,G){let ye=Ge.get(T),Pe=ye.currentProgram.id+","+z+","+G,xe=ye.programVariants.get(Pe);return xe===void 0?(xe=wr(T,F,X),ye.programVariants.set(Pe,xe)):(ye.currentProgram=xe,ye.uniformsList=null,ye.outputColorSpace=z,ye.toneMapping=G),xe}function Au(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=or.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Ru(T,F){let X=Ge.get(T);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Wp(T,F,X,z,G){F.isScene!==!0&&(F=lt),Xe.resetTextureUnits();let ye=F.fog,Pe=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?F.environment:null,xe=te===null?A.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ot.workingColorSpace,Te=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,qe=R.get(z.envMap||Pe,Te),Ze=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,dt=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ie=!!X.morphAttributes.position,ft=!!X.morphAttributes.normal,Yt=!!X.morphAttributes.color,Dt=ln;z.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Dt=A.toneMapping);let Pt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oi=Pt!==void 0?Pt.length:0,De=Ge.get(z),ui=E.state.lights;if(ue===!0&&(Ae===!0||T!==W)){let Ot=T===W&&z.id===V;J.setState(z,T,Ot)}let Et=!1,Qn=!1;z.version===De.__version?De.needsLights&&De.lightsStateVersion!==ui.state.version||G.isBatchedMesh&&De.batching===!1||!G.isBatchedMesh&&De.batching===!0||G.isBatchedMesh&&De.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&De.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&De.instancing===!1||!G.isInstancedMesh&&De.instancing===!0||G.isSkinnedMesh&&De.skinning===!1||!G.isSkinnedMesh&&De.skinning===!0||G.isInstancedMesh&&De.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&De.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&De.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&De.instancingMorph===!1&&G.morphTexture!==null||De.envMap!==qe||z.fog===!0&&De.fog!==ye||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==J.numPlanes||De.numIntersection!==J.numIntersection)||De.vertexAlphas!==Ze||De.vertexTangents!==dt||De.morphTargets!==Ie||De.morphNormals!==ft||De.morphColors!==Yt||De.morphTargetsCount!==oi||De.numLightProbeGrids!==Tu(E.state.lightProbeGridArray)?Et=!0:(De.outputColorSpace!==xe||De.toneMapping!==Dt)&&(Qn=!0):(Et=!0,De.__version=z.version);let ai=De.currentProgram;(Et===!0||Qn===!0)&&(ai=Qn===!0?Vp(z,F,G,xe,Dt):wr(z,F,G),q&&z.isNodeMaterial&&q.onUpdateProgram(z,ai,De));let Zo=!1,Ln=!1,es=!1,_t=ai.getUniforms(),si=De.uniforms;if(ve.useProgram(ai.program)&&(Zo=!0,Ln=!0,es=!0),z.id!==V&&(V=z.id,Ln=!0),Zo||W!==T){ve.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),_t.setValue(N,"projectionMatrix",T.projectionMatrix),_t.setValue(N,"viewMatrix",T.matrixWorldInverse);let ti=_t.map.cameraPosition;ti!==void 0&&ti.setValue(N,Je.setFromMatrixPosition(T.matrixWorld)),Ct.logarithmicDepthBuffer&&_t.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_t.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),W!==T&&(W=T,Ln=!0,es=!0)}if(De.needsLights&&(ui.state.sunShadowMap.length>0&&_t.setValue(N,"sunShadowMap",ui.state.sunShadowMap,Xe),ui.state.directionalShadowMap.length>0&&_t.setValue(N,"directionalShadowMap",ui.state.directionalShadowMap,Xe),ui.state.spotShadowMap.length>0&&_t.setValue(N,"spotShadowMap",ui.state.spotShadowMap,Xe),ui.state.pointShadowMap.length>0&&_t.setValue(N,"pointShadowMap",ui.state.pointShadowMap,Xe)),G.isSkinnedMesh){_t.setOptional(N,G,"bindMatrix"),_t.setOptional(N,G,"bindMatrixInverse");let Ot=G.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),_t.setValue(N,"boneTexture",Ot.boneTexture,Xe))}G.isBatchedMesh&&(_t.setOptional(N,G,"batchingTexture"),_t.setValue(N,"batchingTexture",G._matricesTexture,Xe),_t.setOptional(N,G,"batchingIdTexture"),_t.setValue(N,"batchingIdTexture",G._indirectTexture,Xe),_t.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&_t.setValue(N,"batchingColorTexture",G._colorsTexture,Xe));let Gi=X.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&j.update(G,X,ai),(Ln||De.receiveShadow!==G.receiveShadow)&&(De.receiveShadow=G.receiveShadow,_t.setValue(N,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&F.environment!==null&&(si.envMapIntensity.value=F.environmentIntensity),si.dfgLUT!==void 0&&(si.dfgLUT.value=c3()),Ln){if(_t.setValue(N,"toneMappingExposure",A.toneMappingExposure),De.needsLights&&Xp(si,es),ye&&z.fog===!0&&de.refreshFogUniforms(si,ye),de.refreshMaterialUniforms(si,z,he,Le,E.state.transmissionRenderTarget[T.id]),De.needsLights&&De.numLightProbeGrids>0){let Ot=y,ti=0;for(let dn of E.state.lightProbeGridArray)dn.texture!==null&&(Ot.textures[ti]=dn.texture,Ot.min[ti]=dn.boundingBox.min,Ot.max[ti]=dn.boundingBox.max,Ot.resolution[ti]=dn.resolution,ti++);for(let dn in Ot)Ot[dn].length=ti;si.probesSH.value=Ot.textures,si.probesMin.value=Ot.min,si.probesMax.value=Ot.max,si.probesResolution.value=Ot.resolution}or.upload(N,Au(De),si,Xe)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(or.upload(N,Au(De),si,Xe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_t.setValue(N,"center",G.center),_t.setValue(N,"modelViewMatrix",G.modelViewMatrix),_t.setValue(N,"normalMatrix",G.normalMatrix),_t.setValue(N,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let Ot=z.uniformsGroups;for(let ti=0,dn=Ot.length;ti<dn;ti++){let Pu=Ot[ti];Ne.update(Pu,ai),Ne.bind(Pu,ai)}}return ai}function Xp(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Yp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(T,F,X){let z=Ge.get(T);z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ge.get(T.texture).__webglTexture=F,Ge.get(T.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let X=Ge.get(T);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,X=0){te=T,O=F,H=X;let z=null,G=!1,ye=!1;if(T){let xe=Ge.get(T);if(xe.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(N.FRAMEBUFFER,xe.__webglFramebuffer),Q.copy(T.viewport),Re.copy(T.scissor),He=T.scissorTest,ve.viewport(Q),ve.scissor(Re),ve.setScissorTest(He),V=-1;return}else if(xe.__webglFramebuffer===void 0)Xe.setupRenderTarget(T);else if(xe.__hasExternalTextures)Xe.rebindTextures(T,Ge.get(T.texture).__webglTexture,Ge.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ze=T.depthTexture;if(xe.__boundDepthTexture!==Ze){if(Ze!==null&&Ge.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(T)}}let Te=T.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ye=!0);let qe=Ge.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(qe[F])?z=qe[F][X]:z=qe[F],G=!0):T.samples>0&&Xe.useMultisampledRTT(T)===!1?z=Ge.get(T).__webglMultisampledFramebuffer:Array.isArray(qe)?z=qe[X]:z=qe,Q.copy(T.viewport),Re.copy(T.scissor),He=T.scissorTest}else Q.copy(Oe).multiplyScalar(he).floor(),Re.copy(tt).multiplyScalar(he).floor(),He=Qe;if(X!==0&&(z=U),ve.bindFramebuffer(N.FRAMEBUFFER,z)&&ve.drawBuffers(T,z),ve.viewport(Q),ve.scissor(Re),ve.setScissorTest(He),G){let xe=Ge.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,X)}else if(ye){let xe=F;for(let Te=0;Te<T.textures.length;Te++){let qe=Ge.get(T.textures[Te]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Te,qe.__webglTexture,X,xe)}}else if(T!==null&&X!==0){let xe=Ge.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xe.__webglTexture,X)}V=-1};function Cu(T){let F=Ge.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=Ct.textureFormatReadable(T.format),F.__typeReadable=Ct.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,X,z,G,ye,Pe,xe=0){if(!(T&&T.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Te=Te[Pe],Array.isArray(Te)&&(Te=Te[0])),Te){ve.bindFramebuffer(N.FRAMEBUFFER,Te);try{let qe=T.textures[xe],Ze=qe.format,dt=qe.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe);let Ie=Cu(qe);if(Ie.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-z&&X>=0&&X<=T.height-G&&N.readPixels(F,X,z,G,le.convert(Ze),le.convert(dt),ye)}finally{let qe=te!==null?Ge.get(te).__webglFramebuffer:null;ve.bindFramebuffer(N.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(T,F,X,z,G,ye,Pe,xe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Te=Te[Pe],Array.isArray(Te)&&(Te=Te[0])),Te)if(F>=0&&F<=T.width-z&&X>=0&&X<=T.height-G){ve.bindFramebuffer(N.FRAMEBUFFER,Te);let qe=T.textures[xe],Ze=qe.format,dt=qe.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe);let Ie=Cu(qe);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ft),N.bufferData(N.PIXEL_PACK_BUFFER,ye.byteLength,N.STREAM_READ),N.readPixels(F,X,z,G,le.convert(Ze),le.convert(dt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Yt=te!==null?Ge.get(te).__webglFramebuffer:null;ve.bindFramebuffer(N.FRAMEBUFFER,Yt);let Dt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Qd(N,Dt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ft),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ye),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ft),N.deleteSync(Dt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,X=0){let z=Math.pow(2,-X),G=Math.floor(T.image.width*z),ye=Math.floor(T.image.height*z),Pe=F!==null?F.x:0,xe=F!==null?F.y:0;Xe.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,Pe,xe,G,ye),ve.unbindTexture()},this.copyTextureToTexture=function(T,F,X=null,z=null,G=0,ye=0){let Pe,xe,Te,qe,Ze,dt,Ie,ft,Yt,Dt=T.isCompressedTexture?T.mipmaps[ye]:T.image;if(X!==null)Pe=X.max.x-X.min.x,xe=X.max.y-X.min.y,Te=X.isBox3?X.max.z-X.min.z:1,qe=X.min.x,Ze=X.min.y,dt=X.isBox3?X.min.z:0;else{let _t=Math.pow(2,-G);Pe=Math.floor(Dt.width*_t),xe=Math.floor(Dt.height*_t),T.isDataArrayTexture?Te=Dt.depth:T.isData3DTexture?Te=Math.floor(Dt.depth*_t):Te=1,qe=0,Ze=0,dt=0}z!==null?(Ie=z.x,ft=z.y,Yt=z.z):(Ie=0,ft=0,Yt=0);let Pt=le.convert(F.format),oi=le.convert(F.type),De;F.isData3DTexture?(Xe.setTexture3D(F,0),De=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Xe.setTexture2DArray(F,0),De=N.TEXTURE_2D_ARRAY):(Xe.setTexture2D(F,0),De=N.TEXTURE_2D),ve.activeTexture(N.TEXTURE0),ve.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),ve.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ve.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);let ui=ve.getParameter(N.UNPACK_ROW_LENGTH),Et=ve.getParameter(N.UNPACK_IMAGE_HEIGHT),Qn=ve.getParameter(N.UNPACK_SKIP_PIXELS),ai=ve.getParameter(N.UNPACK_SKIP_ROWS),Zo=ve.getParameter(N.UNPACK_SKIP_IMAGES);ve.pixelStorei(N.UNPACK_ROW_LENGTH,Dt.width),ve.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Dt.height),ve.pixelStorei(N.UNPACK_SKIP_PIXELS,qe),ve.pixelStorei(N.UNPACK_SKIP_ROWS,Ze),ve.pixelStorei(N.UNPACK_SKIP_IMAGES,dt);let Ln=T.isDataArrayTexture||T.isData3DTexture,es=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let _t=Ge.get(T),si=Ge.get(F),Gi=Ge.get(_t.__renderTarget),Ot=Ge.get(si.__renderTarget);ve.bindFramebuffer(N.READ_FRAMEBUFFER,Gi.__webglFramebuffer),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let ti=0;ti<Te;ti++)Ln&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ge.get(T).__webglTexture,G,dt+ti),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ge.get(F).__webglTexture,ye,Yt+ti)),N.blitFramebuffer(qe,Ze,qe+Pe,Ze+xe,Ie,ft,Ie+Pe,ft+xe,N.DEPTH_BUFFER_BIT,N.NEAREST);ve.bindFramebuffer(N.READ_FRAMEBUFFER,null),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||Ge.has(T)){let _t=Ge.get(T),si=Ge.get(F);ve.bindFramebuffer(N.READ_FRAMEBUFFER,C),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,B);for(let Gi=0;Gi<Te;Gi++)Ln?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_t.__webglTexture,G,dt+Gi):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_t.__webglTexture,G),es?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,si.__webglTexture,ye,Yt+Gi):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,si.__webglTexture,ye),G!==0?N.blitFramebuffer(qe,Ze,qe+Pe,Ze+xe,Ie,ft,Ie+Pe,ft+xe,N.COLOR_BUFFER_BIT,N.NEAREST):es?N.copyTexSubImage3D(De,ye,Ie,ft,Yt+Gi,qe,Ze,Pe,xe):N.copyTexSubImage2D(De,ye,Ie,ft,qe,Ze,Pe,xe);ve.bindFramebuffer(N.READ_FRAMEBUFFER,null),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else es?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(De,ye,Ie,ft,Yt,Pe,xe,Te,Pt,oi,Dt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(De,ye,Ie,ft,Yt,Pe,xe,Te,Pt,Dt.data):N.texSubImage3D(De,ye,Ie,ft,Yt,Pe,xe,Te,Pt,oi,Dt):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ye,Ie,ft,Pe,xe,Pt,oi,Dt.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ye,Ie,ft,Dt.width,Dt.height,Pt,Dt.data):N.texSubImage2D(N.TEXTURE_2D,ye,Ie,ft,Pe,xe,Pt,oi,Dt);ve.pixelStorei(N.UNPACK_ROW_LENGTH,ui),ve.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Et),ve.pixelStorei(N.UNPACK_SKIP_PIXELS,Qn),ve.pixelStorei(N.UNPACK_SKIP_ROWS,ai),ve.pixelStorei(N.UNPACK_SKIP_IMAGES,Zo),ye===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&N.generateMipmap(De),ve.unbindTexture()},this.initRenderTarget=function(T){Ge.get(T).__webglFramebuffer===void 0&&Xe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Xe.setTextureCube(T,0):T.isData3DTexture?Xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Xe.setTexture2DArray(T,0):Xe.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){O=0,H=0,te=null,ve.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var Ql=class{constructor({tierCount:e,tier:t=0,scale:i=1,minScale:n=.65,warmup:r=3e3,cooldown:o=2500,slowMs:a=26,fastMs:l=14.5,windowSize:c=50,upWindows:h=4,ignoreAbove:u=250}={}){Object.assign(this,{tierCount:e,tier:t,scale:i,minScale:n,warmup:r,cooldown:o,slowMs:a,fastMs:l,windowSize:c,upWindows:h,ignoreAbove:u}),this.frames=[],this.startedAt=null,this.lastChange=-1/0,this.fastWindows=0,this.blockedTier=1/0}update(e,t){if(!(e>0)||e>this.ignoreAbove||(this.startedAt==null&&(this.startedAt=t),t-this.startedAt<this.warmup)||(this.frames.push(e),this.frames.length<this.windowSize))return null;let i=this.frames.slice().sort((a,l)=>a-l);this.frames.length=0;let n=Math.floor(i.length*.1),r=i.slice(n,i.length-n),o=r.reduce((a,l)=>a+l,0)/r.length;return t-this.lastChange<this.cooldown?null:o>this.slowMs?(this.fastWindows=0,this.scale>this.minScale+.05?(this.lastChange=t,this.scale=Math.max(this.minScale,+(this.scale-.12).toFixed(2)),{type:"scale",scale:this.scale}):this.tier>0?(this.lastChange=t,this.blockedTier=Math.min(this.blockedTier,this.tier),this.tier-=1,this.scale=1,{type:"tier",tier:this.tier,scale:1}):null):o<this.fastMs?(this.fastWindows+=1,this.fastWindows<this.upWindows?null:(this.fastWindows=0,this.scale<1?(this.lastChange=t,this.scale=Math.min(1,+(this.scale+.12).toFixed(2)),{type:"scale",scale:this.scale}):this.tier+1<this.tierCount&&this.tier+1<this.blockedTier?(this.lastChange=t,this.tier+=1,this.scale=.88,{type:"tier",tier:this.tier,scale:.88}):null)):(this.fastWindows=0,null)}};var lr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Pi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},h3=new us(-1,1,1,-1,0,1),iu=class extends pt{constructor(){super(),this.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ve([0,2,0,0,2,0],2))}},u3=new iu,$n=class{constructor(e){this._mesh=new ne(u3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,h3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var vs=class extends Pi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hi.clone(e.uniforms),this.material=new vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $n(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var qo=class extends Pi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},ec=class extends Pi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var tc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ee);this._width=i.width,this._height=i.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vs(lr),this.copyPass.material.blending=Rn,this.timer=new po}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qo!==void 0&&(o instanceof qo?i=!0:o instanceof ec&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ic=class extends Pi{constructor(e,t,i=null,n=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Se}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n}};var Gf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var cr=class s extends Pi{constructor(e,t=1,i,n){super(),this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new ee(e.x,e.y):new ee(256,256),this.clearColor=new Se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(r,o,{type:Kt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Wt(r,o,{type:Kt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Wt(r,o,{type:Kt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Gf;this.highPassUniforms=Hi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ee(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Hi.clone(lr.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:lr.vertexShader,fragmentShader:lr.fragmentShader,premultipliedAlpha:!0,blending:kt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Se,this._oldClearAlpha=1,this._basic=new mt,this._fsQuad=new $n(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new ee(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let n=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;n.push((o*a+(o+1)*l)/c),r.push(c)}return new vt({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new ee(.5,.5)},direction:{value:new ee(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};cr.BlurDirectionX=new ee(1,0);cr.BlurDirectionY=new ee(0,1);var Lo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var nc=class extends Pi{constructor(){super(),this.isOutputPass=!0,this.uniforms=Hi.clone(Lo.uniforms),this.material=new Qs({name:Lo.name,uniforms:this.uniforms,vertexShader:Lo.vertexShader,fragmentShader:Lo.fragmentShader}),this._fsQuad=new $n(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===vo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ki?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fs?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ui?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===yo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var nu={name:"StackFinishA",uniforms:{tDiffuse:{value:null},uRes:{value:[1,1]},uTime:{value:0},uTiltCenter:{value:.52},uTiltRange:{value:.18},uBlur:{value:0},uCA:{value:0},uWobble:{value:0},uPixel:{value:0},uZoomBlur:{value:0},uDesat:{value:0},uTint:{value:[1,1,1]},uFlash:{value:0},uFlashColor:{value:[1,.95,.8]}},vertexShader:`
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
  `},su={name:"StackFinishB",uniforms:{tDiffuse:{value:null},uRes:{value:[1,1]},uTime:{value:0},uVignette:{value:.3},uGrain:{value:.04},uLevels:{value:0},uPixel:{value:1},uScan:{value:0},uFade:{value:0},uFadeColor:{value:[0,0,0]},uAspect:{value:1},uLift:{value:[0,0,0]},uSat:{value:1},uContrast:{value:1},uVeilColor:{value:[.1,.1,.1]},uSpot:{value:Array.from({length:6},()=>new It(0,0,0,0))},uSpotRect:{value:Array.from({length:6},()=>new It(0,0,1,1))}},vertexShader:`
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
  `};var Ke=Math.PI*2,be=(s,e=0,t=1)=>s<e?e:s>t?t:s,xi=(s,e,t)=>s+(e-s)*t,d3=(s,e,t)=>s===e?0:be((t-s)/(e-s)),_i=(s,e,t)=>{let i=d3(s,e,t);return i*i*(3-2*i)};var hr=(s,e)=>(s%e+e)%e;var xt=(s,e,t,i)=>xi(s,e,1-Math.exp(-t*i)),ur=s=>1-(1-s)**3,Fo=s=>s<.5?4*s*s*s:1-(-2*s+2)**3/2,Wf=(s,e=1.70158)=>1+(e+1)*(s-1)**3+e*(s-1)**2;function Ut(s=1){let e=s|0,t=()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return t.range=(i,n)=>i+(n-i)*t(),t.int=(i,n)=>Math.floor(i+(n-i+1)*t()),t.pick=i=>i[Math.floor(t()*i.length)%i.length],t.sign=()=>t()<.5?-1:1,t}function Vf(s){let e=Math.sin(s*127.1+311.7)*43758.5453123;return e-Math.floor(e)}function f3(s,e=0){let t=Math.floor(s),i=s-t,n=Vf(t+e*17.13),r=Vf(t+1+e*17.13),o=i*i*(3-2*i);return xi(n,r,o)*2-1}function Xf(s,e=0,t=4){let i=0,n=.5,r=1;for(let o=0;o<t;o+=1)i+=f3(s*r,e+o*3.7)*n,n*=.5,r*=2;return i}var sc=class{constructor(e=0,t=120,i=12){this.value=e,this.target=e,this.velocity=0,this.stiffness=t,this.damping=i}step(e){let t=Math.max(1,Math.ceil(e/.008)),i=e/t;for(let n=0;n<t;n+=1)this.velocity+=((this.target-this.value)*this.stiffness-this.velocity*this.damping)*i,this.value+=this.velocity*i;return this.value}snap(e){this.value=e,this.target=e,this.velocity=0}};function p3(s){let e=/^#?([0-9a-f]{6})$/i.exec(String(s||""));if(!e)return null;let t=parseInt(e[1],16);return[t>>16&255,t>>8&255,t&255]}function _s(s,e=[1,1,1]){let t=p3(s);return t?t.map(i=>i/255):e}var m3=Object.freeze(["paper","sunset","primetime"]),dr=s=>m3.includes(s)?s:"paper",g3=Object.freeze({paper:Object.freeze({}),sunset:Object.freeze({"#E3A33B":"#FFC53D","#2F8478":"#2EC4B6","#7FA6BD":"#9B5DE5","#D5472F":"#FF5964","#7A6AA6":"#B983FF","#C96F8A":"#FF8FAB"}),primetime:Object.freeze({"#E3A33B":"#FFC83D","#2F8478":"#35D0E8","#7FA6BD":"#F2F5FF","#D5472F":"#E5322D","#7A6AA6":"#9B8CFF","#C96F8A":"#FF7FA8"})});function In(s,e){let t=g3[s];return!t||typeof e!="string"?e||"#2F8478":t[e.toUpperCase()]||e}var fr=Object.freeze({paper:["#2F8478","#7FA6BD","#D5472F"],sunset:["#2EC4B6","#9B5DE5","#FF5964"],primetime:["#35D0E8","#F2F5FF","#E5322D"]}),rc=Object.freeze({paper:Object.freeze({name:"paper",label:"The Paper Theatre",ink:"#2A2520",paper:"#F4EDDF",cream:"#F7F0E2",amber:"#E3A33B",teal:"#2F8478",blue:"#7FA6BD",vermilion:"#D5472F",violet:"#7A6AA6",rose:"#C96F8A",skyHorizon:"#FFD8A6",skyMid:"#F6E7CC",skyZenith:"#8FC9CC",journey:["#F4EDDF","#F6D9AE","#7FA6BD","#243047"],fog:"#F4EDDF",fogDensity:32e-5,floor:"#9CC4B2",floorLine:"#F4EDDF",plinth:"#F2E8D3",plinthRim:"#E3A33B",hills:["#E9D8B8","#C9D8C4","#9FC0B3","#7FA6BD","#5E8EA0"],key:"#FFE4BC",fill:"#CFE3EA",ground:"#E7D2B0",rim:"#A5D6D8",exposure:.98,bloom:.1,bloomThreshold:1.15,bloomRadius:.4,sat:1.18,contrast:1.08,grain:.03,vignette:.24,tilt:.5,aberration:9e-4,toneMapping:"neutral",fontKey:"paper"}),sunset:Object.freeze({name:"sunset",label:"Sunset Stack \u201994",ink:"#170B33",paper:"#2B1155",cream:"#FFF3E2",amber:"#FFC53D",teal:"#2EC4B6",blue:"#9B5DE5",vermilion:"#FF5964",violet:"#B983FF",rose:"#FF8FAB",skyHorizon:"#FF7A3D",skyMid:"#8E1D6B",skyZenith:"#120826",journey:["#FF6B35","#C1266B","#4A1A8C","#0B0620"],fog:"#3A1166",fogDensity:42e-5,floor:"#1A0B3A",floorLine:"#FF4FD8",plinth:"#2B1155",plinthRim:"#FFC53D",hills:["#3A1166","#2B0F57","#220C48","#190838","#120528"],key:"#FFB27A",fill:"#7A3CFF",ground:"#FF4FD8",rim:"#2EC4B6",exposure:1,bloom:.5,bloomThreshold:1,bloomRadius:.6,sat:1.12,contrast:1.06,grain:.02,vignette:.42,tilt:0,aberration:.0016,toneMapping:"aces",fontKey:"sunset",pixel:3,levels:14}),primetime:Object.freeze({name:"primetime",label:"Prime Time",ink:"#061238",paper:"#0A1A55",cream:"#FFFFFF",amber:"#FFC83D",teal:"#35D0E8",blue:"#F2F5FF",vermilion:"#E5322D",violet:"#9B8CFF",rose:"#FF7FA8",skyHorizon:"#2447C9",skyMid:"#1B3CAA",skyZenith:"#06113A",journey:["#1B3CAA","#16318F","#0A1A55","#030818"],fog:"#0A1A55",fogDensity:36e-5,floor:"#050C26",floorLine:"#FFC83D",plinth:"#0B1B5C",plinthRim:"#FFC83D",hills:["#14297F","#10236D","#0B1B5C","#08154A","#050E36"],key:"#FFF1CF",fill:"#4F7BFF",ground:"#1B3CAA",rim:"#FFC83D",exposure:.96,bloom:.38,bloomThreshold:1.05,bloomRadius:.5,sat:1.12,contrast:1.1,grain:.03,vignette:.36,tilt:.15,aberration:.0012,toneMapping:"aces",fontKey:"primetime"})}),ys=s=>rc[dr(s)];var No=Object.freeze([Object.freeze({name:"low",dpr:1,msaa:0,shadow:1024,shadowBias:-.0012,bloom:!1,blur:!1,crowd:.35,particles:.4,reflect:!1,soft:!1}),Object.freeze({name:"medium",dpr:1.25,msaa:0,shadow:1024,shadowBias:-.001,bloom:!0,blur:!1,crowd:.65,particles:.7,reflect:!1,soft:!0}),Object.freeze({name:"high",dpr:1.75,msaa:4,shadow:2048,shadowBias:-8e-4,bloom:!0,blur:!0,crowd:1,particles:1,reflect:!0,soft:!0}),Object.freeze({name:"ultra",dpr:2,msaa:4,shadow:2048,shadowBias:-6e-4,bloom:!0,blur:!0,crowd:1,particles:1,reflect:!0,soft:!0})]);function Yf(){try{let e=document.createElement("canvas").getContext("webgl2");if(!e||typeof e.createShader!="function"||typeof e.getParameter!="function")return!1;let t=typeof e.getParameter(e.MAX_TEXTURE_SIZE)=="number"&&e.isContextLost&&!e.isContextLost(),i=e.getExtension&&e.getExtension("WEBGL_lose_context");return i&&i.loseContext(),!!t}catch{return!1}}var x3={neutral:Ui,aces:Ki,agx:fs};function v3(s){if(s!=null){let n=No.findIndex(r=>r.name===s);if(n>=0)return n}let e=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,t=navigator.hardwareConcurrency||4,i=navigator.deviceMemory||4;return e||t<=4||i<=3?1:2}var oc=class{constructor({canvas:e,theme:t="paper",forcedTier:i=null,reducedMotion:n=!1}={}){this.canvas=e,this.reducedMotion=n,this.theme=t,this.time=0,this.tierIndex=v3(i),this.forcedTier=i!=null,this.scale=1,this.listeners={tier:new Set,lost:new Set,restored:new Set},this.governor=this.forcedTier?null:new Ql({tierCount:No.length,tier:this.tierIndex}),this.width=1,this.height=1,this.pixelRatio=1,this.contextLost=!1,this.fade={value:1,target:0,speed:1.2},this.renderer=new Zn({canvas:e,antialias:!1,alpha:!1,stencil:!1,depth:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Tt,this.renderer.localClippingEnabled=!0,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=An,this.renderer.setClearColor(0,1),this.scene=new Ei,this.camera=new $t(30,1,4,24e3),this.camera.position.set(0,160,820),e.addEventListener("webglcontextlost",r=>{r.preventDefault(),this.contextLost=!0;for(let o of this.listeners.lost)o()}),e.addEventListener("webglcontextrestored",()=>{this.contextLost=!1,this.buildComposer();for(let r of this.listeners.restored)r()}),this.buildComposer(),this.setTheme(t)}get tier(){return No[this.tierIndex]}on(e,t){return this.listeners[e].add(t),()=>this.listeners[e].delete(t)}buildComposer(){this.composer&&(this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose());let e=new Wt(this.width,this.height,{type:Kt,samples:this.tier.msaa});this.composer=new tc(this.renderer,e),this.renderPass=new ic(this.scene,this.camera),this.bloomPass=new cr(new ee(this.width,this.height),.3,.6,.9),this.passA=new vs({...nu,uniforms:Hi.clone(nu.uniforms)}),this.outputPass=new nc,this.passB=new vs({...su,uniforms:Hi.clone(su.uniforms)}),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(this.passA),this.composer.addPass(this.outputPass),this.composer.addPass(this.passB),this.applyTierToPasses(),this.applyThemeToPasses(),this.resize(!0)}applyTierToPasses(){this.bloomPass.enabled=this.tier.bloom}setTheme(e){this.theme=e,this.palette=ys(e),this.applyThemeToPasses()}applyThemeToPasses(){let e=this.palette||ys(this.theme);this.renderer.toneMapping=x3[e.toneMapping]||Ui,this.renderer.toneMappingExposure=e.exposure,this.bloomPass.strength=e.bloom,this.bloomPass.threshold=e.bloomThreshold,this.bloomPass.radius=e.bloomRadius;let t=this.passA.uniforms,i=this.passB.uniforms;i.uVignette.value=e.vignette,i.uGrain.value=e.grain,i.uLevels.value=e.levels||0,i.uSat.value=e.sat||1,i.uContrast.value=e.contrast||1,i.uVeilColor.value=_s(e.ink),i.uScan.value=e.pixel?.16:0}resize(e=!1){let t=Math.max(1,Math.floor(this.canvas.clientWidth||window.innerWidth)),i=Math.max(1,Math.floor(this.canvas.clientHeight||window.innerHeight)),n=Math.max(.5,Math.min(window.devicePixelRatio||1,this.tier.dpr)*this.scale);if(!(!e&&t===this.cssWidth&&i===this.cssHeight&&Math.abs(n-this.pixelRatio)<.001)){this.cssWidth=t,this.cssHeight=i,this.pixelRatio=n,this.width=Math.max(2,Math.round(t*n)),this.height=Math.max(2,Math.round(i*n)),this.renderer.setPixelRatio(n),this.renderer.setSize(t,i,!1),this.composer.setPixelRatio(n),this.composer.setSize(t,i),this.camera.aspect=t/i,this.camera.updateProjectionMatrix();for(let r of[this.passA,this.passB])r.uniforms.uRes.value=[this.width,this.height];this.passB.uniforms.uAspect.value=this.camera.aspect}}setQuality(e){let t=be(Math.round(e),0,No.length-1);if(t===this.tierIndex)return;let i=No[t].msaa!==this.tier.msaa;this.tierIndex=t,this.scale=1,this.applyTierToPasses(),i?this.buildComposer():this.resize(!0);for(let n of this.listeners.tier)n(this.tier,t)}govern(e,t){if(this.forcedTier||!this.governor)return;let i=this.governor.update(e,t);i&&(i.type==="tier"&&this.setQuality(i.tier),i.scale!=null&&(this.scale=i.scale,this.resize(!0)))}render(e,t={}){if(this.contextLost)return;this.time+=e;let i=this.passA.uniforms,n=this.passB.uniforms,r=this.palette;i.uTime.value=this.time,n.uTime.value=this.time,i.uBlur.value=this.tier.blur?(t.blur!=null?t.blur:7)*(r.tilt>0?1:0):0,i.uTiltCenter.value=t.tiltCenter!=null?t.tiltCenter:.5,i.uTiltRange.value=t.tiltRange!=null?t.tiltRange:.2+(1-r.tilt)*.15,i.uCA.value=(r.aberration+(t.ca||0))*(this.tier.blur?1:.6),i.uWobble.value=t.wobble||0,i.uZoomBlur.value=t.zoomBlur||0,i.uDesat.value=t.desat||0,i.uPixel.value=r.pixel?Math.max(2,Math.round(r.pixel*this.pixelRatio)):t.pixel||0,n.uPixel.value=r.pixel?Math.max(2,Math.round(r.pixel*this.pixelRatio)):1;let o=t.tint||[1,1,1];i.uTint.value=o,i.uFlash.value=t.flash||0,t.flashColor&&(i.uFlashColor.value=t.flashColor),n.uFade.value=be(this.fade.value+(t.fade||0)),n.uFadeColor.value=t.fadeColor||_s(r.paper==="#F4EDDF"?"#F4EDDF":r.skyZenith),n.uVignette.value=r.vignette+(t.vignette||0),t.bloom!=null&&this.bloomPass.enabled&&(this.bloomPass.strength=t.bloom);let a=t.spots||[];for(let l=0;l<6;l+=1){let c=a[l],h=n.uSpot.value[l],u=n.uSpotRect.value[l];c?(h.set(c.x,c.y,c.r,1),u.set(c.rect[0],c.rect[1],c.rect[2],c.rect[3])):h.w=0}this.composer.render(e)}dispose(){this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose(),this.renderer.dispose()}};var $e=s=>{let[e,t,i]=_s(s);return new Se().setRGB(e,t,i,Tt)};function Zf(s,{stars:e=0,stripedSun:t=!1,sunSize:i=.035,sunDir:n=[-.34,.2,-1],sunColor:r="#FFE2A8",sunGlow:o=.5}={}){let a=new vt({side:Vt,depthWrite:!1,fog:!1,uniforms:{uHorizon:{value:$e(s.skyHorizon)},uMid:{value:$e(s.skyMid)},uZenith:{value:$e(s.skyZenith)},uJ0:{value:$e(s.journey[0])},uJ1:{value:$e(s.journey[1])},uJ2:{value:$e(s.journey[2])},uJ3:{value:$e(s.journey[3])},uAltitude:{value:0},uJourney:{value:1},uTime:{value:0},uStars:{value:e},uSunDir:{value:new P(...n).normalize()},uSunColor:{value:$e(r)},uSunSize:{value:i},uSunGlow:{value:o},uStripes:{value:t?1:0},uDim:{value:1}},vertexShader:`
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
    `}),l=new ne(new at(9e3,48,24),a);return l.frustumCulled=!1,l.renderOrder=-100,{mesh:l,material:a}}function $f(s,e,{boxes:t=[]}={}){let i=new Ei,n=new ne(new at(50,32,16),new vt({side:Vt,uniforms:{top:{value:$e(e.skyZenith)},mid:{value:$e(e.skyMid)},bottom:{value:$e(e.ground)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:"varying vec3 vP; uniform vec3 top, mid, bottom; void main(){ float h = vP.y; vec3 c = h > 0. ? mix(mid, top, smoothstep(0., .9, h)) : mix(mid, bottom, smoothstep(0., -.7, h)); gl_FragColor = vec4(c, 1.); }"}));i.add(n);for(let a of t){let l=new ne(new Rt(a.w,a.h),new mt({color:$e(a.color).multiplyScalar(a.intensity||4),side:ht}));l.position.set(...a.pos),l.lookAt(0,0,0),i.add(l)}let r=new un(s),o=r.fromScene(i,.035);return r.dispose(),n.geometry.dispose(),n.material.dispose(),i.traverse(a=>{a.isMesh&&a!==n&&(a.geometry.dispose(),a.material.dispose())}),o.texture}function _3(s,e,t=1024){let i=document.createElement("canvas");i.width=i.height=t;let n=i.getContext("2d"),r=t/2,o=t/2-4,a=(c,h)=>[r+Math.cos(h)*c*o,r+Math.sin(h)*c*o];if(s==="paper"){n.fillStyle=e.plinth,n.fillRect(0,0,t,t);let c=n.createRadialGradient(r,r,0,r,r,o);c.addColorStop(0,"rgba(255,255,255,.55)"),c.addColorStop(1,"rgba(120,90,40,.10)"),n.fillStyle=c,n.fillRect(0,0,t,t),n.strokeStyle=e.teal,n.globalAlpha=.55;for(let u of[.25,.5,.75])n.lineWidth=2.2,n.beginPath(),n.arc(r,r,u*o,0,Ke),n.stroke();n.lineWidth=1.4,n.beginPath(),n.arc(r,r,.12*o,0,Ke),n.stroke(),n.globalAlpha=1,n.strokeStyle=e.ink;for(let u=0;u<360;u+=5){let d=u*Math.PI/180,f=u%45===0,g=u%15===0,[p,m]=a(.935,d),[x,v]=a(f?.86:g?.895:.915,d);n.lineWidth=f?4:g?2.6:1.6,n.globalAlpha=f?.9:.6,n.beginPath(),n.moveTo(p,m),n.lineTo(x,v),n.stroke()}n.globalAlpha=1,n.strokeStyle=e.amber,n.lineWidth=8,n.beginPath(),n.arc(r,r,o*.97,0,Ke),n.stroke(),n.strokeStyle=e.ink,n.globalAlpha=.55,n.lineWidth=2,n.beginPath(),n.moveTo(r-o*.1,r),n.lineTo(r+o*.1,r),n.moveTo(r,r-o*.1),n.lineTo(r,r+o*.1),n.stroke(),n.globalAlpha=.8,n.fillStyle=e.ink,n.font=`700 ${t*.034}px Fraunces, serif`,n.textAlign="center",n.textBaseline="middle";for(let[u,d]of[["0",0],["90",Math.PI/2],["180",Math.PI],["270",-Math.PI/2]]){let[f,g]=a(.8,d);n.fillText(u,f,g)}let h=Ut(11);n.globalAlpha=.05;for(let u=0;u<700;u+=1)n.fillStyle=h()>.5?"#6b5a3a":"#ffffff",n.fillRect(h()*t,h()*t,1+h()*2,1+h()*2)}else if(s==="sunset"){n.fillStyle="#10062a",n.fillRect(0,0,t,t),n.strokeStyle="#FF4FD8",n.shadowColor="#FF4FD8",n.shadowBlur=10,n.lineWidth=3;for(let c=1;c<=6;c+=1)n.beginPath(),n.arc(r,r,c/6*o*.96,0,Ke),n.stroke();n.strokeStyle="#2EC4B6",n.shadowColor="#2EC4B6";for(let c=0;c<24;c+=1){let h=c/24*Ke;n.beginPath(),n.moveTo(r,r),n.lineTo(...a(.96,h)),n.stroke()}n.shadowBlur=0,n.strokeStyle=e.amber,n.lineWidth=10,n.beginPath(),n.arc(r,r,o*.985,0,Ke),n.stroke()}else{let c=n.createRadialGradient(r,r,0,r,r,o);c.addColorStop(0,"#2447C9"),c.addColorStop(.7,"#0B1B5C"),c.addColorStop(1,"#050C26"),n.fillStyle=c,n.fillRect(0,0,t,t),n.strokeStyle=e.amber,n.globalAlpha=.9;for(let h=0;h<36;h+=1){let u=h/36*Ke;n.lineWidth=h%3===0?5:2,n.globalAlpha=h%3===0?.85:.35,n.beginPath(),n.moveTo(...a(.2,u)),n.lineTo(...a(.94,u)),n.stroke()}n.globalAlpha=1,n.lineWidth=6;for(let h of[.2,.58,.97])n.beginPath(),n.arc(r,r,h*o,0,Ke),n.stroke();n.fillStyle=e.amber,n.beginPath(),n.arc(r,r,.05*o,0,Ke),n.fill()}let l=new ri(i);return l.colorSpace=Tt,l.anisotropy=8,l.generateMipmaps=!0,l.minFilter=ji,l}function Jf(s,e,t=250){let i=new ae,n=[[0,-70],[t+64,-70],[t+64,-42],[t+58,-36],[t+22,-30],[t+18,-20],[t+10,-11],[t+4,-5],[t,0],[0,0]].map(([u,d])=>new ee(u,d)),r=s==="primetime"?new Nt({color:e.plinth,roughness:.18,metalness:.5,clearcoat:1,envMapIntensity:1.3}):s==="sunset"?new Ue({color:e.plinth,roughness:.6,metalness:.1,emissive:"#3a0f66",emissiveIntensity:.5}):new Ue({color:"#EADFC8",roughness:.82,metalness:0}),o=new ne(new wn(n,128),r);o.receiveShadow=!0,o.castShadow=!1,i.add(o);let a=_3(s,e),l=s==="primetime"?new Nt({map:a,roughness:.2,metalness:.25,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.2}):s==="sunset"?new Ue({map:a,emissiveMap:a,emissive:"#ffffff",emissiveIntensity:.55,roughness:.7}):new Ue({map:a,roughness:.9,metalness:0}),c=new ne(new mi(t-2,128).rotateX(-Math.PI/2),l);c.position.y=.2,c.receiveShadow=!0,i.add(c);let h=new ne(new bt(t+1,2.6,10,160).rotateX(Math.PI/2),new Ue({color:e.plinthRim,emissive:e.plinthRim,emissiveIntensity:s==="paper"?0:1.2,roughness:.35,metalness:s==="paper"?0:.8}));return h.position.y=.4,i.add(h),i.userData.dispose=()=>{o.geometry.dispose(),r.dispose(),c.geometry.dispose(),l.dispose(),a.dispose(),h.geometry.dispose(),h.material.dispose()},i}function Kf(s,e,{y:t=-64,radius:i=8800}={}){let n=new ae,r=s==="primetime"?new Nt({color:e.floor,roughness:.22,metalness:.4,clearcoat:.6,envMapIntensity:.9}):s==="sunset"?new Ue({color:e.floor,roughness:.9,metalness:0}):new Ue({color:e.floor,roughness:.95,metalness:0}),o=new ne(new mi(i,96).rotateX(-Math.PI/2),r);o.position.y=t,o.receiveShadow=!0,n.add(o);let a=new vt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{uColor:{value:$e(e.floorLine)},uTime:{value:0},uCell:{value:s==="sunset"?90:48},uFade:{value:s==="sunset"?4200:2600},uStrength:{value:s==="paper"?.5:s==="sunset"?1.5:.35},uScroll:{value:s==="sunset"?1:0},uMajor:{value:s==="paper"?5:4},uScrollDir:{value:new ee(0,1)}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
    `});a.extensions={derivatives:!0};let l=new ne(new mi(i*.55,64).rotateX(-Math.PI/2),a);return l.position.y=t+.4,l.renderOrder=-20,n.add(l),n.userData.update=c=>{a.uniforms.uTime.value=c},n.userData.setViewYaw=c=>{a.uniforms.uScrollDir.value.set(Math.sin(c),Math.cos(c))},n.userData.dispose=()=>{o.geometry.dispose(),r.dispose(),l.geometry.dispose(),a.dispose()},n.userData.floorMesh=o,n}function jf({count:s=260,box:e=[1200,900,900],color:t="#FFE7B8",size:i=5,speed:n=1,opacity:r=.7}={}){let o=Ut(33),a=new Float32Array(s*3),l=new Float32Array(s*2);for(let d=0;d<s;d+=1)a[d*3]=(o()-.5)*e[0],a[d*3+1]=(o()-.5)*e[1],a[d*3+2]=(o()-.5)*e[2],l[d*2]=o()*Ke,l[d*2+1]=.4+o()*1.2;let c=new pt;c.setAttribute("position",new zt(a,3)),c.setAttribute("aSeed",new zt(l,2));let h=new vt({transparent:!0,depthWrite:!1,blending:kt,uniforms:{uTime:{value:0},uCenter:{value:new P},uBox:{value:new P(...e)},uColor:{value:$e(t)},uSize:{value:i},uScale:{value:800},uOpacity:{value:r},uSpeed:{value:n}},vertexShader:`
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
    `}),u=new as(c,h);return u.frustumCulled=!1,u.renderOrder=6,u.userData.dispose=()=>{c.dispose(),h.dispose()},u}function Qf(s=1){let e=Ut(s*31+7),t=[],i=4+Math.floor(e()*3);for(let a=0;a<i;a+=1){let l=i===1?0:a/(i-1),c=1-Math.abs(l-.5)*2;t.push({x:(l-.5)*3.2+(e()-.5)*.2,r:.5+c*.5+e()*.18})}let n=new Ji,r=t[0].x-t[0].r*.92,o=t[i-1].x+t[i-1].r*.92;n.moveTo(r,0);for(let a=0;a<=90;a+=1){let l=r+(o-r)*a/90,c=0;for(let h of t){let u=(l-h.x)/h.r;Math.abs(u)<1&&(c=Math.max(c,Math.sqrt(1-u*u)*h.r))}n.lineTo(l,c*.9)}return n.lineTo(o,0),n.closePath(),n}function ru({width:s=6e3,base:e=-200,amp:t=160,freq:i=.0012,seed:n=1,step:r=40,bottom:o=-900}){let a=new Ji;a.moveTo(-s/2,o);for(let l=-s/2;l<=s/2;l+=r)a.lineTo(l,e+Xf(l*i,n,4)*t+(Math.abs(l)/s)**2*t*1.4);return a.lineTo(s/2,o),a.closePath(),new oo(a)}function Uo(s,e=!1){let t=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new pt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in u.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(u.attributes[g]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in u.morphAttributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[g].length!==s[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(u.morphAttributes[g]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=ep(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let p=0;p<o[h].length;++p)f.push(o[h][p][d]);let g=ep(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function ep(s){let e,t,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new zt(o,t,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let p=h.getComponent(d,g);a.setComponent(d+u,g,p)}}else o.set(h.array,l);l+=h.count*t}return n!==void 0&&(a.gpuType=n),a}var Bo={paper:{x:4.3,y:57.4,z:9.3,r:3.7},sunset:{x:3.9,y:37.6,z:7.3,r:3},primetime:{x:4.1,y:49.2,z:8.8,r:3.5}},ou=1500,tp=104,ip=14,pr=tp*ip;function au(s){let e=[];if(s==="sunset"){let i=new yt(18,28,11);i.translate(0,14,0);let n=new yt(15,15,15);n.translate(0,36,0);let r=new yt(5,20,6);r.translate(-12,18,0);let o=new yt(5,20,6);o.translate(12,18,0),e.push(i,n,r,o)}else if(s==="primetime"){let i=new bn(10,22,4,10);i.translate(0,21,0);let n=new at(10.5,14,10);n.translate(0,47,0),e.push(i,n)}else{let i=[[0,0],[15,0],[15.5,4],[11,32],[7.5,43],[0,44]].map(([a,l])=>new ee(a,l)),n=new wn(i,14),r=new at(11,16,12);r.translate(0,55,0);let o=new Jt(8,13,12);o.translate(0,70,0),e.push(n,r,o)}let t=Uo(e.map(i=>i.toNonIndexed?i.toNonIndexed():i),!1);for(let i of e)i.dispose();return t.computeVertexNormals(),t}function y3(s,e,t){if(s==="sunset")return new yt(e,6,t);if(s==="primetime"){let o=new yt(e,9,t),a=new yt(e+4,3,5);a.translate(0,2,t/2);let l=Uo([o,a].map(c=>c.toNonIndexed()));return o.dispose(),a.dispose(),l}let i=new so(1,3);i.scale(e/2,11,t/2+6);let n=i.attributes.position,r=Ut(e+t);for(let o=0;o<n.count;o+=1){let a=n.getX(o),l=n.getY(o),c=n.getZ(o),h=Math.sin(a*.045)*4+Math.sin(a*.11+c*.07)*3+r()*.3;n.setXYZ(o,a,l>0?l+h*.5:l*.45,c)}return i.computeVertexNormals(),i}var ac=class{constructor(e,t,{max:i=700,density:n=1}={}){this.theme=e,this.palette=t,this.group=new ae,this.centerY=0,this.excite=0,this.time=0,this.attention={x:0,z:0,amount:0,interest:0},this.ballotColors=fr[e]||fr.paper;let r=Ut(101),o=[],a=[];for(let p=0;p<ip;p+=1)for(let m of[-1,1])for(let x of[0,1]){let v=m*(x===0?450+p%4*64:980+p%3*110)+(r()-.5)*24,M=x===0?-70-p%3*80:-520-p%2*120,y=p*tp+(x?46:0),S=x?1.5:1;a.push({x:v,y,z:M,w:250*S,d:92*S});for(let E=0;E<2;E+=1)for(let _=0;_<(x?5:6);_+=1)o.push({x:v+(_-(x?2:2.5))*38*S+(r()-.5)*8,y:y+6*S,z:M+(E===0?16:-18)*S+(r()-.5)*6,s:S})}for(let p=o.length-1;p>0;p-=1){let m=Math.floor(r()*(p+1));[o[p],o[m]]=[o[m],o[p]]}this.slots=o.slice(0,i),this.count=this.slots.length,this.max=this.count;let l=this.count;this.seed=new Float32Array(l),this.speed=new Float32Array(l),this.raise=new Float32Array(l),this.target=new Float32Array(l),this.option=new Int8Array(l).fill(-1),this.key=new Float32Array(l),this.lean=new Float32Array(l),this.facing=new Float32Array(l);for(let p=0;p<l;p+=1)this.seed[p]=r()*Ke,this.speed[p]=1.2+r()*1.6,this.key[p]=r(),this.lean[p]=(r()-.5)*.12,this.facing[p]=(r()-.5)*.5;let c=e==="sunset"?new Ue({roughness:.8,flatShading:!0,emissive:"#ffffff",emissiveIntensity:.18}):e==="primetime"?new Ue({roughness:.6,metalness:.1,color:"#0a1233",emissive:"#16308a",emissiveIntensity:.25}):new Ue({roughness:.78,metalness:0});this.figures=new wi(au(e),c,l),this.figures.frustumCulled=!1,this.figures.instanceMatrix.setUsage(Oi);let h=e==="sunset"?["#FFC53D","#2EC4B6","#9B5DE5","#FF5964","#B983FF","#FF8FAB"]:e==="primetime"?["#1B3CAA","#16308f","#2447C9","#0f1f6b","#27399a","#3b2a7a"]:[t.amber,t.teal,t.blue,t.vermilion,t.violet,t.rose,"#EFE2C4"],u=new Se;for(let p=0;p<l;p+=1){let m=h[Math.floor(r()*h.length)%h.length];u.set(m),e==="paper"&&u.lerp(new Se("#F4EDDF"),.18+r()*.18),this.figures.setColorAt(p,u)}this.figures.instanceColor.needsUpdate=!0;let d=new yt(28,36,1.8);d.translate(0,18,0),this.cards=new wi(d,new Ue({roughness:.5,metalness:.05,emissive:"#ffffff",emissiveIntensity:e==="paper"?.04:.55}),l),this.cards.frustumCulled=!1,this.cards.instanceMatrix.setUsage(Oi);for(let p=0;p<l;p+=1)this.cards.setColorAt(p,u.set("#ffffff"));this.cards.instanceColor.needsUpdate=!0,this.eye=Bo[e]||Bo.paper,this.eyeMaterial=new Ue({color:"#ffffff",roughness:.22,emissive:"#ffffff",emissiveIntensity:e==="paper"?.2:.45,flatShading:e==="sunset"}),this.pupilMaterial=new Ue({color:"#15111c",roughness:.3,flatShading:e==="sunset"}),this.eyes=new wi(new at(1,7,5),this.eyeMaterial,l*2),this.pupils=new wi(new at(1,6,4),this.pupilMaterial,l*2);for(let p of[this.eyes,this.pupils])p.frustumCulled=!1,p.instanceMatrix.setUsage(Oi);this.pupilX=new Float32Array(l),this.pupilY=new Float32Array(l),this.pupilVX=new Float32Array(l),this.pupilVY=new Float32Array(l),this.gaze={x:0,y:260,z:260,amount:.85},this.waves=[],this.lastWave=-99,this.frenzy=0,this.uproar=0,this.mFigure=new ct,this.mLocal=new ct,this.mOut=new ct,this.vPos=new P,this.vScale=new P,this.qNone=new Fi;let f=new Map;this.shelfMeshes=[];for(let p of a){let m=`${p.w}|${p.d}`;f.has(m)||f.set(m,{geometry:y3(e,p.w,p.d),items:[]}),f.get(m).items.push(p)}let g=e==="sunset"?new Ue({color:"#2b1155",emissive:"#FF4FD8",emissiveIntensity:.55,roughness:.6}):e==="primetime"?new Ue({color:"#0b1b5c",roughness:.3,metalness:.6,emissive:"#FFC83D",emissiveIntensity:.1}):new Ue({color:"#FFF8EA",roughness:.95,emissive:"#FFF1D0",emissiveIntensity:.12});for(let{geometry:p,items:m}of f.values()){let x=new wi(p,g,m.length);x.frustumCulled=!1,x.receiveShadow=!1,x.userData.items=m,this.shelfMeshes.push(x),this.group.add(x)}this.dummy=new Ft,this.dummy.rotation.order="YXZ",this.group.add(this.figures,this.cards,this.eyes,this.pupils),this.density=1,this.setDensity(n),this.ballot=null,this.ballotKey="",this.shelfMaterial=g,this.figMaterial=c}setDensity(e){this.density=e;let t=Math.max(40,Math.round(this.max*e));this.figures.count=t,this.cards.count=t,this.eyes.count=t*2,this.pupils.count=t*2,this.visible=t}setCenterY(e){this.centerY=e}setBallot(e){if(!e){this.ballot&&(this.ballot=null,this.ballotKey="");return}let t=`${e.voted.toFixed(2)}|${e.fractions.map(o=>o.toFixed(2)).join(",")}|${e.colors?e.colors.join(""):""}`;if(t===this.ballotKey)return;this.ballotKey=t,this.ballot=e;let i=e.colors||this.ballotColors,n=new Se,r=e.fractions.reduce((o,a)=>o+a,0)||1;for(let o=0;o<this.count;o+=1)if(this.key[o]<e.voted){let a=this.key[o]/Math.max(1e-4,e.voted),l=0,c=2;for(let h=0;h<3;h+=1)if(l+=e.fractions[h]/r,a<=l){c=h;break}this.target[o]=1,this.option[o]!==c&&(this.option[o]=c,this.cards.setColorAt(o,n.set(i[c])))}else this.target[o]=0;this.cards.instanceColor.needsUpdate=!0}clearBallot(){this.ballot=null,this.ballotKey="";for(let e=0;e<this.count;e+=1)this.target[e]=0}cheer(e=1){this.excite=Math.min(2.5,this.excite+e)}setGaze(e,t,i,n=1){let r=this.gaze;r.x=e,r.y=t,r.z=i,r.amount=n}wave(e=1,{speed:t=1250,width:i=520,gap:n=3.2}={}){return this.time-this.lastWave<n?!1:(this.lastWave=this.time,this.waves.length>3&&this.waves.shift(),this.waves.push({t0:this.time,dir:e>=0?1:-1,speed:t,width:i}),!0)}chaos(e=1){this.uproar=Math.min(1.4,this.uproar+e),this.excite=Math.min(2.5,this.excite+e*.8)}setAttention(e,t,i,n=0){let r=this.attention;r.x=e,r.z=t,r.amount=i,r.interest=n}update(e,t){this.time=t,this.excite=xt(this.excite,0,1.6,e),this.frenzy=xt(this.frenzy,this.ballot?1:0,3,e),this.uproar=xt(this.uproar,0,.8,e);let i=Math.min(1.4,this.frenzy+this.uproar),n=this.uproar,r=this.waves;for(let p=r.length-1;p>=0;p-=1)(t-r[p].t0)*r[p].speed>ou*2+r[p].width+200&&r.splice(p,1);let o=this.gaze,a=this.eye,l=Math.min(e,.033),c=this.dummy,h=this.centerY,u=this.visible,d=this.attention,f=d.amount>.004,g=this.excite+d.interest*.55+this.frenzy*.5;for(let p=0;p<u;p+=1){let m=this.slots[p];this.raise[p]=xt(this.raise[p],this.target[p],7+this.seed[p]%3,e);let x=h+hr(m.y-h+pr/2,pr)-pr/2,v=Math.sin(t*this.speed[p]+this.seed[p])*1.4*(1+g),M=0;for(let D=0;D<r.length;D+=1){let q=r[D],U=(t-q.t0)*q.speed-(q.dir>0?m.x+ou:ou-m.x);U>0&&U<q.width&&(M=Math.max(M,Math.sin(Math.PI*U/q.width)))}let y=Math.max(0,Math.sin(t*(7+this.speed[p])+this.seed[p]*3))*g*9+M*30*m.s,S=0,E=0,_=0;if(f){let D=d.x-m.x,q=d.z-m.z,U=Math.atan2(D,q);S=be(U,-.75,.75)*d.amount,E=d.amount*_i(1900,420,Math.hypot(D,q)),_=U}let b=this.facing[p]*(1-d.amount*.7)+S+Math.sin(t*.6+this.seed[p])*.12,I=E*.24*(.8+.2*Math.sin(t*2.1+this.seed[p]));c.position.set(m.x,x+v+y,m.z),c.rotation.set(I*Math.cos(_-b),b,this.lean[p]+Math.sin(t*2*this.speed[p]+this.seed[p])*.03*(1+g)-I*Math.sin(_-b)),c.scale.set(m.s,m.s*(1+E*.09+M*.16),m.s),c.updateMatrix(),this.figures.setMatrixAt(p,c.matrix);{let D=o.x-m.x,q=o.z-m.z,U=o.y-(x+a.y*m.s),C=Math.hypot(D,q)+1,B=Math.sin(Math.atan2(D,q)-b)*o.amount,O=be(U/C*1.6,-1,1)*o.amount;if(n>.02){let W=t*15+this.seed[p]*3;B+=Math.cos(W)*n*.9,O+=Math.sin(W)*n*.9}B+=Math.sin(t*(4+this.speed[p])+this.seed[p])*.07*(1+g),O+=Math.cos(t*(3+this.speed[p])+this.seed[p]*2)*.05*(1+g),B=be(B,-1,1),O=be(O,-1,1),this.pupilVX[p]+=((B-this.pupilX[p])*85-this.pupilVX[p]*6.5)*l,this.pupilVY[p]+=((O-this.pupilY[p])*85-this.pupilVY[p]*6.5)*l,this.pupilX[p]+=this.pupilVX[p]*l,this.pupilY[p]+=this.pupilVY[p]*l;let H=be(this.pupilX[p],-1.2,1.2)*.5,te=be(this.pupilY[p],-1.2,1.2)*.5,V=Math.sqrt(Math.max(.12,1-H*H-te*te))*.78;this.mFigure.copy(c.matrix);for(let W=0;W<2;W+=1){let Q=W===0?-a.x:a.x;this.vPos.set(Q,a.y,a.z),this.vScale.setScalar(a.r),this.mLocal.compose(this.vPos,this.qNone,this.vScale),this.mOut.multiplyMatrices(this.mFigure,this.mLocal),this.eyes.setMatrixAt(p*2+W,this.mOut),this.vPos.set(Q+H*a.r,a.y+te*a.r,a.z+V*a.r),this.vScale.setScalar(a.r*.52),this.mLocal.compose(this.vPos,this.qNone,this.vScale),this.mOut.multiplyMatrices(this.mFigure,this.mLocal),this.pupils.setMatrixAt(p*2+W,this.mOut)}}let A=this.raise[p];if(A<.01)c.scale.setScalar(0);else{let D=Math.sin(t*(14+this.speed[p]*4)+this.seed[p]*5),q=44*m.s+A*18*m.s+(Math.abs(D)*11*i+M*16)*m.s;c.position.set(m.x+(12+D*6*i)*m.s,x+v+y+q,m.z+8),c.rotation.set(0,this.facing[p]*.4,Math.sin(t*5+this.seed[p])*.1+D*(.1+.5*i)),c.scale.setScalar(m.s*(.3+.7*A))}c.updateMatrix(),this.cards.setMatrixAt(p,c.matrix)}this.figures.instanceMatrix.needsUpdate=!0,this.cards.instanceMatrix.needsUpdate=!0,this.eyes.instanceMatrix.needsUpdate=!0,this.pupils.instanceMatrix.needsUpdate=!0;for(let p of this.shelfMeshes){let m=p.userData.items;for(let x=0;x<m.length;x+=1){let v=m[x],M=h+hr(v.y-h+pr/2,pr)-pr/2;c.position.set(v.x,M-3,v.z),c.rotation.set(0,0,0),c.scale.setScalar(1),c.updateMatrix(),p.setMatrixAt(x,c.matrix)}p.instanceMatrix.needsUpdate=!0}}dispose(){this.figures.geometry.dispose(),this.figMaterial.dispose(),this.cards.geometry.dispose(),this.cards.material.dispose(),this.eyes.geometry.dispose(),this.pupils.geometry.dispose(),this.eyeMaterial.dispose(),this.pupilMaterial.dispose();for(let e of this.shelfMeshes)e.geometry.dispose();this.shelfMaterial.dispose()}};var Oo=Math.PI*2,M3=.3,np=s=>s-M3*Math.sin(s),lu=s=>{let e=(s+Math.PI)%Oo;return(e<0?e+Oo:e)-Math.PI},lc=class{constructor({yawPerPixel:e=.0072,pitchPerPixel:t=.0044,minPitch:i=-.2,maxPitch:n=.9,friction:r=4.2,maxSpeed:o=7,flingWindow:a=.1,tapSlop:l=5}={}){Object.assign(this,{yawPerPixel:e,pitchPerPixel:t,minPitch:i,maxPitch:n,friction:r,maxSpeed:o,flingWindow:a,tapSlop:l}),this.yaw=0,this.pitch=0,this.vyaw=0,this.vpitch=0,this.dragging=!1,this.reduced=!1,this.touched=!1,this.samples=[],this.tween=null,this.lastX=0,this.lastY=0}get rotated(){return Math.abs(lu(this.yaw))>.02||Math.abs(this.pitch)>.02}get moving(){return this.dragging||!!this.tween||Math.abs(this.vyaw)>.012||Math.abs(this.vpitch)>.012}setReduced(e){this.reduced=!!e}begin(e,t,i){!Number.isFinite(e)||!Number.isFinite(t)||(this.dragging=!0,this.touched=!0,this.tween=null,this.vyaw=0,this.vpitch=0,this.lastX=e,this.lastY=t,this.samples.length=0,this.sample(i))}move(e,t,i,{pitch:n=!0}={}){if(!this.dragging||!Number.isFinite(e)||!Number.isFinite(t))return!1;let r=e-this.lastX,o=t-this.lastY;return this.lastX=e,this.lastY=t,this.yaw-=r*this.yawPerPixel,n&&(this.pitch=be(this.pitch+o*this.pitchPerPixel,this.minPitch,this.maxPitch)),this.sample(i),r!==0||o!==0}end(e){if(!this.dragging)return;this.dragging=!1,this.vyaw=0,this.vpitch=0;let t=this.samples[this.samples.length-1];if(!this.reduced&&t&&Number.isFinite(e)&&e-t.t<.06){let i=this.samples.find(r=>t.t-r.t<=this.flingWindow)||t,n=t.t-i.t;n>=.012&&(this.vyaw=be((t.yaw-i.yaw)/n,-this.maxSpeed,this.maxSpeed),this.vpitch=be((t.pitch-i.pitch)/n,-this.maxSpeed,this.maxSpeed))}this.samples.length=0}sample(e){if(Number.isFinite(e))for(this.samples.push({t:e,yaw:this.yaw,pitch:this.pitch});this.samples.length>2&&e-this.samples[0].t>.3;)this.samples.shift()}update(e){if(e>0){if(e=Math.min(e,.05),this.tween){let t=this.tween;t.t+=e;let i=be(t.t/t.dur),n=Fo(i);this.yaw=t.fromYaw+(t.toYaw-t.fromYaw)*n,this.pitch=t.fromPitch+(t.toPitch-t.fromPitch)*n,i>=1&&(this.tween=null,this.yaw=lu(this.yaw));return}if(!this.dragging){if(this.vyaw||this.vpitch){this.yaw+=this.vyaw*e;let t=this.pitch+this.vpitch*e;this.pitch=be(t,this.minPitch,this.maxPitch),this.pitch!==t&&(this.vpitch=0);let i=Math.exp(-this.friction*e);this.vyaw*=i,this.vpitch*=i,Math.abs(this.vyaw)<.012&&(this.vyaw=0),Math.abs(this.vpitch)<.012&&(this.vpitch=0)}Math.abs(this.yaw)>Oo&&(this.yaw=lu(this.yaw))}}}tweenTo(e,t,i=.6){this.dragging=!1,this.vyaw=0,this.vpitch=0;let n=Math.max(.001,this.reduced?i*.3:i);this.tween={t:0,dur:n,fromYaw:this.yaw,fromPitch:this.pitch,toYaw:e,toPitch:be(t,this.minPitch,this.maxPitch)}}reset(e=.9){!this.rotated&&!this.tween&&!this.dragging&&!this.vyaw&&!this.vpitch||this.tweenTo(Math.round(this.yaw/Oo)*Oo,0,e)}rotateBy(e,t=.5){let i=this.tween?this.tween.toYaw:this.yaw,n=this.tween?this.tween.toPitch:this.pitch;this.tweenTo(i+e,n,t)}snap(){this.yaw=0,this.pitch=0,this.vyaw=0,this.vpitch=0,this.tween=null,this.dragging=!1,this.samples.length=0}};function S3(s,e){let t=new ae,i=new Ci($e(s.key),e==="paper"?2.3:e==="sunset"?2.4:3);i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.bias=-7e-4,i.shadow.normalBias=.6,i.shadow.radius=e==="paper"?5:2.5;let n=560;Object.assign(i.shadow.camera,{left:-n,right:n,top:n,bottom:-n,near:20,far:2600}),i.position.set(-420,640,760),i.target.position.set(0,0,0);let r=new Tn($e(s.fill),$e(s.ground),e==="paper"?.6:.85),o=new Ci($e(s.rim),e==="paper"?.8:2.2);o.position.set(520,260,-640);let a=new Ci($e(s.fill),e==="paper"?.35:.55);return a.position.set(120,120,900),t.add(i,i.target,r,o,a),{group:t,key:i,hemi:r,rim:o,front:a}}function b3(s,e,t){let i=Ut(3),n=new ae;n.name="decor",s.add(n);let r=[],o=[];e.hills.forEach((d,f)=>{let g=ru({width:9e3+f*1800,base:-150+f*40,amp:220-f*22,freq:85e-5+f*2e-4,seed:f*3+1,bottom:-1200}),p=new Ue({color:d,roughness:1,metalness:0,emissive:d,emissiveIntensity:.16,fog:!0}),m=new ne(g,p);m.position.set(0,-60-f*6,-1100-f*760),m.receiveShadow=!1,n.add(m),o.push(m),r.push(g,p)});let a=[1,2,3,4].map(d=>{let f=new En(Qf(d),{depth:.22,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:2,curveSegments:6});return f.center(),f}),l=new Ue({color:"#FFFDF6",roughness:.95,emissive:"#FFF0D2",emissiveIntensity:.16,fog:!0}),c=[],h=3200;for(let d=0;d<30;d+=1){let f=new ne(a[d%4],l),g=-650-i()*2300,p=34+i()*60+-g*.022;f.userData={x:(i()-.5)*3600,y:i()*h,z:g,speed:4+i()*9,scale:p},f.scale.set(p,p,p*.5),f.castShadow=!1,f.receiveShadow=!1,n.add(f),c.push(f)}r.push(...a,l);let u=new ne(new mi(4200,48,0,Ke),new vt({transparent:!0,depthWrite:!1,side:ht,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:"varying vec2 vP; uniform float uTime; void main(){ float a = atan(vP.y, vP.x); float r = length(vP)/4200.; float s = smoothstep(.35,.5,.5+.5*sin(a*14.+uTime*.05)); gl_FragColor = vec4(1.,.93,.75, s*.1*(1.-r)*smoothstep(0.,.25,r)); }"}));return u.position.set(-1200,500,-3600),u.renderOrder=-50,n.add(u),r.push(u.geometry,u.material),{group:n,update({time:d,focusY:f,altitude:g,dim:p}){for(let m of c){let x=m.userData,v=hr(x.y-f*.62+h/2,h)-h/2;m.position.set(x.x+d*x.speed*.4,f+v,x.z),m.visible=!0}l.emissiveIntensity=.16*(1-g*.7),l.color.set("#FFFDF6").lerp(new Se("#7f8fb8"),be(g*1.2-.2,0,.85)),o.forEach((m,x)=>{m.position.y=-60-x*6-f*(.2+x*.09),m.material.emissiveIntensity=.16*(1-g*.8)*p}),u.material.uniforms.uTime.value=d,u.position.y=500+f*.3,u.material.opacity=1-g},dispose(){for(let d of r)d.dispose();s.remove(n)}}}function E3(s,e){let t=new ae;s.add(t);let i=[],n=[];[["#2a0b52","#FF4FD8"],["#1d0840","#7a3cff"],["#13052c","#2EC4B6"]].forEach(([h,u],d)=>{let f=ru({width:9e3,base:20+d*10,amp:520-d*120,freq:.0011+d*4e-4,seed:9+d*2,step:220,bottom:-1e3}),g=new mt({color:h,fog:!0}),p=new ne(f,g);p.position.set(0,-52,-2600+d*700);let m=[],x=f.attributes.position;for(let y=1;y<x.count;y+=1)x.getY(y)>-900&&x.getY(y)<2e3&&m.push(new P(x.getX(y),x.getY(y),.5));m.sort((y,S)=>y.x-S.x);let v=new pt().setFromPoints(m.filter((y,S)=>S%1===0)),M=new $i({color:u,transparent:!0,opacity:.9,fog:!0});p.add(new $s(v,M)),t.add(p),n.push(p),i.push(f,g,v,M)});let o=[],a=new Jt(1,1.4,4,1,!0).toNonIndexed(),l=new zn(new Jt(1,1.4,4)),c=Ut(8);for(let h=0;h<16;h+=1){let u=new $i({color:["#FF4FD8","#2EC4B6","#FFC53D","#9B5DE5"][h%4],transparent:!0,opacity:.85}),d=new Mn(h%5===4?new zn(new bt(1,.12,6,14)):l,u);d.userData={x:(c()-.5)*3600,y:c()*3e3,z:-700-c()*1500,s:36+c()*70,sp:.2+c()*.6,ph:c()*Ke},t.add(d),o.push(d),i.push(u)}return i.push(a,l),{group:t,update({time:h,focusY:u,altitude:d,dim:f}){n.forEach((g,p)=>{g.position.y=-52-u*(.22+p*.12)});for(let g of o){let p=g.userData;g.position.set(p.x,u*.55+hr(p.y-u*.4,3e3)-800+Math.sin(h*p.sp+p.ph)*24,p.z),g.rotation.set(h*p.sp*.7,h*p.sp,0),g.scale.setScalar(p.s)}},dispose(){for(let h of i)h.dispose();s.remove(t)}}}function w3(s,e){let t=new ae;s.add(t);let i=[],n=new ne(new mi(1500,96),new vt({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uGold:{value:$e(e.amber)},uBlue:{value:$e("#2447C9")}},vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`varying vec2 vP; uniform float uTime; uniform vec3 uGold, uBlue;
      void main(){
        float r = length(vP)/1500.; float a = atan(vP.y, vP.x);
        float rays = smoothstep(.0,.06, abs(sin(a*12.+uTime*.12))-.35);
        float ring = smoothstep(.02,.0,abs(r-.62))+smoothstep(.015,.0,abs(r-.9))*.8+smoothstep(.02,.0,abs(r-.3))*.6;
        vec3 c = mix(uBlue*.8, uGold, rays*.55+ring);
        float alpha = (1.-smoothstep(.85,1.,r))*(.1+rays*.16+ring*.22);
        gl_FragColor = vec4(c, alpha);
      }`}));n.position.set(0,520,-1400),t.add(n),i.push(n.geometry,n.material);let r=new ne(new gt(2600,2600,2800,64,1,!0,Math.PI*.65,Math.PI*.7),new vt({side:Vt,transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uGold:{value:$e(e.amber)},uCyan:{value:$e(e.teal)},uShift:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`varying vec2 vUv; varying vec3 vW; uniform float uTime, uShift; uniform vec3 uGold, uCyan;
      void main(){
        vec2 g = vec2(vUv.x * 150., (vUv.y*2800. + uShift*.6) / 34.);
        vec2 f = fract(g) - .5; float dotm = smoothstep(.42,.2,length(f));
        float chev = abs(sin((g.x*.12 + g.y*.5 + uTime*.7)));
        float band = smoothstep(.55,.95,chev);
        vec3 c = mix(uCyan, uGold, smoothstep(.2,.8,.5+.5*sin(g.y*.08 + uTime*.4)));
        float a = dotm * (.06 + band * .5) * smoothstep(0.,.5,vUv.y) ;
        gl_FragColor = vec4(c, a);
      }`}));r.position.set(0,600,-200),t.add(r),i.push(r.geometry,r.material);let o=[],a=new Jt(1,1,32,1,!0);a.translate(0,-.5,0);let l=new vt({transparent:!0,depthWrite:!1,blending:kt,side:ht,uniforms:{uColor:{value:$e("#FFF1CF")},uOpacity:{value:.05}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = position.y; vec4 mv = modelViewMatrix*vec4(position,1.); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying float vY; varying vec3 vN; varying vec3 vV; uniform vec3 uColor; uniform float uOpacity; void main(){ float fres = pow(abs(dot(vN,vV)),1.5); gl_FragColor = vec4(uColor, uOpacity * fres * (1.+vY) ); }"}),c=["#FFF1CF","#FFC83D","#4F7BFF","#FF7FA8","#35D0E8"];for(let p=0;p<7;p+=1){let m=l.clone();m.uniforms={uColor:{value:$e(c[p%c.length])},uOpacity:{value:.045+p%3*.01}};let x=new ne(a,m);x.scale.set(160,1900,160),x.userData={x:(p-3)*360,ph:p*1.3,sp:.35+p%3*.12},t.add(x),o.push(x),i.push(m)}i.push(a,l);let h=new Ue({color:"#0b1b5c",metalness:.85,roughness:.25,emissive:e.amber,emissiveIntensity:.06}),u=new ne(new yt(3400,22,22),h);t.add(u),i.push(u.geometry,h);let d=[],f=new at(7,10,8),g=new mt({color:e.amber});for(let p=0;p<28;p+=1){let m=new ne(f,g);m.position.set((p-13.5)*120,-16,14),u.add(m),d.push(m)}return i.push(f,g),{group:t,update({time:p,focusY:m,altitude:x}){n.material.uniforms.uTime.value=p,n.position.y=520+m*.82,n.rotation.z=p*.02,r.material.uniforms.uTime.value=p,r.position.y=600+m*.9,r.material.uniforms.uShift.value=m,u.position.set(0,m+760,-300),o.forEach(v=>{let M=v.userData;v.position.set(M.x,m+760,-300),v.rotation.z=Math.sin(p*M.sp+M.ph)*.5,v.rotation.x=Math.cos(p*M.sp*.8+M.ph)*.18}),d.forEach((v,M)=>{v.scale.setScalar(.7+.5*Math.max(0,Math.sin(p*4-M*.55)))})},dispose(){for(let p of i)p.dispose();s.remove(t)}}}function sp(s,e,{crowdDensity:t=1}={}){let i=e.palette,n=new ae;e.scene&&e.scene.environmentRotation&&(e.scene.environmentRotation.y=0);let r=S3(i,s);n.add(r.group);let o=Zf(i,s==="paper"?{stars:1,sunSize:.0035,sunDir:[-.42,.16,-1],sunColor:"#FFE2A8",sunGlow:.75}:s==="sunset"?{stars:1,stripedSun:!0,sunSize:.0042,sunDir:[.02,-.006,-1],sunColor:"#FF8C42",sunGlow:.16}:{stars:0,sunSize:0,sunDir:[0,.5,-1],sunColor:"#8CAEFF",sunGlow:.15});o.mesh.name="sky",n.add(o.mesh);let a=$f(e.renderer,i,{boxes:s==="primetime"?[{w:60,h:30,pos:[20,40,30],color:"#FFF1CF",intensity:6},{w:40,h:40,pos:[-40,10,-20],color:"#4F7BFF",intensity:3}]:s==="sunset"?[{w:50,h:30,pos:[0,10,-40],color:"#FF6B35",intensity:3},{w:40,h:20,pos:[-30,30,10],color:"#9B5DE5",intensity:2}]:[{w:55,h:28,pos:[-25,38,30],color:"#FFF4DC",intensity:4},{w:36,h:22,pos:[35,12,-10],color:"#CFE8EA",intensity:1.6}]}),l=Jf(s,i);l.name="plinth",n.add(l);let c=Kf(s,i);c.name="ground",n.add(c);let h=jf({count:s==="paper"?220:160,color:s==="paper"?"#FFE7B8":s==="sunset"?"#FF9BE8":"#BBD0FF",size:s==="paper"?5:4.2,opacity:s==="paper"?.8:.9});h.name="motes",n.add(h);let u=s==="paper"?b3(n,i):s==="sunset"?E3(n,i):w3(n,i),d=new ac(s,i,{max:520,density:t});d.group.name="crowd",n.add(d.group);let f=new kr($e(i.fog),i.fogDensity),g=new Se,p=new Se,m={},x=1,v=0,M=r.key.intensity,y=r.hemi.intensity,S=r.rim.intensity,E=r.front.intensity;return{theme:s,root:n,lights:r,sky:o,plinth:l,ground:c,crowd:d,motes:h,envTexture:a,fog:f,palette:i,update({time:_,dt:b,focusY:I,altitude:A,dim:D=1,camera:q,shadowFocus:U=null,fogDist:C=1e3}){let B=o.material.uniforms;B.uAltitude.value=A,B.uTime.value=_,B.uDim.value=D,o.mesh.position.copy(q.position);let O=i.journey,H=be(A,0,1)*3,te=Math.min(2,Math.floor(H)),V=H-te;g.set(i.fog),p.set(O[te]).lerp(g.clone().set(O[Math.min(3,te+1)]),V),f.color.copy(g.set(i.fog).lerp(p,.12+.88*_i(.03,.4,A))).multiplyScalar(D),f.density=i.fogDensity/32e-5*.2884/Math.max(300,C)*(1+A*.5);let W=1-A*(s==="paper"?.62:.4);r.key.intensity=M*W*D,r.hemi.intensity=y*(.55+.45*W)*(.35+.65*D),r.rim.intensity=S*(1+A*.6)*D,r.front.intensity=E*D;let Q=U||{x:0,y:I};r.key.target.position.set(Q.x,Q.y,0),r.key.position.set(Q.x-420,Q.y+640,760),r.key.target.updateMatrixWorld(),r.key.updateMatrixWorld(),c.userData.update(_),h.material.uniforms.uTime.value=_,h.material.uniforms.uCenter.value.set(0,I,0),h.material.uniforms.uScale.value=e.height*.9,u.update({time:_,dt:b,focusY:I,altitude:A,dim:D}),d.setCenterY(I),d.update(b,_),x=D},setCrowdDensity(_){d.setDensity(_)},setViewYaw(_){if(Math.abs(_-v)<1e-5)return;v=_;let b=np(_);r.group.rotation.y=_,d.group.rotation.y=_,u.group.rotation.y=b,o.mesh.rotation.y=b,c.userData.setViewYaw(_),e.scene&&e.scene.environmentRotation&&(e.scene.environmentRotation.y=_)},get viewYaw(){return v},dispose(){u.dispose(),d.dispose(),l.userData.dispose(),c.userData.dispose(),h.userData.dispose(),o.mesh.geometry.dispose(),o.material.dispose(),a.dispose(),r.key.shadow.map&&r.key.shadow.map.dispose()}}}var Ho=new P;function zi(s,e,t,i,n,r){let o=2*Math.PI*n/4,a=Math.max(r-2*n,0),l=Math.PI/4;Ho.copy(e),Ho[i]=0,Ho.normalize();let c=.5*o/(o+a),h=1-Ho.angleTo(s)/l;return Math.sign(Ho[t])===1?h*c:a/(o+a)+c+c*(1-h)}var mr=class s extends yt{constructor(e=1,t=1,i=1,n=2,r=.1){let o=n*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:n,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,h=new P(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,p=new P,m=.5/o;for(let x=0,v=0;x<u.length;x+=3,v+=2)switch(l.fromArray(u,x),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[x+0]=h.x*Math.sign(l.x)+c.x*r,u[x+1]=h.y*Math.sign(l.y)+c.y*r,u[x+2]=h.z*Math.sign(l.z)+c.z*r,d[x+0]=c.x,d[x+1]=c.y,d[x+2]=c.z,Math.floor(x/g)){case 0:p.set(1,0,0),f[v+0]=zi(p,c,"z","y",r,i),f[v+1]=1-zi(p,c,"y","z",r,t);break;case 1:p.set(-1,0,0),f[v+0]=1-zi(p,c,"z","y",r,i),f[v+1]=1-zi(p,c,"y","z",r,t);break;case 2:p.set(0,1,0),f[v+0]=1-zi(p,c,"x","z",r,e),f[v+1]=zi(p,c,"z","x",r,i);break;case 3:p.set(0,-1,0),f[v+0]=1-zi(p,c,"x","z",r,e),f[v+1]=1-zi(p,c,"z","x",r,i);break;case 4:p.set(0,0,1),f[v+0]=1-zi(p,c,"x","y",r,e),f[v+1]=1-zi(p,c,"y","x",r,t);break;case 5:p.set(0,0,-1),f[v+0]=zi(p,c,"x","y",r,e),f[v+1]=1-zi(p,c,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};var Ii=22,Bt=21.2,yi=120,ki=360,Ms=null;function T3(){if(Ms)return Ms;let s=128,e=document.createElement("canvas");e.width=e.height=s;let t=e.getContext("2d"),i=t.createImageData(s,s),n=Ut(5);for(let r=0;r<s*s;r+=1){let o=r%s,a=Math.floor(r/s),l=.5+.18*Math.sin(o*.35+Math.sin(a*.11)*3)+(n()-.5)*.5,c=Math.max(0,Math.min(255,l*255));i.data[r*4]=i.data[r*4+1]=i.data[r*4+2]=c,i.data[r*4+3]=255}return t.putImageData(i,0,0),Ms=new ri(e),Ms.wrapS=Ms.wrapT=zs,Ms.repeat.set(2,1),Ms}function A3(s,e,t=5){let i=new Ji;for(let n=0;n<t*2;n+=1){let r=n%2===0?s:e,o=-Math.PI/2+n*Math.PI/t,a=Math.cos(o)*r,l=Math.sin(o)*r;n===0?i.moveTo(a,l):i.lineTo(a,l)}return i.closePath(),i}var gr=class{constructor(e="paper"){this.geometries=new Map,this.materials=new Map,this.edgeGeometries=new Map,this.star=new En(A3(6.2,2.7),{depth:1.4,bevelEnabled:!0,bevelThickness:.5,bevelSize:.5,bevelSegments:1}),this.starMaterial=null,this.setTheme(e)}setTheme(e){this.theme=e,this.palette=ys(e);for(let t of this.materials.values())t.dispose();this.materials.clear();for(let t of this.geometries.values())t.dispose();this.geometries.clear();for(let t of this.edgeGeometries.values())t.dispose();this.edgeGeometries.clear(),this.starMaterial&&this.starMaterial.dispose(),this.starMaterial=new Ue({color:this.palette.ink,emissive:this.theme==="paper"?"#000000":this.palette.amber,emissiveIntensity:this.theme==="paper"?0:1.6,roughness:.5,metalness:this.theme==="primetime"?.6:0})}radius(e){let t=this.theme==="sunset"?0:this.theme==="primetime"?2.4:3.6;return Math.min(t,e/4,Bt/2-.2)}geometry(e,t=yi,i=Bt){let n=Math.max(2,Math.round(e/2)*2),r=`${n}|${t}|${i}`,o=this.geometries.get(r);return o||(o=this.theme==="sunset"?new yt(n,i,t):new mr(n,i,t,3,this.radius(n)),o.userData.quantWidth=n,this.geometries.set(r,o)),o}edges(e,t=yi,i=Bt){let n=Math.max(2,Math.round(e/2)*2),r=`${n}|${t}|${i}`,o=this.edgeGeometries.get(r);return o||(o=new zn(new yt(n,i,t)),o.userData.quantWidth=n,this.edgeGeometries.set(r,o)),o}color(e){return In(this.theme,e)}material(e,t="solid"){let i=this.color(e),n=`${i}|${t}`,r=this.materials.get(n);return r||(this.theme==="sunset"?r=new Ue({color:i,emissive:i,emissiveIntensity:.38,roughness:.78,metalness:.04,flatShading:!0}):this.theme==="primetime"?r=new Nt({color:i,roughness:.16,metalness:.1,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.4,emissive:i,emissiveIntensity:.06}):r=new Nt({color:i,roughness:.55,metalness:0,clearcoat:.3,clearcoatRoughness:.42,sheen:.6,sheenColor:new Se("#fff4dc"),sheenRoughness:.5,envMapIntensity:.9,bumpMap:T3(),bumpScale:.45}),t==="ghost"&&(r.transparent=!0,r.depthWrite=!1),t==="clipped"&&(r.clippingPlanes=[]),this.materials.set(n,r),r)}uniqueMaterial(e){return this.material(e).clone()}mesh(e,{depth:t=yi,shadow:i=!0}={}){let n=Math.max(1,e.right!=null?e.right-e.left:e.width),r=this.geometry(n,t),o=new ne(r,this.material(e.color));if(o.scale.x=n/r.userData.quantWidth,o.castShadow=i,o.receiveShadow=!0,this.theme==="sunset"){let a=new Mn(this.edges(n,t),new $i({color:this.palette.ink,transparent:!0,opacity:.85}));o.add(a),o.userData.edges=a}return o.userData.width=n,o}addPerfectStar(e,t){if(e.userData.star)return;let i=new ne(this.star,this.starMaterial);i.position.set(0,0,yi/2+.2),i.scale.setScalar(Math.min(1.1,t/60)),i.castShadow=!1,e.add(i),e.userData.star=i}dispose(){for(let e of this.materials.values())e.dispose();for(let e of this.geometries.values())e.dispose();for(let e of this.edgeGeometries.values())e.dispose();this.star.dispose(),this.starMaterial&&this.starMaterial.dispose()}};var cc=(s,e)=>[s[1]*e[2]-s[2]*e[1],s[2]*e[0]-s[0]*e[2],s[0]*e[1]-s[1]*e[0]],rp=(s,e)=>s[0]*e[0]+s[1]*e[1]+s[2]*e[2],cu=s=>Math.hypot(s[0],s[1],s[2]);function R3(s){let e=Math.hypot(s[0],s[1],s[2],s[3])||1;s[0]/=e,s[1]/=e,s[2]/=e,s[3]/=e}function op(s){let[e,t,i,n]=s;return[1-2*(t*t+i*i),2*(e*t-i*n),2*(e*i+t*n),2*(e*t+i*n),1-2*(e*e+i*i),2*(t*i-e*n),2*(e*i-t*n),2*(t*i+e*n),1-2*(e*e+t*t)]}var ap=(s,e)=>[s[0]*e[0]+s[1]*e[1]+s[2]*e[2],s[3]*e[0]+s[4]*e[1]+s[5]*e[2],s[6]*e[0]+s[7]*e[1]+s[8]*e[2]],C3=(s,e)=>[s[0]*e[0]+s[3]*e[1]+s[6]*e[2],s[1]*e[0]+s[4]*e[1]+s[7]*e[2],s[2]*e[0]+s[5]*e[1]+s[8]*e[2]];function zo({pos:s,half:e,vel:t=[0,0,0],angVel:i=[0,0,0],quat:n=[0,0,0,1],density:r=.0012,restitution:o=.32,friction:a=.55,life:l=1/0,data:c=null}){let[h,u,d]=e,f=8*h*u*d*r,g=f/12*((2*u)**2+(2*d)**2),p=f/12*((2*h)**2+(2*d)**2),m=f/12*((2*h)**2+(2*u)**2);return{pos:[...s],half:[...e],vel:[...t],angVel:[...i],quat:[...n],mass:f,invMass:1/f,invInertia:[1/g,1/p,1/m],restitution:o,friction:a,age:0,life:l,resting:0,asleep:!1,data:c}}var xr=class{constructor({gravity:e=-520,floorY:t=()=>0,linearDamping:i=.04,angularDamping:n=.35}={}){this.gravity=e,this.floorY=t,this.linearDamping=i,this.angularDamping=n,this.bodies=[]}add(e){return this.bodies.push(e),e}remove(e){let t=this.bodies.indexOf(e);t>=0&&this.bodies.splice(t,1)}clear(){this.bodies.length=0}step(e){let t=Math.max(1,Math.ceil(e/.008333333333333333)),i=e/t;for(let n=0;n<t;n+=1)for(let r of this.bodies)r.asleep||this.integrate(r,i);for(let n of this.bodies)n.age+=e}corners(e){let t=op(e.quat),i=[];for(let n=-1;n<=1;n+=2)for(let r=-1;r<=1;r+=2)for(let o=-1;o<=1;o+=2){let a=[n*e.half[0],r*e.half[1],o*e.half[2]];i.push(ap(t,a))}return i}integrate(e,t){e.vel[1]+=this.gravity*t;let i=Math.max(0,1-this.linearDamping*t),n=Math.max(0,1-this.angularDamping*t);for(let u=0;u<3;u+=1)e.vel[u]*=i,e.angVel[u]*=n,e.pos[u]+=e.vel[u]*t;let[r,o,a]=e.angVel,l=e.quat,c=[.5*(r*l[3]+o*l[2]-a*l[1]),.5*(o*l[3]+a*l[0]-r*l[2]),.5*(a*l[3]+r*l[1]-o*l[0]),.5*(-r*l[0]-o*l[1]-a*l[2])];l[0]+=c[0]*t,l[1]+=c[1]*t,l[2]+=c[2]*t,l[3]+=c[3]*t,R3(l),this.collideFloor(e);let h=cu(e.vel)+cu(e.angVel)*Math.max(...e.half);e.resting=h<14&&e.pos[1]-e.half[1]<this.floorY(e.pos[0],e.pos[2])+Math.max(...e.half)*1.6?e.resting+t:0,e.resting>.7&&(e.asleep=!0,e.vel=[0,0,0],e.angVel=[0,0,0])}invInertiaWorld(e,t){let i=op(e.quat),n=C3(i,t);return ap(i,[n[0]*e.invInertia[0],n[1]*e.invInertia[1],n[2]*e.invInertia[2]])}collideFloor(e){let t=[0,1,0],i=0;for(let n=0;n<3;n+=1)for(let r of this.corners(e)){let o=e.pos[0]+r[0],a=e.pos[1]+r[1],l=e.pos[2]+r[2],c=this.floorY(o,l)-a;if(c<=0)continue;i=Math.max(i,c);let h=[e.vel[0]+e.angVel[1]*r[2]-e.angVel[2]*r[1],e.vel[1]+e.angVel[2]*r[0]-e.angVel[0]*r[2],e.vel[2]+e.angVel[0]*r[1]-e.angVel[1]*r[0]],u=h[1];if(u>=0)continue;let d=cc(r,t),f=e.invMass+rp(cc(this.invInertiaWorld(e,d),r),t),p=-(1+(u<-90?e.restitution:0))*u/f;e.vel[1]+=p*e.invMass;let m=this.invInertiaWorld(e,d);e.angVel[0]+=m[0]*p,e.angVel[1]+=m[1]*p,e.angVel[2]+=m[2]*p;let x=[h[0],0,h[2]],v=cu(x);if(v>.001){let M=[x[0]/v,0,x[2]/v],y=cc(r,M),S=e.invMass+rp(cc(this.invInertiaWorld(e,y),r),M),E=Math.min(v/S,e.friction*p);e.vel[0]-=M[0]*E*e.invMass,e.vel[2]-=M[2]*E*e.invMass,m=this.invInertiaWorld(e,y),e.angVel[0]-=m[0]*E,e.angVel[1]-=m[1]*E,e.angVel[2]-=m[2]*E}}i>0&&(e.pos[1]+=i*.85)}settle(e=3,t=1/60){for(let i=0;i<e;i+=t)this.step(t)}};function hc({plinthRadius:s=250,ground:e=-64}={}){return(t,i)=>{let n=Math.hypot(t,i);return n<=s?0:n>=s+22?e:e*((n-s)/22)}}var Dn=s=>s*Ii+Ii/2,Jn=s=>s-ki/2,qt=yi/2+.6,Go=(s,e=1.7)=>$e(s).multiplyScalar(e);function Di(s,e=1){return new mt({color:Go(s),transparent:!0,opacity:e,blending:kt,depthWrite:!1,side:ht,toneMapped:!1})}var cp="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",P3=`varying vec2 vUv; uniform vec3 uColor; uniform float uTime, uDash, uSpeed, uOpacity;
  void main(){
    float d = fract(vUv.x * uDash - uTime * uSpeed);
    float a = smoothstep(0.0, 0.18, d) * smoothstep(0.78, 0.5, d);
    a *= smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.7, vUv.y);
    gl_FragColor = vec4(uColor, a * uOpacity);
  }`;function uc(s,{dash:e=14,speed:t=1.4,opacity:i=1}={}){return new vt({transparent:!0,depthWrite:!1,blending:kt,side:ht,toneMapped:!1,uniforms:{uColor:{value:Go(s,1.9)},uTime:{value:0},uDash:{value:e},uSpeed:{value:t},uOpacity:{value:i}},vertexShader:cp,fragmentShader:P3})}var vr=class{constructor(e,t,i){this.count=e,this.width=t,this.positions=new Float32Array(e*6);let n=new Float32Array(e*4),r=[];for(let a=0;a<e;a+=1){let l=a/(e-1);if(n.set([l,0,l,1],a*4),a<e-1){let c=a*2;r.push(c,c+1,c+2,c+1,c+3,c+2)}}let o=new pt;o.setAttribute("position",new zt(this.positions,3).setUsage(Oi)),o.setAttribute("uv",new zt(n,2)),o.setIndex(r),this.mesh=new ne(o,i),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7}set(e,t=0){let i=this.count,n=this.positions,r=[];for(let o=0;o<i;o+=1)r.push(e(o/(i-1)));for(let o=0;o<i;o+=1){let a=r[Math.max(0,o-1)],l=r[Math.min(i-1,o+1)],c=l[0]-a[0],h=l[1]-a[1],u=Math.hypot(c,h)||1;c/=u,h/=u;let d=-h*this.width/2,f=c*this.width/2;n.set([r[o][0]+d,r[o][1]+f,t,r[o][0]-d,r[o][1]-f,t],o*6)}this.mesh.geometry.attributes.position.needsUpdate=!0}dispose(){this.mesh.geometry.dispose()}};function lp(s,e,t=256,i=64,n=5){let r=document.createElement("canvas");r.width=t,r.height=i;let o=r.getContext("2d");o.strokeStyle=s,o.lineWidth=n,o.lineCap="round",o.lineJoin="round";for(let l of e)o.beginPath(),l.forEach(([c,h],u)=>u?o.lineTo(c*t,h*i):o.moveTo(c*t,h*i)),o.stroke();let a=new ri(r);return a.colorSpace=Tt,a}var dc=class{constructor(e){this.tower=e,this.group=new ae,this.group.name="effects",e.body.add(this.group),this.kit=e.kit,this.currentId="",this.built=new Map,this.active=null,this.clock=0,this.sparkTimer=0,this.spot=null,this.mover=null}get palette(){return this.kit.palette}setKit(e){this.kit=e;for(let t of this.built.values())this.group.remove(t.group),t.dispose();this.built.clear(),this.active=null,this.currentId=""}attachMover(e){this.mover=e;for(let t of this.built.values())t.attach&&t.attach(e)}update(e,t,i,n){let r=e.effect,o=r?r.id:"";if(this.spot=null,o!==this.currentId&&(this.active&&(this.active.group.visible=!1,this.active.off&&this.active.off(t)),this.currentId=o,this.active=null,o&&hu[o])){if(!this.built.has(o)){let c=hu[o](this);c.group.visible=!1,this.group.add(c.group),this.built.set(o,c),c.attach&&this.mover&&c.attach(this.mover)}this.active=this.built.get(o),this.active.group.visible=!0,this.active.t0=n,this.active.on&&this.active.on(t)}if(!this.active)return;let a=e.blocks||[],l=a[a.length-1]||null;this.active.update({state:e,effect:r,mover:t,below:l,moving:e.moving,dt:i,time:n,rig:this,tower:this.tower,helpers:e.helpers,reduced:this.tower.reduced})}emit(e,t){let i=this.tower.fx&&this.tower.fx.sparks;if(!i)return;let n=this.tower.root.localToWorld(e.clone());i.emit({pos:[n.x,n.y,n.z],...t})}dispose(){for(let e of this.built.values())e.dispose();this.built.clear(),this.tower.body.remove(this.group)}},Kn=(s=0,e=0,t=0)=>new P(s,e,t),ko=s=>_s(s),hu={turbo(s){let e=new ae,t=s.palette,i=[],n=new Rt(1,1);for(let r=0;r<4;r+=1){let o=new ne(n,Di(r%2?t.amber:t.vermilion,.8));e.add(o),i.push(o)}return{group:e,update({moving:r,mover:o,time:a,reduced:l}){if(e.visible=!!(o&&r&&o.visible),!e.visible)return;let c=Number(r.direction)<0?-1:1,h=o.userData.drawnWidth;i.forEach((u,d)=>{let f=(46+d*20+Math.sin(a*40+d*7)*14)*(l?.6:1);u.scale.set(f,1.7,1),u.position.set(o.position.x-c*(h/2+f/2+3),o.position.y+(d-1.5)*4.6,qt)}),!l&&Math.random()<.7&&s.emit(Kn(o.position.x-c*h/2,o.position.y+(Math.random()-.5)*12,qt),{vel:[-c*(90+Math.random()*110),(Math.random()-.5)*60,40],color:ko(Math.random()>.5?t.amber:t.vermilion),size:5,life:.45,drag:2,gravity:0})},dispose(){n.dispose(),i.forEach(r=>r.material.dispose())}}},drunk(s){let e=new ae,t=s.palette,i=new vr(28,3,uc(t.rose,{dash:6,speed:.8,opacity:.9}));return e.add(i.mesh),{group:e,update({mover:n,time:r,moving:o,reduced:a}){if(e.visible=!!(n&&n.visible),!e.visible)return;let l=n.userData.drawnWidth,c=n.position.x,h=n.position.y+Bt/2+9;i.mesh.material.uniforms.uTime.value=r,i.set(u=>[c-l/2+u*l,h+Math.sin(u*Ke*2+r*6)*4.5],qt+4),!a&&Math.random()<.25&&s.emit(Kn(c+(Math.random()-.5)*l,h,qt),{vel:[(Math.random()-.5)*30,40+Math.random()*40,20],color:ko(t.rose),size:8,life:1.1,drag:.8,gravity:30,growth:6,alpha:.7})},dispose(){i.dispose(),i.mesh.material.dispose()}}},slowmo(s){let e=new ae,t=s.palette,i=new ne(new bt(1,.05,8,64),Di(t.blue,.9));e.add(i);let n=new ne(new Rt(.06,.8).translate(0,.4,0),Di(t.amber,1));i.add(n);let r=new ae;i.add(r);for(let o=0;o<12;o+=1){let a=new ne(new Rt(.05,o%3?.1:.18),Di(t.blue,.8)),l=o/12*Ke;a.position.set(Math.sin(l)*.9,Math.cos(l)*.9,0),a.rotation.z=-l,r.add(a)}return{group:e,update({mover:o,time:a,effect:l,reduced:c}){if(e.visible=!!(o&&o.visible),!e.visible)return;let h=34;i.scale.set(h,h,h),i.position.set(o.position.x,o.position.y+4,qt+2),n.rotation.z=c?0:-((l.elapsed||0)*.55),r.rotation.z=0,i.material.opacity=.55+.35*Math.sin(a*2)},dispose(){i.geometry.dispose(),i.material.dispose(),n.geometry.dispose(),n.material.dispose(),r.children.forEach(o=>{o.geometry.dispose(),o.material.dispose()})}}},magnet(s){let e=new ae,t=s.palette,i=[0,1,2].map(l=>new vr(24,2.2,uc(t.teal,{dash:9,speed:-1.6-l*.2,opacity:.95})));i.forEach(l=>e.add(l.mesh));let n=new ae,r=new Ue({color:t.vermilion,roughness:.35,metalness:.5,emissive:t.vermilion,emissiveIntensity:.15}),o=new ne(new bt(15,5,10,28,Math.PI),r);o.rotation.z=0,n.add(o);let a=new Ue({color:"#f4f4f4",roughness:.3,metalness:.8});for(let l of[-1,1]){let c=new ne(new yt(10,11,10),a);c.position.set(l*15,-5,0),n.add(c)}return n.rotation.x=Math.PI,e.add(n),n.scale.setScalar(1.1),{group:e,update({mover:l,below:c,moving:h,time:u,reduced:d}){if(e.visible=!!(l&&l.visible&&c),!e.visible)return;let f=l.position.x,g=l.position.y,p=Jn((c.left+c.right)/2),m=Dn(c.level)+Bt/2+2;i.forEach((x,v)=>{x.mesh.material.uniforms.uTime.value=u;let M=(v-1)*7;x.set(y=>{let S=f+M+(p+M-f-M)*y,E=g-Bt/2+(m-g+Bt/2)*y-Math.sin(y*Math.PI)*(11+v*4);return[S,E]},qt+2)}),n.position.set(f,g+34+(d?0:Math.sin(u*3)*3),qt),n.rotation.y=d?0:Math.sin(u*1.4)*.35,!d&&Math.random()<.3&&s.emit(Kn(f+(Math.random()-.5)*30,g-6,qt),{vel:[(p-f)*.6,-30,10],color:ko(t.teal),size:4,life:.5,drag:2})},dispose(){i.forEach(l=>{l.dispose(),l.mesh.material.dispose()}),o.geometry.dispose(),r.dispose(),a.dispose(),n.children.forEach(l=>l.geometry&&l.geometry.dispose())}}},portal(s){let e=new ae,t=s.palette,i=a=>new vt({transparent:!0,depthWrite:!1,blending:kt,side:ht,toneMapped:!1,uniforms:{uTime:{value:0},uA:{value:Go(t.teal,1.7)},uB:{value:Go(t.amber,1.7)},uDir:{value:1}},vertexShader:cp,fragmentShader:`varying vec2 vUv; uniform vec3 uA, uB; uniform float uTime, uDir;
        void main(){
          float edge = 1.0 - abs(vUv.x - 0.5) * 2.0;
          float swirl = sin(vUv.y * 38.0 + uDir * uTime * 5.0 + sin(vUv.x * 9.0 + uTime) * 2.0) * 0.5 + 0.5;
          float fade = smoothstep(0.0, 0.18, vUv.y) * smoothstep(1.0, 0.82, vUv.y);
          float core = smoothstep(0.55, 1.0, edge);
          vec3 c = mix(uA, uB, swirl);
          gl_FragColor = vec4(c, (0.18 + swirl * 0.4) * (0.35 + core * 0.65) * fade);
        }`}),n=[-1,1].map(a=>{let l=new ne(new Rt(26,1),i(a));return e.add(l),l}),r=[],o=new bt(1,.1,6,26);for(let a=0;a<12;a+=1){let l=new ne(o,Di(t.amber,.75));l.scale.set(4,11,4),l.rotation.y=Math.PI/2,e.add(l),r.push(l)}return{group:e,update({moving:a,mover:l,effect:c,time:h,state:u}){let d=a?a.level:u.blocks.length||1,f=Dn(d),g=380,p=Number(c.windDirection)<0?-1:1;n.forEach((m,x)=>{m.scale.y=g,m.position.set((x?1:-1)*(ki/2-4),f+40,0),m.material.uniforms.uTime.value=h,m.material.uniforms.uDir.value=p*(x?-1:1)}),r.forEach((m,x)=>{let v=x%2?1:-1,M=Math.floor(x/2),y=f-190+((M*66+h*20*p*v)%400+400)%400;m.position.set(v*(ki/2-4+(v>0?2:-2)*0),y,0),m.rotation.y=Math.PI/2,m.rotation.z=h*.6*v})},dispose(){n.forEach(a=>{a.geometry.dispose(),a.material.dispose()}),r.forEach(a=>a.material.dispose()),o.dispose()}}},rollercoaster(s){let e=new ae,t=s.palette,i=new vr(40,3,uc(t.teal,{dash:20,speed:.6,opacity:.9}));e.add(i.mesh);let n=new gt(4.2,4.2,3,14);n.rotateX(Math.PI/2);let r=new Ue({color:t.ink,roughness:.4,metalness:.6}),o=[0,1].map(()=>{let a=new ne(n,r);return a.castShadow=!0,e.add(a),a});return{group:e,update({mover:a,time:l,below:c,moving:h,reduced:u}){if(e.visible=!!(a&&a.visible),!e.visible)return;let d=Dn(h.level)-Bt/2-9;i.mesh.material.uniforms.uTime.value=l,i.set(g=>[Jn(g*ki),d+Math.sin(g*14+l*3)*9],qt);let f=a.userData.drawnWidth;o.forEach((g,p)=>{g.position.set(a.position.x+(p?1:-1)*f*.34,a.position.y-Bt/2-3,qt-6),g.rotation.z=-l*6*(Number(h.direction)||1)})},dispose(){i.dispose(),i.mesh.material.dispose(),n.dispose(),r.dispose()}}},pisa(s){return{group:new ae,update({effect:t,tower:i,time:n,reduced:r}){if(r||Math.random()>.12)return;let o=(Math.random()<.5?-1:1)*(60+Math.random()*120);s.emit(Kn(o,2,qt),{vel:[(Math.random()-.5)*40,28+Math.random()*30,20],color:[.8,.74,.6],size:14,life:1.1,drag:1.4,growth:14,alpha:.35})},dispose(){}}},earthquake(s){let e=new ae,t=s.palette,i=[];for(let n=0;n<6;n+=1){let r=new vr(14,3.4,uc(t.vermilion,{dash:3,speed:.4,opacity:1})),o=n/6*Ke+.4,a=n*1.7;r.angle=o,r.seed=a,r.mesh.rotation.x=-Math.PI/2,r.mesh.position.y=1.2,e.add(r.mesh),i.push(r)}return{group:e,update({effect:n,time:r,reduced:o}){let a=be((n.elapsed||0)/.5)*be((n.remaining??5)/.8);if(i.forEach(l=>{l.mesh.material.uniforms.uTime.value=r,l.mesh.material.uniforms.uOpacity.value=a,l.set(c=>{let h=20+c*220,u=l.angle+Math.sin(c*9+l.seed)*.16;return[Math.cos(u)*h,-Math.sin(u)*h]},0)}),!o&&Math.random()<.5){let l=Math.random()*Ke,c=160+Math.random()*110;s.emit(Kn(Math.cos(l)*c,2,Math.sin(l)*c*.6+40),{vel:[(Math.random()-.5)*40,40+Math.random()*70,20],color:[.85,.77,.62],size:12,life:1.2,drag:1.1,growth:12,alpha:.3})}},dispose(){i.forEach(n=>{n.dispose(),n.mesh.material.dispose()})}}},spotlight(s){let e=new ae,t=s.palette,i=new Jt(1,1,40,1,!0);i.translate(0,-.5,0);let n=new ne(i,new vt({transparent:!0,depthWrite:!1,blending:kt,side:ht,toneMapped:!1,uniforms:{uColor:{value:Go(t.amber,1.3)}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = position.y; vec4 mv = modelViewMatrix*vec4(position,1.); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying float vY; varying vec3 vN; varying vec3 vV; uniform vec3 uColor; void main(){ float f = pow(abs(dot(vN,vV)),1.4); gl_FragColor = vec4(uColor, f * (1.0 + vY) * 0.28); }"}));e.add(n);let r=new ne(new Ai(0,1,48),Di(t.amber,.28));return r.rotation.x=-Math.PI/2,e.add(r),{group:e,update({below:o,effect:a,time:l,reduced:c}){if(!o){e.visible=!1;return}let h=Number(a.spotlightSide)<0?-1:1,u=Jn(h<0?o.left+7:o.right-7),d=Dn(o.level);n.position.set(u,d+620,0),n.scale.set(52,620,52),r.position.set(u,d+Bt/2+.6,30),r.scale.set(52,52,1),s.spot={x:u,y:d,z:yi/2,radius:52},!c&&Math.random()<.45&&s.emit(Kn(u+(Math.random()-.5)*80,d+160+Math.random()*120,0),{vel:[0,-60,0],color:ko(t.amber),size:3,life:1,drag:.2,alpha:.7})},dispose(){i.dispose(),n.material.dispose(),r.geometry.dispose(),r.material.dispose()}}},peekaboo(s){let e=new ae,t=s.palette,i=new ne(new bt(1,.03,6,48),Di(t.teal,.6));return e.add(i),{group:e,update({mover:n,effect:r,moving:o,helpers:a,time:l,reduced:c}){if(e.visible=!!(n&&n.visible),!e.visible)return;let h=n.userData.alpha;i.scale.set(n.userData.drawnWidth/2+14,20,1),i.position.set(n.position.x,n.position.y,qt),i.material.opacity=(1-h)*.75,!c&&h<.5&&Math.random()<.35&&s.emit(Kn(n.position.x+(Math.random()-.5)*n.userData.drawnWidth,n.position.y+(Math.random()-.5)*14,qt),{vel:[0,12,0],color:ko(t.teal),size:3.4,life:.7,alpha:.7,drag:1})},dispose(){i.geometry.dispose(),i.material.dispose()}}},zoom(s){let e=new ae,t=s.palette,i=new ne(new bt(1,.04,8,64),Di(t.amber,.9));e.add(i);let n=new ne(new gt(.05,.05,.7,8),Di(t.vermilion,.9));return n.position.set(.88,-.88,0),n.rotation.z=Math.PI/4,i.add(n),{group:e,update({below:r,effect:o,time:a,reduced:l}){if(!r){e.visible=!1;return}let c=1+(l?0:Math.sin(a*3)*.04),h=(r.right-r.left)*.5+24;i.scale.set(h*c,h*c,1),i.position.set(Jn((r.left+r.right)/2),Dn(r.level)+14,qt+4),i.material.opacity=.5*be((o.remaining??5)/.4)},dispose(){i.geometry.dispose(),i.material.dispose(),n.geometry.dispose(),n.material.dispose()}}},double(s){let e=new ae,t=s.palette,i=null,n=null,r=lp(t.ink,[[[.53,.1],[.48,.34],[.55,.55],[.49,.9]]],256,64,8),o=new mt({map:r,transparent:!0,depthWrite:!1});return n=new ne(new Rt(1,Bt),o),{group:e,attach(a){i&&i.parent&&i.parent.remove(i),i=n,a.add(i),i.position.z=qt,i.scale.x=a.userData.baseW},off(){i&&i.parent&&i.parent.remove(i)},update({mover:a}){(!i||i.parent!==a)&&a&&(a.add(i),i.position.z=qt,i.scale.x=a.userData.baseW)},dispose(){r.dispose(),o.dispose(),n.geometry.dispose()}}},accordion(s){let e=new ae,t=s.palette,i=new ae,n=new mt({color:t.ink,transparent:!0,opacity:.38,depthWrite:!1}),r=new Rt(1.1,Bt*.9),o=[];for(let l=0;l<9;l+=1){let c=new ne(r,n);c.userData.k=(l+.5)/9-.5,c.rotation.z=l%2?.14:-.14,i.add(c),o.push(c)}let a=null;return{group:e,attach(l){i.parent&&i.parent.remove(i),l.add(i),i.position.z=qt},off(){i.parent&&i.parent.remove(i)},update({mover:l,time:c,reduced:h}){if(!l)return;i.parent!==l&&(l.add(i),i.position.z=qt);let u=l.userData.baseW;o.forEach(d=>{d.position.x=d.userData.k*u,d.scale.x=1/Math.max(.2,l.scale.x)})},dispose(){n.dispose(),r.dispose()}}},crumble(s){let e=new ae,t=s.palette,i=lp(t.ink,[[[.24,.04],[.31,.34],[.2,.62],[.27,.96]],[[.31,.34],[.42,.5]],[[.68,.04],[.61,.34],[.72,.62],[.65,.96]],[[.61,.34],[.5,.5]]],256,64,6),n=new mt({map:i,transparent:!0,depthWrite:!1}),r=new ne(new Rt(1,Bt),n);return e.add(r),{group:e,update({below:o,time:a,reduced:l}){if(!o){e.visible=!1;return}let c=o.right-o.left;r.scale.x=c,r.position.set(Jn((o.left+o.right)/2),Dn(o.level),qt),!l&&Math.random()<.28&&s.emit(Kn(r.position.x+(Math.random()-.5)*c*.7,r.position.y-4,qt),{vel:[(Math.random()-.5)*18,-10,18],color:[.62,.55,.45],size:3.2,life:1.1,drag:.4,gravity:-200,alpha:.9})},dispose(){i.dispose(),n.dispose(),r.geometry.dispose()}}},superglue(s){let e=new ae,t=s.palette,i=new Nt({color:t.amber,roughness:.08,metalness:0,clearcoat:1,transmission:0,emissive:t.amber,emissiveIntensity:.55}),n=new ne(new bn(2.6,1,6,14).rotateZ(Math.PI/2),i);e.add(n);let r=new ne(new at(3,12,10),i);e.add(r);let o=new ne(new Rt(28,yi*.96).rotateX(-Math.PI/2),Di(t.amber,.2));return e.add(o),{group:e,attach(){},off(a){a&&a.material&&a.material.emissive&&(a.material.emissiveIntensity=0)},update({below:a,mover:l,time:c,reduced:h}){if(!a){e.visible=!1;return}let u=a.right-a.left,d=Jn((a.left+a.right)/2),f=Dn(a.level)+Bt/2;n.scale.set((u-8)/6.2,1,1),n.position.set(d,f+1.2,qt-8),r.position.set(d+Math.sin(c*.5)*u*.2,f-2-c*.6%1*9,qt-1),r.scale.setScalar(.7+.3*Math.sin(c*4)),o.position.set(d,f+.7,0),o.material.opacity=.14+.1*(h?1:Math.sin(c*4)*.5+.5),l&&l.visible&&l.material&&(l.material.emissive.set(t.amber),l.material.emissiveIntensity=h?.4:.35+.3*Math.sin(c*5))},dispose(){i.dispose(),n.geometry.dispose(),r.geometry.dispose(),o.geometry.dispose(),o.material.dispose()}}},calipers(s){let e=new ae,t=s.palette,i=new yt(2,1,3),n=[0,1].map(()=>{let c=new ne(i,Di(t.amber,.95));return e.add(c),c}),r=new yt(1,2,3),o=[0,1,2,3].map(()=>{let c=new ne(r,Di(t.amber,.95));return e.add(c),c}),a=new at(3.4,12,8),l=[0,1].map(()=>{let c=new ne(a,Di(t.amber,1));return e.add(c),c});return{group:e,update({below:c,moving:h,helpers:u,time:d}){if(!c||!h||!u){e.visible=!1;return}let f=u.caliperBounds(c,h),g=Jn(f.minLeft),p=Jn(f.maxLeft+h.width),m=Dn(h.level),x=Dn(c.level),v=Math.max(m,x)+22,M=x-13,y=v-M;n.forEach((_,b)=>{_.scale.y=y,_.position.set(b?p:g,(v+M)/2,qt+1)});let S=[1,-1];[g,p].forEach((_,b)=>{o[b*2].scale.x=14,o[b*2].position.set(_+S[b]*7,m,qt+1),o[b*2+1].scale.x=14,o[b*2+1].position.set(_+S[b]*7,x-Ii/2,qt+1),l[b].position.set(_,v,qt+1)});let E=1+Math.sin(d*5)*.2;l.forEach(_=>_.scale.setScalar(E))},dispose(){i.dispose(),r.dispose(),a.dispose(),[...n,...o,...l].forEach(c=>c.material.dispose())}}}},cM=Object.keys(hu).concat(["zoom"]).filter((s,e,t)=>t.indexOf(s)===e);var Mi=s=>s*Ii+Ii/2,fc=s=>s-ki/2,I3=70,_r=class{constructor(e,t,{scale:i=1,depth:n=yi,name:r="",color:o="#2F8478",interactive:a=!1}={}){this.kit=e,this.fx=t,this.depth=n,this.name=r,this.color=o,this.root=new ae,this.root.scale.setScalar(i),this.body=new ae,this.debrisGroup=new ae,this.root.add(this.body,this.debrisGroup),this.meshes=[],this.count=0,this.stateId=null,this.lastFallen=0,this.lastCollapsed=!1,this.collapseDone=!1,this.world=new xr({floorY:hc()}),this.random=Ut(77),this.mover=null,this.moverMaterial=null,this.decoy=null,this.portalClones=[],this.prevMover=null,this.shake=new P,this.rig=new dc(this),this.height=0,this.topLevel=0,this.timeScale=1,this.lastEdge=[0,0],this.listeners={land:[],perfect:[],collapse:[],piece:[],impact:[]},this.collapseQueue=[],this.alpha=1}on(e,t){return this.listeners[e].push(t),this}emit(e,t){for(let i of this.listeners[e])i(t,this)}setKit(e){this.kit=e,this.clear(!1),this.rig.setKit(e)}clear(e=!1){for(let t of this.meshes)this.disposeMesh(t);this.meshes.length=0,this.count=0;for(let t of this.world.bodies)t.data&&t.data.mesh&&this.disposeMesh(t.data.mesh);this.world.clear(),this.mover&&(this.body.remove(this.mover),this.mover=null),this.decoy&&(this.body.remove(this.decoy),this.decoy=null);for(let t of this.portalClones)this.body.remove(t);this.portalClones.length=0,this.collapseQueue.length=0,this.moverMaterial&&(this.moverMaterial.dispose(),this.moverMaterial=null),e?this.lastFallen=0:(this.stateId=null,this.lastFallen=0,this.lastCollapsed=!1)}disposeMesh(e){e&&(e.parent&&e.parent.remove(e),e.userData.plaque&&(e.userData.plaque.material.map.dispose(),e.userData.plaque.material.dispose(),e.userData.plaque.geometry.dispose()),e.userData.edges&&e.userData.edges.material.dispose())}makeBlockMesh(e,{animate:t=!1,plaque:i=!1}={}){let n=this.kit.mesh(e,{depth:this.depth}),r=Math.max(1,e.right-e.left);return n.position.set(fc((e.left+e.right)/2),Mi(e.level),0),n.userData.level=e.level,n.userData.baseX=n.position.x,n.userData.width=r,n.userData.placer=e.placer,e.perfect&&this.kit.addPerfectStar(n,r),t&&(n.userData.land={t:0,perfect:!!e.perfect}),i&&e.placer&&e.placer!=="Base"&&this.addPlaque(n,e),this.body.add(n),n}addPlaque(e,t){let i=String(t.placer).slice(0,12),n=document.createElement("canvas");n.width=256,n.height=72;let r=n.getContext("2d"),o=this.kit.palette,a=this.kit.theme==="sunset"?"30px VT323, monospace":this.kit.theme==="primetime"?'700 34px "Barlow Condensed", sans-serif':'700 30px "DM Sans", sans-serif';r.fillStyle=this.kit.theme==="paper"?"rgba(42,37,32,0.88)":"rgba(6,10,36,0.9)",this.kit.theme==="sunset"?r.fillRect(2,2,252,68):(r.beginPath(),r.roundRect(2,2,252,68,16),r.fill()),r.strokeStyle=o.amber,r.lineWidth=3,r.stroke(),r.fillStyle=this.kit.theme==="paper"?"#F4EDDF":"#ffffff",r.font=a,r.textAlign="center",r.textBaseline="middle",r.fillText(i,128,38,232);let l=new ri(n);l.colorSpace=Tt,l.anisotropy=4;let c=new ne(new Rt(52,14.6),new mt({map:l,transparent:!0,depthWrite:!1})),h=t.left>ki*.56,u=e.userData.width;c.position.set(h?-u/2-28:u/2+28,0,this.depth/2+2),e.add(c),e.userData.plaque=c}sync(e,t,i){let n=e.blocks||[],r=n[this.count-1],o=this.stateId!==e.id||n.length<this.count||this.count>0&&(!r||Math.abs(r.left-this.lastEdge[0])>.6||Math.abs(r.right-this.lastEdge[1])>.6);o&&(this.clear(),this.stateId=e.id,this.lastFallen=(e.fallen||[]).length,this.lastCollapsed=!!e.collapsed,this.prevMover=null,this.collapseDone=!!(e.collapsed&&e.phase!=="collapse")),this.reduced=!!e.reduced;let a=this.count,l=o||n.length-a>1;for(let u=a;u<n.length;u+=1){let d=n[u],f=this.makeBlockMesh(d,{animate:!l&&!this.reduced,plaque:e.teamPlacers});this.meshes[u]=f,this.count=u+1,this.lastEdge=[d.left,d.right],!l&&u>0&&this.onLand(d,f,e)}this.height=n.length,this.topLevel=n.length-1;let c=e.fallen||[];c.length<this.lastFallen&&(this.lastFallen=0);for(let u=this.lastFallen;u<c.length;u+=1)!o&&!this.collapseDone&&this.spawnPiece(c[u]);this.lastFallen=c.length;let h=!!e.collapsed;h&&!this.lastCollapsed&&!o&&this.beginCollapse(e),h&&!this.lastCollapsed&&o&&(this.collapseDone=!0),this.lastCollapsed=h,this.updateCollapseQueue(t),this.syncMover(e,t,i),this.animateBlocks(t,i,e),this.stepDebris(t*this.timeScale,i),this.applyBodyTransform(e,i),this.rig.update(e,this.mover,t,i),this.prevMover=e.moving?{...e.moving}:null}onLand(e,t,i){this.root.updateWorldMatrix(!0,!1);let n=new P(t.position.x,t.position.y-Bt/2,this.depth/2-4);this.root.localToWorld(n),this.emit("land",{block:e,perfect:!!e.perfect,position:n,width:e.right-e.left,level:e.level}),e.perfect&&this.emit("perfect",{block:e,position:n.clone(),width:e.right-e.left,level:e.level})}syncMover(e,t,i){let n=e.moving,r=e.effect?e.effect.id:"";if(!n||e.phase==="collapse"||e.ended||e.collapsed){this.mover&&(this.mover.visible=!1),this.decoy&&(this.decoy.visible=!1);for(let v of this.portalClones)v.visible=!1;return}let o=n.color||"#2F8478",a=Math.max(4,n.width);if(!this.mover||this.mover.userData.color!==o||this.mover.userData.theme!==this.kit.theme||a/this.mover.userData.baseW>1.22||a/this.mover.userData.baseW<.82){this.mover&&this.body.remove(this.mover),this.moverMaterial&&this.moverMaterial.dispose(),this.moverMaterial=this.kit.uniqueMaterial(o),this.mover=new ne(this.kit.geometry(a,this.depth),this.moverMaterial),this.mover.castShadow=!0,this.mover.receiveShadow=!0;let v=this.mover.geometry.parameters?this.mover.geometry.parameters.width:a;if(this.mover.userData={color:o,theme:this.kit.theme,baseW:v,level:n.level},this.kit.theme==="sunset"){let M=new Mn(this.kit.edges(v,this.depth),new $i({color:this.kit.palette.ink,transparent:!0,opacity:.85}));this.mover.add(M),this.mover.userData.edges=M}this.body.add(this.mover);for(let M of this.portalClones)this.body.remove(M);this.portalClones.length=0,this.rig.attachMover(this.mover)}let l=this.mover;l.visible=!0;let c=r==="slowmo"&&e.helpers?e.helpers.slowToDartWindup(e.effect.elapsed):0,h=n.width*(1-.08*c),u=n.left+(n.width-h)/2,d=1;!this.reduced&&r==="peekaboo"&&e.helpers&&(d=e.helpers.peekabooOpacity(e.effect.elapsed));let f=r==="rollercoaster"&&!this.reduced&&e.helpers?e.helpers.rollercoasterOffset(e.effect.elapsed,Number(n.rollerPhase)||0):0,g=Mi(n.level)-f;l.scale.set(h/l.userData.baseW,1+.06*c,1),l.position.set(fc(u+h/2),g,0),l.userData.alpha=d,l.userData.drawnWidth=h,l.userData.drawnLeft=u;let p=this.moverMaterial,m=d<.999;p.transparent=m,p.opacity=d,p.depthWrite=!m,l.castShadow=d>.55&&r!=="spotlight",l.rotation.z=r==="drunk"&&!this.reduced?Math.sin(i*5.2)*.07+Math.sin(i*2.3)*.04:0;let x=r==="portal";for(let v=0;v<2;v+=1){let M=this.portalClones[v];M||(M=new ne(l.geometry,p),M.castShadow=!0,this.body.add(M),this.portalClones[v]=M),M.geometry=l.geometry,M.material=p;let y=v===0?ki:-ki,S=n.left+0,E=x&&(v===0&&n.left<0||v===1&&n.left+n.width>ki);M.visible=!!E,M.scale.copy(l.scale),M.position.set(l.position.x+y,l.position.y,0)}if(r==="double"&&n.decoy){if(!this.decoy||this.decoy.userData.color!==(n.decoy.color||o)){this.decoy&&this.body.remove(this.decoy);let v=this.kit.material(n.decoy.color||o);this.decoy=new ne(this.kit.geometry(Math.max(4,n.decoy.width),this.depth),v),this.decoy.userData={color:n.decoy.color||o,baseW:this.decoy.geometry.parameters.width},this.decoy.castShadow=!0,this.body.add(this.decoy)}this.decoy.visible=d>.01,this.decoy.scale.x=n.decoy.width/this.decoy.userData.baseW,this.decoy.position.set(fc(n.decoy.left+n.decoy.width/2),g,0)}else this.decoy&&(this.decoy.visible=!1)}animateBlocks(e,t,i){let n=this.meshes.length,r=i.effect&&i.effect.id==="earthquake"?1:0;for(let o=0;o<n;o+=1){let a=this.meshes[o];if(!a||!a.visible&&a.userData.collapsing)continue;let l=a.userData.level,c=this.reduced?0:Math.min(2.2,(l/36)**2*1.4)*(1+r*2);a.position.x=a.userData.baseX+Math.sin(t*.8+l*.31)*c;let h=a.userData.land;if(h){h.t+=e;let d=Math.exp(-h.t*8.5)*Math.cos(h.t*30);a.scale.y=1-.2*d,a.position.y=Mi(l)-(1-a.scale.y)*Bt*.5,h.t>.6&&(a.scale.y=1,a.position.y=Mi(l),a.userData.land=null)}let u=a.userData.star;u&&!this.reduced&&(u.rotation.z=Math.sin(t*1.6+l)*.12)}}spawnPiece(e){if(!e||!(e.right>e.left))return;let t=e.right-e.left,i=Number.isInteger(e.level)?e.level:this.topLevel+1,n=(e.left+e.right)/2<ki/2?-1:1,r=this.kit.mesh({left:e.left,right:e.right,color:e.color||"#2F8478"},{depth:this.depth}),o=this.random,a=zo({pos:[fc((e.left+e.right)/2),Mi(i),0],half:[t/2,Bt/2,this.depth/2],vel:[n*(70+o()*150),-10+o()*70,(o()-.2)*150],angVel:[(o()-.5)*5,(o()-.5)*3,-n*(2+o()*5)],restitution:.3,friction:.5,data:{mesh:r,width:t,piece:e}});e.kind==="crumble"&&(a.vel[1]+=60,a.angVel[0]*=2),this.world.add(a),this.debrisGroup.add(r),this.trimBodies(),this.emit("piece",{piece:e,width:t,position:new P(r.position.x,Mi(i),0),side:n})}trimBodies(){for(;this.world.bodies.length>I3;){let e=this.world.bodies.find(t=>t.asleep)||this.world.bodies[0];this.disposeMesh(e.data.mesh),this.world.remove(e)}}beginCollapse(e){let t=e.collapseStartLevel!=null?e.collapseStartLevel:Math.max(0,this.count-6),i=this.meshes.filter(n=>n&&n.userData.level>=t).reverse();i.forEach((n,r)=>this.collapseQueue.push({mesh:n,delay:this.reduced?0:r*.07})),this.emit("collapse",{count:i.length,top:i.length?i[0].position.clone():null})}updateCollapseQueue(e){if(!this.collapseQueue.length)return;for(let i of this.collapseQueue)i.delay-=e*this.timeScale;let t=this.collapseQueue.filter(i=>i.delay<=0);if(t.length){this.collapseQueue=this.collapseQueue.filter(i=>i.delay>0);for(let{mesh:i}of t){let n=i.userData.width,r=i.userData.level,o=i.position.x<0?-1:1,a=this.random;i.userData.collapsing=!0;let l=zo({pos:[i.position.x,i.position.y,0],half:[n/2,Bt/2,this.depth/2],vel:[o*(38+a()*130),10+a()*90,(a()-.1)*160],angVel:[(a()-.5)*4,(a()-.5)*3,-o*(1.2+a()*4)],restitution:.28,friction:.5,data:{mesh:i,width:n,level:r}});this.meshes[r]=null,this.world.add(l),this.debrisGroup.add(i),i.userData.land=null,i.scale.y=1}this.trimBodies()}}stepDebris(e,t){if(this.world.bodies.length){this.world.step(Math.min(e,1/30));for(let i of this.world.bodies){let n=i.data.mesh;if(n.position.set(i.pos[0],i.pos[1],i.pos[2]),n.quaternion.set(i.quat[0],i.quat[1],i.quat[2],i.quat[3]),i.hit==null&&i.pos[1]-i.half[1]<1.5&&i.vel[1]<0&&i.age>.05){i.hit=!0;let r=new P(i.pos[0],0,i.pos[2]);this.root.localToWorld(r),this.emit("impact",{position:r,width:i.data.width,speed:Math.abs(i.vel[1])})}}}}applyBodyTransform(e,t){let i=e.effect,n=e.helpers,r=0,o=0,a=0;if(i&&n){if(i.id==="earthquake"){let f=n.earthquakeOffset(i.elapsed,i.remaining,this.reduced);r=f.x*1.25,o=-f.y*1.25}i.id==="pisa"&&(a=-n.pisaAngle(i.elapsed,i.remaining,i.tiltDirection,this.reduced))}this.shake.set(r,o,a);let l=this.topMesh(),c=l?l.userData.baseX:0,h=l?Mi(l.userData.level):11,u=Math.cos(a),d=Math.sin(a);this.body.rotation.z=a,this.body.position.set(r+c-(u*c-d*h),o+h-(d*c+u*h),0)}topMesh(){for(let e=this.meshes.length-1;e>=0;e-=1)if(this.meshes[e])return this.meshes[e];return null}topPoint(e=new P){let t=this.topMesh();return e.set(t?t.userData.baseX:0,t?Mi(t.userData.level)+Bt/2:Bt,0),this.root.localToWorld(e)}setAlpha(e){this.alpha=e}dispose(){this.clear(),this.rig.dispose()}};var D3=`
  attribute float aSize; attribute vec4 aColor; varying vec4 vColor; uniform float uScale;
  void main() {
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = max(1.0, aSize * uScale / max(1.0, -mv.z));
    gl_Position = projectionMatrix * mv;
  }
`,q3=`
  varying vec4 vColor;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float a = 1.0 - smoothstep(0.0, 1.0, d);
    a *= a;
    if (a < 0.01) discard;
    gl_FragColor = vec4(vColor.rgb, vColor.a * a);
  }
`,Vo=class{constructor(e=1400,{blending:t=kt,depthTest:i=!0}={}){this.capacity=e,this.cursor=0,this.position=new Float32Array(e*3),this.color=new Float32Array(e*4),this.size=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.drag=new Float32Array(e),this.gravity=new Float32Array(e),this.base=new Float32Array(e*4),this.growth=new Float32Array(e);let n=new pt;n.setAttribute("position",new zt(this.position,3).setUsage(Oi)),n.setAttribute("aColor",new zt(this.color,4).setUsage(Oi)),n.setAttribute("aSize",new zt(this.size,1).setUsage(Oi)),this.material=new vt({uniforms:{uScale:{value:800}},vertexShader:D3,fragmentShader:q3,transparent:!0,depthWrite:!1,depthTest:i,blending:t}),this.points=new as(n,this.material),this.points.frustumCulled=!1,this.points.renderOrder=8,this.density=1,this.random=Ut(7)}emit({pos:e,vel:t=[0,0,0],color:i=[1,1,1],alpha:n=1,size:r=6,life:o=1,drag:a=.6,gravity:l=0,growth:c=0}){if(this.density<1&&Math.random()>this.density)return;let h=this.cursor;this.cursor=(this.cursor+1)%this.capacity,this.position.set(e,h*3),this.vel.set(t,h*3),this.base.set([i[0],i[1],i[2],n],h*4),this.size[h]=r,this.life[h]=o,this.maxLife[h]=o,this.drag[h]=a,this.gravity[h]=l,this.growth[h]=c}burst({pos:e,count:t=24,speed:i=160,spread:n=1,color:r=[1,.8,.3],size:o=5,life:a=.9,gravity:l=-260,up:c=.2,drag:h=1.2,alpha:u=1,growth:d=0,direction:f=null}){for(let g=0;g<t;g+=1){let p=this.random()*Ke,m=Math.acos(2*this.random()-1),x=i*(.35+this.random()*.65),v=Math.sin(m)*Math.cos(p)*n,M=Math.cos(m)*n+c,y=Math.sin(m)*Math.sin(p)*n;f&&(v=f[0]+v*.5,M=f[1]+M*.5,y=f[2]+y*.5),this.emit({pos:e,vel:[v*x,M*x,y*x],color:r.map(S=>S*(.85+this.random()*.3)),alpha:u,size:o*(.6+this.random()*.8),life:a*(.6+this.random()*.7),gravity:l,drag:h,growth:d})}}update(e){let t=!1;for(let i=0;i<this.capacity;i+=1){if(this.life[i]<=0){this.color[i*4+3]=0;continue}t=!0,this.life[i]-=e;let n=Math.max(0,1-this.drag[i]*e),r=i*3;this.vel[r]*=n,this.vel[r+1]=this.vel[r+1]*n+this.gravity[i]*e,this.vel[r+2]*=n,this.position[r]+=this.vel[r]*e,this.position[r+1]+=this.vel[r+1]*e,this.position[r+2]+=this.vel[r+2]*e;let o=Math.max(0,this.life[i]/this.maxLife[i]),a=i*4;this.color[a]=this.base[a],this.color[a+1]=this.base[a+1],this.color[a+2]=this.base[a+2],this.color[a+3]=this.base[a+3]*Math.min(1,o*2.2)*Math.min(1,(1-o)*14+.15),this.growth[i]&&(this.size[i]+=this.growth[i]*e)}if(t||this.dirty){let i=this.points.geometry;i.attributes.position.needsUpdate=!0,i.attributes.aColor.needsUpdate=!0,i.attributes.aSize.needsUpdate=!0}this.dirty=t}setScale(e){this.material.uniforms.uScale.value=e}dispose(){this.points.geometry.dispose(),this.material.dispose()}},pc=class{constructor(e=360){this.capacity=e,this.cursor=0;let t=new Rt(1,.55);this.material=new Ue({roughness:.45,metalness:.25,side:ht,vertexColors:!1}),this.mesh=new wi(t,this.material,e),this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,this.mesh.instanceMatrix.setUsage(Oi),this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.rot=new Float32Array(e*3),this.spin=new Float32Array(e*3),this.life=new Float32Array(e),this.size=new Float32Array(e),this.phase=new Float32Array(e),this.dummy=new Ft,this.tint=new Se,this.random=Ut(21),this.floor=-64;let i=new ct().makeScale(0,0,0);for(let n=0;n<e;n+=1)this.mesh.setMatrixAt(n,i),this.mesh.setColorAt(n,this.tint.set("#ffffff"));this.density=1}burst({pos:e,count:t=60,speed:i=260,colors:n=["#E3A33B","#2F8478","#7FA6BD","#D5472F"],size:r=7,life:o=3.2,cone:a=1,direction:l=[0,1,0]}){let c=Math.round(t*this.density);for(let h=0;h<c;h+=1){let u=this.cursor;this.cursor=(this.cursor+1)%this.capacity;let d=this.random()*Ke,f=Math.sqrt(this.random())*a,g=i*(.4+this.random()*.8);this.pos.set(e,u*3),this.vel[u*3]=(l[0]+Math.cos(d)*f)*g,this.vel[u*3+1]=(l[1]+(this.random()-.3)*.4)*g,this.vel[u*3+2]=(l[2]+Math.sin(d)*f)*g,this.rot[u*3]=this.random()*Ke,this.rot[u*3+1]=this.random()*Ke,this.rot[u*3+2]=this.random()*Ke,this.spin[u*3]=(this.random()-.5)*16,this.spin[u*3+1]=(this.random()-.5)*16,this.spin[u*3+2]=(this.random()-.5)*12,this.life[u]=o*(.7+this.random()*.6),this.size[u]=r*(.7+this.random()*.7),this.phase[u]=this.random()*Ke,this.mesh.setColorAt(u,this.tint.set(n[Math.floor(this.random()*n.length)%n.length]))}this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}update(e,t){let i=!1;for(let n=0;n<this.capacity;n+=1){if(this.life[n]<=0){this.life[n]>-1&&(this.dummy.scale.setScalar(0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n,this.dummy.matrix),this.life[n]=-2,i=!0);continue}i=!0,this.life[n]-=e;let r=n*3;this.vel[r]*=1-1.6*e,this.vel[r+2]*=1-1.6*e,this.vel[r+1]=this.vel[r+1]*(1-.9*e)-150*e,this.vel[r+1]=Math.max(this.vel[r+1],-110),this.pos[r]+=(this.vel[r]+Math.sin(t*3+this.phase[n])*26)*e,this.pos[r+1]+=this.vel[r+1]*e,this.pos[r+2]+=(this.vel[r+2]+Math.cos(t*2.4+this.phase[n])*18)*e,this.pos[r+1]<this.floor&&(this.pos[r+1]=this.floor,this.vel[r+1]=0,this.spin[r]*=.2,this.spin[r+1]*=.2,this.spin[r+2]*=.2),this.rot[r]+=this.spin[r]*e,this.rot[r+1]+=this.spin[r+1]*e,this.rot[r+2]+=this.spin[r+2]*e;let o=Math.min(1,this.life[n]*1.5);this.dummy.position.set(this.pos[r],this.pos[r+1],this.pos[r+2]),this.dummy.rotation.set(this.rot[r],this.rot[r+1],this.rot[r+2]),this.dummy.scale.setScalar(this.size[n]*o),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n,this.dummy.matrix)}i&&(this.mesh.instanceMatrix.needsUpdate=!0)}dispose(){this.mesh.geometry.dispose(),this.material.dispose(),this.mesh.dispose()}},mc=class{constructor(e=10){this.items=[],this.group=new ae;let t=new Ai(.86,1,64).rotateX(-Math.PI/2);this.geometry=t;for(let i=0;i<e;i+=1){let n=new mt({color:"#ffffff",transparent:!0,opacity:0,blending:kt,depthWrite:!1,side:ht,toneMapped:!1}),r=new ne(t,n);r.visible=!1,r.renderOrder=7,this.group.add(r),this.items.push({mesh:r,t:1,life:1,radius:1,from:0})}this.cursor=0}pulse({pos:e,color:t="#FFD36B",radius:i=140,life:n=.7,from:r=.2,strength:o=1.6,vertical:a=!1}){let l=this.items[this.cursor];this.cursor=(this.cursor+1)%this.items.length,l.t=0,l.life=n,l.radius=i,l.from=r,l.strength=o,l.mesh.position.set(e[0],e[1],e[2]),l.mesh.rotation.x=a?Math.PI/2:0,l.mesh.material.color.set(t).multiplyScalar(o),l.mesh.visible=!0}update(e){for(let t of this.items){if(t.t>=1){t.mesh.visible=!1;continue}t.t=Math.min(1,t.t+e/t.life);let i=1-(1-t.t)**3,n=t.radius*(t.from+(1-t.from)*i);t.mesh.scale.set(n,1,n),t.mesh.material.opacity=(1-t.t)**1.6}}dispose(){this.geometry.dispose();for(let e of this.items)e.mesh.material.dispose()}};var gc=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,i="ltr"){let n=[],r=L3(e,t,this.data,i);for(let o=0,a=r.length;o<a;o++)n.push(...r[o].toShapes());return n}};function L3(s,e,t,i){let n=Array.from(s),r=e/t.resolution,o=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,a=[],l=0,c=0;(i=="rtl"||i=="tb")&&n.reverse();for(let h=0;h<n.length;h++){let u=n[h];if(u===`
`)l=0,c-=o;else{let d=F3(u,r,l,c,t);i=="tb"?(l=0,c+=t.ascender*r):l+=d.offsetX,a.push(d.path)}}return a}function F3(s,e,t,i,n){let r=n.glyphs[s]||n.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+n.familyName+".");return}let o=new go,a,l,c,h,u,d,f,g;if(r.o){let p=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,x=p.length;m<x;)switch(p[m++]){case"m":a=p[m++]*e+t,l=p[m++]*e+i,o.moveTo(a,l);break;case"l":a=p[m++]*e+t,l=p[m++]*e+i,o.lineTo(a,l);break;case"q":c=p[m++]*e+t,h=p[m++]*e+i,u=p[m++]*e+t,d=p[m++]*e+i,o.quadraticCurveTo(u,d,c,h);break;case"b":c=p[m++]*e+t,h=p[m++]*e+i,u=p[m++]*e+t,d=p[m++]*e+i,f=p[m++]*e+t,g=p[m++]*e+i,o.bezierCurveTo(u,d,f,g,c,h);break}}return{offsetX:r.ha*e,path:o}}var hp={glyphs:{"0":{ha:648,x_min:23,x_max:626,o:"m 320 709 q 484 667 416 709 q 589 545 553 625 q 626 349 626 465 q 588 153 626 233 q 481 31 550 73 q 320 -10 413 -10 q 158 33 224 -10 q 57 159 92 76 q 23 360 23 241 q 59 545 23 467 q 163 666 96 624 q 320 709 229 709 m 424 306 q 413 534 424 447 q 379 660 403 620 q 315 700 355 700 q 263 671 283 700 q 233 575 243 642 q 224 394 224 508 q 234 168 224 255 q 269 40 245 81 q 333 0 293 0 q 384 27 364 0 q 414 122 404 55 q 424 306 424 189"},"1":{ha:400,x_min:16,x_max:388,o:"m 32 664 l 88 664 q 100 659 96 664 q 105 644 105 654 l 105 61 q 95 32 105 41 q 68 19 85 23 l 24 10 q 16 6 16 9 q 18 2 16 3 q 23 0 20 0 l 380 0 q 386 2 384 0 q 388 5 388 3 q 380 9 388 8 l 332 19 q 309 32 318 22 q 301 61 301 42 l 301 719 q 294 728 301 728 q 290 726 292 728 q 285 722 288 724 q 217 685 262 695 q 89 676 172 676 l 31 676 q 26 674 28 676 q 24 670 24 673 q 25 666 24 668 q 32 664 27 664"},"2":{ha:595,x_min:21,x_max:570,o:"m 97 180 l 94 186 l 179 230 q 268 297 231 256 q 326 395 306 338 q 347 523 347 451 q 337 630 347 590 q 310 686 327 669 q 274 703 293 703 q 221 679 239 703 q 204 609 204 656 l 204 528 q 179 456 204 483 q 118 430 154 430 q 56 451 79 430 q 34 513 34 473 q 64 607 34 562 q 158 681 95 653 q 315 710 220 710 q 441 688 389 710 q 519 625 493 665 q 546 532 546 585 q 518 434 546 479 q 429 346 490 389 q 273 260 369 304 m 21 69 q 72 172 21 135 q 221 210 122 210 q 286 203 253 210 q 350 189 319 197 q 411 175 382 181 q 466 169 440 169 q 528 185 507 169 q 563 241 550 201 q 565 244 564 243 q 568 245 566 246 q 569 244 569 245 q 570 240 570 243 q 540 89 563 144 q 482 13 518 35 q 398 -9 446 -9 q 328 5 358 -9 q 274 58 299 20 q 223 167 250 96 q 208 195 213 188 q 196 202 202 202 q 185 189 189 202 q 178 141 180 177 q 161 48 173 81 q 129 3 149 16 q 83 -9 109 -9 q 37 13 54 -9 q 21 69 21 35"},"3":{ha:550,x_min:20,x_max:550,o:"m 219 369 l 216 375 q 226 375 219 375 q 239 375 233 375 q 248 375 246 375 q 397 356 334 375 q 494 299 460 338 q 529 201 529 261 q 495 89 529 137 q 402 16 462 42 q 263 -10 342 -10 q 131 12 185 -10 q 48 69 77 33 q 20 149 20 105 q 45 222 20 193 q 107 252 71 252 q 160 228 138 252 q 182 168 182 205 l 182 96 q 205 26 182 55 q 264 -3 227 -3 q 310 13 291 -3 q 340 67 330 29 q 351 172 351 105 q 321 314 351 267 q 243 361 291 361 l 216 361 q 210 363 213 361 q 208 367 208 365 q 210 372 208 370 q 216 378 213 375 l 395 555 l 395 549 l 112 549 q 97 544 103 549 q 87 530 91 540 l 65 458 q 62 454 64 456 q 59 453 61 453 q 55 455 56 453 q 54 460 54 458 l 81 681 q 86 695 82 690 q 96 700 90 700 l 543 700 q 548 698 546 700 q 550 694 550 697 q 548 689 550 692 q 544 683 547 687"},"4":{ha:607,x_min:2,x_max:582,o:"m 284 325 q 286 332 284 329 q 291 337 288 335 l 463 487 q 470 492 468 491 q 475 493 472 493 q 478 491 477 493 q 480 486 480 490 l 480 39 q 485 26 480 30 q 499 19 490 22 l 549 9 q 553 7 551 8 q 555 5 555 7 q 553 1 555 3 q 549 0 551 0 l 212 0 q 206 4 206 0 q 211 8 206 7 l 268 19 q 281 25 277 21 q 284 37 284 29 m 213 364 q 238 395 230 379 q 247 434 247 412 q 234 473 247 454 q 206 513 222 492 q 177 557 189 533 q 164 609 164 580 q 180 667 164 640 q 225 711 196 694 q 296 727 255 727 q 386 694 353 727 q 419 615 419 661 q 408 559 419 585 q 371 501 398 532 q 297 426 344 469 l 13 155 l 13 162 l 576 162 q 580 161 579 162 q 582 158 582 160 q 573 151 582 151 l 9 151 q 4 153 6 151 q 2 157 2 154 q 4 161 2 159 q 7 164 5 163"},"5":{ha:561,x_min:34,x_max:533,o:"m 34 151 q 60 217 34 191 q 124 243 86 243 q 177 218 155 243 q 200 152 200 193 l 200 56 q 216 14 200 32 q 263 -4 233 -4 q 317 48 296 -4 q 338 195 338 100 q 312 348 338 298 q 240 399 287 399 q 192 390 216 399 q 146 363 168 381 q 103 319 123 346 q 95 312 99 315 q 88 310 92 310 q 82 313 85 310 q 80 320 80 317 l 80 701 q 82 708 80 706 q 90 711 85 711 q 99 709 95 711 q 109 706 104 708 q 179 686 143 694 q 256 674 215 678 q 341 671 296 671 q 456 686 407 671 q 515 727 506 702 q 518 730 516 729 q 522 732 520 732 q 526 730 525 731 q 527 727 527 729 q 496 590 522 640 q 421 518 471 540 q 291 497 371 497 q 214 502 252 497 q 145 516 177 507 q 87 537 112 525 l 94 541 l 94 317 l 88 319 q 144 374 117 353 q 207 405 172 395 q 290 415 242 415 q 418 390 363 415 q 503 319 472 365 q 533 212 533 274 q 500 95 533 145 q 405 17 467 45 q 258 -10 343 -10 q 139 12 189 -10 q 61 70 88 33 q 34 151 34 106"},"6":{ha:603,x_min:26,x_max:578,o:"m 339 710 q 471 690 419 710 q 548 636 523 670 q 573 559 573 602 q 545 485 573 511 q 472 459 518 459 q 399 487 430 459 q 368 565 368 516 l 368 640 q 357 687 368 669 q 325 704 347 704 q 285 684 304 704 q 251 617 266 663 q 227 494 236 571 q 219 304 219 417 q 232 119 219 186 q 266 23 245 51 q 312 -5 287 -5 q 373 44 351 -5 q 396 200 396 93 q 365 341 396 294 q 289 389 335 389 q 245 377 265 389 q 214 344 226 365 q 202 294 202 323 l 194 298 q 216 361 194 333 q 278 406 238 389 q 374 423 319 423 q 485 399 438 423 q 556 329 531 375 q 578 218 581 283 q 542 96 576 147 q 448 17 509 45 q 306 -10 388 -10 q 163 27 226 -10 q 63 138 100 64 q 26 322 26 212 q 68 538 26 451 q 181 667 110 624 q 339 710 252 710"},"7":{ha:517,x_min:34,x_max:533,o:"m 423 556 l 424 549 l 90 549 q 77 546 83 549 q 69 532 72 543 l 46 457 q 42 452 44 454 q 39 451 41 451 q 35 453 37 451 q 34 458 34 455 l 63 686 q 67 696 64 692 q 77 700 71 700 l 523 700 q 530 698 528 700 q 533 692 533 695 q 530 683 533 688 q 523 672 528 679 l 369 460 q 334 411 349 434 q 309 368 319 389 q 293 327 299 347 q 288 287 288 307 q 298 230 288 255 q 320 184 307 206 q 342 139 333 162 q 352 88 352 116 q 323 16 352 47 q 242 -14 294 -14 q 167 16 194 -14 q 140 97 140 46 q 149 159 140 126 q 177 227 159 192 q 223 298 196 262"},"8":{ha:574,x_min:24,x_max:557,o:"m 276 -10 q 139 10 194 -10 q 55 66 83 30 q 27 150 27 103 q 45 222 27 190 q 106 276 64 254 q 224 312 149 299 l 226 309 q 206 248 214 285 q 197 177 197 212 q 222 40 197 82 q 287 -2 247 -2 q 353 28 331 -2 q 374 112 374 58 q 363 169 374 143 q 327 215 352 194 q 263 250 303 235 q 82 360 139 297 q 24 503 24 423 q 56 609 24 562 q 148 683 88 656 q 292 710 208 710 q 439 689 381 710 q 526 627 497 668 q 554 528 554 586 q 530 441 554 480 q 461 376 506 402 q 351 342 416 350 l 349 346 q 368 385 360 361 q 380 441 376 410 q 385 505 385 472 q 373 617 385 573 q 339 683 361 662 q 287 704 318 704 q 240 690 260 704 q 209 649 220 675 q 199 589 199 622 q 213 504 199 542 q 259 440 228 467 q 341 395 291 412 q 508 302 460 354 q 557 193 557 249 q 523 86 557 131 q 427 15 490 40 q 276 -10 364 -10"},"9":{ha:610,x_min:27,x_max:584,o:"m 266 -10 q 134 10 186 -10 q 57 64 82 30 q 33 142 33 99 q 60 215 33 188 q 134 242 87 242 q 208 212 180 242 q 237 128 237 183 l 237 61 q 249 17 237 37 q 281 -3 260 -3 q 335 34 310 -3 q 376 159 360 72 q 391 397 391 246 q 379 581 391 514 q 346 676 366 648 q 300 704 325 704 q 234 654 259 704 q 209 500 209 604 q 238 359 209 407 q 309 311 267 311 q 359 323 337 311 q 394 356 381 335 q 407 406 407 378 l 416 402 q 396 340 416 369 q 336 295 377 312 q 232 278 295 278 q 122 302 168 278 q 52 372 76 326 q 27 483 27 418 q 62 601 27 550 q 160 681 98 652 q 304 710 223 710 q 447 673 384 710 q 547 562 511 636 q 584 379 584 489 q 541 162 584 249 q 427 33 499 76 q 266 -10 355 -10"},A:{ha:661,x_min:-10,x_max:661,o:"m 133 268 l 378 268 l 380 257 l 131 257 m 183 4 q 181 1 183 3 q 178 0 180 0 l -6 0 q -9 1 -8 0 q -10 4 -10 3 q -9 7 -10 6 q -5 9 -7 8 l 7 13 q 48 42 27 20 q 81 108 69 65 l 228 619 q 229 661 235 645 q 209 686 223 676 q 198 693 202 692 q 194 696 194 695 q 196 699 194 699 q 200 700 197 700 l 450 700 q 454 699 452 700 q 456 697 456 699 q 452 692 456 694 q 441 687 449 691 q 430 679 433 685 q 433 657 428 673 l 628 36 q 638 18 631 25 q 653 10 645 12 q 659 7 658 9 q 661 4 661 6 q 659 1 661 3 q 655 0 658 0 l 385 0 q 381 1 382 0 q 380 4 380 3 q 381 7 380 6 q 387 9 383 7 l 406 13 q 422 24 420 18 q 421 45 425 31 l 238 627 l 253 665 l 93 105 q 94 64 86 82 q 121 33 102 45 q 165 12 140 20 l 177 9 q 181 7 180 8 q 183 4 183 6"},B:{ha:695,x_min:32,x_max:672,o:"m 672 167 q 609 47 672 93 q 420 0 546 0 l 38 0 q 33 1 35 0 q 32 4 32 3 q 40 9 32 7 l 71 14 q 87 22 82 16 q 93 39 93 27 l 93 672 q 88 681 93 678 q 71 686 84 684 l 40 692 q 32 696 32 693 q 33 699 32 698 q 38 700 35 700 l 306 700 q 484 674 412 700 q 594 603 557 649 q 632 498 632 557 q 603 409 632 447 q 520 350 574 371 q 393 330 466 330 l 424 333 q 552 312 496 333 q 640 253 609 291 q 672 167 672 216 m 347 323 l 270 323 l 270 335 l 349 335 q 413 351 388 335 q 450 400 438 367 q 462 484 462 433 q 440 592 462 547 q 382 663 419 638 q 303 689 346 689 l 284 689 l 284 33 q 291 16 284 21 q 313 12 299 12 l 366 12 q 428 31 402 12 q 468 86 454 51 q 482 171 482 122 q 448 283 482 243 q 347 323 414 323"},C:{ha:654,x_min:20,x_max:638,o:"m 635 227 q 609 132 631 176 q 549 55 586 88 q 462 3 512 22 q 353 -15 412 -15 q 175 29 250 -15 q 60 153 101 74 q 20 339 20 232 q 45 490 20 422 q 116 609 70 559 q 226 686 162 659 q 368 713 290 713 q 444 704 413 713 q 495 685 476 694 q 518 675 513 675 q 539 684 525 675 q 568 703 554 694 q 586 713 582 713 q 590 710 588 713 q 593 703 592 708 l 638 490 q 638 482 639 485 q 634 478 637 480 q 628 480 630 478 q 624 487 626 482 q 559 610 594 565 q 487 675 524 655 q 413 695 449 695 q 343 675 375 695 q 285 619 310 656 q 246 528 260 582 q 232 402 232 473 q 260 210 232 286 q 336 99 287 135 q 448 63 385 63 q 563 104 514 63 q 627 228 612 146 q 628 233 628 231 q 632 235 629 234 q 635 232 634 234 q 635 227 636 230"},D:{ha:746,x_min:32,x_max:723,o:"m 32 4 q 39 9 32 8 l 73 15 q 88 20 84 16 q 93 30 93 23 l 93 670 q 88 680 93 677 q 73 686 83 684 l 37 692 q 32 697 32 693 q 33 699 32 699 q 37 700 35 700 l 311 700 q 476 674 401 700 q 607 598 552 649 q 692 474 662 548 q 723 304 723 401 q 677 140 723 208 q 548 36 632 72 q 351 0 465 0 l 37 0 q 33 1 34 0 q 32 4 32 2 m 351 12 q 437 42 399 12 q 496 141 474 73 q 518 323 518 210 q 503 483 518 414 q 461 597 488 552 q 395 666 434 643 q 311 689 357 689 l 288 689 l 288 30 q 294 17 288 22 q 309 12 299 12"},E:{ha:624,x_min:32,x_max:607,o:"m 259 376 l 357 376 q 426 396 403 376 q 459 473 449 417 q 461 478 460 477 q 464 479 462 479 q 469 473 468 479 l 527 281 q 528 276 529 278 q 526 273 527 274 q 522 272 524 273 q 518 275 521 272 q 468 330 490 311 q 424 357 446 350 q 372 364 401 364 l 259 364 m 32 696 q 33 699 32 698 q 38 700 35 700 l 495 700 q 517 703 507 700 q 534 709 527 706 q 543 712 541 712 q 546 710 545 712 q 548 701 547 708 l 596 499 q 596 493 597 495 q 594 491 595 492 q 591 491 593 490 q 587 494 590 491 q 511 593 544 556 q 449 652 477 631 q 396 681 422 673 q 344 689 371 689 l 288 689 l 288 36 q 295 18 288 24 q 313 12 301 12 l 352 12 q 417 31 383 12 q 495 102 451 50 q 598 255 539 154 q 602 258 601 257 q 605 259 603 259 q 607 256 606 258 q 607 250 608 254 l 549 0 q 547 -9 548 -7 q 545 -11 546 -11 q 535 -9 542 -11 q 518 -3 528 -6 q 494 0 507 0 l 38 0 q 33 1 35 0 q 32 4 32 3 q 40 9 32 7 l 70 14 q 87 19 82 16 q 93 29 93 23 l 93 672 q 87 681 93 678 q 70 686 82 685 l 40 692 q 32 696 32 693"},F:{ha:569,x_min:32,x_max:573,o:"m 471 700 q 494 703 483 700 q 511 709 504 706 q 520 712 518 712 q 522 710 521 712 q 525 701 523 707 l 572 499 q 573 493 573 495 q 570 491 572 491 q 568 491 569 490 q 564 495 566 492 q 476 611 516 569 q 402 671 437 653 q 330 689 367 689 l 288 689 l 288 29 q 294 19 288 23 q 312 14 300 15 l 366 9 q 372 7 370 8 q 373 4 373 6 q 372 1 373 3 q 367 0 370 0 l 38 0 q 33 1 35 0 q 32 4 32 3 q 40 9 32 7 l 70 14 q 87 19 82 16 q 93 29 93 23 l 93 672 q 87 681 93 678 q 70 686 82 685 l 40 692 q 32 696 32 693 q 33 699 32 698 q 38 700 35 700 m 245 362 l 346 362 q 422 383 397 362 q 457 459 448 403 q 459 464 458 464 q 461 465 460 465 q 467 459 466 466 l 508 267 q 508 262 508 264 q 505 259 507 260 q 502 259 504 259 q 498 262 501 259 q 450 316 470 296 q 409 343 430 335 q 361 350 388 350 l 245 350"},G:{ha:705,x_min:22,x_max:685,o:"m 643 2 q 641 -8 643 -5 q 637 -11 640 -11 q 609 -3 629 -11 q 563 17 589 6 q 515 36 538 28 q 479 45 492 45 q 461 36 473 45 q 432 17 450 28 q 391 -2 415 7 q 336 -10 367 -10 q 210 14 267 -10 q 110 82 152 38 q 45 189 68 127 q 22 326 22 251 q 47 482 22 411 q 120 604 73 553 q 235 682 168 655 q 385 710 302 710 q 445 700 420 710 q 485 681 471 691 q 505 671 500 671 q 535 681 516 671 q 573 700 555 691 q 601 710 592 710 q 604 708 603 710 q 606 699 605 707 l 643 459 q 643 453 644 455 q 641 451 642 452 q 638 451 639 450 q 635 454 637 452 q 556 600 597 546 q 474 677 515 654 q 390 701 432 701 q 301 663 339 701 q 243 549 264 625 q 223 357 223 473 q 247 173 223 249 q 310 57 272 97 q 391 17 348 17 q 417 23 404 17 q 441 38 431 28 q 459 60 452 48 q 465 87 465 73 l 465 291 q 460 300 465 297 q 443 306 454 304 l 401 311 q 394 312 396 312 q 393 316 393 313 q 394 318 393 317 q 399 319 396 319 l 679 319 q 683 318 682 319 q 685 315 685 317 q 683 312 685 313 q 677 311 682 312 l 656 305 q 646 300 650 304 q 643 291 643 297"},H:{ha:791,x_min:37,x_max:755,o:"m 194 334 l 580 334 l 580 323 l 194 323 m 293 29 q 298 19 293 23 q 315 14 304 16 l 346 9 q 354 4 354 7 q 352 1 354 3 q 348 0 351 0 l 42 0 q 38 1 39 0 q 37 4 37 3 q 44 9 37 7 l 75 14 q 92 19 86 16 q 97 29 97 23 l 97 672 q 92 681 97 678 q 75 686 86 685 l 44 692 q 37 696 37 693 q 38 699 37 698 q 42 700 39 700 l 348 700 q 352 699 351 700 q 354 696 354 698 q 346 692 354 693 l 315 686 q 298 681 304 685 q 293 672 293 678 m 694 29 q 699 19 694 23 q 716 14 705 16 l 747 9 q 755 4 755 7 q 753 1 755 3 q 749 0 752 0 l 443 0 q 439 1 440 0 q 438 4 438 3 q 445 9 438 7 l 477 14 q 493 19 487 16 q 498 29 498 23 l 498 672 q 493 681 498 678 q 477 686 487 685 l 445 692 q 438 696 438 693 q 439 699 438 698 q 443 700 440 700 l 749 700 q 753 699 752 700 q 755 696 755 698 q 747 692 755 693 l 716 686 q 699 681 705 685 q 694 672 694 678"},I:{ha:380,x_min:32,x_max:349,o:"m 288 29 q 294 19 288 23 q 310 14 300 16 l 341 9 q 349 4 349 7 q 348 1 349 3 q 343 0 346 0 l 38 0 q 33 1 35 0 q 32 4 32 3 q 40 9 32 7 l 71 14 q 87 19 82 16 q 93 29 93 23 l 93 672 q 87 681 93 678 q 71 686 82 685 l 40 692 q 32 696 32 693 q 33 699 32 698 q 38 700 35 700 l 343 700 q 348 699 346 700 q 349 696 349 698 q 341 692 349 693 l 310 686 q 294 681 300 685 q 288 672 288 678"},J:{ha:434,x_min:2,x_max:398,o:"m 396 140 q 338 28 396 70 q 182 -14 281 -14 q 49 19 96 -14 q 2 103 2 52 q 22 162 2 140 q 80 185 42 185 q 129 163 109 185 q 149 101 149 141 l 149 50 q 159 9 149 25 q 193 -6 169 -6 q 230 15 216 -6 q 244 75 244 36 q 229 132 244 104 q 194 193 214 161 q 159 267 174 225 q 144 364 144 308 l 144 662 q 141 678 144 673 q 127 685 137 684 l 96 690 q 87 692 90 691 q 85 695 85 694 q 88 699 85 698 q 92 700 90 700 l 390 700 q 396 699 394 700 q 398 696 398 698 q 382 691 398 694 l 360 686 q 344 680 349 684 q 339 669 339 677 l 339 365 q 347 297 339 327 q 367 244 356 268 q 387 194 379 219 q 396 140 396 170"},K:{ha:740,x_min:32,x_max:746,o:"m 258 275 l 494 523 q 539 592 529 558 q 536 652 549 627 q 490 689 524 678 l 475 692 q 471 694 472 693 q 470 696 470 695 q 471 699 470 698 q 474 700 472 700 l 713 700 q 716 699 715 700 q 717 697 717 698 q 715 693 717 694 q 712 692 714 692 q 681 676 697 686 q 643 648 665 666 q 588 600 620 630 q 508 522 556 570 l 263 264 m 339 356 l 479 494 l 697 54 q 717 19 709 30 q 742 8 726 9 q 745 7 744 8 q 746 4 746 6 q 745 1 746 2 q 741 0 744 0 l 454 0 q 450 1 452 0 q 449 5 449 3 q 450 7 449 7 q 455 9 452 8 l 482 13 q 490 21 488 14 q 485 45 493 27 m 288 29 q 294 19 288 23 q 311 14 299 16 l 341 9 q 347 7 346 9 q 349 4 349 6 q 347 1 349 3 q 343 0 346 0 l 38 0 q 33 1 35 0 q 32 4 32 3 q 40 9 32 7 l 70 14 q 87 19 82 16 q 93 29 93 23 l 93 672 q 87 681 93 678 q 70 686 82 685 l 40 692 q 32 696 32 693 q 33 699 32 698 q 38 700 35 700 l 343 700 q 348 699 346 700 q 349 696 349 698 q 341 692 349 693 l 311 686 q 294 681 300 685 q 288 672 288 678"},L:{ha:588,x_min:32,x_max:587,o:"m 341 692 l 310 686 q 294 681 300 685 q 288 672 288 678 l 288 33 q 295 16 288 21 q 313 12 301 12 l 358 12 q 408 23 383 12 q 461 62 433 34 q 518 145 489 91 l 578 254 q 581 258 579 257 q 584 259 582 259 q 586 256 586 258 q 586 249 587 254 l 538 0 q 535 -10 536 -8 q 533 -11 534 -11 q 524 -8 531 -11 q 506 -3 517 -5 q 482 0 496 0 l 38 0 q 33 1 35 0 q 32 4 32 3 q 40 9 32 7 l 71 14 q 87 19 82 16 q 93 29 93 23 l 93 672 q 87 681 93 678 q 71 686 82 685 l 40 692 q 32 696 32 693 q 33 699 32 698 q 38 700 35 700 l 343 700 q 348 699 346 700 q 349 696 349 698 q 341 692 349 693"},M:{ha:847,x_min:-14,x_max:836,o:"m 440 318 l 427 295 l 555 681 q 562 696 559 693 q 573 700 566 700 l 786 700 q 790 699 789 700 q 792 696 792 698 q 790 693 792 695 q 785 692 788 692 l 753 686 q 737 676 742 684 q 734 654 733 668 l 777 41 q 782 21 778 26 q 798 14 786 16 l 829 9 q 834 7 833 9 q 836 4 836 6 q 835 1 836 3 q 831 0 833 0 l 528 0 q 524 1 525 0 q 523 4 523 3 q 524 7 523 7 q 530 9 526 8 l 560 14 q 577 22 573 16 q 581 42 582 28 l 540 619 l 550 631 l 359 45 q 353 32 356 34 q 348 30 350 30 q 344 31 346 30 q 341 35 343 32 q 337 45 339 38 l 123 619 l 132 636 l 89 88 q 107 42 87 62 q 160 13 127 23 l 178 9 q 182 7 181 8 q 183 4 183 6 q 182 1 183 3 q 179 0 181 0 l -9 0 q -12 1 -11 0 q -14 4 -14 3 q -12 7 -14 6 q -8 9 -10 8 l 7 13 q 54 41 34 21 q 77 90 75 61 l 117 597 q 117 662 121 640 q 98 686 113 683 l 69 691 q 62 693 64 692 q 60 696 60 694 q 67 700 60 700 l 286 700 q 295 697 291 700 q 303 685 299 694"},N:{ha:680,x_min:8,x_max:677,o:"m 210 4 q 208 1 210 3 q 205 0 207 0 l 13 0 q 9 1 10 0 q 8 4 8 3 q 14 9 8 7 l 29 13 q 80 45 59 23 q 101 106 101 67 l 101 580 q 101 589 101 586 q 96 599 100 592 l 48 683 q 43 692 46 688 q 40 698 40 696 q 41 700 40 699 q 45 700 42 700 l 258 700 q 263 698 261 700 q 268 692 266 697 l 581 107 l 572 85 l 572 595 q 551 656 572 634 q 499 687 530 679 l 481 692 q 475 696 475 694 q 476 699 475 698 q 480 700 477 700 l 672 700 q 675 699 674 700 q 677 696 677 698 q 671 692 677 694 l 656 687 q 605 656 626 678 q 584 595 584 634 l 584 112 q 585 100 584 105 q 590 91 587 95 l 627 27 q 635 11 634 16 q 637 4 637 6 q 636 1 637 3 q 631 0 635 0 l 430 0 q 424 8 424 0 q 422 16 424 11 q 418 25 420 22 l 85 627 l 112 627 l 112 105 q 134 44 112 66 q 185 13 156 22 l 204 9 q 210 4 210 7"},O:{ha:743,x_min:22,x_max:721,o:"m 364 710 q 511 684 445 710 q 624 611 577 659 q 696 499 671 564 q 721 355 721 434 q 697 206 721 273 q 627 91 672 139 q 519 16 582 43 q 379 -10 456 -10 q 232 16 298 -10 q 119 89 166 41 q 47 203 73 136 q 22 354 22 271 q 47 498 22 433 q 118 611 72 563 q 226 684 164 658 q 364 710 289 710 m 525 203 q 513 348 525 277 q 482 482 502 420 q 437 593 463 545 q 382 669 411 642 q 322 696 353 696 q 267 674 290 696 q 231 610 244 653 q 219 507 219 568 q 230 358 219 431 q 261 221 241 285 q 306 108 280 157 q 361 32 332 60 q 421 5 391 5 q 478 25 455 5 q 513 90 502 46 q 525 203 525 134"},P:{ha:670,x_min:32,x_max:656,o:"m 656 428 q 623 311 656 361 q 533 235 591 261 q 400 208 476 208 q 297 222 336 208 q 225 260 257 235 l 227 270 q 268 244 250 254 q 303 230 286 235 q 339 226 321 226 q 401 248 372 226 q 448 316 430 271 q 466 432 466 362 q 445 573 466 516 q 389 659 424 630 q 313 689 354 689 l 288 689 l 288 30 q 294 20 288 24 q 310 14 299 17 l 343 8 q 347 7 346 8 q 349 4 349 6 q 347 1 349 3 q 343 0 346 0 l 38 0 q 33 1 35 0 q 32 5 32 3 q 39 9 32 7 l 72 15 q 88 20 83 16 q 93 29 93 24 l 93 669 q 88 680 93 675 q 73 686 83 684 l 37 692 q 32 696 32 693 q 33 699 32 698 q 37 700 34 700 l 313 700 q 493 666 416 700 q 613 571 570 632 q 656 428 656 510"},Q:{ha:760,x_min:18,x_max:748,o:"m 366 710 q 515 684 448 710 q 630 611 582 659 q 705 499 679 564 q 731 355 731 434 q 706 206 731 273 q 635 91 681 139 q 525 16 589 43 q 383 -10 461 -10 q 230 15 297 -10 q 115 87 162 40 q 42 202 67 135 q 18 354 18 270 q 43 498 18 433 q 115 611 69 563 q 226 684 162 658 q 366 710 290 710 m 530 203 q 519 349 530 277 q 487 484 507 421 q 440 596 467 548 q 385 673 414 645 q 324 700 355 700 q 267 678 291 700 q 231 613 244 656 q 219 507 219 569 q 230 357 219 431 q 261 219 242 283 q 307 105 281 155 q 364 28 334 56 q 425 0 394 0 q 483 22 460 0 q 518 88 507 43 q 530 203 530 133 m 402 193 q 402 199 401 197 q 405 201 403 201 q 408 199 407 202 q 410 194 409 197 q 449 63 428 113 q 499 -13 471 13 q 563 -49 527 -40 q 647 -59 599 -59 q 693 -56 676 -59 q 720 -47 711 -53 q 735 -35 730 -41 q 740 -30 737 -31 q 745 -30 743 -29 q 748 -35 748 -31 q 745 -44 748 -38 l 689 -138 q 669 -155 682 -148 q 638 -161 656 -161 q 561 -143 595 -161 q 498 -83 526 -124 q 445 26 469 -42 q 402 193 422 94"},R:{ha:715,x_min:32,x_max:717,o:"m 679 451 q 656 360 679 401 q 590 293 633 320 q 489 256 548 267 q 464 252 477 254 q 440 250 452 251 q 414 250 427 250 q 340 255 369 250 q 292 270 312 260 q 254 294 272 280 l 260 303 q 290 282 275 290 q 323 271 306 274 q 361 267 340 267 q 449 307 415 267 q 482 438 482 347 q 459 567 482 510 q 398 656 436 624 q 315 689 360 689 l 288 689 l 288 39 q 293 22 288 27 q 310 14 299 16 l 341 9 q 347 7 346 8 q 349 4 349 6 q 343 0 349 0 l 38 0 q 33 1 35 0 q 32 4 32 3 q 40 9 32 7 l 71 14 q 87 22 82 16 q 93 39 93 27 l 93 672 q 87 681 93 678 q 71 686 82 685 l 40 692 q 32 696 32 693 q 33 699 32 698 q 38 700 35 700 l 314 700 q 508 669 426 700 q 634 583 590 639 q 679 451 679 527 m 352 261 l 533 281 l 674 37 q 690 18 681 25 q 709 9 698 12 q 715 7 714 7 q 717 4 717 6 q 715 1 717 3 q 711 0 714 0 l 438 0 q 432 4 432 0 q 434 6 432 6 q 440 9 436 7 l 454 14 q 472 25 467 19 q 467 50 477 32"},S:{ha:586,x_min:27,x_max:563,o:"m 306 -10 q 235 3 263 -10 q 191 29 207 16 q 170 42 176 42 q 155 33 165 42 q 132 14 144 25 q 109 -5 120 3 q 93 -13 99 -13 q 85 -10 89 -13 q 80 -2 80 -7 l 45 238 q 45 243 45 242 q 47 246 46 245 q 50 246 48 247 q 54 242 53 245 q 148 92 106 144 q 224 20 189 40 q 290 1 258 1 q 368 27 339 1 q 397 106 397 53 q 384 169 397 141 q 339 219 371 197 q 253 259 308 241 q 121 322 171 287 q 49 401 72 357 q 27 499 27 445 q 60 609 27 561 q 150 683 92 657 q 286 710 209 710 q 347 702 322 710 q 387 685 372 694 q 411 677 403 677 q 437 686 420 677 q 472 704 455 695 q 498 714 490 714 q 503 711 500 714 q 507 705 506 709 l 562 474 q 562 468 563 470 q 560 465 562 466 q 557 466 559 465 q 553 469 555 467 q 452 612 497 563 q 371 680 408 662 q 298 699 334 699 q 227 669 255 699 q 199 588 199 638 q 212 523 199 552 q 254 472 225 495 q 333 432 283 450 q 469 368 419 402 q 541 292 520 334 q 562 200 562 251 q 532 94 562 141 q 444 18 501 46 q 306 -10 387 -10"},T:{ha:661,x_min:10,x_max:651,o:"m 94 700 l 566 700 q 588 703 578 700 q 606 709 599 706 q 615 712 613 712 q 617 710 616 712 q 620 700 619 708 l 651 485 q 651 478 652 480 q 649 476 650 477 q 645 476 647 475 q 642 479 643 477 q 568 614 601 569 q 507 674 535 659 q 458 689 480 689 l 428 689 l 428 29 q 434 19 428 23 q 451 14 440 16 l 482 9 q 489 4 489 7 q 483 0 489 0 l 178 0 q 174 1 175 0 q 172 4 172 3 q 180 9 172 7 l 211 14 q 228 19 222 16 q 233 29 233 23 l 233 689 l 204 689 q 157 672 183 689 q 96 610 130 655 q 19 479 62 565 q 16 476 18 477 q 13 476 14 475 q 10 478 11 477 q 10 485 10 480 l 42 700 q 44 710 43 708 q 47 712 45 712 q 55 709 49 712 q 72 703 62 706 q 94 700 82 700"},U:{ha:675,x_min:45,x_max:668,o:"m 582 310 l 564 594 q 544 654 561 631 q 490 687 526 677 l 474 692 q 469 694 471 693 q 468 696 468 695 q 469 699 468 698 q 473 700 470 700 l 663 700 q 667 699 666 700 q 668 696 668 698 q 666 694 668 695 q 662 692 665 693 l 646 687 q 593 653 613 678 q 575 596 573 629 l 593 315 q 597 261 595 288 q 598 207 598 235 q 576 98 598 147 q 504 19 555 48 q 368 -10 453 -10 q 202 16 267 -10 q 106 90 137 43 q 75 196 75 136 q 76 233 75 210 q 80 278 78 255 q 82 317 82 301 l 105 672 q 100 681 106 678 q 83 686 94 685 l 52 692 q 45 696 45 693 q 46 699 45 698 q 50 700 47 700 l 356 700 q 360 699 359 700 q 361 696 361 698 q 359 694 361 695 q 354 692 358 693 l 320 686 q 304 681 309 684 q 298 671 298 678 l 276 321 q 273 249 273 282 q 272 194 272 217 q 309 50 272 94 q 404 6 347 6 q 497 29 457 6 q 562 96 538 52 q 586 200 586 139 q 584 262 586 237 q 582 310 583 288"},V:{ha:628,x_min:-6,x_max:646,o:"m 467 696 q 468 699 467 698 q 472 700 469 700 l 641 700 q 645 699 644 700 q 646 696 646 698 q 645 694 646 695 q 640 692 643 693 l 628 687 q 586 655 606 678 q 554 592 565 632 l 413 92 q 409 68 409 79 q 408 46 408 58 l 408 6 q 407 2 408 3 q 403 0 406 0 l 227 0 q 222 2 224 0 q 221 6 221 3 l 221 45 q 218 63 221 52 q 212 85 216 73 l 34 662 q 27 678 30 673 q 18 685 24 683 l 2 691 q -6 696 -6 694 q -4 699 -6 698 q 0 700 -3 700 l 281 700 q 285 699 284 700 q 287 696 287 698 q 285 694 287 695 q 279 692 284 693 l 256 686 q 240 676 243 683 q 242 655 237 669 l 408 98 l 392 62 l 542 590 q 540 649 551 622 q 487 688 528 676 l 473 692 q 468 694 470 693 q 467 696 467 695"},W:{ha:971,x_min:10,x_max:986,o:"m 502 541 l 512 535 l 392 63 q 391 57 392 61 q 390 48 390 53 l 390 5 q 389 2 390 3 q 386 0 388 0 l 199 0 q 195 2 196 0 q 194 5 194 3 l 194 48 q 193 56 194 53 q 192 65 192 60 l 54 672 q 49 683 52 680 q 42 688 47 686 l 13 694 q 11 696 12 695 q 10 697 10 696 q 11 699 10 698 q 14 700 12 700 l 300 700 q 303 699 302 700 q 304 697 304 698 q 301 695 304 694 l 262 688 q 252 682 254 686 q 251 671 250 677 l 387 64 l 375 41 m 809 696 q 810 699 809 698 q 814 700 812 700 l 982 700 q 985 699 984 700 q 986 696 986 698 q 985 694 986 695 q 981 692 983 693 l 969 687 q 925 656 946 678 q 897 600 904 633 l 787 63 q 786 57 787 61 q 785 48 785 53 l 785 5 q 784 2 785 3 q 782 0 784 0 l 594 0 q 591 2 592 0 q 590 5 590 3 l 590 48 q 589 56 590 53 q 587 65 589 60 l 442 672 q 437 682 439 679 q 429 687 434 685 l 403 694 q 399 695 401 695 q 398 697 398 696 q 399 699 398 698 q 402 700 401 700 l 687 700 q 689 699 688 700 q 690 697 690 698 q 689 695 690 696 q 686 694 688 694 l 653 687 q 643 681 645 685 q 643 670 641 677 l 783 60 l 771 41 l 886 603 q 878 655 892 632 q 827 689 863 678 l 815 692 q 810 694 812 693 q 809 696 809 695"},X:{ha:672,x_min:12,x_max:667,o:"m 610 44 q 623 25 616 32 q 640 14 631 18 q 660 9 649 11 q 666 7 664 8 q 667 4 667 6 q 666 1 667 3 q 662 0 665 0 l 348 0 q 343 1 345 0 q 342 4 342 3 q 344 7 342 6 q 350 9 346 8 q 381 17 371 12 q 391 29 390 22 q 386 47 392 36 l 68 660 q 54 678 61 672 q 39 688 47 685 q 21 692 32 691 q 16 694 17 693 q 16 696 16 695 q 17 699 16 698 q 21 700 19 700 l 333 700 q 338 699 336 700 q 339 696 339 698 q 338 694 339 695 q 332 692 336 693 l 299 687 q 285 679 287 685 q 288 663 283 673 m 393 369 l 382 372 l 518 590 q 529 654 541 628 q 486 688 517 680 l 472 692 q 467 693 469 693 q 466 696 466 694 q 467 699 466 698 q 471 700 469 700 l 643 700 q 648 696 648 700 q 647 694 648 695 q 642 692 645 693 q 576 649 601 675 q 529 587 552 623 m 300 366 l 310 361 l 144 95 q 137 44 127 68 q 179 12 148 21 l 194 9 q 198 7 197 8 q 199 4 199 6 q 198 1 199 3 q 194 0 197 0 l 17 0 q 13 1 14 0 q 12 4 12 3 q 13 7 12 6 q 18 9 15 8 q 69 31 49 20 q 104 60 89 43 q 135 103 119 77"},Y:{ha:634,x_min:10,x_max:633,o:"m 418 247 l 229 225 l 55 671 q 45 684 51 680 q 30 690 39 688 l 17 692 q 11 694 13 693 q 10 696 10 695 q 11 699 10 698 q 15 700 12 700 l 303 700 q 308 699 306 700 q 309 697 309 698 q 302 692 309 693 l 271 686 q 258 682 259 685 q 258 674 256 679 l 417 262 l 408 252 l 527 592 q 523 649 537 621 q 472 688 510 678 l 460 692 q 455 694 457 693 q 454 696 454 695 q 455 699 454 698 q 459 700 457 700 l 628 700 q 632 699 631 700 q 633 697 633 698 q 631 693 633 695 q 627 692 630 692 l 617 688 q 587 670 602 682 q 561 638 573 658 q 539 591 549 619 m 225 250 l 421 255 l 421 29 q 426 19 421 23 q 443 14 432 16 l 474 9 q 481 4 481 7 q 480 1 481 3 q 476 0 478 0 l 171 0 q 166 1 168 0 q 165 4 165 3 q 172 9 165 7 l 203 14 q 220 19 215 16 q 225 29 225 23"},Z:{ha:588,x_min:4,x_max:585,o:"m 584 696 l 215 3 l 212 12 l 350 12 q 406 19 381 12 q 453 48 431 27 q 499 107 475 69 q 555 209 523 146 l 564 227 q 567 230 565 229 q 570 231 568 232 q 572 229 572 230 q 573 225 573 228 l 544 1 q 543 -8 544 -5 q 539 -11 542 -11 q 531 -8 538 -11 q 514 -2 524 -5 q 493 0 505 0 l 7 0 q 4 1 5 0 q 4 3 4 2 q 4 5 4 4 q 5 6 5 6 l 375 697 l 377 689 l 242 689 q 170 675 200 689 q 112 626 140 662 q 51 525 84 591 l 38 498 q 34 494 35 495 q 31 494 32 493 q 29 496 29 494 q 28 500 28 497 l 57 700 q 59 709 59 706 q 62 711 60 711 q 71 708 65 711 q 88 703 78 706 q 109 700 97 700 l 583 700 q 584 700 584 700 q 585 699 585 700 q 585 698 585 698 q 584 696 585 697"},".":{ha:242,x_min:26,x_max:216,o:"m 120 -9 q 72 4 94 -9 q 39 39 51 17 q 26 88 26 62 q 39 136 26 114 q 72 171 51 158 q 120 184 94 184 q 169 171 148 184 q 203 136 191 158 q 216 88 216 114 q 203 39 216 62 q 169 4 191 17 q 120 -9 148 -9"},",":{ha:250,x_min:32,x_max:225,o:"m 137 0 q 58 24 84 0 q 32 91 32 49 q 59 157 32 131 q 128 184 86 184 q 195 153 166 184 q 225 63 225 123 q 215 -26 225 13 q 186 -96 206 -66 q 138 -147 167 -126 q 70 -180 109 -168 q 64 -180 67 -181 q 61 -176 61 -178 q 63 -171 61 -173 q 68 -168 65 -169 q 141 -126 115 -151 q 178 -74 168 -101 q 189 -24 189 -47 q 186 -6 189 -13 q 169 0 182 0"},"!":{ha:290,x_min:37,x_max:253,o:"m 148 736 q 228 712 203 736 q 253 653 253 689 q 250 616 253 637 q 242 577 247 595 l 147 220 q 145 216 146 218 q 142 215 145 215 q 140 216 141 215 q 139 220 139 218 l 48 579 q 39 621 41 605 q 37 653 37 636 q 65 712 37 689 q 148 736 93 736 m 140 -9 q 92 4 113 -9 q 58 40 71 18 q 45 88 45 62 q 58 136 45 114 q 92 171 71 159 q 139 184 114 184 q 188 171 167 184 q 223 136 210 159 q 235 88 235 114 q 223 40 235 62 q 188 4 210 18 q 140 -9 167 -9"},"?":{ha:563,x_min:26,x_max:549,o:"m 244 311 l 249 231 q 251 224 250 227 q 256 222 253 222 q 260 224 258 222 q 263 231 262 226 l 267 293 q 275 317 268 309 q 298 328 283 325 l 340 333 q 495 399 441 347 q 549 527 549 452 q 478 670 549 620 q 280 720 408 720 q 148 697 206 720 q 58 634 91 673 q 26 549 26 596 q 49 474 26 501 q 111 448 72 448 q 182 479 157 448 q 207 567 207 510 l 206 626 q 224 689 206 666 q 275 711 242 711 q 325 676 309 711 q 342 567 342 640 q 326 422 342 471 q 277 354 310 374 l 260 344 q 248 331 252 339 q 244 311 244 323 m 252 -9 q 204 4 226 -9 q 170 39 183 17 q 158 88 158 62 q 170 136 158 114 q 204 171 183 158 q 252 184 226 184 q 301 171 279 184 q 335 136 322 158 q 348 88 348 114 q 335 39 348 62 q 301 4 322 17 q 252 -9 279 -9"},":":{ha:240,x_min:25,x_max:215,o:"m 119 -9 q 71 4 93 -9 q 38 39 50 17 q 25 88 25 62 q 38 136 25 114 q 71 171 50 158 q 119 184 93 184 q 168 171 147 184 q 202 136 190 158 q 215 88 215 114 q 202 39 215 62 q 168 4 190 17 q 119 -9 147 -9 m 119 269 q 71 282 93 269 q 38 317 50 295 q 25 366 25 340 q 38 414 25 392 q 71 449 50 436 q 119 462 93 462 q 168 449 147 462 q 202 414 190 436 q 215 366 215 392 q 202 317 215 340 q 168 282 190 295 q 119 269 147 269"},";":{ha:258,x_min:30,x_max:224,o:"m 128 265 q 80 278 102 265 q 47 313 59 291 q 34 362 34 336 q 47 410 34 388 q 80 445 59 432 q 128 458 102 458 q 177 445 156 458 q 211 410 199 432 q 224 362 224 388 q 211 313 224 336 q 177 278 199 291 q 128 265 156 265 m 135 0 q 56 24 83 0 q 30 91 30 49 q 57 157 30 131 q 126 184 84 184 q 194 153 165 184 q 223 63 223 123 q 214 -26 223 13 q 185 -96 204 -66 q 136 -147 166 -126 q 68 -180 107 -168 q 62 -180 65 -181 q 59 -176 59 -178 q 61 -171 59 -173 q 67 -168 63 -169 q 140 -126 114 -151 q 177 -74 166 -101 q 188 -24 188 -47 q 184 -6 188 -13 q 168 0 181 0"},"-":{ha:249,x_min:20,x_max:230,o:"m 227 299 q 230 295 230 299 l 223 221 q 222 218 223 219 q 218 218 221 218 l 23 218 q 20 221 20 218 l 26 295 q 28 298 27 298 q 31 299 29 299"},"\u2013":{ha:469,x_min:15,x_max:455,o:"m 15 251 q 17 257 15 256 q 23 259 19 259 l 447 259 q 453 257 451 259 q 455 251 455 256 q 453 245 455 246 q 447 244 451 244 l 23 244 q 17 245 19 244 q 15 251 15 246"},"\u2014":{ha:725,x_min:15,x_max:711,o:"m 15 251 q 17 257 15 256 q 23 259 19 259 l 702 259 q 709 257 707 259 q 711 251 711 256 q 709 245 711 246 q 702 244 707 244 l 23 244 q 17 245 19 244 q 15 251 15 246"},"+":{ha:455,x_min:47,x_max:915,o:"m 47 341 q 49 345 47 344 q 54 346 51 346 l 402 346 q 406 345 404 346 q 408 341 408 344 q 406 337 408 339 q 402 336 404 336 l 54 336 q 49 337 51 336 q 47 341 47 339 m 910 62 q 913 60 912 62 q 915 55 915 58 l 915 -293 q 913 -297 915 -295 q 910 -299 912 -299 q 906 -297 907 -299 q 905 -293 905 -295 l 905 55 q 906 60 905 58 q 910 62 907 62"},"\xD7":{ha:401,x_min:47,x_max:353,o:"m 49 161 q 49 168 46 164 l 345 519 q 348 521 347 521 q 351 520 350 522 q 353 517 353 519 q 352 514 354 516 l 56 162 q 52 160 54 160 q 49 161 50 160 m 352 161 q 349 160 351 160 q 345 162 347 160 l 50 513 q 48 517 48 516 q 50 520 49 519 q 56 519 53 523 l 352 168 q 353 164 353 166 q 352 161 354 163"},"/":{ha:319,x_min:18,x_max:328,o:"m 176 302 q 159 251 169 282 q 136 183 148 220 q 111 107 124 146 q 85 29 98 68 q 60 -43 72 -9 q 40 -103 49 -77 q 34 -111 38 -108 q 25 -111 30 -113 q 19 -105 20 -109 q 20 -95 18 -101 q 39 -42 28 -73 q 65 28 51 -10 q 93 104 79 65 q 122 181 108 144 q 147 251 136 219 q 167 306 159 284 q 187 362 176 329 q 211 433 198 395 q 238 512 224 472 q 264 591 251 553 q 288 662 277 630 q 307 717 299 695 q 313 724 309 722 q 321 726 317 727 q 327 719 326 724 q 327 710 329 715 q 305 649 317 683 q 278 576 292 615 q 249 498 264 538 q 221 422 235 459 q 196 354 207 385 q 176 302 184 323"},"%":{ha:626,x_min:13,x_max:614,o:"m 184 711 q 305 663 259 711 q 352 532 352 615 q 329 432 352 473 q 269 369 307 390 q 184 347 231 347 q 58 395 103 347 q 13 532 13 442 q 59 661 13 612 q 184 711 105 711 m 229 528 q 217 661 229 623 q 184 700 205 700 q 148 659 161 700 q 135 535 135 619 q 148 398 135 438 q 184 358 161 358 q 206 373 196 358 q 223 426 217 389 q 229 528 229 463 m 327 366 q 324 363 326 364 q 322 364 323 363 q 320 366 321 365 q 322 370 320 367 q 343 399 325 374 q 387 462 361 425 q 442 540 413 499 q 496 617 471 581 q 538 676 522 653 q 556 701 555 700 q 565 708 560 707 q 574 705 570 709 q 578 697 578 703 q 574 688 578 691 q 555 664 573 686 q 511 606 538 642 q 454 531 485 571 q 396 456 424 492 q 349 395 368 420 q 327 366 330 370 m 298 338 q 301 341 299 340 q 304 341 303 341 q 305 338 306 340 q 302 334 305 336 q 281 304 300 330 q 237 241 263 278 q 182 162 211 203 q 128 84 154 120 q 86 24 102 48 q 68 -1 69 0 q 60 -7 65 -6 q 51 -5 55 -7 q 48 3 48 -2 q 52 14 48 9 q 70 38 52 15 q 114 96 87 61 q 172 171 142 131 q 229 247 202 211 q 276 308 257 284 q 298 338 295 333 m 446 352 q 567 304 521 352 q 614 173 614 257 q 591 73 614 115 q 531 10 569 32 q 446 -11 493 -11 q 320 36 365 -11 q 275 173 275 84 q 321 303 275 253 q 446 352 367 352 m 491 170 q 479 303 491 264 q 446 342 467 342 q 410 301 423 342 q 397 177 397 260 q 410 39 397 79 q 446 -1 423 -1 q 468 15 458 -1 q 485 67 479 30 q 491 170 491 104"},"#":{ha:603,x_min:24,x_max:579,o:"m 222 347 q 210 305 217 331 q 195 248 204 279 q 178 182 187 216 q 161 115 169 148 q 144 55 152 83 q 131 7 137 27 q 118 -1 128 -3 q 112 4 114 1 q 112 12 110 8 q 124 56 117 29 q 142 114 132 82 q 162 180 152 146 q 182 246 172 214 q 199 305 191 279 q 212 350 207 332 q 224 395 217 368 q 239 455 231 422 q 256 523 248 488 q 272 591 264 558 q 288 651 281 624 q 300 696 295 679 q 313 704 303 706 q 318 698 317 702 q 319 691 320 695 q 305 642 314 670 q 288 580 297 614 q 269 513 279 547 q 251 447 260 479 q 234 389 242 415 q 222 347 227 363 m 318 466 q 359 467 334 466 q 414 468 385 467 q 473 469 443 468 q 527 470 502 470 q 568 471 552 471 q 576 468 573 471 q 579 460 579 465 q 576 453 579 456 q 568 450 573 451 q 523 451 549 450 q 468 452 497 451 q 410 454 439 453 q 358 455 382 455 q 319 456 334 456 q 279 455 303 456 q 226 454 255 455 q 168 452 198 453 q 112 451 138 451 q 67 450 86 450 q 59 453 62 450 q 56 461 56 456 q 59 468 56 466 q 67 471 62 471 q 108 470 83 471 q 163 469 133 470 q 222 468 192 468 q 277 467 252 467 q 318 466 302 466 m 286 243 q 247 242 271 243 q 194 241 223 242 q 135 239 165 240 q 80 238 106 238 q 35 237 54 237 q 27 240 30 237 q 24 247 24 243 q 27 255 24 252 q 35 257 30 257 q 76 257 51 257 q 130 256 101 256 q 190 254 160 255 q 245 253 220 254 q 286 253 270 253 q 327 253 302 253 q 382 254 353 254 q 441 256 411 255 q 495 257 470 256 q 535 257 520 257 q 543 255 540 257 q 547 247 547 252 q 543 239 547 242 q 535 237 540 237 q 491 237 517 237 q 435 239 465 238 q 377 241 406 240 q 325 242 349 242 q 286 243 301 243 m 308 7 q 296 -1 305 -3 q 290 4 292 1 q 289 12 288 8 q 302 55 294 29 q 319 114 310 82 q 339 180 329 146 q 359 246 349 214 q 377 305 369 278 q 390 350 385 332 q 402 395 395 368 q 416 455 409 423 q 433 523 424 488 q 450 591 442 559 q 465 651 458 624 q 476 696 472 678 q 489 704 480 706 q 496 698 494 702 q 496 690 497 695 q 482 642 490 670 q 465 580 474 614 q 446 513 456 547 q 427 447 436 479 q 411 389 418 415 q 399 347 404 363 q 388 305 395 331 q 373 247 381 279 q 355 182 364 216 q 338 115 346 148 q 321 54 329 82 q 308 7 314 26"},"&":{ha:942,x_min:42,x_max:912,o:"m 650 -11 q 793 18 735 -11 q 882 103 852 46 q 912 245 912 160 q 877 414 912 330 q 781 567 843 499 q 614 693 711 644 q 406 742 517 742 q 213 709 293 742 q 91 619 134 676 q 49 491 49 563 q 73 408 49 436 q 138 380 97 380 q 191 402 170 380 q 212 457 212 423 q 209 495 212 478 q 201 530 205 513 q 194 564 197 546 q 191 606 191 583 q 214 676 191 647 q 284 719 237 704 q 403 735 331 735 q 609 687 514 735 q 772 563 704 639 q 870 411 835 495 q 905 245 905 327 q 885 127 905 174 q 831 58 866 81 q 751 36 797 36 q 678 51 711 36 q 611 102 645 66 q 532 202 577 139 q 477 294 499 248 q 444 391 455 340 q 433 505 433 443 q 449 591 433 556 q 484 626 464 626 q 509 593 502 626 q 516 508 516 561 q 505 421 516 457 q 474 366 494 385 q 431 347 455 347 l 433 340 q 555 361 504 341 q 634 416 607 380 q 662 500 662 452 q 641 573 662 541 q 583 623 620 605 q 497 641 545 641 q 376 611 426 641 q 298 530 325 582 q 271 409 271 478 q 278 323 271 369 q 303 228 285 277 q 355 129 322 179 q 437 45 391 75 q 537 2 483 15 q 650 -11 591 -11 m 605 99 l 607 93 q 755 170 703 117 q 807 291 807 224 q 781 366 807 340 q 721 392 756 392 q 656 368 682 392 q 630 313 630 344 q 634 277 630 293 q 643 243 639 261 q 647 199 647 225 q 643 165 647 185 q 631 126 640 144 q 605 99 622 108 m 292 327 l 291 333 q 156 310 212 332 q 71 249 100 289 q 42 152 42 209 q 89 34 42 79 q 224 -11 137 -11 q 318 -2 280 -11 q 385 23 357 7 q 435 58 413 39 l 431 72 q 398 57 417 63 q 356 52 380 52 q 262 92 295 52 q 228 205 228 131 q 236 266 228 238 q 259 309 245 293 q 292 327 273 326"},"*":{ha:552,x_min:33,x_max:525,o:"m 278 509 l 274 509 q 264 575 274 548 q 240 621 254 601 q 217 658 227 640 q 207 696 207 675 q 277 765 207 765 q 328 747 310 765 q 346 696 346 730 q 336 657 346 675 q 312 620 326 640 q 289 575 299 601 q 278 509 278 548 m 277 511 l 276 507 q 210 517 239 519 q 159 509 181 516 q 116 498 136 502 q 77 500 97 494 q 33 588 11 522 q 66 632 44 620 q 120 633 88 644 q 153 611 140 627 q 181 577 167 596 q 218 541 196 559 q 277 511 240 523 m 275 510 l 278 508 q 247 448 255 476 q 240 397 240 421 q 237 353 239 373 q 223 316 235 333 q 125 302 182 261 q 94 346 99 321 q 110 398 90 371 q 140 423 122 415 q 181 440 159 432 q 228 463 204 448 q 275 510 252 478 m 275 508 l 278 510 q 325 463 301 478 q 371 439 349 447 q 412 423 394 431 q 443 398 430 415 q 426 301 483 343 q 375 285 400 282 q 329 316 350 289 q 315 353 317 333 q 313 397 313 373 q 305 448 312 421 q 275 508 298 476 m 276 511 q 335 540 313 523 q 371 577 357 558 q 399 611 386 596 q 433 633 413 627 q 520 587 498 654 q 519 533 530 556 q 476 500 508 511 q 436 498 456 494 q 394 509 416 502 q 342 517 371 516 q 277 507 314 519"},"(":{ha:329,x_min:60,x_max:324,o:"m 60 306 q 90 482 60 403 q 175 621 121 562 q 301 715 230 680 q 324 724 322 725 q 323 719 325 723 q 312 703 321 715 q 255 599 280 659 q 216 465 230 539 q 203 306 203 391 q 216 147 203 221 q 255 13 230 74 q 312 -90 280 -47 q 323 -107 321 -103 q 324 -111 325 -110 q 301 -102 322 -113 q 175 -8 230 -66 q 90 130 121 51 q 60 306 60 210"},")":{ha:324,x_min:1,x_max:265,o:"m 265 303 q 234 127 265 206 q 150 -12 204 47 q 24 -106 95 -71 q 1 -115 3 -116 q 2 -110 0 -114 q 13 -94 4 -106 q 70 10 45 -50 q 108 144 95 70 q 122 303 122 218 q 108 462 122 388 q 70 595 95 535 q 13 699 45 656 q 2 715 4 712 q 1 720 0 719 q 24 711 3 722 q 150 616 95 675 q 234 478 204 558 q 265 303 265 399"},"\xB7":{ha:292,x_min:51,x_max:241,o:"m 145 196 q 97 209 119 196 q 64 244 76 222 q 51 293 51 267 q 64 341 51 319 q 97 376 76 363 q 145 389 119 389 q 194 376 173 389 q 228 341 216 363 q 241 293 241 319 q 228 244 241 267 q 194 209 216 222 q 145 196 173 196"},"\u2019":{ha:193,x_min:28,x_max:209,o:"m 127 603 q 52 626 77 603 q 28 689 28 649 q 53 751 28 727 q 118 775 79 775 q 181 747 154 775 q 209 662 209 719 q 193 565 209 607 q 144 496 177 523 q 62 459 111 469 q 56 459 59 458 q 53 462 53 461 q 55 466 54 465 q 60 469 57 468 q 128 500 103 479 q 163 545 153 521 q 173 587 173 569 q 169 599 173 595 q 155 603 165 603"},"'":{ha:189,x_min:16,x_max:173,o:"m 89 415 q 84 417 87 415 q 81 425 82 420 l 21 696 q 28 778 9 749 q 95 807 48 807 q 162 777 144 807 q 167 697 181 747 l 98 425 q 94 417 96 419 q 89 415 92 415"},'"':{ha:369,x_min:16,x_max:352,o:"m 269 415 q 264 417 266 415 q 261 425 262 420 l 200 696 q 208 778 188 749 q 275 807 228 807 q 342 777 323 807 q 347 697 360 747 l 277 425 q 274 417 276 419 q 269 415 272 415 m 89 414 q 84 416 87 414 q 81 424 82 419 l 21 695 q 28 777 9 748 q 95 806 48 806 q 162 776 144 806 q 167 696 181 746 l 98 424 q 94 416 96 418 q 89 414 92 414"}},familyName:"Fraunces",resolution:1e3,capHeight:700,ascender:978,descender:-255,underlinePosition:-150,underlineThickness:25,boundingBox:{xMin:-14,yMin:-299,xMax:986,yMax:807}};var up={glyphs:{"0":{ha:1e3,x_min:0,x_max:875,o:"m 250 125 l 250 250 l 125 250 l 125 375 l 0 375 l 0 750 l 125 750 l 125 875 l 250 875 l 250 1000 l 625 1000 l 625 875 l 750 875 l 750 750 l 875 750 l 875 375 l 750 375 l 750 250 l 625 250 l 625 125 m 375 250 l 625 250 l 625 750 l 500 750 l 500 875 l 250 875 l 250 375 l 375 375"},"1":{ha:1e3,x_min:125,x_max:875,o:"m 125 125 l 125 250 l 375 250 l 375 750 l 250 750 l 250 875 l 375 875 l 375 1000 l 625 1000 l 625 250 l 875 250 l 875 125"},"2":{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 375 l 125 375 l 125 500 l 250 500 l 250 625 l 500 625 l 500 750 l 625 750 l 625 875 l 250 875 l 250 750 l 0 750 l 0 875 l 125 875 l 125 1000 l 750 1000 l 750 875 l 875 875 l 875 625 l 750 625 l 750 500 l 625 500 l 625 375 l 375 375 l 375 250 l 875 250 l 875 125"},"3":{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 375 l 250 375 l 250 250 l 625 250 l 625 500 l 250 500 l 250 625 l 375 625 l 375 750 l 500 750 l 500 875 l 125 875 l 125 1000 l 875 1000 l 875 875 l 750 875 l 750 750 l 625 750 l 625 625 l 750 625 l 750 500 l 875 500 l 875 250 l 750 250 l 750 125"},"4":{ha:1e3,x_min:0,x_max:875,o:"m 500 125 l 500 375 l 0 375 l 0 625 l 125 625 l 125 750 l 250 750 l 250 875 l 375 875 l 375 1000 l 750 1000 l 750 500 l 875 500 l 875 375 l 750 375 l 750 125 m 250 500 l 500 500 l 500 750 l 375 750 l 375 625 l 250 625"},"5":{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 375 l 250 375 l 250 250 l 625 250 l 625 625 l 0 625 l 0 1000 l 750 1000 l 750 875 l 250 875 l 250 750 l 750 750 l 750 625 l 875 625 l 875 250 l 750 250 l 750 125"},"6":{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 750 l 125 750 l 125 875 l 250 875 l 250 1000 l 750 1000 l 750 875 l 375 875 l 375 750 l 250 750 l 250 625 l 750 625 l 750 500 l 875 500 l 875 250 l 750 250 l 750 125 m 250 250 l 625 250 l 625 500 l 250 500"},"7":{ha:1e3,x_min:0,x_max:875,o:"m 250 125 l 250 500 l 375 500 l 375 625 l 500 625 l 500 750 l 625 750 l 625 875 l 250 875 l 250 750 l 0 750 l 0 1000 l 875 1000 l 875 750 l 750 750 l 750 625 l 625 625 l 625 500 l 500 500 l 500 125"},"8":{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 500 l 125 500 l 125 625 l 0 625 l 0 875 l 125 875 l 125 1000 l 625 1000 l 625 875 l 750 875 l 750 625 l 625 625 l 625 500 l 875 500 l 875 250 l 750 250 l 750 125 m 375 625 l 625 625 l 625 875 l 250 875 l 250 750 l 375 750 m 125 250 l 625 250 l 625 375 l 375 375 l 375 500 l 125 500"},"9":{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 500 250 l 500 375 l 625 375 l 625 500 l 125 500 l 125 625 l 0 625 l 0 875 l 125 875 l 125 1000 l 750 1000 l 750 875 l 875 875 l 875 375 l 750 375 l 750 250 l 625 250 l 625 125 m 250 625 l 625 625 l 625 875 l 250 875"},A:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 750 l 125 750 l 125 875 l 250 875 l 250 1000 l 625 1000 l 625 875 l 750 875 l 750 750 l 875 750 l 875 125 l 625 125 l 625 375 l 250 375 l 250 125 m 250 500 l 625 500 l 625 750 l 500 750 l 500 875 l 375 875 l 375 750 l 250 750"},B:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 750 1000 l 750 875 l 875 875 l 875 625 l 750 625 l 750 500 l 875 500 l 875 250 l 750 250 l 750 125 m 250 625 l 625 625 l 625 875 l 250 875 m 250 250 l 625 250 l 625 500 l 250 500"},C:{ha:1e3,x_min:0,x_max:875,o:"m 250 125 l 250 250 l 125 250 l 125 375 l 0 375 l 0 750 l 125 750 l 125 875 l 250 875 l 250 1000 l 750 1000 l 750 875 l 875 875 l 875 750 l 625 750 l 625 875 l 375 875 l 375 750 l 250 750 l 250 375 l 375 375 l 375 250 l 625 250 l 625 375 l 875 375 l 875 250 l 750 250 l 750 125"},D:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 625 1000 l 625 875 l 750 875 l 750 750 l 875 750 l 875 375 l 750 375 l 750 250 l 625 250 l 625 125 m 250 250 l 500 250 l 500 375 l 625 375 l 625 750 l 500 750 l 500 875 l 250 875"},E:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 875 1000 l 875 875 l 250 875 l 250 625 l 750 625 l 750 500 l 250 500 l 250 250 l 875 250 l 875 125"},F:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 875 1000 l 875 875 l 250 875 l 250 625 l 750 625 l 750 500 l 250 500 l 250 125"},G:{ha:1e3,x_min:0,x_max:875,o:"m 250 125 l 250 250 l 125 250 l 125 375 l 0 375 l 0 750 l 125 750 l 125 875 l 250 875 l 250 1000 l 875 1000 l 875 875 l 375 875 l 375 750 l 250 750 l 250 375 l 375 375 l 375 250 l 625 250 l 625 500 l 500 500 l 500 625 l 875 625 l 875 125"},H:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 250 1000 l 250 625 l 625 625 l 625 1000 l 875 1000 l 875 125 l 625 125 l 625 500 l 250 500 l 250 125"},I:{ha:1e3,x_min:125,x_max:875,o:"m 125 125 l 125 250 l 375 250 l 375 875 l 125 875 l 125 1000 l 875 1000 l 875 875 l 625 875 l 625 250 l 875 250 l 875 125"},J:{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 375 l 250 375 l 250 250 l 625 250 l 625 1000 l 875 1000 l 875 250 l 750 250 l 750 125"},K:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 250 1000 l 250 625 l 375 625 l 375 750 l 500 750 l 500 875 l 625 875 l 625 1000 l 875 1000 l 875 875 l 750 875 l 750 750 l 625 750 l 625 625 l 500 625 l 500 500 l 625 500 l 625 375 l 750 375 l 750 250 l 875 250 l 875 125 l 500 125 l 500 250 l 375 250 l 375 375 l 250 375 l 250 125"},L:{ha:1e3,x_min:125,x_max:875,o:"m 125 125 l 125 1000 l 375 1000 l 375 250 l 875 250 l 875 125"},M:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 250 1000 l 250 875 l 375 875 l 375 750 l 500 750 l 500 875 l 625 875 l 625 1000 l 875 1000 l 875 125 l 625 125 l 625 625 l 500 625 l 500 375 l 375 375 l 375 625 l 250 625 l 250 125"},N:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 250 1000 l 250 875 l 375 875 l 375 750 l 500 750 l 500 625 l 625 625 l 625 1000 l 875 1000 l 875 125 l 625 125 l 625 375 l 500 375 l 500 500 l 375 500 l 375 625 l 250 625 l 250 125"},O:{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 875 l 125 875 l 125 1000 l 750 1000 l 750 875 l 875 875 l 875 250 l 750 250 l 750 125 m 250 250 l 625 250 l 625 875 l 250 875"},P:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 750 1000 l 750 875 l 875 875 l 875 500 l 750 500 l 750 375 l 250 375 l 250 125 m 250 500 l 625 500 l 625 875 l 250 875"},Q:{ha:1e3,x_min:0,x_max:875,o:"m 875 875 l 875 375 l 750 375 l 750 250 l 625 250 l 625 125 l 125 125 l 125 250 l 0 250 l 0 875 l 125 875 l 125 1000 l 750 1000 l 750 875 m 625 875 l 250 875 l 250 250 l 500 250 l 500 375 l 375 375 l 375 500 l 625 500 m 750 125 l 750 250 l 875 250 l 875 125"},R:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 1000 l 750 1000 l 750 875 l 875 875 l 875 500 l 625 500 l 625 375 l 750 375 l 750 250 l 875 250 l 875 125 l 500 125 l 500 250 l 375 250 l 375 375 l 250 375 l 250 125 m 250 500 l 500 500 l 500 625 l 625 625 l 625 875 l 250 875"},S:{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 375 l 250 375 l 250 250 l 625 250 l 625 500 l 125 500 l 125 625 l 0 625 l 0 875 l 125 875 l 125 1000 l 750 1000 l 750 875 l 875 875 l 875 750 l 625 750 l 625 875 l 250 875 l 250 625 l 750 625 l 750 500 l 875 500 l 875 250 l 750 250 l 750 125"},T:{ha:1e3,x_min:125,x_max:875,o:"m 375 125 l 375 875 l 125 875 l 125 1000 l 875 1000 l 875 875 l 625 875 l 625 125"},U:{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 1000 l 250 1000 l 250 250 l 625 250 l 625 1000 l 875 1000 l 875 250 l 750 250 l 750 125"},V:{ha:1e3,x_min:0,x_max:875,o:"m 375 125 l 375 250 l 250 250 l 250 375 l 125 375 l 125 500 l 0 500 l 0 1000 l 250 1000 l 250 625 l 375 625 l 375 500 l 500 500 l 500 625 l 625 625 l 625 1000 l 875 1000 l 875 500 l 750 500 l 750 375 l 625 375 l 625 250 l 500 250 l 500 125"},W:{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 1000 l 250 1000 l 250 500 l 375 500 l 375 1000 l 500 1000 l 500 500 l 625 500 l 625 1000 l 875 1000 l 875 250 l 750 250 l 750 125 l 625 125 l 625 250 l 500 250 l 500 375 l 375 375 l 375 250 l 250 250 l 250 125"},X:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 375 l 125 375 l 125 500 l 250 500 l 250 625 l 125 625 l 125 750 l 0 750 l 0 1000 l 250 1000 l 250 750 l 375 750 l 375 625 l 500 625 l 500 750 l 625 750 l 625 1000 l 875 1000 l 875 750 l 750 750 l 750 625 l 625 625 l 625 500 l 750 500 l 750 375 l 875 375 l 875 125 l 625 125 l 625 375 l 500 375 l 500 500 l 375 500 l 375 375 l 250 375 l 250 125"},Y:{ha:1e3,x_min:125,x_max:875,o:"m 375 125 l 375 500 l 250 500 l 250 625 l 125 625 l 125 1000 l 375 1000 l 375 625 l 625 625 l 625 1000 l 875 1000 l 875 625 l 750 625 l 750 500 l 625 500 l 625 125"},Z:{ha:1e3,x_min:0,x_max:875,o:"m 0 125 l 0 375 l 125 375 l 125 500 l 250 500 l 250 625 l 375 625 l 375 750 l 500 750 l 500 875 l 0 875 l 0 1000 l 875 1000 l 875 750 l 750 750 l 750 625 l 625 625 l 625 500 l 500 500 l 500 375 l 375 375 l 375 250 l 875 250 l 875 125"},".":{ha:1e3,x_min:250,x_max:500,o:"m 250 125 l 250 375 l 500 375 l 500 125"},",":{ha:1e3,x_min:125,x_max:500,o:"m 125 0 l 125 125 l 250 125 l 250 375 l 500 375 l 500 125 l 375 125 l 375 0"},"!":{ha:1e3,x_min:250,x_max:625,o:"m 250 375 l 250 1000 l 625 1000 l 625 625 l 500 625 l 500 375 m 250 125 l 250 250 l 500 250 l 500 125"},"?":{ha:1e3,x_min:0,x_max:875,o:"m 250 375 l 250 500 l 500 500 l 500 625 l 625 625 l 625 750 l 250 750 l 250 625 l 0 625 l 0 875 l 125 875 l 125 1000 l 750 1000 l 750 875 l 875 875 l 875 625 l 750 625 l 750 500 l 625 500 l 625 375 m 250 125 l 250 250 l 625 250 l 625 125"},":":{ha:1e3,x_min:250,x_max:500,o:"m 250 625 l 250 875 l 500 875 l 500 625 m 250 250 l 250 500 l 500 500 l 500 250"},";":{ha:1e3,x_min:125,x_max:500,o:"m 250 625 l 250 875 l 500 875 l 500 625 m 125 125 l 125 250 l 250 250 l 250 500 l 500 500 l 500 250 l 375 250 l 375 125"},"-":{ha:1e3,x_min:125,x_max:875,o:"m 125 500 l 125 625 l 875 625 l 875 500"},"\u2013":{ha:1e3,x_min:0,x_max:875,o:"m 0 500 l 0 625 l 875 625 l 875 500"},"\u2014":{ha:1e3,x_min:0,x_max:1e3,o:"m 0 500 l 0 625 l 1000 625 l 1000 500"},"+":{ha:1e3,x_min:125,x_max:875,o:"m 375 250 l 375 500 l 125 500 l 125 625 l 375 625 l 375 875 l 625 875 l 625 625 l 875 625 l 875 500 l 625 500 l 625 250"},"\xD7":{ha:1e3,x_min:125,x_max:750,o:"m 250 875 l 250 750 l 125 750 l 125 875 m 750 875 l 750 750 l 625 750 l 625 875 m 375 750 l 375 625 l 250 625 l 250 750 m 500 750 l 625 750 l 625 625 l 500 625 m 375 625 l 500 625 l 500 500 l 375 500 m 250 500 l 375 500 l 375 375 l 250 375 m 500 375 l 500 500 l 625 500 l 625 375 m 125 375 l 250 375 l 250 250 l 125 250 m 625 250 l 625 375 l 750 375 l 750 250"},"/":{ha:1e3,x_min:0,x_max:875,o:"m 875 1000 l 875 875 l 750 875 l 750 1000 m 625 875 l 750 875 l 750 750 l 625 750 m 500 750 l 625 750 l 625 625 l 500 625 m 375 625 l 500 625 l 500 500 l 375 500 m 250 500 l 375 500 l 375 375 l 250 375 m 125 375 l 250 375 l 250 250 l 125 250 m 0 250 l 125 250 l 125 125 l 0 125"},"%":{ha:1e3,x_min:0,x_max:875,o:"m 250 875 l 125 875 l 125 1000 l 375 1000 l 375 750 l 250 750 m 875 1000 l 875 875 l 750 875 l 750 1000 m 250 625 l 0 625 l 0 875 l 125 875 l 125 750 l 250 750 m 625 875 l 750 875 l 750 750 l 625 750 m 500 750 l 625 750 l 625 625 l 500 625 m 375 625 l 500 625 l 500 500 l 375 500 m 250 500 l 375 500 l 375 375 l 250 375 m 625 500 l 875 500 l 875 250 l 750 250 l 750 375 l 625 375 m 125 375 l 250 375 l 250 250 l 125 250 m 625 250 l 750 250 l 750 125 l 500 125 l 500 375 l 625 375 m 0 250 l 125 250 l 125 125 l 0 125"},"#":{ha:1e3,x_min:0,x_max:875,o:"m 125 125 l 125 250 l 0 250 l 0 375 l 125 375 l 125 750 l 0 750 l 0 875 l 125 875 l 125 1000 l 375 1000 l 375 875 l 500 875 l 500 1000 l 750 1000 l 750 875 l 875 875 l 875 750 l 750 750 l 750 375 l 875 375 l 875 250 l 750 250 l 750 125 l 500 125 l 500 250 l 375 250 l 375 125 m 375 375 l 500 375 l 500 750 l 375 750"},"&":{ha:1e3,x_min:0,x_max:875,o:"m 625 375 l 750 375 l 750 250 l 875 250 l 875 125 l 125 125 l 125 250 l 0 250 l 0 500 l 125 500 l 125 625 l 0 625 l 0 875 l 125 875 l 125 1000 l 500 1000 l 500 875 l 625 875 l 625 625 l 500 625 l 500 500 l 625 500 m 250 625 l 375 625 l 375 875 l 250 875 m 500 375 l 375 375 l 375 500 l 250 500 l 250 250 l 500 250 m 875 500 l 875 375 l 750 375 l 750 500"},"*":{ha:1e3,x_min:0,x_max:875,o:"m 125 250 l 125 375 l 250 375 l 250 500 l 0 500 l 0 625 l 250 625 l 250 750 l 125 750 l 125 875 l 375 875 l 375 750 l 500 750 l 500 875 l 750 875 l 750 750 l 625 750 l 625 625 l 875 625 l 875 500 l 625 500 l 625 375 l 750 375 l 750 250 l 500 250 l 500 375 l 375 375 l 375 250"},"(":{ha:1e3,x_min:250,x_max:750,o:"m 500 125 l 500 250 l 375 250 l 375 375 l 250 375 l 250 750 l 375 750 l 375 875 l 500 875 l 500 1000 l 750 1000 l 750 875 l 625 875 l 625 750 l 500 750 l 500 375 l 625 375 l 625 250 l 750 250 l 750 125"},")":{ha:1e3,x_min:125,x_max:625,o:"m 125 125 l 125 250 l 250 250 l 250 375 l 375 375 l 375 750 l 250 750 l 250 875 l 125 875 l 125 1000 l 375 1000 l 375 875 l 500 875 l 500 750 l 625 750 l 625 375 l 500 375 l 500 250 l 375 250 l 375 125"},"\xB7":{ha:1e3,x_min:250,x_max:500,o:"m 250 375 l 250 625 l 500 625 l 500 375"},"\u2019":{ha:1e3,x_min:250,x_max:625,o:"m 250 625 l 250 750 l 375 750 l 375 1000 l 625 1000 l 625 750 l 500 750 l 500 625"},"'":{ha:1e3,x_min:250,x_max:500,o:"m 250 625 l 250 1000 l 500 1000 l 500 625"},'"':{ha:1e3,x_min:125,x_max:750,o:"m 125 625 l 125 1000 l 375 1000 l 375 625 m 500 625 l 500 1000 l 750 1000 l 750 625"}},familyName:"Press Start 2P",resolution:1e3,capHeight:1e3,ascender:1e3,descender:0,underlinePosition:-75,underlineThickness:50,boundingBox:{xMin:0,yMin:0,xMax:1e3,yMax:1e3}};var dp={glyphs:{"0":{ha:732,x_min:14,x_max:718,o:"m 366 -14 q 106 82 197 -14 q 14 389 14 178 q 106 696 14 600 q 366 792 197 792 q 627 696 535 792 q 718 389 718 600 q 634 90 718 194 q 366 -14 549 -14 m 366 164 q 434 238 434 164 l 434 540 q 366 614 434 614 q 298 540 298 614 l 298 238 q 366 164 298 164"},"1":{ha:522,x_min:14,x_max:488,o:"m 44 0 l 44 164 l 140 164 l 140 614 l 14 614 l 14 727 l 236 778 l 404 778 l 404 164 l 488 164 l 488 0"},"2":{ha:649,x_min:12,x_max:626,o:"m 12 86 q 38 238 12 172 q 121 363 63 304 q 281 484 179 421 q 324 517 311 503 q 336 549 336 530 q 277 590 336 590 q 176 567 233 590 q 73 509 119 544 l 14 722 q 161 777 78 754 q 328 799 244 799 q 542 738 466 799 q 618 565 618 677 q 592 460 618 505 q 528 383 565 414 q 430 312 490 352 q 332 237 363 268 q 300 164 300 205 l 421 164 l 421 221 l 626 221 l 626 0 l 12 0"},"3":{ha:623,x_min:14,x_max:611,o:"m 486 397 q 546 365 517 389 q 593 303 574 340 q 611 221 611 266 q 533 49 611 111 q 300 -14 454 -14 q 154 3 227 -14 q 24 43 81 19 l 24 256 q 153 212 86 229 q 279 195 219 195 q 341 208 321 195 q 360 251 360 221 q 290 309 360 309 l 218 309 l 218 473 l 274 473 q 340 529 340 473 q 274 583 340 583 q 174 561 226 583 q 73 502 122 538 l 14 715 q 153 770 75 747 q 310 792 231 792 q 522 734 448 792 q 596 570 596 676 q 565 462 596 504 q 486 397 534 419"},"4":{ha:694,x_min:18,x_max:676,o:"m 343 0 l 343 125 l 18 125 l 18 289 l 363 778 l 607 778 l 607 277 l 676 277 l 676 125 l 607 125 l 607 0 m 203 277 l 343 277 l 343 474"},"5":{ha:651,x_min:22,x_max:637,o:"m 407 514 q 578 448 519 514 q 637 269 637 382 q 599 120 637 184 q 484 21 560 56 q 300 -14 408 -14 q 154 3 227 -14 q 24 43 81 19 l 24 256 q 260 195 154 195 q 342 218 315 195 q 369 288 369 240 q 353 343 369 323 q 302 363 337 363 q 259 350 275 363 q 232 311 242 336 l 22 311 l 65 778 l 597 778 l 597 584 l 265 584 l 256 481 q 407 514 319 514"},"6":{ha:693,x_min:18,x_max:685,o:"m 449 491 q 623 427 560 491 q 685 249 685 363 q 602 54 685 122 q 366 -14 518 -14 q 104 82 190 -14 q 18 374 18 177 q 120 691 18 590 q 399 792 221 792 q 535 780 472 792 q 636 747 598 767 l 636 545 q 549 573 598 562 q 445 583 500 583 q 302 477 302 583 l 302 465 q 372 484 333 476 q 449 491 411 491 m 370 164 q 421 185 404 164 q 438 249 438 205 q 421 312 438 289 q 367 334 403 334 q 302 321 333 334 l 302 241 q 319 183 302 201 q 370 164 336 164"},"7":{ha:648,x_min:10,x_max:638,o:"m 122 0 q 160 197 122 89 q 254 407 197 305 q 369 584 311 508 l 220 584 l 220 492 l 10 492 l 10 778 l 638 778 l 638 626 q 530 435 583 544 q 441 210 476 325 q 405 0 405 94 l 122 0"},"8":{ha:700,x_min:10,x_max:690,o:"m 553 404 q 650 338 609 384 q 690 215 690 291 q 604 44 690 102 q 350 -14 517 -14 q 97 43 183 -14 q 10 209 10 99 q 54 336 10 288 q 157 404 97 384 q 68 466 104 423 q 32 575 32 508 q 113 737 32 682 q 350 792 193 792 q 586 737 506 792 q 666 575 666 682 q 634 465 666 507 q 553 404 602 423 m 350 614 q 282 544 282 614 q 350 478 282 478 q 418 544 418 478 q 350 614 418 614 m 350 164 q 428 244 428 164 q 408 305 428 284 q 350 326 388 326 q 292 305 312 326 q 272 244 272 284 q 350 164 272 164"},"9":{ha:693,x_min:10,x_max:677,o:"m 325 792 q 590 697 503 792 q 677 404 677 601 q 576 87 677 188 q 296 -14 474 -14 q 160 -1 223 -14 q 59 31 97 11 l 59 233 q 146 206 97 216 q 250 195 195 195 q 393 301 393 195 l 393 312 q 255 287 329 287 q 75 350 139 287 q 10 524 10 412 q 92 725 10 657 q 325 792 174 792 m 257 528 q 275 466 257 488 q 328 444 292 444 q 393 457 362 444 l 393 537 q 376 596 393 577 q 325 614 359 614 q 274 593 291 614 q 257 528 257 572"},A:{ha:806,x_min:12,x_max:794,o:"m 754 164 l 794 164 l 794 0 l 402 0 l 402 164 l 462 164 l 446 244 l 310 244 l 294 164 l 354 164 l 354 0 l 12 0 l 12 164 l 52 164 l 221 778 l 585 778 m 332 350 l 424 350 l 383 549 l 373 549"},B:{ha:775,x_min:20,x_max:763,o:"m 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 479 778 q 674 727 604 778 q 744 581 744 676 q 716 482 744 522 q 651 421 688 441 q 578 393 613 400 l 578 383 q 706 338 649 376 q 763 202 763 300 q 684 49 763 97 q 479 0 605 0 l 20 0 m 404 450 q 448 466 433 450 q 462 514 462 481 l 462 550 q 448 599 462 583 q 404 614 433 614 l 350 614 l 350 450 m 411 164 q 455 180 440 164 q 469 228 469 195 l 469 272 q 455 321 469 305 q 411 336 440 336 l 350 336 l 350 164"},C:{ha:722,x_min:14,x_max:704,o:"m 408 -14 q 117 82 219 -14 q 14 389 14 178 q 406 792 14 792 q 583 769 501 792 q 704 718 664 746 l 704 468 l 464 468 l 464 540 q 447 596 464 578 q 396 614 430 614 q 345 596 362 614 q 328 540 328 578 l 328 238 q 345 182 328 200 q 396 164 362 164 q 447 182 430 164 q 464 238 464 200 l 464 319 l 704 319 l 704 60 q 583 9 663 32 q 408 -14 502 -14"},D:{ha:804,x_min:20,x_max:790,o:"m 20 164 l 70 164 l 70 613 l 20 613 l 20 778 l 426 778 q 692 687 593 778 q 790 389 790 595 q 692 92 790 183 q 426 0 593 0 l 20 0 m 408 164 q 459 182 442 164 q 476 238 476 200 l 476 540 q 408 614 476 614 l 350 614 l 350 164"},E:{ha:713,x_min:20,x_max:695,o:"m 20 0 l 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 695 778 l 695 476 l 471 476 l 471 614 l 350 614 l 350 456 l 438 456 l 438 342 l 350 342 l 350 164 l 471 164 l 471 322 l 695 322 l 695 0"},F:{ha:632,x_min:20,x_max:618,o:"m 20 0 l 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 618 778 l 618 519 l 441 519 l 441 614 l 350 614 l 350 448 l 501 448 l 501 334 l 350 334 l 350 164 l 481 164 l 481 0"},G:{ha:782,x_min:14,x_max:774,o:"m 774 250 l 724 250 l 724 50 q 596 6 680 25 q 413 -14 511 -14 q 120 85 226 -14 q 14 389 14 183 q 120 696 14 600 q 421 792 225 792 q 599 772 516 792 q 724 727 682 752 l 724 488 l 474 488 l 474 535 q 457 596 474 577 q 401 614 439 614 q 346 596 363 614 q 328 535 328 577 l 328 243 q 346 183 328 201 q 401 164 363 164 q 457 183 439 164 q 474 243 474 201 l 474 250 l 420 250 l 420 399 l 774 399"},H:{ha:840,x_min:20,x_max:820,o:"m 820 614 l 770 614 l 770 164 l 820 164 l 820 0 l 442 0 l 442 164 l 490 164 l 490 329 l 350 329 l 350 164 l 398 164 l 398 0 l 20 0 l 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 398 778 l 398 614 l 350 614 l 350 462 l 490 462 l 490 614 l 442 614 l 442 778 l 820 778"},I:{ha:420,x_min:20,x_max:400,o:"m 20 0 l 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 400 778 l 400 614 l 350 614 l 350 164 l 400 164 l 400 0"},J:{ha:666,x_min:12,x_max:648,o:"m 273 -14 q 127 4 196 -14 q 12 52 58 21 l 12 228 l 212 228 l 212 218 q 264 164 212 164 q 305 179 291 164 q 318 224 318 193 l 318 614 l 228 614 l 228 778 l 648 778 l 648 614 l 598 614 l 598 278 q 512 59 598 131 q 273 -14 426 -14"},K:{ha:835,x_min:20,x_max:819,o:"m 769 164 l 819 164 l 819 0 l 546 0 l 396 310 l 350 272 l 350 164 l 398 164 l 398 0 l 20 0 l 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 398 778 l 398 614 l 350 614 l 350 482 l 505 614 l 442 614 l 442 778 l 814 778 l 814 614 l 764 614 l 597 476"},L:{ha:653,x_min:20,x_max:639,o:"m 20 0 l 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 442 778 l 442 614 l 350 614 l 350 164 l 440 164 l 440 256 l 639 256 l 639 0"},M:{ha:1143,x_min:20,x_max:1123,o:"m 1123 614 l 1073 614 l 1073 164 l 1123 164 l 1123 0 l 745 0 l 745 164 l 793 164 l 793 514 l 623 0 l 475 0 l 300 509 l 300 164 l 348 164 l 348 0 l 20 0 l 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 478 778 l 582 466 l 682 778 l 1123 778"},N:{ha:942,x_min:20,x_max:924,o:"m 596 778 l 924 778 l 924 614 l 874 614 l 874 0 l 593 0 l 300 451 l 300 164 l 348 164 l 348 0 l 20 0 l 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 381 778 l 644 377 l 644 614 l 596 614"},O:{ha:792,x_min:14,x_max:778,o:"m 396 -14 q 114 82 213 -14 q 14 389 14 178 q 114 696 14 600 q 396 792 213 792 q 679 696 579 792 q 778 389 778 600 q 679 82 778 178 q 396 -14 579 -14 m 396 164 q 447 182 430 164 q 464 238 464 200 l 464 540 q 447 596 464 578 q 396 614 430 614 q 345 596 362 614 q 328 540 328 578 l 328 238 q 345 182 328 199 q 396 164 362 164"},P:{ha:738,x_min:20,x_max:724,o:"m 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 459 778 q 656 723 588 778 q 724 543 724 667 q 656 364 724 419 q 459 308 588 308 l 350 308 l 350 164 l 446 164 l 446 0 l 20 0 m 384 450 q 442 514 442 450 l 442 550 q 428 599 442 583 q 384 614 413 614 l 350 614 l 350 450"},Q:{ha:810,x_min:14,x_max:794,o:"m 794 -78 q 455 -65 582 -78 q 235 -9 327 -52 q 81 118 143 33 q 14 389 14 215 q 115 692 14 592 q 396 792 215 792 q 677 704 576 792 q 778 439 778 615 q 754 297 778 363 q 669 174 729 230 l 674 164 l 794 164 l 794 -78 m 396 164 q 464 238 464 164 l 464 540 q 396 614 464 614 q 328 540 328 614 l 328 238 q 396 164 328 164"},R:{ha:800,x_min:20,x_max:784,o:"m 20 164 l 70 164 l 70 614 l 20 614 l 20 778 l 479 778 q 676 725 608 778 q 744 553 744 672 q 717 437 744 486 q 640 369 690 388 l 641 359 q 737 241 737 344 l 737 164 l 784 164 l 784 0 l 467 0 l 467 235 q 456 294 467 274 q 420 321 444 314 q 350 328 395 328 l 350 164 l 416 164 l 416 0 l 20 0 m 404 450 q 448 466 433 450 q 462 514 462 481 l 462 550 q 448 599 462 583 q 404 614 433 614 l 350 614 l 350 450"},S:{ha:674,x_min:8,x_max:666,o:"m 330 -14 q 149 3 234 -14 q 17 40 63 19 l 17 238 l 237 238 q 251 193 237 207 q 302 179 265 179 q 347 189 333 179 q 360 217 360 198 q 347 245 360 233 q 302 268 334 256 l 216 298 q 57 397 105 340 q 8 551 8 454 q 86 731 8 669 q 344 792 163 792 q 508 775 431 792 q 631 728 584 757 l 631 549 l 431 549 q 369 599 431 599 q 327 592 339 599 q 314 565 314 584 q 329 538 314 548 q 376 517 343 528 l 463 487 q 618 394 569 451 q 666 243 666 336 q 581 51 666 116 q 330 -14 495 -14"},T:{ha:780,x_min:14,x_max:766,o:"m 766 536 l 594 536 l 594 614 l 530 614 l 530 164 l 600 164 l 600 0 l 180 0 l 180 164 l 250 164 l 250 614 l 186 614 l 186 536 l 14 536 l 14 778 l 766 778"},U:{ha:781,x_min:16,x_max:765,o:"m 394 -14 q 152 55 237 -14 q 66 279 66 124 l 66 614 l 16 614 l 16 778 l 386 778 l 386 614 l 346 614 l 346 228 q 361 180 346 195 q 404 164 375 164 q 448 180 433 164 q 462 228 462 195 l 462 614 l 422 614 l 422 778 l 765 778 l 765 614 l 715 614 l 715 279 q 632 55 715 124 q 394 -14 549 -14"},V:{ha:786,x_min:12,x_max:774,o:"m 440 778 l 774 778 l 774 614 l 734 614 l 555 0 l 231 0 l 52 614 l 12 614 l 12 778 l 396 778 l 396 614 l 344 614 l 413 279 l 423 279 l 492 614 l 440 614"},W:{ha:1207,x_min:12,x_max:1195,o:"m 875 778 l 1195 778 l 1195 614 l 1155 614 l 1006 0 l 707 0 l 616 432 l 606 432 l 510 0 l 211 0 l 52 614 l 12 614 l 12 778 l 382 778 l 382 614 l 344 614 l 383 359 l 393 359 l 488 778 l 776 778 l 864 359 l 874 359 l 913 614 l 875 614"},X:{ha:800,x_min:14,x_max:786,o:"m 744 164 l 786 164 l 786 0 l 408 0 l 408 164 l 449 164 l 391 246 l 381 246 l 323 164 l 364 164 l 364 0 l 14 0 l 14 164 l 66 164 l 258 380 l 58 614 l 16 614 l 16 778 l 391 778 l 391 614 l 353 614 l 408 532 l 418 532 l 473 614 l 435 614 l 435 778 l 782 778 l 782 614 l 730 614 l 541 401"},Y:{ha:776,x_min:12,x_max:764,o:"m 457 778 l 764 778 l 764 614 l 724 614 l 531 268 l 531 164 l 581 164 l 581 0 l 201 0 l 201 164 l 251 164 l 251 268 l 52 614 l 12 614 l 12 778 l 399 778 l 399 614 l 364 614 l 423 459 l 433 459 l 492 614 l 457 614"},Z:{ha:689,x_min:14,x_max:675,o:"m 476 246 l 675 246 l 675 0 l 14 0 l 14 144 l 322 614 l 218 614 l 218 532 l 19 532 l 19 778 l 659 778 l 659 634 l 352 164 l 476 164"},".":{ha:244,x_min:40,x_max:196,o:"m 40 0 l 40 164 l 196 164 l 196 0"},",":{ha:245,x_min:40,x_max:197,o:"m 40 -161 l 92 0 l 41 0 l 41 164 l 197 164 l 197 0 l 126 -161"},"!":{ha:339,x_min:20,x_max:319,o:"m 66 219 l 20 728 l 20 778 l 319 778 l 319 728 l 272 219 m 56 0 l 56 164 l 282 164 l 282 0"},"?":{ha:630,x_min:14,x_max:620,o:"m 153 265 q 170 344 153 310 q 209 398 186 377 q 268 444 232 419 q 321 487 304 469 q 338 530 338 505 q 278 570 338 570 q 173 552 231 570 q 67 511 115 534 l 14 715 q 167 769 80 746 q 340 792 254 792 q 489 767 425 792 q 586 694 552 741 q 620 585 620 647 q 603 494 620 531 q 560 434 585 457 q 494 382 535 410 q 440 340 460 358 q 406 296 419 322 q 392 234 392 270 l 392 219 l 153 219 m 153 0 l 153 164 l 391 164 l 391 0"},":":{ha:244,x_min:40,x_max:196,o:"m 40 325 l 40 489 l 196 489 l 196 325 m 40 0 l 40 164 l 196 164 l 196 0"},";":{ha:245,x_min:40,x_max:197,o:"m 41 325 l 41 489 l 197 489 l 197 325 m 40 -161 l 92 0 l 41 0 l 41 164 l 197 164 l 197 0 l 126 -161"},"-":{ha:389,x_min:34,x_max:355,o:"m 34 199 l 34 363 l 355 363 l 355 199"},"\u2013":{ha:553,x_min:0,x_max:553,o:"m 0 199 l 0 363 l 553 363 l 553 199"},"\u2014":{ha:939,x_min:0,x_max:939,o:"m 0 199 l 0 363 l 939 363 l 939 199"},"+":{ha:576,x_min:40,x_max:536,o:"m 205 94 l 205 259 l 40 259 l 40 426 l 205 426 l 205 591 l 372 591 l 372 426 l 536 426 l 536 259 l 372 259 l 372 94"},"\xD7":{ha:570,x_min:32,x_max:538,o:"m 156 80 l 32 203 l 161 332 l 32 462 l 156 586 l 285 456 l 415 586 l 538 462 l 408 332 l 538 203 l 415 80 l 285 209"},"/":{ha:423,x_min:-20,x_max:443,o:"m -20 -151 l -20 -119 l 301 842 l 443 842 l 443 810 l 123 -151"},"%":{ha:885,x_min:30,x_max:855,o:"m 193 386 q 30 586 30 386 q 72 740 30 692 q 193 788 114 788 q 357 586 357 788 q 318 438 357 489 q 193 386 279 386 m 193 473 q 222 510 222 473 l 222 665 q 193 701 222 701 q 165 665 165 701 l 165 510 q 193 473 165 473 m 159 0 l 159 32 l 624 778 l 726 778 l 726 746 l 262 0 m 691 -10 q 528 190 528 -10 q 570 344 528 296 q 691 392 612 392 q 855 190 855 392 q 816 42 855 93 q 691 -10 777 -10 m 691 77 q 720 114 720 77 l 720 269 q 691 305 720 305 q 663 269 663 305 l 663 114 q 691 77 663 77"},"#":{ha:732,x_min:22,x_max:710,o:"m 113 0 l 113 22 l 134 193 l 22 193 l 38 332 l 151 332 l 164 437 l 42 437 l 58 576 l 182 576 l 207 778 l 349 778 l 349 756 l 326 576 l 446 576 l 471 778 l 613 778 l 613 756 l 590 576 l 710 576 l 694 437 l 573 437 l 560 332 l 690 332 l 674 193 l 543 193 l 520 0 l 377 0 l 377 22 l 398 193 l 279 193 l 256 0 m 296 332 l 415 332 l 428 437 l 309 437"},"&":{ha:828,x_min:16,x_max:814,o:"m 350 -14 q 103 46 189 -14 q 16 210 16 105 q 58 332 16 280 q 163 409 100 383 q 79 491 107 449 q 51 589 51 533 q 92 699 51 653 q 206 769 133 745 q 371 792 278 792 q 543 769 465 792 q 659 718 621 746 l 659 526 l 449 526 l 449 544 q 432 597 449 580 q 381 614 415 614 q 318 565 318 614 q 334 529 318 546 q 383 486 349 512 l 546 363 q 550 411 550 384 l 550 429 l 791 429 l 791 262 l 733 262 l 724 229 l 814 161 l 692 0 l 619 56 q 350 -14 519 -14 m 376 164 q 456 182 425 164 l 329 280 q 299 256 310 271 q 288 221 288 240 q 311 178 288 191 q 376 164 333 164"},"*":{ha:409,x_min:16,x_max:393,o:"m 145 409 l 145 424 l 163 518 l 88 458 l 76 451 l 16 551 l 27 560 l 127 593 l 27 626 l 16 633 l 76 736 l 88 729 l 163 667 l 145 761 l 145 778 l 265 778 l 265 761 l 247 667 l 321 729 l 332 736 l 393 633 l 381 626 l 280 593 l 381 560 l 393 551 l 332 451 l 321 458 l 247 518 l 265 424 l 265 409"},"(":{ha:374,x_min:36,x_max:364,o:"m 255 -232 q 97 4 158 -145 q 36 328 36 153 q 97 652 36 503 q 255 888 158 801 l 364 838 q 258 607 294 736 q 222 328 222 478 q 258 49 222 178 q 364 -182 294 -80 l 255 -232"},")":{ha:374,x_min:10,x_max:338,o:"m 10 -182 q 116 49 80 -80 q 152 328 152 178 q 116 607 152 478 q 10 838 80 736 l 119 888 q 277 652 216 801 q 338 328 338 503 q 277 4 338 153 q 119 -232 216 -145"},"\xB7":{ha:204,x_min:24,x_max:180,o:"m 24 320 l 24 472 l 180 472 l 180 320"},"\u2019":{ha:210,x_min:30,x_max:170,o:"m 36 548 l 79 650 l 30 650 l 30 778 l 170 778 l 170 650 l 103 548"},"'":{ha:193,x_min:25,x_max:168,o:"m 40 548 l 25 778 l 168 778 l 153 548"},'"':{ha:356,x_min:25,x_max:331,o:"m 203 548 l 188 778 l 331 778 l 316 548 m 40 548 l 25 778 l 168 778 l 153 548"}},familyName:"Alfa Slab One",resolution:1e3,capHeight:778,ascender:1036,descender:-333,underlinePosition:-75,underlineThickness:50,boundingBox:{xMin:-20,yMin:-232,xMax:1195,yMax:888}};var xc={paper:hp,sunset:up,primetime:dp},uu=new Map,du=new Map,fu=new Map;function O3(s){let e=xc[s]||xc.paper;return uu.has(s)||uu.set(s,new gc(e)),uu.get(s)}function Mr(s){let e=xc[s]||xc.paper;return{resolution:e.resolution,capHeight:e.capHeight,glyphs:e.glyphs}}function fp(s,e){let{glyphs:t}=Mr(s);return[...String(e)].every(i=>i===" "||t[i])}var yr={paper:{bevel:.06,curveSegments:4,tracking:.02},sunset:{bevel:0,curveSegments:1,tracking:.06},primetime:{bevel:.05,curveSegments:4,tracking:.035}};function pp(s,e,t,i){let n=yr[s]||yr.paper,{resolution:r,glyphs:o}=Mr(s),a=o[e];if(!a)return null;let l=t/r,c=a.ha*l,h=a.o?O3(s).generateShapes(e,t):[];if(!h.length)return{geometry:null,advance:c,width:c,height:0};let u=n.bevel*t,d=new En(h,{depth:i,curveSegments:n.curveSegments,steps:1,bevelEnabled:u>0,bevelThickness:u,bevelSize:u*.8,bevelOffset:0,bevelSegments:1});d.computeBoundingBox();let f=d.boundingBox;return{geometry:d,advance:c,width:f.max.x-f.min.x,height:f.max.y-f.min.y,box:f}}function mp(s,e,t=40,i=8,n=!1){let r=`${s}|${e}|${t}|${i}|${n}`;if(du.has(r))return du.get(r);let o=pp(s,e,t,i),a;if(!o||!o.geometry)a={geometry:null,advance:o?o.advance:t*.4,width:o?o.width:0,height:0};else{let l=o.geometry.clone(),c=(o.box.min.x+o.box.max.x)/2,h=(o.box.min.y+o.box.max.y)/2;l.translate(-c,n?0:-h,0),o.geometry.dispose(),a={geometry:l,advance:o.advance,width:o.width,height:o.height}}return du.set(r,a),a}function pu(s,e,{size:t=40,depth:i=8,tracking:n,align:r="center"}={}){let o=`${s}|${e}|${t}|${i}|${n}|${r}`;if(fu.has(o))return fu.get(o);let a=yr[s]||yr.paper,l=(n??a.tracking)*t,{capHeight:c,resolution:h,glyphs:u}=Mr(s),d=c/h*t,f=[],g=0;for(let M of String(e).toUpperCase()){if(M===" "){g+=(u.I?u.I.ha:400)*(t/h)*.9;continue}let y=pp(s,M,t,i);if(!y){g+=t*.5;continue}if(y.geometry){let S=y.geometry;S.translate(g,0,0),f.push(S)}g+=y.advance+l}let p=Math.max(0,g-l),m=r==="left"?0:r==="right"?-p:-p/2,x;if(!f.length)x=new pt;else{x=Uo(f,!1);for(let M of f)M.dispose()}f.length&&(x.translate(m,-d/2,0),x.computeBoundingBox());let v={geometry:x,width:p,capHeight:d};return fu.set(o,v),v}function gp(s,e,t=40,i){let n=yr[s]||yr.paper,r=(i??n.tracking)*t,{resolution:o,glyphs:a}=Mr(s),l=[],c=0;for(let u of String(e).toUpperCase()){let d=a[u],f=u===" "?(a.I?a.I.ha:400)*(t/o)*.9:d?d.ha*(t/o):t*.5;u!==" "&&d&&l.push({ch:u,x:c+f/2,advance:f}),c+=f+r}let h=Math.max(0,c-r);for(let u of l)u.x-=h/2;return{letters:l,total:h}}function mu(s,e,t=.55,i=!0){return s==="sunset"?new Ue({color:$e(e),emissive:$e(e),emissiveIntensity:.9+t,roughness:.6,flatShading:!0,transparent:i}):s==="primetime"?new Nt({color:$e(e),emissive:$e(e),emissiveIntensity:.25+t*.5,roughness:.18,metalness:.6,clearcoat:1,transparent:i}):new Nt({color:$e(e),emissive:$e(e),emissiveIntensity:t*.25,roughness:.35,metalness:.05,clearcoat:.8,clearcoatRoughness:.25,transparent:i})}var vc=class{constructor(e,t){this.group=new ae,this.items=[],this.faceYaw=0,this.setTheme(e,t)}setTheme(e,t){this.theme=e,this.palette=t,this.clear()}clear(){for(let e of this.items)this.dispose(e);this.items.length=0}dispose(e){this.group.remove(e.mesh),e.mesh.material.dispose()}show({text:e,position:t=[0,0,80],size:i=34,depth:n=10,color:r=this.palette.amber,glow:o=.6,style:a="slam",life:l=1.6,tilt:c=0,key:h=null}){if(h){let p=this.items.find(m=>m.key===h);if(p&&p.text===e)return p.t=Math.min(p.t,p.life*0),p.life=l,p.dying=!1,p.base=t.slice(),p;p&&(this.dispose(p),this.items.splice(this.items.indexOf(p),1))}let u=this.palette.fontKey,{geometry:d}=pu(u,e,{size:i,depth:n}),f=new ne(d,mu(this.theme,r,o));f.castShadow=!1,f.position.set(...t),f.renderOrder=9,this.group.add(f);let g={mesh:f,text:e,t:0,life:l,style:a,base:t.slice(),tilt:c,key:h,dying:!1,seed:Math.random()*Ke};return this.items.push(g),g}hide(e){let t=this.items.find(i=>i.key===e);t&&(t.dying=!0,t.dieT=0)}update(e,t){for(let i=this.items.length-1;i>=0;i-=1){let n=this.items[i],r=n.mesh;n.t+=e;let o=n.life>0?be(n.t/n.life):0,a=1,l=1,c=Wf(be(n.t/.38),1.9);n.style==="slam"?(l=(n.t<.22?2.6-1.6*ur(n.t/.22):1)*(n.t<.22?1:1+Math.exp(-(n.t-.22)*9)*Math.cos((n.t-.22)*26)*.06),r.position.set(n.base[0],n.base[1]+(n.t<.22?(1-n.t/.22)*46:0)+Math.sin(t*1.3+n.seed)*1.4,n.base[2]),r.rotation.set(0,this.faceYaw+Math.sin(t*.9+n.seed)*.12,n.tilt*(1+Math.exp(-n.t*6))),a=_i(0,.1,n.t)*(1-_i(.72,1,o)),n.life<=0&&(a=1)):n.style==="rise"?(l=c,r.position.set(n.base[0],n.base[1]+n.t*30,n.base[2]),r.rotation.set(0,this.faceYaw+Math.sin(t*2+n.seed)*.18,n.tilt),a=_i(0,.08,n.t)*(1-_i(.55,1,o))):(l=c,r.position.set(n.base[0],n.base[1]+Math.sin(t*1.7+n.seed)*2.2,n.base[2]),r.rotation.set(0,this.faceYaw+Math.sin(t*.8+n.seed)*.16,n.tilt),a=1),n.dying&&(n.dieT=(n.dieT||0)+e,a*=1-be(n.dieT/.35),l*=1-.2*be(n.dieT/.35)),r.scale.setScalar(Math.max(1e-4,l)),r.material.opacity=be(a),r.visible=a>.01,(n.style!=="hold"&&n.life>0&&n.t>=n.life||n.dying&&n.dieT>.36)&&(this.dispose(n),this.items.splice(i,1))}}},_c=class{constructor(e,t,i=-214){this.group=new ae,this.theme=e,this.palette=t,this.x=i,this.labels=new Map,this.max=0,this.material=new Ue({color:$e(e==="paper"?t.ink:t.cream),roughness:.6,emissive:$e(e==="paper"?"#000000":t.cream),emissiveIntensity:e==="paper"?0:.35,transparent:!0,opacity:.8}),this.pole=new ne(new yt(2.2,1,2.2),this.material),this.pole.castShadow=!1,this.group.add(this.pole),this.tickGeo=new yt(12,1.6,2),this.ticks=[],this.group.position.set(i,0,24)}setHeight(e){let t=Math.ceil((e+8)/5)*5;if(t!==this.max){this.max=t,this.pole.scale.y=t*22,this.pole.position.y=t*22/2;for(let i=5;i<=t;i+=5){if(this.labels.has(i))continue;let n=new ne(this.tickGeo,this.material);n.position.set(6,i*22,0),this.group.add(n),this.ticks.push(n);let{geometry:r}=pu(this.palette.fontKey,String(i),{size:15,depth:3,align:"right"}),o=new ne(r,this.material);o.position.set(-5,i*22+0,0),o.castShadow=!1,this.group.add(o),this.labels.set(i,o)}}}setAlpha(e){this.material.opacity=.8*e,this.group.visible=e>.02}dispose(){this.pole.geometry.dispose(),this.tickGeo.dispose(),this.material.dispose()}};var br=class extends Ei{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new yt;e.deleteAttribute("uv");let t=new Ue({side:Vt}),i=new Ue,n=new hs(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let r=new ne(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new wi(e,i,6),a=new Ft;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ne(e,Sr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ne(e,Sr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ne(e,Sr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new ne(e,Sr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new ne(e,Sr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ne(e,Sr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Sr(s){return new lo({color:0,emissive:16777215,emissiveIntensity:s})}var je=(s,e,t,i=2.2)=>new mr(s,e,t,2,Math.min(i,s/2-.01,e/2-.01,t/2-.01)),Er=(s,e=28)=>new wn(s.map(([t,i])=>new ee(t,i)),e),Wo=Object.freeze(["turbo","crumble","slowmo","magnet","drunk","spotlight","zoom","double","accordion","rollercoaster","peekaboo","earthquake","pisa","superglue","portal","calipers"]);function H3(s){let e=rc[s]||rc.paper,t=o=>In(s,o),i=new Map;return{p:e,T:t,mat:(o,{rough:a=.5,metal:l=0,emissive:c=0,glass:h=!1,shine:u=.3}={})=>{let d=`${o}|${a}|${l}|${c}|${h}`;if(i.has(d))return i.get(d);let f=new Se(o),g;return h?g=new Nt({color:f,roughness:.05,metalness:0,transparent:!0,opacity:.38,clearcoat:1,envMapIntensity:1.6}):s==="sunset"?g=new Ue({color:f,roughness:.7,metalness:l*.4,flatShading:!0,emissive:f,emissiveIntensity:.32+c}):s==="primetime"?g=new Nt({color:f,roughness:Math.max(.08,a*.4),metalness:l,clearcoat:1,clearcoatRoughness:.06,emissive:f,emissiveIntensity:.05+c}):g=new Nt({color:f,roughness:a,metalness:l,clearcoat:u,clearcoatRoughness:.4,sheen:.4,sheenColor:new Se("#fff2d6"),emissive:f,emissiveIntensity:c}),i.set(d,g),g},glowMat:(o,a=.9)=>new mt({color:new Se(o).multiplyScalar(1.6),transparent:!0,opacity:a,blending:kt,depthWrite:!1,side:ht,toneMapped:!1}),cache:i}}var se=(s,e,t,i=0,n=0,r=0,o=0,a=0,l=0)=>{let c=new ne(e,t);return c.position.set(i,n,r),c.rotation.set(o,a,l),c.castShadow=!0,s.add(c),c};function xp({p:s,mat:e},t){let i=new ae;return se(i,je(13,18,17,3),e(s.ink,{metal:.3,rough:.4}),-17,0,0),se(i,new gt(15,7,18,30),e(s.amber,{metal:.45,rough:.28}),-4,0,0,0,0,-Math.PI/2),se(i,new gt(11,11,2,26),e(s.cream,{rough:.6}),4.6,0,0,0,0,-Math.PI/2),t?[[15,2.6],[23,2.6]].forEach(([n,r],o)=>se(i,new bt(n,r,9,26,1.5),e(o?s.teal:s.vermilion,{emissive:.45}),5,0,0,0,0,-.75)):(se(i,je(4.4,28,5,1.6),e(s.vermilion,{emissive:.5}),22,0,3,0,0,.785),se(i,je(4.4,28,5,1.6),e(s.vermilion,{emissive:.5}),22,0,3,0,0,-.785)),i}var vp={turbo({p:s,mat:e,glowMat:t}){let i=new ae,n=new ae;i.add(n),se(n,Er([[0,-22],[7,-22],[11,-12],[12,4],[10,16],[6,26],[0,34]]),e(s.amber,{metal:.2,rough:.35})),se(n,Er([[0,22],[6,22],[8,28],[0,38]]),e(s.vermilion,{rough:.4})),se(n,new at(5,18,14),e("#F4EDDF",{rough:.15}),0,8,9.5).scale.z=.6,se(n,new bt(5,1.4,8,20),e(s.ink,{metal:.6}),0,8,10.5);for(let r=0;r<3;r+=1){let o=r/3*Ke,a=se(n,je(3,16,14,1.2),e(s.vermilion),Math.sin(o)*12,-14,Math.cos(o)*12);a.rotation.y=o}return se(n,new Jt(7,22,16),t(s.amber,.9),0,-34,0,Math.PI,0,0),se(n,new Jt(4,15,16),t("#ffffff",.9),0,-30,0,Math.PI,0,0),n.rotation.z=-.62,i},crumble({p:s,mat:e}){let t=new ae,i=se(t,je(24,30,26,2.5),e(s.cream,{rough:.8}),-13.5,2,0);i.rotation.z=.12;let n=se(t,je(22,30,26,2.5),e(s.cream,{rough:.8}),13,-2,0);n.rotation.z=-.14,se(t,je(3,32,22,1),e(s.vermilion,{emissive:.5}),.5,0,2.5,0,0,.18);for(let r=0;r<5;r+=1)se(t,je(5-r*.4,5-r*.4,5-r*.4,1.2),e(r%2?s.amber:s.cream,{rough:.7}),-8+r*8,-23-r%2*6,8+r%3*3,r,r*.7,.4);return t},slowmo({p:s,mat:e}){let t=new ae,i=new ae;t.add(i),se(i,new bt(21,3.6,14,44),e(s.amber,{metal:.5,rough:.28})),se(i,new gt(19.5,19.5,5,40),e("#F4EDDF",{rough:.5}),0,0,-1,Math.PI/2,0,0);for(let n=0;n<12;n+=1){let r=n/12*Ke;se(i,je(1.4,n%3?3:5.5,1.4,.4),e(s.ink),Math.sin(r)*15.5,Math.cos(r)*15.5,2,0,0,-r)}return se(i,je(2,14,2,.6),e(s.vermilion,{emissive:.3}),0,6,3,0,0,-.5).geometry.translate(0,0,0),se(i,je(2,10,2,.6),e(s.ink),-3.5,-1,3,0,0,1.9),se(i,new at(2.4,12,10),e(s.ink,{metal:.6}),0,0,3.5),se(i,new gt(3.6,3.6,7,16),e(s.teal,{metal:.4}),0,27,0),se(i,new gt(2,2,6,12),e(s.teal,{metal:.4}),17,21,0,0,0,-.7),i.rotation.x=-.1,t},magnet({p:s,mat:e}){let t=new ae;se(t,new bt(17,6,14,30,Math.PI),e(s.vermilion,{metal:.35,rough:.3}),0,4,0,0,0,0);for(let i of[-1,1])se(t,je(12,17,12,1.4),e("#e9edf2",{metal:.85,rough:.22}),i*17,-13,0),se(t,je(12.4,4,12.4,1),e(i<0?s.blue:s.amber),i*17,-3.2,0);for(let i=0;i<3;i+=1)se(t,new bt(6+i*6,.9,6,20,Math.PI),e(s.teal,{emissive:.8}),0,-26,0,0,0,Math.PI).scale.set(1,.6,1);return t},drunk({p:s,mat:e}){let t=new ae,i=new ae;t.add(i),se(i,Er([[0,-26],[11,-26],[13,-22],[13,6],[9,14],[4.4,18],[4.4,30],[0,30]]),e(s.teal,{rough:.12,metal:.1,emissive:.1})),se(i,new gt(5.2,5.2,5,14),e(s.amber,{rough:.7}),0,33,0),se(i,new gt(13.4,13.4,14,28,1,!0),e("#F4EDDF",{rough:.6}),0,-8,0),se(i,new Rt(14,9),e(s.vermilion,{rough:.6}),0,-8,13.5),i.rotation.z=.5,i.position.set(-4,-3,0);for(let n=0;n<4;n+=1)se(t,new at(2.6-n*.3,12,10),e(s.rose,{rough:.15,emissive:.3}),18+n%2*5,8+n*8,4);return t},spotlight({p:s,mat:e,glowMat:t}){let i=new ae,n=new ae;return i.add(n),se(n,Er([[0,-8],[10,-8],[15,4],[17,14],[0,14]],24),e(s.amber,{metal:.5,rough:.28}),0,8,0,0,0,0),se(n,new gt(12.5,12.5,2,28),t("#ffffff",.95),0,22.2,0),se(n,new bt(17,1.8,10,30),e(s.ink,{metal:.6}),0,22,0,Math.PI/2,0,0),se(n,new gt(3,3,22,12),e(s.ink,{metal:.5}),0,-10,0),se(n,je(26,4,16,1.4),e(s.ink,{metal:.5}),0,-22,0),se(n,new Jt(34,60,32,1,!0),t(s.amber,.18),0,52,0).scale.set(1,1,1),n.rotation.z=-.5,n.position.set(-4,-10,0),i},zoom({p:s,mat:e}){let t=new ae,i=new ae;return t.add(i),se(i,new bt(19,3.6,14,44),e(s.amber,{metal:.6,rough:.25})),se(i,new gt(17.2,17.2,2.4,40),e(s.blue,{glass:!0}),0,0,0,Math.PI/2,0,0),se(i,new gt(3.4,4.4,24,14),e(s.vermilion,{rough:.3}),21,-21,0,0,0,Math.PI/4),se(i,new bt(19,.9,8,30,1.1),e("#ffffff",{emissive:.6}),0,0,3.6,0,0,1.9),se(i,je(14,3,3,1),e(s.teal),0,0,1.4),se(i,je(3,14,3,1),e(s.teal),0,0,1.4),i.position.set(-5,5,0),i.rotation.y=-.25,t},double({p:s,mat:e}){let t=new ae,i=(n,r,o,a)=>{let l=se(t,Er([[0,0],[10,0],[13,4],[10,26],[0,27]]),e(n,{metal:.3,rough:.3}),r,o,0);return l.rotation.z=a,l.rotation.x=Math.PI,l.position.y+=26,l};return i(s.amber,-14,-22,.1),i(s.blue,15,-22,-.1),se(t,new at(6,18,14),e(s.vermilion,{rough:.15,emissive:.25}),0,-18,14),se(t,new bt(4,1.2,6,16,4.2),e(s.ink),-14,14,12,0,0,.5),se(t,new at(1.2,8,6),e(s.ink),-14,8,12),t},accordion({p:s,mat:e}){let t=new ae;se(t,je(7,32,28,2),e(s.teal,{metal:.2}),-23,0,0),se(t,je(7,36,28,2),e(s.vermilion,{metal:.2}),23,0,0);for(let i=0;i<9;i+=1){let n=-16+i*4;se(t,je(1.8,28,24,.5),e(i%2?s.amber:"#F4EDDF",{rough:.6}),n,0,0,0,0,i%2?.28:-.28)}for(let i=0;i<3;i+=1)se(t,new at(1.6,10,8),e("#F4EDDF",{rough:.2}),23,8-i*8,14.4);for(let i=0;i<4;i+=1)se(t,je(3,4,3,.8),e("#F4EDDF"),-23,10-i*6.5,14.4);return t},rollercoaster({p:s,mat:e}){let t=new ae,i=new Ks([[-30,-12,0],[-18,8,0],[-6,-12,0],[8,14,0],[20,-8,0],[32,6,0]].map(([l,c,h])=>new P(l,c,h)));se(t,new ao(i,48,2.2,8,!1),e(s.teal,{metal:.3,rough:.3}));for(let l=0;l<9;l+=1){let c=i.getPoint(l/8);se(t,new gt(1,1,c.y+30,6),e(s.blue,{rough:.5}),c.x,(c.y-30)/2-2,0)}let n=.52,r=i.getPoint(n),o=i.getTangent(n),a=new ae;a.position.copy(r).add(new P(0,7,0)),a.rotation.z=Math.atan2(o.y,o.x),t.add(a),se(a,je(20,10,14,3),e(s.amber,{rough:.3})),se(a,je(18,3,12,1),e(s.vermilion),0,4,0),se(a,new at(4,12,10),e("#F4EDDF",{rough:.3}),-3,8,0);for(let l of[-1,1])se(a,new gt(3,3,3,12),e(s.ink,{metal:.6}),l*6,-6,7.4,Math.PI/2,0,0);return t.position.y=3,t},peekaboo({p:s,mat:e}){let t=new ae;se(t,new at(20,32,24),e("#F7F1E4",{rough:.2,shine:1}),0,-2,0).scale.set(1.35,.85,.7),se(t,new gt(9.6,9.6,4,28),e(s.blue,{rough:.15,shine:1}),0,-2,12.6,Math.PI/2,0,0),se(t,new gt(4.6,4.6,4.6,20),e(s.ink,{rough:.2}),0,-2,13.2,Math.PI/2,0,0),se(t,new at(1.8,10,8),e("#ffffff",{emissive:.7}),3,1.4,16);let n=se(t,new at(21.5,32,16,0,Ke,0,.9),e(s.amber,{rough:.4}),0,2,0);n.scale.set(1.36,.9,.74),n.rotation.x=-.5;for(let r=0;r<5;r+=1){let o=-.9+r*.45;se(t,new Jt(1.4,9,6),e(s.ink),Math.sin(o)*25,20+Math.cos(o)*3,6,0,0,-o*.8)}return t},earthquake({p:s,mat:e}){let t=new ae,i=se(t,je(34,8,34,2),e(s.cream,{rough:.9}),-15,-17,0);i.rotation.z=.2;let n=se(t,je(34,8,34,2),e(s.cream,{rough:.9}),15,-19,0);n.rotation.z=-.22,se(t,je(5,7,30,1),e(s.vermilion,{emissive:1.1}),0,-22,0);let r=se(t,je(26,14,22,3),e(s.amber,{rough:.35}),0,0,0);r.rotation.z=.28,se(t,je(20,12,20,3),e(s.blue,{rough:.35}),6,14,0).rotation.z=-.34;for(let o=0;o<6;o+=1)se(t,je(3.6,3.6,3.6,.8),e(s.cream,{rough:.9}),-26+o*10,-8-o%2*5,14,o,o*.8,0);for(let o of[-1,1])se(t,new bt(29,.9,6,18,1),e(s.vermilion,{emissive:.8}),0,0,-6,0,0,o>0?-.5:Math.PI-.5).scale.set(o,1,1);return t},pisa({p:s,mat:e}){let t=new ae,i=new ae;t.add(i),se(t,new gt(27,29,4,32),e(s.teal,{rough:.8}),0,-30,0);for(let n=0;n<6;n+=1){let r=-24+n*9.2;se(i,new gt(12-n*.5,12.6-n*.5,8.4,24),e(s.cream,{rough:.7}),0,r,0),se(i,new bt(12.3-n*.5,1,6,24),e(s.amber,{rough:.5}),0,r+4.4,0,Math.PI/2,0,0);for(let o=0;o<6;o+=1){let a=o/6*Ke+.4;se(i,je(2.2,5.4,1.2,.5),e(s.ink),Math.sin(a)*(12.2-n*.5),r,Math.cos(a)*(12.2-n*.5),0,a,0)}}return se(i,new Jt(8.5,10,20),e(s.vermilion,{rough:.4}),0,36,0),i.position.set(-3,0,0),i.rotation.z=-.2,t},superglue({p:s,mat:e}){let t=new ae,i=new ae;return t.add(i),se(i,new bn(10,26,8,20),e(s.amber,{rough:.25,shine:1}),0,-2,0),se(i,new gt(10.4,10.4,12,24,1,!0),e(s.teal,{rough:.4}),0,-4,0),se(i,Er([[0,0],[6,0],[4,10],[1.4,17],[0,17]],14),e(s.teal,{rough:.3}),0,24,0),se(i,new gt(1.7,1.7,6,10),e(s.vermilion,{rough:.3}),0,36,0),i.rotation.z=.5,i.position.set(-6,4,0),se(t,new at(4,16,12),e(s.blue,{rough:.08,shine:1,emissive:.15}),14,-20,2).scale.set(.8,1.3,.8),se(t,new at(2.4,12,10),e(s.blue,{rough:.08,shine:1}),18,-32,2),se(t,new gt(15,15,3,24),e(s.blue,{rough:.08,shine:1}),16,-36,2).scale.set(1,.4,.5),t},portal({p:s,mat:e,glowMat:t}){let i=new ae;se(i,new bt(19,4.2,14,40),e(s.teal,{metal:.4,rough:.3,emissive:.4}),-17,0,-2,0,.55,0),se(i,new bt(19,4.2,14,40),e(s.blue,{metal:.4,rough:.3,emissive:.4}),17,0,2,0,-.55,0),se(i,new mi(16,36),t(s.teal,.55),-17,0,-2,0,.55,0),se(i,new mi(16,36),t(s.amber,.5),17,0,2,0,-.55,0),se(i,je(14,10,14,2.4),e(s.amber,{rough:.3,emissive:.2}),0,0,0,.2,.4,.1);for(let n=0;n<5;n+=1)se(i,new at(1.4,8,6),t("#ffffff",.9),-8+n*4,11-Math.abs(n-2)*2.5,6);return i},calipers({p:s,mat:e}){let t=new ae,i=new ae;t.add(i),se(i,je(60,8,4,1),e("#e7ecf1",{metal:.8,rough:.25}),0,6,0);for(let n=0;n<15;n+=1)se(i,je(.9,n%5?3:5,.8,.2),e(s.ink),-28+n*4,3.5-(n%5?0:.5),2.4);return se(i,je(6,34,6,1.2),e("#e7ecf1",{metal:.8,rough:.25}),-27,-10,0),se(i,je(10,5,6,1.2),e("#e7ecf1",{metal:.8}),-22.5,-26,0),se(i,je(7,30,6,1.2),e(s.amber,{metal:.5,rough:.28}),14,-8,0),se(i,je(11,5,6,1.2),e(s.amber,{metal:.5}),8.5,-23,0),se(i,je(8,7,7,1.4),e(s.vermilion,{rough:.3}),14,8,0),se(i,je(14,12,10,2),e(s.blue,{rough:.35}),-7,-17,0),i.position.set(4,3,0),t},empty({p:s,mat:e}){let t=new ae;return[[s.teal,38,-14],[s.amber,30,-1.5],[s.blue,22,11]].forEach(([i,n,r])=>se(t,je(n,11,22,3),e(i,{rough:.4}),0,r,0)),se(t,new bt(5,1.6,6,14,4.3),e(s.vermilion,{emissive:.4}),17,20,4),t},brand({p:s,mat:e}){let t=new ae;return[[s.teal,42,-20],[s.amber,34,-7.5],[s.vermilion,26,5],[s.blue,18,17.5]].forEach(([i,n,r],o)=>{let a=se(t,je(n,11.5,25,3),e(i,{rough:.4}),o%2?2:-2,r,0);a.rotation.y=o%2?.05:-.06}),se(t,new ro(5.2,0),e("#FFC83D",{metal:.5,rough:.25,emissive:.7}),17,31,5).rotation.set(.4,.6,.2),se(t,je(9,2.6,2.6,1),e("#FFC83D",{emissive:.7}),26,22,4,0,0,.7),se(t,je(8,2.6,2.6,1),e("#FFC83D",{emissive:.7}),29,31,4,0,0,-.2),t},"speaker-on"({p:s,mat:e}){return xp({p:s,mat:e},!0)},"speaker-off"({p:s,mat:e}){return xp({p:s,mat:e},!1)}};function Xo(s,e="paper"){let t=H3(e),n=(vp[s]||vp.empty)(t),r=new Ni().setFromObject(n),o=r.getSize(new P),a=r.getCenter(new P),l=54/Math.max(o.x,o.y*1.05,o.z),c=new ae;return n.position.sub(a),c.add(n),c.scale.setScalar(l),c.userData.dispose=()=>{c.traverse(h=>{h.geometry&&h.geometry.dispose()});for(let h of t.cache.values())h.dispose()},c.userData.id=s,c.userData.size=54,c}var z3=Object.freeze(["brand","speaker-on","speaker-off"]);function _p(s="paper",{size:e=192,ids:t=[...Wo,"empty",...z3]}={}){let i=document.createElement("canvas");i.width=i.height=e;let n=new Zn({canvas:i,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,premultipliedAlpha:!1});n.setPixelRatio(1),n.setSize(e,e,!1),n.setClearColor(0,0),n.outputColorSpace=Tt,n.toneMapping=s==="paper"?Ui:Ki,n.toneMappingExposure=s==="paper"?1.05:1,n.shadowMap.enabled=!1;let r=new un(n),o=new br,a=r.fromScene(o,.04).texture,l=new Ei;l.environment=a,l.environmentIntensity=s==="paper"?.75:.9;let c=new $t(26,1,10,600);c.position.set(34,40,150),c.lookAt(0,-1,0);let h=new Ci("#fff2dc",s==="paper"?2.4:2.6);h.position.set(-60,90,120);let u=new Ci(s==="sunset"?"#2EC4B6":s==="primetime"?"#FFC83D":"#bfe6ea",1.6);u.position.set(80,30,-90),l.add(new Tn("#ffffff","#cdbfa5",.7),h,u);let d=(()=>{let p=document.createElement("canvas");p.width=p.height=64;let m=p.getContext("2d"),x=m.createRadialGradient(32,32,0,32,32,32);return x.addColorStop(0,"rgba(20,12,0,.34)"),x.addColorStop(1,"rgba(20,12,0,0)"),m.fillStyle=x,m.fillRect(0,0,64,64),new ri(p)})(),f=new ne(new Rt(64,64),new mt({map:d,transparent:!0,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=-30,l.add(f);let g={};for(let p of t){let m=Xo(p,s);m.rotation.y=-.5,m.rotation.x=.1,l.add(m),n.render(l,c),g[p]=i.toDataURL("image/png"),l.remove(m),m.userData.dispose()}return d.dispose(),f.geometry.dispose(),f.material.dispose(),a.dispose(),r.dispose(),o.dispose(),n.dispose(),n.forceContextLoss(),g}function yp(s,e){let t=0;for(let[i,n]of Object.entries(e)){let r=s.getElementById(`sabotage-symbol-${i}`);r&&(r.dataset.flat||(r.dataset.flat=r.innerHTML),r.innerHTML=`<image href="${n}" x="-1" y="-1" width="34" height="34" preserveAspectRatio="xMidYMid meet"/>`,t+=1)}return t}function Mp(s,e){let t=0,i=(r,o)=>{r&&(r.dataset.flat===void 0&&(r.dataset.flat=r.innerHTML),r.dataset.glyph3d="1",r.innerHTML=o,t+=1)},n=(r,o="")=>`<image ${o} href="${r}" x="-3" y="-3" width="30" height="30" preserveAspectRatio="xMidYMid meet"/>`;return e.brand&&i(s.querySelector(".brand-mark svg"),n(e.brand)),e["speaker-on"]&&e["speaker-off"]&&i(s.querySelector(".sound-toggle svg"),n(e["speaker-on"],'class="speaker-on"')+n(e["speaker-off"],'class="speaker-off"')),t}function Sp(s){for(let e of s.querySelectorAll('symbol[id^="sabotage-symbol-"][data-flat]'))e.innerHTML=e.dataset.flat,delete e.dataset.flat;for(let e of s.querySelectorAll("svg[data-glyph3d]"))e.innerHTML=e.dataset.flat,delete e.dataset.flat,delete e.dataset.glyph3d}var yc=class{constructor(){this.energy=0,this.x=0,this.y=0,this.z=0,this.dwell=0,this.inside=!1,this.entered=!1,this.enterX=0,this.sparkCarry=0}update(e,{point:t=null,speed:i=0,blocked:n=!1,reduced:r=!1}={}){if(!(e>0))return this;e=Math.min(e,.1);let o=!!t&&!n;if(this.entered=!1,o&&!this.inside&&(this.entered=!0,this.enterX=t.x,this.x=t.x,this.y=t.y,this.z=t.z||0),this.inside=o,this.energy=xt(this.energy,o?1:0,o?6:2.4,e),this.energy<.002&&!o&&(this.energy=0),o){let a=r?30:13;this.x=xt(this.x,t.x,a,e),this.y=xt(this.y,t.y,a,e),this.z=xt(this.z,t.z||0,a,e),this.dwell=i<140?Math.min(6,this.dwell+e):Math.max(0,this.dwell-e*3)}else this.dwell=0;return this}sparks(e,t,i=!1){if(i||!this.inside||!(e>0))return this.sparkCarry=0,0;let n=be((t-90)/900,0,1)*70;this.sparkCarry+=n*Math.min(e,.1);let r=Math.min(4,Math.floor(this.sparkCarry));return this.sparkCarry-=Math.floor(this.sparkCarry),r}};function Mc(s,e,t,i,n={dx:0,dy:0}){let r=e-s.point.x,o=t-s.point.y,a=i-s.point.z,l=s.right,c=s.up;return n.dx=r*l.x+o*l.y+a*l.z,n.dy=r*c.x+o*c.y+a*c.z,n}var k3=9,G3=10,V3={paper:["#2A2520","#D5472F"],sunset:["#FFC53D","#FF4FD8"],primetime:["#FFFFFF","#FFC83D"]},W3={paper:["#2F8478","#E3A33B"],sunset:["#2B1155","#2B1155"],primetime:["#0B1B5C","#0B1B5C"]},X3=Object.freeze({wide:Object.freeze([["STACK THE BLOCKS.",0],["CHAT RUINS YOUR LIFE.",1]]),tall:Object.freeze([["STACK THE",0],["BLOCKS.",0],["CHAT RUINS",1],["YOUR LIFE.",1]])}),Sc=class{constructor(e,t,i){this.theme=e,this.palette=t,this.fx=i,this.group=new ae,this.letters=[],this.layout="",this.bounds={x0:-500,x1:500,y0:-64,y1:600},this.materials=[],this.ledges=[],this.marquee=null,this.age=0,this.random=Ut(12),this.glow=[],this.off={dx:0,dy:0},this.energy=0}build(e){this.clear(),this.layout=e;let t=X3[e],i=this.palette.fontKey,n=i==="sunset"?26:30,r=e==="wide"?80:74,o=r*1.4,{capHeight:a,resolution:l}=Mr(i),c=a/l*r,h=V3[this.theme],u=W3[this.theme],d=e==="wide"?372:356,f=0,g=0;t.map((x,v)=>({line:x,i:v})).forEach(({line:[x,v],i:M})=>{let y=d+(t.length-1-M)*o,S=e==="wide"&&M===1?r*.92:r,{letters:E,total:_}=gp(i,x,S);f=Math.max(f,_/2);let b=mu(this.theme,h[v],.5,!1);this.materials.push(b),this.glow.push({material:b,base:b.emissiveIntensity});let I=null;for(let C of E){let B=mp(i,C.ch,S,n,!0);if(!B.geometry)continue;let O=new ne(B.geometry,b);O.castShadow=!0,O.receiveShadow=!0;let H=new ae;H.add(O),O.position.z=-n/2;let te={x:C.x,y,z:-40},V=g*.055+Math.floor(M/2)*.35+this.random()*.12,W={holder:H,home:te,y:y+1100+this.random()*500,vy:-200-this.random()*300,delay:V,landed:!1,bounces:0,rz:(this.random()-.5)*1.6,vrz:0,rx:(this.random()-.5)*.8,vrx:0,ry:(this.random()-.5)*1.2,vry:0,hop:0,vhop:0,swell:0,waveDelay:-1,line:M,seed:this.random()*Ke,ch:C.ch,width:B.width,cap:S*(a/l)};H.position.set(te.x,W.y,te.z),H.rotation.set(W.rx,W.ry,W.rz),this.group.add(H),this.letters.push(W),g+=1}let A=_+S*.9,D=new yt(A,S*.16,74),q=this.theme==="paper"?new Ue({color:u[v],roughness:.6}):new Ue({color:u[v],roughness:.4,metalness:.4,emissive:h[v],emissiveIntensity:this.theme==="sunset"?.3:.12}),U=new ne(D,q);U.position.set(0,y-S*.08,-22),U.castShadow=!0,U.receiveShadow=!0,U.scale.x=.001,U.userData={delay:.1+Math.floor(M/2)*.35,width:A},this.group.add(U),this.ledges.push(U),this.materials.push(q),U.userData.geo=D});let m=d+(t.length-1)*o+c;this.bounds={x0:-f-60,x1:f+60,y0:-70,y1:m+60},this.theme==="sunset"&&this.addMarquee(f,d-r*.34,m+46),this.age=0}addMarquee(e,t,i){let n=(e+74)*2,r=i-t,o=[],a=[],l=new ae;l.position.set(0,(t+i)/2,-68);let c=new Rt(n,r),h=new mt({color:"#10052A",transparent:!0,opacity:.9,depthWrite:!1,toneMapped:!1,side:ht});l.add(new ne(c,h)),o.push(c),a.push(h);let u=(x,v,M,y,S,E)=>{let _=new Rt(v,M),b=new ne(_,x);b.position.set(y,S,E),l.add(b),o.push(_)},d=new mt({color:"#FF4FB0",toneMapped:!1,side:ht}),f=new mt({color:"#2EE6D6",toneMapped:!1,side:ht});a.push(d,f);let g=5;u(d,n,g,0,r/2,1),u(d,n,g,0,-r/2,1),u(d,g,r,-n/2,0,1),u(d,g,r,n/2,0,1);let p=13,m=2.5;u(f,n-p*2,m,0,r/2-p,1),u(f,n-p*2,m,0,-r/2+p,1),u(f,m,r-p*2,-n/2+p,0,1),u(f,m,r-p*2,n/2-p,0,1),l.scale.y=.001,this.group.add(l),this.marquee={group:l,geos:o,mats:a,plateMat:h,outer:d,inner:f}}clear(){for(let e of this.letters)this.group.remove(e.holder);for(let e of this.ledges)this.group.remove(e),e.userData.geo.dispose();for(let e of this.materials)e.dispose();if(this.letters.length=0,this.ledges.length=0,this.materials.length=0,this.glow.length=0,this.marquee){this.group.remove(this.marquee.group);for(let e of this.marquee.geos)e.dispose();for(let e of this.marquee.mats)e.dispose();this.marquee=null}}update(e,t,{pointer:i=null,pointerSpeed:n=0,reduced:r=!1,energy:o=0,yaw:a=0}={}){if(this.age+=e,this.energy=o,this.marquee){this.marquee.plateMat.opacity=.9*(.22+.78*_i(-.25,.45,Math.cos(a)));let c=be(this.age/.6);this.marquee.group.scale.y=Math.max(.001,1-(1-c)**3);let h=r||c>=1||Math.sin(this.age*55)>-.3?1:.35,u=(r?1:.94+.06*Math.sin(t*3.1)*Math.sin(t*1.7))*(1+o*.28);this.marquee.outer.color.set("#FF4FB0").multiplyScalar(h*u*1.25),this.marquee.inner.color.set("#2EE6D6").multiplyScalar(h*u)}for(let c of this.glow)c.material.emissiveIntensity=c.base+o*(this.theme==="paper"?.2:.45);for(let c of this.ledges){let h=be((this.age-c.userData.delay)/.5);c.scale.x=Math.max(.001,1-(1-h)**3)}let l=this.off;for(let c of this.letters){let h=c.holder;if(!c.landed){if(this.age<c.delay){h.visible=!1;continue}h.visible=!0,r?(c.y=c.home.y,c.landed=!0,c.rz=c.rx=c.ry=0):(c.vy-=2900*e,c.y+=c.vy*e,h.rotation.z+=(c.rz>0?1:-1)*e*.8,c.rz*=1-e*.4,c.y<=c.home.y&&(c.y=c.home.y,c.vy<-260&&c.bounces<3?(c.vy=-c.vy*.34,c.bounces+=1,c.vrz=(this.random()-.5)*6,c.vrx=(this.random()-.5)*3,this.impact(c)):(c.landed=!0,c.vy=0,c.rz=h.rotation.z))),h.position.y=c.y,h.position.x=c.home.x;continue}let u=0,d=0,f=0,g=0;if(i&&!r){let M,y;i.point?(Mc(i,c.home.x,c.home.y+c.cap/2,c.home.z,l),M=l.dx,y=l.dy):(M=c.home.x-i.x,y=c.home.y+c.cap/2-i.y);let S=Math.hypot(M,y),E=_i(190,0,S);u=-Math.sign(M||1)*E*.34,d=-E*.2,f=E*(1+n*.01)*5,g=E*.075,E>.55&&n>700&&c.vhop<=0&&c.hop<.5&&(c.vhop=Math.min(520,190+n*.06),c.vrz+=-Math.sign(M||1)*5,this.fx&&this.fx.dust&&this.fx.dust([h.position.x,c.home.y,c.home.z+20],2))}c.waveDelay>=0&&(c.waveDelay-=e,c.waveDelay<0&&(c.vhop=Math.max(c.vhop,300),c.vrz+=(this.random()-.5)*7,c.waveDelay=-1)),c.swell=xt(c.swell,g,12,e);let p=150,m=10;c.vrz+=((u-c.rz)*p-c.vrz*m)*e,c.rz+=c.vrz*e,c.vrx+=((d-c.rx)*p-c.vrx*m)*e,c.rx+=c.vrx*e,c.vry+=((0-c.ry)*p-c.vry*m)*e,c.ry+=c.vry*e,c.vhop-=2400*e,c.hop+=c.vhop*e,c.hop<0&&(c.vhop<-160?c.vhop=-c.vhop*.3:(c.hop=0,c.vhop=0));let x=r?0:Math.sin(t*1.4+c.seed)*1.1,v=r?0:o*(.5+.5*Math.sin(t*4.6-c.home.x*.013+c.line*1.3))*3.4;h.position.set(c.home.x,c.home.y+c.hop+x+v+f*.4,c.home.z),h.rotation.set(c.rx,c.ry,c.rz),h.scale.setScalar(1+c.swell)}}wave(e=0,t=1500){for(let i of this.letters)i.landed&&(i.waveDelay=Math.abs(i.home.x-e)/t+i.line*.04)}impact(e){this.fx&&this.fx.dust&&this.fx.dust([e.home.x,e.home.y,e.home.z+24],4)}poke(e){let t=null,i=70,n=this.off;for(let r of this.letters){let o,a;e.point?(Mc(e,r.home.x,r.home.y+r.cap/2,r.home.z,n),o=n.dx,a=n.dy):(o=r.home.x-e.x,a=r.home.y+r.cap/2-e.y);let l=Math.hypot(o,a);l<i&&r.landed&&(i=l,t=r)}return t?(t.vhop=760,t.vrz+=(this.random()-.5)*22,t.vrx+=(this.random()-.5)*8,t.vry+=(this.random()-.5)*14,t.hop=1,this.fx&&this.fx.dust&&this.fx.dust([t.home.x,t.home.y+10,t.home.z+20],10),t):!1}dispose(){this.clear()}},bc=class{constructor(e,t=Ut(5)){this.Core=e,this.random=t,this.idCounter=0,this.order=[],this.next=0,this.ballot=null,this.speedBase=150,this.manualLeft=0,this.lastDrop=null,this.dropCount=0,this.finaleDrop=!1,this.reset()}get manual(){return this.manualLeft>0}nextEffect(){let e=this.Core.SABOTAGE_IDS||Wo;if(!this.order.length||this.next>=this.order.length){this.order=e.slice();for(let t=this.order.length-1;t>0;t-=1){let i=Math.floor(this.random()*(t+1));[this.order[t],this.order[i]]=[this.order[i],this.order[t]]}this.next=0}return this.order[this.next++]}reset(){this.id=`attract-${++this.idCounter}`;let e=this.Core;this.blocks=[e.makeBase()],this.fallen=[],this.moving=null,this.effect=null,this.phase="playing",this.collapsed=!1,this.timer=0,this.stage="stack",this.stageTimer=0,this.target=11+Math.floor(this.random()*3),this.voteAt=5+Math.floor(this.random()*2),this.ballot=null,this.pendingFail=!1,this.voted=!1,this.forced=this.forced||null,this.toppleLeft=0,this.spawnMover(),this.dropOffset=this.pickOffset()}pickOffset(){return this.random()<.58?0:(this.random()<.5?-1:1)*(6+this.random()*26)}spawnMover(){let e=this.Core,t=this.blocks[this.blocks.length-1],i=Math.max(e.MIN_WIDTH,t.right-t.left),n=this.blocks.length,r=n%2===1,o=e.PALETTE||["#E3A33B","#2F8478","#7FA6BD","#D5472F"],a={left:r?0:360-i,width:i,direction:r?1:-1,level:n,fromLeft:r,color:o[n%o.length],rollerPhase:n*.38196601125%1};this.effect&&this.effect.id==="double"&&e.createShellDecoy&&(a.decoy=e.createShellDecoy(a)),this.moving=a,this.maxWidth=i,this.blockClock=0}speed(){let e=this.effect?this.effect.id:"",t=this.speedBase+this.blocks.length*5;return e==="turbo"?t*=1.9:e==="slowmo"?t*=.5:e==="drunk"?t*=1+.7*Math.sin(this.timer*3.1):e==="rollercoaster"&&(t*=1+.4*Math.sin(this.timer*2.6)),t}force(e){if(this.forced=e,this.ballot){let t=this.ballot.options,i=t.indexOf(e);i>0&&(t[i]=t[0]),t[0]=e,this.ballot.winner=e,this.forced=null}else this.effect&&(this.effect.remaining=Math.min(this.effect.remaining,.3))}startEffect(e){this.effect={id:e,elapsed:0,remaining:4.6,duration:4.6,tiltDirection:this.random()<.5?-1:1,spotlightSide:this.random()<.5?-1:1,windDirection:this.random()<.5?-1:1,dropsRemaining:3},e==="double"&&this.moving&&this.Core.createShellDecoy&&(this.moving.decoy=this.Core.createShellDecoy(this.moving)),this.pendingFail=!0}update(e,t=!1){this.timer+=e;let i=this.Core;this.manualLeft>0&&(this.manualLeft=Math.max(0,this.manualLeft-e));let n=this.manualLeft>0;if(this.stage==="collapse"){this.stageTimer+=e,this.stageTimer>3.2&&this.reset();return}if(this.forced&&!this.ballot&&!this.effect){let p=this.forced;this.forced=null,this.startEffect(p)}if(this.stage==="vote"){this.stageTimer+=e;let p=this.stageTimer,m=this.ballot.fractions;for(let x=0;x<3;x+=1)m[x]=be(this.ballot.base[x]*(.4+p*.5)+Math.sin(p*5+x*2)*.05,.02,1);if(this.ballot.voted=be(p/1.7),p>2.4){let x=this.ballot.winner;this.ballot=null,this.stage="stack",this.stageTimer=0,this.startEffect(x)}if(!n)return}this.effect&&(this.effect.elapsed+=e,this.effect.remaining-=e,this.effect.remaining<=0&&(this.effect=null,this.moving&&delete this.moving.decoy));let r=this.moving;if(!r)return;this.blockClock+=e;let o=this.effect?this.effect.id:"";if(o==="accordion"){let p=this.maxWidth*(.72+.28*Math.sin(this.effect.elapsed*3.4)),m=r.left+r.width/2;r.width=Math.max(i.MIN_WIDTH,p),r.left=m-r.width/2}let a=this.speed(),l=r.left+r.width/2;r.left+=r.direction*a*e,o==="portal"?(r.left>360&&(r.left-=360),r.left+r.width<0&&(r.left+=360)):(r.left<=0&&(r.left=0,r.direction=1),r.left+r.width>=360&&(r.left=360-r.width,r.direction=-1));let c=this.blocks[this.blocks.length-1],h=(c.left+c.right)/2,u=r.left+r.width/2,d=h+this.dropOffset,f=(l-d)*(u-d)<=0&&Math.abs(u-l)<40;if(this.pendingFail&&!this.effect&&this.blocks.length>=this.voteAt+1&&!n&&this.blockClock>.6){(r.left<=1||r.left+r.width>=359)&&this.drop(!0);return}if(this.toppleLeft>0&&(this.toppleLeft-=e,this.toppleLeft<=0)){this.finaleDrop=!0,this.drop(!0);return}!n&&this.blockClock>(this.effect?.9:1.15)&&f&&this.drop(!1),!this.effect&&!this.pendingFail&&this.blocks.length>=this.voteAt&&this.stage==="stack"&&this.blockClock<.2&&!this.voted&&this.openVote()}openVote(){this.voted=!0;let e=this.forced||this.nextEffect();this.forced=null;let t=[.25+this.random()*.2,.2+this.random()*.2,.2+this.random()*.2],i=this.Core.SABOTAGE_IDS||Wo,n=[e,...i.filter(r=>r!==e).sort(()=>this.random()-.5).slice(0,2)];this.ballot={options:n,base:t,fractions:t.slice(),voted:0,winner:e},this.stage="vote",this.stageTimer=0}drop(e){let t=this.Core,i=this.moving,n=this.blocks[this.blocks.length-1],r=this.blocks.length,o=this.effect?this.effect.id:"",a=(n.left+n.right)/2,l=this.manual,c=t.placeDrop(n,e?{...i,left:i.left+i.width/2<a?n.left-i.width-4:n.right+4}:i,{perfectWindow:o==="superglue"?14:l?G3:3,level:r,color:i.color,placer:"You",crumble:o==="crumble"});for(let f of c.fallen)this.fallen.push({...f});let h=c.status==="miss"||e&&!c.placed,u=h?"miss":c.perfect?"perfect":c.fallen.length?"trim":"ok",d=!!this.finaleDrop;return this.finaleDrop=!1,this.lastDrop={n:++this.dropCount,result:u,level:r,centre:i.left+i.width/2,manual:l,finale:d},h?(this.phase="collapse",this.collapsed=!0,this.collapseStartLevel=Math.max(0,this.blocks.length-6),this.moving=null,this.stage="collapse",this.stageTimer=0,this.effect=null,u):(this.blocks.push(c.placed),this.dropOffset=this.pickOffset(),this.blocks.length>=this.target&&!this.pendingFail&&(this.pendingFail=!0),l&&this.blocks.length>=this.target&&!this.toppleLeft&&(this.lastDrop.complete=!0,this.toppleLeft=2.1),this.spawnMover(),u)}playerDrop(){return this.stage==="collapse"||!this.moving||this.phase!=="playing"||this.blockClock<.18||this.toppleLeft>0?"":(this.manualLeft=k3,this.drop(!1))}state(e,t){return{id:this.id,blocks:this.blocks,fallen:this.fallen,moving:this.moving,effect:this.effect,helpers:e,phase:this.phase,collapsed:this.collapsed,collapseStartLevel:this.collapseStartLevel,reduced:t,teamPlacers:!1}}},Ec=class{constructor(e,t,i){this.theme=e,this.palette=t,this.group=new ae,this.items=[],this.hover=-1,this.t=0;let n=i&&i.length?i.map(r=>r.id):Wo;n.forEach((r,o)=>{let a=Xo(r,e),l=new ae;l.add(a);let c=new ne(new at(46,8,6),new mt({visible:!1}));c.userData.index=o,l.add(c);let h=i&&i.find(u=>u.id===r);this.group.add(l),this.items.push({id:r,holder:l,icon:a,proxy:c,name:h?h.name:r,angle:o/n.length*Ke,scale:1.5,spin:0,lift:0,seed:o*1.7})}),this.proxies=this.items.map(r=>r.proxy)}update(e,t,i,n={}){let r=n.yaw||0,o=Math.sin(r),a=Math.cos(r),l=!i&&n.pointer&&n.energy>.01?n.pointer:null,c=n.energy||0,h=352,u=215,d=-26,f=this.off||(this.off={dx:0,dy:0}),g=0;this.items.forEach(p=>{p.mag=0,l&&(Mc(l,p.holder.position.x,p.holder.position.y+24,p.holder.position.z,f),p.mag=_i(330,50,Math.hypot(f.dx,f.dy))*c,p.dxs=f.dx,g=Math.max(g,p.mag))}),this.slow=xt(this.slow===void 0?1:this.slow,1-.85*g,7,e),this.t+=e*(i?.25:1)*this.slow,this.items.forEach((p,m)=>{let x=p.angle+this.t*.13,v=this.hover===m;p.scale=xt(p.scale,v?2.3:1.5+p.mag*.45,9,e),p.lift=xt(p.lift,v?34:p.mag*16,8,e),p.tilt=xt(p.tilt||0,v?0:-Math.sign(p.dxs||0)*p.mag*.4,9,e),p.spin+=e*(v?2.8:.5+p.mag*1.2);let M=Math.cos(x)*h,y=Math.sin(x)*u+20;p.holder.position.set(M,d+p.lift+(i?0:Math.sin(t*1.3+p.seed)*5),y),p.holder.scale.setScalar(p.scale*(1+(M*o+y*a)/1800)),p.icon.rotation.y=p.spin+x*.3,p.icon.rotation.x=.1,p.icon.rotation.z=p.tilt})}pick(e){let t=e.intersectObjects(this.proxies,!1)[0];return t?t.object.userData.index:-1}dispose(){for(let e of this.items)e.icon.userData.dispose(),e.proxy.geometry.dispose(),e.proxy.material.dispose()}};var Ep="sabotage-stack-orbit-hint-v1",bp={left:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',right:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',reset:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12a7 7 0 1 0 2.2-5.1M5 4.5v4h4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',drop:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4.5" y="14" width="15" height="6" rx="1.6" fill="currentColor"/><path d="M12 3.5v7.5M8.4 7.6l3.6 3.6 3.6-3.6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',sabotage:'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.4 2.5 5 13.6h6l-1.2 7.9 8.6-11.6h-6z" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>'};function Y3(s){try{return!!(s&&s.getItem(Ep))}catch{return!1}}function Z3(s){try{s&&s.setItem(Ep,"1")}catch{}}function gu({doc:s=document,storage:e=null,touch:t=!1,hostId:i="title-screen",id:n="orbit-hud",dock:r=!0,onTurn:o=()=>{},onReset:a=()=>{},onToy:l=()=>{}}={}){let c=s.getElementById(i);if(!c)return null;let h=s.createElement("div");h.id=n,h.className="orbit-hud",h.setAttribute("role","group"),h.setAttribute("aria-label","3D view controls"),Y3(e)&&h.classList.add("is-quiet");let u=s.createElement("p");u.className="orbit-hint",u.innerHTML=t?'<span class="orbit-hint-full">Swipe sideways to turn the scene</span><span class="orbit-hint-short">Swipe to turn</span>':'<span class="orbit-hint-full"><b>Drag</b> with left or right click to turn the scene. Double-click resets.</span><span class="orbit-hint-short"><b>Drag</b> to turn</span>';let d=(S,E,_)=>{let b=s.createElement("button");return b.type="button",b.className="button orbit-btn",b.dataset.orbit=S,b.setAttribute("aria-label",E),b.title=E,b.innerHTML=bp[S],b.addEventListener("click",_),b},f=d("left","Turn the 3D scene left",()=>o(-Math.PI/4)),g=d("reset","Reset the 3D view",()=>a()),p=d("right","Turn the 3D scene right",()=>o(Math.PI/4)),m=s.createElement("div");m.className="orbit-row",m.append(u,f,g,p);let x=s.createElement("div");x.className="toy-dock",x.setAttribute("role","group"),x.setAttribute("aria-label","Play with the tower");let v=(S,E,_,b)=>{let I=s.createElement("button");return I.type="button",I.className=S==="drop"?"button button-primary toy-key":"button toy-key",I.dataset.toy=S,I.title=b,I.innerHTML=`${bp[S]}<span class="toy-full">${E}</span><span class="toy-short">${_}</span>`,I.addEventListener("click",()=>l(S)),I};x.append(v("drop","Drop block","Drop","Drop the moving block (or click the tower)"),v("sabotage","Trigger sabotage","Sabotage","Call a random sabotage down on the tower")),r?h.append(x,m):h.append(m),c.appendChild(h);let M=NaN,y=NaN;return{root:h,place(S,E){Math.abs(S-M)<.75&&Math.abs(E-y)<.75||(M=S,y=E,h.style.left=`${Math.round(S)}px`,h.style.top=`${Math.round(E)}px`)},setRotated(S){h.classList.toggle("is-rotated",!!S)},quiet(){h.classList.add("is-quiet"),Z3(e)},fade(){h.classList.add("is-quiet")},dispose(){h.remove()}}}var tn=1.9;function wc(s){let e=s%2===0?-1:1,t=Math.floor(s/2);return{x:e*(115+t*55),z:55-t*52}}var wp=s=>({paper:76,sunset:44,primetime:58}[s]||76)*tn,$3=s=>s<1/2.75?7.5625*s*s:s<2/2.75?(s-=1.5/2.75,7.5625*s*s+.75):s<2.5/2.75?(s-=2.25/2.75,7.5625*s*s+.9375):(s-=2.625/2.75,7.5625*s*s+.984375),Tc=class{constructor(e,t){this.theme=e,this.palette=t,this.group=new ae,this.group.visible=!1,this.items=new Map,this.figure=au(e),this.eye=Bo[e]||Bo.paper,this.eyeGeometry=new at(1,12,9),this.pupilGeometry=new at(1,10,7),this.ringGeometry=new Ai(29,34,56),this.pulseGeometry=new Ai(30,32.5,56),this.beamGeometry=new gt(25,31,190,28,1,!0),this.eyeMaterial=new Ue({color:"#ffffff",roughness:.2,emissive:"#ffffff",emissiveIntensity:.3,flatShading:e==="sunset"}),this.pupilMaterial=new Ue({color:"#15111c",roughness:.3}),this.disposables=[]}bodyMaterial(e){let t=new Se(e);return this.theme==="sunset"?new Ue({color:t,roughness:.7,flatShading:!0,emissive:t,emissiveIntensity:.28}):this.theme==="primetime"?new Nt({color:t,roughness:.25,metalness:.35,clearcoat:1,emissive:t,emissiveIntensity:.12}):new Nt({color:t,roughness:.55,clearcoat:.6,clearcoatRoughness:.35,emissive:t,emissiveIntensity:.06})}add(e,t,i,n){let r=In(this.theme,t||"#E3A33B"),o=new ae,a=new ne(this.figure,this.bodyMaterial(r));a.scale.setScalar(tn),a.castShadow=!0,o.add(a);let l=[],c=[];for(let M of[-1,1]){let y=new ne(this.eyeGeometry,this.eyeMaterial);y.position.set(M*this.eye.x*tn,this.eye.y*tn,this.eye.z*tn),y.scale.setScalar(this.eye.r*tn),o.add(y),l.push(y);let S=new ne(this.pupilGeometry,this.pupilMaterial);S.scale.setScalar(this.eye.r*tn*.52),o.add(S),c.push(S)}let h=new Se(r).multiplyScalar(1.7),u=new mt({color:h,transparent:!0,opacity:.7,side:ht,toneMapped:!1,depthWrite:!1}),d=new ne(this.ringGeometry,u);d.rotation.x=-Math.PI/2,d.position.y=1.2,o.add(d);let f=u.clone(),g=new ne(this.pulseGeometry,f);g.rotation.x=-Math.PI/2,g.position.y=1.4,o.add(g);let p=new mt({color:h,transparent:!0,opacity:.12,side:ht,blending:kt,toneMapped:!1,depthWrite:!1}),m=new ne(this.beamGeometry,p);m.position.y=95,o.add(m),this.group.add(o);let x=wc(n),v={id:e,color:t,group:o,body:a,eyes:l,pupils:c,ring:d,pulse:g,beam:m,ringMaterial:u,pulseMaterial:f,beamMaterial:p,bodyMaterial:a.material,born:i,leaving:-1,ready:!1,x:x.x,z:x.z,seed:(this.items.size+1)*1.93,px:0,py:0,vx:0,vy:0,glowLevel:0};return this.items.set(e,v),v}remove(e){this.group.remove(e.group),e.bodyMaterial.dispose(),e.ringMaterial.dispose(),e.pulseMaterial.dispose(),e.beamMaterial.dispose(),this.items.delete(e.id)}sync(e,t,i,n={x:0,y:0},r=!1){let o=new Set;e.slice(0,6).forEach((l,c)=>{let h=String(l.id||l.playerId||`${c}:${l.name}`);o.add(h);let u=this.items.get(h)||this.add(h,l.color,i,c);u.leaving=-1,u.ready=!!l.ready,u.index=c});for(let l of[...this.items.values()])if(!o.has(l.id)&&(l.leaving<0&&(l.leaving=i),i-l.leaving>.45)){this.remove(l);continue}let a=Math.min(t,.033);for(let l of this.items.values()){let c=wc(l.index||0);l.x=r?c.x:xt(l.x,c.x,6,t),l.z=r?c.z:xt(l.z,c.z,6,t);let h=i-l.born,u=r?1:be(h/.95),d=l.leaving<0?0:be((i-l.leaving)/.45),f=(1-$3(u))*260,g=(.35+.65*ur(be(u*1.6)))*(1-d*d);l.glowLevel=xt(l.glowLevel,l.ready?1:0,5,t);let p=r?0:l.ready?Math.max(0,Math.sin(i*5.5+l.seed))*9:0,m=r?0:Math.sin(i*2+l.seed)*2.2;l.group.position.set(l.x,f+p+m*.5,l.z),l.group.scale.setScalar(Math.max(.001,g)),l.group.rotation.y=r?0:Math.sin(i*1.3+l.seed)*.12+be(l.x/900,-.3,.3)*-1;let x=1+(r?0:.07*Math.sin(i*(3+l.glowLevel*2.5)+l.seed));l.ring.scale.setScalar(x),l.ringMaterial.opacity=(.5+.2*l.glowLevel+(r?0:.15*Math.sin(i*3+l.seed)))*(1-d);let v=r?.4:(i*(.55+.35*l.glowLevel)+l.seed)%1;l.pulse.scale.setScalar(1+v*1.15),l.pulseMaterial.opacity=(1-v)*(.35+.35*l.glowLevel)*(1-d),l.beamMaterial.opacity=(.07+.11*l.glowLevel+(r?0:.02*Math.sin(i*4+l.seed)))*(1-d),l.beam.scale.y=.6+.4*(l.ready?1:.55);let M=be(n.x*1.3,-1,1),y=be(n.y*1.1-.15,-1,1);l.vx+=((M-l.px)*70-l.vx*6)*a,l.vy+=((y-l.py)*70-l.vy*6)*a,l.px+=l.vx*a,l.py+=l.vy*a;let S=be(l.px,-1.2,1.2)*.5,E=be(l.py,-1.2,1.2)*.5,_=Math.sqrt(Math.max(.12,1-S*S-E*E))*.78,b=r?1:(i+l.seed*2.1)%3.7<.12?.12:1;[-1,1].forEach((I,A)=>{let D=this.eye.r*tn;l.eyes[A].scale.set(D,D*b,D),l.pupils[A].position.set(I*this.eye.x*tn+S*D,this.eye.y*tn+E*D*b,this.eye.z*tn+_*D),l.pupils[A].scale.set(D*.52,D*.52*b,D*.52)})}}dispose(){for(let e of[...this.items.values()])this.remove(e);for(let e of[this.figure,this.eyeGeometry,this.pupilGeometry,this.ringGeometry,this.pulseGeometry,this.beamGeometry])e.dispose();this.eyeMaterial.dispose(),this.pupilMaterial.dispose()}};var Tp=["#E5322D","#2EC4B6","#3B6BFF","#B983FF","#FF8FAB"];function Ap(s){let e=s==="sunset",t=e?10:36,i=new ae,n=[],r=l=>(n.push(l),l),o=r(s==="sunset"?new Ue({color:"#FFC53D",metalness:.5,roughness:.4,flatShading:!0,emissive:"#FF9A1F",emissiveIntensity:.55}):new Nt({color:"#FFC83D",metalness:1,roughness:.24,clearcoat:.6,emissive:"#8A5A00",emissiveIntensity:.4,envMapIntensity:1.6,side:ht}));o.side=ht;let a=(l,c,h,u,d)=>{let f=new ne(r(l),c);return f.position.set(h,u,d),f.castShadow=!1,i.add(f),f};a(new gt(25,21.5,17,t,1,!0),o,0,0,0);for(let l of[-8.5,8.5]){let c=a(new bt(l>0?25:21.5,2.1,8,t),o,0,l,0);c.rotation.x=Math.PI/2}for(let l=0;l<5;l+=1){let c=l/5*Math.PI*2,h=Math.sin(c)*24,u=Math.cos(c)*24;a(new Jt(7.4,28,e?4:16),o,h,8.5+14,u),a(new at(4.4,e?6:14,e?4:10),o,h,8.5+29.5,u);let d=r(new Ue({color:Tp[l],roughness:.15,metalness:.2,emissive:Tp[l],emissiveIntensity:.9,flatShading:e}));a(new at(3.6,e?5:12,e?4:9),d,Math.sin(c+.63)*25.3,0,Math.cos(c+.63)*25.3)}return i.userData.dispose=()=>{for(let l of n)l.dispose()},i.userData.height=8.5+34,i}function Rp(s,e,t=!1){let i=s<=0?0:s>=.8?1:(()=>{let n=s/.8;return 1+2.7*Math.pow(n-1,3)+1.7*Math.pow(n-1,2)})();return{scale:Math.max(0,i),spin:t?.5:e*1.35,bob:t?0:Math.sin(e*2.2)*4,tilt:t?.1:Math.sin(e*1.6)*.07+.1}}var J3=7.5,K3=.9;function Cp(s){let e=[];if(s&&s.mode==="teamwork")e.push({key:"team",name:"The crew",color:"#E3A33B",blocks:s.blocks||[],fallen:s.fallen||[],height:Number(s.height)||0,winner:!0,team:!0,score:Number(s.score)||0});else if(s){let i=new Set(s.winnerIds||[]);(s.players||[]).forEach((n,r)=>e.push({key:String(n.id!=null?n.id:r),name:String(n.name||"Player"),color:n.color,blocks:n.blocks||[],fallen:n.fallen||[],height:Number(n.height)||0,winner:i.has(n.id),team:!1,score:0}))}let t=j3(e.length);return e.forEach((i,n)=>{i.slot=t[n]}),e}function j3(s){let e=Array.from({length:s},(i,n)=>n===0?0:(n%2?-1:1)*Math.ceil(n/2)),t=s?(Math.min(...e)+Math.max(...e))/2:0;return e.map(i=>i-t)}function Pp(s,e){let t=s<=1?560:s===2?640:760,i=t/Math.max(1,s),n=Math.max(0,e-1),r=be(Math.min(i/400,400/((n+2)*22)),.07,1);return{worldW:t,colW:i,scale:r,maxHeight:n}}function Ip(s,e,{reduced:t=!1,rate:i=J3,delay:n=K3}={}){return e<=0?0:t?e:be(Math.floor((s-n)*i)+1,1,e)}function Dp(s,e,t){let i=0;for(;i<s.length;){let n=s[i];if(e>=t||Number.isInteger(n.level)&&n.level<=e-1)i+=1;else break}return i}function qp(s,e=t=>String(t).toUpperCase()){if(!s.length)return"";if(s[0].team)return s[0].score>0?`TEAM SCORE ${s[0].score}`:"THE FLOOR WINS";let t=s.filter(i=>i.winner);return t.length===1?`${e(t[0].name.slice(0,12))||"CHAMPION"} WINS`:"A TIE AT THE TOP"}var Ss=360,xu=[.82,.74,.6],Ac='button, a, select, input, textarea, label, dialog, summary, [role="button"]',vu=".side-card, .play-card, .result-info, .preview-card, .home-copy, .home-bottom, .topbar, .footer-note, .orbit-hud",Lp={paper:{light:"#FFD9A0",power:52e3,sparkles:["#E3A33B","#2F8478","#D5472F","#FFF1D0","#C96F8A"]},sunset:{light:"#FF6BE0",power:76e3,sparkles:["#FF4FD8","#2EE6D6","#FFC53D","#B983FF"]},primetime:{light:"#CFE0FF",power:64e3,sparkles:["#FFC83D","#FFFFFF","#35D0E8","#FF7FA8"]}},bs=(s,e)=>!!(s&&s.closest&&s.closest(e)),_u=new WeakMap,Q3=0,e5=s=>(_u.has(s)||_u.set(s,++Q3),_u.get(s)),Rc=class{constructor({canvas:e,host:t,tier:i=null,scale:n=1}){this.host=t,this.canvas=e,this.time=0,this.last=0,this.mode="",this.modeTime=0;let r=t.view();this.theme=dr(r.theme),this.engine=new oc({canvas:e,theme:this.theme,reducedMotion:r.reduced,forcedTier:i}),n!==1&&(this.engine.scale=n,this.engine.forcedTier=!0),this.scene=this.engine.scene,this.camera=this.engine.camera,this.fx={sparks:new Vo(1800),glints:new Vo(260),confetti:new pc(420),pulses:new mc(12),dust:(o,a=6)=>this.fx.sparks.burst({pos:o,count:a,speed:70,spread:1,color:xu,size:16,life:.9,gravity:10,up:.5,drag:1.5,alpha:.34,growth:16})},this.scene.add(this.fx.sparks.points,this.fx.glints.points,this.fx.confetti.mesh,this.fx.pulses.group),this.pointer={x:0,y:0,px:0,py:0,speed:0,inside:!1,lastX:0,lastY:0,lastT:0,ndc:new ee},this.raycaster=new mo,this.plane=new di(new P(0,0,1),40),this.rig={yaw:0,pitch:.1,zoom:1,roll:0,kick:new sc(0,220,14),shakeAmp:0,shakeT:0,focusY:220,intro:0},this.timeScale=1,this.slowT=0,this.flash=0,this.desatPulse=0,this.caPulse=0,this.towers={},this.arena=[],this.lastEffectKey="",this.badge=null,this.labels=[],this.heroLayout="",this.introDone=!1,this.heroHover=-1,this.orbit=new lc,this.hover=new yc,this.drag=null,this.dragBlend=0,this.cursor="",this.hud=null,this.resultsHud=null,this.resultsHintAge=0,this.hintAge=0,this.idleFor=0,this.contextGuardUntil=0,this.toyRect=null,this.toySeen=0,this.calloutSide=1,this.pointerFrame=null,this.lastRipple=0,this.cameraRay=new P,this.groundPlane=new di(new P(0,1,0),60),this.cursorLight=new hs("#FFD9A0",0,900,1.8),this.cursorLight.name="cursor-light",this.scene.add(this.cursorLight),this.buildTheme(this.theme),this.engine.on("tier",o=>this.applyTier(o)),this.engine.on("restored",()=>this.buildTheme(this.theme,!0)),window.addEventListener("pointermove",this.onPointerMove=o=>this.handleMove(o),{passive:!0}),window.addEventListener("pointerdown",this.onPointerDown=o=>this.handleDown(o),{passive:!0}),window.addEventListener("pointerup",this.onPointerUp=o=>this.handleUp(o),{passive:!0}),window.addEventListener("pointercancel",this.onPointerCancel=o=>this.handleUp(o,!0),{passive:!0}),document.documentElement.addEventListener("pointerleave",this.onPointerLeave=()=>{this.pointer.inside=!1}),window.addEventListener("blur",this.onBlur=()=>{this.pointer.inside=!1,this.endDrag(!0)}),window.addEventListener("contextmenu",this.onContextMenu=o=>{if(!this.canOrbit())return;(this.drag&&this.drag.button===2||performance.now()<this.contextGuardUntil||!bs(o.target,Ac)&&!bs(o.target,vu))&&o.preventDefault()}),window.addEventListener("dblclick",this.onDoubleClick=o=>{this.canOrbit()&&!bs(o.target,Ac)&&!bs(o.target,vu)&&this.orbit.reset()}),window.addEventListener("keydown",this.onKeyDown=o=>this.handleKey(o)),this.applyTier(this.engine.tier)}applyTier(e){this.fx.sparks.density=e.particles,this.fx.glints.density=e.particles,this.fx.confetti.density=e.particles,this.world&&this.world.setCrowdDensity(e.crowd),this.world&&this.world.lights.key.shadow.mapSize.width!==e.shadow&&(this.world.lights.key.shadow.mapSize.set(e.shadow,e.shadow),this.world.lights.key.shadow.map&&(this.world.lights.key.shadow.map.dispose(),this.world.lights.key.shadow.map=null))}buildTheme(e,t=!1){this.world&&(this.scene.remove(this.world.root),this.world.dispose()),this.theme=e,this.engine.setTheme(e),this.palette=this.engine.palette;let i=Lp[e]||Lp.paper;this.cursorLight.color.set(i.light),this.cursorLightPower=i.power,this.sparkleColors=i.sparkles.map(a=>{let l=new Se(a);return[l.r,l.g,l.b]});let n=this.fx.glints.material,r=e==="paper"?Xn:kt;n.blending!==r&&(n.blending=r,n.needsUpdate=!0),this.glintBoost=e==="paper"?1:1.7,this.kit&&this.kit.dispose(),this.kit=new gr(e),this.world=sp(e,this.engine,{crowdDensity:this.engine.tier.crowd}),this.scene.add(this.world.root),this.scene.fog=this.world.fog,this.scene.environment=this.world.envTexture,this.scene.environmentIntensity=e==="paper"?.7:.85,this.scene.background=null,this.popups&&(this.scene.remove(this.popups.group),this.popups.clear()),this.popups=new vc(e,this.palette),this.scene.add(this.popups.group),this.ruler&&(this.scene.remove(this.ruler.group),this.ruler.dispose()),this.ruler=new _c(e,this.palette),this.scene.add(this.ruler.group),this.totems&&(this.scene.remove(this.totems.group),this.totems.dispose()),this.totems=new Tc(e,this.palette),this.scene.add(this.totems.group),this.crown&&(this.scene.remove(this.crown),this.crown.userData.dispose()),this.crown=Ap(e),this.crown.visible=!1,this.scene.add(this.crown),this.lastCrownSpark=0,this.title&&(this.scene.remove(this.title.group),this.title.dispose()),this.title=new Sc(e,this.palette,this.fx),this.scene.add(this.title.group),this.heroLayout="",this.arsenal&&(this.scene.remove(this.arsenal.group),this.arsenal.dispose());let o=this.host.view();this.arsenal=new Ec(e,this.palette,window.SabotageStack&&window.SabotageStack.sabotages),this.scene.add(this.arsenal.group);for(let a of Object.values(this.towers))a.setKit(this.kit);for(let a of this.arena)a.setKit(this.kit);this.removeBadge(),this.labels.forEach(a=>{this.scene.remove(a.mesh),a.mesh.material.map.dispose(),a.mesh.material.dispose(),a.mesh.geometry.dispose()}),this.labels.length=0,this.applyTier(this.engine.tier),this.mode=""}getTower(e,t){if(!this.towers[e]){let i=new _r(this.kit,this.fx,t);this.scene.add(i.root),this.towers[e]=i,this.wireTower(i,e)}return this.towers[e]}wireTower(e,t){e.on("land",({position:i,width:n,level:r})=>{let o=[i.x,i.y+2,i.z];this.fx.sparks.burst({pos:[o[0]-n/2,o[1],o[2]],count:4,speed:55,spread:1,color:xu,size:10,life:.7,gravity:8,up:.2,drag:2,alpha:.4,growth:12,direction:[-1.2,.1,.4]}),this.fx.sparks.burst({pos:[o[0]+n/2,o[1],o[2]],count:4,speed:55,spread:1,color:xu,size:10,life:.7,gravity:8,up:.2,drag:2,alpha:.4,growth:12,direction:[1.2,.1,.4]}),t!=="arena"&&(this.rig.kick.velocity-=70)}),e.on("perfect",({position:i,width:n,level:r})=>{let o=this.palette.amber,a=new Se(o);this.fx.pulses.pulse({pos:[i.x,i.y+1,i.z-20],color:o,radius:Math.max(120,n*.9),life:.8,from:.15,strength:1.5}),this.fx.sparks.burst({pos:[i.x,i.y+6,i.z],count:26,speed:190,spread:1,color:[a.r*1.6,a.g*1.6,a.b*1.6],size:6.5,life:.95,gravity:-220,up:.7,drag:1.1}),this.world.crowd.cheer(.9),this.waveDir=-(this.waveDir||1),this.world.crowd.wave(this.waveDir,{gap:this.mode==="hero"?9:3.2}),!(t==="arena"||this.mode==="hero"&&!this.toyLive())&&(this.reduced||(this.flash=Math.max(this.flash,.09)),this.popups.show({text:"PERFECT!",position:[be(i.x,-90,90),i.y+52,96],size:30,depth:9,color:o,glow:.9,style:"slam",life:1.15,tilt:(Math.random()-.5)*.18}),this.reduced||this.fx.confetti.burst({pos:[i.x,i.y+8,i.z],count:22,speed:230,colors:this.confettiColors(),size:6.5,life:2.4,cone:.9}))}),e.on("impact",({position:i,width:n,speed:r})=>{r>90&&(this.fx.dust([i.x,i.y+4,i.z],5),r>280&&(this.rig.kick.velocity-=20))}),e.on("collapse",({top:i})=>{if(t==="arena"){this.world.crowd.cheer(.5);return}this.slowT=.62,this.timeScale=.32,this.rig.shakeAmp=this.reduced?0:16,this.rig.shakeT=0,this.reduced||(this.flash=Math.max(this.flash,.26),this.caPulse=1,this.desatPulse=1);let n=i||new P(0,200,0),r=new Se(this.palette.vermilion);this.fx.sparks.burst({pos:[n.x,n.y,40],count:60,speed:260,spread:1,color:[r.r*1.4,r.g*1.4,r.b*1.4],size:7,life:1.1,gravity:-300,up:.5,drag:1.2}),this.fx.dust([n.x,n.y,40],22),this.fx.dust([0,6,50],16),this.fx.pulses.pulse({pos:[0,2,0],color:this.palette.vermilion,radius:330,life:1,from:.3,strength:1.2}),(t==="play"||t==="hero"&&this.toyLive())&&this.popups.show({text:"TIMBER!",position:[0,n.y+40,100],size:40,depth:12,color:this.palette.vermilion,glow:.9,style:"slam",life:1.5,tilt:-.08}),this.world.crowd.cheer(1.6)})}watch(e,t,i=0,n=1,r=0){let o=Math.cos(r),a=Math.sin(r);this.world.crowd.setGaze(o*e-a*i,t,a*e+o*i+90,n)}confettiColors(){return this.theme==="paper"?["#E3A33B","#2F8478","#7FA6BD","#D5472F","#C96F8A"]:this.theme==="sunset"?["#FFC53D","#2EC4B6","#9B5DE5","#FF5964","#FF8FAB"]:["#FFC83D","#35D0E8","#F2F5FF","#E5322D","#FF7FA8"]}handlePointer(e){let t=this.pointer,i=performance.now(),n=window.innerWidth,r=window.innerHeight,o=Math.max(1,i-t.lastT),a=Math.hypot(e.clientX-t.lastX,e.clientY-t.lastY)/o*1e3;t.speed=Math.min(5e3,Math.max(a,t.speed*.6)),t.lastX=e.clientX,t.lastY=e.clientY,t.lastT=i,t.x=e.clientX/n*2-1,t.y=-(e.clientY/r*2-1),t.ndc.set(t.x,t.y),t.inside=!0,t.touch=e.pointerType==="touch",t.overUi=bs(e.target,Ac)||bs(e.target,vu)}handleMove(e){this.handlePointer(e),this.idleFor=0;let t=this.drag;if(!(!t||e.pointerId!==t.id)){if(e.pointerType==="mouse"&&e.buttons===0){this.endDrag(!1,e);return}!t.moved&&Math.hypot(e.clientX-t.x,e.clientY-t.y)>this.orbit.tapSlop&&(t.moved=!0),this.orbit.move(e.clientX,e.clientY,e.timeStamp/1e3,{pitch:!t.touch})}}handleDown(e){if(this.handlePointer(e),this.idleFor=0,!this.canOrbit()||this.drag||!e.isPrimary||e.button!==0&&e.button!==2||this.pointer.overUi)return;this.drag={id:e.pointerId,x:e.clientX,y:e.clientY,t:e.timeStamp,button:e.button,moved:!1,touch:e.pointerType==="touch"},this.orbit.begin(e.clientX,e.clientY,e.timeStamp/1e3),document.documentElement.classList.add("orbiting");let t=window.getSelection&&window.getSelection();t&&t.removeAllRanges&&t.removeAllRanges()}handleUp(e,t=!1){let i=this.drag;!i||e.pointerId!==i.id||(e.pointerType==="touch"&&(this.pointer.inside=!1),this.endDrag(t,e))}endDrag(e=!1,t=null){let i=this.drag;if(i){if(this.drag=null,this.orbit.end(t?t.timeStamp/1e3:performance.now()/1e3),i.button===2&&(this.contextGuardUntil=performance.now()+500),document.documentElement.classList.remove("orbiting"),i.moved){this.hud&&this.hud.quiet();return}!e&&t&&i.button===0&&t.timeStamp-i.t<600&&this.handleClick(t)}}handleClick(e){if(this.mode!=="hero"||!this.arsenal||bs(e.target,Ac))return;this.handlePointer(e),this.raycaster.setFromCamera(this.pointer.ndc,this.camera);let t=this.arsenal.pick(this.raycaster);if(t>=0){this.directorForce(this.arsenal.items[t].id),this.reduced||this.title.wave(this.arsenal.items[t].holder.position.x);return}let i=this.heroAnchor&&this.pointerOnScreenPlane(this.heroAnchor,this.pointer.ndc,0);if(i&&this.title.poke(i)){this.reduced||this.title.wave(i.point.x,1900);return}this.overTower(e.clientX,e.clientY)&&this.toyDrop()}handleKey(e){if(!this.canOrbit()||e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)return;let t=e.target;if(t&&t!==document.body&&t!==document.documentElement)return;let i=e.shiftKey?Math.PI/2:Math.PI/8;e.key==="ArrowLeft"?(this.orbit.rotateBy(-i,.35),this.idleFor=0,e.preventDefault()):e.key==="ArrowRight"?(this.orbit.rotateBy(i,.35),this.idleFor=0,e.preventDefault()):e.key==="Home"&&(this.orbit.reset(),e.preventDefault())}canOrbit(){return this.mode==="hero"||this.mode==="results"}setCursor(e){e!==this.cursor&&(this.cursor=e,document.documentElement.style.cursor=e)}pointerOnScreenPlane(e,t=this.pointer.ndc,i=0){let n=this.camera,r=n.getWorldDirection(this.tmpForward||(this.tmpForward=new P)),o=this.screenPlane||(this.screenPlane=new di),a=this.tmpThrough||(this.tmpThrough=new P);o.normal.copy(r).negate(),o.constant=-o.normal.dot(a.copy(e).addScaledVector(r,-i)),this.raycaster.setFromCamera(t,n);let l=this.pointerFrame||(this.pointerFrame={point:new P,right:new P,up:new P});return this.raycaster.ray.intersectPlane(o,l.point)?(l.right.setFromMatrixColumn(n.matrixWorld,0),l.up.setFromMatrixColumn(n.matrixWorld,1),l):null}toyLive(){return!!(this.director&&this.director.manual)}overTower(e,t){let i=this.toyRect;return!!i&&e>=i.x&&e<=i.x+i.w&&t>=i.y&&t<=i.y+i.h}toyDrop(){if(this.mode!=="hero"||!this.director)return"";let e=this.director.playerDrop();return e&&(this.idleFor=0),e}toyTrigger(){let e=this.director,t=this.view&&this.view.Core;if(this.mode!=="hero"||!e||!t)return"";let i=e.effect?e.effect.id:"",n=(t.SABOTAGE_IDS||[]).filter(o=>o!==i&&o!==e.forced);if(!n.length)return"";let r=n[Math.floor(Math.random()*n.length)];return this.directorForce(r),this.idleFor=0,r}toyCallout(e){e.complete&&(this.calloutSide=-(this.calloutSide||1),this.popups.show({text:"TOWER COMPLETE!",position:[this.calloutSide*300,be(e.level*11+120,140,260),118],size:25,depth:10,color:this.theme==="paper"?this.palette.vermilion:this.palette.amber,glow:1,style:"slam",life:2,tilt:.04}),this.reduced||this.fx.confetti.burst({pos:[0,e.level*22+30,60],count:120,speed:330,colors:this.confettiColors(),size:7,life:3.6,cone:1.3}),this.world.crowd.cheer(1.6),this.waveDir=-(this.waveDir||1),this.world.crowd.wave(this.waveDir,{gap:0}))}heroEffectCallout(e,t){let i=window.SabotageStack&&window.SabotageStack.sabotages&&window.SabotageStack.sabotages.find(r=>r.id===e);if(!i)return;let n=String(i.name).toUpperCase();this.calloutSide=-(this.calloutSide||1),this.popups.show({text:n,position:[this.calloutSide*285,be(Mi(t)*.5+90,110,250),120],size:be(250/(n.length*.7),15,30),depth:9,color:this.theme==="paper"?this.palette.ink:this.palette.cream,glow:.7,style:"slam",life:1.9,tilt:.05*this.calloutSide})}directorForce(e){this.director&&(this.director.voted=!1,this.director.force(e))}pickMode(e){let t=e.game;switch(e.screen){case"title":return"hero";case"room":case"lobby":return"lobby";case"results":return e.results?"results":"celebrate";case"game":return t&&t.multiplayer&&t.mode==="competitive"&&e.mp.role!=="player"?"arena":"play";default:return"hero"}}advance(e,t=1/30){let i=Math.max(1,Math.ceil(e/t)),n=this.fakeTs||this.last||0;for(let r=0;r<i;r+=1)n+=t*1e3,this.frame(n,{render:!1});this.fakeTs=n}frame(e,{render:t=!0}={}){let i=be((e-(this.last||e))/1e3,0,.05);if(this.last=e,this.engine.contextLost)return;this.time+=i;let n=this.host.view();this.view=n,this.reduced=!!n.reduced,this.engine.reducedMotion=this.reduced;let r=dr(n.theme);r!==this.theme&&this.buildTheme(r);let o=this.pickMode(n);o!==this.mode&&this.enterMode(o,n),this.modeTime+=i,this.slowT>0?(this.slowT-=i,this.slowT<=0&&(this.timeScale=1)):this.timeScale=xt(this.timeScale,1,6,i);for(let a of this.activeTowers())a.timeScale=this.timeScale;this.post={spots:[]},this.engine.resize(),this.watch(0,this.rig.focusY||220,0,.85),this["update_"+this.mode](i,n),this.updateCommon(i),t&&(this.engine.render(i,this.post),this.engine.govern(i*1e3,e)),this.pointer.speed*=.9}activeTowers(){return this.mode==="arena"||this.mode==="celebrate"?this.arena:Object.values(this.towers)}enterMode(e,t){let i=this.mode;this.mode=e,this.modeTime=0,this.engine.fade.value=Math.max(this.engine.fade.value,i?.8:1),this.engine.fade.target=0;let n=e==="hero",r=e==="play"||e==="results";this.title.group.visible=n,this.arsenal.group.visible=n,this.towers.hero&&(this.towers.hero.root.visible=n),this.towers.play&&(this.towers.play.root.visible=r),this.towers.lobby&&(this.towers.lobby.root.visible=e==="lobby"),this.totems.group.visible=e==="lobby",this.crown.visible=!1;for(let o of this.arena)o.root.visible=e==="arena"||e==="celebrate";for(let o of this.labels)o.mesh.visible=!1;this.ruler.group.visible=r,e!=="celebrate"&&this.world.plinth.scale.set(e==="arena"?2.3:1,1,e==="arena"?.62:1),this.popups.clear(),this.lastEffectKey="",this.removeBadge(),n?this.openHud():this.leaveHome(),e==="results"&&this.openResultsHud(),e==="hero"&&!this.director&&(this.director=new bc(t.Core,Ut(Date.now()&65535))),e==="results"&&(this.resultsT=0),this.world.crowd.clearBallot(),(i==="results"||i==="celebrate")&&(this.fx.confetti.floor=-64)}openHud(){if(this.hud)return;this.hintAge=0;let e=null;try{e=window.localStorage}catch{e=null}let t=!!(window.matchMedia&&window.matchMedia("(pointer: coarse)").matches);this.hud=gu({doc:document,storage:e,touch:t,onTurn:i=>{this.orbit.rotateBy(i),this.idleFor=0,this.hud&&this.hud.quiet()},onReset:()=>this.orbit.reset(),onToy:i=>{i==="drop"?this.toyDrop():this.toyTrigger()}})}openResultsHud(){if(this.resultsHintAge=0,this.resultsHud)return;let e=null;try{e=window.localStorage}catch{e=null}let t=!!(window.matchMedia&&window.matchMedia("(pointer: coarse)").matches);this.resultsHud=gu({doc:document,storage:e,touch:t,hostId:"results-screen",id:"orbit-hud-results",dock:!1,onTurn:i=>{this.orbit.rotateBy(i),this.idleFor=0,this.resultsHud&&this.resultsHud.quiet()},onReset:()=>this.orbit.reset()})}leaveHome(){this.endDrag(!0),this.orbit.snap(),this.world.setViewYaw(0),this.popups.faceYaw=0,this.dragBlend=0,this.setCursor(""),this.heroHover=-1,this.arsenal.hover=-1,this.cursorLight.intensity=0,this.hover.energy=0,this.hover.inside=!1,this.world.crowd.setAttention(0,0,0,0),this.toyRect=null,this.engine.bloomPass.strength=this.palette.bloom}updateCommon(e){let t=this.time;this.engine.fade.value=xt(this.engine.fade.value,this.engine.fade.target,this.engine.fade.speed*3,e),this.fx.sparks.update(e*this.timeScale),this.fx.glints.update(e),this.fx.confetti.update(e,t),this.fx.pulses.update(e),this.fx.sparks.setScale(this.engine.height*.95),this.fx.glints.setScale(this.engine.height*.95),this.popups.update(e,t),this.flash=xt(this.flash,0,7,e),this.desatPulse=xt(this.desatPulse,0,3.2,e),this.caPulse=xt(this.caPulse,0,4,e),this.post.flash=this.flash,this.post.desat=Math.max(this.post.desat||0,this.desatPulse*.45),this.post.ca=(this.post.ca||0)+this.caPulse*.004,this.flash>.01&&(this.post.flashColor=this.theme==="primetime"?[1,.9,.6]:this.desatPulse>.2?[.9,.25,.2]:[1,.86,.55])}placeCamera({anchor:e,screen:t,rect:i,worldW:n,worldH:r,yaw:o=0,pitch:a=.1,zoom:l=1,roll:c=0,shake:h=[0,0,0]}){let u=this.camera,d=this.engine.cssWidth,f=this.engine.cssHeight,g=Math.max(.05,Math.min(i.w/n,i.h/r))*l,p=f/(2*g*Math.tan(rr.degToRad(u.fov)/2)),m=Math.cos(a);return this.camDist=p,u.position.set(e.x+Math.sin(o)*m*p+h[0],e.y+Math.sin(a)*p+h[1],e.z+Math.cos(o)*m*p+h[2]),u.near=Math.max(4,p*.05),u.far=3e4,u.up.set(0,1,0),u.lookAt(e.x,e.y,e.z),c&&u.rotateZ(c),u.setViewOffset(d,f,-(t.x-d/2),-(t.y-f/2),d,f),u.updateProjectionMatrix(),u.updateMatrixWorld(!0),g}rectOf(e,t){if(e&&e.getBoundingClientRect){let i=e.getBoundingClientRect();if(i.width>8&&i.height>8)return{x:i.left,y:i.top,w:i.width,h:i.height}}return t||{x:0,y:0,w:this.engine.cssWidth,h:this.engine.cssHeight}}uvRect(e){let t=this.engine.cssWidth,i=this.engine.cssHeight;return[e.x/t,1-(e.y+e.h)/i,(e.x+e.w)/t,1-e.y/i]}parallax(e=1){let t=this.pointer;return this.reduced?[0,0]:[(t.inside?t.x:0)*.07*e,(t.inside?t.y:0)*.025*e]}towerStateFromGame(e){let t=e.game,i=e.Core,n=e.mp,r=t.multiplayer?`mp:${t.roundNumber}:${t.mode}`:`solo:${e5(t)}`,o=t.phase==="collapse"||t.phase==="ended"||t.phase==="results";if(t.multiplayer&&t.mode==="competitive"){let l=(t.remotePlayers||[]).find(c=>c.playerId===n.playerId);l&&l.collapsed&&(o=!0)}let a=t.phase==="playing"&&!o;return{id:r,blocks:t.stack||[],fallen:t.fallenPieces||[],moving:a?t.moving:null,effect:t.activeEffect,helpers:i,phase:t.phase,collapsed:o,collapseStartLevel:t.collapseStartLevel,reduced:this.reduced,teamPlacers:!!(t.multiplayer&&t.mode==="teamwork"),ended:!1}}ballotFrom(e){let t=e.game;if(!t||!t.vote||t.phase!=="playing")return null;let i=!!(e.mp.active&&t.multiplayer),n=t.vote,r=e.Core,o=i&&n.counts?n.counts:r.countVotes(n.votes,n.options),a=i?Number(n.totalVotes)||0:n.votes.size,l=n.options.slice(0,3).map(h=>Number(o[h])||0);if(!i&&n.votes.has&&n.votes.has("you")){let h=n.votes.get("you"),u=n.options.indexOf(h);u>=0&&(l[u]+=3),a+=3}for(;l.length<3;)l.push(0);let c=i?Math.max(5,(e.mp.room&&e.mp.room.players?e.mp.room.players.length:4)*1.5):22;return{voted:be(a/c),fractions:l.map(h=>h+1e-4),colors:fr[this.theme]}}announceEffect(e,t){let i=window.SabotageStack&&window.SabotageStack.sabotages.find(c=>c.id===e.id);if(!i)return;let n=i.name.toUpperCase(),r=be(300/(n.length*.7),15,36),o=this.rig.focusY;this.popups.show({text:n,position:[0,o+150,110],size:r,depth:10,color:this.palette.cream,glow:.6,style:"slam",life:1.9,tilt:.06}),this.removeBadge();let a=Xo(e.id,this.theme);a.scale.multiplyScalar(1.5),a.position.set(-128,o+168,120),this.scene.add(a);let l=new ne(new Ai(30,33,48,1,0,Ke),new mt({color:new Se(this.palette.amber).multiplyScalar(1.6),transparent:!0,opacity:.9,side:ht,toneMapped:!1,depthWrite:!1}));l.position.copy(a.position),l.position.z-=4,this.scene.add(l),this.badge={icon:a,ring:l,born:this.time,progress:1},this.fx.pulses.pulse({pos:[0,o+60,80],color:this.palette.amber,radius:220,life:.7,from:.2,strength:1,vertical:!0}),this.world.crowd.cheer(.6),this.world.crowd.chaos(1)}removeBadge(){this.badge&&(this.scene.remove(this.badge.icon,this.badge.ring),this.badge.icon.userData.dispose(),this.badge.ring.geometry.dispose(),this.badge.ring.material.dispose(),this.badge=null)}updateBadge(e,t,i){if(!this.badge)return;let n=this.badge;if(!e){this.removeBadge();return}let r=this.time-n.born,o=ur(be(r/.35));n.icon.scale.setScalar(1.5*o*(1+Math.sin(r*2)*.03)),n.icon.rotation.y=r*1.1,n.icon.position.set(-128,i+168+Math.sin(r*2.2)*3,120);let a=Number(e.duration)||Number(e.elapsed)+Number(e.remaining)||5,l=be(Number.isFinite(Number(e.remaining))&&e.remaining>0?e.remaining/a:1,0,1);Math.abs(l-n.progress)>.015&&(n.progress=l,n.ring.geometry.dispose(),n.ring.geometry=new Ai(30,33,48,1,Math.PI/2,Math.max(.001,Ke*l))),n.ring.position.set(n.icon.position.x,n.icon.position.y,116),n.ring.scale.setScalar(o)}update_play(e,t){let i=t.game,n=this.getTower("play"),r=this.towers.hero;if(r&&(r.root.visible=!1),n.root.visible=!0,!i){this.placeIdle(e,t);return}let o=this.towerStateFromGame(t);this.lastPlayKey=o.id,n.sync(o,e,this.time);let a=o.blocks,l=a.length,c=i.activeEffect?i.activeEffect.id:"",h=Math.max(220,(l+1)*22-60);this.rig.focusY=this.reduced?h:xt(this.rig.focusY,h,1/.12,e);let u=be(this.rig.focusY/2200),d=i.activeEffect,f=d?`${d.id}:${d.targetPlayerId||""}`:"";f!==this.lastEffectKey&&(d?this.announceEffect(d,t):this.removeBadge(),this.lastEffectKey=f),this.updateBadge(d,e,this.rig.focusY);let g=c==="zoom"?1.85:1;this.rig.zoom=this.reduced?g:xt(this.rig.zoom,g,1/.12,e);let p=be((this.rig.zoom-1)/.85),m=a[a.length-1],x=m?(m.left+m.right)/2-180:0,v=m?Mi(m.level):11,M=document.getElementById("game-stage"),y=this.rectOf(M),S=Math.min(y.w/Ss,y.h/520),E=new P(xi(0,x,p),xi(this.rig.focusY,v,p),30),_={x:y.x+y.w/2+xi(0,x*S,p),y:y.y+y.h/2-xi(0,(v-this.rig.focusY)*S,p)},[b,I]=this.parallax(),A=this.reduced?0:Math.sin(this.time*.23)*.05;this.rig.yaw=xt(this.rig.yaw,A+b+(this.reduced,0),4,e),this.rig.pitch=xt(this.rig.pitch,.1+I+(this.reduced?0:Math.sin(this.time*.17)*.012),4,e);let D=[0,this.rig.kick.step(e),0];if(this.rig.shakeAmp>.01&&!this.reduced&&(this.rig.shakeT+=e,this.rig.shakeAmp*=Math.exp(-e*2.8),D=[D[0]+Math.sin(this.rig.shakeT*61)*this.rig.shakeAmp,D[1]+Math.cos(this.rig.shakeT*53)*this.rig.shakeAmp*.7,0]),c==="earthquake"&&!this.reduced&&i.activeEffect){let O=t.Core.earthquakeOffset(i.activeEffect.elapsed,i.activeEffect.remaining,!1);D[0]+=O.x*.55,D[1]-=O.y*.55}let q=c==="drunk"&&!this.reduced?Math.sin(this.time*2.1)*.035+Math.sin(this.time*3.7)*.018:0;this.placeCamera({anchor:E,screen:_,rect:y,worldW:Ss,worldH:520,yaw:this.rig.yaw,pitch:this.rig.pitch,zoom:this.rig.zoom,roll:q,shake:D}),this.world.plinth.position.set(n.shake.x,n.shake.y,0),this.ruler.setHeight(l),this.ruler.group.position.y=0;let U=this.ballotFrom(t);if(U?this.world.crowd.setBallot(U):this.world.crowd.clearBallot(),this.reduced||(c==="slowmo"&&(this.post.desat=.5,this.post.tint=[.9,.97,1.12]),c==="turbo"&&(this.post.zoomBlur=.28,this.post.ca=.0014),c==="drunk"&&(this.post.wobble=1),c==="earthquake"&&(this.post.ca=.0022)),n.rig.spot&&d){let O=this.spotPost(n,n.rig.spot,y);O&&this.post.spots.push(O)}let C=i.moving,B=C&&Number.isFinite(C.left)&&Number.isFinite(C.width);this.watch(B?C.left+C.width/2-Ss/2:x,B?Mi(C.level||l):v,0,1),this.updateWorld(e,this.rig.focusY,u,t,n),this.post.tiltCenter=.5,this.post.blur=5}spotPost(e,t,i){let n=e.root.localToWorld(new P(t.x,t.y,t.z)),r=new P().setFromMatrixColumn(this.camera.matrixWorld,0).multiplyScalar(t.radius*e.root.scale.x),o=n.clone().project(this.camera),a=n.clone().add(r).project(this.camera),l=this.camera.aspect,c=Math.abs((a.x-o.x)*.5)*l;return{x:o.x*.5+.5,y:o.y*.5+.5,r:c,rect:this.uvRect(i)}}heroFieldRect(e,t){let i=this.engine.cssWidth,n=this.engine.cssHeight,r=this.fieldCorner||(this.fieldCorner=new P),o=Mi(t+1)+24,a=1/0,l=1/0,c=-1/0,h=-1/0;for(let u of[-Ss/2-12,Ss/2+12])for(let d of[-8,o])for(let f of[-50,50]){e.root.localToWorld(r.set(u,d,f)),r.project(this.camera);let g=(r.x*.5+.5)*i,p=(.5-r.y*.5)*n;a=Math.min(a,g),c=Math.max(c,g),l=Math.min(l,p),h=Math.max(h,p)}return a=be(a,0,i),c=be(c,0,i),l=be(l,0,n),h=be(h,0,n),{x:a,y:l,w:Math.max(8,c-a),h:Math.max(8,h-l)}}updateWorld(e,t,i,n,r){this.world.update({time:this.time,dt:e,focusY:t,altitude:i,dim:1,camera:this.camera,shadowFocus:{x:0,y:t},fogDist:this.camDist||1e3})}placeIdle(e,t){let i=this.rectOf(document.getElementById("game-stage"));this.placeCamera({anchor:new P(0,220,30),screen:{x:i.x+i.w/2,y:i.y+i.h/2},rect:i,worldW:Ss,worldH:520,pitch:.1}),this.updateWorld(e,220,0,t)}update_hero(e,t){let i=this.engine.cssWidth,n=this.engine.cssHeight,r=t.Core,o=document.querySelector("#title-screen .home-copy"),a=document.querySelector("header.topbar"),l=a?a.getBoundingClientRect().bottom:0,c=o?o.getBoundingClientRect():{left:0,right:0,top:n,width:0},h;i>=900&&c.right<i*.66?h={x:c.right+12,y:l+6,w:i-c.right-28,h:n-l-20}:h={x:6,y:l+2,w:i-12,h:Math.max(180,Math.min(c.top-l-6,n*.62))};let u=h.w/h.h>1.75?"wide":"tall";u!==this.heroLayout&&(this.heroLayout=u,this.title.build(u));let d=this.getTower("hero");d.root.visible=!0,this.towers.play&&(this.towers.play.root.visible=!1);let f=this.director;this.reduced&&!f.reducedSet&&(f.reducedSet=!0),f.update(e*this.timeScale,this.reduced);let g=f.state(r,this.reduced);d.sync(g,e,this.time);let p=g.effect,m=p?p.id:"";m!==this.lastEffectKey&&(this.lastEffectKey=m);let x=f.lastDrop;x&&x.n!==this.toySeen&&(this.toySeen=x.n,x.manual&&this.toyCallout(x));let v=this.reduced,M=this.pointer,y=this.orbit,S=this.hover,E=this.title.bounds,b=Math.max(E.x1-E.x0,420*2+40),I=E.y1,A=-175,D=b,q=I-A,U=0,C=(I+A)/2,B=v?1:Fo(be(this.modeTime/3.2)),O=Math.asin(be((10-C)/(this.camDist||1700),-.95,.95));y.setReduced(v),y.minPitch=Math.min(0,O-.045),y.update(e),!v&&y.rotated&&!this.drag&&!y.moving?(this.idleFor+=e,this.idleFor>30&&(y.reset(2.4),this.idleFor=0)):(this.drag||y.moving)&&(this.idleFor=0),this.dragBlend=xt(this.dragBlend,this.drag||y.moving?1:0,this.drag?14:2.2,e);let[H,te]=this.parallax(1.4),V=1-this.dragBlend,W=(1-B)*-.22+H*V+(v?0:Math.sin(this.time*.19)*.035)+y.yaw,Q=xi(-.12,.085,B)+te*V+y.pitch,Re=xi(.8,1,B)*(v?1:1+.028*S.energy),He=[0,this.rig.kick.step(e),0],Z=this.heroAnchor||(this.heroAnchor=new P);Z.set(U,C,-20),this.placeCamera({anchor:Z,screen:{x:h.x+h.w/2,y:h.y+h.h/2},rect:h,worldW:D*1.04,worldH:q*1.04,yaw:W,pitch:Q,zoom:Re,shake:He}),this.world.setViewYaw(y.yaw),this.popups.faceYaw=W;let ge=M.inside&&!M.overUi&&!M.touch,Le=ge&&M.lastX>=h.x&&M.lastX<=h.x+h.w&&M.lastY>=h.y&&M.lastY<=h.y+h.h?this.pointerOnScreenPlane(Z,M.ndc,0):null,he=-1;ge&&!this.drag&&(this.raycaster.setFromCamera(M.ndc,this.camera),he=this.arsenal.pick(this.raycaster)),he!==this.heroHover?(this.heroHover=he,this.arsenal.hover=he,this.showHoverLabel(he,W)):he>=0&&this.showHoverLabel(he,W,!0);let Be=ge&&!this.drag&&he<0&&this.overTower(M.lastX,M.lastY);this.setCursor(this.drag?"grabbing":he>=0||Be?"pointer":ge?"grab":""),S.update(e,{point:Le?Le.point:null,speed:M.speed,blocked:!!this.drag,reduced:v}),this.hoverLife(e,Le,Z,W,h);{let K=f.moving,ce=S.energy,ue=K?K.left+K.width/2-Ss/2:0,Ae=K?Mi(K.level):150;this.watch(xi(ue,S.x,ce),xi(Ae,S.y,ce),xi(0,S.z,ce),1,y.yaw)}let At=this.drag?null:Le;this.title.update(e,this.time,{pointer:At,pointerSpeed:M.speed,reduced:v,energy:S.energy,yaw:W}),this.arsenal.update(e,this.time,v,{yaw:W,pointer:At,energy:S.energy});let Oe=f.ballot;Oe?this.world.crowd.setBallot({voted:Oe.voted,fractions:Oe.fractions,colors:fr[this.theme]}):this.world.crowd.clearBallot(),p&&p.id!==this.heroEffect?(this.heroEffect=p.id,this.world.crowd.cheer(.8),this.world.crowd.chaos(.8),this.heroEffectCallout(p.id,g.blocks.length)):p||(this.heroEffect=""),this.ruler.group.visible=!1,this.hud&&(this.hud.place(h.x+h.w-14,h.y+h.h-12),this.hud.setRotated(y.rotated),this.hintAge+=e,this.hintAge>10&&this.hud.fade()),this.world.plinth.position.set(d.shake.x,d.shake.y,0),this.updateWorld(e,260,0,t,d);let Qe=p?p.id:"";if(v||(Qe==="slowmo"&&(this.post.desat=.35,this.post.tint=[.92,.98,1.08]),Qe==="turbo"&&(this.post.zoomBlur=.25),Qe==="drunk"&&(this.post.wobble=.6)),this.toyRect=this.heroFieldRect(d,(g.blocks||[]).length),d.rig.spot&&p){let K=this.spotPost(d,d.rig.spot,this.toyRect);K&&this.post.spots.push(K)}this.post.tiltCenter=xi(.55,be((M.ndc.y+1)/2,.2,.85),v?0:.8*S.energy),this.post.blur=6,this.engine.bloomPass.enabled&&(this.post.bloom=this.palette.bloom*(1+.3*S.energy)),this.post.fade=0}hoverLife(e,t,i,n,r){let o=this.hover,a=o.energy,l=this.reduced,c=this.cursorLight,h=this.world.crowd,u=this.tmpForward;if(a>.003&&u?(c.position.set(o.x,o.y,o.z).addScaledVector(u,-170),c.intensity=a*this.cursorLightPower):c.intensity=0,l||!t){h.setAttention(0,0,0,0);return}let d=Math.cos(this.orbit.yaw),f=Math.sin(this.orbit.yaw);h.setAttention(d*o.x-f*o.z,f*o.x+d*o.z+260,a*.85,a*(o.dwell>1.2?1:.65)),o.entered&&(this.title.wave(t.point.x),h.cheer(.55),this.groundRipple(1));for(let g=o.sparks(e,this.pointer.speed,l);g>0;g-=1)this.sparkle(t);this.pointer.speed>340&&this.time-this.lastRipple>.34&&(this.lastRipple=this.time,this.groundRipple(.7))}sparkle(e){let t=this.sparkleColors,i=t[Math.floor(Math.random()*t.length)%t.length],n=this.tmpForward,r=this.glintBoost,o=(Math.random()-.5)*40,a=(Math.random()-.5)*40,l=e.right,c=e.up;this.fx.glints.emit({pos:[e.point.x+l.x*o+c.x*a-n.x*150,e.point.y+l.y*o+c.y*a-n.y*150,e.point.z+l.z*o+c.z*a-n.z*150],vel:[(Math.random()-.5)*56,26+Math.random()*50,(Math.random()-.5)*30],color:[i[0]*r,i[1]*r,i[2]*r],alpha:1,size:(this.theme==="paper"?12:9)+Math.random()*12,life:.7+Math.random()*.6,drag:1.5,gravity:-38})}groundRipple(e=1){this.raycaster.setFromCamera(this.pointer.ndc,this.camera);let t=this.raycaster.ray.intersectPlane(this.groundPlane,this.tmpGround||(this.tmpGround=new P));!t||Math.hypot(t.x,t.z)>1e3||this.fx.pulses.pulse({pos:[t.x,-58,t.z],color:this.theme==="sunset"?"#FF4FD8":this.palette.amber,radius:90+110*e,life:1.05,from:.08,strength:1.1})}showHoverLabel(e,t=0,i=!1){if(i||this.popups.hide("hover"),e<0)return;let n=this.arsenal.items[e],r=n.holder.position,o=[r.x+Math.sin(t)*60,r.y+92,r.z+Math.cos(t)*60];if(i){let l=this.popups.items.find(c=>c.key==="hover"&&!c.dying);l&&(l.base=o);return}let a=String(n.name||n.id).toUpperCase();this.popups.show({key:"hover",text:a,position:o,size:be(300/(a.length*.72),14,30),depth:8,color:this.theme==="paper"?this.palette.ink:this.palette.cream,glow:this.theme==="paper"?.15:.7,style:"hold",life:1})}update_arena(e,t){let i=t.game;if(!i){this.placeIdle(e,t);return}let n=t.Core,r=i.remotePlayers||[],o=Math.max(1,r.length);for(;this.arena.length<o;){let v=new _r(this.kit,this.fx,{scale:1});v.root.visible=!0,this.scene.add(v.root),this.wireTower(v,"arena"),this.arena.push(v)}this.arena.forEach((v,M)=>{v.root.visible=M<o});let a=this.rectOf(document.getElementById("game-stage")),l=720/o,c=Math.max(0,...r.map(v=>Number(v.height)||(v.blocks?v.blocks.length-1:0))),h=be(Math.min(l/400,440/((c+2)*22)),.06,.9),u=i.remoteEffects||[],d=u.map(v=>`${v.id}:${v.targetPlayerId||"all"}`).join(",");if(d!==this.lastArenaKey){let v=u.find(M=>!(this.lastArenaKey||"").includes(`${M.id}:${M.targetPlayerId||"all"}`));if(v&&this.mode==="arena"){let M=window.SabotageStack&&window.SabotageStack.sabotages.find(y=>y.id===v.id);if(M){let y=M.name.toUpperCase();this.popups.show({text:y,position:[0,330,130],size:be(520/(y.length*.7),18,46),depth:12,color:this.palette.cream,glow:.7,style:"slam",life:1.9,tilt:.05}),this.world.crowd.cheer(.9),this.world.crowd.chaos(1)}}this.lastArenaKey=d}r.forEach((v,M)=>{let y=this.arena[M],S=(M-(o-1)/2)*l;y.root.position.set(S,0,0),y.root.scale.setScalar(h);let E=u.find(I=>I.targetPlayerId===v.playerId||I.targetPlayerId==null)||null,_=v.blocks&&v.blocks.length?v.blocks:[n.makeBase()],b=!v.ended&&!v.collapsed&&v.moving;if(y.sync({id:`arena:${i.roundNumber}:${v.playerId||M}`,blocks:_,fallen:v.fallen||[],moving:b?v.moving:null,effect:E,helpers:n,phase:"playing",collapsed:!!v.collapsed,reduced:this.reduced,ended:!!v.ended},e,this.time),this.arenaLabel(M,v,S,h,c),y.rig.spot&&E){let I={x:a.x+a.w*(M/o),y:a.y+60*(a.h/520),w:a.w/o,h:a.h-66*(a.h/520)},A=this.spotPost(y,y.rig.spot,I);A&&this.post.spots.length<6&&this.post.spots.push(A)}}),this.watch(Math.sin(this.time*.8)*l*Math.max(.5,(o-1)/2),this.rig.focusY,0,1);for(let v=o;v<this.arena.length;v+=1)this.arena[v].root.visible=!1;for(let v=o;v<this.labels.length;v+=1)this.labels[v].mesh.visible=!1;let f=226,[g,p]=this.parallax(.7);this.placeCamera({anchor:new P(0,f,30),screen:{x:a.x+a.w/2,y:a.y+a.h/2},rect:a,worldW:720,worldH:520,yaw:g*.8+(this.reduced?0:Math.sin(this.time*.2)*.04),pitch:.12+p});let m=(c+1)*22*h;this.ruler.group.visible=!1,this.world.crowd.clearBallot();let x=this.ballotFrom(t);x&&this.world.crowd.setBallot(x),this.updateWorld(e,f,0,t),this.post.tiltCenter=.5,this.post.blur=4}arenaLabel(e,t,i,n,r,o={}){let a=this.labels[e],l=String(t.name||"Player").slice(0,12),c=Number(t.height)||0,h=o.status||(t.disconnected?"OFFLINE":t.collapsed?"COLLAPSED":t.ended?"FINISHED":`${c} HIGH`),u=`${l}|${h}|${t.color}`;if(!a){let f=document.createElement("canvas");f.width=256,f.height=96;let g=new ri(f);g.colorSpace=Tt,g.anisotropy=4;let p=new ne(new Rt(112,42),new mt({map:g,transparent:!0,depthWrite:!1}));a={mesh:p,canvas:f,texture:g,text:""},this.labels[e]=a,this.scene.add(p)}if(a.mesh.visible=!0,a.text!==u){a.text=u;let f=a.canvas.getContext("2d");f.clearRect(0,0,256,96);let g=this.palette;f.fillStyle=this.theme==="paper"?"rgba(244,237,223,0.92)":"rgba(6,10,36,0.9)",this.theme==="sunset"?f.fillRect(4,4,248,88):(f.beginPath(),f.roundRect(4,4,248,88,22),f.fill()),f.strokeStyle=In(this.theme,t.color||"#E3A33B"),f.lineWidth=6,f.stroke(),f.fillStyle=In(this.theme,t.color||"#E3A33B"),f.beginPath(),f.arc(34,34,12,0,Ke),f.fill(),f.fillStyle=this.theme==="paper"?"#2A2520":"#ffffff",f.textBaseline="middle",f.font=this.theme==="sunset"?"34px VT323, monospace":this.theme==="primetime"?'700 34px "Barlow Condensed", sans-serif':'700 30px "DM Sans", sans-serif',f.textAlign="left",f.fillText(l,58,34,180),f.fillStyle=this.theme==="paper"?"#6E6558":"#C9D6FF",f.font=this.theme==="sunset"?"28px VT323, monospace":this.theme==="primetime"?'500 26px "Barlow Condensed", sans-serif':'600 24px "DM Sans", sans-serif',f.textAlign="center",f.fillText(h,128,72,220),a.texture.needsUpdate=!0}let d=o.colW||720/Math.max(1,this.view.game.remotePlayers.length);a.mesh.scale.setScalar(be(d/150,.5,1.15)),a.mesh.position.set(i,o.y==null?470:o.y,120)}update_results(e,t){let i=t.results,n=this.getTower("play");n.root.visible=!0;let r=i.blocks||[],o=(i.collapsedBlocks||[]).map(b=>b.level),a=o.length?Math.min(...o):null;n.sync({id:this.lastPlayKey||"results",blocks:r,fallen:i.fallen||[],moving:null,effect:null,helpers:t.Core,phase:"ended",collapsed:!0,collapseStartLevel:a,reduced:this.reduced,ended:!0},e,this.time),this.resultsT=(this.resultsT||0)+e;let l=document.querySelector("#solo-result-layout .results-frame"),c=this.rectOf(l,this.rectOf(document.getElementById("results-canvas"))),h=a??r.length,u=h*22+40,d=Math.max(520,u+220+(i.newBest?100:0)),f=d/2-50;this.rig.focusY=xt(this.rig.focusY,f,3,e);let g=this.reduced?1:Fo(be(this.resultsT/1.8)),p=this.reduced,m=this.orbit,x=this.pointer,v=Math.asin(be((10-this.rig.focusY)/(this.camDist||1700),-.95,.95));m.setReduced(p),m.minPitch=Math.min(0,v-.045),m.update(e),!p&&m.rotated&&!this.drag&&!m.moving?(this.idleFor+=e,this.idleFor>30&&(m.reset(2.4),this.idleFor=0)):(this.drag||m.moving)&&(this.idleFor=0),this.dragBlend=xt(this.dragBlend,this.drag||m.moving?1:0,this.drag?14:2.2,e);let[M,y]=this.parallax(1.4),S=1-this.dragBlend,E=(Math.sin(this.time*.22)*.14+M)*S+m.yaw,_=xi(.04,.13,g)+y*S+m.pitch;if(this.world.setViewYaw(m.yaw),this.setCursor(this.drag?"grabbing":x.inside&&!x.overUi&&!x.touch?"grab":""),this.placeCamera({anchor:new P(0,this.rig.focusY,30),screen:{x:c.x+c.w/2,y:c.y+c.h/2},rect:c,worldW:400,worldH:d,yaw:E,pitch:_,zoom:xi(1.08,1,g)}),!this.popups.items.find(b=>b.key==="height")&&this.resultsT>.4&&(this.popups.show({key:"height",text:String(i.height),position:[0,h*22+92,80],size:96,depth:30,color:this.palette.amber,glow:.9,style:"hold",life:1}),i.newBest&&this.popups.show({key:"best",text:"NEW BEST",position:[0,h*22+168,80],size:22,depth:8,color:this.palette.vermilion,glow:1,style:"hold",life:1,tilt:-.05}),!this.reduced&&(i.newBest||i.height>=15)&&this.fx.confetti.burst({pos:[0,h*22+140,40],count:130,speed:360,colors:this.confettiColors(),size:7.5,life:4.2,cone:1.4}),this.world.crowd.cheer(i.newBest?2.2:1)),i.newBest&&this.resultsT>.5){let b=Rp(this.resultsT-.55,this.time,p),I=h*22+232+b.bob,A=this.crown;if(A.visible=b.scale>.002,A.position.set(0,I,80),A.scale.setScalar(1.75*Math.max(.001,b.scale)),A.rotation.set(b.tilt,b.spin,0),!p&&A.visible&&this.time-this.lastCrownSpark>.3){this.lastCrownSpark=this.time;let D=Math.random()*Ke;this.fx.sparks.burst({pos:[Math.cos(D)*46,I+20+Math.random()*40,80+Math.sin(D)*30],count:3,speed:60,spread:1,color:[1.7,1.25,.3],size:5.5,life:1,gravity:-30,up:.4,drag:1.2})}}else this.crown.visible=!1;this.resultsHud&&(this.resultsHud.place(c.x+c.w-14,c.y+c.h-12),this.resultsHud.setRotated(m.rotated),this.resultsHintAge+=e,this.resultsHintAge>10&&this.resultsHud.fade()),this.ruler.setHeight(r.length),this.world.plinth.position.set(0,0,0),this.world.crowd.clearBallot(),this.updateWorld(e,this.rig.focusY,be(this.rig.focusY/2200),t,n),this.post.tiltCenter=.5,this.post.blur=5}startPodium(e){this.podiumFor=e,this.podiumId=(this.podiumId||0)+1,this.podiumClock=0,this.podiumFinale=!1,this.podiumCannon=0,this.podiumSide=1,this.podium=Cp(e);for(let t of this.podium)t.shown=0,t.fallenShown=-1,t.blockView=[],t.fallenView=[];this.fx.confetti.floor=-64}update_celebrate(e,t){let i=this.engine.cssWidth,n=this.engine.cssHeight,r=t.Core,o=t.mp&&t.mp.resultPayload||null;(!this.podium||o!==this.podiumFor)&&this.startPodium(o);let a=this.podium,l=a.length;for(;this.arena.length<l;){let q=new _r(this.kit,this.fx,{scale:1});q.root.visible=!0,this.scene.add(q.root),this.wireTower(q,"arena"),this.arena.push(q)}this.arena.forEach((q,U)=>{q.root.visible=U<l});for(let q=l;q<this.labels.length;q+=1)this.labels[q].mesh.visible=!1;this.podiumClock+=e;let c=Math.max(1,...a.map(q=>q.blocks.length)),{worldW:h,colW:u,scale:d,maxHeight:f}=Pp(l,c),g=!0,p=be(u/150,.5,1.15);a.forEach((q,U)=>{let C=q.blocks.length,B=Ip(this.podiumClock,C,{reduced:this.reduced});B>q.shown&&(q.shown=B,q.blockView=q.blocks.slice(0,B)),q.shown<C&&(g=!1);let O=Dp(q.fallen,q.shown,C);O!==q.fallenShown&&(q.fallenShown=O,q.fallenView=q.fallen.slice(0,O));let H=this.arena[U],te=q.slot*u;if(H.root.position.set(te,0,0),H.root.scale.setScalar(d),H.sync({id:`podium:${this.podiumId}:${q.key}`,blocks:q.blockView.length?q.blockView:[r.makeBase()],fallen:q.fallenView,moving:null,effect:null,helpers:r,phase:"ended",collapsed:!1,reduced:this.reduced,ended:!0,teamPlacers:!!q.team},e,this.time),q.team){this.labels[U]&&(this.labels[U].mesh.visible=!1);return}let W=q.shown>=C?`${q.winner?"WINNER \xB7 ":""}${q.height}${q.winner?"":" HIGH"}`:`${Math.max(0,q.shown-1)} HIGH`;this.arenaLabel(U,{name:q.name,color:q.color},te,d,f,{status:W,colW:u,y:Math.max(1,q.shown)*22*d+26+24*p})});let m=this.world.plinth.scale,x=l<=1?1:l===2?1.7:2.3,v=l<=1?1:.62;this.world.plinth.scale.set(xt(m.x,x,4,e),1,xt(m.z,v,4,e)),this.world.plinth.position.set(0,0,0);let M=(f+1)*22*d;if(g&&l>0&&!this.podiumFinale){this.podiumFinale=!0,this.podiumCannon=.5,this.world.crowd.cheer(2.4);let q=a.filter(O=>O.winner),U=this.palette.amber;q.forEach(O=>{let H=O.slot*u,te=O.blocks.length*22*d;this.fx.pulses.pulse({pos:[H,2,20],color:U,radius:Math.max(160,330*d),life:1.3,from:.2,strength:1.5}),this.reduced||this.fx.confetti.burst({pos:[H,te+10,40],count:150,speed:400,colors:this.confettiColors(),size:11,life:4.6,cone:1.5})});let B=qp(a,O=>[...String(O).toUpperCase()].filter(H=>fp(this.palette.fontKey,H)).join("").trim());this.popups.show({text:B,position:[0,M+96,130],size:be(560/(B.length*.72),18,46),depth:12,color:U,glow:.9,style:"slam",life:3.6,tilt:-.04})}if(this.podiumFinale&&!this.reduced&&(this.podiumCannon-=e,this.podiumCannon<=0)){this.podiumCannon=2.2,this.podiumSide=-this.podiumSide;let q=this.podiumSide;this.fx.confetti.burst({pos:[q*(h/2+30),0,40],count:64,speed:660,colors:this.confettiColors(),size:11,life:5.2,cone:.4,direction:[-q*.5,1,0]}),this.world.crowd.cheer(.7)}let y=this.rectOf(document.getElementById("multiplayer-results"),{x:i*.5,y:n*.4,w:i*.5,h:n*.5}),S=this.rectOf(document.querySelector("#results-screen .screen-heading"),{x:0,y:60,w:i,h:60}),_=y.x>i*.4?{x:12,y:S.y+S.h+8,w:Math.max(240,y.x-36),h:Math.max(240,n-S.y-S.h-24)}:{x:8,y:S.y+S.h+6,w:i-16,h:Math.max(200,y.y-S.y-S.h-14)},b=M*.5+40,I=M+220,[A,D]=this.parallax(1.2);this.placeCamera({anchor:new P(0,b,30),screen:{x:_.x+_.w/2,y:_.y+_.h*.47},rect:_,worldW:h+60,worldH:I,yaw:A+(this.reduced?0:Math.sin(this.time*.18)*.1),pitch:.1+D}),this.ruler.group.visible=!1,this.world.crowd.clearBallot(),this.updateWorld(e,b,.04,t),this.post.tiltCenter=.5,this.post.blur=4}update_lobby(e,t){let i=t.mp.room,n=i&&i.players||[],r=this.getTower("lobby");r.root.visible=!0;let o=[t.Core.makeBase()];n.forEach((v,M)=>{let y=Math.max(60,190-M*18),S=(360-y)/2+(M%2?8:-8);o.push({left:S,right:S+y,level:M+1,color:v.color||"#E3A33B",perfect:!1,placer:v.name||"Player"})}),r.sync({id:`lobby:${t.mp.code}`,blocks:o,fallen:[],moving:null,effect:null,helpers:t.Core,phase:"lobby",collapsed:!1,reduced:this.reduced,teamPlacers:!0},e,this.time);let a=this.rectOf(document.querySelector("#room-screen .room-lobby-layout"),{x:0,y:0,w:this.engine.cssWidth,h:this.engine.cssHeight}),l=this.engine.cssWidth,c=this.engine.cssHeight,[h,u]=this.parallax(1.3),d=l>=900?{x:l*.36,y:60,w:l*.62,h:c-80}:{x:8,y:54,w:l-16,h:c*.5},f=l>=900,g=f?Math.max(d.y+d.h/2,c*.69):d.y+d.h/2;this.placeCamera({anchor:new P(0,230,0),screen:{x:d.x+d.w/2,y:g},rect:d,worldW:620,worldH:f?760:640,yaw:h+Math.sin(this.time*.2)*.1,pitch:.1+u}),this.world.plinth.position.set(0,0,0),this.ruler.group.visible=!1,this.world.crowd.clearBallot();let p=n.slice(0,6),m=this.pointer,x=m.inside&&!m.touch;this.totems.sync(p.map(v=>({id:v.id,name:v.name,color:v.color,ready:v.connected!==!1})),e,this.time,{x:x?m.x:0,y:x?m.y:0},this.reduced),p.forEach((v,M)=>this.arenaLabel(M,v,wc(M).x,1,0,{status:v.connected===!1?"OFFLINE":"READY",colW:160,y:wp(this.theme)+36+Math.floor(M/2)*36}));for(let v=p.length;v<this.labels.length;v+=1)this.labels[v].mesh.visible=!1;this.watch(0,200,0,.8),this.updateWorld(e,230,0,t,r),this.post.tiltCenter=.5,this.post.blur=5}dispose(){for(let[e,t]of[["pointermove",this.onPointerMove],["pointerdown",this.onPointerDown],["pointerup",this.onPointerUp],["pointercancel",this.onPointerCancel],["blur",this.onBlur],["contextmenu",this.onContextMenu],["dblclick",this.onDoubleClick],["keydown",this.onKeyDown]])window.removeEventListener(e,t);document.documentElement.removeEventListener("pointerleave",this.onPointerLeave),this.setCursor(""),this.endDrag(!0),this.hud&&(this.hud.dispose(),this.hud=null),document.documentElement.classList.remove("orbiting"),this.scene.remove(this.cursorLight),this.cursorLight.dispose(),this.totems&&(this.scene.remove(this.totems.group),this.totems.dispose()),this.crown&&(this.scene.remove(this.crown),this.crown.userData.dispose()),this.resultsHud&&(this.resultsHud.dispose(),this.resultsHud=null),this.engine.dispose()}};var Cc=null;function t5(){if(Cc)return Cc;let s=document.createElement("canvas"),e=new Zn({canvas:s,antialias:!0,alpha:!1,preserveDrawingBuffer:!0});e.outputColorSpace=Tt,e.shadowMap.enabled=!0,e.shadowMap.type=An;let t=new un(e),i=new br;return Cc={canvas:s,renderer:e,envMap:t.fromScene(i,.04).texture},t.dispose(),i.dispose(),Cc}function i5(s){let e=document.createElement("canvas");e.width=4,e.height=256;let t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,256);i.addColorStop(0,s.skyZenith),i.addColorStop(.62,s.skyMid),i.addColorStop(1,s.skyHorizon),t.fillStyle=i,t.fillRect(0,0,4,256);let n=new ri(e);return n.colorSpace=Tt,n}function Fp(s,e,t){try{let i=dr(s.theme),n=ys(i),{renderer:r,envMap:o}=t5(),a=Math.min(2,Math.max(1,window.devicePixelRatio||1)),l=t.width,c=t.height;r.setPixelRatio(1),r.setSize(Math.round(l*a),Math.round(c*a),!1),r.toneMapping=i==="paper"?Ui:Ki,r.toneMappingExposure=n.exposure;let h=new Ei,u=i5(n);h.background=u,h.environment=o,h.environmentIntensity=.7;let d=new gr(i),f=t.teamwork?422:252,g=Math.min(1,(f-26)/(Math.max(1,t.maxHeight+1)*Ii)),p=new ae;h.add(p);let m=[];for(let C of t.blocks||[]){let B=Number.isInteger(C.level)?C.level:(t.blocks||[]).indexOf(C),O=d.mesh({left:C.left,right:C.right,color:C.color},{depth:yi});O.position.set((C.left+C.right)/2-180,B*Ii+Ii/2,0),p.add(O),C.perfect&&d.addPerfectStar(O,C.right-C.left)}if(t.collapseLevel!=null){let C=new ne(new bt(210,1.4,6,64).rotateX(Math.PI/2),new mt({color:$e(n.vermilion).multiplyScalar(1.4)}));C.position.y=(Math.max(0,t.collapseLevel)+1)*Ii,p.add(C),m.push(C)}let x=new xr({floorY:hc()}),v=Ut(9),M=(t.fallen||[]).slice(0,12),y=Math.max(40,Math.min(95,l/2/g-30));M.forEach((C,B)=>{let O=Math.max(6,(C.right||0)-(C.left||0)),H=d.mesh({left:0,right:O,color:C.color||n.vermilion},{depth:yi*.7});p.add(H),x.add(zo({pos:[(v()*2-1)*y,16+B*9,70+v()*70],half:[O/2,Bt/2,yi*.35],vel:[0,0,0],angVel:[v()-.5,(v()-.5)*2,(v()-.5)*2],data:{mesh:H}}))}),x.settle(2.6);for(let C of x.bodies){let B=C.data.mesh;B.position.set(...C.pos),B.quaternion.set(...C.quat)}let S=new ne(new gt(260,268,40,64),new Ue({color:i==="paper"?"#EADFC8":n.plinth,roughness:.8,metalness:i==="primetime"?.4:0}));S.position.y=-20.2,S.receiveShadow=!0,h.add(S);let E=new ne(new mi(4e3,48).rotateX(-Math.PI/2),new Ue({color:n.floor,roughness:.95}));E.position.y=-44,h.add(E);let _=new Ci($e(n.key),i==="paper"?2.3:2.6);_.position.set(-300,520,600),_.castShadow=!0,Object.assign(_.shadow.camera,{left:-420,right:420,top:420,bottom:-120,near:10,far:1800}),_.shadow.mapSize.set(1024,1024),_.shadow.bias=-8e-4,h.add(_),h.add(new Tn($e(n.fill),$e(n.ground),.7));let b=new Ci($e(n.rim),1.2);b.position.set(380,160,-400),h.add(b);let I=new $t(24,l/c,20,12e3),A=c/(2*g*Math.tan(rr.degToRad(24)/2)),D=.12,q=-.2;I.position.set(Math.sin(q)*Math.cos(D)*A,Math.sin(D)*A,30+Math.cos(q)*Math.cos(D)*A),I.lookAt(0,0,30),I.setViewOffset(l,c,0,-(f-c/2),l,c),I.updateProjectionMatrix(),r.render(h,I),e.width=Math.round(l*a),e.height=Math.round(c*a);let U=e.getContext("2d");if(U.setTransform(1,0,0,1,0,0),U.drawImage(r.domElement,0,0,e.width,e.height),t.teamwork){U.save(),U.scale(a,a);for(let C of t.blocks||[]){if(!C.placer||C.placer==="Base")continue;let B=Number.isInteger(C.level)?C.level:0,O=l/2+(C.left-180)*g,H=(C.right-C.left)*g,te=f-(B+1)*Ii*g,V=String(C.placer).slice(0,10);U.font=i==="sunset"?"14px VT323, monospace":i==="primetime"?'600 12px "Barlow Condensed", sans-serif':'600 10px "DM Sans", sans-serif';let W=Math.min(72,U.measureText(V).width+8),Q=O>l*.56?Math.max(2,O-W-3):Math.min(l-W-2,O+H+3);U.fillStyle=i==="paper"?"rgba(42,37,32,.85)":"rgba(6,10,36,.88)",U.fillRect(Q,te+3,W,13),U.fillStyle="#fff",U.textAlign="center",U.textBaseline="middle",U.fillText(V,Q+W/2,te+10,W-4)}U.restore()}u.dispose(),d.dispose(),S.geometry.dispose(),S.material.dispose(),E.geometry.dispose(),E.material.dispose(),_.shadow.map&&_.shadow.map.dispose();for(let C of m)C.geometry.dispose(),C.material.dispose();for(let C of x.bodies)C.data.mesh.geometry;return!0}catch(i){return console.warn("3D snapshot failed; using the flat drawing",i),!1}}function Np(s,e,t={set:(i,n)=>setTimeout(i,n),clear:i=>clearTimeout(i)}){let i=null;return{request(){return i!==null?!1:(i=t.set(()=>{i=null,s()},e),!0)},cancel(){i!==null&&(t.clear(i),i=null)},get pending(){return i!==null}}}var n5=".home-copy, #room-screen .side-card, .result-info, #results-screen .side-card",Up={Digit1:0,Numpad1:0,Digit2:1,Numpad2:1,Digit3:2,Numpad3:2},Bp=(s,e,t)=>Math.min(t,Math.max(e,s));function Op({doc:s=document,win:e=window,maxTilt:t=2.2,hover:i}={}){let n=s.documentElement,r=()=>n.dataset.motion==="reduced",o=i!==void 0?!!i:!(e.matchMedia&&e.matchMedia("(pointer: coarse)").matches),a=new Set,l=S=>!!S&&(/^(INPUT|TEXTAREA|SELECT)$/.test(S.tagName)||!!S.isContentEditable),c=S=>{S&&!S.disabled&&(S.classList.add("is-pressed"),a.add(S))},h=()=>{for(let S of a)S.classList.remove("is-pressed");a.clear()},u=S=>Object.prototype.hasOwnProperty.call(Up,S),d=S=>{S.repeat||s.body.dataset.screen!=="game"||l(S.target)||(S.code==="Space"?c(s.getElementById("drop-button")):u(S.code)&&c(s.querySelector(`.vote-option[data-option-index="${Up[S.code]}"]`)))},f=S=>{(S.code==="Space"||u(S.code))&&h()},g={el:null,rx:0,ry:0,tx:0,ty:0,raf:0},p=S=>{S&&(S.style.transform="",S.classList.remove("is-tilting"))},m=()=>{g.raf=0;let S=g.el;if(!S)return;if(g.rx+=(g.tx-g.rx)*.16,g.ry+=(g.ty-g.ry)*.16,g.tx===0&&g.ty===0&&Math.abs(g.rx)<.01&&Math.abs(g.ry)<.01){g.rx=g.ry=0,p(S),g.el=null;return}S.style.transform=`perspective(1100px) rotateX(${g.rx.toFixed(3)}deg) rotateY(${g.ry.toFixed(3)}deg)`,g.raf=e.requestAnimationFrame(m)},x=()=>{!g.raf&&g.el&&(g.raf=e.requestAnimationFrame(m))},v=()=>{g.tx=0,g.ty=0,x()},M=S=>{if(!o||S.pointerType==="touch")return;let E=S.target&&S.target.closest?S.target.closest(n5):null;if(!E||r()){v();return}g.el&&g.el!==E&&(p(g.el),g.rx=g.ry=0);let _=E.getBoundingClientRect();if(!(_.width>0&&_.height>0))return;let b=Bp((S.clientX-_.left)/_.width*2-1,-1,1),I=Bp((S.clientY-_.top)/_.height*2-1,-1,1);g.el=E,E.classList.add("is-tilting"),g.tx=-I*t,g.ty=b*t,x()},y=()=>v();return e.addEventListener("keydown",d),e.addEventListener("keyup",f),e.addEventListener("blur",h),s.addEventListener("pointermove",M),n.addEventListener("pointerleave",y),{get tilting(){return g.el},dispose(){e.removeEventListener("keydown",d),e.removeEventListener("keyup",f),e.removeEventListener("blur",h),s.removeEventListener("pointermove",M),n.removeEventListener("pointerleave",y),g.raf&&e.cancelAnimationFrame(g.raf),g.raf=0,p(g.el),g.el=null,h()}}}var kp="sabotage-stack-view-v1";function s5(){try{return window.localStorage.getItem(kp)||"3d"}catch{return"3d"}}function Hp(s){try{window.localStorage.setItem(kp,s)}catch{}}function zp(){let s=window.SabotageStackHost;if(!s||window.__stack3d)return;let e=new URLSearchParams(window.location.search),i=e.get("3d")==="off"||e.get("view")==="flat"?"flat":e.get("3d")==="on"?"3d":s5(),n=Yf(),r=document,o=r.documentElement,a=null,l=null,c=0,h=0,u="",d=null,f=r.createElement("button");f.type="button",f.id="view-toggle",f.className="button view-toggle";let g=r.querySelector(".top-tools");g&&g.insertBefore(f,g.firstChild),n||(f.hidden=!0);function p(S){f.setAttribute("aria-pressed",S?"true":"false"),f.textContent=S?"3D view":"Flat view",f.setAttribute("aria-label",S?"3D view is on. Activate to switch to the flat 2D view.":"Flat view is on. Activate to switch to the 3D view.")}let m=Np(()=>{if(!l)return;let S=l.theme;u=S;try{let E=_p(S,{size:192});yp(r,E),Mp(r,E)}catch(E){console.warn("3D icon sprites unavailable",E)}},160);function x(){l&&l.theme!==u&&m.request()}function v(S){if(c=requestAnimationFrame(v),!l||r.hidden){l&&(l.last=0);return}try{l.frame(S,{render:!window.__stack3dNoRender}),h=0,l.theme!==u&&x()}catch(E){h+=1,console.error("3D frame failed",E&&E.stack||E),h>=3&&(console.warn("Falling back to the flat view."),y(!0))}}function M(){if(!n||l)return!!l;try{a=r.createElement("canvas"),a.id="stage3d",a.setAttribute("aria-hidden","true"),r.body.insertBefore(a,r.body.firstChild),l=new Rc({canvas:a,host:s,tier:e.get("tier"),scale:Number(e.get("scale"))||1})}catch(S){return console.warn("3D could not start; staying flat.",S),a&&a.remove(),a=null,l=null,!1}return o.classList.add("has-3d"),s.setActive(!0),p(!0),d=Op({doc:r,win:window}),window.__stack3d=l,cancelAnimationFrame(c),c=requestAnimationFrame(v),!0}function y(S){if(cancelAnimationFrame(c),m.cancel(),d&&(d.dispose(),d=null),l)try{l.dispose()}catch{}a&&a.remove(),l=null,a=null,u="",window.__stack3d=null,o.classList.remove("has-3d"),Sp(r),s.setActive(!1),p(!1),document.documentElement.style.cursor=""}f.addEventListener("click",()=>{l?(Hp("flat"),y()):M()&&Hp("3d")}),s.snapshot=(S,E)=>l?Fp(l,S,E):!1,n&&i==="3d"?M():p(!1),window.__stack3dBoot={enable:M,disable:y,supported:n}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",zp):zp();})();
