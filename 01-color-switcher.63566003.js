!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body"),isActive:!1};t.stopBtn.disabled=!0;var e=null;t.startBtn.addEventListener("click",(function(){!1===t.isActive&&(t.isActive=!0,t.stopBtn.disabled=!1,t.startBtn.disabled=!0),e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stopBtn.addEventListener("click",(function(){t.isActive&&(t.isActive=!1,t.stopBtn.disabled=!0,t.startBtn.disabled=!1),clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.63566003.js.map