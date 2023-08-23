interface FsDocument extends HTMLDocument {
    webkitExitFullscreen: any;
    webkitFullscreenElement: Element;
    mozFullScreenElement?: Element;
    msFullscreenElement?: Element;
    msExitFullscreen?: () => void;
    mozCancelFullScreen?: () => void;
  }
  
  export function isFullScreen(): boolean {
    const fsDoc = <FsDocument> document;
  
    return !!(fsDoc.fullscreenElement || fsDoc.mozFullScreenElement || fsDoc.webkitFullscreenElement || fsDoc.msFullscreenElement);
  }
  
  interface FsDocumentElement extends HTMLElement {
      webkitRequestFullscreen: any;
    msRequestFullscreen?: () => void;
    mozRequestFullScreen?: () => void;
  }
  
  export function toggleFullScreen(): void {
    const fsDoc = <FsDocument> document;
  
    if (!isFullScreen()) {
      const fsDocElem = <FsDocumentElement> document.documentElement;
  
      if (fsDocElem.requestFullscreen)
        fsDocElem.requestFullscreen();
      else if (fsDocElem.msRequestFullscreen)
        fsDocElem.msRequestFullscreen();
      else if (fsDocElem.mozRequestFullScreen)
        fsDocElem.mozRequestFullScreen();
      else if (fsDocElem.webkitRequestFullscreen)
        fsDocElem.webkitRequestFullscreen();
    }
    else if (fsDoc.exitFullscreen)
      fsDoc.exitFullscreen();
    else if (fsDoc.msExitFullscreen)
      fsDoc.msExitFullscreen();
    else if (fsDoc.mozCancelFullScreen)
      fsDoc.mozCancelFullScreen();
    else if (fsDoc.webkitExitFullscreen)
      fsDoc.webkitExitFullscreen();
  }
  
  export function setFullScreen(full: boolean): void {
    if (full !== isFullScreen())
      toggleFullScreen();
  }