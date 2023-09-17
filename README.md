# lumau-dark-mode - Lit Webcomponent

Lit component to manage light - dark mode. Initially, it looks for the theme variable in local storage.

If it exists, add the case dark or light (according to the value stored in localstorage) to the html element of the page.

If the theme variable does not exist in localstorage, it looks for the user's preference in the browser by adding the dark or light class to the html element.

The component states, light and dark, define how the icon is displayed, modify the theme variable in localstorage and the class of the html element.

## Instalation

## Usage

```html
<lumau-dark-mode></lumau-dark-mode>
```

## CSS Custom Properties

You can customize the component using this CSS Custom Properties.

| Custom property                  | Description                              | Default |
| -------------------------------- | :--------------------------------------- | :------ |
| --lumau-dark-mode-color          | The color of icon                        | #000    |
| --lumau-dark-mode-bg-hover-color | The background color for the hover event | #808080 |
| --lumau-dark-mode-hover-color    | The icon color for the hover event       | #000    |

## Example

```css
// style.css
.dark {
  --lumau-dark-mode-color: #0f172a;
  --lumau-dark-mode-bg-hover-color: #cbd5e1;
  --lumau-dark-mode-hover-color: #0f172a;
}

.light {
  --lumau-dark-mode-color: #0f172a;
  --lumau-dark-mode-bg-hover-color: #cbd5e1;
  --lumau-dark-mode-hover-color: #0f172a;
}
```
