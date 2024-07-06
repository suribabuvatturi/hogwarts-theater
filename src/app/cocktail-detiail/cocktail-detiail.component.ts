import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CocktailService } from '../cocktail.service';
import { ICocktail } from '../model';

@Component({
  selector: 'app-cocktail-detiail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cocktail-detiail.component.html',
  styleUrl: './cocktail-detiail.component.scss',
})
export class CocktailDetiailComponent implements OnInit {
  cocktailId: string | null;
  cocktailDetails: ICocktail;
  favoriteCocktails: string[];
  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService
  ) {}

  ngOnInit(): void {
    this.favoriteCocktails = this.cocktailService.getFavoriteList();
    this.route.paramMap.subscribe((params) => {
      this.cocktailId = params.get('id');
    });
    if (this.cocktailId) {
      this.cocktailService
        .getCocktailDetail(this.cocktailId)
        .subscribe((resp) => {
          resp.isFavorite = this.favoriteCocktails.includes(
            this.cocktailId ? this.cocktailId : ''
          );
          this.cocktailDetails = resp;
        });
    } else {
      console.error('Invalid ID');
    }
  }

  changeFavirote(cockTailId: string): void {
    if (this.favoriteCocktails.includes(cockTailId)) {
      this.cocktailService.removeFavorite(cockTailId);
    } else {
      this.cocktailService.addFavorite(cockTailId);
    }
    this.favoriteCocktails = this.cocktailService.getFavoriteList();
    this.cocktailDetails.isFavorite =
      this.favoriteCocktails.includes(cockTailId);
  }
}
