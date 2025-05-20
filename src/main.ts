import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';

import {
  AboutComponent, EducationComponent, ExtracurricularComponent,
  ProjectsComponent, SkillsComponent, ContactComponent
} from './app/components';

const routes = [
  { path: '', component: AppComponent },
  { path: 'education', component: EducationComponent },
  { path: 'extracurricular', component: ExtracurricularComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    )
  ]
}).catch(err => console.error(err));
