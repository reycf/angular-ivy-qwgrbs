import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';


const ELEMENT_DATA = [
  { people: { person: 'Kevin Hassler', sciper: 123435}, unitcf: {unit: 'asdf', cf: 'cf'}, statutc: {statut: 'Personnel', classe: 'Personnel scientifique'}, functionl: {fr: 'Assistant scientifique ', en: 'Scientific assistant'}, startdate: '02/01/2021', enddate:'31/10/2021', state:'Active', icon1:'refresh-cw', icon2:'trash-2'},
  { people: { person: 'Stephen King', sciper: 123435}, unitcf: {unit: 'asdf', cf: 'cf'}, statutc: {statut: 'Personnel', classe: 'Personnel scientifique'}, functionl: {fr: 'Assistant scientifique ', en: 'Scientific assistant'}, startdate: '02/01/2021', enddate:'31/10/2021', state:'Active', icon1:'refresh-cw', icon2:'trash-2'},
  { people: { person: 'Mickey Ward', sciper: 123435}, unitcf: {unit: 'asdf', cf: 'cf'}, statutc: {statut: 'Personnel', classe: 'Personnel scientifique'}, functionl: {fr: 'Assistant scientifique ', en: 'Scientific assistant'}, startdate: '02/01/2021', enddate:'31/10/2021', state:'Active', icon1:'refresh-cw', icon2:'trash-2'},
  { people: { person: 'Stephane Robuchon', sciper: 123435}, unitcf: {unit: 'asdf', cf: 'cf'}, statutc: {statut: 'Personnel', classe: 'Personnel scientifique'}, functionl: {fr: 'Assistant scientifique ', en: 'Scientific assistant'}, startdate: '02/01/2021', enddate:'31/10/2021', state:'Active', icon1:'refresh-cw', icon2:'trash-2'},
  { people: { person: 'Julio Domingos', sciper: 123435}, unitcf: {unit: 'asdf', cf: 'cf'}, statutc: {statut: 'Personnel', classe: 'Personnel scientifique'}, functionl: {fr: 'Assistant scientifique ', en: 'Scientific assistant'}, startdate: '02/01/2021', enddate:'31/10/2021', state:'Active', icon1:'refresh-cw', icon2:'trash-2'},
  { people: { person: 'Stephen King', sciper: 123435}, unitcf: {unit: 'asdf', cf: 'cf'}, statutc: {statut: 'Personnel', classe: 'Personnel scientifique'}, functionl: {fr: 'Assistant scientifique ', en: 'Scientific assistant'}, startdate: '02/01/2021', enddate:'31/10/2021', state:'Active', icon1:'refresh-cw', icon2:'trash-2'},
  { people: { person: 'Kevin Hassler', sciper: 123435}, unitcf: {unit: 'asdf', cf: 'cf'}, statutc: {statut: 'Personnel', classe: 'Personnel scientifique'}, functionl: {fr: 'Assistant scientifique ', en: 'Scientific assistant'}, startdate: '02/01/2021', enddate:'31/10/2021', state:'Active', icon1:'refresh-cw', icon2:'trash-2'},
  { people: { person: 'Mickey Ward', sciper: 123435}, unitcf: {unit: 'asdf', cf: 'cf'}, statutc: {statut: 'Personnel', classe: 'Personnel scientifique'}, functionl: {fr: 'Assistant scientifique ', en: 'Scientific assistant'}, startdate: '02/01/2021', enddate:'31/10/2021', state:'Active', icon1:'refresh-cw', icon2:'trash-2'},
  { people: { person: 'Kevin Hassler', sciper: 123435}, unitcf: {unit: 'asdf', cf: 'cf'}, statutc: {statut: 'Personnel', classe: 'Personnel scientifique'}, functionl: {fr: 'Assistant scientifique ', en: 'Scientific assistant'}, startdate: '02/01/2021', enddate:'31/10/2021', state:'Active', icon1:'refresh-cw', icon2:'trash-2'},
  { people: { person: 'Stephen King', sciper: 123435}, unitcf: {unit: 'asdf', cf: 'cf'}, statutc: {statut: 'Personnel', classe: 'Personnel scientifique'}, functionl: {fr: 'Assistant scientifique ', en: 'Scientific assistant'}, startdate: '02/01/2021', enddate:'31/10/2021', state:'Active', icon1:'refresh-cw', icon2:'trash-2'},
  { people: { person: 'Stephane Robuchon', sciper: 123435}, unitcf: {unit: 'asdf', cf: 'cf'}, statutc: {statut: 'Personnel', classe: 'Personnel scientifique'}, functionl: {fr: 'Assistant scientifique ', en: 'Scientific assistant'}, startdate: '02/01/2021', enddate:'31/10/2021', state:'Active', icon1:'refresh-cw', icon2:'trash-2'},
  { people: { person: 'Mickey Ward', sciper: 123435}, unitcf: {unit: 'asdf', cf: 'cf'}, statutc: {statut: 'Personnel', classe: 'Personnel scientifique'}, functionl: {fr: 'Assistant scientifique ', en: 'Scientific assistant'}, startdate: '02/01/2021', enddate:'31/10/2021', state:'Active', icon1:'refresh-cw', icon2:'trash-2'},
  { people: { person: 'Stephane Robuchon', sciper: 123435}, unitcf: {unit: 'asdf', cf: 'cf'}, statutc: {statut: 'Personnel', classe: 'Personnel scientifique'}, functionl: {fr: 'Assistant scientifique ', en: 'Scientific assistant'}, startdate: '02/01/2021', enddate:'31/10/2021', state:'Active', icon1:'refresh-cw', icon2:'trash-2'}
];


@Component({
  selector: 'app-accreditation',
  templateUrl: './accreditation-mobile.component.html',
  styleUrls: ['./accreditation-mobile.component.scss']
})
export class AccreditationMobileComponent  {
  displayedColumns: string[] = ['select', 'people', 'unitcf', 'statutc', 'functionl', 'startdate', 'enddate', 'state', 'icon1', 'icon2'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel(true, []);

  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.people + 1}`;
  }

}
