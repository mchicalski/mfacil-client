import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS, Response } from '@angular/http'

import {Site} from './site';

import { Observable }     from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class SiteService {


  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  sites: Site[] = [];
  private url = 'http://localhost:3000/api/sites'
  constructor(private http: Http) { 
        this.sites.push({
            title: 'DuckDuckGo', 
            icon: 'https://duckduckgo.com/favicon.ico', 
            searchUrl: 'https://duckduckgo.com/?q='});
        this.sites.push({ 
            title: 'google', 
            icon: 'https://www.google.com/favicon.ico', 
            searchUrl: 'https://www.google.com.br/#q='});
        this.sites.push({ 
            title: 'youtube', 
            icon: 'https://www.youtube.com/favicon.ico',
            searchUrl: 'https://www.youtube.com/results?search_query='});   
  }

  // Simulate GET
  getAllSites(): Site[] {
    return this.sites;
  }
  getHeroes(): Observable<Site[]>{
    return this.http.get(this.url)
    .map(res => res.json());
  }
}
