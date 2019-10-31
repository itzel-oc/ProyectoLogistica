import { Component, OnInit } from "@angular/core";
import { ClientesService } from "../../../services/clientes.service";
import { Cliente } from "src/app/classes/cliente";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: "app-agregar-cliente",
  templateUrl: "./agregar-cliente.component.html",
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {
  constructor(
    private _clientesService: ClientesService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private states: CountriesService
  ) {}
  public show: boolean = false;
  public buttonName: any = "Show";
  addCliente: FormGroup;


  clienteModel = new Cliente(0, "", "", "", "", "", "", "", "", "", "", 0, 0);
  estadosMexico: string[];
  estadosUsa: string[];
  estadosCanada: string[];
  estadosJapon: string[];
  edit: boolean = false;
  submitted: boolean = false;

  toggle(e) {
    e.stopPropagation();
    e.preventDefault();
    this.show = !this.show;
    if (this.show) {
      this.buttonName = "Hide";
    } else {
      this.buttonName = "Show";
    }
  }

  updateCliente() {
    this._clientesService
      .updateCliente(this.clienteModel.idCliente, this.clienteModel)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(["/clientes"]);
        },
        error => {
          console.log(error);
        }
      );
  }

  onSubmit() {
    this.submitted = true;
    if (this.addCliente.status === 'VALID') {
      this.clienteModel = {...this.clienteModel, ...this.addCliente.value};
      if (!this.edit) {
        this._clientesService
          .insertCliente(this.clienteModel)
          .subscribe(data => this.router.navigate(["/clientes"]));
      } else {
        this.updateCliente();
      }
    }
  }


  ngOnInit() {
    this.estadosMexico = this.states.getMexico();
    this.estadosUsa = this.states.getUsa();
    this.estadosCanada = this.states.getCanada();
    this.estadosJapon = this.states.getJapon();
    const params = this.route.snapshot.params;
    this.addCliente = this.formBuilder.group({
      nombre: [null, [Validators.required]],
      RFC: [null, Validators.required],
      contacto: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      telefono: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      pais: ['', Validators.required],
      estado: ['', Validators.required],
      ciudad: [null, Validators.required],
      direccion: [null, Validators.required],
      CP: [null, Validators.required],
      diasCredito: [null, Validators.required],
      limiteCredito: [null, Validators.required],
      DatosBancarios: this.formBuilder.group({
        banco: [null],
        cuenta: [''],
        clabe: [null],
        ABA: [null],
        SWIFT: [null],
        direccion: [null],
        ciudad: [null],
        estado: [null],
        pais: [null]
      })
    })
    if (params.idCliente) {
      this._clientesService.getCliente(params.idCliente).subscribe(
        res => {
          this.clienteModel = {...res};
          this.edit = true;
          this.addCliente = this.formBuilder.group({
            nombre: [this.clienteModel.nombre, [Validators.required]],
            RFC: [this.clienteModel.RFC, Validators.required],
            contacto: [this.clienteModel.contacto, Validators.required],
            email: [this.clienteModel.email, [Validators.required, Validators.email]],
            telefono: [this.clienteModel.telefono, [Validators.required, Validators.pattern("^[0-9]*$")]],
            pais: [this.clienteModel.pais, Validators.required],
            estado: [this.clienteModel.estado, Validators.required],
            ciudad: [this.clienteModel.ciudad, Validators.required],
            direccion: [this.clienteModel.direccion, Validators.required],
            CP: [this.clienteModel.CP, Validators.required],
            diasCredito: [this.clienteModel.diasCredito, Validators.required],
            limiteCredito: [this.clienteModel.limiteCredito, Validators.required],
            DatosBancarios: this.formBuilder.group({
              banco: [this.clienteModel.DatosBancarios.length > 0 ? this.clienteModel.DatosBancarios[0].banco : null],
              cuenta: [this.clienteModel.DatosBancarios.length > 0 ? this.clienteModel.DatosBancarios[0].cuenta : null],
              clabe: [this.clienteModel.DatosBancarios.length > 0 ? this.clienteModel.DatosBancarios[0].clabe : null],
              ABA: [this.clienteModel.DatosBancarios.length > 0 ? this.clienteModel.DatosBancarios[0].ABA : null],
              SWIFT: [this.clienteModel.DatosBancarios.length > 0 ? this.clienteModel.DatosBancarios[0].SWIFT : null],
              direccion: [this.clienteModel.DatosBancarios.length > 0 ? this.clienteModel.DatosBancarios[0].direccion : null],
              ciudad: [this.clienteModel.DatosBancarios.length > 0 ? this.clienteModel.DatosBancarios[0].ciudad : null],
              estado: [this.clienteModel.DatosBancarios.length > 0 ? this.clienteModel.DatosBancarios[0].estado : null],
              pais: [this.clienteModel.DatosBancarios.length > 0 ? this.clienteModel.DatosBancarios[0].pais : null]
            })
          })
        },
        error => console.log(error)
      );
    }

  }
}
