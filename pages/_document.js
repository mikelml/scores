import Document, { Head, Main, NextScript } from 'next/document'

class NextDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <title>Goldenglo</title>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
                    <link rel="stylesheet" href="/main.css" />
                    <script src="https://code.highcharts.com/highcharts.js"></script>
                    <script src="https://code.highcharts.com/modules/exporting.js"></script>
                    <script src="https://code.highcharts.com/modules/export-data.js"></script>
                    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

NextDocument.getInitialProps = async ctx => {
    const initialProps = await Document.getInitialProps(ctx)

    return {
        ...initialProps
    }
}

export default NextDocument

