/******************************************************
QUERY STRING SCANNER PAR L'EDITEUR JAVASCRIPT
http://www.editeurjavascript.com
*******************************************************
MERCI DE LAISSER CET AVERTISSEMENT EN CAS D'UTILISATION
*******************************************************

1 - Vous devez télécharger le fichier "query_string_scan.js" 
Pour le telecharger, cliquez ici. Placez-le dans le même repertoire que vos pages. 
C'est ce fichier qui va lire les variables que vous passerez dans les pages. 


2 - Pour passez des variables dans une autre page : 
Par lien :
Vous devrez passer le nom de la variable, puis sa valeur. Voici la synthaxe :
<A HREF="mapage.html?variable=valeur&variable2=valeur2">Cliquez ici</A>
Les noms de variables ne doivent contenir d'espace. 
Remplacez les espaces dans la valeur par un "+". 
Séparez le nom de la variable du nom de la valeur par un "=". 
Séparez chaque couple variable-valeur par des "&".

Par exemple : 
<A HREF="mapage.html?nom=DURAND&prenom=Vincent&message=Salut+les+amis">Cliquez ici</A>

 
Par formulaire :
Assurez-vous que l'attribut "method" de votre formulaire est bien "GET" (<FORM ACTION="page.html" METHOD=get>) 


3 - Pour lire les variables passées par une autre page : 
Inserez entre le <HEAD> et </HEAD> le tag suivant :

<SCRIPT LANGUAGE="JavaScript" SRC="query_string_scan.js"></SCRIPT>.

Ensuite, vous pouvez recuperer chaque valeur avec ce bout de code :
<SCRIPT LANGUAGE="JavaScript">
nomdelavariable = get("nomdelavariable");
</SCRIPT>

Pour afficher la variable sur votre page :
<SCRIPT LANGUAGE="JavaScript">
document.write(get("nomdelavariable"));
</SCRIPT>
******************************************************/

ejs_list = new Array;
ejs_list_valeur = new Array;
ejs_place = document.location.href.indexOf("?",0);
if(ejs_place >= 0)
	{
	ejs_query_string = document.location.href.substring(ejs_place+1, document.location.href.length);
	ejs_place_and = ejs_query_string.indexOf("&",0);
	if(ejs_place_and >= 0)
		ejs_list = ejs_query_string.split("&");
	else
		ejs_list[0] = ejs_query_string;
	for (ejs_i=0;ejs_i<ejs_list.length;ejs_i++)
		{
		ejs_temp = ejs_list[ejs_i].split("=");
		ejs_variable = ejs_temp[0];
		ejs_valeur = ejs_temp[1];
		ejs_plus_place = ejs_valeur.indexOf("+",0);
		while (ejs_plus_place >-1)
			{
			ejs_temp2 = ejs_valeur.substring(0,ejs_plus_place) + ' ' + ejs_valeur.substring(ejs_plus_place+1,ejs_valeur.length);
			ejs_valeur = ejs_temp2;
			ejs_plus_place = ejs_valeur.indexOf("+",ejs_plus_place+2);
			}
		ejs_list_valeur[ejs_variable] = ejs_valeur;
		}	
	}

function get(ejs_get)
	{
	if(ejs_list_valeur[ejs_get])
		return(unescape(ejs_list_valeur[ejs_get]));
	else
		return("");
	}
