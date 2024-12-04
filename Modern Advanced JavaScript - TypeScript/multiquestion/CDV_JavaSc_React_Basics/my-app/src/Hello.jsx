import React from 'react'

export default function Hello() {
  return <h1>Hello</h1>;
}

export const Hello2 = ({ title, name, surname }) => (
    <h1>Hello {title} {name} {surname}</h1>
);