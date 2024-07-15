import { Component, OnInit } from '@angular/core';
import { MealdbService } from '../services/mealdb.service'; // Ajusta la ruta según tu estructura de carpetas

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.page.html',
  styleUrls: ['./food-list.page.scss'],
})
export class FoodListPage implements OnInit {
  mealCategories: any[] = [];

  constructor(private mealdbService: MealdbService) {}

  ngOnInit() {
    this.loadMealCategories();
  }

  loadMealCategories() {
    this.mealdbService.getMealCategories().subscribe(
      (data: any) => {
        if (data.categories) {
          this.mealCategories = data.categories;
        } else {
          console.error('No se encontraron categorías de comidas en la respuesta API.');
        }
      },
      (error) => {
        console.error('Error al cargar categorías de comidas:', error);
      }
    );
  }
}
