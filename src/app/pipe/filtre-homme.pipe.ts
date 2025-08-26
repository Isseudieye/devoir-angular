import { Pipe, PipeTransform } from '@angular/core';
import { Homme } from '../model/homme';

@Pipe({
  name: 'filtreHomme'
})
export class FiltreHommePipe implements PipeTransform {

  transform(hommes: Homme[], searchText: string): Homme[] {
    if (!searchText) return hommes; // Si aucun texte de recherche, retourner tous les hommes

    searchText = searchText.toLowerCase(); // Conversion en minuscule pour éviter la casse

    return hommes.filter(homme =>
      homme.nom.toLowerCase().includes(searchText) ||
      homme.prenom.toLowerCase().includes(searchText) ||
      homme.femme.some(femme => femme.toLowerCase().includes(searchText)) // Recherche aussi sur les femmes associées
    );
  }

}
