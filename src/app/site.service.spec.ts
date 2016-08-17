/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { SiteService } from './site.service';

describe('Service: Site', () => {
  beforeEach(() => {
    addProviders([SiteService]);
  });

  it('should ...',
    inject([SiteService],
      (service: SiteService) => {
        expect(service).toBeTruthy();
      }));
});
