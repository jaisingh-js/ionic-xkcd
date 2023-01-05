"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8084],{8084:(w,a,c)=>{c.r(a),c.d(a,{HomePageModule:()=>P});var s=c(6895),o=c(5035),u=c(433),l=c(1407),t=c(8256),m=c(529);let d=(()=>{class e{constructor(n){this.http=n,this.apiUrl="https://xkcd.com/"}getComic(n){return this.http.get(this.apiUrl+n+"/info.0.json")}getRandomComic(){return this.http.get(this.apiUrl+this.getRandomNumber()+"/info.0.json")}getRandomNumber(){return Math.floor(2719*Math.random())}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(m.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function h(e,i){1&e&&(t.O4$(),t.TgZ(0,"svg",9)(1,"circle",10),t._UZ(2,"animateTransform",11),t.qZA()())}function p(e,i){if(1&e&&t._UZ(0,"ion-img",12),2&e){const n=t.oxw();t.Q6J("src",null==n.comicData?null:n.comicData.img)}}const f=[{path:"",component:(()=>{class e{constructor(n){this.xkcd=n,this.loading=!0}ngOnInit(){this.xkcd.getRandomComic().subscribe(n=>{this.comicData=n,this.currentIndex=n.num,this.loading=!1})}getNext(){this.currentIndex&&(this.loading=!0,this.currentIndex-=1,this.xkcd.getComic(this.currentIndex).subscribe(n=>{this.comicData=n,this.loading=!1}))}getPrev(){this.currentIndex&&(this.loading=!0,this.currentIndex+=1,this.xkcd.getComic(this.currentIndex).subscribe(n=>{this.comicData=n,this.loading=!1}))}getRandom(){this.loading=!0,this.xkcd.getRandomComic().subscribe(n=>{this.comicData=n,this.loading=!1})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:23,vars:5,consts:[[3,"translucent"],[3,"fullscreen"],[1,"center-container"],[1,"ion-justify-content-center",3,"fixed"],[1,"ion-padding"],[3,"click"],["size","auto"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","style","margin: auto; background: rgb(241, 242, 243); display: block","width","200px","height","200px","viewBox","0 0 100 100","preserveAspectRatio","xMidYMid",4,"ngIf"],["class","main-image",3,"src",4,"ngIf"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","200px","height","200px","viewBox","0 0 100 100","preserveAspectRatio","xMidYMid",2,"margin","auto","background","rgb(241, 242, 243)","display","block"],["cx","50","cy","50","r","32","stroke-width","8","stroke","#1d3f72","stroke-dasharray","50.26548245743669 50.26548245743669","fill","none","stroke-linecap","round"],["attributeName","transform","type","rotate","repeatCount","indefinite","dur","1s","keyTimes","0;1","values","0 50 50;360 50 50"],[1,"main-image",3,"src"]],template:function(n,r){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," XKCD "),t.qZA()()(),t.TgZ(4,"ion-content",1)(5,"section",2)(6,"ion-grid",3)(7,"ion-row",4)(8,"ion-col")(9,"ion-button",5),t.NdJ("click",function(){return r.getPrev()}),t._uU(10,"Prev"),t.qZA()(),t.TgZ(11,"ion-col")(12,"ion-button",5),t.NdJ("click",function(){return r.getRandom()}),t._uU(13,"Random"),t.qZA()(),t.TgZ(14,"ion-col",6)(15,"ion-button",5),t.NdJ("click",function(){return r.getNext()}),t._uU(16,"Next"),t.qZA()()(),t.TgZ(17,"ion-row"),t._UZ(18,"ion-col"),t.TgZ(19,"ion-col",6),t.YNc(20,h,3,0,"svg",7),t.YNc(21,p,1,1,"ion-img",8),t.qZA(),t._UZ(22,"ion-col"),t.qZA()()()()),2&n&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(2),t.Q6J("fixed",!0),t.xp6(14),t.Q6J("ngIf",r.loading),t.xp6(1),t.Q6J("ngIf",!r.loading))},dependencies:[s.O5,o.YG,o.wI,o.W2,o.jY,o.Gu,o.Xz,o.Nd,o.wd,o.sr],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.center-container[_ngcontent-%COMP%]{margin:auto;max-width:1000px;height:100%;display:flex;justify-content:center}.main-image[_ngcontent-%COMP%]{width:80%;min-width:500px}"]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(f),l.Bz]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.ez,u.u5,o.Pc,x]}),e})()}}]);