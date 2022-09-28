import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  myService: { id: number; nombre: string; descripcion: string; } | undefined
  serviceFound: any
  constructor(private listServ:ServiceService) { }

  ngOnInit(): void {
  }
  getPositions($event: any){
    this.myService=this.listServ.getOneService($event);
    this.serviceFound=this.myService;
  }
  editService(){
    this.listServ.editService(this.serviceFound);
  }
}
