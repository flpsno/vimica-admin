(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{pKmL:function(t,e,r){"use strict";r.r(e),r.d(e,"CoreModule",function(){return mt});var a=r("ofXK"),i=r("tyNb"),n=r("3Pt+"),o=r("YUcS"),s=r("tk/3"),c=r("5dmV"),l=r("fXoL");let u=(()=>{class t{constructor(){this.menuItemSelectd=new l.o}emitMenuItemSelectedEvent(t){this.menuItemSelectd.emit(t)}getMenuItemSelectedEmitter(){return this.menuItemSelectd}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=r("/t3+"),d=r("STbY"),m=r("bTqV"),p=r("NFeN");function h(t,e){if(1&t){const t=l.Ub();l.Tb(0,"button",7),l.bc("click",function(){return l.rc(t),l.fc().goToLastRoute()}),l.Tb(1,"mat-icon"),l.yc(2,"arrow_back"),l.Sb(),l.Sb()}}function f(t,e){if(1&t&&(l.Tb(0,"button",8),l.Tb(1,"mat-icon"),l.yc(2,"more_vert"),l.Sb(),l.Sb()),2&t){l.fc();const t=l.pc(7);l.kc("matMenuTriggerFor",t)}}function g(t,e){if(1&t){const t=l.Ub();l.Tb(0,"button",9),l.bc("click",function(){l.rc(t);const r=e.$implicit;return l.fc().selectedMenuItem(r.id)}),l.yc(1),l.Sb()}if(2&t){const t=e.$implicit;l.Cb(1),l.zc(t.caption)}}let v=(()=>{class t{constructor(t,e,r){this.router=t,this.activatedRoute=e,this.toolbarService=r,this.menuItems=[{rota:"",backButtonVisible:!1,itensMenu:[]},{rota:"/produtos",itensMenu:[{caption:"Novo Produto",id:1}]},{rota:"/clientes",itensMenu:[{caption:"Novo Cliente",id:2}]},{rota:"/pedidos",itensMenu:[{caption:"Novo Pedido",id:3}]},{rota:"/perfil-usuario",itensMenu:[{caption:"Aterar Dados",id:4},{caption:"Alterar Senha",id:5},{caption:"Configura\xe7\xf5es",id:6},{caption:"Logout",id:7}]}],this.currentMenu="menuProdutos",this.showBackButon=!1}ngOnInit(){this.getTitle()}selectedMenuItem(t){this.toolbarService.emitMenuItemSelectedEvent(t)}getTitle(){var t;let e=this.activatedRoute.firstChild;for(;!e;)e=e.firstChild;const r=e.snapshot.data.title;this.showBackButon=null!==(t=1==e.snapshot.data.showBackButon)&&void 0!==t&&t,r&&(this.title=r),this.router.events.subscribe(t=>{var e;t instanceof i.b&&(this.title=this.activatedRoute.snapshot.firstChild.data.title,this.showBackButon=null!==(e=1==this.activatedRoute.snapshot.firstChild.data.showBackButon)&&void 0!==e&&e)})}getMenuItems(){var t,e;let r=this.menuItems.filter(t=>t.rota===this.router.url);return r&&null!==(e=null===(t=r[0])||void 0===t?void 0:t.itensMenu)&&void 0!==e?e:[]}isMenuVisible(){var t;let e=this.menuItems.filter(t=>t.rota===this.router.url);return!!e&&!!(e&&1==e.length&&(null===(t=e[0].itensMenu)||void 0===t?void 0:t.length)>0)}goToLastRoute(){history.back()}}return t.\u0275fac=function(e){return new(e||t)(l.Nb(i.c),l.Nb(i.a),l.Nb(u))},t.\u0275cmp=l.Hb({type:t,selectors:[["app-toolbar"]],decls:9,vars:4,consts:[["color","primary"],["mat-button","",3,"click",4,"ngIf"],[1,"title"],[1,"example-spacer"],["mat-button","",3,"matMenuTriggerFor",4,"ngIf"],["menu","matMenu"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["mat-button","",3,"click"],["mat-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"]],template:function(t,e){1&t&&(l.Tb(0,"mat-toolbar",0),l.xc(1,h,3,0,"button",1),l.Tb(2,"span",2),l.yc(3),l.Sb(),l.Ob(4,"span",3),l.xc(5,f,3,1,"button",4),l.Tb(6,"mat-menu",null,5),l.xc(8,g,2,1,"button",6),l.Sb(),l.Sb()),2&t&&(l.Cb(1),l.kc("ngIf",e.showBackButon),l.Cb(2),l.zc(e.title),l.Cb(2),l.kc("ngIf",e.isMenuVisible()),l.Cb(3),l.kc("ngForOf",e.getMenuItems()))},directives:[b.a,a.l,d.a,a.k,m.a,p.a,d.d,d.b],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.userName[_ngcontent-%COMP%]{margin:16px;line-height:48px;height:48px}.title[_ngcontent-%COMP%]{margin-left:12px}.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%]{margin:0;padding:0}.mat-toolbar-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type, .mat-toolbar-single-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type, .mat-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{min-width:12px;padding:0 16px}.sidenav-toggle[_ngcontent-%COMP%]{display:none;padding:0;margin:8px;min-width:56px}@media (max-width:720px){.sidenav-toggle[_ngcontent-%COMP%]{display:flex;justify-content:center}}.sidenav-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:30px;height:56px;width:56px;line-height:56px;color:#fff}"]}),t})(),S=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Hb({type:t,selectors:[["app-sidenav"]],decls:4,vars:0,consts:[[1,"app-sidenav-content"],[1,"wrapper"]],template:function(t,e){1&t&&(l.Tb(0,"div",0),l.Ob(1,"app-toolbar"),l.Tb(2,"div",1),l.Ob(3,"router-outlet"),l.Sb(),l.Sb())},directives:[v,i.e],styles:[".app-sidenav-content[_ngcontent-%COMP%]{display:flex;height:100%;flex-direction:column}.wrapper[_ngcontent-%COMP%]{margin:12px}"]}),t})(),y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Hb({type:t,selectors:[["app-core"]],decls:1,vars:0,template:function(t,e){1&t&&l.Ob(0,"app-sidenav")},directives:[S],styles:[""]}),t})();var T=r("vkgz"),C=r("AytR"),k=r("2Vo4");function w(t){this.message=t}(w.prototype=new Error).name="InvalidCharacterError";var O="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new w("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,a,i=0,n=0,o="";a=e.charAt(n++);~a&&(r=i%4?64*r+a:a,i++%4)?o+=String.fromCharCode(255&r>>(-2*i&6)):0)a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a);return o};function x(t){this.message=t}(x.prototype=new Error).name="InvalidTokenError";var I=r("z3Dy");let N=(()=>{class t{constructor(t){this.tokenService=t,this.userSubject=new k.a(null),this.tokenService.hasToken()&&this.decodeAndNotify()}setToken(t){this.tokenService.setToken(t),this.decodeAndNotify()}getUser(){return this.userSubject.asObservable()}decodeAndNotify(){const t=function(t,e){if("string"!=typeof t)throw new x("Invalid token specified");var r=!0===(e=e||{}).header?0:1;try{return JSON.parse(function(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(O(t).replace(/(.)/g,function(t,e){var r=e.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r}))}(e)}catch(t){return O(e)}}(t.split(".")[r]))}catch(t){throw new x("Invalid token specified: "+t.message)}}(this.tokenService.getToken());this.userName=t.username,this.name=t.nome,this.userSubject.next(t)}logout(){this.tokenService.removeToken(),this.userSubject.next(null)}isLogged(){return this.tokenService.hasToken()}getUserName(){return this.userName}getName(){return this.name}}return t.\u0275fac=function(e){return new(e||t)(l.Xb(I.a))},t.\u0275prov=l.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),M=(()=>{class t{constructor(t,e){this.http=t,this.userService=e,this.url=`${C.a.apiUrl}/api/auth`}authenticate(t,e){return this.http.post(this.url,{username:t,senha:e},{observe:"response"}).pipe(Object(T.a)(t=>{this.userService.setToken(t.body.token)}))}}return t.\u0275fac=function(e){return new(e||t)(l.Xb(s.b),l.Xb(N))},t.\u0275prov=l.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var E=r("XiUz"),P=r("Wp6s"),F=r("kmnG"),L=r("qFsG");function _(t,e){if(1&t&&(l.Tb(0,"mat-error"),l.yc(1),l.Sb()),2&t){const t=l.fc();l.Cb(1),l.zc(t.getUsuarioErrorMessage())}}function A(t,e){if(1&t&&(l.Tb(0,"mat-error"),l.yc(1),l.Sb()),2&t){const t=l.fc();l.Cb(1),l.zc(t.getSenhaErrorMessage())}}let B=(()=>{class t{constructor(t,e,r){this.formBuilder=t,this.authService=e,this.router=r,this.hide=!0}ngOnInit(){this.loginForm=this.formBuilder.group({usuario:["",[n.p.required]],senha:["",[n.p.required]]})}getUsuarioErrorMessage(){var t;return(null===(t=this.loginForm.get("usuario").errors)||void 0===t?void 0:t.required)?"O usu\xe1rio precisa ser preenchido":""}getSenhaErrorMessage(){var t;return(null===(t=this.loginForm.get("senha").errors)||void 0===t?void 0:t.required)?"A senha precisa ser preenchida":""}logar(){const t=this.loginForm.get("usuario").value,e=this.loginForm.get("senha").value;this.authService.authenticate(t,e).subscribe(()=>this.router.navigate([""]),t=>{console.log(t),this.loginForm.reset(),alert("Invalid user name or password")})}limpar(){this.loginForm.reset()}}return t.\u0275fac=function(e){return new(e||t)(l.Nb(n.d),l.Nb(M),l.Nb(i.c))},t.\u0275cmp=l.Hb({type:t,selectors:[["app-login"]],decls:28,vars:8,consts:[["fxLayout","column","fxLayoutAlign","center center"],[1,"example-card"],["fxLayout","row","fxLayoutAlign","center center"],["src","/assets/images/logo.png","alt",""],["fxLayout","column"],[1,"example-container",3,"formGroup","submit"],["appearance","standard"],["matInput","","type","text","formControlName","usuario","id","usuario"],["matSuffix",""],[4,"ngIf"],["matInput","","formControlName","senha","id","senha",3,"type"],["mat-icon-button","","type","button","matSuffix","",3,"click"],["fxLayout","row","fxLayoutAlign","end center"],["mat-raised-button","","type","submit","color","primary",3,"disabled","click"]],template:function(t,e){1&t&&(l.Tb(0,"div",0),l.Tb(1,"mat-card",1),l.Tb(2,"mat-card-header",2),l.Tb(3,"mat-card-title"),l.Ob(4,"img",3),l.Tb(5,"h3"),l.yc(6,"Admin"),l.Sb(),l.Sb(),l.Sb(),l.Tb(7,"mat-card-content"),l.Tb(8,"div",4),l.Tb(9,"form",5),l.bc("submit",function(){return e.logar()}),l.Tb(10,"mat-form-field",6),l.Tb(11,"mat-label"),l.yc(12,"Usu\xe1rio"),l.Sb(),l.Ob(13,"input",7),l.Tb(14,"mat-icon",8),l.yc(15,"perm_identity"),l.Sb(),l.xc(16,_,2,1,"mat-error",9),l.Sb(),l.Tb(17,"mat-form-field",6),l.Tb(18,"mat-label"),l.yc(19,"Senha"),l.Sb(),l.Ob(20,"input",10),l.Tb(21,"button",11),l.bc("click",function(){return e.hide=!e.hide}),l.Tb(22,"mat-icon"),l.yc(23),l.Sb(),l.Sb(),l.xc(24,A,2,1,"mat-error",9),l.Sb(),l.Tb(25,"div",12),l.Tb(26,"button",13),l.bc("click",function(){return e.logar()}),l.yc(27,"Login"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb()),2&t&&(l.Cb(9),l.kc("formGroup",e.loginForm),l.Cb(7),l.kc("ngIf",e.loginForm.get("usuario").invalid),l.Cb(4),l.kc("type",e.hide?"password":"text"),l.Cb(1),l.Db("aria-label","Hide password")("aria-pressed",e.hide),l.Cb(2),l.zc(e.hide?"visibility_off":"visibility"),l.Cb(1),l.kc("ngIf",e.loginForm.get("senha").invalid),l.Cb(2),l.kc("disabled",e.loginForm.invalid))},directives:[E.b,E.a,P.a,P.d,P.f,P.c,n.q,n.l,n.f,F.c,F.f,L.b,n.c,n.k,n.e,p.a,F.g,a.l,m.a,F.b],styles:[".example-card[_ngcontent-%COMP%]{max-width:400px;margin:12px}.example-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}.example-right-align[_ngcontent-%COMP%]{text-align:right}input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button{display:none}input.example-right-align[_ngcontent-%COMP%]{-moz-appearance:textfield}img[_ngcontent-%COMP%]{height:145px}"]}),t})(),U=(()=>{class t{constructor(t,e){this.userService=t,this.router=e}canActivate(){return!!this.userService.isLogged()||(this.router.navigate(["login"],{}),!1)}}return t.\u0275fac=function(e){return new(e||t)(l.Xb(N),l.Xb(i.c))},t.\u0275prov=l.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var $=r("0IaG");let D=(()=>{class t{constructor(t){this.http=t,this.url=`${C.a.apiUrl}/api/usuarios`}obterUsuario(t){return this.http.get(`${this.url}/${t}`)}trocarSenha(t,e,r,a){return this.http.post(`${this.url}/${t}/trocarsenha `,{senhaAtual:e,novaSenha:r,confirmaSenha:a})}atualizarUsuario(t){return this.http.put(`${this.url}/${t.id}`,t)}}return t.\u0275fac=function(e){return new(e||t)(l.Xb(s.b))},t.\u0275prov=l.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),R=(()=>{class t{constructor(t,e,r,a){this.dialogRef=t,this.formBuilder=e,this.usuarioService=r,this.data=a}ngOnInit(){var t;(null===(t=this.data)||void 0===t?void 0:t.id)&&(this.usuarioId=this.data.id),this.dadosForm=this.formBuilder.group({nome:["",[n.p.required]],email:["",[]]}),this.carregarUsuario()}carregarUsuario(){this.usuarioService.obterUsuario(this.usuarioId).subscribe(t=>{t&&(this.usuario=t,this.dadosForm.patchValue({nome:t.nome,email:t.email}))})}save(){const t=this.dadosForm.getRawValue();this.usuario.nome=t.nome,this.usuario.email=t.email,this.usuarioService.atualizarUsuario(this.usuario).subscribe(t=>{this.dialogRef.close(!0)},t=>{console.log(t)})}dismiss(){this.dialogRef.close(null)}}return t.\u0275fac=function(e){return new(e||t)(l.Nb($.f),l.Nb(n.d),l.Nb(D),l.Nb($.a))},t.\u0275cmp=l.Hb({type:t,selectors:[["app-change-user-data-dialog"]],decls:21,vars:1,consts:[["mat-dialog-title",""],[1,"example-container",3,"formGroup"],["appearance","standard"],["matInput","","type","text","formControlName","nome"],["matInput","","type","email","formControlName","email"],["fxLayout","row","fxLayoutAlign","space-between center"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(l.Tb(0,"h2",0),l.yc(1,"Alterar Dados"),l.Sb(),l.Tb(2,"mat-dialog-content"),l.Tb(3,"form",1),l.Tb(4,"mat-form-field",2),l.Tb(5,"mat-label"),l.yc(6,"Nome"),l.Sb(),l.Ob(7,"input",3),l.Sb(),l.Tb(8,"mat-form-field",2),l.Tb(9,"mat-label"),l.yc(10,"E-mail"),l.Sb(),l.Ob(11,"input",4),l.Sb(),l.Sb(),l.Sb(),l.Tb(12,"mat-dialog-actions",5),l.Tb(13,"button",6),l.bc("click",function(){return e.dismiss()}),l.Tb(14,"mat-icon"),l.yc(15,"cancel"),l.Sb(),l.yc(16," Cancelar "),l.Sb(),l.Tb(17,"button",7),l.bc("click",function(){return e.save()}),l.Tb(18,"mat-icon"),l.yc(19,"save"),l.Sb(),l.yc(20," Salvar "),l.Sb(),l.Sb()),2&t&&(l.Cb(3),l.kc("formGroup",e.dadosForm))},directives:[$.g,$.d,n.q,n.l,n.f,F.c,F.f,L.b,n.c,n.k,n.e,$.c,E.b,E.a,m.a,p.a],styles:[".mat-dialog-content[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{display:block}"]}),t})(),q=(()=>{class t{constructor(t,e,r,a){this.dialogRef=t,this.formBuilder=e,this.usuarioService=r,this.data=a}ngOnInit(){var t;(null===(t=this.data)||void 0===t?void 0:t.id)&&(this.usuarioId=this.data.id),this.trocaSenhaForm=this.formBuilder.group({senhaAtual:["",[n.p.required]],novaSenha:["",[n.p.required]],confirmaSenha:["",[n.p.required]]})}save(){const t=this.trocaSenhaForm.getRawValue();this.usuarioService.trocarSenha(this.usuarioId,t.senhaAtual,t.novaSenha,t.confirmaSenha).subscribe(t=>{this.dialogRef.close(!0)},t=>{console.log(t)})}dismiss(){this.dialogRef.close(null)}}return t.\u0275fac=function(e){return new(e||t)(l.Nb($.f),l.Nb(n.d),l.Nb(D),l.Nb($.a))},t.\u0275cmp=l.Hb({type:t,selectors:[["app-change-user-password-dialog"]],decls:26,vars:1,consts:[["mat-dialog-title",""],[1,"example-container",3,"formGroup"],[1,"example-container"],["appearance","standard"],["matInput","","type","password","formControlName","senhaAtual"],["matInput","","type","password","formControlName","novaSenha"],["matInput","","type","password","formControlName","confirmaSenha"],["fxLayout","row","fxLayoutAlign","space-between center"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(l.Tb(0,"h2",0),l.yc(1,"Alterar Senha"),l.Sb(),l.Tb(2,"mat-dialog-content"),l.Tb(3,"form",1),l.Tb(4,"div",2),l.Tb(5,"mat-form-field",3),l.Tb(6,"mat-label"),l.yc(7,"Senha Atual"),l.Sb(),l.Ob(8,"input",4),l.Sb(),l.Tb(9,"mat-form-field",3),l.Tb(10,"mat-label"),l.yc(11,"Nova Senha"),l.Sb(),l.Ob(12,"input",5),l.Sb(),l.Tb(13,"mat-form-field",3),l.Tb(14,"mat-label"),l.yc(15,"Confirma\xe7\xe3o da Senha"),l.Sb(),l.Ob(16,"input",6),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(17,"mat-dialog-actions",7),l.Tb(18,"button",8),l.bc("click",function(){return e.dismiss()}),l.Tb(19,"mat-icon"),l.yc(20,"cancel"),l.Sb(),l.yc(21," Cancelar "),l.Sb(),l.Tb(22,"button",9),l.bc("click",function(){return e.save()}),l.Tb(23,"mat-icon"),l.yc(24,"save"),l.Sb(),l.yc(25," Salvar "),l.Sb(),l.Sb()),2&t&&(l.Cb(3),l.kc("formGroup",e.trocaSenhaForm))},directives:[$.g,$.d,n.q,n.l,n.f,F.c,F.f,L.b,n.c,n.k,n.e,$.c,E.b,E.a,m.a,p.a],styles:[".mat-dialog-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] > .mat-form-field[_ngcontent-%COMP%]{display:block}"]}),t})();var z=r("dNgK");let X=(()=>{class t{constructor(t,e,r,a,i,n){this.userService=t,this.usuarioService=e,this.toolbarService=r,this.dialog=a,this.snackBar=i,this.router=n,this.userId=""}ngOnInit(){this.userService.getUser().subscribe(t=>{t&&(this.userId=t.userId,this.loadUsuario())}),this.subscription=this.toolbarService.getMenuItemSelectedEmitter().subscribe(t=>{this.selectedMenuItem(t)})}loadUsuario(){this.usuarioService.obterUsuario(this.userId).subscribe(t=>{this.usuario=t})}ngOnDestroy(){this.subscription.unsubscribe()}selectedMenuItem(t){switch(t){case 4:this.openChangeUserDataDialog();break;case 5:this.openChangePasswordDialog();break;case 6:this.openConfiguracao();break;case 7:this.logout()}}openChangeUserDataDialog(){this.dialog.open(R,{width:"90vw",data:{id:this.userId}}).afterClosed().subscribe(t=>{t&&(this.openSnackBar("Dados alterado com sucesso!",null),this.loadUsuario())})}openChangePasswordDialog(){this.dialog.open(q,{width:"90vw",data:{id:this.userId}}).afterClosed().subscribe(t=>{t&&this.openSnackBar("Senha Alterada com sucesso!",null)})}openConfiguracao(){this.router.navigate(["configuracoes"])}logout(){this.userService.logout(),this.router.navigate(["login"])}openSnackBar(t,e){return this.snackBar.open(t,e,{duration:5e3})}}return t.\u0275fac=function(e){return new(e||t)(l.Nb(N),l.Nb(D),l.Nb(u),l.Nb($.b),l.Nb(z.a),l.Nb(i.c))},t.\u0275cmp=l.Hb({type:t,selectors:[["app-perfil-usuario"]],decls:16,vars:4,consts:[["appearance","standard"],["matInput","","type","text","readonly","",3,"value"]],template:function(t,e){1&t&&(l.Tb(0,"mat-form-field",0),l.Tb(1,"mat-label"),l.yc(2,"Usu\xe1rio"),l.Sb(),l.Ob(3,"input",1),l.Sb(),l.Tb(4,"mat-form-field",0),l.Tb(5,"mat-label"),l.yc(6,"Nome"),l.Sb(),l.Ob(7,"input",1),l.Sb(),l.Tb(8,"mat-form-field",0),l.Tb(9,"mat-label"),l.yc(10,"E-mail"),l.Sb(),l.Ob(11,"input",1),l.Sb(),l.Tb(12,"mat-form-field",0),l.Tb(13,"mat-label"),l.yc(14,"Empresa"),l.Sb(),l.Ob(15,"input",1),l.Sb()),2&t&&(l.Cb(3),l.kc("value",null==e.usuario?null:e.usuario.username),l.Cb(4),l.kc("value",null==e.usuario?null:e.usuario.nome),l.Cb(4),l.kc("value",null==e.usuario?null:e.usuario.email),l.Cb(4),l.kc("value",null==e.usuario?null:e.usuario.empresaNome))},directives:[F.c,F.f,L.b],styles:[".mat-form-field[_ngcontent-%COMP%]{display:block}"]}),t})();var G=r("z6cu"),V=r("7o/Q");class j{constructor(t,e){this.count=t,this.source=e}call(t,e){return e.subscribe(new H(t,this.count,this.source))}}class H extends V.a{constructor(t,e,r){super(t),this.count=e,this.source=r}error(t){if(!this.isStopped){const{source:e,count:r}=this;if(0===r)return super.error(t);r>-1&&(this.count=r-1),e.subscribe(this._unsubscribeAndRecycle())}}}var J=r("JIr8");class K{intercept(t,e){return e.handle(t).pipe(function(t=-1){return e=>e.lift(new j(t,e))}(1),Object(J.a)(t=>{let e="";return e=t.error instanceof ErrorEvent?`Error: ${t.error.message}`:`Error Code: ${t.status}\nMessage: ${t.message}`,window.alert(e),Object(G.a)(e)}))}}var Y=r("XNiG"),Q=r("Kj3r");let W=(()=>{class t{constructor(t){this.http=t,this.url=`${C.a.apiUrl}/api/empresas`}getById(t){return this.http.get(`${this.url}/${t}`)}loadAll(){return this.http.get(this.url)}addEmpresa(t){return this.http.post(this.url,t)}editEmpresa(t){return this.http.put(`${this.url}/${t.id}`,t)}deleteEmpresa(t){return this.http.delete(`${this.url}/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(l.Xb(s.b))},t.\u0275prov=l.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Z=(()=>{class t{constructor(t){this.http=t,this.url=`${C.a.apiUrl}/api/buscaceps`}getEndereco(t){return this.http.get(`${this.url}/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(l.Xb(s.b))},t.\u0275prov=l.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var tt=r("f0Cb");function et(t,e){if(1&t&&(l.Tb(0,"mat-error"),l.yc(1),l.Sb()),2&t){const t=l.fc();l.Cb(1),l.zc(t.getNomeErrorMessage())}}function rt(t,e){if(1&t&&(l.Tb(0,"mat-error"),l.yc(1),l.Sb()),2&t){const t=l.fc();l.Cb(1),l.zc(t.getEmailErrorMessage())}}let at=(()=>{class t{constructor(t,e,r,a,i){this.formBuilder=t,this.dialogRef=e,this.clienteService=r,this.buscaCepService=a,this.data=i,this.title="Adicionar Cliente"}ngOnInit(){var t;this.clienteForm=this.formBuilder.group({id:["",[]],nome:["",[n.p.required]],email:["",[n.p.email]],cpf:["",[]],telefone:["",[]],instagram:["",[]],cep:["",[]],logradouro:["",[]],numero:["",[]],complemento:["",[]],bairro:["",[]],cidade:["",[]],estado:["",[]]}),(null===(t=this.data)||void 0===t?void 0:t.id)&&(this.title="Editar Cliente",this.clienteService.getById(this.data.id).subscribe(t=>{t&&this.clienteForm.patchValue({id:t.id,nome:t.nome})}))}getNomeErrorMessage(){var t;return(null===(t=this.clienteForm.get("nome").errors)||void 0===t?void 0:t.required)?"O nome precisa ser preenchido":""}getEmailErrorMessage(){var t;return(null===(t=this.clienteForm.get("email").errors)||void 0===t?void 0:t.email)?"E-mail inv\xe1lido":""}buscarCEP(){const t=this.clienteForm.get("cep").value;this.buscaCepService.getEndereco(t).subscribe(t=>{t&&this.clienteForm.patchValue({cep:t.cep,logradouro:t.logradouro,complemento:t.complemento,bairro:t.bairro,cidade:t.localidade,estado:t.uf})})}save(){this.clienteForm.getRawValue()}dismiss(){this.dialogRef.close(null)}}return t.\u0275fac=function(e){return new(e||t)(l.Nb(n.d),l.Nb($.f),l.Nb(W),l.Nb(Z),l.Nb($.a))},t.\u0275cmp=l.Hb({type:t,selectors:[["app-cliente-dialog"]],decls:71,vars:5,consts:[["mat-dialog-title",""],[1,"example-container",3,"formGroup"],["appearance","standard"],["matInput","","formControlName","nome","id","nomeCliente","required",""],[4,"ngIf"],["matInput","","placeholder","cliente@exemplo.com","formControlName","email","id","email"],["matInput","","formControlName","cpf","id","cpf"],["matInput","","formControlName","telefone","id","telefone"],["matInput","","formControlName","instagram","id","instagram"],["matInput","","formControlName","cep","id","cep"],["mat-button","","matSuffix","","mat-icon-button","",3,"click"],["matInput","","formControlName","logradouro","id","logradouro"],["matInput","","formControlName","numero","id","numero"],["matInput","","formControlName","complemento","id","complemento"],["matInput","","formControlName","bairro","id","bairro"],["matInput","","formControlName","cidade","id","cidade"],["matInput","","formControlName","estado","id","estado"],["fxLayout","row","fxLayoutAlign","space-between center"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(t,e){1&t&&(l.Tb(0,"h4",0),l.yc(1),l.Sb(),l.Tb(2,"mat-dialog-content"),l.Tb(3,"form",1),l.Tb(4,"mat-form-field",2),l.Tb(5,"mat-label"),l.yc(6,"Nome"),l.Sb(),l.Ob(7,"input",3),l.xc(8,et,2,1,"mat-error",4),l.Sb(),l.Tb(9,"mat-form-field",2),l.Tb(10,"mat-label"),l.yc(11,"E-mail"),l.Sb(),l.Ob(12,"input",5),l.xc(13,rt,2,1,"mat-error",4),l.Sb(),l.Tb(14,"mat-form-field",2),l.Tb(15,"mat-label"),l.yc(16,"CPF"),l.Sb(),l.Ob(17,"input",6),l.Sb(),l.Tb(18,"mat-form-field",2),l.Tb(19,"mat-label"),l.yc(20,"Telefone"),l.Sb(),l.Ob(21,"input",7),l.Sb(),l.Tb(22,"mat-form-field",2),l.Tb(23,"mat-label"),l.yc(24,"Instagram"),l.Sb(),l.Ob(25,"input",8),l.Sb(),l.Ob(26,"br"),l.Tb(27,"span"),l.yc(28,"Endere\xe7o"),l.Sb(),l.Ob(29,"mat-divider"),l.Ob(30,"br"),l.Tb(31,"mat-form-field",2),l.Tb(32,"mat-label"),l.yc(33,"CEP"),l.Sb(),l.Ob(34,"input",9),l.Tb(35,"button",10),l.bc("click",function(){return e.buscarCEP()}),l.Tb(36,"mat-icon"),l.yc(37,"search"),l.Sb(),l.Sb(),l.Sb(),l.Tb(38,"mat-form-field",2),l.Tb(39,"mat-label"),l.yc(40,"Logradouro"),l.Sb(),l.Ob(41,"input",11),l.Sb(),l.Tb(42,"mat-form-field",2),l.Tb(43,"mat-label"),l.yc(44,"Numero"),l.Sb(),l.Ob(45,"input",12),l.Sb(),l.Tb(46,"mat-form-field",2),l.Tb(47,"mat-label"),l.yc(48,"Complemento"),l.Sb(),l.Ob(49,"input",13),l.Sb(),l.Tb(50,"mat-form-field",2),l.Tb(51,"mat-label"),l.yc(52,"Bairro"),l.Sb(),l.Ob(53,"input",14),l.Sb(),l.Tb(54,"mat-form-field",2),l.Tb(55,"mat-label"),l.yc(56,"Cidade"),l.Sb(),l.Ob(57,"input",15),l.Sb(),l.Tb(58,"mat-form-field",2),l.Tb(59,"mat-label"),l.yc(60,"Estado"),l.Sb(),l.Ob(61,"input",16),l.Sb(),l.Sb(),l.Sb(),l.Tb(62,"mat-dialog-actions",17),l.Tb(63,"button",18),l.bc("click",function(){return e.dismiss()}),l.Tb(64,"mat-icon"),l.yc(65,"cancel"),l.Sb(),l.yc(66," Cancelar "),l.Sb(),l.Tb(67,"button",19),l.bc("click",function(){return e.save()}),l.Tb(68,"mat-icon"),l.yc(69,"save"),l.Sb(),l.yc(70," Salvar "),l.Sb(),l.Sb()),2&t&&(l.Cb(1),l.zc(e.title),l.Cb(2),l.kc("formGroup",e.clienteForm),l.Cb(5),l.kc("ngIf",e.clienteForm.get("nome").invalid),l.Cb(5),l.kc("ngIf",e.clienteForm.get("email").invalid),l.Cb(54),l.kc("disabled",e.clienteForm.invalid))},directives:[$.g,$.d,n.q,n.l,n.f,F.c,F.f,L.b,n.c,n.k,n.e,n.o,a.l,tt.a,m.a,F.g,p.a,$.c,E.b,E.a,F.b],styles:[".example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.example-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}"]}),t})();var it=r("Xa2L"),nt=r("7EHt"),ot=r("wZkO");function st(t,e){1&t&&(l.Tb(0,"div",3),l.Ob(1,"mat-spinner"),l.Sb())}function ct(t,e){1&t&&l.Ob(0,"div",7)}function lt(t,e){if(1&t){const t=l.Ub();l.Tb(0,"div"),l.Tb(1,"mat-card-actions",10),l.Tb(2,"button",11),l.bc("click",function(){l.rc(t);const e=l.fc().$implicit;return l.fc(2).delete(e.id)}),l.Tb(3,"mat-icon"),l.yc(4,"delete"),l.Sb(),l.yc(5," Excluir "),l.Sb(),l.Tb(6,"button",12),l.bc("click",function(){l.rc(t);const e=l.fc().$implicit;return l.fc(2).edit(e.id)}),l.Tb(7,"mat-icon"),l.yc(8,"edit"),l.Sb(),l.yc(9," Editar "),l.Sb(),l.Sb(),l.Sb()}}function ut(t,e){if(1&t){const t=l.Ub();l.Tb(0,"mat-expansion-panel"),l.Tb(1,"mat-expansion-panel-header"),l.Tb(2,"mat-panel-title"),l.yc(3),l.Sb(),l.Sb(),l.Tb(4,"mat-card-content"),l.Tb(5,"mat-tab-group",5),l.bc("selectedTabChange",function(e){return l.rc(t),l.fc(2).onTabChanged(e)}),l.Tb(6,"mat-tab",6),l.Ob(7,"br"),l.Ob(8,"div",7),l.xc(9,ct,1,0,"div",8),l.Ob(10,"br"),l.Sb(),l.Ob(11,"mat-tab",9),l.Sb(),l.Sb(),l.xc(12,lt,10,0,"div",2),l.Sb()}if(2&t){const t=e.$implicit,r=l.fc(2);l.Cb(3),l.Ac(" ",t.nome," "),l.Cb(6),l.kc("ngIf",t.cep),l.Cb(3),l.kc("ngIf",0==r.selectedTabIndex)}}function bt(t,e){if(1&t&&(l.Tb(0,"div"),l.Tb(1,"mat-accordion"),l.xc(2,ut,13,3,"mat-expansion-panel",4),l.Sb(),l.Sb()),2&t){const t=l.fc();l.Cb(2),l.kc("ngForOf",t.empresas)}}const dt=[{path:"",component:y,canActivate:[U],children:[{path:"",redirectTo:"empresas"},{path:"empresas",component:(()=>{class t{constructor(t,e,r,a,i){this.clienteService=t,this.dialog=e,this.snackBar=r,this.toolbarService=a,this.router=i,this.empresas=[],this.empresasOrigem=[],this.selectedTabIndex=0,this.isLoadingData=!1,this.debounce=new Y.a}ngOnInit(){this.debounce.pipe(Object(Q.a)(300)).subscribe(t=>this.filtrar(t)),this.loadEmpresas(),this.subscription=this.toolbarService.getMenuItemSelectedEmitter().subscribe(t=>{this.selectedMenuItem(t)})}ngOnDestroy(){this.subscription.unsubscribe()}selectedMenuItem(t){2===t&&this.openAddClienteDialog()}filtrar(t){this.empresas=this.empresasOrigem.filter(e=>e.nome.toLowerCase().includes(t.trim().toLowerCase()))}loadEmpresas(){this.isLoadingData=!0,this.clienteService.loadAll().subscribe(t=>{this.empresasOrigem=t,this.empresas=this.empresasOrigem.slice(0),this.isLoadingData=!1},t=>{404==t.status&&(this.empresasOrigem=[],this.empresas=[]),this.isLoadingData=!1})}openAddClienteDialog(){this.dialog.open(at,{width:"90vw"}).afterClosed().subscribe(t=>{t&&(this.openSnackBar("Empresa adicionado",null),this.loadEmpresas())})}onTabChanged(t){this.selectedTabIndex=t.index}edit(t){this.dialog.open(at,{width:"450px",data:{id:t}}).afterClosed().subscribe(t=>{t&&(this.openSnackBar("Empresa editado"),this.loadEmpresas())})}openSnackBar(t,e){return this.snackBar.open(t,e,{duration:5e3})}}return t.\u0275fac=function(e){return new(e||t)(l.Nb(W),l.Nb($.b),l.Nb(z.a),l.Nb(u),l.Nb(i.c))},t.\u0275cmp=l.Hb({type:t,selectors:[["app-empresas"]],decls:7,vars:2,consts:[["matInput","","autocomplete","off",3,"keyup"],["fxLayout","row","fxLayoutAlign","center",4,"ngIf"],[4,"ngIf"],["fxLayout","row","fxLayoutAlign","center"],[4,"ngFor","ngForOf"],[3,"selectedTabChange"],["label","Dados"],["fxLayout","column","fxLayoutAlign","space-around start"],["fxLayout","column","fxLayoutAlign","space-around start",4,"ngIf"],["label","Pedidos"],["fxLayout","row","fxLayoutAlign","space-between center"],["mat-stroked-button","","color","warn",3,"click"],["mat-stroked-button","",3,"click"]],template:function(t,e){1&t&&(l.Tb(0,"div"),l.Tb(1,"mat-form-field"),l.Tb(2,"mat-label"),l.yc(3,"Filtro"),l.Sb(),l.Tb(4,"input",0),l.bc("keyup",function(t){return e.debounce.next(t.target.value)}),l.Sb(),l.Sb(),l.xc(5,st,2,0,"div",1),l.xc(6,bt,3,1,"div",2),l.Sb()),2&t&&(l.Cb(5),l.kc("ngIf",e.isLoadingData),l.Cb(1),l.kc("ngIf",!e.isLoadingData&&e.empresas.length))},directives:[F.c,F.f,L.b,a.l,E.b,E.a,it.b,nt.a,a.k,nt.c,nt.d,nt.e,P.c,ot.b,ot.a,P.b,m.a,p.a],styles:[""]}),t})(),data:{title:"Empresas"}},{path:"perfil-usuario",component:X,data:{title:"Perfil"}}]},{path:"login",component:B},{path:"**",redirectTo:"empresas"}];let mt=(()=>{class t{}return t.\u0275mod=l.Lb({type:t}),t.\u0275inj=l.Kb({factory:function(e){return new(e||t)},providers:[{provide:a.e},{provide:s.a,useClass:K,multi:!0}],imports:[[a.c,s.c,c.a,o.a,n.g,n.n,i.d.forChild(dt)]]}),t})()}}]);