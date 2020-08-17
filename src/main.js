export class TextAlign {
    
    static get isInline() {
        return true;
    }
    constructor() {
        this.options = ["left", "center", "right"]
        this.currenticon = '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="square" stroke-linejoin="arcs"><path d="M19 9.5H5M21 4.5H3M21 14.5H3M19 19.5H5"/></svg>'
        this.aligncurrenticon = new DOMParser().parseFromString(this.currenticon,'application/xml');
        this.button = null;
        this.state = "left";
    }

    render() {
        this.button = document.createElement('button');
        //this.button.classList.add('align-text');
        this.button.classList = 'ce-inline-tool ce-inline-tool--align-text';
        this.button.appendChild(this.button.ownerDocument.importNode(this.aligncurrenticon.documentElement, true))
        return this.button;
    }

    surround(range) {
        console.log("htis", this)
        //console.log("range: ", range.__proto__, range)
        if (this.state === "left") {
            range.commonAncestorContainer.parentNode.style.textAlign = "center"
            this.state = "center"
            this.button.childNodes[0].innerHTML = '<path d="M21 9.5H7M21 4.5H3M21 14.5H3M21 19.5H7"/>'

        }
        else if (this.state === "center") {
            range.commonAncestorContainer.parentNode.style.textAlign = "right"
            this.state = "right"
            this.button.childNodes[0].innerHTML = '<path d="M21 9.5H3M21 4.5H3M21 14.5H3M21 19.5H3"/>'
        }
        else if (this.state === "right") {
            range.commonAncestorContainer.parentNode.style.textAlign = "justify"
            this.state = "justify"
            this.button.childNodes[0].innerHTML = '<path d="M17 9.5H3M21 4.5H3M21 14.5H3M17 19.5H3"/>'
        }
        else if (this.state === "justify") {
            range.commonAncestorContainer.parentNode.style.textAlign = "left"
            this.state = "left"
            this.button.childNodes[0].innerHTML = '<path d="M19 9.5H5M21 4.5H3M21 14.5H3M19 19.5H5"/>'
        }
    }

    checkState(text){
    console.log("anchor node: ", text)
        if (!text) {
            return;
        }
    }

}


