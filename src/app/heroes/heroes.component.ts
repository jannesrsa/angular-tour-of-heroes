import { Observable } from 'rxjs';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes$ = this.heroService.getHeroes();
  }
}
