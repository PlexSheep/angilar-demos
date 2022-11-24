import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes = HEROES;    
    selectedHero?: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    deselectHero(): void {
        this.selectedHero = undefined;
    }
    debugStr?: string;
    myHero: Hero = {
        id: 11,
        name: 'Windstorm'
    };
    debug(): void {
        let newHero: Hero = { id: this.getRandomInt(50, 999) , name: this.makeid(10) };
        this.heroes[this.heroes.length] = newHero; 
    }
    // TODO learn angular forms, idiot
    newHero(name: string) : void {
        let newHero: Hero = { id:  this.heroes[this.heroes.length-1].id+1, name: name };
        this.heroes[this.heroes.length] = newHero; 
    }
    constructor() { }

    ngOnInit(): void {
    }

    getRandomInt(min: number, max: number) : number{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    makeid(length: number) : string {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
