// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { renderReact } from 'hypernova-react';
import PropTypes from 'prop-types'
import Todo from '../app/components/Todo';

export const Hello = (props) => {
  return <div>Hello {props.name}!</div>
};

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

export default renderReact('Hello', Todo);
