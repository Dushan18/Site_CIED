import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/ui/footer/footer.component';
import { NavbarComponent } from '../../../shared/ui/navbar/navbar.component';

@Component({
  selector: 'app-asac-page',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './asac-page.component.html',
  styleUrl: './asac-page.component.scss'
})
export default class AsacPageComponent {

}
