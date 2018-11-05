import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { PublicacionService } from '../../services/publicacion.service';

@Component({
    selector: 'app-list',
    templateUrl: './tipoPublist.component.html',
    styleUrls: ['./tipoPublist.component.css']
})
export class TipoPubListComponent implements OnInit {

    ngOnInit() {

    }

}
