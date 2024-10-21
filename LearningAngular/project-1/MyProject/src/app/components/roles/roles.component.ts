import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {


  firstName: string  = "Frank";
  id: number = 9;
  isSingle: boolean = true;
  sysRole: "admin" | "user" = "admin"


}
