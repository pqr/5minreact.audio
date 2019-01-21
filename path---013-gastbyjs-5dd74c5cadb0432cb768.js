webpackJsonp([60878436321091],{414:function(e,t){e.exports={data:{site:{siteMetadata:{title:"5 minutes of React",author:"5 minutes of React"}},markdownRemark:{id:"/Users/petr/www/5minreact.audio/src/pages/013-gastbyjs/index.md absPath of file >>> MarkdownRemark",html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/333532468&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>Gatsby 1.0 - Blazing-fast static site generator for React.</p>\n<p><a href="https://www.gatsbyjs.org/">https://www.gatsbyjs.org/</a></p>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>The first stable version 1.0 of the static site generator Gatsby has just been released.</p>\n<p>This project is notable for generating static sites from React templates. You’d think static sites and React are like apples and oranges, but let’s start from the beginning.</p>\n<p>I found out about Gatsby a couple of years ago in the context of React conquering all possible niches including static site generation. When I started working on “5 minutes of React”, Gatsby occurred to me as quite a symbolic choice for building the podcast website.  A few ready-made templates were available then, and after some minor tweaks to one of them, I managed to launch a website with no trouble.   </p>\n<p>Technically it works this way: a set of React components make up a website template, and the text for blog entries is stored in a few Markdown files. This is episode 13 of the podcast, so I’ve got 13 Markdown files by now. Executing gatsby build command in the console builds the project,</p>\n<ul>\n<li>in other words, it generates 14 HTML files (including the main index.html and one HTML file for each post).</li>\n<li>In addition, images are compressed, a css file is generated (extended with SASS and PostCSS),</li>\n<li>and, most importantly,  a so-called bundle.js is created.</li>\n</ul>\n<p>With all the files generated, we can upload them to a simple hosting platform such as Github pages.\nWhen a user opens the site via their browser, index.html is loaded containing the whole HTML markup for the main page, just like the other 13 HTML files generated for each post. Thanks to this structure, the site is easily indexed by search engines and works even if javascript is disabled in the browser. </p>\n<p>However, as soon as bundle.js is loaded, the site turns into a single-page application where internal links can be followed without reloading the page and React renders everything right on the client side. This means bundle.js includes all the template components, and, even more remarkably, the content of all the posts on our site is packed inside of it! The more podcast episodes I make, the bulkier bundle.js will get. And that is a problem. Perhaps the user doesn’t plan to browse through all the posts on the site and is simply looking for the home page and the latest podcast episode. But the whole bundle.js will be loaded regardless.</p>\n<p>Some kind of smart code splitting would come in handy, as well as background loading, service workers, Progressive Web Apps, offline first, and so on.</p>\n<p>Finally, Gatsby 1.0 has fulfilled our wildest dreams and even more.</p>\n<p>Here is what 1.0 brings us, apart from route-based code splitting, service workers, and offline support.</p>\n<p>From now on, in addition to markdown files, remote sources such as WordPress, Drupal, and HackerNews are supported as data sources at build time.</p>\n<p>A plugin system has been added, which, in particular, brought about this integration with Wordpress, Drupal, and other sources.     Kyle Mathews, the creator of Gatsby, is hoping for active community engagement in this matter: a wealth of useful and diverse plugins should help Gatsby get even more robust and popular.</p>\n<p>Plugins can also be useful in implementing  Preact and Inferno support, which is especially appealing for lightweight static sites.</p>\n<p>Another notable feature introduced in 1.0 is the use of GraphQL for filling pages with content. Just to make things clear, GraphQL doesn’t run live on the site but rather operates at build time. GraphQL is involved in a whole bunch of tasks: querying data from markdown files, reading Wordpress data via a corresponding plugin, and even fetching the site title from global config. These GraphQL queries are located alongside components, and Gatsby knows which ones are required for every page, so it can perform some smart code splitting, inserting only the necessary data into each js bundle it’s generating. </p>\n<p>All in all, sounds awesome, but what is the real deal?</p>\n<p>In fact, meny of these plugins I’ve described are still at the prototype stage. The template I’m using for “5 minutes of React” website turned out to be incompatible with version 1.0. The documentation includes a guide on migrating to 1.0 which over 9000 items long, so I preferred to pass.  I grabbed another template compatible with 1.0, but it turned out to be quite a complex task, especially these GraphQL queries for each and every reason. For instance, I used to be able to adjust some global parameters just by importing a global config object, and now it has to be done via a GraphQL query to config. No more room for simplicity and playing by the ear. So I ended up postponing the podcast site transition to Gatsby 1.0. My current bundle.js built with the old Gatsby 0.12 version packs 13 podcast episodes and its size of 120Kb is bearable for now.</p>\n<p>To sum it up, Gatsby is a cool and resourceful project, its popularity is surging (illustrated by a graph of downloads in the blog), and its basis is very solid: code splitting, service workers, offline first, and extensibility with plugins. My best wishes to the project and I will be looking forward to more ready-made templates and functional plugins, so a site can be all set in a few clicks by getting the packages together into package.json.</p>\n<p>Build sites with Gatsby and prosper!</p>',frontmatter:{title:"#13 - Gatsby",date:"July 17, 2017"}}},pathContext:{slug:"/013-gastbyjs/",previous:{fields:{slug:"/012-webpack-pnpm-typescript/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/331989237&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<ul>\n<li><a href="https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b">https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b</a></li>\n<li><a href="https://twitter.com/dan_abramov/status/880457799272210432">https://twitter.com/dan_abramov/status/880457799272210432</a></li>\n<li><a href="https://medium.com/@TheLarkInn/leaving-for-microsoft-4f386c458693">https://medium.com/@TheLarkInn/leaving-for-microsoft-4f386c458693</a></li>\n<li><a href="https://medium.com/pnpm/pnpm-version-1-is-out-935a07af914">https://medium.com/pnpm/pnpm-version-1-is-out-935a07af914</a></li>\n<li><a href="https://github.com/pnpm/awesome-pnpm">https://github.com/pnpm/awesome-pnpm</a></li>\n<li><a href="https://blogs.msdn.microsoft.com/typescript/2017/06/27/announcing-typescript-2-4/">https://blogs.msdn.microsoft.com/typescript/2017/06/27/announcing-typescript-2-4/</a></li>\n<li><a href="http://isfiberreadyyet.com/">http://isfiberreadyyet.com/</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>The final webpack 3 release is out. I usually don’t rush it with installing versions ending with .0.0, but this time I decided to give webpack 3.0.0 a try.</p>\n<p>There is a new feature description post in the webpack blog, and the so-called Scope Hoisting caught my eye right away. This piece won’t work right away after the upgrade - a special plugin called ModuleConcatenationPlugin has to be added to the configuration. As a result by bundle.js file now only contains 7 functions instead of a hundred tiny module wrappers. Why is it seven and not one? We can get some clues via a certain command line flag which outputs additional information about the module assembly process and helps understand why some modules couldn’t be combined into one.</p>\n<p>As a person who hasn’t dug too deep into webpack algorithms, I can only see that the modules from node_modules folder and the external ones remained apart, but the reason is still to be figured out.</p>\n<p>Another mystery is why adding ModuleConcatenationPlugin causes watch mode to stop. It’s not just me: there is already an issue on Github and many users have run into this problem. In addition, ModuleConcatenationPlugin breaks Hot Module Replacement. </p>\n<p>Actually, adding a new plugin and a new compiler option is so typical of webpack and our whole Javascript ecosystem!</p>\n<p>This matter was recently raised in a small Twitter thread, where Dan Abramov once again claimed that the less configuration, the better.\nQuote:</p>\n<p>Libraries shouldn’t ask users to modify configs. This is unsustainable and often very hard to compose. Very hostile to beginners.\nBeing official, Create React App makes it harder for those libraries to justify this. Helping move ecosystem to less config solutions.</p>\n<p>End quote.</p>\n<p>Getting back to webpack itself.</p>\n<p>One of webpack core developers, Sean Larkin, wrote in his blog that he is getting a new job and will join Microsoft in two weeks to work on Developer Tools for Edge browser! I’m not sure what his previous job was - I may have seen finance industry mentioned somewhere. I do like this kind of transition: if Sean used to work on a project for finance and devise utilities for us developers as a pastime, now he can work on development utilities full-time. As Sean pointed out in his blog, he will have more time to dedicate to webpack in particular.</p>\n<p>As for me, to keep things interesting, along with upgrading to webpack 3, I’ve tested the new pnpm 1.0 package manager release. I have already talked about its specifics compared to npm and yarn in one of the earlier episodes of “5 minutes of React”. For instance, rather than copying files to the node_modules folder, pnpm package manager creates hard links to its cache. This saves a considerable amount of space if multiple projects are using the same packages.</p>\n<p>So I deleted node_modules, added webpack 3.0 to package.json, and launched pnpm install - and it’s impressively fast!</p>\n<p>On the downside, I noticed that the “pnpm outdated” results in the same output as “npm outdated”, which means all my packages are linked and it’s not clear which versions are in fact up-to date.\nI had to use an external tool: npm-check.\nThere is a corresponding ticket on Github issues and looking forward “pnpm outdated” command to be fixed.</p>\n<p>After the installation pnpm generated a shrinkwrap.yaml file for me. To check how shrinkwrap.yaml works for second installation, I deleted node_modules and executed a “time pnpm install” command. The second installation took 4.5 seconds, out of which the packages themselves were linked in about a second, while the rest of the time was spent on webpack post-install scripts, uglifyjs-webpack-plugin, and fsevents.</p>\n<p>I even tried installing the packages in offline mode, just turning off Wi-Fi, then delete node_modules and run “pnpm install” again. The packages got installed just as fast (in a little over a second), but then the fsevents installation script froze while downloading binaries for my operating system.</p>\n<p>How will pnpm develop further on? In a blog post about the version 1.0 there are a few paragraphs shedding some light on this matter.</p>\n<p>First of all, even faster speed! If the packages are already downloaded into cache, pnpm install should be done in no longer than a second.</p>\n<p>Secondly, although the hard link and symlink approach makes it even faster than yarn, there are a few edge cases where yarn still excels. There are plans to handle this so that in the end pnpm is faster in any circumstances.    </p>\n<p>Thirdly, pnpm code base should be simplified, as currently contributing to it is rather complicated.</p>\n<p>Finally, a PR campaign is required (PR as in publicity, not Pull Request). Although pnpm is public for a longer period of time than Yarn, it is far less popular. So more articles, more documentation, and more interesting tools will be created to promote pnpm. Let’s make our awesome list huge!</p>\n<p>The installation is very straightforward: “npm install -g pnpm” - give it a try after this episode!</p>\n<p>But I didn’t stop here. As soon as I upgraded to webpack 3 via pnpm, I realized that TypeScript 2.4 was already out! Dynamic import, string enums, and a some type inference improvements, which are, as always, accompanied by an excellent description and examples in the Typescript blog. Everything worked out of the box in my project after I upgraded to Typescript 2.4.</p>\n<p>All in all, an upgrade of three tools at once to their new cutting-edge versions didn’t bring me any trouble (apart from the broken watch mode in webpack with ModuleConcatenationPlugin). </p>\n<p>Finally, just before recording this episode, I decided to take a look at the isfiberreadyyet.com page - and there are just 4 warning messages left to be fixed! </p>\n<p>Code with React and prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/331989237&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\n- https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b\n- https://twitter.com/dan_abramov/status/880457799272210432\n- https://medium.com/@TheLarkInn/leaving-for-microsoft-4f386c458693\n- https://medium.com/pnpm/pnpm-version-1-is-out-935a07af914\n- https://github.com/pnpm/awesome-pnpm\n- https://blogs.msdn.microsoft.com/typescript/2017/06/27/announcing-typescript-2-4/\n- http://isfiberreadyyet.com/\n\n\n',frontmatter:{title:"#12 - webpack 3.0.0, pnpm 1.0, TypeScript 2.4",date:"July 6, 2017"}},next:{fields:{slug:"/014-preact-rocks/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/339823001&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>Some of the latest news from the Preact world: the mobile version of Uber website uses Preact as well as the new Transformers promo site, and the author of Preact gave a great talk called “Preact: Into the void 0” at JSConf EU 2017. I will also share my impressions of an egghead.io course and take a look at preact-cli, a tool for quick PWA app creation.</p>\n<ul>\n<li><a href="https://preactjs.com/">https://preactjs.com/</a></li>\n<li><a href="https://eng.uber.com/m-uber/">https://eng.uber.com/m-uber/</a></li>\n<li><a href="http://www.transformersmovie.com/">http://www.transformersmovie.com/</a></li>\n<li><a href="https://youtu.be/LY6y3HbDVmg">https://youtu.be/LY6y3HbDVmg</a></li>\n<li><a href="https://egghead.io/courses/up-and-running-with-preact">https://egghead.io/courses/up-and-running-with-preact</a></li>\n<li><a href="https://github.com/developit/preact-cli">https://github.com/developit/preact-cli</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>Recently a poll was conducted on JavaScriptDaily Twitter, and the question was “Do you know what “Preact” is?“. Nearly 4000 people replied with the following results: 10% already use Preact, 46% have heard about the library, So it rings a bell for 56% of all respondents. The rest have either seen mentions of it without going into details or have no idea about Preact at all.</p>\n<p>Meanwhile, an article published on the Uber blog tells the story of how a mobile version of their website m.uber.com was created, which is, in fact, a progressive web application powered by Preact and Redux. It’s a story of building a small and fast web application while keeping the entire functionality for getting an Uber ride. In the end, the whole app fit into 50 Kb after gzip.</p>\n<p>I wonder if they are using preact-compat compatibility layer and standard react-redux bindings, or maybe, instead of a compatibility layer, they work with pure Preact and preact-redux bindings. Though I didn’t manage to find the word “compat” anywhere in the minified code on their site.</p>\n<p>By the way, the promo site for the latest Transformers movie is also built on Preact.</p>\n<p>This week I finally had time to watch a talk called “Preact: Into the void 0” that Jason Miller, the author of the library, gave at JSConf EU 2017.</p>\n<p>It is just 27 minutes long, with good information density and no rambling - a superb talk indeed! Jason showed how JSX is translated into common function calls which result in simple JavaScript objects describing the virtual DOM structure. He also demonstrated how to write a basic renderer that creates a real DOM based on a virtual one and gave a thorough explanation of the diff algorithm.  He wrapped up the speech revealing some performance optimization techniques for working with DOM and mentioned a few profiling tools he used:  Chrome DevTools, ESBench.com, and benchmark.js.</p>\n<p>Definitely a must-watch!</p>\n<p>Inspired by this video, I found some time to watch the Preact course at egghead.io that I mentioned a few episodes ago. However, it turned out to be too basic. Essentially it’s an introduction to React with a couple of examples specific to Preact. It once again goes over what functional, stateless and stateful components are and how to query data in componentDidMount, with a few basic router and Redux examples. If you are a confident React user who wants to get to know Preact, a better choice would be to take 15 minutes and skim through the documentation on Preact website, instead of spending a whole hour on this video course. Or take it even further and watch the talk “Preact: Into the void 0”, it gets pretty hardcore. </p>\n<p>Moving on, I’ve decided to try out Preact-cli, a console tool for launching a Preact project quickly, and not just any Preact project, but a full-fledged Progressive Web App:</p>\n<ul>\n<li>Lighthouse rates its performance at 100 points out of 100.</li>\n<li>Its features include:\nfully automatic code splitting for routes,\nservice workers and offline caching,\nserver-side rendering,\nCSS Modules, LESS, Sass, Stylus, and Autoprefixer (the only thing missing is PostCSS, although it is available via a plugin). </li>\n<li>There are also debug helpers and hot module replacement. </li>\n</ul>\n<p>Judging by the description, Preact CLI looks way cooler than Create React App.\nIt even comes with a plugin system!</p>\n<p>As soon as the global preact-cli package was installed, I ran preact create myapp and waited for all the dependencies to get installed under the hood. It took well over 10 minutes and the terminal froze in the end. I’d blame the terminal application: in my case, it was Hyper, which is written in JavaScript on top of Electron. Actually I have quite a few reasons to complain about Hyper, so I made another attempt in iTerm2. It took a while again, but this time it worked out, and 136 megabytes of dependencies were installed.</p>\n<p>The demo project is rather straightforward: three routes broken down into tidy components. I ran a production build with a preact build command and got a separate js file for each route, plus a 5 kilobytes polyfills.js containing polyfills for fetch and Promise, then a 19 kilobytes bundle.js and a 4 kilobytes sw.js (some service workers stuff I think). Here I’m referring to file size on the hard drive before gzip compression. </p>\n<p>I haven’t yet built a proper project with Preact CLI, but I’m really looking forward to it. To me, the most intriguing part is TypeScript support. There is a plugin for TypeScript support, but I have not tried it yet. A milestone for version 2.0 has already been created on GitHub. There are plenty of commits and a lot of action every day. </p>\n<p>Now a question in the spirit of Javascript fatigue: what is the best choice for creating a sleek offline-first PWA site - Preact CLI or Gatsby, which I told you about in the previous episode? I feel like Gatsby is a higher-level construct on top of React and it has more conventions, which eventually helps spend less time on development (if you figure out how to use it, of course). On the other hand, Preact CLI is a lower-level solution closer to the code, so it might be more flexible. But I’m just speculating for now. Feel free to share your experience in the comments if you have used Preact CLI or Gatsby.</p>\n<p>Code with Preact CLI and prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/339823001&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\nSome of the latest news from the Preact world: the mobile version of Uber website uses Preact as well as the new Transformers promo site, and the author of Preact gave a great talk called "Preact: Into the void 0" at JSConf EU 2017. I will also share my impressions of an egghead.io course and take a look at preact-cli, a tool for quick PWA app creation.\n\n- https://preactjs.com/\n- https://eng.uber.com/m-uber/\n- http://www.transformersmovie.com/\n- https://youtu.be/LY6y3HbDVmg\n- https://egghead.io/courses/up-and-running-with-preact\n- https://github.com/developit/preact-cli\n\n',frontmatter:{title:"#14 - Preact Rocks!",date:"August 28, 2017"}}}}}});
//# sourceMappingURL=path---013-gastbyjs-5dd74c5cadb0432cb768.js.map