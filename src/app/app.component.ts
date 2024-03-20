import { AfterViewInit, Component, OnInit } from '@angular/core';
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
  }
}
