import { Component } from '@angular/core';
import { Comic } from '../interfaces/comic';
import { XkcdService } from '../services/xkcd.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  comicData?: Comic;
  currentIndex?: number;
  loading: boolean = true;

  constructor(private xkcd: XkcdService) { }
  
  ngOnInit() {
    this.xkcd.getRandomComic().subscribe(
      res => {
        this.comicData = res;
        this.currentIndex = res.num;
        this.loading = false;
        // console.log(res);
      }
    )
  }

  getNext() {
    if (this.currentIndex) {
      this.loading = true;
      this.currentIndex -= 1;
      this.xkcd.getComic(this.currentIndex).subscribe(
        res => {
          this.comicData = res;
          this.loading = false;
        }
      );
    }
    
  }

  getPrev() {
    if (this.currentIndex) {
      this.loading = true;
      this.currentIndex += 1;
      this.xkcd.getComic(this.currentIndex).subscribe(
        res => {
          this.comicData = res;
          this.loading = false;
        }
      );
    }
  }

  getRandom() {
    this.loading = true;
      this.xkcd.getRandomComic().subscribe(
        res => {
          this.comicData = res;
          this.loading = false;
        }
      )
  }

}
