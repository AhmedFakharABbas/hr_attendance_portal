(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{MM92:function(t,n,e){"use strict";e.r(n),e.d(n,"AttendanceCorrectionLmModule",(function(){return G}));var o=e("ofXK"),c=e("fXoL"),a=e("kmnG"),i=e("qFsG"),b=e("NFeN"),r=e("tyNb"),d=e("d3UM"),p=e("FKr1"),l=e("iadO"),m=e("+0xr"),f=e("M9IT");function s(t,n){1&t&&(c.Ub(0,"th",35),c.Sc(1," Month "),c.Tb())}function u(t,n){if(1&t&&(c.Ub(0,"td",36),c.Sc(1),c.Tb()),2&t){const t=n.$implicit;c.Bb(1),c.Uc(" ",t.month," ")}}function g(t,n){1&t&&(c.Ub(0,"th",35),c.Sc(1," Corrections "),c.Tb())}function h(t,n){if(1&t&&(c.Ub(0,"td",36),c.Sc(1),c.Tb()),2&t){const t=n.$implicit;c.Bb(1),c.Uc(" ",t.corrections," ")}}function U(t,n){1&t&&(c.Ub(0,"th",35),c.Sc(1," Approved "),c.Tb())}function T(t,n){if(1&t&&(c.Ub(0,"td",36),c.Sc(1),c.Tb()),2&t){const t=n.$implicit;c.Bb(1),c.Uc(" ",t.approved," ")}}function v(t,n){1&t&&(c.Ub(0,"th",35),c.Sc(1," Pending "),c.Tb())}function S(t,n){if(1&t&&(c.Ub(0,"td",36),c.Sc(1),c.Tb()),2&t){const t=n.$implicit;c.Bb(1),c.Uc(" ",t.pending," ")}}function C(t,n){1&t&&(c.Ub(0,"th",35),c.Sc(1," Rejected "),c.Tb())}function P(t,n){if(1&t&&(c.Ub(0,"td",36),c.Sc(1),c.Tb()),2&t){const t=n.$implicit;c.Bb(1),c.Uc(" ",t.rejected," ")}}function x(t,n){1&t&&c.Pb(0,"tr",37)}function M(t,n){1&t&&c.Pb(0,"tr",38)}function _(t,n){1&t&&(c.Ub(0,"th",35),c.Sc(1," Month "),c.Tb())}function O(t,n){if(1&t&&(c.Ub(0,"td",36),c.Sc(1),c.Tb()),2&t){const t=n.$implicit;c.Bb(1),c.Uc(" ",t.dated," ")}}function w(t,n){1&t&&(c.Ub(0,"th",35),c.Sc(1," Corrections "),c.Tb())}function k(t,n){if(1&t&&(c.Ub(0,"td",36),c.Sc(1),c.Tb()),2&t){const t=n.$implicit;c.Bb(1),c.Uc(" ",t.month," ")}}function D(t,n){1&t&&(c.Ub(0,"th",35),c.Sc(1," Approved "),c.Tb())}function R(t,n){if(1&t&&(c.Ub(0,"td",36),c.Sc(1),c.Tb()),2&t){const t=n.$implicit;c.Bb(1),c.Uc(" ",t.correctionDate," ")}}function y(t,n){1&t&&(c.Ub(0,"th",35),c.Sc(1," Pending "),c.Tb())}function B(t,n){if(1&t&&(c.Ub(0,"td",36),c.Sc(1),c.Tb()),2&t){const t=n.$implicit;c.Bb(1),c.Uc(" ",t.lmStatus," ")}}function Q(t,n){1&t&&(c.Ub(0,"th",35),c.Sc(1," Rejected "),c.Tb())}function A(t,n){if(1&t&&(c.Ub(0,"td",36),c.Sc(1),c.Tb()),2&t){const t=n.$implicit;c.Bb(1),c.Uc(" ",t.hrStatus," ")}}function j(t,n){1&t&&c.Pb(0,"tr",37)}function N(t,n){1&t&&c.Pb(0,"tr",38)}const $=function(){return[5,10,20]},z=[{month:"January",corrections:"21",approved:"4",pending:"0",rejected:"8"},{month:"February",corrections:"8",approved:"1.5",pending:"5",rejected:"8"},{month:"March",corrections:"8",approved:"2.25",pending:"0",rejected:"0"},{month:"April",corrections:"15",approved:"0",pending:"0",rejected:"0"},{month:"May",corrections:"-",approved:"0",pending:"0",rejected:"5"},{month:"June",corrections:"-",approved:"1",pending:"5",rejected:"5"},{month:"July",corrections:"-",approved:"0",pending:"5",rejected:"5"},{month:"Auguest",corrections:"8",approved:"5",pending:"0",rejected:"0"},{month:"September",corrections:"8",approved:"0",pending:"0",rejected:"0"},{month:"October",corrections:"15",approved:"8",pending:"0",rejected:"0"},{month:"November",corrections:"8",approved:"0",pending:"2",rejected:"2"},{month:"December",corrections:"8",approved:"0",pending:"2",rejected:"2"}],I=[{dated:"25-Nov-2020",month:"November 20",correctionDate:"25-Nov-2020",lmStatus:"Approved",hrStatus:"Approved"},{dated:"25-Nov-2020",month:"November 20",correctionDate:"25-Nov-2020",lmStatus:"Approved",hrStatus:"Approved"},{dated:"25-Nov-2020",month:"November 20",correctionDate:"25-Nov-2020",lmStatus:"Approved",hrStatus:"Approved"}];let L=(()=>{class t{constructor(){this.statusColumns=["month","corrections","approved","pending","rejected"],this.statusDataSource=z,this.correctionAppsColumns=["dated","month","correctionDate","lmStatus","hrStatus"],this.correctionAppsDataSource=I}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-attendace-correction"]],decls:180,vars:10,consts:[[1,"ac-container"],[1,"ac-left-container"],[1,"w-100"],[1,"ac-left-box"],[1,"ac-title"],[1,"p-1","pb-3"],[1,"d-flex","my-1"],[1,"w-100","mx-1"],["appearance","outline",1,"w-100"],["matInput","","placeholder",""],["matSuffix",""],[1,"ac-footer"],[1,"text-right","ac-button-list"],["routerLink","/",1,"ml-2"],["value","option"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"click"],["picker2",""],["appearance","outline",1,"w-100","pr-2"],["picker3",""],[1,"ac-right-container"],[1,"ac-right-box","mt-2"],["mat-table","",1,"ac-table",3,"dataSource"],["matColumnDef","month"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","corrections"],["matColumnDef","approved"],["matColumnDef","pending"],["matColumnDef","rejected"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"ac-box","ml-2","mt-2"],[1,"ac-content"],["showFirstLastButtons","","aria-label","Select page",1,"mt-2",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,n){if(1&t){const t=c.Vb();c.Ub(0,"div",0),c.Ub(1,"div",1),c.Ub(2,"div",2),c.Ub(3,"div",3),c.Ub(4,"div",4),c.Sc(5," Attendace Correction "),c.Tb(),c.Ub(6,"div",5),c.Ub(7,"div",6),c.Ub(8,"p",7),c.Ub(9,"mat-form-field",8),c.Ub(10,"mat-label"),c.Sc(11,"Employee Code"),c.Tb(),c.Pb(12,"input",9),c.Tb(),c.Tb(),c.Tb(),c.Ub(13,"div",6),c.Ub(14,"p",7),c.Ub(15,"mat-form-field",8),c.Ub(16,"mat-label"),c.Sc(17,"Time Correction In"),c.Tb(),c.Pb(18,"input",9),c.Ub(19,"mat-icon",10),c.Sc(20,"access_time"),c.Tb(),c.Tb(),c.Tb(),c.Ub(21,"p",7),c.Ub(22,"mat-form-field",8),c.Ub(23,"mat-label"),c.Sc(24,"Time Correction Out"),c.Tb(),c.Pb(25,"input",9),c.Ub(26,"mat-icon",10),c.Sc(27,"access_time"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(28,"div",6),c.Ub(29,"p",7),c.Ub(30,"mat-form-field",8),c.Ub(31,"mat-label"),c.Sc(32,"Brief Reason"),c.Tb(),c.Pb(33,"input",9),c.Ub(34,"mat-icon",10),c.Sc(35,"view_headline"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(36,"div",11),c.Ub(37,"div",12),c.Ub(38,"a",13),c.Sc(39,"Submit"),c.Tb(),c.Ub(40,"a",13),c.Sc(41,"Cancel"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(42,"div",2),c.Ub(43,"div",3),c.Ub(44,"div",4),c.Sc(45," Leave Reversal "),c.Tb(),c.Ub(46,"div",5),c.Ub(47,"div",6),c.Ub(48,"p",7),c.Ub(49,"mat-form-field",8),c.Ub(50,"mat-label"),c.Sc(51,"Date"),c.Tb(),c.Ub(52,"mat-select"),c.Ub(53,"mat-option",14),c.Sc(54,"3 Consecutive"),c.Tb(),c.Ub(55,"mat-option",14),c.Sc(56,"> 09:30"),c.Tb(),c.Ub(57,"mat-option",14),c.Sc(58,"Annual Leave"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(59,"p",7),c.Ub(60,"mat-form-field",8),c.Ub(61,"mat-label"),c.Sc(62,"Date"),c.Tb(),c.Pb(63,"input",15),c.Ub(64,"mat-icon",16),c.fc("click",(function(){return c.Hc(t),c.Ec(67).open()})),c.Sc(65,"calendar_today"),c.Tb(),c.Pb(66,"mat-datepicker",null,17),c.Tb(),c.Tb(),c.Ub(68,"div",7),c.Sc(69," \xa0 "),c.Tb(),c.Tb(),c.Ub(70,"div",11),c.Ub(71,"div",12),c.Ub(72,"a",13),c.Sc(73,"+ Add"),c.Tb(),c.Tb(),c.Tb(),c.Ub(74,"div",6),c.Ub(75,"p",7),c.Ub(76,"mat-form-field",18),c.Ub(77,"mat-label"),c.Sc(78,"Brief Reason"),c.Tb(),c.Pb(79,"input",9),c.Ub(80,"mat-icon",10),c.Sc(81,"view_headline"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(82,"div",11),c.Ub(83,"div",12),c.Ub(84,"a",13),c.Sc(85,"Submit"),c.Tb(),c.Ub(86,"a",13),c.Sc(87,"Cancel"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(88,"div",2),c.Ub(89,"div",3),c.Ub(90,"div",4),c.Sc(91," Shift Change Request "),c.Tb(),c.Ub(92,"div",5),c.Ub(93,"div",6),c.Ub(94,"p",7),c.Ub(95,"mat-form-field",8),c.Ub(96,"mat-label"),c.Sc(97,"Date"),c.Tb(),c.Pb(98,"input",15),c.Ub(99,"mat-icon",16),c.fc("click",(function(){return c.Hc(t),c.Ec(102).open()})),c.Sc(100,"calendar_today"),c.Tb(),c.Pb(101,"mat-datepicker",null,19),c.Tb(),c.Tb(),c.Ub(103,"p",7),c.Ub(104,"mat-form-field",8),c.Ub(105,"mat-label"),c.Sc(106,"Requested Shift"),c.Tb(),c.Pb(107,"input",9),c.Ub(108,"mat-icon",10),c.Sc(109,"access_time"),c.Tb(),c.Tb(),c.Tb(),c.Ub(110,"p",7),c.Ub(111,"mat-form-field",8),c.Ub(112,"mat-label"),c.Sc(113,"Current Shift"),c.Tb(),c.Pb(114,"input",9),c.Ub(115,"mat-icon",10),c.Sc(116,"access_time"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(117,"div",6),c.Ub(118,"p",7),c.Ub(119,"mat-form-field",8),c.Ub(120,"mat-label"),c.Sc(121,"Brief Reason"),c.Tb(),c.Pb(122,"input",9),c.Ub(123,"mat-icon",10),c.Sc(124,"view_headline"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(125,"div",11),c.Ub(126,"div",12),c.Ub(127,"a",13),c.Sc(128,"Submit"),c.Tb(),c.Ub(129,"a",13),c.Sc(130,"Cancel"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(131,"div",20),c.Ub(132,"div",2),c.Ub(133,"div",21),c.Ub(134,"div",4),c.Sc(135," Correction Status "),c.Tb(),c.Ub(136,"table",22),c.Sc(137," A "),c.Sb(138,23),c.Qc(139,s,2,0,"th",24),c.Qc(140,u,2,1,"td",25),c.Rb(),c.Sb(141,26),c.Qc(142,g,2,0,"th",24),c.Qc(143,h,2,1,"td",25),c.Rb(),c.Sb(144,27),c.Qc(145,U,2,0,"th",24),c.Qc(146,T,2,1,"td",25),c.Rb(),c.Sb(147,28),c.Qc(148,v,2,0,"th",24),c.Qc(149,S,2,1,"td",25),c.Rb(),c.Sb(150,29),c.Qc(151,C,2,0,"th",24),c.Qc(152,P,2,1,"td",25),c.Rb(),c.Qc(153,x,1,0,"tr",30),c.Qc(154,M,1,0,"tr",31),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(155,"div",0),c.Ub(156,"div",2),c.Ub(157,"div",32),c.Ub(158,"div",4),c.Sc(159," Correction Applicaitons "),c.Tb(),c.Ub(160,"div",33),c.Ub(161,"table",22),c.Sb(162,23),c.Qc(163,_,2,0,"th",24),c.Qc(164,O,2,1,"td",25),c.Rb(),c.Sb(165,26),c.Qc(166,w,2,0,"th",24),c.Qc(167,k,2,1,"td",25),c.Rb(),c.Sb(168,27),c.Qc(169,D,2,0,"th",24),c.Qc(170,R,2,1,"td",25),c.Rb(),c.Sb(171,28),c.Qc(172,y,2,0,"th",24),c.Qc(173,B,2,1,"td",25),c.Rb(),c.Sb(174,29),c.Qc(175,Q,2,0,"th",24),c.Qc(176,A,2,1,"td",25),c.Rb(),c.Qc(177,j,1,0,"tr",30),c.Qc(178,N,1,0,"tr",31),c.Tb(),c.Pb(179,"mat-paginator",34),c.Tb(),c.Tb(),c.Tb(),c.Tb()}if(2&t){const t=c.Ec(67),e=c.Ec(102);c.Bb(63),c.rc("matDatepicker",t),c.Bb(35),c.rc("matDatepicker",e),c.Bb(38),c.rc("dataSource",n.statusDataSource),c.Bb(17),c.rc("matHeaderRowDef",n.statusColumns),c.Bb(1),c.rc("matRowDefColumns",n.statusColumns),c.Bb(7),c.rc("dataSource",n.correctionAppsDataSource),c.Bb(16),c.rc("matHeaderRowDef",n.statusColumns),c.Bb(1),c.rc("matRowDefColumns",n.statusColumns),c.Bb(1),c.rc("pageSizeOptions",c.uc(9,$))}},directives:[a.b,a.e,i.b,b.a,a.f,r.c,d.a,p.n,l.b,l.a,m.j,m.c,m.e,m.b,m.g,m.i,f.a,m.d,m.a,m.f,m.h],styles:["mat-form-field.mat-form-field-should-focus[_ngcontent-%COMP%], mat-label[_ngcontent-%COMP%]{font-size:12px}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{font-size:13px!important}.ac-main[_ngcontent-%COMP%]{min-height:93.6%;position:relative;margin:0 auto;padding:0}.ac-left-container[_ngcontent-%COMP%]{width:65%;float:left;background-color:#fff}.ac-right-container[_ngcontent-%COMP%]{position:absolute;right:0;top:0;height:99%;width:35%;float:right;background-color:#fff}.ac-label[_ngcontent-%COMP%]{width:100%;padding:5px}.ac-list[_ngcontent-%COMP%]{list-style-type:none;padding:6px 8px 0 35px;margin:0;height:26px;width:auto}.ac-table[_ngcontent-%COMP%]{width:100%}.ac-statusMenu[_ngcontent-%COMP%]{padding:0;height:50px;width:auto;float:right;font:11px Tahoma,Arial,Verdana;color:#4c4c4c;text-align:left}.ac-logo[_ngcontent-%COMP%]{margin:27px}.ac-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .ac-logo[_ngcontent-%COMP%]{display:inline-block}.ac-login[_ngcontent-%COMP%]{position:relative;background:none;top:150px;width:400px;min-width:400px;height:276px;min-height:0;margin:auto}.ac-box[_ngcontent-%COMP%], .ac-left-box[_ngcontent-%COMP%]{display:block;background:#fcfcfc!important;border:1px solid #e7e7e7;flex-direction:row}.ac-left-box[_ngcontent-%COMP%]{width:98%;margin:1%}.ac-right-box[_ngcontent-%COMP%]{display:block;flex-direction:row-reverse;margin:1%;background:#fcfcfc!important;border:1px solid #e7e7e7}.ac-title[_ngcontent-%COMP%]{background:url(box-title.e1f201eb4580921df022.gif) repeat-x 0 0;padding:8px 10px;font:12px/1em Verdana,Arial,Tahome;color:#333;font-weight:600}.ac-content[_ngcontent-%COMP%]{background:url(box-shadow.7f3d08d2a8dbb5226a95.gif) repeat-x 0 0;padding:5px}.ac-footer[_ngcontent-%COMP%]{background:#e6e6e6;padding:6px 10px 4px}#ac-button-list[_ngcontent-%COMP%]{margin:3px 0;text-align:right}#ac-button[_ngcontent-%COMP%], #ac-button-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #ac-button-list[_ngcontent-%COMP%]   font[_ngcontent-%COMP%], .ac-button-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .ac-button-list[_ngcontent-%COMP%]   font[_ngcontent-%COMP%], a#ac-button[_ngcontent-%COMP%], a.ac-button[_ngcontent-%COMP%]{position:relative;padding:2px 6px;background:transparent linear-gradient(180deg,#ededed,#fafafa) 0 0 no-repeat padding-box;border:1px solid #fff;border-radius:3px;color:#3080ea;opacity:1;text-decoration:none;font-size:11px}#ac-button-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #ac-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .ac-button-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .ac-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, a#ac-button[_ngcontent-%COMP%]:hover, a.ac-button[_ngcontent-%COMP%]:hover{border:1px solid #a6daee;padding:2px 6px;background:transparent linear-gradient(0deg,#f1fafe,#bde9fb) 0 0 no-repeat padding-box;border-radius:3px;opacity:1;color:#343434;text-decoration:none;font-size:11px}.ac-container[_ngcontent-%COMP%]{position:relative;clear:both;display:flex}.ac-controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:12px;position:absolute;top:0;left:9px;padding:0;margin:0;cursor:text;width:35%;font-weight:700}form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:block;position:relative;border:none;line-height:26px;padding:0}form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(odd){background-color:#fafafa}form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:block;margin:0 0 0 35%;padding-left:10px;border-left:1px solid #eee}.ac-custom-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-position:0 100%;background:url(checkbox.f2711c3f2e7bbcf7665f.gif) no-repeat;position:relative;top:0;padding:1px 0 0 20px;margin:0 0 5px;font-size:11px/12px Arial;color:#1c1c1c;cursor:pointer;width:auto;height:15px}form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .ac-right[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{left:2px;font-weight:400}.ac-flux[_ngcontent-%COMP%]{display:flex}p[_ngcontent-%COMP%]{margin:10px 0 0;font-size:11px}"]}),t})();var H=e("tk/3"),E=e("IZw1"),F=e("3Pt+"),J=e("W/RB"),q=e("PkMp");const V=[{path:"",component:L}];let G=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(n){return new(n||t)},imports:[[o.c,H.d,E.a,F.k,F.u,J.a,q.a,r.d.forChild(V)]]}),t})()}}]);