import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio-app';
  activeSite: number = 0;
  siteIndexes: number[] = [0,1,2,3,4]

  constructor() {}

  ngAfterViewInit(): void {
    let worksContainer = document.querySelector('.works');
    let scrollToGif = document.querySelector('.algomem-4');
    let scrollBackGif = document.querySelector('.algomem-3');
    scrollToGif?.addEventListener("mouseenter", (e) => {
      worksContainer?.scrollTo({
        top: worksContainer?.clientHeight,
        left: 800,
        behavior: "smooth",
      })
    });
    scrollBackGif?.addEventListener("mouseenter", (e) => {
      worksContainer?.scrollTo({
        top: worksContainer?.clientHeight,
        left: 0,
        behavior: "smooth",
      })
    });

    document.addEventListener('scroll', () => {
      this.keepTrack();
    })
  }

  keepTrack() {
    let sectionOne: any = document.querySelector(".main-container");
    let sectionTwo: any = document.querySelector(".algomem-container");
    let sectionThree: any = document.querySelector(".todo-maker-container");
    let sectionFour: any = document.querySelector(".robotic-container");
    console.log(sectionOne?.offsetTop, sectionTwo?.offsetTop, sectionThree?.offsetTop, sectionFour?.offsetTop)
    if(window.pageYOffset < sectionTwo?.offsetTop - 100) { 
      this.activeSite = 0;
    }
    console.log(window.pageYOffset)
    if(window.pageYOffset > sectionTwo?.offsetTop - 100 && window.pageYOffset < sectionThree?.offsetTop - 100) {
      this.activeSite = 1;
    }
    if(window.pageYOffset > sectionThree?.offsetTop - 100 && window.pageYOffset < sectionFour?.offsetTop - 100) {
      this.activeSite = 2;
    }
    if(window.pageYOffset > sectionFour?.offsetTop - 100) {
      this.activeSite = 3;
      console.log("bingo")
    }
  }
}
