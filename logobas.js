// PARAMETRAGE DU SCRIPT
var tjs_delai=10;
var tjs_max=10;
var tjs_mode=1; // 0 - calque toujours en haut de page / 1 - calque en bas

// LE RESTE NE CHANGE PAS
var tjs_hauteur=0;
function PrintCalque(left,top,width,height,contenu) {
	tjs_hauteur=height;
	if ((document.all)||(document.getElementById)) {
		var Z="<DIV id='tomber' style='position:absolute;left:"+left+";top:"+top+";width:"+width+";height:"+height+"'>"+contenu+"</DIV>";
	} else {
		var Z="<LAYER name='tomber' left="+left+" top="+top+" width="+width+" height="+height+">"+contenu+"</LAYER>";
	}
	document.write(Z);
	setTimeout("Start()",tjs_delai);
}
function Start() {
	MoveLayer("tomber",GetTop("tomber"));
	setTimeout("Start()",tjs_delai);
}
function Debug() {
	var obj=document.body
	var Z="";
	for (var i in obj) {
		Z+=i+"="+obj[i]+"\n";
	}
	alert(Z);
}
function MoveLayer(nom,top) {
	if (document.getElementById) { //IE5 et NS6
		document.getElementById(nom).style.top=top;
	}
	if ((document.all)&&(!document.getElementById)) { //IE4 seul
		document.all[nom].style.top=top;
	}
	if (document.layers) { //NS4.X seul
		document.layers[nom].top=top;
	}
}
function GetTop(nom) {
	// Partie 1 : Récupération de la position du calque et de la page
	if (document.getElementById) { //IE5 
		var pos=parseInt(document.getElementById(nom).style.top);
		var wintop=parseInt(document.body.scrollTop);
		var avail=document.body.clientHeight;
	}
	if ((document.getElementById)&&(!document.all)) { //NS6
		var pos=parseInt(document.getElementById(nom).style.top);
		var wintop=parseInt(window.pageYOffset);
		var avail=window.innerHeight;
	}
	if ((document.all)&&(!document.getElementById)) { //IE4 seul
		var pos=parseInt(document.all[nom].style.top);
		var wintop=parseInt(document.body.scrollTop);
		var avail=document.body.clientHeight;
	}
	if (document.layers) { //NS4.X seul
		var pos=parseInt(document.layers[nom].top);
		var wintop=parseInt(window.pageYOffset);
		var avail=window.innerHeight;
	}

	// Partie 2 : Traitement de la position
	if (tjs_mode==0) { // toujours en haut
		var delta=Math.ceil((pos-wintop)/3);
		if (delta>tjs_max) {delta=tjs_max;}
		if (delta<-1*tjs_max) {delta=-1*tjs_max;}
		var top=pos-delta;
	}
	if (tjs_mode==1) {// toujours en bas
		var delta=Math.ceil((pos-(wintop+avail-tjs_hauteur)));
		if (delta>tjs_max) {delta=tjs_max;}
		if (delta<-1*tjs_max) {delta=-1*tjs_max;}
		var top=pos-delta;
	}
	return top;
}

	// PrintCalque(X,Y,largeur,hauteur,"HTML");
	//PrintCalque(30,30,88,31,"<IMG src='logodhtml.gif' width=88 height=31 alt='Tout JavaScript.com'>");

var stext = "<a href='";
stext += location.href;
stext += "' onMouseOver=\"window.status=\'Aller en haut de la page \'+document.title;return true;\" onMouseOut=\"window.status=\'\';return(true);\";";
stext += ">";
//stext += "<IMG ";
//stext += "src='";
//stext += "http:/iris.rinaldi-structal.com/old/Doc_GENI/Images/images03.jpg' width=69 height=10 border=0 alt='Aller en haut de la page '";
//stext += ">";
stext += "<font size='1'>Haut de page</font>";
stext += "</a>";

	PrintCalque(0,0,69,10,stext);


