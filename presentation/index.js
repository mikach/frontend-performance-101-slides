// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Image,
  Link,
  CodePane
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';
import Terminal from 'spectacle-terminal';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';

const images = {
  money_bg: require('../assets/money_bg.jpg'),
  money_cry: require('../assets/money_cry.gif'),
  impact: require('../assets/impact_calc.png'),
  metrics: require('../assets/metrics.png'),
  network: require('../assets/network.png'),
  sw: require('../assets/sw.png'),
  parse_cost: require('../assets/parse_cost.png'),
  webpack_ba: require('../assets/webpack_ba.gif'),
  import_cost: require('../assets/import_cost.gif'),
  browser_speed: require('../assets/browser_speed.jpg'),
  jpeg: require('../assets/jpeg.jpg'),
  css: require('../assets/css.gif'),
  baseline_jpeg: require('../assets/baseline_jpeg.jpg'),
  progressive_jpeg: require('../assets/progressive_jpeg.jpg'),
};

preloader(images);

// Require CSS
require('normalize.css');

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quarternary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']}>
          <Heading size={1} fit caps textColor='tertiary'>
            Frontend Performance 101
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <BlockQuote>
            <Quote textSize={46} fit>
              Performance optimization is a process of improving the delivery speed of services, feedback or any other type of response action in order to meet a user’s expectation.
            </Quote>
            <Cite>Smashing Magazine</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size={1} fit caps>
            Why does it matter?
          </Heading>
        </Slide>
        <Slide>
          <Heading size={5} caps>
            Performance is about users
          </Heading>
        </Slide>
        <Slide transition={['fade']}>
          <Text textSize={50} textAlign='left'>
            53% of users report that they abandon sites that take more than 3 seconds to load
          </Text>
        </Slide>
        <Slide transition={['fade']}>
          <Text textSize={50} textAlign='left'>
            The BBC found they lost an additional 10% of users for every additional second their site took to load.
          </Text>
          <Image fit src={images.money_cry} />
        </Slide>
        <Slide transition={['fade']}>
          <Text textSize={50} textAlign='left'>
            Pinterest rebuilt their pages for performance realizing a 40% reduction in perceived wait times, thus increasing both search engine traffic and sign-ups by 15%.
          </Text>
        </Slide>
        <Slide>
          <Heading size={5} caps>
            Performance is about money
          </Heading>
        </Slide>
        <Slide transition={['fade']}>
          <Text textSize={50} textAlign='left'>
            For every 1 second of improvement, Walmart experienced an increase in conversions of up to a 2% on its website.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgImage={images.money_bg}>
          <Text textSize={50} textAlign='left' textColor='primary'>
            For Mobify, Every 100ms decrease in homepage load speed worked out to a 1.11% increase in session-based conversion, yielding an average annual revenue increase of nearly $380,000
          </Text>
        </Slide>
        <Slide transition={['fade']}>
          <Text textSize={50} textAlign='left'>
            When AutoAnything reduced page load time by half, they saw a boost of 12-13% in sales.
          </Text>
        </Slide>
        <Slide>
          <Heading size={5} caps>Performance Budget</Heading>
        </Slide>
        <Slide>
            <Text size={6}>Impact Calculator</Text>
            <Image fit src={images.impact} />
        </Slide>

        <Slide>
          <Heading size={6} caps>Common myths about performance</Heading>
          <List>
            <Appear order='1'><ListItem>User experience can be captured with a single metric.</ListItem></Appear>
            <Appear order='2'><ListItem>User experience can be captured with a single “representative user.”</ListItem></Appear>
            <Appear order='3'><ListItem>My website loads fast for me, so it should load fast for my users.</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={6} caps>How to measure</Heading>
          <List>
            <ListItem>Chrome DevTools Performance Tab</ListItem>
            <ListItem>Google Lighthouse</ListItem>
            <ListItem>WebPageTest</ListItem>
            <ListItem>PageSpeed Insights</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={5} caps>Metrics</Heading>
        </Slide>
        <Slide>
          <Heading size={5} caps>Time to first byte</Heading>
          <List>
            <ListItem>The time needed to send the HTTP request</ListItem>
            <ListItem>The time needed for the server to process the request</ListItem>
            <ListItem>The time needed for the server to send back the first byte of the response to the client</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} caps>First Paint</Heading>
          <Text textAlign='left'>The time when the browser first rendered after navigation. This excludes the default background paint, but includes non-default background paint.</Text>
        </Slide>
        <Slide>
          <Heading size={5} caps>First Contentful Paint</Heading>
          <Text textAlign='left'>When the browser first rendered any text, image (including background images), non-white canvas or SVG.</Text>
        </Slide>
        <Slide>
          <Heading size={5} caps>First Meaningful Paint</Heading>
          <Text textAlign='left'>The paint after which the biggest above-the-fold layout change has happened, and web fonts have loaded.</Text>
        </Slide>
        <Slide>
          <Heading size={5} caps>Time to First Interactive</Heading>
          <Text textAlign='left'>When the page is first expected to be usable and will respond to input quickly.</Text>
        </Slide>
        <Slide>
          <Image fit src={images.metrics} />
        </Slide>

        {/* NETWORK */}
        <Slide>
            <Image fit src={images.network} />
        </Slide>

        <Slide>
          <Heading size={5} caps>Optimize Traffic</Heading>
          <List>
            <ListItem>Make fewer HTTP requests</ListItem>
            <ListItem>Use cookie-free domains</ListItem>
            <ListItem>Compress components with gzip (save ~70%)</ListItem>
            <ListItem>Use a content delivery network (CDN)</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={5} caps>Cache</Heading>
          <Text>Cache-Control: max-age=60</Text>
          <Text>ETag: deadbeef123</Text>
        </Slide>
        <Slide>
          <Heading size={5} caps>Versioning</Heading>
          <CodePane
            textSize={26}
            theme='light'
            lang='js'
            source={require('raw-loader!../assets/webpack_hash.example')}
          />
        </Slide>
        <Slide>
          <Heading size={5} caps>Service Worker</Heading>
          <Image fit src={images.sw} />
        </Slide>

        {/* HTML */}
        <Slide>
          <Heading size={1} caps>
            HTML
          </Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang='html'
          code={require('raw-loader!../assets/html.example')}
          ranges={[
            { loc: [0, 1], note: 'Always add the <!DOCTYPE> declaration to your HTML documents, so that the browser knows what type of document to expect.' },
            { loc: [6, 7], note: 'Link to CSS files at the top of the page. That way, browsers have CSS information ready before parsing HTML.' },
            { loc: [15, 16], note: 'Put JavaScript at the bottom of the page, before the closing body tag.' },
            { loc: [16, 17], note: 'Alternatively, use the defer and async attributes – but be aware of their behaviour' }
          ]}
        />

        {/* JS */}
        <Slide>
          <Heading size={1} fit caps>
            JavaScript
          </Heading>
        </Slide>
        <Slide>
          <Text>less code = less parse/compile + less transfer + less to decompress</Text>
        </Slide>
        <Slide>
          <Image fit src={images.parse_cost} />
        </Slide>
        <Slide>
          <Heading size={6}>webpack-bundle-analyzer</Heading>
          <Terminal title="-bash" output={[
            '$ npm install --save-dev webpack-bundle-analyzer'
          ]} />
        </Slide>
        <Slide>
          <CodePane
            textSize={26}
            theme='light'
            lang='js'
            source={require('raw-loader!../assets/webpack_ba.example')}
          />
        </Slide>
        <Slide>
            <Image fit src={images.webpack_ba} />
        </Slide>
        <Slide>
          <Heading size={6}>Import Cost VSCode Extension</Heading>
          <Image fit src={images.import_cost} />
        </Slide>
        <Slide>
          <Heading size={6} caps>Smaller alternatives</Heading>
          <List>
            <ListItem>React -> Preact</ListItem>
            <ListItem>jQuery -> Zepto</ListItem>
            <ListItem>Underscore -> Lodash</ListItem>
            <ListItem>Bluebird -> Lie</ListItem>
            <ListItem>etc</ListItem>
          </List>
        </Slide>
        <Slide>
            <Image height="700px" src={images.browser_speed} />
        </Slide>
        <Slide>
          <Heading size={6}>babel-preset-env</Heading>
          <Terminal title="-bash" output={[
            '$ npm install --save-dev babel-preset-env'
          ]} />
        </Slide>
        <Slide>
          <CodePane
            textSize={20}
            theme='light'
            lang='js'
            source={require('raw-loader!../assets/preset_env.example')}
          />
        </Slide>
        <Slide>
          <Heading size={5} caps>Tree Shaking</Heading>
        </Slide>
        <Slide>
          <Heading size={5} caps>Prepack</Heading>
          <Text>not production ready yet :(</Text>
        </Slide>
        <Slide>
          <Heading size={5} caps>Optimize JavaScript Execution</Heading>
          <List>
            <ListItem>Avoid setTimeout or setInterval for visual updates; always use requestAnimationFrame instead.</ListItem>
            <ListItem>Move long-running JavaScript off the main thread to Web Workers.</ListItem>
            <ListItem>Use micro-tasks to make DOM changes over several frames.</ListItem>
            <ListItem>Use Chrome DevTools’ Timeline and JavaScript Profiler to assess the impact of JavaScript.</ListItem>
          </List>
        </Slide>

        {/* IMAGES */}
        <Slide>
          <Heading size={1} fits caps>
            Images
          </Heading>
        </Slide>
        <Slide>
          <Heading size={5} caps>Choose right image format</Heading>
          <List>
            <ListItem textSize={32}>Raster graphics represent images by encoding the values of each pixel within a rectangular grid of pixels. They are not resolution or zoom independent. WebP or widely supported formats like JPEG or PNG handle these graphics well where photorealism is a necessity.</ListItem>
            <ListItem textSize={32}>Vector graphics use points, lines and polygons to represent images and formats using simple geometric shapes (e.g logos) offering a high-resolution and zoom like SVG handle this use case better.</ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>What image quality is acceptable for your use-case?</Text>
          <Image fit src={images.jpeg} />
        </Slide>
        <Slide>
          <Heading size={5} fit caps textColor="tertiary">Baseline JPEGs and Progressive JPEG</Heading>
          <Image src={images.baseline_jpeg} />
          <Image src={images.progressive_jpeg} />
        </Slide>

        {/* CSS */}
        <Slide>
          <Heading size={1} caps>
            CSS
          </Heading>
          <Image fit src={images.css} />
        </Slide>
        <Slide>
          <Heading size={5} caps>Optimize CSS Performance</Heading>
          <List>
            <ListItem>Concatenate and minify your CSS</ListItem>
            <ListItem>Reduce the size of your stylesheets (use CSS Coverage)</ListItem>
            <ListItem>Be selective of your selectors</ListItem>
            <ListItem>Avoid expensive properties</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={1} fit caps>Thank you!</Heading>
        </Slide>
      </Deck>
    );
  }
}
