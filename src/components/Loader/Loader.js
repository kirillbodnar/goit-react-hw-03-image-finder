import { Rings } from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.Loader}>
      <Rings color="#000000" width={200} height={200} />
    </div>
  );
}
