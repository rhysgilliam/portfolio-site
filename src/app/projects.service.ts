import { Injectable } from '@angular/core';
import { Project } from './project.model'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  private projects: Project[] = [
    // {
    //   id: 1,
    //   title: 'test project',
    //   description: 'test project yippee',
    //   imageUrl: 'assets/placeholder.jpg',
    //   link: '/project/1',
    //   tags: ['test lol'],
    //   longDescription: 'pleasepleasepleaseplease hire me'
    // },
    {
      id: 2,
      title: 'Limitless Limits',
      description: 'Unity 2D game made for the 2023 UNC Collegiate Game Jam. Fight of hordes of slimes while dealing with a random limitation. Play in your browser!',
      imageUrl: 'assets/heart.png',
      externalLink: 'https://rhysgilliam.itch.io/limitless-limits',
      tags: ['Unity', 'C#', 'Game Design', 'Music'],
    },
    {
      id: 3,
      title: 'The Werewolf of Wall Street',
      description: 'Unity 2D game made with a team for the 2022 UNC Collegiate Game Jam. Play as an angry werewolf in an office full of unsuspecting coworkers.',
      imageUrl: 'assets/werewolf.png',
      externalLink: 'https://xches.itch.io/the-werewolf-of-wall-street',
      tags: ['Unity', 'C#', 'Game Design', 'Music']
    },
    {
      id: 4,
      title: 'Ocean Cleanup',
      description: 'Unity 3D game made with a team for the Progression Mechanics Game Jam. Clean up the ocean in a tiny submarine and explore multiple subaquatic levels.',
      imageUrl: 'assets/oceancleanup/ocean cleanup ship.png',
      link: '/project/4',
      longDescription: 'Ocean Cleanup is a game made with Unity 3D for the Progression Mechanics Game Jam hosted at Northwestern University. You play as a small submarine collecting trash from beneath the ocean, earning money and buying various upgrades. For this project, I wrote the music, designed the levels, and programmed some of the movement of the submarine. You can find the repository on my teammate\'s <a href="https://github.com/mercedes-sandu/Ocean-Cleanup" target="_blank">GitHub</a> or view screenshots below.',
      extraPictureUrls:["assets/oceancleanup/ocean cleanup instructions.webp", "assets/oceancleanup/ocean cleanup area 1.webp", "assets/oceancleanup/ocean cleanup area 2.webp"],
      tags: ['Unity', 'C#', 'Game Design', 'Music']
    },
    {
      id: 5,
      title: 'UNC-CSXL Friendship System',
      description: 'Completed during the CSXL Internship project for COMP 590 at UNC.',
      imageUrl: 'assets/csxl/csxllogo.jpg',
      link: '/project/5',
      tags: ['Angular', 'TypeScript', 'SQL', 'Python', 'HTML/CSS', 'SWE', 'Agile Development Methodology'],
      longDescription: "Completed as a CSXL Software Engineering Intern at UNC for COMP 590 under the mentorship of Kris Jordan. The scope of the project was to design a new friendship feature for the Computer Science Experience Lab at UNC, where users could add friends and see when those friends were checked into the CSXL lab. Below you can see screenshots from a demo displaying the friend-making progress. Let's be friends!",
      extraPictureUrls: ['assets/csxl/csxl1.png']
    },
    {
      id: 6,
      title: 'The Curse of the Vistani',
      description: "A Twine text-based adventure game based on the Curse of Strahd where you learn about your people's long history.",
      imageUrl: 'assets/bonfire.png',
      externalLink: 'https://rhysgilliam.itch.io/curse-of-the-vistani',
      tags: ['Twine', 'HTML/CSS', 'Writing', 'Game Design'],
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
