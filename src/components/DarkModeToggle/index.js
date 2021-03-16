const DarkModeToggle = ({darkMode, toggleDarkMode}) => <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>


export default DarkModeToggle;