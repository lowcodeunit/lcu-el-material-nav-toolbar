import { Component, Injector } from '@angular/core';
import { IControlRender } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeMaterialNavToolbarDetails, ForgeMaterialNavToolbarConfig } from '../material-nav-toolbar.core';

@Component({
	selector: 'forge-material-nav-toolbar-render',
	templateUrl: './material-nav-toolbar-render.component.html',
	styleUrls: ['./material-nav-toolbar-render.component.scss']
})
export class ForgeMaterialNavToolbarRenderComponent
	extends ForgeGenericControl<ForgeMaterialNavToolbarDetails, ForgeMaterialNavToolbarConfig>
	implements IControlRender<ForgeMaterialNavToolbarDetails, ForgeMaterialNavToolbarConfig> {
	//  Fields

	//  Properties

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);
	}

	//	Life Cycle

	//	API Methods

	//	Helpers
}
