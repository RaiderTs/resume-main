import s from './Education.module.css';

function Education() {
  return (
    <>
      <p className={s.university}>
        Dnipro State Agrarian and Economic University
      </p>
      <p className={s.education}>Organization management</p>
      <span className={s.time}>
        Septermber 2005 - May 2010
        <span className={s.divider}> |</span> Ukraine
      </span>
    </>
  );
}

export default Education;
