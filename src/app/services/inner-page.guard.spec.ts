import { TestBed } from '@angular/core/testing';

import { InnerPageGuard } from './inner-page.guard';

describe('InnerPageGuard', () => {
  let guard: InnerPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InnerPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
