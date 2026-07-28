import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private http = inject(HttpClient);
  protected title = 'Dating app';
  protected members = signal<any>([])

  
  async ngOnInit() {
    this.members.set(await this.getMembers())
  }

 async getMember(){
   try{
     return lastValueFrom (this.http.get('https://localhost:5001/api/members'));
   } catch (Error){
    console.log(error);
    throw error;
   }
 
}

}
