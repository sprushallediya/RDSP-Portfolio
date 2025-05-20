import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeSection: string = 'about';

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = ['about', 'education', 'extracurricular', 'projects', 'skills', 'contact'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top;
        if (top <= 100 && top >= -200) {
          this.activeSection = id;
        }
      }
    }
  }
}