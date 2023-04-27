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
      {id: 1, title: 'ACTIVITTY NAME', imageUrl: 'assets/images/activity1.jpg', description: 'Some text', liked: false},
      {id: 2, title: 'ACTIVITTY NAME', imageUrl: 'assets/images/activity2.jpg', description: 'Some text', liked: false},
      {id: 3, title: 'ACTIVITTY NAME', imageUrl: 'assets/images/activity3.jpg', description: 'Some text', liked: false},
      {id: 4, title: 'ACTIVITTY NAME', imageUrl: 'assets/images/activity4.jpg', description: 'Some text', liked: false}
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
