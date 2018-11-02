import { Injectable } from '@angular/core';
import { ICompte } from '../domain/icompte';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {
  URL = 'http://localhost:55317/api/comptes';
  comptes: ICompte[] ;
  //  [
  //     {'numero': 'SvcFake_01', 'proprietaire': 'PROPR_1', 'solde': 1000},
  //     {'numero': 'SvcFake_02', 'proprietaire': 'PROPR_2', 'solde': 3000},
  //     {'numero': 'SvcFake_03', 'proprietaire': 'PROPR_3', 'solde': 8000}
  //   ];
  constructor(private _http: HttpClient) { }

  getAllComptes(): Observable<ICompte[]> {
     return this._http.get<ICompte[]>(this.URL);
  }
}
