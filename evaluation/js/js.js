const windowFeatures = "left=800,top=250,width=320,height=320";
const links = document.querySelectorAll("a[target='SingleSecondaryWindowName']");
window.open("./login.htm", "loginWindow", windowFeatures);
let windowObjectReference = null;

function openRequestedSingleTab(url) {
    
    if (windowObjectReference === null || windowObjectReference.closed) {
      windowObjectReference = window.open(url, "SingleSecondaryWindowName", windowFeatures);
    } else if (previousURL !== url) {
      windowObjectReference = window.open(url, "SingleSecondaryWindowName", windowFeatures);
      windowObjectReference.focus();
    } else {
      windowObjectReference.focus();
    };
    previousURL = url;
  }

  for (const link of links) {
    link.addEventListener("click", (event) => {
      openRequestedSingleTab(link.href);
      event.preventDefault();
    }, false);
  }