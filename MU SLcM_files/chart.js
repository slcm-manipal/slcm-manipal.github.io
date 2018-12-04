google.load("visualization", "1", { packages: ["corechart"] });
//google.charts.load('current', { packages: ['map'] });
google.setOnLoadCallback(drawCharts);
function drawCharts() {
    var selectedVal = this.value, Session = document.getElementById("SelectSession").value, Acdyear = document.getElementById("SelectAcd").value, Programe = document.getElementById("SelectPrograme").value; $(function () { $.ajax({ type: "POST", dataType: "json", contentType: "application/json", url: "DashboardChart.aspx/GetChartProgramewiseFilter", data: "{session:'" + Session + "', graduation:'" + Programe + "', academicyear:'" + Acdyear + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (a) { drawchartprogramechart(a.d) }, error: function () { alert("Error loading data Programe wise! Please try again.") } }) }), $(function () { $.ajax({ type: "POST", dataType: "json", contentType: "application/json", url: "DashboardChart.aspx/GetChartDataStateFilter", data: "{session:'" + Session + "', graduation:'" + Programe + "', academicyear:'" + Acdyear + "'}", success: function (a) { drawchartstatechart(a.d) }, error: function () { alert("Error loading data State wise! Please try again.") } }) }), $(function () { $.ajax({ type: "POST", dataType: "json", contentType: "application/json", url: "DashboardChart.aspx/GetChartDataAddmissionPieFilter", data: "{session:'" + Session + "', graduation:'" + Programe + "', academicyear:'" + Acdyear + "'}", success: function (a) { drawchartAppliedregisterchart(a.d) }, error: function () { alert("Error loading data Admission Detail Pie! Please try again.") } }) }), $(function () { $.ajax({ type: "POST", dataType: "json", contentType: "application/json", url: "DashboardChart.aspx/GetChartDataCategoryFilter", data: "{session:'" + Session + "', graduation:'" + Programe + "', academicyear:'" + Acdyear + "'}", success: function (a) { drawchartcategorychart(a.d) }, error: function () { alert("Error loading data Admission category! Please try again.") } }) }), $(function () { $.ajax({ type: "POST", dataType: "json", contentType: "application/json", url: "DashboardChart.aspx/GetChartHostelDataFilter", data: "{session:'" + Session + "', graduation:'" + Programe + "', academicyear:'" + Acdyear + "'}", success: function (a) { drawchartHostelchart(a.d) }, error: function () { alert("Error loading data Hostel! Please try again.") } }) }), $(function () { $.ajax({ type: "POST", dataType: "json", contentType: "application/json", url: "DashboardChart.aspx/GetChartSocialstatusDataFilter", data: "{session:'" + Session + "', graduation:'" + Programe + "', academicyear:'" + Acdyear + "'}", success: function (a) { drawchartSocialStatuschart(a.d) }, error: function () { alert("Error Social Status loading data! Please try again.") } }) });

    
    function drawchartprogramechart(dataValues) {
        // Callback that creates and populates a data table,  
        // instantiates the pie chart, passes in the data and  
        // draws it.  
        var dataProgram = new google.visualization.DataTable; dataProgram.addColumn("string", "Program"), dataProgram.addColumn("number", "Male"), dataProgram.addColumn({ type: "string", role: "annotation" }), dataProgram.addColumn("number", "Female"), dataProgram.addColumn({ type: "string", role: "annotation" }); for (var i = 0; i < dataValues.length; i++) dataProgram.addRow([dataValues[i].Program, dataValues[i].Male, dataValues[i].Mannotation, dataValues[i].Female, dataValues[i].Fannotation]);
        // 
        //data.addRow(['s', 1, 1]);
        var optionsProgram = {
            backgroundColor: 'transparent',
            colors: ['cornflowerblue', 'tomato'],
            fontName: 'Open Sans',
            //isStacked: 'percent',
            chartArea: {
                left: 300,
                top: 20,
                width: '55%',
                height: '95%'
            },
            bar: {
                groupWidth: '80%'
            },
            hAxis: {
                textStyle: {
                    fontSize: 11
                }
            },
            vAxis: {
                minValue: 0,
                maxValue: 1500,
                baselineColor: '#DDD',
                gridlines: {
                    color: '#DDD',
                    count: 4
                },
                textStyle: {
                    fontSize: 11
                }
            },
            legend: {
                textStyle: {
                    fontSize: 12
                }
            },
            animation: {
                duration: 1200,
                easing: 'out',
                startup: true
            }
        };
        var chartProgram = new google.visualization.BarChart(document.getElementById('chartProgram'));
        chartProgram.draw(dataProgram, optionsProgram);

    }
    //State Wise Distribution Filter
    function drawchartstatechart(dataValues) {
        // Callback that creates and populates a data table,  
        // instantiates the pie chart, passes in the data and  
        // draws it.  
        var dataState = new google.visualization.DataTable; dataState.addColumn("string", "Program"), dataState.addColumn("number", "Male"), dataState.addColumn({ type: "string", role: "annotation" }), dataState.addColumn("number", "Female"), dataState.addColumn({ type: "string", role: "annotation" }); for (var i = 0; i < dataValues.length; i++) dataState.addRow([dataValues[i].Program, dataValues[i].Male, dataValues[i].Mannotation, dataValues[i].Female, dataValues[i].Fannotation]);
         
       
        var optionsState = {
            backgroundColor: 'transparent',
            colors: ['cornflowerblue', 'tomato'],
            fontName: 'Open Sans',
            chartArea: {
                left: 150,
                top: 20,
                width: '45%',
                height: '90%'
            },
            bar: {
                groupWidth: '80%'
            },
            hAxis: {
                textStyle: {
                    fontSize: 11
                }
            },
            vAxis: {
                minValue: 0,
                maxValue: 1500,
                baselineColor: '#DDD',
                gridlines: {
                    color: '#DDD',
                    count: 4
                },
                textStyle: {
                    fontSize: 11
                }
            },
            legend: {
                textStyle: {
                    fontSize: 12
                }
            },
            animation: {
                duration: 1200,
                easing: 'out',
                startup: true
            }
        };
        var chartState = new google.visualization.BarChart(document.getElementById('chartState'));
        chartState.draw(dataState, optionsState);

    }
    //Applied Register Pie
    function drawchartAppliedregisterchart(dataValues) {
       
        var dataPie = new google.visualization.DataTable; dataPie.addColumn("string", "Status"), dataPie.addColumn("number", "Student"); for (var i = 0; i < dataValues.length; i++) dataPie.addRow([dataValues[i].Status, dataValues[i].Student]);


        var pieOptions = {
            backgroundColor: 'transparent',
            pieHole: 0,
            colors: ["cornflowerblue",
                      "olivedrab",
                      "orange",
                      "tomato",
                      "crimson",
                      "purple",
                      "turquoise",
                      "forestgreen",
                      "navy",
                      "gray"],
            pieSliceText: 'value',
            tooltip: {
                text: 'percentage'
            },
            fontName: 'Open Sans',
            chartArea: {
                width: '100%',
                height: '94%'
            },
            legend: {
                textStyle: {
                    fontSize: 13
                }
            },
            animation: {
                duration: 1200,
                easing: 'out',
                startup: true
            }
        };
        var pieChart = new google.visualization.PieChart(document.getElementById('pie-chart'));
        pieChart.draw(dataPie, pieOptions);

    }
    //Category
    function drawchartcategorychart(dataValues) {
       
        var dataCategory = new google.visualization.DataTable; dataCategory.addColumn("string", "Category"), dataCategory.addColumn("number", "Male"), dataCategory.addColumn({ type: "string", role: "annotation" }), dataCategory.addColumn("number", "Female"), dataCategory.addColumn({ type: "string", role: "annotation" }); for (var i = 0; i < dataValues.length; i++) dataCategory.addRow([dataValues[i].Categry, dataValues[i].Male, dataValues[i].Mannotation, dataValues[i].Female, dataValues[i].Fannotation]);
      
        var optionsCategory = {
            backgroundColor: 'transparent',
            colors: ['cornflowerblue', 'tomato'],
            fontName: 'Open Sans',
            chartArea: {
                left: 150,
                top: 20,
                width: '45%',
                height: '75%'
            },
            bars: 'vertical',
            bar: {
                groupWidth: '80%'
            },
            hAxis: {
                textStyle: {
                    fontSize: 11
                }
            },
            legend: {
                textStyle: {
                    fontSize: 12
                }
            },
            animation: {
                duration: 1200,
                easing: 'out',
                startup: true
            }
        };
        var chartCategory = new google.visualization.BarChart(document.getElementById('chartCategory'));
        chartCategory.draw(dataCategory, optionsCategory);
    }

    //Hostel Occupancy
    function drawchartHostelchart(dataValues) {
       
        var dataHostel = new google.visualization.DataTable; dataHostel.addColumn("string", "Hostel"), dataHostel.addColumn("number", "Male"), dataHostel.addColumn({ type: "string", role: "annotation" }), dataHostel.addColumn("number", "Female"), dataHostel.addColumn({ type: "string", role: "annotation" }); for (var i = 0; i < dataValues.length; i++) dataHostel.addRow([dataValues[i].Hostels, dataValues[i].Male, dataValues[i].Mannotation, dataValues[i].Female, dataValues[i].Fannotation]);
        // 
        var optionsHostel = {
            backgroundColor: 'transparent',
            colors: ['cornflowerblue', 'tomato'],
            fontName: 'Open Sans',
            chartArea: {
                left: 150,
                top: 20,
                width: '45%',
                height: '75%'
            },
            bar: {
                groupWidth: '80%'
            },
            hAxis: {
                textStyle: {
                    fontSize: 11
                }
            },
            legend: {
                textStyle: {
                    fontSize: 12
                }
            },
            animation: {
                duration: 1200,
                easing: 'out',
                startup: true
            }
        };
        var chartHostel = new google.visualization.ColumnChart(document.getElementById('chartHostel'));
        chartHostel.draw(dataHostel, optionsHostel);
    }


    //Social Status
    function drawchartSocialStatuschart(dataValues) {
     
        var dataSocial = new google.visualization.DataTable; dataSocial.addColumn("string", "Social"), dataSocial.addColumn("number", "Male"), dataSocial.addColumn({ type: "string", role: "annotation" }), dataSocial.addColumn("number", "Female"), dataSocial.addColumn({ type: "string", role: "annotation" }); for (var i = 0; i < dataValues.length; i++) dataSocial.addRow([dataValues[i].Socials, dataValues[i].Male, dataValues[i].Mannotation, dataValues[i].Female, dataValues[i].Fannotation]);
      
  

        var optionsSocialStatus = {
            backgroundColor: 'transparent',
            colors: ['cornflowerblue', 'tomato'],
            fontName: 'Open Sans',
            chartArea: {
                left: 150,
                top: 20,
                width: '45%',
                height: '75%'
            },
            bar: {
                groupWidth: '80%'
            },
            hAxis: {
                textStyle: {
                    fontSize: 11
                }
            },
            legend: {
                textStyle: {
                    fontSize: 12
                }
            },
            animation: {
                duration: 1200,
                easing: 'out',
                startup: true
            }
        };
        var chartSocialStatus = new google.visualization.BarChart(document.getElementById('chartSocialStatus'));
        chartSocialStatus.draw(dataSocial, optionsSocialStatus);

    }
   
}







