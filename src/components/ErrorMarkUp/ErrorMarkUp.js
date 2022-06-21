import PropTypes from 'prop-types';
import s from './ErrormarkUp.module.css';

export default function ErrorMarkUp({ error }) {
  console.log(error);
  return <p className={s.Error}>{error.message}</p>;
}

ErrorMarkUp.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};
