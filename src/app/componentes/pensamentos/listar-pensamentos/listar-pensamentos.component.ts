import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamento = [
    {
      conteudo: 'Texto 1',
      autoria: 'Memilia',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Texto 2',
      autoria: 'Memilia',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled to make a type specimen book.when an unknown printer took a galley of type and scrambled to make a type specimen book',
      autoria: 'Memilia',
      modelo: 'modelo1'
    } 
  ];
listaPensamentos: any;
  constructor() { }

  ngOnInit(): void {

  }
}
