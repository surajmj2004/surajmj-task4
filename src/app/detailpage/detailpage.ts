import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../api-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailpage',
  imports: [],
  templateUrl: './detailpage.html',
  styleUrl: './detailpage.css',
})
export class Detailpage {
  product:any;
  id:number=0;

  constructor(private api:ApiService,private cdr:ChangeDetectorRef,private route:ActivatedRoute){}
  ngOnInit()
{
    this.id=this.route.snapshot.params['id'];
    this.api.getdetails(this.id).subscribe((data:any)=>{
      this.product=data;
      this.cdr.detectChanges();
    })
}
}
