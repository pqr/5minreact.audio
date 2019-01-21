webpackJsonp([93896379034855],{406:function(e,t){e.exports={data:{site:{siteMetadata:{title:"5 minutes of React",author:"5 minutes of React"}},markdownRemark:{id:"/Users/petr/www/5minreact.audio/src/pages/005-idiomatic-redux/index.md absPath of file >>> MarkdownRemark",html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322367043&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>Mark Erikson, one of Redux contributors, has published an article in his Idiomatic Redux series: “The Tao of Redux, Part 1 - Implementation and Intent.” Thoughts on what Redux requires, how Redux is intended to be used, and what is possible with Redux.</p>\n<ul>\n<li><a href="http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/">http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/</a></li>\n<li><a href="http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/">http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>Mark Erikson, one of Redux contributors, has published another article in his Idiomatic Redux series.</p>\n<p>The article is called “The Tao of Redux, Part 1 - Implementation and Intent”. It was a great read; Mark has made a considerable effort to study older discussions of Redux issues on Github as well as various posts and comments by Dan Abramov to tell us about the original ideas, goals, and decisions that emerged from designing Redux. This turned out to be a very thorough and detailed overview.</p>\n<p>In this podcast I will indicate the main points of the article. So let’s get going!</p>\n<p>First of all, Mark debunks a few myths about some of the basic redux requirements.</p>\n<p>Let’s start by taking a look at the now-famous Three Principles of Redux:</p>\n<ol>\n<li>Single source of truth: The state of your whole application is stored in an object tree within a single store.</li>\n<li>State is read-only: The only way to change the state is to emit an action, an object describing what happened.</li>\n<li>Changes are made with pure functions: To specify how the state tree is transformed by actions, you write pure reducers.</li>\n</ol>\n<p>In a very real sense, each one of those statements is a lie!</p>\n<p>“Single source of truth” is wrong, because (per the Redux FAQ), you don’t have to put everything into Redux, the store state doesn’t have to be an object, and you don’t even have to have a single store.\n“State is read-only” is wrong, because there’s nothing that actually prevents the rest of the application from modifying the current state tree.\nAnd “Changes are made by pure functions” is wrong, because the reducer functions could also mutate the state tree directly, or kick off other side effects.</p>\n<p>These principles aren’t fixed rules or literal statements about the implementation of Redux. Rather, they form a statement of intent about how Redux should be used.</p>\n<p>Moreover, the immutability of the state tree itself is a cornerstone of Redux as it contains a few smart optimizations that involve a simple comparison of objects by reference. It happens twice: first in the Redux itself before any calls to subscribers, and then independently in the react-redux package as a part of the connect method which also performs a shallow comparison of all current component props with previous props. Redux itself won’t break if state is mutated. Redux will just not notify subscribers (when the whole state object reference is the same), or connected components won’t be rerendered (when particular slice of the state is mutated so it’s shallow equal).</p>\n<p>We also know that action objects should be serializable, in other words, they shouldn’t contain symbols, promises, and such. In fact, this is not an actual Redux requirement, but rather a recommendation that is meant to facilitate debugging and is crucial for time travel debugger.</p>\n<p>Redux’s primary goal is to make state mutations predictable.</p>\n<p>Constraints like immutability and serializability largely exist to make those development use cases possible, as well as making it easier for developers to trace data flow and update logic.</p>\n<p>Redux combines those multiple “stores” into a single state tree to make debugging, state persistence, and features like undo/redo easier to work with.</p>\n<p>Intended design and use of Redux was following:</p>\n<ul>\n<li>Redux Was Built As A Flux Architecture Implementation</li>\n<li>State Update Maintainability Is The Main Priority</li>\n<li>Action History Should Have Semantic Meaning:  action types should have some kind of meaning and information. The Redux DevTools and other logging utilities display the type field for each dispatched action. If only a single action type is used across the entire codebase (like SET_DATA), it will be harder to track down where a particular action was dispatched from, and the history log will be less readable.</li>\n<li>Redux Is Intended To Introduce Functional Programming Principles: this includes FP basics such as immutability and pure functions and ideas such as composing functions together to achieve a larger task. But not going deep into abstract FP concepts like “monads” or “endofunctors”.</li>\n<li>Redux Promotes Testable Code</li>\n<li>Reducer Functions Should Be Organized By State Slice</li>\n<li>Update Logic And Data Flow Are Explicit: Redux does not contain any “magic”, everything is intended to be explicit, clear, and traceable, with minimal abstraction.</li>\n<li>Redux’s API Should Be Minimal: The best API is often no API. </li>\n<li>Redux Should Be As Extensible As Possible. This ties in with the “minimal API” goal.</li>\n</ul>\n<p>Mark, the author of the article, has certainly dedicated a lot of time to researching and reading back through early issues and discussions.</p>\n<p>A substantial list of links to the sources is provided at the end of the article.</p>\n<p>Read the full article to get more info.\n<a href="http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/">http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/</a>\n<a href="http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/">http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/</a></p>\n<p>Thank you, Mark, for your effort and for your excellent content!</p>\n<p>Code with React and prosper!</p>',frontmatter:{title:"#5 - Idiomatic Redux",date:"May 13, 2017"}}},pathContext:{slug:"/005-idiomatic-redux/",previous:{fields:{slug:"/004-preact/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322073604&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>Preact - Fast 3kB alternative to React with the same ES6 API. My experience.</p>\n<ul>\n<li><a href="https://preactjs.com/">https://preactjs.com/</a></li>\n<li><a href="https://www.youtube.com/watch?v=ETjTVV4qGoY">https://www.youtube.com/watch?v=ETjTVV4qGoY</a> - “React 30” podcast episode about Preact with author of the library Jason Miller</li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>I have recently tried out the Preact library. P as in letter “P”, “P React”.</p>\n<p>According to the preactjs.com website, it is a faster alternative to React with the same API, packed into merely a 3-kB gzip.</p>\n<p>Respecting our 5-minute format, let’s go over the main features and contrasts with React, and move on to my personal impression and conclusions based on few weeks of in real production.</p>\n<p>Before we get to it, I just recommend you check out an interview with Preact author Jason Miller at “React 30” podcast, where he gets into the details of how it was created and what motivated him.</p>\n<p>So here we go, some basic facts about Preact.</p>\n<p>Take the preact.min.js file, version 8.1 is 8kB in size (not gzipeed), versus React 15.5.4 with its 150 kB - the difference is clear. </p>\n<p>However, Preact itself, as small as 8kB, uses a slightly different API which can’t simply work as a drop-in replacement for React.</p>\n<p>That’s where the preact-compat package comes in, providing a compatibility layer with React API and adding up to 9kB more. Thus the 17kB combo of preact and preact-compat can completely replace React in your application right now - sounds great!</p>\n<p>Now, a fair question: why is it so small? There must be something wrong. The main reason is that Preact is geared exclusively towards working with DOM in a browser, so it has no separate renderers like ReactDOM and React Native, which means no extra abstractions. It’s just as close to the metal as it gets (that is, to the browser).   </p>\n<p>Secondly, Preact doesn’t make use of a synthetic event system like React does, but rather relies on native browser events.</p>\n<p>Just like React, Preact supports all modern browsers including Internet Explorer versions 9 and newer.</p>\n<p>It should also work in older IE versions with the help of es5-shim or babel-polyfill packages.</p>\n<p>So there is a main Preact library and a preact-compat helper library. Here are some points to have in mind when using Preact without the React compatibility layer.</p>\n<p>The render component method explicitly takes props, state, and context as arguments. If needed, props, state, and context can be addressed via this. By the way, that’s the kind of API developers of React themselves are aiming for.</p>\n<p>HTML attribures “class” and “for” are called just “class” and “for” in JSX syntax, rather than “className” and “htmlFor”.</p>\n<p>Given that Preact makes use of native DOM events exclusively, it has no onChange handler so popular in React. Instead, onInput and onClick sould be used. </p>\n<p>Some sugar is added by “linkState” function, initially a core method that has recently been moved to a separate module.</p>\n<p>Another difference is the fact that props.children in Preact is a simple JavaScript array, while React uses a more complex structure.</p>\n<p>As for PropTypes, Preact has none at all.</p>\n<p>The global render() function, which is the basis of our whole application DOM construction, has a third optional parameter here, in contrast with React.</p>\n<p>Preact’s render() is non-destructive, so rendering into <body> is perfectly fine (encouraged, even). This is possible because Preact does not assume it controls the entire root element you pass it. The second argument to render() is actually parent - meaning it’s a DOM element to render into. If you would like to re-render from the root (perhaps for Hot Module Replacement), render() accepts an element to replace as a third argument.</p>\n<p>Simply put, if global render is called with just two parameters, in every subsequent render call, React substitutes the parent element contents, while Preact appends it so that the application multiplies on the screen. To avoid this, a third parameter should be passed to Preact render - for instance, lastElementChild.</p>\n<p>By the way Preact is compatible with React Developer Tools.</p>\n<p>Peract’s core diff algorithm is different from React. Preact compares the current virtual DOM against the real DOM!</p>\n<p>This and other features allow to claim that Preact outperforms React, and some benchmarks have even been established. Yet this is a controversial matter: nowadays each and every virtual DOM implementation gets compared to React and outclasses it in its own contrived benchmarks. Then React Fiber will be released, and we’ll be back to square one. A sort of an endless arms race.</p>\n<p>So much for the short overview, let’s move on to my experience. I delved into Preact for a few weeks, rewriting old code and creating something new, reviewing issues from the Preact repository, reading articles and investigating. </p>\n<p>Firstly, I’d rate the website documentation at a solid C. It inevitably assumes that the developer is already familiar with React, but even with that in mind, the documentation appears superficial and inconsistent, and questions often arise from clear gaps in reasoning. Luckily, there is an official boilerplate repository where I could find some answers and avoid spending time on trial and error.</p>\n<p>Remember I mentioned that there is no synthetic event system in Preact and its library relies on native DOM events? In particular, onInput should be used instead of onChange. Well, how come are there examples involving onChange all over the documentation? onChange is only available with the added React compatibility layer (preact-compat), but these examples don’t clarify this at all. </p>\n<p>The Preact library seems to be presented as a drop-in replacement for React, in other words, the use of preact-compat is implied by default. It’s a great fit for those developers who are already comfortable in the React ecosystem: they are not looking for a new library with a new API, but rather are interested in shrinking downloadable Javascript code in an existing application, hopefully to boost its performance. This can be particularly useful for mobile websites and Progressive Web Apps.</p>\n<p>Another bonus I see as a developer is low risk. If Preact goes down, I can always return to React with no changes in code required (if I use preact-compat ofcause) </p>\n<p>The question remains whether the React compatibility layer is reliable enough for all React ecosystem components to work seamlessly. The developers have clearly set this objective, and I haven’t run into any issues. Although, I figure, some hidden edge cases and bugs are inevitable. </p>\n<p>How difficult can it be to implement this drop-in replacement in an actual project? Would it be hard to reconfigure webpack, babel, or browserify? The website provides a few instructions, although very brief and sketchy. The way I do it is by embedding React via a separate script tag described as externals in webpack config. In this case the website instructions weren’t helpful and I had to figure some of the steps out on my own.</p>\n<p>In addition, I use TypeScript instead of Babel, and there is no mention of it at all on the official page. However, I got it to work with the help of some external resources like webpack-ts-preact boilerplate on github. The official DefinitelyTyped repository doesn’t include any type definitions for Preact, although some links can be found in the issues section of the Preact repository. I ended up turning to React type definitions along with preact-compat compatibility layer, and it’s working out pretty well.</p>\n<p>There is a separate preact-redux library which allows to integrate redux into native Preact with no compatibility layer required. I haven’t tried it out yet, so I’m not sure how it works. If the compatibility layer is used, a separate library is no longer needed.</p>\n<p>I make use of MobX in my projects, and there are two native libraries for it. The first one is outdated, and its Readme clearly suggests to use the second library. The latter, in turn, recommends using the compatibility layer and the official mobx-react library in its Readme. This is what I ended up doing. </p>\n<p>I have been writing small widgets in native Preact and working with the compatibility layer in a bigger React project. Native Preact didn’t strike me as particularly impressive or groundbreaking. There is little more to it than just a decent library with its own API peculiarities and some syntactic sugar.</p>\n<p>From my perspective and from the way Preact is presented, its usage apart from the React compatibility layer is limited to a narrow realm of hobby projects. It is highly unlikely that full-fledged applications relying on React ecosystem will be rewritten into native Preact. The only feasible way to include Preact in a major project is via the compatibility layer.</p>\n<p>To sum it up, could I confirm that the code I translated into Preact showed any performance improvements noticeable to the user? I haven’t taken measurements of the actual interaction with my application, but I have measured the initial render time and found that it went down by a factor of 1.5. This doesn’t include the time it takes to load js files from the server, as my users work in a local network and the scripts have surely been cached in their browsers already. The improvement I am referring to corresponds to the time for script evaluation and initial rendering. </p>\n<p>Thus I’ll keep using Preact along with the compatibility layer, as there are practically no disadvantages to it, and the advantages are clear, although not very significant. When React Fiber is released, we’ll take another look and compare the features once again.</p>\n<p>Was the result worth spending time on investigation, webpack setup, typescript and other arrangements? Not in my case, even considering the initial render speedup. I haven’t really struggled with performance issues so far. As a way of broadening one’s outlook and exploring new areas, Preact hardly pays off, considering the tedious webpack setup. There are far more efficient ways to broaden the outlook and spend time on something truly distinct, like experimenting with Angular 2 or diving into Elm.</p>\n<p>Code with React and prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322073604&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\nPreact - Fast 3kB alternative to React with the same ES6 API. My experience.\n\n- https://preactjs.com/\n- https://www.youtube.com/watch?v=ETjTVV4qGoY - "React 30" podcast episode about Preact with author of the library Jason Miller\n\n',frontmatter:{title:"#4 - Preact",date:"May 11, 2017"}},next:{fields:{slug:"/006-runtyper/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322512146&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>Analyzing React’s Source Code for Type Mismatch Operations with a new Babel plugin: Runtyper. </p>\n<ul>\n<li><a href="https://github.com/vitalets/babel-plugin-runtyper">https://github.com/vitalets/babel-plugin-runtyper</a></li>\n<li><a href="https://medium.com/dailyjs/analyzing-reacts-source-code-for-type-mismatch-operations-9ca065e5b91">https://medium.com/dailyjs/analyzing-reacts-source-code-for-type-mismatch-operations-9ca065e5b91</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>One smart guy, Vitaliy Potapov, wrote a babel plugin for runtime type-checking in JavaScript. After testing the plugin on his own projects he applied it to React’s source code and got some interesting results. In this podcast, I will tell you some facts from that experiment described on a Medium post made by Vitaly.</p>\n<p>What is checked?\nEvery math or comparison operation with different types in JavaScript is potentially unsafe. You can get silent unexpected result because values are converted by tricky rules. For example, 1 + 1 = 2 but if you accidentally add 1 + 1 as a string, you will get a string value 11. To avoid such errors you can use Flow, TypeScript or check operand types in runtime. I will apply the last approach to the React source code.</p>\n<p>How it works?\nThe plugin called Runtyper wraps every operation into a function that performs some additional type checking. The plugin guess types by code itself with no manual annotations needed. That allows to apply such checking to any existing project with minimal effort. Let’s try it on React.</p>\n<p>Plan</p>\n<ol>\n<li>Get the React source code.</li>\n<li>Include Runtyper into the build process.</li>\n<li>Run all of React’s unit tests and analyze the output.</li>\n</ol>\n<p>While setting up Runtyper for this experiment with React, author allowed some rules because the default configuration of plugin is very strict. For example, implicitAddStringNumber option allows concatenation ofstring + number. It is widely used in React code and will noise results if disabled.</p>\n<p>Also hi disabled a few lines in DOMProperty.js and Transaction.js. React executes these lines many times and their warnings overfill the output. In results section he covers what is happening there.</p>\n<p>React uses Jest for self-testing. so all tests results were piped output to log.txt for later analysis.</p>\n<p>When tests finished there were 33 unique places with type-mismatch operations. full log published for everybody’s access.</p>\n<p>In his post on Medium Vitaliy analyzes 5 most interesting cases he found in React source code - there are code examples you better look in text, than in audio podcast.</p>\n<p>As Conclusion it was interesting experiment to perform runtime type-checking of React source code. Most of warnings are just “info” and intended by React design. Some can be fixed. Finally Vitaliy created two pull requests to React repositry.</p>\n<p>Read the full article and try Runtyper Babel plugin, links are in shownotes.</p>\n<p>Code with React and Prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322512146&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\nAnalyzing React’s Source Code for Type Mismatch Operations with a new Babel plugin: Runtyper. \n\n- https://github.com/vitalets/babel-plugin-runtyper\n- https://medium.com/dailyjs/analyzing-reacts-source-code-for-type-mismatch-operations-9ca065e5b91\n\n',frontmatter:{title:"#6 - Runtyper",date:"May 14, 2017"}}}}}});
//# sourceMappingURL=path---005-idiomatic-redux-4a8531cdb31fe7fd10e1.js.map