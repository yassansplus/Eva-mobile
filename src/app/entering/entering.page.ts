import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entering',
  templateUrl: './entering.page.html',
  styleUrls: ['./entering.page.scss'],
})

export class EnteringPage implements OnInit {

  constructor(private router: Router) {}


  ngOnInit() {
  }

  onChangeClick(mess) {
    this.router.navigate(['/' + mess + '/']);
    // console.log('/' + mess + '/');
  }
}
