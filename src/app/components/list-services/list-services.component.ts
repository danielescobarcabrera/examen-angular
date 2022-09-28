import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Service } from 'src/app/models/Service';
@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css'],
})
export class ListServicesComponent implements OnInit {
  @Output() sendPosition = new EventEmitter();
  myServices: Service[] | undefined;
  constructor(private listServ: ServiceService) {}

  ngOnInit(): void {
    this.myServices = this.listServ.getServices();
  }
  deleteService(_id: any) {
    this.listServ.deleteService(_id);
  }
  getPositions(_id: any) {
    this.sendPosition.emit(_id)
  }
}
