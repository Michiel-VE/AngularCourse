import {LoggingService} from './logging.service';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class AccountService{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {
  }

  AddAccount(name: string, status: string){
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusToConsole(status);
  }

  UpdateAccount(id: number, status: string){
    this.accounts[id].status = status;
    this.loggingService.logStatusToConsole(status);
  }

}
