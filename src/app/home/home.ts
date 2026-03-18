import { ChangeDetectorRef, Component } from '@angular/core';
import { Carousel } from "../carousel/carousel";
import { Accordian } from "../accordian/accordian";
import { Detailpage } from "../detailpage/detailpage";
import { ApiService } from '../api-service';
import { Card } from '../card/card';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [Carousel, Accordian, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  products:any[]=[];
  constructor(private apiservice:ApiService,private cdr:ChangeDetectorRef){}
  
  ngOnInit(){
    this.apiservice.getproduct().subscribe((data: any)=>{
    this.products=data;
    this.cdr.detectChanges();
    
  })
  }

}
