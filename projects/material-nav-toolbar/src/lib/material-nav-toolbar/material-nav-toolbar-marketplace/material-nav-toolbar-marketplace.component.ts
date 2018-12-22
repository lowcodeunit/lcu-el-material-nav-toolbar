import { Component, Injector } from '@angular/core';
import { IControlMarketplace } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeMaterialNavToolbarDetails, ForgeMaterialNavToolbarConfig } from '../material-nav-toolbar.core';

@Component({
	selector: 'forge-material-nav-toolbar-marketplace',
	templateUrl: './material-nav-toolbar-marketplace.component.html',
	styleUrls: ['./material-nav-toolbar-marketplace.component.scss']
})
export class ForgeMaterialNavToolbarMarketplaceComponent
	extends ForgeGenericControl<ForgeMaterialNavToolbarDetails, ForgeMaterialNavToolbarConfig>
	implements IControlMarketplace<ForgeMaterialNavToolbarDetails, ForgeMaterialNavToolbarConfig> {
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
