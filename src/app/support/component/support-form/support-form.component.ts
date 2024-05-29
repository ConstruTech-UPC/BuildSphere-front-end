// file path: src/app/support-form/support-form.component.ts

import { Component, OnInit } from '@angular/core';

interface SupportItem {
  question: string;
  answer: string;
  description: string;
}

@Component({
  selector: 'app-support-form',
  templateUrl: './support-form.component.html',
  styleUrls: ['./support-form.component.css']
})
export class SupportFormComponent implements OnInit {

  supportItems: SupportItem[] = [
    {
      question: 'How can I create a new project in the application?',
      answer: 'To create a new project, click on the "Create Project" button on the dashboard and fill in the required details.',
      description: 'Creating a New Project'
    },
    {
      question: 'Does the application provide tools to schedule and manage the project calendar?',
      answer: 'Yes, the application has a feature that allows you to schedule and manage project tasks and deadlines for workers.',
      description: 'Task Scheduling and Calendar Management'
    },
    {
      question: 'Can I attach files and documents to a project?',
      answer: 'There is a file upload feature that allows you to attach files and documents to a project for easy access and sharing.',
      description: 'Document Management'
    },
    {
      question: 'How can I access technical support if I have problems with the application?',
      answer: 'On our website, you can find a support page with contact information for technical support. You can also submit a support ticket through the application.',
      description: 'Support and Contact Information'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
