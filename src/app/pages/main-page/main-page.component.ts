import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/interface/monster';
import { CompendiumService } from 'src/app/services/compendium.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  monsters: Monster[] | undefined;
  monsterCopy: Monster[] | undefined;
  constructor(public serviceCompendium:CompendiumService) {
    this.getData();

   }


  filter(e:any){
    const search:string = e.target.value;
  }

  async getData(){
    (await this.serviceCompendium.getAll()).subscribe((data:any)=>{
      console.table(data.data);

      this.monsters = data.data.map(({name,id,category,description,image,common_locations,drops,dlc}:any)=>{
        return {name,id,category,description,image,common_locations,drops,dlc};
      })

      this.monsterCopy = this.monsters;
    })
  }

}
