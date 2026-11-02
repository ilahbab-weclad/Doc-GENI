<!--
posYmenu = 80;
var ini = 33;  // taille de l'image ...
bgcolor='#FFFFFF';
bgcolor2='#7B7B7B';
posXmenu = 0;
/*
*/
document.write('<style type="text/css">');
document.write('.poppervert { POSITION: absolute; VISIBILITY: hidden; z-index:3; }')
document.write('.topgauche{ position:absolute; top:'+posYmenu+'px; left:'+posXmenu+'px; z-index:10; }')
document.write('A:hover.menu {color:#FFFFFF; text-decoration:none;}')
document.write('A.menu {color:#000000; text-decoration:none;}')
document.write('</style>')

document.write('<DIV class=poppervert id=topdeckvert></DIV>');
/*
LIENS
*/
zlien = new Array;
zlien[0] = new Array;
zlien[1] = new Array;
zlien[2] = new Array;
zlien[3] = new Array;

zlien[0][0] = '<A HREF="/handball/histoclub.php" CLASS=menu>Présentation du club</A>';
zlien[0][1] = '<A HREF="/handball/sponsors.php" CLASS=menu>Sponsors</A>';
zlien[0][2] = '<A HREF="/handball/presse.php" CLASS=menu>Revue de presse</A>';
zlien[0][3] = '<A HREF="../handball/ppm/index.php" CLASS=menu>Galerie photos</A>';
zlien[1][0] = '<A HREF="/handball/resultats.php" CLASS=menu>Résultats</A>';
zlien[1][1] = '<A HREF="/handball/horaires.php" CLASS=menu>Horaires</A>';
zlien[2][0] = '<A HREF="/handball/livreajout.htm" CLASS=menu>Livre d or</A>';

var nava = (document.layers);
var dom = (document.getElementById);
var iex = (document.all);
if (nava) { sknvert = document.topdeckvert }
else if (dom) { sknvert = document.getElementById("topdeckvert").style }
else if (iex) { sknvert = topdeckvert.style }
sknvert.left = posXmenu+99;

function pop(msg,pos)
{
sknvert.visibility = "hidden";
sknvert.top = posYmenu+pos;
a=true
var content ="<TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0 BGCOLOR=#000000 WIDTH=150><TR><TD><TABLE WIDTH=100% BORDER=0  CELLPADDING=0 CELLSPACING=1>";
pass = 0
while (pass < msg.length)
	{
	content += "<TR><TD BGCOLOR="+bgcolor+" onMouseOver=\"this.style.background='"+bgcolor2+"'\"  onMouseOut=\"this.style.background='"+bgcolor+"'\" HEIGHT=20><FONT SIZE=1  FACE=\"Verdana\">&nbsp;&nbsp;"+msg[pass]+"</FONT></TD></TR>";
	pass++;
	}
content += "</TABLE></TD></TR></TABLE>";
if (nava)
  {
    sknvert.document.write(content);
	  sknvert.document.close();
	  sknvert.visibility = "visible";
  }
    else if (dom)
  {
	  document.getElementById("topdeckvert").innerHTML = content;
	  sknvert.visibility = "visible";
  }
    else if (iex)
  {
	  document.all("topdeckvert").innerHTML = content;
	  sknvert.visibility = "visible";
  }
}

function kill()
{
	sknvert.visibility = "hidden";
}

document.onclick = kill;
document.write('<DIV ID=topgauche><TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0 BGCOLOR=#000000 WIDTH=100><TR><TD><TABLE  CELLPADING=0 CELLSPACING=1 BORDER=0 WIDTH=100% HEIGHT=25>')
document.write('<TR><TD><img src="/handball/image/menu/cage.gif" border=\"0\"></TD></TR>')
document.write('<TR><TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+'  onMouseOver="this.style.background=\''+bgcolor2+'\';pop(zlien[0],(ini*0))" onMouseOut="this.style.background=\''+bgcolor+'\'"  HEIGHT=25><A onClick="return(false)" onMouseOver="pop(zlien[0],(ini*0))" href=# CLASS=menu><FONT SIZE=1 FACE="Verdana"><img  src="/handball/image/menu/Le_Club.gif" border="0"></FONT></a></TD></TR>')
document.write('<TR><TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+'  onMouseOver="this.style.background=\''+bgcolor2+'\';pop(zlien[1],(ini*1))" onMouseOut="this.style.background=\''+bgcolor+'\'"  HEIGHT=25><A onClick="return(false)" onMouseOver="pop(zlien[1],(ini*1))" href=# CLASS=menu><FONT SIZE=1 FACE="Verdana"><img  src="/handball/image/menu/Les_News.gif" border="0"></FONT></a></TD></TR>')
document.write('<TR><TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+'  onMouseOver="this.style.background=\''+bgcolor2+'\';pop(zlien[2],(ini*2))" onMouseOut="this.style.background=\''+bgcolor+'\'"  HEIGHT=25><A onClick="return(false)" onMouseOver="pop(zlien[2],(ini*2))" href=# CLASS=menu><FONT SIZE=1 FACE="Verdana"><img  src="/handball/image/menu/Contact.gif" border="0"></FONT></a></TD></TR>')
document.write('<TR><TD><img src="/handball/image/menu/cage.gif" border=\"0\"></TD></TR>')
document.write('</TABLE></TD></TR></TABLE></DIV>')    
-->