// virtual id 1
$("#SelectDrop").change(function () { function a(a) { var t = new google.visualization.DataTable; t.addColumn("string", "Program"), t.addColumn("number", "Male"), t.addColumn({ type: "string", role: "annotation" }), t.addColumn("number", "Female"), t.addColumn({ type: "string", role: "annotation" }); for (var e = 0; e < a.length; e++) t.addRow([a[e].Program, a[e].Male, a[e].Mannotation, a[e].Female, a[e].Fannotation]); var n = { backgroundColor: "transparent", colors: ["cornflowerblue", "tomato"], fontName: "Open Sans", isStacked: "percent", chartArea: { left: 300, top: 20, width: "60%", height: "95%" }, bar: { groupWidth: "80%" }, hAxis: { textStyle: { fontSize: 11 } }, vAxis: { minValue: 0, maxValue: 1500, baselineColor: "#DDD", gridlines: { color: "#DDD", count: 4 }, textStyle: { fontSize: 11 } }, legend: { textStyle: { fontSize: 12 } }, animation: { duration: 1200, easing: "out", startup: !0 } }, o = new google.visualization.BarChart(document.getElementById("chartProgram")); o.draw(t, n) } var t = this.value, e = document.getElementById("SelectSession").value, n = document.getElementById("SelectAcd").value, o = document.getElementById("SelectPrograme").value; $.ajax({ type: "post", url: "DashboardChart.aspx/GetDataProgrameCHartbyValue", data: "{academic:'" + n + "', session:'" + e + "', graduation:'" + o + "', option:'" + t + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (t) { a(t.d) }, error: function () { alert("Error loading data! Please try again.") } }) }), $("#btnShow").click(function () { function a(a) { var t = new google.visualization.DataTable; t.addColumn("string", "Status"), t.addColumn("number", "Student"); for (var e = 0; e < a.length; e++) t.addRow([a[e].Status, a[e].Student]); var n = { backgroundColor: "transparent", pieHole: 0, colors: ["cornflowerblue", "olivedrab", "orange", "tomato", "crimson", "purple", "turquoise", "forestgreen", "navy", "gray"], pieSliceText: "value", tooltip: { text: "percentage" }, fontName: "Open Sans", chartArea: { width: "100%", height: "94%" }, legend: { textStyle: { fontSize: 13 } }, animation: { duration: 1200, easing: "out", startup: !0 } }, o = new google.visualization.PieChart(document.getElementById("pie-chart")); o.draw(t, n) } function t(a) { var t = new google.visualization.DataTable; t.addColumn("string", "Category"), t.addColumn("number", "Male"), t.addColumn({ type: "string", role: "annotation" }), t.addColumn("number", "Female"), t.addColumn({ type: "string", role: "annotation" }); for (var e = 0; e < a.length; e++) t.addRow([a[e].Categry, a[e].Male, a[e].Mannotation, a[e].Female, a[e].Fannotation]); var n = { backgroundColor: "transparent", colors: ["cornflowerblue", "tomato"], fontName: "Open Sans", isStacked: "percent", chartArea: { left: 100, top: 20, width: "65%", height: "75%" }, bars: "vertical", bar: { groupWidth: "80%" }, hAxis: { textStyle: { fontSize: 11 } }, legend: { textStyle: { fontSize: 12 } }, animation: { duration: 1200, easing: "out", startup: !0 } }, o = new google.visualization.BarChart(document.getElementById("chartCategory")); o.draw(t, n) } function e(a) { var t = new google.visualization.DataTable; t.addColumn("string", "Program"), t.addColumn("number", "Male"), t.addColumn({ type: "string", role: "annotation" }), t.addColumn("number", "Female"), t.addColumn({ type: "string", role: "annotation" }); for (var e = 0; e < a.length; e++) t.addRow([a[e].Program, a[e].Male, a[e].Mannotation, a[e].Female, a[e].Fannotation]); var n = { backgroundColor: "transparent", colors: ["cornflowerblue", "tomato"], fontName: "Open Sans", isStacked: "percent", chartArea: { left: 300, top: 20, width: "60%", height: "95%" }, bar: { groupWidth: "80%" }, hAxis: { textStyle: { fontSize: 11 } }, vAxis: { minValue: 0, maxValue: 1500, baselineColor: "#DDD", gridlines: { color: "#DDD", count: 4 }, textStyle: { fontSize: 11 } }, legend: { textStyle: { fontSize: 12 } }, animation: { duration: 1200, easing: "out", startup: !0 } }, o = new google.visualization.BarChart(document.getElementById("chartProgram")); o.draw(t, n) } function n(a) { var t = new google.visualization.DataTable; t.addColumn("string", "Program"), t.addColumn("number", "Male"), t.addColumn({ type: "string", role: "annotation" }), t.addColumn("number", "Female"), t.addColumn({ type: "string", role: "annotation" }); for (var e = 0; e < a.length; e++) t.addRow([a[e].Program, a[e].Male, a[e].Mannotation, a[e].Female, a[e].Fannotation]); var n = { backgroundColor: "transparent", colors: ["cornflowerblue", "tomato"], fontName: "Open Sans", isStacked: "percent", chartArea: { left: 150, top: 20, width: "40%", height: "90%" }, bar: { groupWidth: "80%" }, hAxis: { textStyle: { fontSize: 11 } }, vAxis: { minValue: 0, maxValue: 1500, baselineColor: "#DDD", gridlines: { color: "#DDD", count: 4 }, textStyle: { fontSize: 11 } }, legend: { textStyle: { fontSize: 12 } }, animation: { duration: 1200, easing: "out", startup: !0 } }, o = new google.visualization.BarChart(document.getElementById("chartState")); o.draw(t, n) } function o(a) { var t = new google.visualization.DataTable; t.addColumn("string", "Hostel"), t.addColumn("number", "Male"), t.addColumn({ type: "string", role: "annotation" }), t.addColumn("number", "Female"), t.addColumn({ type: "string", role: "annotation" }); for (var e = 0; e < a.length; e++) t.addRow([a[e].Hostels, a[e].Male, a[e].Mannotation, a[e].Female, a[e].Fannotation]); var n = { backgroundColor: "transparent", colors: ["cornflowerblue", "tomato"], fontName: "Open Sans", chartArea: { left: 100, top: 20, width: "65%", height: "75%" }, bar: { groupWidth: "80%" }, hAxis: { textStyle: { fontSize: 11 } }, legend: { textStyle: { fontSize: 12 } }, animation: { duration: 1200, easing: "out", startup: !0 } }, o = new google.visualization.ColumnChart(document.getElementById("chartHostel")); o.draw(t, n) } function r(a) { var t = new google.visualization.DataTable; t.addColumn("string", "Social"), t.addColumn("number", "Male"), t.addColumn({ type: "string", role: "annotation" }), t.addColumn("number", "Female"), t.addColumn({ type: "string", role: "annotation" }); for (var e = 0; e < a.length; e++) t.addRow([a[e].Socials, a[e].Male, a[e].Mannotation, a[e].Female, a[e].Fannotation]); var n = { backgroundColor: "transparent", colors: ["cornflowerblue", "tomato"], fontName: "Open Sans", chartArea: { left: 150, top: 20, width: "45%", height: "75%" }, bar: { groupWidth: "80%" }, hAxis: { textStyle: { fontSize: 11 } }, legend: { textStyle: { fontSize: 12 } }, animation: { duration: 1200, easing: "out", startup: !0 } }, o = new google.visualization.BarChart(document.getElementById("chartSocialStatus")); o.draw(t, n) } var i = document.getElementById("SelectSession").value, l = document.getElementById("SelectAcd").value, d = document.getElementById("SelectPrograme").value; $.ajax({ type: "post", url: "DashboardChart.aspx/GetChartDataAddmissionPieFilter", data: "{session:'" + i + "', graduation:'" + d + "', academicyear:'" + l + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (t) { a(t.d) }, error: function () { alert("Error loading data! Please try again.") } }), $.ajax({ type: "post", url: "DashboardChart.aspx/GetChartDataCategoryFilter", data: "{session:'" + i + "', graduation:'" + d + "', academicyear:'" + l + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (a) { t(a.d) }, error: function () { alert("Error loading data! Please try again.") } }), $.ajax({ type: "post", url: "DashboardChart.aspx/GetChartProgramewiseFilter", data: "{session:'" + i + "', graduation:'" + d + "', academicyear:'" + l + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (a) { e(a.d) }, error: function () { alert("Error loading data! Please try again.") } }), $.ajax({ type: "post", url: "DashboardChart.aspx/GetChartDataStateFilter", data: "{session:'" + i + "', graduation:'" + d + "', academicyear:'" + l + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (a) { n(a.d) }, error: function () { alert("Error loading data! Please try again.") } }), $.ajax({ type: "post", url: "DashboardChart.aspx/GetChartHostelDataFilter", data: "{session:'" + i + "', graduation:'" + d + "', academicyear:'" + l + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (a) { o(a.d) }, error: function () { alert("Error loading data! Please try again.") } }), $.ajax({ type: "post", url: "DashboardChart.aspx/GetChartSocialstatusDataFilter", data: "{session:'" + i + "', graduation:'" + d + "', academicyear:'" + l + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (a) { r(a.d) }, error: function () { alert("Error loading data! Please try again.") } }) });

