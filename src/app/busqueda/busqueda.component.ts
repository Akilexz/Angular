import { Component, OnInit, OnDestroy } from '@angular/core';
import { InscritoService } from '../services/inscrito.service';
import { Inscrito } from '../models/Inscrito';
import { RouterModule, ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit, OnDestroy {
  navigationSubscription;
  public inscriptionData: Inscrito;
  cedula: number;
  datos: boolean;

  constructor(private inscriptionService: InscritoService, private route: ActivatedRoute, private router: Router) {
    this.cedula = this.route.snapshot.params.id;
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    // Set default values and re-fetch any data you need.
    this.cedula = this.route.snapshot.params.id;
    this.getIncriptionbyid(this.cedula);
  }
  ngOnInit() {
    const url = this.route.snapshot.pathFromRoot.pop().url.map(u => u.path).join('/');
    this.router.navigateByUrl(url);
  }

  getIncriptionbyid(id: number) {
    this.inscriptionService.getIncription(id).subscribe
      (data => {
        if (data) {
          this.inscriptionData = data;
          this.datos = true;
          if (Object.keys(data).length === 0) {
            this.datos = false;
          }
        }
      },
      err => {
        console.log(err);
      });
  }

  enviar(id: Number) {
    console.log(id);
    this.router.navigate(['/confirmacion/', id]);
  }
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
