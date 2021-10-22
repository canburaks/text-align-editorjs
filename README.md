[![](https://data.jsdelivr.com/v1/package/npm/@canburaks/text-align-editorjs/badge)](https://www.jsdelivr.com/package/npm/@canburaks/text-align-editorjs)

# Inline text-align plugin for editorjs.
Text alignment with a button that tries all options (left, center, right, justify) in turn respectively.

![text-align plugin editorjs](https://media.giphy.com/media/cmCF588Uv0nQZXOWZU/giphy.gif)

This is my first contribution to public. Therefore, it is highly probable to face an issue.

## Installation
```
yarn add @canburaks/text-align-editorjs
```

or 

```html
<script src="https://cdn.jsdelivr.net/npm/@canburaks/text-align-editorjs@1.1.0/dist/text-align.umd.min.js"></script>
```

## Usage

```
import TextAlign from "@canburaks/text-align-editorjs"

const editor = new EditorJS({ 
  	holder: 'editorjs', 
	tools: { 
        textAlign:TextAlign
    },
})

```


## License

[MIT](LICENSE).