function funPrint() { var n = "<html><head><title></title></head><body><h2>Admission Details - Applied / Registered / Admitted</h2>", t = "</body>", e = document.getElementById("pie-chart").innerHTML, o = document.body.innerHTML; return document.body.innerHTML = n + e + t, window.print(), document.body.innerHTML = o, window.location.href = "DashboardChart.aspx", !0 } function funPrintAdmissionCategory() { var n = "<html><head><title></title></head><body><h2>Admission Category</h2>", t = "</body>", e = document.getElementById("chartCategory").innerHTML, o = document.body.innerHTML; return document.body.innerHTML = n + e + t, window.print(), document.body.innerHTML = o, window.location.href = "DashboardChart.aspx", !0 } function funPrintCountry() { var n = "<html><head><title></title></head><body><h2>Country Wise Distribution</h2>", t = "</body>", e = document.getElementById("pnlcountry").innerHTML, o = document.body.innerHTML; return document.body.innerHTML = n + e + t, window.print(), document.body.innerHTML = o, window.location.href = "DashboardChart.aspx", !0 } function funPrintProgramewise() { var n = "<html><head><title></title></head><body><h2>Program Wise Admission - Consolidated Data</h2>", t = "</body>", e = document.getElementById("chartProgram").innerHTML, o = document.body.innerHTML; return document.body.innerHTML = n + e + t, window.print(), document.body.innerHTML = o, window.location.href = "DashboardChart.aspx", !0 } function funPrintStatewise() { var n = "<html><head><title></title></head><body><h2>State Wise Distribution</h2>", t = "</body>", e = document.getElementById("chartState").innerHTML, o = document.body.innerHTML; return document.body.innerHTML = n + e + t, window.print(), document.body.innerHTML = o, window.location.href = "DashboardChart.aspx", !0 } function funPrintHostelOccupancy() { var n = "<html><head><title></title></head><body><h2>Hostel Occupancy</h2>", t = "</body>", e = document.getElementById("chartHostel").innerHTML, o = document.body.innerHTML; return document.body.innerHTML = n + e + t, window.print(), document.body.innerHTML = o, window.location.href = "DashboardChart.aspx", !0 } function funPrintSocialStatus() { var n = "<html><head><title></title></head><body><h2>Student Social Status Distribution</h2>", t = "</body>", e = document.getElementById("chartSocialStatus").innerHTML, o = document.body.innerHTML; return document.body.innerHTML = n + e + t, window.print(), document.body.innerHTML = o, window.location.href = "DashboardChart.aspx", !0 }

//map
