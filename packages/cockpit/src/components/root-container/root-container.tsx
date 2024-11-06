import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sy-cockpit-root-container',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class RootContainer {
  render() {
    return (
      <Host>
        <div>
          <sy-cockpit-environment-updater>
          </sy-cockpit-environment-updater>
        </div>
        <div><sy-cockpit-environments-table></sy-cockpit-environments-table></div>
      </Host>
    );
  }
}
