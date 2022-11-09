import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {
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
    // const dialogRef = this.dialog.open(AuthErrorComponent, {data: {result: element}, disableClose: true});
    // dialogRef.afterClosed().subscribe((result) => {
    // });
  }
  
  async onSubmit(value: any) {
    if(value.email === 'xtem-ems@demo.com' && value.password === "dem0x10ems"){
      this.router.navigate(['/dashboard']);
      localStorage.setItem("islogin", "true")
    } else {
      alert('login failed')
    }
  }

  selectedValue: string = this.translate.currentLang

  Languages: Languages[] = [
    {value: 'th', viewValue: 'ไทย'},
    {value: 'en', viewValue: 'English'},
  ];

  ngOnInit(): void {
  }

  onSelectLanguage(value: any){
    this.translate.use(value);
    console.log(this.translate.currentLang)
  }

}

interface Languages {
  value: string;
  viewValue: string;
}
