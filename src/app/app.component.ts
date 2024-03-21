import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlockComponent, UserProfileComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Elie Bendier';
  isAdmin: boolean = true;

  switchIsAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }
}
