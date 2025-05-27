
/* Version: Prod-23012023 */

import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvidenciaService {
  @Output() trigger01: EventEmitter<any> = new EventEmitter();
  @Output() trigger02: EventEmitter<any> = new EventEmitter();
  @Output() trigger03: EventEmitter<any> = new EventEmitter();
  @Output() FroalaValue: EventEmitter<any> = new EventEmitter();
  @Output() SetHtmlFroala: EventEmitter<any> = new EventEmitter();
  @Output() DateRange: EventEmitter<any> = new EventEmitter();
  constructor() { }
}