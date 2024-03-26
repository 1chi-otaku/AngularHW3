import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {
  @Input() card: any;
  age: string = '';

  ngOnInit() {
    this.age = this.formatAge(this.card.birthYear);
  }

  private formatAge(birthYear: number): string {
    let now = new Date();
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth() + 1;
  
    let years = currentYear - birthYear;
    let months = currentMonth;
  
    if (currentMonth < birthYear) {
      years--;
      months += 12;
    }
  
    if (months >= 12) {
      years++;
      months -= 12;
    }
  
    let yearsText = years > 0 ? `${years} ${this.getPlural(years, 'year', 'years')}` : '';
    let monthsText = months > 0 ? `${months} ${this.getPlural(months, 'month', 'months')}` : '';
  
    return `${yearsText}${years > 0 && months > 0 ? ' and ' : ''}${monthsText}`;
  }
  
  
  







  private getPlural(n: number, singular: string, plural: string) {
    return n === 1 ? singular : plural;
  }

}
