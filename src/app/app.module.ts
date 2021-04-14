import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatChipsModule, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import { VueEnsembleComponent } from './vue-ensemble/vue-ensemble.component';
import { ComponentsComponent } from './components/components.component';
import { AccreditationComponent } from './accreditation/accreditation.component';
import { AccreditationUnitsComponent } from './accreditation-units/accreditation-units.component';
import { AccreditationFormComponent } from './accreditation-form/accreditation-form.component';
import { AccreditationFormEditComponent } from './accreditation-form-edit/accreditation-form-edit.component';
import { AccreditationFormMobileComponent } from './accreditation-form-mobile/accreditation-form-mobile.component';
import { AccreditationMobileComponent } from './accreditation-mobile/accreditation-mobile.component';
import { CatalogEntryComponent } from './catalog-entry/catalog-entry.component';
import { CatalogEntryMobileComponent } from './catalog-entry-mobile/catalog-entry-mobile.component';
import { PermissionFormErrorComponent } from './permission-form-error/permission-form-error.component';
import { KeyActionsComponent } from './key-actions/key-actions.component';
import { KeyActionsOrderComponent } from './key-actions-order/key-actions-order.component';
import { AccreditationRenewComponent } from './accreditation-renew/accreditation-renew.component';
import { PermissionDetailMobile } from './permission-detail-mobile/permission-detail-mobile.component';
import {MatTreeModule} from '@angular/material/tree';



@NgModule({
  declarations: [
    AppComponent,
    VueEnsembleComponent,
    ComponentsComponent,
    AccreditationComponent,
    AccreditationUnitsComponent,
    AccreditationFormComponent,
    AccreditationFormEditComponent,
    AccreditationFormMobileComponent,
    AccreditationMobileComponent,
    CatalogEntryComponent,
    CatalogEntryMobileComponent,
    PermissionFormErrorComponent,
    KeyActionsComponent,
    KeyActionsOrderComponent,
    AccreditationRenewComponent,
    PermissionDetailMobile
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSortModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    HttpClientModule,
    MatListModule,
    MatSlideToggleModule,
    MatTreeModule
  ],
  providers: [
    MatIconRegistry,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill', floatLabel: 'always' } },
    { provide: MAT_CHIPS_DEFAULT_OPTIONS, useValue: { disableRipple: true } }, // Doesn't work unfortunately
    { provide: MAT_DATE_LOCALE, useValue: 'fr-CH' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
