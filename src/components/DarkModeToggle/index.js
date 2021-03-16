import './DarkModeToggle.css'

const DarkModeToggle = ({darkMode, toggleDarkMode}) => <button className="darkModeToggle" onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>


export default DarkModeToggle;