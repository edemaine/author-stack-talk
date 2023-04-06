(function() {
  document.querySelectorAll('.autostack').forEach((elt) => {
    var i, match, name, names, year;
    //console.log elt
    [match, names, year] = elt.innerText.match(/^\s*([^\d]+)(?:\s+(\d+))?\s*$/);
    return elt.innerHTML = `<div class="stack" title="${names}">
${((function() {
      var j, len, ref, results;
      ref = names.split(/\s*;\s*/g);
      results = [];
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        name = ref[i];
        results.push((i ? '<div class="semi">;</div>' : '') + `<div class="name">${name}</div>`);
      }
      return results;
    })()).join('\n')}
</div> ${year != null ? year : ''}`;
  });

}).call(this);
