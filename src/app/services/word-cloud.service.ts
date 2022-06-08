import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordCloudService{

  private apiCloud: string = 'https://quickchart.io/wordcloud';

  constructor(private _http: HttpClient) { }

  generateWordCloud(config: any): Observable<Blob>{
    return this._http.post<Blob>(`${this.apiCloud}`, config, {responseType: 'blob' as 'json'});
  }
}