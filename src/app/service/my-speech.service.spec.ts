import { TestBed } from '@angular/core/testing';

import { MySpeechService } from './my-speech.service';


describe('MySpeechService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MySpeechService = TestBed.get(MySpeechService);
    expect(service).toBeTruthy();
  });
});
