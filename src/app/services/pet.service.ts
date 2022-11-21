import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private client: HttpClient) { }

  public GetPetsByUserId(userId: string){
    return this.client.get(`https://localhost:7273/api/Pet/GetPetsByUserId?userId=${userId}`);
  }

  public GetPetById(petId: string){
    return this.client.get(`https://localhost:7273/api/Pet/${petId}`);
  }

  public PutPetById(petId: string, pet: any){
    return this.client.put(`https://localhost:7273/api/Pet/${petId}`, pet);
  }

  public PostPet(pet: any){
    return this.client.post('https://localhost:7273/api/Pet', pet);
  }

  public DeletePetById(petId: string){
    return this.client.delete(`https://localhost:7273/api/Pet/${petId}`);
  }
}
