/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  Link,
  MenuItems,
  ReferenceKeys,
} from './definitions';


export namespace Components {

  interface DocsCode {
    'language': string;
  }
  interface DocsCodeAttributes extends StencilHTMLAttributes {
    'language'?: string;
  }

  interface CommandCursor {
    'blink': boolean;
  }
  interface CommandCursorAttributes extends StencilHTMLAttributes {
    'blink'?: boolean;
  }

  interface CommandLine {
    'nobuttons': boolean;
  }
  interface CommandLineAttributes extends StencilHTMLAttributes {
    'nobuttons'?: boolean;
  }

  interface CommandOutput {}
  interface CommandOutputAttributes extends StencilHTMLAttributes {}

  interface CommandPrompt {}
  interface CommandPromptAttributes extends StencilHTMLAttributes {}

  interface DocsDocument {
    'path': string;
  }
  interface DocsDocumentAttributes extends StencilHTMLAttributes {
    'path'?: string;
  }

  interface DocsHeader {}
  interface DocsHeaderAttributes extends StencilHTMLAttributes {}

  interface DocsMenu {}
  interface DocsMenuAttributes extends StencilHTMLAttributes {}

  interface DocsNav {
    'items': MenuItems;
  }
  interface DocsNavAttributes extends StencilHTMLAttributes {
    'items'?: MenuItems;
  }

  interface DocsPagination {
    'document': Document;
  }
  interface DocsPaginationAttributes extends StencilHTMLAttributes {
    'document'?: Document;
  }

  interface DocsReference {
    'data': any[];
    'keys': ReferenceKeys;
  }
  interface DocsReferenceAttributes extends StencilHTMLAttributes {
    'data'?: any[];
    'keys'?: ReferenceKeys;
  }

  interface DocsRoot {}
  interface DocsRootAttributes extends StencilHTMLAttributes {}

  interface DocsSearch {}
  interface DocsSearchAttributes extends StencilHTMLAttributes {}

  interface DocsTableOfContents {
    'basepath': string;
    'label': string;
    'links': Link[];
  }
  interface DocsTableOfContentsAttributes extends StencilHTMLAttributes {
    'basepath'?: string;
    'label'?: string;
    'links'?: Link[];
  }

  interface DocsTabs {
    'initial': string;
    'tabs': string;
  }
  interface DocsTabsAttributes extends StencilHTMLAttributes {
    'initial'?: string;
    'tabs'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'DocsCode': Components.DocsCode;
    'CommandCursor': Components.CommandCursor;
    'CommandLine': Components.CommandLine;
    'CommandOutput': Components.CommandOutput;
    'CommandPrompt': Components.CommandPrompt;
    'DocsDocument': Components.DocsDocument;
    'DocsHeader': Components.DocsHeader;
    'DocsMenu': Components.DocsMenu;
    'DocsNav': Components.DocsNav;
    'DocsPagination': Components.DocsPagination;
    'DocsReference': Components.DocsReference;
    'DocsRoot': Components.DocsRoot;
    'DocsSearch': Components.DocsSearch;
    'DocsTableOfContents': Components.DocsTableOfContents;
    'DocsTabs': Components.DocsTabs;
  }

  interface StencilIntrinsicElements {
    'docs-code': Components.DocsCodeAttributes;
    'command-cursor': Components.CommandCursorAttributes;
    'command-line': Components.CommandLineAttributes;
    'command-output': Components.CommandOutputAttributes;
    'command-prompt': Components.CommandPromptAttributes;
    'docs-document': Components.DocsDocumentAttributes;
    'docs-header': Components.DocsHeaderAttributes;
    'docs-menu': Components.DocsMenuAttributes;
    'docs-nav': Components.DocsNavAttributes;
    'docs-pagination': Components.DocsPaginationAttributes;
    'docs-reference': Components.DocsReferenceAttributes;
    'docs-root': Components.DocsRootAttributes;
    'docs-search': Components.DocsSearchAttributes;
    'docs-table-of-contents': Components.DocsTableOfContentsAttributes;
    'docs-tabs': Components.DocsTabsAttributes;
  }


  interface HTMLDocsCodeElement extends Components.DocsCode, HTMLStencilElement {}
  var HTMLDocsCodeElement: {
    prototype: HTMLDocsCodeElement;
    new (): HTMLDocsCodeElement;
  };

  interface HTMLCommandCursorElement extends Components.CommandCursor, HTMLStencilElement {}
  var HTMLCommandCursorElement: {
    prototype: HTMLCommandCursorElement;
    new (): HTMLCommandCursorElement;
  };

  interface HTMLCommandLineElement extends Components.CommandLine, HTMLStencilElement {}
  var HTMLCommandLineElement: {
    prototype: HTMLCommandLineElement;
    new (): HTMLCommandLineElement;
  };

