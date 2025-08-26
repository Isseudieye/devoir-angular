import { Component } from '@angular/core';
import { Homme } from '../model/homme';

@Component({
  selector: 'app-homme',
  templateUrl: './homme.component.html',
  styleUrls: ['./homme.component.css']
})
export class HommeComponent {
 homme: Homme = {
    id: 0,
    nom: '',
    prenom: '',
    femme: ["AWA", "AIDA", "FATOU", "ZEYNA"]
  };

  hommes: Homme[] = [
    //{ id: 1, nom: 'Diop', prenom: 'Mamadou', femme: ["AWA"] },
    //{ id: 2, nom: 'Sow', prenom: 'Ibrahima', femme: ["FATOU"] },
    //{ id: 3, nom: 'Ba', prenom: 'Alioune', femme: ["ZEYNA"] }
  ];

  searchText: string = ''; 

  addHomme() {
    this.hommes.push({ ...this.homme, id: this.hommes.length + 1 });
    this.homme = { id: 0, nom: '', prenom: '', femme: [] }; 
  
  }

  deleteHomme(id: number) {
    this.hommes = this.hommes.filter(h => h.id !== id);
  }
  recharge(homme: Homme) {
    this.homme = { ...homme }; 
}

}
