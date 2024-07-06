import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { ICocktail } from '../model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [CocktailService],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
})
export class CocktailListComponent implements OnInit {
  cockTailDispalyList: ICocktail[];
  cockTailOriginalList: ICocktail[];
  favoriteCocktails: string[];
  searchCocktail: string;
  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.favoriteCocktails = this.cocktailService.getFavoriteList();
    this.getCockTailsList();
  }

  getCockTailsList(): void {
    this.cocktailService.getCocktailList().subscribe((resp) => {
      if (this.favoriteCocktails.length) {
        resp.filter((el) => {
          el.isFavorite = this.favoriteCocktails.includes(el.id);
        });
      }
      this.cockTailOriginalList = this.cockTailDispalyList = [...resp];
    });
  }

  changeFavirote(cockTailId: string): void {
    if (this.favoriteCocktails.includes(cockTailId)) {
      this.cocktailService.removeFavorite(cockTailId);
    } else {
      this.cocktailService.addFavorite(cockTailId);
    }
    this.favoriteCocktails = this.cocktailService.getFavoriteList();
    this.cockTailOriginalList.filter((el) => {
      el.isFavorite = this.favoriteCocktails.includes(el.id);
    });
    this.cockTailDispalyList = [...this.cockTailOriginalList];
  }

  searchData(): void {
    if (this.searchCocktail) {
      this.cockTailDispalyList = this.cockTailOriginalList.filter((cocktail) =>
        cocktail.name.toLowerCase().includes(this.searchCocktail.toLowerCase())
      );
    } else {
      this.cockTailDispalyList = [...this.cockTailOriginalList];
    }
  }
}
