const root = document.getElementById('root');

let view = React.createElement(
    'ul',
    null,
    React.createElement('li', null, 'neki tejst'),
    React.createElement('li', null, 'Jos neki tekst'),
    React.createElement('li', null, 'Nesto drugo')
);

ReactDOM.render(
    view,
    root
);

