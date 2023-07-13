import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Library } from 'src/app/interfaces/library';
import { LibraryService } from 'src/app/services/library.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit{

  public library: Library[] = [];

  constructor(private lService:LibraryService, private router: Router, private auth: AuthService){

  }

  ngOnInit(): void {
    this.lService.getAllLibraries().subscribe((dlibrary) => { // Agrega el tipo 'Library[]' al parámetro 'dlibrary'
      this.library=dlibrary;
    });
  }

}
