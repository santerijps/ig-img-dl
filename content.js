(() => {

  function getImgSrc(target) {
    if (target.classList.contains('_aagw'))
      return target.parentElement.firstChild.firstChild.src;
    if (target.classList.contains('_abpo'))
      return target.parentElement.parentElement.firstChild.firstChild.firstChild.src;
  }

  document.addEventListener('contextmenu', (event) => {
    if (event.ctrlKey) {
      const src = getImgSrc(event.target);
      if (typeof src !== 'undefined') {
        event.preventDefault();
        window.open(src, '_blank');
      }
    }
  });

})()