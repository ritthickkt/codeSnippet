// The module 'vscode' contains the VS Code extensibility API

// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
require('dotenv').config();

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Code Snippet Extension Successfully Installed!');
  const apiDevKey = process.env.API_DEV_KEY;

  const disposable4 = vscode.commands.registerCommand('codeSnippet.codeSnippetNever', async function () {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active editor found.');
      return;
    }
    const selection = editor.selection;
    const selectedText = editor.document.getText(selection);
    if (!selectedText) {
      vscode.window.showErrorMessage('No text selected. Please select some code to paste.');
      return;
    }
    try {
      const response = await fetch('https://pastebin.com/api/api_post.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          api_dev_key: apiDevKey,
          api_paste_code: selectedText,
          api_option: 'paste'
        })
      });
      const result = await response.text();
      await vscode.env.clipboard.writeText(result);
      vscode.window.showInformationMessage(`Link copied to clipboard!`);
      vscode.window.showInformationMessage(`Pastebin response: ${result}`);
    } catch (err) {
      vscode.window.showErrorMessage('Failed to create paste: ' + err.message);
    }
  });

  const disposable5 = vscode.commands.registerCommand('codeSnippet.codeSnippet10M', async function () {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active editor found.');
      return;
    }
    const selection = editor.selection;
    const selectedText = editor.document.getText(selection);
    if (!selectedText) {
      vscode.window.showErrorMessage('No text selected. Please select some code to paste.');
      return;
    }
    try {
      const response = await fetch('https://pastebin.com/api/api_post.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          api_dev_key: 'UXwrG5lgmfhTjlOOlwcXDyyQARE71bY5',
          api_paste_code: selectedText,
          api_paste_expire_date: '10M',
          api_option: 'paste'
        })
      });
      const result = await response.text();
      await vscode.env.clipboard.writeText(result);
      vscode.window.showInformationMessage(`Link copied to clipboard!`);
      vscode.window.showInformationMessage(`Pastebin response: ${result}`);
    } catch (err) {
      vscode.window.showErrorMessage('Failed to create paste: ' + err.message);
    }
  });

  const disposable6 = vscode.commands.registerCommand('codeSnippet.codeSnippet1D', async function () {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active editor found.');
      return;
    }
    const selection = editor.selection;
    const selectedText = editor.document.getText(selection);
    if (!selectedText) {
      vscode.window.showErrorMessage('No text selected. Please select some code to paste.');
      return;
    }
    try {
      const response = await fetch('https://pastebin.com/api/api_post.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          api_dev_key: 'UXwrG5lgmfhTjlOOlwcXDyyQARE71bY5',
          api_paste_code: selectedText,
          api_paste_expire_date: '1D',
          api_option: 'paste'
        })
      });
      const result = await response.text();
      await vscode.env.clipboard.writeText(result);
      vscode.window.showInformationMessage(`Link copied to clipboard!`);
      vscode.window.showInformationMessage(`Pastebin response: ${result}`);
    } catch (err) {
      vscode.window.showErrorMessage('Failed to create paste: ' + err.message);
    }
  });
  
  context.subscriptions.push(disposable4);
  context.subscriptions.push(disposable5);
  context.subscriptions.push(disposable6);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
