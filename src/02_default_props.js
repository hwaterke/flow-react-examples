// @flow
import React from 'react';

type DefaultProps = {
  name: string
};

type Props = {
  name: string,
  age: number
};

class A extends React.Component {
  static defaultProps = {
    name: 'John'
  };

  props: Props;

  // ...
}

// --------------------
// Flow OK
// --------------------

// Default props do not have to be passed
<A age={42} />;

// But they can be
<A age={42} name="Harold" />;

// Flow will not complain for extra props that were not defined
<A age={42} bar="ss" />;

// --------------------
// Flow ERROR
// --------------------

// Flow report error for missing props (age)
// <A />;

// Flow report error for wrong type of props
// <A age="hello" />;
// <A age={42} name={33} />;
