function generateQR(disp) {
	var form = document.getElementById('sel');
	 // loop through the radio buttons to find which one is checked, then set var valueSelected to the value of the selected radio button
	 for(var i = 0; i < form.o.length; i++)  // buztype is the name of the radio buttons which is an array; ie buztype[0].value is 1, buztype[1].value is 2, buztype[2].value is 3 based on what you have above.
	 {
 
		  if(form.o[i].checked)
		  {
                       var type= form.o[i].value;
		  }
 
	  }
	var ssid = document.getElementById("id1").value;
	var key = document.getElementById("id2").value;	
	var url = "WIFI:" +
	"T:" + type + ";" +
	"S:" + ssid + ";" +
	"P:" + key + ";" ;
	disp.empty();
	var dow= document.getElementById("dow");
	dow.disabled=false;
	disp.qrcode(url);
}
function resetQR()
	{
		
    var img = document.createElement("IMG");
    img.src = "images/qr.jpg";
	img.width="300";
	img.setAttribute("style","margin-left:10%");
	document.getElementById("chwck").removeChild(document.getElementById("disp"));
	img.id="disp";	
	document.getElementById("chwck").appendChild(img);
	var dow= document.getElementById("dow");
	dow.disabled=true;
	    
}

function dis()
{
	var ssid = document.getElementById("id1");
	var pass = document.getElementById("id2");
	var open = document.getElementById("ope");
	var wep = document.getElementById("e2");
	var wpa2 = document.getElementById("e3");
	var gen	= document.getElementById("gen");
	
	if(open.checked)
	{
		
		pass.value="";
		pass.disabled=true;
	}
	else
		pass.disabled=false;
	
	if(ssid.value=="")
	{
		gen.disabled=true;
	}
	else
	{
		if(open.checked || e2.checked || e3.checked)
			{
				if(!open.checked && pass.value=="")
				{
					gen.disabled=true;
				}
				else
				{
					gen.disabled=false;
				}
			}
			else
			{
				gen.disabled=true;
			}
	}
	
}