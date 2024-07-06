import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailDetiailComponent } from './cocktail-detiail.component';

describe('CocktailDetiailComponent', () => {
  let component: CocktailDetiailComponent;
  let fixture: ComponentFixture<CocktailDetiailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailDetiailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktailDetiailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
