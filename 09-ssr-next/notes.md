# SSR

## Context and what it is

React started out as a client side rendering framework and that's probably the most common case.

So what are the issues with client side rendering?

- It's bad for SEO.
- It takes time to download JavaScript, then parse it in the browser (often underestimated) and then actually execute it and render. (this can be optimized, but will never be as good as directly shipping HTML)

So if we render the page with React already on the server, send it to the client and then let React become active on the client we can tackle both problems -> SSR

Great, so why don't we always use SSR with React?

## Challanges of SSR

### Different environments

Client: DOM, Web Crypto API
Server: Node with it's standard library

Universal/isomopthic libs: swr, react-hook-form
Client only: Leaflet

Opinion: Not the biggest issue, but it can cause some headaches now and then.

### The client really should render exactly the same as the client

This probably is best explained by a bad example:

When you try to guess the resolution or device things might go wrong. Also guessing will get harder because Chrome want's to drop user agents.

See the video yourself here how between second 1 to 2 the layout flips: https://www.youtube.com/watch?v=ayRoFkTisiw

This basically means if you want to get things right you should only rely on media queries to choose between content.

In worst case completely split it:

```jsx
<DesktopMediaQuery>
  <DesktopApp>
</DesktopMediaQuery>
<MobileMediaQuery>
  <MobileApp>
</MobileMediaQuery>
```

- Only for the client you can code-split the Desktop & MobileApp component and only load what's necessary.
- Don't make a global switch between Mobile & App, but make the switch when necessary e.g. only for the navigation.

## Future

> This hits the nail on the head. And is 100% matching our long term thinking. Client-side-only is not sustainable. We need to move more stuff to the server, but without sacrificing seamless composition of interactive pieces.

https://twitter.com/dan_abramov/status/1259614150386425858

So the future is: SSR to achieve the optimal experience.

## Hands On

### Options

### Next

1. Render on Build
2. Render on Request
3. Mixed (e.g. render some parts on build and some during the request)

### Gatsby

1. Render on Build

### Remix

TBD - more info needed

## Next in Detail

- Routes based on files in pages
- using the <Head> component we can have a custom title or meta tags
- client side hydration when using "next/link"

### getServerSideProps Demo

Render on Server

TODO example of logged in user

### getStaticProps & getStaticPaths

Render during build

TODO example of logged in user on a static page

## Future part II

React team (+ Relay team) is experimenting with ways of defining the data requirements together with the component.

One approach were React.block: https://github.com/facebook/react/blob/master/packages/react-reconciler/src/__tests__/ReactBlocks-test.js#L111-L148

But it's already gone.

Something else will come, but it seems until then this blocks the Suspense release.
