# snowpack-plugin-copy

## Install

```shell
npm install snowpack-plugin-copy -D
```

## Usage

```js
module.exports = {
  plugins: [
    [
      'snowpack-plugin-copy',
      {
        patterns: [
          {
            source: 'source/*.jpg',
            destination: 'destination',
            options: {},
          },
          {
            source: ['source/*.png', '!source/goat.png'],
            destination: 'destination',
          },
        ],
      },
    ],
  ],
};
```

## API

The same as [cpy](https://github.com/sindresorhus/cpy).
