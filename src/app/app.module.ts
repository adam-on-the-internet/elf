import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { LoadingComponent } from "./components/loading/loading.component";
import { StageComponent } from "./components/stage/stage.component";

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    StageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
