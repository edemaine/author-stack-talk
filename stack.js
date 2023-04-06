(function() {
  document.querySelectorAll('.autostack').forEach((elt) => {
    var i, match, name, names, split, year;
    //console.log elt
    [match, names, year] = elt.innerText.match(/^\s*([^\d]+)(?:\s+(\d+))?\s*$/);
    if (year == null) {
      year = '';
    }
    split = names.split(/\s*;\s*/g);
    return elt.innerHTML = `<div class="stack" title="${names} (${split.length}) ${year}">
${((function() {
      var j, len, results;
      results = [];
      for (i = j = 0, len = split.length; j < len; i = ++j) {
        name = split[i];
        results.push((i ? '<div class="semi">;</div>' : '') + `<div class="name">${name}</div>`);
      }
      return results;
    })()).join('\n')}
</div> ${year}`;
  });

}).call(this);
