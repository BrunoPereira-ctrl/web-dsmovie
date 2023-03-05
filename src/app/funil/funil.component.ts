import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Etapa } from './../../../models/etapa.model';
import { MatTableDataSource } from '@angular/material/table';

import { Component, OnInit, ViewChild } from '@angular/core';

import { default as _rollupMoment, Moment } from 'moment';
import * as _moment from 'moment';

export interface StatusEtapa {
  nomeStatus: string;
  ordem: number;
}

export interface Etapa2 {
  nomeEtapa: string;
  ordem: number;
  statusEtapa: string[];
}

const ELEMENT_DATA: StatusEtapa[] = [
  { nomeStatus: 'Lead Criado', ordem: 1 },
  { nomeStatus: 'Marcado como oportunidade', ordem: 1 },
  { nomeStatus: 'Integração com CRM', ordem: 1 }
 
];

const ELEMENT_DATA2: Etapa2[] = [
  { nomeEtapa: 'Triagem', ordem: 1, statusEtapa:['Lead Criado',' Marcado como oportunidade', ' Integração com CRM'] },
  { nomeEtapa: 'Visita', ordem: 2, statusEtapa:['Visita Agendada',' Não compareceu',' Visitou']},
  { nomeEtapa: 'Venda', ordem: 3, statusEtapa:['Vendido']}
 
];


@Component({
  selector: "app-metas",
  templateUrl: "./metas.component.html",
  styleUrls: ["./metas.component.css"],
  providers: [ ],
})
export class MetasComponent implements OnInit {

  statusColumns: string[] = ['acoes', 'nomeStatus', 'ordem'];
  dataStatus = new MatTableDataSource<StatusEtapa>(ELEMENT_DATA);
  etapaColumns: string[] = ['acoes', 'nomeEtapa', 'ordemEtapa', 'statusEtapa'];
  dataEtapa = new MatTableDataSource<Etapa2>(ELEMENT_DATA2);

  abrirCadastroEtapa: boolean = false;
  abrirEdicaoEtapa: boolean = false;
  ativo: boolean = false;

  constructor(
    private router : Router,
    private authService: AuthService
  ) {}
 
  ngOnInit(): void { }

  voltar(){
    this.router.navigate([`/${this.authService.getUsuarioLogadoUrbing().prefixoGrupo}/cadastro`]);
  }



}
