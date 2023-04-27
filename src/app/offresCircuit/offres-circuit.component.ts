import { Component } from '@angular/core';

@Component({
  selector: 'app-offres-circuit',
  templateUrl:'./offres-circuit.component.html',
  styleUrls: ['./offres-circuit.component.css']
})
export class OffresCircuitComponent {


  favorites: { [key: number]: boolean } = {};

ngOnInit() {
  this.cards.forEach(card => {
    this.favorites[card.id] = false;
  });
}
  cards = [
    {id: 1, title: 'LEADER NAME', imageUrl: 'assets/images/circuit1.jpg', description: 'Some text', liked: false},
    {id: 2, title: 'LEADER NAME', imageUrl: 'assets/images/circuit2.jpg', description: 'Some text', liked: false},
    {id: 3, title: 'LEADER NAME', imageUrl: 'assets/images/circuit3.png', description: 'Some text', liked: false},
    {id: 4, title: 'LEADER NAME', imageUrl: 'assets/images/circuit4.jpg', description: 'Some text', liked: false}
  ];
  

  toggleFavorite(cardId: number) {
    this.cards.forEach(card => {
      if (card.id === cardId) {
        card.liked = !card.liked;
        this.favorites[cardId] = card.liked;
      }
    });
  }
}
