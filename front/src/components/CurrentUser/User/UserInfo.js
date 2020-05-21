import React from 'react';
import classes from './UserInfo.module.css';
import { Link } from 'react-router-dom';

export default function UserInfo({ description, name }) {


  return (
    <>
      <div className={classes["container"]}>
        <div className={classes["main-card"]}>
          <div className={classes["cover-photo"]}></div>
          <div className={classes["photo"]}>
            <img className={classes["img"]} src="https://avatars.mds.yandex.net/get-pdb/1524137/df203427-a2a7-4bcd-b7bd-c8bc4d0270f3/s1200?webp=false" alt="" />
          </div>
          <div className={classes["content"]}>
            <h2 className={classes["name"]}>{name}</h2>
            <h3 className={classes["fullstack"]}>Блоггер <br /> YouTube, Instagramm, Facebook, Вконтакте</h3>
            <h3 className={classes["email"]}>
              <a href="mailto:abbassi.abdeladhim31791@gmail.com">dud@gmail.com</a>
            </h3>
            <h3 className={classes["fullstack"]}>
              {description
                ?
                <Link>{description}</Link>
                :
                <Link>Расскажите о себе</Link>
              }
            </h3>
          </div>

          <div className={classes["contact"]}>
            <ul>
              <Link to="https://www.youtube.com/channel/UCMCgOm8GZkHp8zJ6l7_hIuA" target="_blank">
                <i className={classes["fa fa-codepen"]}>YouTube</i>
              </Link> <br /> 
              <Link to="https://www.instagram.com/yurydud/" target="_blank">
                <i className={classes["fa fa-codepen"]}>Instagram</i>
              </Link> <br /> 
              <Link to="https://ru-ru.facebook.com/yury.dud" target="_blank">
                <i className={classes["fa fa-codepen"]}>FaceBook</i>
              </Link>

            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
