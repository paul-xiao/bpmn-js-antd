# bpmn-js-antd

An [Ant Design](https://ant.design/) style renderer for [bpmn-js](https://github.com/bpmn-io/bpmn-js).

Renders BPMN 2.0 diagrams with clean, professional Ant Design aesthetics: rounded corners, soft shadows, blue-white palette, and the standard Ant Design font stack.

## Installation

```
npm install bpmn-js-antd
```

## Usage

```javascript
import BpmnModeler from 'bpmn-js/lib/Modeler';
import antdRendererModule from 'bpmn-js-antd';

const modeler = new BpmnModeler({
  container: '#canvas',
  textRenderer: {
    defaultStyle: {
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontSize: 14,
      lineHeight: 1.5714
    }
  },
  additionalModules: [
    antdRendererModule
  ]
});
```

## Theme Customization

Override any Ant Design theme token:

```javascript
const modeler = new BpmnModeler({
  container: '#canvas',
  antdRenderer: {
    theme: {
      primaryColor: '#722ED1',
      errorColor: '#F5222D',
      borderRadius: 8
    }
  },
  additionalModules: [
    antdRendererModule
  ]
});
```

## Theme Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `primaryColor` | `#1677FF` | Brand color, used for Start Events, Gateways |
| `errorColor` | `#FF4D4F` | Used for End Events, Error events |
| `warningColor` | `#FAAD14` | Used for Timer, Intermediate events |
| `infoColor` | `#1677FF` | Used for Message events |
| `colorBorder` | `#D9D9D9` | Default border color |
| `colorBgContainer` | `#FFFFFF` | Default fill color |
| `taskBorderRadius` | `8` | Border radius for Tasks/Activities |
| `colorText` | `rgba(0,0,0,0.88)` | Primary text color |

See `lib/AntdTheme.js` for the complete list.

## License

MIT
