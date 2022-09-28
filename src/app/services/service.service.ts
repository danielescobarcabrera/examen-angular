import { Injectable } from '@angular/core';
import { Service } from '../models/Service';

const ServiceList = [
  {
    id: 1,
    nombre: 'Electricidad',
    descripcion: 'Se ofrece servicio de Electricidad',
  },
  {
    id: 2,
    nombre: 'Gasfitero',
    descripcion: 'Se ofrece servicio de Gasfitero',
  },
  {
    id: 3,
    nombre: 'Mecanico',
    descripcion: 'Se ofrece servicio de Mecanico',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

  getServices() {
    return ServiceList;
  }

  getOneService(id: any) {
    return ServiceList.find((service) => service.id === id);
  }

  addService(service: Service) {
    ServiceList.push(service);
  }

  editService(newServiceEdit: { id: any; nombre: string; descripcion: string; }) {
    const index = ServiceList.findIndex(
      (service) => service.id === newServiceEdit.id
    );

    ServiceList[index] = newServiceEdit;
  }
  deleteService(id: any) {
    ServiceList.splice(id, 1);
  }
}
