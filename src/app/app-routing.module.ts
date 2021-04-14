import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccreditationFormComponent } from './accreditation-form/accreditation-form.component';
import { AccreditationFormEditComponent } from './accreditation-form-edit/accreditation-form-edit.component';
import { AccreditationFormMobileComponent } from './accreditation-form-mobile/accreditation-form-mobile.component';
import { AccreditationComponent } from './accreditation/accreditation.component';
import { AccreditationUnitsComponent } from './accreditation-units/accreditation-units.component';
import { AccreditationMobileComponent } from './accreditation-mobile/accreditation-mobile.component';
import { ComponentsComponent } from './components/components.component';
import { VueEnsembleComponent } from './vue-ensemble/vue-ensemble.component';
import { CatalogEntryComponent } from './catalog-entry/catalog-entry.component';
import { PermissionFormErrorComponent } from './permission-form-error/permission-form-error.component';
import { KeyActionsComponent } from './key-actions/key-actions.component';
import { KeyActionsOrderComponent } from './key-actions-order/key-actions-order.component';
import { AccreditationRenewComponent } from './accreditation-renew/accreditation-renew.component';
import { PermissionDetailMobile } from './permission-detail-mobile/permission-detail-mobile.component';
import { CatalogEntryMobileComponent } from './catalog-entry-mobile/catalog-entry-mobile.component';



const routes: Routes = [{
  path: '',
  component: ComponentsComponent
}, {
  path: 'vue-ensemble',
  component: VueEnsembleComponent
}, {
  path: 'accreditation',
  component: AccreditationComponent
}, {
  path: 'accreditation-renew',
  component: AccreditationRenewComponent
  }, {
  path: 'accreditation-units',
  component: AccreditationUnitsComponent
}, {
  path: 'accreditation-form',
  component: AccreditationFormComponent
}, {
  path: 'accreditation-form-edit',
  component: AccreditationFormEditComponent
}, {
  path: 'accreditation-form-mobile',
  component: AccreditationFormMobileComponent
}, {
  path: 'catalog-entry',
  component: CatalogEntryComponent
}, {
  path: 'catalog-entry-mobile',
  component: CatalogEntryMobileComponent
}, {
  path: 'permission-detail-mobile',
  component: PermissionDetailMobile
}, {
  path: 'permission-form-error',
  component: PermissionFormErrorComponent
}, {
  path: 'key-actions',
  component: KeyActionsComponent
}, {
    path: 'key-actions-order',
    component: KeyActionsOrderComponent
  }, {
  path: 'accreditation-mobile',
  component: AccreditationMobileComponent
}];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
