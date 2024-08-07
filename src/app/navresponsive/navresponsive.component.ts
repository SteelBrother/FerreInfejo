import { Component, OnInit, Renderer2, Inject, PLATFORM_ID,ViewEncapsulation  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-navresponsive',
  templateUrl: './navresponsive.component.html',
  styleUrl: './navresponsive.component.css'
})
export class NavresponsiveComponent implements OnInit {

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
       this.loadScript();
    }
  }

  loadScript() {
    const script = this.renderer.createElement('script');
    script.src = 'assets/js/scriptnavpag.js';
    script.onload = () => {
      console.log('Script loaded successfully');
    };
    this.renderer.appendChild(document.body, script);
  }
}
