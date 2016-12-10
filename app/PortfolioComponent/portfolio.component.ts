import { Component, OnInit } from '@angular/core';

import { PortfolioService } from '../PortfolioService/portfolio.service';

@Component({
  selector: 'portfolio',
  templateUrl: 'app/PortfolioComponent/portfolio.component.html',
  styleUrls: ['app/PortfolioComponent/portfolio.style.css']
})

export class PortfolioComponent implements OnInit {
   categories = new Array;
   isLoading = true;

  constructor(private _portfolioService: PortfolioService) {}

  ngOnInit() {
    this._portfolioService.getCategories().subscribe(res => {
      this.categories = res;
      this.isLoading = false;
    });
  }
}