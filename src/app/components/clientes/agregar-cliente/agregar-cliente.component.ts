import { Component, OnInit } from "@angular/core";
import { ClientesService } from "../../../services/clientes.service";
import { Cliente } from "src/app/classes/cliente";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder
  ) {}
  public show: boolean = false;
  public buttonName: any = "Show";
  addCliente: FormGroup;


  clienteModel = new Cliente(0, "", "", "", "", "", "", "", "", "", "", 0, 0);
  estadosMexico = [
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Coahuila',
    'Colima',
    'Chiapas',
    'Chihuahua',
    'CDMX',
    'Durango',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'Michoacan',
    'Morelos',
    'Nayarit',
    'Nuevo Leon',
    'Oaxaca',
    'Puebla',
    'Querétaro',
    'Quintana Roo',
    'San Luis Potosi',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz',
    'Yucatan',
    'Zacatecas'
  ];
  estadosUsa = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Misuri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
  estadosCanada = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan'
  ];
  estadosJapon = [
    'Akita',
    'Aomori',
    'Chiba',
    'Ehime',
    'Fukui',
    'Fukuoka',
    'Fukushima',
    'Gifu',
    'Gunma',
    'Hiroshima',
    'Hokkaido',
    'Hyogo',
    'Ibaragi',
    'Ibaraki',
    'Ishikawa',
    'Iwate',
    'Kagawa',
    'Kagoshima',
    'Kanagawa',
    'Kochi',
    'Kumamoto',
    'Kyoto',
    'Mie',
    'Miyagi',
    'Miyazaki',
    'Nagano',
    'Nagasaki',
    'Nara',
    'Niigata',
    'Oita',
    'Okinawa',
    'Osaka',
    'Saga',
    'Saitama',
    'Shiga',
    'Shimane',
    'Shizuoka',
    'Tochigi',
    'Tokushima',
    'Tokyo',
    'Tottori',
    'Toyama',
    'Wakayama',
    'Yamagata',
    'Yamaguchi',
    'Yamanashi'
  ];
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
      limiteCredito: [null, Validators.required]
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
            limiteCredito: [this.clienteModel.limiteCredito, Validators.required]
          })
        },
        error => console.log(error)
      );
    }

  }
}
