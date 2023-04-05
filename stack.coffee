document.querySelectorAll('.autostack').forEach (elt) =>
  console.log elt
  [match, names, year] = elt.innerText.match /^\s*([^\d]+)\s+(\d+)\s*$/
  elt.innerHTML = """
    <div class="stack" title="#{names}">
    #{(for name in names.split /\s*;\s*/g
      """<div class="name">#{name}</div>"""
    ).join '\n'}
    </div> #{year}
  """
