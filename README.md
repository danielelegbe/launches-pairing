# SpaceX Launches

To run the application, run `yarn dev` in the root directory.
To run the tests in the terminal, run `yarn test` in the root directory.
To open cypress, run `yarn cy:open` in the root directory. Click "Component testing" to view the LaunchCard component 
test.

## Technologies

### SWR
This is a simple and lightweight data fetching library I used to get the launches data from the SpaceX api. Nowadays, I
tend to stay away from making api calls in a useEffect since React 18, and instead use a library like SWR to handle it
instead. One thing to note - Even though this is Next.js app, I could have made the api call from the server instead of
the client, but I remembered from our chat that you mentioned you're migrating away from Next.js so I imagine this would
probably be what your api requests would look like once you've migrated.

### Chakra UI
I used Chakra UI for the styling of the application. This is one of my favourite libraries for styling React applications
alongside Tailwind. Chakra UI comes with a lot of components out of the box, and it's easy to use and style via props.

### Cypress
For testing of the components, I decided to use Cypress and Cypress testing library instead of the usualy Jest and React
Testing Library. My main problem with Jest is that it's quite hard to debug tests as you often have to either use the
debugger or add console.logs to see what's going on. Cypress has more boilerplate and requires a bit of setup, but it
is a lot easier to debug, as you can see the components in its GUI. 
