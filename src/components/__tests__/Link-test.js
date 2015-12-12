import { findDOMNode as find } from 'react-dom';
import { renderIntoDocument as render, Simulate, findRenderedDOMComponentWithTag as findWithTag } from 'react-addons-test-utils';

const { click } = Simulate;

jest.dontMock('../Link');
const Link = require('../Link').default;

describe('Link', () => {
  it('works', () => {
    const link = render(<Link to="/foo">Foo</Link>);

    const linkNode = find(link);
    expect(linkNode.textContent).toEqual('Foo');

    // click(findWithTag(link, 'a'));
    // expect(linkNode.textContent).toEqual('Foo');
  });
});
