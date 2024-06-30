import { TestBed } from '@angular/core/testing';

import { MockPlotProviderService } from './mock-plot-provider.service';

describe('MockPlotProviderService', () => {
  let service: MockPlotProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockPlotProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
