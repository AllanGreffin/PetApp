import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private client: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
  };

  public GetPetsByUserId(userId: string){
    return this.client.get(`http://localhost:5273/api/Pet/GetPetsByUserId?userId=${userId}`, this.httpOptions);
  }

  public GetPetById(petId: string){
    return this.client.get(`http://localhost:5273/api/Pet/${petId}`);
  }

  public PutPetById(petId: string, pet: any){
    return this.client.put(`http://localhost:5273/api/Pet/${petId}`, pet);
  }

  public PostPet(pet: any){
    return this.client.post('http://localhost:5273/api/Pet', pet);
  }

  public DeletePetById(petId: string){
    return this.client.delete(`http://localhost:5273/api/Pet/${petId}`);
  }
}
