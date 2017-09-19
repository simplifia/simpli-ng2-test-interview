import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {Pokemon} from '../../shared/pokemon/pokemon';

/**
 * resolve component
 */
@Component({
  moduleId: module.id,
  selector: 'sd-resolve',
  templateUrl: 'resolve.component.html',
  styleUrls: ['resolve.component.css'],
})
export class ResolveComponent implements OnInit {

  pokemons: Pokemon[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: {pokemons: {results: Pokemon[]}}) => {
      this.pokemons = data.pokemons.results;
    });
  }

}
