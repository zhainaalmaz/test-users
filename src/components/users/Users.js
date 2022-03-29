import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow1.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow2.svg';
import classes from './Users.module.css';
import Modal from '../../ui/modal/Modal';
import styled from 'styled-components';

const StyledArrowLeft = styled(ArrowLeft)`
  margin: 5px;
`;

const StyledArrowRight = styled(ArrowRight)`
  margin: 5px;
`;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [selected, setSelected] = useState(0);

  const image = [
    {
      photo:
        'https://images.unsplash.com/photo-1610186593977-82a3e3696e7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1615276884895-eedfc7aca5f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1608499003952-81e4d51ecf9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1524601885886-1bdd86a02f5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1620117654333-c125fef82817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1645857196231-7fafec18ff12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1633965288332-cba23d7e157d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1631377307692-36a9b6ae3ef6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
  ];

  users.forEach((user, index) => {
    user.photo = image[index].photo;
  });

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOnClick = () => {
    setSelected((prev) => {
      if (prev === users.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  return (
    <div className={classes.container}>
      <StyledArrowLeft onClick={handleOnClick} />
      <StyledArrowRight onClick={handleOnClick} />
      {/* <p>{users[selected]}</p> */}
      <div className={classes.wrapper} onClick={() => console.log('click')}>
        {users.map((user, index) => (
          <div key={user.id} className={classes.card}>
            <div className={classes.content}>
              <div>
                <img width="200px" src={user.photo} alt="/" />
              </div>
              <span>{user.name}</span>
              <p>{user.company.name}</p>
              <p>Website : {user.website}</p>
            </div>
          </div>
        ))}
        {/* <Modal active={modalActive} setActive={setModalActive} /> */}
      </div>
    </div>
  );
};

export default Users;
