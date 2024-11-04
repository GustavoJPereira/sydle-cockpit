import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sy-cockpit-version-tag',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class VersionTag {
  render() {
    return (
      <Host>
      <slot></slot>
      </Host>
    );
  }
}
