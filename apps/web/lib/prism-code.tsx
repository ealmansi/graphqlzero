import Prism from 'prismjs';
import React from 'react';

/**
 * Source: https://pathof.dev/blog/code-highlighting-in-react-using-prismjs.
 */
export class PrismCode extends React.Component<any> {
  private ref: React.RefObject<HTMLInputElement>;
  constructor(props: any) {
    super(props);
    this.ref = React.createRef();
  }
  componentDidMount() {
    this.highlight();
  }
  componentDidUpdate() {
    this.highlight();
  }
  highlight = () => {
    if (this.ref && this.ref.current) {
      Prism.highlightElement(this.ref.current);
    }
  };
  render() {
    const { code, plugins, language } = this.props as any;
    return (
      <pre className={!plugins ? "" : plugins.join(" ")}>
        <code ref={this.ref} className={`word-wrap language-${language}`}>
          {code}
        </code>
      </pre>
    );
  }
}
