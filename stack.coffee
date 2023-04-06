document.querySelectorAll('.autostack').forEach (elt) =>
  #console.log elt
  [match, names, year] = elt.innerText.match /^\s*([^\d]+)(?:\s+(\d+))?\s*$/
  elt.innerHTML = """
    <div class="stack" title="#{names}">
    #{(for name, i in names.split /\s*;\s*/g
      (if i then '<div class="semi">;</div>' else '') +
      """<div class="name">#{name}</div>"""
    ).join '\n'}
    </div> #{year ? ''}
  """
