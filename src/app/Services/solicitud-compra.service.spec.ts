import { TestBed } from '@angular/core/testing';

import { SolicitudCompraService } from './solicitud-compra.service';

describe('SolicitudCompraService', () => {
  let service: SolicitudCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
