import { Component, Injector } from '@angular/core';
import { IControlBuilder, ForgeGenericControl } from '@lowcodeunit/elements';
import { ForgeMaterialNavToolbarDetails, ForgeMaterialNavToolbarConfig } from '../material-nav-toolbar.core';

@Component({
	selector: 'forge-material-nav-toolbar-builder',
	templateUrl: './material-nav-toolbar-builder.component.html',
	styleUrls: ['./material-nav-toolbar-builder.component.scss']
})
export class ForgeMaterialNavToolbarBuilderComponent
	extends ForgeGenericControl<ForgeMaterialNavToolbarDetails, ForgeMaterialNavToolbarConfig>
	implements IControlBuilder<ForgeMaterialNavToolbarDetails, ForgeMaterialNavToolbarConfig> {
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
