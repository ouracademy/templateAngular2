import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  logoName: string = 'logo_ouracademy_dark.png';
  side = 'start';
  links: any[] = [
    { name: 'Principal', route: 'admin' },
    { name: 'GuideMap',route: 'admin/guideMap' },
    { name: 'DragDrop',route: 'admin/drag-drop' },
    { name: 'Other',route: 'admin/other' }
  ];

  constructor(private router: Router) { 
    this.router = router;
  }
  ngOnInit() {
  }
  goTo(link):void {
    this.router.navigate([link.route]);
  }
}
