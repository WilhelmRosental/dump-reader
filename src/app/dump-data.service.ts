import { Injectable } from '@angular/core';

export interface DumpRow {
    type: string;
    address: string;
    data: string;
}

@Injectable({
    providedIn: 'root'
})
export class DumpDataService {
    dumpData: string = '';
    lines: string[] = [];
    formattedData: DumpRow[] = [];
    searchQuery: string = '';

    get filteredData(): DumpRow[] {
        if (!this.searchQuery) {
            return this.formattedData;
        }
        const query = this.searchQuery.toLowerCase();
        return this.formattedData.filter(row =>
            row.address.toLowerCase().includes(query)
        );
    }
}
