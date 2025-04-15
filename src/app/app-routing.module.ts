import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DumpUploaderComponent } from './dump-uploader/dump-uploader.component';
import { DumpTableComponent } from './dump-table/dump-table.component';

const routes: Routes = [
    { path: '', component: DumpUploaderComponent },
    { path: 'table', component: DumpTableComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
