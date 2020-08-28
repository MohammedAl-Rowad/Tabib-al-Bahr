(this["webpackJsonptabib-al-bahr"]=this["webpackJsonptabib-al-bahr"]||[]).push([[0],{1110:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(69),i=t.n(r),c=(t(551),t(552),t(55)),o=t(29),s=(t(553),t(554),t(555),t(556),t(1115)),m=t(1125),u=t(143),d=s.a.Header,p=s.a.Body,E=m.a.Item;function _(){return l.a.createElement(s.a,{style:{boxShadow:"0px 2px 10px #406C75"}},l.a.createElement(d,null),l.a.createElement(p,null,l.a.createElement(m.a,null,l.a.createElement(c.c,{to:"/",activeClassName:"active-route",exact:!0},l.a.createElement(E,{eventKey:"1",icon:l.a.createElement(u.a,{icon:"home"})},"\u0627\u0644\u0635\u0641\u062d\u0647 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0647")),l.a.createElement(c.c,{to:"/patients",activeClassName:"active-route"},l.a.createElement(E,{eventKey:"2",icon:l.a.createElement(u.a,{icon:"stethoscope"})},"\u0627\u0644\u0645\u0640\u0640\u0640\u0631\u0636\u0649"))),l.a.createElement(m.a,{pullRight:!0},l.a.createElement(c.c,{to:"/analytics",activeClassName:"active-route"},l.a.createElement(E,{eventKey:"3",icon:l.a.createElement(u.a,{icon:"pie-chart"})},"\u0625\u062d\u0635\u0640\u0640\u0627\u0626\u0640\u0640\u0640\u064a\u0627\u062a")))))}var b=t(8),g=t(70),h=t(513),f=t.n(h),y=t(1128),x=t(1132),j=t(1133),O=t(1134),v=t(1129),C=t(1135),w=t(1117),D=t(1136),k=t(1124),T=t(1137),M=t(1138),S=t(142),I=t(78);function L(){var e=Object(n.useState)({email:"",password:"",isLoggedIn:!1}),a=Object(g.a)(e,2),t=a[0],r=a[1];I.auth().currentUser&&r(Object(b.a)(Object(b.a)({},t),{},{isLoggedIn:!0}));var i=t.isLoggedIn;return l.a.createElement(x.a,{style:{padding:70}},l.a.createElement(j.a,null,l.a.createElement(O.a,{xs:24,sm:24,md:24},l.a.createElement(v.a,{bodyFill:!0,style:{display:"inline-block"}},l.a.createElement("img",{src:f.a,alt:"doctor1",width:"100%",height:"auto"}))),i?"":l.a.createElement(O.a,{xs:24,sm:24,md:24},l.a.createElement(C.a,{onChange:function(e){r(Object(b.a)(Object(b.a)({},t),e))}},l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0627\u0644\u0627\u064a\u0645\u064a\u0644"),l.a.createElement(k.a,{name:"email"}),l.a.createElement(T.a,null,"\u0647\u0630\u0647 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0647 \u0645\u0637\u0644\u0648\u0628\u0647")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0643\u0644\u0645\u0647 \u0627\u0644\u0633\u0631"),l.a.createElement(k.a,{name:"password",type:"password"}),l.a.createElement(T.a,null,"\u0647\u0630\u0647 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0647 \u0645\u0637\u0644\u0648\u0628\u0647")),l.a.createElement(w.a,null,l.a.createElement(M.a,null,l.a.createElement(S.a,{appearance:"primary",onClick:function(){var e=t.email,a=t.password;I.auth().signInWithEmailAndPassword(e,a).then((function(){return y.a.success("\u062a\u0645 \u0627\u0644\u062f\u062e\u0648\u0644!")})).catch((function(){return y.a.error("\u0643\u0644\u0645\u0647 \u0627\u0644\u0633\u0631 \u0627\u0648 \u0627\u0644\u0627\u064a\u0645\u064a\u0644 \u062e\u0637\u0623 ")}))}},"\u062f\u062e\u0648\u0644")))))))}var F=t(232),N=t(516),Y=(t(711),t(712),t(535)),z=["id","patient_name","patient_sex","patient_extra_info","patient_ID","patient_city","patient_city_extra","patient_phone","patient_disease_history","patient_educational_lvl","patient_family_history","patient_medicine_history","patient_surgery_history"];function B(){var e=Object(n.useState)({columnDefs:[{headerName:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0631\u064a\u0636",field:"patient_name",cellRendererFramework:function(e){var a=e.value,t=e.data;return l.a.createElement(c.b,{to:"/display/patients/".concat(t.id)},a)}},{headerName:"\u0627\u0644\u062c\u0646\u0633",field:"patient_sex"},{headerName:"\u0627\u0644\u0645\u062f\u064a\u0646\u0629",field:"patient_city"},{headerName:"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641",field:"patient_phone"},{headerName:"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0647 \u0639\u0646 \u0627\u0644\u0633\u0643\u0646",field:"patient_city_extra"},{headerName:"\u0627\u0644\u0633\u064a\u0631\u0647 \u0627\u0644\u0645\u0631\u0636\u064a\u0629",field:"patient_disease_history"},{headerName:"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0623\u062f\u0648\u064a\u0647",field:"patient_medicine_history"},{headerName:"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a",field:"patient_surgery_history"}],rowData:[],defaultColDef:{editable:!0,sortable:!0,flex:1,minWidth:100,filter:!0,resizable:!0}}),a=Object(g.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){var e=I.firestore(),a=[],n=z.reduce((function(e,a){return Object(b.a)(Object(b.a)({},e),{},Object(F.a)({},a,""))}),{});e.collection("patients").get().then((function(e){e.forEach((function(e){a.push(Object(b.a)(Object(b.a)(Object(b.a)({},n),e.data()),{},{id:e.id}))})),r(Object(b.a)(Object(b.a)({},t),{},{rowData:a}))}))}),[]),l.a.createElement(x.a,{fluid:!0,style:{marginTop:10}},l.a.createElement(j.a,null,l.a.createElement(O.a,{xs:24,sm:24,md:24},l.a.createElement(c.b,{to:"/patients/add"},l.a.createElement(Y.a,{icon:l.a.createElement(u.a,{icon:"plus"}),color:"blue"},"\u0625\u0636\u0627\u0641\u0640\u0640\u0629 \u0645\u0631\u064a\u0640\u0640\u0636"))),l.a.createElement(O.a,{xs:24,sm:24,md:24,style:{marginTop:10}},l.a.createElement("div",{className:"ag-theme-alpine",style:{height:"100vh",width:"100%"}},l.a.createElement(N.AgGridReact,{columnDefs:t.columnDefs,rowData:t.rowData,defaultColDef:t.defaultColDef,enableRtl:!0})))))}var H=t(186),R=t(1118),U=t(1130),W=t(1126),A=t(1122),V=t(79),K=t(235),X=t.n(K);function J(){var e=Object(o.g)().id,a=Object(n.useState)({patient_name:"",patient_sex:"",patient_extra_info:"",loading:!1,redirect:!1,userId:"",birth_of_date:new Date,patient_city:"",patient_city_extra:"",patient_phone:"",patient_disease_history:"",patient_medicine_history:"",patient_surgery_history:"",patient_medicines_that_cause_allergies:"",edit:!!e,gloablLoading:!!e}),t=Object(g.a)(a,2),r=t[0],i=t[1],c=Object(V.i)().collection("patients");Object(n.useEffect)((function(){e&&c.doc(e).get().then((function(e){var a=e.data(),t=a.patient_name,n=a.patient_sex,l=a.patient_extra_info,c=a.birth_of_date,o=a.patient_city,s=a.patient_city_extra,m=a.patient_phone,u=a.patient_disease_history,d=a.patient_medicine_history,p=a.patient_surgery_history,E=a.patient_medicines_that_cause_allergies;i(Object(b.a)(Object(b.a)({},r),{},{patient_name:t,patient_sex:n,patient_extra_info:l,birth_of_date:c,patient_city:o,patient_city_extra:s,patient_phone:m,patient_disease_history:u,patient_medicine_history:d,patient_surgery_history:p,patient_medicines_that_cause_allergies:E}))}))}),[]);var s=function(){if(e){i(Object(b.a)(Object(b.a)({},r),{},{loading:!0}));r.redirect,r.userId,r.loading;var a=Object(H.a)(r,["redirect","userId","loading"]);c.doc(e).update(Object(b.a)({},a)).then((function(){y.a.success("\u062a\u0645 \u0627\u0644\u062a\u0639\u062f\u064a\u0644 \u0628\u0646\u062c\u0627\u062d"),i(Object(b.a)(Object(b.a)({},r),{},{loading:!1,redirect:!0,userId:e}))}))}else{i(Object(b.a)(Object(b.a)({},r),{},{loading:!0}));r.redirect,r.userId,r.loading,r.gloablLoading,r.edit;var t=Object(H.a)(r,["redirect","userId","loading","gloablLoading","edit"]);c.add(t).then((function(e){y.a.success("\u062a\u0645\u062a \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0631\u064a\u0636 \u0628\u0646\u062c\u0627\u062d"),i(Object(b.a)(Object(b.a)({},r),{},{loading:!1,redirect:!0,userId:e.id}))}))}},m=r.patient_sex,u=r.patient_name;return r.redirect?l.a.createElement(o.a,{to:"/display/patients/".concat(r.userId)}):l.a.createElement(x.a,{style:{padding:70}},l.a.createElement(j.a,null,l.a.createElement(O.a,{xs:24,sm:24,md:24},l.a.createElement(C.a,null,l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0627\u0633\u0640\u0640\u0645 \u0627\u0644\u0645\u0631\u064a\u0640\u0640\u0636 \u0627\u0644\u0643\u0627\u0645\u0644"),l.a.createElement(k.a,{name:"patient_name",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{patient_name:e}))},value:r.patient_name}),l.a.createElement(T.a,null,"\u0644\u0627 \u064a\u0645\u0643\u0646 \u062a\u062e\u0632\u064a\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0628\u062f\u0648\u0646 \u0647\u0630\u0647 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u062c\u0646\u0640\u0633 \u0627\u0644\u0645\u0631\u064a\u0640\u0640\u0636"),l.a.createElement(T.a,null,"\u0644\u0627 \u064a\u0645\u0643\u0646 \u062a\u062e\u0632\u064a\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0628\u062f\u0648\u0646 \u0647\u0630\u0647 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0629"),l.a.createElement(k.a,{name:"patient_sex",accepter:R.a,value:r.patient_sex,onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{patient_sex:e}))}},l.a.createElement(U.a,{value:"\u0630\u0643\u0640\u0640\u0640\u0631"},"\u0630\u0643\u0640\u0640\u0640\u0631"),l.a.createElement(U.a,{value:"\u0623\u0646\u062b\u0640\u0640\u0640\u0649"},"\u0623\u0646\u062b\u0640\u0640\u0640\u0649"))),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0627\u0644\u0633\u0643\u0646"),l.a.createElement(W.a,{data:[{label:"\u0639\u0645\u0627\u0646",value:"\u0639\u0645\u0627\u0646"},{label:"\u0627\u0644\u0632\u0631\u0642\u0627\u0621",value:"\u0627\u0644\u0632\u0631\u0642\u0627\u0621"},{label:"\u0645\u0639\u0627\u0646",value:"\u0645\u0639\u0627\u0646"},{label:"\u0627\u0644\u0645\u0641\u0631\u0642",value:"\u0627\u0644\u0645\u0641\u0631\u0642"},{label:"\u0627\u0644\u0639\u0642\u0628\u0629",value:"\u0627\u0644\u0639\u0642\u0628\u0629"},{label:"\u0627\u0631\u0628\u062f",value:"\u0627\u0631\u0628\u062f"},{label:"\u0627\u0644\u0637\u0641\u064a\u0644\u0629",value:"\u0627\u0644\u0637\u0641\u064a\u0644\u0629"},{label:"\u0627\u0644\u0643\u0631\u0643",value:"\u0627\u0644\u0643\u0631\u0643"},{label:"\u0627\u0644\u0628\u0644\u0642\u0627\u0621",value:"\u0627\u0644\u0628\u0644\u0642\u0627\u0621"},{label:"\u062c\u0631\u0634",value:"\u062c\u0631\u0634"},{label:"\u0639\u062c\u0644\u0648\u0646",value:"\u0639\u062c\u0644\u0648\u0646"},{label:"\u0645\u0627\u062f\u0628\u0627",value:"\u0645\u0627\u062f\u0628\u0627"}],style:{width:280},placeholder:"\u0627\u0644\u0633\u0643\u0646",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{patient_city:e}))},value:r.patient_city,name:"patient_city"}),l.a.createElement(T.a,null,"\u0645\u0639\u0644\u0648\u0645\u0629 \u0625\u062e\u062a\u064a\u0627\u0631\u064a\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0647 \u0639\u0646 \u0627\u0644\u0633\u0643\u0646"),l.a.createElement(k.a,{name:"patient_city_extra",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{patient_city_extra:e}))},value:r.patient_city_extra}),l.a.createElement(T.a,null,"\u0645\u0639\u0644\u0648\u0645\u0629 \u0625\u062e\u062a\u064a\u0627\u0631\u064a\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"),l.a.createElement(k.a,{name:"patient_phone",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{patient_phone:e}))},value:r.patient_phone}),l.a.createElement(T.a,null,"\u0645\u0639\u0644\u0648\u0645\u0629 \u0625\u062e\u062a\u064a\u0627\u0631\u064a\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u064a\u0644\u0627\u062f"),l.a.createElement(A.a,{onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{birth_of_date:e}))},defaultValue:r.birth_of_date,cleanable:!1,locale:{sunday:"Su",monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",ok:"\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062a\u0627\u0631\u064a\u062e",today:"\u0627\u0644\u064a\u0648\u0645",yesterday:"\u0627\u0644\u0628\u0627\u0631\u062d\u0629",hours:"Hours",minutes:"Minutes",seconds:"Seconds"},name:"birth_of_date",style:{width:280}}),l.a.createElement(T.a,null,"\u0645\u0639\u0644\u0648\u0645\u0629 \u0625\u062e\u062a\u064a\u0627\u0631\u064a\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0627\u0644\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u0645\u0632\u0645\u0646\u0629"),l.a.createElement(k.a,{name:"patient_disease_history",rows:5,componentClass:"textarea",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{patient_disease_history:e}))},value:r.patient_disease_history}),l.a.createElement(T.a,null,"\u0645\u0639\u0644\u0648\u0645\u0629 \u0625\u062e\u062a\u064a\u0627\u0631\u064a\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0627\u062f\u0648\u064a\u0629 \u0627\u0644\u0627\u0645\u0631\u0627\u0636 \u0627\u0644\u0645\u0632\u0645\u0646\u0629"),l.a.createElement(k.a,{name:"patient_medicine_history",rows:5,componentClass:"textarea",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{patient_medicine_history:e}))},value:r.patient_medicine_history}),l.a.createElement(T.a,null,"\u0645\u0639\u0644\u0648\u0645\u0629 \u0625\u062e\u062a\u064a\u0627\u0631\u064a\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0627\u062f\u0648\u064a\u0629 \u062a\u0633\u0628\u0628 \u0627\u0644\u062d\u0633\u0627\u0633\u064a\u0629"),l.a.createElement(k.a,{name:"patient_medicines_that_cause_allergies",rows:5,componentClass:"textarea",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{patient_medicines_that_cause_allergies:e}))},value:r.patient_medicines_that_cause_allergies}),l.a.createElement(T.a,null,"\u0645\u0639\u0644\u0648\u0645\u0629 \u0625\u062e\u062a\u064a\u0627\u0631\u064a\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a"),l.a.createElement(k.a,{name:"patient_surgery_history",rows:5,componentClass:"textarea",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{patient_surgery_history:e}))},value:r.patient_surgery_history}),l.a.createElement(T.a,null,"\u0645\u0639\u0644\u0648\u0645\u0629 \u0625\u062e\u062a\u064a\u0627\u0631\u064a\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0625\u0636\u0627\u0641\u0640\u0640\u064a\u0629"),l.a.createElement(X.a,{tag:"textarea",config:{toolbarButtons:["bold","italic","underline","h1","strikeThrough","fontFamily","fontSize","|","paragraphStyle","paragraphFormat","align","undo","redo","html"],charCounterCount:!0,direction:"rtl"},onModelChange:function(e){i("string"===typeof e?Object(b.a)(Object(b.a)({},r),{},{patient_extra_info:e}):Object(b.a)(Object(b.a)({},r),e))}})),l.a.createElement(w.a,null,l.a.createElement(M.a,null,r.edit?l.a.createElement(S.a,{appearance:"primary",color:"orange",disabled:!(m&&u),onClick:s,loading:r.loading},"\u062a\u0639\u062f\u064a\u0644"):l.a.createElement(S.a,{appearance:"primary",disabled:!(m&&u),onClick:s,loading:r.loading},"\u0625\u0636\u0627\u0641\u0640\u0640\u0640\u0629"),l.a.createElement(T.a,null,"\u0628\u0639\u062f \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0631\u064a\u0636 \u0627\u0648 \u0627\u0644\u0645\u0631\u064a\u0636\u0629, \u064a\u0645\u0643\u0646\u0643 \u0645\u0646 \u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0634\u062e\u0635\u064a\u0647 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0627\u0644\u0645\u0631\u064a\u0636 \u0627\u0648 \u0627\u0644\u0645\u0631\u064a\u0636\u0629 \u0625\u0636\u0627\u0641\u0647 \u0632\u064a\u0627\u0631\u0627\u062a \u0648 \u062a\u062e\u0634\u064a\u0635\u0627\u062a")))))))}var q=t(114),G=t.n(q),P=t(534),$=t(250),Q=t(1123),Z=t(1139),ee=t(1140),ae=t(1141),te=t(229),ne=t(1131),le=t(1127),re=t(96),ie=t.n(re),ce=Q.a.Header,oe=Q.a.Title,se=Q.a.Body,me=Q.a.Footer;function ue(){var e=Object(o.f)(),a=Object(n.useState)({openModal:!1,diagDate:void 0,txt:"",loading:!1,globalLoading:!1,edit:!1,editTxt:"",editDiagDate:void 0,toEditUuid:"",complain:"",complain_edit:"",diagnosis_txt:"",diagnosis_txt_edit:"",clinical_examination:"",clinical_examination_edit:"",laboratories:"",laboratories_edit:"",x_rays:"",x_rays_edit:"",treatment:"",treatment_edit:"",redirectToEdit:!1,temperature:"",temperature_edit:"",pressure:"",pressure_edit:"",pulse:"",pulse_edit:""}),t=Object(g.a)(a,2),r=t[0],i=t[1],c=Object(o.g)().id,s=Object(V.i)().collection("patients").doc(c),m=Object(V.j)(s),d=m.patient_name,p=m.patient_sex,E=m.patient_extra_info,_=m.diagnoses,h=m.birth_of_date,f=m.patient_city,M=m.patient_city_extra,L=m.patient_phone,F=m.patient_disease_history,N=m.patient_medicine_history,z=m.patient_surgery_history,B=m.patient_medicines_that_cause_allergies,R=h?ie.a.duration(ie()().diff(ie()(h.toDate(),"MM-YYYY"))):"--",U="--"!==R?R.years():"--",W="--"!==R?R.months():"--",K=(_||[]).sort((function(e,a){var t=e.diagDate,n=a.diagDate;return+ie()(t.toDate()).format("X")-+ie()(n.toDate()).format("X")})).map((function(e){var a=e.complain,t=e.diagnosis_txt,n=e.clinical_examination,l=e.laboratories,r=e.x_rays,i=e.treatment,c=e.temperature,o=e.pressure,s=e.pulse,m=Object(H.a)(e,["complain","diagnosis_txt","clinical_examination","laboratories","x_rays","treatment","temperature","pressure","pulse"]);return Object(b.a)({complain:a||"--",diagnosis_txt:t||"--",clinical_examination:n||"--",laboratories:l||"--",x_rays:r||"--",treatment:i||"--",temperature:c||"--",pressure:o||"--",pulse:s||"--"},m)})),J=function(){return i(Object(b.a)(Object(b.a)({},r),{},{openModal:!r.openModal,edit:!1,editTxt:"",editDiagDate:void 0,diagDate:void 0,txt:""}))},q=function(){var e=Object($.a)(G.a.mark((function e(){var a,t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(Object(b.a)(Object(b.a)({},r),{},{loading:!0})),a={txt:r.edit?r.editTxt:r.txt.trim(),diagDate:r.edit?r.editDiagDate:r.diagDate,uuid:r.edit?r.toEditUuid:Object(le.a)(),complain:r.edit?r.complain_edit:r.complain,diagnosis_txt:r.edit?r.diagnosis_txt_edit:r.diagnosis_txt,clinical_examination:r.edit?r.clinical_examination_edit:r.clinical_examination,laboratories:r.edit?r.laboratories_edit:r.laboratories,x_rays:r.edit?r.x_rays_edit:r.x_rays,treatment:r.edit?r.treatment_edit:r.treatment,temperature:r.edit?r.temperature_edit:r.temperature,pressure:r.edit?r.pressure_edit:r.pressure,pulse:r.edit?r.pulse_edit:r.pulse},e.next=4,s.get();case 4:(t=e.sent.data().diagnoses)||(t=[]),r.edit&&(t=t.filter((function(e){var a=e.uuid;return r.toEditUuid!==a}))),s.update({diagnoses:[].concat(Object(P.a)(t),[a])}).then((function(){r.edit?y.a.success("\u062a\u0645 \u0627\u0644\u062a\u0639\u0640\u0640\u0640\u062f\u064a\u0640\u0640\u0644"):y.a.success("\u062a\u0645\u062a \u0625\u0636\u0627\u0641\u0629 \u0632\u064a\u0627\u0631\u0647 \u0644\u0640\u0640 ".concat(d)),i(Object(b.a)(Object(b.a)({},r),{},{loading:!1,openModal:!1,edit:!0}))})).catch((function(){y.a.error("\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0646 \u0627\u0644\u0633\u064a\u0631\u0641\u0631 \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0647 \u0628\u0639\u062f \u0663\u0660 \u062b\u0627\u0646\u064a\u0647"),i(Object(b.a)(Object(b.a)({},r),{},{loading:!1,openModal:!1,edit:!0}))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object($.a)(G.a.mark((function e(a){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(Object(b.a)(Object(b.a)({},r),{},{globalLoading:!0})),e.next=3,s.get();case 3:t=e.sent.data().diagnoses,s.update({diagnoses:t.filter((function(e){var t=e.uuid;return a!==t}))}).then((function(){y.a.success("\u062a\u0645 \u0627\u0644\u062d\u0630\u0641"),i(Object(b.a)(Object(b.a)({},r),{},{globalLoading:!1}))})).catch((function(){y.a.error("\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0646 \u0627\u0644\u0633\u064a\u0631\u0641\u0631 \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0647 \u0628\u0639\u062f \u0663\u0660 \u062b\u0627\u0646\u064a\u0647"),i(Object(b.a)(Object(b.a)({},r),{},{globalLoading:!1}))}));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),ue=function(){var e=Object($.a)(G.a.mark((function e(a){var t,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get();case 2:t=e.sent.data().diagnoses,n=t.find((function(e){var t=e.uuid;return a===t})),i(Object(b.a)(Object(b.a)({},r),{},{openModal:!0,globalLoading:!1,edit:!0,toEditUuid:a,editTxt:n.txt,editDiagDate:n.diagDate.toDate(),complain_edit:n.complain,diagnosis_txt_edit:n.diagnosis_txt,clinical_examination_edit:n.clinical_examination,laboratories_edit:n.laboratories,x_rays_edit:n.x_rays,treatment_edit:n.treatment}));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),de=l.a.createElement(Z.a,{title:"\u0645\u0644\u0627\u062d\u0640\u0640\u0638\u0647 !"},l.a.createElement("p",null,"\u0625\u0636\u0640\u0640\u063a\u0640\u0640\u0637 \u0645\u0631\u062a\u064a\u0646 \u0628\u0633\u0631\u0639\u0647 \u0644\u0644\u062d\u0640\u0640\u0630\u0641")),pe=l.a.createElement(Z.a,{title:"\u0645\u0644\u0627\u062d\u0640\u0640\u0638\u0647 !"},l.a.createElement("p",null,"\u0625\u0636\u0640\u0640\u063a\u0640\u0640\u0637 \u0645\u0631\u062a\u064a\u0646 \u0628\u0633\u0631\u0639\u0647 \u0644\u0644\u062d\u0640\u0640\u0630\u0641"),l.a.createElement("p",null,"\u0644\u0627 \u064a\u0645\u0643\u0646 \u0623\u0633\u062a\u0631\u062c\u0627\u0639 \u0627\u0644\u0645\u0631\u064a\u0636 \u0625\u0630\u0627 \u062a\u0645 \u062d\u0630\u0641\u0629"));return r.redirectToEdit?l.a.createElement(o.a,{to:"/patients/add/".concat(c)}):l.a.createElement(x.a,{style:{padding:70}},l.a.createElement(Q.a,{full:!0,show:r.openModal,onHide:J},l.a.createElement(ce,null,r.edit?"\u062a\u0639\u062f\u064a\u0644 \u0632\u064a\u0627\u0631\u0647":l.a.createElement(oe,null,"\u0625\u0636\u0627\u0641\u0629 \u0632\u064a\u0640\u0640\u0627\u0631\u0629 \u0623\u0648 \u062a\u0634\u0640\u0640\u062e\u064a\u0640\u0640\u0635 \u0644\u0640\u0640\u0640 ` ",d," `")),l.a.createElement(se,null,l.a.createElement(C.a,{onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),e))}},l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0632\u064a\u0640\u0627\u0631\u0629"),l.a.createElement(A.a,{value:r.edit?r.editDiagDate:r.diagDate,disabled:r.globalLoading,onChange:function(e){r.edit?i(Object(b.a)(Object(b.a)({},r),{},{editDiagDate:e})):i(Object(b.a)(Object(b.a)({},r),{},{diagDate:e}))},cleanable:!1,locale:{sunday:"Su",monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",ok:"\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062a\u0627\u0631\u064a\u062e",today:"\u0627\u0644\u064a\u0648\u0645",yesterday:"\u0627\u0644\u0628\u0627\u0631\u062d\u0629",hours:"Hours",minutes:"Minutes",seconds:"Seconds"},name:"coming_date",style:{width:280}})),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0627\u0644\u0634\u0643\u0648\u0649"),l.a.createElement(k.a,{name:"complain",rows:5,componentClass:"textarea",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{complain_edit:e,complain:e}))},value:r.edit?r.complain_edit:r.complain}),l.a.createElement(T.a,null,"\u0645\u0639\u0644\u0648\u0645\u0629 \u0625\u062e\u062a\u064a\u0627\u0631\u064a\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0627\u0644\u062a\u0634\u062e\u064a\u0635"),l.a.createElement(k.a,{name:"diagnosis_txt",rows:5,componentClass:"textarea",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{diagnosis_txt_edit:e,diagnosis_txt:e}))},value:r.edit?r.diagnosis_txt_edit:r.diagnosis_txt}),l.a.createElement(T.a,null,"\u0645\u0639\u0644\u0648\u0645\u0629 \u0625\u062e\u062a\u064a\u0627\u0631\u064a\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u062f\u0631\u062c\u0629 \u0627\u0644\u062d\u0631\u0627\u0631\u0629"),l.a.createElement(k.a,{name:"temperature",rows:5,componentClass:"textarea",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{temperature_edit:e,temperature:e}))},value:r.edit?r.temperature_edit:r.temperature}),l.a.createElement(T.a,null,"\u0645\u0639\u0644\u0648\u0645\u0629 \u0625\u062e\u062a\u064a\u0627\u0631\u064a\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0627\u0644\u0636\u063a\u0637"),l.a.createElement(k.a,{name:"pressure",rows:5,componentClass:"textarea",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{pressure_edit:e,pressure:e}))},value:r.edit?r.pressure_edit:r.pressure}),l.a.createElement(T.a,null,"\u0645\u0639\u0644\u0648\u0645\u0629 \u0625\u062e\u062a\u064a\u0627\u0631\u064a\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0627\u0644\u0646\u0628\u0636"),l.a.createElement(k.a,{name:"pulse",rows:5,componentClass:"textarea",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{pulse_edit:e,pulse:e}))},value:r.edit?r.pulse_edit:r.pulse}),l.a.createElement(T.a,null,"\u0645\u0639\u0644\u0648\u0645\u0629 \u0625\u062e\u062a\u064a\u0627\u0631\u064a\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0627\u0644\u0641\u062d\u0635 \u0627\u0644\u0633\u0631\u064a\u0631\u064a"),l.a.createElement(k.a,{name:"clinical_examination",rows:5,componentClass:"textarea",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{clinical_examination_edit:e,clinical_examination:e}))},value:r.edit?r.clinical_examination_edit:r.clinical_examination}),l.a.createElement(T.a,null,"\u0645\u0639\u0644\u0648\u0645\u0629 \u0625\u062e\u062a\u064a\u0627\u0631\u064a\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0627\u0644\u0645\u062e\u062a\u0628\u0631\u0627\u062a"),l.a.createElement(k.a,{name:"laboratories",rows:5,componentClass:"textarea",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{laboratories_edit:e,laboratories:e}))},value:r.edit?r.laboratories_edit:r.laboratories}),l.a.createElement(T.a,null,"\u0645\u0639\u0644\u0648\u0645\u0629 \u0625\u062e\u062a\u064a\u0627\u0631\u064a\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0627\u0644\u0623\u0634\u0639\u0647"),l.a.createElement(k.a,{name:"x_rays",rows:5,componentClass:"textarea",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{x_rays_edit:e,x_rays:e}))},value:r.edit?r.x_rays_edit:r.x_rays}),l.a.createElement(T.a,null,"\u0645\u0639\u0644\u0648\u0645\u0629 \u0625\u062e\u062a\u064a\u0627\u0631\u064a\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0627\u0644\u0639\u0644\u0627\u062c"),l.a.createElement(k.a,{name:"treatment",rows:5,componentClass:"textarea",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{treatment_edit:e,treatment:e}))},value:r.edit?r.treatment_edit:r.treatment}),l.a.createElement(T.a,null,"\u0645\u0639\u0644\u0648\u0645\u0629 \u0625\u062e\u062a\u064a\u0627\u0631\u064a\u0629")),l.a.createElement(w.a,null,l.a.createElement(D.a,null,"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0647"),l.a.createElement(X.a,{tag:"textarea",model:r.edit?r.editTxt:r.txt,config:{toolbarButtons:["bold","italic","underline","h1","strikeThrough","fontFamily","fontSize","|","paragraphStyle","paragraphFormat","align","undo","redo","html"],direction:"rtl"},onModelChange:function(e){r.edit?i(Object(b.a)(Object(b.a)({},r),{},{editTxt:e})):i(Object(b.a)(Object(b.a)({},r),{},{txt:e}))}})))),l.a.createElement(me,null,r.edit?l.a.createElement(S.a,{appearance:"primary",color:"orange",onClick:q,disabled:!r.editDiagDate||r.globalLoading,loading:r.loading},"\u062a\u0639\u062f\u064a\u0640\u0640\u0644"):l.a.createElement(S.a,{appearance:"primary",onClick:q,disabled:!r.diagDate,loading:r.loading},"\u0625\u0636\u0627\u0641\u0629"),l.a.createElement(S.a,{onClick:J,appearance:"subtle"},"\u0625\u063a\u0644\u0627\u0642"))),l.a.createElement(j.a,null,l.a.createElement(O.a,{xs:24,sm:24,md:24,style:{marginTop:10}},l.a.createElement(v.a,{shaded:!0,bordered:!0,bodyFill:!0,style:{display:"inline-block",width:"100%"}},l.a.createElement(v.a,null,l.a.createElement("h4",null,"\u0627\u0644\u0627\u0633\u0645: ",d),l.a.createElement("h4",null,"\u0627\u0644\u062c\u0646\u0633: ",p),l.a.createElement("h4",null,"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641: ",L||"--"),l.a.createElement("h4",null,"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u064a\u0644\u0627\u062f:"," ",h?ie()(h.toDate()).format("MM/DD/YYYY"):"--"),l.a.createElement("h4",null,"\u0627\u0644\u0639\u0645\u0640\u0640\u0631: ",U," \u0633\u0646\u0647"," \u0648 ",W," \u0627\u0634\u0647\u0631"),l.a.createElement(ee.a,null),l.a.createElement(ae.a,null,l.a.createElement(v.a,{header:" \u0645\u062f\u064a\u0646\u0647 \u0627\u0644\u0645\u0631\u064a\u0636:"},l.a.createElement("h6",null,f||"--")),l.a.createElement(v.a,{header:"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0629 \u0639\u0646 \u0627\u0644\u0633\u0643\u0646:"},M||"--"),l.a.createElement(v.a,{header:"\u0627\u0644\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u0645\u0632\u0645\u0646\u0629:"},F||"--"),l.a.createElement(v.a,{header:"\u0627\u062f\u0648\u064a\u0629 \u0627\u0644\u0627\u0645\u0631\u0627\u0636 \u0627\u0644\u0645\u0632\u0645\u0646\u0629:"},N||"--"),l.a.createElement(v.a,{header:"\u0627\u062f\u0648\u064a\u0629 \u062a\u0633\u0628\u0628 \u0627\u0644\u062d\u0633\u0627\u0633\u064a\u0629:"},B||"--"),l.a.createElement(v.a,{header:"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a:"},z||"--"),l.a.createElement(v.a,{header:"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0636\u0627\u0641\u064a\u0647:"},l.a.createElement("span",{dangerouslySetInnerHTML:{__html:E||"--"}})))))),l.a.createElement(O.a,{xs:24,sm:24,md:24},l.a.createElement(ee.a,null,"\u062e\u064a\u0640\u0640\u0627\u0631\u0627\u062a")),l.a.createElement(O.a,{xs:24,sm:24,md:24},l.a.createElement(Y.a,{icon:l.a.createElement(u.a,{icon:"plus"}),color:"cyan",onClick:J},"\u0625\u0636\u0627\u0641\u0640\u0640\u0647 \u0632\u064a\u0627\u0631\u0647 \u0648 \u062a\u0634\u062e\u064a\u0640\u0640\u0635"),l.a.createElement(Y.a,{icon:l.a.createElement(u.a,{icon:"edit"}),color:"orange",onClick:function(){return i(Object(b.a)(Object(b.a)({},r),{},{redirectToEdit:!0}))},style:{marginRight:10}},"\u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0631\u064a\u0636"),l.a.createElement(te.a,{placement:"top",trigger:"click",speaker:pe},l.a.createElement(Y.a,{style:{marginRight:10},icon:l.a.createElement(u.a,{icon:"ban"}),color:"red",onDoubleClick:function(){I.firestore().collection("patients").doc(c).delete(),e.push("/patients"),y.a.success("\u062a\u0645\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0647 \u0628\u0646\u062c\u0627\u062d")}},"\u062d\u0630\u0641 \u0627\u0644\u0645\u0631\u064a\u0636, \u0628\u0627\u0644\u0643\u0627\u0645\u0644"))),l.a.createElement(O.a,{xs:24,sm:24,md:24},l.a.createElement(ee.a,null,"\u0627\u0644\u0632\u064a\u0640\u0640\u0627\u0631\u0627\u062a \u0648 \u0627\u0644\u062a\u062e\u0634\u0640\u0640\u064a\u0635\u0640\u0640\u0627\u062a")),l.a.createElement(O.a,{xs:24,sm:24,md:24},l.a.createElement(ne.a,null,K.map((function(e,a){var t=e.diagDate,n=e.txt,c=e.uuid,o=e.complain,s=e.diagnosis_txt,m=e.clinical_examination,d=e.laboratories,p=e.x_rays,E=e.treatment,_=e.temperature,g=e.pressure,h=e.pulse;return l.a.createElement(ne.a.Item,{key:a},ie()(t.toDate()).format("MM/DD/YYYY"),l.a.createElement("br",null),l.a.createElement(u.a,{icon:"stethoscope"})," \u0627\u0644\u0634\u0643\u0648\u0649: ",o,l.a.createElement("br",null),l.a.createElement(u.a,{icon:"newspaper-o"})," \u0627\u0644\u062a\u0634\u062e\u064a\u0635: ",s,l.a.createElement("br",null),l.a.createElement(u.a,{icon:"thermometer"})," \u062f\u0631\u062c\u0629 \u0627\u0644\u062d\u0631\u0627\u0631\u0629: ",_,l.a.createElement("br",null),l.a.createElement(u.a,{icon:"asterisk"})," \u0627\u0644\u0636\u063a\u0637: ",g,l.a.createElement("br",null),l.a.createElement(u.a,{icon:"heartbeat"})," \u0627\u0644\u0646\u0628\u0636: ",h,l.a.createElement("br",null),l.a.createElement(u.a,{icon:"user-md"})," \u0627\u0644\u0641\u062d\u0635 \u0627\u0644\u0633\u0631\u064a\u0631\u064a: ",m,l.a.createElement("br",null),l.a.createElement(u.a,{icon:"hospital-o"})," \u0627\u0644\u0645\u062e\u062a\u0628\u0631\u0627\u062a: ",d,l.a.createElement("br",null),l.a.createElement(u.a,{icon:"magic"})," \u0627\u0644\u0627\u0634\u0639\u0647: ",p,l.a.createElement("br",null),l.a.createElement(u.a,{icon:"heart"})," \u0627\u0644\u0639\u0644\u0627\u062c: ",E,l.a.createElement("br",null),l.a.createElement(u.a,{icon:"plus-square"})," \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0629:"," ",l.a.createElement("span",{dangerouslySetInnerHTML:{__html:n||"--"}}),l.a.createElement("br",null),l.a.createElement(te.a,{placement:"top",trigger:"click",speaker:de},l.a.createElement(Y.a,{icon:l.a.createElement(u.a,{icon:"trash"}),color:"red",circle:!0,size:"xs",loading:r.globalLoading,onDoubleClick:function(){return re(c)}})),l.a.createElement(Y.a,{style:{margin:10},icon:l.a.createElement(u.a,{icon:"edit"}),color:"cyan",loading:r.globalLoading,circle:!0,size:"xs",onClick:function(){return function(e){i(Object(b.a)(Object(b.a)({},r),{},{edit:!0,globalLoading:!0,toEditUuid:e})),y.a.info("\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644, \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u0625\u0646\u062a\u0638\u0627\u0631"),ue(e)}(c)}}))}))))))}var de=t(531),pe=t.n(de),Ee=t(533),_e=t.n(Ee);function be(){var e=Object(n.useState)({loading:!0,dataToViz:[]}),a=Object(g.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){var e=I.firestore(),a=[],n={name:"\u0630\u0643\u0640\u0640\u0640\u0631",value:0},l={name:"\u0623\u0646\u062b\u0640\u0640\u0640\u0649",value:0};e.collection("patients").get().then((function(e){e.forEach((function(e){"\u0630\u0643\u0640\u0640\u0640\u0631"===e.data().patient_sex?n.value++:l.value++})),a.push(n,l),r(Object(b.a)(Object(b.a)({},t),{},{loading:!1,dataToViz:a}))}))}),[]),l.a.createElement(x.a,{style:{textAlign:"center"}},t.loading?l.a.createElement("span",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},l.a.createElement(pe.a,{size:150,color:"#406c75",loading:!0})):"",t.loading?"":l.a.createElement(j.a,null,l.a.createElement(O.a,{xs:24,sm:24,md:24},l.a.createElement(_e.a,{option:{height:500,title:{text:"\u0646\u0633\u0628\u0629 \u0627\u0644\u0630\u0643\u0648\u0631 \u0644\u0644\u0625\u0646\u0627\u062b",subtext:"\u0627\u0644\u0645\u0631\u0636\u0649",left:"center"},color:["#509799","#FFACBB"],tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20},series:[{name:"\u0627\u0644\u0639\u062f\u062f \u0648 \u0627\u0644\u0646\u0633\u0628\u0629",type:"pie",radius:"80%",center:["50%","50%"],data:t.dataToViz,emphasis:{itemStyle:{show:!1,shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}))))}var ge=function(){return l.a.createElement(x.a,{style:{textAlign:"center",marginTop:50,minHeight:"50vh"}},l.a.createElement(j.a,null,l.a.createElement(O.a,{xs:24,sm:24,md:24},l.a.createElement(v.a,{shaded:!0,bordered:!0,bodyFill:!0,style:{minHeight:"50vh"}},l.a.createElement(v.a,null,l.a.createElement("h1",null,"\u0625\u062d\u0635\u0627\u0626\u064a\u0640\u0640\u0640\u0627\u062a \u0639\u0646 \u0627\u0644\u0645\u0631\u0636\u0649"),l.a.createElement(be,null))))))};var he=function(){return l.a.createElement(V.b,{fallback:"\u062a\u062d\u0645\u064a\u0640\u0640\u0640\u0640\u0644 .....",traceId:"load"},l.a.createElement(c.a,null,l.a.createElement(_,null),l.a.createElement(o.b,{path:"/",exact:!0},l.a.createElement(L,null)),l.a.createElement(o.b,{path:"/patients",exact:!0},l.a.createElement(B,null)),l.a.createElement(o.b,{path:"/patients/add",exact:!0},l.a.createElement(J,null)),l.a.createElement(o.b,{path:"/patients/add/:id",exact:!0},l.a.createElement(J,null)),l.a.createElement(o.b,{path:"/display/patients/:id",exact:!0},l.a.createElement(ue,null)),l.a.createElement(o.b,{path:"/doctors"}),l.a.createElement(o.b,{path:"/analytics"},l.a.createElement(ge,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=t(1121);function ye(e){return l.a.createElement(fe.a,{rtl:!0},e.children)}i.a.render(l.a.createElement(V.a,{firebaseConfig:{}},l.a.createElement(ye,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(he,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},513:function(e,a,t){e.exports=t.p+"static/media/logo.362c6402.jpeg"},546:function(e,a,t){e.exports=t(1110)},551:function(e,a,t){},552:function(e,a,t){}},[[546,1,2]]]);
//# sourceMappingURL=main.32ed13c4.chunk.js.map