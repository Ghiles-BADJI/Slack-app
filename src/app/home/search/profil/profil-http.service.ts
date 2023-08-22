import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ProfilDto } from './profil-dto';

@Injectable({
  providedIn: 'root'
})
export class ProfilHttpService {

  constructor(private readonly http: HttpClient) { }

  getUserById(id: number): Observable<ProfilDto> {
    return this.http.get<ProfilDto>(`${environment.apiUrl}/user/${id}`);
  }

  updateProfil(payload: ProfilDto): Observable<ProfilDto> {
    let url = `${environment.apiUrl}/user/updateProfil`;
    console.log("Url", url)
    return this.http.put<ProfilDto>(url, payload);
  }

  
}
