import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {

  pet: Pet = new Pet();
  petImg: string;
  petForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private petService: PetService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.petService.GetPetById(id).subscribe((data: any) => {
        this.pet = data;
        this.petImg = this.pet.imageUrl;
        this.buildForm();
      });
    }else{
      this.buildForm();
    }
  }

  back(){
    this.router.navigate(['/pet-list']);
  }

  buildForm(){
    this.petForm = this.formBuilder.group({
      id: [this.pet.id],
      name: [this.pet.name],
      animalType: [this.pet.animalType],
      breed: [this.pet.breed],
      color: [this.pet.color],
      birthDate: [this.pet.birthDate],
      weight: [this.pet.weight],
      height: [this.pet.height],
      observation: [this.pet.observation]
    });
  }

  save(){
    this.pet = this.petForm.value;
    this.pet.imageUrl = this.petImg
    this.pet.userId = JSON.parse(localStorage.getItem("user") as string).id;
    if(this.pet.id){
      this.petService.PutPetById(this.pet.id, this.pet).subscribe((data: any) => {
        this.router.navigate(['/pet-list']);
      });
    }else{
      this.petService.PostPet(this.pet).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['/pet-list']);
      });
    }
  }

  convertBase64(file: any){
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

  uploadImage(event: any){
    const file = event.target.files[0];
    this.convertBase64(file).then((result: any) => {
      const base64 = result;
      this.petImg = base64;
    });
  };
}
