import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  })
export class Application
{
 title: string;
 link: string;
 description: string;
 status: string;
 platform: string;
}