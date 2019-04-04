import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  private bookingCount = new BehaviorSubject('');
  currentCount = this.bookingCount.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeCount(count: string) {
    this.bookingCount.next(count);
  }
}

