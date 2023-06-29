

import { Component } from '@angular/core';
interface Unit{
  donvi:string;
  heso:number
}
interface Print{
  danhmuc:string;
  giatien:number
}
@Component({
  selector: 'app-inputtest',
  templateUrl: './inputtest.component.html',
  styleUrls: ['./inputtest.component.css']
})
export class InputtestComponent {

thuvienDonvi:Unit[]=[{
  donvi:'m',heso:1
},
{
  donvi:'cm',heso:0.01
},
{
  donvi:'mm',heso:0.001
}

]
prints:Print[]=[{danhmuc:'In Bạt',giatien:80000},{danhmuc:'In Decal',giatien:180000},{danhmuc:'In PP',giatien:190000},]

print:number=80000
height:number=1
width:number=1
quality:number=1
num4:number=1
selectedValue = 1;
donvi:string='m'
getDonvi(event:any){
  if (this.selectedValue==1){this.donvi='m'}
  else if(this.selectedValue==0.01){this.donvi='cm'}
  else{ this.donvi='mm'}
}
}
