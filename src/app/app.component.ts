import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ScreenDesign';

  displayedColumns: string[] = ['Hashtag','Invoiceno', 'CovDesc', 'CovAmount', 'Prerate','Pream','Corate' ,'Adj', 'Sum', 'Total', 'Gross', 'Wtax',];

  displayedColumns1: string[] = ['Invno', 'Covam', 'PreAm','GrossCo' ,'Coadj', 'Net'];
  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA1;

}
export class TableStickyColumnsExample {
  displayedColumns = [
    'Hashtag',
    'Invoiceno',
    'CovDesc',
    'CovAmount',
    'Prerate',
    'Pream',
    'Corate',
    'Adj',
    'Sum',
    'Total',
    'Gross',
    'Wtax',
   
  ];


}

export class TableStickyColumnsExample1 {
  displayedColumns1 = [
    'Invno',
    'Covam',
    'PreAm',
    'GrossCo',
    'Coadj',
    'Net',

  ];


}


export interface PeriodicElement {
  Hashtag:string;
  Invoiceno: number;
  CovDesc: string;
  CovAmount: number;
  Prerate: number;
  Pream: number;
  Corate: number;
  Adj: number;
  Sum: number;
  Total: number;
  Gross:number;
  Wtax:number;
 

}
export interface TotalCoveragePerInvoice{
  Invno:number;
  Covam:number;
  PreAm:number;
  GrossCo:number;
  Coadj:number;
  Net:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Hashtag:'#', Invoiceno: 10000001, CovDesc: 'VTPL Property Damage', CovAmount: 500.000 , Prerate: 0.36600000, Pream: 1.923, Corate: 25.00000, Adj: 98.11, Sum:25.00000, Total: 1.923, Gross:1.923, Wtax:1.923},
  { Hashtag:'#', Invoiceno: 10000001, CovDesc: 'VTPL Property Damage', CovAmount: 500.000 , Prerate: 0.36600000, Pream: 1.923, Corate: 25.00000, Adj: 98.11, Sum:25.00000, Total: 1.923, Gross:1.923, Wtax:1.923},
  { Hashtag:'#', Invoiceno: 10000001, CovDesc: 'VTPL Property Damage', CovAmount: 500.000 , Prerate: 0.36600000, Pream: 1.923, Corate: 25.00000, Adj: 98.11, Sum:25.00000, Total: 1.923, Gross:1.923, Wtax:1.923},
  { Hashtag:'#', Invoiceno: 10000001, CovDesc: 'VTPL Property Damage', CovAmount: 500.000 , Prerate: 0.36600000, Pream: 1.923, Corate: 25.00000, Adj: 98.11, Sum:25.00000, Total: 1.923, Gross:1.923, Wtax:1.923},
  { Hashtag:'#', Invoiceno: 10000001, CovDesc: 'VTPL Property Damage', CovAmount: 500.000 , Prerate: 0.36600000, Pream: 1.923, Corate: 25.00000, Adj: 98.11, Sum:25.00000, Total: 1.923, Gross:1.923, Wtax:1.923},
 

]
const ELEMENT_DATA1:TotalCoveragePerInvoice[] = [
{Invno: 10000001, Covam: 16348888.00,PreAm: 4253.54, GrossCo:1063.39,Coadj:212.67,Net:1276.06 },
{Invno: 10000001, Covam: 16348888.00,PreAm: 4253.54, GrossCo:1063.39,Coadj:212.67,Net:1276.06 },
{Invno: 10000001, Covam: 16348888.00,PreAm: 4253.54, GrossCo:1063.39,Coadj:212.67,Net:1276.06 },
]

