import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gamers Website';

  reviewerform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    yearsPlaying: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    favorite: new FormControl('', [Validators.required, Validators.minLength(3)]),
    previously: new FormControl('', Validators.required),
    list: new FormControl('', Validators.required),
    writing: new FormControl('', Validators.required)

  })
}
