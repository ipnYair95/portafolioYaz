import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = "https://formspree.io/f/mzbykwvz";

  constructor( private http: HttpClient ) { }

  public enviarMensaje( mensaje: Mensaje ) : Observable<any> {

    return this.http.post( this.url, mensaje ).pipe(
      map(resp => {
        //console.log(resp);
        return of(true);
      }),
      catchError(err => {
        //console.log(err);
        return of(false)
      })

    );

  }
}




export interface Mensaje {
  correo: string;
  asunto: string;
  mensaje: string;
}
