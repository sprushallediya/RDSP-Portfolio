import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components';
import { AboutComponent } from './components';
import { EducationComponent } from './components'
import { ExtracurricularComponent } from './components';
import { ProjectsComponent } from './components';
import { SkillsComponent } from './components';
import { ContactComponent } from './components';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    ExtracurricularComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }
}
