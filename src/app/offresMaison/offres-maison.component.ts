import { Component } from '@angular/core';

@Component({
  selector: 'app-offres-maison',
  templateUrl: './offres-maison.component.html',
  styleUrls: ['./offres-maison.component.css']
})
export class OffresMaisonComponent {

  favorites: { [key: number]: boolean } = {};

  ngOnInit() {
    this.cards.forEach(card => {
      this.favorites[card.id] = false;
    });
  }
  
  cards = [
    {
      id: 1,
      title: 'HOSTEL NAME',
      imageUrl: 'assets/images/house2.jpg',
      liked: false
    },
    {
      id: 2,
      title: 'HOSTEL NAME',
      imageUrl: 'assets/images/house3.jpg',
      liked: false
    },
    {
      id: 3,
      title: 'HOSTEL NAME',
      imageUrl: 'assets/images/house4.jpg',
      liked: false
    },
    {
      id: 4,
      title: 'HOSTEL NAME',
      imageUrl: 'assets/images/house5.jpg',
      liked: false
    },
    {
      id: 5,
      title: 'HOSTEL NAME',
      imageUrl: 'assets/images/house6.jpg',
      liked: false
    }
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
