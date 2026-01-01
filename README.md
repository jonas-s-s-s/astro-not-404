# Not 404

1) Start astro dev
2) Go to http://localhost:4321/en/ or http://localhost:4321/de/
3) Response header has code 200, returns /pages/[locale]/index.astro
4) Go to http://localhost:4321/en/my-profile or http://localhost:4321/de/my-profile
5) Response header has code 200, returns /pages/[locale]/my-profile.astro
6) Go to http://localhost:4321/asdf/
7) Response header has code 404, returns /pages/[locale]/index.astro, even though the [locale] parameter is not a valid language code specified in astro.config.mjs, should probably return /pages/404.astro so it doesn't appear as if it loaded succesfully
8) Go to http://localhost:4321/asdf/my-profile
9) Response header has code 404, returns /pages/[locale]/my-profile.astro, again should probably return the /pages/404.astro page
10) If we go to a route that is 404, and is wrong in something else than the [locale] parameter, for example http://localhost:4321/en/asdf
11) Response header has code 404, and returns /pages/404.astro
