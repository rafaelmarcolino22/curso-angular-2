import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css']
})
export class NewMomentsComponent implements OnInit {

  btnText = 'Compartilhar!';

  constructor() { }

  ngOnInit(): void {
  }

}