  interface HTMLCommandOutputElement extends Components.CommandOutput, HTMLStencilElement {}
  var HTMLCommandOutputElement: {
    prototype: HTMLCommandOutputElement;
    new (): HTMLCommandOutputElement;
  };

  interface HTMLCommandPromptElement extends Components.CommandPrompt, HTMLStencilElement {}
  var HTMLCommandPromptElement: {
    prototype: HTMLCommandPromptElement;
    new (): HTMLCommandPromptElement;
  };

  interface HTMLDocsDocumentElement extends Components.DocsDocument, HTMLStencilElement {}
  var HTMLDocsDocumentElement: {
    prototype: HTMLDocsDocumentElement;
    new (): HTMLDocsDocumentElement;
  };

  interface HTMLDocsHeaderElement extends Components.DocsHeader, HTMLStencilElement {}
  var HTMLDocsHeaderElement: {
    prototype: HTMLDocsHeaderElement;
    new (): HTMLDocsHeaderElement;
  };

  interface HTMLDocsMenuElement extends Components.DocsMenu, HTMLStencilElement {}
  var HTMLDocsMenuElement: {
    prototype: HTMLDocsMenuElement;
    new (): HTMLDocsMenuElement;
  };

  interface HTMLDocsNavElement extends Components.DocsNav, HTMLStencilElement {}
  var HTMLDocsNavElement: {
    prototype: HTMLDocsNavElement;
    new (): HTMLDocsNavElement;
  };

  interface HTMLDocsPaginationElement extends Components.DocsPagination, HTMLStencilElement {}
  var HTMLDocsPaginationElement: {
    prototype: HTMLDocsPaginationElement;
    new (): HTMLDocsPaginationElement;
  };

  interface HTMLDocsReferenceElement extends Components.DocsReference, HTMLStencilElement {}
  var HTMLDocsReferenceElement: {
    prototype: HTMLDocsReferenceElement;
    new (): HTMLDocsReferenceElement;
  };

  interface HTMLDocsRootElement extends Components.DocsRoot, HTMLStencilElement {}
  var HTMLDocsRootElement: {
    prototype: HTMLDocsRootElement;
    new (): HTMLDocsRootElement;
  };

  interface HTMLDocsSearchElement extends Components.DocsSearch, HTMLStencilElement {}
  var HTMLDocsSearchElement: {
    prototype: HTMLDocsSearchElement;
    new (): HTMLDocsSearchElement;
  };

  interface HTMLDocsTableOfContentsElement extends Components.DocsTableOfContents, HTMLStencilElement {}
  var HTMLDocsTableOfContentsElement: {
    prototype: HTMLDocsTableOfContentsElement;
    new (): HTMLDocsTableOfContentsElement;
  };

  interface HTMLDocsTabsElement extends Components.DocsTabs, HTMLStencilElement {}
  var HTMLDocsTabsElement: {
    prototype: HTMLDocsTabsElement;
    new (): HTMLDocsTabsElement;
  };

  interface HTMLElementTagNameMap {
    'docs-code': HTMLDocsCodeElement
    'command-cursor': HTMLCommandCursorElement
    'command-line': HTMLCommandLineElement
    'command-output': HTMLCommandOutputElement
    'command-prompt': HTMLCommandPromptElement
    'docs-document': HTMLDocsDocumentElement
    'docs-header': HTMLDocsHeaderElement
    'docs-menu': HTMLDocsMenuElement
    'docs-nav': HTMLDocsNavElement
    'docs-pagination': HTMLDocsPaginationElement
    'docs-reference': HTMLDocsReferenceElement
    'docs-root': HTMLDocsRootElement
    'docs-search': HTMLDocsSearchElement
    'docs-table-of-contents': HTMLDocsTableOfContentsElement
    'docs-tabs': HTMLDocsTabsElement
  }

  interface ElementTagNameMap {
    'docs-code': HTMLDocsCodeElement;
    'command-cursor': HTMLCommandCursorElement;
    'command-line': HTMLCommandLineElement;
    'command-output': HTMLCommandOutputElement;
    'command-prompt': HTMLCommandPromptElement;
    'docs-document': HTMLDocsDocumentElement;
    'docs-header': HTMLDocsHeaderElement;
    'docs-menu': HTMLDocsMenuElement;
    'docs-nav': HTMLDocsNavElement;
    'docs-pagination': HTMLDocsPaginationElement;
    'docs-reference': HTMLDocsReferenceElement;
    'docs-root': HTMLDocsRootElement;
    'docs-search': HTMLDocsSearchElement;
    'docs-table-of-contents': HTMLDocsTableOfContentsElement;
    'docs-tabs': HTMLDocsTabsElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
