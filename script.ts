import {styles} from "laravel-mix";

interface StyleDictionary {
    [styleName: string]: string;
}

class StyleManager {
    currentStyle: string = 'default';
    styles: StyleDictionary = {
        default: 'style/style.css',
        alt: 'style/style2.css',
        tird: 'style/style2.css'
    };

    applyStyle(styleName: string) {
        const newStyle = this.styles[styleName];
        if (newStyle) {
            this.removeOldStyle();
            this.loadNewStyle(newStyle);
            this.hideCurrentStyleLink();
            this.currentStyle = styleName;
        }
    }

    private removeOldStyle() {
        const oldStyleLink = document.getElementById('style-link');
        if (oldStyleLink) {
            oldStyleLink.remove();
        }
    }

    private loadNewStyle(stylePath: string) {
        const head = document.head;
        const link = document.createElement('link');

        link.id = 'style-link';
        link.rel = 'stylesheet';
        link.href = stylePath;

        head.appendChild(link);
    }

    private hideCurrentStyleLink() {
        const currentStyleLink = document.getElementById(`${this.currentStyle}`);
        console.log(this.currentStyle)
        for (let key in this.styles) {
            if (this.styles.hasOwnProperty(key)) {
                const iter = document.getElementById(`${key}`);
                iter.style.display = "block"
            }
        }
        if (currentStyleLink) {
            currentStyleLink.style.display = 'none';
        }
    }
}

const styleManager = new StyleManager();

window.onload = ()=> {
    document.getElementById('default')?.addEventListener('click', () => {
    styleManager.applyStyle('default');
    });

    document.getElementById('alt')?.addEventListener('click', () => {
        styleManager.applyStyle('alt');
    });

    document.getElementById('tird')?.addEventListener('click', () => {
        styleManager.applyStyle('tird');
    });
}