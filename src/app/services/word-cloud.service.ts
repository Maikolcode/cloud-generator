import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CloudGeneratorConfiguration } from '../models/cloud.model';

@Injectable({
  providedIn: 'root'
})
export class WordCloudService{

  private apiCloud: string = 'https://quickchart.io/wordcloud';

  constructor(private _http: HttpClient) { }


  /**
  * @description Consume endpoint to generate word cloud
  * @param cloudGeneratorConfiguration Object with configuration for word cloud
  * @returns Blob / .png type
  */

  generateWordCloud(config: CloudGeneratorConfiguration): Observable<Blob>{
    return this._http.post<Blob>(`${this.apiCloud}`, config, {responseType: 'blob' as 'json'});
  }
}