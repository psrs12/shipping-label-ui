import { TestBed } from '@angular/core/testing';

import { ShippingLabelServiceService } from './shipping-label-service.service';

describe('ShippingLabelServiceService', () => {
  let service: ShippingLabelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingLabelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
