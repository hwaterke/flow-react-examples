// @flow
import React from 'react';

// Define the props of your component
type Props = {
  foo: string
};

class A extends React.Component {
  props: Props;

  // ...
}

// --------------------
// Flow OK
// --------------------

<A foo="some value" />;

// Flow will not complain for extra props that were not defined
<A foo="some value" bar="ss" />;

// --------------------
// Flow ERROR
// --------------------

// Flow report error for missing props
// <A />;

// Flow report error for wrong type of props
// <A foo={42} />;
