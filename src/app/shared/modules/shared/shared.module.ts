import { NgModule } from '@angular/core';
import { FiltersService } from '../../../services/filters.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: []
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [FiltersService, CookieService]
    };
  }
}
