# sniffles-client

## Development

1. Clone the project:

```
git clone https://github.com/shaunsaker/sniffles-client
```

2. Install dependencies:

```
yarn
```

3. Run the app:

```
yarn run dev
```

4. Do some work.

5. Create a PR.

On PR approval and merge into master:

6. yarn run publish\

### Upgrade dependencies

1. Run update script:

```
yarn run update-deps
```

## Storybook

```
yarn run storybook
```

## Export

Add the `build-storybook` step only if you want to deploy your storybook alongside your app.

Add the `export` step only if you want to deploy a static site, that is, a site that does not require a node.js server to run it.

```
yarn run build
yarn run build-storybook
yarn run export
```

In the `export` step, `robots.txt` and `sitemap.xml` will be created and assets will be copied from `./src/public` to `./dist`.

You will deploy the dist folder.

## Hosting

Make sure that you've built and exported the app as above.

```
yarn run deploy
```

## Backup Database

The development environment's database is seen as the source of truth for all the other environments. This is backed up as needed.

```
yarn run db-backup
```

## Restore Database

All environments will be restored with the database.

```
yarn run db-restore
```

## Testing

`NOTE: This is not yet implemented.`

```
yarn run test
```
