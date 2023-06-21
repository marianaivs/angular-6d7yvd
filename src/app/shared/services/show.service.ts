import { Injectable } from '@angular/core';
import { Show } from '../../core/interfaces/show.interface';

@Injectable({ providedIn: 'root' })
export class ShowService {
  getAllShows(): Show[] {
    return [
      {
        id: 'show1',
        name: 'Black Mirror',
        image: 'poster-black-mirror',
        video: '',
      },
      {
        id: 'show2',
        name: 'House of Cards',
        image: 'poster-house-of-cards',
        video: '',
      },
      {
        id: 'show3',
        name: 'Westworld',
        image: 'poster-westworld',
        video: '',
      },
      {
        id: 'show4',
        name: 'Stranger Things',
        image: 'poster-stranger-things',
        video: '',
      },
      {
        id: 'show5',
        name: 'Game of Thrones',
        image: 'poster-game-of-thrones',
        video: '',
      },
      {
        id: 'show6',
        name: 'Flash',
        image: 'poster-flash',
        video: '',
      },
      {
        id: 'show7',
        name: 'How To Get Away With Murder',
        image: 'poster-how-to-get-away-with-murder',
        video: '',
      },
    ];
  }
  constructor() {}
}
