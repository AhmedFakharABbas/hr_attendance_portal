!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{MM92:function(e,o,c){"use strict";c.r(o),c.d(o,"AttendanceCorrectionLmModule",(function(){return Z}));var a=c("ofXK"),i=c("fXoL"),b=c("kmnG"),r=c("qFsG"),d=c("NFeN"),p=c("tyNb"),l=c("d3UM"),f=c("FKr1"),m=c("iadO"),u=c("+0xr"),g=c("M9IT");function s(t,n){1&t&&(i.Ub(0,"th",35),i.Sc(1," Month "),i.Tb())}function h(t,n){if(1&t&&(i.Ub(0,"td",36),i.Sc(1),i.Tb()),2&t){var e=n.$implicit;i.Bb(1),i.Uc(" ",e.month," ")}}function U(t,n){1&t&&(i.Ub(0,"th",35),i.Sc(1," Corrections "),i.Tb())}function T(t,n){if(1&t&&(i.Ub(0,"td",36),i.Sc(1),i.Tb()),2&t){var e=n.$implicit;i.Bb(1),i.Uc(" ",e.corrections," ")}}function v(t,n){1&t&&(i.Ub(0,"th",35),i.Sc(1," Approved "),i.Tb())}function S(t,n){if(1&t&&(i.Ub(0,"td",36),i.Sc(1),i.Tb()),2&t){var e=n.$implicit;i.Bb(1),i.Uc(" ",e.approved," ")}}function C(t,n){1&t&&(i.Ub(0,"th",35),i.Sc(1," Pending "),i.Tb())}function P(t,n){if(1&t&&(i.Ub(0,"td",36),i.Sc(1),i.Tb()),2&t){var e=n.$implicit;i.Bb(1),i.Uc(" ",e.pending," ")}}function x(t,n){1&t&&(i.Ub(0,"th",35),i.Sc(1," Rejected "),i.Tb())}function M(t,n){if(1&t&&(i.Ub(0,"td",36),i.Sc(1),i.Tb()),2&t){var e=n.$implicit;i.Bb(1),i.Uc(" ",e.rejected," ")}}function _(t,n){1&t&&i.Pb(0,"tr",37)}function O(t,n){1&t&&i.Pb(0,"tr",38)}function w(t,n){1&t&&(i.Ub(0,"th",35),i.Sc(1," Month "),i.Tb())}function k(t,n){if(1&t&&(i.Ub(0,"td",36),i.Sc(1),i.Tb()),2&t){var e=n.$implicit;i.Bb(1),i.Uc(" ",e.dated," ")}}function D(t,n){1&t&&(i.Ub(0,"th",35),i.Sc(1," Corrections "),i.Tb())}function y(t,n){if(1&t&&(i.Ub(0,"td",36),i.Sc(1),i.Tb()),2&t){var e=n.$implicit;i.Bb(1),i.Uc(" ",e.month," ")}}function R(t,n){1&t&&(i.Ub(0,"th",35),i.Sc(1," Approved "),i.Tb())}function B(t,n){if(1&t&&(i.Ub(0,"td",36),i.Sc(1),i.Tb()),2&t){var e=n.$implicit;i.Bb(1),i.Uc(" ",e.correctionDate," ")}}function Q(t,n){1&t&&(i.Ub(0,"th",35),i.Sc(1," Pending "),i.Tb())}function A(t,n){if(1&t&&(i.Ub(0,"td",36),i.Sc(1),i.Tb()),2&t){var e=n.$implicit;i.Bb(1),i.Uc(" ",e.lmStatus," ")}}function j(t,n){1&t&&(i.Ub(0,"th",35),i.Sc(1," Rejected "),i.Tb())}function N(t,n){if(1&t&&(i.Ub(0,"td",36),i.Sc(1),i.Tb()),2&t){var e=n.$implicit;i.Bb(1),i.Uc(" ",e.hrStatus," ")}}function $(t,n){1&t&&i.Pb(0,"tr",37)}function z(t,n){1&t&&i.Pb(0,"tr",38)}var I,L,E=function(){return[5,10,20]},H=[{month:"January",corrections:"21",approved:"4",pending:"0",rejected:"8"},{month:"February",corrections:"8",approved:"1.5",pending:"5",rejected:"8"},{month:"March",corrections:"8",approved:"2.25",pending:"0",rejected:"0"},{month:"April",corrections:"15",approved:"0",pending:"0",rejected:"0"},{month:"May",corrections:"-",approved:"0",pending:"0",rejected:"5"},{month:"June",corrections:"-",approved:"1",pending:"5",rejected:"5"},{month:"July",corrections:"-",approved:"0",pending:"5",rejected:"5"},{month:"Auguest",corrections:"8",approved:"5",pending:"0",rejected:"0"},{month:"September",corrections:"8",approved:"0",pending:"0",rejected:"0"},{month:"October",corrections:"15",approved:"8",pending:"0",rejected:"0"},{month:"November",corrections:"8",approved:"0",pending:"2",rejected:"2"},{month:"December",corrections:"8",approved:"0",pending:"2",rejected:"2"}],F=[{dated:"25-Nov-2020",month:"November 20",correctionDate:"25-Nov-2020",lmStatus:"Approved",hrStatus:"Approved"},{dated:"25-Nov-2020",month:"November 20",correctionDate:"25-Nov-2020",lmStatus:"Approved",hrStatus:"Approved"},{dated:"25-Nov-2020",month:"November 20",correctionDate:"25-Nov-2020",lmStatus:"Approved",hrStatus:"Approved"}],J=((I=function(){function e(){t(this,e),this.statusColumns=["month","corrections","approved","pending","rejected"],this.statusDataSource=H,this.correctionAppsColumns=["dated","month","correctionDate","lmStatus","hrStatus"],this.correctionAppsDataSource=F}var o,c,a;return o=e,(c=[{key:"ngOnInit",value:function(){}}])&&n(o.prototype,c),a&&n(o,a),e}()).\u0275fac=function(t){return new(t||I)},I.\u0275cmp=i.Ib({type:I,selectors:[["app-attendace-correction"]],decls:180,vars:10,consts:[[1,"ac-container"],[1,"ac-left-container"],[1,"w-100"],[1,"ac-left-box"],[1,"ac-title"],[1,"p-1","pb-3"],[1,"d-flex","my-1"],[1,"w-100","mx-1"],["appearance","outline",1,"w-100"],["matInput","","placeholder",""],["matSuffix",""],[1,"ac-footer"],[1,"text-right","ac-button-list"],["routerLink","/",1,"ml-2"],["value","option"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"click"],["picker2",""],["appearance","outline",1,"w-100","pr-2"],["picker3",""],[1,"ac-right-container"],[1,"ac-right-box","mt-2"],["mat-table","",1,"ac-table",3,"dataSource"],["matColumnDef","month"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","corrections"],["matColumnDef","approved"],["matColumnDef","pending"],["matColumnDef","rejected"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"ac-box","ml-2","mt-2"],[1,"ac-content"],["showFirstLastButtons","","aria-label","Select page",1,"mt-2",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,n){if(1&t){var e=i.Vb();i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"div",2),i.Ub(3,"div",3),i.Ub(4,"div",4),i.Sc(5," Attendace Correction "),i.Tb(),i.Ub(6,"div",5),i.Ub(7,"div",6),i.Ub(8,"p",7),i.Ub(9,"mat-form-field",8),i.Ub(10,"mat-label"),i.Sc(11,"Employee Code"),i.Tb(),i.Pb(12,"input",9),i.Tb(),i.Tb(),i.Tb(),i.Ub(13,"div",6),i.Ub(14,"p",7),i.Ub(15,"mat-form-field",8),i.Ub(16,"mat-label"),i.Sc(17,"Time Correction In"),i.Tb(),i.Pb(18,"input",9),i.Ub(19,"mat-icon",10),i.Sc(20,"access_time"),i.Tb(),i.Tb(),i.Tb(),i.Ub(21,"p",7),i.Ub(22,"mat-form-field",8),i.Ub(23,"mat-label"),i.Sc(24,"Time Correction Out"),i.Tb(),i.Pb(25,"input",9),i.Ub(26,"mat-icon",10),i.Sc(27,"access_time"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(28,"div",6),i.Ub(29,"p",7),i.Ub(30,"mat-form-field",8),i.Ub(31,"mat-label"),i.Sc(32,"Brief Reason"),i.Tb(),i.Pb(33,"input",9),i.Ub(34,"mat-icon",10),i.Sc(35,"view_headline"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(36,"div",11),i.Ub(37,"div",12),i.Ub(38,"a",13),i.Sc(39,"Submit"),i.Tb(),i.Ub(40,"a",13),i.Sc(41,"Cancel"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(42,"div",2),i.Ub(43,"div",3),i.Ub(44,"div",4),i.Sc(45," Leave Reversal "),i.Tb(),i.Ub(46,"div",5),i.Ub(47,"div",6),i.Ub(48,"p",7),i.Ub(49,"mat-form-field",8),i.Ub(50,"mat-label"),i.Sc(51,"Date"),i.Tb(),i.Ub(52,"mat-select"),i.Ub(53,"mat-option",14),i.Sc(54,"3 Consecutive"),i.Tb(),i.Ub(55,"mat-option",14),i.Sc(56,"> 09:30"),i.Tb(),i.Ub(57,"mat-option",14),i.Sc(58,"Annual Leave"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(59,"p",7),i.Ub(60,"mat-form-field",8),i.Ub(61,"mat-label"),i.Sc(62,"Date"),i.Tb(),i.Pb(63,"input",15),i.Ub(64,"mat-icon",16),i.fc("click",(function(){return i.Hc(e),i.Ec(67).open()})),i.Sc(65,"calendar_today"),i.Tb(),i.Pb(66,"mat-datepicker",null,17),i.Tb(),i.Tb(),i.Ub(68,"div",7),i.Sc(69," \xa0 "),i.Tb(),i.Tb(),i.Ub(70,"div",11),i.Ub(71,"div",12),i.Ub(72,"a",13),i.Sc(73,"+ Add"),i.Tb(),i.Tb(),i.Tb(),i.Ub(74,"div",6),i.Ub(75,"p",7),i.Ub(76,"mat-form-field",18),i.Ub(77,"mat-label"),i.Sc(78,"Brief Reason"),i.Tb(),i.Pb(79,"input",9),i.Ub(80,"mat-icon",10),i.Sc(81,"view_headline"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(82,"div",11),i.Ub(83,"div",12),i.Ub(84,"a",13),i.Sc(85,"Submit"),i.Tb(),i.Ub(86,"a",13),i.Sc(87,"Cancel"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(88,"div",2),i.Ub(89,"div",3),i.Ub(90,"div",4),i.Sc(91," Shift Change Request "),i.Tb(),i.Ub(92,"div",5),i.Ub(93,"div",6),i.Ub(94,"p",7),i.Ub(95,"mat-form-field",8),i.Ub(96,"mat-label"),i.Sc(97,"Date"),i.Tb(),i.Pb(98,"input",15),i.Ub(99,"mat-icon",16),i.fc("click",(function(){return i.Hc(e),i.Ec(102).open()})),i.Sc(100,"calendar_today"),i.Tb(),i.Pb(101,"mat-datepicker",null,19),i.Tb(),i.Tb(),i.Ub(103,"p",7),i.Ub(104,"mat-form-field",8),i.Ub(105,"mat-label"),i.Sc(106,"Requested Shift"),i.Tb(),i.Pb(107,"input",9),i.Ub(108,"mat-icon",10),i.Sc(109,"access_time"),i.Tb(),i.Tb(),i.Tb(),i.Ub(110,"p",7),i.Ub(111,"mat-form-field",8),i.Ub(112,"mat-label"),i.Sc(113,"Current Shift"),i.Tb(),i.Pb(114,"input",9),i.Ub(115,"mat-icon",10),i.Sc(116,"access_time"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(117,"div",6),i.Ub(118,"p",7),i.Ub(119,"mat-form-field",8),i.Ub(120,"mat-label"),i.Sc(121,"Brief Reason"),i.Tb(),i.Pb(122,"input",9),i.Ub(123,"mat-icon",10),i.Sc(124,"view_headline"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(125,"div",11),i.Ub(126,"div",12),i.Ub(127,"a",13),i.Sc(128,"Submit"),i.Tb(),i.Ub(129,"a",13),i.Sc(130,"Cancel"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(131,"div",20),i.Ub(132,"div",2),i.Ub(133,"div",21),i.Ub(134,"div",4),i.Sc(135," Correction Status "),i.Tb(),i.Ub(136,"table",22),i.Sc(137," A "),i.Sb(138,23),i.Qc(139,s,2,0,"th",24),i.Qc(140,h,2,1,"td",25),i.Rb(),i.Sb(141,26),i.Qc(142,U,2,0,"th",24),i.Qc(143,T,2,1,"td",25),i.Rb(),i.Sb(144,27),i.Qc(145,v,2,0,"th",24),i.Qc(146,S,2,1,"td",25),i.Rb(),i.Sb(147,28),i.Qc(148,C,2,0,"th",24),i.Qc(149,P,2,1,"td",25),i.Rb(),i.Sb(150,29),i.Qc(151,x,2,0,"th",24),i.Qc(152,M,2,1,"td",25),i.Rb(),i.Qc(153,_,1,0,"tr",30),i.Qc(154,O,1,0,"tr",31),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(155,"div",0),i.Ub(156,"div",2),i.Ub(157,"div",32),i.Ub(158,"div",4),i.Sc(159," Correction Applicaitons "),i.Tb(),i.Ub(160,"div",33),i.Ub(161,"table",22),i.Sb(162,23),i.Qc(163,w,2,0,"th",24),i.Qc(164,k,2,1,"td",25),i.Rb(),i.Sb(165,26),i.Qc(166,D,2,0,"th",24),i.Qc(167,y,2,1,"td",25),i.Rb(),i.Sb(168,27),i.Qc(169,R,2,0,"th",24),i.Qc(170,B,2,1,"td",25),i.Rb(),i.Sb(171,28),i.Qc(172,Q,2,0,"th",24),i.Qc(173,A,2,1,"td",25),i.Rb(),i.Sb(174,29),i.Qc(175,j,2,0,"th",24),i.Qc(176,N,2,1,"td",25),i.Rb(),i.Qc(177,$,1,0,"tr",30),i.Qc(178,z,1,0,"tr",31),i.Tb(),i.Pb(179,"mat-paginator",34),i.Tb(),i.Tb(),i.Tb(),i.Tb()}if(2&t){var o=i.Ec(67),c=i.Ec(102);i.Bb(63),i.rc("matDatepicker",o),i.Bb(35),i.rc("matDatepicker",c),i.Bb(38),i.rc("dataSource",n.statusDataSource),i.Bb(17),i.rc("matHeaderRowDef",n.statusColumns),i.Bb(1),i.rc("matRowDefColumns",n.statusColumns),i.Bb(7),i.rc("dataSource",n.correctionAppsDataSource),i.Bb(16),i.rc("matHeaderRowDef",n.statusColumns),i.Bb(1),i.rc("matRowDefColumns",n.statusColumns),i.Bb(1),i.rc("pageSizeOptions",i.uc(9,E))}},directives:[b.b,b.e,r.b,d.a,b.f,p.c,l.a,f.n,m.b,m.a,u.j,u.c,u.e,u.b,u.g,u.i,g.a,u.d,u.a,u.f,u.h],styles:["mat-form-field.mat-form-field-should-focus[_ngcontent-%COMP%], mat-label[_ngcontent-%COMP%]{font-size:12px}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{font-size:13px!important}.ac-main[_ngcontent-%COMP%]{min-height:93.6%;position:relative;margin:0 auto;padding:0}.ac-left-container[_ngcontent-%COMP%]{width:65%;float:left;background-color:#fff}.ac-right-container[_ngcontent-%COMP%]{position:absolute;right:0;top:0;height:99%;width:35%;float:right;background-color:#fff}.ac-label[_ngcontent-%COMP%]{width:100%;padding:5px}.ac-list[_ngcontent-%COMP%]{list-style-type:none;padding:6px 8px 0 35px;margin:0;height:26px;width:auto}.ac-table[_ngcontent-%COMP%]{width:100%}.ac-statusMenu[_ngcontent-%COMP%]{padding:0;height:50px;width:auto;float:right;font:11px Tahoma,Arial,Verdana;color:#4c4c4c;text-align:left}.ac-logo[_ngcontent-%COMP%]{margin:27px}.ac-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .ac-logo[_ngcontent-%COMP%]{display:inline-block}.ac-login[_ngcontent-%COMP%]{position:relative;background:none;top:150px;width:400px;min-width:400px;height:276px;min-height:0;margin:auto}.ac-box[_ngcontent-%COMP%], .ac-left-box[_ngcontent-%COMP%]{display:block;background:#fcfcfc!important;border:1px solid #e7e7e7;flex-direction:row}.ac-left-box[_ngcontent-%COMP%]{width:98%;margin:1%}.ac-right-box[_ngcontent-%COMP%]{display:block;flex-direction:row-reverse;margin:1%;background:#fcfcfc!important;border:1px solid #e7e7e7}.ac-title[_ngcontent-%COMP%]{background:url(box-title.e1f201eb4580921df022.gif) repeat-x 0 0;padding:8px 10px;font:12px/1em Verdana,Arial,Tahome;color:#333;font-weight:600}.ac-content[_ngcontent-%COMP%]{background:url(box-shadow.7f3d08d2a8dbb5226a95.gif) repeat-x 0 0;padding:5px}.ac-footer[_ngcontent-%COMP%]{background:#e6e6e6;padding:6px 10px 4px}#ac-button-list[_ngcontent-%COMP%]{margin:3px 0;text-align:right}#ac-button[_ngcontent-%COMP%], #ac-button-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #ac-button-list[_ngcontent-%COMP%]   font[_ngcontent-%COMP%], .ac-button-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .ac-button-list[_ngcontent-%COMP%]   font[_ngcontent-%COMP%], a#ac-button[_ngcontent-%COMP%], a.ac-button[_ngcontent-%COMP%]{position:relative;padding:2px 6px;background:transparent linear-gradient(180deg,#ededed,#fafafa) 0 0 no-repeat padding-box;border:1px solid #fff;border-radius:3px;color:#3080ea;opacity:1;text-decoration:none;font-size:11px}#ac-button-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #ac-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .ac-button-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .ac-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, a#ac-button[_ngcontent-%COMP%]:hover, a.ac-button[_ngcontent-%COMP%]:hover{border:1px solid #a6daee;padding:2px 6px;background:transparent linear-gradient(0deg,#f1fafe,#bde9fb) 0 0 no-repeat padding-box;border-radius:3px;opacity:1;color:#343434;text-decoration:none;font-size:11px}.ac-container[_ngcontent-%COMP%]{position:relative;clear:both;display:flex}.ac-controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:12px;position:absolute;top:0;left:9px;padding:0;margin:0;cursor:text;width:35%;font-weight:700}form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:block;position:relative;border:none;line-height:26px;padding:0}form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(odd){background-color:#fafafa}form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:block;margin:0 0 0 35%;padding-left:10px;border-left:1px solid #eee}.ac-custom-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-position:0 100%;background:url(checkbox.f2711c3f2e7bbcf7665f.gif) no-repeat;position:relative;top:0;padding:1px 0 0 20px;margin:0 0 5px;font-size:11px/12px Arial;color:#1c1c1c;cursor:pointer;width:auto;height:15px}form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .ac-right[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{left:2px;font-weight:400}.ac-flux[_ngcontent-%COMP%]{display:flex}p[_ngcontent-%COMP%]{margin:10px 0 0;font-size:11px}"]}),I),q=c("tk/3"),V=c("IZw1"),G=c("3Pt+"),K=c("W/RB"),X=c("PkMp"),W=[{path:"",component:J}],Z=((L=function n(){t(this,n)}).\u0275mod=i.Mb({type:L}),L.\u0275inj=i.Lb({factory:function(t){return new(t||L)},imports:[[a.c,q.d,V.a,G.k,G.u,K.a,X.a,p.d.forChild(W)]]}),L)}}])}();