const THEMES = {
  light: {
    background: '#eee',
    color: '#000'
  },
  light2: {
    background: '#fff',
    color: '#000'
  },
  dark: {
    background: '#333',
    color: '#eee'
  },
  dark2: {
    background: '#444',
    color: '#eee'
  }
}

function determineTheme(darkMode) {
  return darkMode ? THEMES.dark : THEMES.light
}

function determineTheme2(darkMode) {
  return darkMode ? THEMES.dark2 : THEMES.light2
}

export {
  determineTheme,
  determineTheme2
}