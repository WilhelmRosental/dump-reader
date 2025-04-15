import { Routes } from '@angular/router';
import { DumpUploaderComponent } from './dump-uploader/dump-uploader.component';
import { DumpTableComponent } from './dump-table/dump-table.component';

export const routes: Routes = [
    { path: '', component: DumpUploaderComponent },
    { path: 'table', component: DumpTableComponent }
];
