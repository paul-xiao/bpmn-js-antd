import TestContainer from 'mocha-test-container-support';

import { expect } from 'chai';

import {
  insertCSS
} from 'bpmn-js/test/helper';

import diagramCSS from 'diagram-js/assets/diagram-js.css';
import bpmnFontCSS from 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';

insertCSS('diagram-js.css', diagramCSS);
insertCSS('bpmn-font.css', bpmnFontCSS);

insertCSS('test-container.css', `
  .test-container {
    display: flex;
    flex-direction: column;
  }

  .test-content-container {
    flex: 1;
  }

  .djs-label {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
  }
`);

import Modeler from 'bpmn-js/lib/Modeler';

import antdRendererModule from '../lib';

import processXML from './pizza-collaboration.bpmn';


describe('AntdRenderer', function() {

  this.timeout(10000);


  var container;

  beforeEach(function() {
    container = TestContainer.get(this);
  });


  it('should import process with default Ant Design theme', async function() {

    var modeler = new Modeler({
      container: container,
      textRenderer: {
        defaultStyle: {
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontWeight: 'normal',
          fontSize: 14,
          lineHeight: 1.5714
        },
        externalStyle: {
          fontSize: 12,
          lineHeight: 1.5714
        }
      },
      additionalModules: [
        antdRendererModule
      ]
    });

    const {
      warnings
    } = await modeler.importXML(processXML);

    expect(warnings).to.have.length(0);
  });


  it('should import process with custom theme overrides', async function() {

    var modeler = new Modeler({
      container: container,
      textRenderer: {
        defaultStyle: {
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontWeight: 'normal',
          fontSize: 14,
          lineHeight: 1.5714
        },
        externalStyle: {
          fontSize: 12,
          lineHeight: 1.5714
        }
      },
      antdRenderer: {
        theme: {
          primaryColor: '#722ED1',
          errorColor: '#F5222D'
        }
      },
      additionalModules: [
        antdRendererModule
      ]
    });

    const {
      warnings
    } = await modeler.importXML(processXML);

    expect(warnings).to.have.length(0);
  });

});
