// function.js
// dipanggil dari index.html dan content.html
// project: catalogue

title = new Array();
arfileimage = new Array();
title[  1]      ='Peranan Pakaian Dalam Bagi Wanita';
arfileimage[  1]='Slide1.JPG';
title[  2]      ='';
arfileimage[  2]='Slide2.JPG';
title[  3]      ='';
arfileimage[  3]='Slide3.JPG';
title[  4]      ='Kenapa Perawatan Tubuh dan Payudara Sangat Penting?';
arfileimage[  4]='Slide4.JPG';
title[  5]      ='6 Fase Perubahan Bentuk Payudara';
arfileimage[  5]='Slide5.JPG';
title[  6]      ='Mengapa Sangat Berpengaruh Terhadap Kecantikan?';
arfileimage[  6]='Slide6.JPG';
title[  7]      ='';
arfileimage[  7]='Slide7.JPG';
title[  8]      ='Pertimbangan dalam Memilih Pakaian Dalam';
arfileimage[  8]='Slide8.JPG';
title[  9]      ='85% Wanita...';
arfileimage[  9]='Slide9.JPG';
title[ 10]      ='Kesalahan Pada Saat Membeli Bra';
arfileimage[ 10]='Slide10.JPG';
title[ 11]      ='Bra Accident';
arfileimage[ 11]='Slide11.JPG';
title[ 12]      ='Solusi Anda';
arfileimage[ 12]='Slide12.JPG';
title[ 13]      ='';
arfileimage[ 13]='Slide13.JPG';
title[ 14]      ='Validitas Perusahaan';
arfileimage[ 14]='Slide14.JPG';
title[ 15]      ='';
arfileimage[ 15]='Slide15.JPG';	
title[ 16]      ='Bpk. Otto Guswito';
arfileimage[ 16]='Slide16.JPG';	
title[ 17]      ='Visi - Misi';
arfileimage[ 17]='Slide17.JPG';	
title[ 18]      ='Pertimbangan Membeli Produk dari Luar Negeri';
arfileimage[ 18]='Slide18.JPG';	
title[ 19]      ='Kerjasama dengan...';
arfileimage[ 19]='Slide19.JPG';	
title[ 20]      ='3 Jenis Rajutan Spandex';
arfileimage[ 20]='Slide20.JPG';	
title[ 21]      ='International Quality Standard Guaranteed';
arfileimage[ 21]='Slide21.JPG';	
title[ 22]      ='Keunggulan Produk Fiori';
arfileimage[ 22]='Slide22.JPG';	
title[ 23]      ='';
arfileimage[ 23]='Slide23.JPG';	
title[ 24]      ='Keunggulan Bahan Hexagonal';
arfileimage[ 24]='Slide24.JPG';	
title[ 25]      ='Penggunaan SBS dan Manfaatnya';
arfileimage[ 25]='Slide25.JPG';	
title[ 26]      ='Scoliosis';
arfileimage[ 26]='Slide26.JPG';	
title[ 27]      ='Cara Kerja Long Girdle';
arfileimage[ 27]='Slide27.JPG';	
title[ 28]      ='Berbira, Barbara dan Semi Corset';
arfileimage[ 28]='Slide28.JPG';	
title[ 29]      ='7 Wonders of The Magic Bra';
arfileimage[ 29]='Slide29.JPG';	
title[ 30]      ='';
arfileimage[ 30]='Slide30.JPG';	
title[ 31]      ='';
arfileimage[ 31]='Slide31.JPG';	
title[ 32]      ='';
arfileimage[ 32]='Slide32.JPG';	
title[ 33]      ='Bernadet Bra';
arfileimage[ 33]='Slide33.JPG';	
title[ 34]      ='Germanium';
arfileimage[ 34]='Slide34.JPG';	
title[ 35]      ='';
arfileimage[ 35]='Slide35.JPG';	
title[ 36]      ='Agnese Bra';
arfileimage[ 36]='Slide36.JPG';	
title[ 37]      ='Man Body Care';
arfileimage[ 37]='Slide37.JPG';	
title[ 38]      ='';
arfileimage[ 38]='Slide38.JPG';	
title[ 39]      ='Jangan Lupa...';
arfileimage[ 39]='Slide39.JPG';	
title[ 40]      ='';
arfileimage[ 40]='Slide40.JPG';	
title[ 41]      ='';
arfileimage[ 41]='Slide41.JPG';	
	
		
var fileimage = arfileimage[1];
var maxpage = 41;









