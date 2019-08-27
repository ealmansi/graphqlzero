import React from 'react';
import { unindent } from '../lib/unindent';

export default class extends React.Component {
  static async getInitialProps ({ res }: any) {
    res.write(unindent(`
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset
            xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                  http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        <url>
          <loc>https://graphqlzero.almansi.me/</loc>
          <lastmod>2019-08-27T02:23:32+00:00</lastmod>
        </url>
        <url>
          <loc>https://graphqlzero.almansi.me/api/</loc>
          <lastmod>2019-08-27T02:23:32+00:00</lastmod>
        </url>
      </urlset>
    `));
    res.end();
  }
}
