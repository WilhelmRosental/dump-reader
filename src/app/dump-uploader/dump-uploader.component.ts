import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DumpDataService, DumpRow } from '../dump-data.service';

@Component({
    selector: 'app-dump-uploader',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatButtonModule, FormsModule],
    templateUrl: './dump-uploader.component.html',
    styleUrls: ['./dump-uploader.component.css']
})
export class DumpUploaderComponent {
    @ViewChild('fileInput', { static: true }) fileInput!: ElementRef<HTMLInputElement>;

    constructor(private router: Router, private dumpDataService: DumpDataService) { }

    triggerFileInput(): void {
        if (this.fileInput && this.fileInput.nativeElement) {
            this.fileInput.nativeElement.value = ''; // reset pour permettre le même fichier deux fois
            this.fileInput.nativeElement.click();
        } else {
            console.error('fileInput non disponible');
        }
    }

    handleFileChange(event: Event): void {
        console.log('handleFileChange called', event);
        const input = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            console.log('File selected:', file);
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target?.result as string;
                this.dumpDataService.dumpData = data;
                this.dumpDataService.lines = data.split('\n')
                    .map(line => line.trim())
                    .filter(line => line !== '');
                this.dumpDataService.formattedData = this.dumpDataService.lines.map(line => {
                    const tokens = line.split(/\s+/);
                    if (tokens.length === 2) {
                        return { type: "Range", address: `${tokens[0]} ~ ${tokens[1]}`, data: '' };
                    } else if (tokens.length === 3) {
                        return { type: tokens[0], address: tokens[1], data: this.hexToDecimal(tokens[2]) };
                    } else {
                        return { type: "Unknown", address: "", data: line };
                    }
                });
                this.router.navigate(['/table']);
            };
            reader.onerror = (e) => {
                console.error("Error reading file:", e);
            };
            reader.readAsText(file);
        } else {
            console.error("No file selected or error with input element.");
        }
    }

    private hexToDecimal(hex: string): string {
        try {
            return parseInt(hex, 16).toString();
        } catch {
            return hex;
        }
    }
}
