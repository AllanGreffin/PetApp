import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  constructor(private petService: PetService,
    private router: Router) { }

  ngOnInit(): void {
    let user: User = (JSON.parse(localStorage.getItem("user") as string));
    this.petService.GetPetsByUserId(user.id).subscribe((data: any) => {
      console.log(data);
    });
  }

  toDetails(){
    this.router.navigate(['/pet-details']);
  }
}
