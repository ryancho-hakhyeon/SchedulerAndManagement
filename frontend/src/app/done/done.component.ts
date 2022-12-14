import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { MatDialog } from '@angular/material/dialog'

import { ApiserviceService } from '../apiservice.service'
import { AppliedformComponent } from '../appliedform/appliedform.component';


@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  dateValue = formatDate(new Date(), 'yyyy-MM-dd', 'en-US')

  constructor(
    private api_service: ApiserviceService,
    private dialog:MatDialog,
  ) { }

  readAppliedData: any;

  ngOnInit(): void {
    this.getAllAppliedData()
  }

  getAllAppliedData() {
    this.api_service.getAllAppliedData().subscribe((res) => {
      this.readAppliedData = res.data
    })
  }

  readAppliedDetailsData(data:any){
    // console.log(data)
    const dialogRef = this.dialog.open(AppliedformComponent, {
      width: '45%',
      data: {
        userId: data.em_id,
        userData: data
      }
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // this.api_service.deleteApply(data.em_id).subscribe((res) => {
        //   alert(res.message)
        // }, (err) => {
        //   alert('Error: ' + err)
        // })
      } else {
        console.log('Closed.')
      }
    })
  }
}
