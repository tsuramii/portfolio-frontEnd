import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

// Utilizando el modulo HTTPHeaders, generamos una variable que nos permitirá indicar que el archivo que estamos enviando es un JSON. Esto es necesario para los POST/PUT/PATCH en json-server.
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  // Creamos un observable que retornará un boolean.
  private refresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  
    // Inyectamos el httpclient
    constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {}

  // Creamos el método que nos permitirá acceder al obervable y suscribirnos a su valor (True/False).
  public getRefresh(): Observable<boolean> {
    return this.refresh.asObservable();
  }

  // Creamos el método que permitirá modificar el valor del observable.
  public setRefresh(value: boolean): void {
    this.refresh.next(value);
  }

  // Creamos el método que nos retornará los datos desde la API (GET).
  getData(url: string): Observable<any> {
    return this.http.get(url);
  }

  // Creamos el método para actualizar elementos (PUT).
  updateData(url: string, data: any): Observable<any> {
    return this.http.put(url, data);
  }

  // Creamos el método para realizar envios de información (POST).
  createData(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }

  // Creamos el método para eliminar información (DELETE).
  deleteData(url: string, data: any): Observable<any> {
    return this.http.delete(url, data);
  }
}