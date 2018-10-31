import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { PublicacionService } from '../../services/publicacion.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    publicaciones: any;
    date: Date;
    constructor(private http: HttpClient, private publicacionDataService: PublicacionService) { }

    ngOnInit() {
        this.buscarPublicaciones();

    }
    buscarPublicaciones() {
        this.publicacionDataService.buscarPublicaciones().subscribe(respuesta => {
            this.publicaciones = respuesta;
            alert(JSON.stringify(this.publicaciones));
        },
            err => {
            }
        );
    }
}
