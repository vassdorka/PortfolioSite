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
    let worksContainer = document.querySelector('.gifs');
    let next = document.querySelector('.next img ');
    let back = document.querySelector('.back img ');
    next?.addEventListener("click", (e) => {
      worksContainer?.scrollTo({
        top: worksContainer?.clientHeight,
        left: 1000,
        behavior: "smooth",
      });
      (back as HTMLElement).style.display = 'block';
      (next as HTMLElement).style.display = 'none';
    });
    back?.addEventListener("click", (e) => {
      worksContainer?.scrollTo({
        top: worksContainer?.clientHeight,
        left: 0,
        behavior: "smooth",
      });
      (back as HTMLElement).style.display = 'none';
      (next as HTMLElement).style.display = 'block';
    });

    document.addEventListener('scroll', () => {
      this.keepTrack();
    })
  }

  keepTrack() {
    let sectionTwo: any = document.querySelector(".works-header");
    let sectionThree: any = document.querySelector(this.siteIndexes[2]);
    let sectionFour: any = document.querySelector(this.siteIndexes[3]);
    let sectionFive: any = document.querySelector(this.siteIndexes[4]);
    if(window.pageYOffset < sectionTwo?.offsetTop - 150) { 
      this.activeSite = 0;
      this.titleAnimateOut();
    }
    console.log("window:", window.pageYOffset)
    console.log("section:", sectionTwo?.offsetTop - 200)
    if(window.pageYOffset > sectionTwo?.offsetTop - 200 && window.pageYOffset < sectionThree?.offsetTop - 200) {
      this.activeSite = 1;
      this.titleAnimateIn();
    }
    if(window.pageYOffset > sectionThree?.offsetTop - 150 && window.pageYOffset < sectionFour?.offsetTop - 150) {
      this.activeSite = 2;
      this.titleAnimateOut();
    }
    if(window.pageYOffset > sectionFour?.offsetTop - 150 && window.pageYOffset < sectionFive?.offsetTop - 150) {
      this.activeSite = 3;
      this.titleAnimateOut();
    }
    if(window.pageYOffset > sectionFive?.offsetTop - 200) {
      this.activeSite = 4;
      this.titleAnimateIn();
    }
  }

  titleAnimateIn() {
    let animate1 = document.querySelectorAll(".animate-1");
    animate1.forEach((el) => {
      (el as HTMLElement).style.transform = 'scaleX(1)';
      (el as HTMLElement).style.transition = '1s';
    })
    let animate2 = document.querySelectorAll(".animate-2");
    animate2.forEach((el) => {
      (el as HTMLElement).style.transform = 'scaleX(1)';
      (el as HTMLElement).style.transition = '1s';
      (el as HTMLElement).style.transitionDelay = '0.1s';
    })
    let animate3 = document.querySelectorAll(".animate-3");
    animate3.forEach((el) => {
      (el as HTMLElement).style.transform = 'scaleX(1)';
      (el as HTMLElement).style.transition = '1s';
      (el as HTMLElement).style.transitionDelay = '0.2s';
    })
    let animate4 = document.querySelectorAll(".animate-4");
    animate4.forEach((el) => {
      (el as HTMLElement).style.transform = 'scaleX(1)';
      (el as HTMLElement).style.transition = '1s';
      (el as HTMLElement).style.transitionDelay = '0.3s';
    })
    let animate5 = document.querySelectorAll(".animate-5");
    animate5.forEach((el) => {
      (el as HTMLElement).style.transform = 'scaleX(1)';
      (el as HTMLElement).style.transition = '1s';
      (el as HTMLElement).style.transitionDelay = '0.4s';
    })
  }

  titleAnimateOut() {
    let animate1 = document.querySelectorAll(".animate-1");
    animate1.forEach((el) => {
      (el as HTMLElement).style.transform = 'scaleX(0)';
      (el as HTMLElement).style.transition = '1s';
    })
    let animate2 = document.querySelectorAll(".animate-2");
    animate2.forEach((el) => {
      (el as HTMLElement).style.transform = 'scaleX(0)';
      (el as HTMLElement).style.transition = '1s';
      (el as HTMLElement).style.transitionDelay = '0.1s';
    })
    let animate3 = document.querySelectorAll(".animate-3");
    animate3.forEach((el) => {
      (el as HTMLElement).style.transform = 'scaleX(0)';
      (el as HTMLElement).style.transition = '1s';
      (el as HTMLElement).style.transitionDelay = '0.2s';
    })
    let animate4 = document.querySelectorAll(".animate-4");
    animate4.forEach((el) => {
      (el as HTMLElement).style.transform = 'scaleX(0)';
      (el as HTMLElement).style.transition = '1s';
      (el as HTMLElement).style.transitionDelay = '0.3s';
    })
    let animate5 = document.querySelectorAll(".animate-5");
    animate5.forEach((el) => {
      (el as HTMLElement).style.transform = 'scaleX(0)';
      (el as HTMLElement).style.transition = '1s';
      (el as HTMLElement).style.transitionDelay = '0.4s';
    })
  }
}
