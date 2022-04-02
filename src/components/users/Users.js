import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow1.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow2.svg';
import classes from './Users.module.css';
import styled from 'styled-components';
import Modal from '../../ui/modal/Modal';
import Photos from '../photos/Photos';

const StyledPrevButton = styled(ArrowLeft)`
  margin: 5px;
`;

const StyledNextButton = styled(ArrowRight)`
  margin: 5px;
`;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [count, setCount] = useState(0);
  const [selectedName, setSelectedName] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users?_start=${count}&_limit=10`
      )
      .then((res) => {
        console.log(res.data);
        setUsers([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [count]);

  const showHandler = (name) => {
    if (name) setSelectedName(name);
    setModalActive((prevState) => !prevState);
  };

  const prevSlide = () => {
    if (count - 1 > 0) {
      return setCount(count - 1);
    }
  };

  const nextSlide = () => {
    if (count + 1 > 0) {
      return setCount(count + 1);
    }
  };

  return (
    <section className={classes.container}>
      <StyledPrevButton onClick={prevSlide} />
      <StyledNextButton onClick={nextSlide} />
      <div className={classes.wrapper}>
        {users.map((user) => (
          <div
            key={user.id}
            className={classes.card}
            onClick={() => showHandler(user.name)}
          >
            <div className={classes.content}>
              <Photos user={user} users={users} />
              <span>{user.name}</span>
              <p>{user.company.name}</p>
              <p>Website : {user.website}</p>
            </div>
          </div>
        ))}

        {modalActive && <Modal onClose={showHandler} name={selectedName} />}
      </div>
    </section>
  );
};

export default Users;
