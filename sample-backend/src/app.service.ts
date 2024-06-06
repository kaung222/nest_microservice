import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './create-user-request.dto';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserRequest: CreateUserRequest) {
    this.users.push(createUserRequest);
    this.communicationClient.emit('user_created', createUserRequest);
    this.analyticsClient.emit('user_created', createUserRequest);
    return 'user added';
  }

  getAnalytics() {
    return this.analyticsClient.send('get_analytics', {});
  }
}
