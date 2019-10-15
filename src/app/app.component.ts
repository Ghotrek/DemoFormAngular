import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Demo Form';
  statusList = ['Stable', 'Critical', 'Finisched'];
  demoFormControl: FormGroup;

  constructor() {}

  ngOnInit() {
    this.demoFormControl = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, CustomValidators]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.demoFormControl);
  }
}
