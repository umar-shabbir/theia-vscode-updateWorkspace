/**
 * Generated using theia-extension-generator
 */
import { ContainerModule } from '@theia/core/shared/inversify';
import { TheiaExtensionContribution } from './theia-extension-contribution';


export default new ContainerModule(bind => {

    // Replace this line with the desired binding, e.g. "bind(CommandContribution).to(TheiaExtensionContribution)
    bind(TheiaExtensionContribution).toSelf();
});
