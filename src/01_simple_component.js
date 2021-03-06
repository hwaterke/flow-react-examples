// @flow
import React from 'react';

// Define the props of your component
type Props = {
  age: number
};

class A extends React.Component {
  props: Props;

  // ...
}

// --------------------
// Flow OK
// --------------------

<A age={42} />;

// Flow will not complain for extra props that were not defined
<A age={42} bar="ss" />;

// --------------------
// Flow ERROR
// --------------------

// Flow report error for missing props
// <A />;

// Flow report error for wrong type of props
// <A age="hello" />;
