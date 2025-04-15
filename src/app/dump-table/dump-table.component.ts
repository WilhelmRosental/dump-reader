import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DumpDataService } from '../dump-data.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-dump-table',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatToolbarModule,
        MatButtonModule
    ],
    templateUrl: './dump-table.component.html',
    styleUrls: ['./dump-table.component.css']
})
export class DumpTableComponent {
    constructor(public dumpDataService: DumpDataService) { }

    goBack(): void {
        history.back();
    }
}
