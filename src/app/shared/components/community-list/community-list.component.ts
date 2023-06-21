import { Component } from '@angular/core';

export interface Comment {
  id: string;
  name: string;
  image: string;
  text: string;
  date: string;
}

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.scss'],
})
export class CommunityListComponent {
  comments: Comment[] = [
    {
      id: 'testimonial1',
      name: 'Emmanuel Border',
      image: 'avatar-1',
      text: 'ShowTrackr is a real gem! I started using it a couple months ago and it completely changed the way how I watch TV shows. I can only recommend it!',
      date: '2023-01-01',
    },
    {
      id: 'testimonial2',
      name: 'Jared Margin',
      image: 'avatar-2',
      text: 'I use ShowTrackr every day, and it’s awesome! I track all of my TV shows in it. :)',
      date: '2023-02-02',
    },
    {
      id: 'testimonial3',
      name: 'Mary Padding',
      image: 'avatar-3',
      text: 'ShowTrackr is a real gem! I started using it a couple months ago and it completely changed the way how I watch TV shows. I can only recommend it!',
      date: '2023-03-03',
    },
    {
      id: 'testimonial4',
      name: 'Susan Inline',
      image: 'avatar-4',
      text: 'I use ShowTrackr every day, and it’s awesome! I track all of my TV shows in it. :)',
      date: '2023-04-04',
    },
    {
      id: 'testimonial5',
      name: 'Charles Grid',
      image: 'avatar-5',
      text: 'ShowTrackr is a real gem! I started using it a couple months ago and it completely changed the way how I watch TV shows. I can only recommend it!',
      date: '2023-05-05',
    },
    {
      id: 'testimonial6',
      name: 'Rebecca Anchor',
      image: 'avatar-6',
      text: 'I use ShowTrackr every day, and it’s awesome! I track all of my TV shows in it. :)',
      date: '2023-06-06',
    },
  ];

  trackById(index: number, value: Comment) {
    return value.id;
  }
}
