import { TestBed } from '@angular/core/testing';

import { AuthguardVendedorService } from './authguard-vendedor.service';

describe('AuthguardVendedorService', () => {
  let service: AuthguardVendedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguardVendedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
