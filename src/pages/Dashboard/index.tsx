import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Github repositories</Title>

      <Form action="">
        <input placeholder="Type the name of the repository" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/8485149?s=460&u=869e7ed4c1cdde5a47b082f17eb495c56ddabeeb&v=4"
            alt="Vinícius Albuquerque"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/8485149?s=460&u=869e7ed4c1cdde5a47b082f17eb495c56ddabeeb&v=4"
            alt="Vinícius Albuquerque"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/8485149?s=460&u=869e7ed4c1cdde5a47b082f17eb495c56ddabeeb&v=4"
            alt="Vinícius Albuquerque"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/8485149?s=460&u=869e7ed4c1cdde5a47b082f17eb495c56ddabeeb&v=4"
            alt="Vinícius Albuquerque"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
