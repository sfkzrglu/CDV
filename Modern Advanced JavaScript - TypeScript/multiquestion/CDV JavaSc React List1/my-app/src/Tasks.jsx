import React from 'react';
import { Children } from 'react';

export default function Tasks({taskStartindex,children }) {
      return (
          <>
              {Children.map(children, child =>
                <div style={{border:' 1px solid white',margin: '20px'}}>
                <h3>Task {taskStartindex++}</h3>
                  {child}
                </div>
              )}
          </>
      );
  }
