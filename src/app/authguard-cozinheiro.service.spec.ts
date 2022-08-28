import { TestBed } from '@angular/core/testing';

import { AuthguardCozinheiroService } from './authguard-cozinheiro.service';

describe('AuthguardCozinheiroService', () => {
  let service: AuthguardCozinheiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguardCozinheiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
