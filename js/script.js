async function fetchData() {
    const res = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
    const record = await res.json();

    var table = "" ;
 
		for(var i=0; i < 100; i++)
        {
			table += "<tr>";
			table += "<td>" + (new Date(record.data[i].date)).toLocaleDateString('en-GB') +"</td>" 
					+ "<td>" + record.data[i].areaName +"</td>" 
					+ "<td>" + record.data[i].latestBy +"</td>"
                    + "<td>" + record.data[i].deathNew +"</td>";
			table += "</tr>";
		}

    document.getElementById("result").innerHTML = table;
}
fetchData();