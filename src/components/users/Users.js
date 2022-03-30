import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow1.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow2.svg';
import classes from './Users.module.css';
import Modal from '../../ui/modal/Modal';
import styled from 'styled-components';
import Photos from '../photos/Photos';

const StyledArrowLeft = styled(ArrowLeft)`
  margin: 5px;
`;

const StyledArrowRight = styled(ArrowRight)`
  margin: 5px;
`;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState([users]);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users?_start=${count}&_limit=4`
      )
      .then((res) => {
        console.log(res.data);
        setUsers([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [count]);

  const showHandler = () => {
    setModalActive((prevState) => !prevState);
  };

  const sliderBtnToLeft = () => {
    if (count - 1 > 0) {
      return setCount(count - 1);
    }
  };

  const sliderBtnToRight = () => {
    if (count + 1 > 0) {
      return setCount(count + 1);
    }
  };

  return (
    <section>
      <div className={classes.container}>
        <StyledArrowLeft onClick={sliderBtnToLeft} />
        <StyledArrowRight onClick={sliderBtnToRight} />
        <div className={classes.wrapper} onClick={showHandler}>
          {users.map((user) => (
            <div key={user.id} className={classes.card}>
              <div className={classes.content}>
                <Photos user={user} users={users} />
                <span>{user.name}</span>
                <p>{user.company.name}</p>
                <p>Website : {user.website}</p>
              </div>
            </div>
          ))}

          {modalActive && (
            <Modal onClose={showHandler} select={() => setSelected(selected)} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Users;
