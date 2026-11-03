'use strict';

(function () {
  var params = new URLSearchParams(window.location.hash.slice(1) || window.location.search.slice(1));

  if (params.has('error') || params.has('error_code')) {
    document.getElementById('confirmacao-sucesso').hidden = true;
    document.getElementById('confirmacao-erro').hidden = false;
  }

  // Supabase appends session tokens to the URL; keep them out of history.
  if (window.location.hash || window.location.search) {
    window.history.replaceState(null, '', window.location.pathname);
  }
})();
