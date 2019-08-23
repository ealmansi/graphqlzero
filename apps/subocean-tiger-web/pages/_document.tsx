import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/themes/prism.css" integrity="sha256-Vl2/8UdUJhoDlkCr9CEJmv77kiuh4yxMF7gP1OYe6EA=" crossOrigin="anonymous" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
