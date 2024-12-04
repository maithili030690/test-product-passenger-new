import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
const moduleArr =[
    MatButtonModule,
    MatSnackBarModule
]

@NgModule({
    declarations:[],
    imports:[...moduleArr],
    exports:[...moduleArr]
})
export class MaterialModule{

}