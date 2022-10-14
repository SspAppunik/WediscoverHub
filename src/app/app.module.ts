import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { WediscoverhubBannerComponent } from './home/header/wediscoverhub-banner/wediscoverhub-banner.component';
import { HomeComponent } from './home/home.component';
import { DiscoverTabComponent } from './home/main/discover-tab/discover-tab.component';
import { DiscoverThingComponent } from './home/main/discover-thing/discover-thing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './home/footer/footer.component';
import { SearchComponent } from './home/main/search/search.component';
import { CardComponent } from './home/main/card/card.component';
import { SwiperModule } from "swiper/angular";
import { WediscoverComponent } from './wediscover/wediscover.component';
import { DiscoverBannerComponent } from './wediscover/discover-banner/discover-banner.component';
import { NavbarComponent } from './home/header/navbar/navbar.component';
import { OurInfluencersComponent } from './wediscover/our-influencers/our-influencers.component';
import { DiscInfluencerComponent } from './wediscover/disc-influencer/disc-influencer.component'; 
import { WemeetComponent } from './wemeet/wemeet.component';
import { WemeetBannerComponent } from './wemeet/wemeet-banner/wemeet-banner.component';
import { WemeetJoinComponent } from './wemeet/wemeet-join/wemeet-join.component';
import { InfluencerMeetingComponent } from './wemeet/influencer-meeting/influencer-meeting.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    WediscoverhubBannerComponent,
    DiscoverThingComponent,
    DiscoverTabComponent,
    CardComponent,
    WemeetComponent,
    WemeetBannerComponent,
    WemeetJoinComponent,
    InfluencerMeetingComponent,
    SearchComponent,
    FooterComponent,
    WediscoverComponent,
    DiscoverBannerComponent,
    DiscInfluencerComponent,
    OurInfluencersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
