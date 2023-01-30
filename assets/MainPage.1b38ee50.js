import{X as d,L as g,a as ve,E as C,_ as ge,o as w,c as y,b as s,d as Z,t as k,e as fe,u as we,r as b,f as ye,w as L,v as ee,g as be,h as Me,__tla as xe}from"./index.d5e235c3.js";let te,Ce=Promise.all([(()=>{try{return xe}catch{}})()]).then(async()=>{class ae{static call(e){return new Promise(a=>{const i=e.data(),r=d.shared().config.serializer.decodeFunctionName(i);if(!r)return g.e("[LocalClient : call] Function name is empty"),a(void 0);const v=ve.shared().find(r);if(v==null)return g.e("[LocalClient : call] Mapping not found for function: "+r),a(void 0);let u;try{u=d.shared().config.serializer.decodeMessage(i)}catch(l){g.e("[LocalClient : call] Error when decode message: "+C.get(l))}if(!u)return g.e("[LocalClient : call] Error when decode message for function: "+r),a(void 0);try{return a(v.target(u))}catch(l){g.e("[LocalClient : call] Error: "+C.get(l))}return a(void 0)})}}class R{constructor(){this._isAcquired=!1,this._acquiredMap=new Map,this.waitingMap=new Map,this.waitingList=[]}acquire(e){if(e){if(!this._acquiredMap.has(e)||!this._acquiredMap.get(e))return this._acquiredMap.set(e,!0),Promise.resolve()}else if(!this._isAcquired)return this._isAcquired=!0,Promise.resolve();return new Promise(a=>{if(e)if(this.waitingMap.has(e)){const i=this.waitingMap.get(e);i&&(i.push(a),this.waitingMap.set(e,i))}else this.waitingMap.set(e,[a]);else this.waitingList.push(a)})}isAcquired(e){return e?this._acquiredMap.has(e)?this._acquiredMap.get(e):!1:this._isAcquired}release(e){if(e){if(!this._acquiredMap.has(e)||!this._acquiredMap.get(e))throw new Error("Please acquire a lock for "+e+" before releasing!!");{const a=this.waitingMap.get(e);if(a&&a.length>0){const i=this.waitingMap.get(e)?.shift();i&&i()}else this.waitingMap.has(e)&&this.waitingMap.delete(e),this._acquiredMap.set(e,!1)}}else if(this._isAcquired)if(this.waitingList.length>0){const a=this.waitingList.shift();a&&a()}else this._isAcquired=!1;else throw new Error("Please acquire a lock before releasing!!")}}class m{constructor(){this.list=new Map,this.lock=new R}static shared(){return m.instance||(m.instance=new m),m.instance}async add(e,a){return await this.lock.acquire(),this.list.set(e,a),this.lock.release()}async execute(e,a){if(await this.lock.acquire(),this.list.has(e)){const i=this.list.get(e);return this.list.delete(e),this.lock.release(),i?.(a)}return this.lock.release()}async count(){await this.lock.acquire();const e=this.list.size;return this.lock.release(),e}}class h{constructor(){this.lock=new R,this.uid=0}static shared(){return h.instance||(h.instance=new h),h.instance}static async generate(){await h.shared().lock.acquire();const e=(++h.shared().uid).toString();return h.shared().lock.release(),e}}class U{static call(e){return new Promise(a=>{if(!d.shared().initialized)return g.e("[XRemoteClient : call] The WASM module is not initialized"),a(void 0);try{h.generate().then(i=>{m.shared().add(i,r=>a(d.shared().config.serializer.decodeFunctionReturnValue(r))),d.shared().module.ProxyClient.callFromJavascript(e.data(),r=>{m.shared().execute(i,r)})})}catch(i){return g.e("[XRemoteClient : call] Error: "+C.get(i)),a(void 0)}})}}class p{constructor(e,a){this.name=e,this.value=a}}class x{constructor(e,...a){this.functionName=e,this.params=a}data(){return d.shared().config.serializer.encodeRequest(this.functionName,...this.params)}}var ie={name:"VueCamera",props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:500},autoplay:{type:Boolean,default:!0},screenshotFormat:{type:String,default:"image/jpeg"},selectFirstDevice:{type:Boolean,default:!0},playsinline:{type:Boolean,default:!0},resolution:{type:Object,default:null,validator:t=>t.height&&t.width}},emits:["xplpc-camera-list","xplpc-camera-not-supported","xplpc-camera-changed","xplpc-camera-stopped","xplpc-camera-video-live","xplpc-camera-started","xplpc-camera-error"],data(){return{source:null,canvas:null,camerasListEmitted:!1,cameraList:[],deviceId:"",visible:!1,ctx:null,cameraInfo:"XPLPC"}},watch:{deviceId:function(t){this.changeCamera(t)}},beforeUnmount(){this.stop()},methods:{legacyGetUserMediaSupport(){return t=>{let e=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia;return e?new Promise(function(a,i){e.call(navigator,t,a,i)}):Promise.reject(new Error("[Camera : legacyGetUserMediaSupport] The method getUserMedia is not implemented in this browser"))}},setupMedia(){navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=this.legacyGetUserMediaSupport()),this.testMediaAccess()},loadCameraList(){navigator.mediaDevices.enumerateDevices().then(t=>{for(let e=0;e!==t.length;++e){let a=t[e];a.kind==="videoinput"&&this.cameraList.push(a)}}).then(()=>{this.camerasListEmitted||(this.selectFirstDevice&&this.cameraList.length>0&&this.setDeviceId(this.cameraList[0].deviceId),this.$emit("xplpc-camera-list",this.cameraList),this.camerasListEmitted=!0)}).catch(t=>this.$emit("xplpc-camera-not-supported",t))},changeCamera(t){this.stop(),this.$emit("xplpc-camera-changed",t),this.loadCamera(t)},loadSrcStream(t){"srcObject"in this.$refs.video?this.$refs.video.srcObject=t:this.source=window.HTMLMediaElement.srcObject(t),this.$refs.video.onloadedmetadata=()=>{this.$emit("xplpc-camera-video-live",t)},this.$emit("xplpc-camera-started",t)},stopStreamedVideo(t){let e=t.srcObject;e.getTracks().forEach(a=>{a.stop(),this.$emit("xplpc-camera-stopped",e),this.$refs.video.srcObject=null,this.source=null})},stop(){this.$refs.video&&this.$refs.video.srcObject&&this.stopStreamedVideo(this.$refs.video)},async start(){await navigator.mediaDevices.getUserMedia({audio:!1,video:!0}),this.deviceId||this.loadCameraList(),this.deviceId&&(this.setupMedia(),this.loadCamera(this.deviceId))},pause(){this.$refs.video&&this.$refs.video.srcObject&&this.$refs.video.pause()},resume(){this.$refs.video&&this.$refs.video.srcObject&&this.$refs.video.play()},processImage(){setInterval(async()=>{this.getCanvas();const t=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height);var e=t.data.length,a=new Uint8Array(t.data),i=d.shared().module._malloc(e);d.shared().module.HEAPU8.set(a,i);var r=performance.now();const v=new x("sample.image.grayscale.pointer",new p("pointer",i),new p("width",this.canvas.width),new p("height",this.canvas.height));await U.call(v);var u=performance.now(),l=u-r,M=new Uint8ClampedArray(d.shared().module.HEAPU8.buffer,i,e);this.ctx.putImageData(new ImageData(M,this.canvas.width,this.canvas.height),0,0);const f=this.$refs.preview;f.src=this.canvas.toDataURL(),d.shared().module._free(i),this.cameraInfo="Time to process: "+(l/1e3).toFixed(3)+` seconds
Image size: `+e/1024+" kb"},16)},testMediaAccess(){let t={video:!0};this.resolution&&(t.video={},t.video.height=this.resolution.height,t.video.width=this.resolution.width),navigator.mediaDevices.getUserMedia(t).then(e=>{e.getTracks().forEach(a=>{a.stop()}),this.loadCameraList()}).catch(e=>this.$emit("xplpc-camera-error",e))},loadCamera(t){let e={video:{deviceId:{exact:t}}};this.resolution&&(e.video.height=this.resolution.height,e.video.width=this.resolution.width),navigator.mediaDevices.getUserMedia(e).then(a=>this.loadSrcStream(a)).catch(a=>this.$emit("xplpc-camera-error",a))},capture(){return this.getCanvas().toDataURL(this.screenshotFormat)},getCanvas(){let t=this.$refs.video;if(!this.ctx){let i=document.createElement("canvas");i.width=t.videoWidth,i.height=t.videoHeight,this.canvas=i,this.ctx=i.getContext("2d",{willReadFrequently:!0})}const{ctx:e,canvas:a}=this;return e.drawImage(t,0,0,a.width,a.height),a},setDeviceId(t){this.deviceId=t},canPlay(){this.getCanvas(),this.processImage(),this.visible=!0}}};const se={class:"text-center"},re={class:"camera-container text-center"},ne=["width","height","src","autoplay","playsinline"],ce={key:0,ref:"preview",class:"camera-image"},le={key:0,class:"camera-info"};function oe(t,e){return w(),y("div",se,[s("div",re,[s("video",{ref:"video",width:t.width,height:t.height,src:t.source,autoplay:t.autoplay,playsinline:t.playsinline,style:{display:"none"},onCanplay:e[0]||(e[0]=(...a)=>t.canPlay&&t.canPlay(...a))},null,40,ne),t.visible?(w(),y("img",ce,null,512)):Z("",!0)]),t.visible?(w(),y("div",le,[s("p",null,k(t.cameraInfo),1)])):Z("",!0)])}var de=ge(ie,[["render",oe]]);let E,q,P,$,I,D,_,A,S,O,F,T,j,z,G,V,B,N,H,X,W,J,Y;E={class:"container"},q={key:0},P={class:"text-left"},$=s("h4",{id:"pageTitle",class:"my-5 text-center"},"BATTERY LEVEL",-1),I={class:"my-5 text-center"},D={id:"responseMessageForBattery",class:"text-center"},_=s("hr",null,null,-1),A=s("h4",{id:"pageTitle",class:"my-5 text-center"},"LOGIN",-1),S={class:"mb-3"},O=s("label",{for:"fieldUsername",class:"form-label"},"Username",-1),F={class:"mb-3"},T=s("label",{for:"fieldPassword",class:"form-label"},"Password",-1),j={class:"mb-3 form-check"},z=s("label",{class:"form-check-label",for:"fieldRemember"},"Remember",-1),G={class:"my-5 text-center"},V={id:"responseMessageForForm",class:"text-center"},B=s("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),N=s("hr",null,null,-1),H=s("h4",{id:"pageTitle",class:"my-5 text-center"},"CAMERA",-1),X={class:"mb-5 text-center"},W={key:1},J=s("div",{class:"text-center"},[s("p",{class:"my-5"},"Loading...")],-1),Y=[J],te=fe({__name:"MainPage",setup(t){const e=we(),a=b(null),i=b(null),r=b(!1),v=b(),u="Use account paulo/123456 to success login",l=b(u),M="Press Button To Execute",f=b(M);async function he(n){n.preventDefault(),K("Calling...");const o=new x("sample.login",new p("username",a.value),new p("password",i.value),new p("remember",r.value));let c=await U.call(o);K(c?"Response: "+c:"Response: ERROR!")}async function ue(n){n.preventDefault(),Q("Calling...");const o=new x("platform.battery.level",new p("suffix","%"));let c=await ae.call(o);Q(c?"Response: "+c:"Response: ERROR!")}async function me(n){n.preventDefault(),v.value?.start()}function K(n){n?l.value=n:l.value="ERROR!"}function Q(n){n?f.value=n:f.value="ERROR!"}function pe(){a.value=null,i.value=null,r.value=!1,l.value=u,f.value=M}return(n,o)=>(w(),y("div",E,[ye(e).isLoaded?(w(),y("div",q,[s("div",P,[$,s("p",I,[s("small",D,k(f.value),1)]),s("div",{class:"form-bt-group text-center mb-5"},[s("button",{type:"button",class:"btn btn-primary",onClick:ue},"Submit")]),_,A,s("form",{onSubmit:he},[s("div",S,[O,L(s("input",{id:"fieldUsername","onUpdate:modelValue":o[0]||(o[0]=c=>a.value=c),type:"text",class:"form-control"},null,512),[[ee,a.value]])]),s("div",F,[T,L(s("input",{id:"fieldPassword","onUpdate:modelValue":o[1]||(o[1]=c=>i.value=c),type:"password",class:"form-control"},null,512),[[ee,i.value]])]),s("div",j,[L(s("input",{id:"fieldRemember","onUpdate:modelValue":o[2]||(o[2]=c=>r.value=c),type:"checkbox",class:"form-check-input"},null,512),[[be,r.value]]),z]),s("p",G,[s("small",V,k(l.value),1)]),s("div",{class:"form-bt-group text-center mb-5"},[B,s("button",{type:"button",class:"btn btn-primary",onClick:pe},"Clear")])],32),N,H,s("div",X,[Me(de,{ref_key:"camera",ref:v,width:240,height:320},null,512)]),s("div",{class:"form-bt-group text-center mb-5"},[s("button",{type:"button",class:"btn btn-primary",onClick:me},"Open")])])])):(w(),y("div",W,Y))]))}})});export{Ce as __tla,te as default};
