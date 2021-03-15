import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccreditationFormComponent } from "./accreditation-form/accreditation-form.component";
import { AccreditationFormEditComponent } from "./accreditation-form-edit/accreditation-form-edit.component";
import { AccreditationComponent } from "./accreditation/accreditation.component";
import { ComponentsComponent } from "./components/components.component";
import { VueEnsembleComponent } from "./vue-ensemble/vue-ensemble.component";

const routes: Routes = [
  {
    path: "",
    component: ComponentsComponent
  },
  {
    path: "vue-ensemble",
    component: VueEnsembleComponent
  },
  {
    path: "accreditation",
    component: AccreditationComponent
  },
  {
    path: "accreditation-form",
    component: AccreditationFormComponent
  },
  {
    path: "accreditation-form-edit",
    component: AccreditationFormEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
