import PropTypes from 'prop-types';
import './DarkModeToggle.css'

const DarkModeToggle = ({darkMode, toggleDarkMode}) => <button className="darkModeToggle" onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>


export default DarkModeToggle;

DarkModeToggle.propTypes = {
  darkMode: PropTypes.bool, 
  toggleDarkMode: PropTypes.func
};