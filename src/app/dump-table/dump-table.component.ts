import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DumpDataService } from '../dump-data.service';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-dump-table',
    standalone: true,
    imports: [CommonModule, FormsModule, MatCardModule],
    templateUrl: './dump-table.component.html',
    styleUrls: ['./dump-table.component.css']
})
export class DumpTableComponent {
    constructor(public dumpDataService: DumpDataService) { }

    goBack(): void {
        history.back();
    }
}