function displaytopscreen(indexpage,sliding) {
var nextpage = Number(indexpage)+1;	
if (nextpage > maxpage) {nextpage = maxpage;}

var prevpage = Number(indexpage)-1;	
if (prevpage == 0) {prevpage = 1;}

//if (indexpage == maxpage) {sliding=0;}

var slidingstatus = '';
var slidingbutton = '';
if (sliding == 1) 
	{
	slidingstatus= "&sliding=1";
	slidingbutton= "<input type='button' value='Stop'  onclick=\"location.href='content.html?page="+indexpage+"&sliding=0';\">";
	}
else
	{
	slidingstatus= "&sliding=0";
	slidingbutton= "<input type='button' value='Play'  onclick=\"location.href='content.html?page="+nextpage+"&sliding=1';\">";
	}

document.getElementById("topscreen").innerHTML = 
//		"<div class='logo'>"+
//		"</div>"+
//		"<div class='titlebar'>"+
//		"<div id='title' width='30%' style='float: left'>"+
//		"judul</div>"+
//		"<div id='page' width='30%' align='right'>"+
//		"halaman</div>"+
//		"<div style='clear: both' ></div>"+
//		"</div>"+
		"<div class='navbar'>"+
		"<form method='post' name='form' id='form'>"+
		"<div width='30%' style='float: left'>"+
		"<input type='button' value='1x' onclick='return normal(fileimage);'>"+
		"<input type='button' value='2x' onclick='return zoom2x(fileimage);'>"+
		"<input type='button' value='3x' onclick='return zoom3x(fileimage);'>"+
		"<input type='button' value='4x' onclick='return zoom4x(fileimage);'>"+
		"<input type='button' value='5x' onclick='return zoom5x(fileimage);'>"+
		"</div>"+
		"<div width='30%' align='right'>"+
		"<input type='button' value='Menu'  onclick=\"location.href='index.html';\">"+
		slidingbutton+
		"<input type='button' value='<'  onclick=\"location.href='content.html?page="+prevpage+slidingstatus+"';\">"+
		"<input type='button' value='>'  onclick=\"location.href='content.html?page="+nextpage+slidingstatus+"';\">"+	
		//"<input type='image' src='images/next.png' width='30' height='30' onclick=\"location.href='content.html?page="+nextpage+slidingstatus+"';\">"+	
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id='page' width='30%'>"+
		"halaman</span>"+
		"</div>"+
		"<div style='clear: both' ></div>"+
		"</div>";
		
		
		document.getElementById("page").innerHTML = indexpage;	
		//document.getElementById("title").innerHTML = "<b>"+title[indexpage]+"</b>";
}












function displaybottomscreen(indexpage,sliding) {
var nextpage = Number(indexpage)+1;	
if (nextpage > maxpage) {nextpage = maxpage;}

var prevpage = Number(indexpage)-1;	
if (prevpage == 0) {prevpage = 1;}

//if (indexpage == maxpage) {sliding=0;}

var slidingstatus = '';
var slidingbutton = '';
if (sliding == 1) 
	{
	slidingstatus= "&sliding=1";
	slidingbutton= "<input type='button' value='Stop'  onclick=\"location.href='content.html?page="+indexpage+"&sliding=0';\">";
	}
else
	{
	slidingstatus= "&sliding=0";
	slidingbutton= "<input type='button' value='Play'  onclick=\"location.href='content.html?page="+nextpage+"&sliding=1';\">";
	}

document.getElementById("bottomscreen").innerHTML = 
		"<div class='navbar' align='right'>"+
		"<input type='button' value='Menu'  onclick=\"location.href='index.html';\">"+
		slidingbutton+
		"<input type='button' value='<'  onclick=\"location.href='content.html?page="+prevpage+slidingstatus+"';\">"+
		"<input type='button' value='>'  onclick=\"location.href='content.html?page="+nextpage+slidingstatus+"';\">"+		
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id='pagebottom' width='30%'>"+
		"halaman</span>"+
		"</form>"+
		"</div>";

		document.getElementById("pagebottom").innerHTML = indexpage;	

}



function normal(fileimage){
	//if(window.screen.availHeight > window.screen.availWidth)
	//if(screen.height > screen.width)
	if(document.body.clientHeight > document.body.clientWidth)
		{
		document.getElementById("gambar").innerHTML = "<img class='image' src='images/"+fileimage+"' />"
		}
	else
		{
		document.getElementById("gambar").innerHTML = "<img class='imagevertical' src='images/"+fileimage+"' />"
		}
}
function zoom2x(fileimage){
	document.getElementById("gambar").innerHTML = "<img class='imagezoom2x' src='images/"+fileimage+"' />";
}
function zoom3x(fileimage){
	document.getElementById("gambar").innerHTML = "<img class='imagezoom3x' src='images/"+fileimage+"' />";
}
function zoom4x(fileimage){
	document.getElementById("gambar").innerHTML = "<img class='imagezoom4x' src='images/"+fileimage+"' />";
}
function zoom5x(fileimage){
	document.getElementById("gambar").innerHTML = "<img class='imagezoom5x' src='images/"+fileimage+"' />";
}




function right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}

function slideshow(indexpage,sliding){
	if (sliding==1)
		{
		var nextpage = Number(indexpage)+1;	
		if (nextpage > maxpage) {nextpage = 1;}	
		setTimeout ( "window.open('content.html?page="+nextpage+"&sliding=1','_self')", 5000 );
		}
}


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


