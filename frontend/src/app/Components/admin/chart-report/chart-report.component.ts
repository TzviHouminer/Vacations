import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CanvasJS } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-chart-report',
  templateUrl: './chart-report.component.html',
  styleUrls: ['./chart-report.component.css']
})
export class ChartReportComponent implements OnInit{
  followersCountMap:{label:string, y:number}[] = [];
  chart: any;
  chartOptions = {
    title:{
      text: "Holidays Followers"
    },
    animationEnabled: true,
    axisX: {
      title:"destination",
      includeZero: true,
      reversed: true,
    },
    axisY:{
      title: "followers",
    },
    data: [{
      type: "column",
      indexLabel: "{y}",
      xValueFormatString: "##",
      dataPoints: this.followersCountMap
    }]
  }
  csvContent:string = '';
  downloadPath: string = '';

  constructor(private http:HttpClient){}

  ngOnInit() {
    this.http.get<any[]>("http://localhost:5000/api/v1/admin/holidays/getNumFollowers")
    .subscribe(data=>{
      data.map(holiday=>{
        this.followersCountMap.push({label:holiday.destination, y:holiday.followers});
      });
      this.chart = new CanvasJS.Chart("chartId", this.chartOptions);// create a chart and insert to the div with the id.
      this.chart.render();
    })
  }

  exportToCSV(){
    if (this.followersCountMap.length > 0) {
      const csvContent = 'Destination, Followers\n'
      + this.followersCountMap.map(row => `${row.label}, ${row.y}`).join('\n');
      
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = URL.createObjectURL(blob); //create url to download
  
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Followers.csv';
      link.click();
  
      URL.revokeObjectURL(url); //to clean the memory.
    }
  }

}
