import{X as o,L as Z,E as ve,_ as ge,o as p,c as v,a as s,b as ee,t as U,d as fe,u as we,r as g,e as ye,w as C,v as te,f as be,g as xe,__tla as Me}from"./index-7f92bb3a.js";let ae,Ue=Promise.all([(()=>{try{return Me}catch{}})()]).then(async()=>{class k{_isAcquired=!1;_acquiredMap=new Map;waitingMap=new Map;waitingList=[];acquire(e){if(e){if(!this._acquiredMap.has(e)||!this._acquiredMap.get(e))return this._acquiredMap.set(e,!0),Promise.resolve()}else if(!this._isAcquired)return this._isAcquired=!0,Promise.resolve();return new Promise(t=>{if(e)if(this.waitingMap.has(e)){const i=this.waitingMap.get(e);i&&(i.push(t),this.waitingMap.set(e,i))}else this.waitingMap.set(e,[t]);else this.waitingList.push(t)})}isAcquired(e){return e?this._acquiredMap.has(e)?this._acquiredMap.get(e):!1:this._isAcquired}release(e){if(e){if(!this._acquiredMap.has(e)||!this._acquiredMap.get(e))throw new Error("Please acquire a lock for "+e+" before releasing!!");{const t=this.waitingMap.get(e);if(t&&t.length>0){const i=this.waitingMap.get(e)?.shift();i&&i()}else this.waitingMap.has(e)&&this.waitingMap.delete(e),this._acquiredMap.set(e,!1)}}else if(this._isAcquired)if(this.waitingList.length>0){const t=this.waitingList.shift();t&&t()}else this._isAcquired=!1;else throw new Error("Please acquire a lock before releasing!!")}}class d{static instance;list=new Map;lock=new k;constructor(){}static shared(){return d.instance||(d.instance=new d),d.instance}async add(e,t){return await this.lock.acquire(),this.list.set(e,t),this.lock.release()}async execute(e,t){if(await this.lock.acquire(),this.list.has(e)){const i=this.list.get(e);return this.list.delete(e),this.lock.release(),i?.(t)}return this.lock.release()}async count(){await this.lock.acquire();const e=this.list.size;return this.lock.release(),e}}class h{static instance;lock=new k;uid=0;constructor(){}static shared(){return h.instance||(h.instance=new h),h.instance}static async generate(){await h.shared().lock.acquire();const e="JS-"+(++h.shared().uid).toString();return h.shared().lock.release(),e}}class y{static call(e){return new Promise(t=>{if(!o.shared().initialized)return Z.e("[XClient : call] The WASM module is not initialized"),t(void 0);try{h.generate().then(i=>{typeof e=="string"?(d.shared().add(i,r=>t(r)),o.shared().module.Client.call(e,r=>{d.shared().execute(i,r)})):(d.shared().add(i,r=>t(o.shared().config.serializer.decodeFunctionReturnValue(r))),o.shared().module.Client.call(e.data(),r=>{d.shared().execute(i,r)}))})}catch(i){return Z.e("[XClient : call] Error: "+ve.get(i)),t(void 0)}})}}class f{name;value;constructor(e,t){this.name=e,this.value=t}}class b{functionName;params;constructor(e,...t){this.functionName=e,this.params=t}data(){return o.shared().config.serializer.encodeRequest(this.functionName,...this.params)}}class w{ptr;size;constructor(e,t){this.ptr=e,this.size=t}static createFromArrayBuffer(e){const t=e.byteLength,i=o.shared().module._malloc(t);return o.shared().module.HEAPU8.set(e,i),new w(i,t)}static createUint8ArrayFromPtr(e,t){return new Uint8Array(o.shared().module.HEAPU8.buffer,e,t)}static createUint8ClampedArrayFromPtr(e,t){return new Uint8ClampedArray(o.shared().module.HEAPU8.buffer,e,t)}static free(e){o.shared().module._free(e.ptr)}}const se={name:"VueCamera",props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:500},autoplay:{type:Boolean,default:!0},screenshotFormat:{type:String,default:"image/jpeg"},selectFirstDevice:{type:Boolean,default:!0},playsinline:{type:Boolean,default:!0},resolution:{type:Object,default:null,validator:a=>a.height&&a.width}},emits:["xplpc-camera-list","xplpc-camera-not-supported","xplpc-camera-changed","xplpc-camera-stopped","xplpc-camera-video-live","xplpc-camera-started","xplpc-camera-error"],data(){return{source:null,canvas:null,camerasListEmitted:!1,cameraList:[],deviceId:"",visible:!1,ctx:null,cameraInfo:"XPLPC",destWidth:0,destHeight:0}},watch:{deviceId:function(a){this.changeCamera(a)}},beforeUnmount(){this.stop()},methods:{legacyGetUserMediaSupport(){return a=>{const e=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia;return e?new Promise(function(t,i){e.call(navigator,a,t,i)}):Promise.reject(new Error("[Camera : legacyGetUserMediaSupport] The method getUserMedia is not implemented in this browser"))}},setupMedia(){navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=this.legacyGetUserMediaSupport()),this.testMediaAccess()},loadCameraList(){navigator.mediaDevices.enumerateDevices().then(a=>{for(let e=0;e!==a.length;++e){const t=a[e];t.kind==="videoinput"&&this.cameraList.push(t)}}).then(()=>{this.camerasListEmitted||(this.selectFirstDevice&&this.cameraList.length>0&&this.setDeviceId(this.cameraList[0].deviceId),this.$emit("xplpc-camera-list",this.cameraList),this.camerasListEmitted=!0)}).catch(a=>this.$emit("xplpc-camera-not-supported",a))},changeCamera(a){this.stop(),this.$emit("xplpc-camera-changed",a),this.loadCamera(a)},loadSrcStream(a){"srcObject"in this.$refs.video?this.$refs.video.srcObject=a:this.source=window.HTMLMediaElement.srcObject(a),this.$refs.video.onloadedmetadata=()=>{this.$emit("xplpc-camera-video-live",a)},this.$emit("xplpc-camera-started",a)},stopStreamedVideo(a){const e=a.srcObject;e.getTracks().forEach(t=>{t.stop(),this.$emit("xplpc-camera-stopped",e),this.$refs.video.srcObject=null,this.source=null})},stop(){this.$refs.video&&this.$refs.video.srcObject&&this.stopStreamedVideo(this.$refs.video)},async start(){await navigator.mediaDevices.getUserMedia({audio:!1,video:!0}),this.deviceId||this.loadCameraList(),this.deviceId&&(this.setupMedia(),this.loadCamera(this.deviceId))},pause(){this.$refs.video&&this.$refs.video.srcObject&&this.$refs.video.pause()},resume(){this.$refs.video&&this.$refs.video.srcObject&&this.$refs.video.play()},processImage(){setInterval(async()=>{this.getCanvas();const a=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),e=w.createFromArrayBuffer(a.data),t=performance.now(),i=new b("sample.image.grayscale.dataview",new f("dataView",e));await y.call(i);const r=performance.now()-t,m=w.createUint8ClampedArrayFromPtr(e.ptr,e.size);this.ctx.putImageData(new ImageData(m,this.canvas.width,this.canvas.height),0,0);const u=this.$refs.preview;u.src=this.canvas.toDataURL(),w.free(e),this.cameraInfo="Time to process: "+(r/1e3).toFixed(3)+` seconds
Image size: `+e.size/1024+" kb"},16)},testMediaAccess(){const a={video:!0};this.resolution&&(a.video={},a.video.width=this.resolution.width,a.video.height=this.resolution.height),navigator.mediaDevices.getUserMedia(a).then(e=>{e.getTracks().forEach(t=>{t.stop()}),this.loadCameraList()}).catch(e=>this.$emit("xplpc-camera-error",e))},loadCamera(a){const e={video:{deviceId:{exact:a}}};this.resolution&&(e.video.width=this.resolution.width,e.video.height=this.resolution.height),navigator.mediaDevices.getUserMedia(e).then(t=>this.loadSrcStream(t)).catch(t=>this.$emit("xplpc-camera-error",t))},capture(){return this.getCanvas().toDataURL(this.screenshotFormat)},getCanvas(){const a=this.$refs.video;if(!this.ctx){this.destWidth=240,this.destHeight=this.destWidth*a.videoHeight/a.videoWidth,this.destHeight>320&&(this.destHeight=320,this.destWidth=this.destHeight*a.videoWidth/a.videoHeight);const i=this.$refs.canvas;i.width=this.destWidth,i.height=this.destHeight,this.canvas=i,a.width=this.destWidth,a.height=this.destHeight,this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0})}const{ctx:e,canvas:t}=this;return e.drawImage(a,0,0,this.destWidth,this.destHeight),t},setDeviceId(a){this.deviceId=a},canPlay(){this.getCanvas(),this.processImage(),this.visible=!0}}},ie={class:"text-center"},re={class:"camera-container text-center"},ne=["src","autoplay","playsinline"],ce={key:0,ref:"preview",class:"camera-image"},le={key:0,class:"camera-info"},oe={ref:"canvas",style:{display:"none"}};function de(a,e,t,i,r,m){return p(),v("div",ie,[s("div",re,[s("video",{ref:"video",src:r.source,autoplay:t.autoplay,playsinline:t.playsinline,style:{display:"none"},onCanplay:e[0]||(e[0]=(...u)=>m.canPlay&&m.canPlay(...u))},null,40,ne),r.visible?(p(),v("img",ce,null,512)):ee("",!0)]),r.visible?(p(),v("div",le,[s("p",null,U(r.cameraInfo),1)])):ee("",!0),s("canvas",oe,null,512)])}let L,R,q,P,$,A,E,I,D,S,_,F,O,H,T,j,z,W,V,B,G,N,X,J,x,Y;L=ge(se,[["render",de]]),R={class:"container"},q={key:0},P={class:"text-left"},$=s("h4",{id:"pageTitle",class:"my-5 text-center"},"BATTERY LEVEL",-1),A={class:"my-5 text-center"},E={id:"responseMessageForBattery",class:"text-center"},I=s("hr",null,null,-1),D=s("h4",{id:"pageTitle",class:"my-5 text-center"},"LOGIN",-1),S={class:"mb-3"},_=s("label",{for:"fieldUsername",class:"form-label"},"Username",-1),F={class:"mb-3"},O=s("label",{for:"fieldPassword",class:"form-label"},"Password",-1),H={class:"mb-3 form-check"},T=s("label",{class:"form-check-label",for:"fieldRemember"},"Remember",-1),j={class:"my-5 text-center"},z={id:"responseMessageForForm",class:"text-center"},W=s("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),V=s("hr",null,null,-1),B=s("h4",{id:"pageTitle",class:"my-5 text-center"},"CAMERA",-1),G={class:"mb-5 text-center"},N={key:1},X=s("div",{class:"text-center"},[s("p",{class:"my-5"},"Loading...")],-1),J=[X],x="Use account paulo/123456 to success login",Y="Press Button To Execute",ae=fe({__name:"MainPage",setup(a){const e=we(),t=g(null),i=g(null),r=g(!1),m=g(),u=g(x),M=g(Y);async function he(n){n.preventDefault(),K("Calling...");const l=new b("sample.login",new f("username",t.value),new f("password",i.value),new f("remember",r.value)),c=await y.call(l);K(c?"Response: "+c:"Response: ERROR!")}async function ue(n){n.preventDefault(),Q("Calling...");const l=new b("platform.battery.level",new f("suffix","%")),c=await y.call(l);Q(c?"Response: "+c:"Response: ERROR!")}async function me(n){n.preventDefault(),m.value?.start()}function K(n){n?u.value=n:u.value="ERROR!"}function Q(n){n?M.value=n:M.value="ERROR!"}function pe(){t.value=null,i.value=null,r.value=!1,u.value=x}return(n,l)=>(p(),v("div",R,[ye(e).isLoaded?(p(),v("div",q,[s("div",P,[$,s("p",A,[s("small",E,U(M.value),1)]),s("div",{class:"form-bt-group text-center mb-5"},[s("button",{type:"button",class:"btn btn-primary",onClick:ue},"Submit")]),I,D,s("form",{onSubmit:he},[s("div",S,[_,C(s("input",{id:"fieldUsername","onUpdate:modelValue":l[0]||(l[0]=c=>t.value=c),type:"text",class:"form-control"},null,512),[[te,t.value]])]),s("div",F,[O,C(s("input",{id:"fieldPassword","onUpdate:modelValue":l[1]||(l[1]=c=>i.value=c),type:"password",class:"form-control"},null,512),[[te,i.value]])]),s("div",H,[C(s("input",{id:"fieldRemember","onUpdate:modelValue":l[2]||(l[2]=c=>r.value=c),type:"checkbox",class:"form-check-input"},null,512),[[be,r.value]]),T]),s("p",j,[s("small",z,U(u.value),1)]),s("div",{class:"form-bt-group text-center mb-5"},[W,s("button",{type:"button",class:"btn btn-primary",onClick:pe},"Clear")])],32),V,B,s("div",G,[xe(L,{ref_key:"camera",ref:m,width:240,height:320},null,512)]),s("div",{class:"form-bt-group text-center mb-5"},[s("button",{type:"button",class:"btn btn-primary",onClick:me},"Open")])])])):(p(),v("div",N,J))]))}})});export{Ue as __tla,ae as default};