# Not 404

1) Start astro dev
2) Go to http://localhost:4321/en/ or http://localhost:4321/de/
3) This is 200, return /pages/[locale]/index.astro
4) Go to http://localhost:4321/en/my-profile or http://localhost:4321/de/my-profile
5) This is 200, return /pages/[locale]/my-profile.astro
6) Go to http://localhost:4321/asdf/
7) This is 404, return /pages/[locale]/index.astro
8) Go to http://localhost:4321/asdf/my-profile
9) This is 404, return /pages/[locale]/my-profile.astro
10) If we go to a route that is 404, and is wrong in something else than the [locale] parameter, for example http://localhost:4321/en/asdf
11) It is 404 and returns /pages/404.astro