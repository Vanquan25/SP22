import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const person = {
  name: "quan",
  age: 20,
  status: true,
  children: [
    {id: "1", name: "Dung"},
    {id: "2", name: "Minh"},
  ]
}

const showAge = (age) => <p>Tuoi cua ban la: (age)</p>
const ShowAge = props => <p>Tuoi cua ban la: {props.age}</p>

ReactDOM.render(<div>
  <p>Ten: {person.name} </p>
  <p>Tuoi: {person.age} </p>
  <p>{person.status ? "Da ket hon" : "Chua ket hon"}</p>
  <ul>
    {person.children.map(child => <li>
      {child.name}
    </li>)}
  </ul>
  <div>function: { showAge(person.age) }</div>
  <div>Component: <ShowAge age={person.age} /></div>
</div>, document.querySelector('#root'));
