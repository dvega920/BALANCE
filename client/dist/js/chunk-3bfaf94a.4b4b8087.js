(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bfaf94a"],{"48f1":function(t,a,e){t.exports=e.p+"img/jappleseedprofilepic.45021a6b.jpeg"},c66d:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-layout",[e("v-flex",{attrs:{xs12:"","justify-center":""}},[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("myProfile")],1)],1)],1)],1)],1)},n=[],s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[i("v-layout",{attrs:{"justify-center":"",wrap:""}},[i("v-flex",{attrs:{xs12:"",md4:""}},[i("v-card",{staticClass:"pa-4",attrs:{height:"400px",outlined:""}},[i("material-card",{staticClass:"v-card-profile"},[i("v-avatar",{staticClass:"mx-auto d-block",attrs:{slot:"offset",size:"130"},slot:"offset"},[i("img",{attrs:{src:e("48f1")}})]),i("v-card-text",{staticClass:"text-xs-center"},[i("h6",{staticClass:"category text-gray font-weight-thin mb-3"},[t._v("Balance")]),i("h4",{staticClass:"card-title font-weight-light"},[t._v("Welcome! "+t._s(t.patient_name))]),i("p",{staticClass:"card-description font-weight-light"},[t._v("Age: "+t._s(t.age))]),i("p",{staticClass:"card-description font-weight-light"},[t._v("Email: "+t._s(t.patient_email))]),i("p",{staticClass:"card-description font-weight-light"},[t._v("Your Physician:")]),i("p",[t._v("Dr. "+t._s(t.physician.firstName)+" "+t._s(t.physician.lastName))])])],1)],1),i("v-btn",{staticClass:"mt-3",attrs:{dark:"",color:"#3f51b5",block:"",to:"/Home"}},[t._v("Back to Dashboard")])],1)],1)],1)},l=[],r=e("7338"),c=e.n(r),o={props:{source:String},data:function(){return{patient_name:null,age:null,patient_email:null,physician:null}},mounted:function(){var t=this;c.a.get("/api/patients/1").then((function(a){t.patient_name=a.data.patient_name,t.age=a.data.age,t.patient_email=a.data.patient_email,t.physician=a.data.Physician}))}},p=o,f=e("2877"),u=e("6544"),d=e.n(u),h=e("8212"),m=e("8336"),v=e("b0af"),g=e("99d9"),_=e("a523"),x=e("0e8f"),y=e("a722"),b=Object(f["a"])(p,s,l,!1,null,null,null),w=b.exports;d()(b,{VAvatar:h["a"],VBtn:m["a"],VCard:v["a"],VCardText:g["b"],VContainer:_["a"],VFlex:x["a"],VLayout:y["a"]});var C={name:"App",components:{myProfile:w}},V=C,k=e("0fd9"),j=Object(f["a"])(V,i,n,!1,null,null,null);a["default"]=j.exports;d()(j,{VContainer:_["a"],VFlex:x["a"],VLayout:y["a"],VRow:k["a"]})}}]);
//# sourceMappingURL=chunk-3bfaf94a.4b4b8087.js.map