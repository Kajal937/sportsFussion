import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { SellerDashboardData, SellerGraphData } from '../../models/user';
import * as Highcharts from 'highcharts';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;
  sellerData: SellerDashboardData[] = [];
  sellerGraphData: SellerGraphData[] = [];

  chartWidth: number = 600;  
  chartHeight: number = 400; // Default height

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const userId = 1; 
    this.dataService.getSellerDashbaord(userId).subscribe(
      (data: SellerDashboardData[]) => {
        this.sellerData = data;
        this.prepareGraphData();
        this.initChart();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    this.setChartSize();
  }

  private prepareGraphData(): void {
    this.sellerGraphData = this.sellerData.map(item => ({
      product_name: item.product_name,
      quantity: item.quantity
    }));
  }

  private initChart(): void {
    const categories = this.sellerGraphData.map(item => item.product_name);
    const data = this.sellerGraphData.map(item => item.quantity);

    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Product Quantities'
      },
      xAxis: {
        categories: categories,
        title: {
          text: 'Products'
        }
      },
      yAxis: {
        title: {
          text: 'Quantity'
        }
      },
      series: [
        {
          name: 'Quantity',
          type: 'column',
          data: data
        }
      ]
    };
  }

  // Listen for window resize events and update chart size
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.setChartSize();
  }

  private setChartSize(): void {
    if (window.innerWidth < 768) {
      this.chartWidth = window.innerWidth - 50; // Make chart responsive on small screens
      this.chartHeight = 300; 
    } else {
      this.chartWidth = 600; // Default width
      this.chartHeight = 400; // Default height
    }
  }
}
