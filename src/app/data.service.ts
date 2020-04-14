import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public baseUrl: string = 'https://localhost:5001';

  constructor(
    private http: HttpClient
  ) { }

  public composeHeaders(token) {
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return headers;
    } else {
      return null;
    }
  }

  public getTodayTodos(token) {
    return this.http.get(`${this.baseUrl}/v1/todo/undone/today`, { headers: this.composeHeaders(token) });
  }

  public getTomorrowTodos(token) {
    return this.http.get(`${this.baseUrl}/v1/todo/undone/tomorrow`, { headers: this.composeHeaders(token) });
  }

  public getAllTodos(token) {
    return this.http.get(`${this.baseUrl}/v1/todo`, { headers: this.composeHeaders(token) });
  }

  public postTodo(data, token) {
    return this.http.post(`${this.baseUrl}/v1/todo`, data, { headers: this.composeHeaders(token) });
  }

  public markAsDone(data, token) {
    return this.http.put(`${this.baseUrl}/v1/todo/mark-as-done`, data, { headers: this.composeHeaders(token) });
  }
}
