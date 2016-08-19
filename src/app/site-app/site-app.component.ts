import { Component, OnInit } from '@angular/core';
import { Site } from '../site';
import { SiteService } from '../site.service';

@Component({
  //moduleId: module.id,    
  selector: 'app-site-app',
  templateUrl: 'site-app.component.html',
  styleUrls: ['site-app.component.css'],
  providers: [SiteService]
})

export class SiteAppComponent implements OnInit {
  errorMessage: string;
  heroes: Site[];
  hero: Site;

  q = '';
  constructor(private siteService: SiteService) { this.hero = new Site(); }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.siteService.getHeroes()
                     .subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);
  }

  createHero() {
    console.log('oii'+ this.q);
    this.siteService.createHero(this.q)
                       .subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);
  }

 search(site) {
    let windowObjectReference;
    windowObjectReference = window.open( site.searchUrl + this.q );
  }
  
  get sites() {
    return this.siteService.getAllSites();
  }

}
