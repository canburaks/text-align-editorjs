# Inline text-align plugin for editorjs.
Text alignment with a button that tries all options (left, center, right, justify) in turn respectively.

![text-align plugin editorjs](https://media.giphy.com/media/cmCF588Uv0nQZXOWZU/giphy.gif)

This is my first contribution to public. Therefore, it is highly probable to face an issue.

```
yarn add @canburaks/text-align-editorjs
```


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
