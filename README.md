## Features

- Automatically focuses the ChatGPT message composer
- Works when clicking empty areas of the ChatGPT page
- Does not interfere with buttons or links
- Does not interfere with text selection
- Uses multiple methods to locate the ChatGPT composer
- Lightweight with no external dependencies

## Installation

### 1. Install Tampermonkey

Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension.

### 2. Install ChatFocus

1. Open the `Focus.user.js` file from this repository.
2. Copy its contents.
3. Create a new userscript in Tampermonkey.
4. Paste the code into the userscript editor.
5. Save the userscript.

### 3. Open ChatGPT

Open:

    https://chatgpt.com/

Make sure ChatFocus is enabled in Tampermonkey.

Click on an empty area of the page and start typing.

## Troubleshooting

### ChatFocus is not working

If ChatFocus is installed but does not work, make sure Tampermonkey is allowed to run userscripts.

### Chrome

1. Open:
   `chrome://extensions`
2. Find **Tampermonkey**.
3. Click **Details**.
4. Enable **Allow User Scripts**.
5. If **Allow User Scripts** is not available, enable **Developer mode** from the top-right corner of the Extensions page.
6. Make sure Tampermonkey has access to the ChatGPT website.
7. Reload ChatGPT.
8. Make sure ChatFocus is enabled in Tampermonkey.

After reloading, click an empty area of ChatGPT and try typing again.

### If it still doesn't work

Try the following:

- Refresh ChatGPT with `Ctrl + Shift + R` or `Cmd + Shift + R`
- Make sure ChatFocus is enabled in Tampermonkey
- Make sure Tampermonkey is enabled in your browser
- Make sure you are using `https://chatgpt.com/`
- Disable other userscripts or extensions that may interfere with ChatGPT
- Check the browser console for errors

If the problem persists, open an issue with the following information:

- Browser
- Browser version
- Tampermonkey version
- ChatGPT URL
- Description of the problem
- Any console errors

## How It Works

ChatFocus listens for mouse interactions on the ChatGPT page.

When you click an empty area, it checks whether:

- You clicked a button or link
- You clicked an interactive element
- You are selecting text
- You dragged the mouse

If none of these apply, ChatFocus focuses the ChatGPT message composer.

This allows you to continue typing without manually clicking the composer.

## Text Selection

ChatFocus is designed to avoid interfering with normal text selection.

For example:

    Click + drag across a ChatGPT response
                  ↓
            Select text normally
                  ↓
                 Copy

The composer will not steal focus while you are dragging to select text.

## Compatibility

Currently supports:

- ChatGPT
- Tampermonkey
- Chrome-based browsers

### Supported ChatGPT URLs

- `https://chatgpt.com/`
- `https://chat.openai.com/`

## Known Limitations

ChatGPT's interface can change over time.

Because ChatFocus needs to locate the ChatGPT composer, changes to ChatGPT's page structure may require updates to the script.

If the script stops working after a ChatGPT update, please open an issue with:

- Browser
- Browser version
- Tampermonkey version
- ChatGPT URL
- Description of the problem

## Contributing

Contributions, bug reports, and improvements are welcome.

If you find a problem, please open an issue or submit a pull request.
