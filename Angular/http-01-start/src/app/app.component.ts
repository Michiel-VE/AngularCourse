import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model';
import {PostService} from './post.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  @ViewChild('postForm') postForm: NgForm;
  private errorSub: Subscription

  constructor(private http: HttpClient, private postService: PostService) {
  }

  ngOnInit() {
    // this.errorSub = this.postService.error.subscribe(errorMessage => {
    //   this.error = errorMessage;
    // })

    this.isFetching = true;
    this.postService.fetchPosts().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      }, error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  ngOnDestroy() {
    //this.errorSub.unsubscribe();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.isFetching = true;

    this.postService.createdAndStorePost(postData.title, postData.content).subscribe(
      () => {
        this.onFetchPosts();
      }, error => {
        this.error = error.message
      }
    );
    //console.log(postData);
    this.postForm.reset();
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      }, error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );

  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(
      () => {
        this.loadedPosts = [];
      }
    )
  }

  onHandleError(){
    this.error = null;
  }

}
