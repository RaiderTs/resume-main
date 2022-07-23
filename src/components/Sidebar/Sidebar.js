import Contacts from '../Contacts';
import TechSkills from '../TechSkills';
import SoftSkills from '../SoftSkills';
import PropTypes from 'prop-types';
import s from './Sidebar.module.css';
import myPhoto from '../../img/photo.jpeg';
import cv from '../../assets/CV_2.pdf';
import crt from '../../assets/Oleksandr Tsotsko.pdf';
function Sidebar({ contacts, techSkills, softSkills }) {
  return (
    <aside className={s.sidebar}>
      <img src={myPhoto} alt="Tsotsko Alexandr" className={s.photo} />
      <div className={s.section}>
        <h3 className={s.title}>Contacts</h3>
        <ul>
          {contacts.map(({ id, label, link, text, icon }) => (
            <Contacts
              key={id}
              label={label}
              link={link}
              text={text}
              icon={icon}
            />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Tech Skills</h3>
        <ul>
          {techSkills.map(({ id, label }) => (
            <TechSkills key={id} label={label} />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Soft Skills</h3>
        <ul>
          {softSkills.map(({ id, label }) => (
            <SoftSkills key={id} label={label} />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Language</h3>
        <p className={s.text}>English - Pre-intermediate</p>
      </div>

      <div className={s.section}>
        <h3 className={s.title}>Download</h3>
      </div>
      <div>
        <a className={s.link} href={cv} target="_blank" rel="noreferrer">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5MC42NjcgNDkwLjY2NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTI0NS4zMzMsMEMxMDkuODM5LDAsMCwxMDkuODM5LDAsMjQ1LjMzM3MxMDkuODM5LDI0NS4zMzMsMjQ1LjMzMywyNDUuMzMzICBzMjQ1LjMzMy0xMDkuODM5LDI0NS4zMzMtMjQ1LjMzM0M0OTAuNTE0LDEwOS45MDMsMzgwLjc2NCwwLjE1MywyNDUuMzMzLDB6IiBmaWxsPSIjZmY2YjA4IiBkYXRhLW9yaWdpbmFsPSIjMjE5NmYzIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTMxNy44NjcsMjIxLjg2N2wtMTkuMiwxOS4yVjExNy4zMzNjMC0yOS40NTUtMjMuODc4LTUzLjMzMy01My4zMzMtNTMuMzMzUzE5Miw4Ny44NzgsMTkyLDExNy4zMzMgIHYxMjMuNTg0bC0xOS4yLTE5LjJjLTE5LjEzOS0xOC4yODktNDkuMjc3LTE4LjI4OS02OC40MTYsMGMtMTguODg5LDE4Ljg5NC0xOC44ODksNDkuNTIyLDAsNjguNDE2bDExOC4yNTEsMTE4LjI1MSAgYzEyLjQ5NiwxMi40OTIsMzIuNzUyLDEyLjQ5Miw0NS4yNDgsMGwxMTguMjUxLTExOC4yNTFjMTguODg5LTE4Ljg5NCwxOC44ODktNDkuNTIyLDAtNjguNDE2ICBDMzY2Ljk3NSwyMDMuNTY1LDMzNi45NDYsMjAzLjYzMSwzMTcuODY3LDIyMS44Njd6IiBmaWxsPSIjZmFmYWZhIiBkYXRhLW9yaWdpbmFsPSIjZmFmYWZhIiBjbGFzcz0iIj48L3BhdGg+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
            alt="Download"
            width="25"
            className={s.icon}
          />
          Download CV
        </a>
      </div>
      <div className={s.section_two}>
        <a className={s.link} href={crt} target="_blank" rel="noreferrer">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5MC42NjcgNDkwLjY2NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTI0NS4zMzMsMEMxMDkuODM5LDAsMCwxMDkuODM5LDAsMjQ1LjMzM3MxMDkuODM5LDI0NS4zMzMsMjQ1LjMzMywyNDUuMzMzICBzMjQ1LjMzMy0xMDkuODM5LDI0NS4zMzMtMjQ1LjMzM0M0OTAuNTE0LDEwOS45MDMsMzgwLjc2NCwwLjE1MywyNDUuMzMzLDB6IiBmaWxsPSIjZmY2YjA4IiBkYXRhLW9yaWdpbmFsPSIjMjE5NmYzIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTMxNy44NjcsMjIxLjg2N2wtMTkuMiwxOS4yVjExNy4zMzNjMC0yOS40NTUtMjMuODc4LTUzLjMzMy01My4zMzMtNTMuMzMzUzE5Miw4Ny44NzgsMTkyLDExNy4zMzMgIHYxMjMuNTg0bC0xOS4yLTE5LjJjLTE5LjEzOS0xOC4yODktNDkuMjc3LTE4LjI4OS02OC40MTYsMGMtMTguODg5LDE4Ljg5NC0xOC44ODksNDkuNTIyLDAsNjguNDE2bDExOC4yNTEsMTE4LjI1MSAgYzEyLjQ5NiwxMi40OTIsMzIuNzUyLDEyLjQ5Miw0NS4yNDgsMGwxMTguMjUxLTExOC4yNTFjMTguODg5LTE4Ljg5NCwxOC44ODktNDkuNTIyLDAtNjguNDE2ICBDMzY2Ljk3NSwyMDMuNTY1LDMzNi45NDYsMjAzLjYzMSwzMTcuODY3LDIyMS44Njd6IiBmaWxsPSIjZmFmYWZhIiBkYXRhLW9yaWdpbmFsPSIjZmFmYWZhIiBjbGFzcz0iIj48L3BhdGg+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
            alt="Download"
            width="25"
            className={s.icon}
          />
          Certificate Course
        </a>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  techSkills: PropTypes.arrayOf(PropTypes.object),
  softSkills: PropTypes.arrayOf(PropTypes.object),
};

export default Sidebar;
