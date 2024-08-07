import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
})
export class ExampleComponent implements OnInit {
  title = 'Example Component';
  userList = [];
  userData: any;
  showDetails = false;
  errorMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (data: any) => {
        this.userList = data;
      },
      (error) => {
        this.errorMessage = 'An error occurred while fetching data';
        console.error(error);
      },
    );
  }

  showUserDetails(userId: number) {
    this.http.get('https://jsonplaceholder.typicode.com/users/' + userId).subscribe(
      (data: any) => {
        this.userData = data;
        this.showDetails = true;
      },
      (error) => {
        this.errorMessage = 'An error occurred while fetching user details';
        console.error(error);
      },
    );
  }

  hideUserDetails() {
    this.showDetails = false;
    this.userData = null;
  }
}
