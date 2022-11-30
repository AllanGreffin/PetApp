import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Pet } from 'src/app/models/pet.model';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {

  pet: Pet = new Pet();
  petForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder) {
     }

  ngOnInit(): void {
    this.buildForm();
  }

  print(str?: string){
    this.pet = this.petForm.value;
    console.log(JSON.stringify(this.pet));
  }

  buildForm(){
    this.petForm = this.formBuilder.group({
      name: [this.pet.name],
      animalType: [this.pet.animalType],
      breed: [this.pet.breed],
      color: [this.pet.color],
      birthDate: [this.pet.birthDate],
      weight: [this.pet.weight],
      height: [this.pet.height],
      observation: [this.pet.observation],
      imageUrl: [this.pet.imageUrl]
    });
  }
}
