
		function cal()
		{
			var a=Number(document.getElementById("eng-th").value) + Number(document.getElementById("eng-pr").value) ;
			var b=Number(document.getElementById("nep-th").value) + Number(document.getElementById("nep-pr").value) ;
			var c=Number(document.getElementById("mat-th").value) + Number(document.getElementById("mat-pr").value) ;
			var d=Number(document.getElementById("sci-th").value) + Number(document.getElementById("sci-pr").value) ;
			var e=Number(document.getElementById("soc-th").value) + Number(document.getElementById("soc-pr").value) ;
			var f=Number(document.getElementById("hpe-th").value) + Number(document.getElementById("hpe-pr").value) ;
			var g=Number(document.getElementById("opt-th").value) + Number(document.getElementById("opt-pr").value) ;
			var h=Number(document.getElementById("cs-th").value) + Number(document.getElementById("cs-pr").value) ;
			
			document.getElementById('total-percentage').innerHTML= ((a+b+c+d+e+f+g+h)*100)/800;
			var per =((a+b+c+d+e+f+g+h)*100)/800;
			if (a<=100)
			{
				if(a>=90)
				{
					document.getElementById('final-eng').innerHTML= "A+";
					document.getElementById('point-eng').innerHTML='4';
				}
				else if(a< 90 && a >= 80)
				{
					document.getElementById('final-eng').innerHTML="A";
					document.getElementById('point-eng').innerHTML='3.75';
				}
				else if(a < 80 && a >=70)
				{
					document.getElementById('final-eng').innerHTML="B+";
					document.getElementById('point-eng').innerHTML='3.50';
				}
				else if (a < 70 && a >=60)
				{
					document.getElementById('final-eng').innerHTML="B";
					document.getElementById('point-eng').innerHTML='3';
				}
				else if(a < 60 && a >=50)
				{
					document.getElementById('final-eng').innerHTML="C";
					document.getElementById('point-eng').innerHTML='2.50';
				}
				else if(a < 50 && a >=40)
				{
					document.getElementById('final-eng').innerHTML="D";
					document.getElementById('point-eng').innerHTML='1.75';
				}
				else{
					document.getElementById('final-eng').innerHTML="F";
					document.getElementById('point-eng').innerHTML='0.0';
				}
			}
			else{
				documnet.getElementById('final-eng').innerHTML="Sorry";
			}
		
		
			if (b<=100)
			{
				if(b>=90)
				{
					document.getElementById('final-nep').innerHTML= "A+";
					document.getElementById('point-nep').innerHTML='4';
				}
				else if(b< 90 && b >= 80)
				{
					document.getElementById('final-nep').innerHTML="A";
					document.getElementById('point-nep').innerHTML='3.75';
				}
				else if(b < 80 && b >=70)
				{
					document.getElementById('final-nep').innerHTML="B+";
					document.getElementById('point-nep').innerHTML='3.50';
				}
				else if (b < 70 && b >=60)
				{
					document.getElementById('final-nep').innerHTML="B";
					document.getElementById('point-nep').innerHTML='3';
				}
				else if(b < 60 && b >=50)
				{
					document.getElementById('final-nep').innerHTML="C";
					document.getElementById('point-nep').innerHTML='2.50';
				}
				else if(b < 50 && b >=40)
				{
					document.getElementById('final-nep').innerHTML="D";
					document.getElementById('point-nep').innerHTML='1.75';
				}
				else{
					document.getElementById('final-nep').innerHTML="F";
					document.getElementById('point-nep').innerHTML='0.0';
				}
			}
			else{
				documnet.getElementById('final-nep').innerHTML="Sorry";
			}
		
		
			
			if (c<=100)
			{
				if(c>=90)
				{
					document.getElementById('final-mat').innerHTML= "A+";
					document.getElementById('point-mat').innerHTML='4';
				}
				else if(c< 90 && c >= 80)
				{
					document.getElementById('final-mat').innerHTML="A";
					document.getElementById('point-mat').innerHTML='3.75';
				}
				else if(c < 80 && c >=70)
				{
					document.getElementById('final-mat').innerHTML="B+";
					document.getElementById('point-mat').innerHTML='3.50';
				}
				else if (c < 70 && c >=60)
				{
					document.getElementById('final-mat').innerHTML="B";
					document.getElementById('point-mat').innerHTML='3';
				}
				else if(c < 60 && c >=50)
				{
					document.getElementById('final-mat').innerHTML="C";
					document.getElementById('point-mat').innerHTML='2.50';
				}
				else if(c < 50 && c >=40)
				{
					document.getElementById('final-mat').innerHTML="D";
					document.getElementById('point-mat').innerHTML='1.75';
				}
				else{
					document.getElementById('final-mat').innerHTML="F";
					document.getElementById('point-mat').innerHTML='0.0';
				}
			}
			else{
				documnet.getElementById('final-mat').innerHTML="Sorry";
			}
		
		
			if (d<=100)
			{
				if(d>=90)
				{
					document.getElementById('final-sci').innerHTML= "A+";
					document.getElementById('point-sci').innerHTML='4';
				}
				else if(d< 90 && d >= 80)
				{
					document.getElementById('final-sci').innerHTML="A";
					document.getElementById('point-sci').innerHTML='3.75';
				}
				else if(d < 80 && d >=70)
				{
					document.getElementById('final-sci').innerHTML="B+";
					document.getElementById('point-sci').innerHTML='3.50';
				}
				else if (d < 70 && d >=60)
				{
					document.getElementById('final-sci').innerHTML="B";
					document.getElementById('point-sci').innerHTML='3';
				}
				else if(d < 60 && d >=50)
				{
					document.getElementById('final-sci').innerHTML="C";
					document.getElementById('point-sci').innerHTML='2.50';
				}
				else if(d < 50 && d >=40)
				{
					document.getElementById('final-sci').innerHTML="D";
					document.getElementById('point-sci').innerHTML='1.75';
				}
				else{
					document.getElementById('final-sci').innerHTML="F";
					document.getElementById('point-sci').innerHTML='0.0';
				}
			}
			else{
				documnet.getElementById('final-sci').innerHTML="Sorry";
			}
		
		
			if (e<=100)
			{
				if(e>=90)
				{
					document.getElementById('final-soc').innerHTML= "A+";
					document.getElementById('point-soc').innerHTML='4';
				}
				else if(e< 90 && e >= 80)
				{
					document.getElementById('final-soc').innerHTML="A";
					document.getElementById('point-soc').innerHTML='3.75';
				}
				else if(e < 80 && e >=70)
				{
					document.getElementById('final-soc').innerHTML="B+";
					document.getElementById('point-soc').innerHTML='3.50';
				}
				else if (e < 70 && e >=60)
				{
					document.getElementById('final-soc').innerHTML="B";
					document.getElementById('point-soc').innerHTML='3';
				}
				else if(e < 60 && e >=50)
				{
					document.getElementById('final-soc').innerHTML="C";
					document.getElementById('point-soc').innerHTML='2.50';
				}
				else if(e < 50 && e >=40)
				{
					document.getElementById('final-soc').innerHTML="D";
					document.getElementById('point-soc').innerHTML='1.75';
				}
				else{
					document.getElementById('final-soc').innerHTML="F";
					document.getElementById('point-soc').innerHTML='0.0';
				}
			}
			else{
				documnet.getElementById('final-soc').innerHTML="Sorry";
			}
			
		
			if (f<=100)
			{
				if(f>=90)
				{
					document.getElementById('final-hpe').innerHTML= "A+";
					document.getElementById('point-hpe').innerHTML='4';
				}
				else if(f< 90 && f >= 80)
				{
					document.getElementById('final-hpe').innerHTML="A";
					document.getElementById('point-hpe').innerHTML='3.75';
				}
				else if(f < 80 && f >=70)
				{
					document.getElementById('final-hpe').innerHTML="B+";
					document.getElementById('point-hpe').innerHTML='3.50';
				}
				else if (f < 70 && f >=60)
				{
					document.getElementById('final-hpe').innerHTML="B";
					document.getElementById('point-hpe').innerHTML='3';
				}
				else if(f < 60 && f >=50)
				{
					document.getElementById('final-hpe').innerHTML="C";
					document.getElementById('point-hpe').innerHTML='2.50';
				}
				else if(f < 50 && f >=40)
				{
					document.getElementById('final-hpe').innerHTML="D";
					document.getElementById('point-hpe').innerHTML='1.75';
				}
				else{
					document.getElementById('final-hpe').innerHTML="F";
					document.getElementById('point-hpe').innerHTML='0.0';
				}
			}
			else{
				documnet.getElementById('final-hpe').innerHTML="Sorry";
			}
		
			if(g<100){
				if( g >=90){
					document.getElementById('final-opt').innerHTML="A+";
					document.getElementById('point-opt').innerHTML="4";
				}
				else if(g < 90 && g >=80){
					document.getElementById('final-opt').innerHTML="A";
					document.getElementById('point-opt').innerHTML="3.75";
				}
				else if( g < 80 && g >=70){
					document.getElementById('final-opt').innerHTML="B+";
					document.getElementById('point-opt').innerHTML="3.50";
				}
				else if( g < 70 && g >= 60){
					document.getElementById('final-opt').innerHTML="B";
					document.getElementById('point-opt').innerHTML="3";
				}
				else if(g < 60 && g >=50){
					document.getElementById('final-opt').innerHTML="C";
					document.getElementById('point-opt').innerHTML="2.50";
				}
				else if(g < 50 && g >=40){
					document.getElementById('final-opt').innerHTML="D";
					document.getElementById('point-opt').innerHTML="1.75";
				}
				else{
					document.getElementById('final-opt').innerHTML="F";
					document.getElementById('point-opt').innerHTML="0.0";
				}
			}
			else{
				document.getElementById('final-opt').innerHTML="Sorry"
			}

			if(h<100){
				if( h >=90){
					document.getElementById('final-cs').innerHTML="A+";
					document.getElementById('point-cs').innerHTML="4";
				}
				else if(h < 90 && h >=80){
					document.getElementById('final-cs').innerHTML="A";
					document.getElementById('point-cs').innerHTML="3.75";
				}
				else if( h < 80 && h >=70){
					document.getElementById('final-cs').innerHTML="B+";
					document.getElementById('point-cs').innerHTML="3.50";
				}
				else if( h < 70 && h >= 60){
					document.getElementById('final-cs').innerHTML="B";
					document.getElementById('point-cs').innerHTML="3";
				}
				else if(h < 60 && h >=50){
					document.getElementById('final-cs').innerHTML="C";
					document.getElementById('point-cs').innerHTML="2.50";
				}
				else if(h < 50 && h >=40){
					document.getElementById('final-cs').innerHTML="D";
					document.getElementById('point-cs').innerHTML="1.75";
				}
				else{
					document.getElementById('final-cs').innerHTML="F";
					document.getElementById('point-cs').innerHTML="0.0";
				}
			}
			else{
				document.getElementById('final-cs').innerHTML="Sorry"
			}

			if(per<100){
				if(per >=90){
					document.getElementById('total-grade').innerHTML = "A+";
				}
				else if(per < 90 && per >=80){
					document.getElementById('total-grade').innerHTML="A";
				}
				else if(per < 80 && per >=70){
					document.getElementById('total-grade').innerHTML="B+";
				}
				else if(per < 70 && per >=60){
					document.getElementById('total-grade').innerHTML="B";
				}
				else if( per <60 && per >= 50){
					document.getElementById('total-grade').innerHTML="C";
				}
				else if(per <50 && per >=40){
					document.getElementById('total-grade').innerHTML="D";
				}
				else{
					document.getElementById('total-grade').innerHTML="F";
				}
			}
		
			else{
				document.getElementById('total-grade').innerHTML="";
			}
            
		}
