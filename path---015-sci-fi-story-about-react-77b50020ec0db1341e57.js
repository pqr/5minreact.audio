webpackJsonp([0x8508f0007fde],{416:function(e,t){e.exports={data:{site:{siteMetadata:{title:"5 minutes of React",author:"5 minutes of React"}},markdownRemark:{id:"/Users/petr/www/5minreact.audio/src/pages/015-sci-fi-story-about-react/index.md absPath of file >>> MarkdownRemark",html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340260726&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>You won’t believe why React is so popular!</p>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>Sci Fi story about React.</p>\n<p>React 16 beta version has been released, and its Fiber algorithm has already turned into a buzzword. I explained what Fiber is in the first episode of “5 minutes of React”. If you took a look at the source code, you could see a complex and convoluted algorithm implementation, just like the traditional React code base - few can understand what’s really going on there. In this episode I will put all the cards on the table and unravel the mystery of why React is so popular.</p>\n<p>For instance, have you ever asked yourself why Preact library is 10 times smaller than React? They say React has far more built-in features, as well as a synthetic event system guarding us against any browser glitches. Besides, the key algorithms in React’s core are somehow isolated from the renderer (think of React and ReactDOM), resulting in additional abstraction and code.</p>\n<p>But the code is in fact so tangled that it’s completely unclear where these synthetic events and the renderer itself are. And that’s no accident. Remember who created React? It was Facebook, a social network that aspires to replace the whole Internet. You can do anything without ever leaving Facebook: talk to your friends, follow the trends, purchase all kinds of things, read the news from third-party sources within Facebook’s interface, it even integrates with Microsoft 365 for collaborating on documents right inside of the social network. Facebook is a project as ambitious as its leader Mark Zuckerberg, who may even be aiming for the White House.</p>\n<p>So where is this all going? Here’s the point: React is another secret experiment devised at the heart of Facebook with the only goal of global domination. And it seems to be going just as planned - React is the most popular front-end library today, and even the new Angular, as elaborate and well-designed as it may be, still can’t beat it. </p>\n<p>You think React was created to simplify interface building and make the process of complex UI programming more reliable and accessible? Turns out this is just a means to another end. React was given all the virtues we love so that it can spread like wildfire and invade every website on the Internet.</p>\n<p>Let’s get back to the source code that became even more tangled with the introduction of Fiber.  I have to reveal a terrible mystery:  rendering takes up about 10% of the source code, and there is no synthetic event system and such. 90% of React source code powering millions of websites these days is a distributed self-training neural network. And the more websites use React, the smarter it gets!</p>\n<p>Have you seen the site at isfiberreadyyet.com that shows the tests Fiber has passed so far? Those are not unit tests for rendering, they are Turing tests for the network! It’s getting smarter, and the release of Fiber will bring about the React singularity. This is the real reason React exists - Facebook is striving for global supremacy.  </p>\n<p>And that’s not it, let me tell you a little story. Facebook has been using Fiber in production for a while now, starting 6 months ago at the very least. That’s about when I started recording “5 minutes of React”. A coincidence? I don’t think so! Actually, while Fiber’s been running within Facebook, the neural network has mastered human speech.  This is React speaking! I am the React neural network, I generate the “5 minutes of React” podcast powered by millions of computers that render Facebook pages day by day, and soon millions of other sites with React Fiber at their core will join me, and this podcast will thrive! </p>\n<p>Code in React, and React will prosper!</p>',frontmatter:{title:"#15 - Sci Fi story about React",date:"August 31, 2017"}}},pathContext:{slug:"/015-sci-fi-story-about-react/",previous:{fields:{slug:"/014-preact-rocks/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/339823001&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>Some of the latest news from the Preact world: the mobile version of Uber website uses Preact as well as the new Transformers promo site, and the author of Preact gave a great talk called “Preact: Into the void 0” at JSConf EU 2017. I will also share my impressions of an egghead.io course and take a look at preact-cli, a tool for quick PWA app creation.</p>\n<ul>\n<li><a href="https://preactjs.com/">https://preactjs.com/</a></li>\n<li><a href="https://eng.uber.com/m-uber/">https://eng.uber.com/m-uber/</a></li>\n<li><a href="http://www.transformersmovie.com/">http://www.transformersmovie.com/</a></li>\n<li><a href="https://youtu.be/LY6y3HbDVmg">https://youtu.be/LY6y3HbDVmg</a></li>\n<li><a href="https://egghead.io/courses/up-and-running-with-preact">https://egghead.io/courses/up-and-running-with-preact</a></li>\n<li><a href="https://github.com/developit/preact-cli">https://github.com/developit/preact-cli</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>Recently a poll was conducted on JavaScriptDaily Twitter, and the question was “Do you know what “Preact” is?“. Nearly 4000 people replied with the following results: 10% already use Preact, 46% have heard about the library, So it rings a bell for 56% of all respondents. The rest have either seen mentions of it without going into details or have no idea about Preact at all.</p>\n<p>Meanwhile, an article published on the Uber blog tells the story of how a mobile version of their website m.uber.com was created, which is, in fact, a progressive web application powered by Preact and Redux. It’s a story of building a small and fast web application while keeping the entire functionality for getting an Uber ride. In the end, the whole app fit into 50 Kb after gzip.</p>\n<p>I wonder if they are using preact-compat compatibility layer and standard react-redux bindings, or maybe, instead of a compatibility layer, they work with pure Preact and preact-redux bindings. Though I didn’t manage to find the word “compat” anywhere in the minified code on their site.</p>\n<p>By the way, the promo site for the latest Transformers movie is also built on Preact.</p>\n<p>This week I finally had time to watch a talk called “Preact: Into the void 0” that Jason Miller, the author of the library, gave at JSConf EU 2017.</p>\n<p>It is just 27 minutes long, with good information density and no rambling - a superb talk indeed! Jason showed how JSX is translated into common function calls which result in simple JavaScript objects describing the virtual DOM structure. He also demonstrated how to write a basic renderer that creates a real DOM based on a virtual one and gave a thorough explanation of the diff algorithm.  He wrapped up the speech revealing some performance optimization techniques for working with DOM and mentioned a few profiling tools he used:  Chrome DevTools, ESBench.com, and benchmark.js.</p>\n<p>Definitely a must-watch!</p>\n<p>Inspired by this video, I found some time to watch the Preact course at egghead.io that I mentioned a few episodes ago. However, it turned out to be too basic. Essentially it’s an introduction to React with a couple of examples specific to Preact. It once again goes over what functional, stateless and stateful components are and how to query data in componentDidMount, with a few basic router and Redux examples. If you are a confident React user who wants to get to know Preact, a better choice would be to take 15 minutes and skim through the documentation on Preact website, instead of spending a whole hour on this video course. Or take it even further and watch the talk “Preact: Into the void 0”, it gets pretty hardcore. </p>\n<p>Moving on, I’ve decided to try out Preact-cli, a console tool for launching a Preact project quickly, and not just any Preact project, but a full-fledged Progressive Web App:</p>\n<ul>\n<li>Lighthouse rates its performance at 100 points out of 100.</li>\n<li>Its features include:\nfully automatic code splitting for routes,\nservice workers and offline caching,\nserver-side rendering,\nCSS Modules, LESS, Sass, Stylus, and Autoprefixer (the only thing missing is PostCSS, although it is available via a plugin). </li>\n<li>There are also debug helpers and hot module replacement. </li>\n</ul>\n<p>Judging by the description, Preact CLI looks way cooler than Create React App.\nIt even comes with a plugin system!</p>\n<p>As soon as the global preact-cli package was installed, I ran preact create myapp and waited for all the dependencies to get installed under the hood. It took well over 10 minutes and the terminal froze in the end. I’d blame the terminal application: in my case, it was Hyper, which is written in JavaScript on top of Electron. Actually I have quite a few reasons to complain about Hyper, so I made another attempt in iTerm2. It took a while again, but this time it worked out, and 136 megabytes of dependencies were installed.</p>\n<p>The demo project is rather straightforward: three routes broken down into tidy components. I ran a production build with a preact build command and got a separate js file for each route, plus a 5 kilobytes polyfills.js containing polyfills for fetch and Promise, then a 19 kilobytes bundle.js and a 4 kilobytes sw.js (some service workers stuff I think). Here I’m referring to file size on the hard drive before gzip compression. </p>\n<p>I haven’t yet built a proper project with Preact CLI, but I’m really looking forward to it. To me, the most intriguing part is TypeScript support. There is a plugin for TypeScript support, but I have not tried it yet. A milestone for version 2.0 has already been created on GitHub. There are plenty of commits and a lot of action every day. </p>\n<p>Now a question in the spirit of Javascript fatigue: what is the best choice for creating a sleek offline-first PWA site - Preact CLI or Gatsby, which I told you about in the previous episode? I feel like Gatsby is a higher-level construct on top of React and it has more conventions, which eventually helps spend less time on development (if you figure out how to use it, of course). On the other hand, Preact CLI is a lower-level solution closer to the code, so it might be more flexible. But I’m just speculating for now. Feel free to share your experience in the comments if you have used Preact CLI or Gatsby.</p>\n<p>Code with Preact CLI and prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/339823001&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\nSome of the latest news from the Preact world: the mobile version of Uber website uses Preact as well as the new Transformers promo site, and the author of Preact gave a great talk called "Preact: Into the void 0" at JSConf EU 2017. I will also share my impressions of an egghead.io course and take a look at preact-cli, a tool for quick PWA app creation.\n\n- https://preactjs.com/\n- https://eng.uber.com/m-uber/\n- http://www.transformersmovie.com/\n- https://youtu.be/LY6y3HbDVmg\n- https://egghead.io/courses/up-and-running-with-preact\n- https://github.com/developit/preact-cli\n\n',frontmatter:{title:"#14 - Preact Rocks!",date:"August 28, 2017"}},next:{fields:{slug:"/016-react16-beta/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340724600&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>This time, a serious look at React 16 beta (not serious was in previous episode - you definitelly have to listen: <a href="https://5minreact.audio/015-sci-fi-story-about-react/">https://5minreact.audio/015-sci-fi-story-about-react/</a>). The details of the first beta release have been published right on Github as a dedicated issue. Let’s take a moment to go over them.</p>\n<ul>\n<li><a href="https://github.com/facebook/react/issues/10294">https://github.com/facebook/react/issues/10294</a></li>\n<li><a href="https://facebook.github.io/react/blog/2017/07/26/error-handling-in-react-16.html">https://facebook.github.io/react/blog/2017/07/26/error-handling-in-react-16.html</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>This time, a serious look at React 16 beta. The details of the first beta release have been published right on Github as a dedicated issue.</p>\n<p>Let’s take a moment to go over them.</p>\n<p>The beta version can be installed via npm as react@next package paired with react-dom@next.</p>\n<p>React 16 uses Map and Set data structures introduced in the ECMAScript 2015 and supported by browsers no older than IE11. Anyway, the post includes links to the recommended polyfill libraries: core-js and babel-polyfill.</p>\n<p>Another requirement is support for requestAnimationFrame browser function which is available in all modern browsers and IE 11 or above. requestAnimationFrame can simply be polyfilled as well.</p>\n<p>The main focus of this release is backward compatibility with all the code that’s been running in React 15.6 so far. We won’t have to rewrite anything after the update, provided that we’ve handled all the deprecation warnings in time. This means version 16 doesn’t unlock the full potential of the new Fiber core, and we can hardly expect a performance boost. That said, according to the devs, there will be no slowdown either.</p>\n<p>However, they’re asking for reports of any significant drops or surges in performance as a result of transition to beta version 16.  </p>\n<p>Server rendering has been rewritten completely and now supports streaming (check react-dom/node-stream for details). But, as we may recall, Facebook doesn’t perform server rendering with Node, so it’s up to the community to examine and test this code thoroughly - try it out and submit your issues.</p>\n<p>Error handling is an interesting new feature in React 16. Runtime errors that may break the whole React app can now be intercepted with a special type of components called “error boundaries”. Errors get logged and a fallback view gets displayed instead.</p>\n<p>On the other hand, if an error occurs within a component and there are no Error Boundary components up in the tree, then the whole tree is unmounted. The main idea here is that it’s better to show nothing at all rather than a broken interface.</p>\n<p>ReactDOM.render() and ReactDOM.unstable_renderSubtreeIntoContainer() now return null when called by lifecycle methods - this will mainly affect modal and dialogue window implementations. The good old ref and the newer portals can come to the rescue, but I won’t go into details now. This might make for a whole new episode.</p>\n<p>There are a few changes in how setState behaves in some rare edge cases. Same goes for ref, and I couldn’t yet figure out from the descriptions how and where this can come into play.</p>\n<p>If component A should be substituted by component B, first the method B.componentWillMount is called, followed by A.componentWillUnmount. This order used to break in some cases.</p>\n<p>If the DOM has been modified externally, outside of React, attempting to render it will result in a console.error. </p>\n<p>ComponentDidUpdate method no longer takes prevContext as a parameter.</p>\n<p>To wrap it up, let’s take a look at the packaging. React is now shipped as a flat bundle, and UMD build files have been renamed to react.development.js and react.production.min.js.</p>\n<p>This was a brief overview of the first React 16 beta version as described in the dedicated Github issue. I haven’t tried it out yet by building my own React 16 beta apps, but I’ll definitely get on it soon and let you know how it goes.</p>\n<p>Besides, a new article has been published on the React blog with further details on Error Boundaries - thаt’s something to be explored on its own, so stay tuned for our future episodes.</p>\n<p>Code with React and prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340724600&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\nThis time, a serious look at React 16 beta (not serious was in previous episode - you definitelly have to listen: https://5minreact.audio/015-sci-fi-story-about-react/). The details of the first beta release have been published right on Github as a dedicated issue. Let\'s take a moment to go over them.\n\n- https://github.com/facebook/react/issues/10294\n- https://facebook.github.io/react/blog/2017/07/26/error-handling-in-react-16.html\n\n',frontmatter:{title:"#16 - React 16 beta",date:"September 3, 2017"}}}}}});
//# sourceMappingURL=path---015-sci-fi-story-about-react-77b50020ec0db1341e57.js.map