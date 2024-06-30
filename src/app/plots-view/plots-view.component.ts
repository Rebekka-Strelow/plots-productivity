import { Component } from '@angular/core';
import { MockPlotProviderService } from '../mock-plot-provider.service';
import { Plot } from '../plot';
import {MatCardModule} from '@angular/material/card';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-plots-view',
  standalone: true,
  imports: [MatCardModule, NgFor],
  templateUrl: './plots-view.component.html',
  styleUrl: './plots-view.component.css'
})
export class PlotsViewComponent {

  plots: Plot[] = [];

  constructor(private plotService: MockPlotProviderService) {}

  getPlots(): void {
    this.plots = this.plotService.getDummyPlots();
  }

  ngOnInit(): void {
    this.getPlots();
  }

}
