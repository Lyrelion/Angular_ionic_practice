import { Injectable } from '@angular/core';
import { ConfigService } from '../../config/config.service';
import { HttpUtilsService } from '../../utils/http-utils/http-utils.service';

@Injectable({
  providedIn: 'root'
})
export class SupervisionService {

  constructor(public configService: ConfigService, public httpUtilsService: HttpUtilsService) {
  }

}
