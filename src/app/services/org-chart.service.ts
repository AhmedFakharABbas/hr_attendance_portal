import { Injectable } from '@angular/core';
import { Edge, Node } from '../modules/ng-org-chart/lib/models';
import { HttpClient } from '@angular/common/http';

declare var $;
@Injectable({
  providedIn: 'root'
})
export class OrgChartService {

  apiHeader = 'http://anl.peoplei.tech/api2/2.2/';
  // apiHeader = 'http://192.168.99.251:3000/api/2.2/';

  constructor(
    private http: HttpClient
  ) { }

  nodeData: Node[] = [
    {
      id: '0',
      label: 'Gohar Sharif Butt',
      data: {
        band: '1',
        lmlevel: 1,
        department: 'Operations - CEO',
        colorCode: '#e80000',
        role: 'Chief Exective Officer',
        img: 'http://192.168.99.26/ppi_people/emp_pictures/gohar.jpg',
      },
      // position: { x: 320, y: 20 }
    },
    {
      id: '1',
      label: 'Waqas Saleem',
      data: {
        band: '5.2',
        lmlevel: 2,
        // expectedLevel: 1,
        // currentLevel: 0,
        department: 'Finance',
        colorCode: '#e80000',
        role: 'Financial Controller',
        img: 'http://192.168.99.26/ppi_people/emp_pictures/1567597521.jpg',
      },
      // position: { x: 20, y: 420 }
    },
    {
      id: '2',
      label: 'Muhammad Waqas Nisar',
      data: {
        band: '4.2',
        lmlevel: 3,
        department: 'Software Development',
        colorCode: '#e80000',
        role: 'Product Manager',
        // expectedLevel: 1,
        // currentLevel: 0,
        img: '',
      },
      // dimension: { width: 500, height: 100 },
      // position: { x: 320, y: 420 }
    },
    {
      id: '3',
      label: 'Ahmed Abrahim Butt',
      data: {
        band: '6',
        department: 'Finance Dubai',
        colorCode: '#e80000',
        lmlevel: 4,
        role: 'Sr. Operations Executive & Analyst',
        img: 'http://192.168.99.26/ppi_people/emp_pictures/1569590850.jpeg',
      },
      // position: { x: 620, y: 220 }
    },
    {
      id: '4',
      label: 'Muhammad Awais Subhani',
      data: {
        band: '6',
        department: 'Software Development',
        colorCode: '#0078bd',
        lmlevel: 5,
        // expectedLevel: 2,
        // currentLevel: 1,
        role: 'Quality Assurance',
        img: '',
      },
      // position: { x: 470, y: 620 }
    }
  ];

  edgesData: Edge[] = [
    {
      source: '0',
      target: '1',
      data: {
        strokeColor: '#ccc',
        linkText: 'Edge 1',
        strokeDash: 0,
        // currentLevel: 0,
        // expectedLevel: 1
      }
    },
    {
      source: '0',
      target: '2',
      data: {
        strokeColor: '#f8c9ab',
        linkText: 'Manager of',
        strokeDash: 0,
        // currentLevel: 0,
        // expectedLevel: 1,
      },
    },
    {
      source: '0',
      target: '3',
      data: {
        strokeColor: '#e44d26',
        linkText: 'HR of',
        strokeDash: 0
      },
    },
    {
      source: '2',
      target: '4',
      data: {
        strokeColor: '#fdd8aa',
        linkText: 'Manager of',
        strokeDash: 4,
        // currentLevel: 1,
        // expectedLevel: 2
      },
    },
    {
      source: '3',
      target: '4',
      data: {
        strokeColor: '#fdd8aa',
        linkText: 'Manager of',
        strokeDash: 0,
        // currentLevel: 1,
        // expectedLevel: 2
      },
    },
  ];

  refactorPath(link, path: string, currentLevel: number, expectedLevel?: number): string {
    if (path) {
      console.log(link);
      const filteryaxis = path.split(',').pop();

      // Difference between nodes
      const space = 200;
      const level = expectedLevel - currentLevel;
      const levelMultiple = space * level;
      const nextLevel = +filteryaxis + levelMultiple;

      const mainSubPath: string = path.substr(0, path.lastIndexOf(','));
      const mainSubPathString = mainSubPath.split(',');
      const curve = mainSubPathString.pop();
      const curves = curve.split('L');
      const curveSumUp = (+curves[0] + 40) + 'L' + curves[1];
      const translateLevel = mainSubPathString[0] + ',' + mainSubPathString[1] + ',' + curveSumUp + ',' + nextLevel;
      return translateLevel;
    }
  }

  getChart() {
    return this.http.get('http://anl.peoplei.tech/api2/2.2/multiline_chart');
    // return this.http.get('http://localhost:3000/api/2.2/multiline_chart');
  }

  Chart() {
    return new Promise((resolve, reject) => {
      this.getChart()
        .subscribe((chart: any) => {
          console.log(chart);
          resolve(chart);
        });
    });
  }

}
