import { Component, Injector } from '@angular/core';
import { IControlRender, ForgeGenericControl } from '@lowcodeunit/elements';
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
