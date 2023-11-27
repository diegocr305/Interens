import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LUsuario } from '../models/lUsuario';
import { Observable, catchError, map } from 'rxjs';
import { userLogin } from '../models/userlogin';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL_SUPEBASE = 'https://svtnetyosxalwdycusxk.supabase.co/rest/v1/';

  constructor(private _http: HttpClient) { }

  supebaseheads = new HttpHeaders()
  .set ('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2dG5ldHlvc3hhbHdkeWN1c3hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxMjE1OTQsImV4cCI6MjAxNDY5NzU5NH0.tk2Chfsdyx_U7B_65jdjt40mJ1XlfKM1L3rqPNkz5Bk')


    // Método para registrar un nuevo usuario
    registerUser(user: LUsuario): Observable<string | any> {
      return this._http.post<any>(this.URL_SUPEBASE + "usuarios", user, { headers: this.supebaseheads }).pipe(
        map((user) => {
          console.log("Map", user)
          return user
        }), catchError((err) => {
          console.log(err)
          return err;
        })
      )
    }

    // Obtener todos los usuarios
    getLogin(UserLogin: userLogin): Observable<string | any> {
      return this._http.get<any>(this.URL_SUPEBASE + "usuarios?email=eq." + UserLogin.usuario + "&password=eq." + UserLogin.password, { headers: this.supebaseheads }).pipe(
        map((user) => {
          console.log("Map", user[0])
          return user[0]
        }), catchError((err) => {
          console.log(err)
          return err;
        })
      )
    }

    // Registrar un usuario
  
}
