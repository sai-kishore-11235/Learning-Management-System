import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Learning-Management-System';
  
  constructor(private router:ActivatedRoute){}
  ngOnInit(): void {
  
    
     
  }
  
  
  
}
