import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tennis',
  imports: [RouterLink],
  templateUrl: './tennis.html',
  styleUrl: './tennis.css'
})
export class Tennis {
  readonly gallery = [
    {
      src: '/images/tennis/terre-battue.jpg',
      alt: 'Court de tennis en terre battue',
      caption: 'Terre battue — la surface de mes meilleurs souvenirs'
    },
    {
      src: '/images/tennis/raquette.jpg',
      alt: 'Raquette et balle de tennis',
      caption: 'Raquette et placement plutôt que la force brute'
    },
    {
      src: '/images/tennis/court.jpg',
      alt: 'Joueuse en action sur terre battue, ambiance compétition type Roland-Garros',
      caption: 'Compétition sur terre battue — ambiance Roland-Garros'
    }
  ];

  readonly players = [
    {
      name: 'Rafael Nadal',
      period: 'Premier modèle',
      surface: 'Terre battue',
      why: 'Le premier joueur que j’ai vraiment admiré. Sa <strong>combativité</strong> et sa domination sur terre battue ont clairement marqué ma façon de voir le jeu.'
    },
    {
      name: 'Gaël Monfils',
      period: 'Inspiration française',
      surface: 'Toutes surfaces',
      why: 'Le spectacle, l’athlétisme et les points improbables font de Monfils une référence. Il incarne le <strong>fun</strong> et l’<strong>intensité</strong>, avec un style très personnel.'
    },
    {
      name: 'Carlos Alcaraz',
      period: "Aujourd'hui",
      surface: 'Polyvalent',
      why: 'Il représente la génération actuelle. <strong>Polyvalent</strong>, agressif et créatif, il incarne bien le tennis moderne que j’aime regarder maintenant.'
    }
  ];
}
