# Inertia on Rails with SSR enabled

 [Ruby on Rails](https://github.com/rails/rails), [Vite](https://github.com/vitejs/vite), and [InertiaJS](https://github.com/inertiajs/inertia-rails) I'd recommend checking out the following files:


- `app/frontend/pages/Dashboard.jsx`: The React component being rendered by the `/` route
- `app/controllers/dashboard_controller.rb`: The controller that handled rendering the root page
- `app/frontend/components/Layout.jsx`: The React component providing the "magic" layout similar to Rails's application layout
- `app/frontend/entrypoints/application.jsx`: The Vite entrypoint that handles initializing InertiaJS



To run locally:

```
bundle install
npm install
./bin/dev

```

To create an SSR build:

```
bin/vite build --ssr
```

To start the SSR node.js server:

```
bin/vite ssr
```

For an example on how to enable SSR for an existing app, [see this example in PingCRM](https://github.com/ElMassimo/pingcrm-vite/pull/5).
