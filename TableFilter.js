var Info = document.getElementById("Art");
var btn_get = document.getElementById("btn");
document.getElementById("total").innerHTML = 0;
document.getElementById("Input").style.display = 'none';

btn_get.addEventListener("click",function(){
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET','https://neerajjain311.github.io/Search_Table/artist_data.json');
    myRequest.onload = function(){
        var data = JSON.parse(myRequest.responseText);
        console.log(data);
        renderHTML(data);
    };
    myRequest.send();
});

function renderHTML(data) {
    var htmlString = "";
    for(i=0;i<data.length;i++){
        htmlString+="<tr><td>" + data[i].artist + "</td><td>" + data[i].art + "</td></tr>";
    }
    if(i==data.length){
        document.getElementById("total").innerHTML=i;
		document.getElementById("btn").style.display='none';
		document.getElementById("Input").style.display='block';
    }
    Info.insertAdjacentHTML('beforeend', htmlString);
}

function TableFilter() {
    var input,filter,table,tr,td,i,j;
    input = document.getElementById("Input");
    filter = input.value.toUpperCase();
    table = document.getElementById("Art");
    tr = table.getElementsByTagName("tr");
	var count = 0;
    for (i = 0; i < tr.length; i++) 
	{
        var td = tr[i].getElementsByTagName("td")[0];
        var td1 = tr[i].getElementsByTagName("td")[1];     
        if (td+td1)
		{
            if ((td.innerHTML.toUpperCase().indexOf(filter)+td1.innerHTML.toUpperCase().indexOf(filter)) > -2) 
			{
				tr[i].style.display = "";
				count++;
				document.getElementById("total").innerHTML=count;
			}
			else 
			{
				tr[i].style.display = "none";
				document.getElementById("total").innerHTML=count;
			}
		}       
	}	
}
