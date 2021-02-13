import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  blog:any;

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    
    
  }
  ngAfterViewInit() {
    this.route.queryParams.subscribe((data) => {
      this.blog = data.data;
      console.log(this.blog)
    });
    
  }

}
