import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICocktail } from './model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor(private http: HttpClient) {}

  getCocktailList(): Observable<ICocktail[]> {
    return this.http.get<ICocktail[]>('cockails');
  }
  getCocktailDetail(id: string): Observable<ICocktail> {
    return this.http.get<ICocktail>(`cockails/${id}`);
  }

  getFavoriteList() {
    const favIdStr = localStorage.getItem('favCocktails');
    return favIdStr ? JSON.parse(favIdStr) : [];
  }

  addFavorite(id: string) {
    const favorites = this.getFavoriteList();
    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem('favCocktails', JSON.stringify(favorites));
    }
  }

  removeFavorite(id: string) {
    const favoritesData = this.getFavoriteList();
    const favorites = favoritesData.filter(
      (favoriteId: string) => favoriteId !== id
    );
    localStorage.setItem('favCocktails', JSON.stringify(favorites));
  }
}
