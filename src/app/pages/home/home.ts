import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  readonly interests = [
    {
      slug: '/fpv',
      title: 'Pilotage de drones FPV',
      subtitle: 'Course et acrobatie',
      description:
        'Je vole en <strong>indoor</strong> comme en <strong>outdoor</strong> depuis l’adolescence. Chaque session mélange adrénaline et précision, avec des runs qui durent seulement quelques minutes.',
      accent: 'fpv'
    },
    {
      slug: '/tennis',
      title: 'Tennis',
      subtitle: 'Compétition et terre battue',
      description:
        'J’ai passé plusieurs années en club et en <strong>compétition</strong>, avec une préférence nette pour le <strong>simple sur terre battue</strong>.',
      accent: 'tennis'
    },
    {
      slug: '/age-of-mythology',
      title: 'Age of Mythology',
      subtitle: 'Original et Retold',
      description:
        'Un RTS mythologique que je joue depuis longtemps, avec un style surtout <strong>éco et naval</strong>, tout en gardant la possibilité de <strong>rush</strong> quand la partie l’exige.',
      accent: 'aom'
    }
  ];
}
