import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../model/article.model';

@Injectable()
export class ArticleService {

constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(`${environment.api_url}/articles`)
  }

  getById(articleId: string): Observable<Article>{
    return this.httpClient.get<Article>(`${environment.api_url}/articles/${articleId}`)
  }
}
