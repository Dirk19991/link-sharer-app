import { useState } from 'react';
import styles from './styles.module.scss';
import { useParams } from 'react-router-dom';
import { IdResponse } from './model/types';
import { useAppDispatch, useAppSelector } from 'app/store';
import { updateId } from './model/slice';

export const GetId = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const currentId = useAppSelector(state => state.getId.profile);
  console.log(currentId);
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const getIdFromDatabase = async () => {
    console.log('here');
    if (status !== 'idle') return;

    setStatus('loading');
    try {
      const res = await fetch(`http://localhost:5050/profiles/profs/${id}`);
      if (!res.ok) {
        throw new Error();
      }

      res.json().then((data: IdResponse) => {
        setStatus('success');
        dispatch(updateId(data));
      });

      return res;
    } catch (error) {
      setStatus('error');
    }
  };

  getIdFromDatabase();

  return (
    <div className={styles.wrapper}>
      {status === 'success' && 'Success'}
      {status === 'error' && 'Error'}
      <img src={currentId?.image} alt="" />
    </div>
  );
};
