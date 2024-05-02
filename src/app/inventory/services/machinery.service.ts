import { Injectable } from '@angular/core';
import {Material} from "../model/material.entity";
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {Machine} from "../model/machine.entity";

@Injectable({
  providedIn: 'root'
})

export class MachineryService extends BaseService<Machine> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/machinery';
  }
}
