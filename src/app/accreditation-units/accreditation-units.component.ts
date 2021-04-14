import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';

import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';



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


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
 interface FoodNode {
  name: string;
  children?: FoodNode[];
  subName?: string;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Toutes les unités',
    children: [
      {
        name: 'ENAC',
        subName:'- CF 12001',
        children: [
          {
            name: 'ENAC-DEC',
            subName:'- CF 12001',
            children: [
              {
                name: 'ENAC-DEC',
                subName:'- CF 12001',
                children: [
                  {
                    name: 'ENAC-DEC',
                    subName:'- CF 12001',
                    children: [
                      {
                        name: 'ENAC-DEC',
                        subName:'- CF 12001',
                      }
                    ]
                  }
                ]
            },
              {name: 'ENAC-DEC',
              subName:'- CF 12001',
            }
              
            ]
          },
          {
            name: 'ENAC-DEC',
            subName:'- CF 12001',
            children: [
              {name: 'ENAC-DEC',
              subName:'- CF 12001',},
              {name: 'ENAC-DEC'}
            ]
          },
          {
            name: 'ENAC-DEC',
            children: [
              {name: 'ENAC-DEC'},
              {name: 'ENAC-DEC'}
            ]
          },
          {
            name: 'ENAC-DEC',
            children: [
              {name: 'ENAC-DEC'},
              {name: 'ENAC-DEC'}
            ]
          },
          {
            name: 'ENAC-DEC',
            children: [
              {name: 'ENAC-DEC'},
              {name: 'ENAC-DEC'}
            ]
          },
        ]
      }, {
        name: 'IOT',
        children: [
          {
            name: 'ENAC-DEC',
            children: [
              {name: 'ENAC-DEC'},
              {name: 'ENAC-DEC'}
            ]
          },
          {
            name: 'ENAC-DEC',
            children: [
              {name: 'ENAC-DEC'},
              {name: 'ENAC-DEC'}
            ]
          },
          {
            name: 'ENAC-DEC',
            children: [
              {name: 'ENAC-DEC'},
              {name: 'ENAC-DEC'}
            ]
          },
          {
            name: 'ENAC-DEC',
            children: [
              {name: 'ENAC-DEC'},
              {name: 'ENAC-DEC'}
            ]
          },
          {
            name: 'ENAC-DEC',
            children: [
              {name: 'ENAC-DEC'},
              {name: 'ENAC-DEC'}
            ]
          },
        ]
      },
    ]
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  subName?: string;
}



@Component({
  selector: 'app-accreditation',
  templateUrl: './accreditation-units.component.html',
  styleUrls: ['./accreditation-units.component.scss']
})
export class AccreditationUnitsComponent  {
  displayedColumns: string[] = ['select', 'people', 'unitcf', 'statutc', 'functionl', 'startdate', 'enddate', 'state', 'icon1', 'icon2'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel(true, []);

  @ViewChild(MatSort) sort: MatSort;






  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      subName: node.subName
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSourceTree = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSourceTree.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;








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
