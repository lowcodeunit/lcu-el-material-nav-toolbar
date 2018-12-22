import { NgModule } from '@angular/core';
import { DndModule } from '@beyerleinf/ngx-dnd';
import { FathymSharedModule } from '@lcu/hosting';
import { BaseDisplayModule } from '@lcu/elements';
import { ForgeMaterialNavToolbarBuilderComponent } from './material-nav-toolbar-builder/material-nav-toolbar-builder.component';
import { ForgeMaterialNavToolbarMarketplaceComponent } from './material-nav-toolbar-marketplace/material-nav-toolbar-marketplace.component';
import { ForgeMaterialNavToolbarRenderComponent } from './material-nav-toolbar-render/material-nav-toolbar-render.component';
import { MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { DAFUIModule } from '@lcu/daf-ui';

export class ForgeMaterialNavToolbarDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeMaterialNavToolbarBuilderComponent;
	}

	public Marketplace() {
		return ForgeMaterialNavToolbarMarketplaceComponent;
	}

	public Render() {
		return ForgeMaterialNavToolbarRenderComponent;
	}
}

var comps = [
	ForgeMaterialNavToolbarBuilderComponent,
	ForgeMaterialNavToolbarMarketplaceComponent,
	ForgeMaterialNavToolbarRenderComponent,
];

@NgModule({
	imports: [
		FathymSharedModule,
		DAFUIModule,
		DndModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatFormFieldModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatMenuModule,
		MatToolbarModule,
	],
	declarations: [
		...comps,
	],
	exports: [
		...comps,
	],
	entryComponents: [
		...comps,
	]
})
export class ForgeMaterialNavToolbarModule { }
