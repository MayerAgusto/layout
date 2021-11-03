import {Component} from '@angular/core';
import {BreadcrumbService} from '../app.breadcrumb.service';

@Component({
    selector: 'app-invoice',
    templateUrl: './app.invoice.component.html',
})
export class AppInvoiceComponent {

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Invoice'}
        ]);
    }

    print() {
        window.print();
    }
}
