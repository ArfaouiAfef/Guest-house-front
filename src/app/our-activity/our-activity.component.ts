import { Component } from '@angular/core';

@Component({
  selector: 'app-our-activity',
  templateUrl: './our-activity.component.html',
  styleUrls: ['./our-activity.component.css']
})
export class OurActivityComponent {
  favorites: { [key: number]: boolean } = {};

  ngOnInit() {
    this.cards.forEach(card => {
      this.favorites[card.id] = false;
    });
  }
    cards = [
      {id: 1, title: 'ACTIVITTY NAME', imageUrl: 'assets/images/house2.jpg', description: 'Some text', liked: false},
      {id: 2, title: 'ACTIVITTY NAME', imageUrl: 'assets/images/house3.jpg', description: 'Some text', liked: false},
      {id: 3, title: 'ACTIVITTY NAME', imageUrl: 'assets/images/house4.jpg', description: 'Some text', liked: false},
      {id: 4, title: 'ACTIVITTY NAME', imageUrl: 'assets/images/house5.jpg', description: 'Some text', liked: false}
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
