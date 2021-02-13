import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.page.html',
  styleUrls: ['./testimonial.page.scss'],
})
export class TestimonialPage implements OnInit {

  testimonials=[
    {
      quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae ducimus, enim ab veritatis optio iusto. Mollitia libero eaque asperiores possimus deserunt sapiente molestias eum dolore? Unde, inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae ducimus, enim ab veritatis optio iusto. Mollitia libero eaque asperiores possimus deserunt sapiente molestias eum dolore? Unde, inventore.",
      img:'https://i.pinimg.com/236x/64/d0/7f/64d07f8ada398421944c14f3a85c5717.jpg',
      name:'Isabella',
      city:'Varanasi'
    },
    {
      quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae ducimus, enim ab veritatis optio iusto. Mollitia libero eaque asperiores possimus deserunt sapiente molestias eum dolore? Unde, inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae ducimus, enim ab veritatis optio iusto. Mollitia libero eaque asperiores possimus deserunt sapiente molestias eum dolore? Unde, inventore.",
      img:'https://i.pinimg.com/236x/64/d0/7f/64d07f8ada398421944c14f3a85c5717.jpg',
      name:'Isabella',
      city:'Varanasi'
    },
    {
      quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae ducimus, enim ab veritatis optio iusto. Mollitia libero eaque asperiores possimus deserunt sapiente molestias eum dolore? Unde, inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae ducimus, enim ab veritatis optio iusto. Mollitia libero eaque asperiores possimus deserunt sapiente molestias eum dolore? Unde, inventore.",
      img:'https://i.pinimg.com/236x/64/d0/7f/64d07f8ada398421944c14f3a85c5717.jpg',
      name:'Isabella',
      city:'Varanasi'
    },
    {
      quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae ducimus, enim ab veritatis optio iusto. Mollitia libero eaque asperiores possimus deserunt sapiente molestias eum dolore? Unde, inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae ducimus, enim ab veritatis optio iusto. Mollitia libero eaque asperiores possimus deserunt sapiente molestias eum dolore? Unde, inventore.",
      img:'https://i.pinimg.com/236x/64/d0/7f/64d07f8ada398421944c14f3a85c5717.jpg',
      name:'Isabella',
      city:'Varanasi'
    },
    {
      quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae ducimus, enim ab veritatis optio iusto. Mollitia libero eaque asperiores possimus deserunt sapiente molestias eum dolore? Unde, inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae ducimus, enim ab veritatis optio iusto. Mollitia libero eaque asperiores possimus deserunt sapiente molestias eum dolore? Unde, inventore.",
      img:'https://i.pinimg.com/236x/64/d0/7f/64d07f8ada398421944c14f3a85c5717.jpg',
      name:'Isabella',
      city:'Varanasi'
    },
    {
      quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae ducimus, enim ab veritatis optio iusto. Mollitia libero eaque asperiores possimus deserunt sapiente molestias eum dolore? Unde, inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae ducimus, enim ab veritatis optio iusto. Mollitia libero eaque asperiores possimus deserunt sapiente molestias eum dolore? Unde, inventore.",
      img:'https://i.pinimg.com/236x/64/d0/7f/64d07f8ada398421944c14f3a85c5717.jpg',
      name:'Isabella',
      city:'Varanasi'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
