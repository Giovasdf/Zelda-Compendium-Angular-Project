import { Monster } from './../../interface/monster';
import { Component, OnInit } from '@angular/core';
import { CompendiumService } from 'src/app/services/compendium.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  monsters!: Monster[];
  monsterCopy!: Monster[];
  constructor(public serviceCompendium:CompendiumService) {
    this.getData();
    this.monsterCopy = [];
   }



   async getData() {
    (await this.serviceCompendium.getAll()).subscribe((data: any) => {

      this.monsters = data.data.map(({ name, id, category, description, image, common_locations, drops, dlc }: Monster) => {
        return { name, id, category, description, image, common_locations, drops, dlc };
      });

      this.monsterCopy = [...this.monsters]; // Clonar el arreglo original
      console.log("Monsters:", this.monsters);
      console.log("MonsterCopy:", this.monsterCopy);
    });
  }

  filter(e: any) {
    const search: string = e.target.value;
    this.monsters = this.monsterCopy?.filter(({ name }: Monster) => {
      return name.toLowerCase().includes(search.toLowerCase());
    });
  }


}
