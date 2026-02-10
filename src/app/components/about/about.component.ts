import { Component, AfterViewInit } from '@angular/core';
import Writer from 't-writer.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const target = document.querySelector('.typewriter-text');

    if (target) {
      const writer = new Writer(target, {
        loop: true,
        typeColor: '#1f2937',
      });

      writer
        .type('Rushalle')
        .rest(1000)
        .clear()
        .type('a Computer Science Graduate')
        .rest(1000)
        .clear()
        .type('a Web Developer')
        .rest(1000)
        .clear()
        .type('a Tech Enthusiast')
        .rest(1000)
        .clear()
        .type('a Team Player')
        .rest(1000)
        .clear()
        .type('a Quick Learner')
        .rest(1000)
        .clear()
        .type('a Problem Solver')
        .rest(1000)
        .clear()
        .type('a Creative Thinker')
        .rest(1000)
        .clear()
        .start();
    }
  }
}
