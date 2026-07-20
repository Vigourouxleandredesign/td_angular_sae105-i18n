import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aom',
  imports: [RouterLink],
  templateUrl: './aom.html',
  styleUrl: './aom.css'
})
export class Aom {
  readonly gods = [
    {
      name: 'Hadès',
      pantheon: 'Grecs',
      focus: 'Pression et unités mythiques',
      image: '/images/aom/Hades_aom.webp',
      imageAlt: 'Portrait du dieu Hadès — Age of Mythology (version originale)',
      description:
        'Un de mes dieux préférés côté grec. J’aime l’idée d’une civilisation capable de basculer vers une <strong>pression</strong> sérieuse, avec des options mythiques bien senties quand la partie s’emballe.',
      bonus: '<strong>Point fort :</strong> style agressif et late game mythique'
    },
    {
      name: 'Thor',
      pantheon: 'Nordiques',
      focus: 'Bonus et efficacité',
      image: '/images/aom/Thor_aom.webp',
      imageAlt: 'Portrait du dieu Thor — Age of Mythology (version originale)',
      description:
        'Thor m’intéresse surtout pour ses <strong>bonus</strong>. Côté nordique, j’apprécie cette manière de construire un avantage progressif, idéale pour un jeu solide sans forcément all-iner dès les premières minutes.',
      bonus: '<strong>Point fort :</strong> bonus économiques et technologiques'
    },
    {
      name: 'Éco et naval',
      pantheon: 'Style de jeu',
      focus: 'Macro et contrôle de map',
      image: '/images/aom/poseidon.jpg',
      imageAlt: 'Référence mythologique liée à la mer et au contrôle naval',
      description:
        'Mon style de base repose sur l’<strong>économie</strong> et le <strong>naval</strong>. Je préfère développer, contrôler la map et m’adapter, tout en gardant la possibilité de passer en rush si la game le demande.',
      bonus: '<strong>Point fort :</strong> flexible selon la partie'
    }
  ];
}
