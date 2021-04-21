import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projectedit',
  templateUrl: './projectedit.component.html',
  styleUrls: ['./projectedit.component.scss']
})
export class ProjecteditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
}
