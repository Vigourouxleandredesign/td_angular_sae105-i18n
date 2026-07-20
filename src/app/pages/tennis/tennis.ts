import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tennis',
  imports: [RouterLink],
  templateUrl: './tennis.html',
  styleUrl: './tennis.css'
})
export class Tennis {
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
