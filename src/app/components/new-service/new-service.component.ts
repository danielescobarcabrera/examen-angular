import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css'],
})
export class NewServiceComponent implements OnInit {
  myId = 4;
  newService = {
    id: this.myId,
    nombre: '',
    descripcion: '',
  };
  constructor(private listSer:ServiceService) {}

  ngOnInit(): void {}

  addService(){
   
    this.listSer.addService(this.newService);
    this.myId ++;
    
    this.newService = {
      id: this.myId,
      nombre: '',
      descripcion: '',
    };
  }
}
