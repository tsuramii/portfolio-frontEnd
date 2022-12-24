import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Creamos un Observable de tipo BehaviorSubject que retornará un boolean.
  isUserLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // Inyectamos el HTTP Client

  constructor(private http: HttpClient) { }
  // Creamos el método que nos permitirá acceder al obervable y suscribirnos a su valor (True/False).
  public getUserStatus(): Observable<boolean> {
    return this.isUserLogged.asObservable();
  }

  // Creamos el método que permitirá modificar el valor del observable.
  public setUserStatus(value: boolean): void {
    this.isUserLogged.next(value);
  }

  ngOnInit() {
  }
}