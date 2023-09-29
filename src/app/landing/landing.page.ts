import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {
  user: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      let data = this.router.getCurrentNavigation()?.extras.state;
      if (data && data['user']) {
        if (data['user'].type === 'existing') {
          let token = data['user'].accessToken;
          this.getUserProfileData(token);
        } else {
          this.user = data['user'];
        }
      }
    });
  }

  signOut() {
    GoogleAuth.signOut().then(() => {
      this.router.navigate(['/home']); 
    });
  }

  async getUserProfileData(token: any) {
    const options = {
      url: `https://www.googleapis.com/oauth2/v2/userinfo?key=769661539885-9feupi81omge5ksafbn3664j08efouqm.apps.googleusercontent.com&oauth_token=${token}`,
      headers:{'Content-Type': 'application/json'}
    };

    try {
      const response = await Http.request({ ...options, method: 'GET' });
      this.user = response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données de profil utilisateur :', error);
    }
  }
}
