import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handlerUserCreated - ANALYTICS', data);
    return 'return from analytic';
  }

  getAnalytics() {
    // return this.analytics;
    return 'return from analytic';
  }
}
