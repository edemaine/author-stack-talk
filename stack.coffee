document.querySelectorAll('.autostack').forEach (elt) =>
  #console.log elt
  [match, names, year] = elt.innerText.match /^\s*([^\d]+)(?:\s+(\d+))?\s*$/
  year ?= ''
  split = names.split /\s*;\s*/g
  elt.innerHTML = """
    <div class="stack" title="#{names} (#{split.length}) #{year}">
    #{(for name, i in split
      (if i then '<div class="semi">;</div>' else '') +
      """<div class="name">#{name}</div>"""
    ).join '\n'}
    </div> #{year}
  """
