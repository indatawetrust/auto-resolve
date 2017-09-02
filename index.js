const isPromise = p => Promise.resolve(p) == p;

const autoResolve = (funcs) => {
  if (Array.isArray(funcs)) {
    let promises = []

    for (let f of funcs) {
      promises.push(isPromise(f) ? f : Promise.resolve(f()))
    }
    
    return Promise.all(promises)
  } else {
    const f = funcs

    return isPromise(f) ? f : Promise.resolve(f())
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = autoResolve;
} else {
  window.autoResolve = autoResolve;
}
