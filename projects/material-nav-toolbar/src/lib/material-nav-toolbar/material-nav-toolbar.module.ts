import { NgModule } from '@angular/core';
import { DndModule } from '@beyerleinf/ngx-dnd';
import { FathymSharedModule } from '@lowcodeunit/common';
import { BaseDisplayModule, ForgeBuildersCoreModule } from '@lowcodeunit/elements';
import { ForgeMaterialNavToolbarBuilderComponent } from './material-nav-toolbar-builder/material-nav-toolbar-builder.component';
import { ForgeMaterialNavToolbarMarketplaceComponent } from './material-nav-toolbar-marketplace/material-nav-toolbar-marketplace.component';
import { ForgeMaterialNavToolbarRenderComponent } from './material-nav-toolbar-render/material-nav-toolbar-render.component';
import { MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule } from '@angular/material';

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
		ForgeBuildersCoreModule,
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
