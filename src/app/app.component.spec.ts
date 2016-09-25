/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: HelloMyEditor', () => {
  beforeEach(() => {
    addProviders([AppComponent]);
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as isEditMode \'false!\'',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.isEditMode).toEqual(false);
    }));
});
