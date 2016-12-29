import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Observable }                      from 'rxjs/Observable';

@Component({
  selector: 'contact',
  templateUrl: 'app/ContactComponent/contact.component.html',
  // styleUrls: ['app/ContactComponent/contact.style.css']
})

export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('Submitted');
  }
}