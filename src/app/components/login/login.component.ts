import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit, OnInit {
  user = new FormControl('', [Validators.required]);
  hide = true;
  error = null;

  constructor(private rest: RestService, private router: Router,private dialog: MatDialog, public translate: TranslateService) { 
  }

  getErrorMessage(){
    if (this.user.hasError('required')? 'Not a valid email' : '') {
      return 'You must enter a value';
    }
    return null
  }
  openDialog(element: any) {
  }
  
  async onSubmit(value: any) {
    if(value.email === 'demo-ems@entechsi.com' && value.password === "dem0ems"){
      this.router.navigate(['/dashboard']);
      localStorage.setItem("islogin", "true")
    } else {
      alert('login failed')
    }
  }

  name = "Angular";
  ngOnInit() {}
  ngAfterViewInit() {

  }

  onClickTest(){
    alert('onClickTest')
  }

  selectedValue: string = this.translate.currentLang

  Languages: Languages[] = [
    {value: 'th', viewValue: 'ไทย'},
    {value: 'en', viewValue: 'English'},
  ];


  onSelectLanguage(value: any){
    this.translate.use(value);
    console.log(this.translate.currentLang)
  }

}

interface Languages {
  value: string;
  viewValue: string;
}
