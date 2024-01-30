import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss',
})
export class PersonalInformationComponent {
  constructor(private auth: AuthService, private router: Router) {}
  logout() {
    this.auth.isloggedin = false;
    this.auth.isLoggedId.next(0);
    this.router.navigate(['/'],{queryParams:{userId:0}});
  }
}
