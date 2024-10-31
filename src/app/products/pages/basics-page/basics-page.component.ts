import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower:string='juan camilo';
  public nameUpper:string='JUAN CAMILO';
  public fullName:string='jUaN cAMilO';

  public customDate:Date=new Date();
}
