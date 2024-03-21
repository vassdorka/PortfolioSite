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
  siteIndexes: string[] = [".main-container",".algomem-container",".todo-maker-container",".robotic-container",".about-container"]

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
    let sectionOne: any = document.querySelector(this.siteIndexes[0]);
    let sectionTwo: any = document.querySelector(this.siteIndexes[1]);
    let sectionThree: any = document.querySelector(this.siteIndexes[2]);
    let sectionFour: any = document.querySelector(this.siteIndexes[3]);
    let sectionFive: any = document.querySelector(this.siteIndexes[4]);
    if(window.pageYOffset < sectionTwo?.offsetTop - 150) { 
      this.activeSite = 0;
    }
    console.log(window.pageYOffset)
    if(window.pageYOffset > sectionTwo?.offsetTop - 150 && window.pageYOffset < sectionThree?.offsetTop - 150) {
      this.activeSite = 1;
    }
    if(window.pageYOffset > sectionThree?.offsetTop - 150 && window.pageYOffset < sectionFour?.offsetTop - 150) {
      this.activeSite = 2;
    }
    if(window.pageYOffset > sectionFour?.offsetTop - 150 && window.pageYOffset < sectionFive?.offsetTop - 150) {
      this.activeSite = 3;
    }
    if(window.pageYOffset > sectionFive?.offsetTop - 150) {
      this.activeSite = 4;
    }
  }

  scrollToSection(siteName: string) {
    let selectedSection: any = document.querySelector(siteName);
    window.scrollTo({
      top: selectedSection?.pageYOffset,
      left: 0,
      behavior: "smooth",
    })
  }
}
