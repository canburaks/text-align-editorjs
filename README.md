[![](https://data.jsdelivr.com/v1/package/npm/@canburaks/text-align-editorjs/badge)](https://www.jsdelivr.com/package/npm/@canburaks/text-align-editorjs)

# Inline text-align plugin for editorjs.
A text-alignment plugin for the [EditorJS](https://editorjs.io/). Text alignment with a button that tries all options (left, center, right, justify) in turn respectively. This is my first contribution to public.
The plugin works on paragraph blocks. The selection of styled elements within the paragraph also changes the alignment of the parent paragraph. (Previously it didn't work as expected)
<br/>

![text-align plugin styled elements](https://github.com/canburaks/text-align-editorjs/blob/master/assets/text-align-nietzsche.gif)

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
