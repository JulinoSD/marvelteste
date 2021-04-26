import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonagensApiService } from '../../shared/personagens-api.service';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {

  constructor( private personagens: PersonagensApiService) { };
  getCharacters!: Observable<any>;
  getStoriesChar!: Observable<any>;

  ngOnInit(): void {
    this.agrupandoPersonagens();
  }

  agrupandoPersonagens (){
    this.getCharacters = this.personagens.getAllCharacters()
  }

  agrupandoStories() {
    this.getCharacters = this.personagens.getCharacterStories()
  }

}
