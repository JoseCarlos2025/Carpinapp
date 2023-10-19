import { Component } from '@angular/core';
import { SectionsService } from 'src/app/service/sections.service';
import { Section } from 'src/app/model/section.model';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent {
  searchQuery = '';
  isSearching = false;

  sections: Section[] = [];
  sectionscopy: Section[] = [];

  constructor(private SectionsService: SectionsService) { }

  ngOnInit() {
    this.SectionsService.getJSONData().subscribe((data: { sections: Section[] }) => {
      this.sections = data.sections;
      this.sectionscopy = data.sections.map(section => ({ ...section }));
    });
  }

  performSearch() {
    this.sections.forEach((section, sectionIndex) => {
      section.products = this.sectionscopy[sectionIndex].products.filter((product) => {
        const combinedFields = `${product.name}`;
        return combinedFields.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    });
  }
  

}
