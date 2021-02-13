import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  rightSelected: boolean = false;
  left = 'segment left-selected left-seg';
  right = 'segment right-seg';
  gallery=[
    {src:"https://i.pinimg.com/236x/22/85/91/22859160e6b21062d9da43897e4215b3.jpg"},
    {src:"https://i.pinimg.com/236x/5f/df/a6/5fdfa68617dc3093336e8f5c2d75f402.jpg"},
    {src:"https://i.pinimg.com/236x/78/d3/87/78d3873d88736d48987d145791eecf8c.jpg"},
    {src:"https://i.pinimg.com/236x/9b/7f/0d/9b7f0d8eda93b2d7e0430ce5d89a99ca.jpg"},
    {src:"https://i.pinimg.com/236x/e0/b8/15/e0b8156bcf3aa5fbd9c2c21d44c4684a.jpg"},
    {src:"https://i.pinimg.com/236x/50/9c/23/509c231e2313f24430eb34a69a01ef47.jpg"},
    {src:"https://i.pinimg.com/236x/c0/ad/61/c0ad615ff936b94ea0cdac985ee6401d.jpg"},
    {src:"https://i.pinimg.com/236x/5f/df/a6/5fdfa68617dc3093336e8f5c2d75f402.jpg"},
    {src:"https://i.pinimg.com/236x/9b/7f/0d/9b7f0d8eda93b2d7e0430ce5d89a99ca.jpg"},
    {src:"https://i.pinimg.com/236x/22/85/91/22859160e6b21062d9da43897e4215b3.jpg"},
    {src:"https://i.pinimg.com/236x/5f/df/a6/5fdfa68617dc3093336e8f5c2d75f402.jpg"},
    {src:"https://i.pinimg.com/236x/78/d3/87/78d3873d88736d48987d145791eecf8c.jpg"},
    {src:"https://i.pinimg.com/236x/50/9c/23/509c231e2313f24430eb34a69a01ef47.jpg"},
    {src:"https://i.pinimg.com/236x/c0/ad/61/c0ad615ff936b94ea0cdac985ee6401d.jpg"},
    {src:"https://i.pinimg.com/236x/5f/df/a6/5fdfa68617dc3093336e8f5c2d75f402.jpg"},
    {src:"https://i.pinimg.com/236x/5f/df/a6/5fdfa68617dc3093336e8f5c2d75f402.jpg"},
    {src:"https://i.pinimg.com/236x/9b/7f/0d/9b7f0d8eda93b2d7e0430ce5d89a99ca.jpg"},
    {src:"https://i.pinimg.com/236x/22/85/91/22859160e6b21062d9da43897e4215b3.jpg"},   
    
  ]
  video=[
   {src:'https://www.youtube.com/embed/6JxAzPi4Q8A'},
   {src:'https://www.youtube.com/embed/6JxAzPi4Q8A'},
   {src:'https://www.youtube.com/embed/6JxAzPi4Q8A'},
   {src:'https://www.youtube.com/embed/6JxAzPi4Q8A'},
   {src:'https://www.youtube.com/embed/6JxAzPi4Q8A'},
   {src:'https://www.youtube.com/embed/6JxAzPi4Q8A'},
   {src:'https://www.youtube.com/embed/6JxAzPi4Q8A'},
     ]

  constructor( public sanitizer:DomSanitizer) { }

  ngOnInit() {
  }

  onLeftSegClick() {
    this.left = 'segment left-selected left-seg';
    this.right = 'segment right-seg';
    this.rightSelected = false;
    
  }
  onRightSegClick() {
    this.left = 'segment left-seg';
    this.right = 'segment right-selected right-seg';
    this.rightSelected = true;
  
  }
  sanitizeUrl(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
