
# Shaper

Create background with basic shapes for cross platform with React Native



## Installation

Install my-project with npm

```bash
  npm install @julienbonteweb/shaper
```
or
```bash
  yarn add @julienbonteweb/shaper
```
    
## Usage/Examples

```typescript
import Shaper from '@julienbonteweb/shaper';

// ...

<Shaper
    tileSize={50} seed={['demo']}
    loss={30}
    theme={[ShaperTheme.Basic]}
    colorScheme={{
    shapeColor: ['#F0EAD2', '#DDE5B6'],
    }}
    />

```


## Roadmap

- Add more shapes
- Add more grid option
- Add image with mask option
- Add tests
- Add a lot of optimization (currently it is a bit ... heavy for not so much)


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
