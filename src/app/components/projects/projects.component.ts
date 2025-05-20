import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    { title: 'Binary Heap', description: 'Generic min/max heap in C.', link: 'https://github.com/...' },
    { title: 'Hash Map', description: 'Custom hash map with chaining.', link: '' },
    { title: 'Portfolio (this site)', description: 'Built with Angular 19 standalone.', link: '' }
  ];
}
