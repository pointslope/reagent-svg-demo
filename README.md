# Overview

A [Reagent][Reagent] example that demonstrates the following concepts:

* Data binding.
* Component Interaction.
* Components as vars.
* Dynamically created components.
* Light-weight Eventing for code organization.
* [core.async](https://github.com/clojure/core.async) channels.

[View](http://pointslope.github.io/reagent-svg-demo/) the demo!

## TODO

* All interactions should be locked while playing back history.
* Add state serialization

## Running

Install [boot-clj](http://boot-clj.com/).

From the project root run `boot dev`.

In a browser, navigate to [localhost:3000](http://localhost:3000).

## Further Reading

- [This][CircleCi] post references state serialization.
- [Reactjs][Reactjs] Overview.
- [Precursor][Precursorapp] explains how Clojure is used as a design tool.
- [Om][Om] is an alternative Clojurescript React interface.
- [Hoplon][Hoplon] is a Clojurescript SPA framework that leverages [Javelin][Javelin] cells for state change propagation.

## License

Copyright © 2015 Point Slope, LLC

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.

[Reagent]: http://reagent-project.github.io/
[CircleCi]: http://blog.circleci.com/local-state-global-concerns/
[Reactjs]: http://facebook.github.io/react/
[Precursorapp]: https://precursorapp.com/blog/clojure-is-a-product-design-tool
[Om]: https://github.com/omcljs/om
[Hoplon]: http://hoplon.io/
[Javelin]: https://github.com/tailrecursion/javelin
