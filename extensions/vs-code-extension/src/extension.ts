import { commands, ExtensionContext, Uri, workspace } from "vscode";

export function activate(context: ExtensionContext) {
  // Create the show hello world command
  const showHelloWorldCommand = commands.registerCommand("vscode-extension.showHelloWorld", async () => {
    // HelloWorldPanel.render(context.extensionUri);
    
    await workspace.fs.createDirectory(Uri.joinPath(context.extensionUri, "NewDirectory"));

    const currentWorkspaceFolders = workspace.workspaceFolders;
    const currentWorkspaceFoldersLength = currentWorkspaceFolders ? currentWorkspaceFolders.length : 0;

    workspace.updateWorkspaceFolders(currentWorkspaceFoldersLength, 0, {
        uri: Uri.joinPath(context.extensionUri, "NewDirectory")
    });
  });

  // Add command to the extension context
  context.subscriptions.push(showHelloWorldCommand);
}
