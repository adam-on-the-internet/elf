import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StageComponent} from "./components/stage/stage.component";

const routes: Routes = [
  {path: "**", component: StageComponent},
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
