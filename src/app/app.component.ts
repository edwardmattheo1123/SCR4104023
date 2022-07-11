import {SelectionModel} from '@angular/cdk/collections';
import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';

export interface PeriodicElement2 {
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

const ELEMENT_DATA2: PeriodicElement2[] = [
  { Hashtag:'#', Invoiceno: 10000001, CovDesc: 'VTPL Property Damage', CovAmount: 500.000 , Prerate: 0.36600000, Pream: 1.923, Corate: 25.00000, Adj: 98.11, Sum:25.00000, Total: 1.923, Gross:1.923, Wtax:1.923},
  { Hashtag:'#', Invoiceno: 10000001, CovDesc: 'VTPL Property Damage', CovAmount: 500.000 , Prerate: 0.36600000, Pream: 1.923, Corate: 25.00000, Adj: 98.11, Sum:25.00000, Total: 1.923, Gross:1.923, Wtax:1.923},
  { Hashtag:'#', Invoiceno: 10000001, CovDesc: 'VTPL Property Damage', CovAmount: 500.000 , Prerate: 0.36600000, Pream: 1.923, Corate: 25.00000, Adj: 98.11, Sum:25.00000, Total: 1.923, Gross:1.923, Wtax:1.923},
  { Hashtag:'#', Invoiceno: 10000001, CovDesc: 'VTPL Property Damage', CovAmount: 500.000 , Prerate: 0.36600000, Pream: 1.923, Corate: 25.00000, Adj: 98.11, Sum:25.00000, Total: 1.923, Gross:1.923, Wtax:1.923},
  { Hashtag:'#', Invoiceno: 10000001, CovDesc: 'VTPL Property Damage', CovAmount: 500.000 , Prerate: 0.36600000, Pream: 1.923, Corate: 25.00000, Adj: 98.11, Sum:25.00000, Total: 1.923, Gross:1.923, Wtax:1.923},
];

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
  displayedColumns2: string[] = ['select','Hashtag','Invoiceno', 'CovDesc', 'CovAmount', 'Prerate','Pream','Corate' ,'Adj', 'Sum', 'Total', 'Gross', 'Wtax',];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);
  selection = new SelectionModel<PeriodicElement2>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource2.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource2.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement2): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Hashtag + 1}`;
  }

  checksweetalert(){
    Swal.fire({
      title: 'Warning',
      text: "Are you sure you want to approve this transaction?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',
      cancelButtonText:'Close'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Success!',
          'Transaction routed for printing with trans. no. 20242',
          'success'
        )
      }
    })
  }

  savesweetalert(){
    Swal.fire({
      title: 'Warning',
      text: "This OR no.248522 has been already deposited. Do you still want to proceed?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'YES',
      cancelButtonText:'NO'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Success!',
          'Work item completed with Commission Adjustment trans. no. 20242',
          'success'
        )
      }
    })
  }
  closesweetalert(){
    Swal.fire({
      title: 'Close',
  text: "",
  icon: 'error',
  confirmButtonColor: '#7066e0',
  confirmButtonText: 'OK'

    })

  }

  completesweetalert(){
    Swal.fire(
      'Success!',
      'Work item completed with Commission Adjustment trans no. 20242',
      'success'
    )
  }


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

