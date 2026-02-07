import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import this

@Component({
  selector: 'app-header',
  standalone: true, // Ensure this is present
  imports: [RouterLink, CommonModule], // Add CommonModule here
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}