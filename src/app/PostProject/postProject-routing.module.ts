import { ProjectDetailComponent } from './detailsInformation/projectdetail.component';
import { ProjectDetailTabs } from './projectdetailtabs/projectdetailtabs.component';

import { InitialInformation } from './InitialInformation/initialInformation.component';

import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
	{
	   path: 'initialInformation',
           component: InitialInformation
	},
	{
	   path: 'postprojectDetails',
           component: ProjectDetailComponent, data: { animation: 'dolphin' }
	},
		
	{
	   path: '',
	   redirectTo: '/initialInformation',
	   pathMatch: 'full'
	},
    {path: 'ProjectdetailsTab', component:ProjectDetailTabs}
      	
];
@NgModule({
  imports: [ 
          RouterModule.forChild(routes) 
  ],
  exports: [ 
          RouterModule 
  ]
})
export class postProjectRoutingModule{ }  