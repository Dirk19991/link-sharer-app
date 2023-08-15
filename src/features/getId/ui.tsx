import styles from './styles.module.scss';
import { useParams } from 'react-router-dom';
import { IdResponse } from './model/types';
import { useAppDispatch } from 'app/store';
import { updateId, updateStatus } from './model/slice';

export const GetId = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const getIdFromDatabase = async () => {
    dispatch(updateStatus('loading'));
    try {
      const res = await fetch(`http://localhost:5050/profiles/profs/${id}`);
      if (!res.ok) {
        throw new Error();
      }

      res.json().then((data: IdResponse) => {
        dispatch(updateStatus('success'));
        dispatch(updateId(data));
      });
    } catch (error) {
      dispatch(updateStatus('error'));
    }
  };

  getIdFromDatabase();

  return <div className={styles.wrapper}></div>;
};
