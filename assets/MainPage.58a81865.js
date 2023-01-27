import{X as f,L as u,a as A,E as q,d as S,u as z,r as g,c as M,b as T,e as t,t as L,w as R,v as E,f as N,o as x}from"./index.9f0126c8.js";class V{static call(e){return new Promise(s=>{const a=e.data(),i=f.shared().config.serializer.decodeFunctionName(a);if(!i)return u.e("[LocalClient : call] Function name is empty"),s(void 0);const p=A.shared().find(i);if(p==null)return u.e("[LocalClient : call] Mapping not found for function: "+i),s(void 0);let c;try{c=f.shared().config.serializer.decodeMessage(a)}catch(h){u.e("[LocalClient : call] Error when decode message: "+q.get(h))}if(!c)return u.e("[LocalClient : call] Error when decode message for function: "+i),s(void 0);try{return s(p.target(c))}catch(h){u.e("[LocalClient : call] Error: "+q.get(h))}return s(void 0)})}}class P{constructor(){this._isAcquired=!1,this._acquiredMap=new Map,this.waitingMap=new Map,this.waitingList=[]}acquire(e){if(e){if(!this._acquiredMap.has(e)||!this._acquiredMap.get(e))return this._acquiredMap.set(e,!0),Promise.resolve()}else if(!this._isAcquired)return this._isAcquired=!0,Promise.resolve();return new Promise(s=>{if(e)if(this.waitingMap.has(e)){const a=this.waitingMap.get(e);a&&(a.push(s),this.waitingMap.set(e,a))}else this.waitingMap.set(e,[s]);else this.waitingList.push(s)})}isAcquired(e){return e?this._acquiredMap.has(e)?this._acquiredMap.get(e):!1:this._isAcquired}release(e){if(e){if(!this._acquiredMap.has(e)||!this._acquiredMap.get(e))throw new Error("Please acquire a lock for "+e+" before releasing!!");{const s=this.waitingMap.get(e);if(s&&s.length>0){const a=this.waitingMap.get(e)?.shift();a&&a()}else this.waitingMap.has(e)&&this.waitingMap.delete(e),this._acquiredMap.set(e,!1)}}else if(this._isAcquired)if(this.waitingList.length>0){const s=this.waitingList.shift();s&&s()}else this._isAcquired=!1;else throw new Error("Please acquire a lock before releasing!!")}}class d{constructor(){this.list=new Map,this.lock=new P}static shared(){return d.instance||(d.instance=new d),d.instance}async add(e,s){return await this.lock.acquire(),this.list.set(e,s),this.lock.release()}async execute(e,s){if(await this.lock.acquire(),this.list.has(e)){const a=this.list.get(e);return this.list.delete(e),this.lock.release(),a?.(s)}return this.lock.release()}async count(){await this.lock.acquire();const e=this.list.size;return this.lock.release(),e}}class l{constructor(){this.lock=new P,this.uid=0}static shared(){return l.instance||(l.instance=new l),l.instance}static async generate(){await l.shared().lock.acquire();const e=(++l.shared().uid).toString();return l.shared().lock.release(),e}}class X{static call(e){return new Promise(s=>{if(!f.shared().initialized)return u.e("[XRemoteClient : call] The WASM module is not initialized"),s(void 0);try{l.generate().then(a=>{d.shared().add(a,i=>s(f.shared().config.serializer.decodeFunctionReturnValue(i))),f.shared().module.ProxyClient.callFromJavascript(e.data(),i=>{d.shared().execute(a,i)})})}catch(a){return u.e("[XRemoteClient : call] Error: "+q.get(a)),s(void 0)}})}}class _{constructor(e,s){this.name=e,this.value=s}}class F{constructor(e,...s){this.functionName=e,this.params=s}data(){return f.shared().config.serializer.encodeRequest(this.functionName,...this.params)}}const O={class:"container"},k={key:0},U={class:"text-left"},W=t("h4",{id:"pageTitle",class:"my-5 text-center"},"BATTERY LEVEL",-1),G={class:"my-5 text-center"},J={id:"responseMessageForBattery",class:"text-center"},Y=t("hr",null,null,-1),j=t("h4",{id:"pageTitle",class:"my-5 text-center"},"LOGIN",-1),H={class:"mb-3"},K=t("label",{for:"fieldUsername",class:"form-label"},"Username",-1),Q={class:"mb-3"},Z=t("label",{for:"fieldPassword",class:"form-label"},"Password",-1),$={class:"mb-3 form-check"},D=t("label",{class:"form-check-label",for:"fieldRemember"},"Remember",-1),I={class:"my-5 text-center"},ee={id:"responseMessageForForm",class:"text-center"},se=t("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),te={key:1},ae=t("div",{class:"text-center"},[t("p",{class:"my-5"},"Loading...")],-1),ie=[ae],re=S({__name:"MainPage",setup(m){const e=z(),s=g(null),a=g(null),i=g(!1),p="Use account paulo/123456 to success login",c=g(p),h="Press Button To Execute",w=g(h);async function C(r){r.preventDefault(),v("Calling...");const o=new F("sample.login",new _("username",s.value),new _("password",a.value),new _("remember",i.value));let n=await X.call(o);v(n?"Response: "+n:"Response: ERROR!")}async function y(r){r.preventDefault(),b("Calling...");const o=new F("platform.battery.level",new _("suffix","%"));let n=await V.call(o);b(n?"Response: "+n:"Response: ERROR!")}function v(r){r?c.value=r:c.value="ERROR!"}function b(r){r?w.value=r:w.value="ERROR!"}function B(){s.value=null,a.value=null,i.value=!1,c.value=p,w.value=h}return(r,o)=>(x(),M("div",O,[T(e).isLoaded?(x(),M("div",k,[t("div",U,[W,t("p",G,[t("small",J,L(w.value),1)]),t("div",{class:"form-bt-group text-center mb-5"},[t("button",{type:"button",class:"btn btn-primary",onClick:y},"Submit")]),Y,j,t("form",{onSubmit:C},[t("div",H,[K,R(t("input",{id:"fieldUsername","onUpdate:modelValue":o[0]||(o[0]=n=>s.value=n),type:"text",class:"form-control"},null,512),[[E,s.value]])]),t("div",Q,[Z,R(t("input",{id:"fieldPassword","onUpdate:modelValue":o[1]||(o[1]=n=>a.value=n),type:"password",class:"form-control"},null,512),[[E,a.value]])]),t("div",$,[R(t("input",{id:"fieldRemember","onUpdate:modelValue":o[2]||(o[2]=n=>i.value=n),type:"checkbox",class:"form-check-input"},null,512),[[N,i.value]]),D]),t("p",I,[t("small",ee,L(c.value),1)]),t("div",{class:"form-bt-group text-center mb-5"},[se,t("button",{type:"button",class:"btn btn-primary",onClick:B},"Clear")])],32)])])):(x(),M("div",te,ie))]))}});export{re as default};
