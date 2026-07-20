import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fpv',
  imports: [RouterLink],
  templateUrl: './fpv.html',
  styleUrl: './fpv.css'
})
export class Fpv {
  readonly drones = [
    {
      name: 'Loki 5"',
      type: 'Course et freestyle',
      usage: 'Outdoor',
      image: '/images/fpv/LokiX3.webp',
      imageAlt: 'Drone FPV Loki X3 5 pouces',
      description:
        'Mon drone <strong>5 pouces</strong> de référence pour la course et les sessions outdoor. Léger et nerveux, c’est celui avec lequel on sent vraiment la <strong>vitesse</strong> et les changements de trajectoire.',
      traits: ['5 pouces', 'Rapide', 'Agile']
    },
    {
      name: 'Indoor 5" caréné',
      type: 'Vol indoor',
      usage: 'Indoor',
      image: '/images/fpv/dronecarene.webp',
      imageAlt: 'Drone FPV indoor 5 pouces caréné',
      description:
        'Une version <strong>carénée</strong> pensée pour voler en intérieur. Moins exposée aux chocs contre les obstacles, elle permet de s’entraîner aux trajectoires serrées sans casser tout le setup à chaque erreur.',
      traits: ['Caréné', 'Indoor', 'Entraînement']
    },
    {
      name: 'Vortex',
      type: 'Stable et renforcé',
      usage: 'Outdoor et impacts',
      image: '/images/fpv/Vortex.webp',
      imageAlt: 'Drone FPV Vortex renforcé',
      description:
        'Plus gros et plus stable, ce drone est surtout <strong>renforcé</strong> pour encaisser les impacts. Il convient bien quand on veut pousser un peu plus loin sans stresser à chaque atterrissage raté.',
      traits: ['Renforcé', 'Stable', 'Solide']
    }
  ];
}
