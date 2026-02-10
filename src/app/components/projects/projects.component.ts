import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  // Repo names to show
  selectedRepos = [
    'Image-Classification',
    'Real-Time-Sentiment-Analysis',
    'AWS-IoT-Core-for-Real-Time-Device-Monitoring',
    'Serverless-Microservices',
    'Automated-Security-Scanning-in-CI-CD-Pipeline',
    'Intrusion-Detection-System'
  ];

  // Local image map
  imageMap: { [key: string]: string } = {
    'Image-Classification': 'assets/projects/image-classification.jpg',
    'Real-Time-Sentiment-Analysis': 'assets/projects/sentiment-analysis.jpg',
    'AWS-IoT-Core-for-Real-Time-Device-Monitoring': 'assets/projects/iot-monitoring.png',
    'Serverless-Microservices': 'assets/projects/serverless.png',
    'Automated-Security-Scanning-in-CI-CD-Pipeline': 'assets/projects/security-scanning.jpg',
    'Intrusion-Detection-System': 'assets/projects/intrusion-detection.jpg'
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://api.github.com/users/sprushallediya/repos').subscribe((repos) => {
      this.projects = repos
        .filter(repo => this.selectedRepos.includes(repo.name))
        .map(repo => ({
          title: repo.name.replace(/-/g, ' '),
          description: repo.description,
          link: repo.html_url,
          image: this.imageMap[repo.name] || 'assets/projects/default.jpg'
        }));
    });
  }
}
