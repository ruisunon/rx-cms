import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { LocalStorageJwtService } from './local-storage-jwt.service';
import { of } from 'rxjs';

@Component({
  selector: 'rx-test-comp',
  template:'',
})
class TestComponent{};

describe('AuthGuardService', () => {
  let service: AuthGuardService;
  let storage: LocalStorageJwtService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [
        RouterTestingModule.withRoutes([
        {
          path: 'login',
          component: TestComponent,
        }
      ]),
      ],
      providers:[LocalStorageJwtService, AuthGuardService],
    });
    storage = TestBed.inject(LocalStorageJwtService);
    service = TestBed.inject(AuthGuardService);
  });

  it('should return false if the user state is not logged in', (done) => {
    jest.spyOn(storage, 'getItem').mockReturnValueOnce(of(null));

    service.canActivate().subscribe((value) => {
      expect(value).toBe(false);
      done();
    });
  });

  it('should return true if the user state is logged in', (done) => {
    jest.spyOn(storage, 'getItem').mockReturnValueOnce(of('token'));

    service.canActivate().subscribe((value) => {
      expect(value).toBe(true);
      done();
    });
  });
});
