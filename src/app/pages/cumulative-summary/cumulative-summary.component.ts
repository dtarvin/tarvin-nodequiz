/*
; ============================================
; Title:  cumulative-summary.component.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CumulativeSummaryService } from './cumulative-summary.service';
import { MatTable } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/observable';


@Component({
  selector: 'app-cumulative-summary',
  templateUrl: './cumulative-summary.component.html',
  styleUrls: ['./cumulative-summary.component.css']
})
export class CumulativeSummaryComponent implements OnInit {

  dataSource = new CumulativeSummaryDataSource(this.cumulativeSummaryService);
  displayedColumns: string[] = ['employeeId', 'quizId', 'quizName', 'dateTaken', 'score'];
  completedQuizzes: any;
  
  constructor(private router: Router, private http: HttpClient,
              private cumulativeSummaryService: CumulativeSummaryService) { 
                this.cumulativeSummaryService.getCumulativeSummary()
                .subscribe(res => {
                  this.completedQuizzes = res;
                })
              }

  ngOnInit() {
  }

}

export class CumulativeSummaryDataSource extends DataSource<any> {
  constructor(private cumulativeSummaryService: CumulativeSummaryService) {
    super();
  }
  connect(): Observable<CompletedQuiz[]> {
    return this.cumulativeSummaryService.getCumulativeSummary();
  }
  disconnect() {}
}
