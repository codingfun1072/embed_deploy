function fromB64(n){const e=atob(n),o=Uint8Array.from(e,(n=>n.codePointAt(0)));return(new TextDecoder).decode(o)}console.info("[Blocksi Embed]: Running!");const containerElem=document.createElement("div");containerElem.innerHTML="<style>\n    * {\n        border: none !important;\n    }\n    \n    html, body, iframe {\n        color-scheme: dark light;\n        visibility: visible;\n        width: 100vw !important;\n        height: 100vh !important;\n        overflow: hidden;\n    }\n    \n    html, body {\n        margin: 0;\n        box-sizing: border-box;\n    }\n    \n    iframe {\n        border: none;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n    }\n</style>\n<iframe></iframe>",document.body.replaceChildren(...containerElem.childNodes);const iframe=document.querySelector("iframe");function loadHTML(){console.info("[Blocksi Embed]: Loading HTML"),iframe.srcdoc=fromB64(location.hash.slice(1)),iframe.contentDocument.documentElement.style.colorScheme="dark light"}window.onhashchange=loadHTML,loadHTML();