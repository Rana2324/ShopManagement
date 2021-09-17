import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any[]=[];


  constructor(private router:Router, private ics:CommonService) {
    
   }

  

  ngOnInit(): void {
    this.fetchData();
  }
  add(id:any,name:any,price:any):void{
    this.products.push({

      id:id.value,
      name:name.value,
      price:price.value


    });
    this.saveData();
    
    
  }
  delete(id:any){
    if(confirm("Are you sure delete this data?")){
      this.products.splice(id,1)
    }
    else{
      
      this.router.navigate([""])
    }

  }

  saveData(){
    this.ics.saveData(this.products).subscribe(
      (res)=>console.log(res),
      (err)=>console.log(err)
    )
  }
  fetchData(){
    this.ics.getData().subscribe(

      (res)=>{
        const data=JSON.stringify(res)
        this.products=JSON.parse(data)
      },
      (err)=>console.log(err)
    )
  }
  

}
