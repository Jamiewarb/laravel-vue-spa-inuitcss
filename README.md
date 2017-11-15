# Portal

## Features

- Laravel 5.5 + Vue + Vue Router + Vuex
- Pages with custom layouts
- Login, register and password reset
- Skeleton setup of [INUITCSS 6.0.0_beta5](https://github.com/inuitcss/inuitcss)
- Integration with [vform](https://github.com/cretueusebiu/vform)
- Authentication with [JWT](https://github.com/tymondesigns/jwt-auth)
- Webpack with [laravel-mix](https://github.com/JeffreyWay/laravel-mix)
- SVG icons with [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader)

## Installation

- `git clone git@github.com:Jamiewarb/laravel-vue-spa-inuitcss`
- `cd new-portal`
- `cp .env.example .env`
- `composer install`
- `php artisan key:generate`
- `php artisan jwt:secret`
- Edit `.env` and set your database connection details
- `php artisan migrate`
- `yarn install | npm install`

## Usage

#### Development

```bash
# build and watch
yarn run watch

# serve with hot reloading
yarn run hot
```

#### Production

```bash
yarn run production
```


## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.
