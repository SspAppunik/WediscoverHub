import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-influencers',
  templateUrl: './our-influencers.component.html',
  styleUrls: ['./our-influencers.component.css']
})
export class OurInfluencersComponent implements OnInit {
  images: any;

  constructor() { }

  ngOnInit(): void {
    this.images = [
      {
        img1 : "../../../../assets/images/top_influencer_1.png",
      },
      {
        img1 : "../../../../assets/images/top_influencer_2.png"
      },
      {
        img1 : "../../../../assets/images/top_influencer_3.png"
      },
      {
        img1 : "../../../../assets/images/top_influencer_4.png"
      },
      {
        img1 : "../../../../assets/images/top_influencer_5.png"
      },
      {
        img1 : "../../../../assets/images/top_influencer_6.png"
      }
    ]
  }

}
