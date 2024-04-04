import { Component, inject } from '@angular/core';
import { LoaderServiceService } from 'src/app/services/loader/loader-service.service';

@Component({
  selector: 'app-sport-home',
  templateUrl: './sport-home.component.html',
  styleUrl: './sport-home.component.css'
})
export class SportHomeComponent {
  loader = inject(LoaderServiceService);

}
