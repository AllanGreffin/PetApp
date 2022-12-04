import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../models/pet.model';
import { User } from '../models/user.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  pets: Pet[] = [];
  user : User;

  constructor(private petService: PetService,
    private router: Router) { }

  ngOnInit(): void {
    let user: User = (JSON.parse(localStorage.getItem("user") as string));
    this.user = user;
    if(!user){
      this.router.navigate(['/login']);
    }
    this.getPets();
  }

  getPets(){
    this.petService.GetPetsByUserId(this.user.id).subscribe((data: any) => {
      console.log(data);
      this.pets = data;
    });
  }

  toDetails(pet: Pet){
    this.router.navigate(["/pet-details/" + pet.id]);
  }

  newPet(){
    this.router.navigate(["/pet-details"]);
  }

  deletePet(event: Event, pet: Pet){
    event.stopPropagation();
    this.petService.DeletePetById(pet.id).subscribe((data: any) => {
      this.getPets();
    });
  }
}
