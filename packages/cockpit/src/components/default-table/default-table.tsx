import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sy-cockpit-default-table',
  styleUrl: 'scss/index.scss',
  shadow: false,
})
export class DefaultTable {
  render() {
    return (
      <Host>
        <table>
          <slot></slot>
        </table>
      </Host>
    );
  }
}
