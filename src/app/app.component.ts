import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipelinegithub';

  ngOnInit(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Hola actualizado desde aws pipeline',
      showConfirmButton: false,
      timer: 5000
    })
  }
}
