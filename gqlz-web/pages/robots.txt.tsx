import React from 'react';
import { unindent } from '../lib/unindent';

export default class extends React.Component {
  static async getInitialProps ({ res }: any) {
    res.write(unindent(`
      User-agent: *
      Disallow: /api/
      Sitemap: https://graphqlzero.almansi.me/sitemap.xml
    `));
    res.end();
  }
}
