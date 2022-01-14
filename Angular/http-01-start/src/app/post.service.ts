import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Post} from './post.model';
import {catchError, map, tap} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
  // error = new Subject<string>();
  constructor(private http: HttpClient) {
  }

  createdAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content}
    return this.http.post<{ name: string }>('https://angularlesson-6086d-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData, {
      observe: 'response',
    })
    // .subscribe(
    //   responseData => {
    //
    //   }, error => {
    //     this.error.next(error.message)
    //   }
    // )
  }

  deletePosts() {
    return this.http.delete('https://angularlesson-6086d-default-rtdb.europe-west1.firebasedatabase.app/posts.json', {
      observe: 'events',
      responseType: 'text'
    }).pipe(
      tap(event => {
        console.log(event);
        if (event.type == HttpEventType.Sent){
          // do something
        }
        if (event.type === HttpEventType.Response){
          console.log(event.body)
        }
      })
    )
  }

  fetchPosts() {
    return this.http.get<{ [key: string]: Post }>('https://angularlesson-6086d-default-rtdb.europe-west1.firebasedatabase.app/posts.json', {
      headers: new HttpHeaders({
        'Custom-Header': 'Hello'
      }),
      params: new HttpParams().set('print', 'pretty')
    })
      .pipe(
        map(
          responseData => {
            const postsArray: Post[] = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                postsArray.push({id: key, ...responseData[key]})
              }
            }

            return postsArray;
          }
        ),
        catchError(errorRes => {
          return throwError(errorRes)
        })
      );
  }
}
