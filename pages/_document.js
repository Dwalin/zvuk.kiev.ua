import Document, { Head, Main, NextScript } from 'next/document'
import "../src/style/style.styl"

export default class MyDocument extends Document {
  render() {
    return (
      <html>
      <Head>
        <title>Zvuk.kiev.ua</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <style>
          @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,700&subset=cyrillic,cyrillic-ext,latin-ext');
        </style>
        <link rel="stylesheet" href="/_next/static/style.css" />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}