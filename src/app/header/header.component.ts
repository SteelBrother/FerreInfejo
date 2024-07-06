import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
       this.loadScript();
    }
  }

  loadScript() {
    const script = this.renderer.createElement('script');
    script.src = 'assets/js/scriptheader.js';
    script.onload = () => {
      console.log('Script loaded successfully');
    };
    this.renderer.appendChild(document.body, script);
  }
}
