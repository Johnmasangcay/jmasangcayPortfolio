import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router";
import Home from './pages/home';
import NavigationBar from './component/navigationBar';

const App = () => {
  return (
    <>
      <NavigationBar />
      <div className="landing">
        <div className="home_wrap">
          <div className="home_inner"></div>
        </div>
      </div>
      <div className="caption center_block">
        <h3>Hello, I'm John Neil</h3>
        <h3>Full-Stack Developer</h3>
      </div>
      <div className="container-fluid d-flex justify-content-center" id='about'>
        <div className="row welcome">
          <div className="col-12 p-3">
            <h1><strong>About Me</strong></h1>
            <h4>
              <i>
                <strong>I'm a product of self-motivated and a dreamer</strong>
              </i>
            </h4>
          </div>
          <hr />
        </div>
      </div>
      {/* <div className="card flex-row flex-wrap">
        <div className="card-header border-0">
          <img src="//placehold.it/200" alt="" />
        </div>
        <div className="card-block px-2">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Description</p>
          <a href="#" className="btn btn-primary">BUTTON</a>
        </div>
        <div className="w-100"></div>
      </div> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="card-header border-0">
              <img src="//placehold.it/600" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0">
              <div className="card-body">
                <div className="card-text">
                  <p className="lineSpace"><br /><br /><span className="tab">Self-driven, ambitious, eager to learn and passionate</span> are the characteristics that I have why you are reading this. I don't take things easily even if it's something that I've been doing
                    and I like getting things done.</p>
                  <p className="lineSpace"><span className="tab">I have the drive and have what it takes to be part of</span> a progressing team and become a tool for the success of others and myself.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default App;