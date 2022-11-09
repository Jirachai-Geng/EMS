import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );
  selectedValue: string = this.translate.currentLang
  selectedTheme: string = 'light'
  Limit_permission = true;
  selectFullScreen = true;
  user_info: any;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, public translate: TranslateService) {
  }

  async ngOnInit() {
    this.user_info = JSON.parse(localStorage.getItem("user_info") || "{}");
    console.log(this.user_info)
    if (this.translate.currentLang !== 'en') {
      this.Themes = [
        { value: 'light', viewValue: "สว่าง" },
        { value: 'dark', viewValue: "มืด" },
      ];
    } else {
      this.Themes = [
        { value: 'light', viewValue: "Light" },
        { value: 'dark', viewValue: "Dark" },
      ];
    }
  }

  logout() {
    localStorage.removeItem("islogin");
    this.router.navigate(['/login']);
  }

  Themes: Themes[] = [
    { value: 'light', viewValue: 'Light' },
    { value: 'dark', viewValue: 'Dark' },
  ];

  Languages: Languages[] = [
    { value: 'th', viewValue: 'ไทย' },
    { value: 'en', viewValue: 'English' },
  ];

  onSelectLanguage(value: any) {
    this.translate.use(value).subscribe(res => {
      if (this.translate.currentLang !== 'en') {
        this.Themes = [
          { value: 'light', viewValue: "สว่าง" },
          { value: 'dark', viewValue: "มืด" },
        ];
      } else {
        this.Themes = [
          { value: 'light', viewValue: "Light" },
          { value: 'dark', viewValue: "Dark" },
        ];
      }
    })
  }

  fullScreen() {
    console.log(JSON.stringify(this.translate.instant('menu.light')))
    this.selectFullScreen = !this.selectFullScreen
    const fsDoc = <FsDocument>document;
    if (!isFullScreen()) {
      const fsDocElem = <FsDocumentElement>document.documentElement;
      if (fsDocElem.requestFullscreen)
        fsDocElem.requestFullscreen();
      else if (fsDocElem.msRequestFullscreen)
        fsDocElem.msRequestFullscreen();
      else if (fsDocElem.mozRequestFullScreen)
        fsDocElem.mozRequestFullScreen();
      else if (fsDocElem.webkitRequestFullscreen)
        fsDocElem.webkitRequestFullscreen();
    }
    else if (fsDoc.exitFullscreen)
      fsDoc.exitFullscreen();
    else if (fsDoc.msExitFullscreen)
      fsDoc.msExitFullscreen();
    else if (fsDoc.mozCancelFullScreen)
      fsDoc.mozCancelFullScreen();
    else if (fsDoc.webkitExitFullscreen)
      fsDoc.webkitExitFullscreen();
    else {
      document.exitFullscreen()
    }
  }
}

interface Themes {
  value: string;
  viewValue: string;
}

interface Languages {
  value: string;
  viewValue: string;
}

export function isFullScreen(): boolean {
  const fsDoc = <FsDocument>document;

  return !!(fsDoc.fullscreenElement || fsDoc.mozFullScreenElement || fsDoc.webkitFullscreenElement || fsDoc.msFullscreenElement);
}

interface FsDocumentElement extends HTMLElement {
  webkitRequestFullscreen?: () => void;
  msRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
}

interface FsDocument extends HTMLDocument {
  webkitFullscreenElement?: Element;
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitExitFullscreen?: () => void;
  msExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
}